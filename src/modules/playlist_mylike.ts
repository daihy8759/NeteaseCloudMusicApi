import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        time?: number | string;
        limit: number | string;
    } & RequestBaseConfig
) => {
    const data = {
        time: query.time || '-1',
        limit: query.limit || '12',
    };
    return request('POST', `https://music.163.com/api/mlog/playlist/mylike/bytime/get`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
