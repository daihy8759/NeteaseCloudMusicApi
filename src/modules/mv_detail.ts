// MV详情
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { mvid?: string | number } & RequestBaseConfig) => {
    const data = {
        id: query.mvid,
    };
    return request('POST', `https://music.163.com/api/v1/mv/detail`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
