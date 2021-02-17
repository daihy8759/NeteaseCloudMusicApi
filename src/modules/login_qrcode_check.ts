// 登录验证
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

type LoginType = '10' | '2';

type QrcodeGen = { type: LoginType; ticket: string } & RequestBaseConfig;

export default async (query: QrcodeGen) => {
    const { type, ticket } = query;
    if (type === '10') {
        const res = await request(
            'GET',
            `https://long.open.weixin.qq.com/connect/l/qrconnect?uuid=${ticket}&_=${Date.now()}`,
            null,
            {
                cookie: query.cookie,
                proxy: query.proxy,
                realIP: query.realIP,
            }
        );
        const matched = res.body.match(/wx_errcode=(\d+).*'(.*)';$/);

        if (!matched) {
            throw Error('Invalid wechat ticket');
        }
        return {
            errorCode: +matched[1],
            code: matched[2],
        };
    } else {
        const res = await request(
            'GET',
            `https://api.weibo.com/oauth2/qrcode_authorize/query`,
            { _rnd: Date.now(), vcode: ticket },
            {
                cookie: query.cookie,
                proxy: query.proxy,
                realIP: query.realIP,
            }
        );
        const body = JSON.parse(res.body);
        return {
            status: body.status,
            url: res.url,
        };
    }
};
