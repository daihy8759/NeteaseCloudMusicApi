// 订阅与取消电台
import { RequestBaseConfig, SubAction } from '../interface';
import request from '../utils/request';

export default (query: { t: SubAction; rid: string | number } & RequestBaseConfig) => {
    const data = {
        id: query.rid,
    };
    return request('POST', `https://music.163.com/weapi/djradio/${query.t}`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
