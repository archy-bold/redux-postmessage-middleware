import { ACTION_PREFIX, REMOTE_ACTION } from './constants';
export var actionType = function (type) {
    return ACTION_PREFIX + "/" + type;
};
export var isLocalAction = function (action) {
    var _a = action.type, type = _a === void 0 ? '' : _a, _b = REMOTE_ACTION, remoteAction = action[_b];
    return (type.startsWith(ACTION_PREFIX) && !remoteAction);
};
//# sourceMappingURL=action-helpers.js.map