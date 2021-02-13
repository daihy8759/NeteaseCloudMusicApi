// 关注与取消关注用户
import { RequestBaseConfig, SubActionFollow } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

export default (query: { t: SubActionFollow; id: string | number } & RequestBaseConfig) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    return request(
        'POST',
        `https://music.163.com/weapi/user/${query.t}/${query.id}`,
        {},
        {
            crypto: 'weapi',
            cookie: query.cookie,
            proxy: query.proxy,
            realIP: query.realIP,
        }
    );
};
