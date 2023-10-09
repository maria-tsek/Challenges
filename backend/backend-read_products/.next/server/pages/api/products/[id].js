"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products/[id]";
exports.ids = ["pages/api/products/[id]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./db/connect.js":
/*!***********************!*\
  !*** ./db/connect.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9jb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxJQUFJRjtBQUVoQyxJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJRyxNQUNSO0FBRUo7QUFFQSxJQUFJQyxTQUFTQyxPQUFPTjtBQUVwQixJQUFJLENBQUNLLFFBQVE7SUFDWEEsU0FBU0MsT0FBT04sV0FBVztRQUFFTyxNQUFNO1FBQU1DLFNBQVM7SUFBSztBQUN6RDtBQUVBLGVBQWVDO0lBQ2IsSUFBSUosT0FBT0UsTUFBTTtRQUNmLE9BQU9GLE9BQU9FO0lBQ2hCO0lBQ0EsSUFBSSxDQUFDRixPQUFPRyxTQUFTO1FBQ25CLE1BQU1FLE9BQU87WUFDWEMsZ0JBQWdCO1FBQ2xCO1FBQ0FOLE9BQU9HLFVBQVVSLHVEQUFnQlksQ0FBQ1gsYUFBYVMsTUFBTUcsS0FBSyxDQUFDYjtZQUN6RCxPQUFPQTtRQUNUO0lBQ0Y7SUFDQSxJQUFJO1FBQ0ZLLE9BQU9FLE9BQU8sTUFBTUYsT0FBT0c7SUFDN0IsRUFBRSxPQUFPTSxHQUFHO1FBQ1ZULE9BQU9HLFVBQVU7UUFDakIsTUFBTU07SUFDUjtJQUVBLE9BQU9ULE9BQU9FO0FBQ2hCO0FBRUEsaUVBQWVFLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLXJlYWRfcHJvZHVjdHMvLi9kYi9jb25uZWN0LmpzP2M3NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsXCJcbiAgKTtcbn1cblxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xuICB9XG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgIH07XG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgIH0pO1xuICB9XG4gIHRyeSB7XG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbDtcbiAgICB0aHJvdyBlO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiZGJDb25uZWN0Iiwib3B0cyIsImJ1ZmZlckNvbW1hbmRzIiwiY29ubmVjdCIsInRoZW4iLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db/connect.js\n");

/***/ }),

/***/ "(api)/./db/models/product.js":
/*!******************************!*\
  !*** ./db/models/product.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst productSchema = new Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        requires: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    currency: {\n        type: String,\n        required: true\n    }\n});\nconst Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", productSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvcHJvZHVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDaEMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0QsaURBQVFBO0FBQzNCLE1BQU1FLGdCQUFnQixJQUFJRCxPQUFPO0lBQy9CRSxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ0MsYUFBYTtRQUFFSCxNQUFNQztRQUFRRyxVQUFVO0lBQUs7SUFDNUNDLE9BQU87UUFBRUwsTUFBTU07UUFBUUosVUFBVTtJQUFLO0lBQ3RDSyxVQUFVO1FBQUVQLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztBQUMzQztBQUVBLE1BQU1NLFVBQ0paLHdEQUFlYSxDQUFDRCxXQUFXWixxREFBY2MsQ0FBQyxXQUFXWjtBQUV2RCxpRUFBZVUsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2tlbmQtcmVhZF9wcm9kdWN0cy8uL2RiL21vZGVscy9wcm9kdWN0LmpzPzVkZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlczogdHJ1ZSB9LFxuICBwcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGN1cnJlbmN5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbn0pO1xuXG5jb25zdCBQcm9kdWN0ID1cbiAgbW9uZ29vc2UubW9kZWxzLlByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoXCJQcm9kdWN0XCIsIHByb2R1Y3RTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwicHJvZHVjdFNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsInJlcXVpcmVzIiwicHJpY2UiLCJOdW1iZXIiLCJjdXJyZW5jeSIsIlByb2R1Y3QiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/models/product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products/[id].js":
/*!************************************!*\
  !*** ./pages/api/products/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/models/product */ \"(api)/./db/models/product.js\");\n/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/db/connect */ \"(api)/./db/connect.js\");\n\n// import { products } from \"../../../lib/products\";\n\nasync function handler(request, response) {\n    await (0,_db_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const { id } = request.query;\n    if (request.method === \"GET\") {\n        const product = await _db_models_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n        console.log(\"product:\", product);\n        if (!product) {\n            return response.status(404).json({\n                status: \"Not Found\"\n            });\n        }\n        response.status(200).json(product);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvW2lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFDMUMsb0RBQW9EO0FBQ2Y7QUFFdEIsZUFBZUUsUUFBUUMsT0FBTyxFQUFFQyxRQUFRO0lBQ3JELE1BQU1ILHVEQUFTQTtJQUNmLE1BQU0sRUFBRUksRUFBRSxFQUFFLEdBQUdGLFFBQVFHO0lBRXZCLElBQUlILFFBQVFJLFdBQVcsT0FBTztRQUM1QixNQUFNQyxVQUFVLE1BQU1SLG1FQUFnQlMsQ0FBQ0o7UUFDdkNLLFFBQVFDLElBQUksWUFBWUg7UUFDeEIsSUFBSSxDQUFDQSxTQUFTO1lBQ1osT0FBT0osU0FBU1EsT0FBTyxLQUFLQyxLQUFLO2dCQUFFRCxRQUFRO1lBQVk7UUFDekQ7UUFFQVIsU0FBU1EsT0FBTyxLQUFLQyxLQUFLTDtJQUM1QjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC1yZWFkX3Byb2R1Y3RzLy4vcGFnZXMvYXBpL3Byb2R1Y3RzL1tpZF0uanM/ODJlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdCBmcm9tIFwiQC9kYi9tb2RlbHMvcHJvZHVjdFwiO1xuLy8gaW1wb3J0IHsgcHJvZHVjdHMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3Byb2R1Y3RzXCI7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCJAL2RiL2Nvbm5lY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXF1ZXN0LCByZXNwb25zZSkge1xuICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgY29uc3QgeyBpZCB9ID0gcmVxdWVzdC5xdWVyeTtcblxuICBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kQnlJZChpZCk7XG4gICAgY29uc29sZS5sb2coXCJwcm9kdWN0OlwiLCBwcm9kdWN0KTtcbiAgICBpZiAoIXByb2R1Y3QpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoNDA0KS5qc29uKHsgc3RhdHVzOiBcIk5vdCBGb3VuZFwiIH0pO1xuICAgIH1cblxuICAgIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24ocHJvZHVjdCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcm9kdWN0IiwiZGJDb25uZWN0IiwiaGFuZGxlciIsInJlcXVlc3QiLCJyZXNwb25zZSIsImlkIiwicXVlcnkiLCJtZXRob2QiLCJwcm9kdWN0IiwiZmluZEJ5SWQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/[id].js"));
module.exports = __webpack_exports__;

})();