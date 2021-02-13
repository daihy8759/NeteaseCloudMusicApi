// 电台个性推荐
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { limit?: string | number } & RequestBaseConfig) => {
    return request(
        'POST',
        `https://music.163.com/api/djradio/personalize/rcmd`,
        {
            limit: query.limit || 6,
        },
        {
            crypto: 'weapi',
            cookie: query.cookie,
            proxy: query.proxy,
            realIP: query.realIP,
        }
    );
};
