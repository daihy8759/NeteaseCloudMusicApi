// 电台今日优选
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { page?: string | number } & RequestBaseConfig) => {
    const data = {
        page: query.page || 0,
    };
    return request('POST', `https://music.163.com/weapi/djradio/home/today/perfered`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
