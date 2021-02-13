// 数字专辑&数字单曲-榜单
import { AlbumSongsaleboardAlbumType, AlbumSongsaleboardType, RequestBaseConfig } from '../interface';
import request from '../utils/request';

type Param = {
    albumType?: AlbumSongsaleboardAlbumType; // 0 为数字专辑,1 为数字单曲
    type?: AlbumSongsaleboardType;
    year?: string | number; // 年份，默认本年。 type 为 year 时有效
} & RequestBaseConfig;

export default (query: Param) => {
    let data: any = {
        albumType: query.albumType || 0, //0为数字专辑,1为数字单曲
    };
    const type = query.type || 'daily'; // daily,week,year,total
    if (type === 'year') {
        data = {
            ...data,
            year: query.year,
        };
    }
    return request('POST', `https://music.163.com/api/feealbum/songsaleboard/${type}/type`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
