"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/hooks/useThemeSwitcher.js":
/*!**************************************************!*\
  !*** ./src/components/hooks/useThemeSwitcher.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useThemeSwitcher = ()=>{\n    _s();\n    const preferDarkQuery = \"(prefer-color-scheme:dark)\";\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const mediaQuery = window.matchMedia(preferDarkQuery);\n        const userPreference = window.localStorage.getItem(\"theme\");\n        // console.log(userPreference);\n        const handleChange = ()=>{\n            if (userPreference) {\n                let check = userPreference === \"dark\" ? \"dark\" : \"light\";\n                setMode(check);\n                if (check === \"dark\") {\n                    document.documentElement.classList.add(\"dark\");\n                    console.log(\"hi\");\n                } else {\n                    document.documentElement.classList.remove(\"dark\");\n                }\n            } else {\n                let check = mediaQuery.matches ? \"dark\" : \"light\";\n                setMode(check);\n                if (check === \"dark\") {\n                    document.documentElement.classList.add(\"dark\");\n                } else {\n                    document.documentElement.classList.remove(\"dark\");\n                }\n            }\n        };\n        handleChange();\n        mediaQuery.addEventListener(\"change\", handleChange);\n        return ()=>{\n            mediaQuery.removeEventListener(\"change\", handleChange);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        console.log(mode);\n        if (mode === \"dark\") {\n            window.localStorage.setItem(\"theme\", \"dark\");\n            document.documentElement.classList.add(\"dark\");\n        } else {\n            window.localStorage.setItem(\"theme\", \"light\");\n            document.documentElement.classList.remove(\"dark\");\n        }\n    }, [\n        mode\n    ]);\n    return [\n        mode,\n        setMode\n    ];\n};\n_s(useThemeSwitcher, \"i7oKu8K8pK5kvaUW2XY2X5Pc3JQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useThemeSwitcher);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob29rcy91c2VUaGVtZVN3aXRjaGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBaUQ7QUFFakQsTUFBTUcsbUJBQW1CLElBQU07O0lBRTNCLE1BQU1DLGtCQUFnQjtJQUN0QixNQUFNLENBQUNDLE1BQUtDLFFBQVEsR0FBQ0wsK0NBQVFBLENBQUM7SUFFOUJDLGdEQUFTQSxDQUFDLElBQUk7UUFDVixNQUFNSyxhQUFXQyxPQUFPQyxVQUFVLENBQUNMO1FBQ25DLE1BQU1NLGlCQUFlRixPQUFPRyxZQUFZLENBQUNDLE9BQU8sQ0FBQztRQUNqRCwrQkFBK0I7UUFDL0IsTUFBTUMsZUFBYSxJQUFJO1lBQ25CLElBQUdILGdCQUFlO2dCQUNkLElBQUlJLFFBQU1KLG1CQUFpQixTQUFPLFNBQU8sT0FBTztnQkFDaERKLFFBQVFRO2dCQUNSLElBQUdBLFVBQVEsUUFBTztvQkFDZEMsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztvQkFDdkNDLFFBQVFDLEdBQUcsQ0FBQztnQkFDaEIsT0FBSztvQkFDREwsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNJLE1BQU0sQ0FBQztnQkFDOUMsQ0FBQztZQUNMLE9BQUs7Z0JBQ0QsSUFBSVAsUUFBTVAsV0FBV2UsT0FBTyxHQUFDLFNBQU8sT0FBTztnQkFDM0NoQixRQUFRUTtnQkFDUixJQUFHQSxVQUFRLFFBQU87b0JBQ2RDLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7Z0JBQzNDLE9BQUs7b0JBQ0RILFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDSSxNQUFNLENBQUM7Z0JBQzlDLENBQUM7WUFDTCxDQUFDO1FBRUw7UUFFQVI7UUFFQU4sV0FBV2dCLGdCQUFnQixDQUFDLFVBQVNWO1FBR3JDLE9BQU8sSUFBSTtZQUNQTixXQUFXaUIsbUJBQW1CLENBQUMsVUFBU1g7UUFDNUM7SUFFSixHQUFFLEVBQUU7SUFHSlgsZ0RBQVNBLENBQUMsSUFBSTtRQUNWaUIsUUFBUUMsR0FBRyxDQUFDZjtRQUNaLElBQUdBLFNBQU8sUUFBTztZQUNiRyxPQUFPRyxZQUFZLENBQUNjLE9BQU8sQ0FBQyxTQUFRO1lBQ3BDVixTQUFTQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1FBQzNDLE9BQUs7WUFDRFYsT0FBT0csWUFBWSxDQUFDYyxPQUFPLENBQUMsU0FBUTtZQUNwQ1YsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNJLE1BQU0sQ0FBQztRQUM5QyxDQUFDO0lBRUwsR0FBRTtRQUFDaEI7S0FBSztJQUVWLE9BQU87UUFBQ0E7UUFBS0M7S0FBUTtBQUN2QjtHQXhETUg7QUEwRE4sK0RBQWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob29rcy91c2VUaGVtZVN3aXRjaGVyLmpzPzc2NGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB1c2VUaGVtZVN3aXRjaGVyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcHJlZmVyRGFya1F1ZXJ5PVwiKHByZWZlci1jb2xvci1zY2hlbWU6ZGFyaylcIjtcbiAgICBjb25zdCBbbW9kZSxzZXRNb2RlXT11c2VTdGF0ZShcIlwiKTtcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBtZWRpYVF1ZXJ5PXdpbmRvdy5tYXRjaE1lZGlhKHByZWZlckRhcmtRdWVyeSk7XG4gICAgICAgIGNvbnN0IHVzZXJQcmVmZXJlbmNlPXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyUHJlZmVyZW5jZSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZUNoYW5nZT0oKT0+e1xuICAgICAgICAgICAgaWYodXNlclByZWZlcmVuY2Upe1xuICAgICAgICAgICAgICAgIGxldCBjaGVjaz11c2VyUHJlZmVyZW5jZT09PVwiZGFya1wiP1wiZGFya1wiOlwibGlnaHRcIjtcbiAgICAgICAgICAgICAgICBzZXRNb2RlKGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpZihjaGVjaz09PVwiZGFya1wiKXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaVwiKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2s9bWVkaWFRdWVyeS5tYXRjaGVzP1wiZGFya1wiOlwibGlnaHRcIjtcbiAgICAgICAgICAgICAgICBzZXRNb2RlKGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpZihjaGVjaz09PVwiZGFya1wiKXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZUNoYW5nZSgpO1xuXG4gICAgICAgIG1lZGlhUXVlcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGhhbmRsZUNoYW5nZSk7XG5cblxuICAgICAgICByZXR1cm4gKCk9PntcbiAgICAgICAgICAgIG1lZGlhUXVlcnkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGhhbmRsZUNoYW5nZSk7XG4gICAgICAgIH1cblxuICAgIH0sW10pO1xuXG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc29sZS5sb2cobW9kZSk7XG4gICAgICAgIGlmKG1vZGU9PT1cImRhcmtcIil7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLFwiZGFya1wiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLFwibGlnaHRcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7IFxuICAgICAgICB9XG5cbiAgICB9LFttb2RlXSlcblxuICByZXR1cm4gW21vZGUsc2V0TW9kZV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRoZW1lU3dpdGNoZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVRoZW1lU3dpdGNoZXIiLCJwcmVmZXJEYXJrUXVlcnkiLCJtb2RlIiwic2V0TW9kZSIsIm1lZGlhUXVlcnkiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwidXNlclByZWZlcmVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlQ2hhbmdlIiwiY2hlY2siLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmUiLCJtYXRjaGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/hooks/useThemeSwitcher.js\n"));

/***/ })

});