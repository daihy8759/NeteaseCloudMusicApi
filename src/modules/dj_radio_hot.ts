// 类别热门电台
import { MultiPageConfig, RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        cateId: string | number;
    } & MultiPageConfig &
        RequestBaseConfig
) => {
    const data = {
        cateId: query.cateId,
        limit: query.limit || 30,
        offset: query.offset || 0,
    };
    return request('POST', `https://music.163.com/api/djradio/hot`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
