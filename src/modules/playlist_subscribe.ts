// 收藏与取消收藏歌单
import { RequestBaseConfig, SubActionSubscribe } from '../interface';
import request from '../utils/request';

export default (query: { t: SubActionSubscribe; id: string | number } & RequestBaseConfig) => {
    const data = {
        id: query.id,
    };
    return request('POST', `https://music.163.com/weapi/playlist/${query.t}`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
