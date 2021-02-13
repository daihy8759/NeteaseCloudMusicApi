// 手机登录
import md5 from 'md5';
import { RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default async (
    query: {
        phone: string;
        countrycode?: string;
        password: string;
        md5_password?: string;
    } & RequestBaseConfig
) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    const data = {
        phone: query.phone,
        countrycode: query.countrycode || '86',
        password: query.md5_password || md5(query.password),
        rememberLogin: 'true',
    };
    let result = await request('POST', `https://music.163.com/weapi/login/cellphone`, data, {
        crypto: 'weapi',
        ua: 'pc',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });

    if (result.body.code === 200) {
        // @ts-ignore
        result = {
            status: 200,
            body: {
                ...result.body,
                cookie: result.cookie,
            },
            cookie: result.cookie,
        };
    }
    return result;
};
