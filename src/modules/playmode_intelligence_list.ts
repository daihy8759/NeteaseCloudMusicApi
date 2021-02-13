// 智能播放
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        id: string | number;
        pid: string | number;
        sid?: string | number;
        count?: string | number;
    } & RequestBaseConfig
) => {
    const data = {
        songId: query.id,
        type: 'fromPlayOne',
        playlistId: query.pid,
        startMusicId: query.sid || query.id,
        count: query.count || 1,
    };
    return request('POST', `https://music.163.com/weapi/playmode/intelligence/list`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
