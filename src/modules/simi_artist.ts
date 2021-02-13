// 相似歌手
import { RequestBaseConfig } from '../interface';
import { cookieToJson, jsonToCookie } from '../utils';
import config from '../utils/config.json';
import request from '../utils/request';

export default (query: { id: string | number } & RequestBaseConfig) => {
    const cookieJson = cookieToJson(query.cookie);
    if (!('MUSIC_U' in cookieJson)) {
        cookieJson['MUSIC_A'] = config.anonymous_token;
    }
    const data = {
        artistid: query.id,
    };
    return request('POST', `https://music.163.com/weapi/discovery/simiArtist`, data, {
        crypto: 'weapi',
        cookie: jsonToCookie(cookieJson),
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
