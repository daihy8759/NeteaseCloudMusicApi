// 云盘数据详情
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { id: string | number } & RequestBaseConfig) => {
    const id = query.id.toString().replace(/\s/g, '').split(',');
    const data = {
        songIds: id,
    };
    return request('POST', `https://music.163.com/weapi/v1/cloud/get/byids`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
