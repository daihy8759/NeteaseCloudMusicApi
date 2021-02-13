// 删除歌单
import { RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default (query: { id: string | number } & RequestBaseConfig) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    const data = {
        ids: '[' + query.id + ']',
    };
    return request('POST', `https://music.163.com/weapi/playlist/remove`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
