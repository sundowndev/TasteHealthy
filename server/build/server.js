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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/app/response/api_error_response.js":
/*!***************************************************!*\
  !*** ./server/app/response/api_error_response.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (error, req, res, next) {\n  if (!res.finished) {\n    res.set('Content-Type', 'application/json; charset=utf-8');\n\n    if (error instanceof Error) {\n      req.logger.error({\n        route: \"\".concat(req.method, \" - \").concat(req.url),\n        message: error.stack\n      });\n      res.sendStatus(500);\n    } else {\n      error.message = 'Unknown Error';\n      res.status(404);\n      res.json({\n        success: false,\n        errorMessage: error.message,\n        errorCode: error.code\n      });\n      req.logger.warn({\n        route: \"\".concat(req.method, \" - \").concat(req.url),\n        message: error\n      });\n    }\n  }\n\n  return next();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvYXBwL3Jlc3BvbnNlL2FwaV9lcnJvcl9yZXNwb25zZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZlci9hcHAvcmVzcG9uc2UvYXBpX2Vycm9yX3Jlc3BvbnNlLmpzPzZjMDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZXJyb3IsIHJlcSwgcmVzLCBuZXh0KSB7XG4gIGlmICghcmVzLmZpbmlzaGVkKSB7XG4gICAgcmVzLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgcmVxLmxvZ2dlci5lcnJvcih7XG4gICAgICAgIHJvdXRlOiBgJHtyZXEubWV0aG9kfSAtICR7cmVxLnVybH1gLFxuICAgICAgICBtZXNzYWdlOiBlcnJvci5zdGFjayxcbiAgICAgIH0pO1xuICAgICAgcmVzLnNlbmRTdGF0dXMoNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3IubWVzc2FnZSA9ICdVbmtub3duIEVycm9yJztcbiAgICAgIHJlcy5zdGF0dXMoNDA0KTtcbiAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgZXJyb3JDb2RlOiBlcnJvci5jb2RlLFxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5sb2dnZXIud2Fybih7XG4gICAgICAgIHJvdXRlOiBgJHtyZXEubWV0aG9kfSAtICR7cmVxLnVybH1gLFxuICAgICAgICBtZXNzYWdlOiBlcnJvcixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXh0KCk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/app/response/api_error_response.js\n");

/***/ }),

/***/ "./server/app/response/api_response.js":
/*!*********************************************!*\
  !*** ./server/app/response/api_response.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, res, next) {\n  if (!res.finished) {\n    res.set('Content-Type', 'application/json; charset=utf-8');\n    if (!req.route) res.sendStatus(404);else {\n      var json = {\n        success: true\n      };\n\n      if (req.message) {\n        json.message = req.message;\n      }\n\n      if (req[\"return\"]) {\n        if (Array.isArray(req[\"return\"])) json.items = req[\"return\"];else json.item = req[\"return\"];\n      }\n\n      if (req.opts_return) {\n        json = Object.assign(json, req.opts_return);\n      }\n\n      res.status(req.status || 200);\n      res.json(json);\n    }\n  }\n\n  return next();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvYXBwL3Jlc3BvbnNlL2FwaV9yZXNwb25zZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZlci9hcHAvcmVzcG9uc2UvYXBpX3Jlc3BvbnNlLmpzP2JiMjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgaWYgKCFyZXMuZmluaXNoZWQpIHtcbiAgICByZXMuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xuICAgIGlmICghcmVxLnJvdXRlKSByZXMuc2VuZFN0YXR1cyg0MDQpO1xuICAgIGVsc2Uge1xuICAgICAgbGV0IGpzb24gPSB7IHN1Y2Nlc3M6IHRydWUgfTtcblxuICAgICAgaWYgKHJlcS5tZXNzYWdlKSB7XG4gICAgICAgIGpzb24ubWVzc2FnZSA9IHJlcS5tZXNzYWdlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVxLnJldHVybikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXEucmV0dXJuKSkganNvbi5pdGVtcyA9IHJlcS5yZXR1cm47XG4gICAgICAgIGVsc2UganNvbi5pdGVtID0gcmVxLnJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChyZXEub3B0c19yZXR1cm4pIHtcbiAgICAgICAganNvbiA9IE9iamVjdC5hc3NpZ24oanNvbiwgcmVxLm9wdHNfcmV0dXJuKTtcbiAgICAgIH1cblxuICAgICAgcmVzLnN0YXR1cyhyZXEuc3RhdHVzIHx8IDIwMCk7XG4gICAgICByZXMuanNvbihqc29uKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV4dCgpO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/app/response/api_response.js\n");

/***/ }),

/***/ "./server/app/routes/products.js":
/*!***************************************!*\
  !*** ./server/app/routes/products.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _products_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/get */ \"./server/app/routes/products/get.js\");\n\n\nvar router = new express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/').get(_products_get__WEBPACK_IMPORTED_MODULE_1__[\"get_products\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvYXBwL3JvdXRlcy9wcm9kdWN0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZlci9hcHAvcm91dGVzL3Byb2R1Y3RzLmpzP2FmMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbmltcG9ydCAqIGFzIGdldCBmcm9tICcuL3Byb2R1Y3RzL2dldCc7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIucm91dGUoJy8nKS5nZXQoZ2V0LmdldF9wcm9kdWN0cyk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/app/routes/products.js\n");

/***/ }),

/***/ "./server/app/routes/products/get.js":
/*!*******************************************!*\
  !*** ./server/app/routes/products/get.js ***!
  \*******************************************/
/*! exports provided: get_products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_products\", function() { return get_products; });\nvar get_products = function get_products(req, res, next) {\n  req.message = 'ok l\\'élite';\n  req[\"return\"] = {\n    a: 1\n  };\n  return next();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvYXBwL3JvdXRlcy9wcm9kdWN0cy9nZXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvYXBwL3JvdXRlcy9wcm9kdWN0cy9nZXQuanM/NDU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0X3Byb2R1Y3RzID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcS5tZXNzYWdlID0gJ29rIGxcXCfDqWxpdGUnO1xuICByZXEucmV0dXJuID0geyBhOiAxIH07XG5cbiAgcmV0dXJuIG5leHQoKTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/app/routes/products/get.js\n");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_response_api_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/response/api_response */ \"./server/app/response/api_response.js\");\n/* harmony import */ var _app_response_api_error_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/response/api_error_response */ \"./server/app/response/api_error_response.js\");\n/* harmony import */ var _app_routes_products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/routes/products */ \"./server/app/routes/products.js\");\n// Externals libraries\n\n\n\n // Internals libraries\n// import initializeExpressArgument from '@/common/initialize-express-argument';\n\n\n // Routes\n\n // ---------- GLOBALS ----------\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()(); // ---------- INITIALIZE DATABASE ----------\n\napp.use(helmet__WEBPACK_IMPORTED_MODULE_0___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json()); // app.use(queryParser());\n// ---------- CONFIGURATION HEADERS HTTP ----------\n// app.use(config_headers);\n// app.use(mandatory_headers);\n// ROUTES\n\napp.use('/products', _app_routes_products__WEBPACK_IMPORTED_MODULE_6__[\"default\"]); // ---------- RESPONSE ----------\n// SUCCESS\n\napp.use(_app_response_api_response__WEBPACK_IMPORTED_MODULE_4__[\"default\"]); // ERROR\n\napp.use(_app_response_api_error_response__WEBPACK_IMPORTED_MODULE_5__[\"default\"]); // ---------- SERVER ----------\n\nvar port = process.env.PORT || '3000';\napp.set('port', port);\nvar server = http__WEBPACK_IMPORTED_MODULE_3___default.a.createServer(app);\nserver.listen(port, function () {\n  var host = server.address().address;\n  var port = server.address().port;\n  process.stdout.write(\"running at http://\".concat(host, \":\").concat(port, \"\\n\"));\n  return;\n}).on('error', console.error);\nprocess.on('SIGINT', function () {\n  process.exit(-1);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaW5kZXguanM/MGE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHRlcm5hbHMgbGlicmFyaWVzXG5pbXBvcnQgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuXG4vLyBJbnRlcm5hbHMgbGlicmFyaWVzXG4vLyBpbXBvcnQgaW5pdGlhbGl6ZUV4cHJlc3NBcmd1bWVudCBmcm9tICdAL2NvbW1vbi9pbml0aWFsaXplLWV4cHJlc3MtYXJndW1lbnQnO1xuaW1wb3J0IGFwaV9yZXNwb25zZSBmcm9tICcuL2FwcC9yZXNwb25zZS9hcGlfcmVzcG9uc2UnO1xuaW1wb3J0IGFwaV9yZXNwb25zZV9lcnJvciBmcm9tICcuL2FwcC9yZXNwb25zZS9hcGlfZXJyb3JfcmVzcG9uc2UnO1xuXG4vLyBSb3V0ZXNcbmltcG9ydCBwcm9kdWN0cyBmcm9tICcuL2FwcC9yb3V0ZXMvcHJvZHVjdHMnO1xuXG4vLyAtLS0tLS0tLS0tIEdMT0JBTFMgLS0tLS0tLS0tLVxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vLyAtLS0tLS0tLS0tIElOSVRJQUxJWkUgREFUQUJBU0UgLS0tLS0tLS0tLVxuYXBwLnVzZShoZWxtZXQoKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuLy8gYXBwLnVzZShxdWVyeVBhcnNlcigpKTtcblxuLy8gLS0tLS0tLS0tLSBDT05GSUdVUkFUSU9OIEhFQURFUlMgSFRUUCAtLS0tLS0tLS0tXG4vLyBhcHAudXNlKGNvbmZpZ19oZWFkZXJzKTtcbi8vIGFwcC51c2UobWFuZGF0b3J5X2hlYWRlcnMpO1xuXG4vLyBST1VURVNcbmFwcC51c2UoJy9wcm9kdWN0cycsIHByb2R1Y3RzKTtcblxuLy8gLS0tLS0tLS0tLSBSRVNQT05TRSAtLS0tLS0tLS0tXG4vLyBTVUNDRVNTXG5hcHAudXNlKGFwaV9yZXNwb25zZSk7XG4vLyBFUlJPUlxuYXBwLnVzZShhcGlfcmVzcG9uc2VfZXJyb3IpO1xuXG4vLyAtLS0tLS0tLS0tIFNFUlZFUiAtLS0tLS0tLS0tXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAnMzAwMCc7XG5cbmFwcC5zZXQoJ3BvcnQnLCBwb3J0KTtcblxuY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcblxuc2VydmVyXG4gIC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICAgIGNvbnN0IGhvc3QgPSBzZXJ2ZXIuYWRkcmVzcygpLmFkZHJlc3M7XG4gICAgY29uc3QgcG9ydCA9IHNlcnZlci5hZGRyZXNzKCkucG9ydDtcblxuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGBydW5uaW5nIGF0IGh0dHA6Ly8ke2hvc3R9OiR7cG9ydH1cXG5gKTtcbiAgICByZXR1cm47XG4gIH0pXG4gIC5vbignZXJyb3InLCBjb25zb2xlLmVycm9yKTtcblxucHJvY2Vzcy5vbignU0lHSU5UJywgKCkgPT4ge1xuICBwcm9jZXNzLmV4aXQoLTEpO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/index.js\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbWV0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGVsbWV0XCI/YWFlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZWxtZXRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///helmet\n");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIj84ZDE5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///http\n");

/***/ })

/******/ });