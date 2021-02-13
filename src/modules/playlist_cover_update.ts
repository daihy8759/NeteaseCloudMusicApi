import { ImageUploadConfig, RequestBaseConfig } from '../interface';
import uploadPlugin from '../plugins/upload';
import request from '../utils/request';

export default async (query: { id: string } & ImageUploadConfig & RequestBaseConfig) => {
    const uploadInfo = await uploadPlugin(query);
    const res = await request(
        'POST',
        `https://music.163.com/weapi/playlist/cover/update`,
        {
            id: query.id,
            coverImgId: uploadInfo.imgId,
        },
        {
            crypto: 'weapi',
            cookie: query.cookie,
            proxy: query.proxy,
            realIP: query.realIP,
        }
    );
    return {
        status: 200,
        body: {
            code: 200,
            data: {
                ...uploadInfo,
                ...res.body,
            },
        },
    };
};
