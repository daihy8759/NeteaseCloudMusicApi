// 搜索建议
import { RequestBaseConfig, SearchSuggestType } from '../interface';
import request from '../utils/request';

export default (query: { keywords: string; type?: SearchSuggestType } & RequestBaseConfig) => {
    const data = {
        s: query.keywords || '',
    };
    let type = query.type == 'mobile' ? 'keyword' : 'web';
    return request('POST', `https://music.163.com/weapi/search/suggest/` + type, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
