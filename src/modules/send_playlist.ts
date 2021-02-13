// 私信歌单
import { RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default (
    query: {
        playlist: string | number;
        msg: string;
        user_ids: string;
    } & RequestBaseConfig
) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    const data = {
        id: query.playlist,
        type: 'playlist',
        msg: query.msg,
        userIds: '[' + query.user_ids + ']',
    };
    return request('POST', `https://music.163.com/weapi/msg/private/send`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
