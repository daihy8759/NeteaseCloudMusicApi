// 推荐新歌
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        area?: string | number;
        limit?: string | number;
    } & RequestBaseConfig
) => {
    const data = {
        type: 'recommend',
        limit: query.limit || 10,
        areaId: query.area || 0,
    };
    return request('POST', `https://music.163.com/weapi/personalized/newsong`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
