import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

type Param = {
    limit?: number | string;
    offset?: number | string;
} & RequestBaseConfig;

export default (query: Param) => {
    const data = {
        limit: query.limit || 10,
        offset: query.offset || 0,
    };
    return request('POST', `https://music.163.com/store/api/point/receipt`, data, {
        crypto: 'api',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
