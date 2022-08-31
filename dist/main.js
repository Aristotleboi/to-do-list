/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    display: flex;\n    flex-direction: row;\n    min-height: 100v;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 350px 5fr;\n    grid-template-rows: 70px;\n    padding: 0;\n    margin: 0;\n}\n\n.title-splash {\n    background-color: rgb(41, 72, 97);\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Arvo', serif;\n    font-weight: 700;\n}\n\n.title-splash p {\n    color: rgb(231, 239, 248);\n    font-size: 36px;\n}\n\n.header {\n    background-color: rgb(165, 187, 206);\n    display: flex;\n    flex-direction: column;\n    padding: 50px 15px;\n    padding-left: 25px;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 600;\n}\n\n.master-list {\n    font-size: 1.5em;\n    margin-bottom: 20px;\n    border-bottom: solid 2px black;\n    cursor: pointer;\n}\n\n.list-container {\n    display: flex;\n    margin-bottom: 15px;\n}\n\n.edit-list-button {\n    margin-left: auto;\n    padding-bottom: 7px;\n}\n\n.list-container button {\n    background-color: rgb(165, 187, 206);\n    border: none;\n    font-weight: bold;\n    font-size: 1.1em;\n    cursor: pointer\n}\n\n.tab {\n    font-size: 1.3em;\n    cursor: pointer;\n}\n\n#new-list {\n    border: none;\n    border-radius: 3px;\n    background-color: rgb(41, 72, 97);\n    height: 40px;\n    color: rgb(231, 239, 248);\n    font-size: 1.3em;\n    font-weight: 700;\n    cursor: pointer;\n    margin-top: 15px;\n}\n\n.to-do-area{\n    display: flex;\n    flex-direction: column;\n    padding: 35px 60px;\n}\n\n.button-anchor {\n    display: flex;\n    height: 35px;\n}\n\n.new-to-do {\n    flex-grow: 1;\n    background-color: rgb(41, 72, 97);\n    border: none;\n    border-radius: 8px;\n    font-size: 2em;\n    color: rgb(231, 239, 248);\n    cursor: pointer;\n}\n\n.content {\n    font-family: 'Montserrat', sans-serif;\n    margin-top: 25px;\n    display: grid;\n    grid-template-columns: 1fr 1fr\n}\n\n.card {\n    display: flex;\n    flex-direction: column;\n    border: 3px solid black;\n    margin: 10px 10px;\n    height: 250px;\n    padding: 15px 15px;\n    align-items: center;\n}\n\n.card h3 {\n    margin: 5px;\n    border-bottom: 2px solid black;\n    width: 100%;\n    text-align: center;\n}\n\n.card p {\n    align-self: flex-start;\n}\n\n.to-do-description {\n    margin-top: 25px;\n}\n\n.to-do-date {\n    margin-top: 50px;\n}\n\n.card-buttons {\n    margin-top: auto;\n    margin-bottom: 10px;\n}\n\n.card-buttons button {\n    border: none;\n    background-color: rgb(41, 72, 97);\n    margin-right: 15px;\n    border-radius: 5px;\n    height: 30px;\n    font-size: 1.1em;\n    font-weight: bold;\n    color: rgb(231, 239, 248);\n    width: 90px;\n}\n\n.card.checked {\n    background-color: rgb(165, 187, 206);\n    text-decoration: line-through;\n}\n\n.form-error {\n    border: 1px solid red;\n}\n\n\n\n/* modal */\n\n.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    border: 1px solid black;\n    border-radius: 10px;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    max-width: 80%;\n}\n\n.modal.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.overlay {\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .5);\n    pointer-events: none;\n}\n\n.overlay.active {\n    opacity: 1;\n    pointer-events: all;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,gCAAgC;IAChC,wBAAwB;IACxB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,0BAA0B;IAC1B,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;IAClB,qCAAqC;IACrC,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB;AACJ;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,qCAAqC;IACrC,gBAAgB;IAChB,aAAa;IACb;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,8BAA8B;IAC9B,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,oCAAoC;IACpC,6BAA6B;AACjC;;AAEA;IACI,qBAAqB;AACzB;;;;AAIA,UAAU;;AAEV;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,yCAAyC;IACzC,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,eAAe;IACf,UAAU;IACV,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,oBAAoB;AACxB;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB","sourcesContent":["html {\n    display: flex;\n    flex-direction: row;\n    min-height: 100v;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 350px 5fr;\n    grid-template-rows: 70px;\n    padding: 0;\n    margin: 0;\n}\n\n.title-splash {\n    background-color: rgb(41, 72, 97);\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Arvo', serif;\n    font-weight: 700;\n}\n\n.title-splash p {\n    color: rgb(231, 239, 248);\n    font-size: 36px;\n}\n\n.header {\n    background-color: rgb(165, 187, 206);\n    display: flex;\n    flex-direction: column;\n    padding: 50px 15px;\n    padding-left: 25px;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 600;\n}\n\n.master-list {\n    font-size: 1.5em;\n    margin-bottom: 20px;\n    border-bottom: solid 2px black;\n    cursor: pointer;\n}\n\n.list-container {\n    display: flex;\n    margin-bottom: 15px;\n}\n\n.edit-list-button {\n    margin-left: auto;\n    padding-bottom: 7px;\n}\n\n.list-container button {\n    background-color: rgb(165, 187, 206);\n    border: none;\n    font-weight: bold;\n    font-size: 1.1em;\n    cursor: pointer\n}\n\n.tab {\n    font-size: 1.3em;\n    cursor: pointer;\n}\n\n#new-list {\n    border: none;\n    border-radius: 3px;\n    background-color: rgb(41, 72, 97);\n    height: 40px;\n    color: rgb(231, 239, 248);\n    font-size: 1.3em;\n    font-weight: 700;\n    cursor: pointer;\n    margin-top: 15px;\n}\n\n.to-do-area{\n    display: flex;\n    flex-direction: column;\n    padding: 35px 60px;\n}\n\n.button-anchor {\n    display: flex;\n    height: 35px;\n}\n\n.new-to-do {\n    flex-grow: 1;\n    background-color: rgb(41, 72, 97);\n    border: none;\n    border-radius: 8px;\n    font-size: 2em;\n    color: rgb(231, 239, 248);\n    cursor: pointer;\n}\n\n.content {\n    font-family: 'Montserrat', sans-serif;\n    margin-top: 25px;\n    display: grid;\n    grid-template-columns: 1fr 1fr\n}\n\n.card {\n    display: flex;\n    flex-direction: column;\n    border: 3px solid black;\n    margin: 10px 10px;\n    height: 250px;\n    padding: 15px 15px;\n    align-items: center;\n}\n\n.card h3 {\n    margin: 5px;\n    border-bottom: 2px solid black;\n    width: 100%;\n    text-align: center;\n}\n\n.card p {\n    align-self: flex-start;\n}\n\n.to-do-description {\n    margin-top: 25px;\n}\n\n.to-do-date {\n    margin-top: 50px;\n}\n\n.card-buttons {\n    margin-top: auto;\n    margin-bottom: 10px;\n}\n\n.card-buttons button {\n    border: none;\n    background-color: rgb(41, 72, 97);\n    margin-right: 15px;\n    border-radius: 5px;\n    height: 30px;\n    font-size: 1.1em;\n    font-weight: bold;\n    color: rgb(231, 239, 248);\n    width: 90px;\n}\n\n.card.checked {\n    background-color: rgb(165, 187, 206);\n    text-decoration: line-through;\n}\n\n.form-error {\n    border: 1px solid red;\n}\n\n\n\n/* modal */\n\n.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    border: 1px solid black;\n    border-radius: 10px;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    max-width: 80%;\n}\n\n.modal.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.overlay {\n    position: fixed;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .5);\n    pointer-events: none;\n}\n\n.overlay.active {\n    opacity: 1;\n    pointer-events: all;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewToDoForm": () => (/* binding */ createNewToDoForm),
/* harmony export */   "editList": () => (/* binding */ editList),
/* harmony export */   "editToDoForm": () => (/* binding */ editToDoForm),
/* harmony export */   "newListForm": () => (/* binding */ newListForm)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _to_do_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do-dom */ "./src/to-do-dom.js");



const createNewToDoForm = (list) => {
    (0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.clearDiv)('.modal')
    ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.clearModal)()
    let modal = document.querySelector('.modal')
    let form = document.createElement('form')
    form.classList.add('form');

    
    let FT = document.createElement('div')
    FT.setAttribute('class', 'form-title');
    let FTLabel = document.createElement('label');
    FTLabel.setAttribute('for', 'form-title')
    FTLabel.innerHTML = 'Title';
    let FTInput = document.createElement('input');
    FTInput.setAttribute('type', 'text');
    FTInput.setAttribute('name', 'form-title');
    FTInput.setAttribute('id', 'form-title');
    let FD = document.createElement('div');
    FD.classList.add('form-description');
    let FDLabel = document.createElement('label');
    FDLabel.setAttribute('for', 'form-description')
    FDLabel.innerHTML = 'Description';
    let FDInput = document.createElement('input')
    FDInput.setAttribute('type', 'text');
    FDInput.setAttribute('name', 'form-description');
    FDInput.setAttribute('id', 'form-description');
    let FDate = document.createElement('div');
    FDate.setAttribute('class' ,'form-date');
    let FDateLabel = document.createElement('label');
    FDateLabel.setAttribute('for', 'form-date');
    FDateLabel.innerText = 'Date';
    let FDateInput = document.createElement('input');
    FDateInput.setAttribute('type', 'date');
    FDateInput.setAttribute('name', 'form-date');
    FDateInput.setAttribute('id', 'form-date');
    let FB = document.createElement('button')
    FB.setAttribute('type', 'submit');
    FB.setAttribute('id', 'form-submit-button')
    FB.innerText = 'submit';

    FB.addEventListener('click', () => {
        (0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.submitToDO)(list);
    })

    //pop up modal
    modal.classList.add('active')
    let overlay = document.querySelector('.overlay')
    overlay.classList.add('active')
    overlay.addEventListener('click', () => {
        ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.clearModal)();
        (0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.clearDiv)('.modal')
    })

    FT.appendChild(FTLabel);
    FT.appendChild(FTInput);
    FD.appendChild(FDLabel)
    FD.appendChild(FDInput);
    FDate.appendChild(FDateLabel);
    FDate.appendChild(FDateInput);
    form.appendChild(FT);
    form.appendChild(FD);
    form.appendChild(FDate);
    modal.appendChild(form);
    modal.appendChild(FB)


}

const editToDoForm = (toDo, list) => {
    createNewToDoForm()
    let modal = document.querySelector('.modal')
    let FB = document.querySelector('#form-submit-button')
    FB.remove();
    let editFormButton = document.createElement('button');
    editFormButton.innerText = "save"
    editFormButton.setAttribute('type', 'submit');
    editFormButton.setAttribute('id', 'form-submit-button')

    document.querySelector('#form-title').value = toDo.title;
    document.querySelector('#form-description').value = toDo.description;
    document.querySelector('#form-date').value = toDo.dueDate;

    editFormButton.addEventListener('click', () => {
        toDo.title = document.querySelector('#form-title').value;
        toDo.description = document.querySelector('#form-description').value;
        toDo.dueDate = document.querySelector('#form-date').value;

        if (document.querySelector('#form-title').value == '' || document.querySelector('#form-title').value == "Title is required!") {
            let titleBox = document.querySelector('#form-title');
            titleBox.classList.add('form-error');
            document.querySelector('#form-title').value = "Title is required!"
            return
        }
        (0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.clearDiv)('.content')
        ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.clearDiv)('.modal')
        ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.clearModal)()
        ;(0,___WEBPACK_IMPORTED_MODULE_0__.save)()
        ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.loadToDos)(list.singleList, list.singleList.length, list)
    })

    modal.appendChild(editFormButton)
}

const newListForm = () => {
    ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.clearDiv)('.modal');
    let modal = document.querySelector('.modal')
    let form = document.createElement('form')
    form.classList.add('list-form');
    let FT = document.createElement('div')
    FT.setAttribute('class', 'list-form-title');
    let FTLabel = document.createElement('label');
    FTLabel.setAttribute('for', 'list-form-title')
    FTLabel.innerHTML = 'Title';
    let FTInput = document.createElement('input');
    FTInput.setAttribute('type', 'text');
    FTInput.setAttribute('name', 'list-form-title');
    FTInput.setAttribute('id', 'list-form-title');
    let FB = document.createElement('button')
    FB.setAttribute('type', 'submit');
    FB.setAttribute('id', 'list-form-button')
    FB.innerText = 'submit';
    FB.addEventListener('click', () => {
        (0,___WEBPACK_IMPORTED_MODULE_0__.submitList)()
        ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.clearModal)()
        ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.clearDiv)('.modal')
    })

    modal.classList.add('active')
    let overlay = document.querySelector('.overlay')
    overlay.classList.add('active')
    overlay.addEventListener('click', () => {
        ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.clearModal)();
        (0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.clearDiv)('.modal')
    })

    form.appendChild(FT)
    form.appendChild(FTLabel);
    form.appendChild(FTInput)
    modal.appendChild(form);
    modal.appendChild(FB)

}

const editList = (list) => {
    newListForm()
    let modal = document.querySelector('.modal')
    let FB = document.querySelector('#list-form-button')
    FB.remove();
    let editFormButton = document.createElement('button');
    editFormButton.innerText = "save"
    editFormButton.setAttribute('type', 'submit');
    editFormButton.setAttribute('id', 'form-submit-button')
    editFormButton.addEventListener('click', () => {
        toDo.title = list.name = document.querySelector('#list-form-title').value;

        if (document.querySelector('#list-form-title').value == '' || document.querySelector('#list-form-title').value == "Title is required!") {
            let titleBox = document.querySelector('#form-title');
            titleBox.classList.add('form-error');
            document.querySelector('#list-form-title').value = "Title is required!"
            return
        }
        (0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.clearDiv)('.to-do-list')
        ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.clearDiv)('.modal')
        ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.clearModal)()
        ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_1__.loadLists)(list)
    })
    modal.appendChild(editFormButton)
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeElementFromArray": () => (/* binding */ removeElementFromArray),
/* harmony export */   "save": () => (/* binding */ save),
/* harmony export */   "submitList": () => (/* binding */ submitList),
/* harmony export */   "toDolists": () => (/* binding */ toDolists)
/* harmony export */ });
/* harmony import */ var _to_do_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-dom */ "./src/to-do-dom.js");
/* harmony import */ var _to_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do */ "./src/to-do.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms */ "./src/forms.js");






const LOCAL_STORAGE_LIST = "to.do.lists"

let toDoListsSave = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST))

//master array that contains the other lists 
let toDolists = new _to_do__WEBPACK_IMPORTED_MODULE_1__.listType('master-array');

const save = () => {
    localStorage.setItem(LOCAL_STORAGE_LIST, JSON.stringify(toDolists))
}

//removes elements from array. used when user deletes to-do from dom
function removeElementFromArray (array, indexNumber) {
    array.splice(indexNumber, 1)
}

//working on adding new list to large array of lists
const submitList = () => {
    let listTitle = document.querySelector('#list-form-title').value
    if (document.querySelector('#list-form-title').value == '' || document.querySelector('#list-form-title').value == "Title is required!") {
        listTitle.classList.add('form-error');
        document.querySelector('#list-form-title').value = "Title is required!"
    }

    let newList = new _to_do__WEBPACK_IMPORTED_MODULE_1__.listType(listTitle);
    toDolists.add(newList);
    (0,_to_do_dom__WEBPACK_IMPORTED_MODULE_0__.clearDiv)('.to-do-lists')
    save()
    ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_0__.loadLists)(toDolists.singleList)
}

const initialLoad = () => {
    let toDo1 = new _to_do__WEBPACK_IMPORTED_MODULE_1__.toDo("Grocerys", "milk, cereal, coffee", "2022-08-27", 'low', false);
    const list1 = new _to_do__WEBPACK_IMPORTED_MODULE_1__.listType("Default")
    list1.add(toDo1)
    toDolists.add(list1)
    ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_0__.loadLists)(toDolists)
    ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_0__.loadToDos)(list1.singleList, list1.singleList.length, list1)
    const showAllLists = document.querySelector('.master-list')
    showAllLists.addEventListener('click', () => {
        console.log(toDolists.singleList[0].singleList)
        if (toDolists.listLength() === 1) return
        ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_0__.clearDiv)('.content')
        ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_0__.clearDiv)('.modal')
        ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_0__.clearModal)()
        for (let i = 0; i < toDolists.listLength(); i++) {
            (0,_to_do_dom__WEBPACK_IMPORTED_MODULE_0__.loadToDos)(toDolists.singleList[i].singleList, toDolists.singleList[i].listLength(), toDolists.singleList[i])
        }
    })
}

const parseLists = () => {
    toDoListsSave.singleList.forEach(list => {
        console.log(list)
        let newList = new _to_do__WEBPACK_IMPORTED_MODULE_1__.listType(list.name)
        list.singleList.forEach(toDoSave => {
            let newToDo = new _to_do__WEBPACK_IMPORTED_MODULE_1__.toDo(toDoSave.title, toDoSave.description, toDoSave.dueDate, toDoSave.priority, toDoSave.checked)
            newList.add(newToDo)
        })
        toDolists.add(newList)
    });
}

const loadPage = () => {
    if (toDoListsSave == null) initialLoad()
    else {
        parseLists()
        ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_0__.loadLists)(toDolists.singleList)
        ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_0__.loadToDos)(toDolists.singleList[0].singleList, toDolists.singleList[0].listLength(), toDolists.singleList[0])
        const showAllLists = document.querySelector('.master-list')
        showAllLists.addEventListener('click', () => {
            console.log(toDolists.singleList[0].singleList)
            if (toDolists.listLength() === 1) return
            ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_0__.clearDiv)('.content')
            ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_0__.clearDiv)('.modal')
            ;(0,_to_do_dom__WEBPACK_IMPORTED_MODULE_0__.clearModal)()
            for (let i = 0; i < toDolists.listLength(); i++) {
                (0,_to_do_dom__WEBPACK_IMPORTED_MODULE_0__.loadToDos)(toDolists.singleList[i].singleList, toDolists.singleList[i].listLength(), toDolists.singleList[i])
            }
        })
    }

}

let toDo1 = new _to_do__WEBPACK_IMPORTED_MODULE_1__.toDo("Grocerys", "milk, cereal, coffee", "2022-08-27", 'low', false);
const list1 = new _to_do__WEBPACK_IMPORTED_MODULE_1__.listType("Default To-Do List")

loadPage()


/***/ }),

/***/ "./src/to-do-dom.js":
/*!**************************!*\
  !*** ./src/to-do-dom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearDiv": () => (/* binding */ clearDiv),
/* harmony export */   "clearModal": () => (/* binding */ clearModal),
/* harmony export */   "loadLists": () => (/* binding */ loadLists),
/* harmony export */   "loadToDos": () => (/* binding */ loadToDos),
/* harmony export */   "submitToDO": () => (/* binding */ submitToDO)
/* harmony export */ });
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var _to_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do */ "./src/to-do.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");




//loads to-do's from array to dom
const loadToDos = (listArray, listLength, list) => {
    //this clears the dom of all to-do cards and clears the form after its been submitted
    const content = document.querySelector('.content');
    let numberOfToDos = listLength;
    let newButton = document.querySelector('.new-to-do')
    if (newButton) {
        newButton.addEventListener('click', () => {
            (0,_forms__WEBPACK_IMPORTED_MODULE_0__.createNewToDoForm)(list)
        })
    }
    for (let i = 0; i < numberOfToDos; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        let title = document.createElement('h3');
        title.innerText = listArray[i].title;
        title.setAttribute('class', 'to-do-title')
        let description = document.createElement('p')
        description.innerText = listArray[i].description;
        description.setAttribute('class', 'to-do-description');
        let date = document.createElement('p');
        date.innerText = listArray[i].dueDate;
        date.setAttribute('class', 'to-do-date');
        let closeButton = document.createElement('button');
        closeButton.setAttribute('class', 'to-do-close-button');
        closeButton.innerText = 'delete';
        let editButton = document.createElement('button');
        editButton.setAttribute('class', 'to-do-edit-button');
        editButton.innerText = 'Edit';
        let checkButton = document.createElement('button')
        checkButton.setAttribute('class', 'check-button');
        checkButton.innerText = 'Check'
        const cardButtons = document.createElement('div')
        cardButtons.classList.add('card-buttons')

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(date);
        cardButtons.appendChild(checkButton)
        cardButtons.appendChild(editButton)
        cardButtons.appendChild(closeButton)
        card.appendChild(cardButtons)
        content.appendChild(card);

        //close button functionality
        closeButton.addEventListener('click', () => {
            content.removeChild(card)
            ;(0,___WEBPACK_IMPORTED_MODULE_2__.removeElementFromArray)(listArray, i)
        })
        //edit button functionality
        editButton.addEventListener('click', () => {
            ;(0,_forms__WEBPACK_IMPORTED_MODULE_0__.editToDoForm)(listArray[i], list)
        })
        checkButton.addEventListener('click', () => {
            if (card.classList == 'card checked') {
                card.classList.remove('checked')
                listArray[i].checked = false;
                return
            }
            card.classList.add('checked');
            listArray[i].checked = true;
        })

    }
}

//loads lists to dom
//requires master array with all lists as input
const loadLists = (lists) => {
    const header = document.querySelector('.to-do-lists');
    let numberOfLists = lists.length;

    const newListButton = document.querySelector("#new-list");
    newListButton.addEventListener('click', () => {
        (0,_forms__WEBPACK_IMPORTED_MODULE_0__.newListForm)();
    })

    for (let i = 0; i < numberOfLists; i++) {
        const listContainer = document.createElement('div')
        listContainer.classList.add('list-container')
        const tab = document.createElement('div');
        tab.classList.add('tab')
        tab.innerText = lists[i].name;
        tab.setAttribute('date-array', i)
        tab.addEventListener('click', () => {
            clearDiv('.content')
            clearDiv('.modal')
            clearModal()
            loadToDos(___WEBPACK_IMPORTED_MODULE_2__.toDolists.singleList[i].singleList, ___WEBPACK_IMPORTED_MODULE_2__.toDolists.singleList[i].listLength(), ___WEBPACK_IMPORTED_MODULE_2__.toDolists.singleList[i])
        })
        const editListButton = document.createElement('button');
        editListButton.innerText = '...';
        editListButton.classList.add('edit-list-button')
        editListButton.addEventListener('click', () => {
            ;(0,_forms__WEBPACK_IMPORTED_MODULE_0__.editList)(lists[i])
        })
        const closeButton = document.createElement('button');
        closeButton.innerText = 'X';
        closeButton.addEventListener('click', () => {
            if(___WEBPACK_IMPORTED_MODULE_2__.toDolists.listLength() == 1) return
            header.removeChild(listContainer);
            (0,___WEBPACK_IMPORTED_MODULE_2__.removeElementFromArray)(___WEBPACK_IMPORTED_MODULE_2__.toDolists.singleList, i)
            clearDiv('.content')
            clearDiv('.to-do-lists')
            loadLists(___WEBPACK_IMPORTED_MODULE_2__.toDolists.singleList)
            loadToDos(___WEBPACK_IMPORTED_MODULE_2__.toDolists.singleList[0].singleList, ___WEBPACK_IMPORTED_MODULE_2__.toDolists.singleList[0].listLength(), ___WEBPACK_IMPORTED_MODULE_2__.toDolists.singleList[0])
        })
        listContainer.appendChild(tab);
        listContainer.appendChild(editListButton);
        listContainer.appendChild(closeButton)
        header.appendChild(listContainer)
    }
}
//get values from form pop up to make new to-do.
//requires list object as input
const submitToDO = (list) => {
    let toDoTitle = document.querySelector('#form-title').value;
    let toDoDescription = document.querySelector('#form-description').value;
    let toDoDate = document.querySelector('#form-date').value;

    // checks to see to-do at least has title
    if (document.querySelector('#form-title').value == '' || document.querySelector('#form-title').value == "Title is required!") {
        let titleBox = document.querySelector('#form-title');
        titleBox.classList.add('form-error');
        document.querySelector('#form-title').value = "Title is required!"
        return
    }

    let newToDo = new _to_do__WEBPACK_IMPORTED_MODULE_1__.toDo(toDoTitle, toDoDescription, toDoDate, 'low', false);
    list.add(newToDo);
    clearDiv('.content')
    clearDiv('.modal')
    clearModal()
    ;(0,___WEBPACK_IMPORTED_MODULE_2__.save)()
    loadToDos(list.singleList, list.listLength(), list)
}

//function to clear dom of to-dos
const clearDiv = (childDiv) => {
    document.querySelector(childDiv).innerHTML = "";
}

const clearModal = () => {
    let modal = document.querySelector('.modal')
    let overlay = document.querySelector('.overlay')
    modal.classList.remove('active');
    overlay.classList.remove('active')
}




/***/ }),

/***/ "./src/to-do.js":
/*!**********************!*\
  !*** ./src/to-do.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listType": () => (/* binding */ listType),
/* harmony export */   "toDo": () => (/* binding */ toDo)
/* harmony export */ });
 class toDo {
    constructor(title, description, dueDate, priority, checked) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
    }
}

class listType {
    constructor(name) {
        this.name = name;
        this.singleList = [];

        this.add = function (toDo) {
            this.singleList.push(toDo)
        }
        
        this.listLength = function () {
            return this.singleList.length
        }
    }
}




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsWUFBWSx5REFBc0IsQ0FBQyxtREFBb0I7QUFDdkQ7QUFDQTtBQUNBLHNCQUFzQixtREFBb0I7QUFDMUMsc0JBQXNCLGlFQUFrQyxFQUFFLGlFQUFrQyxJQUFJLHNEQUF1QjtBQUN2SCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQix3Q0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0NBQUk7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG8tZG8tZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG8tZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHY7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnRpdGxlLXNwbGFzaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNzIsIDk3KTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0Fydm8nLCBzZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRpdGxlLXNwbGFzaCBwIHtcXG4gICAgY29sb3I6IHJnYigyMzEsIDIzOSwgMjQ4KTtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgMTg3LCAyMDYpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1hc3Rlci1saXN0IHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5lZGl0LWxpc3QtYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxODcsIDIwNik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGN1cnNvcjogcG9pbnRlclxcbn1cXG5cXG4udGFiIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LWxpc3Qge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA3MiwgOTcpO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGNvbG9yOiByZ2IoMjMxLCAyMzksIDI0OCk7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLnRvLWRvLWFyZWF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDM1cHggNjBweDtcXG59XFxuXFxuLmJ1dHRvbi1hbmNob3Ige1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5uZXctdG8tZG8ge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNzIsIDk3KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBjb2xvcjogcmdiKDIzMSwgMjM5LCAyNDgpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyXFxufVxcblxcbi5jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIGgzIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgcCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50by1kby1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi50by1kby1kYXRlIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLmNhcmQtYnV0dG9ucyB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jYXJkLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDcyLCA5Nyk7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogcmdiKDIzMSwgMjM5LCAyNDgpO1xcbiAgICB3aWR0aDogOTBweDtcXG59XFxuXFxuLmNhcmQuY2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDE4NywgMjA2KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5mb3JtLWVycm9yIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG5cXG5cXG4vKiBtb2RhbCAqL1xcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi5tb2RhbC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ub3ZlcmxheS5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7O0FBSUEsVUFBVTs7QUFFVjtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULHlDQUF5QztJQUN6Qyx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWluLWhlaWdodDogMTAwdjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNTBweCA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGl0bGUtc3BsYXNoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA3MiwgOTcpO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJ2bycsIHNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udGl0bGUtc3BsYXNoIHAge1xcbiAgICBjb2xvcjogcmdiKDIzMSwgMjM5LCAyNDgpO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxODcsIDIwNik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDUwcHggMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFzdGVyLWxpc3Qge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmVkaXQtbGlzdC1idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDE4NywgMjA2KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxufVxcblxcbi50YWIge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuZXctbGlzdCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDcyLCA5Nyk7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgY29sb3I6IHJnYigyMzEsIDIzOSwgMjQ4KTtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4udG8tZG8tYXJlYXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMzVweCA2MHB4O1xcbn1cXG5cXG4uYnV0dG9uLWFuY2hvciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuLm5ldy10by1kbyB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA3MiwgOTcpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGNvbG9yOiByZ2IoMjMxLCAyMzksIDI0OCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnJcXG59XFxuXFxuLmNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgaDMge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCBwIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLnRvLWRvLWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLnRvLWRvLWRhdGUge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4uY2FyZC1idXR0b25zIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmNhcmQtYnV0dG9ucyBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNzIsIDk3KTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiByZ2IoMjMxLCAyMzksIDI0OCk7XFxuICAgIHdpZHRoOiA5MHB4O1xcbn1cXG5cXG4uY2FyZC5jaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgMTg3LCAyMDYpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmZvcm0tZXJyb3Ige1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcblxcblxcbi8qIG1vZGFsICovXFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3VycmVudExpc3QsIHN1Ym1pdExpc3QsIHNhdmUgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgc3VibWl0VG9ETywgbG9hZFRvRG9zLCBjbGVhck1vZGFsLCBjbGVhckRpdiwgbG9hZExpc3RzIH0gZnJvbSBcIi4vdG8tZG8tZG9tXCI7XG5cbmNvbnN0IGNyZWF0ZU5ld1RvRG9Gb3JtID0gKGxpc3QpID0+IHtcbiAgICBjbGVhckRpdignLm1vZGFsJylcbiAgICBjbGVhck1vZGFsKClcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG5cbiAgICBcbiAgICBsZXQgRlQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIEZULnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS10aXRsZScpO1xuICAgIGxldCBGVExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBGVExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Zvcm0tdGl0bGUnKVxuICAgIEZUTGFiZWwuaW5uZXJIVE1MID0gJ1RpdGxlJztcbiAgICBsZXQgRlRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgRlRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIEZUSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Zvcm0tdGl0bGUnKTtcbiAgICBGVElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybS10aXRsZScpO1xuICAgIGxldCBGRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIEZELmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZGVzY3JpcHRpb24nKTtcbiAgICBsZXQgRkRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgRkRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmb3JtLWRlc2NyaXB0aW9uJylcbiAgICBGRExhYmVsLmlubmVySFRNTCA9ICdEZXNjcmlwdGlvbic7XG4gICAgbGV0IEZESW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgRkRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIEZESW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Zvcm0tZGVzY3JpcHRpb24nKTtcbiAgICBGRElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybS1kZXNjcmlwdGlvbicpO1xuICAgIGxldCBGRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIEZEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnICwnZm9ybS1kYXRlJyk7XG4gICAgbGV0IEZEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIEZEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZm9ybS1kYXRlJyk7XG4gICAgRkRhdGVMYWJlbC5pbm5lclRleHQgPSAnRGF0ZSc7XG4gICAgbGV0IEZEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIEZEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBGRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdmb3JtLWRhdGUnKTtcbiAgICBGRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybS1kYXRlJyk7XG4gICAgbGV0IEZCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBGQi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgRkIuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtLXN1Ym1pdC1idXR0b24nKVxuICAgIEZCLmlubmVyVGV4dCA9ICdzdWJtaXQnO1xuXG4gICAgRkIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN1Ym1pdFRvRE8obGlzdCk7XG4gICAgfSlcblxuICAgIC8vcG9wIHVwIG1vZGFsXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JylcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJNb2RhbCgpO1xuICAgICAgICBjbGVhckRpdignLm1vZGFsJylcbiAgICB9KVxuXG4gICAgRlQuYXBwZW5kQ2hpbGQoRlRMYWJlbCk7XG4gICAgRlQuYXBwZW5kQ2hpbGQoRlRJbnB1dCk7XG4gICAgRkQuYXBwZW5kQ2hpbGQoRkRMYWJlbClcbiAgICBGRC5hcHBlbmRDaGlsZChGRElucHV0KTtcbiAgICBGRGF0ZS5hcHBlbmRDaGlsZChGRGF0ZUxhYmVsKTtcbiAgICBGRGF0ZS5hcHBlbmRDaGlsZChGRGF0ZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKEZUKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKEZEKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKEZEYXRlKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChGQilcblxuXG59XG5cbmNvbnN0IGVkaXRUb0RvRm9ybSA9ICh0b0RvLCBsaXN0KSA9PiB7XG4gICAgY3JlYXRlTmV3VG9Eb0Zvcm0oKVxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXG4gICAgbGV0IEZCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tc3VibWl0LWJ1dHRvbicpXG4gICAgRkIucmVtb3ZlKCk7XG4gICAgbGV0IGVkaXRGb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEZvcm1CdXR0b24uaW5uZXJUZXh0ID0gXCJzYXZlXCJcbiAgICBlZGl0Rm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgZWRpdEZvcm1CdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtLXN1Ym1pdC1idXR0b24nKVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tdGl0bGUnKS52YWx1ZSA9IHRvRG8udGl0bGU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tZGVzY3JpcHRpb24nKS52YWx1ZSA9IHRvRG8uZGVzY3JpcHRpb247XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tZGF0ZScpLnZhbHVlID0gdG9Eby5kdWVEYXRlO1xuXG4gICAgZWRpdEZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvRG8udGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS10aXRsZScpLnZhbHVlO1xuICAgICAgICB0b0RvLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgdG9Eby5kdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tZGF0ZScpLnZhbHVlO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS10aXRsZScpLnZhbHVlID09ICcnIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLXRpdGxlJykudmFsdWUgPT0gXCJUaXRsZSBpcyByZXF1aXJlZCFcIikge1xuICAgICAgICAgICAgbGV0IHRpdGxlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tdGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlQm94LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZXJyb3InKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLXRpdGxlJykudmFsdWUgPSBcIlRpdGxlIGlzIHJlcXVpcmVkIVwiXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjbGVhckRpdignLmNvbnRlbnQnKVxuICAgICAgICBjbGVhckRpdignLm1vZGFsJylcbiAgICAgICAgY2xlYXJNb2RhbCgpXG4gICAgICAgIHNhdmUoKVxuICAgICAgICBsb2FkVG9Eb3MobGlzdC5zaW5nbGVMaXN0LCBsaXN0LnNpbmdsZUxpc3QubGVuZ3RoLCBsaXN0KVxuICAgIH0pXG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChlZGl0Rm9ybUJ1dHRvbilcbn1cblxuY29uc3QgbmV3TGlzdEZvcm0gPSAoKSA9PiB7XG4gICAgY2xlYXJEaXYoJy5tb2RhbCcpO1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZm9ybScpO1xuICAgIGxldCBGVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgRlQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaXN0LWZvcm0tdGl0bGUnKTtcbiAgICBsZXQgRlRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgRlRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsaXN0LWZvcm0tdGl0bGUnKVxuICAgIEZUTGFiZWwuaW5uZXJIVE1MID0gJ1RpdGxlJztcbiAgICBsZXQgRlRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgRlRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIEZUSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2xpc3QtZm9ybS10aXRsZScpO1xuICAgIEZUSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdsaXN0LWZvcm0tdGl0bGUnKTtcbiAgICBsZXQgRkIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIEZCLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBGQi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xpc3QtZm9ybS1idXR0b24nKVxuICAgIEZCLmlubmVyVGV4dCA9ICdzdWJtaXQnO1xuICAgIEZCLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzdWJtaXRMaXN0KClcbiAgICAgICAgY2xlYXJNb2RhbCgpXG4gICAgICAgIGNsZWFyRGl2KCcubW9kYWwnKVxuICAgIH0pXG5cbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKVxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhck1vZGFsKCk7XG4gICAgICAgIGNsZWFyRGl2KCcubW9kYWwnKVxuICAgIH0pXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKEZUKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoRlRMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChGVElucHV0KVxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKEZCKVxuXG59XG5cbmNvbnN0IGVkaXRMaXN0ID0gKGxpc3QpID0+IHtcbiAgICBuZXdMaXN0Rm9ybSgpXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcbiAgICBsZXQgRkIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1mb3JtLWJ1dHRvbicpXG4gICAgRkIucmVtb3ZlKCk7XG4gICAgbGV0IGVkaXRGb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEZvcm1CdXR0b24uaW5uZXJUZXh0ID0gXCJzYXZlXCJcbiAgICBlZGl0Rm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgZWRpdEZvcm1CdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtLXN1Ym1pdC1idXR0b24nKVxuICAgIGVkaXRGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b0RvLnRpdGxlID0gbGlzdC5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtZm9ybS10aXRsZScpLnZhbHVlO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1mb3JtLXRpdGxlJykudmFsdWUgPT0gJycgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtZm9ybS10aXRsZScpLnZhbHVlID09IFwiVGl0bGUgaXMgcmVxdWlyZWQhXCIpIHtcbiAgICAgICAgICAgIGxldCB0aXRsZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLXRpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZUJveC5jbGFzc0xpc3QuYWRkKCdmb3JtLWVycm9yJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1mb3JtLXRpdGxlJykudmFsdWUgPSBcIlRpdGxlIGlzIHJlcXVpcmVkIVwiXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjbGVhckRpdignLnRvLWRvLWxpc3QnKVxuICAgICAgICBjbGVhckRpdignLm1vZGFsJylcbiAgICAgICAgY2xlYXJNb2RhbCgpXG4gICAgICAgIGxvYWRMaXN0cyhsaXN0KVxuICAgIH0pXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoZWRpdEZvcm1CdXR0b24pXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlTmV3VG9Eb0Zvcm0sXG4gICAgZWRpdFRvRG9Gb3JtLFxuICAgIG5ld0xpc3RGb3JtLFxuICAgIGVkaXRMaXN0XG59IiwiaW1wb3J0IHtsb2FkVG9Eb3MsIGxvYWRMaXN0cywgc3VibWl0VG9ETywgY2xlYXJEaXYsIGNsZWFyTW9kYWx9IGZyb20gJy4vdG8tZG8tZG9tJztcbmltcG9ydCB7dG9EbywgbGlzdFR5cGV9IGZyb20gJy4vdG8tZG8nXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZU5ld1RvRG9Gb3JtIH0gZnJvbSAnLi9mb3Jtcyc7XG5cblxuY29uc3QgTE9DQUxfU1RPUkFHRV9MSVNUID0gXCJ0by5kby5saXN0c1wiXG5cbmxldCB0b0RvTGlzdHNTYXZlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1QpKVxuXG4vL21hc3RlciBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSBvdGhlciBsaXN0cyBcbmxldCB0b0RvbGlzdHMgPSBuZXcgbGlzdFR5cGUoJ21hc3Rlci1hcnJheScpO1xuXG5jb25zdCBzYXZlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVCwgSlNPTi5zdHJpbmdpZnkodG9Eb2xpc3RzKSlcbn1cblxuLy9yZW1vdmVzIGVsZW1lbnRzIGZyb20gYXJyYXkuIHVzZWQgd2hlbiB1c2VyIGRlbGV0ZXMgdG8tZG8gZnJvbSBkb21cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRGcm9tQXJyYXkgKGFycmF5LCBpbmRleE51bWJlcikge1xuICAgIGFycmF5LnNwbGljZShpbmRleE51bWJlciwgMSlcbn1cblxuLy93b3JraW5nIG9uIGFkZGluZyBuZXcgbGlzdCB0byBsYXJnZSBhcnJheSBvZiBsaXN0c1xuY29uc3Qgc3VibWl0TGlzdCA9ICgpID0+IHtcbiAgICBsZXQgbGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtZm9ybS10aXRsZScpLnZhbHVlXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0LWZvcm0tdGl0bGUnKS52YWx1ZSA9PSAnJyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1mb3JtLXRpdGxlJykudmFsdWUgPT0gXCJUaXRsZSBpcyByZXF1aXJlZCFcIikge1xuICAgICAgICBsaXN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9ybS1lcnJvcicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1mb3JtLXRpdGxlJykudmFsdWUgPSBcIlRpdGxlIGlzIHJlcXVpcmVkIVwiXG4gICAgfVxuXG4gICAgbGV0IG5ld0xpc3QgPSBuZXcgbGlzdFR5cGUobGlzdFRpdGxlKTtcbiAgICB0b0RvbGlzdHMuYWRkKG5ld0xpc3QpO1xuICAgIGNsZWFyRGl2KCcudG8tZG8tbGlzdHMnKVxuICAgIHNhdmUoKVxuICAgIGxvYWRMaXN0cyh0b0RvbGlzdHMuc2luZ2xlTGlzdClcbn1cblxuY29uc3QgaW5pdGlhbExvYWQgPSAoKSA9PiB7XG4gICAgbGV0IHRvRG8xID0gbmV3IHRvRG8oXCJHcm9jZXJ5c1wiLCBcIm1pbGssIGNlcmVhbCwgY29mZmVlXCIsIFwiMjAyMi0wOC0yN1wiLCAnbG93JywgZmFsc2UpO1xuICAgIGNvbnN0IGxpc3QxID0gbmV3IGxpc3RUeXBlKFwiRGVmYXVsdFwiKVxuICAgIGxpc3QxLmFkZCh0b0RvMSlcbiAgICB0b0RvbGlzdHMuYWRkKGxpc3QxKVxuICAgIGxvYWRMaXN0cyh0b0RvbGlzdHMpXG4gICAgbG9hZFRvRG9zKGxpc3QxLnNpbmdsZUxpc3QsIGxpc3QxLnNpbmdsZUxpc3QubGVuZ3RoLCBsaXN0MSlcbiAgICBjb25zdCBzaG93QWxsTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzdGVyLWxpc3QnKVxuICAgIHNob3dBbGxMaXN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codG9Eb2xpc3RzLnNpbmdsZUxpc3RbMF0uc2luZ2xlTGlzdClcbiAgICAgICAgaWYgKHRvRG9saXN0cy5saXN0TGVuZ3RoKCkgPT09IDEpIHJldHVyblxuICAgICAgICBjbGVhckRpdignLmNvbnRlbnQnKVxuICAgICAgICBjbGVhckRpdignLm1vZGFsJylcbiAgICAgICAgY2xlYXJNb2RhbCgpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb2xpc3RzLmxpc3RMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkVG9Eb3ModG9Eb2xpc3RzLnNpbmdsZUxpc3RbaV0uc2luZ2xlTGlzdCwgdG9Eb2xpc3RzLnNpbmdsZUxpc3RbaV0ubGlzdExlbmd0aCgpLCB0b0RvbGlzdHMuc2luZ2xlTGlzdFtpXSlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IHBhcnNlTGlzdHMgPSAoKSA9PiB7XG4gICAgdG9Eb0xpc3RzU2F2ZS5zaW5nbGVMaXN0LmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3QpXG4gICAgICAgIGxldCBuZXdMaXN0ID0gbmV3IGxpc3RUeXBlKGxpc3QubmFtZSlcbiAgICAgICAgbGlzdC5zaW5nbGVMaXN0LmZvckVhY2godG9Eb1NhdmUgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1RvRG8gPSBuZXcgdG9Ebyh0b0RvU2F2ZS50aXRsZSwgdG9Eb1NhdmUuZGVzY3JpcHRpb24sIHRvRG9TYXZlLmR1ZURhdGUsIHRvRG9TYXZlLnByaW9yaXR5LCB0b0RvU2F2ZS5jaGVja2VkKVxuICAgICAgICAgICAgbmV3TGlzdC5hZGQobmV3VG9EbylcbiAgICAgICAgfSlcbiAgICAgICAgdG9Eb2xpc3RzLmFkZChuZXdMaXN0KVxuICAgIH0pO1xufVxuXG5jb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgICBpZiAodG9Eb0xpc3RzU2F2ZSA9PSBudWxsKSBpbml0aWFsTG9hZCgpXG4gICAgZWxzZSB7XG4gICAgICAgIHBhcnNlTGlzdHMoKVxuICAgICAgICBsb2FkTGlzdHModG9Eb2xpc3RzLnNpbmdsZUxpc3QpXG4gICAgICAgIGxvYWRUb0Rvcyh0b0RvbGlzdHMuc2luZ2xlTGlzdFswXS5zaW5nbGVMaXN0LCB0b0RvbGlzdHMuc2luZ2xlTGlzdFswXS5saXN0TGVuZ3RoKCksIHRvRG9saXN0cy5zaW5nbGVMaXN0WzBdKVxuICAgICAgICBjb25zdCBzaG93QWxsTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzdGVyLWxpc3QnKVxuICAgICAgICBzaG93QWxsTGlzdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b0RvbGlzdHMuc2luZ2xlTGlzdFswXS5zaW5nbGVMaXN0KVxuICAgICAgICAgICAgaWYgKHRvRG9saXN0cy5saXN0TGVuZ3RoKCkgPT09IDEpIHJldHVyblxuICAgICAgICAgICAgY2xlYXJEaXYoJy5jb250ZW50JylcbiAgICAgICAgICAgIGNsZWFyRGl2KCcubW9kYWwnKVxuICAgICAgICAgICAgY2xlYXJNb2RhbCgpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9saXN0cy5saXN0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGxvYWRUb0Rvcyh0b0RvbGlzdHMuc2luZ2xlTGlzdFtpXS5zaW5nbGVMaXN0LCB0b0RvbGlzdHMuc2luZ2xlTGlzdFtpXS5saXN0TGVuZ3RoKCksIHRvRG9saXN0cy5zaW5nbGVMaXN0W2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5sZXQgdG9EbzEgPSBuZXcgdG9EbyhcIkdyb2NlcnlzXCIsIFwibWlsaywgY2VyZWFsLCBjb2ZmZWVcIiwgXCIyMDIyLTA4LTI3XCIsICdsb3cnLCBmYWxzZSk7XG5jb25zdCBsaXN0MSA9IG5ldyBsaXN0VHlwZShcIkRlZmF1bHQgVG8tRG8gTGlzdFwiKVxuXG5sb2FkUGFnZSgpXG5leHBvcnQge1xuICAgIHRvRG9saXN0cyxcbiAgICByZW1vdmVFbGVtZW50RnJvbUFycmF5LFxuICAgIHN1Ym1pdExpc3QsXG4gICAgc2F2ZVxufSIsImltcG9ydCB7IGNyZWF0ZU5ld1RvRG9Gb3JtLCBlZGl0VG9Eb0Zvcm0sIG5ld0xpc3RGb3JtLCBlZGl0TGlzdCB9IGZyb20gXCIuL2Zvcm1zXCI7XG5pbXBvcnQgeyBsaXN0VHlwZSwgdG9EbyB9IGZyb20gXCIuL3RvLWRvXCI7XG5pbXBvcnQgeyByZW1vdmVFbGVtZW50RnJvbUFycmF5LCBzdWJtaXRMaXN0LCB0b0RvbGlzdHMsIHNhdmUgfSBmcm9tIFwiLlwiO1xuXG4vL2xvYWRzIHRvLWRvJ3MgZnJvbSBhcnJheSB0byBkb21cbmNvbnN0IGxvYWRUb0RvcyA9IChsaXN0QXJyYXksIGxpc3RMZW5ndGgsIGxpc3QpID0+IHtcbiAgICAvL3RoaXMgY2xlYXJzIHRoZSBkb20gb2YgYWxsIHRvLWRvIGNhcmRzIGFuZCBjbGVhcnMgdGhlIGZvcm0gYWZ0ZXIgaXRzIGJlZW4gc3VibWl0dGVkXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgbGV0IG51bWJlck9mVG9Eb3MgPSBsaXN0TGVuZ3RoO1xuICAgIGxldCBuZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvLWRvJylcbiAgICBpZiAobmV3QnV0dG9uKSB7XG4gICAgICAgIG5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZU5ld1RvRG9Gb3JtKGxpc3QpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZUb0RvczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IGxpc3RBcnJheVtpXS50aXRsZTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0by1kby10aXRsZScpXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBsaXN0QXJyYXlbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG8tZG8tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRhdGUuaW5uZXJUZXh0ID0gbGlzdEFycmF5W2ldLmR1ZURhdGU7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0by1kby1kYXRlJyk7XG4gICAgICAgIGxldCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvLWRvLWNsb3NlLWJ1dHRvbicpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5pbm5lclRleHQgPSAnZGVsZXRlJztcbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvLWRvLWVkaXQtYnV0dG9uJyk7XG4gICAgICAgIGVkaXRCdXR0b24uaW5uZXJUZXh0ID0gJ0VkaXQnO1xuICAgICAgICBsZXQgY2hlY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBjaGVja0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrLWJ1dHRvbicpO1xuICAgICAgICBjaGVja0J1dHRvbi5pbm5lclRleHQgPSAnQ2hlY2snXG4gICAgICAgIGNvbnN0IGNhcmRCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2FyZEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnY2FyZC1idXR0b25zJylcblxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIGNhcmRCdXR0b25zLmFwcGVuZENoaWxkKGNoZWNrQnV0dG9uKVxuICAgICAgICBjYXJkQnV0dG9ucy5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKVxuICAgICAgICBjYXJkQnV0dG9ucy5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbilcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQnV0dG9ucylcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAgICAgICAvL2Nsb3NlIGJ1dHRvbiBmdW5jdGlvbmFsaXR5XG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjYXJkKVxuICAgICAgICAgICAgcmVtb3ZlRWxlbWVudEZyb21BcnJheShsaXN0QXJyYXksIGkpXG4gICAgICAgIH0pXG4gICAgICAgIC8vZWRpdCBidXR0b24gZnVuY3Rpb25hbGl0eVxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZWRpdFRvRG9Gb3JtKGxpc3RBcnJheVtpXSwgbGlzdClcbiAgICAgICAgfSlcbiAgICAgICAgY2hlY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FyZC5jbGFzc0xpc3QgPT0gJ2NhcmQgY2hlY2tlZCcpIHtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKVxuICAgICAgICAgICAgICAgIGxpc3RBcnJheVtpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIGxpc3RBcnJheVtpXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSlcblxuICAgIH1cbn1cblxuLy9sb2FkcyBsaXN0cyB0byBkb21cbi8vcmVxdWlyZXMgbWFzdGVyIGFycmF5IHdpdGggYWxsIGxpc3RzIGFzIGlucHV0XG5jb25zdCBsb2FkTGlzdHMgPSAobGlzdHMpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdHMnKTtcbiAgICBsZXQgbnVtYmVyT2ZMaXN0cyA9IGxpc3RzLmxlbmd0aDtcblxuICAgIGNvbnN0IG5ld0xpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1saXN0XCIpO1xuICAgIG5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5ld0xpc3RGb3JtKCk7XG4gICAgfSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZMaXN0czsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3QtY29udGFpbmVyJylcbiAgICAgICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKVxuICAgICAgICB0YWIuaW5uZXJUZXh0ID0gbGlzdHNbaV0ubmFtZTtcbiAgICAgICAgdGFiLnNldEF0dHJpYnV0ZSgnZGF0ZS1hcnJheScsIGkpXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyRGl2KCcuY29udGVudCcpXG4gICAgICAgICAgICBjbGVhckRpdignLm1vZGFsJylcbiAgICAgICAgICAgIGNsZWFyTW9kYWwoKVxuICAgICAgICAgICAgbG9hZFRvRG9zKHRvRG9saXN0cy5zaW5nbGVMaXN0W2ldLnNpbmdsZUxpc3QsIHRvRG9saXN0cy5zaW5nbGVMaXN0W2ldLmxpc3RMZW5ndGgoKSwgdG9Eb2xpc3RzLnNpbmdsZUxpc3RbaV0pXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGVkaXRMaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRMaXN0QnV0dG9uLmlubmVyVGV4dCA9ICcuLi4nO1xuICAgICAgICBlZGl0TGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWxpc3QtYnV0dG9uJylcbiAgICAgICAgZWRpdExpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBlZGl0TGlzdChsaXN0c1tpXSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2xvc2VCdXR0b24uaW5uZXJUZXh0ID0gJ1gnO1xuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRvRG9saXN0cy5saXN0TGVuZ3RoKCkgPT0gMSkgcmV0dXJuXG4gICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50RnJvbUFycmF5KHRvRG9saXN0cy5zaW5nbGVMaXN0LCBpKVxuICAgICAgICAgICAgY2xlYXJEaXYoJy5jb250ZW50JylcbiAgICAgICAgICAgIGNsZWFyRGl2KCcudG8tZG8tbGlzdHMnKVxuICAgICAgICAgICAgbG9hZExpc3RzKHRvRG9saXN0cy5zaW5nbGVMaXN0KVxuICAgICAgICAgICAgbG9hZFRvRG9zKHRvRG9saXN0cy5zaW5nbGVMaXN0WzBdLnNpbmdsZUxpc3QsIHRvRG9saXN0cy5zaW5nbGVMaXN0WzBdLmxpc3RMZW5ndGgoKSwgdG9Eb2xpc3RzLnNpbmdsZUxpc3RbMF0pXG4gICAgICAgIH0pXG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiKTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0TGlzdEJ1dHRvbik7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKVxuICAgIH1cbn1cbi8vZ2V0IHZhbHVlcyBmcm9tIGZvcm0gcG9wIHVwIHRvIG1ha2UgbmV3IHRvLWRvLlxuLy9yZXF1aXJlcyBsaXN0IG9iamVjdCBhcyBpbnB1dFxuY29uc3Qgc3VibWl0VG9ETyA9IChsaXN0KSA9PiB7XG4gICAgbGV0IHRvRG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLXRpdGxlJykudmFsdWU7XG4gICAgbGV0IHRvRG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgbGV0IHRvRG9EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tZGF0ZScpLnZhbHVlO1xuXG4gICAgLy8gY2hlY2tzIHRvIHNlZSB0by1kbyBhdCBsZWFzdCBoYXMgdGl0bGVcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tdGl0bGUnKS52YWx1ZSA9PSAnJyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS10aXRsZScpLnZhbHVlID09IFwiVGl0bGUgaXMgcmVxdWlyZWQhXCIpIHtcbiAgICAgICAgbGV0IHRpdGxlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tdGl0bGUnKTtcbiAgICAgICAgdGl0bGVCb3guY2xhc3NMaXN0LmFkZCgnZm9ybS1lcnJvcicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS10aXRsZScpLnZhbHVlID0gXCJUaXRsZSBpcyByZXF1aXJlZCFcIlxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgbmV3VG9EbyA9IG5ldyB0b0RvKHRvRG9UaXRsZSwgdG9Eb0Rlc2NyaXB0aW9uLCB0b0RvRGF0ZSwgJ2xvdycsIGZhbHNlKTtcbiAgICBsaXN0LmFkZChuZXdUb0RvKTtcbiAgICBjbGVhckRpdignLmNvbnRlbnQnKVxuICAgIGNsZWFyRGl2KCcubW9kYWwnKVxuICAgIGNsZWFyTW9kYWwoKVxuICAgIHNhdmUoKVxuICAgIGxvYWRUb0RvcyhsaXN0LnNpbmdsZUxpc3QsIGxpc3QubGlzdExlbmd0aCgpLCBsaXN0KVxufVxuXG4vL2Z1bmN0aW9uIHRvIGNsZWFyIGRvbSBvZiB0by1kb3NcbmNvbnN0IGNsZWFyRGl2ID0gKGNoaWxkRGl2KSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjaGlsZERpdikuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuY29uc3QgY2xlYXJNb2RhbCA9ICgpID0+IHtcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKVxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbn1cblxuXG5leHBvcnQge1xuICAgIGxvYWRUb0RvcyxcbiAgICBsb2FkTGlzdHMsXG4gICAgc3VibWl0VG9ETyxcbiAgICBjbGVhckRpdixcbiAgICBjbGVhck1vZGFsXG59IiwiIGNsYXNzIHRvRG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB9XG59XG5cbmNsYXNzIGxpc3RUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc2luZ2xlTGlzdCA9IFtdO1xuXG4gICAgICAgIHRoaXMuYWRkID0gZnVuY3Rpb24gKHRvRG8pIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlTGlzdC5wdXNoKHRvRG8pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubGlzdExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNpbmdsZUxpc3QubGVuZ3RoXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IHtcbiAgICB0b0RvLFxuICAgIGxpc3RUeXBlXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=