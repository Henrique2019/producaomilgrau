"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/templates/Hero.tsx":
/*!********************************!*\
  !*** ./src/templates/Hero.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hero": function() { return /* binding */ Hero; }
/* harmony export */ });
/* harmony import */ var C_Users_Jesse_Downloads_medr_producaoMedral_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var _background_Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../background/Background */ "./src/background/Background.tsx");
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/Button */ "./src/button/Button.tsx");
/* harmony import */ var _hero_HeroOneButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hero/HeroOneButton */ "./src/hero/HeroOneButton.tsx");
/* harmony import */ var _layout_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/Section */ "./src/layout/Section.tsx");
/* harmony import */ var _navigation_NavbarTwoColumns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navigation/NavbarTwoColumns */ "./src/navigation/NavbarTwoColumns.tsx");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logo */ "./src/templates/Logo.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Jesse\\Downloads\\medr\\producaoMedral\\src\\templates\\Hero.tsx",
    _this = undefined,
    _s = $RefreshSig$();











var Hero = function Hero() {
  _s();

  var _session$user;

  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)(),
      _useSession2 = (0,C_Users_Jesse_Downloads_medr_producaoMedral_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useSession, 1),
      session = _useSession2[0];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_background_Background__WEBPACK_IMPORTED_MODULE_2__.Background, {
    color: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_layout_Section__WEBPACK_IMPORTED_MODULE_5__.Section, {
      yPadding: "pt-5 pb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_navigation_NavbarTwoColumns__WEBPACK_IMPORTED_MODULE_6__.NavbarTwoColumns, {
        logo: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_7__.Logo, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 31
        }, _this),
        children: session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
            className: "border-l-2 border-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200",
            onClick: function onClick() {
              return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.signOut)({
                callbackUrl: 'https://producaomilgrau.vercel.app/'
              });
            },
            children: "Sair"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, _this)
        }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
          className: "border-l-2 border-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200",
          onClick: function onClick() {
            return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.signIn)('auth0', {
              callbackUrl: 'https://producaomilgrau.vercel.app/producao'
            });
          },
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_layout_Section__WEBPACK_IMPORTED_MODULE_5__.Section, {
      yPadding: " mx-auto pb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_hero_HeroOneButton__WEBPACK_IMPORTED_MODULE_4__.HeroOneButton, {
        title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: ['Produção Medral Geo\n', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            className: "text-medra-100",
            children: "Cadastro de IP-USO MUTUO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, _this)]
        }, void 0, true),
        description: "Atualize a produ\xE7\xE3o em segundos",
        button: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_button_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
          xl: true,
          children: session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: ["Seja Bem Vindo ", session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.name, "!!! ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 55
            }, _this)]
          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
            onClick: function onClick() {
              return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.signIn)('auth0', {
                callbackUrl: 'https://producaomilgrau.vercel.app/producao'
              });
            },
            children: "Acessar aplica\xE7\xE3o agora"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 1
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_s(Hero, "SEs5KwDMySpER9e6+T7fjzx8KCs=", false, function () {
  return [next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession];
});

_c = Hero;


var _c;

$RefreshReg$(_c, "Hero");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjk4NWI1ZWMxNjM1ODc3ZTlkYTUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1TLElBQXVCLEdBQUcsU0FBMUJBLElBQTBCLEdBQU07QUFBQTs7QUFBQTs7QUFDcEMsb0JBQW9CVCw0REFBVSxFQUE5QjtBQUFBO0FBQUEsTUFBT1UsT0FBUDs7QUFFQSxzQkFDRSw4REFBQyw4REFBRDtBQUFZLFNBQUssRUFBQyxFQUFsQjtBQUFBLDRCQUNFLDhEQUFDLG9EQUFEO0FBQVMsY0FBUSxFQUFDLFdBQWxCO0FBQUEsNkJBQ0EsOERBQUMsMEVBQUQ7QUFBa0IsWUFBSSxlQUFFLDhEQUFDLHVDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXhCO0FBQUEsa0JBQ0tBLE9BQU8sZ0JBQ047QUFBQSxpQ0FFRTtBQUNFLHFCQUFTLEVBQUMsK0VBRFo7QUFFRSxtQkFBTyxFQUFFO0FBQUEscUJBQXFCUix5REFBTyxDQUFDO0FBQUVTLGdCQUFBQSxXQUFXLEVBQUU7QUFBZixlQUFELENBQTVCO0FBQUEsYUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLHlCQURNLGdCQVdOO0FBQ0UsbUJBQVMsRUFBQywrRUFEWjtBQUVFLGlCQUFPLEVBQUU7QUFBQSxtQkFBcUJWLHdEQUFNLENBQUMsT0FBRCxFQUFTO0FBQUVVLGNBQUFBLFdBQVcsRUFBRTtBQUFmLGFBQVQsQ0FBM0I7QUFBQSxXQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQXlCSiw4REFBQyxvREFBRDtBQUFTLGNBQVEsRUFBQyxlQUFsQjtBQUFBLDZCQUNRLDhEQUFDLDhEQUFEO0FBQ0UsYUFBSyxlQUNIO0FBQUEscUJBQ0csdUJBREgsZUFFRTtBQUFNLHFCQUFTLEVBQUMsZ0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsd0JBRko7QUFPRSxtQkFBVyxFQUFDLHVDQVBkO0FBUUUsY0FBTSxlQUNGLDhEQUFDLGtEQUFEO0FBQVEsWUFBRSxNQUFWO0FBQUEsb0JBRUdELE9BQU8sZ0JBQ1o7QUFBQSwwQ0FDa0JBLE9BRGxCLGFBQ2tCQSxPQURsQix3Q0FDa0JBLE9BQU8sQ0FBRUUsSUFEM0Isa0RBQ2tCLGNBQWVDLElBRGpDLHVCQUMwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUQxQztBQUFBLDBCQURZLGdCQUtaO0FBRUUsbUJBQU8sRUFBRTtBQUFBLHFCQUFxQlosd0RBQU0sQ0FBQyxPQUFELEVBQVM7QUFBRVUsZ0JBQUFBLFdBQVcsRUFBRTtBQUFmLGVBQVQsQ0FBM0I7QUFBQSxhQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeURELENBNUREOztHQUFNRjtVQUNnQlQ7OztLQURoQlM7QUE4RE4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RlbXBsYXRlcy9IZXJvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kIH0gZnJvbSAnLi4vYmFja2dyb3VuZC9CYWNrZ3JvdW5kJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IHsgSGVyb09uZUJ1dHRvbiB9IGZyb20gJy4uL2hlcm8vSGVyb09uZUJ1dHRvbic7XG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vbGF5b3V0L1NlY3Rpb24nO1xuaW1wb3J0IHsgTmF2YmFyVHdvQ29sdW1ucyB9IGZyb20gJy4uL25hdmlnYXRpb24vTmF2YmFyVHdvQ29sdW1ucyc7XG5pbXBvcnQgeyBMb2dvIH0gZnJvbSAnLi9Mb2dvJztcblxuY29uc3QgSGVybzogTmV4dENvbXBvbmVudFR5cGUgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZXNzaW9uLCBdID0gdXNlU2Vzc2lvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPEJhY2tncm91bmQgY29sb3I9XCJcIj5cbiAgICAgIDxTZWN0aW9uIHlQYWRkaW5nPVwicHQtNSBwYi0zXCI+XG4gICAgICA8TmF2YmFyVHdvQ29sdW1ucyBsb2dvPXs8TG9nbyAvPn0gPlxuICAgICAgICAgIHtzZXNzaW9uID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1sLTIgYm9yZGVyLTIgcHgtNCByb3VuZGVkLWxnIGhvdmVyOmJnLWdyYXktNDAwIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKTogUHJvbWlzZTx2b2lkPiA9PiBzaWduT3V0KHsgY2FsbGJhY2tVcmw6ICdodHRwczovL3Byb2R1Y2FvbWlsZ3JhdS52ZXJjZWwuYXBwLycgfSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTYWlyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWwtMiBib3JkZXItMiBweC00IHJvdW5kZWQtbGcgaG92ZXI6YmctZ3JheS00MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKTogUHJvbWlzZTx2b2lkPiA9PiBzaWduSW4oJ2F1dGgwJyx7IGNhbGxiYWNrVXJsOiAnaHR0cHM6Ly9wcm9kdWNhb21pbGdyYXUudmVyY2VsLmFwcC9wcm9kdWNhbycgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIFxuICAgICAgICA8L05hdmJhclR3b0NvbHVtbnM+XG4gICAgICAgIDwvU2VjdGlvbj5cblxuPFNlY3Rpb24geVBhZGRpbmc9XCIgbXgtYXV0byBwYi0zXCI+XG4gICAgICAgIDxIZXJvT25lQnV0dG9uXG4gICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgeydQcm9kdcOnw6NvIE1lZHJhbCBHZW9cXG4nfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1lZHJhLTEwMFwiPkNhZGFzdHJvIGRlIElQLVVTTyBNVVRVTzwvc3Bhbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIH1cbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkF0dWFsaXplIGEgcHJvZHXDp8OjbyBlbSBzZWd1bmRvc1wiXG4gICAgICAgICAgYnV0dG9uPXsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEJ1dHRvbiB4bD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7c2Vzc2lvbiA/KFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgU2VqYSBCZW0gVmluZG8ge3Nlc3Npb24/LnVzZXI/Lm5hbWV9ISEhIDxiciAvPiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgb25DbGljaz17KCk6IFByb21pc2U8dm9pZD4gPT4gc2lnbkluKCdhdXRoMCcseyBjYWxsYmFja1VybDogJ2h0dHBzOi8vcHJvZHVjYW9taWxncmF1LnZlcmNlbC5hcHAvcHJvZHVjYW8nIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBY2Vzc2FyIGFwbGljYcOnw6NvIGFnb3JhXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L0JhY2tncm91bmQ+XG4gICk7XG59O1xuXG5leHBvcnQgeyBIZXJvIH07XG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJCYWNrZ3JvdW5kIiwiQnV0dG9uIiwiSGVyb09uZUJ1dHRvbiIsIlNlY3Rpb24iLCJOYXZiYXJUd29Db2x1bW5zIiwiTG9nbyIsIkhlcm8iLCJzZXNzaW9uIiwiY2FsbGJhY2tVcmwiLCJ1c2VyIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=