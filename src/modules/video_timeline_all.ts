// 全部视频列表
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

type Param = { offset?: string | number } & RequestBaseConfig;

export default (query: Param) => {
    const data = {
        groupId: 0,
        offset: query.offset || 0,
        need_preview_url: 'true',
        total: true,
    };
    //   /api/videotimeline/otherclient/get
    return request('POST', `https://music.163.com/api/videotimeline/otherclient/get`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
