/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Noto_Sans/NotoSans-Regular.ttf */ "./src/Noto_Sans/NotoSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Noto_Sans/NotoSans-Medium.ttf */ "./src/Noto_Sans/NotoSans-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Noto_Sans/NotoSans-Bold.ttf */ "./src/Noto_Sans/NotoSans-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Noto-Sans;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 500;\n}\n@font-face {\n  font-family: Noto-Sans;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n@font-face {\n  font-family: Noto-Sans;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 700;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: Noto-Sans;\n}\n\nbody {\n  height: 90vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  gap: 50px;\n}\n\n.loading-page {\n    height: 100vh;\n    width: 100vw;\n    position: absolute;\n    top: 0;\n    left: 0;\n    align-items: center;\n    justify-content: center;\n    font-family: Noto-Sans;\n    font-size: 60px;\n    font-weight: 700;\n    color: white;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.desc {\n  font-size: 90px;\n  font-weight: 600;\n}\n.city {\n  font-size: 70px;\n}\n.local-date {\n  padding-top: 10px;\n  font-size: 30px;\n}\n.local-time {\n  padding-top: 8px;\n  font-size: 30px;\n  font-weight: 600;\n}\n.main-temp {\n  font-size: 100px;\n}\n.main-svg {\n  padding-bottom: 12px;\n  height: 120px;\n}\n.toggle-metric {\n  font-size: 25px;\n}\n\n.search-div {\n  height: 50px;\n  display: flex;\n  border-bottom: 2px solid white;\n}\n\n.search-div img {\n  height: 30px;\n  padding-bottom: 5px;\n  align-self: end;\n  justify-self: center;\n}\n\n#search {\n  width: 180px;\n  padding: 16px 0px 5px 16px;\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-size: 23px;\n}\n\n::placeholder {\n  color: white;\n  font-size: 23px;\n  font-weight: 600;\n}\n\n#search:focus {\n  outline: none;\n}\n\n.search-div img:hover,\n#search:hover,\n.toggle-metric:hover {\n  cursor: pointer;\n}\n\n/* Side information */\n.extra {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n\n.extra .box {\n  display: grid;\n  grid-template-columns: 140px 2fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.box img {\n  height: 90px;\n  grid-row: 1 / span 2;\n  align-self: center;\n  justify-self: center;\n}\n\n.box h3 {\n  grid-column: 2;\n  font-size: 30px;\n  font-weight: 700;\n}\n.box p {\n  grid-column: 2;\n  grid-row: 2;\n  font-size: 40px;\n  font-weight: 600;\n}\n\n.background {\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.footer {\n    position: absolute;\n    bottom: 5px;\n    display: flex;\n    gap: 10px;\n}\n\n.footer svg {\n    fill: white;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,4CAA0C;EAC1C,gBAAgB;AAClB;AACA;EACE,sBAAsB;EACtB,4CAAyC;EACzC,gBAAgB;AAClB;AACA;EACE,sBAAsB;EACtB,4CAAuC;EACvC,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,SAAS;AACX;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,oBAAoB;EACpB,aAAa;AACf;AACA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;;;EAGE,eAAe;AACjB;;AAEA,qBAAqB;AACrB;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,WAAW;EACX,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;AACb;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,SAAS;AACb;;AAEA;IACI,WAAW;AACf","sourcesContent":["@font-face {\n  font-family: Noto-Sans;\n  src: url(./Noto_Sans/NotoSans-Regular.ttf);\n  font-weight: 500;\n}\n@font-face {\n  font-family: Noto-Sans;\n  src: url(./Noto_Sans/NotoSans-Medium.ttf);\n  font-weight: 600;\n}\n@font-face {\n  font-family: Noto-Sans;\n  src: url(./Noto_Sans/NotoSans-Bold.ttf);\n  font-weight: 700;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: Noto-Sans;\n}\n\nbody {\n  height: 90vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  gap: 50px;\n}\n\n.loading-page {\n    height: 100vh;\n    width: 100vw;\n    position: absolute;\n    top: 0;\n    left: 0;\n    align-items: center;\n    justify-content: center;\n    font-family: Noto-Sans;\n    font-size: 60px;\n    font-weight: 700;\n    color: white;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.desc {\n  font-size: 90px;\n  font-weight: 600;\n}\n.city {\n  font-size: 70px;\n}\n.local-date {\n  padding-top: 10px;\n  font-size: 30px;\n}\n.local-time {\n  padding-top: 8px;\n  font-size: 30px;\n  font-weight: 600;\n}\n.main-temp {\n  font-size: 100px;\n}\n.main-svg {\n  padding-bottom: 12px;\n  height: 120px;\n}\n.toggle-metric {\n  font-size: 25px;\n}\n\n.search-div {\n  height: 50px;\n  display: flex;\n  border-bottom: 2px solid white;\n}\n\n.search-div img {\n  height: 30px;\n  padding-bottom: 5px;\n  align-self: end;\n  justify-self: center;\n}\n\n#search {\n  width: 180px;\n  padding: 16px 0px 5px 16px;\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-size: 23px;\n}\n\n::placeholder {\n  color: white;\n  font-size: 23px;\n  font-weight: 600;\n}\n\n#search:focus {\n  outline: none;\n}\n\n.search-div img:hover,\n#search:hover,\n.toggle-metric:hover {\n  cursor: pointer;\n}\n\n/* Side information */\n.extra {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n\n.extra .box {\n  display: grid;\n  grid-template-columns: 140px 2fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.box img {\n  height: 90px;\n  grid-row: 1 / span 2;\n  align-self: center;\n  justify-self: center;\n}\n\n.box h3 {\n  grid-column: 2;\n  font-size: 30px;\n  font-weight: 700;\n}\n.box p {\n  grid-column: 2;\n  grid-row: 2;\n  font-size: 40px;\n  font-weight: 600;\n}\n\n.background {\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.footer {\n    position: absolute;\n    bottom: 5px;\n    display: flex;\n    gap: 10px;\n}\n\n.footer svg {\n    fill: white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Noto_Sans/NotoSans-Bold.ttf":
/*!*****************************************!*\
  !*** ./src/Noto_Sans/NotoSans-Bold.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23e70cfbbe0783c66804.ttf";

/***/ }),

/***/ "./src/Noto_Sans/NotoSans-Medium.ttf":
/*!*******************************************!*\
  !*** ./src/Noto_Sans/NotoSans-Medium.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4c42b7a92bf0fdb8ec1.ttf";

/***/ }),

/***/ "./src/Noto_Sans/NotoSans-Regular.ttf":
/*!********************************************!*\
  !*** ./src/Noto_Sans/NotoSans-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eae34fa8f1e0c4c6d797.ttf";

/***/ }),

/***/ "./src/icons/cloud-drizzle.svg":
/*!*************************************!*\
  !*** ./src/icons/cloud-drizzle.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e536cc92e55ab8c11e7c.svg";

/***/ }),

/***/ "./src/icons/cloud-lightning.svg":
/*!***************************************!*\
  !*** ./src/icons/cloud-lightning.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3631e9474c7687f3aac.svg";

/***/ }),

/***/ "./src/icons/cloud-rain.svg":
/*!**********************************!*\
  !*** ./src/icons/cloud-rain.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3650ebd6f2694ba8f24.svg";

/***/ }),

/***/ "./src/icons/cloud-snow.svg":
/*!**********************************!*\
  !*** ./src/icons/cloud-snow.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d319601fc982ee63d12c.svg";

/***/ }),

/***/ "./src/icons/cloud.svg":
/*!*****************************!*\
  !*** ./src/icons/cloud.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "180a1488384a0fd0bcb4.svg";

/***/ }),

/***/ "./src/icons/droplet.svg":
/*!*******************************!*\
  !*** ./src/icons/droplet.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "867ec727f9d589481856.svg";

/***/ }),

/***/ "./src/icons/raindrop.png":
/*!********************************!*\
  !*** ./src/icons/raindrop.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c7da9bbd573e732b531.png";

/***/ }),

/***/ "./src/icons/search.svg":
/*!******************************!*\
  !*** ./src/icons/search.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58eb9abd5f01bfac2522.svg";

/***/ }),

/***/ "./src/icons/sun.svg":
/*!***************************!*\
  !*** ./src/icons/sun.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea2caeb930202f907489.svg";

/***/ }),

/***/ "./src/icons/thermometer.svg":
/*!***********************************!*\
  !*** ./src/icons/thermometer.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b365e7aca65786b3fcf.svg";

/***/ }),

/***/ "./src/icons/wind.svg":
/*!****************************!*\
  !*** ./src/icons/wind.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d27e33c48e5a48585282.svg";

/***/ }),

/***/ "./src/images/day/broken-clouds.jpg":
/*!******************************************!*\
  !*** ./src/images/day/broken-clouds.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e603c7c242c03587549f.jpg";

/***/ }),

/***/ "./src/images/day/clear-sky.jpg":
/*!**************************************!*\
  !*** ./src/images/day/clear-sky.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22c5979d8d7d81c3d033.jpg";

/***/ }),

/***/ "./src/images/day/drizzle.jpg":
/*!************************************!*\
  !*** ./src/images/day/drizzle.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17b2bc26c72749f6ef87.jpg";

/***/ }),

/***/ "./src/images/day/few-clouds.jpg":
/*!***************************************!*\
  !*** ./src/images/day/few-clouds.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "523f706033d755de06ed.jpg";

/***/ }),

/***/ "./src/images/day/overcast.jpg":
/*!*************************************!*\
  !*** ./src/images/day/overcast.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "323d4c2de1f368a6ab6d.jpg";

/***/ }),

/***/ "./src/images/day/rain.jpg":
/*!*********************************!*\
  !*** ./src/images/day/rain.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bfd980ba537fe794c177.jpg";

/***/ }),

/***/ "./src/images/day/scattered-clouds.jpg":
/*!*********************************************!*\
  !*** ./src/images/day/scattered-clouds.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a30bcf3e9deab04569e.jpg";

/***/ }),

/***/ "./src/images/day/snow.jpg":
/*!*********************************!*\
  !*** ./src/images/day/snow.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ae55f0998d9fa262fd4.jpg";

/***/ }),

/***/ "./src/images/day/thunderstorm.jpg":
/*!*****************************************!*\
  !*** ./src/images/day/thunderstorm.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "769de745a33dfe9d66ff.jpg";

/***/ }),

/***/ "./src/images/night/night-clear-sky.jpg":
/*!**********************************************!*\
  !*** ./src/images/night/night-clear-sky.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b2b093f1c3e54a17efc.jpg";

/***/ }),

/***/ "./src/images/night/night-clouds.jpg":
/*!*******************************************!*\
  !*** ./src/images/night/night-clouds.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad46c3975a0ff2f6f204.jpg";

/***/ }),

/***/ "./src/images/night/night-rain.jpg":
/*!*****************************************!*\
  !*** ./src/images/night/night-rain.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86cb0573778e960a8fce.jpg";

/***/ }),

/***/ "./src/images/night/night-snow.jpg":
/*!*****************************************!*\
  !*** ./src/images/night/night-snow.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0c93fe5a87df85237b5.jpg";

/***/ }),

/***/ "./src/images/night/night-thunderstorm.jpg":
/*!*************************************************!*\
  !*** ./src/images/night/night-thunderstorm.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b05760b40614a52364a4.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _images_day_drizzle_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/day/drizzle.jpg */ "./src/images/day/drizzle.jpg");
/* harmony import */ var _images_day_rain_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/day/rain.jpg */ "./src/images/day/rain.jpg");
/* harmony import */ var _images_day_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/day/thunderstorm.jpg */ "./src/images/day/thunderstorm.jpg");
/* harmony import */ var _images_day_clear_sky_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/day/clear-sky.jpg */ "./src/images/day/clear-sky.jpg");
/* harmony import */ var _images_day_few_clouds_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/day/few-clouds.jpg */ "./src/images/day/few-clouds.jpg");
/* harmony import */ var _images_day_scattered_clouds_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/day/scattered-clouds.jpg */ "./src/images/day/scattered-clouds.jpg");
/* harmony import */ var _images_day_broken_clouds_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/day/broken-clouds.jpg */ "./src/images/day/broken-clouds.jpg");
/* harmony import */ var _images_day_overcast_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/day/overcast.jpg */ "./src/images/day/overcast.jpg");
/* harmony import */ var _images_day_snow_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/day/snow.jpg */ "./src/images/day/snow.jpg");
/* harmony import */ var _images_night_night_clear_sky_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/night/night-clear-sky.jpg */ "./src/images/night/night-clear-sky.jpg");
/* harmony import */ var _images_night_night_clouds_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/night/night-clouds.jpg */ "./src/images/night/night-clouds.jpg");
/* harmony import */ var _images_night_night_rain_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/night/night-rain.jpg */ "./src/images/night/night-rain.jpg");
/* harmony import */ var _images_night_night_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/night/night-thunderstorm.jpg */ "./src/images/night/night-thunderstorm.jpg");
/* harmony import */ var _images_night_night_snow_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/night/night-snow.jpg */ "./src/images/night/night-snow.jpg");
/* harmony import */ var _icons_search_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icons/search.svg */ "./src/icons/search.svg");
/* harmony import */ var _icons_thermometer_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icons/thermometer.svg */ "./src/icons/thermometer.svg");
/* harmony import */ var _icons_wind_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./icons/wind.svg */ "./src/icons/wind.svg");
/* harmony import */ var _icons_droplet_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./icons/droplet.svg */ "./src/icons/droplet.svg");
/* harmony import */ var _icons_sun_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./icons/sun.svg */ "./src/icons/sun.svg");
/* harmony import */ var _icons_cloud_snow_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./icons/cloud-snow.svg */ "./src/icons/cloud-snow.svg");
/* harmony import */ var _icons_cloud_drizzle_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./icons/cloud-drizzle.svg */ "./src/icons/cloud-drizzle.svg");
/* harmony import */ var _icons_cloud_rain_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./icons/cloud-rain.svg */ "./src/icons/cloud-rain.svg");
/* harmony import */ var _icons_cloud_lightning_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./icons/cloud-lightning.svg */ "./src/icons/cloud-lightning.svg");
/* harmony import */ var _icons_cloud_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./icons/cloud.svg */ "./src/icons/cloud.svg");
/* harmony import */ var _icons_raindrop_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./icons/raindrop.png */ "./src/icons/raindrop.png");

// Background images














// Weather icons












const WeatherObj = () => {
  let weatherData;
  return {
    weatherData,
    async getWeather(city) {
      let location;
      let latit;
      let longit;

      if (!city) {
        try {
          location = await WeatherObj().getUserLocation();
          latit = location.coords.latitude;
          longit = location.coords.longitude;
        } catch {
          location = await WeatherObj().fetchLocation('london');
          latit = location[0].lat;
          longit = location[0].lon;
        }
      } else {
        location = await WeatherObj().fetchLocation(city);
        latit = location[0].lat;
        longit = location[0].lon;
      }

      this.weatherData = await WeatherObj().fetchWeather(latit, longit);
      return this.weatherData;
    },
    async getUserLocation() {
      const success = (position) => position;
      const error = (error) => error;

      let promise = new Promise((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(
          (pos) => {
            resolve(success(pos));
          },
          (err) => {
            reject(error(err));
          }
        );
      });

      return await promise;
    },
    async fetchLocation(city) {
      const raw = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`,
        { mode: "cors" }
      );
      return raw.json();
    },
    async fetchWeather(lat, lon) {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`,
        { mode: "cors" }
      );
      return data.json();
    },
    convertDate(data) {
      const date = new Date((data.dt + data.timezone) * 1000);
      // Remove user's local time-zone
      return date.toUTCString();
    },
  };
};

const UI = () => {
  let nightMode = false;
  let metric = false;
  return {
    nightMode,
    metric,
    showWeather(data) {
        // Disable loading page 
        const loadingPage = document.querySelector('.loading-page');
        loadingPage.style.display = 'none';

      // Default background & icon
      this.createDefaultBackground();
      this.createDefaultSvg();

      const weatherDesc = document.querySelector(".desc");
      const city = document.querySelector(".city");
      const locDate = document.querySelector(".local-date");
      const locTime = document.querySelector(".local-time");
      const mainTemp = document.querySelector(".main-temp");
      const feelsLike = document.querySelector(".feels-like");
      const wind = document.querySelector(".wind");
      const humid = document.querySelector(".humidity");

      const timestamp = WeatherObj().convertDate(data).substr(17, 5);

      weatherDesc.textContent = data.weather[0].description;
      city.textContent = data.name;
      locDate.textContent = WeatherObj().convertDate(data).substring(0, 17);
      locTime.textContent = timestamp;
      mainTemp.textContent = `°${this.convertTemp(data.main.temp)}`;
      feelsLike.textContent = `°${this.convertTemp(data.main.feels_like)}`;
      wind.textContent = this.getSpeed(data.wind.speed);
      humid.textContent = `${data.main.humidity}%`;

      // Change to night mode between 8pm and 7am
      if (parseInt(timestamp) < 7 || parseInt(timestamp) > 20) {
        this.nightMode = true;
      } else {
        this.nightMode = false;
      }

      const weatherId = data.weather[0].id;
      this.setImages(weatherId);
    },
    setMetric() {
      this.metric ? (this.metric = false) : (this.metric = true);
    },
    convertTemp(kelvin) {
      // Kelvin -> Celcius/Fahrenheit rounded to nearest integer
      if (this.metric) {
        return Math.round(kelvin - 273.15);
      } else {
        return Math.round((9 / 5) * (kelvin - 273.15) + 32);
      }
    },
    getSpeed(speed) {
      if (!this.metric) {
        return `${Math.round((speed * 2.236936 * 10) / 10)} m/h`;
      } else {
        return `${Math.round((speed * 10) / 10)} m/s`;
      }
    },
    setFixedIcons() {
      const searchBox = document.querySelector(".search-div");
      const box1 = document.querySelector(".extra .box:nth-child(1)");
      const box2 = document.querySelector(".extra .box:nth-child(2)");
      const box3 = document.querySelector(".extra .box:nth-child(3)");

      const search = document.createElement("img");
      const feelsLike = document.createElement("img");
      const wind = document.createElement("img");
      const humid = document.createElement("img");

      search.src = _icons_search_svg__WEBPACK_IMPORTED_MODULE_15__;
      feelsLike.src = _icons_thermometer_svg__WEBPACK_IMPORTED_MODULE_16__;
      wind.src = _icons_wind_svg__WEBPACK_IMPORTED_MODULE_17__;
      humid.src = _icons_droplet_svg__WEBPACK_IMPORTED_MODULE_18__;

      searchBox.append(search);
      box1.append(feelsLike);
      box2.append(wind);
      box3.append(humid);
    },
    createDefaultBackground() {
      if (document.querySelector(".background")) return;

      const container = document.querySelector(".container");

      const img = document.createElement("img");
      img.classList.add("background");
      img.src = _images_night_night_clear_sky_jpg__WEBPACK_IMPORTED_MODULE_10__;
      container.append(img);
    },
    createDefaultSvg() {
      if (document.querySelector(".main-svg")) return;
      const div = document.querySelector(".svg-div");

      const svg = document.createElement("img");
      svg.classList.add("main-svg");
      svg.src = _icons_cloud_svg__WEBPACK_IMPORTED_MODULE_24__;
      div.append(svg);
    },
    setBgImage(link) {
      const img = document.querySelector(".background");

      link ? img.setAttribute("src", link) : this.createDefaultBackground();
    },
    setIcon(link) {
      const svg = document.querySelector(".main-svg");

      link ? svg.setAttribute("src", link) : this.createDefaultSvg();
    },
    setImages(id) {
        // Change background & icon according to weather ID
      if (this.nightMode) {
        if (id >= 200 && id <= 232)
          this.setBgImage(_images_night_night_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_13__), this.setIcon(_icons_cloud_lightning_svg__WEBPACK_IMPORTED_MODULE_23__);
        if (id >= 300 && id <= 531)
          this.setBgImage(_images_night_night_rain_jpg__WEBPACK_IMPORTED_MODULE_12__), this.setIcon(_icons_cloud_rain_svg__WEBPACK_IMPORTED_MODULE_22__);
        if (id >= 600 && id <= 622)
          this.setBgImage(_images_night_night_snow_jpg__WEBPACK_IMPORTED_MODULE_14__), this.setIcon(_icons_cloud_snow_svg__WEBPACK_IMPORTED_MODULE_20__);
        if (id === 800) this.setBgImage(_images_night_night_clear_sky_jpg__WEBPACK_IMPORTED_MODULE_10__), this.setIcon(_icons_sun_svg__WEBPACK_IMPORTED_MODULE_19__);
        if (id >= 801 && id <= 804) this.setBgImage(_images_night_night_clouds_jpg__WEBPACK_IMPORTED_MODULE_11__);
      } else {
        if (id >= 200 && id <= 232)
          this.setBgImage(_images_day_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_3__), this.setIcon(_icons_cloud_lightning_svg__WEBPACK_IMPORTED_MODULE_23__);
        if (id >= 300 && id <= 321)
          this.setBgImage(_images_day_drizzle_jpg__WEBPACK_IMPORTED_MODULE_1__), this.setIcon(_icons_cloud_drizzle_svg__WEBPACK_IMPORTED_MODULE_21__);
        if (id >= 500 && id <= 531)
          this.setBgImage(_images_day_rain_jpg__WEBPACK_IMPORTED_MODULE_2__), this.setIcon(_icons_cloud_rain_svg__WEBPACK_IMPORTED_MODULE_22__);
        if (id >= 600 && id <= 622)
          this.setBgImage(_images_day_snow_jpg__WEBPACK_IMPORTED_MODULE_9__), this.setIcon(_icons_cloud_snow_svg__WEBPACK_IMPORTED_MODULE_20__);
        if (id === 800) this.setBgImage(_images_day_clear_sky_jpg__WEBPACK_IMPORTED_MODULE_4__), this.setIcon(_icons_sun_svg__WEBPACK_IMPORTED_MODULE_19__);
        if (id === 801) this.setBgImage(_images_day_few_clouds_jpg__WEBPACK_IMPORTED_MODULE_5__);
        if (id === 802) this.setBgImage(_images_day_scattered_clouds_jpg__WEBPACK_IMPORTED_MODULE_6__);
        if (id === 803) this.setBgImage(_images_day_broken_clouds_jpg__WEBPACK_IMPORTED_MODULE_7__);
        if (id === 804) this.setBgImage(_images_day_overcast_jpg__WEBPACK_IMPORTED_MODULE_8__);
      }
    },
    setLoadingPage() {

        function setFavicon() {
            const favicon = document.createElement("link");
            favicon.setAttribute("rel", "icon");
            favicon.setAttribute("type", "image/x-icon");
            favicon.setAttribute("href", _icons_raindrop_png__WEBPACK_IMPORTED_MODULE_25__);
            document.head.append(favicon);
        }

        function renderGithubIcon() {
            const a = document.createElement('a');
            a.href = 'https://github.com/xiejon';

            const footer = document.querySelector('.footer')
            const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        
            iconSvg.setAttribute('width', '24');
            iconSvg.setAttribute('height', '24');
            iconSvg.setAttribute('viewbox', '0 0 24 24');
            iconPath.setAttribute('d', "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z");
        
            a.append(iconSvg);
            iconSvg.appendChild(iconPath);
            footer.append(a)
        }

        setFavicon();
        renderGithubIcon();

        const loadingPage = document.createElement('div');
        const content = document.createElement('p');

        loadingPage.classList.add('loading-page')
        loadingPage.style.backgroundColor = 'rgb(125, 186, 230)';
        loadingPage.style.zIndex = '999'
        loadingPage.style.display = 'flex';

        content.textContent = 'Gathering data...'

        document.body.append(loadingPage)
        loadingPage.append(content);
    }
  };
};

// Event listener for search button
async function searchListener(obj, widget) {
  const search = document.querySelector(".search-div img");
  const input = document.querySelector("#search");

  const searchLoc = async () => {
    const data = await widget.getWeather(input.value);
    obj.showWeather(data);
    input.value = "";
  };
  search.addEventListener("click", searchLoc);
}

// Event listener to toggle imperial/metric
function metricListener(obj, widget) {
  const btn = document.querySelector(".toggle-metric");

  const setMetric = () => {
    obj.setMetric();
    obj.showWeather(widget.weatherData);
  };

  btn.addEventListener("click", setMetric);
}

async function runApp() {
  const widget = WeatherObj();
  const weatherData = await widget.getWeather();

  const newUI = UI();
  newUI.setFixedIcons();
  newUI.showWeather(weatherData);

  metricListener(newUI, widget);
  searchListener(newUI, widget);
}

UI().setLoadingPage();
runApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLTIvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLTIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwLTIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLTIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL05vdG9fU2Fucy9Ob3RvU2Fucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vTm90b19TYW5zL05vdG9TYW5zLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL05vdG9fU2Fucy9Ob3RvU2Fucy1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTm90by1TYW5zO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTm90by1TYW5zO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTm90by1TYW5zO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IE5vdG8tU2FucztcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ubG9hZGluZy1wYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBOb3RvLVNhbnM7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5kZXNjIHtcXG4gIGZvbnQtc2l6ZTogOTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5jaXR5IHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG59XFxuLmxvY2FsLWRhdGUge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5sb2NhbC10aW1lIHtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubWFpbi10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcbi5tYWluLXN2ZyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcbi50b2dnbGUtbWV0cmljIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnNlYXJjaC1kaXYge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3NlYXJjaCB7XFxuICB3aWR0aDogMTgwcHg7XFxuICBwYWRkaW5nOiAxNnB4IDBweCA1cHggMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNzZWFyY2g6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgaW1nOmhvdmVyLFxcbiNzZWFyY2g6aG92ZXIsXFxuLnRvZ2dsZS1tZXRyaWM6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBTaWRlIGluZm9ybWF0aW9uICovXFxuLmV4dHJhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uZXh0cmEgLmJveCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNDBweCAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi5ib3ggaW1nIHtcXG4gIGhlaWdodDogOTBweDtcXG4gIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5ib3ggaDMge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYm94IHAge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb290ZXIgc3ZnIHtcXG4gICAgZmlsbDogd2hpdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUEwQztFQUMxQyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBeUM7RUFDekMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsNENBQXVDO0VBQ3ZDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxlQUFlO0FBQ2pCOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTm90by1TYW5zO1xcbiAgc3JjOiB1cmwoLi9Ob3RvX1NhbnMvTm90b1NhbnMtUmVndWxhci50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTm90by1TYW5zO1xcbiAgc3JjOiB1cmwoLi9Ob3RvX1NhbnMvTm90b1NhbnMtTWVkaXVtLnR0Zik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBOb3RvLVNhbnM7XFxuICBzcmM6IHVybCguL05vdG9fU2Fucy9Ob3RvU2Fucy1Cb2xkLnR0Zik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogTm90by1TYW5zO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogOTB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5sb2FkaW5nLXBhZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IE5vdG8tU2FucztcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmRlc2Mge1xcbiAgZm9udC1zaXplOiA5MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmNpdHkge1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbn1cXG4ubG9jYWwtZGF0ZSB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLmxvY2FsLXRpbWUge1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5tYWluLXRlbXAge1xcbiAgZm9udC1zaXplOiAxMDBweDtcXG59XFxuLm1haW4tc3ZnIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG59XFxuLnRvZ2dsZS1tZXRyaWMge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uc2VhcmNoLWRpdiB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jc2VhcmNoIHtcXG4gIHdpZHRoOiAxODBweDtcXG4gIHBhZGRpbmc6IDE2cHggMHB4IDVweCAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIzcHg7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI3NlYXJjaDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWRpdiBpbWc6aG92ZXIsXFxuI3NlYXJjaDpob3ZlcixcXG4udG9nZ2xlLW1ldHJpYzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFNpZGUgaW5mb3JtYXRpb24gKi9cXG4uZXh0cmEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5leHRyYSAuYm94IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE0MHB4IDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLmJveCBpbWcge1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgZ3JpZC1yb3c6IDEgLyBzcGFuIDI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmJveCBoMyB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5ib3ggcCB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvb3RlciBzdmcge1xcbiAgICBmaWxsOiB3aGl0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbi8vIEJhY2tncm91bmQgaW1hZ2VzXG5pbXBvcnQgRHJpenpsZUltZyBmcm9tIFwiLi9pbWFnZXMvZGF5L2RyaXp6bGUuanBnXCI7XG5pbXBvcnQgUmFpbkltZyBmcm9tIFwiLi9pbWFnZXMvZGF5L3JhaW4uanBnXCI7XG5pbXBvcnQgVGh1bmRlckltZyBmcm9tIFwiLi9pbWFnZXMvZGF5L3RodW5kZXJzdG9ybS5qcGdcIjtcbmltcG9ydCBDbGVhcnNreUltZyBmcm9tIFwiLi9pbWFnZXMvZGF5L2NsZWFyLXNreS5qcGdcIjtcbmltcG9ydCBGZXdDbG91ZHNJbWcgZnJvbSBcIi4vaW1hZ2VzL2RheS9mZXctY2xvdWRzLmpwZ1wiO1xuaW1wb3J0IFNjYXR0ZXJDbG91ZHNJbWcgZnJvbSBcIi4vaW1hZ2VzL2RheS9zY2F0dGVyZWQtY2xvdWRzLmpwZ1wiO1xuaW1wb3J0IEJyb2tlbkNsb3Vkc0ltZyBmcm9tIFwiLi9pbWFnZXMvZGF5L2Jyb2tlbi1jbG91ZHMuanBnXCI7XG5pbXBvcnQgT3ZlcmNhc3RJbWcgZnJvbSBcIi4vaW1hZ2VzL2RheS9vdmVyY2FzdC5qcGdcIjtcbmltcG9ydCBTbm93SW1nIGZyb20gXCIuL2ltYWdlcy9kYXkvc25vdy5qcGdcIjtcbmltcG9ydCBOaWdodENsZWFyc2t5SW1nIGZyb20gXCIuL2ltYWdlcy9uaWdodC9uaWdodC1jbGVhci1za3kuanBnXCI7XG5pbXBvcnQgTmlnaHRDbG91ZHNJbWcgZnJvbSBcIi4vaW1hZ2VzL25pZ2h0L25pZ2h0LWNsb3Vkcy5qcGdcIjtcbmltcG9ydCBOaWdodFJhaW5JbWcgZnJvbSBcIi4vaW1hZ2VzL25pZ2h0L25pZ2h0LXJhaW4uanBnXCI7XG5pbXBvcnQgTmlnaHRUaHVuZGVySW1nIGZyb20gXCIuL2ltYWdlcy9uaWdodC9uaWdodC10aHVuZGVyc3Rvcm0uanBnXCI7XG5pbXBvcnQgTmlnaHRTbm93SW1nIGZyb20gXCIuL2ltYWdlcy9uaWdodC9uaWdodC1zbm93LmpwZ1wiO1xuLy8gV2VhdGhlciBpY29uc1xuaW1wb3J0IFNlYXJjaFN2ZyBmcm9tIFwiLi9pY29ucy9zZWFyY2guc3ZnXCI7XG5pbXBvcnQgVGhlcm1TdmcgZnJvbSBcIi4vaWNvbnMvdGhlcm1vbWV0ZXIuc3ZnXCI7XG5pbXBvcnQgV2luZFN2ZyBmcm9tIFwiLi9pY29ucy93aW5kLnN2Z1wiO1xuaW1wb3J0IEh1bWlkU3ZnIGZyb20gXCIuL2ljb25zL2Ryb3BsZXQuc3ZnXCI7XG5pbXBvcnQgU3VuU3ZnIGZyb20gXCIuL2ljb25zL3N1bi5zdmdcIjtcbmltcG9ydCBTbm93U3ZnIGZyb20gXCIuL2ljb25zL2Nsb3VkLXNub3cuc3ZnXCI7XG5pbXBvcnQgRHJpenpsZVN2ZyBmcm9tIFwiLi9pY29ucy9jbG91ZC1kcml6emxlLnN2Z1wiO1xuaW1wb3J0IFJhaW5TdmcgZnJvbSBcIi4vaWNvbnMvY2xvdWQtcmFpbi5zdmdcIjtcbmltcG9ydCBMaWdodG5pbmdTdmcgZnJvbSBcIi4vaWNvbnMvY2xvdWQtbGlnaHRuaW5nLnN2Z1wiO1xuaW1wb3J0IENsb3VkU3ZnIGZyb20gXCIuL2ljb25zL2Nsb3VkLnN2Z1wiO1xuaW1wb3J0IFJhaW5GYXZpY29uIGZyb20gXCIuL2ljb25zL3JhaW5kcm9wLnBuZ1wiO1xuXG5jb25zdCBXZWF0aGVyT2JqID0gKCkgPT4ge1xuICBsZXQgd2VhdGhlckRhdGE7XG4gIHJldHVybiB7XG4gICAgd2VhdGhlckRhdGEsXG4gICAgYXN5bmMgZ2V0V2VhdGhlcihjaXR5KSB7XG4gICAgICBsZXQgbG9jYXRpb247XG4gICAgICBsZXQgbGF0aXQ7XG4gICAgICBsZXQgbG9uZ2l0O1xuXG4gICAgICBpZiAoIWNpdHkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsb2NhdGlvbiA9IGF3YWl0IFdlYXRoZXJPYmooKS5nZXRVc2VyTG9jYXRpb24oKTtcbiAgICAgICAgICBsYXRpdCA9IGxvY2F0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcbiAgICAgICAgICBsb25naXQgPSBsb2NhdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICBsb2NhdGlvbiA9IGF3YWl0IFdlYXRoZXJPYmooKS5mZXRjaExvY2F0aW9uKCdsb25kb24nKTtcbiAgICAgICAgICBsYXRpdCA9IGxvY2F0aW9uWzBdLmxhdDtcbiAgICAgICAgICBsb25naXQgPSBsb2NhdGlvblswXS5sb247XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uID0gYXdhaXQgV2VhdGhlck9iaigpLmZldGNoTG9jYXRpb24oY2l0eSk7XG4gICAgICAgIGxhdGl0ID0gbG9jYXRpb25bMF0ubGF0O1xuICAgICAgICBsb25naXQgPSBsb2NhdGlvblswXS5sb247XG4gICAgICB9XG5cbiAgICAgIHRoaXMud2VhdGhlckRhdGEgPSBhd2FpdCBXZWF0aGVyT2JqKCkuZmV0Y2hXZWF0aGVyKGxhdGl0LCBsb25naXQpO1xuICAgICAgcmV0dXJuIHRoaXMud2VhdGhlckRhdGE7XG4gICAgfSxcbiAgICBhc3luYyBnZXRVc2VyTG9jYXRpb24oKSB7XG4gICAgICBjb25zdCBzdWNjZXNzID0gKHBvc2l0aW9uKSA9PiBwb3NpdGlvbjtcbiAgICAgIGNvbnN0IGVycm9yID0gKGVycm9yKSA9PiBlcnJvcjtcblxuICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgICAgIChwb3MpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoc3VjY2Vzcyhwb3MpKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcihlcnIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGF3YWl0IHByb21pc2U7XG4gICAgfSxcbiAgICBhc3luYyBmZXRjaExvY2F0aW9uKGNpdHkpIHtcbiAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5fSZhcHBpZD1iYjlhNGE4YjM3NjJiYjQ3YTNiN2ZmMzI5ZDEwYjg4ZmAsXG4gICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiByYXcuanNvbigpO1xuICAgIH0sXG4gICAgYXN5bmMgZmV0Y2hXZWF0aGVyKGxhdCwgbG9uKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9YmI5YTRhOGIzNzYyYmI0N2EzYjdmZjMyOWQxMGI4OGZgLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YS5qc29uKCk7XG4gICAgfSxcbiAgICBjb252ZXJ0RGF0ZShkYXRhKSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKGRhdGEuZHQgKyBkYXRhLnRpbWV6b25lKSAqIDEwMDApO1xuICAgICAgLy8gUmVtb3ZlIHVzZXIncyBsb2NhbCB0aW1lLXpvbmVcbiAgICAgIHJldHVybiBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmNvbnN0IFVJID0gKCkgPT4ge1xuICBsZXQgbmlnaHRNb2RlID0gZmFsc2U7XG4gIGxldCBtZXRyaWMgPSBmYWxzZTtcbiAgcmV0dXJuIHtcbiAgICBuaWdodE1vZGUsXG4gICAgbWV0cmljLFxuICAgIHNob3dXZWF0aGVyKGRhdGEpIHtcbiAgICAgICAgLy8gRGlzYWJsZSBsb2FkaW5nIHBhZ2UgXG4gICAgICAgIGNvbnN0IGxvYWRpbmdQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmctcGFnZScpO1xuICAgICAgICBsb2FkaW5nUGFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAvLyBEZWZhdWx0IGJhY2tncm91bmQgJiBpY29uXG4gICAgICB0aGlzLmNyZWF0ZURlZmF1bHRCYWNrZ3JvdW5kKCk7XG4gICAgICB0aGlzLmNyZWF0ZURlZmF1bHRTdmcoKTtcblxuICAgICAgY29uc3Qgd2VhdGhlckRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NcIik7XG4gICAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpO1xuICAgICAgY29uc3QgbG9jRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYWwtZGF0ZVwiKTtcbiAgICAgIGNvbnN0IGxvY1RpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2FsLXRpbWVcIik7XG4gICAgICBjb25zdCBtYWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi10ZW1wXCIpO1xuICAgICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVscy1saWtlXCIpO1xuICAgICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZFwiKTtcbiAgICAgIGNvbnN0IGh1bWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcblxuICAgICAgY29uc3QgdGltZXN0YW1wID0gV2VhdGhlck9iaigpLmNvbnZlcnREYXRlKGRhdGEpLnN1YnN0cigxNywgNSk7XG5cbiAgICAgIHdlYXRoZXJEZXNjLnRleHRDb250ZW50ID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgY2l0eS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICAgIGxvY0RhdGUudGV4dENvbnRlbnQgPSBXZWF0aGVyT2JqKCkuY29udmVydERhdGUoZGF0YSkuc3Vic3RyaW5nKDAsIDE3KTtcbiAgICAgIGxvY1RpbWUudGV4dENvbnRlbnQgPSB0aW1lc3RhbXA7XG4gICAgICBtYWluVGVtcC50ZXh0Q29udGVudCA9IGDCsCR7dGhpcy5jb252ZXJ0VGVtcChkYXRhLm1haW4udGVtcCl9YDtcbiAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGDCsCR7dGhpcy5jb252ZXJ0VGVtcChkYXRhLm1haW4uZmVlbHNfbGlrZSl9YDtcbiAgICAgIHdpbmQudGV4dENvbnRlbnQgPSB0aGlzLmdldFNwZWVkKGRhdGEud2luZC5zcGVlZCk7XG4gICAgICBodW1pZC50ZXh0Q29udGVudCA9IGAke2RhdGEubWFpbi5odW1pZGl0eX0lYDtcblxuICAgICAgLy8gQ2hhbmdlIHRvIG5pZ2h0IG1vZGUgYmV0d2VlbiA4cG0gYW5kIDdhbVxuICAgICAgaWYgKHBhcnNlSW50KHRpbWVzdGFtcCkgPCA3IHx8IHBhcnNlSW50KHRpbWVzdGFtcCkgPiAyMCkge1xuICAgICAgICB0aGlzLm5pZ2h0TW9kZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5pZ2h0TW9kZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3ZWF0aGVySWQgPSBkYXRhLndlYXRoZXJbMF0uaWQ7XG4gICAgICB0aGlzLnNldEltYWdlcyh3ZWF0aGVySWQpO1xuICAgIH0sXG4gICAgc2V0TWV0cmljKCkge1xuICAgICAgdGhpcy5tZXRyaWMgPyAodGhpcy5tZXRyaWMgPSBmYWxzZSkgOiAodGhpcy5tZXRyaWMgPSB0cnVlKTtcbiAgICB9LFxuICAgIGNvbnZlcnRUZW1wKGtlbHZpbikge1xuICAgICAgLy8gS2VsdmluIC0+IENlbGNpdXMvRmFocmVuaGVpdCByb3VuZGVkIHRvIG5lYXJlc3QgaW50ZWdlclxuICAgICAgaWYgKHRoaXMubWV0cmljKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGtlbHZpbiAtIDI3My4xNSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgoOSAvIDUpICogKGtlbHZpbiAtIDI3My4xNSkgKyAzMik7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRTcGVlZChzcGVlZCkge1xuICAgICAgaWYgKCF0aGlzLm1ldHJpYykge1xuICAgICAgICByZXR1cm4gYCR7TWF0aC5yb3VuZCgoc3BlZWQgKiAyLjIzNjkzNiAqIDEwKSAvIDEwKX0gbS9oYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKChzcGVlZCAqIDEwKSAvIDEwKX0gbS9zYDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldEZpeGVkSWNvbnMoKSB7XG4gICAgICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1kaXZcIik7XG4gICAgICBjb25zdCBib3gxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leHRyYSAuYm94Om50aC1jaGlsZCgxKVwiKTtcbiAgICAgIGNvbnN0IGJveDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4dHJhIC5ib3g6bnRoLWNoaWxkKDIpXCIpO1xuICAgICAgY29uc3QgYm94MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXh0cmEgLmJveDpudGgtY2hpbGQoMylcIik7XG5cbiAgICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBjb25zdCBodW1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgIHNlYXJjaC5zcmMgPSBTZWFyY2hTdmc7XG4gICAgICBmZWVsc0xpa2Uuc3JjID0gVGhlcm1Tdmc7XG4gICAgICB3aW5kLnNyYyA9IFdpbmRTdmc7XG4gICAgICBodW1pZC5zcmMgPSBIdW1pZFN2ZztcblxuICAgICAgc2VhcmNoQm94LmFwcGVuZChzZWFyY2gpO1xuICAgICAgYm94MS5hcHBlbmQoZmVlbHNMaWtlKTtcbiAgICAgIGJveDIuYXBwZW5kKHdpbmQpO1xuICAgICAgYm94My5hcHBlbmQoaHVtaWQpO1xuICAgIH0sXG4gICAgY3JlYXRlRGVmYXVsdEJhY2tncm91bmQoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrZ3JvdW5kXCIpKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuXG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kXCIpO1xuICAgICAgaW1nLnNyYyA9IE5pZ2h0Q2xlYXJza3lJbWc7XG4gICAgICBjb250YWluZXIuYXBwZW5kKGltZyk7XG4gICAgfSxcbiAgICBjcmVhdGVEZWZhdWx0U3ZnKCkge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1zdmdcIikpIHJldHVybjtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ZnLWRpdlwiKTtcblxuICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIHN2Zy5jbGFzc0xpc3QuYWRkKFwibWFpbi1zdmdcIik7XG4gICAgICBzdmcuc3JjID0gQ2xvdWRTdmc7XG4gICAgICBkaXYuYXBwZW5kKHN2Zyk7XG4gICAgfSxcbiAgICBzZXRCZ0ltYWdlKGxpbmspIHtcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja2dyb3VuZFwiKTtcblxuICAgICAgbGluayA/IGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbGluaykgOiB0aGlzLmNyZWF0ZURlZmF1bHRCYWNrZ3JvdW5kKCk7XG4gICAgfSxcbiAgICBzZXRJY29uKGxpbmspIHtcbiAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1zdmdcIik7XG5cbiAgICAgIGxpbmsgPyBzdmcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGxpbmspIDogdGhpcy5jcmVhdGVEZWZhdWx0U3ZnKCk7XG4gICAgfSxcbiAgICBzZXRJbWFnZXMoaWQpIHtcbiAgICAgICAgLy8gQ2hhbmdlIGJhY2tncm91bmQgJiBpY29uIGFjY29yZGluZyB0byB3ZWF0aGVyIElEXG4gICAgICBpZiAodGhpcy5uaWdodE1vZGUpIHtcbiAgICAgICAgaWYgKGlkID49IDIwMCAmJiBpZCA8PSAyMzIpXG4gICAgICAgICAgdGhpcy5zZXRCZ0ltYWdlKE5pZ2h0VGh1bmRlckltZyksIHRoaXMuc2V0SWNvbihMaWdodG5pbmdTdmcpO1xuICAgICAgICBpZiAoaWQgPj0gMzAwICYmIGlkIDw9IDUzMSlcbiAgICAgICAgICB0aGlzLnNldEJnSW1hZ2UoTmlnaHRSYWluSW1nKSwgdGhpcy5zZXRJY29uKFJhaW5TdmcpO1xuICAgICAgICBpZiAoaWQgPj0gNjAwICYmIGlkIDw9IDYyMilcbiAgICAgICAgICB0aGlzLnNldEJnSW1hZ2UoTmlnaHRTbm93SW1nKSwgdGhpcy5zZXRJY29uKFNub3dTdmcpO1xuICAgICAgICBpZiAoaWQgPT09IDgwMCkgdGhpcy5zZXRCZ0ltYWdlKE5pZ2h0Q2xlYXJza3lJbWcpLCB0aGlzLnNldEljb24oU3VuU3ZnKTtcbiAgICAgICAgaWYgKGlkID49IDgwMSAmJiBpZCA8PSA4MDQpIHRoaXMuc2V0QmdJbWFnZShOaWdodENsb3Vkc0ltZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaWQgPj0gMjAwICYmIGlkIDw9IDIzMilcbiAgICAgICAgICB0aGlzLnNldEJnSW1hZ2UoVGh1bmRlckltZyksIHRoaXMuc2V0SWNvbihMaWdodG5pbmdTdmcpO1xuICAgICAgICBpZiAoaWQgPj0gMzAwICYmIGlkIDw9IDMyMSlcbiAgICAgICAgICB0aGlzLnNldEJnSW1hZ2UoRHJpenpsZUltZyksIHRoaXMuc2V0SWNvbihEcml6emxlU3ZnKTtcbiAgICAgICAgaWYgKGlkID49IDUwMCAmJiBpZCA8PSA1MzEpXG4gICAgICAgICAgdGhpcy5zZXRCZ0ltYWdlKFJhaW5JbWcpLCB0aGlzLnNldEljb24oUmFpblN2Zyk7XG4gICAgICAgIGlmIChpZCA+PSA2MDAgJiYgaWQgPD0gNjIyKVxuICAgICAgICAgIHRoaXMuc2V0QmdJbWFnZShTbm93SW1nKSwgdGhpcy5zZXRJY29uKFNub3dTdmcpO1xuICAgICAgICBpZiAoaWQgPT09IDgwMCkgdGhpcy5zZXRCZ0ltYWdlKENsZWFyc2t5SW1nKSwgdGhpcy5zZXRJY29uKFN1blN2Zyk7XG4gICAgICAgIGlmIChpZCA9PT0gODAxKSB0aGlzLnNldEJnSW1hZ2UoRmV3Q2xvdWRzSW1nKTtcbiAgICAgICAgaWYgKGlkID09PSA4MDIpIHRoaXMuc2V0QmdJbWFnZShTY2F0dGVyQ2xvdWRzSW1nKTtcbiAgICAgICAgaWYgKGlkID09PSA4MDMpIHRoaXMuc2V0QmdJbWFnZShCcm9rZW5DbG91ZHNJbWcpO1xuICAgICAgICBpZiAoaWQgPT09IDgwNCkgdGhpcy5zZXRCZ0ltYWdlKE92ZXJjYXN0SW1nKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldExvYWRpbmdQYWdlKCkge1xuXG4gICAgICAgIGZ1bmN0aW9uIHNldEZhdmljb24oKSB7XG4gICAgICAgICAgICBjb25zdCBmYXZpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgICAgICAgICBmYXZpY29uLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcImljb25cIik7XG4gICAgICAgICAgICBmYXZpY29uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJpbWFnZS94LWljb25cIik7XG4gICAgICAgICAgICBmYXZpY29uLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgUmFpbkZhdmljb24pO1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQoZmF2aWNvbik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJHaXRodWJJY29uKCkge1xuICAgICAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGEuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20veGllam9uJztcblxuICAgICAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpXG4gICAgICAgICAgICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgICAgIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzI0Jyk7XG4gICAgICAgICAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzI0Jyk7XG4gICAgICAgICAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld2JveCcsICcwIDAgMjQgMjQnKTtcbiAgICAgICAgICAgIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnZCcsIFwiTTEyIDBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnpcIik7XG4gICAgICAgIFxuICAgICAgICAgICAgYS5hcHBlbmQoaWNvblN2Zyk7XG4gICAgICAgICAgICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcbiAgICAgICAgICAgIGZvb3Rlci5hcHBlbmQoYSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEZhdmljb24oKTtcbiAgICAgICAgcmVuZGVyR2l0aHViSWNvbigpO1xuXG4gICAgICAgIGNvbnN0IGxvYWRpbmdQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgbG9hZGluZ1BhZ2UuY2xhc3NMaXN0LmFkZCgnbG9hZGluZy1wYWdlJylcbiAgICAgICAgbG9hZGluZ1BhZ2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigxMjUsIDE4NiwgMjMwKSc7XG4gICAgICAgIGxvYWRpbmdQYWdlLnN0eWxlLnpJbmRleCA9ICc5OTknXG4gICAgICAgIGxvYWRpbmdQYWdlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9ICdHYXRoZXJpbmcgZGF0YS4uLidcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChsb2FkaW5nUGFnZSlcbiAgICAgICAgbG9hZGluZ1BhZ2UuYXBwZW5kKGNvbnRlbnQpO1xuICAgIH1cbiAgfTtcbn07XG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZvciBzZWFyY2ggYnV0dG9uXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hMaXN0ZW5lcihvYmosIHdpZGdldCkge1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1kaXYgaW1nXCIpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoXCIpO1xuXG4gIGNvbnN0IHNlYXJjaExvYyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2lkZ2V0LmdldFdlYXRoZXIoaW5wdXQudmFsdWUpO1xuICAgIG9iai5zaG93V2VhdGhlcihkYXRhKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH07XG4gIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VhcmNoTG9jKTtcbn1cblxuLy8gRXZlbnQgbGlzdGVuZXIgdG8gdG9nZ2xlIGltcGVyaWFsL21ldHJpY1xuZnVuY3Rpb24gbWV0cmljTGlzdGVuZXIob2JqLCB3aWRnZXQpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtbWV0cmljXCIpO1xuXG4gIGNvbnN0IHNldE1ldHJpYyA9ICgpID0+IHtcbiAgICBvYmouc2V0TWV0cmljKCk7XG4gICAgb2JqLnNob3dXZWF0aGVyKHdpZGdldC53ZWF0aGVyRGF0YSk7XG4gIH07XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRNZXRyaWMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBydW5BcHAoKSB7XG4gIGNvbnN0IHdpZGdldCA9IFdlYXRoZXJPYmooKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3aWRnZXQuZ2V0V2VhdGhlcigpO1xuXG4gIGNvbnN0IG5ld1VJID0gVUkoKTtcbiAgbmV3VUkuc2V0Rml4ZWRJY29ucygpO1xuICBuZXdVSS5zaG93V2VhdGhlcih3ZWF0aGVyRGF0YSk7XG5cbiAgbWV0cmljTGlzdGVuZXIobmV3VUksIHdpZGdldCk7XG4gIHNlYXJjaExpc3RlbmVyKG5ld1VJLCB3aWRnZXQpO1xufVxuXG5VSSgpLnNldExvYWRpbmdQYWdlKCk7XG5ydW5BcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==