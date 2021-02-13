// 电台节目列表
import { MultiPageConfig, RequestBaseConfig } from '../interface';
import { toBoolean } from '../utils';
import request from '../utils/request';

export default (
    query: {
        rid: string | number;
        asc: 'true' | 1 | 'false' | 0;
    } & MultiPageConfig &
        RequestBaseConfig
) => {
    const data = {
        radioId: query.rid,
        limit: query.limit || 30,
        offset: query.offset || 0,
        asc: toBoolean(query.asc),
    };
    return request('POST', `https://music.163.com/weapi/dj/program/byradio`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
