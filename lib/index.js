"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messaging_1 = require("./messaging");
var middlewares_1 = require("./middlewares");
var action_helpers_1 = require("./action-helpers");
exports.actionType = action_helpers_1.actionType;
exports.createMessageDispatcherMiddleware = function (_a) {
    var senderURL = _a.senderURL, parentURL = _a.parentURL, targetURLs = _a.targetURLs;
    var dispatch = messaging_1.createMessageDispatcher({
        window: window,
        document: document,
        senderURL: senderURL,
        parentURL: parentURL,
        targetURLs: targetURLs,
    });
    return middlewares_1.MessageDispatcherMiddleware({ dispatch: dispatch });
};
exports.createMessageReceiverMiddleware = function (_a) {
    var allowedURLs = _a.allowedURLs;
    var messageToActionHandler = messaging_1.createMessageToActionHandler({
        allowedURLs: allowedURLs
    });
    return middlewares_1.MessageReceiverMiddleware({ messageToActionHandler: messageToActionHandler });
};
//# sourceMappingURL=index.js.map