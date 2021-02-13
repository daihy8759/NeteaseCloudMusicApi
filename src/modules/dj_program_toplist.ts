// 电台节目榜
import { MultiPageConfig, RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: MultiPageConfig & RequestBaseConfig) => {
    const data = {
        limit: query.limit || 100,
        offset: query.offset || 0,
    };
    return request('POST', `https://music.163.com/api/program/toplist/v1`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
