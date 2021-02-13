// 热门歌手
import { MultiPageConfig, RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: MultiPageConfig & RequestBaseConfig) => {
    const data = {
        limit: query.limit || 50,
        offset: query.offset || 0,
        total: true,
    };
    return request('POST', `https://music.163.com/weapi/artist/top`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
