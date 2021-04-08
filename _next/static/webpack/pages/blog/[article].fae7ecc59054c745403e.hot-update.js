webpackHotUpdate_N_E("pages/blog/[article]",{

/***/ "./components/ArticleViewer/ArticleViewer.js":
/*!***************************************************!*\
  !*** ./components/ArticleViewer/ArticleViewer.js ***!
  \***************************************************/
/*! exports provided: ArticleViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module, __prefresh_utils__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ArticleViewer\", function() { return ArticleViewer; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/preact/compat/dist/compat.module.js\");\n/* harmony import */ var _components_CodeViewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CodeViewer */ \"./components/CodeViewer.js\");\n/* harmony import */ var react_jsx_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jsx-parser */ \"./node_modules/react-jsx-parser/dist/umd/react-jsx-parser.min.js\");\n/* harmony import */ var react_jsx_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./components/ArticleViewer/style.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/eulerthedestroyer/personal_site/components/ArticleViewer/ArticleViewer.js\";\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement;\n\n\n // import \"./style.css\"\n\nvar ArticleViewer = function ArticleViewer(_ref) {\n  var article = _ref.article;\n  // console.log(\"style:\\n\\n\\n: \", article.style)\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Fragment, null, __jsx(\"div\", {\n    id: \"style-carrier\",\n    css: article.style,\n    className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_4__[\"style\"].__hash),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(react_jsx_parser__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    components: {\n      AceCodeViewer: _components_CodeViewer__WEBPACK_IMPORTED_MODULE_2__[\"AceCodeViewer\"]\n    },\n    jsx: article.file,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: _style__WEBPACK_IMPORTED_MODULE_4__[\"style\"].__hash,\n    __self: _this\n  }, _style__WEBPACK_IMPORTED_MODULE_4__[\"style\"]));\n};\n_c = ArticleViewer;\n\nvar _c;\n\n$RefreshReg$(_c, \"ArticleViewer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n\nconst isPrefreshComponent = __prefresh_utils__.shouldBind(module);\n\n  if (true) {\n    const currentExports = __prefresh_utils__.getExports(module);\n    const previousHotModuleExports =\n      module.hot.data && module.hot.data.moduleExports;\n\n    __prefresh_utils__.registerExports(currentExports, module.i);\n\n    if (isPrefreshComponent) {\n      if (previousHotModuleExports) {\n        try {\n          __prefresh_utils__.flush();\n          if (\n            typeof __prefresh_errors__ !== 'undefined' &&\n            __prefresh_errors__ &&\n            __prefresh_errors__.clearRuntimeErrors\n          ) {\n            __prefresh_errors__.clearRuntimeErrors();\n          }\n        } catch (e) {\n          // Only available in newer webpack versions.\n          if (module.hot.invalidate) {\n            module.hot.invalidate();\n          } else {\n            self.location.reload();\n          }\n        }\n      }\n\n      module.hot.dispose(data => {\n        data.moduleExports = __prefresh_utils__.getExports(module);\n      });\n\n      module.hot.accept(function errorRecovery() {\n        if (\n          typeof __prefresh_errors__ !== 'undefined' &&\n          __prefresh_errors__ &&\n          __prefresh_errors__.handleRuntimeError\n        ) {\n          __prefresh_errors__.handleRuntimeError(error);\n        }\n\n        __webpack_require__.c[module.i].hot.accept(errorRecovery);\n      });\n    }\n  }\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! ./node_modules/@prefresh/webpack/src/utils/prefresh.js */ \"./node_modules/@prefresh/webpack/src/utils/prefresh.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlVmlld2VyL0FydGljbGVWaWV3ZXIuanM/YmVmMiJdLCJuYW1lcyI6WyJBcnRpY2xlVmlld2VyIiwiYXJ0aWNsZSIsInN0eWxlIiwiQWNlQ29kZVZpZXdlciIsImZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDTyxJQUFNQSxhQUFhLEdBQUUsU0FBZkEsYUFBZSxPQUFhO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQ3ZDO0FBQ0EsU0FBUSxvRUFDTjtBQUFLLE1BQUUsRUFBQyxlQUFSO0FBQXdCLE9BQUcsRUFBRUEsT0FBTyxDQUFDQyxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQ0UsY0FBVSxFQUFFO0FBQUVDLG1CQUFhLEVBQWJBLG9FQUFhQTtBQUFmLEtBRGQ7QUFFRSxPQUFHLEVBQUVGLE9BQU8sQ0FBQ0csSUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FETTtBQUFBO0FBQUE7QUFBQSxtREFBUjtBQVNELENBWE07S0FBTUosYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXJ0aWNsZVZpZXdlci9BcnRpY2xlVmlld2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY2VDb2RlVmlld2VyfSBmcm9tIFwiQC9jb21wb25lbnRzL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IEpzeFBhcnNlciBmcm9tICdyZWFjdC1qc3gtcGFyc2VyJ1xuaW1wb3J0IHtzdHlsZX0gZnJvbSBcIi4vc3R5bGVcIlxuLy8gaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuZXhwb3J0IGNvbnN0IEFydGljbGVWaWV3ZXIgPSh7YXJ0aWNsZX0pPT57XG4gIC8vIGNvbnNvbGUubG9nKFwic3R5bGU6XFxuXFxuXFxuOiBcIiwgYXJ0aWNsZS5zdHlsZSlcbiAgcmV0dXJuICg8PlxuICAgIDxkaXYgaWQ9XCJzdHlsZS1jYXJyaWVyXCIgY3NzPXthcnRpY2xlLnN0eWxlfT5cbiAgICAgIDxKc3hQYXJzZXJcbiAgICAgICAgY29tcG9uZW50cz17eyBBY2VDb2RlVmlld2VyIH19XG4gICAgICAgIGpzeD17YXJ0aWNsZS5maWxlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntzdHlsZX08L3N0eWxlPlxuICA8Lz4pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ArticleViewer/ArticleViewer.js\n");

/***/ })

})