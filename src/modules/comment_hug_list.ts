import { RequestBaseConfig } from '../interface';
import { cookieToJson, jsonToCookie } from '../utils';
import { resourceTypeMap } from '../utils/config.json';
import request from '../utils/request';

export default (
    query: {
        page: number | string;
        cursor: number | string;
        idCursor: number | string;
        pageSize?: number | string;
        uid: number;
        cid: number;
        sid: number;
        type: number;
    } & RequestBaseConfig
) => {
    const cookieObj = cookieToJson(query.cookie);
    cookieObj['os'] = 'ios';
    cookieObj['appver'] = '7.3.27';

    query.type = resourceTypeMap[query.type || 0];
    const threadId = query.type + query.sid;
    const data = {
        targetUserId: query.uid,
        commentId: query.cid,
        cursor: query.cursor || '-1',
        threadId: threadId,
        pageNo: query.page || 1,
        idCursor: query.idCursor || -1,
        pageSize: query.pageSize || 100,
    };
    return request('POST', `https://music.163.com/api/v2/resource/comments/hug/list`, data, {
        crypto: 'api',
        cookie: jsonToCookie(cookieObj),
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
