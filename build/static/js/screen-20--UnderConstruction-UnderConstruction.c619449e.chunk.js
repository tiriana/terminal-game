(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{33:function(t,N,r){"use strict";r.r(N);var e=r(8),T=r(0),i=r.n(T),n=r(69),E=r(67),S={CONSTANTS:{PROMPT:"> ",RULE_COMMAND:"{Command}",RULE_ELEMENT:"{Element}",ITEM_REGISTER:"{Register}",ITEM_SYSTEM:"{System}",ITEM_TRACE:"{Trace}",ITEM_MIPS:"{Mips}",ITEM_SWITCH:"{switch}",NUMBER_BINARY:"{binary}",NUMBER_HEX:"{hex}",NUMBER_INT:"{integer}",NUMBER_ALPHA:"{alpha}",NUMBER_PER:"{percent}",JOINER:"{Join}",OPENER:"{Open}",TERMINATOR:"{Terminate}",PLACEHOLDERS:[]},JARGON:{OPENER:["FORCE","HOLD","STATUS","FLUSH","RECALL","SPLIT","RELEASE","LOAD","CONFIG","RECYCLE","DUMP","INVERT","RELAY","ROUTE","LINK","TRACK","REQUEST"],JOINER:["SHIFT","REDIRECT","SUB","FLUSH","SPLIT",">",">>","&","|","::","->","<-","SWAP","IN","CONNECT","JOIN","AS","TO","PUSH","PULL","TRY","MERGE","TRACK","SWAP"],TERMINATOR:["OK","ACK","SYN","ACCEPT","REJECT","MONITOR","PASS","FAIL","WARN","OUT","RETRY","RESET","SCATTER","CONTINUE","WAIT","DOWN","RELAY","PEND","INIT","PRIME"]},Init:function(){this.CONSTANTS.PLACEHOLDERS=[this.CONSTANTS.ITEM_REGISTER,this.CONSTANTS.ITEM_SYSTEM,this.CONSTANTS.ITEM_TRACE,this.CONSTANTS.ITEM_MIPS,this.CONSTANTS.JOINER,this.CONSTANTS.OPENER,this.CONSTANTS.TERMINATOR,this.CONSTANTS.NUMBER_BINARY,this.CONSTANTS.NUMBER_HEX,this.CONSTANTS.NUMBER_INT,this.CONSTANTS.NUMBER_ALPHA,this.CONSTANTS.NUMBER_PER,this.CONSTANTS.ITEM_SWITCH],this.JARGON.TERMINATOR.push("FRAGMENT/"+this.CONSTANTS.NUMBER_HEX),this.JARGON.TERMINATOR.push("DELAY "+this.CONSTANTS.NUMBER_INT+"000"),this.JARGON.TERMINATOR.push("DUMP ["+this.CONSTANTS.NUMBER_HEX+", "+this.CONSTANTS.NUMBER_HEX+"]"),this.JARGON.TERMINATOR.push(this.CONSTANTS.NUMBER_PER+"%"),this.initRuleset()},Cmd:function(){var t=this.commandTemplate();return this.CONSTANTS.PLACEHOLDERS.forEach(function(N,r){t=this.replaceBy(N,t)}.bind(this)),t},ruleset:[],initRuleset:function(){this.ruleset=[[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_SYSTEM],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_REGISTER],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_TRACE],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_MIPS],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.ITEM_SWITCH],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.RULE_ELEMENT],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.RULE_ELEMENT],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.JOINER+" "+this.CONSTANTS.RULE_ELEMENT]]},commandTemplate:function(){var t=this,N=this.CONSTANTS.RULE_COMMAND,r=this.ruleset.filter(function(N){return N[0].indexOf(t.CONSTANTS.RULE_COMMAND)>-1});N=this.RND.rarr(r)[1];for(var e=this.ruleset.filter(function(N){return N[0].indexOf(t.CONSTANTS.RULE_ELEMENT)>-1});N.indexOf(this.CONSTANTS.RULE_ELEMENT)>-1;){var T="(?:.*?"+this.CONSTANTS.RULE_ELEMENT+")";N=N.replace(RegExp(T),function(t){var N=this.RND.rarr(e)[1];return t.replace(RegExp(this.CONSTANTS.RULE_ELEMENT),N)}.bind(this))}return N},replaceBy:function(t,N){if(-1===N.indexOf(t))return N;for(;N.indexOf(t)>-1;){var r="(?:.*?"+t+")";N=N.replace(RegExp(r),function(N){var r="!!";switch(t){case this.CONSTANTS.ITEM_REGISTER:r=this.register();break;case this.CONSTANTS.ITEM_SYSTEM:r=this.system();break;case this.CONSTANTS.ITEM_TRACE:r=this.trace();break;case this.CONSTANTS.ITEM_MIPS:r=this.mip();break;case this.CONSTANTS.JOINER:r=this.RND.rarr(this.JARGON.JOINER);break;case this.CONSTANTS.OPENER:r=this.RND.rarr(this.JARGON.OPENER);break;case this.CONSTANTS.TERMINATOR:r=this.RND.rarr(this.JARGON.TERMINATOR);break;case this.CONSTANTS.NUMBER_BINARY:r=this.RND.rbin();break;case this.CONSTANTS.NUMBER_HEX:r=this.RND.rhex();break;case this.CONSTANTS.NUMBER_INT:r=this.RND.r2n();break;case this.CONSTANTS.NUMBER_ALPHA:r=this.RND.ralpha();break;case this.CONSTANTS.NUMBER_PER:r=this.RND.rper(1);break;case this.CONSTANTS.ITEM_SWITCH:r=this.RND.rbool(this.switch())}return N.replace(RegExp(t),r)}.bind(this))}return N},trace:function(){return this.RND.rarr(["back","reverse-","!",""])+"trace-{opt}".replace("{opt}",this.RND.rarr(["on","off","pause","resume","cancel","log","commit","reject","bypass","maint"]))},register:function(){return this.RND.rbool("de","")+"reg["+this.CONSTANTS.NUMBER_HEX+"]"},system:function(){var t=["system","core","accelerator","back-scatter","receiver","rtr."+this.CONSTANTS.NUMBER_INT,"nucl-"+this.CONSTANTS.NUMBER_ALPHA+"."+this.CONSTANTS.NUMBER_ALPHA,"rad"+this.CONSTANTS.NUMBER_INT+"."+this.CONSTANTS.NUMBER_ALPHA,"pack","bat:"+this.CONSTANTS.NUMBER_HEX,"stabilizer","sector","cycle","OS"+this.CONSTANTS.NUMBER_HEX,"plot","gateway","interface","adapt"],N=this.RND.rarr(t);if(this.RND.rbool()&&(N="{prefix}"+N),this.RND.rbool()){var r=this.CONSTANTS.NUMBER_INT,e=this.CONSTANTS.NUMBER_INT+this.CONSTANTS.NUMBER_ALPHA,T=this.CONSTANTS.NUMBER_INT+"-"+this.CONSTANTS.NUMBER_INT;N+=" "+this.RND.rarg(r,e,T)}this.RND.rbool()&&(N+=" ({status})");var i=this.RND.rarg("sub","super-","backup-","aux-","remote-"),n=this.RND.rarg("ONLINE","OFFLINE","UNK");return N.replace("{prefix}",i).replace("{status}",n)},mip:function(){var t=["MiPS",this.CONSTANTS.NUMBER_ALPHA+"-MEM","CeLL"];return this.RND.rarr(t)+" ("+this.CONSTANTS.NUMBER_BINARY+")"},switch:function(){var t="";do{t+=" /"+this.RND.r36(this.RND.rarg(1,1,1,1,1,2,2,3)).toLowerCase()}while(this.RND.rbool());return t.trimStart()},RND:{nlogn:function(t){return t*Math.log(t)},rint:function(t,N){return 1===arguments.length&&(N=0),Math.min(t,N)+Math.floor(Math.random()*Math.abs(t-N))},rnd:function(t,N){return this.rint.apply(null,arguments)},rdec:function(t,N){return arguments.length<2&&(N=0),arguments.length<1&&(t=1),Math.min(t,N)+Math.random()*Math.abs(t-N)},rper:function(t){return 0==arguments.length&&(t=1),(100*Math.random()).toFixed(t)},rbool:function(t,N){return arguments.length>0?(void 0===N&&(N=""),this.rbool()?t:N):0===this.rint(0,2)},rarr:function(t){return t[this.rint(0,t.length)]},rarg:function(){return void 0===arguments||0===arguments.length?null:arguments[this.rint(arguments.length)]},rbin:function(t,N){arguments.length<2&&(N=8),arguments.length<1&&(t=Math.pow(2,N));var r=this.rint(0,t);return this.toBinary(r,N)},r2n:function(t){return 0===arguments.length&&(t=8),Math.pow(2,this.rnd(0,t)).toString()},rhex:function(t,N){arguments.length<2&&(N=2),arguments.length<1&&(t=256);var r=this.rint(0,t);return this.toHex(r,N)},ralpha:function(t){t||(t=1);for(var N="",r=0;r<t;r++)N+=String.fromCharCode("A".charCodeAt(0)+this.rnd(0,26));return N},r36:function(t){t||(t=1);for(var N="",r=0;r<t;r++){var e=this.rint(36);N+=e<26?String.fromCharCode("A".charCodeAt(0)+e):e-26}return N},rnorm:function(t,N){for(var r=0,e=0;e<15;e++)r+=this.rdec(-1,1);r/=15;var T=0,i=1;return arguments.length>0&&(T=t),arguments.length>1&&(i=N),r*i+T},toBinary:function(t,N){return N||(N=0),t.toString(2).padStart(N,0)},toHex:function(t,N){return N||(N=4),"0x"+t.toString(16).padStart(N,0)}}},s=r(68),h=r.n(s),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},N=t.children,r=t.onTypingDone,e=void 0===r?function(){}:r;return i.a.createElement(h.a,{avgTypingDelay:5,cursor:{show:!1},onTypingDone:e},N)},R=function(t){var N=t.maxLines,r=void 0===N?30:N,e=Object(T.useRef)(),s=Object(T.useState)([]),h=Object(E.a)(s,2),R=h[0],O=h[1],A=Object(T.useState)(!1),o=Object(E.a)(A,2),c=o[0],u=o[1];return Object(T.useEffect)(function(){e.current&&e.current.destroy();return e.current=function(t){var N,r,e,T,i=t.onCommand,n=void 0===i?function(){}:i,E=t.speed,s=void 0===E?1:E;S.Init();var h=!1,a=!1,R=function t(){T=Date.now();var r=S.Cmd();n(S.CONSTANTS.PROMPT+r),e=1/(0!==s?s:1e-8)*S.RND.rnd(2,Math.max(2.5,S.RND.nlogn(r.length)))*7.5,N=setTimeout(t,e)};return{start:function(){h=!0,R()},destroy:function(){return clearTimeout(N)},pause:function(){h&&(a=!0,clearTimeout(N),r=T+e-Date.now())},resume:function(){a&&(a=!1,N=setTimeout(R,r))}}}({onCommand:function(t){O(function(N){return[].concat(Object(n.a)(N),[t]).slice(-r)}),u(!0)},speed:1.2}),e.current.start(),function(){return e.current.destroy()}},[r]),Object(T.useEffect)(function(){e.current&&(c?e.current.pause():e.current.resume())},[c]),i.a.createElement("div",null,R.map(function(t){return i.a.createElement("div",{key:"command-".concat(t)},i.a.createElement(a,{onTypingDone:function(){return u(!1)}},t))}))},O=r(11),A=r(21),o=r(20);N.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},N=t.title,r=t.history,T=Object(e.a)(t,["title","history"]);return i.a.createElement(o.b,{onKeyEvent:function(){return r.push("/")}},i.a.createElement(O.default,null,i.a.createElement(A.a,null,"Screen ",N," is not ready"),i.a.createElement(A.c,null,"Press [ESC] to return"),i.a.createElement("pre",null,JSON.stringify(T,null,2)),i.a.createElement("div",{style:{position:"relative",left:"20px",opacity:.5}},i.a.createElement(R,{maxLines:10})," ")))}}}]);
//# sourceMappingURL=screen-20--UnderConstruction-UnderConstruction.c619449e.chunk.js.map