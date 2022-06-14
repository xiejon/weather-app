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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Noto-Sans;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 500;\n}\n@font-face {\n  font-family: Noto-Sans;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 600;\n}\n@font-face {\n  font-family: Noto-Sans;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 700;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: Noto-Sans;\n}\n\nbody {\n  height: 90vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  gap: 50px;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.desc {\n  font-size: 90px;\n  font-weight: 600;\n}\n.city {\n  font-size: 70px;\n}\n.local-date {\n  padding-top: 10px;\n  font-size: 30px;\n}\n.local-time {\n  padding-top: 8px;\n  font-size: 30px;\n  font-weight: 600;\n}\n.main-temp {\n  font-size: 100px;\n}\n.main-svg {\n  padding-bottom: 12px;\n  height: 120px;\n}\n.toggle-metric {\n  font-size: 25px;\n}\n\n.search-div {\n  height: 50px;\n  display: flex;\n  border-bottom: 2px solid white;\n}\n\n.search-div img {\n  height: 30px;\n  padding-bottom: 5px;\n  align-self: end;\n  justify-self: center;\n}\n\n#search {\n  width: 180px;\n  padding: 16px 0px 5px 16px;\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-size: 23px;\n}\n\n::placeholder {\n  color: white;\n  font-size: 23px;\n  font-weight: 600;\n}\n\n#search:focus {\n  outline: none;\n}\n\n.search-div img:hover,\n#search:hover,\n.toggle-metric:hover {\n  cursor: pointer;\n}\n\n/* Side information */\n.extra {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n\n.extra .box {\n  display: grid;\n  grid-template-columns: 140px 2fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.box img {\n  height: 90px;\n  grid-row: 1 / span 2;\n  align-self: center;\n  justify-self: center;\n}\n\n.box h3 {\n  grid-column: 2;\n  font-size: 30px;\n  font-weight: 700;\n}\n.box p {\n  grid-column: 2;\n  grid-row: 2;\n  font-size: 40px;\n  font-weight: 600;\n}\n\n.background {\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,4CAA0C;EAC1C,gBAAgB;AAClB;AACA;EACE,sBAAsB;EACtB,4CAAyC;EACzC,gBAAgB;AAClB;AACA;EACE,sBAAsB;EACtB,4CAAuC;EACvC,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,oBAAoB;EACpB,aAAa;AACf;AACA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;;;EAGE,eAAe;AACjB;;AAEA,qBAAqB;AACrB;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,WAAW;EACX,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;AACb","sourcesContent":["@font-face {\n  font-family: Noto-Sans;\n  src: url(./Noto_Sans/NotoSans-Regular.ttf);\n  font-weight: 500;\n}\n@font-face {\n  font-family: Noto-Sans;\n  src: url(./Noto_Sans/NotoSans-Medium.ttf);\n  font-weight: 600;\n}\n@font-face {\n  font-family: Noto-Sans;\n  src: url(./Noto_Sans/NotoSans-Bold.ttf);\n  font-weight: 700;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: Noto-Sans;\n}\n\nbody {\n  height: 90vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  gap: 50px;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.desc {\n  font-size: 90px;\n  font-weight: 600;\n}\n.city {\n  font-size: 70px;\n}\n.local-date {\n  padding-top: 10px;\n  font-size: 30px;\n}\n.local-time {\n  padding-top: 8px;\n  font-size: 30px;\n  font-weight: 600;\n}\n.main-temp {\n  font-size: 100px;\n}\n.main-svg {\n  padding-bottom: 12px;\n  height: 120px;\n}\n.toggle-metric {\n  font-size: 25px;\n}\n\n.search-div {\n  height: 50px;\n  display: flex;\n  border-bottom: 2px solid white;\n}\n\n.search-div img {\n  height: 30px;\n  padding-bottom: 5px;\n  align-self: end;\n  justify-self: center;\n}\n\n#search {\n  width: 180px;\n  padding: 16px 0px 5px 16px;\n  background-color: transparent;\n  border: none;\n  color: white;\n  font-size: 23px;\n}\n\n::placeholder {\n  color: white;\n  font-size: 23px;\n  font-weight: 600;\n}\n\n#search:focus {\n  outline: none;\n}\n\n.search-div img:hover,\n#search:hover,\n.toggle-metric:hover {\n  cursor: pointer;\n}\n\n/* Side information */\n.extra {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n\n.extra .box {\n  display: grid;\n  grid-template-columns: 140px 2fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.box img {\n  height: 90px;\n  grid-row: 1 / span 2;\n  align-self: center;\n  justify-self: center;\n}\n\n.box h3 {\n  grid-column: 2;\n  font-size: 30px;\n  font-weight: 700;\n}\n.box p {\n  grid-column: 2;\n  grid-row: 2;\n  font-size: 40px;\n  font-weight: 600;\n}\n\n.background {\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n"],"sourceRoot":""}]);
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
        // Default location
        location = await WeatherObj().getUserLocation();
        latit = location.coords.latitude;
        longit = location.coords.longitude;
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
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`,
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
  };
};

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

runApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0Q7QUFDQSwwQkFBMEIsMERBQVksZ0JBQWdCLG1EQUFPO0FBQzdELHdDQUF3QywrREFBZ0IsZ0JBQWdCLDRDQUFNO0FBQzlFLG9EQUFvRCw0REFBYztBQUNsRSxRQUFRO0FBQ1I7QUFDQSwwQkFBMEIseURBQVUsZ0JBQWdCLHdEQUFZO0FBQ2hFO0FBQ0EsMEJBQTBCLG9EQUFVLGdCQUFnQixzREFBVTtBQUM5RDtBQUNBLDBCQUEwQixpREFBTyxnQkFBZ0IsbURBQU87QUFDeEQ7QUFDQSwwQkFBMEIsaURBQU8sZ0JBQWdCLG1EQUFPO0FBQ3hELHdDQUF3QyxzREFBVyxnQkFBZ0IsNENBQU07QUFDekUsd0NBQXdDLHVEQUFZO0FBQ3BELHdDQUF3Qyw2REFBZ0I7QUFDeEQsd0NBQXdDLDBEQUFlO0FBQ3ZELHdDQUF3QyxxREFBVztBQUNuRDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLTIvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLTIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwLTIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLTIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC0yLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL05vdG9fU2Fucy9Ob3RvU2Fucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vTm90b19TYW5zL05vdG9TYW5zLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL05vdG9fU2Fucy9Ob3RvU2Fucy1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTm90by1TYW5zO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTm90by1TYW5zO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTm90by1TYW5zO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IE5vdG8tU2FucztcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5kZXNjIHtcXG4gIGZvbnQtc2l6ZTogOTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5jaXR5IHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG59XFxuLmxvY2FsLWRhdGUge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5sb2NhbC10aW1lIHtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubWFpbi10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcbi5tYWluLXN2ZyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcbi50b2dnbGUtbWV0cmljIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnNlYXJjaC1kaXYge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3NlYXJjaCB7XFxuICB3aWR0aDogMTgwcHg7XFxuICBwYWRkaW5nOiAxNnB4IDBweCA1cHggMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNzZWFyY2g6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgaW1nOmhvdmVyLFxcbiNzZWFyY2g6aG92ZXIsXFxuLnRvZ2dsZS1tZXRyaWM6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBTaWRlIGluZm9ybWF0aW9uICovXFxuLmV4dHJhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uZXh0cmEgLmJveCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNDBweCAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi5ib3ggaW1nIHtcXG4gIGhlaWdodDogOTBweDtcXG4gIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5ib3ggaDMge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYm94IHAge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUEwQztFQUMxQyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBeUM7RUFDekMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsNENBQXVDO0VBQ3ZDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7O0VBR0UsZUFBZTtBQUNqQjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE5vdG8tU2FucztcXG4gIHNyYzogdXJsKC4vTm90b19TYW5zL05vdG9TYW5zLVJlZ3VsYXIudHRmKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE5vdG8tU2FucztcXG4gIHNyYzogdXJsKC4vTm90b19TYW5zL05vdG9TYW5zLU1lZGl1bS50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTm90by1TYW5zO1xcbiAgc3JjOiB1cmwoLi9Ob3RvX1NhbnMvTm90b1NhbnMtQm9sZC50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IE5vdG8tU2FucztcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5kZXNjIHtcXG4gIGZvbnQtc2l6ZTogOTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5jaXR5IHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG59XFxuLmxvY2FsLWRhdGUge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5sb2NhbC10aW1lIHtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubWFpbi10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcbi5tYWluLXN2ZyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcbi50b2dnbGUtbWV0cmljIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnNlYXJjaC1kaXYge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3NlYXJjaCB7XFxuICB3aWR0aDogMTgwcHg7XFxuICBwYWRkaW5nOiAxNnB4IDBweCA1cHggMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNzZWFyY2g6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1kaXYgaW1nOmhvdmVyLFxcbiNzZWFyY2g6aG92ZXIsXFxuLnRvZ2dsZS1tZXRyaWM6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBTaWRlIGluZm9ybWF0aW9uICovXFxuLmV4dHJhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uZXh0cmEgLmJveCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNDBweCAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi5ib3ggaW1nIHtcXG4gIGhlaWdodDogOTBweDtcXG4gIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5ib3ggaDMge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYm94IHAge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG4vLyBCYWNrZ3JvdW5kIGltYWdlc1xuaW1wb3J0IERyaXp6bGVJbWcgZnJvbSBcIi4vaW1hZ2VzL2RheS9kcml6emxlLmpwZ1wiO1xuaW1wb3J0IFJhaW5JbWcgZnJvbSBcIi4vaW1hZ2VzL2RheS9yYWluLmpwZ1wiO1xuaW1wb3J0IFRodW5kZXJJbWcgZnJvbSBcIi4vaW1hZ2VzL2RheS90aHVuZGVyc3Rvcm0uanBnXCI7XG5pbXBvcnQgQ2xlYXJza3lJbWcgZnJvbSBcIi4vaW1hZ2VzL2RheS9jbGVhci1za3kuanBnXCI7XG5pbXBvcnQgRmV3Q2xvdWRzSW1nIGZyb20gXCIuL2ltYWdlcy9kYXkvZmV3LWNsb3Vkcy5qcGdcIjtcbmltcG9ydCBTY2F0dGVyQ2xvdWRzSW1nIGZyb20gXCIuL2ltYWdlcy9kYXkvc2NhdHRlcmVkLWNsb3Vkcy5qcGdcIjtcbmltcG9ydCBCcm9rZW5DbG91ZHNJbWcgZnJvbSBcIi4vaW1hZ2VzL2RheS9icm9rZW4tY2xvdWRzLmpwZ1wiO1xuaW1wb3J0IE92ZXJjYXN0SW1nIGZyb20gXCIuL2ltYWdlcy9kYXkvb3ZlcmNhc3QuanBnXCI7XG5pbXBvcnQgU25vd0ltZyBmcm9tIFwiLi9pbWFnZXMvZGF5L3Nub3cuanBnXCI7XG5pbXBvcnQgTmlnaHRDbGVhcnNreUltZyBmcm9tIFwiLi9pbWFnZXMvbmlnaHQvbmlnaHQtY2xlYXItc2t5LmpwZ1wiO1xuaW1wb3J0IE5pZ2h0Q2xvdWRzSW1nIGZyb20gXCIuL2ltYWdlcy9uaWdodC9uaWdodC1jbG91ZHMuanBnXCI7XG5pbXBvcnQgTmlnaHRSYWluSW1nIGZyb20gXCIuL2ltYWdlcy9uaWdodC9uaWdodC1yYWluLmpwZ1wiO1xuaW1wb3J0IE5pZ2h0VGh1bmRlckltZyBmcm9tIFwiLi9pbWFnZXMvbmlnaHQvbmlnaHQtdGh1bmRlcnN0b3JtLmpwZ1wiO1xuaW1wb3J0IE5pZ2h0U25vd0ltZyBmcm9tIFwiLi9pbWFnZXMvbmlnaHQvbmlnaHQtc25vdy5qcGdcIjtcbi8vIFdlYXRoZXIgaWNvbnNcbmltcG9ydCBTZWFyY2hTdmcgZnJvbSBcIi4vaWNvbnMvc2VhcmNoLnN2Z1wiO1xuaW1wb3J0IFRoZXJtU3ZnIGZyb20gXCIuL2ljb25zL3RoZXJtb21ldGVyLnN2Z1wiO1xuaW1wb3J0IFdpbmRTdmcgZnJvbSBcIi4vaWNvbnMvd2luZC5zdmdcIjtcbmltcG9ydCBIdW1pZFN2ZyBmcm9tIFwiLi9pY29ucy9kcm9wbGV0LnN2Z1wiO1xuaW1wb3J0IFN1blN2ZyBmcm9tIFwiLi9pY29ucy9zdW4uc3ZnXCI7XG5pbXBvcnQgU25vd1N2ZyBmcm9tIFwiLi9pY29ucy9jbG91ZC1zbm93LnN2Z1wiO1xuaW1wb3J0IERyaXp6bGVTdmcgZnJvbSBcIi4vaWNvbnMvY2xvdWQtZHJpenpsZS5zdmdcIjtcbmltcG9ydCBSYWluU3ZnIGZyb20gXCIuL2ljb25zL2Nsb3VkLXJhaW4uc3ZnXCI7XG5pbXBvcnQgTGlnaHRuaW5nU3ZnIGZyb20gXCIuL2ljb25zL2Nsb3VkLWxpZ2h0bmluZy5zdmdcIjtcbmltcG9ydCBDbG91ZFN2ZyBmcm9tIFwiLi9pY29ucy9jbG91ZC5zdmdcIjtcblxuY29uc3QgV2VhdGhlck9iaiA9ICgpID0+IHtcbiAgbGV0IHdlYXRoZXJEYXRhO1xuICByZXR1cm4ge1xuICAgIHdlYXRoZXJEYXRhLFxuICAgIGFzeW5jIGdldFdlYXRoZXIoY2l0eSkge1xuICAgICAgbGV0IGxvY2F0aW9uO1xuICAgICAgbGV0IGxhdGl0O1xuICAgICAgbGV0IGxvbmdpdDtcblxuICAgICAgaWYgKCFjaXR5KSB7XG4gICAgICAgIC8vIERlZmF1bHQgbG9jYXRpb25cbiAgICAgICAgbG9jYXRpb24gPSBhd2FpdCBXZWF0aGVyT2JqKCkuZ2V0VXNlckxvY2F0aW9uKCk7XG4gICAgICAgIGxhdGl0ID0gbG9jYXRpb24uY29vcmRzLmxhdGl0dWRlO1xuICAgICAgICBsb25naXQgPSBsb2NhdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb24gPSBhd2FpdCBXZWF0aGVyT2JqKCkuZmV0Y2hMb2NhdGlvbihjaXR5KTtcbiAgICAgICAgbGF0aXQgPSBsb2NhdGlvblswXS5sYXQ7XG4gICAgICAgIGxvbmdpdCA9IGxvY2F0aW9uWzBdLmxvbjtcbiAgICAgIH1cblxuICAgICAgdGhpcy53ZWF0aGVyRGF0YSA9IGF3YWl0IFdlYXRoZXJPYmooKS5mZXRjaFdlYXRoZXIobGF0aXQsIGxvbmdpdCk7XG4gICAgICByZXR1cm4gdGhpcy53ZWF0aGVyRGF0YTtcbiAgICB9LFxuICAgIGFzeW5jIGdldFVzZXJMb2NhdGlvbigpIHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAocG9zaXRpb24pID0+IHBvc2l0aW9uO1xuICAgICAgY29uc3QgZXJyb3IgPSAoZXJyb3IpID0+IGVycm9yO1xuXG4gICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgICAgKHBvcykgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShzdWNjZXNzKHBvcykpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKGVycikpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gYXdhaXQgcHJvbWlzZTtcbiAgICB9LFxuICAgIGFzeW5jIGZldGNoTG9jYXRpb24oY2l0eSkge1xuICAgICAgY29uc3QgcmF3ID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mYXBwaWQ9YmI5YTRhOGIzNzYyYmI0N2EzYjdmZjMyOWQxMGI4OGZgLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICAgICk7XG4gICAgICByZXR1cm4gcmF3Lmpzb24oKTtcbiAgICB9LFxuICAgIGFzeW5jIGZldGNoV2VhdGhlcihsYXQsIGxvbikge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPWJiOWE0YThiMzc2MmJiNDdhM2I3ZmYzMjlkMTBiODhmYCxcbiAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgICApO1xuICAgICAgcmV0dXJuIGRhdGEuanNvbigpO1xuICAgIH0sXG4gICAgY29udmVydERhdGUoZGF0YSkge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKChkYXRhLmR0ICsgZGF0YS50aW1lem9uZSkgKiAxMDAwKTtcbiAgICAgIC8vIFJlbW92ZSB1c2VyJ3MgbG9jYWwgdGltZS16b25lXG4gICAgICByZXR1cm4gZGF0ZS50b1VUQ1N0cmluZygpO1xuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCBVSSA9ICgpID0+IHtcbiAgbGV0IG5pZ2h0TW9kZSA9IGZhbHNlO1xuICBsZXQgbWV0cmljID0gZmFsc2U7XG4gIHJldHVybiB7XG4gICAgbmlnaHRNb2RlLFxuICAgIG1ldHJpYyxcbiAgICBzaG93V2VhdGhlcihkYXRhKSB7XG4gICAgICAvLyBEZWZhdWx0IGJhY2tncm91bmQgJiBpY29uXG4gICAgICB0aGlzLmNyZWF0ZURlZmF1bHRCYWNrZ3JvdW5kKCk7XG4gICAgICB0aGlzLmNyZWF0ZURlZmF1bHRTdmcoKTtcblxuICAgICAgY29uc3Qgd2VhdGhlckRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NcIik7XG4gICAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpO1xuICAgICAgY29uc3QgbG9jRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYWwtZGF0ZVwiKTtcbiAgICAgIGNvbnN0IGxvY1RpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2FsLXRpbWVcIik7XG4gICAgICBjb25zdCBtYWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi10ZW1wXCIpO1xuICAgICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVscy1saWtlXCIpO1xuICAgICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZFwiKTtcbiAgICAgIGNvbnN0IGh1bWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcblxuICAgICAgY29uc3QgdGltZXN0YW1wID0gV2VhdGhlck9iaigpLmNvbnZlcnREYXRlKGRhdGEpLnN1YnN0cigxNywgNSk7XG5cbiAgICAgIHdlYXRoZXJEZXNjLnRleHRDb250ZW50ID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgY2l0eS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICAgIGxvY0RhdGUudGV4dENvbnRlbnQgPSBXZWF0aGVyT2JqKCkuY29udmVydERhdGUoZGF0YSkuc3Vic3RyaW5nKDAsIDE3KTtcbiAgICAgIGxvY1RpbWUudGV4dENvbnRlbnQgPSB0aW1lc3RhbXA7XG4gICAgICBtYWluVGVtcC50ZXh0Q29udGVudCA9IGDCsCR7dGhpcy5jb252ZXJ0VGVtcChkYXRhLm1haW4udGVtcCl9YDtcbiAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGDCsCR7dGhpcy5jb252ZXJ0VGVtcChkYXRhLm1haW4uZmVlbHNfbGlrZSl9YDtcbiAgICAgIHdpbmQudGV4dENvbnRlbnQgPSB0aGlzLmdldFNwZWVkKGRhdGEud2luZC5zcGVlZCk7XG4gICAgICBodW1pZC50ZXh0Q29udGVudCA9IGAke2RhdGEubWFpbi5odW1pZGl0eX0lYDtcblxuICAgICAgLy8gQ2hhbmdlIHRvIG5pZ2h0IG1vZGUgYmV0d2VlbiA4cG0gYW5kIDdhbVxuICAgICAgaWYgKHBhcnNlSW50KHRpbWVzdGFtcCkgPCA3IHx8IHBhcnNlSW50KHRpbWVzdGFtcCkgPiAyMCkge1xuICAgICAgICB0aGlzLm5pZ2h0TW9kZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5pZ2h0TW9kZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3ZWF0aGVySWQgPSBkYXRhLndlYXRoZXJbMF0uaWQ7XG4gICAgICB0aGlzLnNldEltYWdlcyh3ZWF0aGVySWQpO1xuICAgIH0sXG4gICAgc2V0TWV0cmljKCkge1xuICAgICAgdGhpcy5tZXRyaWMgPyAodGhpcy5tZXRyaWMgPSBmYWxzZSkgOiAodGhpcy5tZXRyaWMgPSB0cnVlKTtcbiAgICB9LFxuICAgIGNvbnZlcnRUZW1wKGtlbHZpbikge1xuICAgICAgLy8gS2VsdmluIC0+IENlbGNpdXMvRmFocmVuaGVpdCByb3VuZGVkIHRvIG5lYXJlc3QgaW50ZWdlclxuICAgICAgaWYgKHRoaXMubWV0cmljKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGtlbHZpbiAtIDI3My4xNSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgoOSAvIDUpICogKGtlbHZpbiAtIDI3My4xNSkgKyAzMik7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRTcGVlZChzcGVlZCkge1xuICAgICAgaWYgKCF0aGlzLm1ldHJpYykge1xuICAgICAgICByZXR1cm4gYCR7TWF0aC5yb3VuZCgoc3BlZWQgKiAyLjIzNjkzNiAqIDEwKSAvIDEwKX0gbS9oYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKChzcGVlZCAqIDEwKSAvIDEwKX0gbS9zYDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldEZpeGVkSWNvbnMoKSB7XG4gICAgICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1kaXZcIik7XG4gICAgICBjb25zdCBib3gxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leHRyYSAuYm94Om50aC1jaGlsZCgxKVwiKTtcbiAgICAgIGNvbnN0IGJveDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4dHJhIC5ib3g6bnRoLWNoaWxkKDIpXCIpO1xuICAgICAgY29uc3QgYm94MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXh0cmEgLmJveDpudGgtY2hpbGQoMylcIik7XG5cbiAgICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBjb25zdCBodW1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgIHNlYXJjaC5zcmMgPSBTZWFyY2hTdmc7XG4gICAgICBmZWVsc0xpa2Uuc3JjID0gVGhlcm1Tdmc7XG4gICAgICB3aW5kLnNyYyA9IFdpbmRTdmc7XG4gICAgICBodW1pZC5zcmMgPSBIdW1pZFN2ZztcblxuICAgICAgc2VhcmNoQm94LmFwcGVuZChzZWFyY2gpO1xuICAgICAgYm94MS5hcHBlbmQoZmVlbHNMaWtlKTtcbiAgICAgIGJveDIuYXBwZW5kKHdpbmQpO1xuICAgICAgYm94My5hcHBlbmQoaHVtaWQpO1xuICAgIH0sXG4gICAgY3JlYXRlRGVmYXVsdEJhY2tncm91bmQoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrZ3JvdW5kXCIpKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuXG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kXCIpO1xuICAgICAgaW1nLnNyYyA9IE5pZ2h0Q2xlYXJza3lJbWc7XG4gICAgICBjb250YWluZXIuYXBwZW5kKGltZyk7XG4gICAgfSxcbiAgICBjcmVhdGVEZWZhdWx0U3ZnKCkge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1zdmdcIikpIHJldHVybjtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ZnLWRpdlwiKTtcblxuICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIHN2Zy5jbGFzc0xpc3QuYWRkKFwibWFpbi1zdmdcIik7XG4gICAgICBzdmcuc3JjID0gQ2xvdWRTdmc7XG4gICAgICBkaXYuYXBwZW5kKHN2Zyk7XG4gICAgfSxcbiAgICBzZXRCZ0ltYWdlKGxpbmspIHtcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja2dyb3VuZFwiKTtcblxuICAgICAgbGluayA/IGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbGluaykgOiB0aGlzLmNyZWF0ZURlZmF1bHRCYWNrZ3JvdW5kKCk7XG4gICAgfSxcbiAgICBzZXRJY29uKGxpbmspIHtcbiAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1zdmdcIik7XG5cbiAgICAgIGxpbmsgPyBzdmcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGxpbmspIDogdGhpcy5jcmVhdGVEZWZhdWx0U3ZnKCk7XG4gICAgfSxcbiAgICBzZXRJbWFnZXMoaWQpIHtcbiAgICAgIGlmICh0aGlzLm5pZ2h0TW9kZSkge1xuICAgICAgICBpZiAoaWQgPj0gMjAwICYmIGlkIDw9IDIzMilcbiAgICAgICAgICB0aGlzLnNldEJnSW1hZ2UoTmlnaHRUaHVuZGVySW1nKSwgdGhpcy5zZXRJY29uKExpZ2h0bmluZ1N2Zyk7XG4gICAgICAgIGlmIChpZCA+PSAzMDAgJiYgaWQgPD0gNTMxKVxuICAgICAgICAgIHRoaXMuc2V0QmdJbWFnZShOaWdodFJhaW5JbWcpLCB0aGlzLnNldEljb24oUmFpblN2Zyk7XG4gICAgICAgIGlmIChpZCA+PSA2MDAgJiYgaWQgPD0gNjIyKVxuICAgICAgICAgIHRoaXMuc2V0QmdJbWFnZShOaWdodFNub3dJbWcpLCB0aGlzLnNldEljb24oU25vd1N2Zyk7XG4gICAgICAgIGlmIChpZCA9PT0gODAwKSB0aGlzLnNldEJnSW1hZ2UoTmlnaHRDbGVhcnNreUltZyksIHRoaXMuc2V0SWNvbihTdW5TdmcpO1xuICAgICAgICBpZiAoaWQgPj0gODAxICYmIGlkIDw9IDgwNCkgdGhpcy5zZXRCZ0ltYWdlKE5pZ2h0Q2xvdWRzSW1nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpZCA+PSAyMDAgJiYgaWQgPD0gMjMyKVxuICAgICAgICAgIHRoaXMuc2V0QmdJbWFnZShUaHVuZGVySW1nKSwgdGhpcy5zZXRJY29uKExpZ2h0bmluZ1N2Zyk7XG4gICAgICAgIGlmIChpZCA+PSAzMDAgJiYgaWQgPD0gMzIxKVxuICAgICAgICAgIHRoaXMuc2V0QmdJbWFnZShEcml6emxlSW1nKSwgdGhpcy5zZXRJY29uKERyaXp6bGVTdmcpO1xuICAgICAgICBpZiAoaWQgPj0gNTAwICYmIGlkIDw9IDUzMSlcbiAgICAgICAgICB0aGlzLnNldEJnSW1hZ2UoUmFpbkltZyksIHRoaXMuc2V0SWNvbihSYWluU3ZnKTtcbiAgICAgICAgaWYgKGlkID49IDYwMCAmJiBpZCA8PSA2MjIpXG4gICAgICAgICAgdGhpcy5zZXRCZ0ltYWdlKFNub3dJbWcpLCB0aGlzLnNldEljb24oU25vd1N2Zyk7XG4gICAgICAgIGlmIChpZCA9PT0gODAwKSB0aGlzLnNldEJnSW1hZ2UoQ2xlYXJza3lJbWcpLCB0aGlzLnNldEljb24oU3VuU3ZnKTtcbiAgICAgICAgaWYgKGlkID09PSA4MDEpIHRoaXMuc2V0QmdJbWFnZShGZXdDbG91ZHNJbWcpO1xuICAgICAgICBpZiAoaWQgPT09IDgwMikgdGhpcy5zZXRCZ0ltYWdlKFNjYXR0ZXJDbG91ZHNJbWcpO1xuICAgICAgICBpZiAoaWQgPT09IDgwMykgdGhpcy5zZXRCZ0ltYWdlKEJyb2tlbkNsb3Vkc0ltZyk7XG4gICAgICAgIGlmIChpZCA9PT0gODA0KSB0aGlzLnNldEJnSW1hZ2UoT3ZlcmNhc3RJbWcpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59O1xuXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hMaXN0ZW5lcihvYmosIHdpZGdldCkge1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1kaXYgaW1nXCIpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoXCIpO1xuXG4gIGNvbnN0IHNlYXJjaExvYyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2lkZ2V0LmdldFdlYXRoZXIoaW5wdXQudmFsdWUpO1xuICAgIG9iai5zaG93V2VhdGhlcihkYXRhKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH07XG4gIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VhcmNoTG9jKTtcbn1cblxuZnVuY3Rpb24gbWV0cmljTGlzdGVuZXIob2JqLCB3aWRnZXQpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtbWV0cmljXCIpO1xuXG4gIGNvbnN0IHNldE1ldHJpYyA9ICgpID0+IHtcbiAgICBvYmouc2V0TWV0cmljKCk7XG4gICAgb2JqLnNob3dXZWF0aGVyKHdpZGdldC53ZWF0aGVyRGF0YSk7XG4gIH07XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRNZXRyaWMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBydW5BcHAoKSB7XG4gIGNvbnN0IHdpZGdldCA9IFdlYXRoZXJPYmooKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3aWRnZXQuZ2V0V2VhdGhlcigpO1xuXG4gIGNvbnN0IG5ld1VJID0gVUkoKTtcbiAgbmV3VUkuc2V0Rml4ZWRJY29ucygpO1xuICBuZXdVSS5zaG93V2VhdGhlcih3ZWF0aGVyRGF0YSk7XG5cbiAgbWV0cmljTGlzdGVuZXIobmV3VUksIHdpZGdldCk7XG4gIHNlYXJjaExpc3RlbmVyKG5ld1VJLCB3aWRnZXQpO1xufVxuXG5ydW5BcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==