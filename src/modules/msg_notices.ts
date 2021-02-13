// 通知
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        limit?: string | number;
        lasttime?: string | number;
    } & RequestBaseConfig
) => {
    const data = {
        limit: query.limit || 30,
        time: query.lasttime || -1,
    };
    return request('POST', `https://music.163.com/api/msg/notices`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
