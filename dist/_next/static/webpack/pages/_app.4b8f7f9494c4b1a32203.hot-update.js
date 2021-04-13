webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/useShortcut.js":
/*!****************************!*\
  !*** ./lib/useShortcut.js ***!
  \****************************/
/*! exports provided: useShortcut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module, __prefresh_utils__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useShortcut\", function() { return useShortcut; });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/preact/compat/dist/compat.module.js\");\nvar _s = $RefreshSig$();\n\n// this file contains global shortcuts for my site\n// import Router from 'next/router'\n\n\nfunction useShortcut() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var keys = {};\n\n    document.onkeydown = function (e) {\n      keys[e.key.toLowerCase()] = true;\n      console.log(\"keyup\");\n      console.log(keys);\n      if (keys[\"b\"] && keys[\"shift\"]) return router.push(\"/blog\");\n      if (keys[\"h\"] && keys[\"shift\"]) return router.push(\"/\");\n      if (keys[\"p\"] && keys[\"shift\"]) return router.push(\"/my-projects\");\n    };\n\n    document.onkeyup = function (e) {\n      keys[e.key.toLowerCase()] = false;\n    }; // if (e.which == 77) {\n    //   alert(\"M key was pressed\");\n    // } else if (e.ctrlKey && e.which == 66) {\n    //   alert(\"Ctrl + B shortcut combination was pressed\");\n    // } else if (e.ctrlKey && e.altKey && e.which == 89) {\n    //   alert(\"Ctrl + Alt + Y shortcut combination was pressed\");\n    // } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {\n    //   alert(\"Ctrl + Alt + Shift + U shortcut combination was pressed\");\n    // }\n\n  }, []);\n}\n\n_s(useShortcut, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"]];\n});\n\n;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n\nconst isPrefreshComponent = __prefresh_utils__.shouldBind(module);\n\n  if (true) {\n    const currentExports = __prefresh_utils__.getExports(module);\n    const previousHotModuleExports =\n      module.hot.data && module.hot.data.moduleExports;\n\n    __prefresh_utils__.registerExports(currentExports, module.i);\n\n    if (isPrefreshComponent) {\n      if (previousHotModuleExports) {\n        try {\n          __prefresh_utils__.flush();\n          if (\n            typeof __prefresh_errors__ !== 'undefined' &&\n            __prefresh_errors__ &&\n            __prefresh_errors__.clearRuntimeErrors\n          ) {\n            __prefresh_errors__.clearRuntimeErrors();\n          }\n        } catch (e) {\n          // Only available in newer webpack versions.\n          if (module.hot.invalidate) {\n            module.hot.invalidate();\n          } else {\n            self.location.reload();\n          }\n        }\n      }\n\n      module.hot.dispose(data => {\n        data.moduleExports = __prefresh_utils__.getExports(module);\n      });\n\n      module.hot.accept(function errorRecovery() {\n        if (\n          typeof __prefresh_errors__ !== 'undefined' &&\n          __prefresh_errors__ &&\n          __prefresh_errors__.handleRuntimeError\n        ) {\n          __prefresh_errors__.handleRuntimeError(error);\n        }\n\n        __webpack_require__.c[module.i].hot.accept(errorRecovery);\n      });\n    }\n  }\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! ./node_modules/@prefresh/webpack/src/utils/prefresh.js */ \"./node_modules/@prefresh/webpack/src/utils/prefresh.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZVNob3J0Y3V0LmpzPzZiZjkiXSwibmFtZXMiOlsidXNlU2hvcnRjdXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJrZXlzIiwiZG9jdW1lbnQiLCJvbmtleWRvd24iLCJlIiwia2V5IiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIm9ua2V5dXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLFdBQVQsR0FBc0I7QUFBQTs7QUFDM0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQUk7QUFDWixRQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQUMsWUFBUSxDQUFDQyxTQUFULEdBQXFCLFVBQUNDLENBQUQsRUFBSztBQUN4QkgsVUFBSSxDQUFDRyxDQUFDLENBQUNDLEdBQUYsQ0FBTUMsV0FBTixFQUFELENBQUosR0FBNEIsSUFBNUI7QUFFQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWVAsSUFBWjtBQUNBLFVBQUdBLElBQUksQ0FBQyxHQUFELENBQUosSUFBYUEsSUFBSSxDQUFDLE9BQUQsQ0FBcEIsRUFBK0IsT0FBT0gsTUFBTSxDQUFDVyxJQUFQLENBQVksT0FBWixDQUFQO0FBQy9CLFVBQUdSLElBQUksQ0FBQyxHQUFELENBQUosSUFBYUEsSUFBSSxDQUFDLE9BQUQsQ0FBcEIsRUFBK0IsT0FBT0gsTUFBTSxDQUFDVyxJQUFQLENBQVksR0FBWixDQUFQO0FBQy9CLFVBQUdSLElBQUksQ0FBQyxHQUFELENBQUosSUFBYUEsSUFBSSxDQUFDLE9BQUQsQ0FBcEIsRUFBK0IsT0FBT0gsTUFBTSxDQUFDVyxJQUFQLENBQVksY0FBWixDQUFQO0FBQ2hDLEtBUkQ7O0FBU0FQLFlBQVEsQ0FBQ1EsT0FBVCxHQUFtQixVQUFDTixDQUFELEVBQU87QUFDeEJILFVBQUksQ0FBQ0csQ0FBQyxDQUFDQyxHQUFGLENBQU1DLFdBQU4sRUFBRCxDQUFKLEdBQTRCLEtBQTVCO0FBQ0QsS0FGRCxDQVhZLENBY1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNGOztBQUNDLEdBdkJRLEVBdUJQLEVBdkJPLENBQVQ7QUF3QkQ7O0dBM0JlVCxXO1VBQ0NFLHFEOzs7QUEwQmhCIiwiZmlsZSI6Ii4vbGliL3VzZVNob3J0Y3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBmaWxlIGNvbnRhaW5zIGdsb2JhbCBzaG9ydGN1dHMgZm9yIG15IHNpdGVcbi8vIGltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTaG9ydGN1dCgpe1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBsZXQga2V5cyA9IHt9XG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gKGUpPT57XG4gICAgICBrZXlzW2Uua2V5LnRvTG93ZXJDYXNlKCldID0gdHJ1ZTtcblxuICAgICAgY29uc29sZS5sb2coXCJrZXl1cFwiKVxuICAgICAgY29uc29sZS5sb2coa2V5cylcbiAgICAgIGlmKGtleXNbXCJiXCJdICYmIGtleXNbXCJzaGlmdFwiXSkgcmV0dXJuIHJvdXRlci5wdXNoKFwiL2Jsb2dcIilcbiAgICAgIGlmKGtleXNbXCJoXCJdICYmIGtleXNbXCJzaGlmdFwiXSkgcmV0dXJuIHJvdXRlci5wdXNoKFwiL1wiKVxuICAgICAgaWYoa2V5c1tcInBcIl0gJiYga2V5c1tcInNoaWZ0XCJdKSByZXR1cm4gcm91dGVyLnB1c2goXCIvbXktcHJvamVjdHNcIilcbiAgICB9XG4gICAgZG9jdW1lbnQub25rZXl1cCA9IChlKSA9PiB7XG4gICAgICBrZXlzW2Uua2V5LnRvTG93ZXJDYXNlKCldID0gZmFsc2U7XG4gICAgfTtcbiAgICAvLyBpZiAoZS53aGljaCA9PSA3Nykge1xuICAgIC8vICAgYWxlcnQoXCJNIGtleSB3YXMgcHJlc3NlZFwiKTtcbiAgICAvLyB9IGVsc2UgaWYgKGUuY3RybEtleSAmJiBlLndoaWNoID09IDY2KSB7XG4gICAgLy8gICBhbGVydChcIkN0cmwgKyBCIHNob3J0Y3V0IGNvbWJpbmF0aW9uIHdhcyBwcmVzc2VkXCIpO1xuICAgIC8vIH0gZWxzZSBpZiAoZS5jdHJsS2V5ICYmIGUuYWx0S2V5ICYmIGUud2hpY2ggPT0gODkpIHtcbiAgICAvLyAgIGFsZXJ0KFwiQ3RybCArIEFsdCArIFkgc2hvcnRjdXQgY29tYmluYXRpb24gd2FzIHByZXNzZWRcIik7XG4gICAgLy8gfSBlbHNlIGlmIChlLmN0cmxLZXkgJiYgZS5hbHRLZXkgJiYgZS5zaGlmdEtleSAmJiBlLndoaWNoID09IDg1KSB7XG4gICAgLy8gICBhbGVydChcIkN0cmwgKyBBbHQgKyBTaGlmdCArIFUgc2hvcnRjdXQgY29tYmluYXRpb24gd2FzIHByZXNzZWRcIik7XG4gIC8vIH1cbiAgfSxbXSlcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/useShortcut.js\n");

/***/ })

})