import { REMOTE_ACTION } from '../constants';
export var MessageReceiverMiddleware = function (_a) {
    var messageToActionHandler = _a.messageToActionHandler;
    return function (store) {
        window.addEventListener('message', messageToActionHandler(function (msgAction) {
            store.dispatch(Object.defineProperty(msgAction, REMOTE_ACTION, { value: true }));
        }));
        return function (next) { return function (action) { return next(action); }; };
    };
};
//# sourceMappingURL=message-receiver-middleware.js.map