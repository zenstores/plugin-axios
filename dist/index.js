var vuexOrmAxios =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


function _typeof2(obj) {
  if (typeof Symbol === "function" && Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(Symbol.iterator) === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
    };
  }

  return _typeof2(obj);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] || freeSelf || Function('return this')();
/* harmony default export */ __webpack_exports__["a"] = (root);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(0);

var assertThisInitialized = __webpack_require__(19);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(20);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(global)) == 'object' && global && global.Object === Object && global;
/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);



/** Detect free variable `exports`. */

var freeExports = (typeof exports === "undefined" ? "undefined" : Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (isBuffer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)(module)))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


/** Detect free variable `exports`. */

var freeExports = (typeof exports === "undefined" ? "undefined" : Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

/* harmony default export */ __webpack_exports__["a"] = (nodeUtil);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)(module)))

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (stubFalse);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


/** Detect free variable `exports`. */

var freeExports = (typeof exports === "undefined" ? "undefined" : Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (cloneBuffer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)(module)))

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this || (typeof self === "undefined" ? "undefined" : Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(self)) === "object" && self;
}() || Function("return this")(); // Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.


var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0; // Save the old regeneratorRuntime in case it needs to be restored later.

var oldRuntime = hadRuntime && g.regeneratorRuntime; // Force reevalutation of runtime.js.

g.regeneratorRuntime = undefined;
module.exports = __webpack_require__(18);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)(module)))

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = ( false ? undefined : Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(module)) === "object";
  var runtime = global.regeneratorRuntime;

  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    } // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.


    return;
  } // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.


  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  runtime.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  runtime.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}( // In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this || (typeof self === "undefined" ? "undefined" : Object(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(self)) === "object" && self;
}() || Function("return this")());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)(module)))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(3);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheClear.js
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ var _listCacheClear = (listCacheClear);
// CONCATENATED MODULE: ./node_modules/lodash-es/eq.js
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/* harmony default export */ var lodash_es_eq = (eq);
// CONCATENATED MODULE: ./node_modules/lodash-es/_assocIndexOf.js

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (lodash_es_eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

/* harmony default export */ var _assocIndexOf = (assocIndexOf);
// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheDelete.js

/** Used for built-in method references. */

var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

/* harmony default export */ var _listCacheDelete = (listCacheDelete);
// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheGet.js

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ var _listCacheGet = (listCacheGet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheHas.js

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

/* harmony default export */ var _listCacheHas = (listCacheHas);
// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheSet.js

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */

function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

/* harmony default export */ var _listCacheSet = (listCacheSet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_ListCache.js





/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;
/* harmony default export */ var _ListCache = (ListCache);
// CONCATENATED MODULE: ./node_modules/lodash-es/_stackClear.js

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */

function stackClear() {
  this.__data__ = new _ListCache();
  this.size = 0;
}

/* harmony default export */ var _stackClear = (stackClear);
// CONCATENATED MODULE: ./node_modules/lodash-es/_stackDelete.js
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

/* harmony default export */ var _stackDelete = (stackDelete);
// CONCATENATED MODULE: ./node_modules/lodash-es/_stackGet.js
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ var _stackGet = (stackGet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_stackHas.js
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ var _stackHas = (stackHas);
// EXTERNAL MODULE: ./node_modules/lodash-es/_root.js
var _root = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Symbol.js

/** Built-in value references. */

var _Symbol = _root["a" /* default */].Symbol;
/* harmony default export */ var lodash_es_Symbol = (_Symbol);
// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js

/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = lodash_es_Symbol ? lodash_es_Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);
// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js



/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var _baseGetTag_symToStringTag = lodash_es_Symbol ? lodash_es_Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return _baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value) ? _getRawTag(value) : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/lodash-es/isObject.js


/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = Object(helpers_typeof["default"])(value);

  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ var lodash_es_isObject = (isObject);
// CONCATENATED MODULE: ./node_modules/lodash-es/isFunction.js


/** `Object#toString` result references. */

var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!lodash_es_isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ var lodash_es_isFunction = (isFunction);
// CONCATENATED MODULE: ./node_modules/lodash-es/_coreJsData.js

/** Used to detect overreaching core-js shims. */

var coreJsData = _root["a" /* default */]['__core-js_shared__'];
/* harmony default export */ var _coreJsData = (coreJsData);
// CONCATENATED MODULE: ./node_modules/lodash-es/_isMasked.js

/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/* harmony default export */ var _isMasked = (isMasked);
// CONCATENATED MODULE: ./node_modules/lodash-es/_toSource.js
/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

/* harmony default export */ var _toSource = (toSource);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsNative.js




/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var _baseIsNative_funcProto = Function.prototype,
    _baseIsNative_objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var _baseIsNative_funcToString = _baseIsNative_funcProto.toString;
/** Used to check objects for own properties. */

var _baseIsNative_hasOwnProperty = _baseIsNative_objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + _baseIsNative_funcToString.call(_baseIsNative_hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!lodash_es_isObject(value) || _isMasked(value)) {
    return false;
  }

  var pattern = lodash_es_isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

/* harmony default export */ var _baseIsNative = (baseIsNative);
// CONCATENATED MODULE: ./node_modules/lodash-es/_getValue.js
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ var _getValue = (getValue);
// CONCATENATED MODULE: ./node_modules/lodash-es/_getNative.js


/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */

function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

/* harmony default export */ var _getNative = (getNative);
// CONCATENATED MODULE: ./node_modules/lodash-es/_Map.js


/* Built-in method references that are verified to be native. */

var Map = _getNative(_root["a" /* default */], 'Map');
/* harmony default export */ var _Map = (Map);
// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeCreate.js

/* Built-in method references that are verified to be native. */

var nativeCreate = _getNative(Object, 'create');
/* harmony default export */ var _nativeCreate = (nativeCreate);
// CONCATENATED MODULE: ./node_modules/lodash-es/_hashClear.js

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */

function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

/* harmony default export */ var _hashClear = (hashClear);
// CONCATENATED MODULE: ./node_modules/lodash-es/_hashDelete.js
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ var _hashDelete = (hashDelete);
// CONCATENATED MODULE: ./node_modules/lodash-es/_hashGet.js

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var _hashGet_objectProto = Object.prototype;
/** Used to check objects for own properties. */

var _hashGet_hasOwnProperty = _hashGet_objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return _hashGet_hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ var _hashGet = (hashGet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_hashHas.js

/** Used for built-in method references. */

var _hashHas_objectProto = Object.prototype;
/** Used to check objects for own properties. */

var _hashHas_hasOwnProperty = _hashHas_objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? data[key] !== undefined : _hashHas_hasOwnProperty.call(data, key);
}

/* harmony default export */ var _hashHas = (hashHas);
// CONCATENATED MODULE: ./node_modules/lodash-es/_hashSet.js

/** Used to stand-in for `undefined` hash values. */

var _hashSet_HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate && value === undefined ? _hashSet_HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ var _hashSet = (hashSet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_Hash.js





/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;
/* harmony default export */ var _Hash = (Hash);
// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheClear.js



/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash(),
    'map': new (_Map || _ListCache)(),
    'string': new _Hash()
  };
}

/* harmony default export */ var _mapCacheClear = (mapCacheClear);
// CONCATENATED MODULE: ./node_modules/lodash-es/_isKeyable.js


/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = Object(helpers_typeof["default"])(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/* harmony default export */ var _isKeyable = (isKeyable);
// CONCATENATED MODULE: ./node_modules/lodash-es/_getMapData.js

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */

function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/* harmony default export */ var _getMapData = (getMapData);
// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheDelete.js

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ var _mapCacheDelete = (mapCacheDelete);
// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheGet.js

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

/* harmony default export */ var _mapCacheGet = (mapCacheGet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheHas.js

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

/* harmony default export */ var _mapCacheHas = (mapCacheHas);
// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheSet.js

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */

function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ var _mapCacheSet = (mapCacheSet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_MapCache.js





/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;
/* harmony default export */ var _MapCache = (MapCache);
// CONCATENATED MODULE: ./node_modules/lodash-es/_stackSet.js



/** Used as the size to enable large array optimizations. */

var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof _ListCache) {
    var pairs = data.__data__;

    if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new _MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ var _stackSet = (stackSet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_Stack.js






/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;
/* harmony default export */ var _Stack = (Stack);
// CONCATENATED MODULE: ./node_modules/lodash-es/_defineProperty.js


var defineProperty = function () {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

/* harmony default export */ var lodash_es_defineProperty = (defineProperty);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseAssignValue.js

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function baseAssignValue(object, key, value) {
  if (key == '__proto__' && lodash_es_defineProperty) {
    lodash_es_defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ var _baseAssignValue = (baseAssignValue);
// CONCATENATED MODULE: ./node_modules/lodash-es/_assignMergeValue.js


/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignMergeValue(object, key, value) {
  if (value !== undefined && !lodash_es_eq(object[key], value) || value === undefined && !(key in object)) {
    _baseAssignValue(object, key, value);
  }
}

/* harmony default export */ var _assignMergeValue = (assignMergeValue);
// CONCATENATED MODULE: ./node_modules/lodash-es/_createBaseFor.js
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

/* harmony default export */ var _createBaseFor = (createBaseFor);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseFor.js

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */

var baseFor = _createBaseFor();
/* harmony default export */ var _baseFor = (baseFor);
// EXTERNAL MODULE: ./node_modules/lodash-es/_cloneBuffer.js
var _cloneBuffer = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Uint8Array.js

/** Built-in value references. */

var Uint8Array = _root["a" /* default */].Uint8Array;
/* harmony default export */ var _Uint8Array = (Uint8Array);
// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneArrayBuffer.js

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */

function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

/* harmony default export */ var _cloneArrayBuffer = (cloneArrayBuffer);
// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneTypedArray.js

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */

function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ var _cloneTypedArray = (cloneTypedArray);
// CONCATENATED MODULE: ./node_modules/lodash-es/_copyArray.js
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

/* harmony default export */ var _copyArray = (copyArray);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseCreate.js

/** Built-in value references. */

var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!lodash_es_isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

/* harmony default export */ var _baseCreate = (baseCreate);
// CONCATENATED MODULE: ./node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);
// CONCATENATED MODULE: ./node_modules/lodash-es/_getPrototype.js

/** Built-in value references. */

var getPrototype = _overArg(Object.getPrototypeOf, Object);
/* harmony default export */ var _getPrototype = (getPrototype);
// CONCATENATED MODULE: ./node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var _isPrototype_objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || _isPrototype_objectProto;
  return value === proto;
}

/* harmony default export */ var _isPrototype = (isPrototype);
// CONCATENATED MODULE: ./node_modules/lodash-es/_initCloneObject.js



/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneObject(object) {
  return typeof object.constructor == 'function' && !_isPrototype(object) ? _baseCreate(_getPrototype(object)) : {};
}

/* harmony default export */ var _initCloneObject = (initCloneObject);
// CONCATENATED MODULE: ./node_modules/lodash-es/isObjectLike.js


/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && Object(helpers_typeof["default"])(value) == 'object';
}

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsArguments.js


/** `Object#toString` result references. */

var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return lodash_es_isObjectLike(value) && _baseGetTag(value) == argsTag;
}

/* harmony default export */ var _baseIsArguments = (baseIsArguments);
// CONCATENATED MODULE: ./node_modules/lodash-es/isArguments.js


/** Used for built-in method references. */

var isArguments_objectProto = Object.prototype;
/** Used to check objects for own properties. */

var isArguments_hasOwnProperty = isArguments_objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = isArguments_objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = _baseIsArguments(function () {
  return arguments;
}()) ? _baseIsArguments : function (value) {
  return lodash_es_isObjectLike(value) && isArguments_hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/* harmony default export */ var lodash_es_isArguments = (isArguments);
// CONCATENATED MODULE: ./node_modules/lodash-es/isArray.js
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
/* harmony default export */ var lodash_es_isArray = (isArray);
// CONCATENATED MODULE: ./node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/* harmony default export */ var lodash_es_isLength = (isLength);
// CONCATENATED MODULE: ./node_modules/lodash-es/isArrayLike.js


/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && lodash_es_isLength(value.length) && !lodash_es_isFunction(value);
}

/* harmony default export */ var lodash_es_isArrayLike = (isArrayLike);
// CONCATENATED MODULE: ./node_modules/lodash-es/isArrayLikeObject.js


/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */

function isArrayLikeObject(value) {
  return lodash_es_isObjectLike(value) && lodash_es_isArrayLike(value);
}

/* harmony default export */ var lodash_es_isArrayLikeObject = (isArrayLikeObject);
// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js
var isBuffer = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/lodash-es/isPlainObject.js



/** `Object#toString` result references. */

var objectTag = '[object Object]';
/** Used for built-in method references. */

var isPlainObject_funcProto = Function.prototype,
    isPlainObject_objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var isPlainObject_funcToString = isPlainObject_funcProto.toString;
/** Used to check objects for own properties. */

var isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = isPlainObject_funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!lodash_es_isObjectLike(value) || _baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = _getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && isPlainObject_funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ var lodash_es_isPlainObject = (isPlainObject);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsTypedArray.js



/** `Object#toString` result references. */

var _baseIsTypedArray_argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    _baseIsTypedArray_funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    _baseIsTypedArray_objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[_baseIsTypedArray_argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[_baseIsTypedArray_funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[_baseIsTypedArray_objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return lodash_es_isObjectLike(value) && lodash_es_isLength(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

/* harmony default export */ var _baseIsTypedArray = (baseIsTypedArray);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseUnary.js
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/* harmony default export */ var _baseUnary = (baseUnary);
// EXTERNAL MODULE: ./node_modules/lodash-es/_nodeUtil.js
var _nodeUtil = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/lodash-es/isTypedArray.js



/* Node.js helper references. */

var nodeIsTypedArray = _nodeUtil["a" /* default */] && _nodeUtil["a" /* default */].isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
/* harmony default export */ var lodash_es_isTypedArray = (isTypedArray);
// CONCATENATED MODULE: ./node_modules/lodash-es/_safeGet.js
/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/* harmony default export */ var _safeGet = (safeGet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_assignValue.js


/** Used for built-in method references. */

var _assignValue_objectProto = Object.prototype;
/** Used to check objects for own properties. */

var _assignValue_hasOwnProperty = _assignValue_objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(_assignValue_hasOwnProperty.call(object, key) && lodash_es_eq(objValue, value)) || value === undefined && !(key in object)) {
    _baseAssignValue(object, key, value);
  }
}

/* harmony default export */ var _assignValue = (assignValue);
// CONCATENATED MODULE: ./node_modules/lodash-es/_copyObject.js


/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */

function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }

  return object;
}

/* harmony default export */ var _copyObject = (copyObject);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseTimes.js
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

/* harmony default export */ var _baseTimes = (baseTimes);
// CONCATENATED MODULE: ./node_modules/lodash-es/_isIndex.js


/** Used as references for various `Number` constants. */
var _isIndex_MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = Object(helpers_typeof["default"])(value);

  length = length == null ? _isIndex_MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/* harmony default export */ var _isIndex = (isIndex);
// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayLikeKeys.js






/** Used for built-in method references. */

var _arrayLikeKeys_objectProto = Object.prototype;
/** Used to check objects for own properties. */

var _arrayLikeKeys_hasOwnProperty = _arrayLikeKeys_objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = lodash_es_isArray(value),
      isArg = !isArr && lodash_es_isArguments(value),
      isBuff = !isArr && !isArg && Object(isBuffer["a" /* default */])(value),
      isType = !isArr && !isArg && !isBuff && lodash_es_isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || _arrayLikeKeys_hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    _isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

/* harmony default export */ var _arrayLikeKeys = (arrayLikeKeys);
// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeKeysIn.js
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

/* harmony default export */ var _nativeKeysIn = (nativeKeysIn);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseKeysIn.js



/** Used for built-in method references. */

var _baseKeysIn_objectProto = Object.prototype;
/** Used to check objects for own properties. */

var _baseKeysIn_hasOwnProperty = _baseKeysIn_objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!lodash_es_isObject(object)) {
    return _nativeKeysIn(object);
  }

  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !_baseKeysIn_hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

/* harmony default export */ var _baseKeysIn = (baseKeysIn);
// CONCATENATED MODULE: ./node_modules/lodash-es/keysIn.js



/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */

function keysIn(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

/* harmony default export */ var lodash_es_keysIn = (keysIn);
// CONCATENATED MODULE: ./node_modules/lodash-es/toPlainObject.js


/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */

function toPlainObject(value) {
  return _copyObject(value, lodash_es_keysIn(value));
}

/* harmony default export */ var lodash_es_toPlainObject = (toPlainObject);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMergeDeep.js















/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */

function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet(object, key),
      srcValue = _safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }

  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = lodash_es_isArray(srcValue),
        isBuff = !isArr && Object(isBuffer["a" /* default */])(srcValue),
        isTyped = !isArr && !isBuff && lodash_es_isTypedArray(srcValue);
    newValue = srcValue;

    if (isArr || isBuff || isTyped) {
      if (lodash_es_isArray(objValue)) {
        newValue = objValue;
      } else if (lodash_es_isArrayLikeObject(objValue)) {
        newValue = _copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = Object(_cloneBuffer["a" /* default */])(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (lodash_es_isPlainObject(srcValue) || lodash_es_isArguments(srcValue)) {
      newValue = objValue;

      if (lodash_es_isArguments(objValue)) {
        newValue = lodash_es_toPlainObject(objValue);
      } else if (!lodash_es_isObject(objValue) || lodash_es_isFunction(objValue)) {
        newValue = _initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }

  _assignMergeValue(object, key, newValue);
}

/* harmony default export */ var _baseMergeDeep = (baseMergeDeep);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMerge.js







/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */

function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }

  _baseFor(source, function (srcValue, key) {
    if (lodash_es_isObject(srcValue)) {
      stack || (stack = new _Stack());
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(_safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }

      _assignMergeValue(object, key, newValue);
    }
  }, lodash_es_keysIn);
}

/* harmony default export */ var _baseMerge = (baseMerge);
// CONCATENATED MODULE: ./node_modules/lodash-es/identity.js
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ var lodash_es_identity = (identity);
// CONCATENATED MODULE: ./node_modules/lodash-es/_apply.js
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

/* harmony default export */ var _apply = (apply);
// CONCATENATED MODULE: ./node_modules/lodash-es/_overRest.js

/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

/* harmony default export */ var _overRest = (overRest);
// CONCATENATED MODULE: ./node_modules/lodash-es/constant.js
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

/* harmony default export */ var lodash_es_constant = (constant);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSetToString.js



/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */

var baseSetToString = !lodash_es_defineProperty ? lodash_es_identity : function (func, string) {
  return lodash_es_defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': lodash_es_constant(string),
    'writable': true
  });
};
/* harmony default export */ var _baseSetToString = (baseSetToString);
// CONCATENATED MODULE: ./node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ var _shortOut = (shortOut);
// CONCATENATED MODULE: ./node_modules/lodash-es/_setToString.js


/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */

var setToString = _shortOut(_baseSetToString);
/* harmony default export */ var _setToString = (setToString);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseRest.js



/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */

function baseRest(func, start) {
  return _setToString(_overRest(func, start, lodash_es_identity), func + '');
}

/* harmony default export */ var _baseRest = (baseRest);
// CONCATENATED MODULE: ./node_modules/lodash-es/_isIterateeCall.js





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */

function isIterateeCall(value, index, object) {
  if (!lodash_es_isObject(object)) {
    return false;
  }

  var type = Object(helpers_typeof["default"])(index);

  if (type == 'number' ? lodash_es_isArrayLike(object) && _isIndex(index, object.length) : type == 'string' && index in object) {
    return lodash_es_eq(object[index], value);
  }

  return false;
}

/* harmony default export */ var _isIterateeCall = (isIterateeCall);
// CONCATENATED MODULE: ./node_modules/lodash-es/_createAssigner.js


/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */

function createAssigner(assigner) {
  return _baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}

/* harmony default export */ var _createAssigner = (createAssigner);
// CONCATENATED MODULE: ./node_modules/lodash-es/merge.js


/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */

var merge = _createAssigner(function (object, source, srcIndex) {
  _baseMerge(object, source, srcIndex);
});
/* harmony default export */ var lodash_es_merge = (merge);
// CONCATENATED MODULE: ./node_modules/@vuex-orm/core/dist/vuex-orm.esm.js


if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (search, pos) {
    return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  };
}

if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;

    if (len === 0) {
      return false;
    }

    var n = args[1] || 0;
    var k;

    if (n >= 0) {
      k = n;
    } else {
      k = len + n;

      if (k < 0) {
        k = 0;
      }
    }

    var currentElement;

    while (k < len) {
      currentElement = O[k];

      if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
        return true;
      }

      k++;
    }

    return false;
  };
}

var Container =
/** @class */
function () {
  function Container() {}
  /**
   * Register the database.
   */


  Container.register = function (database) {
    this.database = database;
  };

  return Container;
}();

var vuex_orm_esm_install = function install(database, options) {
  if (options === void 0) {
    options = {};
  }

  var namespace = options.namespace || 'entities';
  return function (store) {
    Container.register(database);
    database.start(store, namespace);
  };
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */


var extendStatics = Object.setPrototypeOf || {
  __proto__: []
} instanceof Array && function (d, b) {
  d.__proto__ = b;
} || function (d, b) {
  for (var p in b) {
    if (b.hasOwnProperty(p)) d[p] = b[p];
  }
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
  }

  return t;
};

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [0, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
/**
 * Check if the given array or object is empty.
 */


function isEmpty(data) {
  if (Array.isArray(data)) {
    return data.length === 0;
  }

  return Object.keys(data).length === 0;
}
/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property.
 */


function forOwn(object, iteratee) {
  Object.keys(object).forEach(function (key) {
    return iteratee(object[key], key, object);
  });
}
/**
 * Create an array from the object.
 */


function vuex_orm_esm_map(object, iteratee) {
  return Object.keys(object).map(function (key) {
    return iteratee(object[key], key, object);
  });
}
/**
 * Creates an object with the same keys as object and values generated by
 * running each own enumerable string keyed property of object thru
 * iteratee. The iteratee is invoked with three arguments:
 * (value, key, object).
 */


function mapValues(object, iteratee) {
  var newObject = Object.assign({}, object);
  return Object.keys(object).reduce(function (records, key) {
    records[key] = iteratee(object[key], key, object);
    return records;
  }, newObject);
}
/**
 * Creates an object composed of the object properties predicate returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 */


function pickBy(object, predicate) {
  return Object.keys(object).reduce(function (records, key) {
    var value = object[key];

    if (predicate(value, key)) {
      records[key] = value;
    }

    return records;
  }, {});
}
/**
 * Creates an array of elements, sorted in specified order by the results
 * of running each element in a collection thru each iteratee.
 */


function orderBy(collection, keys, directions) {
  var index = -1;
  var result = collection.map(function (value) {
    var criteria = keys.map(function (key) {
      return value[key];
    });
    return {
      criteria: criteria,
      index: ++index,
      value: value
    };
  });
  return baseSortBy(result, function (object, other) {
    return compareMultiple(object, other, directions);
  });
}
/**
 * Creates an object composed of keys generated from the results of running
 * each element of collection thru iteratee.
 */


function groupBy(collection, iteratee) {
  return collection.reduce(function (records, record) {
    var key = iteratee(record);

    if (records[key] === undefined) {
      records[key] = [];
    }

    records[key].push(record);
    return records;
  }, {});
}
/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their
 * corresponding values.
 */


function baseSortBy(array, comparer) {
  var length = array.length;
  array.sort(comparer);

  while (length--) {
    array[length] = array[length].value;
  }

  return array;
}
/**
 * Used by `orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order.
 * Otherwise, specify an order of "desc" for descending or "asc" for
 * ascending sort order of corresponding values.
 */


function compareMultiple(object, other, orders) {
  var objCriteria = object.criteria;
  var othCriteria = other.criteria;
  var length = objCriteria.length;
  var ordersLength = orders.length;
  var index = -1;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);

    if (result) {
      if (index >= ordersLength) {
        return result;
      }

      var order = orders[index];
      return result * (order === 'desc' ? -1 : 1);
    }
  }

  return object.index - other.index;
}
/**
 * Compares values to sort them in ascending order.
 */


function compareAscending(value, other) {
  if (value !== other) {
    if (value > other) {
      return 1;
    }

    if (value < other) {
      return -1;
    }
  }

  return 0;
}

var Utils = {
  isEmpty: isEmpty,
  forOwn: forOwn,
  groupBy: groupBy,
  map: vuex_orm_esm_map,
  mapValues: mapValues,
  orderBy: orderBy,
  pickBy: pickBy
};

var Attribute =
/** @class */
function () {
  /**
   * Create a new attribute instance.
   */
  function Attribute(model) {
    this.model = model;
  }

  return Attribute;
}();

var Type =
/** @class */
function (_super) {
  __extends(Type, _super);
  /**
   * Create a new type instance.
   */


  function Type(model, mutator) {
    var _this = _super.call(this, model)
    /* istanbul ignore next */
    || this;

    _this.mutator = mutator;
    return _this;
  }
  /**
   * Mutate the given value by mutator.
   */


  Type.prototype.mutate = function (value, key) {
    var mutator = this.mutator || this.model.mutators()[key];
    return mutator ? mutator(value) : value;
  };

  return Type;
}(Attribute);

var Attr =
/** @class */
function (_super) {
  __extends(Attr, _super);
  /**
   * Create a new attr instance.
   */


  function Attr(model, value, mutator) {
    var _this = _super.call(this, model, mutator)
    /* istanbul ignore next */
    || this;

    _this.value = value;
    return _this;
  }
  /**
   * Transform given data to the appropriate value. This method will be called
   * during data normalization to fix field that has an incorrect value,
   * or add a missing field with the appropriate default value.
   */


  Attr.prototype.fill = function (value) {
    return value !== undefined ? value : this.value;
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  Attr.prototype.make = function (value, _parent, key, _plain) {
    return this.mutate(this.fill(value), key);
  };

  return Attr;
}(Type);

var Increment =
/** @class */
function (_super) {
  __extends(Increment, _super);
  /**
   * Create a new increment instance.
   */


  function Increment(model) {
    var _this = _super.call(this, model)
    /* istanbul ignore next */
    || this;
    /**
     * The initial count to start incrementing.
     */


    _this.value = 1;
    return _this;
  }
  /**
   * Transform given data to the appropriate value. This method will be called
   * during data normalization to fix field that has an incorrect value,
   * or add a missing field with the appropriate default value.
   */


  Increment.prototype.fill = function (value) {
    return value;
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  Increment.prototype.make = function (value, _parent, _key, _plain) {
    return typeof value === 'number' ? value : null;
  };

  return Increment;
}(Type);

var String$1 =
/** @class */
function (_super) {
  __extends(String, _super);
  /**
   * Create a new string instance.
   */


  function String(model, value, mutator) {
    var _this = _super.call(this, model, mutator)
    /* istanbul ignore next */
    || this;

    _this.value = value;
    return _this;
  }
  /**
   * Transform given data to the appropriate value. This method will be called
   * during data normalization to fix field that has an incorrect value,
   * or add a missing field with the appropriate default value.
   */


  String.prototype.fill = function (value) {
    if (value === undefined) {
      return this.value;
    }

    if (typeof value === 'string') {
      return value;
    }

    return value + '';
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  String.prototype.make = function (value, _parent, key, _plain) {
    return this.mutate(this.fill(value), key);
  };

  return String;
}(Type);

var vuex_orm_esm_Number =
/** @class */
function (_super) {
  __extends(Number, _super);
  /**
   * Create a new number instance.
   */


  function Number(model, value, mutator) {
    var _this = _super.call(this, model, mutator)
    /* istanbul ignore next */
    || this;

    _this.value = value;
    return _this;
  }
  /**
   * Transform given data to the appropriate value. This method will be called
   * during data normalization to fix field that has an incorrect value,
   * or add a missing field with the appropriate default value.
   */


  Number.prototype.fill = function (value) {
    if (value === undefined) {
      return this.value;
    }

    if (typeof value === 'number') {
      return value;
    }

    if (typeof value === 'string') {
      return parseFloat(value);
    }

    if (typeof value === 'boolean') {
      return value ? 1 : 0;
    }

    return 0;
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  Number.prototype.make = function (value, _parent, key, _plain) {
    return this.mutate(this.fill(value), key);
  };

  return Number;
}(Type);

var Boolean =
/** @class */
function (_super) {
  __extends(Boolean, _super);
  /**
   * Create a new number instance.
   */


  function Boolean(model, value, mutator) {
    var _this = _super.call(this, model, mutator)
    /* istanbul ignore next */
    || this;

    _this.value = value;
    return _this;
  }
  /**
   * Transform given data to the appropriate value. This method will be called
   * during data normalization to fix field that has an incorrect value,
   * or add a missing field with the appropriate default value.
   */


  Boolean.prototype.fill = function (value) {
    if (value === undefined) {
      return this.value;
    }

    if (typeof value === 'boolean') {
      return value;
    }

    if (typeof value === 'string') {
      if (value.length === 0) {
        return false;
      }

      var int = parseInt(value, 0);
      return isNaN(int) ? true : !!int;
    }

    if (typeof value === 'number') {
      return !!value;
    }

    return false;
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  Boolean.prototype.make = function (value, _parent, key, _plain) {
    return this.mutate(this.fill(value), key);
  };

  return Boolean;
}(Type);

var vuex_orm_esm_Relation =
/** @class */
function (_super) {
  __extends(Relation, _super);

  function Relation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * Fill given value for the single item relationship such as
   * `hasOne` and `belongsTo`.
   */


  Relation.prototype.fillOne = function (value) {
    if (value === undefined) {
      return null;
    }

    if (Object(helpers_typeof["default"])(value) === 'object') {
      return null;
    }

    return value;
  };
  /**
   * Fill given value for the multi-item relationship such as
   * `hasMany` and `belongsToMany`.
   */


  Relation.prototype.fillMany = function (value) {
    return Array.isArray(value) ? value : [];
  };
  /**
   * Get relation query instance with constraint attached.
   */


  Relation.prototype.getRelation = function (query, name) {
    var relation = query.newPlainQuery(name);
    this.addEagerConstraint(query, relation);
    return relation;
  };
  /**
   * Get specified keys from the given collection.
   */


  Relation.prototype.getKeys = function (collection, key) {
    return collection.map(function (item) {
      return item[key];
    });
  };
  /**
   * Add eager load constraint to the query.
   */


  Relation.prototype.addEagerConstraint = function (query, relation) {
    for (var name_1 in query.load) {
      query.load[name_1].forEach(function (constraint) {
        constraint(relation);
      });
    }
  };
  /**
   * Create a new indexed map for the single relation by specified key.
   */


  Relation.prototype.mapSingleRelations = function (collection, key) {
    return collection.reduce(function (records, record) {
      var id = record[key];
      records[id] = record;
      return records;
    }, {});
  };
  /**
   * Create a new indexed map for the many relation by specified key.
   */


  Relation.prototype.mapManyRelations = function (collection, key) {
    return collection.reduce(function (records, record) {
      var id = record[key];

      if (!records[id]) {
        records[id] = [];
      }

      records[id].push(record);
      return records;
    }, {});
  };
  /**
   * Check if the given value is a single relation, which is the Object.
   */


  Relation.prototype.isOneRelation = function (record) {
    if (!Array.isArray(record) && record !== null && Object(helpers_typeof["default"])(record) === 'object') {
      return true;
    }

    return false;
  };

  return Relation;
}(Attribute);

var HasOne =
/** @class */
function (_super) {
  __extends(HasOne, _super);
  /**
   * Create a new has one instance.
   */


  function HasOne(model, related, foreignKey, localKey) {
    var _this = _super.call(this, model)
    /* istanbul ignore next */
    || this;

    _this.related = _this.model.relation(related);
    _this.foreignKey = foreignKey;
    _this.localKey = localKey;
    return _this;
  }
  /**
   * Define the normalizr schema for the relationship.
   */


  HasOne.prototype.define = function (schema) {
    return schema.one(this.related);
  };
  /**
   * Attach the relational key to the related data. For example,
   * when User has one Phone, it will attach value to the
   * `user_id` field of Phone record.
   */


  HasOne.prototype.attach = function (key, record, data) {
    // Get related record.
    var related = data[this.related.entity]; // If there's no related record, there's nothing we can do so return here.

    if (!related || !related[key]) {
      return;
    } // If there is a related record, check if the related record already has
    // proper foreign key value. If it has, that means the user has provided
    // the foreign key themselves so leave it alone and do nothing.


    if (related[key][this.foreignKey] !== undefined) {
      return;
    } // Check if the record has local key set. If not, set the local key to be
    // the id value. This happens if the user defines the custom local key
    // and didn't include it in the data being normalized.


    if (!record[this.localKey]) {
      record[this.localKey] = record.$id;
    } // Finally, set the foreign key of the related record to be the local
    // key of this record.


    related[key][this.foreignKey] = record[this.localKey];
  };
  /**
   * Validate the given value to be a valid value for the relationship.
   */


  HasOne.prototype.fill = function (value) {
    return this.fillOne(value);
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  HasOne.prototype.make = function (value, _parent, _key, plain) {
    if (plain === void 0) {
      plain = false;
    }

    if (!this.isOneRelation(value)) {
      return null;
    }

    return this.related.make(value, plain);
  };
  /**
   * Load the has one relationship for the collection.
   */


  HasOne.prototype.load = function (query, collection, key) {
    var _this = this;

    var relation = this.getRelation(query, this.related.entity);
    relation.where(this.foreignKey, this.getKeys(collection, this.localKey));
    var relations = this.mapSingleRelations(relation.get(), this.foreignKey);
    collection.forEach(function (item) {
      var related = relations[item[_this.localKey]];
      item[key] = related || null;
    });
  };

  return HasOne;
}(vuex_orm_esm_Relation);

var BelongsTo =
/** @class */
function (_super) {
  __extends(BelongsTo, _super);
  /**
   * Create a new belongs to instance.
   */


  function BelongsTo(model, parent, foreignKey, ownerKey) {
    var _this = _super.call(this, model)
    /* istanbul ignore next */
    || this;

    _this.parent = _this.model.relation(parent);
    _this.foreignKey = foreignKey;
    _this.ownerKey = ownerKey;
    return _this;
  }
  /**
   * Define the normalizr schema for the relationship.
   */


  BelongsTo.prototype.define = function (schema) {
    return schema.one(this.parent);
  };
  /**
   * Attach the relational key to the given data. For example,
   * when Post belongs to User, it will attach value to the
   * `user_id` field of Post record.
   */


  BelongsTo.prototype.attach = function (key, record, _data) {
    // See if the record has the foreign key, if yes, it means the user has
    // provided the key explicitly so do nothing and return.
    if (record[this.foreignKey] !== undefined) {
      return;
    } // If there is no foreign key, let's set it here.


    record[this.foreignKey] = key;
  };
  /**
   * Validate the given value to be a valid value for the relationship.
   */


  BelongsTo.prototype.fill = function (value) {
    return this.fillOne(value);
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  BelongsTo.prototype.make = function (value, _parent, _key, plain) {
    if (plain === void 0) {
      plain = false;
    }

    if (!this.isOneRelation(value)) {
      return null;
    }

    return this.parent.make(value, plain);
  };
  /**
   * Load the belongs to relationship for the collection.
   */


  BelongsTo.prototype.load = function (query, collection, key) {
    var _this = this;

    var relatedQuery = this.getRelation(query, this.parent.entity);
    query.where(this.ownerKey, this.getKeys(collection, this.foreignKey));
    var relations = this.mapSingleRelations(relatedQuery.get(), this.ownerKey);
    collection.forEach(function (item) {
      var related = relations[item[_this.foreignKey]];
      item[key] = related || null;
    });
  };

  return BelongsTo;
}(vuex_orm_esm_Relation);

var vuex_orm_esm_HasMany =
/** @class */
function (_super) {
  __extends(HasMany, _super);
  /**
   * Create a new has many instance.
   */


  function HasMany(model, related, foreignKey, localKey) {
    var _this = _super.call(this, model)
    /* istanbul ignore next */
    || this;

    _this.related = _this.model.relation(related);
    _this.foreignKey = foreignKey;
    _this.localKey = localKey;
    return _this;
  }
  /**
   * Define the normalizr schema for the relationship.
   */


  HasMany.prototype.define = function (schema) {
    return schema.many(this.related);
  };
  /**
   * Attach the relational key to the given data.
   */


  HasMany.prototype.attach = function (key, record, data) {
    var _this = this;

    if (!Array.isArray(key)) {
      return;
    }

    key.forEach(function (index) {
      var related = data[_this.related.entity];

      if (!related || !related[index] || related[index][_this.foreignKey] !== undefined) {
        return;
      }

      related[index][_this.foreignKey] = record.$id;
    });
  };
  /**
   * Validate the given value to be a valid value for the relationship.
   */


  HasMany.prototype.fill = function (value) {
    return this.fillMany(value);
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  HasMany.prototype.make = function (value, _parent, _key, plain) {
    var _this = this;

    if (plain === void 0) {
      plain = false;
    }

    if (value === null) {
      return [];
    }

    if (value === undefined) {
      return [];
    }

    if (!Array.isArray(value)) {
      return [];
    }

    if (value.length === 0) {
      return [];
    }

    return value.filter(function (record) {
      return record && Object(helpers_typeof["default"])(record) === 'object';
    }).map(function (record) {
      return _this.related.make(record, plain);
    });
  };
  /**
   * Load the has many relationship for the collection.
   */


  HasMany.prototype.load = function (query, collection, key) {
    var _this = this;

    var relatedQuery = this.getRelation(query, this.related.entity);
    relatedQuery.where(this.foreignKey, this.getKeys(collection, this.localKey));
    var relations = this.mapManyRelations(relatedQuery.get(), this.foreignKey);
    collection.forEach(function (item) {
      var related = relations[item[_this.localKey]];
      item[key] = related || [];
    });
  };

  return HasMany;
}(vuex_orm_esm_Relation);

var vuex_orm_esm_HasManyBy =
/** @class */
function (_super) {
  __extends(HasManyBy, _super);
  /**
   * Create a new has many by instance.
   */


  function HasManyBy(model, parent, foreignKey, ownerKey) {
    var _this = _super.call(this, model)
    /* istanbul ignore next */
    || this;

    _this.parent = _this.model.relation(parent);
    _this.foreignKey = foreignKey;
    _this.ownerKey = ownerKey;
    return _this;
  }
  /**
   * Define the normalizr schema for the relationship.
   */


  HasManyBy.prototype.define = function (schema) {
    return schema.many(this.parent);
  };
  /**
   * Attach the relational key to the given data.
   */


  HasManyBy.prototype.attach = function (key, record, _data) {
    if (key.length === 0) {
      return;
    }

    if (record[this.foreignKey] !== undefined) {
      return;
    }

    record[this.foreignKey] = key;
  };
  /**
   * Validate the given value to be a valid value for the relationship.
   */


  HasManyBy.prototype.fill = function (value) {
    return this.fillMany(value);
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  HasManyBy.prototype.make = function (value, _parent, _key, plain) {
    var _this = this;

    if (plain === void 0) {
      plain = false;
    }

    if (value === null) {
      return [];
    }

    if (value === undefined) {
      return [];
    }

    if (!Array.isArray(value)) {
      return [];
    }

    if (value.length === 0) {
      return [];
    }

    return value.filter(function (record) {
      return record && Object(helpers_typeof["default"])(record) === 'object';
    }).map(function (record) {
      return _this.parent.make(record, plain);
    });
  };
  /**
   * Load the has many by relationship for the collection.
   */


  HasManyBy.prototype.load = function (query, collection, key) {
    var _this = this;

    var relatedQuery = this.getRelation(query, this.parent.entity);
    this.addConstraintForHasManyBy(relatedQuery, collection);
    var relations = this.mapSingleRelations(relatedQuery.get(), this.ownerKey);
    collection.forEach(function (item) {
      var related = _this.getRelatedRecords(relations, item[_this.foreignKey]);

      item[key] = related;
    });
  };
  /**
   * Set the constraints for an eager load of the relation.
   */


  HasManyBy.prototype.addConstraintForHasManyBy = function (query, collection) {
    var _this = this;

    var keys = collection.reduce(function (keys, item) {
      return keys.concat(item[_this.foreignKey]);
    }, []);
    query.where(this.ownerKey, keys);
  };
  /**
   * Get related records.
   */


  HasManyBy.prototype.getRelatedRecords = function (records, keys) {
    return keys.reduce(function (items, id) {
      var related = records[id];
      related && items.push(related);
      return items;
    }, []);
  };

  return HasManyBy;
}(vuex_orm_esm_Relation);

var vuex_orm_esm_HasManyThrough =
/** @class */
function (_super) {
  __extends(HasManyThrough, _super);
  /**
   * Create a new has many through instance.
   */


  function HasManyThrough(model, related, through, firstKey, secondKey, localKey, secondLocalKey) {
    var _this = _super.call(this, model)
    /* istanbul ignore next */
    || this;

    _this.related = _this.model.relation(related);
    _this.through = _this.model.relation(through);
    _this.firstKey = firstKey;
    _this.secondKey = secondKey;
    _this.localKey = localKey;
    _this.secondLocalKey = secondLocalKey;
    return _this;
  }
  /**
   * Define the normalizr schema for the relationship.
   */


  HasManyThrough.prototype.define = function (schema) {
    return schema.many(this.related);
  };
  /**
   * Attach the relational key to the given data. Since has many through
   * relationship doesn't have any foreign key, it would do nothing.
   */


  HasManyThrough.prototype.attach = function (_key, _record, _data) {
    return;
  };
  /**
   * Validate the given value to be a valid value for the relationship.
   */


  HasManyThrough.prototype.fill = function (value) {
    return this.fillMany(value);
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  HasManyThrough.prototype.make = function (value, _parent, _key, plain) {
    var _this = this;

    if (plain === void 0) {
      plain = false;
    }

    if (value === null) {
      return [];
    }

    if (value === undefined) {
      return [];
    }

    if (!Array.isArray(value)) {
      return [];
    }

    if (value.length === 0) {
      return [];
    }

    return value.filter(function (record) {
      return record && Object(helpers_typeof["default"])(record) === 'object';
    }).map(function (record) {
      return _this.related.make(record, plain);
    });
  };
  /**
   * Load the has many through relationship for the collection.
   */


  HasManyThrough.prototype.load = function (query, collection, key) {
    var _this = this;

    var relatedQuery = this.getRelation(query, this.related.entity);
    var throughQuery = query.newPlainQuery(this.through.entity);
    this.addEagerConstraintForThrough(throughQuery, collection);
    var throughs = throughQuery.get();
    this.addEagerConstraintForRelated(relatedQuery, throughs);
    var relateds = this.mapThroughRelations(throughs, relatedQuery);
    collection.forEach(function (item) {
      var related = relateds[item[_this.localKey]];
      item[key] = related;
    });
  };
  /**
   * Set the constraints for the through relation.
   */


  HasManyThrough.prototype.addEagerConstraintForThrough = function (query, collection) {
    query.where(this.firstKey, this.getKeys(collection, this.localKey));
  };
  /**
   * Set the constraints for the related relation.
   */


  HasManyThrough.prototype.addEagerConstraintForRelated = function (query, collection) {
    query.where(this.secondKey, this.getKeys(collection, this.secondLocalKey));
  };
  /**
   * Create a new indexed map for the through relation.
   */


  HasManyThrough.prototype.mapThroughRelations = function (throughs, relatedQuery) {
    var _this = this;

    var relateds = this.mapManyRelations(relatedQuery.get(), this.secondKey);
    return throughs.reduce(function (records, record) {
      var id = record[_this.firstKey];

      if (!records[id]) {
        records[id] = [];
      }

      var related = relateds[record[_this.secondLocalKey]];

      if (related) {
        records[id] = records[id].concat(related);
      }

      return records;
    }, {});
  };

  return HasManyThrough;
}(vuex_orm_esm_Relation);

var vuex_orm_esm_BelongsToMany =
/** @class */
function (_super) {
  __extends(BelongsToMany, _super);
  /**
   * Create a new belongs to instance.
   */


  function BelongsToMany(model, related, pivot, foreignPivotKey, relatedPivotKey, parentKey, relatedKey) {
    var _this = _super.call(this, model)
    /* istanbul ignore next */
    || this;

    _this.related = _this.model.relation(related);
    _this.pivot = _this.model.relation(pivot);
    _this.foreignPivotKey = foreignPivotKey;
    _this.relatedPivotKey = relatedPivotKey;
    _this.parentKey = parentKey;
    _this.relatedKey = relatedKey;
    return _this;
  }
  /**
   * Define the normalizr schema for the relationship.
   */


  BelongsToMany.prototype.define = function (schema) {
    return schema.many(this.related);
  };
  /**
   * Attach the relational key to the given data. Since belongs to many
   * relationship doesn't have any foreign key, it would do nothing.
   */


  BelongsToMany.prototype.attach = function (_key, _record, _data) {
    return;
  };
  /**
   * Validate the given value to be a valid value for the relationship.
   */


  BelongsToMany.prototype.fill = function (value) {
    return this.fillMany(value);
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  BelongsToMany.prototype.make = function (value, _parent, _key, plain) {
    var _this = this;

    if (plain === void 0) {
      plain = false;
    }

    if (value === null) {
      return [];
    }

    if (value === undefined) {
      return [];
    }

    if (!Array.isArray(value)) {
      return [];
    }

    if (value.length === 0) {
      return [];
    }

    return value.filter(function (record) {
      return record && Object(helpers_typeof["default"])(record) === 'object';
    }).map(function (record) {
      return _this.related.make(record, plain);
    });
  };
  /**
   * Load the belongs to relationship for the record.
   */


  BelongsToMany.prototype.load = function (query, collection, key) {
    var _this = this;

    var relatedQuery = this.getRelation(query, this.related.entity);
    var pivotQuery = query.newPlainQuery(this.pivot.entity);
    this.addEagerConstraintForPivot(pivotQuery, collection);
    var pivots = pivotQuery.get();
    this.addEagerConstraintForRelated(relatedQuery, pivots);
    var relateds = this.mapPivotRelations(pivots, relatedQuery);
    collection.forEach(function (item) {
      var related = relateds[item[_this.parentKey]];
      item[key] = related;
    });
  };
  /**
   * Set the constraints for the pivot relation.
   */


  BelongsToMany.prototype.addEagerConstraintForPivot = function (query, collection) {
    query.where(this.foreignPivotKey, this.getKeys(collection, this.parentKey));
  };
  /**
   * Set the constraints for the related relation.
   */


  BelongsToMany.prototype.addEagerConstraintForRelated = function (query, collection) {
    query.where(this.relatedPivotKey, this.getKeys(collection, this.relatedKey));
  };
  /**
   * Create a new indexed map for the pivot relation.
   */


  BelongsToMany.prototype.mapPivotRelations = function (pivots, relatedQuery) {
    var _this = this;

    var relateds = this.mapManyRelations(relatedQuery.get(), this.relatedKey);
    return pivots.reduce(function (records, record) {
      var id = record[_this.foreignPivotKey];

      if (!records[id]) {
        records[id] = [];
      }

      var related = relateds[record[_this.relatedPivotKey]];

      if (related) {
        records[id] = records[id].concat(related);
      }

      return records;
    }, {});
  };
  /**
   * Create pivot records for the given records if needed.
   */


  BelongsToMany.prototype.createPivots = function (parent, data, key) {
    var _this = this;

    if (this.pivot.primaryKey instanceof Array === false) return data;
    Utils.forOwn(data[parent.entity], function (record) {
      var related = record[key];

      if (related === undefined || related.length === 0) {
        return;
      }

      _this.createPivotRecord(data, record, related);
    });
    return data;
  };
  /**
   * Create a pivot record.
   */


  BelongsToMany.prototype.createPivotRecord = function (data, record, related) {
    var _this = this;

    related.forEach(function (id) {
      var _a, _b;

      var pivotKey = record[_this.parentKey] + "_" + id;
      data[_this.pivot.entity] = __assign({}, data[_this.pivot.entity], (_a = {}, _a[pivotKey] = (_b = {
        $id: pivotKey
      }, _b[_this.foreignPivotKey] = record[_this.parentKey], _b[_this.relatedPivotKey] = id, _b), _a));
    });
  };

  return BelongsToMany;
}(vuex_orm_esm_Relation);

var MorphTo =
/** @class */
function (_super) {
  __extends(MorphTo, _super);
  /**
   * Create a new morph to instance.
   */


  function MorphTo(model, id, type) {
    var _this = _super.call(this, model)
    /* istanbul ignore next */
    || this;

    _this.id = id;
    _this.type = type;
    return _this;
  }
  /**
   * Define the normalizr schema for the relationship.
   */


  MorphTo.prototype.define = function (schema) {
    var _this = this;

    return schema.union(function (_value, parentValue) {
      return parentValue[_this.type];
    });
  };
  /**
   * Attach the relational key to the given record. Since morph to
   * relationship doesn't have any foreign key, it would do nothing.
   */


  MorphTo.prototype.attach = function (_key, _record, _data) {
    return;
  };
  /**
   * Validate the given value to be a valid value for the relationship.
   */


  MorphTo.prototype.fill = function (value) {
    return this.fillOne(value);
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  MorphTo.prototype.make = function (value, parent, _key, plain) {
    if (plain === void 0) {
      plain = false;
    }

    if (!this.isOneRelation(value)) {
      return null;
    }

    var related = parent[this.type];
    var model = this.model.relation(related);
    return model ? model.make(value, plain) : null;
  };
  /**
   * Load the morph to relationship for the collection.
   */


  MorphTo.prototype.load = function (query, collection, key) {
    var _this = this;

    var types = this.getTypes(collection);
    var relateds = types.reduce(function (relateds, type) {
      var relatedQuery = _this.getRelation(query, type);

      relateds[type] = _this.mapSingleRelations(relatedQuery.get(), '$id');
      return relateds;
    }, {});
    collection.forEach(function (item) {
      var id = item[_this.id];
      var type = item[_this.type];
      var related = relateds[type][id];
      item[key] = related || null;
    });
  };
  /**
   * Get all types from the collection.
   */


  MorphTo.prototype.getTypes = function (collection) {
    var _this = this;

    return collection.reduce(function (types, item) {
      var type = item[_this.type];
      !types.includes(type) && types.push(type);
      return types;
    }, []);
  };

  return MorphTo;
}(vuex_orm_esm_Relation);

var MorphOne =
/** @class */
function (_super) {
  __extends(MorphOne, _super);
  /**
   * Create a new belongs to instance.
   */


  function MorphOne(model, related, id, type, localKey) {
    var _this = _super.call(this, model)
    /* istanbul ignore next */
    || this;

    _this.related = _this.model.relation(related);
    _this.id = id;
    _this.type = type;
    _this.localKey = localKey;
    return _this;
  }
  /**
   * Define the normalizr schema for the relationship.
   */


  MorphOne.prototype.define = function (schema) {
    return schema.one(this.related);
  };
  /**
   * Attach the relational key to the given data.
   */


  MorphOne.prototype.attach = function (key, record, data) {
    var relatedItem = data[this.related.entity] && data[this.related.entity][key];

    if (!relatedItem) {
      return;
    }

    relatedItem[this.id] = relatedItem[this.id] || record.$id;
    relatedItem[this.type] = relatedItem[this.type] || this.model.entity;
  };
  /**
   * Validate the given value to be a valid value for the relationship.
   */


  MorphOne.prototype.fill = function (value) {
    return this.fillOne(value);
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  MorphOne.prototype.make = function (value, _parent, _key, plain) {
    if (plain === void 0) {
      plain = false;
    }

    if (!this.isOneRelation(value)) {
      return null;
    }

    return this.related.make(value, plain);
  };
  /**
   * Load the morph many relationship for the record.
   */


  MorphOne.prototype.load = function (query, collection, key) {
    var _this = this;

    var relatedQuery = this.getRelation(query, this.related.entity);
    this.addEagerConstraintForMorphOne(relatedQuery, collection, query.entity);
    var relations = this.mapSingleRelations(relatedQuery.get(), this.id);
    collection.forEach(function (item) {
      var related = relations[item[_this.localKey]];
      item[key] = related || null;
    });
  };
  /**
   * Set the constraints for an eager load of the relation.
   */


  MorphOne.prototype.addEagerConstraintForMorphOne = function (query, collection, type) {
    query.where(this.type, type).where(this.id, this.getKeys(collection, this.localKey));
  };

  return MorphOne;
}(vuex_orm_esm_Relation);

var vuex_orm_esm_MorphMany =
/** @class */
function (_super) {
  __extends(MorphMany, _super);
  /**
   * Create a new belongs to instance.
   */


  function MorphMany(model, related, id, type, localKey) {
    var _this = _super.call(this, model)
    /* istanbul ignore next */
    || this;

    _this.related = _this.model.relation(related);
    _this.id = id;
    _this.type = type;
    _this.localKey = localKey;
    return _this;
  }
  /**
   * Define the normalizr schema for the relationship.
   */


  MorphMany.prototype.define = function (schema) {
    return schema.many(this.related);
  };
  /**
   * Attach the relational key to the given data.
   */


  MorphMany.prototype.attach = function (key, record, data) {
    var _this = this;

    if (!Array.isArray(key)) {
      return;
    }

    var relatedItems = data[this.related.entity];
    key.forEach(function (id) {
      var relatedItem = relatedItems[id];
      relatedItem[_this.id] = relatedItem[_this.id] || record.$id;
      relatedItem[_this.type] = relatedItem[_this.type] || _this.model.entity;
    });
  };
  /**
   * Validate the given value to be a valid value for the relationship.
   */


  MorphMany.prototype.fill = function (value) {
    return this.fillMany(value);
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  MorphMany.prototype.make = function (value, _parent, _key, plain) {
    var _this = this;

    if (plain === void 0) {
      plain = false;
    }

    if (value === null) {
      return [];
    }

    if (value === undefined) {
      return [];
    }

    if (!Array.isArray(value)) {
      return [];
    }

    if (value.length === 0) {
      return [];
    }

    return value.filter(function (record) {
      return record && Object(helpers_typeof["default"])(record) === 'object';
    }).map(function (record) {
      return _this.related.make(record, plain);
    });
  };
  /**
   * Load the morph many relationship for the record.
   */


  MorphMany.prototype.load = function (query, collection, key) {
    var _this = this;

    var relatedQuery = this.getRelation(query, this.related.entity);
    this.addEagerConstraintForMorphMany(relatedQuery, collection, query.entity);
    var relations = this.mapManyRelations(relatedQuery.get(), this.id);
    collection.forEach(function (item) {
      var related = relations[item[_this.localKey]];
      item[key] = related;
    });
  };
  /**
   * Set the constraints for an eager load of the relation.
   */


  MorphMany.prototype.addEagerConstraintForMorphMany = function (query, collection, type) {
    query.where(this.type, type).where(this.id, this.getKeys(collection, this.localKey));
  };

  return MorphMany;
}(vuex_orm_esm_Relation);

var vuex_orm_esm_MorphToMany =
/** @class */
function (_super) {
  __extends(MorphToMany, _super);
  /**
   * Create a new belongs to instance.
   */


  function MorphToMany(model, related, pivot, relatedId, id, type, parentKey, relatedKey) {
    var _this = _super.call(this, model)
    /* istanbul ignore next */
    || this;

    _this.related = _this.model.relation(related);
    _this.pivot = _this.model.relation(pivot);
    _this.relatedId = relatedId;
    _this.id = id;
    _this.type = type;
    _this.parentKey = parentKey;
    _this.relatedKey = relatedKey;
    return _this;
  }
  /**
   * Define the normalizr schema for the relationship.
   */


  MorphToMany.prototype.define = function (schema) {
    return schema.many(this.related);
  };
  /**
   * Attach the relational key to the given record. Since morph to many
   * relationship doesn't have any foreign key, it would do nothing.
   */


  MorphToMany.prototype.attach = function (_key, _record, _data) {
    return;
  };
  /**
   * Validate the given value to be a valid value for the relationship.
   */


  MorphToMany.prototype.fill = function (value) {
    return this.fillMany(value);
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  MorphToMany.prototype.make = function (value, _parent, _key, plain) {
    var _this = this;

    if (plain === void 0) {
      plain = false;
    }

    if (value === null) {
      return [];
    }

    if (value === undefined) {
      return [];
    }

    if (!Array.isArray(value)) {
      return [];
    }

    if (value.length === 0) {
      return [];
    }

    return value.filter(function (record) {
      return record && Object(helpers_typeof["default"])(record) === 'object';
    }).map(function (record) {
      return _this.related.make(record, plain);
    });
  };
  /**
   * Load the morph to many relationship for the collection.
   */


  MorphToMany.prototype.load = function (query, collection, key) {
    var _this = this;

    var relatedQuery = this.getRelation(query, this.related.entity);
    var pivotQuery = query.newPlainQuery(this.pivot.entity);
    this.addEagerConstraintForPivot(pivotQuery, collection, query.entity);
    var pivots = pivotQuery.get();
    this.addEagerConstraintForRelated(relatedQuery, pivots);
    var relateds = this.mapPivotRelations(pivots, relatedQuery);
    collection.forEach(function (item) {
      var related = relateds[item[_this.parentKey]];
      item[key] = related;
    });
  };
  /**
   * Set the constraints for the pivot relation.
   */


  MorphToMany.prototype.addEagerConstraintForPivot = function (query, collection, type) {
    query.where(this.type, type).where(this.id, this.getKeys(collection, this.parentKey));
  };
  /**
   * Set the constraints for the related relation.
   */


  MorphToMany.prototype.addEagerConstraintForRelated = function (query, collection) {
    query.where(this.relatedKey, this.getKeys(collection, this.relatedId));
  };
  /**
   * Create a new indexed map for the pivot relation.
   */


  MorphToMany.prototype.mapPivotRelations = function (pivots, relatedQuery) {
    var _this = this;

    var relateds = this.mapManyRelations(relatedQuery.get(), this.relatedKey);
    return pivots.reduce(function (records, record) {
      var id = record[_this.id];

      if (!records[id]) {
        records[id] = [];
      }

      var related = relateds[record[_this.relatedId]];

      if (related) {
        records[id] = records[id].concat(related);
      }

      return records;
    }, {});
  };
  /**
   * Create pivot records for the given records if needed.
   */


  MorphToMany.prototype.createPivots = function (parent, data, key) {
    var _this = this;

    Utils.forOwn(data[parent.entity], function (record) {
      var related = record[key];

      if (!Array.isArray(related) || related.length === 0) {
        return;
      }

      _this.createPivotRecord(parent, data, record, related);
    });
    return data;
  };
  /**
   * Create a pivot record.
   */


  MorphToMany.prototype.createPivotRecord = function (parent, data, record, related) {
    var _this = this;

    related.forEach(function (id) {
      var _a, _b;

      var parentId = record[_this.parentKey];
      var pivotKey = parentId + "_" + id + "_" + parent.entity;
      data[_this.pivot.entity] = __assign({}, data[_this.pivot.entity], (_a = {}, _a[pivotKey] = (_b = {
        $id: pivotKey
      }, _b[_this.relatedId] = id, _b[_this.id] = parentId, _b[_this.type] = parent.entity, _b), _a));
    });
  };

  return MorphToMany;
}(vuex_orm_esm_Relation);

var vuex_orm_esm_MorphedByMany =
/** @class */
function (_super) {
  __extends(MorphedByMany, _super);
  /**
   * Create a new belongs to instance.
   */


  function MorphedByMany(model, related, pivot, relatedId, id, type, parentKey, relatedKey) {
    var _this = _super.call(this, model)
    /* istanbul ignore next */
    || this;

    _this.related = _this.model.relation(related);
    _this.pivot = _this.model.relation(pivot);
    _this.relatedId = relatedId;
    _this.id = id;
    _this.type = type;
    _this.parentKey = parentKey;
    _this.relatedKey = relatedKey;
    return _this;
  }
  /**
   * Define the normalizr schema for the relationship.
   */


  MorphedByMany.prototype.define = function (schema) {
    return schema.many(this.related);
  };
  /**
   * Attach the relational key to the given data. Since morphed by many
   * relationship doesn't have any foreign key, it would do nothing.
   */


  MorphedByMany.prototype.attach = function (_key, _record, _data) {
    return;
  };
  /**
   * Validate the given value to be a valid value for the relationship.
   */


  MorphedByMany.prototype.fill = function (value) {
    return this.fillMany(value);
  };
  /**
   * Make value to be set to model property. This method is used when
   * instantiating a model or creating a plain object from a model.
   */


  MorphedByMany.prototype.make = function (value, _parent, _key, plain) {
    var _this = this;

    if (plain === void 0) {
      plain = false;
    }

    if (value === null) {
      return [];
    }

    if (value === undefined) {
      return [];
    }

    if (!Array.isArray(value)) {
      return [];
    }

    if (value.length === 0) {
      return [];
    }

    return value.filter(function (record) {
      return record && Object(helpers_typeof["default"])(record) === 'object';
    }).map(function (record) {
      return _this.related.make(record, plain);
    });
  };
  /**
   * Load the morph many relationship for the record.
   */


  MorphedByMany.prototype.load = function (query, collection, key) {
    var _this = this;

    var relatedQuery = this.getRelation(query, this.related.entity);
    var pivotQuery = query.newPlainQuery(this.pivot.entity);
    this.addEagerConstraintForPivot(pivotQuery, collection, this.related.entity);
    var pivots = pivotQuery.get();
    this.addEagerConstraintForRelated(relatedQuery, pivots);
    var relateds = this.mapPivotRelations(pivots, relatedQuery);
    collection.forEach(function (item) {
      var related = relateds[item[_this.parentKey]];
      item[key] = related;
    });
  };
  /**
   * Set the constraints for the pivot relation.
   */


  MorphedByMany.prototype.addEagerConstraintForPivot = function (query, collection, type) {
    query.where(this.type, type).where(this.relatedId, this.getKeys(collection, this.parentKey));
  };
  /**
   * Set the constraints for the related relation.
   */


  MorphedByMany.prototype.addEagerConstraintForRelated = function (query, collection) {
    query.where(this.relatedKey, this.getKeys(collection, this.id));
  };
  /**
   * Create a new indexed map for the pivot relation.
   */


  MorphedByMany.prototype.mapPivotRelations = function (pivots, relatedQuery) {
    var _this = this;

    var relateds = this.mapManyRelations(relatedQuery.get(), this.relatedKey);
    return pivots.reduce(function (records, record) {
      var id = record[_this.relatedId];

      if (!records[id]) {
        records[id] = [];
      }

      var related = relateds[record[_this.id]];

      if (related) {
        records[id] = records[id].concat(related);
      }

      return records;
    }, {});
  };
  /**
   * Create pivot records for the given records if needed.
   */


  MorphedByMany.prototype.createPivots = function (parent, data, key) {
    var _this = this;

    Utils.forOwn(data[parent.entity], function (record) {
      var related = record[key];

      if (related.length === 0) {
        return;
      }

      _this.createPivotRecord(data, record, related);
    });
    return data;
  };
  /**
   * Create a pivot record.
   */


  MorphedByMany.prototype.createPivotRecord = function (data, record, related) {
    var _this = this;

    related.forEach(function (id) {
      var _a, _b;

      var parentId = record[_this.parentKey];
      var pivotKey = id + "_" + parentId + "_" + _this.related.entity;
      data[_this.pivot.entity] = __assign({}, data[_this.pivot.entity], (_a = {}, _a[pivotKey] = (_b = {
        $id: pivotKey
      }, _b[_this.relatedId] = parentId, _b[_this.id] = id, _b[_this.type] = _this.related.entity, _b), _a));
    });
  };

  return MorphedByMany;
}(vuex_orm_esm_Relation);

var Model =
/** @class */
function () {
  /**
   * Create a model instance.
   */
  function Model(record) {
    this.$fill(record);
  }
  /**
   * The definition of the fields of the model and its relations.
   */


  Model.fields = function () {
    return {};
  };
  /**
   * Get the model schema definition by adding additional default fields.
   */


  Model.getFields = function () {
    if (this.cachedFields) {
      return this.cachedFields;
    }

    this.cachedFields = __assign({
      $id: this.attr(undefined)
    }, this.fields());
    return this.cachedFields;
  };
  /**
   * Create an attr attribute. The given value will be used as a default
   * value for the field.
   */


  Model.attr = function (value, mutator) {
    return new Attr(this, value, mutator);
  };
  /**
   * Create a string attribute.
   */


  Model.string = function (value, mutator) {
    return new String$1(this, value, mutator);
  };
  /**
   * Create a number attribute.
   */


  Model.number = function (value, mutator) {
    return new vuex_orm_esm_Number(this, value, mutator);
  };
  /**
   * Create a boolean attribute.
   */


  Model.boolean = function (value, mutator) {
    return new Boolean(this, value, mutator);
  };
  /**
   * Create an increment attribute. The field with this attribute will
   * automatically increment its value when creating a new record.
   */


  Model.increment = function () {
    return new Increment(this);
  };
  /**
   * Create a has one relationship.
   */


  Model.hasOne = function (related, foreignKey, localKey) {
    return new HasOne(this, related, foreignKey, this.localKey(localKey));
  };
  /**
   * Create a belongs to relationship.
   */


  Model.belongsTo = function (parent, foreignKey, ownerKey) {
    return new BelongsTo(this, parent, foreignKey, this.relation(parent).localKey(ownerKey));
  };
  /**
   * Create a has many relationship.
   */


  Model.hasMany = function (related, foreignKey, localKey) {
    return new vuex_orm_esm_HasMany(this, related, foreignKey, this.localKey(localKey));
  };
  /**
   * Create a has many by relationship.
   */


  Model.hasManyBy = function (parent, foreignKey, ownerKey) {
    return new vuex_orm_esm_HasManyBy(this, parent, foreignKey, this.relation(parent).localKey(ownerKey));
  };
  /**
   * Create a has many through relationship.
   */


  Model.hasManyThrough = function (related, through, firstKey, secondKey, localKey, secondLocalKey) {
    return new vuex_orm_esm_HasManyThrough(this, related, through, firstKey, secondKey, this.localKey(localKey), this.relation(through).localKey(secondLocalKey));
  };
  /**
   * The belongs to many relationship.
   */


  Model.belongsToMany = function (related, pivot, foreignPivotKey, relatedPivotKey, parentKey, relatedKey) {
    return new vuex_orm_esm_BelongsToMany(this, related, pivot, foreignPivotKey, relatedPivotKey, this.localKey(parentKey), this.relation(related).localKey(relatedKey));
  };
  /**
   * Create a morph to relationship.
   */


  Model.morphTo = function (id, type) {
    return new MorphTo(this, id, type);
  };
  /**
   * Create a morph one relationship.
   */


  Model.morphOne = function (related, id, type, localKey) {
    return new MorphOne(this, related, id, type, this.localKey(localKey));
  };
  /**
   * Create a morph many relationship.
   */


  Model.morphMany = function (related, id, type, localKey) {
    return new vuex_orm_esm_MorphMany(this, related, id, type, this.localKey(localKey));
  };
  /**
   * Create a morph to many relationship.
   */


  Model.morphToMany = function (related, pivot, relatedId, id, type, parentKey, relatedKey) {
    return new vuex_orm_esm_MorphToMany(this, related, pivot, relatedId, id, type, this.localKey(parentKey), this.relation(related).localKey(relatedKey));
  };
  /**
   * Create a morphed by many relationship.
   */


  Model.morphedByMany = function (related, pivot, relatedId, id, type, parentKey, relatedKey) {
    return new vuex_orm_esm_MorphedByMany(this, related, pivot, relatedId, id, type, this.localKey(parentKey), this.relation(related).localKey(relatedKey));
  };
  /**
   * Mutators to mutate matching fields when instantiating the model.
   */


  Model.mutators = function () {
    return {};
  };
  /**
   * Get database out of the container.
   */


  Model.database = function () {
    return Container.database;
  };
  /**
   * Get Vuex Store instance out of connection.
   */


  Model.store = function () {
    return this.database().store;
  };
  /**
   * Get module namespaced path for the model.
   */


  Model.namespace = function (method) {
    return this.database().namespace + "/" + this.entity + "/" + method;
  };
  /**
   * Dispatch an action.
   */


  Model.dispatch = function (method, payload) {
    return this.store().dispatch(this.namespace(method), payload);
  };
  /**
   * Call getetrs.
   */


  Model.getters = function (method) {
    return this.store().getters[this.namespace(method)];
  };
  /**
   * Create records.
   */


  Model.create = function (payload) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , this.dispatch('create', payload)];
      });
    });
  };
  /**
   * Insert records.
   */


  Model.insert = function (payload) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , this.dispatch('insert', payload)];
      });
    });
  };
  /**
   * Update records.
   */


  Model.update = function (payload) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , this.dispatch('update', payload)];
      });
    });
  };
  /**
   * Insert or update records.
   */


  Model.insertOrUpdate = function (payload) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , this.dispatch('insertOrUpdate', payload)];
      });
    });
  };
  /**
   * Get all records.
   */


  Model.all = function () {
    return this.getters('all')();
  };
  /**
   * Find a record.
   */


  Model.find = function (id) {
    return this.getters('find')(id);
  };
  /**
   * Get query instance.
   */


  Model.query = function () {
    return this.getters('query')();
  };
  /**
   * Insert or update records.
   */


  Model.delete = function (condition) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , this.dispatch('delete', condition)];
      });
    });
  };
  /**
   * Get the value of the primary key.
   */


  Model.id = function (record) {
    var key = this.primaryKey;

    if (typeof key === 'string') {
      return record[key];
    }

    return key.map(function (k) {
      return record[k];
    }).join('_');
  };
  /**
   * Get local key to pass to the attributes.
   */


  Model.localKey = function (key) {
    if (key) {
      return key;
    }

    return typeof this.primaryKey === 'string' ? this.primaryKey : 'id';
  };
  /**
   * Get a model from the container.
   */


  Model.relation = function (model) {
    if (typeof model !== 'string') {
      return model;
    }

    return this.database().model(model);
  };
  /**
   * Get the attribute class for the given attribute name.
   */


  Model.getAttributeClass = function (name) {
    switch (name) {
      case 'increment':
        return Increment;

      default:
        throw Error("The attribute name \"" + name + "\" doesn't exists.");
    }
  };
  /**
   * Get all of the fields that matches the given attribute name.
   */


  Model.getFieldsByAttribute = function (name) {
    var attr = this.getAttributeClass(name);
    var fields = this.fields();
    return Object.keys(fields).reduce(function (newFields, key) {
      var field = fields[key];

      if (field instanceof attr) {
        newFields[key] = field;
      }

      return newFields;
    }, {});
  };
  /**
   * Get all `increment` fields from the schema.
   */


  Model.getIncrementFields = function () {
    return this.getFieldsByAttribute('increment');
  };
  /**
   * Check if fields contains the `increment` field type.
   */


  Model.hasIncrementFields = function () {
    return Object.keys(this.getIncrementFields()).length > 0;
  };
  /**
   * Get all `belongsToMany` fields from the schema.
   */


  Model.pivotFields = function () {
    var fields = [];
    Utils.forOwn(this.fields(), function (field, key) {
      var _a;

      if (field instanceof vuex_orm_esm_BelongsToMany || field instanceof vuex_orm_esm_MorphToMany || field instanceof vuex_orm_esm_MorphedByMany) {
        fields.push((_a = {}, _a[key] = field, _a));
      }
    });
    return fields;
  };
  /**
   * Check if fields contains the `belongsToMany` field type.
   */


  Model.hasPivotFields = function () {
    return this.pivotFields().length > 0;
  };
  /**
   * Create a new model instance.
   */


  Model.make = function (data, plain) {
    if (plain === void 0) {
      plain = false;
    }

    if (!plain) {
      return new this(data);
    }

    return this.fill({}, data, true);
  };
  /**
   * Create a new plain model record.
   */


  Model.makePlain = function (data) {
    return this.make(data, true);
  };
  /**
   * Remove any fields not defined in the model schema. This method
   * also fixes any incorrect values as well.
   */


  Model.fix = function (data, keep) {
    if (keep === void 0) {
      keep = ['$id'];
    }

    var fields = this.getFields();
    return Object.keys(data).reduce(function (record, key) {
      var value = data[key];
      var field = fields[key];

      if (keep.includes(key)) {
        record[key] = value;
        return record;
      }

      if (!field) {
        return record;
      }

      record[key] = field.fill(value);
      return record;
    }, {});
  };
  /**
   * Fix multiple records.
   */


  Model.fixMany = function (data, keep) {
    var _this = this;

    return Object.keys(data).reduce(function (records, id) {
      records[id] = _this.fix(data[id], keep);
      return records;
    }, {});
  };
  /**
   * Fill any missing fields in the given data with the default
   * value defined in the model schema.
   */


  Model.hydrate = function (data, keep) {
    if (keep === void 0) {
      keep = ['$id'];
    }

    var fields = this.getFields();
    var record = Object.keys(fields).reduce(function (record, key) {
      var field = fields[key];
      var value = data[key];
      record[key] = field.fill(value);
      return record;
    }, {});
    return Object.keys(data).reduce(function (record, key) {
      if (keep.includes(key) && data[key] !== undefined) {
        record[key] = data[key];
      }

      return record;
    }, record);
  };
  /**
   * Fill multiple records.
   */


  Model.hydrateMany = function (data, keep) {
    var _this = this;

    return Object.keys(data).reduce(function (records, id) {
      records[id] = _this.hydrate(data[id], keep);
      return records;
    }, {});
  };
  /**
   * Fill the given obejct with the given record. If no record were passed,
   * or if the record has any missing fields, each value of the fields will
   * be filled with its default value defined at model fields definition.
   */


  Model.fill = function (self, record, plain) {
    if (self === void 0) {
      self = {};
    }

    if (record === void 0) {
      record = {};
    }

    if (plain === void 0) {
      plain = false;
    }

    var fields = this.getFields();
    return Object.keys(fields).reduce(function (target, key) {
      var field = fields[key];
      var value = record[key];
      target[key] = field.make(value, record, key, plain);
      return target;
    }, self);
  };
  /**
   * Get the static class of this model.
   */


  Model.prototype.$self = function () {
    return this.constructor;
  };
  /**
   * The definition of the fields of the model and its relations.
   */


  Model.prototype.$fields = function () {
    return this.$self().fields();
  };
  /**
   * Get Vuex Store insatnce out of connection.
   */


  Model.prototype.$store = function () {
    return this.$self().store();
  };
  /**
   * Get module namespaced path for the model.
   */


  Model.prototype.$namespace = function (method) {
    return this.$self().namespace(method);
  };
  /**
   * Dispatch an action.
   */


  Model.prototype.$dispatch = function (method, payload) {
    return this.$self().dispatch(method, payload);
  };
  /**
   * Call getetrs.
   */


  Model.prototype.$getters = function (method) {
    return this.$self().getters(method);
  };
  /**
   * Create records.
   */


  Model.prototype.$create = function (payload) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , this.$dispatch('create', payload)];
      });
    });
  };
  /**
   * Create records.
   */


  Model.prototype.$insert = function (payload) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , this.$dispatch('insert', payload)];
      });
    });
  };
  /**
   * Update records.
   */


  Model.prototype.$update = function (payload) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        if (Array.isArray(payload)) {
          return [2
          /*return*/
          , this.$dispatch('update', payload)];
        }

        if (payload.where !== undefined) {
          return [2
          /*return*/
          , this.$dispatch('update', payload)];
        }

        if (this.$self().id(payload) === undefined) {
          return [2
          /*return*/
          , this.$dispatch('update', {
            where: this.$id,
            data: payload
          })];
        }

        return [2
        /*return*/
        , this.$dispatch('update', payload)];
      });
    });
  };
  /**
   * Insert or update records.
   */


  Model.prototype.$insertOrUpdate = function (payload) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , this.$dispatch('insertOrUpdate', payload)];
      });
    });
  };
  /**
   * Get all records.
   */


  Model.prototype.$all = function () {
    return this.$getters('all')();
  };
  /**
   * Find a record.
   */


  Model.prototype.$find = function (id) {
    return this.$getters('find')(id);
  };
  /**
   * Get query instance.
   */


  Model.prototype.$query = function () {
    return this.$getters('query')();
  };
  /**
   * Insert or update records.
   */


  Model.prototype.$delete = function (condition) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        condition = condition === undefined ? this.$id : condition;
        return [2
        /*return*/
        , this.$dispatch('delete', condition)];
      });
    });
  };
  /**
   * Fill the model instance with the given record. If no record were passed,
   * or if the record has any missing fields, each value of the fields will
   * be filled with its default value defined at model fields definition.
   */


  Model.prototype.$fill = function (record) {
    this.$self().fill(this, record);
  };
  /**
   * Serialize field values into json.
   */


  Model.prototype.$toJson = function () {
    return this.$self().makePlain(this);
  };
  /**
   * The primary key to be used for the model.
   */


  Model.primaryKey = 'id';
  return Model;
}();

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var ImmutableUtils = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isImmutable = isImmutable;
  exports.denormalizeImmutable = denormalizeImmutable;
  /**
   * Helpers to enable Immutable compatibility *without* bringing in
   * the 'immutable' package as a dependency.
   */

  /**
   * Check if an object is immutable by checking if it has a key specific
   * to the immutable library.
   *
   * @param  {any} object
   * @return {bool}
   */

  function isImmutable(object) {
    return !!(object && typeof object.hasOwnProperty === 'function' && (object.hasOwnProperty('__ownerID') || // Immutable.Map
    object._map && object._map.hasOwnProperty('__ownerID') // Immutable.Record
    ));
  }
  /**
   * Denormalize an immutable entity.
   *
   * @param  {Schema} schema
   * @param  {Immutable.Map|Immutable.Record} input
   * @param  {function} unvisit
   * @param  {function} getDenormalizedEntity
   * @return {Immutable.Map|Immutable.Record}
   */


  function denormalizeImmutable(schema, input, unvisit) {
    return Object.keys(schema).reduce(function (object, key) {
      // Immutable maps cast keys to strings on write so we need to ensure
      // we're accessing them using string keys.
      var stringKey = '' + key;

      if (object.has(stringKey)) {
        return object.set(stringKey, unvisit(object.get(stringKey), schema[stringKey]));
      } else {
        return object;
      }
    }, input);
  }
});
unwrapExports(ImmutableUtils);
var ImmutableUtils_1 = ImmutableUtils.isImmutable;
var ImmutableUtils_2 = ImmutableUtils.denormalizeImmutable;
var Entity = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && Object(helpers_typeof["default"])(Symbol.iterator) === "symbol" ? function (obj) {
    return Object(helpers_typeof["default"])(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : Object(helpers_typeof["default"])(obj);
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var ImmutableUtils$$1 = _interopRequireWildcard(ImmutableUtils);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var getDefaultGetId = function getDefaultGetId(idAttribute) {
    return function (input) {
      return ImmutableUtils$$1.isImmutable(input) ? input.get(idAttribute) : input[idAttribute];
    };
  };

  var EntitySchema = function () {
    function EntitySchema(key) {
      var definition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, EntitySchema);

      if (!key || typeof key !== 'string') {
        throw new Error('Expected a string key for Entity, but found ' + key + '.');
      }

      var _options$idAttribute = options.idAttribute,
          idAttribute = _options$idAttribute === undefined ? 'id' : _options$idAttribute,
          _options$mergeStrateg = options.mergeStrategy,
          mergeStrategy = _options$mergeStrateg === undefined ? function (entityA, entityB) {
        return _extends({}, entityA, entityB);
      } : _options$mergeStrateg,
          _options$processStrat = options.processStrategy,
          processStrategy = _options$processStrat === undefined ? function (input) {
        return _extends({}, input);
      } : _options$processStrat;
      this._key = key;
      this._getId = typeof idAttribute === 'function' ? idAttribute : getDefaultGetId(idAttribute);
      this._idAttribute = idAttribute;
      this._mergeStrategy = mergeStrategy;
      this._processStrategy = processStrategy;
      this.define(definition);
    }

    _createClass(EntitySchema, [{
      key: 'define',
      value: function define(definition) {
        this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
          var schema = definition[key];
          return _extends({}, entitySchema, _defineProperty({}, key, schema));
        }, this.schema || {});
      }
    }, {
      key: 'getId',
      value: function getId(input, parent, key) {
        return this._getId(input, parent, key);
      }
    }, {
      key: 'merge',
      value: function merge(entityA, entityB) {
        return this._mergeStrategy(entityA, entityB);
      }
    }, {
      key: 'normalize',
      value: function normalize(input, parent, key, visit, addEntity) {
        var _this = this;

        var processedEntity = this._processStrategy(input, parent, key);

        Object.keys(this.schema).forEach(function (key) {
          if (processedEntity.hasOwnProperty(key) && _typeof(processedEntity[key]) === 'object') {
            var schema = _this.schema[key];
            processedEntity[key] = visit(processedEntity[key], processedEntity, key, schema, addEntity);
          }
        });
        addEntity(this, processedEntity, input, parent, key);
        return this.getId(input, parent, key);
      }
    }, {
      key: 'denormalize',
      value: function denormalize(entity, unvisit) {
        var _this2 = this;

        if (ImmutableUtils$$1.isImmutable(entity)) {
          return ImmutableUtils$$1.denormalizeImmutable(this.schema, entity, unvisit);
        }

        Object.keys(this.schema).forEach(function (key) {
          if (entity.hasOwnProperty(key)) {
            var schema = _this2.schema[key];
            entity[key] = unvisit(entity[key], schema);
          }
        });
        return entity;
      }
    }, {
      key: 'key',
      get: function get() {
        return this._key;
      }
    }, {
      key: 'idAttribute',
      get: function get() {
        return this._idAttribute;
      }
    }]);

    return EntitySchema;
  }();

  exports.default = EntitySchema;
});
unwrapExports(Entity);
var Polymorphic = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var PolymorphicSchema = function () {
    function PolymorphicSchema(definition, schemaAttribute) {
      _classCallCheck(this, PolymorphicSchema);

      if (schemaAttribute) {
        this._schemaAttribute = typeof schemaAttribute === 'string' ? function (input) {
          return input[schemaAttribute];
        } : schemaAttribute;
      }

      this.define(definition);
    }

    _createClass(PolymorphicSchema, [{
      key: 'define',
      value: function define(definition) {
        this.schema = definition;
      }
    }, {
      key: 'getSchemaAttribute',
      value: function getSchemaAttribute(input, parent, key) {
        return !this.isSingleSchema && this._schemaAttribute(input, parent, key);
      }
    }, {
      key: 'inferSchema',
      value: function inferSchema(input, parent, key) {
        if (this.isSingleSchema) {
          return this.schema;
        }

        var attr = this.getSchemaAttribute(input, parent, key);
        return this.schema[attr];
      }
    }, {
      key: 'normalizeValue',
      value: function normalizeValue(value, parent, key, visit, addEntity) {
        var schema = this.inferSchema(value, parent, key);

        if (!schema) {
          return value;
        }

        var normalizedValue = visit(value, parent, key, schema, addEntity);
        return this.isSingleSchema || normalizedValue === undefined || normalizedValue === null ? normalizedValue : {
          id: normalizedValue,
          schema: this.getSchemaAttribute(value, parent, key)
        };
      }
    }, {
      key: 'denormalizeValue',
      value: function denormalizeValue(value, unvisit) {
        var schemaKey = (0, ImmutableUtils.isImmutable)(value) ? value.get('schema') : value.schema;

        if (!this.isSingleSchema && !schemaKey) {
          return value;
        }

        var id = (0, ImmutableUtils.isImmutable)(value) ? value.get('id') : value.id;
        var schema = this.isSingleSchema ? this.schema : this.schema[schemaKey];
        return unvisit(id || value, schema);
      }
    }, {
      key: 'isSingleSchema',
      get: function get() {
        return !this._schemaAttribute;
      }
    }]);

    return PolymorphicSchema;
  }();

  exports.default = PolymorphicSchema;
});
unwrapExports(Polymorphic);
var Union = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _Polymorphic2 = _interopRequireDefault(Polymorphic);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (Object(helpers_typeof["default"])(call) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + Object(helpers_typeof["default"])(superClass));
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var UnionSchema = function (_PolymorphicSchema) {
    _inherits(UnionSchema, _PolymorphicSchema);

    function UnionSchema(definition, schemaAttribute) {
      _classCallCheck(this, UnionSchema);

      if (!schemaAttribute) {
        throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');
      }

      return _possibleConstructorReturn(this, (UnionSchema.__proto__ || Object.getPrototypeOf(UnionSchema)).call(this, definition, schemaAttribute));
    }

    _createClass(UnionSchema, [{
      key: 'normalize',
      value: function normalize(input, parent, key, visit, addEntity) {
        return this.normalizeValue(input, parent, key, visit, addEntity);
      }
    }, {
      key: 'denormalize',
      value: function denormalize(input, unvisit) {
        return this.denormalizeValue(input, unvisit);
      }
    }]);

    return UnionSchema;
  }(_Polymorphic2.default);

  exports.default = UnionSchema;
});
unwrapExports(Union);
var Values = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _Polymorphic2 = _interopRequireDefault(Polymorphic);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (Object(helpers_typeof["default"])(call) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + Object(helpers_typeof["default"])(superClass));
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ValuesSchema = function (_PolymorphicSchema) {
    _inherits(ValuesSchema, _PolymorphicSchema);

    function ValuesSchema() {
      _classCallCheck(this, ValuesSchema);

      return _possibleConstructorReturn(this, (ValuesSchema.__proto__ || Object.getPrototypeOf(ValuesSchema)).apply(this, arguments));
    }

    _createClass(ValuesSchema, [{
      key: 'normalize',
      value: function normalize(input, parent, key, visit, addEntity) {
        var _this2 = this;

        return Object.keys(input).reduce(function (output, key, index) {
          var value = input[key];
          return value !== undefined && value !== null ? _extends({}, output, _defineProperty({}, key, _this2.normalizeValue(value, input, key, visit, addEntity))) : output;
        }, {});
      }
    }, {
      key: 'denormalize',
      value: function denormalize(input, unvisit) {
        var _this3 = this;

        return Object.keys(input).reduce(function (output, key) {
          var entityOrId = input[key];
          return _extends({}, output, _defineProperty({}, key, _this3.denormalizeValue(entityOrId, unvisit)));
        }, {});
      }
    }]);

    return ValuesSchema;
  }(_Polymorphic2.default);

  exports.default = ValuesSchema;
});
unwrapExports(Values);

var _Array = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.denormalize = exports.normalize = undefined;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _Polymorphic2 = _interopRequireDefault(Polymorphic);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (Object(helpers_typeof["default"])(call) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + Object(helpers_typeof["default"])(superClass));
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var validateSchema = function validateSchema(definition) {
    var isArray = Array.isArray(definition);

    if (isArray && definition.length > 1) {
      throw new Error('Expected schema definition to be a single schema, but found ' + definition.length + '.');
    }

    return definition[0];
  };

  var getValues = function getValues(input) {
    return Array.isArray(input) ? input : Object.keys(input).map(function (key) {
      return input[key];
    });
  };

  var normalize = exports.normalize = function normalize(schema, input, parent, key, visit, addEntity) {
    schema = validateSchema(schema);
    var values = getValues(input); // Special case: Arrays pass *their* parent on to their children, since there
    // is not any special information that can be gathered from themselves directly

    return values.map(function (value, index) {
      return visit(value, parent, key, schema, addEntity);
    });
  };

  var denormalize = exports.denormalize = function denormalize(schema, input, unvisit) {
    schema = validateSchema(schema);
    return input && input.map ? input.map(function (entityOrId) {
      return unvisit(entityOrId, schema);
    }) : input;
  };

  var ArraySchema = function (_PolymorphicSchema) {
    _inherits(ArraySchema, _PolymorphicSchema);

    function ArraySchema() {
      _classCallCheck(this, ArraySchema);

      return _possibleConstructorReturn(this, (ArraySchema.__proto__ || Object.getPrototypeOf(ArraySchema)).apply(this, arguments));
    }

    _createClass(ArraySchema, [{
      key: 'normalize',
      value: function normalize(input, parent, key, visit, addEntity) {
        var _this2 = this;

        var values = getValues(input);
        return values.map(function (value, index) {
          return _this2.normalizeValue(value, parent, key, visit, addEntity);
        }).filter(function (value) {
          return value !== undefined && value !== null;
        });
      }
    }, {
      key: 'denormalize',
      value: function denormalize(input, unvisit) {
        var _this3 = this;

        return input && input.map ? input.map(function (value) {
          return _this3.denormalizeValue(value, unvisit);
        }) : input;
      }
    }]);

    return ArraySchema;
  }(_Polymorphic2.default);

  exports.default = ArraySchema;
});

unwrapExports(_Array);
var _Array_1 = _Array.denormalize;
var _Array_2 = _Array.normalize;

var _Object = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.denormalize = exports.normalize = undefined;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var ImmutableUtils$$1 = _interopRequireWildcard(ImmutableUtils);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _normalize = function _normalize(schema, input, parent, key, visit, addEntity) {
    var object = _extends({}, input);

    Object.keys(schema).forEach(function (key) {
      var localSchema = schema[key];
      var value = visit(input[key], input, key, localSchema, addEntity);

      if (value === undefined || value === null) {
        delete object[key];
      } else {
        object[key] = value;
      }
    });
    return object;
  };

  exports.normalize = _normalize;

  var _denormalize = function _denormalize(schema, input, unvisit) {
    if (ImmutableUtils$$1.isImmutable(input)) {
      return ImmutableUtils$$1.denormalizeImmutable(schema, input, unvisit);
    }

    var object = _extends({}, input);

    Object.keys(schema).forEach(function (key) {
      if (object[key]) {
        object[key] = unvisit(object[key], schema[key]);
      }
    });
    return object;
  };

  exports.denormalize = _denormalize;

  var ObjectSchema = function () {
    function ObjectSchema(definition) {
      _classCallCheck(this, ObjectSchema);

      this.define(definition);
    }

    _createClass(ObjectSchema, [{
      key: 'define',
      value: function define(definition) {
        this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
          var schema = definition[key];
          return _extends({}, entitySchema, _defineProperty({}, key, schema));
        }, this.schema || {});
      }
    }, {
      key: 'normalize',
      value: function normalize() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _normalize.apply(undefined, [this.schema].concat(args));
      }
    }, {
      key: 'denormalize',
      value: function denormalize() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return _denormalize.apply(undefined, [this.schema].concat(args));
      }
    }]);

    return ObjectSchema;
  }();

  exports.default = ObjectSchema;
});

unwrapExports(_Object);
var _Object_1 = _Object.denormalize;
var _Object_2 = _Object.normalize;
var src = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.denormalize = exports.normalize = exports.schema = undefined;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var _typeof = typeof Symbol === "function" && Object(helpers_typeof["default"])(Symbol.iterator) === "symbol" ? function (obj) {
    return Object(helpers_typeof["default"])(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : Object(helpers_typeof["default"])(obj);
  };

  var _Entity2 = _interopRequireDefault(Entity);

  var _Union2 = _interopRequireDefault(Union);

  var _Values2 = _interopRequireDefault(Values);

  var ArrayUtils = _interopRequireWildcard(_Array);

  var ObjectUtils = _interopRequireWildcard(_Object);

  var ImmutableUtils$$1 = _interopRequireWildcard(ImmutableUtils);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var visit = function visit(value, parent, key, schema, addEntity) {
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || !value) {
      return value;
    }

    if ((typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object' && (!schema.normalize || typeof schema.normalize !== 'function')) {
      var method = Array.isArray(schema) ? ArrayUtils.normalize : ObjectUtils.normalize;
      return method(schema, value, parent, key, visit, addEntity);
    }

    return schema.normalize(value, parent, key, visit, addEntity);
  };

  var addEntities = function addEntities(entities) {
    return function (schema, processedEntity, value, parent, key) {
      var schemaKey = schema.key;
      var id = schema.getId(value, parent, key);

      if (!(schemaKey in entities)) {
        entities[schemaKey] = {};
      }

      var existingEntity = entities[schemaKey][id];

      if (existingEntity) {
        entities[schemaKey][id] = schema.merge(existingEntity, processedEntity);
      } else {
        entities[schemaKey][id] = processedEntity;
      }
    };
  };

  var schema = exports.schema = {
    Array: ArrayUtils.default,
    Entity: _Entity2.default,
    Object: ObjectUtils.default,
    Union: _Union2.default,
    Values: _Values2.default
  };

  var normalize = exports.normalize = function normalize(input, schema) {
    if (!input || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object') {
      throw new Error('Unexpected input given to normalize. Expected type to be "object", found "' + (typeof input === 'undefined' ? 'undefined' : _typeof(input)) + '".');
    }

    var entities = {};
    var addEntity = addEntities(entities);
    var result = visit(input, input, null, schema, addEntity);
    return {
      entities: entities,
      result: result
    };
  };

  var unvisitEntity = function unvisitEntity(id, schema, unvisit, getEntity, cache) {
    var entity = getEntity(id, schema);

    if ((typeof entity === 'undefined' ? 'undefined' : _typeof(entity)) !== 'object' || entity === null) {
      return entity;
    }

    if (!cache[schema.key]) {
      cache[schema.key] = {};
    }

    if (!cache[schema.key][id]) {
      // Ensure we don't mutate it non-immutable objects
      var entityCopy = ImmutableUtils$$1.isImmutable(entity) ? entity : _extends({}, entity); // Need to set this first so that if it is referenced further within the
      // denormalization the reference will already exist.

      cache[schema.key][id] = entityCopy;
      cache[schema.key][id] = schema.denormalize(entityCopy, unvisit);
    }

    return cache[schema.key][id];
  };

  var getUnvisit = function getUnvisit(entities) {
    var cache = {};
    var getEntity = getEntities(entities);
    return function unvisit(input, schema) {
      if ((typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object' && (!schema.denormalize || typeof schema.denormalize !== 'function')) {
        var method = Array.isArray(schema) ? ArrayUtils.denormalize : ObjectUtils.denormalize;
        return method(schema, input, unvisit);
      }

      if (input === undefined || input === null) {
        return input;
      }

      if (schema instanceof _Entity2.default) {
        return unvisitEntity(input, schema, unvisit, getEntity, cache);
      }

      return schema.denormalize(input, unvisit);
    };
  };

  var getEntities = function getEntities(entities) {
    var isImmutable = ImmutableUtils$$1.isImmutable(entities);
    return function (entityOrId, schema) {
      var schemaKey = schema.key;

      if ((typeof entityOrId === 'undefined' ? 'undefined' : _typeof(entityOrId)) === 'object') {
        return entityOrId;
      }

      return isImmutable ? entities.getIn([schemaKey, entityOrId.toString()]) : entities[schemaKey][entityOrId];
    };
  };

  var denormalize = exports.denormalize = function denormalize(input, schema, entities) {
    if (typeof input !== 'undefined') {
      return getUnvisit(entities)(input, schema);
    }
  };
});
unwrapExports(src);
var src_1 = src.denormalize;
var src_2 = src.normalize;
var src_3 = src.schema;

var Normalizer =
/** @class */
function () {
  function Normalizer() {}
  /**
   * Normalize the data given data.
   */


  Normalizer.process = function (query, record) {
    if (Utils.isEmpty(record)) {
      return {};
    }

    var entity = query.database().schemas[query.model.entity];
    var schema = Array.isArray(record) ? [entity] : entity;
    return src_2(record, schema).entities;
  };

  return Normalizer;
}();

var PivotCreator =
/** @class */
function () {
  function PivotCreator() {}
  /**
   * Create an intermediate entity if the data contains any entities that
   * require it for example `belongsTo` or `morphMany`.
   */


  PivotCreator.process = function (query, data) {
    Object.keys(data).forEach(function (entity) {
      var model = query.getModel(entity);

      if (model.hasPivotFields()) {
        Utils.forOwn(model.pivotFields(), function (field) {
          Utils.forOwn(field, function (attr, key) {
            attr.createPivots(model, data, key);
          });
        });
      }
    });
    return data;
  };

  return PivotCreator;
}();

var Incrementer =
/** @class */
function () {
  function Incrementer() {}
  /**
   * Increment all fields that have increment attribute.
   */


  Incrementer.process = function (query, data) {
    var _this = this;

    return Utils.mapValues(data, function (records, entity) {
      var newQuery = query.newPlainQuery(entity); // If the entity doesn't have increment attribute, do nothing and
      // just return immediately.

      if (!newQuery.model.hasIncrementFields()) {
        return records;
      }

      _this.processRecordsByFields(records, newQuery);

      return records;
    });
  };
  /**
   * Process all of the increment fields.
   */


  Incrementer.processRecordsByFields = function (records, query) {
    var _this = this;

    var fields = query.model.getIncrementFields();
    Utils.forOwn(fields, function (_attr, key) {
      _this.processRecords(records, query, key);
    });
  };
  /**
   * Process all records and increment all field that is defined as increment.
   */


  Incrementer.processRecords = function (records, query, key) {
    var max = this.max(records, query, key);
    Utils.forOwn(records, function (record) {
      if (typeof record[key] !== 'number') {
        record[key] = ++max;
      }
    });
  };
  /**
   * Get the max value of the specified field with given data combined
   * with existing records.
   */


  Incrementer.max = function (records, query, field) {
    var maxInState = query.max(field);
    var maxInRecord = Math.max.apply(Math, Utils.map(records, function (record) {
      var id = record[field];
      return typeof id === 'number' ? id : 0;
    }));
    return Math.max(maxInRecord, maxInState);
  };

  return Incrementer;
}();

var Attacher =
/** @class */
function () {
  function Attacher() {}
  /**
   * Attach missing relational key to the records.
   */


  Attacher.process = function (query, data) {
    Utils.forOwn(data, function (entity, name) {
      var fields = query.getModel(name).fields();
      Utils.forOwn(entity, function (record) {
        Utils.forOwn(record, function (value, key) {
          var field = fields[key];

          if (field instanceof vuex_orm_esm_Relation) {
            field.attach(value, record, data);
          }
        });
      });
    });
    return data;
  };

  return Attacher;
}();

var IdFixer =
/** @class */
function () {
  function IdFixer() {}
  /**
   * Fix all of the "no key" records with appropriate id value if it can.
   */


  IdFixer.process = function (query, data) {
    var _this = this;

    return Utils.mapValues(data, function (records, entity) {
      var newQuery = query.newPlainQuery(entity);
      return _this.processRecords(records, newQuery);
    });
  };
  /**
   * Process records to Fix all of the "no key" records with
   * appropriate id value if it can.
   */


  IdFixer.processRecords = function (records, query) {
    return Object.keys(records).reduce(function (newRecords, id) {
      var record = records[id];
      var newId = query.model.id(record);
      var newStringId = isNaN(newId) ? newId : newId.toString();

      if (newId === undefined || id === newStringId) {
        newRecords[id] = record;
        return newRecords;
      }

      newRecords[newStringId] = __assign({}, record, {
        $id: newId
      });
      return newRecords;
    }, {});
  };

  return IdFixer;
}();

var Processor =
/** @class */
function () {
  function Processor() {}
  /**
   * Normalize the given data.
   */


  Processor.normalize = function (query, record) {
    var data = Normalizer.process(query, record);
    data = PivotCreator.process(query, data);
    data = Incrementer.process(query, data);
    data = Attacher.process(query, data);
    data = IdFixer.process(query, data);
    return data;
  };

  return Processor;
}();

var WhereFilter =
/** @class */
function () {
  function WhereFilter() {}
  /**
   * Filter the given data by registered where clause.
   */


  WhereFilter.filter = function (query, records) {
    var _this = this;

    if (query.wheres.length === 0) {
      return records;
    }

    return records.filter(function (record) {
      return _this.check(query, record);
    });
  };
  /**
   * Checks if given Record matches the registered where clause.
   */


  WhereFilter.check = function (query, record) {
    var whereTypes = Utils.groupBy(query.wheres, function (where) {
      return where.boolean;
    });
    var comparator = this.getComparator(query, record);
    var results = [];
    whereTypes.and && results.push(whereTypes.and.every(comparator));
    whereTypes.or && results.push(whereTypes.or.some(comparator));
    return results.indexOf(true) !== -1;
  };
  /**
   * Get comparator for the where clause.
   */


  WhereFilter.getComparator = function (query, record) {
    var _this = this;

    return function (where) {
      // Function with Record and Query as argument.
      if (typeof where.field === 'function') {
        var newQuery = new Query(query.rootState, query.entity);

        var result = _this.executeWhereClosure(newQuery, record, where.field);

        if (typeof result === 'boolean') {
          return result;
        } // If closure returns undefined, we need to execute the local query


        var matchingRecords = newQuery.get(); // And check if current record is part of the resul

        return !Utils.isEmpty(matchingRecords.filter(function (rec) {
          return rec['$id'] === record['$id'];
        }));
      } // Function with Record value as argument.


      if (typeof where.value === 'function') {
        return where.value(record[where.field]);
      } // Check if field value is in given where Array.


      if (Array.isArray(where.value)) {
        return where.value.indexOf(record[where.field]) !== -1;
      } // Simple equal check.


      return record[where.field] === where.value;
    };
  };
  /**
   * Execute where closure.
   */


  WhereFilter.executeWhereClosure = function (query, record, closure) {
    if (closure.length !== 3) {
      return closure(record, query);
    }

    var model = new query.model(record);
    return closure(record, query, model);
  };

  return WhereFilter;
}();

var OrderByFilter =
/** @class */
function () {
  function OrderByFilter() {}
  /**
   * Sort the given data by registered orders.
   */


  OrderByFilter.filter = function (query, records) {
    if (query.orders.length === 0) {
      return records;
    }

    var keys = query.orders.map(function (order) {
      return order.field;
    });
    var directions = query.orders.map(function (order) {
      return order.direction;
    });
    return Utils.orderBy(records, keys, directions);
  };

  return OrderByFilter;
}();

var LimitFilter =
/** @class */
function () {
  function LimitFilter() {}
  /**
   * Limit the given records by the lmilt and offset.
   */


  LimitFilter.filter = function (query, records) {
    return records.slice(query._offset, query._offset + query._limit);
  };

  return LimitFilter;
}();

var Filter =
/** @class */
function () {
  function Filter() {}
  /**
   * Filter the given data by registered where clause.
   */


  Filter.where = function (query, records) {
    return WhereFilter.filter(query, records);
  };
  /**
   * Sort the given data by registered orders.
   */


  Filter.orderBy = function (query, records) {
    return OrderByFilter.filter(query, records);
  };
  /**
   * Limit the given records by the lmilt and offset.
   */


  Filter.limit = function (query, records) {
    return LimitFilter.filter(query, records);
  };

  return Filter;
}();

var Loader =
/** @class */
function () {
  function Loader() {}
  /**
   * Set eager load relation and constraint.
   */


  Loader.setEagerLoad = function (query, relation, constraint) {
    if (constraint === void 0) {
      constraint = null;
    }

    if (!query.load[relation]) {
      query.load[relation] = [];
    }

    constraint && query.load[relation].push(constraint);
  };
  /**
   * Set the relationships that should be loaded.
   */


  Loader.with = function (query, name, constraint) {
    // If the name of the relation is `*`, we'll load all relationships.
    if (name === '*') {
      this.withAll(query);
      return;
    } // Else parse relations and set appropriate constraints.


    this.parseWithRelations(query, name.split('.'), constraint);
  };
  /**
   * Query all relations.
   */


  Loader.withAll = function (query, constraint) {
    if (constraint === void 0) {
      constraint = function constraint() {
        return null;
      };
    }

    var fields = query.model.getFields();

    for (var field in query.model.getFields()) {
      fields[field] instanceof vuex_orm_esm_Relation && this.with(query, field, constraint);
    }
  };
  /**
   * Query all relations recursively.
   */


  Loader.withAllRecursive = function (query, depth) {
    this.withAll(query, function (relatedQuery) {
      depth > 0 && relatedQuery.withAllRecursive(depth - 1);
    });
  };
  /**
   * Parse a list of relations into individuals.
   */


  Loader.parseWithRelations = function (query, relations, constraint) {
    var _this = this;

    var relation = relations[0];
    relation.split('|').forEach(function (name) {
      _this.setEagerLoad(query, name);
    });

    if (relations.length === 1) {
      this.setEagerLoad(query, relation, constraint);
      return;
    }

    relations.shift();
    this.addNestedWiths(query, relations, constraint);
  };
  /**
   * Parse the nested relationships in a relation.
   */


  Loader.addNestedWiths = function (query, relations, constraint) {
    var relation = relations.join('.');
    this.setEagerLoad(query, relation, function (nestedQuery) {
      nestedQuery.with(relation, constraint);
    });
  };
  /**
   * Eager load the relationships for the given records.
   */


  Loader.eagerLoadRelations = function (query, records) {
    var fields = query.model.getFields();

    for (var name_1 in query.load) {
      var relation = fields[name_1];

      if (relation instanceof vuex_orm_esm_Relation) {
        relation.load(query, records, name_1);
      }
    }
  };

  return Loader;
}();

var Hook =
/** @class */
function () {
  /**
   * Create a lidecycle hook instance.
   */
  function Hook(query) {
    this.query = query;
  }
  /**
   * Register a callback. It Returns unique ID for registered callback.
   */


  Hook.on = function (on, callback, once) {
    if (once === void 0) {
      once = false;
    }

    var uid = this.lastHookId + 1;
    this.lastHookId = uid;

    if (!this.hooks[on]) {
      this.hooks[on] = [];
    }

    this.hooks[on].push({
      callback: callback,
      once: once,
      uid: uid
    });
    return uid;
  };
  /**
   * Remove hook registration.
   */


  Hook.off = function (uid) {
    var _this = this;

    var removed = false;
    Object.keys(this.hooks).some(function (on) {
      var hook = _this.hooks[on];
      var index = hook.findIndex(function (h) {
        return h.uid === uid;
      });

      if (index !== -1) {
        hook.splice(index, 1);
        removed = true;
      }

      return removed;
    });
    return removed;
  };
  /**
   * Get the hook class.
   */


  Hook.prototype.self = function () {
    return this.constructor;
  };
  /**
   * Get the action hook.
   */


  Hook.prototype.getActionHook = function (name) {
    if (!this.query.actionContext) {
      return null;
    }

    var hook = this.query.module.actions && this.query.module.actions[name];
    return hook || null;
  };
  /**
   * Get the global hook.
   */


  Hook.prototype.getGlobalHook = function (name) {
    if (!this.self().hooks[name]) {
      return null;
    }

    return this.self().hooks[name];
  };
  /**
   * Check if the given hook exist.
   */


  Hook.prototype.has = function (name) {
    return !!this.getActionHook(name) || !!this.getGlobalHook(name);
  };
  /**
   * Execute the callback of the given hook.
   */


  Hook.prototype.execute = function (on, data) {
    if (!this.has(on)) {
      return data;
    }

    data = this.executeActionHook(on, data);
    data = this.executeGlobalHook(on, data);
    return data;
  };
  /**
   * Execute the action hook.
   */


  Hook.prototype.executeActionHook = function (on, data) {
    if (!this.query.actionContext) {
      return data;
    }

    var hook = this.getActionHook(on);

    if (!hook) {
      return data;
    }

    var result = hook(this.query.actionContext, data);

    if (result === false) {
      return false;
    }

    return result || data;
  };
  /**
   * Execute the global callback of the given hook.
   */


  Hook.prototype.executeGlobalHook = function (on, data) {
    var _this = this;

    if (data === false) {
      return false;
    }

    var hooks = this.getGlobalHook(on);

    if (!hooks) {
      return data;
    } // Track indexes to delete.


    var deleteHookIndexes = []; // Loop all hooks.

    hooks.forEach(function (hook, hookIndex) {
      var callback = hook.callback,
          once = hook.once;
      data = callback.call(_this.query, data, _this.query.entity); // Add hook index to delete.

      once && deleteHookIndexes.push(hookIndex);
    }); // Remove hooks to be deleted in reverse order.

    deleteHookIndexes.reverse().forEach(function (hookIndex) {
      hooks.splice(hookIndex, 1);
    });
    return data;
  };
  /**
   * Execute the callback for all given records.
   */


  Hook.prototype.executeOnRecords = function (on, records) {
    var _this = this;

    if (!this.has(on)) {
      return records;
    }

    return Object.keys(records).reduce(function (newRecords, id) {
      var record = records[id];

      var result = _this.execute(on, record);

      if (result === false) {
        return newRecords;
      }

      newRecords[id] = result;
      return newRecords;
    }, {});
  };
  /**
   * Execute the callback for the given collection.
   */


  Hook.prototype.executeOnCollection = function (on, collection) {
    var _this = this;

    if (!this.has(on)) {
      return collection;
    }

    collection.map(function (item) {
      _this.execute(on, item);
    });
    return collection;
  };
  /**
   * Global lifecycle hooks for the query.
   */


  Hook.hooks = {};
  /**
   * Hook UID counter.
   */

  Hook.lastHookId = 0;
  return Hook;
}();

var Query =
/** @class */
function () {
  /**
   * Create a new Query instance.
   */
  function Query(state, entity, wrap) {
    if (wrap === void 0) {
      wrap = true;
    }
    /**
     * The where constraints for the query.
     */


    this.wheres = [];
    /**
     * The orders of the query result.
     */

    this.orders = [];
    /**
     * Number of results to skip.
     */

    this._offset = 0;
    /**
     * Maximum number of records to return.
     *
     * We use polyfill of `Number.MAX_SAFE_INTEGER` for IE11 here.
     */

    this._limit = Math.pow(2, 53) - 1;
    /**
     * The relationships that should be eager loaded with the result.
     */

    this.load = {};
    /**
     * The Vuex Action context.
     */

    this.actionContext = null;
    this.rootState = state;
    this.state = state[entity];
    this.entity = entity;
    this.model = this.getModel(entity);
    this.module = this.getModule(entity);
    this.hook = new Hook(this);
    this.wrap = wrap;
  }
  /**
   * Create a new query instance
   */


  Query.query = function (state, name, wrap) {
    return new this(state, name, wrap);
  };
  /**
   * Get the database from the container.
   */


  Query.database = function () {
    return Container.database;
  };
  /**
   * Get model of given name from the container.
   */


  Query.getModel = function (name) {
    return this.database().model(name);
  };
  /**
   * Get all models from the container.
   */


  Query.getModels = function () {
    return this.database().models();
  };
  /**
   * Get module of given name from the container.
   */


  Query.getModule = function (name) {
    return this.database().module(name);
  };
  /**
   * Get all modules from the container.
   */


  Query.getModules = function () {
    return this.database().modules();
  };
  /**
   * Save new data to the state. It will remove all existing data in the
   * state. If you want to keep existing data while saving new data,
   * use `insert` instead.
   */


  Query.create = function (state, entity, data, options) {
    return new this(state, entity).create(data, options);
  };
  /**
   * Commit `create` to the state.
   */


  Query.commitCreate = function (state, entity, records) {
    new this(state, entity).commitCreate(records);
  };
  /**
   * Insert given data to the state. Unlike `create`, this method will not
   * remove existing data within the state, but it will update the data
   * with the same primary key.
   */


  Query.insert = function (state, entity, data, options) {
    return new this(state, entity).insert(data, options);
  };
  /**
   * Commit `insert` to the state.
   */


  Query.commitInsert = function (state, entity, data) {
    new this(state, entity).commitInsert(data);
  };
  /**
   * Update data in the state.
   */


  Query.update = function (state, entity, data, condition, options) {
    return new this(state, entity).update(data, condition, options);
  };
  /**
   * Commit `update` to the state.
   */


  Query.commitUpdate = function (state, entity, data) {
    new this(state, entity).commitUpdate(data);
  };
  /**
   * Insert or update given data to the state. Unlike `insert`, this method
   * will not replace existing data within the state, but it will update only
   * the submitted data with the same primary key.
   */


  Query.insertOrUpdate = function (state, entity, data, options) {
    return new this(state, entity).insertOrUpdate(data, options);
  };
  /**
   * Get all data of the given entity from the state.
   */


  Query.all = function (state, entity, wrap) {
    return new this(state, entity, wrap).get();
  };
  /**
   * Get the record of the given id.
   */


  Query.find = function (state, entity, id, wrap) {
    return new this(state, entity, wrap).find(id);
  };
  /**
   * Get the count of the retrieved data.
   */


  Query.count = function (state, entity, wrap) {
    return new this(state, entity, wrap).count();
  };
  /**
   * Get the max value of the specified filed.
   */


  Query.max = function (state, entity, field, wrap) {
    return new this(state, entity, wrap).max(field);
  };
  /**
   * Get the min value of the specified filed.
   */


  Query.min = function (state, entity, field, wrap) {
    return new this(state, entity, wrap).min(field);
  };
  /**
   * Get the sum value of the specified filed.
   */


  Query.sum = function (state, entity, field, wrap) {
    return new this(state, entity, wrap).sum(field);
  };
  /**
   * Delete a record from the state.
   */


  Query.delete = function (state, entity, condition) {
    return new this(state, entity).delete(condition);
  };
  /**
   * Delete all records from the state.
   */


  Query.deleteAll = function (state, entity) {
    var _this = this;

    if (entity) {
      return new this(state, entity).deleteAll();
    }

    var models = this.getModels();
    Utils.forOwn(models, function (_model, name) {
      state[name] && new _this(state, name).deleteAll();
    });
  };
  /**
   * Commit `delete` to the state.
   */


  Query.commitDelete = function (state, entity, ids) {
    new Query(state, entity).commitDelete(ids);
  };
  /**
   * Register a callback. It Returns unique ID for registered callback.
   */


  Query.on = function (on, callback, once) {
    return Hook.on(on, callback, once);
  };
  /**
   * Remove hook registration.
   */


  Query.off = function (uid) {
    return Hook.off(uid);
  };
  /**
   * Get query class.
   */


  Query.prototype.self = function () {
    return this.constructor;
  };
  /**
   * Create a new query instance.
   */


  Query.prototype.newQuery = function (entity) {
    return new Query(this.rootState, entity).setActionContext(this.actionContext);
  };
  /**
   * Create a new query instance with wrap property set to false.
   */


  Query.prototype.newPlainQuery = function (entity) {
    entity = entity || this.entity;
    return new Query(this.rootState, entity).plain();
  };
  /**
   * Get the database from the container.
   */


  Query.prototype.database = function () {
    return this.self().database();
  };
  /**
   * Get model of given name from the container.
   */


  Query.prototype.getModel = function (name) {
    var entity = name || this.entity;
    return this.self().getModel(entity);
  };
  /**
   * Get all models from the container.
   */


  Query.prototype.getModels = function () {
    return this.self().getModels();
  };
  /**
   * Get module of given name from the container.
   */


  Query.prototype.getModule = function (name) {
    var entity = name || this.entity;
    return this.self().getModule(entity);
  };
  /**
   * Get all modules from the container.
   */


  Query.prototype.getModules = function () {
    return this.self().getModules();
  };
  /**
   * Commit changes to the state. This method will call mutation name of
   * `method` with `payload` if the method is called from an action to
   * avoid mutating state change outside of mutation handler.
   */


  Query.prototype.commit = function (method, payload, callback) {
    if (!this.actionContext) {
      callback();
      return;
    }

    payload = __assign({
      entity: this.entity
    }, payload);
    this.actionContext.commit(this.rootState.$name + "/" + method, payload, {
      root: true
    });
  };
  /**
   * Set wrap flag to false.
   */


  Query.prototype.plain = function () {
    this.wrap = false;
    return this;
  };
  /**
   * Set Vuex Action Context to the query.
   */


  Query.prototype.setActionContext = function (context) {
    this.actionContext = context;
    return this;
  };
  /**
   * Save new data to the state. It will remove all existing data in the
   * state. If you want to keep existing data while saving new data,
   * use `insert` instead.
   */


  Query.prototype.create = function (data, options) {
    return this.persist(data, 'create', options);
  };
  /**
   * Create records to the state.
   */


  Query.prototype.createMany = function (records) {
    records = this.model.hydrateMany(records);
    records = this.hook.executeOnRecords('beforeCreate', records);
    this.commitCreate(records);
    var collection = this.collect(this.records(records));
    return this.hook.executeOnCollection('afterCreate', collection);
  };
  /**
   * Commit `create` to the state.
   */


  Query.prototype.commitCreate = function (data) {
    var _this = this;

    this.commit('commitCreate', {
      data: data
    }, function () {
      _this.state.data = data;
    });
  };
  /**
   * Insert given data to the state. Unlike `create`, this method will not
   * remove existing data within the state, but it will update the data
   * with the same primary key.
   */


  Query.prototype.insert = function (data, options) {
    return this.persist(data, 'insert', options);
  };
  /**
   * Insert list of records in the state.
   */


  Query.prototype.insertMany = function (records) {
    records = this.model.hydrateMany(records);
    records = this.hook.executeOnRecords('beforeCreate', records);
    this.commitInsert(records);
    var collection = this.collect(this.records(records));
    return this.hook.executeOnCollection('afterCreate', collection);
  };
  /**
   * Commit `insert` to the state.
   */


  Query.prototype.commitInsert = function (data) {
    var _this = this;

    this.commit('commitInsert', {
      data: data
    }, function () {
      _this.state.data = __assign({}, _this.state.data, data);
    });
  };
  /**
   * Update data in the state.
   */


  Query.prototype.update = function (data, condition, options) {
    // If the data is array, normalize the data and update them.
    if (Array.isArray(data)) {
      return this.persist(data, 'update', options);
    } // Let's see what we can do if `data` is closure.


    if (typeof data === 'function') {
      // If the data is closure, but there's no condition, we will not know
      // what record to update so raise an error an abort.
      if (!condition) {
        throw new Error('You must specify `where` to update records by specifying `data` as a closure.');
      } // If the condition is closure, update records by the closure.


      if (typeof condition === 'function') {
        return this.updateByCondition(data, condition);
      } // Else the condition is either String or Number, so let's
      // update the record by ID.


      return this.updateById(data, condition);
    } // Now the data is not a closure, and it's not an array, so it should be an object.
    // If the condition is closure, we can't normalize the data so let's update
    // records using the closure.


    if (typeof condition === 'function') {
      return this.updateByCondition(data, condition);
    } // If there's no condition, let's normalize the data and update them.


    if (!condition) {
      return this.persist(data, 'update', options);
    } // Now since the condition is either String or Number, let's check if the
    // model's primary key is not a composite key. If yes, we can't set the
    // condition as ID value for the record so throw an error and abort.


    if (Array.isArray(this.model.primaryKey)) {
      throw new Error('You can not specify `where` value when you have a composite key defined in your model. Please include composite keys to the `data` fields.');
    } // Finally,let's add condition as the primary key of the object and
    // then normalize them to update the records.


    data[this.model.primaryKey] = condition;
    return this.persist(data, 'update', options);
  };
  /**
   * Update all records.
   */


  Query.prototype.updateMany = function (records) {
    var _this = this;

    var toBeUpdated = {};
    records = this.model.fixMany(records, []);
    Utils.forOwn(records, function (record, id) {
      var state = _this.state.data[id];

      if (!state) {
        return;
      }

      var newState = JSON.parse(JSON.stringify(state));

      _this.merge(record, newState);

      toBeUpdated[id] = newState;
    });
    toBeUpdated = this.hook.executeOnRecords('beforeUpdate', toBeUpdated);
    this.commitUpdate(toBeUpdated);
    var collection = this.collect(this.records(toBeUpdated));
    this.hook.executeOnCollection('afterUpdate', collection);
    return collection;
  };
  /**
   * Update the state by id.
   */


  Query.prototype.updateById = function (data, id) {
    var _a;

    id = typeof id === 'number' ? id.toString() : id;
    var state = this.state.data[id];

    if (!state) {
      return null;
    }

    var record = JSON.parse(JSON.stringify(state));
    typeof data === 'function' ? data(record) : this.merge(this.model.fix(data), record);
    var hookResult = this.hook.execute('beforeUpdate', record);

    if (hookResult === false) {
      return null;
    }

    this.commitUpdate((_a = {}, _a[id] = hookResult, _a));
    var item = this.item(hookResult);
    this.hook.execute('afterUpdate', item);
    return item;
  };
  /**
   * Update the state by condition.
   */


  Query.prototype.updateByCondition = function (data, condition) {
    var _this = this;

    var toBeUpdated = {};
    Utils.forOwn(this.state.data, function (record, id) {
      if (!condition(record)) {
        return;
      }

      var state = JSON.parse(JSON.stringify(record));
      typeof data === 'function' ? data(state) : _this.merge(_this.model.fix(data), state);
      toBeUpdated[id] = state;
    });
    toBeUpdated = this.hook.executeOnRecords('beforeUpdate', toBeUpdated);
    this.commitUpdate(toBeUpdated);
    var collection = this.collect(this.records(toBeUpdated));
    this.hook.executeOnCollection('afterUpdate', collection);
    return collection;
  };
  /**
   * Commit `update` to the state.
   */


  Query.prototype.commitUpdate = function (data) {
    var _this = this;

    this.commit('commitUpdate', {
      data: data
    }, function () {
      _this.state.data = __assign({}, _this.state.data, data);
    });
  };
  /**
   * Insert or update given data to the state. Unlike `insert`, this method
   * will not replace existing data within the state, but it will update only
   * the submitted data with the same primary key.
   */


  Query.prototype.insertOrUpdate = function (data, options) {
    return this.persist(data, 'insertOrUpdate', options);
  };
  /**
   * Insert or update the records.
   */


  Query.prototype.insertOrUpdateMany = function (records) {
    var _this = this;

    var toBeInserted = {};
    var toBeUpdated = {};
    Utils.forOwn(records, function (record, id) {
      if (_this.state.data[id]) {
        toBeUpdated[id] = record;
        return;
      }

      toBeInserted[id] = record;
    });
    return this.collect(this.insertMany(toBeInserted).concat(this.updateMany(toBeUpdated)));
  };
  /**
   * Persist data into the state.
   */


  Query.prototype.persist = function (data, method, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    data = this.normalize(data);

    if (Utils.isEmpty(data)) {
      method === 'create' && this.commitCreate({});
      return {};
    }

    return Object.keys(data).reduce(function (collection, entity) {
      var query = _this.newQuery(entity);

      var persistMethod = _this.getPersistMethod(entity, method, options);

      var records = query[persistMethod + "Many"](data[entity]);

      if (records.length > 0) {
        collection[entity] = records;
      }

      return collection;
    }, {});
  };
  /**
   * Get method for the persist.
   */


  Query.prototype.getPersistMethod = function (entity, method, options) {
    if (options.create && options.create.includes(entity)) {
      return 'create';
    }

    if (options.insert && options.insert.includes(entity)) {
      return 'insert';
    }

    if (options.update && options.update.includes(entity)) {
      return 'update';
    }

    if (options.insertOrUpdate && options.insertOrUpdate.includes(entity)) {
      return 'insertOrUpdate';
    }

    return method;
  };
  /**
   * Normalize the given data.
   */


  Query.prototype.normalize = function (data) {
    return Processor.normalize(this, data);
  };
  /**
   * Update the state value by merging the given record and state.
   */


  Query.prototype.merge = function (data, state, fields) {
    var _this = this;

    var theFields = fields || this.model.getFields();
    Utils.forOwn(data, function (value, key) {
      var field = theFields[key];

      if (field instanceof Attribute) {
        state[key] = value;
        return;
      }

      _this.merge(value, state[key], field);
    });
  };
  /**
   * Returns all record of the query chain result. This method is alias
   * of the `get` method.
   */


  Query.prototype.all = function () {
    return this.get();
  };
  /**
   * Get the record of the given id.
   */


  Query.prototype.find = function (id) {
    var record = this.state.data[id];

    if (!record) {
      return null;
    }

    return this.item(__assign({}, record));
  };
  /**
   * Returns all record of the query chain result.
   */


  Query.prototype.get = function () {
    var records = this.process();
    return this.collect(records);
  };
  /**
   * Returns the first record of the query chain result.
   */


  Query.prototype.first = function () {
    var records = this.process();
    return this.item(records[0]);
  };
  /**
   * Returns the last single record of the query chain result.
   */


  Query.prototype.last = function () {
    var records = this.process();
    var last = records.length - 1;
    return this.item(records[last]);
  };
  /**
   * Get all the records from the state and convert them into the array.
   * If you pass records, it will create an array out of that records
   * instead of the store state.
   */


  Query.prototype.records = function (records) {
    var theRecords = records || this.state.data;
    return Object.keys(theRecords).map(function (id) {
      return __assign({}, theRecords[id]);
    });
  };
  /**
   * Add a and where clause to the query.
   */


  Query.prototype.where = function (field, value) {
    this.wheres.push({
      field: field,
      value: value,
      boolean: 'and'
    });
    return this;
  };
  /**
   * Add a or where clause to the query.
   */


  Query.prototype.orWhere = function (field, value) {
    this.wheres.push({
      field: field,
      value: value,
      boolean: 'or'
    });
    return this;
  };
  /**
   * Add an order to the query.
   */


  Query.prototype.orderBy = function (field, direction) {
    if (direction === void 0) {
      direction = 'asc';
    }

    this.orders.push({
      field: field,
      direction: direction
    });
    return this;
  };
  /**
   * Add an offset to the query.
   */


  Query.prototype.offset = function (offset) {
    this._offset = offset;
    return this;
  };
  /**
   * Add limit to the query.
   */


  Query.prototype.limit = function (limit) {
    this._limit = limit;
    return this;
  };
  /**
   * Set the relationships that should be loaded.
   */


  Query.prototype.with = function (name, constraint) {
    if (constraint === void 0) {
      constraint = null;
    }

    Loader.with(this, name, constraint);
    return this;
  };
  /**
   * Query all relations.
   */


  Query.prototype.withAll = function (constraint) {
    if (constraint === void 0) {
      constraint = function constraint() {
        return null;
      };
    }

    Loader.withAll(this, constraint);
    return this;
  };
  /**
   * Query all relations recursively.
   */


  Query.prototype.withAllRecursive = function (depth) {
    if (depth === void 0) {
      depth = 3;
    }

    Loader.withAllRecursive(this, depth);
    return this;
  };
  /**
   * Set where constraint based on relationship existence.
   */


  Query.prototype.has = function (name, constraint, count) {
    return this.addHasConstraint(name, constraint, count, true);
  };
  /**
   * Set where constraint based on relationship absence.
   */


  Query.prototype.hasNot = function (name, constraint, count) {
    return this.addHasConstraint(name, constraint, count, false);
  };
  /**
   * Add where constraints based on has or hasNot condition.
   */


  Query.prototype.addHasConstraint = function (name, constraint, count, existence) {
    var ids = this.matchesHasRelation(name, constraint, count, existence);
    this.where('$id', function (value) {
      return ids.includes(value);
    });
    return this;
  };
  /**
   * Add where has condition.
   */


  Query.prototype.whereHas = function (name, constraint) {
    return this.addWhereHasConstraint(name, constraint, true);
  };
  /**
   * Add where has not condition.
   */


  Query.prototype.whereHasNot = function (name, constraint) {
    return this.addWhereHasConstraint(name, constraint, false);
  };
  /**
   * Add where has constraints that only matches the relationship constraint.
   */


  Query.prototype.addWhereHasConstraint = function (name, constraint, existence) {
    var ids = this.matchesWhereHasRelation(name, constraint, existence);
    this.where('$id', function (value) {
      return ids.includes(value);
    });
    return this;
  };
  /**
   * Process the query and filter data.
   */


  Query.prototype.process = function () {
    var records = this.records(); // Process `beforeProcess` hook.

    records = this.hook.execute('beforeProcess', records); // Let's filter the records at first by the where clauses.

    records = this.filterWhere(records); // Process `afterWhere` hook.

    records = this.hook.execute('afterWhere', records); // Next, lets sort the data.

    records = this.filterOrderBy(records); // Process `afterOrderBy` hook.

    records = this.hook.execute('afterOrderBy', records); // Finally, slice the record by limit and offset.

    records = this.filterLimit(records); // Process `afterLimit` hook.

    records = this.hook.execute('afterLimit', records);
    return records;
  };
  /**
   * Filter the given data by registered where clause.
   */


  Query.prototype.filterWhere = function (records) {
    return Filter.where(this, records);
  };
  /**
   * Sort the given data by registered orders.
   */


  Query.prototype.filterOrderBy = function (records) {
    return Filter.orderBy(this, records);
  };
  /**
   * Limit the given records by the lmilt and offset.
   */


  Query.prototype.filterLimit = function (records) {
    return Filter.limit(this, records);
  };
  /**
   * Get the count of the retrieved data.
   */


  Query.prototype.count = function () {
    return this.plain().get().length;
  };
  /**
   * Get the max value of the specified filed.
   */


  Query.prototype.max = function (field) {
    var numbers = this.plain().get().reduce(function (numbers, item) {
      if (typeof item[field] === 'number') {
        numbers.push(item[field]);
      }

      return numbers;
    }, []);
    return numbers.length === 0 ? 0 : Math.max.apply(Math, numbers);
  };
  /**
   * Get the min value of the specified filed.
   */


  Query.prototype.min = function (field) {
    var numbers = this.plain().get().reduce(function (numbers, item) {
      if (typeof item[field] === 'number') {
        numbers.push(item[field]);
      }

      return numbers;
    }, []);
    return numbers.length === 0 ? 0 : Math.min.apply(Math, numbers);
  };
  /**
   * Get the sum value of the specified filed.
   */


  Query.prototype.sum = function (field) {
    return this.plain().get().reduce(function (sum, item) {
      if (typeof item[field] === 'number') {
        sum += item[field];
      }

      return sum;
    }, 0);
  };
  /**
   * Create a item from given record.
   */


  Query.prototype.item = function (item) {
    if (!item) {
      return null;
    }

    Loader.eagerLoadRelations(this, [item]);
    return this.model.make(item, !this.wrap);
  };
  /**
   * Create a collection (array) from given records.
   */


  Query.prototype.collect = function (collection) {
    var _this = this;

    if (Utils.isEmpty(collection)) {
      return [];
    }

    Loader.eagerLoadRelations(this, collection);
    return collection.map(function (record) {
      return _this.model.make(record, !_this.wrap);
    });
  };
  /**
   * Check if the given collection has given relationship.
   */


  Query.prototype.matchesHasRelation = function (name, constraint, count, existence) {
    if (existence === void 0) {
      existence = true;
    }

    var _constraint;

    if (constraint === undefined) {
      _constraint = function _constraint(record) {
        return record.length >= 1;
      };
    } else if (typeof constraint === 'number') {
      _constraint = function _constraint(record) {
        return record.length >= constraint;
      };
    } else if (constraint === '=' && typeof count === 'number') {
      _constraint = function _constraint(record) {
        return record.length === count;
      };
    } else if (constraint === '>' && typeof count === 'number') {
      _constraint = function _constraint(record) {
        return record.length > count;
      };
    } else if (constraint === '>=' && typeof count === 'number') {
      _constraint = function _constraint(record) {
        return record.length >= count;
      };
    } else if (constraint === '<' && typeof count === 'number') {
      _constraint = function _constraint(record) {
        return record.length < count;
      };
    } else if (constraint === '<=' && typeof count === 'number') {
      _constraint = function _constraint(record) {
        return record.length <= count;
      };
    }

    var data = new Query(this.rootState, this.entity, false).with(name).get();
    var ids = [];
    data.forEach(function (item) {
      var target = item[name];
      var result = false;

      if (!target) {
        result = false;
      } else if (Array.isArray(target) && target.length < 1) {
        result = false;
      } else if (Array.isArray(target)) {
        result = _constraint(target);
      } else if (target) {
        result = _constraint([target]);
      }

      if (result !== existence) {
        return;
      }

      ids.push(item.$id);
    });
    return ids;
  };
  /**
   * Get all id of the record that matches the relation constraints.
   */


  Query.prototype.matchesWhereHasRelation = function (name, constraint, existence) {
    if (existence === void 0) {
      existence = true;
    }

    var data = this.newPlainQuery().with(name, constraint).get();
    var ids = [];
    data.forEach(function (item) {
      var target = item[name];
      var result = Array.isArray(target) ? !!target.length : !!target;

      if (result !== existence) {
        return;
      }

      ids.push(item.$id);
    });
    return ids;
  };
  /**
   * Delete records from the state.
   */


  Query.prototype.delete = function (condition) {
    if (typeof condition === 'function') {
      return this.deleteByCondition(condition);
    }

    return this.deleteById(condition);
  };
  /**
   * Delete a record by id.
   */


  Query.prototype.deleteById = function (id) {
    id = typeof id === 'number' ? id.toString() : id;
    var state = this.state.data[id];

    if (!state) {
      return null;
    }

    var hookResult = this.hook.execute('beforeDelete', state);

    if (hookResult === false) {
      return null;
    }

    this.commitDelete([id]);
    var item = this.item(hookResult);
    this.hook.execute('afterDelete', item);
    return item;
  };
  /**
   * Delete record by condition.
   */


  Query.prototype.deleteByCondition = function (condition) {
    var toBeDeleted = {};
    Utils.forOwn(this.state.data, function (record, id) {
      if (!condition(record)) {
        return;
      }

      toBeDeleted[id] = record;
    });
    toBeDeleted = this.hook.executeOnRecords('beforeDelete', toBeDeleted);
    this.commitDelete(Object.keys(toBeDeleted));
    var collection = this.collect(this.records(toBeDeleted));
    this.hook.executeOnCollection('afterDelete', collection);
    return collection;
  };
  /**
   * Delete all records from the state.
   */


  Query.prototype.deleteAll = function () {
    var toBeDeleted = this.state.data;
    toBeDeleted = this.hook.executeOnRecords('beforeDelete', toBeDeleted);
    this.commitDelete(Object.keys(toBeDeleted));
    var collection = this.collect(this.records(toBeDeleted));
    this.hook.executeOnCollection('afterDelete', collection);
    return collection;
  };
  /**
   * Commit `delete` to the state.
   */


  Query.prototype.commitDelete = function (ids) {
    var _this = this;

    this.commit('commitDelete', {
      ids: ids
    }, function () {
      _this.state.data = Object.keys(_this.state.data).reduce(function (state, id) {
        if (!ids.includes(id)) {
          state[id] = _this.state.data[id];
        }

        return state;
      }, {});
    });
  };

  return Query;
}();

var Getters = {
  /**
   * Create a new Query instance.
   */
  query: function query(state, _getters, _rootState, rootGetters) {
    return function (wrap) {
      return rootGetters[state.$connection + "/query"](state.$name, wrap);
    };
  },

  /**
   * Get all data of given entity.
   */
  all: function all(state, _getters, _rootState, rootGetters) {
    return function (wrap) {
      return rootGetters[state.$connection + "/all"](state.$name, wrap);
    };
  },

  /**
   * Find a data of the given entity by given id.
   */
  find: function find(state, _getters, _rootState, rootGetters) {
    return function (id, wrap) {
      return rootGetters[state.$connection + "/find"](state.$name, id, wrap);
    };
  }
};
var Actions = {
  /**
   * Save new data to the state. It will remove all existing data in the
   * state. If you want to keep existing data while saving new data,
   * use `insert` instead.
   */
  create: function create(context, payload) {
    return __awaiter(this, void 0, void 0, function () {
      var state, entity;
      return __generator(this, function (_a) {
        state = context.state;
        entity = state.$name;
        return [2
        /*return*/
        , context.dispatch(state.$connection + "/create", __assign({
          entity: entity
        }, payload), {
          root: true
        })];
      });
    });
  },

  /**
   * Insert given data to the state. Unlike `create`, this method will not
   * remove existing data within the state, but it will update the data
   * with the same primary key.
   */
  insert: function insert(context, payload) {
    return __awaiter(this, void 0, void 0, function () {
      var state, entity;
      return __generator(this, function (_a) {
        state = context.state;
        entity = state.$name;
        return [2
        /*return*/
        , context.dispatch(state.$connection + "/insert", __assign({
          entity: entity
        }, payload), {
          root: true
        })];
      });
    });
  },

  /**
   * Update data in the store.
   */
  update: function update(context, payload) {
    return __awaiter(this, void 0, void 0, function () {
      var state, entity;
      return __generator(this, function (_a) {
        state = context.state;
        entity = state.$name; // If the payload is an array, then the payload should be an array of
        // data so let's pass the whole payload as data.

        if (Array.isArray(payload)) {
          return [2
          /*return*/
          , context.dispatch(state.$connection + "/update", {
            entity: entity,
            data: payload
          }, {
            root: true
          })];
        } // If the payload doesn't have `data` property, we'll assume that
        // the user has passed the object as the payload so let's define
        // the whole payload as a data.


        if (payload.data === undefined) {
          return [2
          /*return*/
          , context.dispatch(state.$connection + "/update", {
            entity: entity,
            data: payload
          }, {
            root: true
          })];
        } // Else destructure the payload and let root action handle it.


        return [2
        /*return*/
        , context.dispatch(state.$connection + "/update", __assign({
          entity: entity
        }, payload), {
          root: true
        })];
      });
    });
  },

  /**
   * Insert or update given data to the state. Unlike `insert`, this method
   * will not replace existing data within the state, but it will update only
   * the submitted data with the same primary key.
   */
  insertOrUpdate: function insertOrUpdate(context, payload) {
    return __awaiter(this, void 0, void 0, function () {
      var state, entity;
      return __generator(this, function (_a) {
        state = context.state;
        entity = state.$name;
        return [2
        /*return*/
        , context.dispatch(state.$connection + "/insertOrUpdate", __assign({
          entity: entity
        }, payload), {
          root: true
        })];
      });
    });
  },

  /**
   * Delete data from the store.
   */
  delete: function _delete(context, payload) {
    return __awaiter(this, void 0, void 0, function () {
      var state, entity, where;
      return __generator(this, function (_a) {
        state = context.state;
        entity = state.$name;
        where = Object(helpers_typeof["default"])(payload) === 'object' ? payload.where : payload;
        return [2
        /*return*/
        , context.dispatch(state.$connection + "/delete", {
          entity: entity,
          where: where
        }, {
          root: true
        })];
      });
    });
  },

  /**
   * Delete all data from the store.
   */
  deleteAll: function deleteAll(context) {
    return __awaiter(this, void 0, void 0, function () {
      var state, entity;
      return __generator(this, function (_a) {
        state = context.state;
        entity = state.$name;
        return [2
        /*return*/
        , context.dispatch(state.$connection + "/deleteAll", {
          entity: entity
        }, {
          root: true
        })];
      });
    });
  }
};
var RootGetters = {
  /**
   * Create a new Query instance.
   */
  query: function query(state) {
    return function (entity, wrap) {
      return Query.query(state, entity, wrap);
    };
  },

  /**
   * Get all data of given entity.
   */
  all: function all(state) {
    return function (entity, wrap) {
      return Query.all(state, entity, wrap);
    };
  },

  /**
   * Find a data of the given entity by given id.
   */
  find: function find(state) {
    return function (entity, id, wrap) {
      return Query.find(state, entity, id, wrap);
    };
  }
};

var OptionsBuilder =
/** @class */
function () {
  function OptionsBuilder() {}
  /**
   * Get persist options from the given payload.
   */


  OptionsBuilder.createPersistOptions = function (payload) {
    return {
      create: payload.create,
      insert: payload.insert,
      update: payload.update,
      insertOrUpdate: payload.insertOrUpdate
    };
  };

  return OptionsBuilder;
}();

var RootActions = {
  /**
   * Save new data to the state. It will remove all existing data in the
   * state. If you want to keep existing data while saving new data,
   * use `insert` instead.
   */
  create: function create(context, payload) {
    return __awaiter(this, void 0, void 0, function () {
      var state, entity, data, options;
      return __generator(this, function (_a) {
        state = context.state;
        entity = payload.entity;
        data = payload.data;
        options = OptionsBuilder.createPersistOptions(payload);
        return [2
        /*return*/
        , new Query(state, entity).setActionContext(context).create(data, options)];
      });
    });
  },

  /**
   * Insert given data to the state. Unlike `create`, this method will not
   * remove existing data within the state, but it will update the data
   * with the same primary key.
   */
  insert: function insert(context, payload) {
    return __awaiter(this, void 0, void 0, function () {
      var state, entity, data, options;
      return __generator(this, function (_a) {
        state = context.state;
        entity = payload.entity;
        data = payload.data;
        options = OptionsBuilder.createPersistOptions(payload);
        return [2
        /*return*/
        , new Query(state, entity).setActionContext(context).insert(data, options)];
      });
    });
  },

  /**
   * Update data in the store.
   */
  update: function update(context, payload) {
    return __awaiter(this, void 0, void 0, function () {
      var state, entity, data, where, options;
      return __generator(this, function (_a) {
        state = context.state;
        entity = payload.entity;
        data = payload.data;
        where = payload.where;
        options = OptionsBuilder.createPersistOptions(payload);
        return [2
        /*return*/
        , new Query(state, entity).setActionContext(context).update(data, where, options)];
      });
    });
  },

  /**
   * Insert or update given data to the state. Unlike `insert`, this method
   * will not replace existing data within the state, but it will update only
   * the submitted data with the same primary key.
   */
  insertOrUpdate: function insertOrUpdate(context, payload) {
    return __awaiter(this, void 0, void 0, function () {
      var state, entity, data, options;
      return __generator(this, function (_a) {
        state = context.state;
        entity = payload.entity;
        data = payload.data;
        options = OptionsBuilder.createPersistOptions(payload);
        return [2
        /*return*/
        , new Query(state, entity).setActionContext(context).insertOrUpdate(data, options)];
      });
    });
  },

  /**
   * Delete data from the store.
   */
  delete: function _delete(context, payload) {
    return __awaiter(this, void 0, void 0, function () {
      var state, entity, where;
      return __generator(this, function (_a) {
        state = context.state;
        entity = payload.entity;
        where = payload.where;
        return [2
        /*return*/
        , new Query(state, entity).setActionContext(context).delete(where)];
      });
    });
  },

  /**
   * Delete all data from the store.
   */
  deleteAll: function deleteAll(context, payload) {
    return __awaiter(this, void 0, void 0, function () {
      var entity;
      return __generator(this, function (_a) {
        entity = payload ? payload.entity : undefined;
        return [2
        /*return*/
        , context.commit('deleteAll', {
          entity: entity
        })];
      });
    });
  }
};
var RootMutations = {
  /**
   * Save new data to the state. It will remove all existing data in the
   * state. If you want to keep existing data while saving new data,
   * use `insert` instead.
   */
  create: function create(state, _a) {
    var entity = _a.entity,
        data = _a.data,
        create = _a.create,
        insert = _a.insert,
        update = _a.update,
        insertOrUpdate = _a.insertOrUpdate;
    Query.create(state, entity, data, {
      create: create,
      insert: insert,
      update: update,
      insertOrUpdate: insertOrUpdate
    });
  },

  /**
   * Commit `create` to the state.
   */
  commitCreate: function commitCreate(state, _a) {
    var entity = _a.entity,
        data = _a.data;
    Query.commitCreate(state, entity, data);
  },

  /**
   * Insert given data to the state. Unlike `create`, this method will not
   * remove existing data within the state, but it will update the data
   * with the same primary key.
   */
  insert: function insert(state, _a) {
    var entity = _a.entity,
        data = _a.data,
        create = _a.create,
        insert = _a.insert,
        update = _a.update,
        insertOrUpdate = _a.insertOrUpdate;
    Query.insert(state, entity, data, {
      create: create,
      insert: insert,
      update: update,
      insertOrUpdate: insertOrUpdate
    });
  },

  /**
   * Commit `insert` to the state.
   */
  commitInsert: function commitInsert(state, _a) {
    var entity = _a.entity,
        data = _a.data;
    Query.commitInsert(state, entity, data);
  },

  /**
   * Update data in the store.
   */
  update: function update(state, _a) {
    var entity = _a.entity,
        data = _a.data,
        where = _a.where,
        create = _a.create,
        insert = _a.insert,
        update = _a.update,
        insertOrUpdate = _a.insertOrUpdate;
    Query.update(state, entity, data, where, {
      create: create,
      insert: insert,
      update: update,
      insertOrUpdate: insertOrUpdate
    });
  },

  /**
   * Commit `create` to the state.
   */
  commitUpdate: function commitUpdate(state, _a) {
    var entity = _a.entity,
        data = _a.data;
    Query.commitUpdate(state, entity, data);
  },

  /**
   * Insert or update given data to the state. Unlike `insert`, this method
   * will not replace existing data within the state, but it will update only
   * the submitted data with the same primary key.
   */
  insertOrUpdate: function insertOrUpdate(state, _a) {
    var entity = _a.entity,
        data = _a.data,
        create = _a.create;
    Query.insertOrUpdate(state, entity, data, create);
  },

  /**
   * Delete data from the store.
   */
  delete: function _delete(state, _a) {
    var entity = _a.entity,
        where = _a.where;
    Query.delete(state, entity, where);
  },

  /**
   * Delete all data from the store.
   */
  deleteAll: function deleteAll(state, payload) {
    if (payload && payload.entity) {
      Query.deleteAll(state, payload.entity);
      return;
    }

    Query.deleteAll(state);
  },

  /**
   * Commit `delete` to the state.
   */
  commitDelete: function commitDelete(state, _a) {
    var entity = _a.entity,
        ids = _a.ids;
    Query.commitDelete(state, entity, ids);
  }
};

function use(plugin, options) {
  if (options === void 0) {
    options = {};
  }

  var components = {
    Model: Model,
    Query: Query,
    Attribute: Attribute,
    Type: Type,
    Attr: Attr,
    String: String$1,
    Number: vuex_orm_esm_Number,
    Boolean: Boolean,
    Increment: Increment,
    Relation: vuex_orm_esm_Relation,
    HasOne: HasOne,
    BelongsTo: BelongsTo,
    HasMany: vuex_orm_esm_HasMany,
    HasManyBy: vuex_orm_esm_HasManyBy,
    BelongsToMany: vuex_orm_esm_BelongsToMany,
    HasManyThrough: vuex_orm_esm_HasManyThrough,
    MorphTo: MorphTo,
    MorphOne: MorphOne,
    MorphMany: vuex_orm_esm_MorphMany,
    MorphToMany: vuex_orm_esm_MorphToMany,
    MorphedByMany: vuex_orm_esm_MorphedByMany,
    Getters: Getters,
    Actions: Actions,
    RootGetters: RootGetters,
    RootActions: RootActions,
    RootMutations: RootMutations
  };
  plugin.install(components, options);
}

var NoKey =
/** @class */
function () {
  function NoKey() {}
  /**
   * Set new unique id value.
   */


  NoKey.set = function () {
    this.value = "" + this.prefix + this.count;
  };
  /**
   * Get the current unique id value.
   */


  NoKey.get = function () {
    return this.value;
  };
  /**
   * Increment the count, new unique id value.
   */


  NoKey.increment = function () {
    this.count++;
    this.set();
    return this.get();
  };
  /**
   * Count to create a unique id for the record that missing its primary key.
   */


  NoKey.count = 0;
  /**
   * Prefix string to be used for undefined primary key value.
   */

  NoKey.prefix = '_no_key_';
  /**
   * The current unique id value. This is the combination of
   * the `prefix` and the `count`.
   */

  NoKey.value = '';
  return NoKey;
}();

var IdAttribute =
/** @class */
function () {
  function IdAttribute() {}
  /**
   * Create the id attribute.
   */


  IdAttribute.create = function (model) {
    return function (value, _parent, _key) {
      var id = model.id(value);
      return id === undefined || id === null || id === '' ? NoKey.get() : id;
    };
  };

  return IdAttribute;
}();

var ProcessStrategy =
/** @class */
function () {
  function ProcessStrategy() {}
  /**
   * Create the process strategy.
   */


  ProcessStrategy.create = function (model) {
    var _this = this;

    return function (value, _parentValue, _key) {
      var id = _this.getId(model, value);

      return __assign({}, value, {
        $id: id
      });
    };
  };
  /**
   * Get the ID value for the given record.
   */


  ProcessStrategy.getId = function (model, value) {
    var id = model.id(value);
    return id === undefined || id === null || id === '' ? NoKey.increment() : id;
  };

  return ProcessStrategy;
}();

var Schema =
/** @class */
function () {
  /**
   * Create a new schema instance.
   */
  function Schema(model) {
    var _this = this;
    /**
     * List of generated schemas.
     */


    this.schemas = {};
    this.model = model;
    var models = model.database().models();
    Object.keys(models).forEach(function (name) {
      _this.one(models[name]);
    });
  }
  /**
   * Create a schema for the given model.
   */


  Schema.create = function (model) {
    return new this(model).one();
  };
  /**
   * Create a single schema for the given model.
   */


  Schema.prototype.one = function (model) {
    model = model || this.model;

    if (this.schemas[model.entity]) {
      return this.schemas[model.entity];
    }

    var schema$$1 = new src_3.Entity(model.entity, {}, {
      idAttribute: IdAttribute.create(model),
      processStrategy: ProcessStrategy.create(model)
    });
    this.schemas[model.entity] = schema$$1;
    var definition = this.definition(model);
    schema$$1.define(definition);
    return schema$$1;
  };
  /**
   * Create an array schema for the given model.
   */


  Schema.prototype.many = function (model) {
    return new src_3.Array(this.one(model));
  };
  /**
   * Create an union schema for the given model.
   */


  Schema.prototype.union = function (callback) {
    return new src_3.Union(this.schemas, callback);
  };
  /**
   * Create a dfinition for the given model.
   */


  Schema.prototype.definition = function (model) {
    var _this = this;

    var fields = model.fields();
    return Object.keys(fields).reduce(function (definition, key) {
      var field = fields[key];

      if (field instanceof vuex_orm_esm_Relation) {
        definition[key] = field.define(_this);
      }

      return definition;
    }, {});
  };

  return Schema;
}();

var Builder =
/** @class */
function () {
  function Builder() {}
  /**
   * Create module from the given modules.
   */


  Builder.create = function (namespace, modules) {
    var tree = {
      namespaced: true,
      state: {
        $name: namespace
      },
      getters: RootGetters,
      actions: RootActions,
      mutations: RootMutations,
      modules: {}
    };
    return this.createModules(tree, namespace, modules);
  };
  /**
   * Creates module tree to be registered under top level module
   * from the given entities.
   */


  Builder.createModules = function (tree, namespace, modules) {
    var _this = this;

    Object.keys(modules).forEach(function (name) {
      var module = modules[name];
      tree.modules[name] = {
        namespaced: true
      };
      tree.modules[name].state = _this.createState(namespace, name, module);

      tree.getters[name] = function (_state, getters, _rootState, _rootGetters) {
        return function () {
          return getters.query(name);
        };
      };

      tree.modules[name].getters = __assign({}, Getters, module.getters);
      tree.modules[name].actions = __assign({}, Actions, module.actions);
      tree.modules[name].mutations = module.mutations || {};
    });
    return tree;
  };
  /**
   * Get new state to be registered to the modules.
   */


  Builder.createState = function (namespace, name, module) {
    var state = typeof module.state === 'function' ? module.state() : module.state;
    return __assign({}, state, {
      $connection: namespace,
      $name: name,
      data: {}
    });
  };

  return Builder;
}();

var Database =
/** @class */
function () {
  function Database() {
    /**
     * The list of entities to be registered to the Vuex Store. It contains
     * models and modules with its name.
     */
    this.entities = [];
    /**
     * The database schema definition. This schema will be used when normalizing
     * the data before persisting them to the Vuex Store.
     */

    this.schemas = {};
  }
  /**
   * Initialize the database before a user can start using it.
   */


  Database.prototype.start = function (store, namespace) {
    this.store = store;
    this.namespace = namespace;
    this.registerModules();
    this.createSchema();
  };
  /**
   * Register a model and module to the entities list.
   */


  Database.prototype.register = function (model, module) {
    this.entities.push({
      name: model.entity,
      model: model,
      module: module
    });
  };
  /**
   * Get the model of the given name from the entities list.
   */


  Database.prototype.model = function (name) {
    return this.models()[name];
  };
  /**
   * Get all models from the entities list.
   */


  Database.prototype.models = function () {
    return this.entities.reduce(function (models, entity) {
      models[entity.name] = entity.model;
      return models;
    }, {});
  };
  /**
   * Get the module of the given name from the entities list.
   */


  Database.prototype.module = function (name) {
    return this.modules()[name];
  };
  /**
   * Get all modules from the entities list.
   */


  Database.prototype.modules = function () {
    return this.entities.reduce(function (modules, entity) {
      modules[entity.name] = entity.module;
      return modules;
    }, {});
  };
  /**
   * Create the Vuex Module from registered entities.
   */


  Database.prototype.registerModules = function () {
    var modules = Builder.create(this.namespace, this.modules());
    this.store.registerModule(this.namespace, modules);
  };
  /**
   * Create the schema definition from registered entities list and set
   * it to the property. This schema will be used by the normalizer
   * to normalize data before persisting them to the Vuex Store.
   */


  Database.prototype.createSchema = function () {
    var _this = this;

    this.entities.forEach(function (entity) {
      _this.schemas[entity.name] = Schema.create(entity.model);
    });
  };

  return Database;
}();

var index$1 = {
  install: vuex_orm_esm_install,
  use: use,
  Database: Database,
  Model: Model,
  Query: Query,
  Attribute: Attribute,
  Type: Type,
  Attr: Attr,
  String: String$1,
  Number: vuex_orm_esm_Number,
  Boolean: Boolean,
  Increment: Increment,
  Relation: vuex_orm_esm_Relation,
  HasOne: HasOne,
  BelongsTo: BelongsTo,
  HasMany: vuex_orm_esm_HasMany,
  HasManyBy: vuex_orm_esm_HasManyBy,
  BelongsToMany: vuex_orm_esm_BelongsToMany,
  HasManyThrough: vuex_orm_esm_HasManyThrough,
  MorphTo: MorphTo,
  MorphOne: MorphOne,
  MorphMany: vuex_orm_esm_MorphMany,
  MorphToMany: vuex_orm_esm_MorphToMany,
  MorphedByMany: vuex_orm_esm_MorphedByMany,
  Getters: Getters,
  Actions: Actions,
  RootGetters: RootGetters,
  RootActions: RootActions,
  RootMutations: RootMutations
};
/* harmony default export */ var vuex_orm_esm = (index$1);

// CONCATENATED MODULE: ./src/support/interfaces.js

var AxiosRequestConfig = {
  /**
   * Default Base URL
   */
  baseURL: 'http://localhost:3000',

  /**
   * Default URL
   */
  url: '/',

  /**
   * Default Method
   */
  method: 'get',

  /**
   * Access Token Variable
   */
  access_token: '',

  /**
   * Default Headers
   */
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },

  /**
   * Default Data
   */
  data: {},

  /**
   * Default Timout
   */
  timeout: 0,

  /**
   * Default With Credentials Flag
   */
  withCredentials: false,

  /**
   * Default Response Type
   */
  responseType: 'json',

  /**
   * Default Response Encoding
   */
  responseEncoding: 'utf8',

  /**
   * Default Validate Status Method
   * @param {number} status
   */
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300; // default
  },

  /**
   * Default Max Redirects
   */
  maxRedirects: 5,

  /**
   * Default Socket Path
   */
  socketPath: null,

  /**
   * Default Proxy
   */
  proxy: {},

  /**
   * Default on Response interceptor
   * @param {object} response
   */
  onResponse: function onResponse(response) {
    return response.data;
  },

  /**
   * Default on Request interceptor
   * @param {object} config
   */
  onRequest: function onRequest(config) {
    return config;
  },

  /**
   * On 401 Unauthorised
   * @param {object} error
   */
  onUnauthorised: function onUnauthorised(error) {//
  },

  /**
   * On 404 Not Found
   * @param {object} error
   */
  onNotFound: function onNotFound(error) {//
  },

  /**
   * On 500 Server Error
   * @param {object} error
   */
  onServerError: function onServerError(error) {//
  },

  /**
   * On Generic Error
   * @param {object} error
   */
  onGenericError: function onGenericError(error) {//
  },

  /**
   * On Laravel Validation Error (Or 422 Error).
   * @param {object} error
   */
  onValidationError: function onValidationError(error) {//
  },

  /**
   * Default on Error
   * @param {object} error
   */
  onError: function onError(error) {
    switch (error.response.status) {
      case 401:
        this.onUnauthorised(error);
        break;

      case 404:
        this.onNotFound(error);
        break;

      case 422:
        this.onValidationError(error);
        break;

      case 500:
        this.onServerError(error);
        break;

      default:
        this.onGenericError(error);
        break;
    }

    return Promise.reject(error);
  }
};
var VuexOrmPluginConfig = {
  /**
   * Default VuexORM Database
   */
  database: new Database(),

  /**
   * Default Axios Config
   */
  http: AxiosRequestConfig
};
var ModuleConfig = {
  /**
   * Vuex Default Getters
   */
  getters: {
    loading: function loading(state) {
      return state.loading;
    },
    errors: function errors(state) {
      return state.errors;
    }
  },

  /**
   * Vuex Default Mutations
   */
  mutations: {
    /**
     * On Default Request
     * @param {object} state
     */
    onRequest: function onRequest(state) {
      state.loading = true;
      state.errors = [];
    },

    /**
     * On Error Request
     * @param {object} state
     * @param {object} response
     */
    onError: function onError(state, response) {
      state.loading = false;
      state.errors = response.data;
    },

    /**
     * On Success Request
     * @param {object} state
     * @param {object} response
     */
    onSuccess: function onSuccess(state) {
      state.loading = false;
      state.errors = [];
    }
  },

  /**
   * Vuex Defualt State
   */
  state: {
    loading: false,
    errors: []
  }
};
var FetchConfig = {
  name: 'fetch',
  http: {
    url: '',
    method: 'get'
  }
};
var GetConfig = {
  name: 'get',
  http: {
    url: '/:id',
    method: 'get'
  }
};
var CreateConfig = {
  name: 'create',
  alias: ['insert'],
  http: {
    url: '',
    method: 'post'
  }
};
var UpdateConfig = {
  name: 'update',
  http: {
    url: '/:id',
    method: 'put'
  }
};
var DeleteConfig = {
  name: 'delete',
  http: {
    url: '/:id',
    method: 'delete'
  }
};
var ModelConfig = {
  http: AxiosRequestConfig,
  methods: {
    $fetch: FetchConfig,
    $get: GetConfig,
    $create: CreateConfig,
    $update: UpdateConfig,
    $delete: DeleteConfig
  }
};
// CONCATENATED MODULE: ./src/common/context.js





var context_Context =
/*#__PURE__*/
function () {
  /**
   * Private constructor, called by the setup method
   *
   * @constructor
   * @param {Components} components The Vuex-ORM Components collection
   * @param {Options} options The options passed to VuexORM.install
   */
  function Context(components, options) {
    classCallCheck_default()(this, Context);

    this.components = components;
    this.options = lodash_es_merge({}, VuexOrmPluginConfig, options);
    this.database = options.database;

    if (!options.database) {
      throw new Error('database option is required to initialise!');
    }
  }
  /**
   * This is called only once and creates a new instance of the Context.
   * @param {Components} components The Vuex-ORM Components collection
   * @param {Options} options The options passed to VuexORM.install
   * @returns {Context}
   */


  createClass_default()(Context, [{
    key: "getModelFromState",

    /**
     * Get Model from State
     * @param {object} state
     */
    value: function getModelFromState(state) {
      return this.database.entities.find(function (_ref) {
        var name = _ref.name;
        return name == state.$name;
      }).model;
    }
  }], [{
    key: "setup",
    value: function setup(components, options) {
      this.instance = new Context(components, options);
      return this.instance;
    }
    /**
     * Get the singleton instance of the context.
     * @returns {Context}
     */

  }, {
    key: "getInstance",
    value: function getInstance() {
      return this.instance;
    }
  }]);

  return Context;
}();


// CONCATENATED MODULE: ./src/actions/Action.js






var Action_Action =
/*#__PURE__*/
function () {
  function Action() {
    classCallCheck_default()(this, Action);
  }

  createClass_default()(Action, null, [{
    key: "transformModule",

    /**
     * Transform Module to include ModuleConfig
     * @param {object} model
     */
    value: function transformModule(module) {
      return lodash_es_merge({}, ModuleConfig, module);
    }
    /**
     * Transform Model to include ModelConfig
     * @param {object} model
     */

  }, {
    key: "transformModel",
    value: function transformModel(model) {
      var context = context_Context.getInstance();
      ModelConfig.http = lodash_es_merge({}, ModelConfig.http, context.options.http);
      model.methodConf = lodash_es_merge({}, ModelConfig, model.methodConf);
      model.methodConf.http.url = model.methodConf.http.url === '/' ? "/".concat(model.entity) : model.methodConf.http.url;
      /**
       * Add Model Interface to each model
       */

      model.getFields = function () {
        if (!model.cachedFields) {
          model.cachedFields = lodash_es_merge({}, {
            $id: model.attr(undefined),
            $isUpdating: model.boolean(false),
            $updateErrors: model.attr([]),
            $isDeleting: model.boolean(false),
            $deleteErrors: model.attr([])
          }, model.fields());
        }

        return model.cachedFields;
      };

      return model;
    }
    /**
     * Transform Params and Return Endpoint
     * @param {string} type
     * @param {object} model
     * @param {object} config
     */

  }, {
    key: "transformParams",
    value: function transformParams(type, model) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var endpoint = "".concat(model.methodConf.http.url).concat(model.methodConf.methods[type].http.url);
      var params = (endpoint.match(/(\/?)(:)([A-z]*)/gm) || []).map(function (param) {
        return param.replace('/', '');
      });
      params.forEach(function (param) {
        var paramName = param.replace(':', '');
        var paramValue = paramName in config.params ? config.params[paramName] : '';
        endpoint = endpoint.replace(param, paramValue).replace('//', '/');
      });
      var context = context_Context.getInstance();
      var suffix = context.options.http.suffix;
      if (suffix) endpoint += suffix;
      if (config.query) endpoint += "?".concat(Object.keys(config.query).map(function (k) {
        return "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(config.query[k]));
      }).join('&'));
      return endpoint;
    }
  }]);

  return Action;
}();


// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(4);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(8);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(15);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/orm/axios.js






var axios_Axios =
/*#__PURE__*/
function () {
  function Axios(http) {
    classCallCheck_default()(this, Axios);

    this.instance = external_axios_default.a.create(http);
    this.setAuthentication(http.access_token);
    this.instance.interceptors.request.use(function (config) {
      return http.onRequest(config);
    }, function (error) {
      return http.onError(error);
    });
    this.instance.interceptors.request.use(function (config) {
      return http.onRequest(config);
    }, function (error) {
      return http.onError(error);
    });
    return this.instance;
  }

  createClass_default()(Axios, [{
    key: "setAuthentication",
    value: function setAuthentication(token) {
      if (!token) return;
      var isFunction = typeof token === 'function';
      var tokenStr = isFunction ? token() : token;
      this.instance.defaults.headers.common['Authorization'] = "Bearer ".concat(tokenStr);
    }
    /**
     * Head Request
     * @param {string} url
     * @param {object} config
     */

  }, {
    key: "head",
    value: function () {
      var _head = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(url) {
        var config,
            _args = arguments;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                config = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                return _context.abrupt("return", this.instance.head(url, config));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function head(_x) {
        return _head.apply(this, arguments);
      }

      return head;
    }()
    /**
     * GET Request
     * @param {string} url
     * @param {object} config
     */

  }, {
    key: "get",
    value: function () {
      var _get = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(url) {
        var config,
            _args2 = arguments;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                config = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                return _context2.abrupt("return", this.instance.get(url, config));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function get(_x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
    /**
     * POST Request
     * @param {string} url
     * @param {object} config
     */

  }, {
    key: "post",
    value: function () {
      var _post = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(url) {
        var data,
            config,
            _args3 = arguments;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                config = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
                return _context3.abrupt("return", this.instance.post(url, data, config));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function post(_x3) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
    /**
     * PATCH Request
     * @param {string} url
     * @param {object} config
     */

  }, {
    key: "patch",
    value: function () {
      var _patch = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(url) {
        var data,
            config,
            _args4 = arguments;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
                config = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                return _context4.abrupt("return", this.instance.patch(url, data, config));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function patch(_x4) {
        return _patch.apply(this, arguments);
      }

      return patch;
    }()
    /**
     * PUT Request
     * @param {string} url
     * @param {object} config
     */

  }, {
    key: "put",
    value: function () {
      var _put = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5(url) {
        var data,
            config,
            _args5 = arguments;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                data = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
                config = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
                return _context5.abrupt("return", this.instance.put(url, data, config));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function put(_x5) {
        return _put.apply(this, arguments);
      }

      return put;
    }()
    /**
     * DELETE Request
     * @param {string} url
     * @param {object} config
     */

  }, {
    key: "delete",
    value: function () {
      var _delete2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee6(url) {
        var config,
            _args6 = arguments;
        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                config = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
                return _context6.abrupt("return", this.instance.delete(url, config));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _delete(_x6) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return Axios;
}();


// CONCATENATED MODULE: ./src/actions/Fetch.js











var Fetch_Fetch =
/*#__PURE__*/
function (_Action) {
  inherits_default()(Fetch, _Action);

  function Fetch() {
    classCallCheck_default()(this, Fetch);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Fetch).apply(this, arguments));
  }

  createClass_default()(Fetch, null, [{
    key: "call",

    /**
     * Call $fetch method
     * @param {object} store
     * @param {object} params
     */
    value: function () {
      var _call = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var _this = this;

        var state,
            commit,
            params,
            context,
            model,
            endpoint,
            axios,
            request,
            _args = arguments;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state = _ref.state, commit = _ref.commit;
                params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                context = context_Context.getInstance();
                model = context.getModelFromState(state);
                endpoint = Action_Action.transformParams('$fetch', model, params);
                axios = new axios_Axios(model.methodConf.http);
                request = axios.get(endpoint);
                this.onRequest(commit);
                request.then(function (data) {
                  return _this.onSuccess(commit, model, data);
                }).catch(function (error) {
                  return _this.onError(commit, error);
                });
                return _context.abrupt("return", request);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function call(_x) {
        return _call.apply(this, arguments);
      }

      return call;
    }()
    /**
     * On Request Method
     * @param {object} commit
     */

  }, {
    key: "onRequest",
    value: function onRequest(commit) {
      commit('onRequest');
    }
    /**
     * On Successful Request Method
     * @param {object} commit
     * @param {object} model
     * @param {object} data
     */

  }, {
    key: "onSuccess",
    value: function onSuccess(commit, model, data) {
      commit('onSuccess');
      model.insertOrUpdate({
        data: data
      });
    }
    /**
     * On Failed Request Method
     * @param {object} commit
     * @param {object} error
     */

  }, {
    key: "onError",
    value: function onError(commit, error) {
      commit('onError', error);
    }
  }]);

  return Fetch;
}(Action_Action);


// CONCATENATED MODULE: ./src/actions/Get.js











var Get_Get =
/*#__PURE__*/
function (_Action) {
  inherits_default()(Get, _Action);

  function Get() {
    classCallCheck_default()(this, Get);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Get).apply(this, arguments));
  }

  createClass_default()(Get, null, [{
    key: "call",

    /**
     * Call $get method
     * @param {object} store
     * @param {object} params
     */
    value: function () {
      var _call = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var _this = this;

        var state,
            commit,
            params,
            context,
            model,
            endpoint,
            axios,
            request,
            _args = arguments;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state = _ref.state, commit = _ref.commit;
                params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                context = context_Context.getInstance();
                model = context.getModelFromState(state);
                endpoint = Action_Action.transformParams('$get', model, params);
                axios = new axios_Axios(model.methodConf.http);
                request = axios.get(endpoint);
                this.onRequest(commit);
                request.then(function (data) {
                  return _this.onSuccess(commit, model, data);
                }).catch(function (error) {
                  return _this.onError(commit, error);
                });
                return _context.abrupt("return", request);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function call(_x) {
        return _call.apply(this, arguments);
      }

      return call;
    }()
    /**
     * On Request Method
     * @param {object} commit
     */

  }, {
    key: "onRequest",
    value: function onRequest(commit) {
      commit('onRequest');
    }
    /**
     * On Successful Request Method
     * @param {object} commit
     * @param {object} model
     * @param {object} data
     */

  }, {
    key: "onSuccess",
    value: function onSuccess(commit, model, data) {
      commit('onSuccess');
      model.insertOrUpdate({
        data: data
      });
    }
    /**
     * On Failed Request Method
     * @param {object} commit
     * @param {object} error
     */

  }, {
    key: "onError",
    value: function onError(commit, error) {
      commit('onError', error);
    }
  }]);

  return Get;
}(Action_Action);


// CONCATENATED MODULE: ./src/actions/Create.js












var Create_Create =
/*#__PURE__*/
function (_Action) {
  inherits_default()(Create, _Action);

  function Create() {
    classCallCheck_default()(this, Create);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Create).apply(this, arguments));
  }

  createClass_default()(Create, null, [{
    key: "call",

    /**
     * Call $create method
     * @param {object} store
     * @param {object} params
     */
    value: function () {
      var _call = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var _this = this;

        var state,
            commit,
            params,
            context,
            model,
            endpoint,
            axios,
            request,
            _args = arguments;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state = _ref.state, commit = _ref.commit;
                params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

                if (!(!params.data || Object(helpers_typeof["default"])(params) !== 'object')) {
                  _context.next = 4;
                  break;
                }

                throw new TypeError('You must include a data object in the params to send a POST request', params);

              case 4:
                context = context_Context.getInstance();
                model = context.getModelFromState(state);
                endpoint = Action_Action.transformParams('$create', model, params);
                axios = new axios_Axios(model.methodConf.http);
                request = axios.post(endpoint, params.data);
                this.onRequest(commit);
                request.then(function (data) {
                  return _this.onSuccess(commit, model, data);
                }).catch(function (error) {
                  return _this.onError(commit, error);
                });
                return _context.abrupt("return", request);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function call(_x) {
        return _call.apply(this, arguments);
      }

      return call;
    }()
    /**
     * On Request Method
     * @param {object} commit
     */

  }, {
    key: "onRequest",
    value: function onRequest(commit) {
      commit('onRequest');
    }
    /**
     * On Successful Request Method
     * @param {object} commit
     * @param {object} model
     * @param {object} data
     */

  }, {
    key: "onSuccess",
    value: function onSuccess(commit, model, data) {
      commit('onSuccess');
      model.insertOrUpdate({
        data: data
      });
    }
    /**
     * On Failed Request Method
     * @param {object} commit
     * @param {object} error
     */

  }, {
    key: "onError",
    value: function onError(commit, error) {
      commit('onError', error);
    }
  }]);

  return Create;
}(Action_Action);


// CONCATENATED MODULE: ./src/actions/Update.js













var Update_Update =
/*#__PURE__*/
function (_Action) {
  inherits_default()(Update, _Action);

  function Update() {
    classCallCheck_default()(this, Update);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Update).apply(this, arguments));
  }

  createClass_default()(Update, null, [{
    key: "call",

    /**
     * Call $update method
     * @param {object} store
     * @param {object} params
     * @param {boolean} save
     */
    value: function () {
      var _call = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var _this = this;

        var state,
            commit,
            params,
            context,
            model,
            endpoint,
            axios,
            request,
            _args = arguments;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state = _ref.state, commit = _ref.commit;
                params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {
                  save: true
                };

                if (!(!params.data || Object(helpers_typeof["default"])(params) !== 'object')) {
                  _context.next = 4;
                  break;
                }

                throw new TypeError('You must include a data object in the params to send a POST request', params);

              case 4:
                context = context_Context.getInstance();
                model = context.getModelFromState(state);
                endpoint = Action_Action.transformParams('$update', model, params);
                axios = new axios_Axios(model.methodConf.http);
                request = axios.put(endpoint, params.data);
                this.onRequest(model, params);
                request.then(function (data) {
                  return _this.onSuccess(model, params, data, params.save);
                }).catch(function (error) {
                  return _this.onError(model, params, error);
                });
                return _context.abrupt("return", request);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function call(_x) {
        return _call.apply(this, arguments);
      }

      return call;
    }()
    /**
     * On Request Method
     * @param {object} model
     * @param {object} params
     */

  }, {
    key: "onRequest",
    value: function onRequest(model, params) {
      model.update({
        where: params.params.id,
        data: {
          $isUpdating: true,
          $updateErrors: []
        }
      });
    }
    /**
     * On Successful Request Method
     * @param {object} model
     * @param {object} params
     * @param {object} data
     */

  }, {
    key: "onSuccess",
    value: function onSuccess(model, params, data, save) {
      if (save === true) {
        model.update({
          where: params.params.id || data.id,
          data: lodash_es_merge({}, data, {
            $isUpdating: false,
            $updateErrors: []
          })
        });
      }
    }
    /**
     * On Failed Request Method
     * @param {object} model
     * @param {object} params
     * @param {object} error
     */

  }, {
    key: "onError",
    value: function onError(model, params, error) {
      model.update({
        where: params.params.id,
        data: {
          $isUpdating: false,
          $updateErrors: error
        }
      });
    }
  }]);

  return Update;
}(Action_Action);


// CONCATENATED MODULE: ./src/actions/Delete.js











var Delete_Delete =
/*#__PURE__*/
function (_Action) {
  inherits_default()(Delete, _Action);

  function Delete() {
    classCallCheck_default()(this, Delete);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Delete).apply(this, arguments));
  }

  createClass_default()(Delete, null, [{
    key: "call",

    /**
     * Call $delete method
     * @param {object} store
     * @param {object} params
     */
    value: function () {
      var _call = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var _this = this;

        var state,
            commit,
            params,
            context,
            model,
            endpoint,
            axios,
            request,
            _args = arguments;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state = _ref.state, commit = _ref.commit;
                params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                context = context_Context.getInstance();
                model = context.getModelFromState(state);
                endpoint = Action_Action.transformParams('$delete', model, params);
                axios = new axios_Axios(model.methodConf.http);
                request = axios.delete(endpoint);
                this.onRequest(model, params);
                request.then(function (data) {
                  return _this.onSuccess(model, params, data);
                }).catch(function (error) {
                  return _this.onError(model, params, error);
                });
                return _context.abrupt("return", request);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function call(_x) {
        return _call.apply(this, arguments);
      }

      return call;
    }()
    /**
     * On Request Method
     * @param {object} model
     * @param {object} params
     */

  }, {
    key: "onRequest",
    value: function onRequest(model, params) {
      model.update({
        where: params.params.id,
        data: {
          $isDeleting: true,
          $deleteErrors: []
        }
      });
    }
    /**
     * On Successful Request Method
     * @param {object} model
     * @param {object} params
     * @param {object} data
     */

  }, {
    key: "onSuccess",
    value: function onSuccess(model, params, data) {
      model.delete({
        where: params.params.id || data.id
      });
    }
    /**
     * On Failed Request Method
     * @param {object} model
     * @param {object} params
     * @param {object} error
     */

  }, {
    key: "onError",
    value: function onError(model, params, error) {
      model.update({
        where: params.params.id,
        data: {
          $isDeleting: false,
          $deleteErrors: error
        }
      });
    }
  }]);

  return Delete;
}(Action_Action);


// CONCATENATED MODULE: ./src/vuex-orm-axios.js










var vuex_orm_axios_VuexOrmAxios =
/*#__PURE__*/
function () {
  /**
   * @constructor
   * @param {Components} components The Vuex-ORM Components collection
   * @param {Options} options The options passed to VuexORM.install
   */
  function VuexOrmAxios(components, options) {
    classCallCheck_default()(this, VuexOrmAxios);

    context_Context.setup(components, options);
    this.setupActions();
    this.setupModels();
  }
  /**
   * This method will setup following Vuex actions: $fetch, $get, $create, $update, $delete
   */


  createClass_default()(VuexOrmAxios, [{
    key: "setupActions",
    value: function setupActions() {
      var context = context_Context.getInstance();
      context.components.Actions.$fetch = Fetch_Fetch.call.bind(Fetch_Fetch);
      context.components.Actions.$get = Get_Get.call.bind(Get_Get);
      context.components.Actions.$create = Create_Create.call.bind(Create_Create);
      context.components.Actions.$update = Update_Update.call.bind(Update_Update);
      context.components.Actions.$delete = Delete_Delete.call.bind(Delete_Delete);
    }
    /**
     * This method will setup following model methods: Model.$fetch, Model.$get, Model.$create,
     * Model.$update, Model.$delete
     */

  }, {
    key: "setupModels",
    value: function setupModels() {
      var context = context_Context.getInstance();
      /**
       * Transform Model and Modules
       */

      context.database.entities.map(function (entity) {
        entity.module = Action_Action.transformModule(entity.module);
        entity.model = Action_Action.transformModel(entity.model);
        return entity;
      });

      context.components.Model.$fetch = function () {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this.dispatch('$fetch', config);
      };

      context.components.Model.$get = function () {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this.dispatch('$get', config);
      };

      context.components.Model.$create = function () {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this.dispatch('$create', config);
      };

      context.components.Model.$update = function () {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this.dispatch('$update', config);
      };

      context.components.Model.$delete = function () {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this.dispatch('$delete', config);
      };
    }
  }]);

  return VuexOrmAxios;
}();


// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return src_VuexOrmAxiosPlugin; });




var src_VuexOrmAxiosPlugin =
/*#__PURE__*/
function () {
  function VuexOrmAxiosPlugin() {
    classCallCheck_default()(this, VuexOrmAxiosPlugin);
  }

  createClass_default()(VuexOrmAxiosPlugin, null, [{
    key: "install",

    /**
     * This is called, when VuexORM.install(VuexOrmAxios, options) is called.
     *
     * @param {Components} components The Vuex-ORM Components collection
     * @param {Options} options The options passed to VuexORM.install
     * @returns {VuexOrmAxios}
     */
    value: function install(components, options) {
      return new vuex_orm_axios_VuexOrmAxios(components, options);
    }
  }]);

  return VuexOrmAxiosPlugin;
}();



/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map