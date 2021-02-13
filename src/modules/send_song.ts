// 私信歌曲
import { RequestBaseConfig } from '../interface';
import { cookieToJson, jsonToCookie } from '../utils';
import request from '../utils/request';

export default (query: { id: string | number; msg: string; user_ids: string } & RequestBaseConfig) => {
    const cookieObj = cookieToJson(query.cookie);
    cookieObj['os'] = 'ios';
    cookieObj['appver'] = '8.0.00';
    const data = {
        id: query.id,
        msg: query.msg || '',
        type: 'song',
        userIds: '[' + query.user_ids + ']',
    };
    return request('POST', `https://music.163.com/api/msg/private/send`, data, {
        crypto: 'api',
        cookie: jsonToCookie(cookieObj),
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
