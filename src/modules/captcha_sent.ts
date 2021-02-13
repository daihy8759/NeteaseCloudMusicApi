// 发送验证码
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { cellphone: string; ctcode?: string } & RequestBaseConfig) => {
    const data = {
        ctcode: query.ctcode || '86',
        cellphone: query.cellphone,
    };
    return request('POST', `https://music.163.com/weapi/sms/captcha/sent`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
