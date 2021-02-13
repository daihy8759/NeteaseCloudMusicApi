// 相似MV
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { mvid: string | number } & RequestBaseConfig) => {
    const data = {
        mvid: query.mvid,
    };
    return request('POST', `https://music.163.com/weapi/discovery/simiMV`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
