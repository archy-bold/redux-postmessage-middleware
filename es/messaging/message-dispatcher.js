import { originFromURL, getOrigin } from './utils';
export var createMessageDispatcher = function (_a) {
    var window = _a.window, document = _a.document, senderURL = _a.senderURL, _b = _a.parentURL, parentURL = _b === void 0 ? '' : _b, _c = _a.targetURLs, targetURLs = _c === void 0 ? [] : _c;
    var senderOrigin = originFromURL(document)(senderURL);
    var parentOrigin = originFromURL(document)(parentURL);
    var targetOrigins = targetURLs.map(originFromURL(document));
    return function (action) {
        var data = JSON.stringify(action);
        if (parentOrigin) {
            window.parent.postMessage(data, parentOrigin);
        }
        var frames = window.parent.frames;
        for (var i = 0; i < frames.length; i++) {
            try {
                var frameOrigin = getOrigin(frames[i].location);
                if (frames[i] !== window && targetOrigins.includes(frameOrigin)) {
                    frames[i].postMessage(data, senderOrigin);
                }
            }
            finally {
                continue;
            }
        }
    };
};
//# sourceMappingURL=message-dispatcher.js.map