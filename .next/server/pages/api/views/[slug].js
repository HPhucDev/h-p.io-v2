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
exports.id = "pages/api/views/[slug]";
exports.ids = ["pages/api/views/[slug]"];
exports.modules = {

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "(api)/./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!(firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n    firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().initializeApp({\n        credential: firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().credential.cert({\n            client_email: process.env.FIREBASE_CLIENT_EMAIL,\n            private_key: process.env.FIREBASE_PRIVATE_KEY,\n            project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID\n        }),\n        databaseURL: process.env.FIRESTORE_DATABASE_URI\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().database());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZmlyZWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRW5DLElBQUksQ0FBQ0EsbUVBQWlCLEVBQUU7SUFDdEJBLG1FQUFtQixDQUFDO1FBQ2xCSSxVQUFVLEVBQUVKLHFFQUFxQixDQUFDO1lBQ2hDTSxZQUFZLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxxQkFBcUI7WUFDL0NDLFdBQVcsRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLG9CQUFvQjtZQUM3Q0MsVUFBVSxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssK0JBQStCO1NBQ3hELENBQUM7UUFDRkMsV0FBVyxFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sc0JBQXNCO0tBQ2hELENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZWYsOERBQWMsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFudWFyb3JhLmluLy4vbGliL2ZpcmViYXNlLmpzP2FiNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkbWluIGZyb20gXCJmaXJlYmFzZS1hZG1pblwiO1xuXG5pZiAoIWFkbWluLmFwcHMubGVuZ3RoKSB7XG4gIGFkbWluLmluaXRpYWxpemVBcHAoe1xuICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydCh7XG4gICAgICBjbGllbnRfZW1haWw6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0NMSUVOVF9FTUFJTCxcbiAgICAgIHByaXZhdGVfa2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUklWQVRFX0tFWSxcbiAgICAgIHByb2plY3RfaWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gICAgfSksXG4gICAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LkZJUkVTVE9SRV9EQVRBQkFTRV9VUkksXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZG1pbi5kYXRhYmFzZSgpO1xuIl0sIm5hbWVzIjpbImFkbWluIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJjcmVkZW50aWFsIiwiY2VydCIsImNsaWVudF9lbWFpbCIsInByb2Nlc3MiLCJlbnYiLCJGSVJFQkFTRV9DTElFTlRfRU1BSUwiLCJwcml2YXRlX2tleSIsIkZJUkVCQVNFX1BSSVZBVEVfS0VZIiwicHJvamVjdF9pZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQiLCJkYXRhYmFzZVVSTCIsIkZJUkVTVE9SRV9EQVRBQkFTRV9VUkkiLCJkYXRhYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/firebase.js\n");

/***/ }),

/***/ "(api)/./pages/api/views/[slug].js":
/*!***********************************!*\
  !*** ./pages/api/views/[slug].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/firebase */ \"(api)/./lib/firebase.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const ref = _lib_firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ref(\"views\").child(req.query.slug);\n        const { snapshot  } = await ref.transaction((currentViews)=>{\n            if (currentViews === null) {\n                return 1;\n            }\n            return currentViews + 1;\n        });\n        return res.status(200).json({\n            total: snapshot.val()\n        });\n    }\n    if (req.method === \"GET\") {\n        const snapshot1 = await _lib_firebase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ref(\"views\").child(req.query.slug).once(\"value\");\n        const views = snapshot1.val();\n        return res.status(200).json({\n            total: views\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdmlld3MvW3NsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDO0FBRWhDLGlFQUFlLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixNQUFNQyxHQUFHLEdBQUdKLHlEQUFNLENBQUMsT0FBTyxDQUFDLENBQUNLLEtBQUssQ0FBQ0osR0FBRyxDQUFDSyxLQUFLLENBQUNDLElBQUksQ0FBQztRQUNqRCxNQUFNLEVBQUVDLFFBQVEsR0FBRSxHQUFHLE1BQU1KLEdBQUcsQ0FBQ0ssV0FBVyxDQUFDLENBQUNDLFlBQVksR0FBSztZQUMzRCxJQUFJQSxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUN6QixPQUFPLENBQUMsQ0FBQztZQUNYLENBQUM7WUFFRCxPQUFPQSxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQztRQUVGLE9BQU9SLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDMUJDLEtBQUssRUFBRUwsUUFBUSxDQUFDTSxHQUFHLEVBQUU7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUliLEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixNQUFNSyxTQUFRLEdBQUcsTUFBTVIseURBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQ0ssS0FBSyxDQUFDSixHQUFHLENBQUNLLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUNRLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUUsTUFBTUMsS0FBSyxHQUFHUixTQUFRLENBQUNNLEdBQUcsRUFBRTtRQUU1QixPQUFPWixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRUcsS0FBSztTQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0FBQ0gsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFudWFyb3JhLmluLy4vcGFnZXMvYXBpL3ZpZXdzL1tzbHVnXS5qcz84YjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tIFwiQC9saWIvZmlyZWJhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHJlZiA9IGRiLnJlZihcInZpZXdzXCIpLmNoaWxkKHJlcS5xdWVyeS5zbHVnKTtcbiAgICBjb25zdCB7IHNuYXBzaG90IH0gPSBhd2FpdCByZWYudHJhbnNhY3Rpb24oKGN1cnJlbnRWaWV3cykgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRWaWV3cyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN1cnJlbnRWaWV3cyArIDE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgdG90YWw6IHNuYXBzaG90LnZhbCgpLFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGRiLnJlZihcInZpZXdzXCIpLmNoaWxkKHJlcS5xdWVyeS5zbHVnKS5vbmNlKFwidmFsdWVcIik7XG4gICAgY29uc3Qgdmlld3MgPSBzbmFwc2hvdC52YWwoKTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRvdGFsOiB2aWV3cyB9KTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJkYiIsInJlcSIsInJlcyIsIm1ldGhvZCIsInJlZiIsImNoaWxkIiwicXVlcnkiLCJzbHVnIiwic25hcHNob3QiLCJ0cmFuc2FjdGlvbiIsImN1cnJlbnRWaWV3cyIsInN0YXR1cyIsImpzb24iLCJ0b3RhbCIsInZhbCIsIm9uY2UiLCJ2aWV3cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/views/[slug].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/views/[slug].js"));
module.exports = __webpack_exports__;

})();