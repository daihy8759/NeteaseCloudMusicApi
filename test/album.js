const NeteaseCloudMusicApi = require('../lib');

NeteaseCloudMusicApi.default
    .album({
        id: 100087,
    })
    .then((result) => {
        console.log(result);
    })
    .catch((e) => {
        console.log(e);
    });
