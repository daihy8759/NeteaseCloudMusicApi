// 历史每日推荐歌曲详情
import { RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default (query: { date?: string } & RequestBaseConfig) => {
    query.cookie = addCookieValue('os', 'ios', query.cookie);
    const data = {
        date: query.date || '',
    };
    return request('POST', `https://music.163.com/api/discovery/recommend/songs/history/detail`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
