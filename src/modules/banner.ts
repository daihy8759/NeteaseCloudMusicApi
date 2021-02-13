// 首页轮播图
import { BannerType, RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (query: { type?: BannerType } & RequestBaseConfig) => {
    const type =
        {
            0: 'pc',
            1: 'android',
            2: 'iphone',
            3: 'ipad',
        }[query.type || 0] || 'pc';
    return request(
        'POST',
        `https://music.163.com/api/v2/banner/get`,
        { clientType: type },
        { crypto: 'api', proxy: query.proxy, realIP: query.realIP }
    );
};
