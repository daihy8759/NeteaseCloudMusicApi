// 专辑动态信息
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

type Param = { id: string | number } & RequestBaseConfig;

export default (query: Param) => {
    const data = {
        id: query.id,
    };
    return request('POST', `https://music.163.com/api/album/detail/dynamic`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
