export function cookieToJson(cookie?: string) {
    if (!cookie) return {};
    let cookieArr = cookie.split(';');
    let obj = {};
    cookieArr.forEach((i) => {
        let arr = i.split('=');
        obj[arr[0]] = arr[1];
    });
    return obj;
}

export function jsonToCookie(cookie: object) {
    const pair: string[] = [];
    for (let k in cookie) {
        pair.push(`${k}=${cookie[k]}`);
    }
    return pair.join(';');
}

export function addCookieValue(key: string, value: string, cookie?: string) {
    const cookieObj = cookieToJson(cookie);
    cookieObj[key] = value;
    return jsonToCookie(cookieObj);
}

export function toBoolean(val: any) {
    if (typeof val === 'boolean') return val;
    if (val === '') return val;
    return val === 'true' || val == '1';
}
