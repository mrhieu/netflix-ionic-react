(this["webpackJsonpnetflix-ionic-react"]=this["webpackJsonpnetflix-ionic-react"]||[]).push([[3],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"startInputShims",(function(){return p}));var o=n(1),r=n(18),i=new WeakMap,a=function(e,t,n,o){void 0===o&&(o=0),i.has(e)!==n&&(n?u(e,t,o):s(e,t))},c=function(e){return e===e.getRootNode().activeElement},u=function(e,t,n){var o=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),i.set(e,r);var a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d("+a+"px,"+n+"px,0) scale(0)"},s=function(e,t){var n=i.get(e);n&&(i.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},l="input, textarea, [no-blur]",d=function(e,t,n,o){var r=e.top,i=e.bottom,a=t.top,c=a+15,u=.5*Math.min(t.bottom,o-n)-i,s=c-r,l=Math.round(u<0?-u:s>0?-s:0),d=Math.min(l,r-a),f=Math.abs(d)/.3;return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(r-c)}},f=function(e,t,n,r,i){if(n||r){var c=function(e,t,n){var o=e.closest("ion-item,[ion-item]")||e;return d(o.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)}(e,n||r,i);if(n&&Math.abs(c.scrollAmount)<4)t.focus();else if(a(e,t,!0,c.inputSafeY),t.focus(),"undefined"!==typeof window){var u,s=function r(){return Object(o.a)(void 0,void 0,void 0,(function(){return Object(o.c)(this,(function(o){switch(o.label){case 0:return void 0!==u&&clearTimeout(u),window.removeEventListener("resize",r),window.removeEventListener("keyboardWillShow",r),n?[4,n.scrollByPoint(0,c.scrollAmount,c.scrollDuration)]:[3,2];case 1:o.sent(),o.label=2;case 2:return a(e,t,!1,c.inputSafeY),t.focus(),[2]}}))}))};window.addEventListener("resize",s),window.addEventListener("keyboardWillShow",s),u=setTimeout(s,300)}}},v=function(e,t,n){if(t&&n){var o=t.x-n.x,r=t.y-n.y;return o*o+r*r>e*e}return!1},m=function(e,t){if("INPUT"===e.tagName&&(!e.parentElement||"ION-INPUT"!==e.parentElement.tagName)&&(!e.parentElement||!e.parentElement.parentElement||"ION-SEARCHBAR"!==e.parentElement.parentElement.tagName)){var n=e.closest("ion-content");if(null!==n){var o=n.$ionPaddingTimer;o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",t+"px"):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},p=function(e){var t=document,n=e.getNumber("keyboardHeight",290),i=e.getBoolean("scrollAssist",!0),u=e.getBoolean("hideCaretOnScroll",!0),s=e.getBoolean("inputBlurring",!0),d=e.getBoolean("scrollPadding",!0),p=Array.from(t.querySelectorAll("ion-input, ion-textarea")),E=new WeakMap,h=new WeakMap,g=function(e){return Object(o.a)(void 0,void 0,void 0,(function(){var t,s,l,d,m;return Object(o.c)(this,(function(o){switch(o.label){case 0:return e.componentOnReady?[4,e.componentOnReady()]:[3,2];case 1:o.sent(),o.label=2;case 2:return t=e.shadowRoot||e,s=t.querySelector("input")||t.querySelector("textarea"),l=e.closest("ion-content"),d=l?null:e.closest("ion-footer"),s?(l&&u&&!E.has(e)&&(m=function(e,t,n){if(!n||!t)return function(){};var o=function(n){c(t)&&a(e,t,n)},r=function(){return a(e,t,!1)},i=function(){return o(!0)},u=function(){return o(!1)};return n.addEventListener("ionScrollStart",i),n.addEventListener("ionScrollEnd",u),t.addEventListener("blur",r),function(){n.removeEventListener("ionScrollStart",i),n.removeEventListener("ionScrollEnd",u),t.addEventListener("ionBlur",r)}}(e,s,l),E.set(e,m)),(l||d)&&i&&!h.has(e)&&(m=function(e,t,n,o,i){var a,u=function(e){a=Object(r.j)(e)},s=function(u){if(a){var s=Object(r.j)(u);v(6,a,s)||c(t)||(u.preventDefault(),u.stopPropagation(),f(e,t,n,o,i))}};return e.addEventListener("touchstart",u,!0),e.addEventListener("touchend",s,!0),function(){e.removeEventListener("touchstart",u,!0),e.removeEventListener("touchend",s,!0)}}(e,s,l,d,n),h.set(e,m)),[2]):[2]}}))}))};s&&function(){var e=!0,t=!1,n=document,o=function(){t=!0},r=function(){e=!0},i=function(o){if(t)t=!1;else{var r=n.activeElement;if(r&&!r.matches(l)){var i=o.target;i!==r&&(i.matches(l)||i.closest(l)||(e=!1,setTimeout((function(){e||r.blur()}),50)))}}};n.addEventListener("ionScrollStart",o),n.addEventListener("focusin",r,!0),n.addEventListener("touchend",i,!1)}(),d&&function(e){var t=document,n=function(t){m(t.target,e)},o=function(e){m(e.target,0)};t.addEventListener("focusin",n),t.addEventListener("focusout",o)}(n);for(var b=0,w=p;b<w.length;b++){var y=w[b];g(y)}t.addEventListener("ionInputDidLoad",(function(e){g(e.detail)})),t.addEventListener("ionInputDidUnload",(function(e){!function(e){var t;u&&((t=E.get(e))&&t(),E.delete(e));i&&((t=h.get(e))&&t(),h.delete(e))}(e.detail)}))}}}]);
//# sourceMappingURL=3.feedd3b8.chunk.js.map