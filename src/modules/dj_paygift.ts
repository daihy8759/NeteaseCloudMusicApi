// 付费电台
import { MultiPageConfig, RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: MultiPageConfig & RequestBaseConfig) => {
    const data = {
        limit: query.limit || 30,
        offset: query.offset || 0,
    };
    return request('POST', `https://music.163.com/weapi/djradio/home/paygift/list?_nmclfl=1`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
