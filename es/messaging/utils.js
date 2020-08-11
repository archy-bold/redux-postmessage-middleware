export function parseURL(url, document) {
    var a = document.createElement('a');
    a.href = url;
    var port = "";
    if (a.port !== "80" && a.port !== "443") {
        port = a.port;
    }
    return [a.protocol, a.hostname, port, a.pathname];
}
export function buildURL(protocol, hostname, port, pathname) {
    port = !!port ? ":" + port : '';
    pathname = !!pathname ? pathname : '';
    return protocol + "//" + hostname + port + pathname;
}
export function getOrigin(loc) {
    if (!loc) {
        return '';
    }
    if (!loc.origin) {
        return loc.protocol + "//" + loc.hostname + (loc.port ? ':' + loc.port : '');
    }
    return loc.origin;
}
export var originFromURL = function (document) { return function (url) {
    if (!url) {
        return '';
    }
    var _a = parseURL(url, document), protocol = _a[0], domain = _a[1], port = _a[2];
    return buildURL(protocol, domain, port);
}; };
export var isString = function (value) { return typeof value === 'string'; };
//# sourceMappingURL=utils.js.map