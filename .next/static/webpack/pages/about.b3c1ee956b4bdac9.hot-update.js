"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_images_profile_developer_pic_2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/images/profile/developer-pic-2.jpg */ \"./public/images/profile/developer-pic-2.jpg\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Skills */ \"./src/components/Skills.js\");\n/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Experience */ \"./src/components/Experience.js\");\n/* harmony import */ var _components_Education__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Education */ \"./src/components/Education.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst AnimatedNumbers = (param)=>{\n    let { value  } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    const motionValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue)(0);\n    const springValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useSpring)(motionValue, {\n        duration: 3000\n    });\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useInView)(ref, {\n        once: true\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (isInView) {\n            motionValue.set(value);\n        }\n    }, [\n        isInView,\n        value,\n        motionValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        springValue.on(\"change\", (latest)=>{\n            if (ref.current && latest.toFixed(0) <= value) {\n                ref.current.textContent = latest.toFixed(0);\n            }\n        });\n    }, [\n        springValue,\n        value\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: ref\n    }, void 0, false, {\n        fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AnimatedNumbers, \"b8aj1/ahv2yZpM7Evi2PhhKh64k=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useInView\n    ];\n});\n_c = AnimatedNumbers;\nconst About = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Codebucks | About Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        neme: \"description\",\n                        content: \"any description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col items-center justify-center dark:text-light\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Passion Fuels Purpose\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid w-full grid-cols-8 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 flex flex-col items-start justify-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"mb-4 text-lg font-bold uppercase text-dark/75\",\n                                            children: \"Biography\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium \",\n                                            children: \"Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"my-4 font-medium \",\n                                            children: \"I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium \",\n                                            children: \"Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            src: _public_images_profile_developer_pic_2_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                            alt: \"Codebucks\",\n                                            className: \"w-full h-auto rounded-2xl\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-2 flex flex-col items-end justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 2\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                                            lineNumber: 83,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl capitalize font-medium text-dark/75 dark:text-light/75\",\n                                                    children: \"Satisfied Clients\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 40\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                                            lineNumber: 89,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl capitalize font-medium text-dark/75 dark:text-light/75\",\n                                                    children: \"Projects Completed\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-end justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-7xl font-bold\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimatedNumbers, {\n                                                            value: 2\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                                            lineNumber: 95,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl capitalize font-medium text-dark/75 dark:text-light/75\",\n                                                    children: \"Years Of Experience\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                            lineNumber: 93,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Experience__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Education__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rupkalita/Desktop/portfolio/Portfolio/src/pages/about.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c, _c1;\n$RefreshReg$(_c, \"AnimatedNumbers\");\n$RefreshReg$(_c1, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSXpGLDhEQUFDeEIsMERBQU1BOzs7OztzQ0FDUCw4REFBQ0MsOERBQVVBOzs7OztzQ0FDWCw4REFBQ0MsNkRBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7TUFwRU1nQjtBQXNFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYWJvdXQuanM/ZmQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0ZWRUZXh0IGZyb20gXCJAL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHByb2ZpbGVQaWMgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9wcm9maWxlL2RldmVsb3Blci1waWMtMi5qcGcnO1xuaW1wb3J0IHsgdXNlSW5WaWV3LCB1c2VNb3Rpb25WYWx1ZSwgdXNlU3ByaW5nIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBTa2lsbHMgZnJvbSBcIkAvY29tcG9uZW50cy9Ta2lsbHNcIjtcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gXCJAL2NvbXBvbmVudHMvRXhwZXJpZW5jZVwiO1xuaW1wb3J0IEVkdWNhdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL0VkdWNhdGlvblwiO1xuXG5cbmNvbnN0IEFuaW1hdGVkTnVtYmVycz0oe3ZhbHVlfSk9PntcbiAgICBjb25zdCByZWY9dXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG1vdGlvblZhbHVlPXVzZU1vdGlvblZhbHVlKDApO1xuICAgIGNvbnN0IHNwcmluZ1ZhbHVlPXVzZVNwcmluZyhtb3Rpb25WYWx1ZSx7ZHVyYXRpb246MzAwMH0pO1xuICAgIGNvbnN0IGlzSW5WaWV3PXVzZUluVmlldyhyZWYse29uY2U6dHJ1ZX0pO1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmKGlzSW5WaWV3KXtcbiAgICAgICAgICAgIG1vdGlvblZhbHVlLnNldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LFtpc0luVmlldyx2YWx1ZSxtb3Rpb25WYWx1ZV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIHNwcmluZ1ZhbHVlLm9uKFwiY2hhbmdlXCIsKGxhdGVzdCk9PntcbiAgICAgICAgICAgaWYocmVmLmN1cnJlbnQgJiYgbGF0ZXN0LnRvRml4ZWQoMCk8PXZhbHVlKXtcbiAgICAgICAgICAgIHJlZi5jdXJyZW50LnRleHRDb250ZW50PWxhdGVzdC50b0ZpeGVkKDApO1xuICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxbc3ByaW5nVmFsdWUsdmFsdWVdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gcmVmPXtyZWZ9PlxuXG4gICAgICAgIDwvc3Bhbj5cbiAgICApXG59XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q29kZWJ1Y2tzIHwgQWJvdXQgUGFnZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5lbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJhbnkgZGVzY3JpcHRpb25cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGRhcms6dGV4dC1saWdodFwiPlxuICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInB0LTE2XCI+XG4gICAgICAgICAgPEFuaW1hdGVkVGV4dCB0ZXh0PVwiUGFzc2lvbiBGdWVscyBQdXJwb3NlXCIgY2xhc3NOYW1lPVwibWItMTZcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCB3LWZ1bGwgZ3JpZC1jb2xzLTggZ2FwLTE2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi00IHRleHQtbGcgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LWRhcmsvNzVcIj5cbiAgICAgICAgICAgICAgICBCaW9ncmFwaHlcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gXCI+XG4gICAgICAgICAgICAgICAgSGksIEknbSBDb2RlQnVja3MsIGEgd2ViIGRldmVsb3BlciBhbmQgVUkvVVggZGVzaWduZXIgd2l0aCBhXG4gICAgICAgICAgICAgICAgcGFzc2lvbiBmb3IgY3JlYXRpbmcgYmVhdXRpZnVsLCBmdW5jdGlvbmFsLCBhbmQgdXNlci1jZW50ZXJlZFxuICAgICAgICAgICAgICAgIGRpZ2l0YWwgZXhwZXJpZW5jZXMuIFdpdGggNCB5ZWFycyBvZiBleHBlcmllbmNlIGluIHRoZSBmaWVsZC4gSVxuICAgICAgICAgICAgICAgIGFtIGFsd2F5cyBsb29raW5nIGZvciBuZXcgYW5kIGlubm92YXRpdmUgd2F5cyB0byBicmluZyBteVxuICAgICAgICAgICAgICAgIGNsaWVudHMnIHZpc2lvbnMgdG8gbGlmZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS00IGZvbnQtbWVkaXVtIFwiPlxuICAgICAgICAgICAgICAgIEkgYmVsaWV2ZSB0aGF0IGRlc2lnbiBpcyBhYm91dCBtb3JlIHRoYW4ganVzdCBtYWtpbmcgdGhpbmdzIGxvb2tcbiAgICAgICAgICAgICAgICBwcmV0dHkg4oCTIGl0J3MgYWJvdXQgc29sdmluZyBwcm9ibGVtcyBhbmQgY3JlYXRpbmcgaW50dWl0aXZlLFxuICAgICAgICAgICAgICAgIGVuam95YWJsZSBleHBlcmllbmNlcyBmb3IgdXNlcnMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gXCI+XG4gICAgICAgICAgICAgICAgV2hldGhlciBJJ20gd29ya2luZyBvbiBhIHdlYnNpdGUsIG1vYmlsZSBhcHAsIG9yIG90aGVyIGRpZ2l0YWxcbiAgICAgICAgICAgICAgICBwcm9kdWN0LCBJIGJyaW5nIG15IGNvbW1pdG1lbnQgdG8gZGVzaWduIGV4Y2VsbGVuY2UgYW5kXG4gICAgICAgICAgICAgICAgdXNlci1jZW50ZXJlZCB0aGlua2luZyB0byBldmVyeSBwcm9qZWN0IEkgd29yayBvbi4gSSBsb29rXG4gICAgICAgICAgICAgICAgZm9yd2FyZCB0byB0aGUgb3Bwb3J0dW5pdHkgdG8gYnJpbmcgbXkgc2tpbGxzIGFuZCBwYXNzaW9uIHRvXG4gICAgICAgICAgICAgICAgeW91ciBuZXh0IHByb2plY3QuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIHJlbGF0aXZlIGgtbWF4IHJvdW5kZWQtMnhsIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItZGFyayBiZy1saWdodCBwLTggZGFyazpiZy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCAtcmlnaHQtMyAtei0xMCB3LVsxMDIlXSBoLVsxMDMlXSByb3VuZGVkLVsycmVtXSBiZy1kYXJrIGRhcms6YmctbGlnaHRcIiAvPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2ZpbGVQaWN9IGFsdD1cIkNvZGVidWNrc1wiIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gcm91bmRlZC0yeGxcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC03eGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWROdW1iZXJzIHZhbHVlPXsyfSAvPitcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBjYXBpdGFsaXplIGZvbnQtbWVkaXVtIHRleHQtZGFyay83NSBkYXJrOnRleHQtbGlnaHQvNzVcIj5TYXRpc2ZpZWQgQ2xpZW50czwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC03eGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZE51bWJlcnMgdmFsdWU9ezQwfSAvPitcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBjYXBpdGFsaXplIGZvbnQtbWVkaXVtIHRleHQtZGFyay83NSBkYXJrOnRleHQtbGlnaHQvNzVcIj5Qcm9qZWN0cyBDb21wbGV0ZWQ8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtN3hsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWROdW1iZXJzIHZhbHVlPXsyfSAvPitcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBjYXBpdGFsaXplIGZvbnQtbWVkaXVtIHRleHQtZGFyay83NSBkYXJrOnRleHQtbGlnaHQvNzVcIj5ZZWFycyBPZiBFeHBlcmllbmNlPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTa2lsbHMgLz5cbiAgICAgICAgICA8RXhwZXJpZW5jZS8+XG4gICAgICAgICAgPEVkdWNhdGlvbiAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIl0sIm5hbWVzIjpbIkFuaW1hdGVkVGV4dCIsIkxheW91dCIsIkhlYWQiLCJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwicHJvZmlsZVBpYyIsInVzZUluVmlldyIsInVzZU1vdGlvblZhbHVlIiwidXNlU3ByaW5nIiwiU2tpbGxzIiwiRXhwZXJpZW5jZSIsIkVkdWNhdGlvbiIsIkFuaW1hdGVkTnVtYmVycyIsInZhbHVlIiwicmVmIiwibW90aW9uVmFsdWUiLCJzcHJpbmdWYWx1ZSIsImR1cmF0aW9uIiwiaXNJblZpZXciLCJvbmNlIiwic2V0Iiwib24iLCJsYXRlc3QiLCJjdXJyZW50IiwidG9GaXhlZCIsInRleHRDb250ZW50Iiwic3BhbiIsIkFib3V0IiwidGl0bGUiLCJtZXRhIiwibmVtZSIsImNvbnRlbnQiLCJtYWluIiwiY2xhc3NOYW1lIiwidGV4dCIsImRpdiIsImgyIiwicCIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});