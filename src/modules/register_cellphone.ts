// 注册账号
import crypto from 'crypto';
import { RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default (
    query: {
        captcha: string;
        phone: string;
        password: string;
        nickname: string;
    } & RequestBaseConfig
) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    const data = {
        captcha: query.captcha,
        phone: query.phone,
        password: crypto.createHash('md5').update(query.password).digest('hex'),
        nickname: query.nickname,
    };
    return request('POST', `https://music.163.com/api/register/cellphone`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
