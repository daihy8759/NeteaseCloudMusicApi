// 生成第三方登录二维码
import { URL } from 'url';
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

type LoginType = '10' | '2';

type QrcodeGen = { type: LoginType } & RequestBaseConfig;

export default async (query: QrcodeGen) => {
    const { type } = query;
    const res = await request(
        'GET',
        `http://music.163.com/api/sns/authorize?snsType=${type}&clientType=web2&callbackType=Login&forcelogin=true`,
        null,
        {
            cookie: query.cookie,
            proxy: query.proxy,
            realIP: query.realIP,
        }
    );
    if (type === '10') {
        const matched = res.body.match(/(\/connect\/qrcode\/[\w-_]+)/);
        if (!matched) {
            throw Error('Failed to generate wechat QRCode.');
        }
        const ticket = matched[1].split('/')[3];
        const url = new URL(res.url);
        return {
            ticket,
            url: `https://open.weixin.qq.com/connect/qrcode/${ticket}`,
            state: url.searchParams.get('state'),
            success: true,
        };
    } else {
        const url = new URL(res.url);
        const state = url.searchParams.get('state');
        const wres = await request(
            'GET',
            `https://api.weibo.com/oauth2/qrcode_authorize/generate`,
            {
                client_id: '301575942',
                redirect_uri: 'http://music.163.com/back/weibo',
                scope: 'friendships_groups_read,statuses_to_me_read,follow_app_official_microblog',
                response_type: 'code',
                state,
                _rnd: +new Date(),
            },
            {
                cookie: query.cookie,
                proxy: query.proxy,
                realIP: query.realIP,
            }
        );
        const body = JSON.parse(wres.body);
        return {
            state,
            ticket: body.vcode,
            url: wres.url,
        };
    }
};
