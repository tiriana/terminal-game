(window.webpackJsonp=window.webpackJsonp||[]).push([[2,6,12],{34:function(t,e,r){"use strict";r.r(e);var N=r(7),n=r(0),i=r.n(n),T=r(61),E=r(59),s={CONSTANTS:{PROMPT:"> ",RULE_COMMAND:"{Command}",RULE_ELEMENT:"{Element}",ITEM_REGISTER:"{Register}",ITEM_SYSTEM:"{System}",ITEM_TRACE:"{Trace}",ITEM_MIPS:"{Mips}",ITEM_SWITCH:"{switch}",NUMBER_BINARY:"{binary}",NUMBER_HEX:"{hex}",NUMBER_INT:"{integer}",NUMBER_ALPHA:"{alpha}",NUMBER_PER:"{percent}",JOINER:"{Join}",OPENER:"{Open}",TERMINATOR:"{Terminate}",PLACEHOLDERS:[]},JARGON:{OPENER:["FORCE","HOLD","STATUS","FLUSH","RECALL","SPLIT","RELEASE","LOAD","CONFIG","RECYCLE","DUMP","INVERT","RELAY","ROUTE","LINK","TRACK","REQUEST"],JOINER:["SHIFT","REDIRECT","SUB","FLUSH","SPLIT",">",">>","&","|","::","->","<-","SWAP","IN","CONNECT","JOIN","AS","TO","PUSH","PULL","TRY","MERGE","TRACK","SWAP"],TERMINATOR:["OK","ACK","SYN","ACCEPT","REJECT","MONITOR","PASS","FAIL","WARN","OUT","RETRY","RESET","SCATTER","CONTINUE","WAIT","DOWN","RELAY","PEND","INIT","PRIME"]},Init:function(){this.CONSTANTS.PLACEHOLDERS=[this.CONSTANTS.ITEM_REGISTER,this.CONSTANTS.ITEM_SYSTEM,this.CONSTANTS.ITEM_TRACE,this.CONSTANTS.ITEM_MIPS,this.CONSTANTS.JOINER,this.CONSTANTS.OPENER,this.CONSTANTS.TERMINATOR,this.CONSTANTS.NUMBER_BINARY,this.CONSTANTS.NUMBER_HEX,this.CONSTANTS.NUMBER_INT,this.CONSTANTS.NUMBER_ALPHA,this.CONSTANTS.NUMBER_PER,this.CONSTANTS.ITEM_SWITCH],this.JARGON.TERMINATOR.push("FRAGMENT/"+this.CONSTANTS.NUMBER_HEX),this.JARGON.TERMINATOR.push("DELAY "+this.CONSTANTS.NUMBER_INT+"000"),this.JARGON.TERMINATOR.push("DUMP ["+this.CONSTANTS.NUMBER_HEX+", "+this.CONSTANTS.NUMBER_HEX+"]"),this.JARGON.TERMINATOR.push(this.CONSTANTS.NUMBER_PER+"%"),this.initRuleset()},Cmd:function(){var t=this.commandTemplate();return this.CONSTANTS.PLACEHOLDERS.forEach(function(e,r){t=this.replaceBy(e,t)}.bind(this)),t},ruleset:[],initRuleset:function(){this.ruleset=[[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_SYSTEM],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_REGISTER],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_TRACE],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_MIPS],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.ITEM_SWITCH],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.RULE_ELEMENT],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.RULE_ELEMENT],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.JOINER+" "+this.CONSTANTS.RULE_ELEMENT]]},commandTemplate:function(){var t=this,e=this.CONSTANTS.RULE_COMMAND,r=this.ruleset.filter(function(e){return e[0].indexOf(t.CONSTANTS.RULE_COMMAND)>-1});e=this.RND.rarr(r)[1];for(var N=this.ruleset.filter(function(e){return e[0].indexOf(t.CONSTANTS.RULE_ELEMENT)>-1});e.indexOf(this.CONSTANTS.RULE_ELEMENT)>-1;){var n="(?:.*?"+this.CONSTANTS.RULE_ELEMENT+")";e=e.replace(RegExp(n),function(t){var e=this.RND.rarr(N)[1];return t.replace(RegExp(this.CONSTANTS.RULE_ELEMENT),e)}.bind(this))}return e},replaceBy:function(t,e){if(-1===e.indexOf(t))return e;for(;e.indexOf(t)>-1;){var r="(?:.*?"+t+")";e=e.replace(RegExp(r),function(e){var r="!!";switch(t){case this.CONSTANTS.ITEM_REGISTER:r=this.register();break;case this.CONSTANTS.ITEM_SYSTEM:r=this.system();break;case this.CONSTANTS.ITEM_TRACE:r=this.trace();break;case this.CONSTANTS.ITEM_MIPS:r=this.mip();break;case this.CONSTANTS.JOINER:r=this.RND.rarr(this.JARGON.JOINER);break;case this.CONSTANTS.OPENER:r=this.RND.rarr(this.JARGON.OPENER);break;case this.CONSTANTS.TERMINATOR:r=this.RND.rarr(this.JARGON.TERMINATOR);break;case this.CONSTANTS.NUMBER_BINARY:r=this.RND.rbin();break;case this.CONSTANTS.NUMBER_HEX:r=this.RND.rhex();break;case this.CONSTANTS.NUMBER_INT:r=this.RND.r2n();break;case this.CONSTANTS.NUMBER_ALPHA:r=this.RND.ralpha();break;case this.CONSTANTS.NUMBER_PER:r=this.RND.rper(1);break;case this.CONSTANTS.ITEM_SWITCH:r=this.RND.rbool(this.switch())}return e.replace(RegExp(t),r)}.bind(this))}return e},trace:function(){return this.RND.rarr(["back","reverse-","!",""])+"trace-{opt}".replace("{opt}",this.RND.rarr(["on","off","pause","resume","cancel","log","commit","reject","bypass","maint"]))},register:function(){return this.RND.rbool("de","")+"reg["+this.CONSTANTS.NUMBER_HEX+"]"},system:function(){var t=["system","core","accelerator","back-scatter","receiver","rtr."+this.CONSTANTS.NUMBER_INT,"nucl-"+this.CONSTANTS.NUMBER_ALPHA+"."+this.CONSTANTS.NUMBER_ALPHA,"rad"+this.CONSTANTS.NUMBER_INT+"."+this.CONSTANTS.NUMBER_ALPHA,"pack","bat:"+this.CONSTANTS.NUMBER_HEX,"stabilizer","sector","cycle","OS"+this.CONSTANTS.NUMBER_HEX,"plot","gateway","interface","adapt"],e=this.RND.rarr(t);if(this.RND.rbool()&&(e="{prefix}"+e),this.RND.rbool()){var r=this.CONSTANTS.NUMBER_INT,N=this.CONSTANTS.NUMBER_INT+this.CONSTANTS.NUMBER_ALPHA,n=this.CONSTANTS.NUMBER_INT+"-"+this.CONSTANTS.NUMBER_INT;e+=" "+this.RND.rarg(r,N,n)}this.RND.rbool()&&(e+=" ({status})");var i=this.RND.rarg("sub","super-","backup-","aux-","remote-"),T=this.RND.rarg("ONLINE","OFFLINE","UNK");return e.replace("{prefix}",i).replace("{status}",T)},mip:function(){var t=["MiPS",this.CONSTANTS.NUMBER_ALPHA+"-MEM","CeLL"];return this.RND.rarr(t)+" ("+this.CONSTANTS.NUMBER_BINARY+")"},switch:function(){var t="";do{t+=" /"+this.RND.r36(this.RND.rarg(1,1,1,1,1,2,2,3)).toLowerCase()}while(this.RND.rbool());return t.trimStart()},RND:{nlogn:function(t){return t*Math.log(t)},rint:function(t,e){return 1===arguments.length&&(e=0),Math.min(t,e)+Math.floor(Math.random()*Math.abs(t-e))},rnd:function(t,e){return this.rint.apply(null,arguments)},rdec:function(t,e){return arguments.length<2&&(e=0),arguments.length<1&&(t=1),Math.min(t,e)+Math.random()*Math.abs(t-e)},rper:function(t){return 0==arguments.length&&(t=1),(100*Math.random()).toFixed(t)},rbool:function(t,e){return arguments.length>0?(void 0===e&&(e=""),this.rbool()?t:e):0===this.rint(0,2)},rarr:function(t){return t[this.rint(0,t.length)]},rarg:function(){return void 0===arguments||0===arguments.length?null:arguments[this.rint(arguments.length)]},rbin:function(t,e){arguments.length<2&&(e=8),arguments.length<1&&(t=Math.pow(2,e));var r=this.rint(0,t);return this.toBinary(r,e)},r2n:function(t){return 0===arguments.length&&(t=8),Math.pow(2,this.rnd(0,t)).toString()},rhex:function(t,e){arguments.length<2&&(e=2),arguments.length<1&&(t=256);var r=this.rint(0,t);return this.toHex(r,e)},ralpha:function(t){t||(t=1);for(var e="",r=0;r<t;r++)e+=String.fromCharCode("A".charCodeAt(0)+this.rnd(0,26));return e},r36:function(t){t||(t=1);for(var e="",r=0;r<t;r++){var N=this.rint(36);e+=N<26?String.fromCharCode("A".charCodeAt(0)+N):N-26}return e},rnorm:function(t,e){for(var r=0,N=0;N<15;N++)r+=this.rdec(-1,1);r/=15;var n=0,i=1;return arguments.length>0&&(n=t),arguments.length>1&&(i=e),r*i+n},toBinary:function(t,e){return e||(e=0),t.toString(2).padStart(e,0)},toHex:function(t,e){return e||(e=4),"0x"+t.toString(16).padStart(e,0)}}},S=r(60),a=r.n(S),h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.children,r=t.onTypingDone,N=void 0===r?function(){}:r;return i.a.createElement(a.a,{avgTypingDelay:5,cursor:{show:!1},onTypingDone:N},e)},R=function(t){var e=t.maxLines,r=void 0===e?30:e,N=Object(n.useRef)(),S=Object(n.useState)([]),a=Object(E.a)(S,2),R=a[0],o=a[1],c=Object(n.useState)(!1),O=Object(E.a)(c,2),u=O[0],A=O[1];return Object(n.useEffect)(function(){N.current&&N.current.destroy();return N.current=function(t){var e,r,N,n,i=t.onCommand,T=void 0===i?function(){}:i,E=t.speed,S=void 0===E?1:E;s.Init();var a=!1,h=!1,R=function t(){n=Date.now();var r=s.Cmd();T(s.CONSTANTS.PROMPT+r),N=1/(0!==S?S:1e-8)*s.RND.rnd(2,Math.max(2.5,s.RND.nlogn(r.length)))*7.5,e=setTimeout(t,N)};return{start:function(){a=!0,R()},destroy:function(){return clearTimeout(e)},pause:function(){a&&(h=!0,clearTimeout(e),r=n+N-Date.now())},resume:function(){h&&(h=!1,e=setTimeout(R,r))}}}({onCommand:function(t){o(function(e){return[].concat(Object(T.a)(e),[t]).slice(-r)}),A(!0)},speed:1.2}),N.current.start(),function(){return N.current.destroy()}},[r]),Object(n.useEffect)(function(){N.current&&(u?N.current.pause():N.current.resume())},[u]),i.a.createElement("div",null,R.map(function(t){return i.a.createElement("div",{key:"command-".concat(t)},i.a.createElement(h,{onTypingDone:function(){return A(!1)}},t))}))},o=r(11),c=r(19),O=r(18);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,r=t.history,n=Object(N.a)(t,["title","history"]);return i.a.createElement(O.b,{onKeyEvent:function(){return r.push("/")}},i.a.createElement(o.default,null,i.a.createElement(c.a,null,"Screen ",e," is not ready"),i.a.createElement(c.c,null,"Press [ESC] to return"),i.a.createElement("pre",null,JSON.stringify(n,null,2)),i.a.createElement("div",{style:{position:"relative",left:"20px",opacity:.5}},i.a.createElement(R,{maxLines:10})," ")))}},40:function(t,e,r){"use strict";r.r(e);var N=r(59),n=r(0),i=r.n(n),T=(r(34),r(11)),E=r(19),s=r(58),S=r.n(s),a=r(8),h=r(18),R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.children,r=t.active;return i.a.createElement(E.a,{className:Object(a.a)(S.a.menuItem,r?S.a.active:"")},e)},o=[{key:"start",getText:function(){return"Start"},goto:"play"},{key:"options",getText:function(){return"Options"},goto:"options"},{key:"credits",getText:function(){return"Credits"},goto:"credits"}];e.default=function(t){var e=Object(n.useState)(0),r=Object(N.a)(e,2),E=r[0],s=r[1];return console.log({activeItem:E}),i.a.createElement(h.g,{onKeyEvent:function(e){if(e===h.f)return t.history.push("/");if(e===h.e)return t.history.push("/"+o[E].goto);var r="ArrowDown"===e?1:-1;s(function(t){return Math.max(Math.min(t+r,o.length-1),0)})},handleKeys:[h.f,h.e,h.d,h.c]},i.a.createElement(T.ScreenCentered,null,o.map(function(t){var e=t.key,r=t.getText;return i.a.createElement(R,{active:o[E].key===e,key:e},r())})))}},58:function(t,e,r){t.exports={menuItem:"Menu_menuItem__eT3K4",active:"Menu_active__Uj2a0"}}}]);
//# sourceMappingURL=screen-10--Menu-Menu.082355f7.chunk.js.map