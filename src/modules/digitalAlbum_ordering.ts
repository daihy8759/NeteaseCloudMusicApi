// 购买数字专辑
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

export default (
    query: {
        payment: string;
        id: string | number;
        quantity: string;
    } & RequestBaseConfig
) => {
    const data = {
        business: 'Album',
        paymentMethod: query.payment,
        digitalResources: JSON.stringify([
            {
                business: 'Album',
                resourceID: query.id,
                quantity: query.quantity,
            },
        ]),
        from: 'web',
    };
    return request('POST', `https://music.163.com/api/ordering/web/digital`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
