// 电台节目详情
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { id: string | number } & RequestBaseConfig) => {
    const data = {
        id: query.id,
    };
    return request('POST', `https://music.163.com/api/dj/program/detail`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
