(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{10:function(e,n,t){"use strict";t.r(n);var r=t(5),a=t(0),c=t.n(a),o=t(15),i=t(9),u=t(11),s=t.n(u),l=t(16),d=t.n(l),m=function(){return c.a.createElement("div",{className:d.a.wrapper},c.a.createElement("div",{className:d.a.innerWrapper},c.a.createElement("div",{className:d.a.landscape})))},f=t(12);t.d(n,"ScreenCentered",function(){return h}),t.d(n,"Background",function(){return E});var p,v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.children,t=e.className,a=Object(r.a)(e,["children","className"]);return c.a.createElement("div",Object.assign({className:Object(i.a)([t,s.a.screen])},Object(o.a)(a)),c.a.createElement(f.a,{duration:500*Math.random()+200},n))},h=(n.default=v,p=s.a.centered,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.className,t=Object(r.a)(e,["className"]);return c.a.createElement(v,Object.assign({},t,{className:Object(i.a)([n,p])}))}),E=function(){return c.a.createElement("div",{className:s.a.background},c.a.createElement(m,null))}},11:function(e,n,t){e.exports={screen:"Screen_screen__36f34",flex:"Screen_flex__3mErm",centeredV:"Screen_centeredV__2pre2 Screen_flex__3mErm",centeredH:"Screen_centeredH__2EU6D Screen_flex__3mErm",centered:"Screen_centered__27iqu Screen_centeredV__2pre2 Screen_flex__3mErm Screen_centeredH__2EU6D Screen_flex__3mErm",background:"Screen_background__A5Ai3"}},12:function(e,n,t){"use strict";t.d(n,"b",function(){return l}),t.d(n,"a",function(){return d});var r=t(17),a=t(5),c=t(0),o=t.n(c),i=t(36),u=t.n(i),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.children,t=Object(a.a)(e,["children"]);return o.a.createElement(u.a,Object.assign({style:{display:"inline-block"}},t),n)},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.children,t=e.speed,a=void 0===t?1:t,i=Object(c.useState)(!0),u=Object(r.a)(i,2),l=u[0],d=u[1],m=Object(c.useRef)();return Object(c.useEffect)(function(){var e=l?1:(5e3*Math.random()+1e3)/Math.max(Number.MIN_VALUE,a);return m.current=setTimeout(function(){return d(function(e){return!e})},e),function(){return clearTimeout(m.current)}},[l,a]),o.a.createElement(s,{iterationCount:1,disabled:l},n)},d=function(e){var n=e.duration,t=void 0===n?1e3:n,i=Object(a.a)(e,["duration"]),u=Object(c.useRef)(),l=Object(c.useState)(!1),d=Object(r.a)(l,2),m=d[0],f=d[1];return Object(c.useEffect)(function(){return u.current=setTimeout(function(){return f(!0)},t),function(){return clearTimeout(u.current)}}),m?i.children:o.a.createElement(s,{iterationCount:1},i.children)}},13:function(e,n,t){e.exports={text:"Text_text__1O0TZ",hugeText:"Text_hugeText__2J4i9",bigText:"Text_bigText__CwJZ-",smallText:"Text_smallText__ixRN3"}},14:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(10),o=t(27),i=t(26),u=t(12);n.default=function(e){e.onExit;var n=e.history;return a.a.createElement(o.a,{onKeyEvent:function(){return n.push("menu")}},a.a.createElement(c.Background,null),a.a.createElement(c.ScreenCentered,null,a.a.createElement(i.b,null,a.a.createElement(u.b,{speed:.3},"Press")," ",a.a.createElement(u.b,{speed:.7},"[ENTER]"))))}},15:function(e,n,t){"use strict";var r=t(34);n.a=function(){return r.pickHTMLProps.apply(void 0,arguments)}},16:function(e,n,t){e.exports={wrapper:"Grid_wrapper__2kUDe",innerWrapper:"Grid_innerWrapper__2jD9-",landscape:"Grid_landscape__2QYHC",moveUp:"Grid_moveUp__2XlRz",glow:"Grid_glow__1_stD"}},26:function(e,n,t){"use strict";t.d(n,"b",function(){return m}),t.d(n,"a",function(){return f});var r=t(5),a=t(0),c=t.n(a),o=t(13),i=t.n(o),u=t(15),s=t(9),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.children,t=e.className,a=Object(r.a)(e,["children","className"]);return c.a.createElement("div",Object.assign({className:Object(s.a)([t,i.a.text])},Object(u.a)(a)),n)},d=function(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.className,a=Object(r.a)(n,["className"]);return c.a.createElement(l,Object.assign({},a,{className:Object(s.a)([t,e])}))}},m=d(i.a.hugeText),f=d(i.a.bigText);d(i.a.smallText)},27:function(e,n,t){"use strict";t.d(n,"d",function(){return o}),t.d(n,"c",function(){return i}),t.d(n,"e",function(){return u}),t.d(n,"f",function(){return s}),t.d(n,"a",function(){return l}),t.d(n,"b",function(){return d});var r=t(0),a=t.n(r),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.children,t=e.onKeyEvent,a=e.handleKeys;return Object(r.useEffect)(function(){var e=function(e){console.log("Caught key: ",e.key),(a&&a.includes(e.key)||!a)&&t(e.key,e)};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}},[a,t]),n},o="ArrowUp",i="ArrowDown",u="Enter",s="Escape";n.g=c;var l=function(e){return a.a.createElement(c,Object.assign({},e,{handleKeys:[u]}))},d=function(e){return a.a.createElement(c,Object.assign({},e,{handleKeys:[s]}))}},50:function(e,n,t){e.exports=t(77)},55:function(e,n,t){},57:function(e,n,t){},58:function(e,n,t){var r={"./Credits/Credits":[42,9,0,1],"./Credits/Credits.jsx":[42,9,0,1],"./GameoverLoser/GameoverLoser":[43,9,0,5],"./GameoverLoser/GameoverLoser.jsx":[43,9,0,5],"./GameoverWinner/GameoverWinner":[44,9,0,7],"./GameoverWinner/GameoverWinner.jsx":[44,9,0,7],"./Gameplay/Gameplay":[49,9,0,10,8],"./Gameplay/Gameplay.jsx":[49,9,0,10,8],"./Leaderboard/Leaderboard":[45,9,0,9],"./Leaderboard/Leaderboard.jsx":[45,9,0,9],"./Menu/Menu":[48,9,2],"./Menu/Menu.jsx":[48,9,2],"./Menu/Menu.module.scss":[78,7,13],"./NotFound/NotFound":[46,9,3],"./NotFound/NotFound.jsx":[46,9,3],"./Options/Options":[47,9,0,4],"./Options/Options.jsx":[47,9,0,4],"./Screen/Screen":[10,9],"./Screen/Screen.jsx":[10,9],"./Screen/Screen.module.scss":[11,7],"./UnderConstruction/UnderConstruction":[40,9,0,6],"./UnderConstruction/UnderConstruction.jsx":[40,9,0,6],"./Welcome/Welcome":[14,9],"./Welcome/Welcome.jsx":[14,9]};function a(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],a=n[0];return Promise.all(n.slice(2).map(t.e)).then(function(){return t.t(a,n[1])})}a.keys=function(){return Object.keys(r)},a.id=58,e.exports=a},59:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(33),o=t.n(c),i=(t(55),t(56),t(57),t(37)),u=t(7),s=a.a.createElement(function(){return a.a.createElement("div",null," LOADING ")},null),l=function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).prefetch,c=void 0===n||n,o=function(){return t(58)("./".concat(e,"/").concat(e))},i=Object(r.lazy)(o),u=function(e){return a.a.createElement(r.Suspense,{fallback:s},a.a.createElement(i,e))};return u.prefetch=o,c&&o(),u},d=t(21),m=t(22),f=t(24),p=t(23),v=t(25),h=(t(59),function(e){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(v.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"noisy"},a.a.createElement("div",{className:"frame"},a.a.createElement("div",{className:"piece output"},a.a.createElement("div",{className:"main-container"},this.props.children),a.a.createElement("div",{className:"piece scanlines noclick"}),a.a.createElement("div",{className:"piece glow noclick"}))))}}]),n}(a.a.Component)),E=t(14);var b=function(){return a.a.createElement(h,null,a.a.createElement(i.a,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:E.default}),a.a.createElement(u.a,{path:"/menu",component:l("Menu",{prefetch:!0})}),a.a.createElement(u.a,{path:"/options",component:l("Options",{prefetch:!0})}),a.a.createElement(u.a,{path:"/credits",component:l("Credits")}),a.a.createElement(u.a,{path:"/leaderboard",component:l("Leaderboard",{prefetch:!0})}),a.a.createElement(u.a,{path:"/play",component:l("Gameplay",{prefetch:!0})}),a.a.createElement(u.a,{path:"/winner",component:l("GameoverWinner")}),a.a.createElement(u.a,{path:"/loser",component:l("GameoverLoser",{prefetch:!0})}),a.a.createElement(u.a,{component:l("NotFound")}))))},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(a.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat(".","/service-worker.js");_?(function(e,n){fetch(e).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):g(n,e)})}}()},9:function(e,n,t){"use strict";var r=t(35),a=t.n(r);n.a=function(){return a.a.apply(void 0,arguments)}}},[[50,12,14]]]);
//# sourceMappingURL=main.65f26519.chunk.js.map