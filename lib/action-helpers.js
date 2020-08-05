"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.actionType = function (type) {
    return constants_1.ACTION_PREFIX + "/" + type;
};
exports.isLocalAction = function (action) {
    var _a = action.type, type = _a === void 0 ? '' : _a, _b = constants_1.REMOTE_ACTION, remoteAction = action[_b];
    return (type.startsWith(constants_1.ACTION_PREFIX) && !remoteAction);
};
//# sourceMappingURL=action-helpers.js.map