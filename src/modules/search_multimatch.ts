// 多类型搜索
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { type?: number; keywords: string } & RequestBaseConfig) => {
    const data = {
        type: query.type || 1,
        s: query.keywords || '',
    };
    return request('POST', `https://music.163.com/weapi/search/suggest/multimatch`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
