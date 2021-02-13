// 校验验证码
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        ctcode?: string;
        cellphone: string;
        captcha: string;
    } & RequestBaseConfig
) => {
    const data = {
        ctcode: query.ctcode || '86',
        cellphone: query.cellphone,
        captcha: query.captcha,
    };
    return request('POST', `https://music.163.com/weapi/sms/captcha/verify`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
