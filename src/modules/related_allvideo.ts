// 相关视频
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { id: string | number } & RequestBaseConfig) => {
    const data = {
        id: query.id,
        type: /^\d+$/.test(query.id.toString()) ? 0 : 1,
    };
    return request('POST', `https://music.163.com/weapi/cloudvideo/v1/allvideo/rcmd`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
