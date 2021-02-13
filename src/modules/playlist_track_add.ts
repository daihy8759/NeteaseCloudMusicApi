import { RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default async (query: { pid?: number | string; ids: string } & RequestBaseConfig) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    query.ids = query.ids || '';
    const data = {
        id: query.pid,
        tracks: JSON.stringify(
            query.ids.split(',').map((item) => {
                return { type: 3, id: item };
            })
        ),
    };

    return request('POST', `https://music.163.com/api/playlist/track/add`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
