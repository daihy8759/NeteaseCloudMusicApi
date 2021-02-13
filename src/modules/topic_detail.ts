import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        actid?: number | string;
    } & RequestBaseConfig
) => {
    const data = {
        actid: query.actid,
    };
    return request('POST', `https://music.163.com/api/act/detail`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
