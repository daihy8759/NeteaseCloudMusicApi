// 热门评论
import { CommentType, MultiPageConfig, RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import { resourceTypeMap } from '../utils/config.json';
import request from '../utils/request';

export default (
    query: {
        id: string | number;
        type: CommentType;
        before?: string | number;
    } & MultiPageConfig &
        RequestBaseConfig
) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    const type = resourceTypeMap[query.type];
    const data = {
        rid: query.id,
        limit: query.limit || 20,
        offset: query.offset || 0,
        beforeTime: query.before || 0,
    };
    return request('POST', `https://music.163.com/weapi/v1/resource/hotcomments/${type}${query.id}`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
