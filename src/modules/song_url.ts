// 歌曲链接
import crypto from 'crypto';
import { RequestBaseConfig } from '../interface';
import { addCookieValue, cookieToJson } from '../utils';
import request from '../utils/request';

export default (query: { id: string | number; br?: string } & RequestBaseConfig) => {
    const cookieObj = cookieToJson(query.cookie);
    if (!('MUSIC_U' in cookieObj)) {
        cookieObj['_ntes_nuid'] = crypto.randomBytes(16).toString('hex');
    }
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    const data = {
        ids: '[' + query.id + ']',
        br: parseInt(query.br || '999000'),
    };
    return request('POST', `https://interface3.music.163.com/eapi/song/enhance/player/url`, data, {
        crypto: 'eapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
        url: '/api/song/enhance/player/url',
    });
};
