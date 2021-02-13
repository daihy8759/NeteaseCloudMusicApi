// 注册账号
import md5 from 'md5';
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
        password: md5(query.password),
        nickname: query.nickname,
    };
    return request('POST', `https://music.163.com/api/register/cellphone`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
