(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ab30fb7"],{"22c93":function(t,e,n){},"4b3a":function(t,e,n){"use strict";n("22c93")},c3a0:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ecc-index demo-1"},[n("main",{staticClass:"main main--demo-1"},[n("div",{staticClass:"content content--demo-1"},[t._m(0),t._v(" "),n("div",{staticClass:"demo-title demo-title--demo-1",attrs:{id:"animat"}},[t._v("Hello World!")]),t._v(" "),n("div",{staticClass:"global-menu"},[n("div",{staticClass:"global-menu__wrap"},[n("div",{staticClass:"global-menu__item global-menu__item--demo-1",on:{click:function(e){return t.toRouter("/job/table")}}},[t._v("\n\t\t\t\t\t\tTable\n\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"global-menu__item global-menu__item--demo-1",on:{click:function(e){return t.toRouter("/job/form")}}},[t._v("\n\t\t\t\t\t\tForm\n\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"global-menu__item global-menu__item--demo-1",on:{click:function(e){return t.toRouter("/job/input")}}},[t._v("\n\t\t\t\t\t\tInput\n\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"global-menu__item global-menu__item--demo-1",on:{click:function(e){return t.toRouter("/job/select")}}},[t._v("\n\t\t\t\t\t\tSelect\n\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"global-menu__item global-menu__item--demo-1",on:{click:function(e){return t.toRouter("/job/button")}}},[t._v("\n\t\t\t\t\t\tButton\n\t\t\t\t\t")])])]),t._v(" "),n("svg",{staticClass:"shape-overlays",attrs:{viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[n("path",{staticClass:"shape-overlays__path"}),t._v(" "),n("path",{staticClass:"shape-overlays__path"}),t._v(" "),n("path",{staticClass:"shape-overlays__path"})])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hamburger js-hover"},[n("div",{staticClass:"hamburger__line hamburger__line--01"},[n("div",{staticClass:"hamburger__line-in hamburger__line-in--01"})]),t._v(" "),n("div",{staticClass:"hamburger__line hamburger__line--02"},[n("div",{staticClass:"hamburger__line-in hamburger__line-in--02"})]),t._v(" "),n("div",{staticClass:"hamburger__line hamburger__line--03"},[n("div",{staticClass:"hamburger__line-in hamburger__line-in--03"})]),t._v(" "),n("div",{staticClass:"hamburger__line hamburger__line--cross01"},[n("div",{staticClass:"hamburger__line-in hamburger__line-in--cross01"})]),t._v(" "),n("div",{staticClass:"hamburger__line hamburger__line--cross02"},[n("div",{staticClass:"hamburger__line-in hamburger__line-in--cross02"})])])}];function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n("1bc7"),n("a7e5"),n("0c84"),n("2843"),n("af72");var u={data:function(){return{params:{name:"王五",age:18},oldparams:{}}},created:function(){this.oldparams=JSON.parse(JSON.stringify(this.params)),this.params.age=20,this.params.name="张三"},mounted:function(){var t={exponentialIn:function(t){return 0==t?t:Math.pow(2,10*(t-1))},exponentialOut:function(t){return 1==t?t:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0==t||1==t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1},sineOut:function(t){var e=1.5707963267948966;return Math.sin(t*e)},circularInOut:function(t){return t<.5?.5*(1-Math.sqrt(1-4*t*t)):.5*(Math.sqrt((3-2*t)*(2*t-1))+1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){var e=t-1;return e*e*e+1},cubicInOut:function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1},quadraticOut:function(t){return-t*(t-2)},quarticOut:function(t){return Math.pow(t-1,3)*(1-t)+1}};setTimeout((function(){return document.body.classList.add("render")}),60);var e=Array.from(document.querySelectorAll("nav.demos > .demo")),n=e.length,i=e.findIndex((function(t){return t.classList.contains("demo--current")})),a=function(t){document.body.classList.remove("render"),document.body.addEventListener("transitionend",(function(){return window.location=t.href}))};e.forEach((function(t){return t.addEventListener("click",(function(t){t.preventDefault(),a(t.target)}))})),document.addEventListener("keydown",(function(t){var s,r=t.keyCode||t.which;if(37===r)s=i>0?e[i-1]:e[n-1];else{if(39!==r)return!1;s=i<n-1?e[i+1]:e[0]}a(s)}));var r=function(){function e(t){s(this,e),this.elm=t,this.path=t.querySelectorAll("path"),this.numPoints=18,this.duration=600,this.delayPointsArray=[],this.delayPointsMax=300,this.delayPerPath=100,this.timeStart=Date.now(),this.isOpened=!1,this.isAnimating=!1}return o(e,[{key:"toggle",value:function(){this.isAnimating=!0;for(var t=4*Math.random()+6,e=0;e<this.numPoints;e++){var n=e/(this.numPoints-1)*Math.PI;this.delayPointsArray[e]=(Math.sin(-n)+Math.sin(-n*t)+2)/4*this.delayPointsMax}!1===this.isOpened?this.open():this.close()}},{key:"open",value:function(){this.isOpened=!0,this.elm.classList.add("is-opened"),this.timeStart=Date.now(),this.renderLoop()}},{key:"close",value:function(){this.isOpened=!1,this.elm.classList.remove("is-opened"),this.timeStart=Date.now(),this.renderLoop()}},{key:"updatePath",value:function(e){for(var n=[],i=0;i<this.numPoints+1;i++)n[i]=100*t.cubicInOut(Math.min(Math.max(e-this.delayPointsArray[i],0)/this.duration,1));var a="";a+=this.isOpened?"M 0 0 V ".concat(n[0]," "):"M 0 ".concat(n[0]," ");for(i=0;i<this.numPoints-1;i++){var s=(i+1)/(this.numPoints-1)*100,r=s-1/(this.numPoints-1)*100/2;a+="C ".concat(r," ").concat(n[i]," ").concat(r," ").concat(n[i+1]," ").concat(s," ").concat(n[i+1]," ")}return a+=this.isOpened?"V 0 H 0":"V 100 H 0",a}},{key:"render",value:function(){if(this.isOpened)for(var t=0;t<this.path.length;t++)this.path[t].setAttribute("d",this.updatePath(Date.now()-(this.timeStart+this.delayPerPath*t)));else for(t=0;t<this.path.length;t++)this.path[t].setAttribute("d",this.updatePath(Date.now()-(this.timeStart+this.delayPerPath*(this.path.length-t-1))))}},{key:"renderLoop",value:function(){var t=this;this.render(),Date.now()-this.timeStart<this.duration+this.delayPerPath*(this.path.length-1)+this.delayPointsMax?requestAnimationFrame((function(){t.renderLoop()})):this.isAnimating=!1}}]),e}();(function(){var t=document.querySelector(".hamburger"),e=document.querySelectorAll(".global-menu__item"),n=document.querySelector(".shape-overlays"),i=new r(n);t.addEventListener("click",(function(){if(i.isAnimating)return!1;if(i.toggle(),!0===i.isOpened){t.classList.add("is-opened-navi");for(var n=0;n<e.length;n++)e[n].classList.add("is-opened")}else{t.classList.remove("is-opened-navi");for(n=0;n<e.length;n++)e[n].classList.remove("is-opened")}}))})()},methods:{toRouter:function(t){this.$router.push({path:t})}}},c=u,l=(n("4b3a"),n("4ac2")),h=Object(l["a"])(c,i,a,!1,null,"fc8656ea",null);e["default"]=h.exports}}]);