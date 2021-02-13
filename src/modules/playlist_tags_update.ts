// 更新歌单标签
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { id: string | number; tags: string } & RequestBaseConfig) => {
    const data = {
        id: query.id,
        tags: query.tags,
    };
    return request('POST', `https://interface3.music.163.com/eapi/playlist/tags/update`, data, {
        crypto: 'eapi',
        cookie: query.cookie,
        proxy: query.proxy,
        url: '/api/playlist/tags/update',
        realIP: query.realIP,
    });
};
