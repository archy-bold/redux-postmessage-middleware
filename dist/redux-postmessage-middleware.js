(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("MyLib", [], factory);
	else if(typeof exports === 'object')
		exports["MyLib"] = factory();
	else
		root["MyLib"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function parseURL(url, document) {
    var a = document.createElement('a');
    a.href = url;
    var port = "";
    if (a.port !== "80" && a.port !== "443") {
        port = a.port;
    }
    return [a.protocol, a.hostname, port, a.pathname];
}
exports.parseURL = parseURL;
function buildURL(protocol, hostname, port, pathname) {
    port = !!port ? ":" + port : '';
    pathname = !!pathname ? pathname : '';
    return protocol + "//" + hostname + port + pathname;
}
exports.buildURL = buildURL;
function getOrigin(loc) {
    if (!loc) {
        return '';
    }
    if (!loc.origin) {
        return loc.protocol + "//" + loc.hostname + (loc.port ? ':' + loc.port : '');
    }
    return loc.origin;
}
exports.getOrigin = getOrigin;
exports.originFromURL = function (document) { return function (url) {
    if (!url) {
        return '';
    }
    var _a = parseURL(url, document), protocol = _a[0], domain = _a[1], port = _a[2];
    return buildURL(protocol, domain, port);
}; };
exports.isString = function (value) { return typeof value === 'string'; };


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(2);
exports.actionType = function (type) {
    return constants_1.ACTION_PREFIX + "/" + type;
};
exports.isLocalAction = function (action) {
    var _a = action.type, type = _a === void 0 ? '' : _a, _b = constants_1.REMOTE_ACTION, remoteAction = action[_b];
    return (type.startsWith(constants_1.ACTION_PREFIX) && !remoteAction);
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTION_PREFIX = '@redux-postmessage';
exports.REMOTE_ACTION = Symbol('REMOTE_ACTION');


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var messaging_1 = __webpack_require__(4);
var middlewares_1 = __webpack_require__(7);
var action_helpers_1 = __webpack_require__(1);
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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var message_dispatcher_1 = __webpack_require__(5);
exports.createMessageDispatcher = message_dispatcher_1.createMessageDispatcher;
var message_handler_1 = __webpack_require__(6);
exports.createMessageToActionHandler = message_handler_1.createMessageToActionHandler;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
exports.createMessageDispatcher = function (_a) {
    var window = _a.window, document = _a.document, senderURL = _a.senderURL, _b = _a.parentURL, parentURL = _b === void 0 ? '' : _b, _c = _a.targetURLs, targetURLs = _c === void 0 ? [] : _c;
    var senderOrigin = utils_1.originFromURL(document)(senderURL);
    var parentOrigin = utils_1.originFromURL(document)(parentURL);
    var targetOrigins = targetURLs.map(utils_1.originFromURL(document));
    return function (action) {
        var data = JSON.stringify(action);
        if (parentOrigin) {
            window.parent.postMessage(data, parentOrigin);
        }
        var frames = window.parent.frames;
        for (var i = 0; i < frames.length; i++) {
            try {
                var frameOrigin = utils_1.getOrigin(frames[i].location);
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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
var getEventOrigin = function (ev) {
    var origin = ev.origin || ev.originalEvent.origin;
    return origin;
};
var readAction = function (ev) {
    try {
        var action = utils_1.isString(ev.data) ? JSON.parse(ev.data) : ev.data;
        return action;
    }
    catch (ex) {
        return { type: '' };
    }
};
var isValidAction = function (action) { return utils_1.isString(action.type); };
exports.createMessageToActionHandler = function (_a) {
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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var message_dispatcher_middleware_1 = __webpack_require__(8);
exports.MessageDispatcherMiddleware = message_dispatcher_middleware_1.MessageDispatcherMiddleware;
var message_receiver_middleware_1 = __webpack_require__(9);
exports.MessageReceiverMiddleware = message_receiver_middleware_1.MessageReceiverMiddleware;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var action_helpers_1 = __webpack_require__(1);
exports.MessageDispatcherMiddleware = function (_a) {
    var dispatch = _a.dispatch;
    return function () { return function (next) { return function (action) {
        if (action_helpers_1.isLocalAction(action)) {
            dispatch(action);
        }
        return next(action);
    }; }; };
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(2);
exports.MessageReceiverMiddleware = function (_a) {
    var messageToActionHandler = _a.messageToActionHandler;
    return function (store) {
        window.addEventListener('message', messageToActionHandler(function (msgAction) {
            store.dispatch(Object.defineProperty(msgAction, constants_1.REMOTE_ACTION, { value: true }));
        }));
        return function (next) { return function (action) { return next(action); }; };
    };
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=redux-postmessage-middleware.js.map