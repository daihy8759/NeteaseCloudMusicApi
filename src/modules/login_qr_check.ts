import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default async (
    query: {
        key?: number | string;
    } & RequestBaseConfig
) => {
    const data = {
        key: query.key,
        type: 1,
    };
    try {
        let result = await request('POST', `https://music.163.com/weapi/login/qrcode/client/login`, data, {
            crypto: 'weapi',
            cookie: query.cookie,
            proxy: query.proxy,
            realIP: query.realIP,
        });
        // @ts-ignore
        result = {
            status: 200,
            body: {
                ...result.body,
                cookie: result.cookie,
            },
            cookie: result.cookie,
        };
        return result;
    } catch (error) {
        return {
            status: 200,
            body: {},
        };
    }
};
