// 歌词
import { RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default (query: { id: string | number } & RequestBaseConfig) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    const data = {
        id: query.id,
        lv: -1,
        kv: -1,
        tv: -1,
    };
    return request('POST', `https://music.163.com/api/song/lyric`, data, {
        crypto: 'api',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
