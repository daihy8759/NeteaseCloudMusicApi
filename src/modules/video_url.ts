// 视频链接
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

type Param = { id: string | number; res?: number } & RequestBaseConfig;

export default (query: Param) => {
    const data = {
        ids: '["' + query.id + '"]',
        resolution: query.res || 1080,
    };
    return request('POST', `https://music.163.com/weapi/cloudvideo/playurl`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
