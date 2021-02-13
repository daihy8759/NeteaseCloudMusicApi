import { ArtistSongsOrder, MultiPageConfig, RequestBaseConfig } from '../interface';
import { addCookieValue } from '../utils';
import request from '../utils/request';

type Param = {
    id: string | number;
    order?: ArtistSongsOrder;
} & MultiPageConfig &
    RequestBaseConfig;

export default (query: Param) => {
    query.cookie = addCookieValue('os', 'pc', query.cookie);
    const data = {
        id: query.id,
        private_cloud: 'true',
        work_type: 1,
        order: query.order || 'hot', //hot,time
        offset: query.offset || 0,
        limit: query.limit || 100,
    };
    return request('POST', `https://music.163.com/api/v1/artist/songs`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
