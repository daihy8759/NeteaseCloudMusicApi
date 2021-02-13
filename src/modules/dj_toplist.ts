// 新晋电台榜/热门电台榜
import { ListOrder, MultiPageConfig, RequestBaseConfig } from '../interface';
import request from '../utils/request';

const typeMap = {
    new: 0,
    hot: 1,
};
export default (query: { type?: ListOrder } & MultiPageConfig & RequestBaseConfig) => {
    const data = {
        limit: query.limit || 100,
        offset: query.offset || 0,
        type: typeMap[query.type || 'new'] || '0', //0为新晋,1为热门
    };
    return request('POST', `https://music.163.com/api/djradio/toplist`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
