// 收藏的专栏
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        limit?: number | string;
        offset?: number | string;
    } & RequestBaseConfig
) => {
    const data = {
        limit: query.limit || 50,
        offset: query.offset || 0,
        total: true,
    };
    return request('POST', `https://music.163.com/api/topic/sublist`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
