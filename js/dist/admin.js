/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "./src/common/index.ts");


flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add(_common__WEBPACK_IMPORTED_MODULE_1__.extPrefix, function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"](_common__WEBPACK_IMPORTED_MODULE_1__.extPrefix)
  // 添加权限 哪些用户组可以点击按钮
  .registerPermission({
    icon: 'far fa-thumbs-down',
    label: (0,_common__WEBPACK_IMPORTED_MODULE_1__.trans)('admin.permissions.set-spam'),
    permission: (0,_common__WEBPACK_IMPORTED_MODULE_1__.key)('setSpam')
  }, 'reply')
  // 向哪些用户展示标记 spam 数量
  .registerPermission({
    icon: 'far fa-eye',
    label: (0,_common__WEBPACK_IMPORTED_MODULE_1__.trans)('admin.permissions.see-spam-info'),
    permission: (0,_common__WEBPACK_IMPORTED_MODULE_1__.key)('seeSpamInfo')
  }, 'reply')

  // 注册配置 按钮名自定义
  .registerSetting({
    setting: (0,_common__WEBPACK_IMPORTED_MODULE_1__.key)('btn-name'),
    type: 'text',
    label: (0,_common__WEBPACK_IMPORTED_MODULE_1__.trans)('admin.settings.btn-name'),
    help: (0,_common__WEBPACK_IMPORTED_MODULE_1__.trans)('.admin.settings.btn-name-help')
  })
  // 配置项 被点多少次自动折叠 0 为不折叠
  .registerSetting({
    setting: (0,_common__WEBPACK_IMPORTED_MODULE_1__.key)('to-folding-number'),
    type: 'number',
    label: (0,_common__WEBPACK_IMPORTED_MODULE_1__.trans)('.admin.settings.to-folding-number'),
    help: (0,_common__WEBPACK_IMPORTED_MODULE_1__.trans)('.admin.settings.to-folding-number-help')
  });
});

/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   extPrefix: () => (/* binding */ extPrefix),
/* harmony export */   key: () => (/* binding */ key),
/* harmony export */   trans: () => (/* binding */ trans)
/* harmony export */ });
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 统一前缀
 */
var extPrefix = 'imdong-spam-alert';

/**
 * 获取一个 key
 * @param key
 */
function key(key) {
  return extPrefix + "." + key.replace(/^\.*/, '');
}

/**
 * 获取特定 key 的翻译
 * @param id
 * @param parameters
 */
function trans(id, parameters) {
  if (parameters === void 0) {
    parameters = {};
  }
  return flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(key(id), parameters);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  extPrefix: extPrefix,
  key: key,
  trans: trans
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extPrefix: () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.extPrefix),
/* harmony export */   key: () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.key),
/* harmony export */   trans: () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.trans)
/* harmony export */ });
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map