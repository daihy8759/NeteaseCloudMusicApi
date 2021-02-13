// 听歌打卡
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        id: string | number;
        sourceid: string | number;
        time: string | number;
    } & RequestBaseConfig
) => {
    const data = {
        logs: JSON.stringify([
            {
                action: 'play',
                json: {
                    download: 0,
                    end: 'playend',
                    id: query.id,
                    sourceId: query.sourceid,
                    time: query.time,
                    type: 'song',
                    wifi: 0,
                },
            },
        ]),
    };

    return request('POST', `https://music.163.com/weapi/feedback/weblog`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
