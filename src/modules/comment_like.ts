// 点赞与取消点赞评论
import { CommentType, RequestBaseConfig, SubActionLike } from '../interface';
import { addCookieValue } from '../utils';
import { resourceTypeMap } from '../utils/config.json';
import request from '../utils/request';

export default (
    query: {
        id: string | number;
        type: CommentType;
        t: SubActionLike;
        cid: string | number;
        threadId?: string;
    } & RequestBaseConfig
) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    const type = resourceTypeMap[query.type];
    const data = {
        threadId: type + query.id,
        commentId: query.cid,
    };
    if (type == 'A_EV_2_') {
        data.threadId = query.threadId || '';
    }
    return request('POST', `https://music.163.com/weapi/v1/comment/${query.t}`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
