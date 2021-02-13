// 创建歌单
import { PlaylistType, RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default (
    query: {
        name: string;
        privacy: 0 | 10;
        type?: PlaylistType;
    } & RequestBaseConfig
) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    const data = {
        name: query.name,
        privacy: query.privacy, //0 为普通歌单，10 为隐私歌单
        type: query.type || 'NORMAL', // NORMAL|VIDEO
    };
    return request('POST', `https://music.163.com/api/playlist/create`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
