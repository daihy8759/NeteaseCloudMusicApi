// 专辑内容
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

type Param = { id: string | number } & RequestBaseConfig;

export default (query: Param) => {
    return request(
        'POST',
        `https://music.163.com/weapi/v1/album/${query.id}`,
        {},
        {
            crypto: 'weapi',
            cookie: query.cookie,
            proxy: query.proxy,
            realIP: query.realIP,
        }
    );
};
