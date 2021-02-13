// 电台评论
import { MultiPageConfig, RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default (
    query: {
        id: string | number;
        before?: string | number;
    } & MultiPageConfig &
        RequestBaseConfig
) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    const data = {
        rid: query.id,
        limit: query.limit || 20,
        offset: query.offset || 0,
        beforeTime: query.before || 0,
    };
    return request('POST', `https://music.163.com/weapi/v1/resource/comments/A_DJ_1_${query.id}`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
