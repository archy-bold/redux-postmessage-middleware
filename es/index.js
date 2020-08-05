import { createMessageDispatcher, createMessageToActionHandler } from './messaging';
import { MessageDispatcherMiddleware, MessageReceiverMiddleware } from './middlewares';
export { actionType } from './action-helpers';
export var createMessageDispatcherMiddleware = function (_a) {
    var senderURL = _a.senderURL, parentURL = _a.parentURL, targetURLs = _a.targetURLs;
    var dispatch = createMessageDispatcher({
        window: window,
        document: document,
        senderURL: senderURL,
        parentURL: parentURL,
        targetURLs: targetURLs,
    });
    return MessageDispatcherMiddleware({ dispatch: dispatch });
};
export var createMessageReceiverMiddleware = function (_a) {
    var allowedURLs = _a.allowedURLs;
    var messageToActionHandler = createMessageToActionHandler({
        allowedURLs: allowedURLs
    });
    return MessageReceiverMiddleware({ messageToActionHandler: messageToActionHandler });
};
//# sourceMappingURL=index.js.map