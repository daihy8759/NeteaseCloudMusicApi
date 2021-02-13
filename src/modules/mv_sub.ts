// 收藏与取消收藏MV
import { RequestBaseConfig, SubAction } from '../interface';
import request from '../utils/request';

export default (query: { t: SubAction; mvid: string | number } & RequestBaseConfig) => {
    const data = {
        mvId: query.mvid,
        mvIds: '["' + query.mvid + '"]',
    };
    return request('POST', `https://music.163.com/weapi/mv/${query.t}`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
