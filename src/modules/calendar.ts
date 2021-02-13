import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        startTime?: number | string;
        endTime: number | string;
    } & RequestBaseConfig
) => {
    const data = {
        startTime: query.startTime || Date.now(),
        endTime: query.endTime || Date.now(),
    };
    return request('POST', `https://music.163.com/api/mcalendar/detail`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
