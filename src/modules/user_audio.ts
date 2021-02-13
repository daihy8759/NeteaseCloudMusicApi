// 用户创建的电台
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { uid: string | number } & RequestBaseConfig) => {
    const data = {
        userId: query.uid,
    };
    return request('POST', `https://music.163.com/weapi/djradio/get/byuser`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
