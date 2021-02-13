import { CommentType, RequestBaseConfig } from '../interface';
import { resourceTypeMap } from '../utils/config.json';
import request from '../utils/request';

export default (
    query: {
        id: string | number;
        parentCommentId: string | number;
        type: CommentType;
        limit?: string | number;
        time?: string | number;
    } & RequestBaseConfig
) => {
    const type = resourceTypeMap[query.type];
    const data = {
        parentCommentId: query.parentCommentId,
        threadId: type + query.id,
        time: query.time || -1,
        limit: query.limit || 20,
    };
    return request('POST', `https://music.163.com/api/resource/comment/floor/get`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
