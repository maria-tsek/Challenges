"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./components/Product/index.js":
/*!*************************************!*\
  !*** ./components/Product/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Product; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Product_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product.styled */ \"./components/Product/Product.styled.js\");\n/* harmony import */ var _Link_Link_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Link/Link.styled */ \"./components/Link/Link.styled.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Product() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const { data, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/products/\".concat(id));\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n            lineNumber: 13,\n            columnNumber: 12\n        }, this);\n    }\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No data available.\"\n        }, void 0, false, {\n            fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n            lineNumber: 17,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product_styled__WEBPACK_IMPORTED_MODULE_3__.ProductCard, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: data.name\n            }, void 0, false, {\n                fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Description: \",\n                    data.description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Price: \",\n                    data.price,\n                    \" \",\n                    data.currency\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            data.reviews.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Reviews:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: data.reviews.map((review)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: review.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: review.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Rating: \",\n                                            review.rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, review._id, true, {\n                                fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No reviews available.\"\n            }, void 0, false, {\n                fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Link_Link_styled__WEBPACK_IMPORTED_MODULE_4__.StyledLink, {\n                href: \"/\",\n                children: \"Back to all\"\n            }, void 0, false, {\n                fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Product, \"HHGP3YlkXu2cUfBQ27uHmDzV0uU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Product;\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNlO0FBQ087QUFDRTtBQUVsQyxTQUFTSTs7SUFDdEIsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUssRUFBRSxFQUFFLEdBQUdELE9BQU9FO0lBRXRCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUUsR0FBR1QsK0NBQU1BLENBQUMsaUJBQW9CLE9BQUhNO0lBRXBELElBQUlHLFdBQVc7UUFDYixxQkFBTyw4REFBQ0M7c0JBQUc7Ozs7OztJQUNiO0lBRUEsSUFBSSxDQUFDRixNQUFNO1FBQ1QscUJBQU8sOERBQUNHO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDVCx3REFBV0E7OzBCQUNWLDhEQUFDVTswQkFBSUosS0FBS0s7Ozs7OzswQkFDViw4REFBQ0Y7O29CQUFFO29CQUFjSCxLQUFLTTs7Ozs7OzswQkFDdEIsOERBQUNIOztvQkFBRTtvQkFDT0gsS0FBS087b0JBQU07b0JBQUVQLEtBQUtROzs7Ozs7O1lBRTNCUixLQUFLUyxRQUFRQyxTQUFTLGtCQUNyQiw4REFBQ0M7O2tDQUNDLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQztrQ0FDRWIsS0FBS1MsUUFBUUssSUFBSSxDQUFDQyx1QkFDakIsOERBQUNDOztrREFDQyw4REFBQ2I7a0RBQUdZLE9BQU9FOzs7Ozs7a0RBQ1gsOERBQUNkO2tEQUFHWSxPQUFPRzs7Ozs7O2tEQUNYLDhEQUFDZjs7NENBQUU7NENBQVNZLE9BQU9JOzs7Ozs7OzsrQkFIWkosT0FBT0s7Ozs7Ozs7Ozs7Ozs7OztxQ0FTdEIsOERBQUNqQjswQkFBRTs7Ozs7OzBCQUVMLDhEQUFDUix5REFBVUE7Z0JBQUMwQixNQUFLOzBCQUFJOzs7Ozs7Ozs7Ozs7QUFHM0I7R0F4Q3dCekI7O1FBQ1BILGtEQUFTQTtRQUdJRCwyQ0FBTUE7OztLQUpaSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3QvaW5kZXguanM/ZDQ5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgUHJvZHVjdENhcmQgfSBmcm9tIFwiLi9Qcm9kdWN0LnN0eWxlZFwiO1xuaW1wb3J0IHsgU3R5bGVkTGluayB9IGZyb20gXCIuLi9MaW5rL0xpbmsuc3R5bGVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcgfSA9IHVzZVNXUihgL2FwaS9wcm9kdWN0cy8ke2lkfWApO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPjtcbiAgfVxuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiA8cD5ObyBkYXRhIGF2YWlsYWJsZS48L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdENhcmQ+XG4gICAgICA8aDI+e2RhdGEubmFtZX08L2gyPlxuICAgICAgPHA+RGVzY3JpcHRpb246IHtkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxwPlxuICAgICAgICBQcmljZToge2RhdGEucHJpY2V9IHtkYXRhLmN1cnJlbmN5fVxuICAgICAgPC9wPlxuICAgICAge2RhdGEucmV2aWV3cy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5SZXZpZXdzOjwvaDM+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2RhdGEucmV2aWV3cy5tYXAoKHJldmlldykgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtyZXZpZXcuX2lkfT5cbiAgICAgICAgICAgICAgICA8cD57cmV2aWV3LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD57cmV2aWV3LnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIDxwPlJhdGluZzoge3Jldmlldy5yYXRpbmd9PC9wPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8cD5ObyByZXZpZXdzIGF2YWlsYWJsZS48L3A+XG4gICAgICApfVxuICAgICAgPFN0eWxlZExpbmsgaHJlZj1cIi9cIj5CYWNrIHRvIGFsbDwvU3R5bGVkTGluaz5cbiAgICA8L1Byb2R1Y3RDYXJkPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNXUiIsInVzZVJvdXRlciIsIlByb2R1Y3RDYXJkIiwiU3R5bGVkTGluayIsIlByb2R1Y3QiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGF0YSIsImlzTG9hZGluZyIsImgxIiwicCIsImgyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJjdXJyZW5jeSIsInJldmlld3MiLCJsZW5ndGgiLCJkaXYiLCJoMyIsInVsIiwibWFwIiwicmV2aWV3IiwibGkiLCJ0aXRsZSIsInRleHQiLCJyYXRpbmciLCJfaWQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Product/index.js\n"));

/***/ })

});