// 红心与取消红心歌曲
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';
import { toBoolean } from '../utils';

export default (
    query: {
        like?: 'true' | 'false' | boolean;
        id: string | number;
        alg?: string;
        time?: string | number;
    } & RequestBaseConfig
) => {
    query.like = toBoolean(query.like);
    const data = {
        trackId: query.id,
        like: query.like,
    };
    console.log(query.like);
    return request(
        'POST',
        `https://music.163.com/weapi/radio/like?alg=${query.alg || 'itembased'}&trackId=${query.id}&time=${
            query.time || 25
        }`,
        data,
        {
            crypto: 'weapi',
            cookie: query.cookie,
            proxy: query.proxy,
            realIP: query.realIP,
        }
    );
};
