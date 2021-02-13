// 默认搜索关键词
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: RequestBaseConfig) => {
    return request(
        'POST',
        `https://interface3.music.163.com/eapi/search/defaultkeyword/get`,
        {},
        {
            crypto: 'eapi',
            cookie: query.cookie,
            proxy: query.proxy,
            url: '/api/search/defaultkeyword/get',
            realIP: query.realIP,
        }
    );
};
