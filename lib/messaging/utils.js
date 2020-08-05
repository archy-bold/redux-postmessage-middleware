"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseURL(url, document) {
    var a = document.createElement('a');
    a.href = url;
    var port = "";
    if (a.port !== "80" && a.port !== "443") {
        port = a.port;
    }
    return [a.protocol, a.hostname, port, a.pathname];
}
exports.parseURL = parseURL;
function buildURL(protocol, hostname, port, pathname) {
    port = !!port ? ":" + port : '';
    pathname = !!pathname ? pathname : '';
    return protocol + "//" + hostname + port + pathname;
}
exports.buildURL = buildURL;
function getOrigin(loc) {
    if (!loc) {
        return '';
    }
    if (!loc.origin) {
        return loc.protocol + "//" + loc.hostname + (loc.port ? ':' + loc.port : '');
    }
    return loc.origin;
}
exports.getOrigin = getOrigin;
exports.originFromURL = function (document) { return function (url) {
    if (!url) {
        return '';
    }
    var _a = parseURL(url, document), protocol = _a[0], domain = _a[1], port = _a[2];
    return buildURL(protocol, domain, port);
}; };
exports.isString = function (value) { return typeof value === 'string'; };
//# sourceMappingURL=utils.js.map