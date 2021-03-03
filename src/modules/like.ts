// 红心与取消红心歌曲
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';
import { cookieToJson, jsonToCookie, toBoolean } from '../utils';

export default (
    query: {
        like?: 'true' | 'false' | boolean;
        id: string | number;
        alg?: string;
        time?: string | number;
    } & RequestBaseConfig
) => {
    query.like = toBoolean(query.like);
    const cookieObj = cookieToJson(query.cookie);
    cookieObj['os'] = 'pc';
    cookieObj['appver'] = '2.7.1.198277';
    const data = {
        alg: 'itembased',
        trackId: query.id,
        like: query.like,
        time: '3',
    };
    return request('POST', `https://music.163.com/weapi/radio/like`, data, {
        crypto: 'weapi',
        cookie: jsonToCookie(cookieObj),
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
