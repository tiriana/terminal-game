(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6],{100:function(e,t,n){e.exports=n.p+"static/media/wrong_letter.b23be0a5.mp3"},101:function(e,t,n){e.exports=n.p+"static/media/1beep.cbfc1bc3.mp3"},102:function(e,t,n){e.exports=n.p+"static/media/CorrectAnswer.ae5b2a24.mp3"},103:function(e,t,n){e.exports=n.p+"static/media/SkipQuestion.05e50d7d.mp3"},104:function(e,t,n){e.exports=n.p+"static/media/Lost_Years_-_West_Side_Lane_(Mega_Drive-Genesis_Arrange).a2b0b3f3.mp3"},105:function(e,t,n){e.exports=n.p+"static/media/TimeEnd_explosion.2ffbe1ac.mp3"},106:function(e,t,n){e.exports={letter:"AnswerTiles_letter__1cg5z",empty:"AnswerTiles_empty__2qPhD",wordWrapper:"AnswerTiles_wordWrapper__1bbOx",word:"AnswerTiles_word__2pUch",incorrect:"AnswerTiles_incorrect__3gadw",blinker:"AnswerTiles_blinker__2SXwq",correctAnswer:"AnswerTiles_correctAnswer__aVS2P"}},108:function(e,t,n){e.exports={timer:"styles_timer__38hEE"}},114:function(e,t,n){e.exports={red:"mainScene_red__118Yx",blue:"mainScene_blue__39u8Q",clockWrapper:"mainScene_clockWrapper__2WEpI",timeDiff:"mainScene_timeDiff__h_7Q2",fadeOut:"mainScene_fadeOut__nQy1j",categoryName:"mainScene_categoryName__26Bo7",questionContent:"mainScene_questionContent__2rPGz",points:"mainScene_points__1eEMy",description:"mainScene_description__3Jj5h"}},115:function(e,t,n){e.exports=n.p+"static/media/happyface.1f3e9da8.png"},116:function(e,t,n){e.exports=n.p+"static/media/end_explosion.03bbbe6e.png"},117:function(e,t,n){e.exports=n.p+"static/media/pggbomb_logo.d7406a87.png"},118:function(e,t,n){e.exports={wrapper:"leaderboard_wrapper__1Qhgy",playerName:"leaderboard_playerName__Eu2J4",playerScore:"leaderboard_playerScore__3dI2Y",clear:"leaderboard_clear__3zYHs",scoreTitle:"leaderboard_scoreTitle__1ZpHj"}},119:function(e,t,n){"use strict";var r=n(21),i=n(22),a=n(24),s=n(23),o=n(25),c=n(0),u=n.n(c),l=(n(120),n(83));u.a.Component},120:function(e,t,n){e.exports=n.p+"static/media/styles.global.caa5ffc3.less"},121:function(e,t,n){"use strict";n.r(t),n.d(t,"createSession",function(){return o}),n.d(t,"getNextQuestion",function(){return c}),n.d(t,"saveGoodAnswer",function(){return u}),n.d(t,"saveBadAnswer",function(){return l}),n.d(t,"skipQuestion",function(){return m}),n.d(t,"saveWinGame",function(){return p}),n.d(t,"saveLoseGame",function(){return d}),n.d(t,"getLeaderboard",function(){return h});var r=0,i=[{id:1,question:"S\u0142ownie 1 + 1",answer:"DWA"},{id:2,question:"S\u0142ownie 1 + 2",answer:"TRZY"},{id:3,question:"Dwa wyrazy",answer:"Dwa wyrazy"},{id:4,question:"Wpisz a\u017c pi\u0119\u0107 wyraz\xf3w",answer:"Wpisz a\u017c pi\u0119\u0107 wyraz\xf3w"},{id:5,question:"Twoja stara je",answer:"Banana"},{id:6,question:"Najd\u0142u\u017csze polskie s\u0142owo",answer:"Nie znam"}],a=[{playerId:"3211",playerName:"Staszek",result:12343,answered:15},{playerId:"3211",playerName:"Zdzisiek",result:4312,answered:3},{playerId:"3211",playerName:"stefan",result:33123,answered:54}],s={},o=function(e){e.playerName;return new Promise(function(e){setTimeout(function(){s[++r]=[].concat(i).sort(Math.random),e({sessionId:r})},500)})},c=function(e){e.sessionId;return new Promise(function(e){setTimeout(function(){e(s[r].pop())},500)})},u=function(e){e.sessionId,e.questionId;return new Promise(function(e){setTimeout(function(){e()},500)})},l=function(e){e.sessionId,e.questionId;return new Promise(function(e){setTimeout(function(){e()},500)})},m=function(e){e.sessionId,e.questionId;return new Promise(function(e){setTimeout(function(){e()},500)})},p=function(e){e.sessionId,e.score;return new Promise(function(e){setTimeout(function(){e()},500)})},d=function(e){e.sessionId,e.score;return new Promise(function(e){setTimeout(function(){e()},500)})},h=function(){return new Promise(function(e){setTimeout(function(){e({leaderBoard:a})},500)})}},126:function(e,t,n){"use strict";var r,i=n(21),a=n(22),s=n(24),o=n(23),c=n(25),u=n(0),l=n.n(u),m={MENU:"MENU",MAIN:"MAIN",LOSE:"LOSE",WIN:"WIN",LEADERBOARD:"LEADERBOARD",IDLE:"IDLE"},p=n(8),d=n.n(p),h=(d.a.shape({createSession:d.a.func.isRequired,getNextQuestion:d.a.func.isRequired,saveGoodAnswer:d.a.func.isRequired,saveBadAnswer:d.a.func.isRequired,skipQuestion:d.a.func.isRequired,saveWinGame:d.a.func.isRequired,saveLoseGame:d.a.func.isRequired,getLeaderboard:d.a.func.isRequired}),n(90)),f=(n(91),n(125)),N="|/-\\".length,E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).incrementStep=function(){e.setState(function(e){return{step:(e.step+1)%N}})},e.state={step:0},e}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return l.a.createElement(f.a,{size:25,color:"#14fdce"})}}]),t}(l.a.Component),T=n(98),S=n.n(T),O=function(){return l.a.createElement("span",{className:S.a.blinker},"\u2588")},A=n(86),y=n(99),R=n.n(y),v=n(100),b=n.n(v),C=n(101),w=n.n(C),_=n(102),g=n.n(_),M=n(103),I=n.n(M),L=function(){return U(R.a)},k=function(){return U(b.a)},D=function(){return U(g.a)},P=function(){return U(I.a)},j={},U=function(e){(function(e){return j[e]||(j[e]=new A.Howl({src:[e,"data:audio/mp3;base64,".concat(e)],loop:!1,preload:!0})),j[e]})(e).play()},x=n(82),B=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a)))).onKeyPressed=function(e){if(x("enter")===e.keyCode&&(n.props.onEnter(n.state.name),L()),x("backspace")===e.keyCode&&n.state.name.length>0)return L(),n.setState(function(e){return{name:e.name.slice(0,-1)}});"esc"===x(e.keyCode)&&(L(),n.props.onEscapePress());var t=x(e.keyCode);return"space"===x(e.keyCode)&&(t=" "),/[ 0-9a-z]/.test(t)&&1===t.length?(L(),n.setState(function(e){return{name:(e.name+t.toUpperCase()).slice(0,20)}})):void 0},n.state={name:""},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("keydown",this.onKeyPressed)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyPressed)}},{key:"render",value:function(){var e=this;return l.a.createElement("span",{onKeyDown:function(t){return e.onKeyDown(t)}},this.state.name,l.a.createElement(O,null))}}]),t}(l.a.Component),W=n(104),K=n.n(W),q=n(105),G=n.n(q),H={},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return H[e]||(H[e]=new A.Howl({src:[e,"data:audio/mp3;base64,".concat(e)],loop:t,preload:!0})),H[e]};z(K.a),z(G.a,!1);var Y=function(e){r!==e&&(r&&z(r).stop(),z(e).play(),r=e)},F=function(e){r!==e&&(r&&z(r).stop(),z(e,!1).play(),r=e)},J={fontSize:"5rem"},Q={fontSize:"37px"},Z={color:"#ff2a2a",textShadow:"0rem 0.2rem 1rem #ff4a15",fontSize:"49px"},X=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){this.setState({errorDesc:""})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{style:J},"LOADING PROGRAM: PGG BOMB"),l.a.createElement("p",{style:Q},"Witaj podr\xf3\u017cniku. Zagrajmy w gr\u0119..."),l.a.createElement("div",{style:Q},"Podaj swoje imi\u0119: ",l.a.createElement(B,{onEnter:this.props.onNameEntered,onEscapePress:this.props.onEscapePress})),this.props.errorDesc.length>0&&l.a.createElement("div",{style:Z},this.props.errorDesc))}}]),t}(l.a.Component),V=n(127),$=n(30),ee=n(80),te=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a)))).onKeydown=function(e){return n.props.callback(e)},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("keydown",this.onKeydown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeydown)}},{key:"render",value:function(){return null}}]),t}(l.a.Component),ne=n(82),re=function(e){var t=e.callback;return l.a.createElement(te,{callback:function(e){var n=ne(e.keyCode);/[0-9a-z]/i.test(n)&&1===n.length&&t(n)}})},ie=n(106),ae=n.n(ie),se=n(107),oe=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).onLetter=function(e){(e=Object(se.remove)(e.toUpperCase()))===Object(se.remove)(n.props.expected.toUpperCase())?n.props.onCorrect(e):n.props.onIncorrect(e)},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:[ae.a.letter,this.props.incorrect&&ae.a.incorrect,!this.props.incorrect&&!this.props.visible&&ae.a.empty].join(" ")},this.props.incorrect||this.props.visible&&this.props.expected.toUpperCase()||".",this.props.hasFocus&&l.a.createElement(re,{callback:this.onLetter}))}}]),t}(l.a.Component);oe.defaultProps={visible:!1,incorrect:!1};var ce=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).renderLettersTiles=function(){var e=0,t=n.props.correctAnswer.split(" ").map(function(t,r){return l.a.createElement("div",{className:ae.a.word,key:"word_".concat(r)},t.split("").map(function(t){var r=e++;return l.a.createElement(oe,{key:"letter_".concat(r),expected:t,visible:!!n.state.visibleLetters[r],incorrect:r===n.state.incorrectLetterIndex&&n.state.incorrectLetter,hasFocus:!n.state.isCorrectAnswer&&n.state.canType&&n.state.focusedLetter===r,onCorrect:function(t){L(),n.setState(function(n){var i=Object(ee.a)(n.visibleLetters);return i[r]=t,{visibleLetters:i,focusedLetter:n.focusedLetter+1,isCorrectAnswer:n.focusedLetter===e-1}})},onIncorrect:function(e){k(),n.props.onWrongLetter(),n.setState({canType:!1,incorrectLetterIndex:r,incorrectLetter:e},function(){setTimeout(function(){n.setState({canType:!0,incorrectLetterIndex:null,incorrectLetter:""})},500)})}})}))});return l.a.createElement("div",{className:ae.a.wordWrapper},t)},n.state={canType:!0,focusedLetter:0,visibleLetters:[],incorrectLetterIndex:null,incorrectLetter:"",isCorrectAnswer:!1},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidUpdate",value:function(e,t,n){!1===t.isCorrectAnswer&&!0===this.state.isCorrectAnswer&&this.props.onCorrectAnswer()}},{key:"render",value:function(){return l.a.createElement("div",{className:[this.state.isCorrectAnswer&&ae.a.correctAnswer]},this.renderLettersTiles())}}]),t}(l.a.Component),ue=function(e){var t=e.callback,n=e.keyCode;return l.a.createElement(te,{callback:function(e){return e.keyCode===n&&t()}})},le=function(e){var t=e.callback;return l.a.createElement(ue,{callback:t,keyCode:13})},me=n(83),pe=n(108),de=n.n(pe),he=function(e,t){return String(Object(ee.a)(Array(t+1)).join("0")+e).slice(-t)},fe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){this.props.timeLeftMS,this.props.warningZone;var e=this.props.timeLeftMS/1e3/60,t=this.props.timeLeftMS/1e3%60,n=this.props.timeLeftMS%1e3;return l.a.createElement("div",{className:de.a.timer},he(0|e,2),":",he(0|t,2),":",he(n,3))}}]),t}(l.a.Component);fe.defaultProps={warningZone:1e4};var Ne=fe,Ee=n(109),Te=n.n(Ee),Se=0,Oe=1,Ae=2,ye=function(){function e(t){var n=t.time,r=t.tickMS,a=void 0===r?50:r,s=t.almostDoneMS,o=void 0===s?1e4:s,c=t.maxTimeLimit;Object(i.a)(this,e),this.time=n,this.tickMS=a,this.almostDoneMS=o,this.maxTimeLimit=c,console.log({time:n,tickMS:a,almostDoneMS:o}),this._createStopwatch(this.time,this.tickMS,this.almostDoneMS)}return Object(a.a)(e,[{key:"onTick",value:function(e){this._stopwatch.onTime(e)}},{key:"unbindTick",value:function(){this._stopwatch.removeAllListeners("time")}},{key:"onAlmostDone",value:function(e){this._stopwatch.onAlmostDone(e)}},{key:"onDone",value:function(e){this._stopwatch.onDone(e)}},{key:"start",value:function(){this._stopwatch.start()}},{key:"stop",value:function(){this._stopwatch.stop()}},{key:"isRunning",value:function(){return this._stopwatch.state===Oe}},{key:"isStopped",value:function(){return this._stopwatch.state===Se}},{key:"isDone",value:function(){return this._stopwatch.state===Ae}},{key:"_createStopwatch",value:function(e,t,n){this._stopwatch=new Te.a(e,{refreshRateMS:t,almostDoneMS:n})}},{key:"changeTime",value:function(e){if(!this.isDone()){this._stopwatch.ms+e>=this.maxTimeLimit&&this._stopwatch.reset(this.maxTimeLimit);var t=this.isRunning();this._stopwatch.ms+e<=0?(this.stop(),this._stopwatch.emit("done"),this._stopwatch.doneFired=!0):this._stopwatch.reset(this._stopwatch.ms+e),t&&this.start()}}},{key:"ms",get:function(){return this._stopwatch.ms}}]),e}();ye.EVENTS={TICK:"TICK",ALMOST_DONE:"ALMOST_DONE",DONE:"DONE"};var Re=ye,ve=n(114),be=n.n(ve),Ce=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).tick=function(){n.setState({timeLeft:n.timer.ms}),n.timer.ms>3e4?me.a.setNormal():n.timer.ms>1e4?me.a.setWarning():me.a.setDanger()},n.changeTimeLeft=function(e){n.indicateTimeDiff(e),n.setState(function(t){var n=t.timeLeft+e;return console.log(n),{timeLeft:n>0?n:0}}),n.timer.changeTime(1e3*e)},n.onWrongLetter=function(){Object($.a)(n);n.changeTimeLeft(n.state.wrongAnswerPenalty),n.props.onWrongAnswer(n.state.questionId)},n.indicateTimeDiff=function(e){var t=setTimeout(function(){n.removeTimeDiffNotification(t)},3e3);n.addTimeDiffNotification(t,e)},n.addTimeDiffNotification=function(e,t){n.setState(function(n){var r=Object(V.a)({},n.timeDiffs);return r[e]=t,{timeDiffs:r}})},n.removeTimeDiffNotification=function(e){n.setState(function(t){var n=Object(V.a)({},t.timeDiffs);return delete n[e],{timeDiffs:n}})},n.onCorrectAnswer=function(){D(),n.timer.stop(),n.setState({loading:!0,correctAnswerAnimation:!0},function(){n.props.onCorrectAnswer(n.state.questionId).then(function(e){var t=e.timeShift,r=e.totalScore;n.changeTimeLeft(t),setTimeout(function(){return n.loadQuestion(r)},1e3)})})},n.onNoMoreQuestions=function(){n.timer.stop(),n.setState({loading:!1,questionId:null,questionText:null,correctAnswer:null,wrongLettersGiven:0},function(){return n.props.onWin()})},n.skipQuestion=function(){n.timer.stop(),n.props.onSkipAnswer(n.state.questionId).then(function(e){var t=e.timeShift,r=e.totalScore;P(),n.changeTimeLeft(t),n.loadQuestion(r)})},n.renderTimeDiffNotifications=function(){return Object.keys(n.state.timeDiffs).map(function(e){var t=n.state.timeDiffs[e],r=t<0?be.a.red:be.a.blue,i=t<0?"":"+";return l.a.createElement("span",{className:[be.a.timeDiff,r].join(" "),key:"notification_".concat(e)},t," "+i)})},n.maxWrongLetters=3,n.state={loading:!1,correctAnswerAnimation:!1,questionId:null,questionText:null,correctAnswer:null,wrongLettersGiven:0,timeLeft:n.props.time,correctAnswerReward:n.props.correctAnswerReward,wrongAnswerPenalty:-n.props.wrongAnswerPenalty,skipQuestionPenalty:-n.props.skipQuestionPenalty,timeDiffs:{},maxTimeLimit:n.props.maxTimeLimit,score:0},n.timer=new Re({time:n.props.time,maxTimeLimit:n.props.maxTimeLimit}),n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){var e=this;Y(K.a),this.tickingSound=setInterval(function(){e.timer.isRunning()&&U(w.a)},1e3)}},{key:"componentWillUnmount",value:function(){this.timer.unbindTick(),clearInterval(this.tickingSound),me.a.setNormal()}},{key:"componentDidMount",value:function(){this.loadQuestion(),this.timer.onTick(this.tick),this.timer.onDone(this.props.onLose)}},{key:"loadQuestion",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.setState({loading:!0,correctAnswerAnimation:!1},function(){e.timer.stop(),e.props.questionGetter().then(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.id,i=n.question,a=n.answer,s=n.category;return e.timer.start(),e.setState({questionId:r,questionText:i,categoryName:s,correctAnswer:a,wrongLettersGiven:0,loading:!1,score:t})}).catch(function(t){if(400===t.response.status&&3===t.response.data.errorCode)return e.onNoMoreQuestions()})})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.questionId&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:be.a.clockWrapper},l.a.createElement(Ne,{timeLeftMS:this.state.timeLeft}),this.renderTimeDiffNotifications()),l.a.createElement("div",{className:be.a.points+" regular-text"},"Punkty: ",this.state.score),l.a.createElement("p",{className:be.a.categoryName},"KATEGORIA: ",this.state.categoryName),l.a.createElement("div",{className:be.a.questionContent}," ",this.state.questionText," "),l.a.createElement(ce,{key:"answer_".concat(this.state.questionId),correctAnswer:this.state.correctAnswer,onWrongLetter:this.onWrongLetter,onCorrectAnswer:this.onCorrectAnswer}),!this.state.loading&&!this.state.correctAnswerAnimation&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:be.a.description}," Naci\u015bnij ENTER aby pomin\u0105\u0107 pytanie (Tracisz od razu 5 sekund) "),l.a.createElement(le,{callback:this.skipQuestion}))),this.state.loading&&l.a.createElement(E,null))}}]),t}(l.a.Component),we=n(115),_e={fontSize:"5rem",marginBotton:"1rem",marginTop:"-1rem"},ge={height:"33rem",marginTop:"2rem"},Me=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a)))).skipSceneDisabled=!0,n.onAnyKeyPressed=null,n.callback=function(e){n.skipSceneDisabled||n.props.onAnyKeyPressed()},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){var e=this;setTimeout(function(){e.skipSceneDisabled=!1},5e3)}},{key:"getPlayerId",value:function(){return/(?!.*\/)(.*)$/.exec(this.props.playerId)[0]}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"regular-text"},l.a.createElement("div",{style:_e},"GRATULACJE"),l.a.createElement("div",null,"UDA\u0141O CI SI\u0118 DOTRWA\u0106 DO KO\u0143CA I WYCZERPA\u0106 ZESTAW PYTA\u0143"),l.a.createElement("div",null,"NIE WIELU GRACZY ZOBACZY TEN EKRAN"),l.a.createElement("div",null,"Tw\xf3j wynik: ",this.props.points),l.a.createElement("div",null,l.a.createElement("span",null,"Gracz: ",this.props.playerName),l.a.createElement("span",null," ID: ",this.getPlayerId())),l.a.createElement("div",null,"Odbierz wydruk z wynikiem"),l.a.createElement("img",{style:ge,src:we,alt:"happyface"}),l.a.createElement(te,{callback:this.callback})))}}]),t}(l.a.Component),Ie=n(116),Le={fontSize:"5rem",marginBotton:"1rem",marginTop:"-1rem"},ke={height:"35rem",marginTop:"2rem"},De=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a)))).skipSceneDisabled=!0,n.onAnyKeyPressed=null,n.callback=function(e){n.skipSceneDisabled||n.props.onAnyKeyPressed()},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){var e=this;F(G.a),setTimeout(function(){e.skipSceneDisabled=!1},5e3)}},{key:"getPlayerId",value:function(){return/(?!.*\/)(.*)$/.exec(this.props.playerId)[0]}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"regular-text"},l.a.createElement("div",{style:Le},"KONIEC CZASU"),l.a.createElement("div",null,"Tw\xf3j wynik: ",this.props.points),l.a.createElement("div",null,l.a.createElement("span",null,"Gracz: ",this.props.playerName),l.a.createElement("span",null," ID: ",this.getPlayerId())),l.a.createElement("div",null,"Odbierz wydruk z wynikiem"),l.a.createElement("img",{style:ke,src:Ie,alt:"Explosion"}),l.a.createElement(te,{callback:this.callback})))}}]),t}(l.a.Component),Pe=n(82),je=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a)))).onKeyPressed=function(e){L(),n.props.requiredKeyCodes.map(function(t){t===Pe(e.keyCode)&&n.props.onRequiredKeyPress(Pe(e.keyCode))})},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("keydown",this.onKeyPressed)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyPressed)}},{key:"render",value:function(){var e=this;return l.a.createElement("span",{onKeyDown:function(t){return e.onKeyDown(t)}},l.a.createElement(O,null))}}]),t}(l.a.Component),Ue=n(117),xe={fontSize:"3rem",marginTop:"1rem"},Be=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=this.props.onEnterOrSpacePress;return l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:Ue,alt:"Logo"}),l.a.createElement("div",{style:xe},"NACI\u015aNIJ ENTER ABY ROZPOCZ\u0104\u0106",l.a.createElement(je,{requiredKeyCodes:["enter","space"],onRequiredKeyPress:e})))}}]),t}(l.a.Component),We=n(118),Ke=n.n(We),qe=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a)))).skipSceneDisabled=!0,n.callback=function(e){n.skipSceneDisabled||n.props.onAnyKeyPressed()},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillMount",value:function(){var e=this;setTimeout(function(){e.skipSceneDisabled=!1},5e3)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:Ke.a.scoreTitle},"TABLICA WYNIK\xd3W"),l.a.createElement("div",{className:"regular-text"},l.a.createElement("ol",{className:Ke.a.wrapper},this.props.leaderBoard.map(function(e,t){return l.a.createElement("li",{key:t,className:Ke.a.clear},l.a.createElement("span",{className:Ke.a.playerName},e.playerName+" (ID:"+e.playerId+")")," ",l.a.createElement("span",{className:Ke.a.playerScore}," ","LICZBA PUNKT\xd3W: "+e.result))})),l.a.createElement(te,{callback:this.callback})))}}]),t}(l.a.Component),Ge=3e4,He=3e4,ze=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a)))).reset=function(){n.setState({scene:m.IDLE,playerName:"",sessionId:null,loading:!1}),n.idleTimer.reset()},n.leaderBoard=function(){n.setState({loading:!0},function(){n.props.api.getLeaderboard().then(function(e){var t=e.leaderBoard;n.setState({leaderBoard:t,scene:m.LEADERBOARD,playerName:"",sessionId:null,loading:!1})})}),n.idleTimer.reset()},n.onNameEntered=function(e){n.setState({loading:!0,errorMessage:""},function(){n.props.api.createSession(e).then(function(t){var r=t.sessionId,i=t.timeLimit,a=t.maxTimeLimit,s=t.correctAnswerTimeReward,o=t.wrongAnswerTimePenalty,c=t.skipAnswerTimePenalty;n.setState({playerName:e,scene:m.MAIN,sessionId:r,loading:!1,sessionTime:1e3*i,correctAnswerReward:s,wrongAnswerPenalty:o,skipAnswerPenalty:c,maxTimeLimit:1e3*a})}).catch(function(e){if(400===e.response.status){var t=e.response.data;n.setState({loading:!1,errorMessage:t.errorDesc})}throw e})})},n.onWin=function(e){n.setState({loading:!0},function(){n.props.api.saveWinGame({sessionId:n.state.sessionId,score:e}).then(function(e){var t=e.totalScore;n.setState({scene:m.WIN,loading:!1,score:t})})})},n.onLose=function(e){n.setState({loading:!0},function(){n.props.api.saveLoseGame({sessionId:n.state.sessionId,score:e}).then(function(e){var t=e.totalScore;n.setState({scene:m.LOSE,loading:!1,score:t})})})},n.onIdleEnterOrSpacePress=function(e){"space"===e&&n.leaderBoard(),"enter"===e&&n.onEnterPress()},n.onEnterPress=function(){n.setState({loading:!0},function(){new Promise(function(e){setTimeout(function(){n.setState({scene:m.MENU,loading:!1})},500)})})},n.onEscapePress=function(){n.setState({loading:!0},function(){new Promise(function(e){setTimeout(function(){n.setState({scene:m.IDLE,loading:!1})},500)})})},n.onSpacePress=function(){n.setState({loading:!0},function(){new Promise(function(e){setTimeout(function(){n.setState({scene:m.LEADERBOARD,loading:!1})},500)})})},n.onLoseSceneAnyKeyPress=function(){n.leaderBoard()},n.onWinSceneAnyKeyPress=function(){n.leaderBoard()},n.onLeaderboardSceneAnyKeyPress=function(){n.reset()},n.state={scene:m.MENU,playerName:"",sessionId:null,loading:!1,leaderBoard:[],errorMessage:"",score:0,sessionTime:Ge,idleMaxTime:He},n.idleTimer=null,n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){if(e.idleTimer){var t=e.state.scene,n=e.idleTimer.getElapsedTime();t==m.MENU||t==m.LEADERBOARD?n>e.state.idleMaxTime&&e.reset():t==m.LOSE||t==m.WIN?n>e.state.idleMaxTime&&e.leaderBoard():e.idleTimer.reset()}},1e3)}},{key:"componentDidUpdate",value:function(e){this.props.scene!==e.scene&&(this.idleTimer.reset(),me.a.setNormal())}},{key:"render",value:function(){var e=this;return l.a.createElement(h.a,{ref:function(t){e.idleTimer=t},onActive:this.onActive,onIdle:this.onIdle,timeout:this.state.timeout,startOnLoad:!0},l.a.createElement(l.a.Fragment,null,this.state.scene===m.WIN&&l.a.createElement(Me,{playerId:this.state.sessionId,playerName:this.state.playerName,points:this.state.score,onAnyKeyPressed:this.onWinSceneAnyKeyPress}),this.state.scene===m.LOSE&&l.a.createElement(De,{playerId:this.state.sessionId,playerName:this.state.playerName,points:this.state.score,onAnyKeyPressed:this.onLoseSceneAnyKeyPress}),this.state.scene===m.MENU&&l.a.createElement(X,{onNameEntered:this.onNameEntered,onEscapePress:this.onEscapePress,errorDesc:this.state.errorMessage}),this.state.scene===m.MAIN&&l.a.createElement(Ce,{playerName:this.state.playerName,sessionId:this.state.sessionId,onWin:this.onWin,onLose:this.onLose,questionGetter:function(){return e.props.api.getNextQuestion({sessionId:e.state.sessionId})},onCorrectAnswer:function(t){return e.props.api.saveGoodAnswer({sessionId:e.state.sessionId,questionId:t})},onWrongAnswer:function(t){return e.props.api.saveBadAnswer({sessionId:e.state.sessionId,questionId:t})},onSkipAnswer:function(t){return e.props.api.skipQuestion({sessionId:e.state.sessionId,questionId:t})},correctAnswerReward:this.state.correctAnswerReward,wrongAnswerPenalty:this.state.wrongAnswerPenalty,skipQuestionPenalty:this.state.skipAnswerPenalty,time:this.state.sessionTime,maxTimeLimit:this.state.maxTimeLimit}),this.state.scene===m.IDLE&&l.a.createElement(Be,{onEnterOrSpacePress:this.onIdleEnterOrSpacePress}),this.state.scene===m.LEADERBOARD&&l.a.createElement(qe,{leaderBoard:this.state.leaderBoard,onAnyKeyPressed:this.onLeaderboardSceneAnyKeyPress}),this.state.loading&&l.a.createElement(E,null)))}}]),t}(l.a.Component);t.a=ze},40:function(e,t,n){"use strict";n.r(t);var r=n(5),i=n(0),a=n.n(i),s=n(80),o=n(17),c={CONSTANTS:{PROMPT:"> ",RULE_COMMAND:"{Command}",RULE_ELEMENT:"{Element}",ITEM_REGISTER:"{Register}",ITEM_SYSTEM:"{System}",ITEM_TRACE:"{Trace}",ITEM_MIPS:"{Mips}",ITEM_SWITCH:"{switch}",NUMBER_BINARY:"{binary}",NUMBER_HEX:"{hex}",NUMBER_INT:"{integer}",NUMBER_ALPHA:"{alpha}",NUMBER_PER:"{percent}",JOINER:"{Join}",OPENER:"{Open}",TERMINATOR:"{Terminate}",PLACEHOLDERS:[]},JARGON:{OPENER:["FORCE","HOLD","STATUS","FLUSH","RECALL","SPLIT","RELEASE","LOAD","CONFIG","RECYCLE","DUMP","INVERT","RELAY","ROUTE","LINK","TRACK","REQUEST"],JOINER:["SHIFT","REDIRECT","SUB","FLUSH","SPLIT",">",">>","&","|","::","->","<-","SWAP","IN","CONNECT","JOIN","AS","TO","PUSH","PULL","TRY","MERGE","TRACK","SWAP"],TERMINATOR:["OK","ACK","SYN","ACCEPT","REJECT","MONITOR","PASS","FAIL","WARN","OUT","RETRY","RESET","SCATTER","CONTINUE","WAIT","DOWN","RELAY","PEND","INIT","PRIME"]},Init:function(){this.CONSTANTS.PLACEHOLDERS=[this.CONSTANTS.ITEM_REGISTER,this.CONSTANTS.ITEM_SYSTEM,this.CONSTANTS.ITEM_TRACE,this.CONSTANTS.ITEM_MIPS,this.CONSTANTS.JOINER,this.CONSTANTS.OPENER,this.CONSTANTS.TERMINATOR,this.CONSTANTS.NUMBER_BINARY,this.CONSTANTS.NUMBER_HEX,this.CONSTANTS.NUMBER_INT,this.CONSTANTS.NUMBER_ALPHA,this.CONSTANTS.NUMBER_PER,this.CONSTANTS.ITEM_SWITCH],this.JARGON.TERMINATOR.push("FRAGMENT/"+this.CONSTANTS.NUMBER_HEX),this.JARGON.TERMINATOR.push("DELAY "+this.CONSTANTS.NUMBER_INT+"000"),this.JARGON.TERMINATOR.push("DUMP ["+this.CONSTANTS.NUMBER_HEX+", "+this.CONSTANTS.NUMBER_HEX+"]"),this.JARGON.TERMINATOR.push(this.CONSTANTS.NUMBER_PER+"%"),this.initRuleset()},Cmd:function(){var e=this.commandTemplate();return this.CONSTANTS.PLACEHOLDERS.forEach(function(t,n){e=this.replaceBy(t,e)}.bind(this)),e},ruleset:[],initRuleset:function(){this.ruleset=[[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_SYSTEM],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_REGISTER],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_TRACE],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.ITEM_MIPS],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.ITEM_SWITCH],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.RULE_ELEMENT],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.RULE_ELEMENT],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_COMMAND,this.CONSTANTS.OPENER+" "+this.CONSTANTS.TERMINATOR],[this.CONSTANTS.RULE_ELEMENT,this.CONSTANTS.RULE_ELEMENT+" "+this.CONSTANTS.JOINER+" "+this.CONSTANTS.RULE_ELEMENT]]},commandTemplate:function(){var e=this,t=this.CONSTANTS.RULE_COMMAND,n=this.ruleset.filter(function(t){return t[0].indexOf(e.CONSTANTS.RULE_COMMAND)>-1});t=this.RND.rarr(n)[1];for(var r=this.ruleset.filter(function(t){return t[0].indexOf(e.CONSTANTS.RULE_ELEMENT)>-1});t.indexOf(this.CONSTANTS.RULE_ELEMENT)>-1;){var i="(?:.*?"+this.CONSTANTS.RULE_ELEMENT+")";t=t.replace(RegExp(i),function(e){var t=this.RND.rarr(r)[1];return e.replace(RegExp(this.CONSTANTS.RULE_ELEMENT),t)}.bind(this))}return t},replaceBy:function(e,t){if(-1===t.indexOf(e))return t;for(;t.indexOf(e)>-1;){var n="(?:.*?"+e+")";t=t.replace(RegExp(n),function(t){var n="!!";switch(e){case this.CONSTANTS.ITEM_REGISTER:n=this.register();break;case this.CONSTANTS.ITEM_SYSTEM:n=this.system();break;case this.CONSTANTS.ITEM_TRACE:n=this.trace();break;case this.CONSTANTS.ITEM_MIPS:n=this.mip();break;case this.CONSTANTS.JOINER:n=this.RND.rarr(this.JARGON.JOINER);break;case this.CONSTANTS.OPENER:n=this.RND.rarr(this.JARGON.OPENER);break;case this.CONSTANTS.TERMINATOR:n=this.RND.rarr(this.JARGON.TERMINATOR);break;case this.CONSTANTS.NUMBER_BINARY:n=this.RND.rbin();break;case this.CONSTANTS.NUMBER_HEX:n=this.RND.rhex();break;case this.CONSTANTS.NUMBER_INT:n=this.RND.r2n();break;case this.CONSTANTS.NUMBER_ALPHA:n=this.RND.ralpha();break;case this.CONSTANTS.NUMBER_PER:n=this.RND.rper(1);break;case this.CONSTANTS.ITEM_SWITCH:n=this.RND.rbool(this.switch())}return t.replace(RegExp(e),n)}.bind(this))}return t},trace:function(){return this.RND.rarr(["back","reverse-","!",""])+"trace-{opt}".replace("{opt}",this.RND.rarr(["on","off","pause","resume","cancel","log","commit","reject","bypass","maint"]))},register:function(){return this.RND.rbool("de","")+"reg["+this.CONSTANTS.NUMBER_HEX+"]"},system:function(){var e=["system","core","accelerator","back-scatter","receiver","rtr."+this.CONSTANTS.NUMBER_INT,"nucl-"+this.CONSTANTS.NUMBER_ALPHA+"."+this.CONSTANTS.NUMBER_ALPHA,"rad"+this.CONSTANTS.NUMBER_INT+"."+this.CONSTANTS.NUMBER_ALPHA,"pack","bat:"+this.CONSTANTS.NUMBER_HEX,"stabilizer","sector","cycle","OS"+this.CONSTANTS.NUMBER_HEX,"plot","gateway","interface","adapt"],t=this.RND.rarr(e);if(this.RND.rbool()&&(t="{prefix}"+t),this.RND.rbool()){var n=this.CONSTANTS.NUMBER_INT,r=this.CONSTANTS.NUMBER_INT+this.CONSTANTS.NUMBER_ALPHA,i=this.CONSTANTS.NUMBER_INT+"-"+this.CONSTANTS.NUMBER_INT;t+=" "+this.RND.rarg(n,r,i)}this.RND.rbool()&&(t+=" ({status})");var a=this.RND.rarg("sub","super-","backup-","aux-","remote-"),s=this.RND.rarg("ONLINE","OFFLINE","UNK");return t.replace("{prefix}",a).replace("{status}",s)},mip:function(){var e=["MiPS",this.CONSTANTS.NUMBER_ALPHA+"-MEM","CeLL"];return this.RND.rarr(e)+" ("+this.CONSTANTS.NUMBER_BINARY+")"},switch:function(){var e="";do{e+=" /"+this.RND.r36(this.RND.rarg(1,1,1,1,1,2,2,3)).toLowerCase()}while(this.RND.rbool());return e.trimStart()},RND:{nlogn:function(e){return e*Math.log(e)},rint:function(e,t){return 1===arguments.length&&(t=0),Math.min(e,t)+Math.floor(Math.random()*Math.abs(e-t))},rnd:function(e,t){return this.rint.apply(null,arguments)},rdec:function(e,t){return arguments.length<2&&(t=0),arguments.length<1&&(e=1),Math.min(e,t)+Math.random()*Math.abs(e-t)},rper:function(e){return 0==arguments.length&&(e=1),(100*Math.random()).toFixed(e)},rbool:function(e,t){return arguments.length>0?(void 0===t&&(t=""),this.rbool()?e:t):0===this.rint(0,2)},rarr:function(e){return e[this.rint(0,e.length)]},rarg:function(){return void 0===arguments||0===arguments.length?null:arguments[this.rint(arguments.length)]},rbin:function(e,t){arguments.length<2&&(t=8),arguments.length<1&&(e=Math.pow(2,t));var n=this.rint(0,e);return this.toBinary(n,t)},r2n:function(e){return 0===arguments.length&&(e=8),Math.pow(2,this.rnd(0,e)).toString()},rhex:function(e,t){arguments.length<2&&(t=2),arguments.length<1&&(e=256);var n=this.rint(0,e);return this.toHex(n,t)},ralpha:function(e){e||(e=1);for(var t="",n=0;n<e;n++)t+=String.fromCharCode("A".charCodeAt(0)+this.rnd(0,26));return t},r36:function(e){e||(e=1);for(var t="",n=0;n<e;n++){var r=this.rint(36);t+=r<26?String.fromCharCode("A".charCodeAt(0)+r):r-26}return t},rnorm:function(e,t){for(var n=0,r=0;r<15;r++)n+=this.rdec(-1,1);n/=15;var i=0,a=1;return arguments.length>0&&(i=e),arguments.length>1&&(a=t),n*a+i},toBinary:function(e,t){return t||(t=0),e.toString(2).padStart(t,0)},toHex:function(e,t){return t||(t=4),"0x"+e.toString(16).padStart(t,0)}}},u=n(81),l=n.n(u),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.children,n=e.onTypingDone,r=void 0===n?function(){}:n;return a.a.createElement(l.a,{avgTypingDelay:5,cursor:{show:!1},onTypingDone:r},t)},p=function(e){var t=e.maxLines,n=void 0===t?30:t,r=Object(i.useRef)(),u=Object(i.useState)([]),l=Object(o.a)(u,2),p=l[0],d=l[1],h=Object(i.useState)(!1),f=Object(o.a)(h,2),N=f[0],E=f[1];return Object(i.useEffect)(function(){r.current&&r.current.destroy();return r.current=function(e){var t,n,r,i,a=e.onCommand,s=void 0===a?function(){}:a,o=e.speed,u=void 0===o?1:o;c.Init();var l=!1,m=!1,p=function e(){i=Date.now();var n=c.Cmd();s(c.CONSTANTS.PROMPT+n),r=1/(0!==u?u:1e-8)*c.RND.rnd(2,Math.max(2.5,c.RND.nlogn(n.length)))*7.5,t=setTimeout(e,r)};return{start:function(){l=!0,p()},destroy:function(){return clearTimeout(t)},pause:function(){l&&(m=!0,clearTimeout(t),n=i+r-Date.now())},resume:function(){m&&(m=!1,t=setTimeout(p,n))}}}({onCommand:function(e){d(function(t){return[].concat(Object(s.a)(t),[e]).slice(-n)}),E(!0)},speed:1.2}),r.current.start(),function(){return r.current.destroy()}},[n]),Object(i.useEffect)(function(){r.current&&(N?r.current.pause():r.current.resume())},[N]),a.a.createElement("div",null,p.map(function(e){return a.a.createElement("div",{key:"command-".concat(e)},a.a.createElement(m,{onTypingDone:function(){return E(!1)}},e))}))},d=n(10),h=n(26),f=n(27);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,n=e.history,i=Object(r.a)(e,["title","history"]);return a.a.createElement(f.b,{onKeyEvent:function(){return n.push("/")}},a.a.createElement(d.Background,null),a.a.createElement(d.default,null,a.a.createElement(h.a,null,"Screen ",t," is not ready"),a.a.createElement(h.b,null,"Press [ESC] to return"),a.a.createElement("pre",null,JSON.stringify(i,null,2)),a.a.createElement("div",{style:{position:"relative",left:"20px",opacity:.5}},a.a.createElement(p,{maxLines:10})," ")))}},49:function(e,t,n){"use strict";n.r(t);var r=n(17),i=n(0),a=n.n(i),s=n(10),o=n(26),c=n(87),u=n.n(c),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.seconds,n=void 0===t?3:t,s=e.onFinished,c=void 0===s?function(){}:s,l=Object(i.useRef)(),m=Object(i.useState)(n),p=Object(r.a)(m,2),d=p[0],h=p[1],f=Object(i.useState)(!1),N=Object(r.a)(f,2),E=N[0],T=N[1],S=Object(i.useCallback)(function(){h(function(e){return e-1})},[]);return Object(i.useEffect)(function(){d<0&&T(!0)},[c,d]),Object(i.useEffect)(function(){E&&(c(),clearInterval(l.current))},[E,c]),Object(i.useEffect)(function(){return l.current=setInterval(S,1e3),function(){return clearInterval(l.current)}},[S]),a.a.createElement("div",{className:u.a.countdown},a.a.createElement(o.b,{style:{animationIterationCount:n+1},className:u.a.number},E?null:d>=0?d:null))},m=(n(40),n(88));t.default=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],u=n[1];return c?a.a.createElement(a.a.Fragment,null,a.a.createElement(s.Background,null),a.a.createElement(s.default,null,a.a.createElement(l,{onFinished:function(){return u(!1)}}))):a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,"[To jest stara wersja Gry. Nied\u0142ugo zostanie od\u015bwie\u017cona. :-) ] "),a.a.createElement(m.a,null))}},83:function(e,t,n){"use strict";var r=[],i="",a="warning",s="danger",o=function(e){return r.forEach(function(t){return t(e)})};t.a={onChanged:function(e){return r.push(e)},setNormal:function(){return o(i)},setWarning:function(){return o(a)},setDanger:function(){return o(s)}}},87:function(e,t,n){e.exports={countdown:"Countdown_countdown__724C8",number:"Countdown_number__1xJDd",zoomin:"Countdown_zoomin__3XDkm"}},88:function(e,t,n){"use strict";(function(e){var r=n(0),i=n.n(r),a=n(126),s=(n(119),n(121)),o=n(122);t.a=Object(o.hot)(e)(function(){return i.a.createElement(a.a,{api:s})})}).call(this,n(89)(e))},91:function(e,t,n){},98:function(e,t,n){e.exports={blinker:"styles_blinker__1UIID"}},99:function(e,t,n){e.exports=n.p+"static/media/TYPE.eaabe2f1.mp3"}}]);
//# sourceMappingURL=screen-6--Gameplay-Gameplay.223599c6.chunk.js.map