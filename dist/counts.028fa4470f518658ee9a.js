/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./counts.js":
/*!*******************!*\
  !*** ./counts.js ***!
  \*******************/
/***/ (() => {

eval("const countClicks = () => {\r\n\tlet count = 0,\r\n\t\tisDelete = false;\r\n\tdocument.addEventListener(\"click\", () => count++);\r\n\treturn {\r\n\t\tdelete() {\r\n\t\t\tdocument.removeEventListener(\"click\", () => count++);\r\n\t\t\tisDelete = true;\r\n\t\t},\r\n\t\tshowClicks() {\r\n\t\t\tif (isDelete) return null;\r\n\t\t\treturn count;\r\n\t\t},\r\n\t};\r\n};\r\n\r\nconst clicks = countClicks();\r\nconsole.log(clicks);\r\n\n\n//# sourceURL=webpack:///./counts.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./counts.js"]();
/******/ 	
/******/ })()
;