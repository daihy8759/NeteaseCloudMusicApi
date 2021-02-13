// 国家编码列表
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: RequestBaseConfig) => {
    const data = {};
    return request('POST', `https://interface3.music.163.com/eapi/lbs/countries/v1`, data, {
        crypto: 'eapi',
        cookie: query.cookie,
        proxy: query.proxy,
        url: '/api/lbs/countries/v1',
        realIP: query.realIP,
    });
};
