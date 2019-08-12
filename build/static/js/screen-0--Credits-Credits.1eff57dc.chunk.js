(window.webpackJsonp=window.webpackJsonp||[]).push([[1,6],{40:function(t,N,e){"use strict";e.r(N);var r=e(5),T=e(0),i=e.n(T),n=e(81),E=e(17),s={CONSTANTS:{PROMPT:"> ",RULE_COMMAND:"{Command}",RULE_ELEMENT:"{Element}",ITEM_REGISTER:"{Register}",ITEM_SYSTEM:"{System}",ITEM_TRACE:"{Trace}",ITEM_MIPS:"{Mips}",ITEM_SWITCH:"{switch}",NUMBER_BINARY:"{binary}",NUMBER_HEX:"{hex}",NUMBER_INT:"{integer}",NUMBER_ALPHA:"{alpha}",NUMBER_PER:"{percent}",JOINER:"{Join}",OPENER:"{Open}",TERMINATOR:"{Terminate}",PLACEHOLDERS:[]},JARGON:{OPENER:["FORCE","HOLD","STATUS","FLUSH","RECALL","SPLIT","RELEASE","LOAD","CONFIG","RECYCLE","DUMP","INVERT","RELAY","ROUTE","LINK","TRACK","REQUEST"],JOINER:["SHIFT","REDIRECT","SUB","FLUSH","SPLIT",">",">>","&","|","::","->","<-","SWAP","IN","CONNECT","JOIN","AS","TO","PUSH","PULL","TRY","MERGE","TRACK","SWAP"],TERMINATOR:["OK","ACK","SYN","ACCEPT","REJECT","MONITOR","PASS","FAIL","WARN","OUT","RETRY","RESET","SCATTER","CONTINUE","WAIT","DOWN","RELAY","PEND","INIT","PRIME"]},Init:function(){this.CONSTANTS.PLACEHOLDERS=[this.CONSTANTS.ITEM_REGISTER,this.CONSTANTS.ITEM_SYSTEM,this.CONSTANTS.ITEM_TRACE,this.CONSTANTS.ITEM_MIPS,this.CONSTANTS.JOINER,this.CONSTANTS.OPENER,this.CONSTANTS.TERMINATOR,this.CONSTANTS.NUMBER_BINARY,this.CONSTANTS.NUMBER_HEX,this.CONSTANTS.NUMBER_INT,this.CONSTANTS.NUMBER_ALPHA,this.CONSTANTS.NUMBER_PER,this.CONSTANTS.ITEM_SWITCH],this.JARGON.TERMINATOR.push("FRAGMENT/"+this.CONSTANTS.NUMBER_HEX),this.JARGON.TERMINATOR.push("DELAY "+this.CONSTANTS.NUMBER_INT+"000"),this.JARGON.TERMINATOR.push("DUMP ["+this.CONSTANTS.NUMBER_HEX+", "+this.CONSTANTS.NUMBER_HEX+"]"),this.JARGON.TERMINATOR.push(this.CONSTANTS.NUMBER_PER+"%"),this.initRuleset()},Cmd:function(){var t=this.commandTemplate();return this.CONSTANTS.PLACEHOLDERS.forEach(function(N,e){t=this.replaceBy(N,t)}.bind(this)),t},ruleset:[],initRuleset:function(){this.ruleset=[[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_SYSTEM],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_REGISTER],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_TRACE],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_MIPS],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.ITEM_SWITCH],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.RULE_ELEMENT],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.RULE_ELEMENT],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.JOINER+" "+this.CONSTANTS.RULE_ELEMENT]]},commandTemplate:function(){var t=this,N=this.CONSTANTS.RULE_COMMAND,e=this.ruleset.filter(function(N){return N[0].indexOf(t.CONSTANTS.RULE_COMMAND)>-1});N=this.RND.rarr(e)[1];for(var r=this.ruleset.filter(function(N){return N[0].indexOf(t.CONSTANTS.RULE_ELEMENT)>-1});N.indexOf(this.CONSTANTS.RULE_ELEMENT)>-1;){var T="(?:.*?"+this.CONSTANTS.RULE_ELEMENT+")";N=N.replace(RegExp(T),function(t){var N=this.RND.rarr(r)[1];return t.replace(RegExp(this.CONSTANTS.RULE_ELEMENT),N)}.bind(this))}return N},replaceBy:function(t,N){if(-1===N.indexOf(t))return N;for(;N.indexOf(t)>-1;){var e="(?:.*?"+t+")";N=N.replace(RegExp(e),function(N){var e="!!";switch(t){case this.CONSTANTS.ITEM_REGISTER:e=this.register();break;case this.CONSTANTS.ITEM_SYSTEM:e=this.system();break;case this.CONSTANTS.ITEM_TRACE:e=this.trace();break;case this.CONSTANTS.ITEM_MIPS:e=this.mip();break;case this.CONSTANTS.JOINER:e=this.RND.rarr(this.JARGON.JOINER);break;case this.CONSTANTS.OPENER:e=this.RND.rarr(this.JARGON.OPENER);break;case this.CONSTANTS.TERMINATOR:e=this.RND.rarr(this.JARGON.TERMINATOR);break;case this.CONSTANTS.NUMBER_BINARY:e=this.RND.rbin();break;case this.CONSTANTS.NUMBER_HEX:e=this.RND.rhex();break;case this.CONSTANTS.NUMBER_INT:e=this.RND.r2n();break;case this.CONSTANTS.NUMBER_ALPHA:e=this.RND.ralpha();break;case this.CONSTANTS.NUMBER_PER:e=this.RND.rper(1);break;case this.CONSTANTS.ITEM_SWITCH:e=this.RND.rbool(this.switch())}return N.replace(RegExp(t),e)}.bind(this))}return N},trace:function(){return this.RND.rarr(["back","reverse-","!",""])+"trace-{opt}".replace("{opt}",this.RND.rarr(["on","off","pause","resume","cancel","log","commit","reject","bypass","maint"]))},register:function(){return this.RND.rbool("de","")+"reg["+this.CONSTANTS.NUMBER_HEX+"]"},system:function(){var t=["system","core","accelerator","back-scatter","receiver","rtr."+this.CONSTANTS.NUMBER_INT,"nucl-"+this.CONSTANTS.NUMBER_ALPHA+"."+this.CONSTANTS.NUMBER_ALPHA,"rad"+this.CONSTANTS.NUMBER_INT+"."+this.CONSTANTS.NUMBER_ALPHA,"pack","bat:"+this.CONSTANTS.NUMBER_HEX,"stabilizer","sector","cycle","OS"+this.CONSTANTS.NUMBER_HEX,"plot","gateway","interface","adapt"],N=this.RND.rarr(t);if(this.RND.rbool()&&(N="{prefix}"+N),this.RND.rbool()){var e=this.CONSTANTS.NUMBER_INT,r=this.CONSTANTS.NUMBER_INT+this.CONSTANTS.NUMBER_ALPHA,T=this.CONSTANTS.NUMBER_INT+"-"+this.CONSTANTS.NUMBER_INT;N+=" "+this.RND.rarg(e,r,T)}this.RND.rbool()&&(N+=" ({status})");var i=this.RND.rarg("sub","super-","backup-","aux-","remote-"),n=this.RND.rarg("ONLINE","OFFLINE","UNK");return N.replace("{prefix}",i).replace("{status}",n)},mip:function(){var t=["MiPS",this.CONSTANTS.NUMBER_ALPHA+"-MEM","CeLL"];return this.RND.rarr(t)+" ("+this.CONSTANTS.NUMBER_BINARY+")"},switch:function(){var t="";do{t+=" /"+this.RND.r36(this.RND.rarg(1,1,1,1,1,2,2,3)).toLowerCase()}while(this.RND.rbool());return t.trimStart()},RND:{nlogn:function(t){return t*Math.log(t)},rint:function(t,N){return 1===arguments.length&&(N=0),Math.min(t,N)+Math.floor(Math.random()*Math.abs(t-N))},rnd:function(t,N){return this.rint.apply(null,arguments)},rdec:function(t,N){return arguments.length<2&&(N=0),arguments.length<1&&(t=1),Math.min(t,N)+Math.random()*Math.abs(t-N)},rper:function(t){return 0==arguments.length&&(t=1),(100*Math.random()).toFixed(t)},rbool:function(t,N){return arguments.length>0?(void 0===N&&(N=""),this.rbool()?t:N):0===this.rint(0,2)},rarr:function(t){return t[this.rint(0,t.length)]},rarg:function(){return void 0===arguments||0===arguments.length?null:arguments[this.rint(arguments.length)]},rbin:function(t,N){arguments.length<2&&(N=8),arguments.length<1&&(t=Math.pow(2,N));var e=this.rint(0,t);return this.toBinary(e,N)},r2n:function(t){return 0===arguments.length&&(t=8),Math.pow(2,this.rnd(0,t)).toString()},rhex:function(t,N){arguments.length<2&&(N=2),arguments.length<1&&(t=256);var e=this.rint(0,t);return this.toHex(e,N)},ralpha:function(t){t||(t=1);for(var N="",e=0;e<t;e++)N+=String.fromCharCode("A".charCodeAt(0)+this.rnd(0,26));return N},r36:function(t){t||(t=1);for(var N="",e=0;e<t;e++){var r=this.rint(36);N+=r<26?String.fromCharCode("A".charCodeAt(0)+r):r-26}return N},rnorm:function(t,N){for(var e=0,r=0;r<15;r++)e+=this.rdec(-1,1);e/=15;var T=0,i=1;return arguments.length>0&&(T=t),arguments.length>1&&(i=N),e*i+T},toBinary:function(t,N){return N||(N=0),t.toString(2).padStart(N,0)},toHex:function(t,N){return N||(N=4),"0x"+t.toString(16).padStart(N,0)}}},S=e(82),a=e.n(S),h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},N=t.children,e=t.onTypingDone,r=void 0===e?function(){}:e;return i.a.createElement(a.a,{avgTypingDelay:5,cursor:{show:!1},onTypingDone:r},N)},R=function(t){var N=t.maxLines,e=void 0===N?30:N,r=Object(T.useRef)(),S=Object(T.useState)([]),a=Object(E.a)(S,2),R=a[0],O=a[1],A=Object(T.useState)(!1),o=Object(E.a)(A,2),c=o[0],u=o[1];return Object(T.useEffect)(function(){r.current&&r.current.destroy();return r.current=function(t){var N,e,r,T,i=t.onCommand,n=void 0===i?function(){}:i,E=t.speed,S=void 0===E?1:E;s.Init();var a=!1,h=!1,R=function t(){T=Date.now();var e=s.Cmd();n(s.CONSTANTS.PROMPT+e),r=1/(0!==S?S:1e-8)*s.RND.rnd(2,Math.max(2.5,s.RND.nlogn(e.length)))*7.5,N=setTimeout(t,r)};return{start:function(){a=!0,R()},destroy:function(){return clearTimeout(N)},pause:function(){a&&(h=!0,clearTimeout(N),e=T+r-Date.now())},resume:function(){h&&(h=!1,N=setTimeout(R,e))}}}({onCommand:function(t){O(function(N){return[].concat(Object(n.a)(N),[t]).slice(-e)}),u(!0)},speed:1.2}),r.current.start(),function(){return r.current.destroy()}},[e]),Object(T.useEffect)(function(){r.current&&(c?r.current.pause():r.current.resume())},[c]),i.a.createElement("div",null,R.map(function(t){return i.a.createElement("div",{key:"command-".concat(t)},i.a.createElement(h,{onTypingDone:function(){return u(!1)}},t))}))},O=e(10),A=e(26),o=e(27);N.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},N=t.title,e=t.history,T=Object(r.a)(t,["title","history"]);return i.a.createElement(o.b,{onKeyEvent:function(){return e.push("/")}},i.a.createElement(O.Background,null),i.a.createElement(O.default,null,i.a.createElement(A.a,null,"Screen ",N," is not ready"),i.a.createElement(A.b,null,"Press [ESC] to return"),i.a.createElement("pre",null,JSON.stringify(T,null,2)),i.a.createElement("div",{style:{position:"relative",left:"20px",opacity:.5}},i.a.createElement(R,{maxLines:10})," ")))}},42:function(t,N,e){"use strict";e.r(N);var r=e(0),T=e.n(r),i=e(40);N.default=function(t){return T.a.createElement(i.default,Object.assign({title:"credits"},t))}}}]);
//# sourceMappingURL=screen-0--Credits-Credits.1eff57dc.chunk.js.map