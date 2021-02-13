// 编辑用户信息
import { RequestBaseConfig } from '../interface';
import request from '../utils/request';

type Param = {
    birthday: string;
    city: string;
    gender: string;
    nickname: string;
    province: string;
    signature: string;
} & RequestBaseConfig;

export default (query: Param) => {
    const data = {
        avatarImgId: '0',
        birthday: query.birthday,
        city: query.city,
        gender: query.gender,
        nickname: query.nickname,
        province: query.province,
        signature: query.signature,
    };
    return request('POST', `https://music.163.com/weapi/user/profile/update`, data, {
        crypto: 'weapi',
        cookie: query.cookie,
        proxy: query.proxy,
        realIP: query.realIP,
    });
};
