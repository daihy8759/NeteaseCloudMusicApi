// 检测手机号码是否已注册
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { cellphone: string; countrycode: string } & RequestBaseConfig) => {
    const data = {
        cellphone: query.cellphone,
        countrycode: query.countrycode,
    };
    return request('POST', `https://music.163.com/eapi/cellphone/existence/check`, data, {
        crypto: 'eapi',
        cookie: query.cookie,
        proxy: query.proxy,
        url: '/api/cellphone/existence/check',
        realIP: query.realIP,
    });
};
