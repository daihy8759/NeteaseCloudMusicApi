// 电台推荐类型
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: RequestBaseConfig) => {
    return request(
        'POST',
        `https://music.163.com/weapi/djradio/home/category/recommend`,
        {},
        {
            crypto: 'weapi',
            cookie: query.cookie,
            proxy: query.proxy,
            realIP: query.realIP,
        }
    );
};
