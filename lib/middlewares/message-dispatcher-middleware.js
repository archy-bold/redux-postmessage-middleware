"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var action_helpers_1 = require("../action-helpers");
exports.MessageDispatcherMiddleware = function (_a) {
    var dispatch = _a.dispatch;
    return function () { return function (next) { return function (action) {
        if (action_helpers_1.isLocalAction(action)) {
            dispatch(action);
        }
        return next(action);
    }; }; };
};
//# sourceMappingURL=message-dispatcher-middleware.js.map