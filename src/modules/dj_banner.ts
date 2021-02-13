// 电台banner
import { RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default (query: RequestBaseConfig) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    return request(
        'POST',
        `https://music.163.com/weapi/djradio/banner/get`,
        {},
        {
            crypto: 'weapi',
            cookie: query.cookie,
            proxy: query.proxy,
            realIP: query.realIP,
        }
    );
};
