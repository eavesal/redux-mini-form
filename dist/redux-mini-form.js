(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-redux"], factory);
	else if(typeof exports === 'object')
		exports["MiniReduxForm"] = factory(require("react"), require("react-redux"));
	else
		root["MiniReduxForm"] = factory(root["React"], root["ReactRedux"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_redux__) {
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n * \n */\n\nfunction makeEmptyFunction(arg) {\n  return function () {\n    return arg;\n  };\n}\n/**\n * This function accepts and discards inputs; it has no side effects. This is\n * primarily useful idiomatically for overridable function endpoints which\n * always need to be callable, since JS lacks a null-call idiom ala Cocoa.\n */\n\n\nvar emptyFunction = function emptyFunction() {};\n\nemptyFunction.thatReturns = makeEmptyFunction;\nemptyFunction.thatReturnsFalse = makeEmptyFunction(false);\nemptyFunction.thatReturnsTrue = makeEmptyFunction(true);\nemptyFunction.thatReturnsNull = makeEmptyFunction(null);\n\nemptyFunction.thatReturnsThis = function () {\n  return this;\n};\n\nemptyFunction.thatReturnsArgument = function (arg) {\n  return arg;\n};\n\nmodule.exports = emptyFunction;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/fbjs/lib/emptyFunction.js?");

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar validateFormat = function validateFormat(format) {};\n\nif (true) {\n  validateFormat = function validateFormat(format) {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  };\n}\n\nfunction invariant(condition, format, a, b, c, d, e, f) {\n  validateFormat(format);\n\n  if (!condition) {\n    var error;\n\n    if (format === undefined) {\n      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(format.replace(/%s/g, function () {\n        return args[argIndex++];\n      }));\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n\n    throw error;\n  }\n}\n\nmodule.exports = invariant;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/fbjs/lib/invariant.js?");

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n\nvar emptyFunction = __webpack_require__(/*! ./emptyFunction */ \"./node_modules/fbjs/lib/emptyFunction.js\");\n/**\n * Similar to invariant but only logs a warning if the condition is not met.\n * This can be used to log issues in development environments in critical\n * paths. Removing the logging code for production environments will keep the\n * same logic and follow the same code paths.\n */\n\n\nvar warning = emptyFunction;\n\nif (true) {\n  var printWarning = function printWarning(format) {\n    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    var argIndex = 0;\n    var message = 'Warning: ' + format.replace(/%s/g, function () {\n      return args[argIndex++];\n    });\n\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n\n  warning = function warning(condition, format) {\n    if (format === undefined) {\n      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');\n    }\n\n    if (format.indexOf('Failed Composite propType: ') === 0) {\n      return; // Ignore CompositeComponent proptype check.\n    }\n\n    if (!condition) {\n      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\n        args[_key2 - 2] = arguments[_key2];\n      }\n\n      printWarning.apply(undefined, [format].concat(args));\n    }\n  };\n}\n\nmodule.exports = warning;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/fbjs/lib/warning.js?");

/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as the `TypeError` message for \"Functions\" methods. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n/** Used as references for various `Number` constants. */\n\nvar NAN = 0 / 0;\n/** `Object#toString` result references. */\n\nvar symbolTag = '[object Symbol]';\n/** Used to match leading and trailing whitespace. */\n\nvar reTrim = /^\\s+|\\s+$/g;\n/** Used to detect bad signed hexadecimal string values. */\n\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n/** Used to detect binary string values. */\n\nvar reIsBinary = /^0b[01]+$/i;\n/** Used to detect octal string values. */\n\nvar reIsOctal = /^0o[0-7]+$/i;\n/** Built-in method references without a dependency on `root`. */\n\nvar freeParseInt = parseInt;\n/** Detect free variable `global` from Node.js. */\n\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n/** Detect free variable `self`. */\n\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n/** Used as a reference to the global object. */\n\nvar root = freeGlobal || freeSelf || Function('return this')();\n/** Used for built-in method references. */\n\nvar objectProto = Object.prototype;\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\n\nvar objectToString = objectProto.toString;\n/* Built-in method references for those with the same name as other `lodash` methods. */\n\nvar nativeMax = Math.max,\n    nativeMin = Math.min;\n/**\n * Gets the timestamp of the number of milliseconds that have elapsed since\n * the Unix epoch (1 January 1970 00:00:00 UTC).\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Date\n * @returns {number} Returns the timestamp.\n * @example\n *\n * _.defer(function(stamp) {\n *   console.log(_.now() - stamp);\n * }, _.now());\n * // => Logs the number of milliseconds it took for the deferred invocation.\n */\n\nvar now = function () {\n  return root.Date.now();\n};\n/**\n * Creates a debounced function that delays invoking `func` until after `wait`\n * milliseconds have elapsed since the last time the debounced function was\n * invoked. The debounced function comes with a `cancel` method to cancel\n * delayed `func` invocations and a `flush` method to immediately invoke them.\n * Provide `options` to indicate whether `func` should be invoked on the\n * leading and/or trailing edge of the `wait` timeout. The `func` is invoked\n * with the last arguments provided to the debounced function. Subsequent\n * calls to the debounced function return the result of the last `func`\n * invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the debounced function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.debounce` and `_.throttle`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to debounce.\n * @param {number} [wait=0] The number of milliseconds to delay.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=false]\n *  Specify invoking on the leading edge of the timeout.\n * @param {number} [options.maxWait]\n *  The maximum time `func` is allowed to be delayed before it's invoked.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new debounced function.\n * @example\n *\n * // Avoid costly calculations while the window size is in flux.\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\n *\n * // Invoke `sendMail` when clicked, debouncing subsequent calls.\n * jQuery(element).on('click', _.debounce(sendMail, 300, {\n *   'leading': true,\n *   'trailing': false\n * }));\n *\n * // Ensure `batchLog` is invoked once after 1 second of debounced calls.\n * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\n * var source = new EventSource('/stream');\n * jQuery(source).on('message', debounced);\n *\n * // Cancel the trailing debounced invocation.\n * jQuery(window).on('popstate', debounced.cancel);\n */\n\n\nfunction debounce(func, wait, options) {\n  var lastArgs,\n      lastThis,\n      maxWait,\n      result,\n      timerId,\n      lastCallTime,\n      lastInvokeTime = 0,\n      leading = false,\n      maxing = false,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n\n  wait = toNumber(wait) || 0;\n\n  if (isObject(options)) {\n    leading = !!options.leading;\n    maxing = 'maxWait' in options;\n    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n\n  function invokeFunc(time) {\n    var args = lastArgs,\n        thisArg = lastThis;\n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    result = func.apply(thisArg, args);\n    return result;\n  }\n\n  function leadingEdge(time) {\n    // Reset any `maxWait` timer.\n    lastInvokeTime = time; // Start the timer for the trailing edge.\n\n    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.\n\n    return leading ? invokeFunc(time) : result;\n  }\n\n  function remainingWait(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime,\n        result = wait - timeSinceLastCall;\n    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;\n  }\n\n  function shouldInvoke(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the\n    // trailing edge, the system time has gone backwards and we're treating\n    // it as the trailing edge, or we've hit the `maxWait` limit.\n\n    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;\n  }\n\n  function timerExpired() {\n    var time = now();\n\n    if (shouldInvoke(time)) {\n      return trailingEdge(time);\n    } // Restart the timer.\n\n\n    timerId = setTimeout(timerExpired, remainingWait(time));\n  }\n\n  function trailingEdge(time) {\n    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been\n    // debounced at least once.\n\n    if (trailing && lastArgs) {\n      return invokeFunc(time);\n    }\n\n    lastArgs = lastThis = undefined;\n    return result;\n  }\n\n  function cancel() {\n    if (timerId !== undefined) {\n      clearTimeout(timerId);\n    }\n\n    lastInvokeTime = 0;\n    lastArgs = lastCallTime = lastThis = timerId = undefined;\n  }\n\n  function flush() {\n    return timerId === undefined ? result : trailingEdge(now());\n  }\n\n  function debounced() {\n    var time = now(),\n        isInvoking = shouldInvoke(time);\n    lastArgs = arguments;\n    lastThis = this;\n    lastCallTime = time;\n\n    if (isInvoking) {\n      if (timerId === undefined) {\n        return leadingEdge(lastCallTime);\n      }\n\n      if (maxing) {\n        // Handle invocations in a tight loop.\n        timerId = setTimeout(timerExpired, wait);\n        return invokeFunc(lastCallTime);\n      }\n    }\n\n    if (timerId === undefined) {\n      timerId = setTimeout(timerExpired, wait);\n    }\n\n    return result;\n  }\n\n  debounced.cancel = cancel;\n  debounced.flush = flush;\n  return debounced;\n}\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\n\n\nfunction isObject(value) {\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\n\n\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\n\n\nfunction isSymbol(value) {\n  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;\n}\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\n\n\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n\n  if (isSymbol(value)) {\n    return NAN;\n  }\n\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? other + '' : other;\n  }\n\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;\n}\n\nmodule.exports = debounce;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/lodash.debounce/index.js?");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n/* eslint-disable no-unused-vars */\n\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n  if (val === null || val === undefined) {\n    throw new TypeError('Object.assign cannot be called with null or undefined');\n  }\n\n  return Object(val);\n}\n\nfunction shouldUseNative() {\n  try {\n    if (!Object.assign) {\n      return false;\n    } // Detect buggy property enumeration order in older V8 versions.\n    // https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\n\n    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers\n\n    test1[5] = 'de';\n\n    if (Object.getOwnPropertyNames(test1)[0] === '5') {\n      return false;\n    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\n\n    var test2 = {};\n\n    for (var i = 0; i < 10; i++) {\n      test2['_' + String.fromCharCode(i)] = i;\n    }\n\n    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n      return test2[n];\n    });\n\n    if (order2.join('') !== '0123456789') {\n      return false;\n    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\n\n    var test3 = {};\n    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n      test3[letter] = letter;\n    });\n\n    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {\n      return false;\n    }\n\n    return true;\n  } catch (err) {\n    // We don't expect any of the above to throw, but better to be safe.\n    return false;\n  }\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n  var from;\n  var to = toObject(target);\n  var symbols;\n\n  for (var s = 1; s < arguments.length; s++) {\n    from = Object(arguments[s]);\n\n    for (var key in from) {\n      if (hasOwnProperty.call(from, key)) {\n        to[key] = from[key];\n      }\n    }\n\n    if (getOwnPropertySymbols) {\n      symbols = getOwnPropertySymbols(from);\n\n      for (var i = 0; i < symbols.length; i++) {\n        if (propIsEnumerable.call(from, symbols[i])) {\n          to[symbols[i]] = from[symbols[i]];\n        }\n      }\n    }\n  }\n\n  return to;\n};\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/object-assign/index.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {}; // cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n  throw new Error('setTimeout has not been defined');\n}\n\nfunction defaultClearTimeout() {\n  throw new Error('clearTimeout has not been defined');\n}\n\n(function () {\n  try {\n    if (typeof setTimeout === 'function') {\n      cachedSetTimeout = setTimeout;\n    } else {\n      cachedSetTimeout = defaultSetTimout;\n    }\n  } catch (e) {\n    cachedSetTimeout = defaultSetTimout;\n  }\n\n  try {\n    if (typeof clearTimeout === 'function') {\n      cachedClearTimeout = clearTimeout;\n    } else {\n      cachedClearTimeout = defaultClearTimeout;\n    }\n  } catch (e) {\n    cachedClearTimeout = defaultClearTimeout;\n  }\n})();\n\nfunction runTimeout(fun) {\n  if (cachedSetTimeout === setTimeout) {\n    //normal enviroments in sane situations\n    return setTimeout(fun, 0);\n  } // if setTimeout wasn't available but was latter defined\n\n\n  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n    cachedSetTimeout = setTimeout;\n    return setTimeout(fun, 0);\n  }\n\n  try {\n    // when when somebody has screwed with setTimeout but no I.E. maddness\n    return cachedSetTimeout(fun, 0);\n  } catch (e) {\n    try {\n      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n      return cachedSetTimeout.call(null, fun, 0);\n    } catch (e) {\n      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n      return cachedSetTimeout.call(this, fun, 0);\n    }\n  }\n}\n\nfunction runClearTimeout(marker) {\n  if (cachedClearTimeout === clearTimeout) {\n    //normal enviroments in sane situations\n    return clearTimeout(marker);\n  } // if clearTimeout wasn't available but was latter defined\n\n\n  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n    cachedClearTimeout = clearTimeout;\n    return clearTimeout(marker);\n  }\n\n  try {\n    // when when somebody has screwed with setTimeout but no I.E. maddness\n    return cachedClearTimeout(marker);\n  } catch (e) {\n    try {\n      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n      return cachedClearTimeout.call(null, marker);\n    } catch (e) {\n      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n      // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n      return cachedClearTimeout.call(this, marker);\n    }\n  }\n}\n\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n  if (!draining || !currentQueue) {\n    return;\n  }\n\n  draining = false;\n\n  if (currentQueue.length) {\n    queue = currentQueue.concat(queue);\n  } else {\n    queueIndex = -1;\n  }\n\n  if (queue.length) {\n    drainQueue();\n  }\n}\n\nfunction drainQueue() {\n  if (draining) {\n    return;\n  }\n\n  var timeout = runTimeout(cleanUpNextTick);\n  draining = true;\n  var len = queue.length;\n\n  while (len) {\n    currentQueue = queue;\n    queue = [];\n\n    while (++queueIndex < len) {\n      if (currentQueue) {\n        currentQueue[queueIndex].run();\n      }\n    }\n\n    queueIndex = -1;\n    len = queue.length;\n  }\n\n  currentQueue = null;\n  draining = false;\n  runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n  var args = new Array(arguments.length - 1);\n\n  if (arguments.length > 1) {\n    for (var i = 1; i < arguments.length; i++) {\n      args[i - 1] = arguments[i];\n    }\n  }\n\n  queue.push(new Item(fun, args));\n\n  if (queue.length === 1 && !draining) {\n    runTimeout(drainQueue);\n  }\n}; // v8 likes predictible objects\n\n\nfunction Item(fun, array) {\n  this.fun = fun;\n  this.array = array;\n}\n\nItem.prototype.run = function () {\n  this.fun.apply(null, this.array);\n};\n\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\n\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) {\n  return [];\n};\n\nprocess.binding = function (name) {\n  throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () {\n  return '/';\n};\n\nprocess.chdir = function (dir) {\n  throw new Error('process.chdir is not supported');\n};\n\nprocess.umask = function () {\n  return 0;\n};\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\nif (true) {\n  var invariant = __webpack_require__(/*! fbjs/lib/invariant */ \"./node_modules/fbjs/lib/invariant.js\");\n\n  var warning = __webpack_require__(/*! fbjs/lib/warning */ \"./node_modules/fbjs/lib/warning.js\");\n\n  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"./node_modules/prop-types/lib/ReactPropTypesSecret.js\");\n\n  var loggedTypeFailures = {};\n}\n/**\n * Assert that the values match with the type specs.\n * Error messages are memorized and will only be shown once.\n *\n * @param {object} typeSpecs Map of name to a ReactPropType\n * @param {object} values Runtime values that need to be type-checked\n * @param {string} location e.g. \"prop\", \"context\", \"child context\"\n * @param {string} componentName Name of the component for error messages.\n * @param {?Function} getStack Returns the component stack.\n * @private\n */\n\n\nfunction checkPropTypes(typeSpecs, values, location, componentName, getStack) {\n  if (true) {\n    for (var typeSpecName in typeSpecs) {\n      if (typeSpecs.hasOwnProperty(typeSpecName)) {\n        var error; // Prop type validation may throw. In case they do, we don't want to\n        // fail the render phase where it didn't fail before. So we log it.\n        // After these have been cleaned up, we'll let them throw.\n\n        try {\n          // This is intentionally an invariant that gets caught. It's the same\n          // behavior as without this statement except with a better message.\n          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);\n          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);\n        } catch (ex) {\n          error = ex;\n        }\n\n        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);\n\n        if (error instanceof Error && !(error.message in loggedTypeFailures)) {\n          // Only monitor this failure once because there tends to be a lot of the\n          // same error.\n          loggedTypeFailures[error.message] = true;\n          var stack = getStack ? getStack() : '';\n          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');\n        }\n      }\n    }\n  }\n}\n\nmodule.exports = checkPropTypes;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/prop-types/checkPropTypes.js?");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\nvar emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ \"./node_modules/fbjs/lib/emptyFunction.js\");\n\nvar invariant = __webpack_require__(/*! fbjs/lib/invariant */ \"./node_modules/fbjs/lib/invariant.js\");\n\nvar warning = __webpack_require__(/*! fbjs/lib/warning */ \"./node_modules/fbjs/lib/warning.js\");\n\nvar assign = __webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\");\n\nvar ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"./node_modules/prop-types/lib/ReactPropTypesSecret.js\");\n\nvar checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ \"./node_modules/prop-types/checkPropTypes.js\");\n\nmodule.exports = function (isValidElement, throwOnDirectAccess) {\n  /* global Symbol */\n  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\n  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.\n\n  /**\n   * Returns the iterator method function contained on the iterable object.\n   *\n   * Be sure to invoke the function with the iterable as context:\n   *\n   *     var iteratorFn = getIteratorFn(myIterable);\n   *     if (iteratorFn) {\n   *       var iterator = iteratorFn.call(myIterable);\n   *       ...\n   *     }\n   *\n   * @param {?object} maybeIterable\n   * @return {?function}\n   */\n\n  function getIteratorFn(maybeIterable) {\n    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);\n\n    if (typeof iteratorFn === 'function') {\n      return iteratorFn;\n    }\n  }\n  /**\n   * Collection of methods that allow declaration and validation of props that are\n   * supplied to React components. Example usage:\n   *\n   *   var Props = require('ReactPropTypes');\n   *   var MyArticle = React.createClass({\n   *     propTypes: {\n   *       // An optional string prop named \"description\".\n   *       description: Props.string,\n   *\n   *       // A required enum prop named \"category\".\n   *       category: Props.oneOf(['News','Photos']).isRequired,\n   *\n   *       // A prop named \"dialog\" that requires an instance of Dialog.\n   *       dialog: Props.instanceOf(Dialog).isRequired\n   *     },\n   *     render: function() { ... }\n   *   });\n   *\n   * A more formal specification of how these methods are used:\n   *\n   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)\n   *   decl := ReactPropTypes.{type}(.isRequired)?\n   *\n   * Each and every declaration produces a function with the same signature. This\n   * allows the creation of custom validation functions. For example:\n   *\n   *  var MyLink = React.createClass({\n   *    propTypes: {\n   *      // An optional string or URI prop named \"href\".\n   *      href: function(props, propName, componentName) {\n   *        var propValue = props[propName];\n   *        if (propValue != null && typeof propValue !== 'string' &&\n   *            !(propValue instanceof URI)) {\n   *          return new Error(\n   *            'Expected a string or an URI for ' + propName + ' in ' +\n   *            componentName\n   *          );\n   *        }\n   *      }\n   *    },\n   *    render: function() {...}\n   *  });\n   *\n   * @internal\n   */\n\n\n  var ANONYMOUS = '<<anonymous>>'; // Important!\n  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.\n\n  var ReactPropTypes = {\n    array: createPrimitiveTypeChecker('array'),\n    bool: createPrimitiveTypeChecker('boolean'),\n    func: createPrimitiveTypeChecker('function'),\n    number: createPrimitiveTypeChecker('number'),\n    object: createPrimitiveTypeChecker('object'),\n    string: createPrimitiveTypeChecker('string'),\n    symbol: createPrimitiveTypeChecker('symbol'),\n    any: createAnyTypeChecker(),\n    arrayOf: createArrayOfTypeChecker,\n    element: createElementTypeChecker(),\n    instanceOf: createInstanceTypeChecker,\n    node: createNodeChecker(),\n    objectOf: createObjectOfTypeChecker,\n    oneOf: createEnumTypeChecker,\n    oneOfType: createUnionTypeChecker,\n    shape: createShapeTypeChecker,\n    exact: createStrictShapeTypeChecker\n  };\n  /**\n   * inlined Object.is polyfill to avoid requiring consumers ship their own\n   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\n   */\n\n  /*eslint-disable no-self-compare*/\n\n  function is(x, y) {\n    // SameValue algorithm\n    if (x === y) {\n      // Steps 1-5, 7-10\n      // Steps 6.b-6.e: +0 != -0\n      return x !== 0 || 1 / x === 1 / y;\n    } else {\n      // Step 6.a: NaN == NaN\n      return x !== x && y !== y;\n    }\n  }\n  /*eslint-enable no-self-compare*/\n\n  /**\n   * We use an Error-like object for backward compatibility as people may call\n   * PropTypes directly and inspect their output. However, we don't use real\n   * Errors anymore. We don't inspect their stack anyway, and creating them\n   * is prohibitively expensive if they are created too often, such as what\n   * happens in oneOfType() for any type before the one that matched.\n   */\n\n\n  function PropTypeError(message) {\n    this.message = message;\n    this.stack = '';\n  } // Make `instanceof Error` still work for returned errors.\n\n\n  PropTypeError.prototype = Error.prototype;\n\n  function createChainableTypeChecker(validate) {\n    if (true) {\n      var manualPropTypeCallCache = {};\n      var manualPropTypeWarningCount = 0;\n    }\n\n    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {\n      componentName = componentName || ANONYMOUS;\n      propFullName = propFullName || propName;\n\n      if (secret !== ReactPropTypesSecret) {\n        if (throwOnDirectAccess) {\n          // New behavior only for users of `prop-types` package\n          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');\n        } else if (\"development\" !== 'production' && typeof console !== 'undefined') {\n          // Old behavior for people using React.PropTypes\n          var cacheKey = componentName + ':' + propName;\n\n          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors\n          manualPropTypeWarningCount < 3) {\n            warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);\n            manualPropTypeCallCache[cacheKey] = true;\n            manualPropTypeWarningCount++;\n          }\n        }\n      }\n\n      if (props[propName] == null) {\n        if (isRequired) {\n          if (props[propName] === null) {\n            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));\n          }\n\n          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));\n        }\n\n        return null;\n      } else {\n        return validate(props, propName, componentName, location, propFullName);\n      }\n    }\n\n    var chainedCheckType = checkType.bind(null, false);\n    chainedCheckType.isRequired = checkType.bind(null, true);\n    return chainedCheckType;\n  }\n\n  function createPrimitiveTypeChecker(expectedType) {\n    function validate(props, propName, componentName, location, propFullName, secret) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n\n      if (propType !== expectedType) {\n        // `propValue` being instance of, say, date/regexp, pass the 'object'\n        // check, but we can offer a more precise error message here rather than\n        // 'of type `object`'.\n        var preciseType = getPreciseType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createAnyTypeChecker() {\n    return createChainableTypeChecker(emptyFunction.thatReturnsNull);\n  }\n\n  function createArrayOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');\n      }\n\n      var propValue = props[propName];\n\n      if (!Array.isArray(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));\n      }\n\n      for (var i = 0; i < propValue.length; i++) {\n        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);\n\n        if (error instanceof Error) {\n          return error;\n        }\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createElementTypeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n\n      if (!isValidElement(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createInstanceTypeChecker(expectedClass) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!(props[propName] instanceof expectedClass)) {\n        var expectedClassName = expectedClass.name || ANONYMOUS;\n        var actualClassName = getClassName(props[propName]);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createEnumTypeChecker(expectedValues) {\n    if (!Array.isArray(expectedValues)) {\n       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : undefined;\n      return emptyFunction.thatReturnsNull;\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n\n      for (var i = 0; i < expectedValues.length; i++) {\n        if (is(propValue, expectedValues[i])) {\n          return null;\n        }\n      }\n\n      var valuesString = JSON.stringify(expectedValues);\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createObjectOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');\n      }\n\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));\n      }\n\n      for (var key in propValue) {\n        if (propValue.hasOwnProperty(key)) {\n          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n\n          if (error instanceof Error) {\n            return error;\n          }\n        }\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createUnionTypeChecker(arrayOfTypeCheckers) {\n    if (!Array.isArray(arrayOfTypeCheckers)) {\n       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;\n      return emptyFunction.thatReturnsNull;\n    }\n\n    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n      var checker = arrayOfTypeCheckers[i];\n\n      if (typeof checker !== 'function') {\n        warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);\n        return emptyFunction.thatReturnsNull;\n      }\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n        var checker = arrayOfTypeCheckers[i];\n\n        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {\n          return null;\n        }\n      }\n\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createNodeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!isNode(props[propName])) {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n\n      for (var key in shapeTypes) {\n        var checker = shapeTypes[key];\n\n        if (!checker) {\n          continue;\n        }\n\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n\n        if (error) {\n          return error;\n        }\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function createStrictShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      } // We need to check all keys in case some are required but missing from\n      // props.\n\n\n      var allKeys = assign({}, props[propName], shapeTypes);\n\n      for (var key in allKeys) {\n        var checker = shapeTypes[key];\n\n        if (!checker) {\n          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));\n        }\n\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n\n        if (error) {\n          return error;\n        }\n      }\n\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function isNode(propValue) {\n    switch (typeof propValue) {\n      case 'number':\n      case 'string':\n      case 'undefined':\n        return true;\n\n      case 'boolean':\n        return !propValue;\n\n      case 'object':\n        if (Array.isArray(propValue)) {\n          return propValue.every(isNode);\n        }\n\n        if (propValue === null || isValidElement(propValue)) {\n          return true;\n        }\n\n        var iteratorFn = getIteratorFn(propValue);\n\n        if (iteratorFn) {\n          var iterator = iteratorFn.call(propValue);\n          var step;\n\n          if (iteratorFn !== propValue.entries) {\n            while (!(step = iterator.next()).done) {\n              if (!isNode(step.value)) {\n                return false;\n              }\n            }\n          } else {\n            // Iterator will provide entry [k,v] tuples rather than values.\n            while (!(step = iterator.next()).done) {\n              var entry = step.value;\n\n              if (entry) {\n                if (!isNode(entry[1])) {\n                  return false;\n                }\n              }\n            }\n          }\n        } else {\n          return false;\n        }\n\n        return true;\n\n      default:\n        return false;\n    }\n  }\n\n  function isSymbol(propType, propValue) {\n    // Native Symbol.\n    if (propType === 'symbol') {\n      return true;\n    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'\n\n\n    if (propValue['@@toStringTag'] === 'Symbol') {\n      return true;\n    } // Fallback for non-spec compliant Symbols which are polyfilled.\n\n\n    if (typeof Symbol === 'function' && propValue instanceof Symbol) {\n      return true;\n    }\n\n    return false;\n  } // Equivalent of `typeof` but with special handling for array and regexp.\n\n\n  function getPropType(propValue) {\n    var propType = typeof propValue;\n\n    if (Array.isArray(propValue)) {\n      return 'array';\n    }\n\n    if (propValue instanceof RegExp) {\n      // Old webkits (at least until Android 4.0) return 'function' rather than\n      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/\n      // passes PropTypes.object.\n      return 'object';\n    }\n\n    if (isSymbol(propType, propValue)) {\n      return 'symbol';\n    }\n\n    return propType;\n  } // This handles more types than `getPropType`. Only used for error messages.\n  // See `createPrimitiveTypeChecker`.\n\n\n  function getPreciseType(propValue) {\n    if (typeof propValue === 'undefined' || propValue === null) {\n      return '' + propValue;\n    }\n\n    var propType = getPropType(propValue);\n\n    if (propType === 'object') {\n      if (propValue instanceof Date) {\n        return 'date';\n      } else if (propValue instanceof RegExp) {\n        return 'regexp';\n      }\n    }\n\n    return propType;\n  } // Returns a string that is postfixed to a warning about an invalid type.\n  // For example, \"undefined\" or \"of type array\"\n\n\n  function getPostfixForTypeWarning(value) {\n    var type = getPreciseType(value);\n\n    switch (type) {\n      case 'array':\n      case 'object':\n        return 'an ' + type;\n\n      case 'boolean':\n      case 'date':\n      case 'regexp':\n        return 'a ' + type;\n\n      default:\n        return type;\n    }\n  } // Returns class name of the object, if any.\n\n\n  function getClassName(propValue) {\n    if (!propValue.constructor || !propValue.constructor.name) {\n      return ANONYMOUS;\n    }\n\n    return propValue.constructor.name;\n  }\n\n  ReactPropTypes.checkPropTypes = checkPropTypes;\n  ReactPropTypes.PropTypes = ReactPropTypes;\n  return ReactPropTypes;\n};\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/prop-types/factoryWithTypeCheckers.js?");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nif (true) {\n  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;\n\n  var isValidElement = function (object) {\n    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n  }; // By explicitly using `prop-types` you are opting into new development behavior.\n  // http://fb.me/prop-types-in-prod\n\n\n  var throwOnDirectAccess = true;\n  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ \"./node_modules/prop-types/factoryWithTypeCheckers.js\")(isValidElement, throwOnDirectAccess);\n} else {}\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/prop-types/index.js?");

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\nmodule.exports = ReactPropTypesSecret;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/prop-types/lib/ReactPropTypesSecret.js?");

/***/ }),

/***/ "./node_modules/ramda/src/ap.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/src/ap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _concat =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_concat */ \"./node_modules/ramda/src/internal/_concat.js\");\n\nvar _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _reduce =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/src/internal/_reduce.js\");\n\nvar map =\n/*#__PURE__*/\n__webpack_require__(/*! ./map */ \"./node_modules/ramda/src/map.js\");\n/**\n * ap applies a list of functions to a list of values.\n *\n * Dispatches to the `ap` method of the second argument, if present. Also\n * treats curried functions as applicatives.\n *\n * @func\n * @memberOf R\n * @since v0.3.0\n * @category Function\n * @sig [a -> b] -> [a] -> [b]\n * @sig Apply f => f (a -> b) -> f a -> f b\n * @sig (a -> b -> c) -> (a -> b) -> (a -> c)\n * @param {*} applyF\n * @param {*} applyX\n * @return {*}\n * @example\n *\n *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]\n *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> [\"tasty pizza\", \"tasty salad\", \"PIZZA\", \"SALAD\"]\n *\n *      // R.ap can also be used as S combinator\n *      // when only two functions are passed\n *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'\n * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]\n */\n\n\nvar ap =\n/*#__PURE__*/\n_curry2(function ap(applyF, applyX) {\n  return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {\n    return applyF(x)(applyX(x));\n  } : // else\n  _reduce(function (acc, f) {\n    return _concat(acc, map(f, applyX));\n  }, [], applyF);\n});\n\nmodule.exports = ap;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/ap.js?");

/***/ }),

/***/ "./node_modules/ramda/src/bind.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/bind.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _arity =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/src/internal/_arity.js\");\n\nvar _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n/**\n * Creates a function that is bound to a context.\n * Note: `R.bind` does not provide the additional argument-binding capabilities of\n * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).\n *\n * @func\n * @memberOf R\n * @since v0.6.0\n * @category Function\n * @category Object\n * @sig (* -> *) -> {*} -> (* -> *)\n * @param {Function} fn The function to bind to context\n * @param {Object} thisObj The context to bind `fn` to\n * @return {Function} A function that will execute in the context of `thisObj`.\n * @see R.partial\n * @example\n *\n *      var log = R.bind(console.log, console);\n *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}\n *      // logs {a: 2}\n * @symb R.bind(f, o)(a, b) = f.call(o, a, b)\n */\n\n\nvar bind =\n/*#__PURE__*/\n_curry2(function bind(fn, thisObj) {\n  return _arity(fn.length, function () {\n    return fn.apply(thisObj, arguments);\n  });\n});\n\nmodule.exports = bind;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/bind.js?");

/***/ }),

/***/ "./node_modules/ramda/src/complement.js":
/*!**********************************************!*\
  !*** ./node_modules/ramda/src/complement.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var lift =\n/*#__PURE__*/\n__webpack_require__(/*! ./lift */ \"./node_modules/ramda/src/lift.js\");\n\nvar not =\n/*#__PURE__*/\n__webpack_require__(/*! ./not */ \"./node_modules/ramda/src/not.js\");\n/**\n * Takes a function `f` and returns a function `g` such that if called with the same arguments\n * when `f` returns a \"truthy\" value, `g` returns `false` and when `f` returns a \"falsy\" value `g` returns `true`.\n *\n * `R.complement` may be applied to any functor\n *\n * @func\n * @memberOf R\n * @since v0.12.0\n * @category Logic\n * @sig (*... -> *) -> (*... -> Boolean)\n * @param {Function} f\n * @return {Function}\n * @see R.not\n * @example\n *\n *      var isNotNil = R.complement(R.isNil);\n *      isNil(null); //=> true\n *      isNotNil(null); //=> false\n *      isNil(7); //=> false\n *      isNotNil(7); //=> true\n */\n\n\nvar complement =\n/*#__PURE__*/\nlift(not);\nmodule.exports = complement;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/complement.js?");

/***/ }),

/***/ "./node_modules/ramda/src/compose.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/compose.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pipe =\n/*#__PURE__*/\n__webpack_require__(/*! ./pipe */ \"./node_modules/ramda/src/pipe.js\");\n\nvar reverse =\n/*#__PURE__*/\n__webpack_require__(/*! ./reverse */ \"./node_modules/ramda/src/reverse.js\");\n/**\n * Performs right-to-left function composition. The rightmost function may have\n * any arity; the remaining functions must be unary.\n *\n * **Note:** The result of compose is not automatically curried.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)\n * @param {...Function} ...functions The functions to compose\n * @return {Function}\n * @see R.pipe\n * @example\n *\n *      var classyGreeting = (firstName, lastName) => \"The name's \" + lastName + \", \" + firstName + \" \" + lastName\n *      var yellGreeting = R.compose(R.toUpper, classyGreeting);\n *      yellGreeting('James', 'Bond'); //=> \"THE NAME'S BOND, JAMES BOND\"\n *\n *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7\n *\n * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))\n */\n\n\nfunction compose() {\n  if (arguments.length === 0) {\n    throw new Error('compose requires at least one argument');\n  }\n\n  return pipe.apply(this, reverse(arguments));\n}\n\nmodule.exports = compose;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/compose.js?");

/***/ }),

/***/ "./node_modules/ramda/src/contains.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/contains.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _contains =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_contains */ \"./node_modules/ramda/src/internal/_contains.js\");\n\nvar _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n/**\n * Returns `true` if the specified value is equal, in [`R.equals`](#equals)\n * terms, to at least one element of the given list; `false` otherwise.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig a -> [a] -> Boolean\n * @param {Object} a The item to compare against.\n * @param {Array} list The array to consider.\n * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.\n * @see R.any\n * @example\n *\n *      R.contains(3, [1, 2, 3]); //=> true\n *      R.contains(4, [1, 2, 3]); //=> false\n *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true\n *      R.contains([42], [[42]]); //=> true\n */\n\n\nvar contains =\n/*#__PURE__*/\n_curry2(_contains);\n\nmodule.exports = contains;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/contains.js?");

/***/ }),

/***/ "./node_modules/ramda/src/curryN.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/curryN.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _arity =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/src/internal/_arity.js\");\n\nvar _curry1 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _curryN =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curryN */ \"./node_modules/ramda/src/internal/_curryN.js\");\n/**\n * Returns a curried equivalent of the provided function, with the specified\n * arity. The curried function has two unusual capabilities. First, its\n * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the\n * following are equivalent:\n *\n *   - `g(1)(2)(3)`\n *   - `g(1)(2, 3)`\n *   - `g(1, 2)(3)`\n *   - `g(1, 2, 3)`\n *\n * Secondly, the special placeholder value [`R.__`](#__) may be used to specify\n * \"gaps\", allowing partial application of any combination of arguments,\n * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),\n * the following are equivalent:\n *\n *   - `g(1, 2, 3)`\n *   - `g(_, 2, 3)(1)`\n *   - `g(_, _, 3)(1)(2)`\n *   - `g(_, _, 3)(1, 2)`\n *   - `g(_, 2)(1)(3)`\n *   - `g(_, 2)(1, 3)`\n *   - `g(_, 2)(_, 3)(1)`\n *\n * @func\n * @memberOf R\n * @since v0.5.0\n * @category Function\n * @sig Number -> (* -> a) -> (* -> a)\n * @param {Number} length The arity for the returned function.\n * @param {Function} fn The function to curry.\n * @return {Function} A new, curried function.\n * @see R.curry\n * @example\n *\n *      var sumArgs = (...args) => R.sum(args);\n *\n *      var curriedAddFourNumbers = R.curryN(4, sumArgs);\n *      var f = curriedAddFourNumbers(1, 2);\n *      var g = f(3);\n *      g(4); //=> 10\n */\n\n\nvar curryN =\n/*#__PURE__*/\n_curry2(function curryN(length, fn) {\n  if (length === 1) {\n    return _curry1(fn);\n  }\n\n  return _arity(length, _curryN(length, [], fn));\n});\n\nmodule.exports = curryN;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/curryN.js?");

/***/ }),

/***/ "./node_modules/ramda/src/defaultTo.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/defaultTo.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n/**\n * Returns the second argument if it is not `null`, `undefined` or `NaN`;\n * otherwise the first argument is returned.\n *\n * @func\n * @memberOf R\n * @since v0.10.0\n * @category Logic\n * @sig a -> b -> a | b\n * @param {a} default The default value.\n * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.\n * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value\n * @example\n *\n *      var defaultTo42 = R.defaultTo(42);\n *\n *      defaultTo42(null);  //=> 42\n *      defaultTo42(undefined);  //=> 42\n *      defaultTo42('Ramda');  //=> 'Ramda'\n *      // parseInt('string') results in NaN\n *      defaultTo42(parseInt('string')); //=> 42\n */\n\n\nvar defaultTo =\n/*#__PURE__*/\n_curry2(function defaultTo(d, v) {\n  return v == null || v !== v ? d : v;\n});\n\nmodule.exports = defaultTo;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/defaultTo.js?");

/***/ }),

/***/ "./node_modules/ramda/src/empty.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/empty.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _isArguments =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_isArguments */ \"./node_modules/ramda/src/internal/_isArguments.js\");\n\nvar _isArray =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_isArray */ \"./node_modules/ramda/src/internal/_isArray.js\");\n\nvar _isObject =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_isObject */ \"./node_modules/ramda/src/internal/_isObject.js\");\n\nvar _isString =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_isString */ \"./node_modules/ramda/src/internal/_isString.js\");\n/**\n * Returns the empty value of its argument's type. Ramda defines the empty\n * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other\n * types are supported if they define `<Type>.empty`,\n * `<Type>.prototype.empty` or implement the\n * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).\n *\n * Dispatches to the `empty` method of the first argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.3.0\n * @category Function\n * @sig a -> a\n * @param {*} x\n * @return {*}\n * @example\n *\n *      R.empty(Just(42));      //=> Nothing()\n *      R.empty([1, 2, 3]);     //=> []\n *      R.empty('unicorns');    //=> ''\n *      R.empty({x: 1, y: 2});  //=> {}\n */\n\n\nvar empty =\n/*#__PURE__*/\n_curry1(function empty(x) {\n  return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? '' : _isObject(x) ? {} : _isArguments(x) ? function () {\n    return arguments;\n  }() : // else\n  void 0;\n});\n\nmodule.exports = empty;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/empty.js?");

/***/ }),

/***/ "./node_modules/ramda/src/equals.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/equals.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _equals =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_equals */ \"./node_modules/ramda/src/internal/_equals.js\");\n/**\n * Returns `true` if its arguments are equivalent, `false` otherwise. Handles\n * cyclical data structures.\n *\n * Dispatches symmetrically to the `equals` methods of both arguments, if\n * present.\n *\n * @func\n * @memberOf R\n * @since v0.15.0\n * @category Relation\n * @sig a -> b -> Boolean\n * @param {*} a\n * @param {*} b\n * @return {Boolean}\n * @example\n *\n *      R.equals(1, 1); //=> true\n *      R.equals(1, '1'); //=> false\n *      R.equals([1, 2, 3], [1, 2, 3]); //=> true\n *\n *      var a = {}; a.v = a;\n *      var b = {}; b.v = b;\n *      R.equals(a, b); //=> true\n */\n\n\nvar equals =\n/*#__PURE__*/\n_curry2(function equals(a, b) {\n  return _equals(a, b, [], []);\n});\n\nmodule.exports = equals;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/equals.js?");

/***/ }),

/***/ "./node_modules/ramda/src/identical.js":
/*!*********************************************!*\
  !*** ./node_modules/ramda/src/identical.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n/**\n * Returns true if its arguments are identical, false otherwise. Values are\n * identical if they reference the same memory. `NaN` is identical to `NaN`;\n * `0` and `-0` are not identical.\n *\n * @func\n * @memberOf R\n * @since v0.15.0\n * @category Relation\n * @sig a -> a -> Boolean\n * @param {*} a\n * @param {*} b\n * @return {Boolean}\n * @example\n *\n *      var o = {};\n *      R.identical(o, o); //=> true\n *      R.identical(1, 1); //=> true\n *      R.identical(1, '1'); //=> false\n *      R.identical([], []); //=> false\n *      R.identical(0, -0); //=> false\n *      R.identical(NaN, NaN); //=> true\n */\n\n\nvar identical =\n/*#__PURE__*/\n_curry2(function identical(a, b) {\n  // SameValue algorithm\n  if (a === b) {\n    // Steps 1-5, 7-10\n    // Steps 6.b-6.e: +0 != -0\n    return a !== 0 || 1 / a === 1 / b;\n  } else {\n    // Step 6.a: NaN == NaN\n    return a !== a && b !== b;\n  }\n});\n\nmodule.exports = identical;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/identical.js?");

/***/ }),

/***/ "./node_modules/ramda/src/identity.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/identity.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _identity =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_identity */ \"./node_modules/ramda/src/internal/_identity.js\");\n/**\n * A function that does nothing but return the parameter supplied to it. Good\n * as a default or placeholder function.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig a -> a\n * @param {*} x The value to return.\n * @return {*} The input value, `x`.\n * @example\n *\n *      R.identity(1); //=> 1\n *\n *      var obj = {};\n *      R.identity(obj) === obj; //=> true\n * @symb R.identity(a) = a\n */\n\n\nvar identity =\n/*#__PURE__*/\n_curry1(_identity);\n\nmodule.exports = identity;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/identity.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_arity.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_arity.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arity(n, fn) {\n  /* eslint-disable no-unused-vars */\n  switch (n) {\n    case 0:\n      return function () {\n        return fn.apply(this, arguments);\n      };\n\n    case 1:\n      return function (a0) {\n        return fn.apply(this, arguments);\n      };\n\n    case 2:\n      return function (a0, a1) {\n        return fn.apply(this, arguments);\n      };\n\n    case 3:\n      return function (a0, a1, a2) {\n        return fn.apply(this, arguments);\n      };\n\n    case 4:\n      return function (a0, a1, a2, a3) {\n        return fn.apply(this, arguments);\n      };\n\n    case 5:\n      return function (a0, a1, a2, a3, a4) {\n        return fn.apply(this, arguments);\n      };\n\n    case 6:\n      return function (a0, a1, a2, a3, a4, a5) {\n        return fn.apply(this, arguments);\n      };\n\n    case 7:\n      return function (a0, a1, a2, a3, a4, a5, a6) {\n        return fn.apply(this, arguments);\n      };\n\n    case 8:\n      return function (a0, a1, a2, a3, a4, a5, a6, a7) {\n        return fn.apply(this, arguments);\n      };\n\n    case 9:\n      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {\n        return fn.apply(this, arguments);\n      };\n\n    case 10:\n      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {\n        return fn.apply(this, arguments);\n      };\n\n    default:\n      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');\n  }\n}\n\nmodule.exports = _arity;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_arity.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_arrayFromIterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/ramda/src/internal/_arrayFromIterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayFromIterator(iter) {\n  var list = [];\n  var next;\n\n  while (!(next = iter.next()).done) {\n    list.push(next.value);\n  }\n\n  return list;\n}\n\nmodule.exports = _arrayFromIterator;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_arrayFromIterator.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_checkForMethod.js":
/*!************************************************************!*\
  !*** ./node_modules/ramda/src/internal/_checkForMethod.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _isArray =\n/*#__PURE__*/\n__webpack_require__(/*! ./_isArray */ \"./node_modules/ramda/src/internal/_isArray.js\");\n/**\n * This checks whether a function has a [methodname] function. If it isn't an\n * array it will execute that function otherwise it will default to the ramda\n * implementation.\n *\n * @private\n * @param {Function} fn ramda implemtation\n * @param {String} methodname property to check for a custom implementation\n * @return {Object} Whatever the return value of the method is.\n */\n\n\nfunction _checkForMethod(methodname, fn) {\n  return function () {\n    var length = arguments.length;\n\n    if (length === 0) {\n      return fn();\n    }\n\n    var obj = arguments[length - 1];\n    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));\n  };\n}\n\nmodule.exports = _checkForMethod;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_checkForMethod.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_concat.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_concat.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Private `concat` function to merge two array-like objects.\n *\n * @private\n * @param {Array|Arguments} [set1=[]] An array-like object.\n * @param {Array|Arguments} [set2=[]] An array-like object.\n * @return {Array} A new, merged array.\n * @example\n *\n *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]\n */\nfunction _concat(set1, set2) {\n  set1 = set1 || [];\n  set2 = set2 || [];\n  var idx;\n  var len1 = set1.length;\n  var len2 = set2.length;\n  var result = [];\n  idx = 0;\n\n  while (idx < len1) {\n    result[result.length] = set1[idx];\n    idx += 1;\n  }\n\n  idx = 0;\n\n  while (idx < len2) {\n    result[result.length] = set2[idx];\n    idx += 1;\n  }\n\n  return result;\n}\n\nmodule.exports = _concat;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_concat.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_contains.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_contains.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _indexOf =\n/*#__PURE__*/\n__webpack_require__(/*! ./_indexOf */ \"./node_modules/ramda/src/internal/_indexOf.js\");\n\nfunction _contains(a, list) {\n  return _indexOf(list, a, 0) >= 0;\n}\n\nmodule.exports = _contains;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_contains.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_containsWith.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_containsWith.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _containsWith(pred, x, list) {\n  var idx = 0;\n  var len = list.length;\n\n  while (idx < len) {\n    if (pred(x, list[idx])) {\n      return true;\n    }\n\n    idx += 1;\n  }\n\n  return false;\n}\n\nmodule.exports = _containsWith;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_containsWith.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry1.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry1.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _isPlaceholder =\n/*#__PURE__*/\n__webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/src/internal/_isPlaceholder.js\");\n/**\n * Optimized internal one-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\n\nfunction _curry1(fn) {\n  return function f1(a) {\n    if (arguments.length === 0 || _isPlaceholder(a)) {\n      return f1;\n    } else {\n      return fn.apply(this, arguments);\n    }\n  };\n}\n\nmodule.exports = _curry1;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_curry1.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry2.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry2.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 =\n/*#__PURE__*/\n__webpack_require__(/*! ./_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _isPlaceholder =\n/*#__PURE__*/\n__webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/src/internal/_isPlaceholder.js\");\n/**\n * Optimized internal two-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\n\nfunction _curry2(fn) {\n  return function f2(a, b) {\n    switch (arguments.length) {\n      case 0:\n        return f2;\n\n      case 1:\n        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {\n          return fn(a, _b);\n        });\n\n      default:\n        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {\n          return fn(_a, b);\n        }) : _isPlaceholder(b) ? _curry1(function (_b) {\n          return fn(a, _b);\n        }) : fn(a, b);\n    }\n  };\n}\n\nmodule.exports = _curry2;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_curry2.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry3.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry3.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 =\n/*#__PURE__*/\n__webpack_require__(/*! ./_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _isPlaceholder =\n/*#__PURE__*/\n__webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/src/internal/_isPlaceholder.js\");\n/**\n * Optimized internal three-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\n\nfunction _curry3(fn) {\n  return function f3(a, b, c) {\n    switch (arguments.length) {\n      case 0:\n        return f3;\n\n      case 1:\n        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {\n          return fn(a, _b, _c);\n        });\n\n      case 2:\n        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {\n          return fn(_a, b, _c);\n        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {\n          return fn(a, _b, _c);\n        }) : _curry1(function (_c) {\n          return fn(a, b, _c);\n        });\n\n      default:\n        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {\n          return fn(_a, _b, c);\n        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {\n          return fn(_a, b, _c);\n        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {\n          return fn(a, _b, _c);\n        }) : _isPlaceholder(a) ? _curry1(function (_a) {\n          return fn(_a, b, c);\n        }) : _isPlaceholder(b) ? _curry1(function (_b) {\n          return fn(a, _b, c);\n        }) : _isPlaceholder(c) ? _curry1(function (_c) {\n          return fn(a, b, _c);\n        }) : fn(a, b, c);\n    }\n  };\n}\n\nmodule.exports = _curry3;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_curry3.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curryN.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curryN.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _arity =\n/*#__PURE__*/\n__webpack_require__(/*! ./_arity */ \"./node_modules/ramda/src/internal/_arity.js\");\n\nvar _isPlaceholder =\n/*#__PURE__*/\n__webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/src/internal/_isPlaceholder.js\");\n/**\n * Internal curryN function.\n *\n * @private\n * @category Function\n * @param {Number} length The arity of the curried function.\n * @param {Array} received An array of arguments received thus far.\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\n\nfunction _curryN(length, received, fn) {\n  return function () {\n    var combined = [];\n    var argsIdx = 0;\n    var left = length;\n    var combinedIdx = 0;\n\n    while (combinedIdx < received.length || argsIdx < arguments.length) {\n      var result;\n\n      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {\n        result = received[combinedIdx];\n      } else {\n        result = arguments[argsIdx];\n        argsIdx += 1;\n      }\n\n      combined[combinedIdx] = result;\n\n      if (!_isPlaceholder(result)) {\n        left -= 1;\n      }\n\n      combinedIdx += 1;\n    }\n\n    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));\n  };\n}\n\nmodule.exports = _curryN;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_curryN.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_dispatchable.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_dispatchable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _isArray =\n/*#__PURE__*/\n__webpack_require__(/*! ./_isArray */ \"./node_modules/ramda/src/internal/_isArray.js\");\n\nvar _isTransformer =\n/*#__PURE__*/\n__webpack_require__(/*! ./_isTransformer */ \"./node_modules/ramda/src/internal/_isTransformer.js\");\n/**\n * Returns a function that dispatches with different strategies based on the\n * object in list position (last argument). If it is an array, executes [fn].\n * Otherwise, if it has a function with one of the given method names, it will\n * execute that function (functor case). Otherwise, if it is a transformer,\n * uses transducer [xf] to return a new transformer (transducer case).\n * Otherwise, it will default to executing [fn].\n *\n * @private\n * @param {Array} methodNames properties to check for a custom implementation\n * @param {Function} xf transducer to initialize if object is transformer\n * @param {Function} fn default ramda implementation\n * @return {Function} A function that dispatches on object in list position\n */\n\n\nfunction _dispatchable(methodNames, xf, fn) {\n  return function () {\n    if (arguments.length === 0) {\n      return fn();\n    }\n\n    var args = Array.prototype.slice.call(arguments, 0);\n    var obj = args.pop();\n\n    if (!_isArray(obj)) {\n      var idx = 0;\n\n      while (idx < methodNames.length) {\n        if (typeof obj[methodNames[idx]] === 'function') {\n          return obj[methodNames[idx]].apply(obj, args);\n        }\n\n        idx += 1;\n      }\n\n      if (_isTransformer(obj)) {\n        var transducer = xf.apply(null, args);\n        return transducer(obj);\n      }\n    }\n\n    return fn.apply(this, arguments);\n  };\n}\n\nmodule.exports = _dispatchable;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_dispatchable.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_equals.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_equals.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _arrayFromIterator =\n/*#__PURE__*/\n__webpack_require__(/*! ./_arrayFromIterator */ \"./node_modules/ramda/src/internal/_arrayFromIterator.js\");\n\nvar _containsWith =\n/*#__PURE__*/\n__webpack_require__(/*! ./_containsWith */ \"./node_modules/ramda/src/internal/_containsWith.js\");\n\nvar _functionName =\n/*#__PURE__*/\n__webpack_require__(/*! ./_functionName */ \"./node_modules/ramda/src/internal/_functionName.js\");\n\nvar _has =\n/*#__PURE__*/\n__webpack_require__(/*! ./_has */ \"./node_modules/ramda/src/internal/_has.js\");\n\nvar identical =\n/*#__PURE__*/\n__webpack_require__(/*! ../identical */ \"./node_modules/ramda/src/identical.js\");\n\nvar keys =\n/*#__PURE__*/\n__webpack_require__(/*! ../keys */ \"./node_modules/ramda/src/keys.js\");\n\nvar type =\n/*#__PURE__*/\n__webpack_require__(/*! ../type */ \"./node_modules/ramda/src/type.js\");\n/**\n * private _uniqContentEquals function.\n * That function is checking equality of 2 iterator contents with 2 assumptions\n * - iterators lengths are the same\n * - iterators values are unique\n *\n * false-positive result will be returned for comparision of, e.g.\n * - [1,2,3] and [1,2,3,4]\n * - [1,1,1] and [1,2,3]\n * */\n\n\nfunction _uniqContentEquals(aIterator, bIterator, stackA, stackB) {\n  var a = _arrayFromIterator(aIterator);\n\n  var b = _arrayFromIterator(bIterator);\n\n  function eq(_a, _b) {\n    return _equals(_a, _b, stackA.slice(), stackB.slice());\n  } // if *a* array contains any element that is not included in *b*\n\n\n  return !_containsWith(function (b, aItem) {\n    return !_containsWith(eq, aItem, b);\n  }, b, a);\n}\n\nfunction _equals(a, b, stackA, stackB) {\n  if (identical(a, b)) {\n    return true;\n  }\n\n  var typeA = type(a);\n\n  if (typeA !== type(b)) {\n    return false;\n  }\n\n  if (a == null || b == null) {\n    return false;\n  }\n\n  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {\n    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);\n  }\n\n  if (typeof a.equals === 'function' || typeof b.equals === 'function') {\n    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);\n  }\n\n  switch (typeA) {\n    case 'Arguments':\n    case 'Array':\n    case 'Object':\n      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {\n        return a === b;\n      }\n\n      break;\n\n    case 'Boolean':\n    case 'Number':\n    case 'String':\n      if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {\n        return false;\n      }\n\n      break;\n\n    case 'Date':\n      if (!identical(a.valueOf(), b.valueOf())) {\n        return false;\n      }\n\n      break;\n\n    case 'Error':\n      return a.name === b.name && a.message === b.message;\n\n    case 'RegExp':\n      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {\n        return false;\n      }\n\n      break;\n  }\n\n  var idx = stackA.length - 1;\n\n  while (idx >= 0) {\n    if (stackA[idx] === a) {\n      return stackB[idx] === b;\n    }\n\n    idx -= 1;\n  }\n\n  switch (typeA) {\n    case 'Map':\n      if (a.size !== b.size) {\n        return false;\n      }\n\n      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));\n\n    case 'Set':\n      if (a.size !== b.size) {\n        return false;\n      }\n\n      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));\n\n    case 'Arguments':\n    case 'Array':\n    case 'Object':\n    case 'Boolean':\n    case 'Number':\n    case 'String':\n    case 'Date':\n    case 'Error':\n    case 'RegExp':\n    case 'Int8Array':\n    case 'Uint8Array':\n    case 'Uint8ClampedArray':\n    case 'Int16Array':\n    case 'Uint16Array':\n    case 'Int32Array':\n    case 'Uint32Array':\n    case 'Float32Array':\n    case 'Float64Array':\n    case 'ArrayBuffer':\n      break;\n\n    default:\n      // Values of other types are only equal if identical.\n      return false;\n  }\n\n  var keysA = keys(a);\n\n  if (keysA.length !== keys(b).length) {\n    return false;\n  }\n\n  var extendedStackA = stackA.concat([a]);\n  var extendedStackB = stackB.concat([b]);\n  idx = keysA.length - 1;\n\n  while (idx >= 0) {\n    var key = keysA[idx];\n\n    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {\n      return false;\n    }\n\n    idx -= 1;\n  }\n\n  return true;\n}\n\nmodule.exports = _equals;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_equals.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_functionName.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_functionName.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _functionName(f) {\n  // String(x => x) evaluates to \"x => x\", so the pattern may not match.\n  var match = String(f).match(/^function (\\w*)/);\n  return match == null ? '' : match[1];\n}\n\nmodule.exports = _functionName;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_functionName.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_has.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/internal/_has.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _has(prop, obj) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\nmodule.exports = _has;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_has.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_identity.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_identity.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _identity(x) {\n  return x;\n}\n\nmodule.exports = _identity;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_identity.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_indexOf.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_indexOf.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var equals =\n/*#__PURE__*/\n__webpack_require__(/*! ../equals */ \"./node_modules/ramda/src/equals.js\");\n\nfunction _indexOf(list, a, idx) {\n  var inf, item; // Array.prototype.indexOf doesn't exist below IE9\n\n  if (typeof list.indexOf === 'function') {\n    switch (typeof a) {\n      case 'number':\n        if (a === 0) {\n          // manually crawl the list to distinguish between +0 and -0\n          inf = 1 / a;\n\n          while (idx < list.length) {\n            item = list[idx];\n\n            if (item === 0 && 1 / item === inf) {\n              return idx;\n            }\n\n            idx += 1;\n          }\n\n          return -1;\n        } else if (a !== a) {\n          // NaN\n          while (idx < list.length) {\n            item = list[idx];\n\n            if (typeof item === 'number' && item !== item) {\n              return idx;\n            }\n\n            idx += 1;\n          }\n\n          return -1;\n        } // non-zero numbers can utilise Set\n\n\n        return list.indexOf(a, idx);\n      // all these types can utilise Set\n\n      case 'string':\n      case 'boolean':\n      case 'function':\n      case 'undefined':\n        return list.indexOf(a, idx);\n\n      case 'object':\n        if (a === null) {\n          // null can utilise Set\n          return list.indexOf(a, idx);\n        }\n\n    }\n  } // anything else not covered above, defer to R.equals\n\n\n  while (idx < list.length) {\n    if (equals(list[idx], a)) {\n      return idx;\n    }\n\n    idx += 1;\n  }\n\n  return -1;\n}\n\nmodule.exports = _indexOf;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_indexOf.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isArguments.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isArguments.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _has =\n/*#__PURE__*/\n__webpack_require__(/*! ./_has */ \"./node_modules/ramda/src/internal/_has.js\");\n\nvar toString = Object.prototype.toString;\n\nvar _isArguments = function () {\n  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {\n    return toString.call(x) === '[object Arguments]';\n  } : function _isArguments(x) {\n    return _has('callee', x);\n  };\n};\n\nmodule.exports = _isArguments;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_isArguments.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isArray.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Tests whether or not an object is an array.\n *\n * @private\n * @param {*} val The object to test.\n * @return {Boolean} `true` if `val` is an array, `false` otherwise.\n * @example\n *\n *      _isArray([]); //=> true\n *      _isArray(null); //=> false\n *      _isArray({}); //=> false\n */\nmodule.exports = Array.isArray || function _isArray(val) {\n  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';\n};\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_isArray.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isArrayLike.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isArrayLike.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 =\n/*#__PURE__*/\n__webpack_require__(/*! ./_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _isArray =\n/*#__PURE__*/\n__webpack_require__(/*! ./_isArray */ \"./node_modules/ramda/src/internal/_isArray.js\");\n\nvar _isString =\n/*#__PURE__*/\n__webpack_require__(/*! ./_isString */ \"./node_modules/ramda/src/internal/_isString.js\");\n/**\n * Tests whether or not an object is similar to an array.\n *\n * @private\n * @category Type\n * @category List\n * @sig * -> Boolean\n * @param {*} x The object to test.\n * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.\n * @example\n *\n *      _isArrayLike([]); //=> true\n *      _isArrayLike(true); //=> false\n *      _isArrayLike({}); //=> false\n *      _isArrayLike({length: 10}); //=> false\n *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true\n */\n\n\nvar _isArrayLike =\n/*#__PURE__*/\n_curry1(function isArrayLike(x) {\n  if (_isArray(x)) {\n    return true;\n  }\n\n  if (!x) {\n    return false;\n  }\n\n  if (typeof x !== 'object') {\n    return false;\n  }\n\n  if (_isString(x)) {\n    return false;\n  }\n\n  if (x.nodeType === 1) {\n    return !!x.length;\n  }\n\n  if (x.length === 0) {\n    return true;\n  }\n\n  if (x.length > 0) {\n    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);\n  }\n\n  return false;\n});\n\nmodule.exports = _isArrayLike;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_isArrayLike.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isObject.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isObject.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _isObject(x) {\n  return Object.prototype.toString.call(x) === '[object Object]';\n}\n\nmodule.exports = _isObject;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_isObject.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isPlaceholder.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isPlaceholder.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _isPlaceholder(a) {\n  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;\n}\n\nmodule.exports = _isPlaceholder;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_isPlaceholder.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isString.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isString.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _isString(x) {\n  return Object.prototype.toString.call(x) === '[object String]';\n}\n\nmodule.exports = _isString;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_isString.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isTransformer.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isTransformer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _isTransformer(obj) {\n  return typeof obj['@@transducer/step'] === 'function';\n}\n\nmodule.exports = _isTransformer;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_isTransformer.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_map.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/internal/_map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _map(fn, functor) {\n  var idx = 0;\n  var len = functor.length;\n  var result = Array(len);\n\n  while (idx < len) {\n    result[idx] = fn(functor[idx]);\n    idx += 1;\n  }\n\n  return result;\n}\n\nmodule.exports = _map;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_map.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_pipe.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/src/internal/_pipe.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _pipe(f, g) {\n  return function () {\n    return g.call(this, f.apply(this, arguments));\n  };\n}\n\nmodule.exports = _pipe;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_pipe.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_reduce.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_reduce.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _isArrayLike =\n/*#__PURE__*/\n__webpack_require__(/*! ./_isArrayLike */ \"./node_modules/ramda/src/internal/_isArrayLike.js\");\n\nvar _xwrap =\n/*#__PURE__*/\n__webpack_require__(/*! ./_xwrap */ \"./node_modules/ramda/src/internal/_xwrap.js\");\n\nvar bind =\n/*#__PURE__*/\n__webpack_require__(/*! ../bind */ \"./node_modules/ramda/src/bind.js\");\n\nfunction _arrayReduce(xf, acc, list) {\n  var idx = 0;\n  var len = list.length;\n\n  while (idx < len) {\n    acc = xf['@@transducer/step'](acc, list[idx]);\n\n    if (acc && acc['@@transducer/reduced']) {\n      acc = acc['@@transducer/value'];\n      break;\n    }\n\n    idx += 1;\n  }\n\n  return xf['@@transducer/result'](acc);\n}\n\nfunction _iterableReduce(xf, acc, iter) {\n  var step = iter.next();\n\n  while (!step.done) {\n    acc = xf['@@transducer/step'](acc, step.value);\n\n    if (acc && acc['@@transducer/reduced']) {\n      acc = acc['@@transducer/value'];\n      break;\n    }\n\n    step = iter.next();\n  }\n\n  return xf['@@transducer/result'](acc);\n}\n\nfunction _methodReduce(xf, acc, obj, methodName) {\n  return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));\n}\n\nvar symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';\n\nfunction _reduce(fn, acc, list) {\n  if (typeof fn === 'function') {\n    fn = _xwrap(fn);\n  }\n\n  if (_isArrayLike(list)) {\n    return _arrayReduce(fn, acc, list);\n  }\n\n  if (typeof list['fantasy-land/reduce'] === 'function') {\n    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');\n  }\n\n  if (list[symIterator] != null) {\n    return _iterableReduce(fn, acc, list[symIterator]());\n  }\n\n  if (typeof list.next === 'function') {\n    return _iterableReduce(fn, acc, list);\n  }\n\n  if (typeof list.reduce === 'function') {\n    return _methodReduce(fn, acc, list, 'reduce');\n  }\n\n  throw new TypeError('reduce: list must be array or iterable');\n}\n\nmodule.exports = _reduce;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_reduce.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_xfBase.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xfBase.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  init: function () {\n    return this.xf['@@transducer/init']();\n  },\n  result: function (result) {\n    return this.xf['@@transducer/result'](result);\n  }\n};\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_xfBase.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_xmap.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xmap.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _xfBase =\n/*#__PURE__*/\n__webpack_require__(/*! ./_xfBase */ \"./node_modules/ramda/src/internal/_xfBase.js\");\n\nvar XMap =\n/*#__PURE__*/\nfunction () {\n  function XMap(f, xf) {\n    this.xf = xf;\n    this.f = f;\n  }\n\n  XMap.prototype['@@transducer/init'] = _xfBase.init;\n  XMap.prototype['@@transducer/result'] = _xfBase.result;\n\n  XMap.prototype['@@transducer/step'] = function (result, input) {\n    return this.xf['@@transducer/step'](result, this.f(input));\n  };\n\n  return XMap;\n}();\n\nvar _xmap =\n/*#__PURE__*/\n_curry2(function _xmap(f, xf) {\n  return new XMap(f, xf);\n});\n\nmodule.exports = _xmap;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_xmap.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_xwrap.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/src/internal/_xwrap.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var XWrap =\n/*#__PURE__*/\nfunction () {\n  function XWrap(fn) {\n    this.f = fn;\n  }\n\n  XWrap.prototype['@@transducer/init'] = function () {\n    throw new Error('init not implemented on XWrap');\n  };\n\n  XWrap.prototype['@@transducer/result'] = function (acc) {\n    return acc;\n  };\n\n  XWrap.prototype['@@transducer/step'] = function (acc, x) {\n    return this.f(acc, x);\n  };\n\n  return XWrap;\n}();\n\nfunction _xwrap(fn) {\n  return new XWrap(fn);\n}\n\nmodule.exports = _xwrap;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/internal/_xwrap.js?");

/***/ }),

/***/ "./node_modules/ramda/src/isEmpty.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/isEmpty.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar empty =\n/*#__PURE__*/\n__webpack_require__(/*! ./empty */ \"./node_modules/ramda/src/empty.js\");\n\nvar equals =\n/*#__PURE__*/\n__webpack_require__(/*! ./equals */ \"./node_modules/ramda/src/equals.js\");\n/**\n * Returns `true` if the given value is its type's empty value; `false`\n * otherwise.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Logic\n * @sig a -> Boolean\n * @param {*} x\n * @return {Boolean}\n * @see R.empty\n * @example\n *\n *      R.isEmpty([1, 2, 3]);   //=> false\n *      R.isEmpty([]);          //=> true\n *      R.isEmpty('');          //=> true\n *      R.isEmpty(null);        //=> false\n *      R.isEmpty({});          //=> true\n *      R.isEmpty({length: 0}); //=> false\n */\n\n\nvar isEmpty =\n/*#__PURE__*/\n_curry1(function isEmpty(x) {\n  return x != null && equals(x, empty(x));\n});\n\nmodule.exports = isEmpty;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/isEmpty.js?");

/***/ }),

/***/ "./node_modules/ramda/src/keys.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/keys.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _has =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_has */ \"./node_modules/ramda/src/internal/_has.js\");\n\nvar _isArguments =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_isArguments */ \"./node_modules/ramda/src/internal/_isArguments.js\"); // cover IE < 9 keys issues\n\n\nvar hasEnumBug = !\n/*#__PURE__*/\n{\n  toString: null\n}.propertyIsEnumerable('toString');\nvar nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // Safari bug\n\nvar hasArgsEnumBug =\n/*#__PURE__*/\nfunction () {\n  'use strict';\n\n  return arguments.propertyIsEnumerable('length');\n}();\n\nvar contains = function contains(list, item) {\n  var idx = 0;\n\n  while (idx < list.length) {\n    if (list[idx] === item) {\n      return true;\n    }\n\n    idx += 1;\n  }\n\n  return false;\n};\n/**\n * Returns a list containing the names of all the enumerable own properties of\n * the supplied object.\n * Note that the order of the output array is not guaranteed to be consistent\n * across different JS platforms.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig {k: v} -> [k]\n * @param {Object} obj The object to extract properties from\n * @return {Array} An array of the object's own properties.\n * @see R.keysIn, R.values\n * @example\n *\n *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']\n */\n\n\nvar _keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? function keys(obj) {\n  return Object(obj) !== obj ? [] : Object.keys(obj);\n} : function keys(obj) {\n  if (Object(obj) !== obj) {\n    return [];\n  }\n\n  var prop, nIdx;\n  var ks = [];\n\n  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);\n\n  for (prop in obj) {\n    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {\n      ks[ks.length] = prop;\n    }\n  }\n\n  if (hasEnumBug) {\n    nIdx = nonEnumerableProps.length - 1;\n\n    while (nIdx >= 0) {\n      prop = nonEnumerableProps[nIdx];\n\n      if (_has(prop, obj) && !contains(ks, prop)) {\n        ks[ks.length] = prop;\n      }\n\n      nIdx -= 1;\n    }\n  }\n\n  return ks;\n};\n\nvar keys =\n/*#__PURE__*/\n_curry1(_keys);\n\nmodule.exports = keys;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/keys.js?");

/***/ }),

/***/ "./node_modules/ramda/src/lift.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/lift.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar liftN =\n/*#__PURE__*/\n__webpack_require__(/*! ./liftN */ \"./node_modules/ramda/src/liftN.js\");\n/**\n * \"lifts\" a function of arity > 1 so that it may \"map over\" a list, Function or other\n * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).\n *\n * @func\n * @memberOf R\n * @since v0.7.0\n * @category Function\n * @sig (*... -> *) -> ([*]... -> [*])\n * @param {Function} fn The function to lift into higher context\n * @return {Function} The lifted function.\n * @see R.liftN\n * @example\n *\n *      var madd3 = R.lift((a, b, c) => a + b + c);\n *\n *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]\n *\n *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);\n *\n *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]\n */\n\n\nvar lift =\n/*#__PURE__*/\n_curry1(function lift(fn) {\n  return liftN(fn.length, fn);\n});\n\nmodule.exports = lift;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/lift.js?");

/***/ }),

/***/ "./node_modules/ramda/src/liftN.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/liftN.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _reduce =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/src/internal/_reduce.js\");\n\nvar ap =\n/*#__PURE__*/\n__webpack_require__(/*! ./ap */ \"./node_modules/ramda/src/ap.js\");\n\nvar curryN =\n/*#__PURE__*/\n__webpack_require__(/*! ./curryN */ \"./node_modules/ramda/src/curryN.js\");\n\nvar map =\n/*#__PURE__*/\n__webpack_require__(/*! ./map */ \"./node_modules/ramda/src/map.js\");\n/**\n * \"lifts\" a function to be the specified arity, so that it may \"map over\" that\n * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).\n *\n * @func\n * @memberOf R\n * @since v0.7.0\n * @category Function\n * @sig Number -> (*... -> *) -> ([*]... -> [*])\n * @param {Function} fn The function to lift into higher context\n * @return {Function} The lifted function.\n * @see R.lift, R.ap\n * @example\n *\n *      var madd3 = R.liftN(3, (...args) => R.sum(args));\n *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]\n */\n\n\nvar liftN =\n/*#__PURE__*/\n_curry2(function liftN(arity, fn) {\n  var lifted = curryN(arity, fn);\n  return curryN(arity, function () {\n    return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));\n  });\n});\n\nmodule.exports = liftN;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/liftN.js?");

/***/ }),

/***/ "./node_modules/ramda/src/lt.js":
/*!**************************************!*\
  !*** ./node_modules/ramda/src/lt.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n/**\n * Returns `true` if the first argument is less than the second; `false`\n * otherwise.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig Ord a => a -> a -> Boolean\n * @param {*} a\n * @param {*} b\n * @return {Boolean}\n * @see R.gt\n * @example\n *\n *      R.lt(2, 1); //=> false\n *      R.lt(2, 2); //=> false\n *      R.lt(2, 3); //=> true\n *      R.lt('a', 'z'); //=> true\n *      R.lt('z', 'a'); //=> false\n */\n\n\nvar lt =\n/*#__PURE__*/\n_curry2(function lt(a, b) {\n  return a < b;\n});\n\nmodule.exports = lt;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/lt.js?");

/***/ }),

/***/ "./node_modules/ramda/src/map.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/map.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _dispatchable =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_dispatchable */ \"./node_modules/ramda/src/internal/_dispatchable.js\");\n\nvar _map =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_map */ \"./node_modules/ramda/src/internal/_map.js\");\n\nvar _reduce =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/src/internal/_reduce.js\");\n\nvar _xmap =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_xmap */ \"./node_modules/ramda/src/internal/_xmap.js\");\n\nvar curryN =\n/*#__PURE__*/\n__webpack_require__(/*! ./curryN */ \"./node_modules/ramda/src/curryN.js\");\n\nvar keys =\n/*#__PURE__*/\n__webpack_require__(/*! ./keys */ \"./node_modules/ramda/src/keys.js\");\n/**\n * Takes a function and\n * a [functor](https://github.com/fantasyland/fantasy-land#functor),\n * applies the function to each of the functor's values, and returns\n * a functor of the same shape.\n *\n * Ramda provides suitable `map` implementations for `Array` and `Object`,\n * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.\n *\n * Dispatches to the `map` method of the second argument, if present.\n *\n * Acts as a transducer if a transformer is given in list position.\n *\n * Also treats functions as functors and will compose them together.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig Functor f => (a -> b) -> f a -> f b\n * @param {Function} fn The function to be called on every element of the input `list`.\n * @param {Array} list The list to be iterated over.\n * @return {Array} The new list.\n * @see R.transduce, R.addIndex\n * @example\n *\n *      var double = x => x * 2;\n *\n *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]\n *\n *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}\n * @symb R.map(f, [a, b]) = [f(a), f(b)]\n * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }\n * @symb R.map(f, functor_o) = functor_o.map(f)\n */\n\n\nvar map =\n/*#__PURE__*/\n_curry2(\n/*#__PURE__*/\n_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {\n  switch (Object.prototype.toString.call(functor)) {\n    case '[object Function]':\n      return curryN(functor.length, function () {\n        return fn.call(this, functor.apply(this, arguments));\n      });\n\n    case '[object Object]':\n      return _reduce(function (acc, key) {\n        acc[key] = fn(functor[key]);\n        return acc;\n      }, {}, keys(functor));\n\n    default:\n      return _map(fn, functor);\n  }\n}));\n\nmodule.exports = map;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/map.js?");

/***/ }),

/***/ "./node_modules/ramda/src/mapObjIndexed.js":
/*!*************************************************!*\
  !*** ./node_modules/ramda/src/mapObjIndexed.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _reduce =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/src/internal/_reduce.js\");\n\nvar keys =\n/*#__PURE__*/\n__webpack_require__(/*! ./keys */ \"./node_modules/ramda/src/keys.js\");\n/**\n * An Object-specific version of [`map`](#map). The function is applied to three\n * arguments: *(value, key, obj)*. If only the value is significant, use\n * [`map`](#map) instead.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category Object\n * @sig ((*, String, Object) -> *) -> Object -> Object\n * @param {Function} fn\n * @param {Object} obj\n * @return {Object}\n * @see R.map\n * @example\n *\n *      var values = { x: 1, y: 2, z: 3 };\n *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);\n *\n *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }\n */\n\n\nvar mapObjIndexed =\n/*#__PURE__*/\n_curry2(function mapObjIndexed(fn, obj) {\n  return _reduce(function (acc, key) {\n    acc[key] = fn(obj[key], key, obj);\n    return acc;\n  }, {}, keys(obj));\n});\n\nmodule.exports = mapObjIndexed;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/mapObjIndexed.js?");

/***/ }),

/***/ "./node_modules/ramda/src/not.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/not.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n/**\n * A function that returns the `!` of its argument. It will return `true` when\n * passed false-y value, and `false` when passed a truth-y one.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Logic\n * @sig * -> Boolean\n * @param {*} a any value\n * @return {Boolean} the logical inverse of passed argument.\n * @see R.complement\n * @example\n *\n *      R.not(true); //=> false\n *      R.not(false); //=> true\n *      R.not(0); //=> true\n *      R.not(1); //=> false\n */\n\n\nvar not =\n/*#__PURE__*/\n_curry1(function not(a) {\n  return !a;\n});\n\nmodule.exports = not;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/not.js?");

/***/ }),

/***/ "./node_modules/ramda/src/omit.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/omit.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n/**\n * Returns a partial copy of an object omitting the keys specified.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig [String] -> {String: *} -> {String: *}\n * @param {Array} names an array of String property names to omit from the new object\n * @param {Object} obj The object to copy from\n * @return {Object} A new object with properties from `names` not on it.\n * @see R.pick\n * @example\n *\n *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}\n */\n\n\nvar omit =\n/*#__PURE__*/\n_curry2(function omit(names, obj) {\n  var result = {};\n  var index = {};\n  var idx = 0;\n  var len = names.length;\n\n  while (idx < len) {\n    index[names[idx]] = 1;\n    idx += 1;\n  }\n\n  for (var prop in obj) {\n    if (!index.hasOwnProperty(prop)) {\n      result[prop] = obj[prop];\n    }\n  }\n\n  return result;\n});\n\nmodule.exports = omit;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/omit.js?");

/***/ }),

/***/ "./node_modules/ramda/src/path.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/path.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n/**\n * Retrieve the value at a given path.\n *\n * @func\n * @memberOf R\n * @since v0.2.0\n * @category Object\n * @typedefn Idx = String | Int\n * @sig [Idx] -> {a} -> a | Undefined\n * @param {Array} path The path to use.\n * @param {Object} obj The object to retrieve the nested property from.\n * @return {*} The data at `path`.\n * @see R.prop\n * @example\n *\n *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2\n *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined\n */\n\n\nvar path =\n/*#__PURE__*/\n_curry2(function path(paths, obj) {\n  var val = obj;\n  var idx = 0;\n\n  while (idx < paths.length) {\n    if (val == null) {\n      return;\n    }\n\n    val = val[paths[idx]];\n    idx += 1;\n  }\n\n  return val;\n});\n\nmodule.exports = path;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/path.js?");

/***/ }),

/***/ "./node_modules/ramda/src/pathOr.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/pathOr.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry3 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/src/internal/_curry3.js\");\n\nvar defaultTo =\n/*#__PURE__*/\n__webpack_require__(/*! ./defaultTo */ \"./node_modules/ramda/src/defaultTo.js\");\n\nvar path =\n/*#__PURE__*/\n__webpack_require__(/*! ./path */ \"./node_modules/ramda/src/path.js\");\n/**\n * If the given, non-null object has a value at the given path, returns the\n * value at that path. Otherwise returns the provided default value.\n *\n * @func\n * @memberOf R\n * @since v0.18.0\n * @category Object\n * @typedefn Idx = String | Int\n * @sig a -> [Idx] -> {a} -> a\n * @param {*} d The default value.\n * @param {Array} p The path to use.\n * @param {Object} obj The object to retrieve the nested property from.\n * @return {*} The data at `path` of the supplied object or the default value.\n * @example\n *\n *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2\n *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> \"N/A\"\n */\n\n\nvar pathOr =\n/*#__PURE__*/\n_curry3(function pathOr(d, p, obj) {\n  return defaultTo(d, path(p, obj));\n});\n\nmodule.exports = pathOr;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/pathOr.js?");

/***/ }),

/***/ "./node_modules/ramda/src/pick.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/pick.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n/**\n * Returns a partial copy of an object containing only the keys specified. If\n * the key does not exist, the property is ignored.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig [k] -> {k: v} -> {k: v}\n * @param {Array} names an array of String property names to copy onto a new object\n * @param {Object} obj The object to copy from\n * @return {Object} A new object with only properties from `names` on it.\n * @see R.omit, R.props\n * @example\n *\n *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}\n *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}\n */\n\n\nvar pick =\n/*#__PURE__*/\n_curry2(function pick(names, obj) {\n  var result = {};\n  var idx = 0;\n\n  while (idx < names.length) {\n    if (names[idx] in obj) {\n      result[names[idx]] = obj[names[idx]];\n    }\n\n    idx += 1;\n  }\n\n  return result;\n});\n\nmodule.exports = pick;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/pick.js?");

/***/ }),

/***/ "./node_modules/ramda/src/pickBy.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/pickBy.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n/**\n * Returns a partial copy of an object containing only the keys that satisfy\n * the supplied predicate.\n *\n * @func\n * @memberOf R\n * @since v0.8.0\n * @category Object\n * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}\n * @param {Function} pred A predicate to determine whether or not a key\n *        should be included on the output object.\n * @param {Object} obj The object to copy from\n * @return {Object} A new object with only properties that satisfy `pred`\n *         on it.\n * @see R.pick, R.filter\n * @example\n *\n *      var isUpperCase = (val, key) => key.toUpperCase() === key;\n *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}\n */\n\n\nvar pickBy =\n/*#__PURE__*/\n_curry2(function pickBy(test, obj) {\n  var result = {};\n\n  for (var prop in obj) {\n    if (test(obj[prop], prop, obj)) {\n      result[prop] = obj[prop];\n    }\n  }\n\n  return result;\n});\n\nmodule.exports = pickBy;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/pickBy.js?");

/***/ }),

/***/ "./node_modules/ramda/src/pipe.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/pipe.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _arity =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_arity */ \"./node_modules/ramda/src/internal/_arity.js\");\n\nvar _pipe =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_pipe */ \"./node_modules/ramda/src/internal/_pipe.js\");\n\nvar reduce =\n/*#__PURE__*/\n__webpack_require__(/*! ./reduce */ \"./node_modules/ramda/src/reduce.js\");\n\nvar tail =\n/*#__PURE__*/\n__webpack_require__(/*! ./tail */ \"./node_modules/ramda/src/tail.js\");\n/**\n * Performs left-to-right function composition. The leftmost function may have\n * any arity; the remaining functions must be unary.\n *\n * In some libraries this function is named `sequence`.\n *\n * **Note:** The result of pipe is not automatically curried.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Function\n * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)\n * @param {...Function} functions\n * @return {Function}\n * @see R.compose\n * @example\n *\n *      var f = R.pipe(Math.pow, R.negate, R.inc);\n *\n *      f(3, 4); // -(3^4) + 1\n * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))\n */\n\n\nfunction pipe() {\n  if (arguments.length === 0) {\n    throw new Error('pipe requires at least one argument');\n  }\n\n  return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));\n}\n\nmodule.exports = pipe;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/pipe.js?");

/***/ }),

/***/ "./node_modules/ramda/src/prop.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/prop.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar path =\n/*#__PURE__*/\n__webpack_require__(/*! ./path */ \"./node_modules/ramda/src/path.js\");\n/**\n * Returns a function that when supplied an object returns the indicated\n * property of that object, if it exists.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig s -> {s: a} -> a | Undefined\n * @param {String} p The property name\n * @param {Object} obj The object to query\n * @return {*} The value at `obj.p`.\n * @see R.path\n * @example\n *\n *      R.prop('x', {x: 100}); //=> 100\n *      R.prop('x', {}); //=> undefined\n */\n\n\nvar prop =\n/*#__PURE__*/\n_curry2(function prop(p, obj) {\n  return path([p], obj);\n});\n\nmodule.exports = prop;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/prop.js?");

/***/ }),

/***/ "./node_modules/ramda/src/reduce.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/reduce.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry3 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/src/internal/_curry3.js\");\n\nvar _reduce =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_reduce */ \"./node_modules/ramda/src/internal/_reduce.js\");\n/**\n * Returns a single item by iterating through the list, successively calling\n * the iterator function and passing it an accumulator value and the current\n * value from the array, and then passing the result to the next call.\n *\n * The iterator function receives two values: *(acc, value)*. It may use\n * [`R.reduced`](#reduced) to shortcut the iteration.\n *\n * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function\n * is *(value, acc)*.\n *\n * Note: `R.reduce` does not skip deleted or unassigned indices (sparse\n * arrays), unlike the native `Array.prototype.reduce` method. For more details\n * on this behavior, see:\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description\n *\n * Dispatches to the `reduce` method of the third argument, if present. When\n * doing so, it is up to the user to handle the [`R.reduced`](#reduced)\n * shortcuting, as this is not implemented by `reduce`.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig ((a, b) -> a) -> a -> [b] -> a\n * @param {Function} fn The iterator function. Receives two values, the accumulator and the\n *        current element from the array.\n * @param {*} acc The accumulator value.\n * @param {Array} list The list to iterate over.\n * @return {*} The final, accumulated value.\n * @see R.reduced, R.addIndex, R.reduceRight\n * @example\n *\n *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10\n *      //          -               -10\n *      //         / \\              / \\\n *      //        -   4           -6   4\n *      //       / \\              / \\\n *      //      -   3   ==>     -3   3\n *      //     / \\              / \\\n *      //    -   2           -1   2\n *      //   / \\              / \\\n *      //  0   1            0   1\n *\n * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)\n */\n\n\nvar reduce =\n/*#__PURE__*/\n_curry3(_reduce);\n\nmodule.exports = reduce;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/reduce.js?");

/***/ }),

/***/ "./node_modules/ramda/src/reverse.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/reverse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _isString =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_isString */ \"./node_modules/ramda/src/internal/_isString.js\");\n/**\n * Returns a new list or string with the elements or characters in reverse\n * order.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> [a]\n * @sig String -> String\n * @param {Array|String} list\n * @return {Array|String}\n * @example\n *\n *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]\n *      R.reverse([1, 2]);     //=> [2, 1]\n *      R.reverse([1]);        //=> [1]\n *      R.reverse([]);         //=> []\n *\n *      R.reverse('abc');      //=> 'cba'\n *      R.reverse('ab');       //=> 'ba'\n *      R.reverse('a');        //=> 'a'\n *      R.reverse('');         //=> ''\n */\n\n\nvar reverse =\n/*#__PURE__*/\n_curry1(function reverse(list) {\n  return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();\n});\n\nmodule.exports = reverse;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/reverse.js?");

/***/ }),

/***/ "./node_modules/ramda/src/slice.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/slice.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _checkForMethod =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_checkForMethod */ \"./node_modules/ramda/src/internal/_checkForMethod.js\");\n\nvar _curry3 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/src/internal/_curry3.js\");\n/**\n * Returns the elements of the given list or string (or object with a `slice`\n * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).\n *\n * Dispatches to the `slice` method of the third argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.1.4\n * @category List\n * @sig Number -> Number -> [a] -> [a]\n * @sig Number -> Number -> String -> String\n * @param {Number} fromIndex The start index (inclusive).\n * @param {Number} toIndex The end index (exclusive).\n * @param {*} list\n * @return {*}\n * @example\n *\n *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']\n *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']\n *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']\n *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']\n *      R.slice(0, 3, 'ramda');                     //=> 'ram'\n */\n\n\nvar slice =\n/*#__PURE__*/\n_curry3(\n/*#__PURE__*/\n_checkForMethod('slice', function slice(fromIndex, toIndex, list) {\n  return Array.prototype.slice.call(list, fromIndex, toIndex);\n}));\n\nmodule.exports = slice;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/slice.js?");

/***/ }),

/***/ "./node_modules/ramda/src/tail.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/tail.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _checkForMethod =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_checkForMethod */ \"./node_modules/ramda/src/internal/_checkForMethod.js\");\n\nvar _curry1 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar slice =\n/*#__PURE__*/\n__webpack_require__(/*! ./slice */ \"./node_modules/ramda/src/slice.js\");\n/**\n * Returns all but the first element of the given list or string (or object\n * with a `tail` method).\n *\n * Dispatches to the `slice` method of the first argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> [a]\n * @sig String -> String\n * @param {*} list\n * @return {*}\n * @see R.head, R.init, R.last\n * @example\n *\n *      R.tail([1, 2, 3]);  //=> [2, 3]\n *      R.tail([1, 2]);     //=> [2]\n *      R.tail([1]);        //=> []\n *      R.tail([]);         //=> []\n *\n *      R.tail('abc');  //=> 'bc'\n *      R.tail('ab');   //=> 'b'\n *      R.tail('a');    //=> ''\n *      R.tail('');     //=> ''\n */\n\n\nvar tail =\n/*#__PURE__*/\n_curry1(\n/*#__PURE__*/\n_checkForMethod('tail',\n/*#__PURE__*/\nslice(1, Infinity)));\n\nmodule.exports = tail;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/tail.js?");

/***/ }),

/***/ "./node_modules/ramda/src/trim.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/trim.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar ws = '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' + '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028' + '\\u2029\\uFEFF';\nvar zeroWidth = '\\u200b';\nvar hasProtoTrim = typeof String.prototype.trim === 'function';\n/**\n * Removes (strips) whitespace from both ends of the string.\n *\n * @func\n * @memberOf R\n * @since v0.6.0\n * @category String\n * @sig String -> String\n * @param {String} str The string to trim.\n * @return {String} Trimmed version of `str`.\n * @example\n *\n *      R.trim('   xyz  '); //=> 'xyz'\n *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']\n */\n\nvar _trim = !hasProtoTrim ||\n/*#__PURE__*/\nws.trim() || !\n/*#__PURE__*/\nzeroWidth.trim() ? function trim(str) {\n  var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');\n  var endRx = new RegExp('[' + ws + '][' + ws + ']*$');\n  return str.replace(beginRx, '').replace(endRx, '');\n} : function trim(str) {\n  return str.trim();\n};\n\nvar trim =\n/*#__PURE__*/\n_curry1(_trim);\n\nmodule.exports = trim;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/trim.js?");

/***/ }),

/***/ "./node_modules/ramda/src/type.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/type.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 =\n/*#__PURE__*/\n__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n/**\n * Gives a single-word string description of the (native) type of a value,\n * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not\n * attempt to distinguish user Object types any further, reporting them all as\n * 'Object'.\n *\n * @func\n * @memberOf R\n * @since v0.8.0\n * @category Type\n * @sig (* -> {*}) -> String\n * @param {*} val The value to test\n * @return {String}\n * @example\n *\n *      R.type({}); //=> \"Object\"\n *      R.type(1); //=> \"Number\"\n *      R.type(false); //=> \"Boolean\"\n *      R.type('s'); //=> \"String\"\n *      R.type(null); //=> \"Null\"\n *      R.type([]); //=> \"Array\"\n *      R.type(/[A-z]/); //=> \"RegExp\"\n *      R.type(() => {}); //=> \"Function\"\n *      R.type(undefined); //=> \"Undefined\"\n */\n\n\nvar type =\n/*#__PURE__*/\n_curry1(function type(val) {\n  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);\n});\n\nmodule.exports = type;\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/ramda/src/type.js?");

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {\n  \"use strict\";\n\n  if (global.setImmediate) {\n    return;\n  }\n\n  var nextHandle = 1; // Spec says greater than zero\n\n  var tasksByHandle = {};\n  var currentlyRunningATask = false;\n  var doc = global.document;\n  var registerImmediate;\n\n  function setImmediate(callback) {\n    // Callback can either be a function or a string\n    if (typeof callback !== \"function\") {\n      callback = new Function(\"\" + callback);\n    } // Copy function arguments\n\n\n    var args = new Array(arguments.length - 1);\n\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i + 1];\n    } // Store and register the task\n\n\n    var task = {\n      callback: callback,\n      args: args\n    };\n    tasksByHandle[nextHandle] = task;\n    registerImmediate(nextHandle);\n    return nextHandle++;\n  }\n\n  function clearImmediate(handle) {\n    delete tasksByHandle[handle];\n  }\n\n  function run(task) {\n    var callback = task.callback;\n    var args = task.args;\n\n    switch (args.length) {\n      case 0:\n        callback();\n        break;\n\n      case 1:\n        callback(args[0]);\n        break;\n\n      case 2:\n        callback(args[0], args[1]);\n        break;\n\n      case 3:\n        callback(args[0], args[1], args[2]);\n        break;\n\n      default:\n        callback.apply(undefined, args);\n        break;\n    }\n  }\n\n  function runIfPresent(handle) {\n    // From the spec: \"Wait until any invocations of this algorithm started before this one have completed.\"\n    // So if we're currently running a task, we'll need to delay this invocation.\n    if (currentlyRunningATask) {\n      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a\n      // \"too much recursion\" error.\n      setTimeout(runIfPresent, 0, handle);\n    } else {\n      var task = tasksByHandle[handle];\n\n      if (task) {\n        currentlyRunningATask = true;\n\n        try {\n          run(task);\n        } finally {\n          clearImmediate(handle);\n          currentlyRunningATask = false;\n        }\n      }\n    }\n  }\n\n  function installNextTickImplementation() {\n    registerImmediate = function (handle) {\n      process.nextTick(function () {\n        runIfPresent(handle);\n      });\n    };\n  }\n\n  function canUsePostMessage() {\n    // The test against `importScripts` prevents this implementation from being installed inside a web worker,\n    // where `global.postMessage` means something completely different and can't be used for this purpose.\n    if (global.postMessage && !global.importScripts) {\n      var postMessageIsAsynchronous = true;\n      var oldOnMessage = global.onmessage;\n\n      global.onmessage = function () {\n        postMessageIsAsynchronous = false;\n      };\n\n      global.postMessage(\"\", \"*\");\n      global.onmessage = oldOnMessage;\n      return postMessageIsAsynchronous;\n    }\n  }\n\n  function installPostMessageImplementation() {\n    // Installs an event handler on `global` for the `message` event: see\n    // * https://developer.mozilla.org/en/DOM/window.postMessage\n    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages\n    var messagePrefix = \"setImmediate$\" + Math.random() + \"$\";\n\n    var onGlobalMessage = function (event) {\n      if (event.source === global && typeof event.data === \"string\" && event.data.indexOf(messagePrefix) === 0) {\n        runIfPresent(+event.data.slice(messagePrefix.length));\n      }\n    };\n\n    if (global.addEventListener) {\n      global.addEventListener(\"message\", onGlobalMessage, false);\n    } else {\n      global.attachEvent(\"onmessage\", onGlobalMessage);\n    }\n\n    registerImmediate = function (handle) {\n      global.postMessage(messagePrefix + handle, \"*\");\n    };\n  }\n\n  function installMessageChannelImplementation() {\n    var channel = new MessageChannel();\n\n    channel.port1.onmessage = function (event) {\n      var handle = event.data;\n      runIfPresent(handle);\n    };\n\n    registerImmediate = function (handle) {\n      channel.port2.postMessage(handle);\n    };\n  }\n\n  function installReadyStateChangeImplementation() {\n    var html = doc.documentElement;\n\n    registerImmediate = function (handle) {\n      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted\n      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.\n      var script = doc.createElement(\"script\");\n\n      script.onreadystatechange = function () {\n        runIfPresent(handle);\n        script.onreadystatechange = null;\n        html.removeChild(script);\n        script = null;\n      };\n\n      html.appendChild(script);\n    };\n  }\n\n  function installSetTimeoutImplementation() {\n    registerImmediate = function (handle) {\n      setTimeout(runIfPresent, 0, handle);\n    };\n  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.\n\n\n  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);\n  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.\n\n  if ({}.toString.call(global.process) === \"[object process]\") {\n    // For Node.js before 0.9\n    installNextTickImplementation();\n  } else if (canUsePostMessage()) {\n    // For non-IE10 modern browsers\n    installPostMessageImplementation();\n  } else if (global.MessageChannel) {\n    // For web workers, where supported\n    installMessageChannelImplementation();\n  } else if (doc && \"onreadystatechange\" in doc.createElement(\"script\")) {\n    // For IE 6–8\n    installReadyStateChangeImplementation();\n  } else {\n    // For older browsers\n    installSetTimeoutImplementation();\n  }\n\n  attachTo.setImmediate = setImmediate;\n  attachTo.clearImmediate = clearImmediate;\n})(typeof self === \"undefined\" ? typeof global === \"undefined\" ? this : global : self);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/setimmediate/setImmediate.js?");

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== \"undefined\" && global || typeof self !== \"undefined\" && self || window;\nvar apply = Function.prototype.apply; // DOM APIs, for completeness\n\nexports.setTimeout = function () {\n  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);\n};\n\nexports.setInterval = function () {\n  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);\n};\n\nexports.clearTimeout = exports.clearInterval = function (timeout) {\n  if (timeout) {\n    timeout.close();\n  }\n};\n\nfunction Timeout(id, clearFn) {\n  this._id = id;\n  this._clearFn = clearFn;\n}\n\nTimeout.prototype.unref = Timeout.prototype.ref = function () {};\n\nTimeout.prototype.close = function () {\n  this._clearFn.call(scope, this._id);\n}; // Does not start the time, just sets up the members needed.\n\n\nexports.enroll = function (item, msecs) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = msecs;\n};\n\nexports.unenroll = function (item) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = -1;\n};\n\nexports._unrefActive = exports.active = function (item) {\n  clearTimeout(item._idleTimeoutId);\n  var msecs = item._idleTimeout;\n\n  if (msecs >= 0) {\n    item._idleTimeoutId = setTimeout(function onTimeout() {\n      if (item._onTimeout) item._onTimeout();\n    }, msecs);\n  }\n}; // setimmediate attaches itself to the global object\n\n\n__webpack_require__(/*! setimmediate */ \"./node_modules/setimmediate/setImmediate.js\"); // On some exotic environments, it's not clear which object `setimmediate` was\n// able to install onto.  Search each possibility in the same order as the\n// `setimmediate` library.\n\n\nexports.setImmediate = typeof self !== \"undefined\" && self.setImmediate || typeof global !== \"undefined\" && global.setImmediate || this && this.setImmediate;\nexports.clearImmediate = typeof self !== \"undefined\" && self.clearImmediate || typeof global !== \"undefined\" && global.clearImmediate || this && this.clearImmediate;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://MiniReduxForm/./node_modules/timers-browserify/main.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g; // This works in non-strict mode\n\ng = function () {\n  return this;\n}();\n\ntry {\n  // This works if eval is allowed (see CSP)\n  g = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n  // This works if the window reference is available\n  if (typeof window === \"object\") g = window;\n} // g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\n\nmodule.exports = g;\n\n//# sourceURL=webpack://MiniReduxForm/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/action/formAction.js":
/*!**********************************!*\
  !*** ./src/action/formAction.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.updateFormModelData = exports.updateFieldViewValue = exports.deleteFormViewDataById = exports.deleteFormDataByURL = exports.UPDATE_FORM_MODEL_DATA = exports.UPDATE_FORM_FIELD_VIEW_VALUE = exports.DELETE_FORM_VIEW_DATA_BY_ID = exports.DELETE_FORM_DATA_BY_URL = void 0;\nvar DELETE_FORM_DATA_BY_URL = 'DELETE_FORM_DATA_BY_URL';\nexports.DELETE_FORM_DATA_BY_URL = DELETE_FORM_DATA_BY_URL;\nvar DELETE_FORM_VIEW_DATA_BY_ID = 'DELETE_FORM_VIEW_DATA_BY_ID';\nexports.DELETE_FORM_VIEW_DATA_BY_ID = DELETE_FORM_VIEW_DATA_BY_ID;\nvar UPDATE_FORM_FIELD_VIEW_VALUE = 'UPDATE_FORM_FIELD_CACHE_VALUE';\nexports.UPDATE_FORM_FIELD_VIEW_VALUE = UPDATE_FORM_FIELD_VIEW_VALUE;\nvar UPDATE_FORM_MODEL_DATA = 'UPDATE_FORM_MODEL_DATA';\nexports.UPDATE_FORM_MODEL_DATA = UPDATE_FORM_MODEL_DATA;\n\nvar deleteFormDataByURL = function deleteFormDataByURL(url) {\n  return {\n    type: DELETE_FORM_DATA_BY_URL,\n    url: url\n  };\n};\n\nexports.deleteFormDataByURL = deleteFormDataByURL;\n\nvar deleteFormViewDataById = function deleteFormViewDataById(formId) {\n  return {\n    type: DELETE_FORM_VIEW_DATA_BY_ID,\n    formId: formId\n  };\n};\n\nexports.deleteFormViewDataById = deleteFormViewDataById;\n\nvar updateFieldViewValue = function updateFieldViewValue(formId, fieldName, value) {\n  var url = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';\n  return {\n    type: UPDATE_FORM_FIELD_VIEW_VALUE,\n    formId: formId,\n    fieldName: fieldName,\n    value: value,\n    url: url\n  };\n};\n\nexports.updateFieldViewValue = updateFieldViewValue;\n\nvar updateFormModelData = function updateFormModelData(formId, modelData) {\n  return {\n    type: UPDATE_FORM_MODEL_DATA,\n    formId: formId,\n    modelData: modelData\n  };\n};\n\nexports.updateFormModelData = updateFormModelData;\n\n//# sourceURL=webpack://MiniReduxForm/./src/action/formAction.js?");

/***/ }),

/***/ "./src/component/checkboxField.js":
/*!****************************************!*\
  !*** ./src/component/checkboxField.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _omit2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/omit */ \"./node_modules/ramda/src/omit.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _withField = _interopRequireWildcard(__webpack_require__(/*! ../hoc/withField */ \"./src/hoc/withField.js\"));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nvar Checkbox = function Checkbox(_ref) {\n  var value = _ref.value,\n      restProps = _objectWithoutProperties(_ref, [\"value\"]);\n\n  return _react.default.createElement(\"input\", _extends({\n    type: \"checkbox\",\n    checked: value\n  }, (0, _omit2.default)(['error', 'clearError'], restProps)));\n};\n\nCheckbox.propTypes = _withField.fieldPropTypes;\n\nvar _default = (0, _withField.default)({\n  format: function format(val) {\n    return !!val;\n  },\n  parse: function parse(e) {\n    return e.target.checked;\n  }\n})(Checkbox);\n\nexports.default = _default;\n\n//# sourceURL=webpack://MiniReduxForm/./src/component/checkboxField.js?");

/***/ }),

/***/ "./src/component/form.js":
/*!*******************************!*\
  !*** ./src/component/form.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(setImmediate) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Form =\n/*#__PURE__*/\nfunction (_React$Component) {\n  function Form(props) {\n    var _this;\n\n    _classCallCheck(this, Form);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));\n\n    _defineProperty(_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"handleSubmit\", function (event) {\n      var _this$props = _this.props,\n          stopSubmitPropagation = _this$props.stopSubmitPropagation,\n          onSubmit = _this$props.onSubmit;\n      if (event) event.preventDefault();\n      if (stopSubmitPropagation && event) event.stopPropagation();\n\n      _this.hiddenKeyboard();\n\n      onSubmit(event);\n    }), \"hiddenKeyboard\", function () {\n      if (document.activeElement) document.activeElement.blur(); // This fixes fixed position elements on iOS < 7.1 (e.g. spinner): http://stackoverflow.com/a/24670746\n\n      setImmediate(function () {\n        if (document.body) window.scrollTo(document.body.scrollLeft, document.body.scrollTop);\n      });\n    });\n\n    var shouldDebounceSubmit = _this.props.shouldDebounceSubmit;\n\n    if (shouldDebounceSubmit) {\n      _this.handleSubmitWithDebounce = (0, _lodash.default)(function () {\n        var _this2;\n\n        return (_this2 = _this).handleSubmit.apply(_this2, arguments);\n      }, 1000, {\n        leading: true,\n        trailing: false\n      });\n    } else {\n      _this.handleSubmitWithDebounce = _this.handleSubmit;\n    }\n\n    return _this;\n  }\n\n  _createClass(Form, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props2 = this.props,\n          className = _this$props2.className,\n          disabled = _this$props2.disabled,\n          children = _this$props2.children,\n          formId = _this$props2.formId;\n      return _react.default.createElement(\"form\", {\n        id: formId,\n        onSubmit: this.handleSubmitWithDebounce,\n        className: className,\n        noValidate: true\n      }, _react.default.createElement(\"fieldset\", {\n        disabled: disabled,\n        style: {\n          border: 'none'\n        }\n      }, children));\n    }\n  }]);\n\n  _inherits(Form, _React$Component);\n\n  return Form;\n}(_react.default.Component);\n\nexports.default = Form;\n\n_defineProperty(_defineProperty(Form, \"defaultProps\", {\n  disabled: false,\n  stopSubmitPropagation: true,\n  shouldDebounceSubmit: true,\n  children: null,\n  className: ''\n}), \"propTypes\", {\n  formId: _propTypes.default.string.isRequired,\n  onSubmit: _propTypes.default.func.isRequired,\n  disabled: _propTypes.default.bool,\n  shouldDebounceSubmit: _propTypes.default.bool,\n  stopSubmitPropagation: _propTypes.default.bool,\n  children: _propTypes.default.node,\n  className: _propTypes.default.string\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ \"./node_modules/timers-browserify/main.js\").setImmediate))\n\n//# sourceURL=webpack://MiniReduxForm/./src/component/form.js?");

/***/ }),

/***/ "./src/component/inputField.js":
/*!*************************************!*\
  !*** ./src/component/inputField.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _omit2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/omit */ \"./node_modules/ramda/src/omit.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _withField = _interopRequireWildcard(__webpack_require__(/*! ../hoc/withField */ \"./src/hoc/withField.js\"));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Input = function Input(props) {\n  return _react.default.createElement(\"input\", (0, _omit2.default)(['error', 'clearError'], props));\n};\n\nInput.propTypes = _objectSpread({}, _withField.fieldPropTypes, {\n  type: _propTypes.default.string\n});\nInput.defaultProps = {\n  type: 'text'\n};\n\nvar _default = (0, _withField.default)({\n  parse: function parse(e) {\n    return e.target.value;\n  }\n})(Input);\n\nexports.default = _default;\n\n//# sourceURL=webpack://MiniReduxForm/./src/component/inputField.js?");

/***/ }),

/***/ "./src/component/selectField.js":
/*!**************************************!*\
  !*** ./src/component/selectField.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _omit2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/omit */ \"./node_modules/ramda/src/omit.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _withField = _interopRequireWildcard(__webpack_require__(/*! ../hoc/withField */ \"./src/hoc/withField.js\"));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Select = function Select(props) {\n  return _react.default.createElement(\"select\", (0, _omit2.default)(['error', 'clearError', 'children'], props), props.children);\n};\n\nSelect.propTypes = _objectSpread({}, _withField.fieldPropTypes, {\n  children: _propTypes.default.arrayOf(_propTypes.default.element)\n});\nSelect.defaultProps = {\n  children: null\n};\n\nvar _default = (0, _withField.default)({\n  parse: function parse(e) {\n    return e.target.value;\n  }\n})(Select);\n\nexports.default = _default;\n\n//# sourceURL=webpack://MiniReduxForm/./src/component/selectField.js?");

/***/ }),

/***/ "./src/component/textareaField.js":
/*!****************************************!*\
  !*** ./src/component/textareaField.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _omit2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/omit */ \"./node_modules/ramda/src/omit.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _withField = _interopRequireWildcard(__webpack_require__(/*! ../hoc/withField */ \"./src/hoc/withField.js\"));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Textarea = function Textarea(props) {\n  return _react.default.createElement(\"textarea\", (0, _omit2.default)(['error', 'clearError'], props));\n};\n\nTextarea.propTypes = _withField.fieldPropTypes;\n\nvar _default = (0, _withField.default)({\n  parse: function parse(e) {\n    return e.target.value;\n  }\n})(Textarea);\n\nexports.default = _default;\n\n//# sourceURL=webpack://MiniReduxForm/./src/component/textareaField.js?");

/***/ }),

/***/ "./src/connector/formConnector.js":
/*!****************************************!*\
  !*** ./src/connector/formConnector.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar formAction = _interopRequireWildcard(__webpack_require__(/*! ../action/formAction */ \"./src/action/formAction.js\"));\n\nvar _selectors = __webpack_require__(/*! ../selectors */ \"./src/selectors.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nvar mapStateToProps = function mapStateToProps(state, _ref) {\n  var formId = _ref.formId;\n  return {\n    formViewData: (0, _selectors.getFormViewData)(state, formId),\n    formModelData: (0, _selectors.getFormModelData)(state, formId)\n  };\n};\n\nvar mapDispatchToProps = {\n  deleteFormViewDataById: formAction.deleteFormViewDataById,\n  updateFieldViewValue: formAction.updateFieldViewValue,\n  updateFormModelData: formAction.updateFormModelData\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);\n\nexports.default = _default;\n\n//# sourceURL=webpack://MiniReduxForm/./src/connector/formConnector.js?");

/***/ }),

/***/ "./src/hoc/withField.js":
/*!******************************!*\
  !*** ./src/hoc/withField.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.fieldPropTypes = void 0;\n\nvar _omit2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/omit */ \"./node_modules/ramda/src/omit.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar withField = function withField() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      _ref$format = _ref.format,\n      format = _ref$format === void 0 ? function (value) {\n    return value;\n  } : _ref$format,\n      _ref$parse = _ref.parse,\n      parse = _ref$parse === void 0 ? function (value) {\n    return value;\n  } : _ref$parse;\n\n  return function (Input) {\n    var WithField =\n    /*#__PURE__*/\n    function (_React$Component) {\n      function WithField() {\n        var _getPrototypeOf2;\n\n        var _temp, _this;\n\n        _classCallCheck(this, WithField);\n\n        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {\n          _args[_key] = arguments[_key];\n        }\n\n        return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithField)).call.apply(_getPrototypeOf2, [this].concat(_args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"handleChange\", function () {\n          var name = _this.props.name;\n          var onChange = _this.context.form.onChange;\n          var value = parse.apply(void 0, arguments);\n          onChange(name, value);\n        }), _temp));\n      }\n\n      _createClass(WithField, [{\n        key: \"componentWillMount\",\n        value: function componentWillMount() {\n          var name = this.props.name;\n          this.context.form.register(name);\n        }\n      }, {\n        key: \"componentWillUnmount\",\n        value: function componentWillUnmount() {\n          var name = this.props.name;\n          this.context.form.unregister(name);\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          var _this$context$form = this.context.form,\n              formData = _this$context$form.formData,\n              errors = _this$context$form.errors,\n              _clearError = _this$context$form.clearError,\n              getDefaultValue = _this$context$form.getDefaultValue;\n\n          var _this$props = this.props,\n              name = _this$props.name,\n              restProps = _objectWithoutProperties(_this$props, [\"name\"]);\n\n          var value = formData[name] === undefined ? getDefaultValue(name) : formData[name];\n          var error = errors[name];\n          return _react.default.createElement(Input, _extends({\n            onChange: this.handleChange,\n            clearError: function clearError() {\n              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n                args[_key2] = arguments[_key2];\n              }\n\n              return _clearError.apply(void 0, [name].concat(args));\n            },\n            value: format(value),\n            name: name,\n            error: error\n          }, (0, _omit2.default)(['defaultValue', 'onChange'], restProps)));\n        }\n      }]);\n\n      _inherits(WithField, _React$Component);\n\n      return WithField;\n    }(_react.default.Component);\n\n    _defineProperty(_defineProperty(WithField, \"propTypes\", {\n      name: _propTypes.default.string.isRequired\n    }), \"contextTypes\", {\n      form: _propTypes.default.shape({\n        onChange: _propTypes.default.func.isRequired,\n        clearError: _propTypes.default.func.isRequired,\n        register: _propTypes.default.func.isRequired,\n        unregister: _propTypes.default.func.isRequired,\n        errors: _propTypes.default.object.isRequired,\n        formData: _propTypes.default.object.isRequired,\n        getDefaultValue: _propTypes.default.func.isRequired\n      })\n    });\n\n    return WithField;\n  };\n};\n\nvar fieldPropTypes = {\n  onChange: _propTypes.default.func.isRequired,\n  clearError: _propTypes.default.func.isRequired,\n  value: _propTypes.default.any.isRequired,\n  name: _propTypes.default.string.isRequired,\n  error: _propTypes.default.object\n};\nexports.fieldPropTypes = fieldPropTypes;\nvar _default = withField;\nexports.default = _default;\n\n//# sourceURL=webpack://MiniReduxForm/./src/hoc/withField.js?");

/***/ }),

/***/ "./src/hoc/withFields.js":
/*!*******************************!*\
  !*** ./src/hoc/withFields.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _pick2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/pick */ \"./node_modules/ramda/src/pick.js\"));\n\nvar _contains2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/contains */ \"./node_modules/ramda/src/contains.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar withFields = function withFields(Component) {\n  var WithFields =\n  /*#__PURE__*/\n  function (_React$Component) {\n    function WithFields() {\n      var _getPrototypeOf2;\n\n      var _temp, _this;\n\n      _classCallCheck(this, WithFields);\n\n      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {\n        _args[_key] = arguments[_key];\n      }\n\n      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithFields)).call.apply(_getPrototypeOf2, [this].concat(_args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"handleChange\", function (name) {\n        var names = _this.props.names;\n        var onChange = _this.context.form.onChange;\n\n        if ((0, _contains2.default)(name, names)) {\n          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n            args[_key2 - 1] = arguments[_key2];\n          }\n\n          onChange.apply(void 0, [name].concat(args));\n        }\n      }), _temp));\n    }\n\n    _createClass(WithFields, [{\n      key: \"render\",\n      value: function render() {\n        var _this$props = this.props,\n            names = _this$props.names,\n            restProps = _objectWithoutProperties(_this$props, [\"names\"]);\n\n        var formData = this.context.form.formData;\n        return _react.default.createElement(Component, _extends({\n          formData: (0, _pick2.default)(names, formData),\n          onChange: this.handleChange\n        }, restProps));\n      }\n    }]);\n\n    _inherits(WithFields, _React$Component);\n\n    return WithFields;\n  }(_react.default.Component);\n\n  _defineProperty(_defineProperty(WithFields, \"propTypes\", {\n    names: _propTypes.default.arrayOf(_propTypes.default.string).isRequired\n  }), \"contextTypes\", {\n    form: _propTypes.default.shape({\n      onChange: _propTypes.default.func.isRequired,\n      clearError: _propTypes.default.func.isRequired,\n      register: _propTypes.default.func.isRequired,\n      unregister: _propTypes.default.func.isRequired,\n      errors: _propTypes.default.object.isRequired,\n      formData: _propTypes.default.object.isRequired\n    })\n  });\n\n  return WithFields;\n};\n\nvar _default = withFields;\nexports.default = _default;\n\n//# sourceURL=webpack://MiniReduxForm/./src/hoc/withFields.js?");

/***/ }),

/***/ "./src/hoc/withForm.js":
/*!*****************************!*\
  !*** ./src/hoc/withForm.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _keys2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/keys */ \"./node_modules/ramda/src/keys.js\"));\n\nvar _trim2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/trim */ \"./node_modules/ramda/src/trim.js\"));\n\nvar _identity2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/identity */ \"./node_modules/ramda/src/identity.js\"));\n\nvar _isEmpty2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/isEmpty */ \"./node_modules/ramda/src/isEmpty.js\"));\n\nvar _omit2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/omit */ \"./node_modules/ramda/src/omit.js\"));\n\nvar _mapObjIndexed2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/mapObjIndexed */ \"./node_modules/ramda/src/mapObjIndexed.js\"));\n\nvar _compose2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/compose */ \"./node_modules/ramda/src/compose.js\"));\n\nvar _pickBy2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/pickBy */ \"./node_modules/ramda/src/pickBy.js\"));\n\nvar _lt2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/lt */ \"./node_modules/ramda/src/lt.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _formConnector = _interopRequireDefault(__webpack_require__(/*! ../connector/formConnector */ \"./src/connector/formConnector.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar withForm = function withForm() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  return function (Component) {\n    var _options$formValidato = options.formValidator,\n        formValidator = _options$formValidato === void 0 ? function () {\n      return function () {\n        return {};\n      };\n    } : _options$formValidato,\n        _options$defaultValue = options.defaultValues,\n        getDefaultValues = _options$defaultValue === void 0 ? function () {\n      return {};\n    } : _options$defaultValue,\n        _options$disableFormC = options.disableFormCache,\n        disableFormCache = _options$disableFormC === void 0 ? false : _options$disableFormC,\n        asyncFormValidator = options.asyncFormValidator;\n\n    var WithForm =\n    /*#__PURE__*/\n    function (_React$Component) {\n      function WithForm(props) {\n        var _this;\n\n        _classCallCheck(this, WithForm);\n\n        _this = _possibleConstructorReturn(this, _getPrototypeOf(WithForm).call(this, props));\n\n        _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"getFormData\", function () {\n          var _this$props = _this.props,\n              formModelData = _this$props.formModelData,\n              formViewData = _this$props.formViewData;\n          return _objectSpread({}, _this.getDefaultValues(), formModelData, formViewData);\n        }), \"getDefaultValues\", function () {\n          return _objectSpread({}, getDefaultValues ? getDefaultValues(_this.props) : {});\n        }), \"getDefaultValue\", function (fieldName) {\n          var defaultValue = _this.getDefaultValues()[fieldName];\n\n          return defaultValue === undefined ? '' : defaultValue;\n        }), \"getRegisteredFormDataWithDefaultValues\", function () {\n          var formData = _this.getFormData();\n\n          var defaultValues = _this.getDefaultValues();\n\n          var pickFieldsThatGreaterThan0 = (0, _pickBy2.default)((0, _lt2.default)(0));\n          var mapRegisteredFormDataWithDefaultValues = (0, _mapObjIndexed2.default)(function (count, fieldName) {\n            if (formData[fieldName] === undefined) {\n              return defaultValues[fieldName] || '';\n            }\n\n            return formData[fieldName];\n          });\n          return (0, _compose2.default)(mapRegisteredFormDataWithDefaultValues, pickFieldsThatGreaterThan0)(_this.fields);\n        }), \"register\", function (fieldName) {\n          if (typeof _this.fields[fieldName] === 'number') {\n            _this.fields[fieldName] += 1;\n          } else {\n            _this.fields[fieldName] = 1;\n          }\n        }), \"unregister\", function (fieldName) {\n          _this.fields[fieldName] -= 1;\n        }), \"handleChange\", function (fieldName, fieldValue) {\n          var errors = _this.state.errors;\n\n          _this.props.updateFieldViewValue(_this.props.formId, fieldName, fieldValue);\n\n          _this.setState({\n            errors: (0, _omit2.default)([fieldName], errors)\n          });\n        }), \"handleValidationErrors\", function (formData, errors) {\n          var onValidationFailed = _this.props.onValidationFailed;\n\n          if (errors && !(0, _isEmpty2.default)(errors)) {\n            onValidationFailed(errors);\n\n            _this.setState({\n              errors: errors\n            });\n          } else {\n            _this.props.updateFormModelData(_this.props.formId, formData);\n\n            _this.props.onSubmit(formData);\n\n            _this.props.deleteFormViewDataById(_this.props.formId);\n          }\n        }), \"handleSubmit\", function () {\n          var shouldTrim = function shouldTrim(fieldName, fieldValue) {\n            return typeof fieldValue === 'string' && !/.*password.*/i.test(fieldName);\n          };\n\n          var formDataWithDefaultValue = _this.getRegisteredFormDataWithDefaultValues();\n\n          var formDataWithTrimmedValue = (0, _mapObjIndexed2.default)(function (fieldValue, fieldName) {\n            return shouldTrim(fieldName, fieldValue) ? (0, _trim2.default)(fieldValue) : fieldValue;\n          }, formDataWithDefaultValue);\n          var _this$props2 = _this.props,\n              onAsyncValidationStart = _this$props2.onAsyncValidationStart,\n              onAsyncValidationEnd = _this$props2.onAsyncValidationEnd;\n          var errors = formValidator(_this.props)(formDataWithTrimmedValue);\n\n          if (errors && (0, _isEmpty2.default)(errors) && typeof asyncFormValidator === 'function') {\n            onAsyncValidationStart();\n            asyncFormValidator(_this.props)(formDataWithTrimmedValue, errors).then(function (asyncErrors) {\n              return _this.handleValidationErrors(formDataWithTrimmedValue, _objectSpread({}, errors, asyncErrors));\n            }).then(onAsyncValidationEnd).catch(onAsyncValidationEnd);\n          } else {\n            _this.handleValidationErrors(formDataWithTrimmedValue, errors);\n          }\n        }), \"clearError\", function (fieldName) {\n          var clearValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n          var errors = _this.state.errors;\n          var error = errors[fieldName];\n          var hasError = error && !(0, _isEmpty2.default)(error);\n\n          if (hasError) {\n            if (clearValue) {\n              _this.props.updateFieldViewValue(_this.props.formId, fieldName, _this.getDefaultValue(fieldName));\n            }\n\n            _this.setState({\n              errors: (0, _omit2.default)(fieldName, errors)\n            });\n          }\n        });\n\n        _this.state = {\n          errors: {}\n        };\n        _this.fields = {};\n        return _this;\n      }\n\n      _createClass(WithForm, [{\n        key: \"getChildContext\",\n        value: function getChildContext() {\n          var errors = this.state.errors;\n          return {\n            form: {\n              onChange: this.handleChange,\n              clearError: this.clearError,\n              register: this.register,\n              unregister: this.unregister,\n              getDefaultValue: this.getDefaultValue,\n              errors: errors,\n              formData: this.getFormData()\n            }\n          };\n        }\n      }, {\n        key: \"componentWillUnmount\",\n        value: function componentWillUnmount() {\n          if (disableFormCache) {\n            this.props.deleteFormViewDataById(this.props.formId);\n          }\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          return _react.default.createElement(Component, _extends({\n            formId: this.props.formId,\n            formData: this.getFormData(),\n            onSubmit: this.handleSubmit,\n            onChange: this.handleChange\n          }, (0, _omit2.default)((0, _keys2.default)(WithForm.propTypes), this.props)));\n        }\n      }]);\n\n      _inherits(WithForm, _React$Component);\n\n      return WithForm;\n    }(_react.default.Component);\n\n    _defineProperty(_defineProperty(_defineProperty(WithForm, \"propTypes\", {\n      formId: _propTypes.default.string.isRequired,\n      onSubmit: _propTypes.default.func.isRequired,\n      formModelData: _propTypes.default.object,\n      formViewData: _propTypes.default.object,\n      deleteFormViewDataById: _propTypes.default.func.isRequired,\n      updateFieldViewValue: _propTypes.default.func.isRequired,\n      updateFormModelData: _propTypes.default.func.isRequired,\n      onValidationFailed: _propTypes.default.func,\n      onAsyncValidationStart: _propTypes.default.func,\n      onAsyncValidationEnd: _propTypes.default.func\n    }), \"childContextTypes\", {\n      form: _propTypes.default.object\n    }), \"defaultProps\", {\n      onValidationFailed: _identity2.default,\n      onAsyncValidationStart: _identity2.default,\n      onAsyncValidationEnd: _identity2.default,\n      formModelData: {},\n      formViewData: {}\n    });\n\n    return (0, _formConnector.default)(WithForm);\n  };\n};\n\nvar _default = withForm;\nexports.default = _default;\n\n//# sourceURL=webpack://MiniReduxForm/./src/hoc/withForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar _exportNames = {\n  withForm: true,\n  withFields: true,\n  withField: true,\n  fieldPropTypes: true,\n  executeValidators: true,\n  formReducer: true,\n  DELETE_FORM_DATA_BY_URL: true,\n  DELETE_FORM_VIEW_DATA_BY_ID: true,\n  UPDATE_FORM_FIELD_VIEW_VALUE: true,\n  UPDATE_FORM_MODEL_DATA: true,\n  Form: true,\n  InputField: true,\n  SelectField: true,\n  CheckboxField: true,\n  TextareaField: true\n};\nObject.defineProperty(exports, \"withForm\", {\n  enumerable: true,\n  get: function get() {\n    return _withForm.default;\n  }\n});\nObject.defineProperty(exports, \"withFields\", {\n  enumerable: true,\n  get: function get() {\n    return _withFields.default;\n  }\n});\nObject.defineProperty(exports, \"withField\", {\n  enumerable: true,\n  get: function get() {\n    return _withField.default;\n  }\n});\nObject.defineProperty(exports, \"fieldPropTypes\", {\n  enumerable: true,\n  get: function get() {\n    return _withField.fieldPropTypes;\n  }\n});\nObject.defineProperty(exports, \"executeValidators\", {\n  enumerable: true,\n  get: function get() {\n    return _executeValidators.default;\n  }\n});\nObject.defineProperty(exports, \"formReducer\", {\n  enumerable: true,\n  get: function get() {\n    return _formReducer.default;\n  }\n});\nObject.defineProperty(exports, \"DELETE_FORM_DATA_BY_URL\", {\n  enumerable: true,\n  get: function get() {\n    return _formAction.DELETE_FORM_DATA_BY_URL;\n  }\n});\nObject.defineProperty(exports, \"DELETE_FORM_VIEW_DATA_BY_ID\", {\n  enumerable: true,\n  get: function get() {\n    return _formAction.DELETE_FORM_VIEW_DATA_BY_ID;\n  }\n});\nObject.defineProperty(exports, \"UPDATE_FORM_FIELD_VIEW_VALUE\", {\n  enumerable: true,\n  get: function get() {\n    return _formAction.UPDATE_FORM_FIELD_VIEW_VALUE;\n  }\n});\nObject.defineProperty(exports, \"UPDATE_FORM_MODEL_DATA\", {\n  enumerable: true,\n  get: function get() {\n    return _formAction.UPDATE_FORM_MODEL_DATA;\n  }\n});\nObject.defineProperty(exports, \"Form\", {\n  enumerable: true,\n  get: function get() {\n    return _form.default;\n  }\n});\nObject.defineProperty(exports, \"InputField\", {\n  enumerable: true,\n  get: function get() {\n    return _inputField.default;\n  }\n});\nObject.defineProperty(exports, \"SelectField\", {\n  enumerable: true,\n  get: function get() {\n    return _selectField.default;\n  }\n});\nObject.defineProperty(exports, \"CheckboxField\", {\n  enumerable: true,\n  get: function get() {\n    return _checkboxField.default;\n  }\n});\nObject.defineProperty(exports, \"TextareaField\", {\n  enumerable: true,\n  get: function get() {\n    return _textareaField.default;\n  }\n});\n\nvar _withForm = _interopRequireDefault(__webpack_require__(/*! ./hoc/withForm */ \"./src/hoc/withForm.js\"));\n\nvar _withFields = _interopRequireDefault(__webpack_require__(/*! ./hoc/withFields */ \"./src/hoc/withFields.js\"));\n\nvar _withField = _interopRequireWildcard(__webpack_require__(/*! ./hoc/withField */ \"./src/hoc/withField.js\"));\n\nvar _executeValidators = _interopRequireDefault(__webpack_require__(/*! ./utils/executeValidators */ \"./src/utils/executeValidators.js\"));\n\nvar _formReducer = _interopRequireDefault(__webpack_require__(/*! ./reducer/formReducer */ \"./src/reducer/formReducer.js\"));\n\nvar _formAction = __webpack_require__(/*! ./action/formAction */ \"./src/action/formAction.js\");\n\nvar _form = _interopRequireDefault(__webpack_require__(/*! ./component/form */ \"./src/component/form.js\"));\n\nvar _inputField = _interopRequireDefault(__webpack_require__(/*! ./component/inputField */ \"./src/component/inputField.js\"));\n\nvar _selectField = _interopRequireDefault(__webpack_require__(/*! ./component/selectField */ \"./src/component/selectField.js\"));\n\nvar _checkboxField = _interopRequireDefault(__webpack_require__(/*! ./component/checkboxField */ \"./src/component/checkboxField.js\"));\n\nvar _textareaField = _interopRequireDefault(__webpack_require__(/*! ./component/textareaField */ \"./src/component/textareaField.js\"));\n\nvar _selectors = __webpack_require__(/*! ./selectors */ \"./src/selectors.js\");\n\nObject.keys(_selectors).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _selectors[key];\n    }\n  });\n});\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://MiniReduxForm/./src/index.js?");

/***/ }),

/***/ "./src/reducer/formReducer.js":
/*!************************************!*\
  !*** ./src/reducer/formReducer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _prop2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/prop */ \"./node_modules/ramda/src/prop.js\"));\n\nvar _complement2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/complement */ \"./node_modules/ramda/src/complement.js\"));\n\nvar _pickBy2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/pickBy */ \"./node_modules/ramda/src/pickBy.js\"));\n\nvar _formAction = __webpack_require__(/*! ../action/formAction */ \"./src/action/formAction.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar isMatchUrl = function isMatchUrl(url) {\n  return function (form) {\n    return form.url === url;\n  };\n};\n\nvar formReducer = function formReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _formAction.DELETE_FORM_DATA_BY_URL:\n      {\n        var url = action.url;\n        return (0, _pickBy2.default)((0, _complement2.default)(isMatchUrl(url)), state);\n      }\n\n    case _formAction.DELETE_FORM_VIEW_DATA_BY_ID:\n      {\n        var formId = action.formId;\n        var form = state[formId];\n        return _objectSpread({}, state, _defineProperty({}, formId, _objectSpread({}, form, {\n          viewData: {}\n        })));\n      }\n\n    case _formAction.UPDATE_FORM_MODEL_DATA:\n      {\n        var _formId = action.formId,\n            modelData = action.modelData;\n        var _form = state[_formId];\n        return _objectSpread({}, state, _defineProperty({}, _formId, _objectSpread({}, _form, {\n          modelData: modelData\n        })));\n      }\n\n    case _formAction.UPDATE_FORM_FIELD_VIEW_VALUE:\n      {\n        var _formId2 = action.formId,\n            _url = action.url,\n            fieldName = action.fieldName,\n            value = action.value;\n        var _form2 = state[_formId2];\n        return _objectSpread({}, state, _defineProperty({}, _formId2, _objectSpread({}, _form2, {\n          url: _url,\n          viewData: _objectSpread({}, (0, _prop2.default)('viewData', _form2), _defineProperty({}, fieldName, value))\n        })));\n      }\n\n    default:\n      return state;\n  }\n};\n\nvar _default = formReducer;\nexports.default = _default;\n\n//# sourceURL=webpack://MiniReduxForm/./src/reducer/formReducer.js?");

/***/ }),

/***/ "./src/selectors.js":
/*!**************************!*\
  !*** ./src/selectors.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getFormModelData = exports.getFormViewData = void 0;\n\nvar _pathOr2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/pathOr */ \"./node_modules/ramda/src/pathOr.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar getFormViewData = function getFormViewData(state, formId) {\n  return (0, _pathOr2.default)({}, [formId, 'viewData'], state.form);\n};\n\nexports.getFormViewData = getFormViewData;\n\nvar getFormModelData = function getFormModelData(state, formId) {\n  return (0, _pathOr2.default)({}, [formId, 'modelData'], state.form);\n};\n\nexports.getFormModelData = getFormModelData;\n\n//# sourceURL=webpack://MiniReduxForm/./src/selectors.js?");

/***/ }),

/***/ "./src/utils/executeValidators.js":
/*!****************************************!*\
  !*** ./src/utils/executeValidators.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _map2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/map */ \"./node_modules/ramda/src/map.js\"));\n\nvar _pickBy2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/pickBy */ \"./node_modules/ramda/src/pickBy.js\"));\n\nvar _mapObjIndexed2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/mapObjIndexed */ \"./node_modules/ramda/src/mapObjIndexed.js\"));\n\nvar _isEmpty2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/isEmpty */ \"./node_modules/ramda/src/isEmpty.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar isRequired = function isRequired(val) {\n  return val && !(0, _isEmpty2.default)(val);\n};\n\nvar omitUndefined = (0, _pickBy2.default)(function (val) {\n  return val !== undefined;\n});\n\nvar executeFieldValidators = function executeFieldValidators(validators, val) {\n  for (var i = 0; i < validators.length; i += 1) {\n    var _validators$i = validators[i],\n        type = _validators$i.type,\n        msg = _validators$i.msg,\n        validator = _validators$i.validator;\n\n    if (!validator(val)) {\n      return {\n        type: type,\n        msg: msg\n      };\n    }\n  }\n\n  return undefined;\n};\n\nvar executeFieldRule = function executeFieldRule(fieldRule, val) {\n  if (fieldRule.required && !isRequired(val)) {\n    return {\n      type: 'REQUIRED'\n    };\n  }\n\n  return executeFieldValidators(fieldRule.validators, val);\n};\n\nvar executeFormRule = function executeFormRule(_ref, formData, fieldErrors) {\n  var msg = _ref.msg,\n      type = _ref.type,\n      validator = _ref.validator;\n\n  if (!validator(formData, fieldErrors)) {\n    return {\n      type: type,\n      msg: msg\n    };\n  }\n\n  return undefined;\n};\n\nvar executeFieldRules = function executeFieldRules(fieldRules, formData) {\n  var errors = (0, _mapObjIndexed2.default)(function (val, fieldName) {\n    return executeFieldRule(fieldRules[fieldName], val);\n  }, formData);\n  return omitUndefined(errors);\n};\n\nvar executeFormRules = function executeFormRules(formRules, formData, fieldErrors) {\n  return omitUndefined((0, _map2.default)(function (formRule) {\n    return executeFormRule(formRule, formData, fieldErrors);\n  }, formRules));\n};\n\nvar _default = function _default(fieldRules, formRules, formData) {\n  var fieldErrors = executeFieldRules(fieldRules, formData);\n  var formErrors = executeFormRules(formRules, formData, fieldErrors);\n  return _objectSpread({}, fieldErrors, formErrors);\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://MiniReduxForm/./src/utils/executeValidators.js?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://MiniReduxForm/external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ }),

/***/ "react-redux":
/*!*************************************************************************************************************!*\
  !*** external {"root":"ReactRedux","commonjs2":"react-redux","commonjs":"react-redux","amd":"react-redux"} ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;\n\n//# sourceURL=webpack://MiniReduxForm/external_%7B%22root%22:%22ReactRedux%22,%22commonjs2%22:%22react-redux%22,%22commonjs%22:%22react-redux%22,%22amd%22:%22react-redux%22%7D?");

/***/ })

/******/ });
});