// 用户动态
import { RequestBaseConfig } from '../interface';
import { cookieToJson, jsonToCookie } from '../utils';
import request from '../utils/request';

type Param = {
    lasttime?: string | number;
    limit?: string | number;
    uid: string | number;
} & RequestBaseConfig;

export default (query: Param) => {
    const cookieObj = cookieToJson(query.cookie);
    cookieObj['os'] = 'ios';
    cookieObj['appver'] = '8.0.00';
    const data = {
        getcounts: true,
        time: query.lasttime || -1,
        limit: query.limit || 30,
        total: false,
    };
    return request('POST', `https://music.163.com/api/event/get/${query.uid}`, data, {
        crypto: 'api',
        cookie: jsonToCookie(cookieObj),
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
