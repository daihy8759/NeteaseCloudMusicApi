// 编辑歌单
import { RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default (
    query: {
        id: string | number;
        name: string;
        desc?: string;
        tags?: string;
    } & RequestBaseConfig
) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    query.desc = query.desc || '';
    query.tags = query.tags || '';
    const data = {
        '/api/playlist/desc/update': `{"id":${query.id},"desc":"${query.desc}"}`,
        '/api/playlist/tags/update': `{"id":${query.id},"tags":"${query.tags}"}`,
        '/api/playlist/update/name': `{"id":${query.id},"name":"${query.name}"}`,
    };
    return request('POST', `https://music.163.com/weapi/batch`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
