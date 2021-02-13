// 歌手单曲
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { id: string } & RequestBaseConfig) => {
    return request(
        'POST',
        `https://music.163.com/weapi/v1/artist/${query.id}`,
        {},
        {
            crypto: 'weapi',
            cookie: query.cookie,
            proxy: query.proxy,
            realIP: query.realIP,
        }
    );
};
