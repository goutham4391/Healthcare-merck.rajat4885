var resizeTimer;function tabControl(){let e=document.querySelector(".tabbed-content"),t=e.querySelector(".tabs"),n=e.querySelectorAll(".item"),r=t.querySelectorAll("a");null!==t.offsetParent?Array.prototype.forEach.call(r,(function(e,t){e.addEventListener("click",(function(t){t.preventDefault(),Array.prototype.forEach.call(r,(function(e,t){e.classList.remove("active")})),e.classList.add("active"),Array.prototype.forEach.call(n,(function(t,n){t.getAttribute("id")===e.getAttribute("href").substr(1)?t.classList.add("active"):t.classList.remove("active")}))}))})):Array.prototype.forEach.call(n,(function(e,t){e.addEventListener("click",(function(t){Array.prototype.forEach.call(r,(function(t,n){e.getAttribute("id")===t.getAttribute("href").substr(1)?t.classList.add("active"):t.classList.remove("active")})),Array.prototype.forEach.call(n,(function(e,t){e.classList.remove("active")})),e.classList.add("active")}))}))}function filterSelection(e){var t,n;for(t=document.getElementsByClassName("condition-item"),"all"==e&&(e=""),n=0;n<t.length;n++)t[n].classList.remove("show"),t[n].className.indexOf(e)>-1&&t[n].classList.add("show")}function w3AddClass(e,t){var n,r,o;for(r=e.className.split(" "),o=t.split(" "),n=0;n<o.length;n++)-1==r.indexOf(o[n])&&(e.className+=" "+o[n])}function w3RemoveClass(e,t){var n,r,o;for(r=e.className.split(" "),o=t.split(" "),n=0;n<o.length;n++)for(;r.indexOf(o[n])>-1;)r.splice(r.indexOf(o[n]),1);e.className=r.join(" ")}Array.from||(Array.from=function(){var e;try{e=Symbol.iterator?Symbol.iterator:"Symbol(Symbol.iterator)"}catch(t){e="Symbol(Symbol.iterator)"}var t=Object.prototype.toString,n=function(e){return"function"==typeof e||"[object Function]"===t.call(e)},r=Math.pow(2,53)-1,o=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),r)},i=function(t,n){var r=t&&n[e]();return function(e){return t?r.next():n[e]}},l=function(e,t,n,r,o,i){for(var l=0;l<n||o;){var a=r(l),c=o?a.value:a;if(o&&a.done)return t;t[l]=i?void 0===e?i(c,l):i.call(e,c,l):c,l+=1}return o||(t.length=n),t};return function(t){var r=this,a=Object(t),c=n(a[e]);if(null==t&&!c)throw new TypeError("Array.from requires an array-like object or iterator - not null or undefined");var s,u=arguments.length>1?arguments[1]:void 0;if(void 0!==u){if(!n(u))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(s=arguments[2])}var d=o(a.length),m=n(r)?Object(new r(d)):new Array(d);return l(s,m,d,i(c,a),c,u)}}()),tabControl(),window.addEventListener("resize",(function(e){clearTimeout(resizeTimer),resizeTimer=setTimeout((function(){tabControl()}),250)}),!1),filterSelection("all");for(var btnContainer=document.querySelector(".filter-list"),btns=btnContainer.getElementsByClassName("filter-item"),i=0;i<btns.length;i++)btns[i].addEventListener("click",(function(){var e=document.getElementsByClassName("isActive");e[0].className=e[0].className.replace(" isActive",""),this.className+=" isActive"}));const item=document.querySelector(".item"),prev=document.querySelectorAll(".prev"),next=document.querySelectorAll(".next");for(let e=0;e<prev.length;e++){let t=prev[e],n=next[e];t.addEventListener("click",(function(){sideScroll(this.parentNode.previousElementSibling.getElementsByTagName("UL")[0],"right",20,300,10)})),n.addEventListener("click",(function(){sideScroll(this.parentNode.previousElementSibling.getElementsByTagName("UL")[0],"left",20,300,10)}))}function sideScroll(e,t,n,r,o){if(e){scrollAmount=0;var i=setInterval((function(){"left"==t?e.scrollLeft+=o:e.scrollLeft-=o,scrollAmount+=o,scrollAmount>=r&&window.clearInterval(i)}),n)}}function convertFilterList(){const e=Array.from(btnContainer.children).map((function(e){let t=e.children[0].firstChild.className;const n=e.children[0].innerText;return t=t?t.split("-")[0]:n.split(" ")[1].toLowerCase(),'<option value="'+t+'">'+n+"</option>"}));document.querySelector(".mobile-category-list").innerHTML=e}function singleSelectChangeValue(){let e=document.getElementById("mobileSelectCategory").value;const t=document.getElementById("singleSelectCategory"),n=t.options[t.selectedIndex];e=n.text;filterSelection(n.value),document.getElementById("mobileSelectCategory").value=e}function bindPipelineModalTriggers(){let e=document.getElementById("pipelineModal"),t=document.getElementsByClassName("pl-modal-trigger");for(let n=0;n<t.length;n++){let r=t[n],o=(r.getElementsByClassName("category-name")[0].innerHTML,r.getElementsByClassName("category-content")[0].innerHTML);r.getElementsByClassName("category-color-text")[0].textContent;r.addEventListener("click",(function(){"none"===e.style.display?(e.style.display="block",document.getElementById("pipeline-modal-content").innerHTML=o):e.style.display="none"}))}e.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup-wrapper"))&&(e.style.display="none")}))}convertFilterList(),window.addEventListener("load",(function(){bindPipelineModalTriggers()}));