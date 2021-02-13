// 用户歌单
import { MultiPageConfig, RequestBaseConfig } from '../interface';
import request from '../utils/request';

type Param = { uid: string | number } & MultiPageConfig & RequestBaseConfig;

export default (query: Param) => {
    const data = {
        uid: query.uid,
        limit: query.limit || 30,
        offset: query.offset || 0,
        includeVideo: true,
    };
    return request('POST', `https://music.163.com/api/user/playlist`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
