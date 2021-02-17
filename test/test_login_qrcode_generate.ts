import { expect } from 'chai';
import NeteaseCloudMusicApi from '../';

describe('login_qrcode_generate', function () {
    it('wechat qrcode', async () => {
        const res = await NeteaseCloudMusicApi.login_qrcode_generate({
            type: '10',
        });
        const { url, ticket, state } = res as any;
        expect(url).to.not.be.empty;
        expect(state).to.not.be.empty;
        expect(ticket).to.not.be.empty;
    });

    it('weibo qrcode', async () => {
        const res = await NeteaseCloudMusicApi.login_qrcode_generate({
            type: '2',
        });
        const { url, ticket, state } = res as any;
        expect(url).to.not.be.empty;
        expect(state).to.not.be.empty;
        expect(ticket).to.not.be.empty;
    });
});
