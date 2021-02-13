// 邮箱登录
import md5 from 'md5';
import { RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default async (query: { email: string; password: string; md5_password?: string } & RequestBaseConfig) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    const data = {
        username: query.email,
        password: query.md5_password || md5(query.password),
        rememberLogin: 'true',
    };
    let result = await request('POST', `https://music.163.com/weapi/login`, data, {
        crypto: 'weapi',
        ua: 'pc',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
    if (result.body.code === 502) {
        return {
            status: 200,
            body: {
                msg: '账号或密码错误',
                code: 502,
                message: '账号或密码错误',
            },
        };
    }
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
