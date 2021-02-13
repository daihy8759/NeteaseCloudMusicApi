import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

type Param = {
    userTaskId: number | string;
    depositCode?: number | string;
} & RequestBaseConfig;

export default (query: Param) => {
    const data = {
        userTaskId: query.userTaskId,
        depositCode: query.depositCode || '0',
    };
    return request('POST', `https://music.163.com/api/usertool/task/point/receive`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
