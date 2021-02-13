// 关注TA的人(粉丝)
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

type Param = {
    uid: string | number;
    lasttime?: string | number;
    limit?: string | number;
} & RequestBaseConfig;

export default (query: Param) => {
    const data = {
        userId: query.uid,
        time: query.lasttime || -1,
        limit: query.limit || 30,
    };
    return request('POST', `https://music.163.com/eapi/user/getfolloweds/${query.uid}`, data, {
        crypto: 'eapi',
        cookie: query.cookie,
        proxy: query.proxy,
        url: '/api/user/getfolloweds',
        realIP: query.realIP,
    });
};
