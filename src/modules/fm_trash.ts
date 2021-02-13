// 垃圾桶
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { id: string | number; time?: string | number } & RequestBaseConfig) => {
    const data = {
        songId: query.id,
    };
    return request(
        'POST',
        `https://music.163.com/weapi/radio/trash/add?alg=RT&songId=${query.id}&time=${query.time || 25}`,
        data,
        {
            crypto: 'weapi',
            cookie: query.cookie,
            proxy: query.proxy,
            realIP: query.realIP,
        }
    );
};
