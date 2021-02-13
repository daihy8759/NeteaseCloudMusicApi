// 相似用户
import { MultiPageConfig, RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { id: string | number } & MultiPageConfig & RequestBaseConfig) => {
    const data = {
        songid: query.id,
        limit: query.limit || 50,
        offset: query.offset || 0,
    };
    return request('POST', `https://music.163.com/weapi/discovery/simiUser`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
