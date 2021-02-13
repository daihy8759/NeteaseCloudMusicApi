import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default async (query: RequestBaseConfig) => {
    const data = {};
    let result = await request('POST', `https://music.163.com/weapi/w/nuser/account/get`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
    if (result.body.code === 200) {
        // @ts-ignore
        result = {
            status: 200,
            body: {
                data: {
                    ...result.body,
                },
            },
            cookie: result.cookie,
        };
    }
    return result;
};