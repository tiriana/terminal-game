(window.webpackJsonp=window.webpackJsonp||[]).push([[2,6,12],{39:function(t,e,r){"use strict";r.r(e);var n=r(5),i=r(0),N=r.n(i),T=r(79),E=r(17),a={CONSTANTS:{PROMPT:"> ",RULE_COMMAND:"{Command}",RULE_ELEMENT:"{Element}",ITEM_REGISTER:"{Register}",ITEM_SYSTEM:"{System}",ITEM_TRACE:"{Trace}",ITEM_MIPS:"{Mips}",ITEM_SWITCH:"{switch}",NUMBER_BINARY:"{binary}",NUMBER_HEX:"{hex}",NUMBER_INT:"{integer}",NUMBER_ALPHA:"{alpha}",NUMBER_PER:"{percent}",JOINER:"{Join}",OPENER:"{Open}",TERMINATOR:"{Terminate}",PLACEHOLDERS:[]},JARGON:{OPENER:["FORCE","HOLD","STATUS","FLUSH","RECALL","SPLIT","RELEASE","LOAD","CONFIG","RECYCLE","DUMP","INVERT","RELAY","ROUTE","LINK","TRACK","REQUEST"],JOINER:["SHIFT","REDIRECT","SUB","FLUSH","SPLIT",">",">>","&","|","::","->","<-","SWAP","IN","CONNECT","JOIN","AS","TO","PUSH","PULL","TRY","MERGE","TRACK","SWAP"],TERMINATOR:["OK","ACK","SYN","ACCEPT","REJECT","MONITOR","PASS","FAIL","WARN","OUT","RETRY","RESET","SCATTER","CONTINUE","WAIT","DOWN","RELAY","PEND","INIT","PRIME"]},Init:function(){this.CONSTANTS.PLACEHOLDERS=[this.CONSTANTS.ITEM_REGISTER,this.CONSTANTS.ITEM_SYSTEM,this.CONSTANTS.ITEM_TRACE,this.CONSTANTS.ITEM_MIPS,this.CONSTANTS.JOINER,this.CONSTANTS.OPENER,this.CONSTANTS.TERMINATOR,this.CONSTANTS.NUMBER_BINARY,this.CONSTANTS.NUMBER_HEX,this.CONSTANTS.NUMBER_INT,this.CONSTANTS.NUMBER_ALPHA,this.CONSTANTS.NUMBER_PER,this.CONSTANTS.ITEM_SWITCH],this.JARGON.TERMINATOR.push("FRAGMENT/"+this.CONSTANTS.NUMBER_HEX),this.JARGON.TERMINATOR.push("DELAY "+this.CONSTANTS.NUMBER_INT+"000"),this.JARGON.TERMINATOR.push("DUMP ["+this.CONSTANTS.NUMBER_HEX+", "+this.CONSTANTS.NUMBER_HEX+"]"),this.JARGON.TERMINATOR.push(this.CONSTANTS.NUMBER_PER+"%"),this.initRuleset()},Cmd:function(){var t=this.commandTemplate();return this.CONSTANTS.PLACEHOLDERS.forEach(function(e,r){t=this.replaceBy(e,t)}.bind(this)),t},ruleset:[],initRuleset:function(){this.ruleset=[[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_SYSTEM],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_REGISTER],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_TRACE],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_MIPS],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.ITEM_SWITCH],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.RULE_ELEMENT],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.RULE_ELEMENT],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.JOINER+" "+this.CONSTANTS.RULE_ELEMENT]]},commandTemplate:function(){var t=this,e=this.CONSTANTS.RULE_COMMAND,r=this.ruleset.filter(function(e){return e[0].indexOf(t.CONSTANTS.RULE_COMMAND)>-1});e=this.RND.rarr(r)[1];for(var n=this.ruleset.filter(function(e){return e[0].indexOf(t.CONSTANTS.RULE_ELEMENT)>-1});e.indexOf(this.CONSTANTS.RULE_ELEMENT)>-1;){var i="(?:.*?"+this.CONSTANTS.RULE_ELEMENT+")";e=e.replace(RegExp(i),function(t){var e=this.RND.rarr(n)[1];return t.replace(RegExp(this.CONSTANTS.RULE_ELEMENT),e)}.bind(this))}return e},replaceBy:function(t,e){if(-1===e.indexOf(t))return e;for(;e.indexOf(t)>-1;){var r="(?:.*?"+t+")";e=e.replace(RegExp(r),function(e){var r="!!";switch(t){case this.CONSTANTS.ITEM_REGISTER:r=this.register();break;case this.CONSTANTS.ITEM_SYSTEM:r=this.system();break;case this.CONSTANTS.ITEM_TRACE:r=this.trace();break;case this.CONSTANTS.ITEM_MIPS:r=this.mip();break;case this.CONSTANTS.JOINER:r=this.RND.rarr(this.JARGON.JOINER);break;case this.CONSTANTS.OPENER:r=this.RND.rarr(this.JARGON.OPENER);break;case this.CONSTANTS.TERMINATOR:r=this.RND.rarr(this.JARGON.TERMINATOR);break;case this.CONSTANTS.NUMBER_BINARY:r=this.RND.rbin();break;case this.CONSTANTS.NUMBER_HEX:r=this.RND.rhex();break;case this.CONSTANTS.NUMBER_INT:r=this.RND.r2n();break;case this.CONSTANTS.NUMBER_ALPHA:r=this.RND.ralpha();break;case this.CONSTANTS.NUMBER_PER:r=this.RND.rper(1);break;case this.CONSTANTS.ITEM_SWITCH:r=this.RND.rbool(this.switch())}return e.replace(RegExp(t),r)}.bind(this))}return e},trace:function(){return this.RND.rarr(["back","reverse-","!",""])+"trace-{opt}".replace("{opt}",this.RND.rarr(["on","off","pause","resume","cancel","log","commit","reject","bypass","maint"]))},register:function(){return this.RND.rbool("de","")+"reg["+this.CONSTANTS.NUMBER_HEX+"]"},system:function(){var t=["system","core","accelerator","back-scatter","receiver","rtr."+this.CONSTANTS.NUMBER_INT,"nucl-"+this.CONSTANTS.NUMBER_ALPHA+"."+this.CONSTANTS.NUMBER_ALPHA,"rad"+this.CONSTANTS.NUMBER_INT+"."+this.CONSTANTS.NUMBER_ALPHA,"pack","bat:"+this.CONSTANTS.NUMBER_HEX,"stabilizer","sector","cycle","OS"+this.CONSTANTS.NUMBER_HEX,"plot","gateway","interface","adapt"],e=this.RND.rarr(t);if(this.RND.rbool()&&(e="{prefix}"+e),this.RND.rbool()){var r=this.CONSTANTS.NUMBER_INT,n=this.CONSTANTS.NUMBER_INT+this.CONSTANTS.NUMBER_ALPHA,i=this.CONSTANTS.NUMBER_INT+"-"+this.CONSTANTS.NUMBER_INT;e+=" "+this.RND.rarg(r,n,i)}this.RND.rbool()&&(e+=" ({status})");var N=this.RND.rarg("sub","super-","backup-","aux-","remote-"),T=this.RND.rarg("ONLINE","OFFLINE","UNK");return e.replace("{prefix}",N).replace("{status}",T)},mip:function(){var t=["MiPS",this.CONSTANTS.NUMBER_ALPHA+"-MEM","CeLL"];return this.RND.rarr(t)+" ("+this.CONSTANTS.NUMBER_BINARY+")"},switch:function(){var t="";do{t+=" /"+this.RND.r36(this.RND.rarg(1,1,1,1,1,2,2,3)).toLowerCase()}while(this.RND.rbool());return t.trimStart()},RND:{nlogn:function(t){return t*Math.log(t)},rint:function(t,e){return 1===arguments.length&&(e=0),Math.min(t,e)+Math.floor(Math.random()*Math.abs(t-e))},rnd:function(t,e){return this.rint.apply(null,arguments)},rdec:function(t,e){return arguments.length<2&&(e=0),arguments.length<1&&(t=1),Math.min(t,e)+Math.random()*Math.abs(t-e)},rper:function(t){return 0==arguments.length&&(t=1),(100*Math.random()).toFixed(t)},rbool:function(t,e){return arguments.length>0?(void 0===e&&(e=""),this.rbool()?t:e):0===this.rint(0,2)},rarr:function(t){return t[this.rint(0,t.length)]},rarg:function(){return void 0===arguments||0===arguments.length?null:arguments[this.rint(arguments.length)]},rbin:function(t,e){arguments.length<2&&(e=8),arguments.length<1&&(t=Math.pow(2,e));var r=this.rint(0,t);return this.toBinary(r,e)},r2n:function(t){return 0===arguments.length&&(t=8),Math.pow(2,this.rnd(0,t)).toString()},rhex:function(t,e){arguments.length<2&&(e=2),arguments.length<1&&(t=256);var r=this.rint(0,t);return this.toHex(r,e)},ralpha:function(t){t||(t=1);for(var e="",r=0;r<t;r++)e+=String.fromCharCode("A".charCodeAt(0)+this.rnd(0,26));return e},r36:function(t){t||(t=1);for(var e="",r=0;r<t;r++){var n=this.rint(36);e+=n<26?String.fromCharCode("A".charCodeAt(0)+n):n-26}return e},rnorm:function(t,e){for(var r=0,n=0;n<15;n++)r+=this.rdec(-1,1);r/=15;var i=0,N=1;return arguments.length>0&&(i=t),arguments.length>1&&(N=e),r*N+i},toBinary:function(t,e){return e||(e=0),t.toString(2).padStart(e,0)},toHex:function(t,e){return e||(e=4),"0x"+t.toString(16).padStart(e,0)}}},s=r(78),S=r.n(s),h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.children,r=t.onTypingDone,n=void 0===r?function(){}:r;return N.a.createElement(S.a,{avgTypingDelay:5,cursor:{show:!1},onTypingDone:n},e)},c=function(t){var e=t.maxLines,r=void 0===e?30:e,n=Object(i.useRef)(),s=Object(i.useState)([]),S=Object(E.a)(s,2),c=S[0],o=S[1],u=Object(i.useState)(!1),R=Object(E.a)(u,2),O=R[0],A=R[1];return Object(i.useEffect)(function(){n.current&&n.current.destroy();return n.current=function(t){var e,r,n,i,N=t.onCommand,T=void 0===N?function(){}:N,E=t.speed,s=void 0===E?1:E;a.Init();var S=!1,h=!1,c=function t(){i=Date.now();var r=a.Cmd();T(a.CONSTANTS.PROMPT+r),n=1/(0!==s?s:1e-8)*a.RND.rnd(2,Math.max(2.5,a.RND.nlogn(r.length)))*7.5,e=setTimeout(t,n)};return{start:function(){S=!0,c()},destroy:function(){return clearTimeout(e)},pause:function(){S&&(h=!0,clearTimeout(e),r=i+n-Date.now())},resume:function(){h&&(h=!1,e=setTimeout(c,r))}}}({onCommand:function(t){o(function(e){return[].concat(Object(T.a)(e),[t]).slice(-r)}),A(!0)},speed:1.2}),n.current.start(),function(){return n.current.destroy()}},[r]),Object(i.useEffect)(function(){n.current&&(O?n.current.pause():n.current.resume())},[O]),N.a.createElement("div",null,c.map(function(t){return N.a.createElement("div",{key:"command-".concat(t)},N.a.createElement(h,{onTypingDone:function(){return A(!1)}},t))}))},o=r(10),u=r(22),R=r(21);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,r=t.history,i=Object(n.a)(t,["title","history"]);return N.a.createElement(R.b,{onKeyEvent:function(){return r.push("/")}},N.a.createElement(o.Background,null),N.a.createElement(o.default,null,N.a.createElement(u.a,null,"Screen ",e," is not ready"),N.a.createElement(u.b,null,"Press [ESC] to return"),N.a.createElement("pre",null,JSON.stringify(i,null,2)),N.a.createElement("div",{style:{position:"relative",left:"20px",opacity:.5}},N.a.createElement(c,{maxLines:10})," ")))}},47:function(t,e,r){"use strict";r.r(e);var n=r(17),i=r(0),N=r.n(i),T=(r(39),r(10)),E=r(22),a=r(77),s=r.n(a),S=r(9),h=r(21),c=r(5),o=r(80),u=r.n(o),R=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).children;return N.a.createElement("div",{className:u.a.glitchWrapper},N.a.createElement("div",{className:u.a.glitch,"data-text":String(t).split("").reverse().join("")},t))},O=function(t){var e=t.duration,r=void 0===e?1e3:e,T=Object(c.a)(t,["duration"]),E=Object(i.useRef)(),a=Object(i.useState)(!1),s=Object(n.a)(a,2),S=s[0],h=s[1];return Object(i.useEffect)(function(){return E.current=setTimeout(function(){return h(!0)},r),function(){return clearTimeout(E.current)}}),S?T.children:N.a.createElement(R,T)},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.children,r=t.active;return N.a.createElement(E.a,{className:Object(S.a)(s.a.menuItem,r?s.a.active:"")},r?N.a.createElement(O,null,e):e)},C=[{key:"start",getText:function(){return"Start"},goto:"play"},{key:"options",getText:function(){return"Options"},goto:"options"},{key:"credits",getText:function(){return"Credits"},goto:"credits"}];e.default=function(t){var e=Object(i.useState)(0),r=Object(n.a)(e,2),E=r[0],a=r[1];return console.log({activeItem:E}),N.a.createElement(h.g,{onKeyEvent:function(e){if(e===h.f)return t.history.push("/");if(e===h.e)return t.history.push("/"+C[E].goto);var r="ArrowDown"===e?1:-1;a(function(t){return Math.max(Math.min(t+r,C.length-1),0)})},handleKeys:[h.f,h.e,h.d,h.c]},N.a.createElement(T.Background,null),N.a.createElement(T.ScreenCentered,null,C.map(function(t){var e=t.key,r=t.getText;return N.a.createElement(A,{active:C[E].key===e,key:e},r())})))}},77:function(t,e,r){t.exports={menuItem:"Menu_menuItem__eT3K4",active:"Menu_active__Uj2a0"}},80:function(t,e,r){t.exports={"glitch-wrapper":"Heavy_glitch-wrapper__26hHC",glitch:"Heavy_glitch__3_wuo","glitch-anim-2":"Heavy_glitch-anim-2__1KNjl","glitch-anim":"Heavy_glitch-anim__2nkH0"}}}]);
//# sourceMappingURL=screen-10--Menu-Menu.c5f58795.chunk.js.map