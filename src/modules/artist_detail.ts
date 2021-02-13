import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

type Param = { id: string | number } & RequestBaseConfig;

export default (query: Param): Promise<Response> => {
    return request(
        'POST',
        `https://music.163.com/api/artist/head/info/get`,
        {
            id: query.id,
        },
        {
            crypto: 'weapi',
            cookie: query.cookie,
            proxy: query.proxy,
            realIP: query.realIP,
        }
    );
};
