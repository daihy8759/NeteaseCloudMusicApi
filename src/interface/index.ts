export interface CommonResponse extends Response {
    body: any;
    url: string;
    cookie?: string;
}

export interface RequestBaseConfig {
    cookie?: string;
    realIP?: string; // IPv4/IPv6 filled in X-Real-IP
    proxy?: string; // HTTP proxy
}

export interface MultiPageConfig {
    limit?: string | number;
    offset?: string | number;
}

export const enum AlbumListStyleArea {
    zh = 'Z_H',
    ea = 'E_A',
    kr = 'KR',
    jp = 'JP',
}

export const enum AlbumListArea {
    all = 'ALL',
    zh = 'ZH',
    ea = 'EA',
    kr = 'KR',
    jp = 'JP',
}

export const enum AlbumSongsaleboardType {
    daily = 'daily',
    week = 'week',
    year = 'year',
    total = 'total',
}

export const enum AlbumSongsaleboardAlbumType {
    album = 0,
    single = 1,
}

export type SubAction = 'sub' | 'unsub';

export type SubActionLike = 'like' | 'unlike';

export type SubActionSubscribe = 'subscribe' | 'unsubscribe';

export type SubActionFollow = 'follow' | 'delfollow';

export const enum ArtistArea {
    all = '-1',
    zh = '7',
    ea = '96',
    ja = '8',
    kr = '16',
    other = '0',
}

export const enum ArtistType {
    male = '1',
    female = '2',
    band = '3',
}

export const enum ArtistSongsOrder {
    hot = 'hot',
    time = 'time',
}

export const enum UserRecordType {
    all = 0,
    weekly = 1,
}

export const enum ToplistArtistType {
    zh = 1,
    ea = 2,
    kr = 3,
    ja = 4,
}

export const enum TopSongType {
    all = 0,
    zh = 7,
    ea = 96,
    kr = 16,
    ja = 8,
}

export const enum ListOrder {
    hot = 'hot',
    new = 'new',
}

export const enum MvArea {
    all = '全部',
    zh = '内地',
    hk = '港台',
    ea = '欧美',
    kr = '韩国',
    jp = '日本',
}

export const enum ShareResourceType {
    song = 'song',
    playlist = 'playlist',
    mv = 'mv',
    djprogram = 'djprogram',
    djradio = 'djradio',
}

export const enum SearchType {
    single = 1,
    album = 10,
    artist = 100,
    playlist = 1000,
    user = 1002,
    mv = 1004,
    lyric = 1006,
    dj = 1009,
    video = 1014,
    complex = 1018,
}

export const enum SearchSuggestType {
    mobile = 'mobile',
    web = 'web',
}

export const enum ResourceType {
    mv = 1,
    dj = 4,
    video = 5,
    event = 6,
}

export type PlaylistType = 'NROMAL' | 'VIDEO';

export const enum MvType {
    all = '全部',
    offical = '官方版',
    raw = '原生',
    live = '现场版',
    netease = '网易出品',
}

export const enum MvOrder {
    trend = '上升最快',
    hot = '最热',
    new = '最新',
}

export interface ImageUploadConfig {
    imgFile: {
        name: string;
        data: string | Buffer;
    };
    imgSize?: number;
    imgX?: number;
    imgY?: number;
}

export const enum BannerType {
    pc = 0,
    android = 1,
    iphone = 2,
    ipad = 3,
}

export const enum CommentType {
    song = 0,
    mv = 1,
    playlist = 2,
    album = 3,
    dj = 4,
    video = 5,
    event = 6,
}

export const enum DailySigninType {
    android = 0,
    pc = 1,
}

export const enum CommentAction {
    add = 'add',
    delete = 'delete',
    reply = 'reply',
}
