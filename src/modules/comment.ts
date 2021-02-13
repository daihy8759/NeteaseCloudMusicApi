// 发送与删除评论
import { CommentAction, CommentType, RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import { resourceTypeMap } from '../utils/config.json';
import request from '../utils/request';

export default (
    query: {
        id: string;
        type: CommentType;
        t: CommentAction;
        commentId: string | number;
        content: string;
        threadId?: string;
    } & RequestBaseConfig
) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    const type = resourceTypeMap[query.type];
    const data: any = {
        threadId: query.type + query.id,
    };

    if (type == 'A_EV_2_') {
        data.threadId = query.threadId;
    }
    if (query.t == 'add') {
        data.content = query.content;
    } else if (query.t == 'delete') {
        data.commentId = query.commentId;
    } else if (query.t == 'reply') {
        data.commentId = query.commentId;
        data.content = query.content;
    }
    return request('POST', `https://music.163.com/weapi/resource/comments/${query.t}`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
