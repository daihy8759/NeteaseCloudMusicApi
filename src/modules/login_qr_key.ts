import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default async (query: RequestBaseConfig) => {
    const data = {
        type: 1,
    };
    const result = await request('POST', `https://music.163.com/weapi/login/qrcode/unikey`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
    return {
        status: 200,
        body: {
            data: result.body,
            code: 200,
        },
        cookie: result.cookie,
    };
};
