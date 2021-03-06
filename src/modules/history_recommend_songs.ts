// 历史每日推荐歌曲
import { RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default (query: RequestBaseConfig) => {
    query.cookie = addCookieValue('os', 'ios', query.cookie);
    const data = {};
    return request('POST', `https://music.163.com/api/discovery/recommend/songs/history/recent`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
