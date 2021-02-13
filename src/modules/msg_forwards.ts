// @我
import { MultiPageConfig, RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: MultiPageConfig & RequestBaseConfig) => {
    const data = {
        offset: query.offset || 0,
        limit: query.limit || 30,
        total: 'true',
    };
    return request('POST', `https://music.163.com/api/forwards/get`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
