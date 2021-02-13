import { RequestBaseConfig } from '../interface';
import QRCode from 'qrcode';

export default (
    query: {
        key?: number | string;
        qrimg?: boolean | string;
    } & RequestBaseConfig
) => {
    return new Promise(async (resolve) => {
        const url = `https://music.163.com/login?codekey=${query.key}`;
        return resolve({
            code: 200,
            status: 200,
            body: {
                code: 200,
                data: {
                    qrurl: url,
                    qrimg: query.qrimg ? await QRCode.toDataURL(url) : '',
                },
            },
        });
    });
};
