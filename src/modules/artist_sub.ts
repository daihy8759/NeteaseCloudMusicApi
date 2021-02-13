// 收藏与取消收藏歌手
import { RequestBaseConfig, SubAction } from '../interface';
import request from '../utils/request';

type Param = { id: string | number; t: SubAction } & RequestBaseConfig;

export default (query: Param) => {
    const data = {
        artistId: query.id,
        artistIds: '[' + query.id + ']',
    };
    return request('POST', `https://music.163.com/weapi/artist/${query.t}`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
