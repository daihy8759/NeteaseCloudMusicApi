// 删除动态
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { evId: string | number } & RequestBaseConfig) => {
    const data = {
        id: query.evId,
    };
    return request('POST', `https://music.163.com/eapi/event/delete`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
