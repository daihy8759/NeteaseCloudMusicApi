import axios from 'axios';
import request from '../utils/request';

export default async (query) => {
    //   获取key和token
    const tokenRes = await request(
        'POST',
        `https://music.163.com/weapi/nos/token/alloc`,
        {
            bucket: '',
            ext: 'mp3',
            filename: query.songFile.name.replace('.mp3', ''),
            local: false,
            nos_product: 3,
            type: 'audio',
            md5: query.songFile.md5,
        },
        { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy }
    );

    // 上传
    const objectKey = tokenRes.body.result.objectKey.replace('/', '%2F');
    try {
        await axios({
            method: 'post',
            url: `http://45.127.129.8/ymusic/${objectKey}?offset=0&complete=true&version=1.0`,
            headers: {
                'x-nos-token': tokenRes.body.result.token,
                'Content-MD5': query.songFile.md5,
                'Content-Type': 'audio/mpeg',
                'Content-Length': String(query.songFile.size),
            },
            data: query.songFile.data,
        });
    } catch (error) {
        console.log('error', error.response);
    }
    return {
        ...tokenRes,
    };
};
