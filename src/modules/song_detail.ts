// 歌曲详情
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { ids: string } & RequestBaseConfig) => {
    const ids = query.ids.split(/\s*,\s*/);
    const data = {
        c: '[' + ids.map((id) => '{"id":' + id + '}').join(',') + ']',
        ids: '[' + ids.join(',') + ']',
    };
    return request('POST', `https://music.163.com/weapi/v3/song/detail`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
