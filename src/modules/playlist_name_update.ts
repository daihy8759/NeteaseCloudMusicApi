// 更新歌单名
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { id: string | number; name: string } & RequestBaseConfig) => {
    const data = {
        id: query.id,
        name: query.name,
    };
    return request('POST', `https://interface3.music.163.com/eapi/playlist/update/name`, data, {
        crypto: 'eapi',
        cookie: query.cookie,
        proxy: query.proxy,
        url: '/api/playlist/update/name',
        realIP: query.realIP,
    });
};
