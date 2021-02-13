// 全部MV
import { MultiPageConfig, MvArea, MvOrder, MvType, RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        area?: MvArea;
        type?: MvType;
        order?: MvOrder;
    } & MultiPageConfig &
        RequestBaseConfig
) => {
    const data = {
        tags: JSON.stringify({
            地区: query.area || '全部',
            类型: query.type || '全部',
            排序: query.order || '上升最快',
        }),
        offset: query.offset || 0,
        total: 'true',
        limit: query.limit || 30,
    };
    return request('POST', `https://interface.music.163.com/api/mv/all`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
