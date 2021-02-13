// 订阅电台列表
import { MultiPageConfig, RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: MultiPageConfig & RequestBaseConfig) => {
    const data = {
        limit: query.limit || 30,
        offset: query.offset || 0,
        total: true,
    };
    return request('POST', `https://music.163.com/weapi/djradio/get/subed`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
