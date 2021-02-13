// 初始化名字
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { id: string | number; s: number } & RequestBaseConfig) => {
    const data = {
        id: query.id,
        n: 100000,
        s: query.s || 8,
    };
    return request('POST', `https://music.163.com/api/playlist/detail/dynamic`, data, {
        crypto: 'api',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
