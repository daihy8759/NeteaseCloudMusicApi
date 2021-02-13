// 收藏与取消收藏视频
import { RequestBaseConfig, SubAction } from '../interface';
import request from '../utils/request';

type Param = { t?: SubAction; id: string } & RequestBaseConfig;

export default (query: Param) => {
    const data = {
        id: query.id,
    };
    return request('POST', `https://music.163.com/weapi/cloudvideo/video/${query.t}`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
