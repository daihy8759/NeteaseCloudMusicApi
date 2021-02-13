// 用户详情
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

type Param = { uid: string | number } & RequestBaseConfig;

export default (query: Param) => {
    return request(
        'POST',
        `https://music.163.com/weapi/v1/user/detail/${query.uid}`,
        {},
        {
            crypto: 'weapi',
            cookie: query.cookie,
            proxy: query.proxy,
            realIP: query.realIP,
        }
    );
};
