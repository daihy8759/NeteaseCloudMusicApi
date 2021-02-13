import { RequestBaseConfig } from '../interface';
import request from '../utils/request';
import { resourceTypeMap } from '../utils/config.json';
import { cookieToJson, jsonToCookie } from '../utils';

export default (
    query: {
        uid: number | string;
        cid: number | string;
        sid: number | string;
        type: number;
    } & RequestBaseConfig
) => {
    const cookieObj = cookieToJson(query.cookie);
    cookieObj['os'] = 'ios';
    cookieObj['appver'] = '8.0.00';
    const type = resourceTypeMap[query.type || 0];
    const threadId = type + query.sid;
    const data = {
        targetUserId: query.uid,
        commentId: query.cid,
        threadId: threadId,
    };
    return request('POST', `https://music.163.com/api/v2/resource/comments/hug/listener`, data, {
        crypto: 'api',
        cookie: jsonToCookie(cookieObj),
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
