// 电台详情
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        id: number | string;
        limit?: number | string;
        time?: number | string;
    } & RequestBaseConfig
) => {
    const data = {
        time: query.time || '-1',
        id: query.id,
        limit: query.limit || '20',
        total: 'true',
    };
    return request('POST', `https://music.163.com/api/djradio/subscriber`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
