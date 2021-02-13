// 转发动态
import { RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default (
    query: {
        forwards: string;
        evId: string | number;
        uid: string | number;
    } & RequestBaseConfig
) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    const data = {
        forwards: query.forwards,
        id: query.evId,
        eventUserId: query.uid,
    };
    return request('POST', `https://music.163.com/weapi/event/forward`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
