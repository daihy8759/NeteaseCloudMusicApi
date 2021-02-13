// 喜欢的歌曲(无序)
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { uid: string | number } & RequestBaseConfig) => {
    const data = {
        uid: query.uid,
    };
    return request('POST', `https://music.163.com/weapi/song/like/get`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
