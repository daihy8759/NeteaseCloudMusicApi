// 推荐节目
import { MultiPageConfig, RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { type: string } & MultiPageConfig & RequestBaseConfig) => {
    const data = {
        cateId: query.type,
        limit: query.limit || 10,
        offset: query.offset || 0,
    };
    return request('POST', `https://music.163.com/weapi/program/recommend/v1`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
