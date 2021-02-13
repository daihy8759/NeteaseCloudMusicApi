// 收藏/取消收藏专辑
import { RequestBaseConfig, SubAction } from '../interface';
import request from '../utils/request';

type Param = {
    id: string | number;
    t: SubAction;
} & RequestBaseConfig;

export default (query: Param) => {
    const data = {
        id: query.id,
    };
    return request('POST', `https://music.163.com/api/album/${query.t}`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
