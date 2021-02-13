// 操作记录
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

type Param = { data?: { [index: string]: unknown } } & RequestBaseConfig;

export default (query: Param) => {
    return request('POST', `https://music.163.com/weapi/feedback/weblog`, query.data || {}, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
