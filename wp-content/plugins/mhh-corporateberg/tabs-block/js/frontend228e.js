!function(e){var t={};function r(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(o,l,function(t){return e[t]}.bind(null,l));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});var r=document.querySelectorAll(".corpberg-tab-title.btn");Array.prototype.forEach.call(r,(function(e,t){e.addEventListener("click",(function(t){if(!e.classList.contains("open")){var r=".corpberg-tab-content-"+e.dataset.tab,o=e.closest(".corpberg-tabs");o.querySelector(".corpberg-tab-title.open").classList.remove("open"),o.querySelector(".corpberg-tab-content.open").classList.remove("open"),o.querySelector(r).classList.add("open"),e.classList.add("open")}}),!1)}));var o=document.querySelectorAll(".corpberg-tab-titles span");Array.prototype.forEach.call(o,(function(e,t){e.addEventListener("click",(function(t){!function(e){var t=e.closest(".corpberg-tabs"),r=t.querySelector(".corpberg-tab-titles");e.classList.contains("corpberg-tab-titles-right")?r.scrollLeft=r.scrollLeft+.5*t.offsetWidth:r.scrollLeft=r.scrollLeft-.5*t.offsetWidth}(e)}),!1)}));var l=function(e){e.scrollLeft!==e.scrollWidth-e.offsetWidth&&e.classList.add("scrollable-right"),e.scrollLeft===e.scrollWidth-e.offsetWidth&&e.classList.remove("scrollable-right"),0!==e.scrollLeft&&e.classList.add("scrollable-left"),0===e.scrollLeft&&e.classList.remove("scrollable-left")},n=document.querySelectorAll(".corpberg-tabs");Array.prototype.forEach.call(n,(function(e,t){var r=e.querySelector(".corpberg-tab-titles");r.scrollWidth>e.offsetWidth&&(l(r),r.addEventListener("scroll",(function(e){l(r)}),!1))}))}]);