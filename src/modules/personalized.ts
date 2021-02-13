// 推荐歌单
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { limit?: string | number } & RequestBaseConfig) => {
    const data = {
        limit: query.limit || 30,
        // offset: query.offset || 0,
        total: true,
        n: 1000,
    };
    return request('POST', `https://music.163.com/weapi/personalized/playlist`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
