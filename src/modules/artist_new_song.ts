import { RequestBaseConfig } from '../interface';
import { cookieToJson, jsonToCookie } from '../utils';
import request from '../utils/request';

type Param = {
    limit?: number | string;
    before?: number | string;
} & RequestBaseConfig;

export default (query: Param) => {
    const cookieObj = cookieToJson(query.cookie);
    cookieObj['os'] = 'ios';
    cookieObj['appver'] = '8.0.00';
    const data = {
        limit: query.limit || 20,
        startTimestamp: query.before || Date.now(),
    };
    return request('POST', `https://music.163.com/api/sub/artist/new/works/song/list`, data, {
        crypto: 'weapi',
        cookie: jsonToCookie(cookieObj),
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
