import { isString } from './utils';
var getEventOrigin = function (ev) {
    var origin = ev.origin || ev.originalEvent.origin;
    return origin;
};
var readAction = function (ev) {
    try {
        var action = isString(ev.data) ? JSON.parse(ev.data) : ev.data;
        return action;
    }
    catch (ex) {
        return { type: '' };
    }
};
var isValidAction = function (action) { return isString(action.type); };
export var createMessageToActionHandler = function (_a) {
    var allowedURLs = _a.allowedURLs;
    var isValidOrigin = function (origin) {
        return allowedURLs.some(function (url) { return url.includes(origin); });
    };
    return function (fn) { return function (ev) {
        var origin = getEventOrigin(ev);
        if (!isValidOrigin(origin)) {
            return;
        }
        var action = readAction(ev);
        if (!isValidAction(action)) {
            return;
        }
        fn(action);
    }; };
};
//# sourceMappingURL=message-handler.js.map