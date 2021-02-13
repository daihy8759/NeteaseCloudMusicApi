// 歌手榜
import { RequestBaseConfig, ToplistArtistType } from '../interface';
import request from '../utils/request';

export default (query: { type?: ToplistArtistType } & RequestBaseConfig) => {
    const data = {
        type: query.type || 1,
        limit: 100,
        offset: 0,
        total: true,
    };
    return request('POST', `https://music.163.com/weapi/toplist/artist`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
