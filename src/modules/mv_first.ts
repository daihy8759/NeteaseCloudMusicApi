// 最新MV
import { MvArea, RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { area?: MvArea; limit?: string | number } & RequestBaseConfig) => {
    const data = {
        // 'offset': query.offset || 0,
        area: query.area || '',
        limit: query.limit || 30,
        total: true,
    };
    return request('POST', `https://interface.music.163.com/weapi/mv/first`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
