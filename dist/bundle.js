/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions */ \"./modules/functions.js\");\n\n//menu\ndocument.querySelector('.menu-btn').addEventListener('click', () =>{\n    Object(_modules_functions__WEBPACK_IMPORTED_MODULE_0__[\"toggle\"])();\n});\ndocument.addEventListener('click', function(e) {\n    const target = e.target;\n    const its_menu = target == document.getElementById('hide-menu') || document.getElementById('hide-menu').contains(target);\n    const its_btnMenu = target == document.querySelector('.menu-btn');\n    const its_btn = target == document.querySelector('.btn');\n    const menu_is_active = document.getElementById('hide-menu').classList.contains('nav-modal-open'); \n    if (!its_btn && !its_menu && !its_btnMenu && menu_is_active) Object(_modules_functions__WEBPACK_IMPORTED_MODULE_0__[\"toggle\"])();\n});\n//switch-toggle\nlet namesOfAudio = [];\ndocument.getElementById('on').addEventListener('click', ()=>{\n    Object(_modules_functions__WEBPACK_IMPORTED_MODULE_0__[\"switchToggle\"])(namesOfAudio);\n});\n//card flip\nlet btns = document.querySelectorAll('.rotate');\nfor (let btn of btns) {\n    btn.addEventListener('click', (e) =>{\n      if(!e.target.parentNode.parentNode.classList.contains('active')){\n        document.querySelectorAll('.card').forEach( (e) => {\n            e.classList.remove('active');\n        });\n        e.target.parentNode.parentNode.classList.add('active');\n        if(e.target.parentNode.parentNode.classList.contains('active')){\n            e.target.parentNode.parentNode.style.transform = 'rotateY(180deg)';\n            e.target.parentNode.parentNode.parentNode.lastElementChild.style.transform = 'rotateY(360deg)';\n        }\n      }\n    });\n  }\nlet arrayOfBacks = document.querySelectorAll('.back');\nfor (let div of arrayOfBacks) {\n    div.addEventListener('mouseout', (e)=>{\n        e.target.parentNode.firstElementChild.style.transform = 'rotateY(0deg)';\n        e.target.style.transform = 'rotateY(180deg)';\n        document.querySelectorAll('.cards-item-section').forEach( (e) => {e.classList.remove('active')});\n    });\n}\ndocument.querySelectorAll('.cards').forEach((e) =>{\n    if(!e.classList.contains('active-cards')) e.style.display = \"none\";\n});\n//audio\nlet i = 0;\nlet counter = 0;\nlet arrayOfCards = document.querySelectorAll('.cards-item-section');\nfor (let div of arrayOfCards) {\n    div.addEventListener('click', (e)=>{\n        if(!document.getElementById('on').checked){\n                if(document.querySelector('.active-button').classList.contains('repeat-active')){\n                            if(e.target.firstElementChild.firstElementChild.firstElementChild.innerHTML === namesOfAudio[i]){\n                            let audioCorrect = new Audio(`audio/correct.mp3`);\n                            audioCorrect.play();\n                            i++;\n                            if(i < 8){\n                                let audioElement = new Audio(`audio/${namesOfAudio[i]}.mp3`);\n                                setTimeout(function() {\n                                    audioElement.play();\n                                }, 1000);\n                            }\n                            e.target.style.opacity = '0.6';\n                            e.target.style.pointerEvents = 'none';\n                            e.target.parentNode.parentNode.firstElementChild.innerHTML +='<img src=\"img/star-win.svg\" class=\"star-play-win\"></img>';\n                            if(i === 8){\n                                i = 0;\n                                e.target.parentNode.parentNode.firstElementChild.innerHTML = '';\n                                document.querySelector('.switch-toggle').style.display = 'none';\n                                document.getElementById('on').checked = true;\n                                e.target.parentNode.parentNode.style.display = 'none';\n                                if(counter === 0){\n                                    document.querySelector('.win').style.display = 'flex';\n                                    let audioWin = new Audio('audio/success.mp3');\n                                    audioWin.play();\n                                } else {\n                                    document.querySelector('.failure').style.display = 'flex';\n                                    document.querySelector('.failure span').innerHTML += `${counter} errors`; \n                                    let audioLose = new Audio('audio/failure.mp3');\n                                    audioLose.play();\n                                }\n                                counter = 0;\n                                setTimeout(function() {\n                                    Object(_modules_functions__WEBPACK_IMPORTED_MODULE_0__[\"switchToggle\"])(namesOfAudio);\n                                    e.target.parentNode.parentNode.style.display = 'flex';\n                                    document.querySelector('.switch-toggle').style.display = 'block';\n                                    e.target.parentNode.style.display = 'flex';\n                                    arrayOfCards.forEach((e)=>{\n                                        e.style.opacity = '1';\n                                        e.style.pointerEvents = 'all';\n                                    });\n                                    document.querySelector('.win').style.display = 'none';\n                                    document.querySelector('.failure').style.display = 'none';   \n                                }, 2500);\n                                \n                            }\n                        } else {\n                            let audioError = new Audio(`audio/error.mp3`);\n                            audioError.play();\n                            counter++;\n                            e.target.parentNode.parentNode.firstElementChild.innerHTML +='<img src=\"img/star.svg\" class=\"star-play\"></img>'\n                        }\n                }\n        } else if(document.getElementById('on').checked) {\n            let cardName = e.target.firstElementChild.firstElementChild.firstElementChild.innerHTML;\n                let audioElement = new Audio(`audio/${cardName}.mp3`);\n                audioElement.play(); \n        }\n    });\n}\n//link\nfunction followLink(array, attribute){\n    for (let elem of array) {\n        elem.addEventListener('click', (e)=>{\n            e.preventDefault();\n            links.forEach((e) =>{\n                e.classList.remove('active-link');\n            });\n            if(!document.getElementById('on').checked && array === links && document.querySelector('.active-cards').id !== 'Home'){\n                document.querySelector('.active-button').classList.add('button');\n                document.querySelector('.active-button').classList.remove('repeat-active');\n                document.querySelectorAll('.button span').forEach((e) =>{\n                    e.style.display = 'flex';\n                });\n                document.querySelectorAll('.repeat').forEach((e) =>{\n                    e.style.display = 'none';\n            });\n            }\n            if (array === cards) links[array.indexOf(elem) + 1].classList.add('active-link');\n            else e.target.classList.add('active-link');\n            Object(_modules_functions__WEBPACK_IMPORTED_MODULE_0__[\"showSection\"])(e.target.getAttribute(attribute));\n            Object(_modules_functions__WEBPACK_IMPORTED_MODULE_0__[\"toggle\"])();\n            namesOfAudio = [];\n            for(let name of document.querySelectorAll('.active-cards .card .cards-item-section .front .bottom-line span')){\n                namesOfAudio.push(name.innerHTML);\n            }\n            namesOfAudio = namesOfAudio.sort(() => Math.random() - 0.5);\n            if(document.getElementById('on').checked && document.querySelector('.active-cards').id !== 'Home') document.querySelector('.active-button').style.display = 'none';\n            else if(e.target.getAttribute(attribute) !== 'Home') document.querySelector('.active-button').style.display = 'flex';\n            \n        });\n    }\n  }\n\nlet links = document.querySelectorAll('.link');\nlet cards = [].slice.call(document.querySelectorAll('.cards-item'));\nfollowLink(links, 'href');\nfollowLink(cards, 'data');\n//game\nfor (let button of document.querySelectorAll('.cards-section')) {\n    button.lastElementChild.addEventListener('click', (e) =>{\n        if(document.querySelector('.active-cards').id !== 'Home'){\n            document.querySelectorAll('.button span').forEach((e) =>{\n                e.style.display = 'none';\n            })\n            e.target.classList.remove('button');\n            e.target.classList.add('repeat-active');\n            document.querySelectorAll('.repeat').forEach((e) =>{\n                e.style.display = 'block';\n            });\n            let audioElement = new Audio(`audio/${namesOfAudio[i]}.mp3`);\n            audioElement.play();\n        }\n    });\n}\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./modules/functions.js":
/*!******************************!*\
  !*** ./modules/functions.js ***!
  \******************************/
/*! exports provided: showSection, switchToggle, toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showSection\", function() { return showSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchToggle\", function() { return switchToggle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggle\", function() { return toggle; });\nfunction showSection(id){\n  document.querySelectorAll('stars').forEach((e) =>{\n    e.classList.remove('active-stars');\n  });\n  document.querySelectorAll('.cards').forEach((e) =>{\n    e.classList.remove('active-cards');\n});\n  switch (id) {\n      case 'Home':\n          document.getElementById('Home').classList.add('active-cards');\n          document.querySelectorAll('.cards').forEach((e) =>{\n              if(!e.classList.contains('active-cards')){\n                  e.style.display = \"none\";\n              } else {\n                  e.style.display = \"flex\";\n              }\n          });\n          document.querySelectorAll('.button').forEach((e) =>{\n            e.classList.remove('active-button');\n            e.style.display = 'none';\n          });\n          break;\n      case 'ActionA':\n          document.getElementById('ActionA').firstElementChild.classList.add('active-stars');\n          document.getElementById('ActionA').classList.add('active-cards');\n          document.querySelectorAll('.cards').forEach((e) =>{\n              if(!e.classList.contains('active-cards')){\n                  e.style.display = 'none';\n              } else {\n                  e.style.display = 'flex';\n              }\n          });\n          changeButtonClass('ActionA');\n          break;\n      case 'ActionB':\n          document.getElementById('ActionB').firstElementChild.classList.add('active-stars');\n          document.getElementById('ActionB').classList.add('active-cards');\n          document.querySelectorAll('.cards').forEach((e) =>{\n              if(!e.classList.contains('active-cards')){\n                  e.style.display = 'none';\n              } else {\n                  e.style.display = 'flex';\n              }\n          });\n          changeButtonClass('ActionB');\n          break;  \n      case 'ActionC':\n          document.getElementById('ActionC').firstElementChild.classList.add('active-stars');\n          document.getElementById('ActionC').classList.add('active-cards');\n          document.querySelectorAll('.cards').forEach((e) =>{\n              if(!e.classList.contains('active-cards')){\n                  e.style.display = \"none\";\n              } else {\n                  e.style.display = \"flex\";\n              }\n          });\n          changeButtonClass('ActionC');\n          break;\n      case 'Adjective':\n          document.getElementById('Adjective').firstElementChild.classList.add('active-stars');\n          document.getElementById('Adjective').classList.add('active-cards');\n          document.querySelectorAll('.cards').forEach((e) =>{\n              if(!e.classList.contains('active-cards')){\n                  e.style.display = \"none\";\n              } else {\n                  e.style.display = \"flex\";\n              }\n          });\n          changeButtonClass('Adjective');\n          break; \n      case 'AnimalA':\n          document.getElementById('AnimalA').firstElementChild.classList.add('active-stars');\n          document.getElementById('AnimalA').classList.add('active-cards');\n          document.querySelectorAll('.cards').forEach((e) =>{\n              if(!e.classList.contains('active-cards')){\n                  e.style.display = \"none\";\n              } else {\n                  e.style.display = \"flex\";\n              }\n          });\n          changeButtonClass('AnimalA');\n          break;\n      case 'AnimalB':\n          document.getElementById('AnimalB').firstElementChild.classList.add('active-stars');\n          document.getElementById('AnimalB').classList.add('active-cards');\n          document.querySelectorAll('.cards').forEach((e) =>{\n              if(!e.classList.contains('active-cards')){\n                  e.style.display = \"none\";\n              } else {\n                  e.style.display = \"flex\";\n              }\n          });\n          changeButtonClass('AnimalB');\n          break;\n      case 'Clothes':\n          document.getElementById('Clothes').firstElementChild.classList.add('active-stars');\n          document.getElementById('Clothes').classList.add('active-cards');\n          document.querySelectorAll('.cards').forEach((e) =>{\n              if(!e.classList.contains('active-cards')){\n                  e.style.display = \"none\";\n              } else {\n                  e.style.display = \"flex\";\n              }\n          });\n          changeButtonClass('Clothes');\n          break; \n      case 'Emotions':\n          document.getElementById('Emotions').firstElementChild.classList.add('active-stars');\n          document.getElementById('Emotions').classList.add('active-cards');\n          document.querySelectorAll('.cards').forEach((e) =>{\n              if(!e.classList.contains('active-cards')){\n                  e.style.display = \"none\";\n              } else {\n                  e.style.display = \"flex\";\n              }\n          });\n          changeButtonClass('Emotions');\n          break;                \n      default:\n          break;\n  }\n}\nfunction changeButtonClass(section){\n  document.querySelectorAll('.button').forEach((e) =>{\n    e.classList.remove('active-button');\n  });\n  document.getElementById(section).lastElementChild.classList.add('active-button');\n}\nfunction switchToggle(namesOfAudio){\n  if(document.getElementById('on').checked){\n    document.getElementById('hide-menu').classList.remove('nav-play');\n    document.getElementById('hide-menu').classList.add('nav-train');\n    document.querySelectorAll('.cards-item').forEach((e)=>{\n        e.classList.toggle('cards-item-play');\n    });\n    document.querySelectorAll('.cards-item-section').forEach((e)=>{\n        e.classList.toggle('cards-item-section-play');\n    });\n    document.querySelectorAll('.front').forEach((e)=>{\n        e.style.display = 'block';\n    });\n    if(document.querySelector('.active-cards').id !== 'Home'){\n        document.querySelector('.active-button').classList.add('button');\n        document.querySelector('.active-button').classList.remove('repeat-active');\n        document.querySelectorAll('.button span').forEach((e) =>{\n            e.style.display = 'flex';\n        });\n        document.querySelectorAll('.repeat').forEach((e) =>{\n            e.style.display = 'none';\n        });\n        document.querySelector('.active-button').style.display = 'none';\n    }\n    namesOfAudio = [];\n} else {\n    document.getElementById('hide-menu').classList.remove('nav-train');\n    document.getElementById('hide-menu').classList.add('nav-play');\n    document.querySelectorAll('.front').forEach((e)=>{\n        e.style.display = 'none';\n    });\n    document.querySelectorAll('.cards-item').forEach((e)=>{\n        e.classList.toggle('cards-item-play');\n    });\n    document.querySelectorAll('.cards-item-section').forEach((e)=>{\n        e.classList.toggle('cards-item-section-play');\n    });\n    document.querySelector('.active-button').style.display = 'flex';\n}\n}\nfunction toggle(){\n  document.getElementById('hide-menu').classList.toggle('nav-modal-open');\n  document.querySelector('.menu-btn').classList.toggle('menu-btn-active');\n  if(document.getElementById('hide-menu').classList.contains('nav-modal-open'))document.body.style.overflow = 'hidden';\n  else document.body.style.overflow = '';\n}\n\n//# sourceURL=webpack:///./modules/functions.js?");

/***/ })

/******/ });