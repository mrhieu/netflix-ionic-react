(this["webpackJsonpnetflix-ionic-react"]=this["webpackJsonpnetflix-ionic-react"]||[]).push([[2],{177:function(t,n,e){"use strict";e.r(n),e.d(n,"KEYBOARD_DID_CLOSE",(function(){return r})),e.d(n,"KEYBOARD_DID_OPEN",(function(){return i})),e.d(n,"copyLayoutViewport",(function(){return K})),e.d(n,"copyVisualViewport",(function(){return E})),e.d(n,"keyboardDidClose",(function(){return y})),e.d(n,"keyboardDidOpen",(function(){return w})),e.d(n,"keyboardDidResize",(function(){return b})),e.d(n,"resetKeyboardAssist",(function(){return f})),e.d(n,"setKeyboardClose",(function(){return g})),e.d(n,"setKeyboardOpen",(function(){return p})),e.d(n,"startKeyboardAssist",(function(){return s})),e.d(n,"trackViewportChanges",(function(){return k}));var i="ionKeyboardDidShow",r="ionKeyboardDidHide",o={},u={},d={},c={},a=!1,f=function(){o={},u={},d={},c={},a=!1},s=function(t){h(t),t.visualViewport&&(u=E(t.visualViewport),c=K(t),t.visualViewport.onresize=function(){k(t),w()||b(t)?p(t):y(t)&&g(t)})},h=function(t){t.addEventListener("keyboardDidShow",(function(n){return p(t,n)})),t.addEventListener("keyboardDidHide",(function(){return g(t)}))},p=function(t,n){l(t,n),a=!0},g=function(t){D(t),a=!1},w=function(){var t=(o.height-u.height)*u.scale;return!a&&o.width===u.width&&t>150&&!v()},b=function(t){return a&&!y(t)},y=function(t){return a&&u.height===t.innerHeight},v=function(){return c.width!==d.width||c.height!==d.height},l=function(t,n){var e=n?n.keyboardHeight:t.innerHeight-u.height,r=new CustomEvent(i,{detail:{keyboardHeight:e}});t.dispatchEvent(r)},D=function(t){var n=new CustomEvent(r);t.dispatchEvent(n)},k=function(t){o=Object.assign({},u),u=E(t.visualViewport),d=Object.assign({},c),c=K(t)},E=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}},K=function(t){return{width:t.innerWidth,height:t.innerHeight}}}}]);
//# sourceMappingURL=2.dc737948.chunk.js.map