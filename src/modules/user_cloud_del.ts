// 云盘歌曲删除
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { id: string | number } & RequestBaseConfig) => {
    const data = {
        songIds: [query.id],
    };
    return request('POST', `https://music.163.com/weapi/cloud/del`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
