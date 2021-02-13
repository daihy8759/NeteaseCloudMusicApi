// 编辑歌单顺序
import { RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default (query: { ids: string } & RequestBaseConfig) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    const data = {
        ids: query.ids,
    };
    return request('POST', `https://music.163.com/api/playlist/order/update`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
