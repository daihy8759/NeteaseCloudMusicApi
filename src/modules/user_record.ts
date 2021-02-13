// 听歌排行
import { RequestBaseConfig, UserRecordType } from '../interface';
import request from '../utils/request';

type Param = { uid: string | number; type?: UserRecordType } & RequestBaseConfig;

export default (query: Param) => {
    const data = {
        uid: query.uid,
        type: query.type || 0, // 1: 最近一周, 0: 所有时间
    };
    return request('POST', `https://music.163.com/weapi/v1/play/record`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
