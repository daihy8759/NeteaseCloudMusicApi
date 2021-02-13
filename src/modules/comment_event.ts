// 获取动态评论
import { MultiPageConfig, RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        threadId: string;
        before?: string | number;
    } & MultiPageConfig &
        RequestBaseConfig
) => {
    const data = {
        limit: query.limit || 20,
        offset: query.offset || 0,
        beforeTime: query.before || 0,
    };
    return request('POST', `https://music.163.com/weapi/v1/resource/comments/${query.threadId}`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
