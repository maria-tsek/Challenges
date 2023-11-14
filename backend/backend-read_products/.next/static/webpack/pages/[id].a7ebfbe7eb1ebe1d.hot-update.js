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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Product; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Product_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product.styled */ \"./components/Product/Product.styled.js\");\n/* harmony import */ var _Link_Link_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Link/Link.styled */ \"./components/Link/Link.styled.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Product() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const { data, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/products/\".concat(id));\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n            lineNumber: 13,\n            columnNumber: 12\n        }, this);\n    }\n    if (!data) {\n        return;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product_styled__WEBPACK_IMPORTED_MODULE_3__.ProductCard, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: data.name\n            }, void 0, false, {\n                fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Description: \",\n                    data.description\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Price: \",\n                    data.price,\n                    \" \",\n                    data.currency\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            data.reviews.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Reviews:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: data.reviews.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: review\n                            }, index, false, {\n                                fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No reviews available.\"\n            }, void 0, false, {\n                fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Link_Link_styled__WEBPACK_IMPORTED_MODULE_4__.StyledLink, {\n                href: \"/\",\n                children: \"Back to all\"\n            }, void 0, false, {\n                fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mariatsekoura/Desktop/bootcamp/Challenges/backend/backend-read_products/components/Product/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Product, \"HHGP3YlkXu2cUfBQ27uHmDzV0uU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Product;\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNlO0FBQ087QUFDRTtBQUVsQyxTQUFTSTs7SUFDdEIsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUssRUFBRSxFQUFFLEdBQUdELE9BQU9FO0lBRXRCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUUsR0FBR1QsK0NBQU1BLENBQUMsaUJBQW9CLE9BQUhNO0lBRXBELElBQUlHLFdBQVc7UUFDYixxQkFBTyw4REFBQ0M7c0JBQUc7Ozs7OztJQUNiO0lBRUEsSUFBSSxDQUFDRixNQUFNO1FBQ1Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTix3REFBV0E7OzBCQUNWLDhEQUFDUzswQkFBSUgsS0FBS0k7Ozs7OzswQkFDViw4REFBQ0M7O29CQUFFO29CQUFjTCxLQUFLTTs7Ozs7OzswQkFDdEIsOERBQUNEOztvQkFBRTtvQkFDT0wsS0FBS087b0JBQU07b0JBQUVQLEtBQUtROzs7Ozs7O1lBRTNCUixLQUFLUyxRQUFRQyxTQUFTLGtCQUNyQiw4REFBQ0M7O2tDQUNDLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQztrQ0FDRWIsS0FBS1MsUUFBUUssSUFBSSxDQUFDQyxRQUFRQyxzQkFDekIsOERBQUNDOzBDQUFnQkY7K0JBQVJDOzs7Ozs7Ozs7Ozs7Ozs7cUNBS2YsOERBQUNYOzBCQUFFOzs7Ozs7MEJBRUwsOERBQUNWLHlEQUFVQTtnQkFBQ3VCLE1BQUs7MEJBQUk7Ozs7Ozs7Ozs7OztBQUczQjtHQXBDd0J0Qjs7UUFDUEgsa0RBQVNBO1FBR0lELDJDQUFNQTs7O0tBSlpJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdC9pbmRleC5qcz9kNDk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBQcm9kdWN0Q2FyZCB9IGZyb20gXCIuL1Byb2R1Y3Quc3R5bGVkXCI7XG5pbXBvcnQgeyBTdHlsZWRMaW5rIH0gZnJvbSBcIi4uL0xpbmsvTGluay5zdHlsZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZyB9ID0gdXNlU1dSKGAvYXBpL3Byb2R1Y3RzLyR7aWR9YCk7XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+O1xuICB9XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdENhcmQ+XG4gICAgICA8aDI+e2RhdGEubmFtZX08L2gyPlxuICAgICAgPHA+RGVzY3JpcHRpb246IHtkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxwPlxuICAgICAgICBQcmljZToge2RhdGEucHJpY2V9IHtkYXRhLmN1cnJlbmN5fVxuICAgICAgPC9wPlxuICAgICAge2RhdGEucmV2aWV3cy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5SZXZpZXdzOjwvaDM+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2RhdGEucmV2aWV3cy5tYXAoKHJldmlldywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntyZXZpZXd9PC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+Tm8gcmV2aWV3cyBhdmFpbGFibGUuPC9wPlxuICAgICAgKX1cbiAgICAgIDxTdHlsZWRMaW5rIGhyZWY9XCIvXCI+QmFjayB0byBhbGw8L1N0eWxlZExpbms+XG4gICAgPC9Qcm9kdWN0Q2FyZD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VSb3V0ZXIiLCJQcm9kdWN0Q2FyZCIsIlN0eWxlZExpbmsiLCJQcm9kdWN0Iiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImRhdGEiLCJpc0xvYWRpbmciLCJoMSIsImgyIiwibmFtZSIsInAiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiY3VycmVuY3kiLCJyZXZpZXdzIiwibGVuZ3RoIiwiZGl2IiwiaDMiLCJ1bCIsIm1hcCIsInJldmlldyIsImluZGV4IiwibGkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Product/index.js\n"));

/***/ })

});