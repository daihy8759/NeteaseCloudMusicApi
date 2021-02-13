// 评论
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        uid: string | number;
        before?: string | number;
        limit?: string | number;
    } & RequestBaseConfig
) => {
    const data = {
        beforeTime: query.before || '-1',
        limit: query.limit || 30,
        total: 'true',
        uid: query.uid,
    };

    return request('POST', `https://music.163.com/api/v1/user/comments/${query.uid}`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
