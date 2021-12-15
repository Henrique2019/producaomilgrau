exports.id = 563;
exports.ids = [563];
exports.modules = {

/***/ 853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Background)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const Background = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
  className: props.color,
  children: props.children
});



/***/ }),

/***/ 2951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ CenteredFooter)
});

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./src/utils/AppConfig.ts
var AppConfig = __webpack_require__(1608);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/footer/FooterCopyright.tsx





const FooterCopyright = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "jsx-3513251595" + " " + "footer-copyright",
  children: ["\xA9 Copyright ", new Date().getFullYear(), " ", AppConfig/* AppConfig.title */.X.title, ". Powered with", ' ', /*#__PURE__*/jsx_runtime_.jsx("span", {
    role: "img",
    "aria-label": "Love",
    className: "jsx-3513251595",
    children: "\u2665"
  }), ' ', "by ", /*#__PURE__*/jsx_runtime_.jsx("a", {
    href: "/",
    className: "jsx-3513251595",
    children: "Henrique Ronald"
  }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
    id: "3513251595",
    children: [".footer-copyright.jsx-3513251595 a{--tw-text-opacity:1;color:rgba(3,169,244,var(--tw-text-opacity));}", ".footer-copyright.jsx-3513251595 a:hover{-webkit-text-decoration:underline;text-decoration:underline;}"]
  })]
});


;// CONCATENATED MODULE: ./src/footer/FooterIconList.tsx




const FooterIconList = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "jsx-386846369" + " " + "footer-icon-list flex flex-wrap",
  children: [props.children, /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
    id: "386846369",
    children: [".footer-icon-list.jsx-386846369 a:not(:last-child){margin-right:0.75rem;}", ".footer-icon-list.jsx-386846369 a{--tw-text-opacity:1;color:rgba(160,174,192,var(--tw-text-opacity));}", ".footer-icon-list.jsx-386846369 a:hover{--tw-text-opacity:1;color:rgba(74,85,104,var(--tw-text-opacity));}", ".footer-icon-list.jsx-386846369 svg{height:1.25rem;width:1.25rem;fill:currentColor;}"]
  })]
});


;// CONCATENATED MODULE: ./src/footer/CenteredFooter.tsx






const CenteredFooter = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "jsx-541721229" + " " + "text-center",
  children: [props.logo, /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: "jsx-541721229",
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "jsx-541721229" + " " + "navbar mt-5 flex flex-row justify-center font-medium text-xl text-gray-800",
      children: props.children
    })
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "jsx-541721229" + " " + "mt-8 flex justify-center",
    children: /*#__PURE__*/jsx_runtime_.jsx(FooterIconList, {
      children: props.iconList
    })
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "jsx-541721229" + " " + "mt-8 text-sm",
    children: /*#__PURE__*/jsx_runtime_.jsx(FooterCopyright, {})
  }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
    id: "541721229",
    children: [".navbar.jsx-541721229 li{margin-left:1rem;margin-right:1rem;}"]
  })]
});



/***/ }),

/***/ 7777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const Section = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
  className: `max-w-screen-lg mx-auto px-3 ${props.yPadding ? props.yPadding : 'py-0'}`,
  children: [(props.title || props.description) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "mb-12 text-center",
    children: [props.title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      className: "text-4xl text-gray-900 font-bold",
      children: props.title
    }), props.description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "mt-4 text-xl md:px-20",
      children: props.description
    })]
  }), props.children]
});



/***/ }),

/***/ 2295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ NavbarTwoColumns)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const NavbarTwoColumns = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
  className: "jsx-4057204961" + " " + "flex flex-wrap justify-between items-center",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "jsx-4057204961",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: "/",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
        className: "jsx-4057204961",
        children: props.logo
      })
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("nav", {
    className: "jsx-4057204961",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("ul", {
      className: "jsx-4057204961" + " " + "navbar flex items-center font-medium text-xl text-gray-800",
      children: props.children
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
    id: "4057204961",
    children: [".navbar.jsx-4057204961 li:not(:first-child){margin-top:0px;}", ".navbar.jsx-4057204961 li:not(:last-child){margin-right:1.25rem;}"]
  })]
});



/***/ }),

/***/ 8823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const Logo = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__.default, {
      src: "/logomedral2019.png",
      alt: "Logo Teach Other",
      width: 235,
      height: 60
    })
  });
};



/***/ }),

/***/ 1608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ AppConfig)
/* harmony export */ });
const AppConfig = {
  site_name: 'Cadastro de IP-USO MUTUO',
  title: 'controle de Produçao Medral Geo - MG',
  description: 'cadastro de iluminaçao publica e uso mutuo em Minas Gerais',
  locale: 'pt-br'
};

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;