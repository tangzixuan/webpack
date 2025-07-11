This is a simple example that shows the usage of a custom parser for json-modules.

Toml, yaml and json5 files can be imported like other modules without toml-loader.

# data.toml

```toml
title = "TOML Example"

[owner]
name = "Tom Preston-Werner"
organization = "GitHub"
bio = "GitHub Cofounder & CEO\nLikes tater tots and beer."
dob = 1979-05-27T07:32:00Z
```

# data.yaml

```yaml
title: YAML Example
owner:
  name: Tom Preston-Werner
  organization: GitHub
  bio: |-
    GitHub Cofounder & CEO
    Likes tater tots and beer.
  dob: 1979-05-27T07:32:00.000Z
```

# data.json5

```json5
{
  // comment
  title: "JSON5 Example",
  owner: {
    name: "Tom Preston-Werner",
    organization: "GitHub",
    bio: "GitHub Cofounder & CEO\n\
Likes tater tots and beer.",
    dob: "1979-05-27T07:32:00.000Z"
  }
}
```

# example.js

```javascript
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

document.querySelector('#app').innerHTML = [toml, yaml, json].map(data => `
  <h1>${data.title}</h1>
  <div>${data.owner.name}</div>
  <div>${data.owner.organization}</div>
  <div>${data.owner.bio}</div>
  <div>${data.owner.dob}</div>
`).join('<br><br>');
```

# webpack.config.js

```javascript
"use strict";

const json5 = require("json5");
const toml = require("toml");
const yaml = require("yamljs");

module.exports = {
	module: {
		rules: [
			{
				test: /\.toml$/,
				type: "json",
				parser: {
					parse: toml.parse
				}
			},
			{
				test: /\.json5$/,
				type: "json",
				parser: {
					parse: json5.parse
				}
			},
			{
				test: /\.yaml$/,
				type: "json",
				parser: {
					parse: yaml.parse
				}
			}
		]
	}
};
```

# js/output.js

```javascript
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/*!*******************!*\
  !*** ./data.toml ***!
  \*******************/
/*! default exports */
/*! export owner [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export bio [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export dob [provided] [no usage info] [missing usage info prevents renaming] */
/*!     exports [not provided] [no usage info] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export organization [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export title [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"title":"TOML Example","owner":{"name":"Tom Preston-Werner","organization":"GitHub","bio":"GitHub Cofounder & CEO\\nLikes tater tots and beer.","dob":"1979-05-27T07:32:00.000Z"}}');

/***/ }),
/* 2 */
/*!*******************!*\
  !*** ./data.yaml ***!
  \*******************/
/*! default exports */
/*! export owner [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export bio [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export dob [provided] [no usage info] [missing usage info prevents renaming] */
/*!     exports [not provided] [no usage info] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export organization [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export title [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"title":"YAML Example","owner":{"name":"Tom Preston-Werner","organization":"GitHub","bio":"GitHub Cofounder & CEO\\nLikes tater tots and beer.","dob":"1979-05-27T07:32:00.000Z"}}');

/***/ }),
/* 3 */
/*!********************!*\
  !*** ./data.json5 ***!
  \********************/
/*! default exports */
/*! export owner [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export bio [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export dob [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export name [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export organization [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export title [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"title":"JSON5 Example","owner":{"name":"Tom Preston-Werner","organization":"GitHub","bio":"GitHub Cofounder & CEO\\nLikes tater tots and beer.","dob":"1979-05-27T07:32:00.000Z"}}');

/***/ })
/******/ 	]);
```

<details><summary><code>/* webpack runtime code */</code></summary>

``` js
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
/******/ 			// no module.id needed
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
/************************************************************************/
```

</details>

``` js
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./example.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_toml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.toml */ 1);
/* harmony import */ var _data_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.yaml */ 2);
/* harmony import */ var _data_json5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.json5 */ 3);




document.querySelector('#app').innerHTML = [_data_toml__WEBPACK_IMPORTED_MODULE_0__, _data_yaml__WEBPACK_IMPORTED_MODULE_1__, _data_json5__WEBPACK_IMPORTED_MODULE_2__].map(data => `
  <h1>${data.title}</h1>
  <div>${data.owner.name}</div>
  <div>${data.owner.organization}</div>
  <div>${data.owner.bio}</div>
  <div>${data.owner.dob}</div>
`).join('<br><br>');

})();

/******/ })()
;
```

# Info

## webpack output

```
asset output.js 5.91 KiB [emitted] (name: main)
chunk (runtime: main) output.js (main) 919 bytes (javascript) 274 bytes (runtime) [entry] [rendered]
  > ./example.js main
  dependent modules 565 bytes [dependent] 3 modules
  runtime modules 274 bytes 1 module
  ./example.js 354 bytes [built] [code generated]
    [no exports]
    [used exports unknown]
    entry ./example.js main
webpack X.X.X compiled successfully
```
