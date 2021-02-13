// 歌手相关MV
import { MultiPageConfig, RequestBaseConfig } from '../interface';
import request from '../utils/request';

type Param = { id: string | number } & MultiPageConfig & RequestBaseConfig;

export default (query: Param) => {
    const data = {
        artistId: query.id,
        limit: query.limit,
        offset: query.offset,
        total: true,
    };
    return request('POST', `https://music.163.com/weapi/artist/mvs`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
