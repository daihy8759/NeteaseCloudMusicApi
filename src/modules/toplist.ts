// 所有榜单介绍
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: RequestBaseConfig) => {
    return request(
        'POST',
        `https://music.163.com/api/toplist`,
        {},
        {
            crypto: 'api',
            cookie: query.cookie,
            proxy: query.proxy,
            realIP: query.realIP,
        }
    );
};
