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

/***/ "./server/app/db/db.connect.js":
/*!*************************************!*\
  !*** ./server/app/db/db.connect.js ***!
  \*************************************/
/*! exports provided: client, connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"client\", function() { return client; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connect\", function() { return connect; });\nvar _require = __webpack_require__(/*! pg */ \"pg\"),\n    Client = _require.Client;\n\nvar dbDns = {\n  user: 'postgres',\n  host: 'localhost',\n  database: 'tastehealthy',\n  password: 'tastehealthy',\n  port: 3306\n};\nvar client = new Client(dbDns);\n\nfunction connect() {\n  return new Promise(function (resolve, reject) {\n    client.connect().catch(function (error) {\n      throw new Error(error);\n    }).then(resolve).catch(function (error) {\n      return reject(error);\n    });\n  });\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvYXBwL2RiL2RiLmNvbm5lY3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvYXBwL2RiL2RiLmNvbm5lY3QuanM/Y2Q0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IENsaWVudCB9ID0gcmVxdWlyZSgncGcnKTtcblxuY29uc3QgZGJEbnMgPSB7XG4gIHVzZXI6ICdwb3N0Z3JlcycsXG4gIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICBkYXRhYmFzZTogJ3Rhc3RlaGVhbHRoeScsXG4gIHBhc3N3b3JkOiAndGFzdGVoZWFsdGh5JyxcbiAgcG9ydDogMzMwNixcbn07XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoZGJEbnMpO1xuXG5mdW5jdGlvbiBjb25uZWN0KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNsaWVudFxuICAgICAgLmNvbm5lY3QoKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGNsaWVudCwgY29ubmVjdCB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/app/db/db.connect.js\n");

/***/ }),

/***/ "./server/app/response/api_error_response.js":
/*!***************************************************!*\
  !*** ./server/app/response/api_error_response.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (error, req, res, next) {\n  if (!res.finished) {\n    res.set('Content-Type', 'application/json; charset=utf-8');\n\n    if (error instanceof Error) {\n      // req.logger.error({\n      //   route: `${req.method} - ${req.url}`,\n      //   message: error.stack,\n      // });\n      res.sendStatus(500);\n    } else {\n      res.status(404);\n      res.json({\n        success: false,\n        errorMessage: error.message || 'Unknown Error',\n        errorCode: error.code\n      }); // req.logger.warn({\n      //   route: `${req.method} - ${req.url}`,\n      //   message: error,\n      // });\n    }\n  }\n\n  return next();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvYXBwL3Jlc3BvbnNlL2FwaV9lcnJvcl9yZXNwb25zZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZlci9hcHAvcmVzcG9uc2UvYXBpX2Vycm9yX3Jlc3BvbnNlLmpzPzZjMDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZXJyb3IsIHJlcSwgcmVzLCBuZXh0KSB7XG4gIGlmICghcmVzLmZpbmlzaGVkKSB7XG4gICAgcmVzLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gcmVxLmxvZ2dlci5lcnJvcih7XG4gICAgICAvLyAgIHJvdXRlOiBgJHtyZXEubWV0aG9kfSAtICR7cmVxLnVybH1gLFxuICAgICAgLy8gICBtZXNzYWdlOiBlcnJvci5zdGFjayxcbiAgICAgIC8vIH0pO1xuICAgICAgcmVzLnNlbmRTdGF0dXMoNTAwKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXMuc3RhdHVzKDQwNCk7XG4gICAgICByZXMuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ1Vua25vd24gRXJyb3InLFxuICAgICAgICBlcnJvckNvZGU6IGVycm9yLmNvZGUsXG4gICAgICB9KTtcblxuICAgICAgLy8gcmVxLmxvZ2dlci53YXJuKHtcbiAgICAgIC8vICAgcm91dGU6IGAke3JlcS5tZXRob2R9IC0gJHtyZXEudXJsfWAsXG4gICAgICAvLyAgIG1lc3NhZ2U6IGVycm9yLFxuICAgICAgLy8gfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5leHQoKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/app/response/api_error_response.js\n");

/***/ }),

/***/ "./server/app/response/api_response.js":
/*!*********************************************!*\
  !*** ./server/app/response/api_response.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, res, next) {\n  if (!res.finished) {\n    res.set('Content-Type', 'application/json; charset=utf-8');\n    if (!req.route) res.sendStatus(404);else {\n      var json = {\n        success: true\n      };\n\n      if (req.message) {\n        json.message = req.message;\n      }\n\n      if (req.limit) {\n        json.limit = req.limit;\n      }\n\n      if (req.page) {\n        json.page = req.page || 0;\n        json.offset = req.offset || 0;\n      }\n\n      if (req.results) {\n        json.results = req.results;\n      }\n\n      if (req.return) {\n        if (Array.isArray(req.return)) json.items = req.return;else json.item = req.return;\n      }\n\n      if (req.opts_return) {\n        json = Object.assign(json, req.opts_return);\n      }\n\n      res.status(req.status || 200);\n      res.json(json);\n    }\n  }\n\n  return next();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvYXBwL3Jlc3BvbnNlL2FwaV9yZXNwb25zZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZlci9hcHAvcmVzcG9uc2UvYXBpX3Jlc3BvbnNlLmpzP2JiMjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgaWYgKCFyZXMuZmluaXNoZWQpIHtcbiAgICByZXMuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xuICAgIGlmICghcmVxLnJvdXRlKSByZXMuc2VuZFN0YXR1cyg0MDQpO1xuICAgIGVsc2Uge1xuICAgICAgbGV0IGpzb24gPSB7IHN1Y2Nlc3M6IHRydWUgfTtcblxuICAgICAgaWYgKHJlcS5tZXNzYWdlKSB7XG4gICAgICAgIGpzb24ubWVzc2FnZSA9IHJlcS5tZXNzYWdlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVxLmxpbWl0KSB7XG4gICAgICAgIGpzb24ubGltaXQgPSByZXEubGltaXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXEucGFnZSkge1xuICAgICAgICBqc29uLnBhZ2UgPSByZXEucGFnZSB8fCAwO1xuICAgICAgICBqc29uLm9mZnNldCA9IHJlcS5vZmZzZXQgfHwgMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlcS5yZXN1bHRzKSB7XG4gICAgICAgIGpzb24ucmVzdWx0cyA9IHJlcS5yZXN1bHRzO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVxLnJldHVybikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXEucmV0dXJuKSkganNvbi5pdGVtcyA9IHJlcS5yZXR1cm47XG4gICAgICAgIGVsc2UganNvbi5pdGVtID0gcmVxLnJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChyZXEub3B0c19yZXR1cm4pIHtcbiAgICAgICAganNvbiA9IE9iamVjdC5hc3NpZ24oanNvbiwgcmVxLm9wdHNfcmV0dXJuKTtcbiAgICAgIH1cblxuICAgICAgcmVzLnN0YXR1cyhyZXEuc3RhdHVzIHx8IDIwMCk7XG4gICAgICByZXMuanNvbihqc29uKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV4dCgpO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/app/response/api_response.js\n");

/***/ }),

/***/ "./server/app/routes/products.js":
/*!***************************************!*\
  !*** ./server/app/routes/products.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _products_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/get */ \"./server/app/routes/products/get.js\");\n\n // import * as schema from '../schemas/products';\n\nvar router = new express__WEBPACK_IMPORTED_MODULE_0___default.a.Router(); // router.route('/search').get(get.get_products_by_keywords);\n\nrouter.route('/').get(_products_get__WEBPACK_IMPORTED_MODULE_1__[\"get_products\"]);\nrouter.route('/:productId').get(_products_get__WEBPACK_IMPORTED_MODULE_1__[\"get_one_product\"]);\nrouter.route('/:productId/nutrition_facts').get(_products_get__WEBPACK_IMPORTED_MODULE_1__[\"get_one_product_facts\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvYXBwL3JvdXRlcy9wcm9kdWN0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZlci9hcHAvcm91dGVzL3Byb2R1Y3RzLmpzP2FmMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbmltcG9ydCAqIGFzIGdldCBmcm9tICcuL3Byb2R1Y3RzL2dldCc7XG4vLyBpbXBvcnQgKiBhcyBzY2hlbWEgZnJvbSAnLi4vc2NoZW1hcy9wcm9kdWN0cyc7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBleHByZXNzLlJvdXRlcigpO1xuXG4vLyByb3V0ZXIucm91dGUoJy9zZWFyY2gnKS5nZXQoZ2V0LmdldF9wcm9kdWN0c19ieV9rZXl3b3Jkcyk7XG5cbnJvdXRlci5yb3V0ZSgnLycpLmdldChnZXQuZ2V0X3Byb2R1Y3RzKTtcblxucm91dGVyLnJvdXRlKCcvOnByb2R1Y3RJZCcpLmdldChnZXQuZ2V0X29uZV9wcm9kdWN0KTtcblxucm91dGVyLnJvdXRlKCcvOnByb2R1Y3RJZC9udXRyaXRpb25fZmFjdHMnKS5nZXQoZ2V0LmdldF9vbmVfcHJvZHVjdF9mYWN0cyk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/app/routes/products.js\n");

/***/ }),

/***/ "./server/app/routes/products/get.js":
/*!*******************************************!*\
  !*** ./server/app/routes/products/get.js ***!
  \*******************************************/
/*! exports provided: get_products, get_one_product, get_one_product_facts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_products\", function() { return get_products; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_one_product\", function() { return get_one_product; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_one_product_facts\", function() { return get_one_product_facts; });\n/* harmony import */ var _db_db_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/db.connect */ \"./server/app/db/db.connect.js\");\n\nvar products_fields = ['id', 'code', 'url', 'creator', 'created_datetime', 'last_modified_datetime', 'product_name', 'generic_name', 'quantity', 'image_url', 'category_id', 'packaging', 'packaging_tags', 'brands', 'brands_tags', 'origins', 'manufacturing_places', 'manufacturing_places_tags', 'countries_tags'];\nvar product_nutrition_facts_fields = ['product_id', 'energy_100g', 'energy_from_fat_100g', 'fat_100g', 'saturated_fat_100g', 'butyric_acid_100g', 'caproic_acid_100g', 'caprylic_acid_100g', 'capric_acid_100g', 'lauric_acid_100g', 'myristic_acid_100g', 'palmitic_acid_100g', 'stearic_acid_100g', 'arachidic_acid_100g', 'behenic_acid_100g', 'lignoceric_acid_100g', 'cerotic_acid_100g', 'montanic_acid_100g', 'melissic_acid_100g', 'monounsaturated_fat_100g', 'polyunsaturated_fat_100g', 'omega_3_fat_100g', 'alpha_linolenic_acid_100g', 'eicosapentaenoic_acid_100g', 'docosahexaenoic_acid_100g', 'omega_6_fat_100g', 'linoleic_acid_100g', 'arachidonic_acid_100g', 'gamma_linolenic_acid_100g', 'dihomo_gamma_linolenic_acid_100g', 'omega_9_fat_100g', 'oleic_acid_100g', 'elaidic_acid_100g', 'gondoic_acid_100g', 'mead_acid_100g', 'erucic_acid_100g', 'nervonic_acid_100g', 'trans_fat_100g', 'cholesterol_100g', 'carbohydrates_100g', 'sugars_100g', 'sucrose_100g', 'glucose_100g', 'fructose_100g', 'lactose_100g', 'maltose_100g', 'maltodextrins_100g', 'starch_100g', 'polyols_100g', 'fiber_100g', 'proteins_100g', 'casein_100g', 'serum_proteins_100g', 'nucleotides_100g', 'salt_100g', 'sodium_100g', 'alcohol_100g', 'vitamin_a_100g', 'beta_carotene_100g', 'vitamin_d_100g', 'vitamin_e_100g', 'vitamin_k_100g', 'vitamin_c_100g', 'vitamin_b1_100g', 'vitamin_b2_100g', 'vitamin_pp_100g', 'vitamin_b6_100g', 'vitamin_b9_100g', 'folates_100g', 'vitamin_b12_100g', 'biotin_100g', 'pantothenic_acid_100g', 'silica_100g', 'bicarbonate_100g', 'potassium_100g', 'chloride_100g', 'calcium_100g', 'phosphorus_100g', 'iron_100g', 'magnesium_100g', 'zinc_100g', 'copper_100g', 'manganese_100g', 'fluoride_100g', 'selenium_100g', 'chromium_100g', 'molybdenum_100g', 'iodine_100g', 'caffeine_100g', 'taurine_100g', 'ph_100g', 'fruits_vegetables_nuts_100g', 'fruits_vegetables_nuts_dried_100g', 'fruits_vegetables_nuts_estimate_100g', 'collagen_meat_protein_ratio_100g', 'cocoa_100g', 'chlorophyl_100g', 'carbon_footprint_100g', 'carbon_footprint_from_meat_or_fish_100g', 'nutrition_score_fr_100g', 'nutrition_score_uk_100g', 'glycemic_index_100g', 'water_hardness_100g', 'choline_100g', 'phylloquinone_100g', 'beta_glucan_100g', 'inositol_100g', 'carnitine_100g'];\nvar get_products = function get_products(req, res, next) {\n  req.limit = 20;\n  req.page = req.query.page || 1;\n  req.offset = (req.page - 1) * req.limit;\n  var query = null;\n  var params = [];\n\n  if (req.query.query) {\n    query = \"SELECT\\n    \".concat(products_fields.join(','), \"\\n    FROM products WHERE product_name ~ $1 LIMIT \").concat(req.limit, \" OFFSET \").concat(req.offset);\n    params = [req.query.query];\n  } else {\n    query = \"SELECT\\n    \".concat(products_fields.join(','), \"\\n    FROM products ORDER BY id DESC LIMIT \").concat(req.limit, \" OFFSET \").concat(req.offset);\n  }\n\n  _db_db_connect__WEBPACK_IMPORTED_MODULE_0__[\"client\"].query(query, params).then(function (res) {\n    req.results = res.rows.length;\n    req.return = res.rows || [];\n  }).then(next);\n};\nvar get_one_product = function get_one_product(req, res, next) {\n  _db_db_connect__WEBPACK_IMPORTED_MODULE_0__[\"client\"].query(\"SELECT \".concat(products_fields.join(','), \" FROM products WHERE id = $1\"), [req.params.productId]).then(function (res) {\n    if (!res.rows[0]) {\n      return next({\n        code: 404,\n        message: 'Product not found'\n      });\n    }\n\n    req.return = res.rows[0] || {};\n  }).then(next);\n};\nvar get_one_product_facts = function get_one_product_facts(req, res, next) {\n  _db_db_connect__WEBPACK_IMPORTED_MODULE_0__[\"client\"].query(\"SELECT \".concat(product_nutrition_facts_fields.join(','), \" FROM product_nutrition_facts WHERE product_id = $1\"), [req.params.productId]).then(function (res) {\n    if (!res.rows[0]) {\n      return next({\n        code: 404,\n        message: 'Product not found'\n      });\n    }\n\n    req.return = res.rows[0] || {};\n  }).then(next);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvYXBwL3JvdXRlcy9wcm9kdWN0cy9nZXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvYXBwL3JvdXRlcy9wcm9kdWN0cy9nZXQuanM/NDU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGllbnQgfSBmcm9tICdAL2RiL2RiLmNvbm5lY3QnO1xuXG5jb25zdCBwcm9kdWN0c19maWVsZHMgPSBbXG4gICdpZCcsXG4gICdjb2RlJyxcbiAgJ3VybCcsXG4gICdjcmVhdG9yJyxcbiAgJ2NyZWF0ZWRfZGF0ZXRpbWUnLFxuICAnbGFzdF9tb2RpZmllZF9kYXRldGltZScsXG4gICdwcm9kdWN0X25hbWUnLFxuICAnZ2VuZXJpY19uYW1lJyxcbiAgJ3F1YW50aXR5JyxcbiAgJ2ltYWdlX3VybCcsXG4gICdjYXRlZ29yeV9pZCcsXG4gICdwYWNrYWdpbmcnLFxuICAncGFja2FnaW5nX3RhZ3MnLFxuICAnYnJhbmRzJyxcbiAgJ2JyYW5kc190YWdzJyxcbiAgJ29yaWdpbnMnLFxuICAnbWFudWZhY3R1cmluZ19wbGFjZXMnLFxuICAnbWFudWZhY3R1cmluZ19wbGFjZXNfdGFncycsXG4gICdjb3VudHJpZXNfdGFncycsXG5dO1xuY29uc3QgcHJvZHVjdF9udXRyaXRpb25fZmFjdHNfZmllbGRzID0gW1xuICAncHJvZHVjdF9pZCcsXG4gICdlbmVyZ3lfMTAwZycsXG4gICdlbmVyZ3lfZnJvbV9mYXRfMTAwZycsXG4gICdmYXRfMTAwZycsXG4gICdzYXR1cmF0ZWRfZmF0XzEwMGcnLFxuICAnYnV0eXJpY19hY2lkXzEwMGcnLFxuICAnY2Fwcm9pY19hY2lkXzEwMGcnLFxuICAnY2FwcnlsaWNfYWNpZF8xMDBnJyxcbiAgJ2NhcHJpY19hY2lkXzEwMGcnLFxuICAnbGF1cmljX2FjaWRfMTAwZycsXG4gICdteXJpc3RpY19hY2lkXzEwMGcnLFxuICAncGFsbWl0aWNfYWNpZF8xMDBnJyxcbiAgJ3N0ZWFyaWNfYWNpZF8xMDBnJyxcbiAgJ2FyYWNoaWRpY19hY2lkXzEwMGcnLFxuICAnYmVoZW5pY19hY2lkXzEwMGcnLFxuICAnbGlnbm9jZXJpY19hY2lkXzEwMGcnLFxuICAnY2Vyb3RpY19hY2lkXzEwMGcnLFxuICAnbW9udGFuaWNfYWNpZF8xMDBnJyxcbiAgJ21lbGlzc2ljX2FjaWRfMTAwZycsXG4gICdtb25vdW5zYXR1cmF0ZWRfZmF0XzEwMGcnLFxuICAncG9seXVuc2F0dXJhdGVkX2ZhdF8xMDBnJyxcbiAgJ29tZWdhXzNfZmF0XzEwMGcnLFxuICAnYWxwaGFfbGlub2xlbmljX2FjaWRfMTAwZycsXG4gICdlaWNvc2FwZW50YWVub2ljX2FjaWRfMTAwZycsXG4gICdkb2Nvc2FoZXhhZW5vaWNfYWNpZF8xMDBnJyxcbiAgJ29tZWdhXzZfZmF0XzEwMGcnLFxuICAnbGlub2xlaWNfYWNpZF8xMDBnJyxcbiAgJ2FyYWNoaWRvbmljX2FjaWRfMTAwZycsXG4gICdnYW1tYV9saW5vbGVuaWNfYWNpZF8xMDBnJyxcbiAgJ2RpaG9tb19nYW1tYV9saW5vbGVuaWNfYWNpZF8xMDBnJyxcbiAgJ29tZWdhXzlfZmF0XzEwMGcnLFxuICAnb2xlaWNfYWNpZF8xMDBnJyxcbiAgJ2VsYWlkaWNfYWNpZF8xMDBnJyxcbiAgJ2dvbmRvaWNfYWNpZF8xMDBnJyxcbiAgJ21lYWRfYWNpZF8xMDBnJyxcbiAgJ2VydWNpY19hY2lkXzEwMGcnLFxuICAnbmVydm9uaWNfYWNpZF8xMDBnJyxcbiAgJ3RyYW5zX2ZhdF8xMDBnJyxcbiAgJ2Nob2xlc3Rlcm9sXzEwMGcnLFxuICAnY2FyYm9oeWRyYXRlc18xMDBnJyxcbiAgJ3N1Z2Fyc18xMDBnJyxcbiAgJ3N1Y3Jvc2VfMTAwZycsXG4gICdnbHVjb3NlXzEwMGcnLFxuICAnZnJ1Y3Rvc2VfMTAwZycsXG4gICdsYWN0b3NlXzEwMGcnLFxuICAnbWFsdG9zZV8xMDBnJyxcbiAgJ21hbHRvZGV4dHJpbnNfMTAwZycsXG4gICdzdGFyY2hfMTAwZycsXG4gICdwb2x5b2xzXzEwMGcnLFxuICAnZmliZXJfMTAwZycsXG4gICdwcm90ZWluc18xMDBnJyxcbiAgJ2Nhc2Vpbl8xMDBnJyxcbiAgJ3NlcnVtX3Byb3RlaW5zXzEwMGcnLFxuICAnbnVjbGVvdGlkZXNfMTAwZycsXG4gICdzYWx0XzEwMGcnLFxuICAnc29kaXVtXzEwMGcnLFxuICAnYWxjb2hvbF8xMDBnJyxcbiAgJ3ZpdGFtaW5fYV8xMDBnJyxcbiAgJ2JldGFfY2Fyb3RlbmVfMTAwZycsXG4gICd2aXRhbWluX2RfMTAwZycsXG4gICd2aXRhbWluX2VfMTAwZycsXG4gICd2aXRhbWluX2tfMTAwZycsXG4gICd2aXRhbWluX2NfMTAwZycsXG4gICd2aXRhbWluX2IxXzEwMGcnLFxuICAndml0YW1pbl9iMl8xMDBnJyxcbiAgJ3ZpdGFtaW5fcHBfMTAwZycsXG4gICd2aXRhbWluX2I2XzEwMGcnLFxuICAndml0YW1pbl9iOV8xMDBnJyxcbiAgJ2ZvbGF0ZXNfMTAwZycsXG4gICd2aXRhbWluX2IxMl8xMDBnJyxcbiAgJ2Jpb3Rpbl8xMDBnJyxcbiAgJ3BhbnRvdGhlbmljX2FjaWRfMTAwZycsXG4gICdzaWxpY2FfMTAwZycsXG4gICdiaWNhcmJvbmF0ZV8xMDBnJyxcbiAgJ3BvdGFzc2l1bV8xMDBnJyxcbiAgJ2NobG9yaWRlXzEwMGcnLFxuICAnY2FsY2l1bV8xMDBnJyxcbiAgJ3Bob3NwaG9ydXNfMTAwZycsXG4gICdpcm9uXzEwMGcnLFxuICAnbWFnbmVzaXVtXzEwMGcnLFxuICAnemluY18xMDBnJyxcbiAgJ2NvcHBlcl8xMDBnJyxcbiAgJ21hbmdhbmVzZV8xMDBnJyxcbiAgJ2ZsdW9yaWRlXzEwMGcnLFxuICAnc2VsZW5pdW1fMTAwZycsXG4gICdjaHJvbWl1bV8xMDBnJyxcbiAgJ21vbHliZGVudW1fMTAwZycsXG4gICdpb2RpbmVfMTAwZycsXG4gICdjYWZmZWluZV8xMDBnJyxcbiAgJ3RhdXJpbmVfMTAwZycsXG4gICdwaF8xMDBnJyxcbiAgJ2ZydWl0c192ZWdldGFibGVzX251dHNfMTAwZycsXG4gICdmcnVpdHNfdmVnZXRhYmxlc19udXRzX2RyaWVkXzEwMGcnLFxuICAnZnJ1aXRzX3ZlZ2V0YWJsZXNfbnV0c19lc3RpbWF0ZV8xMDBnJyxcbiAgJ2NvbGxhZ2VuX21lYXRfcHJvdGVpbl9yYXRpb18xMDBnJyxcbiAgJ2NvY29hXzEwMGcnLFxuICAnY2hsb3JvcGh5bF8xMDBnJyxcbiAgJ2NhcmJvbl9mb290cHJpbnRfMTAwZycsXG4gICdjYXJib25fZm9vdHByaW50X2Zyb21fbWVhdF9vcl9maXNoXzEwMGcnLFxuICAnbnV0cml0aW9uX3Njb3JlX2ZyXzEwMGcnLFxuICAnbnV0cml0aW9uX3Njb3JlX3VrXzEwMGcnLFxuICAnZ2x5Y2VtaWNfaW5kZXhfMTAwZycsXG4gICd3YXRlcl9oYXJkbmVzc18xMDBnJyxcbiAgJ2Nob2xpbmVfMTAwZycsXG4gICdwaHlsbG9xdWlub25lXzEwMGcnLFxuICAnYmV0YV9nbHVjYW5fMTAwZycsXG4gICdpbm9zaXRvbF8xMDBnJyxcbiAgJ2Nhcm5pdGluZV8xMDBnJyxcbl07XG5cbmV4cG9ydCBjb25zdCBnZXRfcHJvZHVjdHMgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgcmVxLmxpbWl0ID0gMjA7XG4gIHJlcS5wYWdlID0gcmVxLnF1ZXJ5LnBhZ2UgfHwgMTtcbiAgcmVxLm9mZnNldCA9IChyZXEucGFnZSAtIDEpICogcmVxLmxpbWl0O1xuXG4gIGxldCBxdWVyeSA9IG51bGw7XG4gIGxldCBwYXJhbXMgPSBbXTtcblxuICBpZiAocmVxLnF1ZXJ5LnF1ZXJ5KSB7XG4gICAgcXVlcnkgPSBgU0VMRUNUXG4gICAgJHtwcm9kdWN0c19maWVsZHMuam9pbignLCcpfVxuICAgIEZST00gcHJvZHVjdHMgV0hFUkUgcHJvZHVjdF9uYW1lIH4gJDEgTElNSVQgJHtyZXEubGltaXR9IE9GRlNFVCAke1xuICAgICAgcmVxLm9mZnNldFxuICAgIH1gO1xuICAgIHBhcmFtcyA9IFtyZXEucXVlcnkucXVlcnldO1xuICB9IGVsc2Uge1xuICAgIHF1ZXJ5ID0gYFNFTEVDVFxuICAgICR7cHJvZHVjdHNfZmllbGRzLmpvaW4oJywnKX1cbiAgICBGUk9NIHByb2R1Y3RzIE9SREVSIEJZIGlkIERFU0MgTElNSVQgJHtyZXEubGltaXR9IE9GRlNFVCAke3JlcS5vZmZzZXR9YDtcbiAgfVxuXG4gIGNsaWVudFxuICAgIC5xdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIHJlcS5yZXN1bHRzID0gcmVzLnJvd3MubGVuZ3RoO1xuICAgICAgcmVxLnJldHVybiA9IHJlcy5yb3dzIHx8IFtdO1xuICAgIH0pXG4gICAgLnRoZW4obmV4dCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0X29uZV9wcm9kdWN0ID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNsaWVudFxuICAgIC5xdWVyeShgU0VMRUNUICR7cHJvZHVjdHNfZmllbGRzLmpvaW4oJywnKX0gRlJPTSBwcm9kdWN0cyBXSEVSRSBpZCA9ICQxYCwgW1xuICAgICAgcmVxLnBhcmFtcy5wcm9kdWN0SWQsXG4gICAgXSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5yb3dzWzBdKSB7XG4gICAgICAgIHJldHVybiBuZXh0KHsgY29kZTogNDA0LCBtZXNzYWdlOiAnUHJvZHVjdCBub3QgZm91bmQnIH0pO1xuICAgICAgfVxuXG4gICAgICByZXEucmV0dXJuID0gcmVzLnJvd3NbMF0gfHwge307XG4gICAgfSlcbiAgICAudGhlbihuZXh0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRfb25lX3Byb2R1Y3RfZmFjdHMgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY2xpZW50XG4gICAgLnF1ZXJ5KFxuICAgICAgYFNFTEVDVCAke3Byb2R1Y3RfbnV0cml0aW9uX2ZhY3RzX2ZpZWxkcy5qb2luKFxuICAgICAgICAnLCcsXG4gICAgICApfSBGUk9NIHByb2R1Y3RfbnV0cml0aW9uX2ZhY3RzIFdIRVJFIHByb2R1Y3RfaWQgPSAkMWAsXG4gICAgICBbcmVxLnBhcmFtcy5wcm9kdWN0SWRdLFxuICAgIClcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5yb3dzWzBdKSB7XG4gICAgICAgIHJldHVybiBuZXh0KHsgY29kZTogNDA0LCBtZXNzYWdlOiAnUHJvZHVjdCBub3QgZm91bmQnIH0pO1xuICAgICAgfVxuXG4gICAgICByZXEucmV0dXJuID0gcmVzLnJvd3NbMF0gfHwge307XG4gICAgfSlcbiAgICAudGhlbihuZXh0KTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBcUJBO0FBK0dBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/app/routes/products/get.js\n");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_response_api_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/response/api_response */ \"./server/app/response/api_response.js\");\n/* harmony import */ var _app_response_api_error_response__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/response/api_error_response */ \"./server/app/response/api_error_response.js\");\n/* harmony import */ var _db_db_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/db/db.connect */ \"./server/app/db/db.connect.js\");\n/* harmony import */ var _app_routes_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/routes/products */ \"./server/app/routes/products.js\");\n// Externals libraries\n\n\n\n\n // Internals libraries\n// import initializeExpressArgument from '@/common/initialize-express-argument';\n\n\n\n // Routes\n\n // ---------- GLOBALS ----------\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()(); // ---------- INITIALIZE DATABASE ----------\n\napp.use(helmet__WEBPACK_IMPORTED_MODULE_0___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\nObject(_db_db_connect__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(); // ---------- CONFIGURATION HEADERS HTTP ----------\n// app.use(config_headers);\n// app.use(mandatory_headers);\n\napp.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()('[:method] :url :status - :response-time ms')); // ROUTES\n\napp.use('/products', _app_routes_products__WEBPACK_IMPORTED_MODULE_8__[\"default\"]); // ---------- RESPONSE ----------\n// SUCCESS\n\napp.use(_app_response_api_response__WEBPACK_IMPORTED_MODULE_5__[\"default\"]); // ERROR\n\napp.use(_app_response_api_error_response__WEBPACK_IMPORTED_MODULE_6__[\"default\"]); // ---------- SERVER ----------\n\nvar port = process.env.PORT || '3000';\napp.set('port', port);\nvar server = http__WEBPACK_IMPORTED_MODULE_3___default.a.createServer(app);\nserver.listen(port, function () {\n  var host = server.address().address;\n  var port = server.address().port;\n  process.stdout.write(\"running at http://\".concat(host, \":\").concat(port, \"\\n\"));\n  return;\n}).on('error', console.error);\nprocess.on('SIGINT', function () {\n  process.exit(-1);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaW5kZXguanM/MGE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHRlcm5hbHMgbGlicmFyaWVzXG5pbXBvcnQgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdtb3JnYW4nO1xuXG4vLyBJbnRlcm5hbHMgbGlicmFyaWVzXG4vLyBpbXBvcnQgaW5pdGlhbGl6ZUV4cHJlc3NBcmd1bWVudCBmcm9tICdAL2NvbW1vbi9pbml0aWFsaXplLWV4cHJlc3MtYXJndW1lbnQnO1xuaW1wb3J0IGFwaV9yZXNwb25zZSBmcm9tICcuL2FwcC9yZXNwb25zZS9hcGlfcmVzcG9uc2UnO1xuaW1wb3J0IGFwaV9yZXNwb25zZV9lcnJvciBmcm9tICcuL2FwcC9yZXNwb25zZS9hcGlfZXJyb3JfcmVzcG9uc2UnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ0AvZGIvZGIuY29ubmVjdCc7XG5cbi8vIFJvdXRlc1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4vYXBwL3JvdXRlcy9wcm9kdWN0cyc7XG5cbi8vIC0tLS0tLS0tLS0gR0xPQkFMUyAtLS0tLS0tLS0tXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbi8vIC0tLS0tLS0tLS0gSU5JVElBTElaRSBEQVRBQkFTRSAtLS0tLS0tLS0tXG5hcHAudXNlKGhlbG1ldCgpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5jb25uZWN0KCk7XG5cbi8vIC0tLS0tLS0tLS0gQ09ORklHVVJBVElPTiBIRUFERVJTIEhUVFAgLS0tLS0tLS0tLVxuLy8gYXBwLnVzZShjb25maWdfaGVhZGVycyk7XG4vLyBhcHAudXNlKG1hbmRhdG9yeV9oZWFkZXJzKTtcblxuYXBwLnVzZShsb2dnZXIoJ1s6bWV0aG9kXSA6dXJsIDpzdGF0dXMgLSA6cmVzcG9uc2UtdGltZSBtcycpKTtcblxuLy8gUk9VVEVTXG5hcHAudXNlKCcvcHJvZHVjdHMnLCBwcm9kdWN0cyk7XG5cbi8vIC0tLS0tLS0tLS0gUkVTUE9OU0UgLS0tLS0tLS0tLVxuLy8gU1VDQ0VTU1xuYXBwLnVzZShhcGlfcmVzcG9uc2UpO1xuLy8gRVJST1JcbmFwcC51c2UoYXBpX3Jlc3BvbnNlX2Vycm9yKTtcblxuLy8gLS0tLS0tLS0tLSBTRVJWRVIgLS0tLS0tLS0tLVxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgJzMwMDAnO1xuXG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XG5cbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcCk7XG5cbnNlcnZlclxuICAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgICBjb25zdCBob3N0ID0gc2VydmVyLmFkZHJlc3MoKS5hZGRyZXNzO1xuICAgIGNvbnN0IHBvcnQgPSBzZXJ2ZXIuYWRkcmVzcygpLnBvcnQ7XG5cbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShgcnVubmluZyBhdCBodHRwOi8vJHtob3N0fToke3BvcnR9XFxuYCk7XG4gICAgcmV0dXJuO1xuICB9KVxuICAub24oJ2Vycm9yJywgY29uc29sZS5lcnJvcik7XG5cbnByb2Nlc3Mub24oJ1NJR0lOVCcsICgpID0+IHtcbiAgcHJvY2Vzcy5leGl0KC0xKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/index.js\n");

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

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZ2FuLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCI/MzIwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///morgan\n");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwZ1wiPzRkYTIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGdcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///pg\n");

/***/ })

/******/ });