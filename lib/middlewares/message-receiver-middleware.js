"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
exports.MessageReceiverMiddleware = function (_a) {
    var messageToActionHandler = _a.messageToActionHandler;
    return function (store) {
        window.addEventListener('message', messageToActionHandler(function (msgAction) {
            store.dispatch(Object.defineProperty(msgAction, constants_1.REMOTE_ACTION, { value: true }));
        }));
        return function (next) { return function (action) { return next(action); }; };
    };
};
//# sourceMappingURL=message-receiver-middleware.js.map