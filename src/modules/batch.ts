// 批量请求接口
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { [index: string]: unknown } & RequestBaseConfig) => {
    const data = {
        e_r: true,
    };
    Object.keys(query).forEach((i) => {
        if (/^\/api\//.test(i)) {
            data[i] = query[i];
        }
    });
    return request('POST', `https://music.163.com/eapi/batch`, data, {
        crypto: 'eapi',
        proxy: query.proxy,
        url: '/api/batch',
        cookie: query.cookie,
        realIP: query.realIP,
    });
};
