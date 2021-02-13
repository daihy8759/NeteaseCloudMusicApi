import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

type Param = {
    phone: number | string;
    captcha: number | string;
    oldcaptcha: number | string;
    countrycode?: number | string;
} & RequestBaseConfig;

export default (query: Param) => {
    const data = {
        phone: query.phone,
        captcha: query.captcha,
        oldcaptcha: query.oldcaptcha,
        countrycode: query.countrycode || '86',
    };
    return request('POST', `https://music.163.com/api/user/replaceCellphone`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
