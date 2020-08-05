import { isLocalAction } from '../action-helpers';
export var MessageDispatcherMiddleware = function (_a) {
    var dispatch = _a.dispatch;
    return function () { return function (next) { return function (action) {
        if (isLocalAction(action)) {
            dispatch(action);
        }
        return next(action);
    }; }; };
};
//# sourceMappingURL=message-dispatcher-middleware.js.map