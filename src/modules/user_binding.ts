import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { uid?: number | string } & RequestBaseConfig) => {
    const data = {};
    return request('POST', `https://music.163.com/api/v1/user/bindings/${query.uid}`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
