// 排行榜
import { RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default (query: { id: string | number; idx?: string } & RequestBaseConfig) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    if (query.idx) {
        return Promise.resolve({
            status: 500,
            body: {
                code: 500,
                msg: '不支持此方式调用,只支持id调用',
            },
        });
    }

    const data = {
        id: query.id,
        n: '500',
        s: '0',
    };
    return request('POST', `https://interface3.music.163.com/api/playlist/v4/detail`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
