// 热门搜索
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: RequestBaseConfig) => {
    const data = {
        type: 1111,
    };
    return request('POST', `https://music.163.com/weapi/search/hot`, data, {
        crypto: 'weapi',
        ua: 'mobile',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
