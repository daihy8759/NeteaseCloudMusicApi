// 歌单收藏者
import { MultiPageConfig, RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { id?: string | number } & MultiPageConfig & RequestBaseConfig) => {
    const data = {
        id: query.id,
        limit: query.limit || 20,
        offset: query.offset || 0,
    };
    return request('POST', `https://music.163.com/weapi/playlist/subscribers`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
