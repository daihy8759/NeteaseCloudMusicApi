// 网易出品
import { MultiPageConfig, RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: MultiPageConfig & RequestBaseConfig) => {
    const data = {
        offset: query.offset || 0,
        limit: query.limit || 30,
    };
    return request('POST', `https://interface.music.163.com/api/mv/exclusive/rcmd`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
