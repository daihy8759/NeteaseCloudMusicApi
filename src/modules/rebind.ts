// 更换手机
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        captcha: string;
        phone: string;
        oldcaptcha: string;
        ctcode?: string;
    } & RequestBaseConfig
) => {
    const data = {
        captcha: query.captcha,
        phone: query.phone,
        oldcaptcha: query.oldcaptcha,
        ctcode: query.ctcode || '86',
    };
    return request('POST', `https://music.163.com/api/user/replaceCellphone`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
