// 新歌速递
import { RequestBaseConfig, TopSongType } from '../interface';
import request from '../utils/request';

export default (query: { type: TopSongType } & RequestBaseConfig) => {
    const data = {
        areaId: query.type || 0, // 全部:0 华语:7 欧美:96 日本:8 韩国:16
        // limit: query.limit || 100,
        // offset: query.offset || 0,
        total: true,
    };
    return request('POST', `https://music.163.com/weapi/v1/discovery/new/songs`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
