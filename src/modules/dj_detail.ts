// 电台详情
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { rid: string | number } & RequestBaseConfig) => {
    const data = {
        id: query.rid,
    };
    return request('POST', `https://music.163.com/api/djradio/v2/get`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
