"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/view/[id]",{

/***/ "./pages/view/[id].js":
/*!****************************!*\
  !*** ./pages/view/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Post = function() {\n    var getData = function getData() {\n        axios__WEBPACK_IMPORTED_MODULE_3___default().get(API_URL).then(function(res) {\n            console.log(res.data);\n        });\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var API_URL = \"http://makeup-api.herokuapp.com/api/v1/products/\".concat(id);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (id && id > 0) {\n            getData();\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Post: \",\n            id\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yoning/Desktop/frontend_study/nextjs-tutorial/nextjs-tutorial/nextjs-tutorial/pages/view/[id].js\",\n        lineNumber: 21,\n        columnNumber: 10\n    }, _this);\n};\n_s(Post, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQXVDO0FBQ047QUFDUjs7QUFHekIsSUFBTUcsSUFBSSxHQUFHLFdBQU07UUFJUkMsT0FBTyxHQUFoQixTQUFTQSxPQUFPLEdBQUc7UUFDakJGLGdEQUFTLENBQUNJLE9BQU8sQ0FBQyxDQUFDQyxJQUFJLENBQUMsU0FBQ0MsR0FBRyxFQUFLO1lBQy9CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDRyxJQUFJLENBQUM7U0FDdEIsQ0FBQztLQUNIOztJQVBELElBQU1DLE1BQU0sR0FBR1osc0RBQVMsRUFBRTtJQUMxQixJQUFNLEVBQUksR0FBS1ksTUFBTSxDQUFDRSxLQUFLLENBQW5CRCxFQUFFO0lBQ1YsSUFBTVAsT0FBTyxHQUFHLGtEQUFpRCxDQUFLLE9BQUhPLEVBQUUsQ0FBRTtJQU12RVosZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBR1ksRUFBRSxJQUFJQSxFQUFFLEdBQUMsQ0FBQyxFQUFDO1lBQ1pULE9BQU8sRUFBRTtTQUNWO0tBQ0YsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFBTyw4REFBQ1csR0FBQzs7WUFBQyxRQUFNO1lBQUNGLEVBQUU7Ozs7OzthQUFLO0NBQ3pCO0dBaEJLVixJQUFJOztRQUNPSCxrREFBUzs7O0FBRHBCRyxLQUFBQSxJQUFJO0FBa0JWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZXcvW2lkXS5qcz8wZjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBBUElfVVJMID0gYGh0dHA6Ly9tYWtldXAtYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL3Byb2R1Y3RzLyR7aWR9YFxyXG4gIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICBBeGlvcy5nZXQoQVBJX1VSTCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gICAgfSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGlkICYmIGlkPjApe1xyXG4gICAgICBnZXREYXRhKClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIDxwPlBvc3Q6IHtpZH08L3A+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiQXhpb3MiLCJQb3N0IiwiZ2V0RGF0YSIsImdldCIsIkFQSV9VUkwiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/view/[id].js\n");

/***/ })

});