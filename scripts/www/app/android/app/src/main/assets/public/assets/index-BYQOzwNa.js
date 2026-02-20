function Ng(c,r){for(var s=0;s<r.length;s++){const i=r[s];if(typeof i!="string"&&!Array.isArray(i)){for(const d in i)if(d!=="default"&&!(d in c)){const m=Object.getOwnPropertyDescriptor(i,d);m&&Object.defineProperty(c,d,m.get?m:{enumerable:!0,get:()=>i[d]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))i(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const S of m.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&i(S)}).observe(document,{childList:!0,subtree:!0});function s(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function i(d){if(d.ep)return;d.ep=!0;const m=s(d);fetch(d.href,m)}})();function oh(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Po={exports:{}},$a={};var Om;function Mg(){if(Om)return $a;Om=1;var c=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(i,d,m){var S=null;if(m!==void 0&&(S=""+m),d.key!==void 0&&(S=""+d.key),"key"in d){m={};for(var y in d)y!=="key"&&(m[y]=d[y])}else m=d;return d=m.ref,{$$typeof:c,type:i,key:S,ref:d!==void 0?d:null,props:m}}return $a.Fragment=r,$a.jsx=s,$a.jsxs=s,$a}var Dm;function Rg(){return Dm||(Dm=1,Po.exports=Mg()),Po.exports}var C=Rg(),tr={exports:{}},ct={};var _m;function jg(){if(_m)return ct;_m=1;var c=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),S=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),B=Symbol.iterator;function Z(b){return b===null||typeof b!="object"?null:(b=B&&b[B]||b["@@iterator"],typeof b=="function"?b:null)}var tt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,Q={};function I(b,j,Y){this.props=b,this.context=j,this.refs=Q,this.updater=Y||tt}I.prototype.isReactComponent={},I.prototype.setState=function(b,j){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,j,"setState")},I.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function W(){}W.prototype=I.prototype;function F(b,j,Y){this.props=b,this.context=j,this.refs=Q,this.updater=Y||tt}var et=F.prototype=new W;et.constructor=F,w(et,I.prototype),et.isPureReactComponent=!0;var nt=Array.isArray;function V(){}var q={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function yt(b,j,Y){var X=Y.ref;return{$$typeof:c,type:b,key:j,ref:X!==void 0?X:null,props:Y}}function Dt(b,j){return yt(b.type,j,b.props)}function gt(b){return typeof b=="object"&&b!==null&&b.$$typeof===c}function Ut(b){var j={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(Y){return j[Y]})}var Se=/\/+/g;function ee(b,j){return typeof b=="object"&&b!==null&&b.key!=null?Ut(""+b.key):j.toString(36)}function qt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(V,V):(b.status="pending",b.then(function(j){b.status==="pending"&&(b.status="fulfilled",b.value=j)},function(j){b.status==="pending"&&(b.status="rejected",b.reason=j)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function _(b,j,Y,X,ut){var rt=typeof b;(rt==="undefined"||rt==="boolean")&&(b=null);var at=!1;if(b===null)at=!0;else switch(rt){case"bigint":case"string":case"number":at=!0;break;case"object":switch(b.$$typeof){case c:case r:at=!0;break;case M:return at=b._init,_(at(b._payload),j,Y,X,ut)}}if(at)return ut=ut(b),at=X===""?"."+ee(b,0):X,nt(ut)?(Y="",at!=null&&(Y=at.replace(Se,"$&/")+"/"),_(ut,j,Y,"",function(we){return we})):ut!=null&&(gt(ut)&&(ut=Dt(ut,Y+(ut.key==null||b&&b.key===ut.key?"":(""+ut.key).replace(Se,"$&/")+"/")+at)),j.push(ut)),1;at=0;var Kt=X===""?".":X+":";if(nt(b))for(var Nt=0;Nt<b.length;Nt++)X=b[Nt],rt=Kt+ee(X,Nt),at+=_(X,j,Y,rt,ut);else if(Nt=Z(b),typeof Nt=="function")for(b=Nt.call(b),Nt=0;!(X=b.next()).done;)X=X.value,rt=Kt+ee(X,Nt++),at+=_(X,j,Y,rt,ut);else if(rt==="object"){if(typeof b.then=="function")return _(qt(b),j,Y,X,ut);throw j=String(b),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return at}function G(b,j,Y){if(b==null)return b;var X=[],ut=0;return _(b,X,"","",function(rt){return j.call(Y,rt,ut++)}),X}function H(b){if(b._status===-1){var j=b._result;j=j(),j.then(function(Y){(b._status===0||b._status===-1)&&(b._status=1,b._result=Y)},function(Y){(b._status===0||b._status===-1)&&(b._status=2,b._result=Y)}),b._status===-1&&(b._status=0,b._result=j)}if(b._status===1)return b._result.default;throw b._result}var St=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},Et={map:G,forEach:function(b,j,Y){G(b,function(){j.apply(this,arguments)},Y)},count:function(b){var j=0;return G(b,function(){j++}),j},toArray:function(b){return G(b,function(j){return j})||[]},only:function(b){if(!gt(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return ct.Activity=D,ct.Children=Et,ct.Component=I,ct.Fragment=s,ct.Profiler=d,ct.PureComponent=F,ct.StrictMode=i,ct.Suspense=g,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,ct.__COMPILER_RUNTIME={__proto__:null,c:function(b){return q.H.useMemoCache(b)}},ct.cache=function(b){return function(){return b.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(b,j,Y){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var X=w({},b.props),ut=b.key;if(j!=null)for(rt in j.key!==void 0&&(ut=""+j.key),j)!L.call(j,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&j.ref===void 0||(X[rt]=j[rt]);var rt=arguments.length-2;if(rt===1)X.children=Y;else if(1<rt){for(var at=Array(rt),Kt=0;Kt<rt;Kt++)at[Kt]=arguments[Kt+2];X.children=at}return yt(b.type,ut,X)},ct.createContext=function(b){return b={$$typeof:S,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:m,_context:b},b},ct.createElement=function(b,j,Y){var X,ut={},rt=null;if(j!=null)for(X in j.key!==void 0&&(rt=""+j.key),j)L.call(j,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ut[X]=j[X]);var at=arguments.length-2;if(at===1)ut.children=Y;else if(1<at){for(var Kt=Array(at),Nt=0;Nt<at;Nt++)Kt[Nt]=arguments[Nt+2];ut.children=Kt}if(b&&b.defaultProps)for(X in at=b.defaultProps,at)ut[X]===void 0&&(ut[X]=at[X]);return yt(b,rt,ut)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(b){return{$$typeof:y,render:b}},ct.isValidElement=gt,ct.lazy=function(b){return{$$typeof:M,_payload:{_status:-1,_result:b},_init:H}},ct.memo=function(b,j){return{$$typeof:h,type:b,compare:j===void 0?null:j}},ct.startTransition=function(b){var j=q.T,Y={};q.T=Y;try{var X=b(),ut=q.S;ut!==null&&ut(Y,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(V,St)}catch(rt){St(rt)}finally{j!==null&&Y.types!==null&&(j.types=Y.types),q.T=j}},ct.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},ct.use=function(b){return q.H.use(b)},ct.useActionState=function(b,j,Y){return q.H.useActionState(b,j,Y)},ct.useCallback=function(b,j){return q.H.useCallback(b,j)},ct.useContext=function(b){return q.H.useContext(b)},ct.useDebugValue=function(){},ct.useDeferredValue=function(b,j){return q.H.useDeferredValue(b,j)},ct.useEffect=function(b,j){return q.H.useEffect(b,j)},ct.useEffectEvent=function(b){return q.H.useEffectEvent(b)},ct.useId=function(){return q.H.useId()},ct.useImperativeHandle=function(b,j,Y){return q.H.useImperativeHandle(b,j,Y)},ct.useInsertionEffect=function(b,j){return q.H.useInsertionEffect(b,j)},ct.useLayoutEffect=function(b,j){return q.H.useLayoutEffect(b,j)},ct.useMemo=function(b,j){return q.H.useMemo(b,j)},ct.useOptimistic=function(b,j){return q.H.useOptimistic(b,j)},ct.useReducer=function(b,j,Y){return q.H.useReducer(b,j,Y)},ct.useRef=function(b){return q.H.useRef(b)},ct.useState=function(b){return q.H.useState(b)},ct.useSyncExternalStore=function(b,j,Y){return q.H.useSyncExternalStore(b,j,Y)},ct.useTransition=function(){return q.H.useTransition()},ct.version="19.2.3",ct}var Nm;function br(){return Nm||(Nm=1,tr.exports=jg()),tr.exports}var x=br();const Ug=oh(x),Sr=Ng({__proto__:null,default:Ug},[x]);var er={exports:{}},Fa={},nr={exports:{}},lr={};var Mm;function wg(){return Mm||(Mm=1,(function(c){function r(_,G){var H=_.length;_.push(G);t:for(;0<H;){var St=H-1>>>1,Et=_[St];if(0<d(Et,G))_[St]=G,_[H]=Et,H=St;else break t}}function s(_){return _.length===0?null:_[0]}function i(_){if(_.length===0)return null;var G=_[0],H=_.pop();if(H!==G){_[0]=H;t:for(var St=0,Et=_.length,b=Et>>>1;St<b;){var j=2*(St+1)-1,Y=_[j],X=j+1,ut=_[X];if(0>d(Y,H))X<Et&&0>d(ut,Y)?(_[St]=ut,_[X]=H,St=X):(_[St]=Y,_[j]=H,St=j);else if(X<Et&&0>d(ut,H))_[St]=ut,_[X]=H,St=X;else break t}}return G}function d(_,G){var H=_.sortIndex-G.sortIndex;return H!==0?H:_.id-G.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;c.unstable_now=function(){return m.now()}}else{var S=Date,y=S.now();c.unstable_now=function(){return S.now()-y}}var g=[],h=[],M=1,D=null,B=3,Z=!1,tt=!1,w=!1,Q=!1,I=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function et(_){for(var G=s(h);G!==null;){if(G.callback===null)i(h);else if(G.startTime<=_)i(h),G.sortIndex=G.expirationTime,r(g,G);else break;G=s(h)}}function nt(_){if(w=!1,et(_),!tt)if(s(g)!==null)tt=!0,V||(V=!0,Ut());else{var G=s(h);G!==null&&qt(nt,G.startTime-_)}}var V=!1,q=-1,L=5,yt=-1;function Dt(){return Q?!0:!(c.unstable_now()-yt<L)}function gt(){if(Q=!1,V){var _=c.unstable_now();yt=_;var G=!0;try{t:{tt=!1,w&&(w=!1,W(q),q=-1),Z=!0;var H=B;try{e:{for(et(_),D=s(g);D!==null&&!(D.expirationTime>_&&Dt());){var St=D.callback;if(typeof St=="function"){D.callback=null,B=D.priorityLevel;var Et=St(D.expirationTime<=_);if(_=c.unstable_now(),typeof Et=="function"){D.callback=Et,et(_),G=!0;break e}D===s(g)&&i(g),et(_)}else i(g);D=s(g)}if(D!==null)G=!0;else{var b=s(h);b!==null&&qt(nt,b.startTime-_),G=!1}}break t}finally{D=null,B=H,Z=!1}G=void 0}}finally{G?Ut():V=!1}}}var Ut;if(typeof F=="function")Ut=function(){F(gt)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,ee=Se.port2;Se.port1.onmessage=gt,Ut=function(){ee.postMessage(null)}}else Ut=function(){I(gt,0)};function qt(_,G){q=I(function(){_(c.unstable_now())},G)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(_){_.callback=null},c.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<_?Math.floor(1e3/_):5},c.unstable_getCurrentPriorityLevel=function(){return B},c.unstable_next=function(_){switch(B){case 1:case 2:case 3:var G=3;break;default:G=B}var H=B;B=G;try{return _()}finally{B=H}},c.unstable_requestPaint=function(){Q=!0},c.unstable_runWithPriority=function(_,G){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var H=B;B=_;try{return G()}finally{B=H}},c.unstable_scheduleCallback=function(_,G,H){var St=c.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?St+H:St):H=St,_){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=H+Et,_={id:M++,callback:G,priorityLevel:_,startTime:H,expirationTime:Et,sortIndex:-1},H>St?(_.sortIndex=H,r(h,_),s(g)===null&&_===s(h)&&(w?(W(q),q=-1):w=!0,qt(nt,H-St))):(_.sortIndex=Et,r(g,_),tt||Z||(tt=!0,V||(V=!0,Ut()))),_},c.unstable_shouldYield=Dt,c.unstable_wrapCallback=function(_){var G=B;return function(){var H=B;B=G;try{return _.apply(this,arguments)}finally{B=H}}}})(lr)),lr}var Rm;function Hg(){return Rm||(Rm=1,nr.exports=wg()),nr.exports}var ar={exports:{}},te={};var jm;function Bg(){if(jm)return te;jm=1;var c=br();function r(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)h+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var i={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(g,h,M){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:D==null?null:""+D,children:g,containerInfo:h,implementation:M}}var S=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,te.createPortal=function(g,h){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return m(g,h,null,M)},te.flushSync=function(g){var h=S.T,M=i.p;try{if(S.T=null,i.p=2,g)return g()}finally{S.T=h,i.p=M,i.d.f()}},te.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(g,h))},te.prefetchDNS=function(g){typeof g=="string"&&i.d.D(g)},te.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var M=h.as,D=y(M,h.crossOrigin),B=typeof h.integrity=="string"?h.integrity:void 0,Z=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;M==="style"?i.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:D,integrity:B,fetchPriority:Z}):M==="script"&&i.d.X(g,{crossOrigin:D,integrity:B,fetchPriority:Z,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},te.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var M=y(h.as,h.crossOrigin);i.d.M(g,{crossOrigin:M,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(g)},te.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var M=h.as,D=y(M,h.crossOrigin);i.d.L(g,M,{crossOrigin:D,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},te.preloadModule=function(g,h){if(typeof g=="string")if(h){var M=y(h.as,h.crossOrigin);i.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:M,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(g)},te.requestFormReset=function(g){i.d.r(g)},te.unstable_batchedUpdates=function(g,h){return g(h)},te.useFormState=function(g,h,M){return S.H.useFormState(g,h,M)},te.useFormStatus=function(){return S.H.useHostTransitionStatus()},te.version="19.2.3",te}var Um;function rh(){if(Um)return ar.exports;Um=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(r){console.error(r)}}return c(),ar.exports=Bg(),ar.exports}var wm;function Yg(){if(wm)return Fa;wm=1;var c=Hg(),r=br(),s=rh();function i(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function S(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(m(t)!==t)throw Error(i(188))}function h(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(i(188));return e!==t?null:t}for(var n=t,l=e;;){var a=n.return;if(a===null)break;var u=a.alternate;if(u===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===n)return g(a),t;if(u===l)return g(a),e;u=u.sibling}throw Error(i(188))}if(n.return!==l.return)n=a,l=u;else{for(var o=!1,f=a.child;f;){if(f===n){o=!0,n=a,l=u;break}if(f===l){o=!0,l=a,n=u;break}f=f.sibling}if(!o){for(f=u.child;f;){if(f===n){o=!0,n=u,l=a;break}if(f===l){o=!0,l=u,n=a;break}f=f.sibling}if(!o)throw Error(i(189))}}if(n.alternate!==l)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?t:e}function M(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=M(t),e!==null)return e;t=t.sibling}return null}var D=Object.assign,B=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),tt=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),F=Symbol.for("react.context"),et=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),yt=Symbol.for("react.activity"),Dt=Symbol.for("react.memo_cache_sentinel"),gt=Symbol.iterator;function Ut(t){return t===null||typeof t!="object"?null:(t=gt&&t[gt]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Symbol.for("react.client.reference");function ee(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case I:return"Profiler";case Q:return"StrictMode";case nt:return"Suspense";case V:return"SuspenseList";case yt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case tt:return"Portal";case F:return t.displayName||"Context";case W:return(t._context.displayName||"Context")+".Consumer";case et:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case q:return e=t.displayName||null,e!==null?e:ee(t.type)||"Memo";case L:e=t._payload,t=t._init;try{return ee(t(e))}catch{}}return null}var qt=Array.isArray,_=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},St=[],Et=-1;function b(t){return{current:t}}function j(t){0>Et||(t.current=St[Et],St[Et]=null,Et--)}function Y(t,e){Et++,St[Et]=t.current,t.current=e}var X=b(null),ut=b(null),rt=b(null),at=b(null);function Kt(t,e){switch(Y(rt,e),Y(ut,t),Y(X,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?$d(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=$d(e),t=Fd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(X),Y(X,t)}function Nt(){j(X),j(ut),j(rt)}function we(t){t.memoizedState!==null&&Y(at,t);var e=X.current,n=Fd(e,t.type);e!==n&&(Y(ut,t),Y(X,n))}function sn(t){ut.current===t&&(j(X),j(ut)),at.current===t&&(j(at),Ka._currentValue=H)}var fn,zr;function Ln(t){if(fn===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fn=e&&e[1]||"",zr=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fn+t+zr}var wc=!1;function Hc(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(O){var z=O}Reflect.construct(t,[],U)}else{try{U.call()}catch(O){z=O}t.call(U.prototype)}}else{try{throw Error()}catch(O){z=O}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(O){if(O&&z&&typeof O.stack=="string")return[O.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),o=u[0],f=u[1];if(o&&f){var v=o.split(`
`),T=f.split(`
`);for(a=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;a<T.length&&!T[a].includes("DetermineComponentFrameRoot");)a++;if(l===v.length||a===T.length)for(l=v.length-1,a=T.length-1;1<=l&&0<=a&&v[l]!==T[a];)a--;for(;1<=l&&0<=a;l--,a--)if(v[l]!==T[a]){if(l!==1||a!==1)do if(l--,a--,0>a||v[l]!==T[a]){var N=`
`+v[l].replace(" at new "," at ");return t.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",t.displayName)),N}while(1<=l&&0<=a);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ln(n):""}function iv(t,e){switch(t.tag){case 26:case 27:case 5:return Ln(t.type);case 16:return Ln("Lazy");case 13:return t.child!==e&&e!==null?Ln("Suspense Fallback"):Ln("Suspense");case 19:return Ln("SuspenseList");case 0:case 15:return Hc(t.type,!1);case 11:return Hc(t.type.render,!1);case 1:return Hc(t.type,!0);case 31:return Ln("Activity");default:return""}}function Cr(t){try{var e="",n=null;do e+=iv(t,n),n=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Bc=Object.prototype.hasOwnProperty,Yc=c.unstable_scheduleCallback,qc=c.unstable_cancelCallback,ov=c.unstable_shouldYield,rv=c.unstable_requestPaint,se=c.unstable_now,sv=c.unstable_getCurrentPriorityLevel,Or=c.unstable_ImmediatePriority,Dr=c.unstable_UserBlockingPriority,eu=c.unstable_NormalPriority,fv=c.unstable_LowPriority,_r=c.unstable_IdlePriority,dv=c.log,mv=c.unstable_setDisableYieldValue,aa=null,fe=null;function dn(t){if(typeof dv=="function"&&mv(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(aa,t)}catch{}}var de=Math.clz32?Math.clz32:yv,hv=Math.log,vv=Math.LN2;function yv(t){return t>>>=0,t===0?32:31-(hv(t)/vv|0)|0}var nu=256,lu=262144,au=4194304;function Xn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function uu(t,e,n){var l=t.pendingLanes;if(l===0)return 0;var a=0,u=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var f=l&134217727;return f!==0?(l=f&~u,l!==0?a=Xn(l):(o&=f,o!==0?a=Xn(o):n||(n=f&~t,n!==0&&(a=Xn(n))))):(f=l&~u,f!==0?a=Xn(f):o!==0?a=Xn(o):n||(n=l&~t,n!==0&&(a=Xn(n)))),a===0?0:e!==0&&e!==a&&(e&u)===0&&(u=a&-a,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:a}function ua(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function gv(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nr(){var t=au;return au<<=1,(au&62914560)===0&&(au=4194304),t}function Gc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function pv(t,e,n,l,a,u){var o=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var f=t.entanglements,v=t.expirationTimes,T=t.hiddenUpdates;for(n=o&~n;0<n;){var N=31-de(n),U=1<<N;f[N]=0,v[N]=-1;var z=T[N];if(z!==null)for(T[N]=null,N=0;N<z.length;N++){var O=z[N];O!==null&&(O.lane&=-536870913)}n&=~U}l!==0&&Mr(t,l,0),u!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=u&~(o&~e))}function Mr(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-de(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|n&261930}function Rr(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var l=31-de(n),a=1<<l;a&e|t[l]&e&&(t[l]|=e),n&=~a}}function jr(t,e){var n=e&-e;return n=(n&42)!==0?1:Lc(n),(n&(t.suspendedLanes|e))!==0?0:n}function Lc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Xc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ur(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Sm(t.type))}function wr(t,e){var n=G.p;try{return G.p=t,e()}finally{G.p=n}}var mn=Math.random().toString(36).slice(2),Wt="__reactFiber$"+mn,le="__reactProps$"+mn,dl="__reactContainer$"+mn,Qc="__reactEvents$"+mn,bv="__reactListeners$"+mn,Sv="__reactHandles$"+mn,Hr="__reactResources$"+mn,ia="__reactMarker$"+mn;function Vc(t){delete t[Wt],delete t[le],delete t[Qc],delete t[bv],delete t[Sv]}function ml(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dl]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=am(t);t!==null;){if(n=t[Wt])return n;t=am(t)}return e}t=n,n=t.parentNode}return null}function hl(t){if(t=t[Wt]||t[dl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function oa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(i(33))}function vl(t){var e=t[Hr];return e||(e=t[Hr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function kt(t){t[ia]=!0}var Br=new Set,Yr={};function Qn(t,e){yl(t,e),yl(t+"Capture",e)}function yl(t,e){for(Yr[t]=e,t=0;t<e.length;t++)Br.add(e[t])}var xv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qr={},Gr={};function Ev(t){return Bc.call(Gr,t)?!0:Bc.call(qr,t)?!1:xv.test(t)?Gr[t]=!0:(qr[t]=!0,!1)}function cu(t,e,n){if(Ev(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function iu(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Le(t,e,n,l){if(l===null)t.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+l)}}function xe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lr(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Av(t,e,n){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,u=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,u.call(this,o)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zc(t){if(!t._valueTracker){var e=Lr(t)?"checked":"value";t._valueTracker=Av(t,e,""+t[e])}}function Xr(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),l="";return t&&(l=Lr(t)?t.checked?"true":"false":t.value),t=l,t!==n?(e.setValue(t),!0):!1}function ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Tv=/[\n"\\]/g;function Ee(t){return t.replace(Tv,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Kc(t,e,n,l,a,u,o,f){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+xe(e)):t.value!==""+xe(e)&&(t.value=""+xe(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?kc(t,o,xe(e)):n!=null?kc(t,o,xe(n)):l!=null&&t.removeAttribute("value"),a==null&&u!=null&&(t.defaultChecked=!!u),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+xe(f):t.removeAttribute("name")}function Qr(t,e,n,l,a,u,o,f){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Zc(t);return}n=n!=null?""+xe(n):"",e=e!=null?""+xe(e):n,f||e===t.value||(t.value=e),t.defaultValue=e}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=f?t.checked:!!l,t.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),Zc(t)}function kc(t,e,n){e==="number"&&ou(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function gl(t,e,n,l){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&l&&(t[n].defaultSelected=!0)}else{for(n=""+xe(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,l&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Vr(t,e,n){if(e!=null&&(e=""+xe(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+xe(n):""}function Zr(t,e,n,l){if(e==null){if(l!=null){if(n!=null)throw Error(i(92));if(qt(l)){if(1<l.length)throw Error(i(93));l=l[0]}n=l}n==null&&(n=""),e=n}n=xe(e),t.defaultValue=n,l=t.textContent,l===n&&l!==""&&l!==null&&(t.value=l),Zc(t)}function pl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kr(t,e,n){var l=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,n):typeof n!="number"||n===0||zv.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function kr(t,e,n){if(e!=null&&typeof e!="object")throw Error(i(62));if(t=t.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var a in e)l=e[a],e.hasOwnProperty(a)&&n[a]!==l&&Kr(t,a,l)}else for(var u in e)e.hasOwnProperty(u)&&Kr(t,u,e[u])}function Jc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ov=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ru(t){return Ov.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xe(){}var Wc=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bl=null,Sl=null;function Jr(t){var e=hl(t);if(e&&(t=e.stateNode)){var n=t[le]||null;t:switch(t=e.stateNode,e.type){case"input":if(Kc(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ee(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var l=n[e];if(l!==t&&l.form===t.form){var a=l[le]||null;if(!a)throw Error(i(90));Kc(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)l=n[e],l.form===t.form&&Xr(l)}break t;case"textarea":Vr(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&gl(t,!!n.multiple,e,!1)}}}var Fc=!1;function Wr(t,e,n){if(Fc)return t(e,n);Fc=!0;try{var l=t(e);return l}finally{if(Fc=!1,(bl!==null||Sl!==null)&&($u(),bl&&(e=bl,t=Sl,Sl=bl=null,Jr(e),t)))for(e=0;e<t.length;e++)Jr(t[e])}}function ra(t,e){var n=t.stateNode;if(n===null)return null;var l=n[le]||null;if(l===null)return null;n=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(i(231,e,typeof n));return n}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=!1;if(Qe)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{Ic=!1}var hn=null,Pc=null,su=null;function $r(){if(su)return su;var t,e=Pc,n=e.length,l,a="value"in hn?hn.value:hn.textContent,u=a.length;for(t=0;t<n&&e[t]===a[t];t++);var o=n-t;for(l=1;l<=o&&e[n-l]===a[u-l];l++);return su=a.slice(t,1<l?1-l:void 0)}function fu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function du(){return!0}function Fr(){return!1}function ae(t){function e(n,l,a,u,o){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=u,this.target=o,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(n=t[f],this[f]=n?n(u):u[f]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?du:Fr,this.isPropagationStopped=Fr,this}return D(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=du)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=du)},persist:function(){},isPersistent:du}),e}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mu=ae(Vn),fa=D({},Vn,{view:0,detail:0}),Dv=ae(fa),ti,ei,da,hu=D({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:li,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==da&&(da&&t.type==="mousemove"?(ti=t.screenX-da.screenX,ei=t.screenY-da.screenY):ei=ti=0,da=t),ti)},movementY:function(t){return"movementY"in t?t.movementY:ei}}),Ir=ae(hu),_v=D({},hu,{dataTransfer:0}),Nv=ae(_v),Mv=D({},fa,{relatedTarget:0}),ni=ae(Mv),Rv=D({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=ae(Rv),Uv=D({},Vn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wv=ae(Uv),Hv=D({},Vn,{data:0}),Pr=ae(Hv),Bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qv[t])?!!e[t]:!1}function li(){return Gv}var Lv=D({},fa,{key:function(t){if(t.key){var e=Bv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:li,charCode:function(t){return t.type==="keypress"?fu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xv=ae(Lv),Qv=D({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ts=ae(Qv),Vv=D({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:li}),Zv=ae(Vv),Kv=D({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kv=ae(Kv),Jv=D({},hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=ae(Jv),$v=D({},Vn,{newState:0,oldState:0}),Fv=ae($v),Iv=[9,13,27,32],ai=Qe&&"CompositionEvent"in window,ma=null;Qe&&"documentMode"in document&&(ma=document.documentMode);var Pv=Qe&&"TextEvent"in window&&!ma,es=Qe&&(!ai||ma&&8<ma&&11>=ma),ns=" ",ls=!1;function as(t,e){switch(t){case"keyup":return Iv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function us(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xl=!1;function ty(t,e){switch(t){case"compositionend":return us(e);case"keypress":return e.which!==32?null:(ls=!0,ns);case"textInput":return t=e.data,t===ns&&ls?null:t;default:return null}}function ey(t,e){if(xl)return t==="compositionend"||!ai&&as(t,e)?(t=$r(),su=Pc=hn=null,xl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return es&&e.locale!=="ko"?null:e.data;default:return null}}var ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ny[t.type]:e==="textarea"}function is(t,e,n,l){bl?Sl?Sl.push(l):Sl=[l]:bl=l,e=lc(e,"onChange"),0<e.length&&(n=new mu("onChange","change",null,n,l),t.push({event:n,listeners:e}))}var ha=null,va=null;function ly(t){Vd(t,0)}function vu(t){var e=oa(t);if(Xr(e))return t}function os(t,e){if(t==="change")return e}var rs=!1;if(Qe){var ui;if(Qe){var ci="oninput"in document;if(!ci){var ss=document.createElement("div");ss.setAttribute("oninput","return;"),ci=typeof ss.oninput=="function"}ui=ci}else ui=!1;rs=ui&&(!document.documentMode||9<document.documentMode)}function fs(){ha&&(ha.detachEvent("onpropertychange",ds),va=ha=null)}function ds(t){if(t.propertyName==="value"&&vu(va)){var e=[];is(e,va,t,$c(t)),Wr(ly,e)}}function ay(t,e,n){t==="focusin"?(fs(),ha=e,va=n,ha.attachEvent("onpropertychange",ds)):t==="focusout"&&fs()}function uy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vu(va)}function cy(t,e){if(t==="click")return vu(e)}function iy(t,e){if(t==="input"||t==="change")return vu(e)}function oy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var me=typeof Object.is=="function"?Object.is:oy;function ya(t,e){if(me(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),l=Object.keys(e);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!Bc.call(e,a)||!me(t[a],e[a]))return!1}return!0}function ms(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hs(t,e){var n=ms(t);t=0;for(var l;n;){if(n.nodeType===3){if(l=t+n.textContent.length,t<=e&&l>=e)return{node:n,offset:e-t};t=l}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=ms(n)}}function vs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ys(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ou(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ou(t.document)}return e}function ii(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var ry=Qe&&"documentMode"in document&&11>=document.documentMode,El=null,oi=null,ga=null,ri=!1;function gs(t,e,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ri||El==null||El!==ou(l)||(l=El,"selectionStart"in l&&ii(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ga&&ya(ga,l)||(ga=l,l=lc(oi,"onSelect"),0<l.length&&(e=new mu("onSelect","select",null,e,n),t.push({event:e,listeners:l}),e.target=El)))}function Zn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Al={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},si={},ps={};Qe&&(ps=document.createElement("div").style,"AnimationEvent"in window||(delete Al.animationend.animation,delete Al.animationiteration.animation,delete Al.animationstart.animation),"TransitionEvent"in window||delete Al.transitionend.transition);function Kn(t){if(si[t])return si[t];if(!Al[t])return t;var e=Al[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ps)return si[t]=e[n];return t}var bs=Kn("animationend"),Ss=Kn("animationiteration"),xs=Kn("animationstart"),sy=Kn("transitionrun"),fy=Kn("transitionstart"),dy=Kn("transitioncancel"),Es=Kn("transitionend"),As=new Map,fi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fi.push("scrollEnd");function Me(t,e){As.set(t,e),Qn(e,[t])}var yu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ae=[],Tl=0,di=0;function gu(){for(var t=Tl,e=di=Tl=0;e<t;){var n=Ae[e];Ae[e++]=null;var l=Ae[e];Ae[e++]=null;var a=Ae[e];Ae[e++]=null;var u=Ae[e];if(Ae[e++]=null,l!==null&&a!==null){var o=l.pending;o===null?a.next=a:(a.next=o.next,o.next=a),l.pending=a}u!==0&&Ts(n,a,u)}}function pu(t,e,n,l){Ae[Tl++]=t,Ae[Tl++]=e,Ae[Tl++]=n,Ae[Tl++]=l,di|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function mi(t,e,n,l){return pu(t,e,n,l),bu(t)}function kn(t,e){return pu(t,null,null,e),bu(t)}function Ts(t,e,n){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n);for(var a=!1,u=t.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(a=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,a&&e!==null&&(a=31-de(n),t=u.hiddenUpdates,l=t[a],l===null?t[a]=[e]:l.push(e),e.lane=n|536870912),u):null}function bu(t){if(50<qa)throw qa=0,Ao=null,Error(i(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var zl={};function my(t,e,n,l){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function he(t,e,n,l){return new my(t,e,n,l)}function hi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ve(t,e){var n=t.alternate;return n===null?(n=he(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function zs(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Su(t,e,n,l,a,u){var o=0;if(l=t,typeof t=="function")hi(t)&&(o=1);else if(typeof t=="string")o=pg(t,n,X.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case yt:return t=he(31,n,e,a),t.elementType=yt,t.lanes=u,t;case w:return Jn(n.children,a,u,e);case Q:o=8,a|=24;break;case I:return t=he(12,n,e,a|2),t.elementType=I,t.lanes=u,t;case nt:return t=he(13,n,e,a),t.elementType=nt,t.lanes=u,t;case V:return t=he(19,n,e,a),t.elementType=V,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:o=10;break t;case W:o=9;break t;case et:o=11;break t;case q:o=14;break t;case L:o=16,l=null;break t}o=29,n=Error(i(130,t===null?"null":typeof t,"")),l=null}return e=he(o,n,e,a),e.elementType=t,e.type=l,e.lanes=u,e}function Jn(t,e,n,l){return t=he(7,t,l,e),t.lanes=n,t}function vi(t,e,n){return t=he(6,t,null,e),t.lanes=n,t}function Cs(t){var e=he(18,null,null,0);return e.stateNode=t,e}function yi(t,e,n){return e=he(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Os=new WeakMap;function Te(t,e){if(typeof t=="object"&&t!==null){var n=Os.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Cr(e)},Os.set(t,e),e)}return{value:t,source:e,stack:Cr(e)}}var Cl=[],Ol=0,xu=null,pa=0,ze=[],Ce=0,vn=null,He=1,Be="";function Ze(t,e){Cl[Ol++]=pa,Cl[Ol++]=xu,xu=t,pa=e}function Ds(t,e,n){ze[Ce++]=He,ze[Ce++]=Be,ze[Ce++]=vn,vn=t;var l=He;t=Be;var a=32-de(l)-1;l&=~(1<<a),n+=1;var u=32-de(e)+a;if(30<u){var o=a-a%5;u=(l&(1<<o)-1).toString(32),l>>=o,a-=o,He=1<<32-de(e)+a|n<<a|l,Be=u+t}else He=1<<u|n<<a|l,Be=t}function gi(t){t.return!==null&&(Ze(t,1),Ds(t,1,0))}function pi(t){for(;t===xu;)xu=Cl[--Ol],Cl[Ol]=null,pa=Cl[--Ol],Cl[Ol]=null;for(;t===vn;)vn=ze[--Ce],ze[Ce]=null,Be=ze[--Ce],ze[Ce]=null,He=ze[--Ce],ze[Ce]=null}function _s(t,e){ze[Ce++]=He,ze[Ce++]=Be,ze[Ce++]=vn,He=e.id,Be=e.overflow,vn=t}var $t=null,Mt=null,vt=!1,yn=null,Oe=!1,bi=Error(i(519));function gn(t){var e=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ba(Te(e,t)),bi}function Ns(t){var e=t.stateNode,n=t.type,l=t.memoizedProps;switch(e[Wt]=t,e[le]=l,n){case"dialog":dt("cancel",e),dt("close",e);break;case"iframe":case"object":case"embed":dt("load",e);break;case"video":case"audio":for(n=0;n<La.length;n++)dt(La[n],e);break;case"source":dt("error",e);break;case"img":case"image":case"link":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"input":dt("invalid",e),Qr(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":dt("invalid",e);break;case"textarea":dt("invalid",e),Zr(e,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||l.suppressHydrationWarning===!0||Jd(e.textContent,n)?(l.popover!=null&&(dt("beforetoggle",e),dt("toggle",e)),l.onScroll!=null&&dt("scroll",e),l.onScrollEnd!=null&&dt("scrollend",e),l.onClick!=null&&(e.onclick=Xe),e=!0):e=!1,e||gn(t,!0)}function Ms(t){for($t=t.return;$t;)switch($t.tag){case 5:case 31:case 13:Oe=!1;return;case 27:case 3:Oe=!0;return;default:$t=$t.return}}function Dl(t){if(t!==$t)return!1;if(!vt)return Ms(t),vt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Yo(t.type,t.memoizedProps)),n=!n),n&&Mt&&gn(t),Ms(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));Mt=lm(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));Mt=lm(t)}else e===27?(e=Mt,Mn(t.type)?(t=Qo,Qo=null,Mt=t):Mt=e):Mt=$t?_e(t.stateNode.nextSibling):null;return!0}function Wn(){Mt=$t=null,vt=!1}function Si(){var t=yn;return t!==null&&(oe===null?oe=t:oe.push.apply(oe,t),yn=null),t}function ba(t){yn===null?yn=[t]:yn.push(t)}var xi=b(null),$n=null,Ke=null;function pn(t,e,n){Y(xi,e._currentValue),e._currentValue=n}function ke(t){t._currentValue=xi.current,j(xi)}function Ei(t,e,n){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===n)break;t=t.return}}function Ai(t,e,n,l){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){var o=a.child;u=u.firstContext;t:for(;u!==null;){var f=u;u=a;for(var v=0;v<e.length;v++)if(f.context===e[v]){u.lanes|=n,f=u.alternate,f!==null&&(f.lanes|=n),Ei(u.return,n,t),l||(o=null);break t}u=f.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(i(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ei(o,n,t),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function _l(t,e,n,l){t=null;for(var a=e,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(i(387));if(o=o.memoizedProps,o!==null){var f=a.type;me(a.pendingProps.value,o.value)||(t!==null?t.push(f):t=[f])}}else if(a===at.current){if(o=a.alternate,o===null)throw Error(i(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Ka):t=[Ka])}a=a.return}t!==null&&Ai(e,t,n,l),e.flags|=262144}function Eu(t){for(t=t.firstContext;t!==null;){if(!me(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Fn(t){$n=t,Ke=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ft(t){return Rs($n,t)}function Au(t,e){return $n===null&&Fn(t),Rs(t,e)}function Rs(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Ke===null){if(t===null)throw Error(i(308));Ke=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ke=Ke.next=e;return n}var hy=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},vy=c.unstable_scheduleCallback,yy=c.unstable_NormalPriority,Gt={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ti(){return{controller:new hy,data:new Map,refCount:0}}function Sa(t){t.refCount--,t.refCount===0&&vy(yy,function(){t.controller.abort()})}var xa=null,zi=0,Nl=0,Ml=null;function gy(t,e){if(xa===null){var n=xa=[];zi=0,Nl=_o(),Ml={status:"pending",value:void 0,then:function(l){n.push(l)}}}return zi++,e.then(js,js),e}function js(){if(--zi===0&&xa!==null){Ml!==null&&(Ml.status="fulfilled");var t=xa;xa=null,Nl=0,Ml=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function py(t,e){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var Us=_.S;_.S=function(t,e){pd=se(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&gy(t,e),Us!==null&&Us(t,e)};var In=b(null);function Ci(){var t=In.current;return t!==null?t:_t.pooledCache}function Tu(t,e){e===null?Y(In,In.current):Y(In,e.pool)}function ws(){var t=Ci();return t===null?null:{parent:Gt._currentValue,pool:t}}var Rl=Error(i(460)),Oi=Error(i(474)),zu=Error(i(542)),Cu={then:function(){}};function Hs(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bs(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Xe,Xe),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qs(t),t;default:if(typeof e.status=="string")e.then(Xe,Xe);else{if(t=_t,t!==null&&100<t.shellSuspendCounter)throw Error(i(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=l}},function(l){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qs(t),t}throw tl=e,Rl}}function Pn(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(tl=n,Rl):n}}var tl=null;function Ys(){if(tl===null)throw Error(i(459));var t=tl;return tl=null,t}function qs(t){if(t===Rl||t===zu)throw Error(i(483))}var jl=null,Ea=0;function Ou(t){var e=Ea;return Ea+=1,jl===null&&(jl=[]),Bs(jl,t,e)}function Aa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Du(t,e){throw e.$$typeof===B?Error(i(525)):(t=Object.prototype.toString.call(e),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Gs(t){function e(E,p){if(t){var A=E.deletions;A===null?(E.deletions=[p],E.flags|=16):A.push(p)}}function n(E,p){if(!t)return null;for(;p!==null;)e(E,p),p=p.sibling;return null}function l(E){for(var p=new Map;E!==null;)E.key!==null?p.set(E.key,E):p.set(E.index,E),E=E.sibling;return p}function a(E,p){return E=Ve(E,p),E.index=0,E.sibling=null,E}function u(E,p,A){return E.index=A,t?(A=E.alternate,A!==null?(A=A.index,A<p?(E.flags|=67108866,p):A):(E.flags|=67108866,p)):(E.flags|=1048576,p)}function o(E){return t&&E.alternate===null&&(E.flags|=67108866),E}function f(E,p,A,R){return p===null||p.tag!==6?(p=vi(A,E.mode,R),p.return=E,p):(p=a(p,A),p.return=E,p)}function v(E,p,A,R){var P=A.type;return P===w?N(E,p,A.props.children,R,A.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===L&&Pn(P)===p.type)?(p=a(p,A.props),Aa(p,A),p.return=E,p):(p=Su(A.type,A.key,A.props,null,E.mode,R),Aa(p,A),p.return=E,p)}function T(E,p,A,R){return p===null||p.tag!==4||p.stateNode.containerInfo!==A.containerInfo||p.stateNode.implementation!==A.implementation?(p=yi(A,E.mode,R),p.return=E,p):(p=a(p,A.children||[]),p.return=E,p)}function N(E,p,A,R,P){return p===null||p.tag!==7?(p=Jn(A,E.mode,R,P),p.return=E,p):(p=a(p,A),p.return=E,p)}function U(E,p,A){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=vi(""+p,E.mode,A),p.return=E,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Z:return A=Su(p.type,p.key,p.props,null,E.mode,A),Aa(A,p),A.return=E,A;case tt:return p=yi(p,E.mode,A),p.return=E,p;case L:return p=Pn(p),U(E,p,A)}if(qt(p)||Ut(p))return p=Jn(p,E.mode,A,null),p.return=E,p;if(typeof p.then=="function")return U(E,Ou(p),A);if(p.$$typeof===F)return U(E,Au(E,p),A);Du(E,p)}return null}function z(E,p,A,R){var P=p!==null?p.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return P!==null?null:f(E,p,""+A,R);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Z:return A.key===P?v(E,p,A,R):null;case tt:return A.key===P?T(E,p,A,R):null;case L:return A=Pn(A),z(E,p,A,R)}if(qt(A)||Ut(A))return P!==null?null:N(E,p,A,R,null);if(typeof A.then=="function")return z(E,p,Ou(A),R);if(A.$$typeof===F)return z(E,p,Au(E,A),R);Du(E,A)}return null}function O(E,p,A,R,P){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return E=E.get(A)||null,f(p,E,""+R,P);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Z:return E=E.get(R.key===null?A:R.key)||null,v(p,E,R,P);case tt:return E=E.get(R.key===null?A:R.key)||null,T(p,E,R,P);case L:return R=Pn(R),O(E,p,A,R,P)}if(qt(R)||Ut(R))return E=E.get(A)||null,N(p,E,R,P,null);if(typeof R.then=="function")return O(E,p,A,Ou(R),P);if(R.$$typeof===F)return O(E,p,A,Au(p,R),P);Du(p,R)}return null}function K(E,p,A,R){for(var P=null,pt=null,$=p,ot=p=0,ht=null;$!==null&&ot<A.length;ot++){$.index>ot?(ht=$,$=null):ht=$.sibling;var bt=z(E,$,A[ot],R);if(bt===null){$===null&&($=ht);break}t&&$&&bt.alternate===null&&e(E,$),p=u(bt,p,ot),pt===null?P=bt:pt.sibling=bt,pt=bt,$=ht}if(ot===A.length)return n(E,$),vt&&Ze(E,ot),P;if($===null){for(;ot<A.length;ot++)$=U(E,A[ot],R),$!==null&&(p=u($,p,ot),pt===null?P=$:pt.sibling=$,pt=$);return vt&&Ze(E,ot),P}for($=l($);ot<A.length;ot++)ht=O($,E,ot,A[ot],R),ht!==null&&(t&&ht.alternate!==null&&$.delete(ht.key===null?ot:ht.key),p=u(ht,p,ot),pt===null?P=ht:pt.sibling=ht,pt=ht);return t&&$.forEach(function(Hn){return e(E,Hn)}),vt&&Ze(E,ot),P}function lt(E,p,A,R){if(A==null)throw Error(i(151));for(var P=null,pt=null,$=p,ot=p=0,ht=null,bt=A.next();$!==null&&!bt.done;ot++,bt=A.next()){$.index>ot?(ht=$,$=null):ht=$.sibling;var Hn=z(E,$,bt.value,R);if(Hn===null){$===null&&($=ht);break}t&&$&&Hn.alternate===null&&e(E,$),p=u(Hn,p,ot),pt===null?P=Hn:pt.sibling=Hn,pt=Hn,$=ht}if(bt.done)return n(E,$),vt&&Ze(E,ot),P;if($===null){for(;!bt.done;ot++,bt=A.next())bt=U(E,bt.value,R),bt!==null&&(p=u(bt,p,ot),pt===null?P=bt:pt.sibling=bt,pt=bt);return vt&&Ze(E,ot),P}for($=l($);!bt.done;ot++,bt=A.next())bt=O($,E,ot,bt.value,R),bt!==null&&(t&&bt.alternate!==null&&$.delete(bt.key===null?ot:bt.key),p=u(bt,p,ot),pt===null?P=bt:pt.sibling=bt,pt=bt);return t&&$.forEach(function(_g){return e(E,_g)}),vt&&Ze(E,ot),P}function Ot(E,p,A,R){if(typeof A=="object"&&A!==null&&A.type===w&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Z:t:{for(var P=A.key;p!==null;){if(p.key===P){if(P=A.type,P===w){if(p.tag===7){n(E,p.sibling),R=a(p,A.props.children),R.return=E,E=R;break t}}else if(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===L&&Pn(P)===p.type){n(E,p.sibling),R=a(p,A.props),Aa(R,A),R.return=E,E=R;break t}n(E,p);break}else e(E,p);p=p.sibling}A.type===w?(R=Jn(A.props.children,E.mode,R,A.key),R.return=E,E=R):(R=Su(A.type,A.key,A.props,null,E.mode,R),Aa(R,A),R.return=E,E=R)}return o(E);case tt:t:{for(P=A.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===A.containerInfo&&p.stateNode.implementation===A.implementation){n(E,p.sibling),R=a(p,A.children||[]),R.return=E,E=R;break t}else{n(E,p);break}else e(E,p);p=p.sibling}R=yi(A,E.mode,R),R.return=E,E=R}return o(E);case L:return A=Pn(A),Ot(E,p,A,R)}if(qt(A))return K(E,p,A,R);if(Ut(A)){if(P=Ut(A),typeof P!="function")throw Error(i(150));return A=P.call(A),lt(E,p,A,R)}if(typeof A.then=="function")return Ot(E,p,Ou(A),R);if(A.$$typeof===F)return Ot(E,p,Au(E,A),R);Du(E,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,p!==null&&p.tag===6?(n(E,p.sibling),R=a(p,A),R.return=E,E=R):(n(E,p),R=vi(A,E.mode,R),R.return=E,E=R),o(E)):n(E,p)}return function(E,p,A,R){try{Ea=0;var P=Ot(E,p,A,R);return jl=null,P}catch($){if($===Rl||$===zu)throw $;var pt=he(29,$,null,E.mode);return pt.lanes=R,pt.return=E,pt}}}var el=Gs(!0),Ls=Gs(!1),bn=!1;function Di(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _i(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Sn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xn(t,e,n){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(xt&2)!==0){var a=l.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),l.pending=e,e=bu(t),Ts(t,null,n),e}return pu(t,l,e,n),bu(t)}function Ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,Rr(t,n)}}function Ni(t,e){var n=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?a=u=o:u=u.next=o,n=n.next}while(n!==null);u===null?a=u=e:u=u.next=e}else a=u=e;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Mi=!1;function za(){if(Mi){var t=Ml;if(t!==null)throw t}}function Ca(t,e,n,l){Mi=!1;var a=t.updateQueue;bn=!1;var u=a.firstBaseUpdate,o=a.lastBaseUpdate,f=a.shared.pending;if(f!==null){a.shared.pending=null;var v=f,T=v.next;v.next=null,o===null?u=T:o.next=T,o=v;var N=t.alternate;N!==null&&(N=N.updateQueue,f=N.lastBaseUpdate,f!==o&&(f===null?N.firstBaseUpdate=T:f.next=T,N.lastBaseUpdate=v))}if(u!==null){var U=a.baseState;o=0,N=T=v=null,f=u;do{var z=f.lane&-536870913,O=z!==f.lane;if(O?(mt&z)===z:(l&z)===z){z!==0&&z===Nl&&(Mi=!0),N!==null&&(N=N.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var K=t,lt=f;z=e;var Ot=n;switch(lt.tag){case 1:if(K=lt.payload,typeof K=="function"){U=K.call(Ot,U,z);break t}U=K;break t;case 3:K.flags=K.flags&-65537|128;case 0:if(K=lt.payload,z=typeof K=="function"?K.call(Ot,U,z):K,z==null)break t;U=D({},U,z);break t;case 2:bn=!0}}z=f.callback,z!==null&&(t.flags|=64,O&&(t.flags|=8192),O=a.callbacks,O===null?a.callbacks=[z]:O.push(z))}else O={lane:z,tag:f.tag,payload:f.payload,callback:f.callback,next:null},N===null?(T=N=O,v=U):N=N.next=O,o|=z;if(f=f.next,f===null){if(f=a.shared.pending,f===null)break;O=f,f=O.next,O.next=null,a.lastBaseUpdate=O,a.shared.pending=null}}while(!0);N===null&&(v=U),a.baseState=v,a.firstBaseUpdate=T,a.lastBaseUpdate=N,u===null&&(a.shared.lanes=0),Cn|=o,t.lanes=o,t.memoizedState=U}}function Xs(t,e){if(typeof t!="function")throw Error(i(191,t));t.call(e)}function Qs(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Xs(n[t],e)}var Ul=b(null),_u=b(0);function Vs(t,e){t=nn,Y(_u,t),Y(Ul,e),nn=t|e.baseLanes}function Ri(){Y(_u,nn),Y(Ul,Ul.current)}function ji(){nn=_u.current,j(Ul),j(_u)}var ve=b(null),De=null;function En(t){var e=t.alternate;Y(Bt,Bt.current&1),Y(ve,t),De===null&&(e===null||Ul.current!==null||e.memoizedState!==null)&&(De=t)}function Ui(t){Y(Bt,Bt.current),Y(ve,t),De===null&&(De=t)}function Zs(t){t.tag===22?(Y(Bt,Bt.current),Y(ve,t),De===null&&(De=t)):An()}function An(){Y(Bt,Bt.current),Y(ve,ve.current)}function ye(t){j(ve),De===t&&(De=null),j(Bt)}var Bt=b(0);function Nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Lo(n)||Xo(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Je=0,it=null,zt=null,Lt=null,Mu=!1,wl=!1,nl=!1,Ru=0,Oa=0,Hl=null,by=0;function wt(){throw Error(i(321))}function wi(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!me(t[n],e[n]))return!1;return!0}function Hi(t,e,n,l,a,u){return Je=u,it=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_.H=t===null||t.memoizedState===null?_f:Fi,nl=!1,u=n(l,a),nl=!1,wl&&(u=ks(e,n,l,a)),Ks(t),u}function Ks(t){_.H=Na;var e=zt!==null&&zt.next!==null;if(Je=0,Lt=zt=it=null,Mu=!1,Oa=0,Hl=null,e)throw Error(i(300));t===null||Xt||(t=t.dependencies,t!==null&&Eu(t)&&(Xt=!0))}function ks(t,e,n,l){it=t;var a=0;do{if(wl&&(Hl=null),Oa=0,wl=!1,25<=a)throw Error(i(301));if(a+=1,Lt=zt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}_.H=Nf,u=e(n,l)}while(wl);return u}function Sy(){var t=_.H,e=t.useState()[0];return e=typeof e.then=="function"?Da(e):e,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(it.flags|=1024),e}function Bi(){var t=Ru!==0;return Ru=0,t}function Yi(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function qi(t){if(Mu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Mu=!1}Je=0,Lt=zt=it=null,wl=!1,Oa=Ru=0,Hl=null}function ne(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?it.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Yt(){if(zt===null){var t=it.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Lt===null?it.memoizedState:Lt.next;if(e!==null)Lt=e,zt=t;else{if(t===null)throw it.alternate===null?Error(i(467)):Error(i(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Lt===null?it.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function ju(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Da(t){var e=Oa;return Oa+=1,Hl===null&&(Hl=[]),t=Bs(Hl,t,e),e=it,(Lt===null?e.memoizedState:Lt.next)===null&&(e=e.alternate,_.H=e===null||e.memoizedState===null?_f:Fi),t}function Uu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Da(t);if(t.$$typeof===F)return Ft(t)}throw Error(i(438,String(t)))}function Gi(t){var e=null,n=it.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var l=it.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=ju(),it.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),l=0;l<t;l++)n[l]=Dt;return e.index++,n}function We(t,e){return typeof e=="function"?e(t):e}function wu(t){var e=Yt();return Li(e,zt,t)}function Li(t,e,n){var l=t.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=n;var a=t.baseQueue,u=l.pending;if(u!==null){if(a!==null){var o=a.next;a.next=u.next,u.next=o}e.baseQueue=a=u,l.pending=null}if(u=t.baseState,a===null)t.memoizedState=u;else{e=a.next;var f=o=null,v=null,T=e,N=!1;do{var U=T.lane&-536870913;if(U!==T.lane?(mt&U)===U:(Je&U)===U){var z=T.revertLane;if(z===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),U===Nl&&(N=!0);else if((Je&z)===z){T=T.next,z===Nl&&(N=!0);continue}else U={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},v===null?(f=v=U,o=u):v=v.next=U,it.lanes|=z,Cn|=z;U=T.action,nl&&n(u,U),u=T.hasEagerState?T.eagerState:n(u,U)}else z={lane:U,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},v===null?(f=v=z,o=u):v=v.next=z,it.lanes|=U,Cn|=U;T=T.next}while(T!==null&&T!==e);if(v===null?o=u:v.next=f,!me(u,t.memoizedState)&&(Xt=!0,N&&(n=Ml,n!==null)))throw n;t.memoizedState=u,t.baseState=o,t.baseQueue=v,l.lastRenderedState=u}return a===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Xi(t){var e=Yt(),n=e.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=t;var l=n.dispatch,a=n.pending,u=e.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do u=t(u,o.action),o=o.next;while(o!==a);me(u,e.memoizedState)||(Xt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,l]}function Js(t,e,n){var l=it,a=Yt(),u=vt;if(u){if(n===void 0)throw Error(i(407));n=n()}else n=e();var o=!me((zt||a).memoizedState,n);if(o&&(a.memoizedState=n,Xt=!0),a=a.queue,Zi(Fs.bind(null,l,a,t),[t]),a.getSnapshot!==e||o||Lt!==null&&Lt.memoizedState.tag&1){if(l.flags|=2048,Bl(9,{destroy:void 0},$s.bind(null,l,a,n,e),null),_t===null)throw Error(i(349));u||(Je&127)!==0||Ws(l,e,n)}return n}function Ws(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=it.updateQueue,e===null?(e=ju(),it.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $s(t,e,n,l){e.value=n,e.getSnapshot=l,Is(e)&&Ps(t)}function Fs(t,e,n){return n(function(){Is(e)&&Ps(t)})}function Is(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!me(t,n)}catch{return!0}}function Ps(t){var e=kn(t,2);e!==null&&re(e,t,2)}function Qi(t){var e=ne();if(typeof t=="function"){var n=t;if(t=n(),nl){dn(!0);try{n()}finally{dn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:We,lastRenderedState:t},e}function tf(t,e,n,l){return t.baseState=n,Li(t,zt,typeof l=="function"?l:We)}function xy(t,e,n,l,a){if(Yu(t))throw Error(i(485));if(t=e.action,t!==null){var u={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){u.listeners.push(o)}};_.T!==null?n(!0):u.isTransition=!1,l(u),n=e.pending,n===null?(u.next=e.pending=u,ef(e,u)):(u.next=n.next,e.pending=n.next=u)}}function ef(t,e){var n=e.action,l=e.payload,a=t.state;if(e.isTransition){var u=_.T,o={};_.T=o;try{var f=n(a,l),v=_.S;v!==null&&v(o,f),nf(t,e,f)}catch(T){Vi(t,e,T)}finally{u!==null&&o.types!==null&&(u.types=o.types),_.T=u}}else try{u=n(a,l),nf(t,e,u)}catch(T){Vi(t,e,T)}}function nf(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){lf(t,e,l)},function(l){return Vi(t,e,l)}):lf(t,e,n)}function lf(t,e,n){e.status="fulfilled",e.value=n,af(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,ef(t,n)))}function Vi(t,e,n){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=n,af(e),e=e.next;while(e!==l)}t.action=null}function af(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function uf(t,e){return e}function cf(t,e){if(vt){var n=_t.formState;if(n!==null){t:{var l=it;if(vt){if(Mt){e:{for(var a=Mt,u=Oe;a.nodeType!==8;){if(!u){a=null;break e}if(a=_e(a.nextSibling),a===null){a=null;break e}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){Mt=_e(a.nextSibling),l=a.data==="F!";break t}}gn(l)}l=!1}l&&(e=n[0])}}return n=ne(),n.memoizedState=n.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uf,lastRenderedState:e},n.queue=l,n=Cf.bind(null,it,l),l.dispatch=n,l=Qi(!1),u=$i.bind(null,it,!1,l.queue),l=ne(),a={state:e,dispatch:null,action:t,pending:null},l.queue=a,n=xy.bind(null,it,a,u,n),a.dispatch=n,l.memoizedState=t,[e,n,!1]}function of(t){var e=Yt();return rf(e,zt,t)}function rf(t,e,n){if(e=Li(t,e,uf)[0],t=wu(We)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Da(e)}catch(o){throw o===Rl?zu:o}else l=e;e=Yt();var a=e.queue,u=a.dispatch;return n!==e.memoizedState&&(it.flags|=2048,Bl(9,{destroy:void 0},Ey.bind(null,a,n),null)),[l,u,t]}function Ey(t,e){t.action=e}function sf(t){var e=Yt(),n=zt;if(n!==null)return rf(e,n,t);Yt(),e=e.memoizedState,n=Yt();var l=n.queue.dispatch;return n.memoizedState=t,[e,l,!1]}function Bl(t,e,n,l){return t={tag:t,create:n,deps:l,inst:e,next:null},e=it.updateQueue,e===null&&(e=ju(),it.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(l=n.next,n.next=t,t.next=l,e.lastEffect=t),t}function ff(){return Yt().memoizedState}function Hu(t,e,n,l){var a=ne();it.flags|=t,a.memoizedState=Bl(1|e,{destroy:void 0},n,l===void 0?null:l)}function Bu(t,e,n,l){var a=Yt();l=l===void 0?null:l;var u=a.memoizedState.inst;zt!==null&&l!==null&&wi(l,zt.memoizedState.deps)?a.memoizedState=Bl(e,u,n,l):(it.flags|=t,a.memoizedState=Bl(1|e,u,n,l))}function df(t,e){Hu(8390656,8,t,e)}function Zi(t,e){Bu(2048,8,t,e)}function Ay(t){it.flags|=4;var e=it.updateQueue;if(e===null)e=ju(),it.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function mf(t){var e=Yt().memoizedState;return Ay({ref:e,nextImpl:t}),function(){if((xt&2)!==0)throw Error(i(440));return e.impl.apply(void 0,arguments)}}function hf(t,e){return Bu(4,2,t,e)}function vf(t,e){return Bu(4,4,t,e)}function yf(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gf(t,e,n){n=n!=null?n.concat([t]):null,Bu(4,4,yf.bind(null,e,t),n)}function Ki(){}function pf(t,e){var n=Yt();e=e===void 0?null:e;var l=n.memoizedState;return e!==null&&wi(e,l[1])?l[0]:(n.memoizedState=[t,e],t)}function bf(t,e){var n=Yt();e=e===void 0?null:e;var l=n.memoizedState;if(e!==null&&wi(e,l[1]))return l[0];if(l=t(),nl){dn(!0);try{t()}finally{dn(!1)}}return n.memoizedState=[l,e],l}function ki(t,e,n){return n===void 0||(Je&1073741824)!==0&&(mt&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=Sd(),it.lanes|=t,Cn|=t,n)}function Sf(t,e,n,l){return me(n,e)?n:Ul.current!==null?(t=ki(t,n,l),me(t,e)||(Xt=!0),t):(Je&42)===0||(Je&1073741824)!==0&&(mt&261930)===0?(Xt=!0,t.memoizedState=n):(t=Sd(),it.lanes|=t,Cn|=t,e)}function xf(t,e,n,l,a){var u=G.p;G.p=u!==0&&8>u?u:8;var o=_.T,f={};_.T=f,$i(t,!1,e,n);try{var v=a(),T=_.S;if(T!==null&&T(f,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var N=py(v,l);_a(t,e,N,be(t))}else _a(t,e,l,be(t))}catch(U){_a(t,e,{then:function(){},status:"rejected",reason:U},be())}finally{G.p=u,o!==null&&f.types!==null&&(o.types=f.types),_.T=o}}function Ty(){}function Ji(t,e,n,l){if(t.tag!==5)throw Error(i(476));var a=Ef(t).queue;xf(t,a,e,H,n===null?Ty:function(){return Af(t),n(l)})}function Ef(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:We,lastRenderedState:H},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:We,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Af(t){var e=Ef(t);e.next===null&&(e=t.alternate.memoizedState),_a(t,e.next.queue,{},be())}function Wi(){return Ft(Ka)}function Tf(){return Yt().memoizedState}function zf(){return Yt().memoizedState}function zy(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=be();t=Sn(n);var l=xn(e,t,n);l!==null&&(re(l,e,n),Ta(l,e,n)),e={cache:Ti()},t.payload=e;return}e=e.return}}function Cy(t,e,n){var l=be();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Yu(t)?Of(e,n):(n=mi(t,e,n,l),n!==null&&(re(n,t,l),Df(n,e,l)))}function Cf(t,e,n){var l=be();_a(t,e,n,l)}function _a(t,e,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yu(t))Of(e,a);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var o=e.lastRenderedState,f=u(o,n);if(a.hasEagerState=!0,a.eagerState=f,me(f,o))return pu(t,e,a,0),_t===null&&gu(),!1}catch{}if(n=mi(t,e,a,l),n!==null)return re(n,t,l),Df(n,e,l),!0}return!1}function $i(t,e,n,l){if(l={lane:2,revertLane:_o(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Yu(t)){if(e)throw Error(i(479))}else e=mi(t,n,l,2),e!==null&&re(e,t,2)}function Yu(t){var e=t.alternate;return t===it||e!==null&&e===it}function Of(t,e){wl=Mu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Df(t,e,n){if((n&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,Rr(t,n)}}var Na={readContext:Ft,use:Uu,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt};Na.useEffectEvent=wt;var _f={readContext:Ft,use:Uu,useCallback:function(t,e){return ne().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:df,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Hu(4194308,4,yf.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hu(4194308,4,t,e)},useInsertionEffect:function(t,e){Hu(4,2,t,e)},useMemo:function(t,e){var n=ne();e=e===void 0?null:e;var l=t();if(nl){dn(!0);try{t()}finally{dn(!1)}}return n.memoizedState=[l,e],l},useReducer:function(t,e,n){var l=ne();if(n!==void 0){var a=n(e);if(nl){dn(!0);try{n(e)}finally{dn(!1)}}}else a=e;return l.memoizedState=l.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},l.queue=t,t=t.dispatch=Cy.bind(null,it,t),[l.memoizedState,t]},useRef:function(t){var e=ne();return t={current:t},e.memoizedState=t},useState:function(t){t=Qi(t);var e=t.queue,n=Cf.bind(null,it,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Ki,useDeferredValue:function(t,e){var n=ne();return ki(n,t,e)},useTransition:function(){var t=Qi(!1);return t=xf.bind(null,it,t.queue,!0,!1),ne().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var l=it,a=ne();if(vt){if(n===void 0)throw Error(i(407));n=n()}else{if(n=e(),_t===null)throw Error(i(349));(mt&127)!==0||Ws(l,e,n)}a.memoizedState=n;var u={value:n,getSnapshot:e};return a.queue=u,df(Fs.bind(null,l,u,t),[t]),l.flags|=2048,Bl(9,{destroy:void 0},$s.bind(null,l,u,n,e),null),n},useId:function(){var t=ne(),e=_t.identifierPrefix;if(vt){var n=Be,l=He;n=(l&~(1<<32-de(l)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Ru++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=by++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Wi,useFormState:cf,useActionState:cf,useOptimistic:function(t){var e=ne();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=$i.bind(null,it,!0,n),n.dispatch=e,[t,e]},useMemoCache:Gi,useCacheRefresh:function(){return ne().memoizedState=zy.bind(null,it)},useEffectEvent:function(t){var e=ne(),n={impl:t};return e.memoizedState=n,function(){if((xt&2)!==0)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Fi={readContext:Ft,use:Uu,useCallback:pf,useContext:Ft,useEffect:Zi,useImperativeHandle:gf,useInsertionEffect:hf,useLayoutEffect:vf,useMemo:bf,useReducer:wu,useRef:ff,useState:function(){return wu(We)},useDebugValue:Ki,useDeferredValue:function(t,e){var n=Yt();return Sf(n,zt.memoizedState,t,e)},useTransition:function(){var t=wu(We)[0],e=Yt().memoizedState;return[typeof t=="boolean"?t:Da(t),e]},useSyncExternalStore:Js,useId:Tf,useHostTransitionStatus:Wi,useFormState:of,useActionState:of,useOptimistic:function(t,e){var n=Yt();return tf(n,zt,t,e)},useMemoCache:Gi,useCacheRefresh:zf};Fi.useEffectEvent=mf;var Nf={readContext:Ft,use:Uu,useCallback:pf,useContext:Ft,useEffect:Zi,useImperativeHandle:gf,useInsertionEffect:hf,useLayoutEffect:vf,useMemo:bf,useReducer:Xi,useRef:ff,useState:function(){return Xi(We)},useDebugValue:Ki,useDeferredValue:function(t,e){var n=Yt();return zt===null?ki(n,t,e):Sf(n,zt.memoizedState,t,e)},useTransition:function(){var t=Xi(We)[0],e=Yt().memoizedState;return[typeof t=="boolean"?t:Da(t),e]},useSyncExternalStore:Js,useId:Tf,useHostTransitionStatus:Wi,useFormState:sf,useActionState:sf,useOptimistic:function(t,e){var n=Yt();return zt!==null?tf(n,zt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Gi,useCacheRefresh:zf};Nf.useEffectEvent=mf;function Ii(t,e,n,l){e=t.memoizedState,n=n(l,e),n=n==null?e:D({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pi={enqueueSetState:function(t,e,n){t=t._reactInternals;var l=be(),a=Sn(l);a.payload=e,n!=null&&(a.callback=n),e=xn(t,a,l),e!==null&&(re(e,t,l),Ta(e,t,l))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var l=be(),a=Sn(l);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=xn(t,a,l),e!==null&&(re(e,t,l),Ta(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=be(),l=Sn(n);l.tag=2,e!=null&&(l.callback=e),e=xn(t,l,n),e!==null&&(re(e,t,n),Ta(e,t,n))}};function Mf(t,e,n,l,a,u,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,u,o):e.prototype&&e.prototype.isPureReactComponent?!ya(n,l)||!ya(a,u):!0}function Rf(t,e,n,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,l),e.state!==t&&Pi.enqueueReplaceState(e,e.state,null)}function ll(t,e){var n=e;if("ref"in e){n={};for(var l in e)l!=="ref"&&(n[l]=e[l])}if(t=t.defaultProps){n===e&&(n=D({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function jf(t){yu(t)}function Uf(t){console.error(t)}function wf(t){yu(t)}function qu(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Hf(t,e,n){try{var l=t.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function to(t,e,n){return n=Sn(n),n.tag=3,n.payload={element:null},n.callback=function(){qu(t,e)},n}function Bf(t){return t=Sn(t),t.tag=3,t}function Yf(t,e,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var u=l.value;t.payload=function(){return a(u)},t.callback=function(){Hf(e,n,l)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Hf(e,n,l),typeof a!="function"&&(On===null?On=new Set([this]):On.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function Oy(t,e,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=n.alternate,e!==null&&_l(e,n,a,!0),n=ve.current,n!==null){switch(n.tag){case 31:case 13:return De===null?Fu():n.alternate===null&&Ht===0&&(Ht=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Cu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([l]):e.add(l),Co(t,l,a)),!1;case 22:return n.flags|=65536,l===Cu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([l]):n.add(l)),Co(t,l,a)),!1}throw Error(i(435,n.tag))}return Co(t,l,a),Fu(),!1}if(vt)return e=ve.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,l!==bi&&(t=Error(i(422),{cause:l}),ba(Te(t,n)))):(l!==bi&&(e=Error(i(423),{cause:l}),ba(Te(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,l=Te(l,n),a=to(t.stateNode,l,a),Ni(t,a),Ht!==4&&(Ht=2)),!1;var u=Error(i(520),{cause:l});if(u=Te(u,n),Ya===null?Ya=[u]:Ya.push(u),Ht!==4&&(Ht=2),e===null)return!0;l=Te(l,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=to(n.stateNode,l,t),Ni(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(On===null||!On.has(u))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Bf(a),Yf(a,t,n,l),Ni(n,a),!1}n=n.return}while(n!==null);return!1}var eo=Error(i(461)),Xt=!1;function It(t,e,n,l){e.child=t===null?Ls(e,null,n,l):el(e,t.child,n,l)}function qf(t,e,n,l,a){n=n.render;var u=e.ref;if("ref"in l){var o={};for(var f in l)f!=="ref"&&(o[f]=l[f])}else o=l;return Fn(e),l=Hi(t,e,n,o,u,a),f=Bi(),t!==null&&!Xt?(Yi(t,e,a),$e(t,e,a)):(vt&&f&&gi(e),e.flags|=1,It(t,e,l,a),e.child)}function Gf(t,e,n,l,a){if(t===null){var u=n.type;return typeof u=="function"&&!hi(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,Lf(t,e,u,l,a)):(t=Su(n.type,null,l,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!ro(t,a)){var o=u.memoizedProps;if(n=n.compare,n=n!==null?n:ya,n(o,l)&&t.ref===e.ref)return $e(t,e,a)}return e.flags|=1,t=Ve(u,l),t.ref=e.ref,t.return=e,e.child=t}function Lf(t,e,n,l,a){if(t!==null){var u=t.memoizedProps;if(ya(u,l)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=l=u,ro(t,a))(t.flags&131072)!==0&&(Xt=!0);else return e.lanes=t.lanes,$e(t,e,a)}return no(t,e,n,l,a)}function Xf(t,e,n,l){var a=l.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,t!==null){for(l=e.child=t.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~u}else l=0,e.child=null;return Qf(t,e,u,n,l)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Tu(e,u!==null?u.cachePool:null),u!==null?Vs(e,u):Ri(),Zs(e);else return l=e.lanes=536870912,Qf(t,e,u!==null?u.baseLanes|n:n,n,l)}else u!==null?(Tu(e,u.cachePool),Vs(e,u),An(),e.memoizedState=null):(t!==null&&Tu(e,null),Ri(),An());return It(t,e,a,n),e.child}function Ma(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Qf(t,e,n,l,a){var u=Ci();return u=u===null?null:{parent:Gt._currentValue,pool:u},e.memoizedState={baseLanes:n,cachePool:u},t!==null&&Tu(e,null),Ri(),Zs(e),t!==null&&_l(t,e,l,!0),e.childLanes=a,null}function Gu(t,e){return e=Xu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Vf(t,e,n){return el(e,t.child,null,n),t=Gu(e,e.pendingProps),t.flags|=2,ye(e),e.memoizedState=null,t}function Dy(t,e,n){var l=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(vt){if(l.mode==="hidden")return t=Gu(e,l),e.lanes=536870912,Ma(null,t);if(Ui(e),(t=Mt)?(t=nm(t,Oe),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:vn!==null?{id:He,overflow:Be}:null,retryLane:536870912,hydrationErrors:null},n=Cs(t),n.return=e,e.child=n,$t=e,Mt=null)):t=null,t===null)throw gn(e);return e.lanes=536870912,null}return Gu(e,l)}var u=t.memoizedState;if(u!==null){var o=u.dehydrated;if(Ui(e),a)if(e.flags&256)e.flags&=-257,e=Vf(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(i(558));else if(Xt||_l(t,e,n,!1),a=(n&t.childLanes)!==0,Xt||a){if(l=_t,l!==null&&(o=jr(l,n),o!==0&&o!==u.retryLane))throw u.retryLane=o,kn(t,o),re(l,t,o),eo;Fu(),e=Vf(t,e,n)}else t=u.treeContext,Mt=_e(o.nextSibling),$t=e,vt=!0,yn=null,Oe=!1,t!==null&&_s(e,t),e=Gu(e,l),e.flags|=4096;return e}return t=Ve(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Lu(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function no(t,e,n,l,a){return Fn(e),n=Hi(t,e,n,l,void 0,a),l=Bi(),t!==null&&!Xt?(Yi(t,e,a),$e(t,e,a)):(vt&&l&&gi(e),e.flags|=1,It(t,e,n,a),e.child)}function Zf(t,e,n,l,a,u){return Fn(e),e.updateQueue=null,n=ks(e,l,n,a),Ks(t),l=Bi(),t!==null&&!Xt?(Yi(t,e,u),$e(t,e,u)):(vt&&l&&gi(e),e.flags|=1,It(t,e,n,u),e.child)}function Kf(t,e,n,l,a){if(Fn(e),e.stateNode===null){var u=zl,o=n.contextType;typeof o=="object"&&o!==null&&(u=Ft(o)),u=new n(l,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Pi,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=l,u.state=e.memoizedState,u.refs={},Di(e),o=n.contextType,u.context=typeof o=="object"&&o!==null?Ft(o):zl,u.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ii(e,n,o,l),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(o=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),o!==u.state&&Pi.enqueueReplaceState(u,u.state,null),Ca(e,l,u,a),za(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){u=e.stateNode;var f=e.memoizedProps,v=ll(n,f);u.props=v;var T=u.context,N=n.contextType;o=zl,typeof N=="object"&&N!==null&&(o=Ft(N));var U=n.getDerivedStateFromProps;N=typeof U=="function"||typeof u.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f||T!==o)&&Rf(e,u,l,o),bn=!1;var z=e.memoizedState;u.state=z,Ca(e,l,u,a),za(),T=e.memoizedState,f||z!==T||bn?(typeof U=="function"&&(Ii(e,n,U,l),T=e.memoizedState),(v=bn||Mf(e,n,v,l,z,T,o))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=T),u.props=l,u.state=T,u.context=o,l=v):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{u=e.stateNode,_i(t,e),o=e.memoizedProps,N=ll(n,o),u.props=N,U=e.pendingProps,z=u.context,T=n.contextType,v=zl,typeof T=="object"&&T!==null&&(v=Ft(T)),f=n.getDerivedStateFromProps,(T=typeof f=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o!==U||z!==v)&&Rf(e,u,l,v),bn=!1,z=e.memoizedState,u.state=z,Ca(e,l,u,a),za();var O=e.memoizedState;o!==U||z!==O||bn||t!==null&&t.dependencies!==null&&Eu(t.dependencies)?(typeof f=="function"&&(Ii(e,n,f,l),O=e.memoizedState),(N=bn||Mf(e,n,N,l,z,O,v)||t!==null&&t.dependencies!==null&&Eu(t.dependencies))?(T||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,O,v),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,O,v)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||o===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=O),u.props=l,u.state=O,u.context=v,l=N):(typeof u.componentDidUpdate!="function"||o===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),l=!1)}return u=l,Lu(t,e),l=(e.flags&128)!==0,u||l?(u=e.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&l?(e.child=el(e,t.child,null,a),e.child=el(e,null,n,a)):It(t,e,n,a),e.memoizedState=u.state,t=e.child):t=$e(t,e,a),t}function kf(t,e,n,l){return Wn(),e.flags|=256,It(t,e,n,l),e.child}var lo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ao(t){return{baseLanes:t,cachePool:ws()}}function uo(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=pe),t}function Jf(t,e,n){var l=e.pendingProps,a=!1,u=(e.flags&128)!==0,o;if((o=u)||(o=t!==null&&t.memoizedState===null?!1:(Bt.current&2)!==0),o&&(a=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(vt){if(a?En(e):An(),(t=Mt)?(t=nm(t,Oe),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:vn!==null?{id:He,overflow:Be}:null,retryLane:536870912,hydrationErrors:null},n=Cs(t),n.return=e,e.child=n,$t=e,Mt=null)):t=null,t===null)throw gn(e);return Xo(t)?e.lanes=32:e.lanes=536870912,null}var f=l.children;return l=l.fallback,a?(An(),a=e.mode,f=Xu({mode:"hidden",children:f},a),l=Jn(l,a,n,null),f.return=e,l.return=e,f.sibling=l,e.child=f,l=e.child,l.memoizedState=ao(n),l.childLanes=uo(t,o,n),e.memoizedState=lo,Ma(null,l)):(En(e),co(e,f))}var v=t.memoizedState;if(v!==null&&(f=v.dehydrated,f!==null)){if(u)e.flags&256?(En(e),e.flags&=-257,e=io(t,e,n)):e.memoizedState!==null?(An(),e.child=t.child,e.flags|=128,e=null):(An(),f=l.fallback,a=e.mode,l=Xu({mode:"visible",children:l.children},a),f=Jn(f,a,n,null),f.flags|=2,l.return=e,f.return=e,l.sibling=f,e.child=l,el(e,t.child,null,n),l=e.child,l.memoizedState=ao(n),l.childLanes=uo(t,o,n),e.memoizedState=lo,e=Ma(null,l));else if(En(e),Xo(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var T=o.dgst;o=T,l=Error(i(419)),l.stack="",l.digest=o,ba({value:l,source:null,stack:null}),e=io(t,e,n)}else if(Xt||_l(t,e,n,!1),o=(n&t.childLanes)!==0,Xt||o){if(o=_t,o!==null&&(l=jr(o,n),l!==0&&l!==v.retryLane))throw v.retryLane=l,kn(t,l),re(o,t,l),eo;Lo(f)||Fu(),e=io(t,e,n)}else Lo(f)?(e.flags|=192,e.child=t.child,e=null):(t=v.treeContext,Mt=_e(f.nextSibling),$t=e,vt=!0,yn=null,Oe=!1,t!==null&&_s(e,t),e=co(e,l.children),e.flags|=4096);return e}return a?(An(),f=l.fallback,a=e.mode,v=t.child,T=v.sibling,l=Ve(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,T!==null?f=Ve(T,f):(f=Jn(f,a,n,null),f.flags|=2),f.return=e,l.return=e,l.sibling=f,e.child=l,Ma(null,l),l=e.child,f=t.child.memoizedState,f===null?f=ao(n):(a=f.cachePool,a!==null?(v=Gt._currentValue,a=a.parent!==v?{parent:v,pool:v}:a):a=ws(),f={baseLanes:f.baseLanes|n,cachePool:a}),l.memoizedState=f,l.childLanes=uo(t,o,n),e.memoizedState=lo,Ma(t.child,l)):(En(e),n=t.child,t=n.sibling,n=Ve(n,{mode:"visible",children:l.children}),n.return=e,n.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=n,e.memoizedState=null,n)}function co(t,e){return e=Xu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Xu(t,e){return t=he(22,t,null,e),t.lanes=0,t}function io(t,e,n){return el(e,t.child,null,n),t=co(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Wf(t,e,n){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Ei(t.return,e,n)}function oo(t,e,n,l,a,u){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:u}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=n,o.tailMode=a,o.treeForkCount=u)}function $f(t,e,n){var l=e.pendingProps,a=l.revealOrder,u=l.tail;l=l.children;var o=Bt.current,f=(o&2)!==0;if(f?(o=o&1|2,e.flags|=128):o&=1,Y(Bt,o),It(t,e,l,n),l=vt?pa:0,!f&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wf(t,n,e);else if(t.tag===19)Wf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&Nu(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),oo(e,!1,a,n,u,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Nu(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}oo(e,!0,n,null,u,l);break;case"together":oo(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function $e(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(_l(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(i(153));if(e.child!==null){for(t=e.child,n=Ve(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ve(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ro(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Eu(t)))}function _y(t,e,n){switch(e.tag){case 3:Kt(e,e.stateNode.containerInfo),pn(e,Gt,t.memoizedState.cache),Wn();break;case 27:case 5:we(e);break;case 4:Kt(e,e.stateNode.containerInfo);break;case 10:pn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Ui(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(En(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Jf(t,e,n):(En(e),t=$e(t,e,n),t!==null?t.sibling:null);En(e);break;case 19:var a=(t.flags&128)!==0;if(l=(n&e.childLanes)!==0,l||(_l(t,e,n,!1),l=(n&e.childLanes)!==0),a){if(l)return $f(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Y(Bt,Bt.current),l)break;return null;case 22:return e.lanes=0,Xf(t,e,n,e.pendingProps);case 24:pn(e,Gt,t.memoizedState.cache)}return $e(t,e,n)}function Ff(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Xt=!0;else{if(!ro(t,n)&&(e.flags&128)===0)return Xt=!1,_y(t,e,n);Xt=(t.flags&131072)!==0}else Xt=!1,vt&&(e.flags&1048576)!==0&&Ds(e,pa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=Pn(e.elementType),e.type=t,typeof t=="function")hi(t)?(l=ll(t,l),e.tag=1,e=Kf(null,e,t,l,n)):(e.tag=0,e=no(null,e,t,l,n));else{if(t!=null){var a=t.$$typeof;if(a===et){e.tag=11,e=qf(null,e,t,l,n);break t}else if(a===q){e.tag=14,e=Gf(null,e,t,l,n);break t}}throw e=ee(t)||t,Error(i(306,e,""))}}return e;case 0:return no(t,e,e.type,e.pendingProps,n);case 1:return l=e.type,a=ll(l,e.pendingProps),Kf(t,e,l,a,n);case 3:t:{if(Kt(e,e.stateNode.containerInfo),t===null)throw Error(i(387));l=e.pendingProps;var u=e.memoizedState;a=u.element,_i(t,e),Ca(e,l,null,n);var o=e.memoizedState;if(l=o.cache,pn(e,Gt,l),l!==u.cache&&Ai(e,[Gt],n,!0),za(),l=o.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=kf(t,e,l,n);break t}else if(l!==a){a=Te(Error(i(424)),e),ba(a),e=kf(t,e,l,n);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Mt=_e(t.firstChild),$t=e,vt=!0,yn=null,Oe=!0,n=Ls(e,null,l,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),l===a){e=$e(t,e,n);break t}It(t,e,l,n)}e=e.child}return e;case 26:return Lu(t,e),t===null?(n=om(e.type,null,e.pendingProps,null))?e.memoizedState=n:vt||(n=e.type,t=e.pendingProps,l=ac(rt.current).createElement(n),l[Wt]=e,l[le]=t,Pt(l,n,t),kt(l),e.stateNode=l):e.memoizedState=om(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return we(e),t===null&&vt&&(l=e.stateNode=um(e.type,e.pendingProps,rt.current),$t=e,Oe=!0,a=Mt,Mn(e.type)?(Qo=a,Mt=_e(l.firstChild)):Mt=a),It(t,e,e.pendingProps.children,n),Lu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&vt&&((a=l=Mt)&&(l=ug(l,e.type,e.pendingProps,Oe),l!==null?(e.stateNode=l,$t=e,Mt=_e(l.firstChild),Oe=!1,a=!0):a=!1),a||gn(e)),we(e),a=e.type,u=e.pendingProps,o=t!==null?t.memoizedProps:null,l=u.children,Yo(a,u)?l=null:o!==null&&Yo(a,o)&&(e.flags|=32),e.memoizedState!==null&&(a=Hi(t,e,Sy,null,null,n),Ka._currentValue=a),Lu(t,e),It(t,e,l,n),e.child;case 6:return t===null&&vt&&((t=n=Mt)&&(n=cg(n,e.pendingProps,Oe),n!==null?(e.stateNode=n,$t=e,Mt=null,t=!0):t=!1),t||gn(e)),null;case 13:return Jf(t,e,n);case 4:return Kt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=el(e,null,l,n):It(t,e,l,n),e.child;case 11:return qf(t,e,e.type,e.pendingProps,n);case 7:return It(t,e,e.pendingProps,n),e.child;case 8:return It(t,e,e.pendingProps.children,n),e.child;case 12:return It(t,e,e.pendingProps.children,n),e.child;case 10:return l=e.pendingProps,pn(e,e.type,l.value),It(t,e,l.children,n),e.child;case 9:return a=e.type._context,l=e.pendingProps.children,Fn(e),a=Ft(a),l=l(a),e.flags|=1,It(t,e,l,n),e.child;case 14:return Gf(t,e,e.type,e.pendingProps,n);case 15:return Lf(t,e,e.type,e.pendingProps,n);case 19:return $f(t,e,n);case 31:return Dy(t,e,n);case 22:return Xf(t,e,n,e.pendingProps);case 24:return Fn(e),l=Ft(Gt),t===null?(a=Ci(),a===null&&(a=_t,u=Ti(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=n),a=u),e.memoizedState={parent:l,cache:a},Di(e),pn(e,Gt,a)):((t.lanes&n)!==0&&(_i(t,e),Ca(e,null,null,n),za()),a=t.memoizedState,u=e.memoizedState,a.parent!==l?(a={parent:l,cache:l},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),pn(e,Gt,l)):(l=u.cache,pn(e,Gt,l),l!==a.cache&&Ai(e,[Gt],n,!0))),It(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(i(156,e.tag))}function Fe(t){t.flags|=4}function so(t,e,n,l,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(Td())t.flags|=8192;else throw tl=Cu,Oi}else t.flags&=-16777217}function If(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!mm(e))if(Td())t.flags|=8192;else throw tl=Cu,Oi}function Qu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Nr():536870912,t.lanes|=e,Ll|=e)}function Ra(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,l=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=l,t.childLanes=n,e}function Ny(t,e,n){var l=e.pendingProps;switch(pi(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return Rt(e),null;case 3:return n=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ke(Gt),Nt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Dl(e)?Fe(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Si())),Rt(e),null;case 26:var a=e.type,u=e.memoizedState;return t===null?(Fe(e),u!==null?(Rt(e),If(e,u)):(Rt(e),so(e,a,null,l,n))):u?u!==t.memoizedState?(Fe(e),Rt(e),If(e,u)):(Rt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Fe(e),Rt(e),so(e,a,t,l,n)),null;case 27:if(sn(e),n=rt.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Fe(e);else{if(!l){if(e.stateNode===null)throw Error(i(166));return Rt(e),null}t=X.current,Dl(e)?Ns(e):(t=um(a,l,n),e.stateNode=t,Fe(e))}return Rt(e),null;case 5:if(sn(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Fe(e);else{if(!l){if(e.stateNode===null)throw Error(i(166));return Rt(e),null}if(u=X.current,Dl(e))Ns(e);else{var o=ac(rt.current);switch(u){case 1:u=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=o.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?o.createElement(a,{is:l.is}):o.createElement(a)}}u[Wt]=e,u[le]=l;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)u.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=u;t:switch(Pt(u,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Fe(e)}}return Rt(e),so(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Fe(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(i(166));if(t=rt.current,Dl(e)){if(t=e.stateNode,n=e.memoizedProps,l=null,a=$t,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}t[Wt]=e,t=!!(t.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Jd(t.nodeValue,n)),t||gn(e,!0)}else t=ac(t).createTextNode(l),t[Wt]=e,e.stateNode=t}return Rt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(l=Dl(e),n!==null){if(t===null){if(!l)throw Error(i(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(557));t[Wt]=e}else Wn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Rt(e),t=!1}else n=Si(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(ye(e),e):(ye(e),null);if((e.flags&128)!==0)throw Error(i(558))}return Rt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Dl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!a)throw Error(i(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[Wt]=e}else Wn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Rt(e),a=!1}else a=Si(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(ye(e),e):(ye(e),null)}return ye(e),(e.flags&128)!==0?(e.lanes=n,e):(n=l!==null,t=t!==null&&t.memoizedState!==null,n&&(l=e.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==a&&(l.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Qu(e,e.updateQueue),Rt(e),null);case 4:return Nt(),t===null&&jo(e.stateNode.containerInfo),Rt(e),null;case 10:return ke(e.type),Rt(e),null;case 19:if(j(Bt),l=e.memoizedState,l===null)return Rt(e),null;if(a=(e.flags&128)!==0,u=l.rendering,u===null)if(a)Ra(l,!1);else{if(Ht!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Nu(t),u!==null){for(e.flags|=128,Ra(l,!1),t=u.updateQueue,e.updateQueue=t,Qu(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)zs(n,t),n=n.sibling;return Y(Bt,Bt.current&1|2),vt&&Ze(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&se()>Ju&&(e.flags|=128,a=!0,Ra(l,!1),e.lanes=4194304)}else{if(!a)if(t=Nu(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Qu(e,t),Ra(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!vt)return Rt(e),null}else 2*se()-l.renderingStartTime>Ju&&n!==536870912&&(e.flags|=128,a=!0,Ra(l,!1),e.lanes=4194304);l.isBackwards?(u.sibling=e.child,e.child=u):(t=l.last,t!==null?t.sibling=u:e.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=se(),t.sibling=null,n=Bt.current,Y(Bt,a?n&1|2:n&1),vt&&Ze(e,l.treeForkCount),t):(Rt(e),null);case 22:case 23:return ye(e),ji(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(n&536870912)!==0&&(e.flags&128)===0&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),n=e.updateQueue,n!==null&&Qu(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==n&&(e.flags|=2048),t!==null&&j(In),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ke(Gt),Rt(e),null;case 25:return null;case 30:return null}throw Error(i(156,e.tag))}function My(t,e){switch(pi(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ke(Gt),Nt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return sn(e),null;case 31:if(e.memoizedState!==null){if(ye(e),e.alternate===null)throw Error(i(340));Wn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ye(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(i(340));Wn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return j(Bt),null;case 4:return Nt(),null;case 10:return ke(e.type),null;case 22:case 23:return ye(e),ji(),t!==null&&j(In),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ke(Gt),null;case 25:return null;default:return null}}function Pf(t,e){switch(pi(e),e.tag){case 3:ke(Gt),Nt();break;case 26:case 27:case 5:sn(e);break;case 4:Nt();break;case 31:e.memoizedState!==null&&ye(e);break;case 13:ye(e);break;case 19:j(Bt);break;case 10:ke(e.type);break;case 22:case 23:ye(e),ji(),t!==null&&j(In);break;case 24:ke(Gt)}}function ja(t,e){try{var n=e.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&t)===t){l=void 0;var u=n.create,o=n.inst;l=u(),o.destroy=l}n=n.next}while(n!==a)}}catch(f){Tt(e,e.return,f)}}function Tn(t,e,n){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){var o=l.inst,f=o.destroy;if(f!==void 0){o.destroy=void 0,a=e;var v=n,T=f;try{T()}catch(N){Tt(a,v,N)}}}l=l.next}while(l!==u)}}catch(N){Tt(e,e.return,N)}}function td(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Qs(e,n)}catch(l){Tt(t,t.return,l)}}}function ed(t,e,n){n.props=ll(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(l){Tt(t,e,l)}}function Ua(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof n=="function"?t.refCleanup=n(l):n.current=l}}catch(a){Tt(t,e,a)}}function Ye(t,e){var n=t.ref,l=t.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){Tt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Tt(t,e,a)}else n.current=null}function nd(t){var e=t.type,n=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break t;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){Tt(t,t.return,a)}}function fo(t,e,n){try{var l=t.stateNode;Py(l,t.type,n,e),l[le]=e}catch(a){Tt(t,t.return,a)}}function ld(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Mn(t.type)||t.tag===4}function mo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ld(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Mn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ho(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xe));else if(l!==4&&(l===27&&Mn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(ho(t,e,n),t=t.sibling;t!==null;)ho(t,e,n),t=t.sibling}function Vu(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(l!==4&&(l===27&&Mn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Vu(t,e,n),t=t.sibling;t!==null;)Vu(t,e,n),t=t.sibling}function ad(t){var e=t.stateNode,n=t.memoizedProps;try{for(var l=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Pt(e,l,n),e[Wt]=t,e[le]=n}catch(u){Tt(t,t.return,u)}}var Ie=!1,Qt=!1,vo=!1,ud=typeof WeakSet=="function"?WeakSet:Set,Jt=null;function Ry(t,e){if(t=t.containerInfo,Ho=fc,t=ys(t),ii(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var o=0,f=-1,v=-1,T=0,N=0,U=t,z=null;e:for(;;){for(var O;U!==n||a!==0&&U.nodeType!==3||(f=o+a),U!==u||l!==0&&U.nodeType!==3||(v=o+l),U.nodeType===3&&(o+=U.nodeValue.length),(O=U.firstChild)!==null;)z=U,U=O;for(;;){if(U===t)break e;if(z===n&&++T===a&&(f=o),z===u&&++N===l&&(v=o),(O=U.nextSibling)!==null)break;U=z,z=U.parentNode}U=O}n=f===-1||v===-1?null:{start:f,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bo={focusedElem:t,selectionRange:n},fc=!1,Jt=e;Jt!==null;)if(e=Jt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Jt=t;else for(;Jt!==null;){switch(e=Jt,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,a=u.memoizedProps,u=u.memoizedState,l=n.stateNode;try{var K=ll(n.type,a);t=l.getSnapshotBeforeUpdate(K,u),l.__reactInternalSnapshotBeforeUpdate=t}catch(lt){Tt(n,n.return,lt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Go(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Go(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(i(163))}if(t=e.sibling,t!==null){t.return=e.return,Jt=t;break}Jt=e.return}}function cd(t,e,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:tn(t,n),l&4&&ja(5,n);break;case 1:if(tn(t,n),l&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(o){Tt(n,n.return,o)}else{var a=ll(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){Tt(n,n.return,o)}}l&64&&td(n),l&512&&Ua(n,n.return);break;case 3:if(tn(t,n),l&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Qs(t,e)}catch(o){Tt(n,n.return,o)}}break;case 27:e===null&&l&4&&ad(n);case 26:case 5:tn(t,n),e===null&&l&4&&nd(n),l&512&&Ua(n,n.return);break;case 12:tn(t,n);break;case 31:tn(t,n),l&4&&rd(t,n);break;case 13:tn(t,n),l&4&&sd(t,n),l&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Ly.bind(null,n),ig(t,n))));break;case 22:if(l=n.memoizedState!==null||Ie,!l){e=e!==null&&e.memoizedState!==null||Qt,a=Ie;var u=Qt;Ie=l,(Qt=e)&&!u?en(t,n,(n.subtreeFlags&8772)!==0):tn(t,n),Ie=a,Qt=u}break;case 30:break;default:tn(t,n)}}function id(t){var e=t.alternate;e!==null&&(t.alternate=null,id(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Vc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,ue=!1;function Pe(t,e,n){for(n=n.child;n!==null;)od(t,e,n),n=n.sibling}function od(t,e,n){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(aa,n)}catch{}switch(n.tag){case 26:Qt||Ye(n,e),Pe(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Qt||Ye(n,e);var l=jt,a=ue;Mn(n.type)&&(jt=n.stateNode,ue=!1),Pe(t,e,n),Qa(n.stateNode),jt=l,ue=a;break;case 5:Qt||Ye(n,e);case 6:if(l=jt,a=ue,jt=null,Pe(t,e,n),jt=l,ue=a,jt!==null)if(ue)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(n.stateNode)}catch(u){Tt(n,e,u)}else try{jt.removeChild(n.stateNode)}catch(u){Tt(n,e,u)}break;case 18:jt!==null&&(ue?(t=jt,tm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Wl(t)):tm(jt,n.stateNode));break;case 4:l=jt,a=ue,jt=n.stateNode.containerInfo,ue=!0,Pe(t,e,n),jt=l,ue=a;break;case 0:case 11:case 14:case 15:Tn(2,n,e),Qt||Tn(4,n,e),Pe(t,e,n);break;case 1:Qt||(Ye(n,e),l=n.stateNode,typeof l.componentWillUnmount=="function"&&ed(n,e,l)),Pe(t,e,n);break;case 21:Pe(t,e,n);break;case 22:Qt=(l=Qt)||n.memoizedState!==null,Pe(t,e,n),Qt=l;break;default:Pe(t,e,n)}}function rd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Wl(t)}catch(n){Tt(e,e.return,n)}}}function sd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Wl(t)}catch(n){Tt(e,e.return,n)}}function jy(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new ud),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new ud),e;default:throw Error(i(435,t.tag))}}function Zu(t,e){var n=jy(t);e.forEach(function(l){if(!n.has(l)){n.add(l);var a=Xy.bind(null,t,l);l.then(a,a)}})}function ce(t,e){var n=e.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],u=t,o=e,f=o;t:for(;f!==null;){switch(f.tag){case 27:if(Mn(f.type)){jt=f.stateNode,ue=!1;break t}break;case 5:jt=f.stateNode,ue=!1;break t;case 3:case 4:jt=f.stateNode.containerInfo,ue=!0;break t}f=f.return}if(jt===null)throw Error(i(160));od(u,o,a),jt=null,ue=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)fd(e,t),e=e.sibling}var Re=null;function fd(t,e){var n=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ce(e,t),ie(t),l&4&&(Tn(3,t,t.return),ja(3,t),Tn(5,t,t.return));break;case 1:ce(e,t),ie(t),l&512&&(Qt||n===null||Ye(n,n.return)),l&64&&Ie&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=Re;if(ce(e,t),ie(t),l&512&&(Qt||n===null||Ye(n,n.return)),l&4){var u=n!==null?n.memoizedState:null;if(l=t.memoizedState,n===null)if(l===null)if(t.stateNode===null){t:{l=t.type,n=t.memoizedProps,a=a.ownerDocument||a;e:switch(l){case"title":u=a.getElementsByTagName("title")[0],(!u||u[ia]||u[Wt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(l),a.head.insertBefore(u,a.querySelector("head > title"))),Pt(u,l,n),u[Wt]=t,kt(u),l=u;break t;case"link":var o=fm("link","href",a).get(l+(n.href||""));if(o){for(var f=0;f<o.length;f++)if(u=o[f],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(f,1);break e}}u=a.createElement(l),Pt(u,l,n),a.head.appendChild(u);break;case"meta":if(o=fm("meta","content",a).get(l+(n.content||""))){for(f=0;f<o.length;f++)if(u=o[f],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(f,1);break e}}u=a.createElement(l),Pt(u,l,n),a.head.appendChild(u);break;default:throw Error(i(468,l))}u[Wt]=t,kt(u),l=u}t.stateNode=l}else dm(a,t.type,t.stateNode);else t.stateNode=sm(a,l,t.memoizedProps);else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?dm(a,t.type,t.stateNode):sm(a,l,t.memoizedProps)):l===null&&t.stateNode!==null&&fo(t,t.memoizedProps,n.memoizedProps)}break;case 27:ce(e,t),ie(t),l&512&&(Qt||n===null||Ye(n,n.return)),n!==null&&l&4&&fo(t,t.memoizedProps,n.memoizedProps);break;case 5:if(ce(e,t),ie(t),l&512&&(Qt||n===null||Ye(n,n.return)),t.flags&32){a=t.stateNode;try{pl(a,"")}catch(K){Tt(t,t.return,K)}}l&4&&t.stateNode!=null&&(a=t.memoizedProps,fo(t,a,n!==null?n.memoizedProps:a)),l&1024&&(vo=!0);break;case 6:if(ce(e,t),ie(t),l&4){if(t.stateNode===null)throw Error(i(162));l=t.memoizedProps,n=t.stateNode;try{n.nodeValue=l}catch(K){Tt(t,t.return,K)}}break;case 3:if(ic=null,a=Re,Re=uc(e.containerInfo),ce(e,t),Re=a,ie(t),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Wl(e.containerInfo)}catch(K){Tt(t,t.return,K)}vo&&(vo=!1,dd(t));break;case 4:l=Re,Re=uc(t.stateNode.containerInfo),ce(e,t),ie(t),Re=l;break;case 12:ce(e,t),ie(t);break;case 31:ce(e,t),ie(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Zu(t,l)));break;case 13:ce(e,t),ie(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ku=se()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Zu(t,l)));break;case 22:a=t.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,T=Ie,N=Qt;if(Ie=T||a,Qt=N||v,ce(e,t),Qt=N,Ie=T,ie(t),l&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||v||Ie||Qt||al(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){v=n=e;try{if(u=v.stateNode,a)o=u.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{f=v.stateNode;var U=v.memoizedProps.style,z=U!=null&&U.hasOwnProperty("display")?U.display:null;f.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(K){Tt(v,v.return,K)}}}else if(e.tag===6){if(n===null){v=e;try{v.stateNode.nodeValue=a?"":v.memoizedProps}catch(K){Tt(v,v.return,K)}}}else if(e.tag===18){if(n===null){v=e;try{var O=v.stateNode;a?em(O,!0):em(v.stateNode,!1)}catch(K){Tt(v,v.return,K)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Zu(t,n))));break;case 19:ce(e,t),ie(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Zu(t,l)));break;case 30:break;case 21:break;default:ce(e,t),ie(t)}}function ie(t){var e=t.flags;if(e&2){try{for(var n,l=t.return;l!==null;){if(ld(l)){n=l;break}l=l.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode,u=mo(t);Vu(t,u,a);break;case 5:var o=n.stateNode;n.flags&32&&(pl(o,""),n.flags&=-33);var f=mo(t);Vu(t,f,o);break;case 3:case 4:var v=n.stateNode.containerInfo,T=mo(t);ho(t,T,v);break;default:throw Error(i(161))}}catch(N){Tt(t,t.return,N)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;dd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function tn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)cd(t,e.alternate,e),e=e.sibling}function al(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Tn(4,e,e.return),al(e);break;case 1:Ye(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&ed(e,e.return,n),al(e);break;case 27:Qa(e.stateNode);case 26:case 5:Ye(e,e.return),al(e);break;case 22:e.memoizedState===null&&al(e);break;case 30:al(e);break;default:al(e)}t=t.sibling}}function en(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,a=t,u=e,o=u.flags;switch(u.tag){case 0:case 11:case 15:en(a,u,n),ja(4,u);break;case 1:if(en(a,u,n),l=u,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(T){Tt(l,l.return,T)}if(l=u,a=l.updateQueue,a!==null){var f=l.stateNode;try{var v=a.shared.hiddenCallbacks;if(v!==null)for(a.shared.hiddenCallbacks=null,a=0;a<v.length;a++)Xs(v[a],f)}catch(T){Tt(l,l.return,T)}}n&&o&64&&td(u),Ua(u,u.return);break;case 27:ad(u);case 26:case 5:en(a,u,n),n&&l===null&&o&4&&nd(u),Ua(u,u.return);break;case 12:en(a,u,n);break;case 31:en(a,u,n),n&&o&4&&rd(a,u);break;case 13:en(a,u,n),n&&o&4&&sd(a,u);break;case 22:u.memoizedState===null&&en(a,u,n),Ua(u,u.return);break;case 30:break;default:en(a,u,n)}e=e.sibling}}function yo(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Sa(n))}function go(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Sa(t))}function je(t,e,n,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)md(t,e,n,l),e=e.sibling}function md(t,e,n,l){var a=e.flags;switch(e.tag){case 0:case 11:case 15:je(t,e,n,l),a&2048&&ja(9,e);break;case 1:je(t,e,n,l);break;case 3:je(t,e,n,l),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Sa(t)));break;case 12:if(a&2048){je(t,e,n,l),t=e.stateNode;try{var u=e.memoizedProps,o=u.id,f=u.onPostCommit;typeof f=="function"&&f(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(v){Tt(e,e.return,v)}}else je(t,e,n,l);break;case 31:je(t,e,n,l);break;case 13:je(t,e,n,l);break;case 23:break;case 22:u=e.stateNode,o=e.alternate,e.memoizedState!==null?u._visibility&2?je(t,e,n,l):wa(t,e):u._visibility&2?je(t,e,n,l):(u._visibility|=2,Yl(t,e,n,l,(e.subtreeFlags&10256)!==0||!1)),a&2048&&yo(o,e);break;case 24:je(t,e,n,l),a&2048&&go(e.alternate,e);break;default:je(t,e,n,l)}}function Yl(t,e,n,l,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,o=e,f=n,v=l,T=o.flags;switch(o.tag){case 0:case 11:case 15:Yl(u,o,f,v,a),ja(8,o);break;case 23:break;case 22:var N=o.stateNode;o.memoizedState!==null?N._visibility&2?Yl(u,o,f,v,a):wa(u,o):(N._visibility|=2,Yl(u,o,f,v,a)),a&&T&2048&&yo(o.alternate,o);break;case 24:Yl(u,o,f,v,a),a&&T&2048&&go(o.alternate,o);break;default:Yl(u,o,f,v,a)}e=e.sibling}}function wa(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,l=e,a=l.flags;switch(l.tag){case 22:wa(n,l),a&2048&&yo(l.alternate,l);break;case 24:wa(n,l),a&2048&&go(l.alternate,l);break;default:wa(n,l)}e=e.sibling}}var Ha=8192;function ql(t,e,n){if(t.subtreeFlags&Ha)for(t=t.child;t!==null;)hd(t,e,n),t=t.sibling}function hd(t,e,n){switch(t.tag){case 26:ql(t,e,n),t.flags&Ha&&t.memoizedState!==null&&bg(n,Re,t.memoizedState,t.memoizedProps);break;case 5:ql(t,e,n);break;case 3:case 4:var l=Re;Re=uc(t.stateNode.containerInfo),ql(t,e,n),Re=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Ha,Ha=16777216,ql(t,e,n),Ha=l):ql(t,e,n));break;default:ql(t,e,n)}}function vd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ba(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];Jt=l,gd(l,t)}vd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yd(t),t=t.sibling}function yd(t){switch(t.tag){case 0:case 11:case 15:Ba(t),t.flags&2048&&Tn(9,t,t.return);break;case 3:Ba(t);break;case 12:Ba(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ku(t)):Ba(t);break;default:Ba(t)}}function Ku(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];Jt=l,gd(l,t)}vd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Tn(8,e,e.return),Ku(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Ku(e));break;default:Ku(e)}t=t.sibling}}function gd(t,e){for(;Jt!==null;){var n=Jt;switch(n.tag){case 0:case 11:case 15:Tn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Sa(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Jt=l;else t:for(n=t;Jt!==null;){l=Jt;var a=l.sibling,u=l.return;if(id(l),l===n){Jt=null;break t}if(a!==null){a.return=u,Jt=a;break t}Jt=u}}}var Uy={getCacheForType:function(t){var e=Ft(Gt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Ft(Gt).controller.signal}},wy=typeof WeakMap=="function"?WeakMap:Map,xt=0,_t=null,ft=null,mt=0,At=0,ge=null,zn=!1,Gl=!1,po=!1,nn=0,Ht=0,Cn=0,ul=0,bo=0,pe=0,Ll=0,Ya=null,oe=null,So=!1,ku=0,pd=0,Ju=1/0,Wu=null,On=null,Vt=0,Dn=null,Xl=null,ln=0,xo=0,Eo=null,bd=null,qa=0,Ao=null;function be(){return(xt&2)!==0&&mt!==0?mt&-mt:_.T!==null?_o():Ur()}function Sd(){if(pe===0)if((mt&536870912)===0||vt){var t=lu;lu<<=1,(lu&3932160)===0&&(lu=262144),pe=t}else pe=536870912;return t=ve.current,t!==null&&(t.flags|=32),pe}function re(t,e,n){(t===_t&&(At===2||At===9)||t.cancelPendingCommit!==null)&&(Ql(t,0),_n(t,mt,pe,!1)),ca(t,n),((xt&2)===0||t!==_t)&&(t===_t&&((xt&2)===0&&(ul|=n),Ht===4&&_n(t,mt,pe,!1)),qe(t))}function xd(t,e,n){if((xt&6)!==0)throw Error(i(327));var l=!n&&(e&127)===0&&(e&t.expiredLanes)===0||ua(t,e),a=l?Yy(t,e):zo(t,e,!0),u=l;do{if(a===0){Gl&&!l&&_n(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!Hy(n)){a=zo(t,e,!1),u=!1;continue}if(a===2){if(u=e,t.errorRecoveryDisabledLanes&u)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var f=t;a=Ya;var v=f.current.memoizedState.isDehydrated;if(v&&(Ql(f,o).flags|=256),o=zo(f,o,!1),o!==2){if(po&&!v){f.errorRecoveryDisabledLanes|=u,ul|=u,a=4;break t}u=oe,oe=a,u!==null&&(oe===null?oe=u:oe.push.apply(oe,u))}a=o}if(u=!1,a!==2)continue}}if(a===1){Ql(t,0),_n(t,e,0,!0);break}t:{switch(l=t,u=a,u){case 0:case 1:throw Error(i(345));case 4:if((e&4194048)!==e)break;case 6:_n(l,e,pe,!zn);break t;case 2:oe=null;break;case 3:case 5:break;default:throw Error(i(329))}if((e&62914560)===e&&(a=ku+300-se(),10<a)){if(_n(l,e,pe,!zn),uu(l,0,!0)!==0)break t;ln=e,l.timeoutHandle=Id(Ed.bind(null,l,n,oe,Wu,So,e,pe,ul,Ll,zn,u,"Throttled",-0,0),a);break t}Ed(l,n,oe,Wu,So,e,pe,ul,Ll,zn,u,null,-0,0)}}break}while(!0);qe(t)}function Ed(t,e,n,l,a,u,o,f,v,T,N,U,z,O){if(t.timeoutHandle=-1,U=e.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xe},hd(e,u,U);var K=(u&62914560)===u?ku-se():(u&4194048)===u?pd-se():0;if(K=Sg(U,K),K!==null){ln=u,t.cancelPendingCommit=K(Nd.bind(null,t,e,u,n,l,a,o,f,v,N,U,null,z,O)),_n(t,u,o,!T);return}}Nd(t,e,u,n,l,a,o,f,v)}function Hy(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],u=a.getSnapshot;a=a.value;try{if(!me(u(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _n(t,e,n,l){e&=~bo,e&=~ul,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var a=e;0<a;){var u=31-de(a),o=1<<u;l[u]=-1,a&=~o}n!==0&&Mr(t,n,e)}function $u(){return(xt&6)===0?(Ga(0),!1):!0}function To(){if(ft!==null){if(At===0)var t=ft.return;else t=ft,Ke=$n=null,qi(t),jl=null,Ea=0,t=ft;for(;t!==null;)Pf(t.alternate,t),t=t.return;ft=null}}function Ql(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,ng(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),ln=0,To(),_t=t,ft=n=Ve(t.current,null),mt=e,At=0,ge=null,zn=!1,Gl=ua(t,e),po=!1,Ll=pe=bo=ul=Cn=Ht=0,oe=Ya=null,So=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var a=31-de(l),u=1<<a;e|=t[a],l&=~u}return nn=e,gu(),n}function Ad(t,e){it=null,_.H=Na,e===Rl||e===zu?(e=Ys(),At=3):e===Oi?(e=Ys(),At=4):At=e===eo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ge=e,ft===null&&(Ht=1,qu(t,Te(e,t.current)))}function Td(){var t=ve.current;return t===null?!0:(mt&4194048)===mt?De===null:(mt&62914560)===mt||(mt&536870912)!==0?t===De:!1}function zd(){var t=_.H;return _.H=Na,t===null?Na:t}function Cd(){var t=_.A;return _.A=Uy,t}function Fu(){Ht=4,zn||(mt&4194048)!==mt&&ve.current!==null||(Gl=!0),(Cn&134217727)===0&&(ul&134217727)===0||_t===null||_n(_t,mt,pe,!1)}function zo(t,e,n){var l=xt;xt|=2;var a=zd(),u=Cd();(_t!==t||mt!==e)&&(Wu=null,Ql(t,e)),e=!1;var o=Ht;t:do try{if(At!==0&&ft!==null){var f=ft,v=ge;switch(At){case 8:To(),o=6;break t;case 3:case 2:case 9:case 6:ve.current===null&&(e=!0);var T=At;if(At=0,ge=null,Vl(t,f,v,T),n&&Gl){o=0;break t}break;default:T=At,At=0,ge=null,Vl(t,f,v,T)}}By(),o=Ht;break}catch(N){Ad(t,N)}while(!0);return e&&t.shellSuspendCounter++,Ke=$n=null,xt=l,_.H=a,_.A=u,ft===null&&(_t=null,mt=0,gu()),o}function By(){for(;ft!==null;)Od(ft)}function Yy(t,e){var n=xt;xt|=2;var l=zd(),a=Cd();_t!==t||mt!==e?(Wu=null,Ju=se()+500,Ql(t,e)):Gl=ua(t,e);t:do try{if(At!==0&&ft!==null){e=ft;var u=ge;e:switch(At){case 1:At=0,ge=null,Vl(t,e,u,1);break;case 2:case 9:if(Hs(u)){At=0,ge=null,Dd(e);break}e=function(){At!==2&&At!==9||_t!==t||(At=7),qe(t)},u.then(e,e);break t;case 3:At=7;break t;case 4:At=5;break t;case 7:Hs(u)?(At=0,ge=null,Dd(e)):(At=0,ge=null,Vl(t,e,u,7));break;case 5:var o=null;switch(ft.tag){case 26:o=ft.memoizedState;case 5:case 27:var f=ft;if(o?mm(o):f.stateNode.complete){At=0,ge=null;var v=f.sibling;if(v!==null)ft=v;else{var T=f.return;T!==null?(ft=T,Iu(T)):ft=null}break e}}At=0,ge=null,Vl(t,e,u,5);break;case 6:At=0,ge=null,Vl(t,e,u,6);break;case 8:To(),Ht=6;break t;default:throw Error(i(462))}}qy();break}catch(N){Ad(t,N)}while(!0);return Ke=$n=null,_.H=l,_.A=a,xt=n,ft!==null?0:(_t=null,mt=0,gu(),Ht)}function qy(){for(;ft!==null&&!ov();)Od(ft)}function Od(t){var e=Ff(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?Iu(t):ft=e}function Dd(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Zf(n,e,e.pendingProps,e.type,void 0,mt);break;case 11:e=Zf(n,e,e.pendingProps,e.type.render,e.ref,mt);break;case 5:qi(e);default:Pf(n,e),e=ft=zs(e,nn),e=Ff(n,e,nn)}t.memoizedProps=t.pendingProps,e===null?Iu(t):ft=e}function Vl(t,e,n,l){Ke=$n=null,qi(e),jl=null,Ea=0;var a=e.return;try{if(Oy(t,a,e,n,mt)){Ht=1,qu(t,Te(n,t.current)),ft=null;return}}catch(u){if(a!==null)throw ft=a,u;Ht=1,qu(t,Te(n,t.current)),ft=null;return}e.flags&32768?(vt||l===1?t=!0:Gl||(mt&536870912)!==0?t=!1:(zn=t=!0,(l===2||l===9||l===3||l===6)&&(l=ve.current,l!==null&&l.tag===13&&(l.flags|=16384))),_d(e,t)):Iu(e)}function Iu(t){var e=t;do{if((e.flags&32768)!==0){_d(e,zn);return}t=e.return;var n=Ny(e.alternate,e,nn);if(n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);Ht===0&&(Ht=5)}function _d(t,e){do{var n=My(t.alternate,t);if(n!==null){n.flags&=32767,ft=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ft=t;return}ft=t=n}while(t!==null);Ht=6,ft=null}function Nd(t,e,n,l,a,u,o,f,v){t.cancelPendingCommit=null;do Pu();while(Vt!==0);if((xt&6)!==0)throw Error(i(327));if(e!==null){if(e===t.current)throw Error(i(177));if(u=e.lanes|e.childLanes,u|=di,pv(t,n,u,o,f,v),t===_t&&(ft=_t=null,mt=0),Xl=e,Dn=t,ln=n,xo=u,Eo=a,bd=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Qy(eu,function(){return wd(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,a=G.p,G.p=2,o=xt,xt|=4;try{Ry(t,e,n)}finally{xt=o,G.p=a,_.T=l}}Vt=1,Md(),Rd(),jd()}}function Md(){if(Vt===1){Vt=0;var t=Dn,e=Xl,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var l=G.p;G.p=2;var a=xt;xt|=4;try{fd(e,t);var u=Bo,o=ys(t.containerInfo),f=u.focusedElem,v=u.selectionRange;if(o!==f&&f&&f.ownerDocument&&vs(f.ownerDocument.documentElement,f)){if(v!==null&&ii(f)){var T=v.start,N=v.end;if(N===void 0&&(N=T),"selectionStart"in f)f.selectionStart=T,f.selectionEnd=Math.min(N,f.value.length);else{var U=f.ownerDocument||document,z=U&&U.defaultView||window;if(z.getSelection){var O=z.getSelection(),K=f.textContent.length,lt=Math.min(v.start,K),Ot=v.end===void 0?lt:Math.min(v.end,K);!O.extend&&lt>Ot&&(o=Ot,Ot=lt,lt=o);var E=hs(f,lt),p=hs(f,Ot);if(E&&p&&(O.rangeCount!==1||O.anchorNode!==E.node||O.anchorOffset!==E.offset||O.focusNode!==p.node||O.focusOffset!==p.offset)){var A=U.createRange();A.setStart(E.node,E.offset),O.removeAllRanges(),lt>Ot?(O.addRange(A),O.extend(p.node,p.offset)):(A.setEnd(p.node,p.offset),O.addRange(A))}}}}for(U=[],O=f;O=O.parentNode;)O.nodeType===1&&U.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<U.length;f++){var R=U[f];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}fc=!!Ho,Bo=Ho=null}finally{xt=a,G.p=l,_.T=n}}t.current=e,Vt=2}}function Rd(){if(Vt===2){Vt=0;var t=Dn,e=Xl,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var l=G.p;G.p=2;var a=xt;xt|=4;try{cd(t,e.alternate,e)}finally{xt=a,G.p=l,_.T=n}}Vt=3}}function jd(){if(Vt===4||Vt===3){Vt=0,rv();var t=Dn,e=Xl,n=ln,l=bd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Vt=5:(Vt=0,Xl=Dn=null,Ud(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(On=null),Xc(n),e=e.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(aa,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=_.T,a=G.p,G.p=2,_.T=null;try{for(var u=t.onRecoverableError,o=0;o<l.length;o++){var f=l[o];u(f.value,{componentStack:f.stack})}}finally{_.T=e,G.p=a}}(ln&3)!==0&&Pu(),qe(t),a=t.pendingLanes,(n&261930)!==0&&(a&42)!==0?t===Ao?qa++:(qa=0,Ao=t):qa=0,Ga(0)}}function Ud(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Sa(e)))}function Pu(){return Md(),Rd(),jd(),wd()}function wd(){if(Vt!==5)return!1;var t=Dn,e=xo;xo=0;var n=Xc(ln),l=_.T,a=G.p;try{G.p=32>n?32:n,_.T=null,n=Eo,Eo=null;var u=Dn,o=ln;if(Vt=0,Xl=Dn=null,ln=0,(xt&6)!==0)throw Error(i(331));var f=xt;if(xt|=4,yd(u.current),md(u,u.current,o,n),xt=f,Ga(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(aa,u)}catch{}return!0}finally{G.p=a,_.T=l,Ud(t,e)}}function Hd(t,e,n){e=Te(n,e),e=to(t.stateNode,e,2),t=xn(t,e,2),t!==null&&(ca(t,2),qe(t))}function Tt(t,e,n){if(t.tag===3)Hd(t,t,n);else for(;e!==null;){if(e.tag===3){Hd(e,t,n);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(On===null||!On.has(l))){t=Te(n,t),n=Bf(2),l=xn(e,n,2),l!==null&&(Yf(n,l,e,t),ca(l,2),qe(l));break}}e=e.return}}function Co(t,e,n){var l=t.pingCache;if(l===null){l=t.pingCache=new wy;var a=new Set;l.set(e,a)}else a=l.get(e),a===void 0&&(a=new Set,l.set(e,a));a.has(n)||(po=!0,a.add(n),t=Gy.bind(null,t,e,n),e.then(t,t))}function Gy(t,e,n){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,_t===t&&(mt&n)===n&&(Ht===4||Ht===3&&(mt&62914560)===mt&&300>se()-ku?(xt&2)===0&&Ql(t,0):bo|=n,Ll===mt&&(Ll=0)),qe(t)}function Bd(t,e){e===0&&(e=Nr()),t=kn(t,e),t!==null&&(ca(t,e),qe(t))}function Ly(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bd(t,n)}function Xy(t,e){var n=0;switch(t.tag){case 31:case 13:var l=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(i(314))}l!==null&&l.delete(e),Bd(t,n)}function Qy(t,e){return Yc(t,e)}var tc=null,Zl=null,Oo=!1,ec=!1,Do=!1,Nn=0;function qe(t){t!==Zl&&t.next===null&&(Zl===null?tc=Zl=t:Zl=Zl.next=t),ec=!0,Oo||(Oo=!0,Zy())}function Ga(t,e){if(!Do&&ec){Do=!0;do for(var n=!1,l=tc;l!==null;){if(t!==0){var a=l.pendingLanes;if(a===0)var u=0;else{var o=l.suspendedLanes,f=l.pingedLanes;u=(1<<31-de(42|t)+1)-1,u&=a&~(o&~f),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Ld(l,u))}else u=mt,u=uu(l,l===_t?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||ua(l,u)||(n=!0,Ld(l,u));l=l.next}while(n);Do=!1}}function Vy(){Yd()}function Yd(){ec=Oo=!1;var t=0;Nn!==0&&eg()&&(t=Nn);for(var e=se(),n=null,l=tc;l!==null;){var a=l.next,u=qd(l,e);u===0?(l.next=null,n===null?tc=a:n.next=a,a===null&&(Zl=n)):(n=l,(t!==0||(u&3)!==0)&&(ec=!0)),l=a}Vt!==0&&Vt!==5||Ga(t),Nn!==0&&(Nn=0)}function qd(t,e){for(var n=t.suspendedLanes,l=t.pingedLanes,a=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var o=31-de(u),f=1<<o,v=a[o];v===-1?((f&n)===0||(f&l)!==0)&&(a[o]=gv(f,e)):v<=e&&(t.expiredLanes|=f),u&=~f}if(e=_t,n=mt,n=uu(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,n===0||t===e&&(At===2||At===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&qc(l),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||ua(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(l!==null&&qc(l),Xc(n)){case 2:case 8:n=Dr;break;case 32:n=eu;break;case 268435456:n=_r;break;default:n=eu}return l=Gd.bind(null,t),n=Yc(n,l),t.callbackPriority=e,t.callbackNode=n,e}return l!==null&&l!==null&&qc(l),t.callbackPriority=2,t.callbackNode=null,2}function Gd(t,e){if(Vt!==0&&Vt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Pu()&&t.callbackNode!==n)return null;var l=mt;return l=uu(t,t===_t?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(xd(t,l,e),qd(t,se()),t.callbackNode!=null&&t.callbackNode===n?Gd.bind(null,t):null)}function Ld(t,e){if(Pu())return null;xd(t,e,!0)}function Zy(){lg(function(){(xt&6)!==0?Yc(Or,Vy):Yd()})}function _o(){if(Nn===0){var t=Nl;t===0&&(t=nu,nu<<=1,(nu&261888)===0&&(nu=256)),Nn=t}return Nn}function Xd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ru(""+t)}function Qd(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Ky(t,e,n,l,a){if(e==="submit"&&n&&n.stateNode===a){var u=Xd((a[le]||null).action),o=l.submitter;o&&(e=(e=o[le]||null)?Xd(e.formAction):o.getAttribute("formAction"),e!==null&&(u=e,o=null));var f=new mu("action","action",null,l,a);t.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Nn!==0){var v=o?Qd(a,o):new FormData(a);Ji(n,{pending:!0,data:v,method:a.method,action:u},null,v)}}else typeof u=="function"&&(f.preventDefault(),v=o?Qd(a,o):new FormData(a),Ji(n,{pending:!0,data:v,method:a.method,action:u},u,v))},currentTarget:a}]})}}for(var No=0;No<fi.length;No++){var Mo=fi[No],ky=Mo.toLowerCase(),Jy=Mo[0].toUpperCase()+Mo.slice(1);Me(ky,"on"+Jy)}Me(bs,"onAnimationEnd"),Me(Ss,"onAnimationIteration"),Me(xs,"onAnimationStart"),Me("dblclick","onDoubleClick"),Me("focusin","onFocus"),Me("focusout","onBlur"),Me(sy,"onTransitionRun"),Me(fy,"onTransitionStart"),Me(dy,"onTransitionCancel"),Me(Es,"onTransitionEnd"),yl("onMouseEnter",["mouseout","mouseover"]),yl("onMouseLeave",["mouseout","mouseover"]),yl("onPointerEnter",["pointerout","pointerover"]),yl("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(La));function Vd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var l=t[n],a=l.event;l=l.listeners;t:{var u=void 0;if(e)for(var o=l.length-1;0<=o;o--){var f=l[o],v=f.instance,T=f.currentTarget;if(f=f.listener,v!==u&&a.isPropagationStopped())break t;u=f,a.currentTarget=T;try{u(a)}catch(N){yu(N)}a.currentTarget=null,u=v}else for(o=0;o<l.length;o++){if(f=l[o],v=f.instance,T=f.currentTarget,f=f.listener,v!==u&&a.isPropagationStopped())break t;u=f,a.currentTarget=T;try{u(a)}catch(N){yu(N)}a.currentTarget=null,u=v}}}}function dt(t,e){var n=e[Qc];n===void 0&&(n=e[Qc]=new Set);var l=t+"__bubble";n.has(l)||(Zd(e,t,2,!1),n.add(l))}function Ro(t,e,n){var l=0;e&&(l|=4),Zd(n,t,l,e)}var nc="_reactListening"+Math.random().toString(36).slice(2);function jo(t){if(!t[nc]){t[nc]=!0,Br.forEach(function(n){n!=="selectionchange"&&(Wy.has(n)||Ro(n,!1,t),Ro(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nc]||(e[nc]=!0,Ro("selectionchange",!1,e))}}function Zd(t,e,n,l){switch(Sm(e)){case 2:var a=Ag;break;case 8:a=Tg;break;default:a=Jo}n=a.bind(null,e,n,t),a=void 0,!Ic||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),l?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Uo(t,e,n,l,a){var u=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var f=l.stateNode.containerInfo;if(f===a)break;if(o===4)for(o=l.return;o!==null;){var v=o.tag;if((v===3||v===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;f!==null;){if(o=ml(f),o===null)return;if(v=o.tag,v===5||v===6||v===26||v===27){l=u=o;continue t}f=f.parentNode}}l=l.return}Wr(function(){var T=u,N=$c(n),U=[];t:{var z=As.get(t);if(z!==void 0){var O=mu,K=t;switch(t){case"keypress":if(fu(n)===0)break t;case"keydown":case"keyup":O=Xv;break;case"focusin":K="focus",O=ni;break;case"focusout":K="blur",O=ni;break;case"beforeblur":case"afterblur":O=ni;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Ir;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Zv;break;case bs:case Ss:case xs:O=jv;break;case Es:O=kv;break;case"scroll":case"scrollend":O=Dv;break;case"wheel":O=Wv;break;case"copy":case"cut":case"paste":O=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=ts;break;case"toggle":case"beforetoggle":O=Fv}var lt=(e&4)!==0,Ot=!lt&&(t==="scroll"||t==="scrollend"),E=lt?z!==null?z+"Capture":null:z;lt=[];for(var p=T,A;p!==null;){var R=p;if(A=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||A===null||E===null||(R=ra(p,E),R!=null&&lt.push(Xa(p,R,A))),Ot)break;p=p.return}0<lt.length&&(z=new O(z,K,null,n,N),U.push({event:z,listeners:lt}))}}if((e&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",z&&n!==Wc&&(K=n.relatedTarget||n.fromElement)&&(ml(K)||K[dl]))break t;if((O||z)&&(z=N.window===N?N:(z=N.ownerDocument)?z.defaultView||z.parentWindow:window,O?(K=n.relatedTarget||n.toElement,O=T,K=K?ml(K):null,K!==null&&(Ot=m(K),lt=K.tag,K!==Ot||lt!==5&&lt!==27&&lt!==6)&&(K=null)):(O=null,K=T),O!==K)){if(lt=Ir,R="onMouseLeave",E="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(lt=ts,R="onPointerLeave",E="onPointerEnter",p="pointer"),Ot=O==null?z:oa(O),A=K==null?z:oa(K),z=new lt(R,p+"leave",O,n,N),z.target=Ot,z.relatedTarget=A,R=null,ml(N)===T&&(lt=new lt(E,p+"enter",K,n,N),lt.target=A,lt.relatedTarget=Ot,R=lt),Ot=R,O&&K)e:{for(lt=$y,E=O,p=K,A=0,R=E;R;R=lt(R))A++;R=0;for(var P=p;P;P=lt(P))R++;for(;0<A-R;)E=lt(E),A--;for(;0<R-A;)p=lt(p),R--;for(;A--;){if(E===p||p!==null&&E===p.alternate){lt=E;break e}E=lt(E),p=lt(p)}lt=null}else lt=null;O!==null&&Kd(U,z,O,lt,!1),K!==null&&Ot!==null&&Kd(U,Ot,K,lt,!0)}}t:{if(z=T?oa(T):window,O=z.nodeName&&z.nodeName.toLowerCase(),O==="select"||O==="input"&&z.type==="file")var pt=os;else if(cs(z))if(rs)pt=iy;else{pt=uy;var $=ay}else O=z.nodeName,!O||O.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?T&&Jc(T.elementType)&&(pt=os):pt=cy;if(pt&&(pt=pt(t,T))){is(U,pt,n,N);break t}$&&$(t,z,T),t==="focusout"&&T&&z.type==="number"&&T.memoizedProps.value!=null&&kc(z,"number",z.value)}switch($=T?oa(T):window,t){case"focusin":(cs($)||$.contentEditable==="true")&&(El=$,oi=T,ga=null);break;case"focusout":ga=oi=El=null;break;case"mousedown":ri=!0;break;case"contextmenu":case"mouseup":case"dragend":ri=!1,gs(U,n,N);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":gs(U,n,N)}var ot;if(ai)t:{switch(t){case"compositionstart":var ht="onCompositionStart";break t;case"compositionend":ht="onCompositionEnd";break t;case"compositionupdate":ht="onCompositionUpdate";break t}ht=void 0}else xl?as(t,n)&&(ht="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(ht="onCompositionStart");ht&&(es&&n.locale!=="ko"&&(xl||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&xl&&(ot=$r()):(hn=N,Pc="value"in hn?hn.value:hn.textContent,xl=!0)),$=lc(T,ht),0<$.length&&(ht=new Pr(ht,t,null,n,N),U.push({event:ht,listeners:$}),ot?ht.data=ot:(ot=us(n),ot!==null&&(ht.data=ot)))),(ot=Pv?ty(t,n):ey(t,n))&&(ht=lc(T,"onBeforeInput"),0<ht.length&&($=new Pr("onBeforeInput","beforeinput",null,n,N),U.push({event:$,listeners:ht}),$.data=ot)),Ky(U,t,T,n,N)}Vd(U,e)})}function Xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lc(t,e){for(var n=e+"Capture",l=[];t!==null;){var a=t,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=ra(t,n),a!=null&&l.unshift(Xa(t,a,u)),a=ra(t,e),a!=null&&l.push(Xa(t,a,u))),t.tag===3)return l;t=t.return}return[]}function $y(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Kd(t,e,n,l,a){for(var u=e._reactName,o=[];n!==null&&n!==l;){var f=n,v=f.alternate,T=f.stateNode;if(f=f.tag,v!==null&&v===l)break;f!==5&&f!==26&&f!==27||T===null||(v=T,a?(T=ra(n,u),T!=null&&o.unshift(Xa(n,T,v))):a||(T=ra(n,u),T!=null&&o.push(Xa(n,T,v)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Fy=/\r\n?/g,Iy=/\u0000|\uFFFD/g;function kd(t){return(typeof t=="string"?t:""+t).replace(Fy,`
`).replace(Iy,"")}function Jd(t,e){return e=kd(e),kd(t)===e}function Ct(t,e,n,l,a,u){switch(n){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||pl(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&pl(t,""+l);break;case"className":iu(t,"class",l);break;case"tabIndex":iu(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":iu(t,n,l);break;case"style":kr(t,l,u);break;case"data":if(e!=="object"){iu(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=ru(""+l),t.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Ct(t,e,"name",a.name,a,null),Ct(t,e,"formEncType",a.formEncType,a,null),Ct(t,e,"formMethod",a.formMethod,a,null),Ct(t,e,"formTarget",a.formTarget,a,null)):(Ct(t,e,"encType",a.encType,a,null),Ct(t,e,"method",a.method,a,null),Ct(t,e,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=ru(""+l),t.setAttribute(n,l);break;case"onClick":l!=null&&(t.onclick=Xe);break;case"onScroll":l!=null&&dt("scroll",t);break;case"onScrollEnd":l!=null&&dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));t.innerHTML=n}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}n=ru(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""+l):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":l===!0?t.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,l):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(n,l):t.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(n):t.setAttribute(n,l);break;case"popover":dt("beforetoggle",t),dt("toggle",t),cu(t,"popover",l);break;case"xlinkActuate":Le(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Le(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Le(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Le(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Le(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Le(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Le(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Le(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Le(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":cu(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Cv.get(n)||n,cu(t,n,l))}}function wo(t,e,n,l,a,u){switch(n){case"style":kr(t,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(i(60));t.innerHTML=n}}break;case"children":typeof l=="string"?pl(t,l):(typeof l=="number"||typeof l=="bigint")&&pl(t,""+l);break;case"onScroll":l!=null&&dt("scroll",t);break;case"onScrollEnd":l!=null&&dt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Xe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yr.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),u=t[le]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,a),typeof l=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,l,a);break t}n in t?t[n]=l:l===!0?t.setAttribute(n,""):cu(t,n,l)}}}function Pt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",t),dt("load",t);var l=!1,a=!1,u;for(u in n)if(n.hasOwnProperty(u)){var o=n[u];if(o!=null)switch(u){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,e));default:Ct(t,e,u,o,n,null)}}a&&Ct(t,e,"srcSet",n.srcSet,n,null),l&&Ct(t,e,"src",n.src,n,null);return;case"input":dt("invalid",t);var f=u=o=a=null,v=null,T=null;for(l in n)if(n.hasOwnProperty(l)){var N=n[l];if(N!=null)switch(l){case"name":a=N;break;case"type":o=N;break;case"checked":v=N;break;case"defaultChecked":T=N;break;case"value":u=N;break;case"defaultValue":f=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(i(137,e));break;default:Ct(t,e,l,N,n,null)}}Qr(t,u,f,v,T,o,a,!1);return;case"select":dt("invalid",t),l=o=u=null;for(a in n)if(n.hasOwnProperty(a)&&(f=n[a],f!=null))switch(a){case"value":u=f;break;case"defaultValue":o=f;break;case"multiple":l=f;default:Ct(t,e,a,f,n,null)}e=u,n=o,t.multiple=!!l,e!=null?gl(t,!!l,e,!1):n!=null&&gl(t,!!l,n,!0);return;case"textarea":dt("invalid",t),u=a=l=null;for(o in n)if(n.hasOwnProperty(o)&&(f=n[o],f!=null))switch(o){case"value":l=f;break;case"defaultValue":a=f;break;case"children":u=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:Ct(t,e,o,f,n,null)}Zr(t,l,a,u);return;case"option":for(v in n)n.hasOwnProperty(v)&&(l=n[v],l!=null)&&(v==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Ct(t,e,v,l,n,null));return;case"dialog":dt("beforetoggle",t),dt("toggle",t),dt("cancel",t),dt("close",t);break;case"iframe":case"object":dt("load",t);break;case"video":case"audio":for(l=0;l<La.length;l++)dt(La[l],t);break;case"image":dt("error",t),dt("load",t);break;case"details":dt("toggle",t);break;case"embed":case"source":case"link":dt("error",t),dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in n)if(n.hasOwnProperty(T)&&(l=n[T],l!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,e));default:Ct(t,e,T,l,n,null)}return;default:if(Jc(e)){for(N in n)n.hasOwnProperty(N)&&(l=n[N],l!==void 0&&wo(t,e,N,l,n,void 0));return}}for(f in n)n.hasOwnProperty(f)&&(l=n[f],l!=null&&Ct(t,e,f,l,n,null))}function Py(t,e,n,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,o=null,f=null,v=null,T=null,N=null;for(O in n){var U=n[O];if(n.hasOwnProperty(O)&&U!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":v=U;default:l.hasOwnProperty(O)||Ct(t,e,O,null,l,U)}}for(var z in l){var O=l[z];if(U=n[z],l.hasOwnProperty(z)&&(O!=null||U!=null))switch(z){case"type":u=O;break;case"name":a=O;break;case"checked":T=O;break;case"defaultChecked":N=O;break;case"value":o=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(i(137,e));break;default:O!==U&&Ct(t,e,z,O,l,U)}}Kc(t,o,f,v,T,N,u,a);return;case"select":O=o=f=z=null;for(u in n)if(v=n[u],n.hasOwnProperty(u)&&v!=null)switch(u){case"value":break;case"multiple":O=v;default:l.hasOwnProperty(u)||Ct(t,e,u,null,l,v)}for(a in l)if(u=l[a],v=n[a],l.hasOwnProperty(a)&&(u!=null||v!=null))switch(a){case"value":z=u;break;case"defaultValue":f=u;break;case"multiple":o=u;default:u!==v&&Ct(t,e,a,u,l,v)}e=f,n=o,l=O,z!=null?gl(t,!!n,z,!1):!!l!=!!n&&(e!=null?gl(t,!!n,e,!0):gl(t,!!n,n?[]:"",!1));return;case"textarea":O=z=null;for(f in n)if(a=n[f],n.hasOwnProperty(f)&&a!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Ct(t,e,f,null,l,a)}for(o in l)if(a=l[o],u=n[o],l.hasOwnProperty(o)&&(a!=null||u!=null))switch(o){case"value":z=a;break;case"defaultValue":O=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(i(91));break;default:a!==u&&Ct(t,e,o,a,l,u)}Vr(t,z,O);return;case"option":for(var K in n)z=n[K],n.hasOwnProperty(K)&&z!=null&&!l.hasOwnProperty(K)&&(K==="selected"?t.selected=!1:Ct(t,e,K,null,l,z));for(v in l)z=l[v],O=n[v],l.hasOwnProperty(v)&&z!==O&&(z!=null||O!=null)&&(v==="selected"?t.selected=z&&typeof z!="function"&&typeof z!="symbol":Ct(t,e,v,z,l,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in n)z=n[lt],n.hasOwnProperty(lt)&&z!=null&&!l.hasOwnProperty(lt)&&Ct(t,e,lt,null,l,z);for(T in l)if(z=l[T],O=n[T],l.hasOwnProperty(T)&&z!==O&&(z!=null||O!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(i(137,e));break;default:Ct(t,e,T,z,l,O)}return;default:if(Jc(e)){for(var Ot in n)z=n[Ot],n.hasOwnProperty(Ot)&&z!==void 0&&!l.hasOwnProperty(Ot)&&wo(t,e,Ot,void 0,l,z);for(N in l)z=l[N],O=n[N],!l.hasOwnProperty(N)||z===O||z===void 0&&O===void 0||wo(t,e,N,z,l,O);return}}for(var E in n)z=n[E],n.hasOwnProperty(E)&&z!=null&&!l.hasOwnProperty(E)&&Ct(t,e,E,null,l,z);for(U in l)z=l[U],O=n[U],!l.hasOwnProperty(U)||z===O||z==null&&O==null||Ct(t,e,U,z,l,O)}function Wd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],u=a.transferSize,o=a.initiatorType,f=a.duration;if(u&&f&&Wd(o)){for(o=0,f=a.responseEnd,l+=1;l<n.length;l++){var v=n[l],T=v.startTime;if(T>f)break;var N=v.transferSize,U=v.initiatorType;N&&Wd(U)&&(v=v.responseEnd,o+=N*(v<f?1:(f-T)/(v-T)))}if(--l,e+=8*(u+o)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ho=null,Bo=null;function ac(t){return t.nodeType===9?t:t.ownerDocument}function $d(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Yo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qo=null;function eg(){var t=window.event;return t&&t.type==="popstate"?t===qo?!1:(qo=t,!0):(qo=null,!1)}var Id=typeof setTimeout=="function"?setTimeout:void 0,ng=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,lg=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(t){return Pd.resolve(null).then(t).catch(ag)}:Id;function ag(t){setTimeout(function(){throw t})}function Mn(t){return t==="head"}function tm(t,e){var n=e,l=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){t.removeChild(a),Wl(e);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Qa(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Qa(n);for(var u=n.firstChild;u;){var o=u.nextSibling,f=u.nodeName;u[ia]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=o}}else n==="body"&&Qa(t.ownerDocument.body);n=a}while(n);Wl(e)}function em(t,e){var n=t;t=0;do{var l=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=l}while(n)}function Go(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Go(n),Vc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function ug(t,e,n,l){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ia])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=_e(t.nextSibling),t===null)break}return null}function cg(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_e(t.nextSibling),t===null))return null;return t}function nm(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=_e(t.nextSibling),t===null))return null;return t}function Lo(t){return t.data==="$?"||t.data==="$~"}function Xo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ig(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var l=function(){e(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function _e(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Qo=null;function lm(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return _e(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function um(t,e,n){switch(e=ac(n),t){case"html":if(t=e.documentElement,!t)throw Error(i(452));return t;case"head":if(t=e.head,!t)throw Error(i(453));return t;case"body":if(t=e.body,!t)throw Error(i(454));return t;default:throw Error(i(451))}}function Qa(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Vc(t)}var Ne=new Map,cm=new Set;function uc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var an=G.d;G.d={f:og,r:rg,D:sg,C:fg,L:dg,m:mg,X:vg,S:hg,M:yg};function og(){var t=an.f(),e=$u();return t||e}function rg(t){var e=hl(t);e!==null&&e.tag===5&&e.type==="form"?Af(e):an.r(t)}var Kl=typeof document>"u"?null:document;function im(t,e,n){var l=Kl;if(l&&typeof e=="string"&&e){var a=Ee(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),cm.has(a)||(cm.add(a),t={rel:t,crossOrigin:n,href:e},l.querySelector(a)===null&&(e=l.createElement("link"),Pt(e,"link",t),kt(e),l.head.appendChild(e)))}}function sg(t){an.D(t),im("dns-prefetch",t,null)}function fg(t,e){an.C(t,e),im("preconnect",t,e)}function dg(t,e,n){an.L(t,e,n);var l=Kl;if(l&&t&&e){var a='link[rel="preload"][as="'+Ee(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ee(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ee(n.imageSizes)+'"]')):a+='[href="'+Ee(t)+'"]';var u=a;switch(e){case"style":u=kl(t);break;case"script":u=Jl(t)}Ne.has(u)||(t=D({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ne.set(u,t),l.querySelector(a)!==null||e==="style"&&l.querySelector(Va(u))||e==="script"&&l.querySelector(Za(u))||(e=l.createElement("link"),Pt(e,"link",t),kt(e),l.head.appendChild(e)))}}function mg(t,e){an.m(t,e);var n=Kl;if(n&&t){var l=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Ee(l)+'"][href="'+Ee(t)+'"]',u=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Jl(t)}if(!Ne.has(u)&&(t=D({rel:"modulepreload",href:t},e),Ne.set(u,t),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Za(u)))return}l=n.createElement("link"),Pt(l,"link",t),kt(l),n.head.appendChild(l)}}}function hg(t,e,n){an.S(t,e,n);var l=Kl;if(l&&t){var a=vl(l).hoistableStyles,u=kl(t);e=e||"default";var o=a.get(u);if(!o){var f={loading:0,preload:null};if(o=l.querySelector(Va(u)))f.loading=5;else{t=D({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ne.get(u))&&Vo(t,n);var v=o=l.createElement("link");kt(v),Pt(v,"link",t),v._p=new Promise(function(T,N){v.onload=T,v.onerror=N}),v.addEventListener("load",function(){f.loading|=1}),v.addEventListener("error",function(){f.loading|=2}),f.loading|=4,cc(o,e,l)}o={type:"stylesheet",instance:o,count:1,state:f},a.set(u,o)}}}function vg(t,e){an.X(t,e);var n=Kl;if(n&&t){var l=vl(n).hoistableScripts,a=Jl(t),u=l.get(a);u||(u=n.querySelector(Za(a)),u||(t=D({src:t,async:!0},e),(e=Ne.get(a))&&Zo(t,e),u=n.createElement("script"),kt(u),Pt(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function yg(t,e){an.M(t,e);var n=Kl;if(n&&t){var l=vl(n).hoistableScripts,a=Jl(t),u=l.get(a);u||(u=n.querySelector(Za(a)),u||(t=D({src:t,async:!0,type:"module"},e),(e=Ne.get(a))&&Zo(t,e),u=n.createElement("script"),kt(u),Pt(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function om(t,e,n,l){var a=(a=rt.current)?uc(a):null;if(!a)throw Error(i(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=kl(n.href),n=vl(a).hoistableStyles,l=n.get(e),l||(l={type:"style",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=kl(n.href);var u=vl(a).hoistableStyles,o=u.get(t);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,o),(u=a.querySelector(Va(t)))&&!u._p&&(o.instance=u,o.state.loading=5),Ne.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ne.set(t,n),u||gg(a,t,n,o.state))),e&&l===null)throw Error(i(528,""));return o}if(e&&l!==null)throw Error(i(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Jl(n),n=vl(a).hoistableScripts,l=n.get(e),l||(l={type:"script",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,t))}}function kl(t){return'href="'+Ee(t)+'"'}function Va(t){return'link[rel="stylesheet"]['+t+"]"}function rm(t){return D({},t,{"data-precedence":t.precedence,precedence:null})}function gg(t,e,n,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Pt(e,"link",n),kt(e),t.head.appendChild(e))}function Jl(t){return'[src="'+Ee(t)+'"]'}function Za(t){return"script[async]"+t}function sm(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Ee(n.href)+'"]');if(l)return e.instance=l,kt(l),l;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),kt(l),Pt(l,"style",a),cc(l,n.precedence,t),e.instance=l;case"stylesheet":a=kl(n.href);var u=t.querySelector(Va(a));if(u)return e.state.loading|=4,e.instance=u,kt(u),u;l=rm(n),(a=Ne.get(a))&&Vo(l,a),u=(t.ownerDocument||t).createElement("link"),kt(u);var o=u;return o._p=new Promise(function(f,v){o.onload=f,o.onerror=v}),Pt(u,"link",l),e.state.loading|=4,cc(u,n.precedence,t),e.instance=u;case"script":return u=Jl(n.src),(a=t.querySelector(Za(u)))?(e.instance=a,kt(a),a):(l=n,(a=Ne.get(u))&&(l=D({},n),Zo(l,a)),t=t.ownerDocument||t,a=t.createElement("script"),kt(a),Pt(a,"link",l),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(i(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,cc(l,n.precedence,t));return e.instance}function cc(t,e,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,u=a,o=0;o<l.length;o++){var f=l[o];if(f.dataset.precedence===e)u=f;else if(u!==a)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Vo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Zo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ic=null;function fm(t,e,n){if(ic===null){var l=new Map,a=ic=new Map;a.set(n,l)}else a=ic,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(t))return l;for(l.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var u=n[a];if(!(u[ia]||u[Wt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var o=u.getAttribute(e)||"";o=t+o;var f=l.get(o);f?f.push(u):l.set(o,[u])}}return l}function dm(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function pg(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function mm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function bg(t,e,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=kl(l.href),u=e.querySelector(Va(a));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=oc.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=u,kt(u);return}u=e.ownerDocument||e,l=rm(l),(a=Ne.get(a))&&Vo(l,a),u=u.createElement("link"),kt(u);var o=u;o._p=new Promise(function(f,v){o.onload=f,o.onerror=v}),Pt(u,"link",l),n.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=oc.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Ko=0;function Sg(t,e){return t.stylesheets&&t.count===0&&sc(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var l=setTimeout(function(){if(t.stylesheets&&sc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Ko===0&&(Ko=62500*tg());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&sc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Ko?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var rc=null;function sc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,rc=new Map,e.forEach(xg,t),rc=null,oc.call(t))}function xg(t,e){if(!(e.state.loading&4)){var n=rc.get(t);if(n)var l=n.get(null);else{n=new Map,rc.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var o=a[u];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),l=o)}l&&n.set(null,l)}a=e.instance,o=a.getAttribute("data-precedence"),u=n.get(o)||l,u===l&&n.set(null,a),n.set(o,a),this.count++,l=oc.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),u?u.parentNode.insertBefore(a,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Ka={$$typeof:F,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Eg(t,e,n,l,a,u,o,f,v){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gc(0),this.hiddenUpdates=Gc(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function hm(t,e,n,l,a,u,o,f,v,T,N,U){return t=new Eg(t,e,n,o,v,T,N,U,f),e=1,u===!0&&(e|=24),u=he(3,null,null,e),t.current=u,u.stateNode=t,e=Ti(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:e},Di(u),t}function vm(t){return t?(t=zl,t):zl}function ym(t,e,n,l,a,u){a=vm(a),l.context===null?l.context=a:l.pendingContext=a,l=Sn(e),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=xn(t,l,e),n!==null&&(re(n,t,e),Ta(n,t,e))}function gm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ko(t,e){gm(t,e),(t=t.alternate)&&gm(t,e)}function pm(t){if(t.tag===13||t.tag===31){var e=kn(t,67108864);e!==null&&re(e,t,67108864),ko(t,67108864)}}function bm(t){if(t.tag===13||t.tag===31){var e=be();e=Lc(e);var n=kn(t,e);n!==null&&re(n,t,e),ko(t,e)}}var fc=!0;function Ag(t,e,n,l){var a=_.T;_.T=null;var u=G.p;try{G.p=2,Jo(t,e,n,l)}finally{G.p=u,_.T=a}}function Tg(t,e,n,l){var a=_.T;_.T=null;var u=G.p;try{G.p=8,Jo(t,e,n,l)}finally{G.p=u,_.T=a}}function Jo(t,e,n,l){if(fc){var a=Wo(l);if(a===null)Uo(t,e,l,dc,n),xm(t,l);else if(Cg(a,t,e,n,l))l.stopPropagation();else if(xm(t,l),e&4&&-1<zg.indexOf(t)){for(;a!==null;){var u=hl(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var o=Xn(u.pendingLanes);if(o!==0){var f=u;for(f.pendingLanes|=2,f.entangledLanes|=2;o;){var v=1<<31-de(o);f.entanglements[1]|=v,o&=~v}qe(u),(xt&6)===0&&(Ju=se()+500,Ga(0))}}break;case 31:case 13:f=kn(u,2),f!==null&&re(f,u,2),$u(),ko(u,2)}if(u=Wo(l),u===null&&Uo(t,e,l,dc,n),u===a)break;a=u}a!==null&&l.stopPropagation()}else Uo(t,e,l,null,n)}}function Wo(t){return t=$c(t),$o(t)}var dc=null;function $o(t){if(dc=null,t=ml(t),t!==null){var e=m(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=S(e),t!==null)return t;t=null}else if(n===31){if(t=y(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return dc=t,null}function Sm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sv()){case Or:return 2;case Dr:return 8;case eu:case fv:return 32;case _r:return 268435456;default:return 32}default:return 32}}var Fo=!1,Rn=null,jn=null,Un=null,ka=new Map,Ja=new Map,wn=[],zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xm(t,e){switch(t){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ja.delete(e.pointerId)}}function Wa(t,e,n,l,a,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[a]},e!==null&&(e=hl(e),e!==null&&pm(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function Cg(t,e,n,l,a){switch(e){case"focusin":return Rn=Wa(Rn,t,e,n,l,a),!0;case"dragenter":return jn=Wa(jn,t,e,n,l,a),!0;case"mouseover":return Un=Wa(Un,t,e,n,l,a),!0;case"pointerover":var u=a.pointerId;return ka.set(u,Wa(ka.get(u)||null,t,e,n,l,a)),!0;case"gotpointercapture":return u=a.pointerId,Ja.set(u,Wa(Ja.get(u)||null,t,e,n,l,a)),!0}return!1}function Em(t){var e=ml(t.target);if(e!==null){var n=m(e);if(n!==null){if(e=n.tag,e===13){if(e=S(n),e!==null){t.blockedOn=e,wr(t.priority,function(){bm(n)});return}}else if(e===31){if(e=y(n),e!==null){t.blockedOn=e,wr(t.priority,function(){bm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wo(t.nativeEvent);if(n===null){n=t.nativeEvent;var l=new n.constructor(n.type,n);Wc=l,n.target.dispatchEvent(l),Wc=null}else return e=hl(n),e!==null&&pm(e),t.blockedOn=n,!1;e.shift()}return!0}function Am(t,e,n){mc(t)&&n.delete(e)}function Og(){Fo=!1,Rn!==null&&mc(Rn)&&(Rn=null),jn!==null&&mc(jn)&&(jn=null),Un!==null&&mc(Un)&&(Un=null),ka.forEach(Am),Ja.forEach(Am)}function hc(t,e){t.blockedOn===e&&(t.blockedOn=null,Fo||(Fo=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Og)))}var vc=null;function Tm(t){vc!==t&&(vc=t,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){vc===t&&(vc=null);for(var e=0;e<t.length;e+=3){var n=t[e],l=t[e+1],a=t[e+2];if(typeof l!="function"){if($o(l||n)===null)continue;break}var u=hl(n);u!==null&&(t.splice(e,3),e-=3,Ji(u,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Wl(t){function e(v){return hc(v,t)}Rn!==null&&hc(Rn,t),jn!==null&&hc(jn,t),Un!==null&&hc(Un,t),ka.forEach(e),Ja.forEach(e);for(var n=0;n<wn.length;n++){var l=wn[n];l.blockedOn===t&&(l.blockedOn=null)}for(;0<wn.length&&(n=wn[0],n.blockedOn===null);)Em(n),n.blockedOn===null&&wn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],u=n[l+1],o=a[le]||null;if(typeof u=="function")o||Tm(n);else if(o){var f=null;if(u&&u.hasAttribute("formAction")){if(a=u,o=u[le]||null)f=o.formAction;else if($o(a)!==null)continue}else f=o.action;typeof f=="function"?n[l+1]=f:(n.splice(l,3),l-=3),Tm(n)}}}function zm(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(o){return a=o})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Io(t){this._internalRoot=t}yc.prototype.render=Io.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(i(409));var n=e.current,l=be();ym(n,l,t,e,null,null)},yc.prototype.unmount=Io.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ym(t.current,2,null,t,null,null),$u(),e[dl]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ur();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wn.length&&e!==0&&e<wn[n].priority;n++);wn.splice(n,0,t),n===0&&Em(t)}};var Cm=r.version;if(Cm!=="19.2.3")throw Error(i(527,Cm,"19.2.3"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=h(e),t=t!==null?M(t):null,t=t===null?null:t.stateNode,t};var Dg={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{aa=gc.inject(Dg),fe=gc}catch{}}return Fa.createRoot=function(t,e){if(!d(t))throw Error(i(299));var n=!1,l="",a=jf,u=Uf,o=wf;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=hm(t,1,!1,null,null,n,l,null,a,u,o,zm),t[dl]=e.current,jo(t),new Io(e)},Fa.hydrateRoot=function(t,e,n){if(!d(t))throw Error(i(299));var l=!1,a="",u=jf,o=Uf,f=wf,v=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(f=n.onRecoverableError),n.formState!==void 0&&(v=n.formState)),e=hm(t,1,!0,e,n??null,l,a,v,u,o,f,zm),e.context=vm(null),n=e.current,l=be(),l=Lc(l),a=Sn(l),a.callback=null,xn(n,a,l),n=l,e.current.lanes=n,ca(e,n),qe(e),t[dl]=e.current,jo(t),new yc(e)},Fa.version="19.2.3",Fa}var Hm;function qg(){if(Hm)return er.exports;Hm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(r){console.error(r)}}return c(),er.exports=Yg(),er.exports}var Gg=qg();const Lg=[`对一个东西最好的批评
是做出新东西来替代它。`,`至少每天承认一次"我不知道"，
你将成为一个更好的人。`,`毫不犹豫地自我投资——
花钱上课，学习新技能。
这些不起眼的投资，
能产生丰厚的回报。`,`一个值得追求的人生目标是，
成为有影响力、
行为不能被预测的人。
也就是说，
要做那些AI难以模仿的事。
做一个不能被算法模型化的人，
这样你将无可取代。`,`趁着父母还在世，
用录音设备（或应用），
采访他们。
不停地问问题。
你会有惊人的收获。
请人把他们的经历，
做成口述史、纪录片，
或者写成书。
对他们，
对你的家庭来说，
这将成为一份厚礼。`,`对每个人，
都要给第二次机会，
但不要给第三次。`,`多任务操作是一个迷思。
走路、跑步、骑自行车或开车时，
不要发信息。
稍停片刻没关系，
没有人会因为这一分钟忘记你。`,`每个月尝试一次，
换条路回家，
换个门进家，
换把椅子吃饭。
不要因循守旧。`,`对已经发生的事进行假设，
是浪费时间。
对未来进行假设，
则大有裨益。`,`创作那种能激发
他人创作艺术的艺术。`,`你生活的地方——城市或国家，
对你的生活有很大影响。
这个因素，
与大多数因素不同，
是一个你可以选择和改变的因素。`,`培养对小事的耐心，
你才能对大事保持耐心。`,`要让自己快乐，
就先要让自己成为一个有用之人。`,`拥抱别人时，
让别人先松开双臂。`,`不要把精美的瓷器和好酒，
非留到难得的场合才拿出来，
这一等可能就是永久；
只要有机会，就可以拿出来。`,`最好的园艺建议：
弄明白你能养好什么，
然后种好多好多。`,`用你喜爱和接受的东西，
而不是你厌恶和拒绝的东西，
来定义你自己。`,`大多数争论
其实跟争论本身毫无关系。
所以在大多数情况下，
人们无法通过争论来赢得争论。`,`成功最可靠的方法，
是你自己定义成功。
先射箭，
然后在射中的地方，
画一个靶心。`,`大量阅读历史，
你就会明白
过去发生过多少怪事；
这样，对于未来的怪事，
你将见怪不怪。`,`人生中至少留一件事，
在这件事上，你不追求效率。
多花时间享受这件事，
即使此事非你所长。
这是你的欢娱时间，
将让你永远年轻。
绝不要觉得这么做有错。`,`面对重要的事，
允许改变想法。
这是智慧，
而不是不道德。`,`新想法产生五分钟后，
就会从你的头脑中消失。
利用这五分钟的时间，
及时行动。`,`重要的事，
通常不紧急，
紧急的事，
通常不重要。
要完成重要的事，
就不要操之过急。`,`有的东西，
你采购多少都不会多。
比如当你浇筑混凝土时，
当你选购电池时，
当你为聚会准备冰块时。`,`当你陷入困境或力不能支时，
专注在力所能及的小事上，
这能推进事情的进展。`,`在博物馆里，
你需要花至少10分钟，
才能真正地欣赏一件艺术品。
哪怕看5件展品，
每件花10分钟，
也不要看100件展品，每件花30秒。`,`要获得持续的满足感，
努力把苦日子过好，
胜过好日子锦上添花。`,`当你考虑"接下来呢？"
这几个字时，
你的决策
将变得更明智。`,`在条件许可的情况下，
每个房间
都应该有两面采光。
只有一面采光的房间，
使用率较低，
所以当你可以选择时，
选两面采光的房间。`,`在同意参加一场工作会议之前，
你必须先看会议日程，
并知道需要做出什么样的决定。
如果不需要做出任何决定，
你可以跳过这场会议。`,`你没喜欢每一个人的义务，
你有厌恶任何一个人的自由。
但对每个人，
你都要给予基本的尊重，
包括你厌恶的人。`,`当你发现自己拖延时，
不要抗拒。
把拖延当作现在要做的事。
全身心拖延。
尝试五分钟里什么也不做。
把这当作你的任务。
你根本完成不了这个任务。
五分钟后，
你将做好准备，渴望工作。`,`单靠自己，
你无法真正成为你自己。
你无法单枪匹马地
成为一个独树一帜的人。
这是一个悖论，
如果你想变得独一无二，
你需要世界上所有其他人的帮助。`,`如果你需要旁观者提供紧急帮助，
直接给他们下命令。
给他们分派任务，能让茫然的旁观者，
变成负责任的协助者。`,`每个成功，
都有某种不能用金钱衡量的成本。
要追求成功，
就必须心甘情愿地付出成本。`,`快速地失败。
频繁地失败。
从失败中吸取教训。
如果你能不断地从失败中成长，
失败就不是耻辱。`,`如果你不想投资于一家公司，
就不要在这家公司工作。
因为当你工作时，
你是在投入自己
拥有的一切：你的时间。`,`做好事本身就是一种奖励。
当你做好事时，
人们会质疑你的动机，
你的任何善行都将很快被遗忘。
但还是要做好事。`,`你能做的最利己的事，
就是慷慨。`,`学习如何从与你有分歧
甚至冒犯你的人那里
学到东西。
看看你能不能
从他们的认识中
找到真理。`,`保持乐观
相当于增加25点智商。`,`倾听是一种异常强大的能力。
听你爱的人讲话时，不断问他们：
"还有吗？"
直到他们说"没有了"。`,`务必规定一个截止日期，
因为这可以筛选掉
无关紧要和平淡无奇的事项。
截止日期有助于纠正
你的完美主义倾向，
迫使你找到不一样的解决方案。
不一样是一件好事。`,`不要害怕问
听上去愚蠢的问题。
因为在99%的情况下，
其他人都在想
同一个问题，
只是不好意思问出口。`,`你的生活，
要像一个有待设计的初始模型。
做各种尝试，
而不是制订宏大的计划。`,`当你原谅别人时，
对方可能没有察觉，
但你会释怀。
宽恕不是为了别人，
宽恕是我们给自己的礼物。`,`如果你"做不了"某件事，
那可能很尴尬。
但如果你正在"学着做"某件事，
那就是令人敬佩的。
只需小小几步，
你就能跨越"不能"和"学习"之间的界线。`,`不要用别人的尺子
丈量自己的人生。`,`当有人告诉你
什么
会惹恼他们时，
他们是在告诉你
什么
会激发他们的动力。`,`只有当你把收藏品
放在显眼的地方展示，
愉快地与他人分享时，
对你而言，
收藏才是一件好事。
否则，
你只是在囤积。`,`稍事休息
不是软弱的表现，
而是实力的象征。`,`旅行的主要目的
是放下。
放下的越多，
你就走得越远。`,`每当别人邀请你
投入辩论时，
你并不是每次都要入局。`,`一个很有价值的年度目标是
深入了解一门学科。
一年之后你会惊叹，
一年前你是多么无知。`,`如果别人非理性地
接受了某个想法，
那么你无法通过说理，
使他们放弃那个想法。`,`感恩之心，
能唤醒你身上所有的美好，
这是一种
可以不断提升的能力。`,`当你为自己的待办任务清单焦虑时，
想想你已经完成了多少任务，
就可以得到宽慰。`,`请客吃饭永远是有效的方法，
而且简单易行。
这对老朋友很有效，
也是结交新朋友的好方法。`,`痛苦总是不可避免的。
是否为痛苦所折磨，
则是人的选择。`,`如果你在家里找某样东西，
终于找到了，
用完后，
不要把它放回原处。
将它放到
你寻找的第一个地方。`,"运动 +多样化饮食=健康。",`绝不要使用信用卡来获得信贷。
唯一可以接受的信贷或债务
是这样的债务：
你可以通过借这笔债，
获得交换价值极有可能增加的资产，
比如房子。
大部分东西的交换价值都会持续减少，
或者在你购买的那一刻消失。
不要通过借债来购买价值不断贬损的东西。`,`了解自身的好方法是，
认真地思考他人身上让你生气的地方。`,`设定一个雄心勃勃的目标
有这样的好处：
能把标准定得很高。
这样一来，
即使你努力后没实现目标，
你也会实现超出一般水平的成功。`,`当你捐出10%收入时，
你失去了10%的购买力，
但你将获得110%的快乐。
与之相比，
你的损失微不足道。`,`学习的
最好方法是，
试着把你
会的东西
教给别人。`,`每当要在正确和
善良之间做出选择时，
你都要毫无例外地选择善良。
不要把善良和软弱混为一谈。`,`我们缺少成长的仪式感。
当你的孩子达到法定成年年龄，
即18~21岁时，
举办一场令人难忘的家庭仪式。
那一刻将会成为
他们人生中重要的试金石。`,`在谈判中获得对方同意的
最佳途径是，
要真正理解，
同意对对方意味着什么。`,`伟大的秘诀：
每年变得比去年好一点点，
年复一年。`,`画画能画出你看到了什么。
写作能揭示出你的所思所想。`,`每当你无法选择走哪条路时，
选择那条能带来改变的路。`,`结账最快的队
是人最少的队，
不管他们的购物车里装了多少东西。`,"你可以选择今天不生气。",`与灵感相比，习惯要可靠得多。
通过养成习惯来取得进步。
不要把注意力集中在如何塑形上，
而是要坚持锻炼。`,`如果你是房间里最聪明的人，
那么你走错了房间。
和比你聪明的人在一起，
向他们学习。
更好的做法是：
找到意见
与你不一致的聪明人。`,`在相信不寻常的说法之前，
要求对方拿出
极具说服力的证据。`,`对话中的"第三法则"：
要问出真正的原因，
要让对方在初次陈述的基础上
更进一步，
连续这样要求对方三次，
第三次回答，
是最接近真相的回答。`,`专业人士犯的错误
和非专业人士一样多，
他们只是学会了
如何优雅地改正错误。`,`不要做最好的。
做唯一的。`,`每个人都害羞。
其他人在等你
做自我介绍；
他们在等你
给他们发邮件；
他们在等你
约他们出去。
不要犹豫，去做吧。`,`你越对别人感兴趣，
别人就越觉得你有趣。
要让自己变得有趣，
就要先对别人感兴趣。`,`别人拒绝你时，
不要觉得被冒犯。
想想看，他们和你一样：
诸事繁忙，心烦意乱。
过段时间再尝试。
第二次请求成功的概率，
高得惊人。`,`养成习惯的好处是，
在行动时，
不必再进行内心的权衡。
不再消耗能量去思考
是否要做这件事。
你只管去做。
好习惯很多，
从说真话到使用牙线。`,"准时代表着尊重。",`年轻时，
至少花半年到一年时间，
尽可能俭朴地生活，
拥有的东西越少越好，
住在小房间或帐篷里，
吃豆子和米饭。
这样，当你未来不得不冒险时，
你就不会害怕"最坏"的情况。`,`相信我：
并不存在"他们"。`,`关注小事。
更多的人不是被高山打败，
而是被脚上的水疱打败。`,`作为领导者，
要让别人知道
你对他们的期望，
这种期望可能超过
他们对自身的期望。
为他们提供一个
能让他们进阶的声誉。`,`如果你寻求别人的反馈，
你会得到批评。
但如果你寻求建议，
你会得到一个搭档。`,`"黄金法则"
永远不会让你失望。
它是一切美德的基础。`,`要想把一件事情做好，
去做就是。
要想做到卓越，
就要重复做，日复一日地做。
要打造精品
就要执着地做下去。`,`说句实话：
欺骗一个诚实的人是很难的。`,`思考时，
散步
或在本子上写写画画，
能让你打开思路。
思考，
不止用大脑。`,`开始，
购买你能找到的最便宜的工具。
升级那些你常用的工具。
如果你最终在工作中使用某种工具，
购买你买得起的最好的。`,`缩减任务清单的方法是
问自己：
"假如这件事没做成，
将会发生的最坏的情况是什么？"
删除其他任务，
只留下那些预防灾难发生的任务。`,`穿过一个可能禁止你通行的地方，
你要表现得轻松自如，
就像你本属于这里。`,`对自己犯的错误承担责任，
是提升一个人境界的最好方式。
如果你把事情搞砸了，
就坦率承认。
勇于承担责任，
你会变得无比强大。`,`怨恨是一种诅咒，
它不会影响对方，
只会伤害自己。
放下怨恨，
就像它是毒药。`,`不要只因为薪水高
就接受一份工作。`,`你可以专注于服务用户，
也可以专注于打败竞争对手。
两种做法都有效，
但专注于服务用户将让你走得更远。`,`"不"是一个可以接受的回答，
即使是没有理由的"不"。`,`把"创造"和"改进"
这两个过程分开。
你不能
边写作边编辑，
边雕刻边打磨，
边制作边分析。
如果你这么做，
编辑就会阻遏创造。
发明时，不要选择。
画草图时，不要检查。
写初稿时，不要反思。
一开始，
创造性思维必须是自由的，
不受评判的干扰。`,`如果没有出现偶尔跌倒的情况，
那么你还没放开手脚。`,`也许宇宙间最反直觉的真理是：
你给予的越多，你得到的就越多。
理解这一点，是智慧的开端。`,`保持在场。
99%的成功只是在场而已。
事实上，大多数成功只是坚持。`,`朋友胜过金钱。
金钱能做到的几乎所有事，
朋友都可以做得更好。
在很多方面，
朋友有船，
胜于自己有船。`,`一个东西不见的时候，95%的情况下，
它就藏在上次出现的地方触手可及的范围。
以此为半径，
搜索附近所有可能的地方，
你就会找到它。`,"一次度假 +一场灾难=一场冒险。",`不要着急。
着急时，
你更容易被欺骗
或者被操纵。`,`宽恕，就是接受
那个你永远得不到的道歉。`,`要培养一种习惯，
把你的习惯语言，
从"我做得到还是做不到"
变成"我做还是不做"。
这样你就转移了重心，
从摇摆不定的选择，
转移到了拥有坚定的自我。`,`慷慨一些，再慷慨一些。
没有人在临终时后悔给予太多。
做墓地里最富有的人
没有任何意义。`,`你需要老师、父母、
顾客、粉丝和朋友，
因为他们会早于你看到
你将成为什么样的人。`,`我们有无限的改进空间。
"更好"是没有上限的。`,`做好准备：
当一项大型工程
完成90%的时候，
最后的细节，还需要花90%的精力。
盖房子和拍电影，
都以有两个90%而闻名。`,`趁你还不老，尽可能多参加葬礼，
听听人们对逝者的评论。
没有人谈论逝者的成就。
人们只会记住，在取得成就的过程中，
你是一个什么样的人。`,`任何真实存在的东西
都始于一种猜测性构想。
因此，想象力是宇宙间最强大的力量。
你可以提高自己的想象能力。
这是一项独特的生活技能——
忽视别人都知道的东西，
却能让你受益。`,`危机袭来时，
不要浪费。
没有问题，
就没有进步。`,`你绝不会真的想要出名。
随便找一个名人的传记读一下，
你就知道了。`,`度假时，先去你行程上
最偏远的地方，
略过普通城市，
最后回到大城市。
偏远地区的另类风情，
将带给你最大的震撼，
而在回来的路上，
你会喜欢繁忙的城市中熟悉的便利。`,`当有人邀请你
在未来做某件事时，
问自己：我愿意明天就做这件事吗？
用这个标准筛选一下，
很多承诺都可以立即过滤掉。`,`如果你有什么关于别人的话，
不好直接对别人说，
那也绝不要在电子邮件里说，
因为这些话最终会传到他们耳朵里。`,`如果你求职的主要原因，
是你需要一份工作，
那么你只不过是
老板面临的另一个问题；
如果你能解决
老板目前面临的很多问题，
老板就会聘用你。
要想得到工作，
就从老板的角度去思考。`,`伴随着请求而来的赞美，
不是赞美。`,"艺术，就在你忽视的地方。",`获得物质很难给你带来深度满足，
但获取经验可以。`,`你是什么样的人，取决于你做什么。
不在于你说什么，
不在于你信什么，给谁投票，
而在于，
你把时间花在什么上面。`,`探索的"第七法则"：
如果你愿意多往下追问七个层次，
你就可以弄明白任何事。
如果你问的第一个人不知道，
问对方，你接下来该问谁，以此类推。
如果你愿意一直追问下去，找到第七个人，
你就几乎总能得到答案。`,`要获得幸福，
哪怕只是片刻的幸福，
你可以赞美一位陌生人
做过的一件事。`,`当有人对你恶毒、憎恨、刻薄时，
你就把他们的行为看作一种病。
这样你就更容易与他们共情，
缓和冲突。`,`清除杂物，
为你真正珍惜的东西留出空间。`,`绝不要在电话里回应请求或建议。
急迫的请求，是披着外衣的骗局。`,`经验的价值往往被高估。
大多数突破性成就
都是由新手实现的。
因此在招聘时，
要看应聘者的资质和态度，
接下来再培训他们掌握技能。`,`如何道歉？
要迅速、具体、真诚。
不要找借口，
那会把道歉搞砸。`,`觉得自己需要理发时，
就去理，
不必询问理发师。
关注你自己的动机。`,`小时候你的古怪之处，
能让你在成年后变得了不起
——假如你没有失去它。`,`如果你不知道自己的激情所在，
那么一味追逐幸福，
最终只会让你失去动力。
对大多数年轻人来说，
更好的道路是先掌握一项技能。
在学习技能的过程中，
你就可以拥有一种视角，
并从容地找到自己的幸福所在。`,`要让一群人
或者一个醉汉安静下来，
只需要轻声耳语。`,`当你借出某个东西时，
就当你是在送礼。
如果对方还了，
你就会感到惊喜和快乐。`,`无论在什么年纪，
你都可以问自己：
"为什么我还在做这件事？"
对这个问题，
你需要进行很好的回答。`,`阳台或门廊至少需要两米长，
否则你不会用它。`,`当你用健康的人际关系
取代交易关系时，
生活就会变得更好。`,`长期持续小额投资
可以创造奇迹，
但没人愿意慢慢变富。`,`最重要的事，就是始终把最重要的事，
当作最重要的事。`,"当你拿不准给多少小费时，就多给一点。",`要培养坚强的孩子，
就要准确地说出你家的独特之处，
强化孩子对家庭的归属感。
要让孩子能够自豪地说，
"我家就是这样的"。`,`如果你不为过去的自己
感到难堪，
你就可能还没有长大。`,`在内部争吵中，
不要用"你"这个字。`,`如果你担心一次搬不动，
就帮自己一个大忙，
搬两次。`,`长期而言，
未来是由乐观主义者决定的。
成为乐观主义者，
不意味着必须忽视
我们制造了多少问题。
你只需要想象，
我们解决问题的能力
能有多大的提升。`,`学习如何心安理得地
小睡20分钟。`,`不要让别人的紧急事项
成为你的紧急事项。
事实上，不要受制于任何急迫感。
聚焦于重要的事情。
急迫性是暴君。
重要才是王道。
不要被急迫感挟制！`,`自相矛盾的是，世界上最邪恶的事，
正是那些真正相信自己
在与邪恶做斗争的人干的。
面对邪恶时，要对自己格外警惕。`,`不要等到给别人写悼词的时候，
才给予别人最真诚的赞美。
在他们还活着的时候
就赞美他们，
才有意义。
把赞美写在信里，
以便他们保存。`,`恐惧是因为缺乏想象力。
恐惧的解药不是勇敢，
而更可能是想象力。`,`好好培养员工，
让他们具备找到
下一份工作的能力。
但也要善待员工，
让他们永远不想
换工作。`,`当失败在你预料之中时，
那就不是失败。`,`超级英雄和圣人
从不从事艺术创作。
只有不完美的人
才能创作艺术，
因为艺术始于残缺。`,`如果有人试图让你相信
那不是金字塔骗局，
那就是金字塔骗局。`,`不要为赚钱而创造；
要赚钱
来支持创造。
工作做得好的回报，
是更多的工作。`,`如果你发现一扇门，
把门保持原样地
留给后来者。`,`100年后，
很多我们现在视为正确的事，
都会被证明是错误的，
甚至可能错得令人尴尬。
今天你可以问自己一个好问题：
"我对什么事的认识可能是错的？"
这是唯一值得担忧的事。`,`学习如何打布林结。
在黑暗中，用一只手练习。
在余生里，你用到这个结的次数，
将超出你的预想。`,`做没有人能看明白的事情，
能带来最大的回报。
如果有可能，
就去做一些还没有名字的工作。`,`在通往宏伟目标的道路上，
庆祝那些最小的胜利，
就像每一个小胜利都是最终的目标一样。
这样，
无论征程在哪里结束，
胜利都将属于你。`,`对除了爱情之外的所有事情，
一开始都要制定退出策略。
为结局做好准备。
几乎所有事都易进难出。`,`不要试图让别人喜欢你，
要让他们尊重你。`,`成熟的基础：
那不是你的错，不代表那不是你的责任。`,`产生一个好主意，
需要先有很多坏主意。`,`预测未来之所以难，
在于你要忘记对未来的预期。`,`背后称赞别人，
最终将惠及你自己。`,`大多数一夜之间取得的成功，
都需要至少五年的努力，
事实上，任何重大成功都是如此。
明白这一点，
你就知道如何规划你的生活了。`,`祖父母的任务是做好祖父母，
而不是做父母。
在父母家，
按父母的规矩办。
在祖父母家，
按祖父母的规矩办。`,`你并不需要更多时间，
因为你已经拥有了你的所有时间；
你需要的是更专注。`,`愚人最终做的事，
聪明人一开始就做过。`,`要让婚姻幸福，
就双方轮流说了算。`,`如果你对某个东西的成本
毫无概念，
就表明
你买不起它。`,`每个人的时间都是有限的，
每个人的时间都在不断减少。
你能用钱获得的最高杠杆，
就是买别人的时间。
在可能的情况下，
要聘请员工，
外包工作。`,`对侮辱的最好回答是："你可能是对的。"
他们往往可能是对的。`,`无论谁以何种理由要求你提供账户信息，
你都要先假定对方是在欺诈，
除非能证明对方的清白。
证明对方清白的途径是给他们回电话，
用你而不是他们提供的号码或网站
登录你的账户。
当他们通过电话、短信或电子邮件
与你联系时，不要泄露任何身份信息。
你必须掌控沟通渠道。`,`恐惧让人做蠢事，
所以不要相信人们在恐惧中
做出的任何事。`,`严以律己，宽以待人。
反之，则人人如身处地狱。`,`如果你不刻意寻求他人的认同，
你就拥有无限力量。`,`你热爱从事的事应该完全适合你，
但你的人生目标应该超越你。
要为远远超越自我的事业而努力。`,`当一个孩子
没完没了地问"为什么"时，
最聪明的回答是：
"我不知道，你觉得是为什么？"`,`成功的秘诀：
少做承诺，多做实事。`,`给我看看你的日程表，
我就知道
你优先考虑什么。
告诉我你的朋友是谁，
我就知道
你将成为什么样的人。`,`当与他人头脑风暴、
即兴创作、
临时合作时，
能扩展交流广度和深度的做法是：
你在每次发言时，
都用"是的，而且"
援引一个令人愉悦的例子，
而不是用"不，但是"
给人一个令人泄气的回答。`,`工作是为了成就自己，
而不是获取利益。`,`审视别人的弱点很容易，
反思自己的弱点很难，
但后者的回报要高得多。`,`年轻时，
结交比你年长的朋友；
年老时，
结交比你年轻的朋友。`,`当你弄明白
你的人生使命是什么时，
你将完成你的人生使命。
你的目标是发现自己的目标是什么。
这不是一个悖论。
这就是人生之路。`,`使用锋利的东西时，
始终与之保持距离。`,`冷静会传染。
保持冷静，就是帮助他人。`,`当别人告诉你什么地方出问题时，
他们通常是对的。
当他们告诉你如何解决问题时，
他们通常是错的。`,`你最近一次改变是在什么年纪，
你就是多少岁。`,`请求搭车时，
让自己显得
与对方是相似的人。`,`值得反复提醒的是：
三思而后行。`,`金钱的重要性是被高估的。
创造真正的新事物，
通常并不需要很多钱。
否则新发明将由亿万富翁垄断，
而实情并非如此。
相反，几乎所有突破
都是由缺钱的人创造的。
假如用钱就能买到突破，
富人为何不买呢？
相反，
发明新事物需要的是
激情、坚持、信念和独创性。
穷人和年轻人往往富于这些品质。
保持饥饿感。`,`如果你不能确定自己迫切需要什么，
你迫切需要的也许是睡觉。`,`不要管别人怎么看待你，
因为他们根本没看你。`,`每天写下一件
你感恩的事，
这是有史以来最便宜的疗愈法。`,`如果你遇到一个浑蛋，忽略他。
如果你每天到处遇到浑蛋，
那么你需要更深入地审视自身。`,`通过改变行为来改变想法，
比通过改变想法来改变行为
要容易得多。
你寻求什么样的改变，
就将其付诸行动。`,`如果你觉得自己看到了一只老鼠，
那就是有一只老鼠。
如果有一只，就说明不止一只。`,`不要担心如何开始，
或者从哪里开始。
只要持续前进，
成功终将到来，
到时你已远远超越
自己的出发点。`,`不要按掉闹钟。
那只会让你养成睡过头的习惯。`,`如果你问别人
"你睡得怎么样？"，
而不是"你好吗？"，
你将学到更多。`,`一般而言，
不必要时无须多言。`,`每次与人交流时，
别忘了送上祝福；
这样当你带着
问题找他们时，
他们会乐于帮助你。`,`即使在热带地区，
夜晚也会意外地凉。
穿得暖和些。`,`任何有价值的事
都需要无尽的工作。
你无法给工作设定上限，
所以你必须给工作时间设限。
你唯一能管理的
是时间，
而不是工作。`,`如果某人愚蠢的信念让你感到厌烦，
不妨更深入地了解
他为什么有这样的信念，
以减轻烦恼。`,`现在就是发明创造的最好时机。
20年后最伟大、最酷的发明，
现在都还没发明出来。
你并不算晚。`,`如果你想超越你心目中的英雄，
那就放下自尊心，
像学生一样模仿他们，
直到你能超越他们。
这是所有大师的成功之道。`,`万事不必完美才精彩。
特别是婚礼。`,`当你陷入困境时，
睡一觉。
当你睡觉时，
把问题交给你的潜意识。
第二天早上你就会得到答案。`,`无论财富、
人际关系还是知识，
生活中那些最大的奖赏，
都来自
神奇的复利，
即微小的、稳定的收益不断放大。
要实现富足，
你所需的不过是，
持之以恒地让投入比减损大1%。`,`想吃什么甜点就去吃，
但记住，只能吃三口。`,`对待他人的标准不是他们有多坏，
而是你有多好。`,`儿童完全接受，而且渴望
家庭规则。
父母在制定家庭规则时，
只需要给孩子一个理由：
"我们家对某事有一个原则。"
事实上，
当你制定自己的个人原则时，
你也只需要一个理由：
"我对某事有一个原则。"`,`拧螺栓或螺钉时，记住：
向右是拧紧，向左是拧松。`,`坏事可能飞速发生，
但几乎所有好事都是慢慢展开的。`,`人类并不是身体承载着灵魂，
而是灵魂被赋予一个身体，
这个身体不是由我们选择的，
但我们必须照顾好它。`,`如果你只有目标
而没有实现目标的计划，
那目标就只是一个梦。`,`做一个好祖先。
做后代子孙会感谢你的事。
举个简单的例子：种一棵树。`,`一场演讲，
听众至多只能记住三个要点。`,`人们之所以做不出
最伟大的突破，
是因为，
这些任务看起来
真的很辛苦。`,`要不同凡响，
就需要读书。`,`有限的游戏，
关乎输赢。
无限的游戏，
则让游戏继续下去。
去玩那些无限的游戏，
因为无限的游戏
能带来无限的回报。`,`要想成功，
就要让别人给你钱；
要想富有，
就帮助其他人成功。`,`改变世界的是你的行为，
而不是你的观点。`,`能轻松用钱解决的问题
不是真正的问题，
因为解决办法显而易见。
把注意力集中在那些
没有显而易见的
解决办法的问题上。`,`你遇到的每个人
都对某个问题有惊人的见解，
而那个问题正是你的盲点。
你无法轻松地发现那个问题是什么，
你的任务就是去发现它。`,"培养一种对平庸的厌恶感。",`要对抗一个对手，
不妨成为他的朋友。`,`当你买股票时，
卖股票的人对股票的估值，
低于你的估值。
当你卖股票时，
买股票的人对股票的估值，
高于你的估值。
每当你准备买卖股票时，
问自己：
"我掌握什么对方不掌握的信息？"`,`你不是与一个人结婚，
你是与一家人结婚。`,`善待你的孩子，
因为以后是他们为你选择养老院。`,`在大约99%的情况下，
正确的时机就是当下。`,"所有的枪都是上了膛的。",`培养12个爱你的人，
因为他们的价值
超过1200万个喜欢你的人。`,"总是快速地给予赞扬，承担责任。",`凡事都要有节制，除了你热爱的事。
选择几项让你痴迷的兴趣爱好。
事实上，要全面节制，
以便你能全情投入地去做热爱的事。`,`管理自己时用脑，
管理他人时用心。`,"跳舞时要运用臀部力量。",`不要让你的电子邮箱
成为由别人
管理的任务清单。`,`拆解一团乱麻的最好方法不是去"解"，
而是不断地拉扯。
把这团乱麻扯得越大、越松、越开越好。
当你把纠缠的结拉开时，问题就迎刃而解。
无论绳索、软管、纱线还是电线，
都可以试试这个方法。`,`对待一件简单的事，
几乎任何一件事，你都可以极度认真。
把它看作世界上唯一的一件事，
也许可以认定全世界就系于这一件事，
只需要认真对待这件事，你就可以点亮天空。`,`制做任何东西，
都要额外多做一些准备，
比如额外的
材料、零件、空间、装饰。
这些额外的东西是
应对错误的保障，
能减轻压力，
防范未来的风险。
这是最便宜的保险。`,`没有人像你一样
在意自己的东西。`,`永远不要为
你不想成为的人工作。`,`世上没有秘密。
最好直接
把不受欢迎的消息告诉别人。
纸包不住火，
秘密不可避免地会被传播。
同时，
所有掌握秘密的人，
都会被秘密腐蚀。
不要探听秘密。`,`不断膨胀的宇宙
丰富而充盈。
它是如此丰富，
往往只有做减法，
才能改进。
一直做减法，
减到不能减为止。
最终的状态应该是你需要更多，
而不是还要减少。`,`找出一天中你效率最高的时间段，
并保护好那段时间。`,`经历是有趣的，
影响力能带来回报，
但只有有意义的事，
才能让我们快乐。
做有意义的事。`,`伟大与短期优化
是水火不容的。
取得伟大的成就，
需要目光长远。
用更长远的目光，
来提高你的目标。`,`大多数美妙的事，
如果太频繁地重复，
就会变得平淡无奇。
一生仅一次，
往往是最佳的频率。`,`当你打开油漆罐时，
即使只打开一点点，
无论多么小心，
油漆也总是会溅到你的衣服上。
所以此类场合下，
穿颜色与之相似的衣服。`,`一开始，你必须勤谨地遵守规则，
这样你才能有效地打破规则。`,`如果你停下来，
听音乐家或街头表演者
演唱超过一分钟，
你就应该给他们一美元。`,`学习概率和统计，
远比学习代数和微积分有用。`,`如果在游戏中，获胜变得过于重要，
就要修改游戏规则，
让游戏变得更有意思。
修改规则本身，
可以成为新的游戏。`,'最好的老师叫"做"。',`你在"但是"之前说的所有的话，
都不重要。`,`礼貌是没有成本的。
借了东西，
还时要洗干净。
上完厕所后，
把马桶座圈放下来。
前面的车并线时，
要礼让。
购物车用完后，
放回指定区域。
等电梯里的人出来后再进电梯。
这些礼貌是没有成本的。`,`双方争执时，
找到第三方。`,`努力，
无论锻炼、陪伴还是工作，
重要的不是数量，
而是坚持。
坚持每天做一点，
比什么都强，
这比你偶尔一为重要得多。`,`当你领导时，
你真正的工作是
培养更多领导者，
而不是更多追随者。`,`挖掘出学生的所有能量，
是老师的职责，
学到老师的所有一切，
是学生的职责。`,`效率的重要性被大大高估。
闲散的重要性被大大低估。
任何工作要取得顶尖的业绩，
定期安排的学术休假、
假期、休息、漫无目的的散步，
都是必要的前提。
最好的职业伦理，需要良好的休息伦理。`,`说话时要自信，
如同你是对的，
倾听时要仔细，
如同你是错的。`,`效率往往会让人分心。
不要想着用更好的方法
尽快完成任务，
而要想着找到更好的、
让你乐此不疲的任务。`,`旅行的乐趣
与行李的多少成反比。
在背包旅行中，这是绝对正确的。
如果能意识到
真正需要的东西非常少，
那会让你很解脱。`,`找出资人要钱，
他们会给你建议，
但如果你要的是建议，
他们会给你钱。`,`我们告诉自己的最大谎言是：
"我不需要写下来，因为我能记住。"`,`私下批评，
公开表扬。`,`不要总犯同样的错误，
试着犯些新错误。`,`作为一个成熟的人，
衡量你成长的尺度是，
你愿意进行多少令人不舒服的谈话。`,`简便的测量方法：
你张开双臂时，
两个指尖之间的距离大致就是你的身高。`,`不要在深夜买任何东西。
你需要买的任何东西，
都可以等到第二天早上再买。`,`当你有好消息和坏消息时，
先说坏消息，
因为我们通常更多记得事情的结尾，
而不是事情的开头。
所以要先抑后扬，
把好消息放在后面说。`,`给供应商、工人和承包商付钱，
一定要马上付清。
如果你这么做，
他们下次会
特别积极地先与你合作。`,`在任何谈判中，
你都应该说出
最有力的一句话：
"你能给出更好的条件吗？"`,`你需要三种能力：
在事情成功之前，
不放弃的能力；
放弃无效事物的能力，
信任他人，
帮你区分这两者的能力。`,`对你的家庭来说，
最好的良药是：
经常在一起吃饭，
不开电视。`,`没有"准时"这回事。
要么你迟到了，
要么你早到了。
这是你的选择。`,`艺术创作不是自私的，
是为其他人服务的。
如果你的创作
不表达真实的自己，
你就是在欺骗我们。`,`在真正的求生环境中，
你不吃东西可以活三周，
不喝水可以活三天，
但若失温或暴热，
你只能活三小时。
所以不要担心食物。
注意温度和水。`,`当你犯错误时，
要飞快地比受委屈的人更严厉地
惩罚自己。
令人意外的是，这可以缓解他们的愤怒。`,`学习如何在独处时不孤独。
独处是创造力涌现的必要条件。`,`当你想放弃时，
再做五个：
五分钟，五页，五步。
然后再做五个。
有时你可以突破并继续前进，
但即使在未能突破的情况下，
你也多做了五个。
告诉你自己，明天可以放弃，
但今天不行。`,`绝不要问别人有没有怀孕。
让她们自己告诉你。`,`在诸事不顺的
日子里做什么，
比在顺风顺水的
日子里做什么，
要重要得多。`,`问问你崇敬的人就会知道，
他们幸运的突破往往发生在
他们偏离主要目标而
绕道的时候。
所以要拥抱弯路。
对任何人来说，
生活都不是一条直线。`,`要变得富有，
不需要赚更多钱；
首先要做的是，更好地管理
已经赚到的钱。`,`对听众演讲时，要经常停顿。
在你用一种新方式讲述某件事之前，
停顿一下，
说完你觉得重要的内容之后，
停顿一下。
停顿是让听众放松一下，
品味一下细节。`,`在互联网上
获得正确答案的最好方式是：
贴一个明显错误的答案，
然后等着别人纠正你。`,`褒奖好行为，
而不是惩罚坏行为，
结果会好十倍，
特别是在
教育儿童和训练动物时。`,`花和写电子邮件内容
同样长的时间，
精心设计邮件的主题，
因为人们往往不读内容，
只看主题。`,`在查看求职者的推荐信时，
他们的前任雇主可能不便
给出负面评价，
所以你可以给雇主这样留言：
"如果你强烈推荐这位申请人，
认为他非常优秀，
请给我回信息。"
如果他们没有回复，
那就把这当作一个负面评价。`,`不要坐等风暴过去，
在雨中起舞吧。`,"创造一些人们值得拥有的东西。",`住酒店时，
把所有东西都放在显眼的地方，
或集中在一起，不要放在抽屉里。
这样你走时就不会落下任何东西。
如果你需要把某个东西放在一边，
比如充电器，
那就在它旁边
放两个别的大件物品，
因为你一下子落下
三件东西的概率较低。`,`拒绝或回避赞美
是不礼貌的。
带着感谢接受赞美，
即使你认为
你不配得到这份赞美。`,`参观名胜古迹时，
一定要读
旁边牌子上的介绍文字。`,`获得某种成功时，
你可能真的会觉得自己是个
冒名顶替者。
你会想："我在骗谁？"
但当你用你独特的
才能和经验
创造出特别的东西时，
你绝对不是冒名顶替者。
你是天选之子，
注定要完成那些
只有你能达成的使命。`,`自驾游时，
要让小孩听话，
你可以带一包他们最喜欢的散装糖果，
当他们行为不端时，
你就往窗外扔一块。`,`请人完成某项任务时，
如果你不知道该付对方多少钱，
可以这么问：
"你觉得公平的价格是多少？"
他们回答的价格通常就是公平的价格。`,`房地产的总体策略是，
购买最好街道上
最差的房产。`,`聪明的人，
不会只为了金钱而拼命工作。`,`你所受的教育
一半在于学习可以忽略什么。`,`如果你做的事情要躲着别人
可能对你没好处。`,`当你需要做出
极度精准的切割时，
不要试图一次到位。
相反，
先大致切一下，
然后一点点地修理，
直到完美。
专业制造者称此为"蠕升"，
即缓慢达到精确的尺度。`,`让他人觉得自己很重要；
这将让他们开心，
也将让你开心。`,`不断寻找
观点的交集，
并停在那里。
这时分歧
将处于边缘。`,`每种产品的90%都是垃圾。
如果你觉得自己不喜欢歌剧、爱情小说、
抖音、乡村音乐、素食、NFT
，
你可以继续尝试，
看看能不能找到那精华的10%。`,`如何对待那些对你没有一点用的人，
将成为评判你的标准。`,`我们往往高估
一天能完成的事，
而低估十年能取得的成就。
拿出十年来，
你可以成就
不可思议的奇迹。
坚持长期主义，
积小胜为大胜，
即使犯了大错误，
也可以慢慢改正。`,`让别人知道
你记得他们的名字，
这样他们就绝不会忘记你的名字。
记住名字的诀窍是
第一次听到时就在心里重复几遍。`,`最好的工作
是一个你不够格的工作，
因为它会迫使你挖掘潜力。
事实上，
要只去应聘那些
你不够格的工作。`,`你可以成为
你想成为的任何人，
所以，
做那个早早结束会议的人。`,`买二手书。
二手书的内容和新书一样。
去图书馆也是一样。`,`智者说：在说话之前，
让你的话经过三道门。
在第一道门，问："这是真的吗？"
在第二道门，问："是必须说的吗？"
在第三道门，问："是出自善意吗？"`,`"我现在应该做什么？"
要回答这个问题，
唯一有效的方式，
是先解决另一个问题：
"我应该成为什么样的人？"`,`登上飞机，
到达酒店客房，
或者开始一份新工作时，
先确定紧急出口的位置。
这只需要一分钟。`,`最好的投资建议：
追求平均的回报，
持有超过平均水平的时间，
这将创造非凡的结果。
买入并持有。`,"走楼梯。",`你真正为某个东西付出的钱，
可能是标价的两倍，
因为你需要精力、时间和金钱，
来安装、学习、维护、修理，
用完还要处理掉，
这些都有成本。
标签上的价格
并不代表全部。`,`如果一名年龄小的
学生学习吃力，
你要做的第一件事：
检查他的视力。`,`对粗鲁的陌生人
彬彬有礼，
会让他惊奇。`,`如果删除
文稿的第一页，
大多数文章和报道的
质量都会大大改善。
要开门见山。`,`如果你相信每个人最好的一面，
那么偶尔被骗，
只会付出微小的代价，
因为当你相信别人最好的一面时，
他们通常待你最好。`,`一个不太聪明但擅长沟通的人，
可能比一个很聪明
但不擅长沟通的人，
做得好得多。
这是好消息，
因为提升沟通技巧，
比提升智力容易得多。`,`当你自问"我的好刀在哪里"
"我的好笔在哪里"时，你要留意。
这意味着你有不好的刀和笔。
把不好的东西清除掉。`,`要想把子女教育好，
可以把你准备花的钱削减一半，
但把陪伴孩子的时间增加一倍。`,"不要戴一顶比你更有个性的帽子。",`往前看，关注方向，
而不是目的地。
保持正确的方向，
就会抵达你想去的地方。`,"被认可，即艺术。",`回到家乡时，
购买最新的当地旅游指南。
每年把自己当一回游客，
你将有很大收获。`,`要脱颖而出，
就要感谢让你的生活
发生变化的老师。`,`购买花园水管、电源延长线或梯子时，
它们应当比你觉得你需要的长度
长得多。
那将是正确的尺寸。`,`当你陷入困境时，
向别人解释你的问题。
通常只需要把问题阐述清楚，
解决方案就会浮出水面。
让"解释问题"
成为解决难题的过程的一部分。`,`不要排队去吃某个有名的美食。
它通常不值得
你花这么长的
等待时间。`,`当被介绍给某人时，
要与对方进行眼神交流，
并数到四，
或者对自己说："我看到你了。"
你们将记住彼此。`,`只需要向团队成员表示
你欣赏他们，
你的团队就能取得重大的成就，
这些成就是你一个人无法企及的。`,`做一个专业人士。
备份之后还要再备份。
至少要有一个物理备份和一个云端备份。
每一种都要多个备份。
如果你丢失了数据、照片或笔记，
你愿意付多少钱找回来？
与后悔相比，备份是廉价的。`,`要想取得世俗的成功，
可以做一些奇怪的事。
让你的怪异成为一种习惯。`,`你的时间和空间是有限的。
那些不能再给你
带来快乐的东西，
要移走、送人、扔掉，
给能给你
带来快乐的东西
腾出时间和空间。`,`在发出紧急信号时，
使用"三次法则"：
三次呼喊，按三次喇叭，
或者吹三次哨子。`,`不要拿别人的外在
与你的内在做比较。`,`探索还是优化？
你会优化你知道畅销的东西，
还是探索新品？
在餐厅吃饭时，
你会点你确定很好吃的菜（优化），
还是尝试新菜品？
你会不断约会新对象（探索），
还是会一直守着遇到的人？
探索与优化最好维持1∶3的平衡。
花三分之一的时间去探索，
花三分之二的时间去优化、深化。
随着年龄的增长，你将越来越难以投入
时间去探索，因为这看起来没有收获，
但你仍要争取付出三分之一的时间去探索。`,`有时，
第一个想法是最好的，
但通常第五个想法才是最好的。
排除那些
显而易见的想法。
试着给自己一个惊喜。`,`别费力气与旧事物斗争，
只管建设新事物。`,`真正的好机会
不会把"好机会"三个字
写在标题里。`,`当有人跟你谈论
人类历史的巅峰时期时，
那个时候一切都好，
然后就开始走下坡路，
那一年往往是他们十岁的那一年
——那是人的生存状态的巅峰。
听他们说话时，
你要记住这一点。`,`刚认识一个人时，
要迅速发现他真实的性格，
可以观察他
在网速极慢时会怎么做。`,`在准备长途徒步旅行时，
不管什么样的旧鞋都优于
任何类型的新鞋。
不要用长途徒步来磨合新鞋。`,`谈判时，
不要追求得到更大的蛋糕，
而要追求把蛋糕做大。`,`多大的事情让你生气，
决定了你的格局有多大。`,`你只看到了别人的2%，
别人只看到了你的2%，
根据那隐藏的98%来做调整。`,`我们的后代取得的成就
将令我们惊异。
但只要我们有想象力，
用今天的材料和工具，
在一定程度上，
我们也能取得他们的成就。
要敢于想象。`,`要多做对他人来说是工作、
对你来说像玩儿一样的事。`,`如果你想做成一件事，
就交给忙碌的人去做。`,`要记住，即使你预期的
修复工作花的时间，
将三倍于预计时间，
最终花的时间，
还将是你预期的三倍。`,`模仿他人，
是一个很好的起点。
模仿自己，
是一个令人失望的终点。`,`如果你把今天做的事
重复365次，
你能指望一年后
达成你想要的目标吗？`,`应聘新工作时，
谈判薪水最好的时机，
是在对方接受你之后，
而不是之前。
到时就会上演一场"胆小鬼博弈"，
双方都不想先说出一个金额，
让对方先给出一个数字
对你有利。`,`要注意
你把注意力放在哪里。`,`要获得最大的效果，
就要聚焦于你最大的机会，
而不是你最大的问题。`,`每一个突破
初看时都是可笑、荒谬的。
事实上，
如果一开始不显得可笑、荒谬，
它就不是突破。`,`经常给孩子读书
是他们能受的最好的教育。`,`如果你在25岁之前不吸烟，
你可能终生都不会吸烟；
如果你在25岁之前吸烟，
你可能终生都不会戒烟。`,`有多少人不欣赏你或你的工作
并不重要。
有多少人欣赏，
是唯一重要的事情。`,`发生车祸后，
留在车里，
比站在路边安全得多，
因为车祸发生后，
在同一位置再发生车祸的可能性上升。`,`求职时要记住，
在某个地方，
有个雇主正在迫切寻找像你这样的人，
如果你出类拔萃，就更是如此。
你真正的任务是找到这样的伯乐，
不管花多少时间，
都是值得的。`,`人生之路上，
不要试图避免意外，
而要直面它。`,"不要在饿的时候去买吃的。",`如果可以根据
你对一个问题的看法
预测出你对
另一个问题的看法，
那么你可能
受制于某种观念。
当你真正独立思考时，
你的结论将是
不可预测的。`,`只需要说一些鼓励的话，
你就真能让别人的生活变得更好。`,`当你面对一项
可以在两分钟之内完成的任务时，
立马去做。`,`你的信念越稳固，你就越有理由
时时质疑这些信念。
不要简单地相信你认为自己相信的一切。`,`客户抱怨时，
即使不是你的错。
也要先道歉，
然后问：
"我们可以怎么做来解决这个问题？"
要假设客户是对的，
这是企业发展需要付出的微小成本。`,`如果你借给别人20美元，
就再也见不到对方的人影了，
因为他不想还钱。
那么这个教训值20美元。`,`一种值得培养的超能力是
从你不喜欢的人那里学习。
这就是"谦逊"。
这是一种勇气，
让愚蠢、可恨、疯狂、刻薄的人
教你一些东西，
因为他们尽管有人格上的缺陷，
但他们都知道
一些你不知道的东西。`,`当你用信用卡租车时，
不要购买额外的保险。`,`对于你喜爱的每一件好东西，
都要问问自己，
喜爱到什么程度最合适。`,`徒步旅行者的守则：
如果你能跨过去，
就不要踩上去；
如果你能绕过去，
就不要跨过去。`,`做出明智决定的诀窍：
站在25年后的视角上，
评估今天的选择。
未来的你会怎么想？`,`要做一个有趣的人，
只需要以不同寻常的坦诚，
讲述你自己的故事。`,`对一群听众讲话时，
最好把目光集中在几个人身上，
而不是在房间里四处"扫射"。
你的眼神告诉别人
你是不是真的相信自己说的话。`,`每天都要有些产出，
主要是因为，
你必须抛弃很多优秀产品，
才能得到一件卓越产品。
为了更好地舍弃，你要相信还能更好，
通过持续的产出，你会明白这一点。`,`虽然逆境会让你学到很多，
但对你的人格的真正考验，
不是你如何应对逆境。
真正的考验是
你如何对待权力。
治愈权力迷恋的
唯一方法是谦卑，
同时承认，
你的力量来自运气。
格局小的人
自以为高人一等，
境界高的人
知道自己只是幸运。`,`专注于你喜欢的东西，
而不是一味贬损你讨厌的东西，
你会变得更好，
也会让别人变得更好。
人生短暂，
把注意力集中在美好的事物上。`,`分东西时，
一个人分，
另一个先选。`,`你很容易
被自己的成功困住。
对轻车熟路的任务说"不"，
对可能失败的任务说"是"。`,`不快乐源自
想要别人拥有的东西。
快乐源自
想要自己已经拥有的东西。`,`带电工作时，
电压会伤人，
但电流会致命。`,`要想广泛传播你的讯息，
遵循这个
广告人普遍
采用的公式：
简化，简化，简化，
然后夸张。`,`注意和谁在一起时你感觉最好。
多和他们在一起。`,`要假设没人擅长记别人的名字。
出于礼貌，再次介绍自己的名字，
即使是对你以前见过的人：
"嗨，我是凯文。"`,`你在工作之外做的事，
可能成为你真正的工作。`,`你能为孩子做的最好的事
就是爱你的配偶。`,`能从别人的角度看待问题，
你就能在世界上畅行无阻。
这种视角转变能带来
发自内心的同理心。
它还赋予你说服他人的能力，
这是伟大设计的关键。
掌握从他人视角看问题的能力，
可以帮你打开无数紧闭的大门。`,`如果你觉得某件事不言自明，
那么你不妨把它点破，
通常这对大家都有好处。`,`冥想时，静坐，关注呼吸。
脑海中会浮现各种想法。
然后把注意力拉回到
呼吸上面，这时大脑就不想了。
走神了，就拉回来。
始终让注意力回到呼吸上，
而不是关注想法。
就这么简单。`,`五年后你会想，
假如当初开始行动就好了。`,`如果我们把自己的烦恼
扔到地上，堆成一大堆，
当看到别人的难题时，
我们会把自己的难题一把抓回来。`,`我们需要启智，
也需要修心。`,`你无法改变过去，
但你可以改变对过去的叙述。
重要的不是
你经历了什么，
而是你怎么对待这些事。`,`美好的旅行，
是向着兴趣出发，
而不是朝着一个地方前进。
找寻你的激情所在，
而不是奔向某个地方。`,`孩子犯错时，
让他自己选择惩罚方式。
他会比你更严厉。`,`在花园里，
要想种一棵10美元的树，
就要挖一个100美元的坑。`,`在人生的每个关键时刻，
都要完全接受这个问题：
"可能发生的最坏情况是什么？"
演练你对"最坏"情况的反应，
等那种情况发生时，那就会像是一场冒险，
而不至于让你裹足不前。`,`创作一个准备扔掉的东西。
写出一本好书的唯一方法是
先写一本糟糕的书。
电影、歌曲、家具，
任何东西，都是如此。`,`在追求崇高的目标时，
从起跑线，
而不是终点线，
衡量你的进度。`,`衣服染上污渍时，
在污渍未干时清除，
成功概率更高。
污渍干后清除难度就大了。`,`对愤怒的正确回应不是愤怒。
当你看到别人愤怒时，
你看到的是他们的痛苦。
对愤怒的正确回应是同情。`,`当你找到自己
真正喜欢的事时，
慢慢做，慢慢享受。`,`有攻击性的狗不会叫，
但会咬人。`,`即便你是一个普通人，
世界上也有一半的人
才能不如你。
虽然不是他们自己的过错，
但他们中的很多人不会处理表格、
复杂的指令或棘手的情况。
善待他们，
因为世界没有善待他们。`,`缺点和优点
是一体两面。
例如，
顽固和毅力之间，
勇敢和愚鲁之间，
只有微小的差别。
唯一的区别在于目标。
如果目标不重要，
那就是愚顽不化和鲁莽愚蠢；
如果目标重要，
那就是不屈不挠的毅力和勇气。
坦然承认自己的缺点，
带着你的缺点去赢得尊严，
但要确保你在坚持追求重要的事情。`,"结局几乎总是更好的事的开端。",`给予，你不会变穷。
不给予，你不可能变富。`,`务必
尽早征求建设性的批评意见。
尽快知道问题所在。
到结束时，
你就失去了改进的机会。`,`为了更好地演讲，
看一段自己讲话的录像。
这会让你震惊，
也让你痛苦，
但这是一条
有效的改进途径。`,`能用无能来解释的，
不要归咎于恶意。`,`担忧毫无意义。
可以肯定的是，
你担心的事，
99%都不会发生。`,`如果一个网站的网址里包含
"真相"这个词，
你就不用去看它。`,`做出承诺时要格外吝啬，
因为履行承诺时，
必须慷慨。`,`你以为
你看清了未来，
只是因为
你看到的其实是眼前。`,`一份妥当的道歉
需要包含三个R。
regret，遗憾（真诚地与对方共情），
responsibility，负责（不责怪别人），
remedy，补救（愿意解决问题）。`,`给年轻人忠告的最好方式是：
弄明白他们真正想做什么，
然后建议他们放手去做。`,`做出大胆的重大改变，
通常比做出微小的渐进改变
容易得多。`,`一个不可告人的巨大秘密是，
每个人，特别是名人，
都是在弥补过失中不断前行的。`,`没有完美，只有进步。
完成胜过完美。`,`如果你相信任何挫折都只是暂时的，
你就选择了幸运。`,`如果你做的事
没有任何人能做，
你求职时就不需要简历。`,`在争端中，
如果要缓和紧张气氛，
你只需要模仿对方的肢体语言。`,`对不感兴趣的东西
保持高度的好奇，
能获得丰厚的回报。`,`识别小偷并不难：
认为人人
都会偷东西的人，
就是小偷。`,`观看自己的倒影，
会让我们在不知不觉中分心。
如果你停止自我审视，
你整天开电话会议的
疲劳就会大大缓解。`,"读你最喜欢的作家读过的书。",`当你无法决定时，问自己：
"哪个选择日后带来的回报比眼前多？"
轻松的选择马上就有回报。
最好的选择最后带来回报。`,`头脑中的想法总是完美的，
但完美的东西从来都不真实。
马上把想法记下来，
画出草图来，
或者做出纸板原型来。
这样，你的想法会更接近真实，
因为它不完美。`,`相信三星级的产品评价，
因为这些评价既讲了好的方面，
也讲了不好的方面，
这是大多数产品的真实情况。`,`始终在一开始就提出你想要什么。
这适用于人际关系、商业和生活。`,`即使你什么也不说，只要认真听，
人们也会认为你是一个很好的谈话对象。`,`好奇心能杀死确定性。
好奇心越强，你的可能性就越多。`,`衡量财富的标准，
不是金钱能买到的东西，
而是金钱买不到的东西。`,`要从错误中学习，
先从嘲笑自己的错误开始。`,`你精心培养的人离去，
是令人遗憾的；
更糟糕的是，
你不培养他们，
他们却留下来。`,`对于争议性问题，
如果你能像对方一样
论证对方的观点，
你的观点就会更有说服力。`,`当你让别人等你时，
他们就开始想到你所有的缺点。`,`信任是一点一滴积累的，
失信却如同洪水决堤。
始终如一地诚实，
就永远不会失信。`,`一个诚实的朋友
对你无所图。`,`人生三分之一的时间
是躺在床上睡觉，
几乎另外三分之一，
是在椅子上坐着。
花钱买好床、好椅子，
是物有所值的投资。`,`倾听的目的
并不是回答，
而是听出弦外之音。`,`如果你确定要去看一部电影，
不要看预告片，
以免毁了一部电影。
只有你不确定是否要看
或者很可能不看的电影，
才去看看预告片。`,`你犯的上一个错误，
是你最好的老师。`,`汽油车的仪表盘上
有一个带小箭头的加油泵标志。
箭头所指的方向
是这辆车油箱所在的一侧。
借车或租车时，
记住这一点。`,`你在家中展示的
最完美的艺术品，
应该是孩子难以忘怀的
奇怪的艺术品。`,`每天只花15分钟，
即每天1%的时间，
来改进你做事的方式，
这是你发展壮大你的事业
最有力的方法。`,`不要问你的孩子
他们今天学了什么，
而要问他们今天帮助了谁。`,`幸福的最大杀手
就是比较。
如果非要比较，
就和昨天的自己比较。`,`20多岁的大好年华，
可以做一些
非同寻常、稀奇古怪、大胆冒险、
不可理喻、疯狂愚蠢、无利可图、
看起来与"成功"不沾边的事。
在余生里，
这些经历将成为你的灵感缪斯。`,`不要用观点来定义自身，
因为那样你就无法改变你的想法了。
用价值观来定义自身。`,`想要成功一次，就专注于结果；
想要不断成功，就专注于
创造结果的过程。`,`你的理想伴侣不是永远和你没有分歧的人，
而是你乐于与之意见相左的人。`,`开阔的心胸
是通往开放思想最直接的路径。`,`如果你限于人生困境，
去一个你从未听说过的地方旅行。`,`改变他人观点最有力的做法是
对其观点
感到好奇。`,`如果你不关心你的手下，
他们也就不会关心你的使命。`,`要加快会议速度，就必须规定，
发言者必须说点
其他参会人不知道的东西。`,`富有者有金钱。
富足者有时间。
富足比富有更容易。`,`独行快，
众行远。`,`你最好的肖像照
不应该在你微笑时拍，
而应该在你大笑之后
安静的那一刻拍。
找一个能让你笑的摄影师。`,`假如你成长了，
你的责任感并没有随之提升，
那么你就没有真正成长。`,`制订计划时，
必须允许自己迷路，
你会找到
最初没有刻意去找的东西。`,`所有财产都需要修理和保养
以保持其自然状态。
你拥有的东西，
最终会左右你。
所以要精心选择。`,`如果你想写文章介绍
某个难以解释的事物，
你可以给朋友写一封内容详细的信，
说说为什么这么难以解释，
然后去掉开头"亲爱的朋友"那一部分，
你就会得到一篇不错的初稿。`,`每周留出一天，
不工作，
不做生意，
不赚钱。
把这一天称为"放空日"
（或叫别的名字）。
利用这一天
休息、充电、
思考人生中最重要的事。
令人意外的是，
你将发现过这个放空日
是你一周里做的最有成效的事。`,`悲观妄想症的反而，
是乐观妄想症。
做一个乐观妄想症患者，
相信
整个宇宙
都在你背后合谋
助你成功。`,`选择那些
能带来更多选项的选项。`,`做事要以终为始。
碗碟架堆满后，
再想调整，
就无从下手了。`,`当你陷入困境时，
把可能行不通的办法
列一个长长的单子。
这份单子上会冒出一颗种子，
这颗种子会长成一个
让你走出困境的解决方案。`,`不管你多大，
现在，
就是你的黄金岁月。
美好的事情会带来金色的回忆，
糟糕的事情会带来宝贵的教训。`,`缓解愤怒最有效的方法是
给自己一点时间。`,`艺术、文学和喜剧，
来源于重新审视生活的日常。
只需要关注日常的细节，
你就能把平凡
化为神奇。`,`最好身无分文地离世。
去世前，把钱给你的受益人；
钱对他们来说，更有意义也更有用。
把钱花光。
你的最后一张支票应该签给殡仪馆，
它应该是张空头支票。`,`看到那个永远在排队的老人了吗？
那就是未来的你。
要有耐心。`,`尽可能多地创造
你可以轻松举办的家庭仪式。
日程上需要例行完成的事，无论大小，
无论至关重要还是微不足道，
都可以成为仪式。
不断重复，
小小的例行仪式就会成为传奇。
盼望是关键。`,`防止衰老的良方
主要是
保持好奇心。`,`生活忙碌，
但别忘了艺术。`,`那些人生哲理将按照你的需要
一一呈现。
如何掌握这些人生哲理
取决于你。
当你真正学会了一个道理之后，
还有下一个。
只要你还活着，
就意味着你还有很多东西要学。`,`人生中只有很少的遗憾，
是遗憾自己做了什么。
几乎所有的遗憾都是遗憾自己没有做什么。`,`你的目标是，
在去世前一天，
你能说，你完全活出了自我。`,`我的这些建议并不是法则。
它们就像帽子。
假如一顶不合适，
试试另一顶。`],cn="advice_history",sh="advice_rotation",il=3,Xg=500,Bn=(c=new Date)=>c.toISOString().split("T")[0],rl=(c,r)=>{try{const s=localStorage.getItem(c);return s?JSON.parse(s):r}catch{return r}},Oc=(c,r)=>{try{localStorage.setItem(c,JSON.stringify(r))}catch(s){console.error("Failed to save to localStorage:",s)}},Qg=c=>{const r=[...c];for(let s=r.length-1;s>0;s--){const i=Math.floor(Math.random()*(s+1));[r[s],r[i]]=[r[i],r[s]]}return r},fh=()=>{const c=Array.from({length:Xg},(r,s)=>s);return{remainingIndices:Qg(c),lastShuffleTime:Date.now()}},Bm=(c,r)=>{const s=rl(cn,{});if(s[c])return{record:s[c],newRotation:r};let i={...r};i.remainingIndices.length<il&&(i=fh());const d=i.remainingIndices.slice(0,il),m=i.remainingIndices.slice(il),S={date:c,advices:d.map(g=>({index:g,read:!1})),currentIndex:0,createdAt:Date.now()};s[c]=S,Oc(cn,s);const y={remainingIndices:m,lastShuffleTime:i.lastShuffleTime};return Oc(sh,y),{record:S,newRotation:y}},ur=(c,r)=>{const s=rl(cn,{});s[c]&&(s[c]={...s[c],...r},Oc(cn,s))},Ym=(c,r)=>{const s=rl(cn,{});s[c]&&(s[c].advices[r].read=!0,Oc(cn,s))},Vg=()=>{const c=rl(cn,{});return Object.keys(c).sort()},Zg=(c,r)=>{const s=rl(cn,{}),i=`${c}-${String(r+1).padStart(2,"0")}`;return Object.keys(s).filter(d=>d.startsWith(i)).sort()},Kg=c=>!!rl(cn,{})[c],kg=()=>{const[c,r]=x.useState(new Date),[s,i]=x.useState(null),[d,m]=x.useState(null),[S,y]=x.useState(!0),[g,h]=x.useState(0);x.useEffect(()=>{const q=rl(sh,null)||fh();m(q);const L=Bn(),{record:yt}=Bm(L,q);i(yt),h(yt.currentIndex),y(!1)},[]);const M=x.useCallback(V=>{if(!d)return;const q=Bn(V),{record:L,newRotation:yt}=Bm(q,d);r(V),i(L),h(L.currentIndex),m(yt)},[d]),D=x.useCallback(()=>{if(g>0){const V=g-1;h(V);const q=Bn(c);ur(q,{currentIndex:V}),s&&i({...s,currentIndex:V})}},[g,c,s]),B=x.useCallback(()=>{if(g<il-1){const V=g+1;h(V);const q=Bn(c);if(ur(q,{currentIndex:V}),Ym(q,V),s){const L=[...s.advices];L[V]={...L[V],read:!0},i({...s,currentIndex:V,advices:L})}}},[g,c,s]),Z=x.useCallback(V=>{if(V>=0&&V<il){h(V);const q=Bn(c);if(ur(q,{currentIndex:V}),Ym(q,V),s){const L=[...s.advices];L[V]={...L[V],read:!0},i({...s,currentIndex:V,advices:L})}}},[c,s]),tt=x.useCallback(()=>{if(!s||S)return"";const V=s.advices[g];return Lg[V?.index]||""},[s,g,S]),w=x.useCallback(()=>!s||S?0:s.advices[g]?.index+1||0,[s,g,S]),Q=x.useCallback(()=>s?s.advices.map(V=>V.index+1):[],[s]),I=x.useCallback(()=>s?s.advices.map(V=>V.read):[],[s]),W=x.useCallback(()=>Bn(c)===Bn(new Date),[c]),F=Bn(c),et=g>0,nt=g<il-1;return{currentAdvice:tt(),currentNumber:w(),currentIndex:g,totalPerDay:il,todayAdviceNumbers:Q(),todayReadStatus:I(),currentDate:c,currentDateString:F,isToday:W(),canGoPrevious:et,canGoNext:nt,goToPrevious:D,goToNext:B,goToAdvice:Z,switchToDate:M,getRecordedDates:Vg,getDatesInMonth:Zg,hasRecord:Kg,isLoading:S}};const Jg=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wg=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,i)=>i?i.toUpperCase():s.toLowerCase()),qm=c=>{const r=Wg(c);return r.charAt(0).toUpperCase()+r.slice(1)},dh=(...c)=>c.filter((r,s,i)=>!!r&&r.trim()!==""&&i.indexOf(r)===s).join(" ").trim(),$g=c=>{for(const r in c)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var Fg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Ig=x.forwardRef(({color:c="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:d="",children:m,iconNode:S,...y},g)=>x.createElement("svg",{ref:g,...Fg,width:r,height:r,stroke:c,strokeWidth:i?Number(s)*24/Number(r):s,className:dh("lucide",d),...!m&&!$g(y)&&{"aria-hidden":"true"},...y},[...S.map(([h,M])=>x.createElement(h,M)),...Array.isArray(m)?m:[m]]));const on=(c,r)=>{const s=x.forwardRef(({className:i,...d},m)=>x.createElement(Ig,{ref:m,iconNode:r,className:dh(`lucide-${Jg(qm(c))}`,`lucide-${c}`,i),...d}));return s.displayName=qm(c),s};const Pg=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],t0=on("calendar-days",Pg);const e0=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],n0=on("calendar",e0);const l0=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],mh=on("chevron-left",l0);const a0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],hh=on("chevron-right",a0);const u0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Gm=on("circle-check",u0);const c0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],i0=on("circle",c0);const o0=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],r0=on("refresh-cw",o0);const s0=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Lm=on("sparkles",s0);const f0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],d0=on("x",f0);function Xm(c,r){if(typeof c=="function")return c(r);c!=null&&(c.current=r)}function Mc(...c){return r=>{let s=!1;const i=c.map(d=>{const m=Xm(d,r);return!s&&typeof m=="function"&&(s=!0),m});if(s)return()=>{for(let d=0;d<i.length;d++){const m=i[d];typeof m=="function"?m():Xm(c[d],null)}}}}function sl(...c){return x.useCallback(Mc(...c),c)}var m0=Symbol.for("react.lazy"),Dc=Sr[" use ".trim().toString()];function h0(c){return typeof c=="object"&&c!==null&&"then"in c}function vh(c){return c!=null&&typeof c=="object"&&"$$typeof"in c&&c.$$typeof===m0&&"_payload"in c&&h0(c._payload)}function v0(c){const r=g0(c),s=x.forwardRef((i,d)=>{let{children:m,...S}=i;vh(m)&&typeof Dc=="function"&&(m=Dc(m._payload));const y=x.Children.toArray(m),g=y.find(b0);if(g){const h=g.props.children,M=y.map(D=>D===g?x.Children.count(h)>1?x.Children.only(null):x.isValidElement(h)?h.props.children:null:D);return C.jsx(r,{...S,ref:d,children:x.isValidElement(h)?x.cloneElement(h,void 0,M):null})}return C.jsx(r,{...S,ref:d,children:m})});return s.displayName=`${c}.Slot`,s}var y0=v0("Slot");function g0(c){const r=x.forwardRef((s,i)=>{let{children:d,...m}=s;if(vh(d)&&typeof Dc=="function"&&(d=Dc(d._payload)),x.isValidElement(d)){const S=x0(d),y=S0(m,d.props);return d.type!==x.Fragment&&(y.ref=i?Mc(i,S):S),x.cloneElement(d,y)}return x.Children.count(d)>1?x.Children.only(null):null});return r.displayName=`${c}.SlotClone`,r}var p0=Symbol("radix.slottable");function b0(c){return x.isValidElement(c)&&typeof c.type=="function"&&"__radixId"in c.type&&c.type.__radixId===p0}function S0(c,r){const s={...r};for(const i in r){const d=c[i],m=r[i];/^on[A-Z]/.test(i)?d&&m?s[i]=(...y)=>{const g=m(...y);return d(...y),g}:d&&(s[i]=d):i==="style"?s[i]={...d,...m}:i==="className"&&(s[i]=[d,m].filter(Boolean).join(" "))}return{...c,...s}}function x0(c){let r=Object.getOwnPropertyDescriptor(c.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?c.ref:(r=Object.getOwnPropertyDescriptor(c,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?c.props.ref:c.props.ref||c.ref)}function yh(c){var r,s,i="";if(typeof c=="string"||typeof c=="number")i+=c;else if(typeof c=="object")if(Array.isArray(c)){var d=c.length;for(r=0;r<d;r++)c[r]&&(s=yh(c[r]))&&(i&&(i+=" "),i+=s)}else for(s in c)c[s]&&(i&&(i+=" "),i+=s);return i}function gh(){for(var c,r,s=0,i="",d=arguments.length;s<d;s++)(c=arguments[s])&&(r=yh(c))&&(i&&(i+=" "),i+=r);return i}const Qm=c=>typeof c=="boolean"?`${c}`:c===0?"0":c,Vm=gh,E0=(c,r)=>s=>{var i;if(r?.variants==null)return Vm(c,s?.class,s?.className);const{variants:d,defaultVariants:m}=r,S=Object.keys(d).map(h=>{const M=s?.[h],D=m?.[h];if(M===null)return null;const B=Qm(M)||Qm(D);return d[h][B]}),y=s&&Object.entries(s).reduce((h,M)=>{let[D,B]=M;return B===void 0||(h[D]=B),h},{}),g=r==null||(i=r.compoundVariants)===null||i===void 0?void 0:i.reduce((h,M)=>{let{class:D,className:B,...Z}=M;return Object.entries(Z).every(tt=>{let[w,Q]=tt;return Array.isArray(Q)?Q.includes({...m,...y}[w]):{...m,...y}[w]===Q})?[...h,D,B]:h},[]);return Vm(c,S,g,s?.class,s?.className)},A0=(c,r)=>{const s=new Array(c.length+r.length);for(let i=0;i<c.length;i++)s[i]=c[i];for(let i=0;i<r.length;i++)s[c.length+i]=r[i];return s},T0=(c,r)=>({classGroupId:c,validator:r}),ph=(c=new Map,r=null,s)=>({nextPart:c,validators:r,classGroupId:s}),_c="-",Zm=[],z0="arbitrary..",C0=c=>{const r=D0(c),{conflictingClassGroups:s,conflictingClassGroupModifiers:i}=c;return{getClassGroupId:S=>{if(S.startsWith("[")&&S.endsWith("]"))return O0(S);const y=S.split(_c),g=y[0]===""&&y.length>1?1:0;return bh(y,g,r)},getConflictingClassGroupIds:(S,y)=>{if(y){const g=i[S],h=s[S];return g?h?A0(h,g):g:h||Zm}return s[S]||Zm}}},bh=(c,r,s)=>{if(c.length-r===0)return s.classGroupId;const d=c[r],m=s.nextPart.get(d);if(m){const h=bh(c,r+1,m);if(h)return h}const S=s.validators;if(S===null)return;const y=r===0?c.join(_c):c.slice(r).join(_c),g=S.length;for(let h=0;h<g;h++){const M=S[h];if(M.validator(y))return M.classGroupId}},O0=c=>c.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const r=c.slice(1,-1),s=r.indexOf(":"),i=r.slice(0,s);return i?z0+i:void 0})(),D0=c=>{const{theme:r,classGroups:s}=c;return _0(s,r)},_0=(c,r)=>{const s=ph();for(const i in c){const d=c[i];xr(d,s,i,r)}return s},xr=(c,r,s,i)=>{const d=c.length;for(let m=0;m<d;m++){const S=c[m];N0(S,r,s,i)}},N0=(c,r,s,i)=>{if(typeof c=="string"){M0(c,r,s);return}if(typeof c=="function"){R0(c,r,s,i);return}j0(c,r,s,i)},M0=(c,r,s)=>{const i=c===""?r:Sh(r,c);i.classGroupId=s},R0=(c,r,s,i)=>{if(U0(c)){xr(c(i),r,s,i);return}r.validators===null&&(r.validators=[]),r.validators.push(T0(s,c))},j0=(c,r,s,i)=>{const d=Object.entries(c),m=d.length;for(let S=0;S<m;S++){const[y,g]=d[S];xr(g,Sh(r,y),s,i)}},Sh=(c,r)=>{let s=c;const i=r.split(_c),d=i.length;for(let m=0;m<d;m++){const S=i[m];let y=s.nextPart.get(S);y||(y=ph(),s.nextPart.set(S,y)),s=y}return s},U0=c=>"isThemeGetter"in c&&c.isThemeGetter===!0,w0=c=>{if(c<1)return{get:()=>{},set:()=>{}};let r=0,s=Object.create(null),i=Object.create(null);const d=(m,S)=>{s[m]=S,r++,r>c&&(r=0,i=s,s=Object.create(null))};return{get(m){let S=s[m];if(S!==void 0)return S;if((S=i[m])!==void 0)return d(m,S),S},set(m,S){m in s?s[m]=S:d(m,S)}}},yr="!",Km=":",H0=[],km=(c,r,s,i,d)=>({modifiers:c,hasImportantModifier:r,baseClassName:s,maybePostfixModifierPosition:i,isExternal:d}),B0=c=>{const{prefix:r,experimentalParseClassName:s}=c;let i=d=>{const m=[];let S=0,y=0,g=0,h;const M=d.length;for(let w=0;w<M;w++){const Q=d[w];if(S===0&&y===0){if(Q===Km){m.push(d.slice(g,w)),g=w+1;continue}if(Q==="/"){h=w;continue}}Q==="["?S++:Q==="]"?S--:Q==="("?y++:Q===")"&&y--}const D=m.length===0?d:d.slice(g);let B=D,Z=!1;D.endsWith(yr)?(B=D.slice(0,-1),Z=!0):D.startsWith(yr)&&(B=D.slice(1),Z=!0);const tt=h&&h>g?h-g:void 0;return km(m,Z,B,tt)};if(r){const d=r+Km,m=i;i=S=>S.startsWith(d)?m(S.slice(d.length)):km(H0,!1,S,void 0,!0)}if(s){const d=i;i=m=>s({className:m,parseClassName:d})}return i},Y0=c=>{const r=new Map;return c.orderSensitiveModifiers.forEach((s,i)=>{r.set(s,1e6+i)}),s=>{const i=[];let d=[];for(let m=0;m<s.length;m++){const S=s[m],y=S[0]==="[",g=r.has(S);y||g?(d.length>0&&(d.sort(),i.push(...d),d=[]),i.push(S)):d.push(S)}return d.length>0&&(d.sort(),i.push(...d)),i}},q0=c=>({cache:w0(c.cacheSize),parseClassName:B0(c),sortModifiers:Y0(c),...C0(c)}),G0=/\s+/,L0=(c,r)=>{const{parseClassName:s,getClassGroupId:i,getConflictingClassGroupIds:d,sortModifiers:m}=r,S=[],y=c.trim().split(G0);let g="";for(let h=y.length-1;h>=0;h-=1){const M=y[h],{isExternal:D,modifiers:B,hasImportantModifier:Z,baseClassName:tt,maybePostfixModifierPosition:w}=s(M);if(D){g=M+(g.length>0?" "+g:g);continue}let Q=!!w,I=i(Q?tt.substring(0,w):tt);if(!I){if(!Q){g=M+(g.length>0?" "+g:g);continue}if(I=i(tt),!I){g=M+(g.length>0?" "+g:g);continue}Q=!1}const W=B.length===0?"":B.length===1?B[0]:m(B).join(":"),F=Z?W+yr:W,et=F+I;if(S.indexOf(et)>-1)continue;S.push(et);const nt=d(I,Q);for(let V=0;V<nt.length;++V){const q=nt[V];S.push(F+q)}g=M+(g.length>0?" "+g:g)}return g},X0=(...c)=>{let r=0,s,i,d="";for(;r<c.length;)(s=c[r++])&&(i=xh(s))&&(d&&(d+=" "),d+=i);return d},xh=c=>{if(typeof c=="string")return c;let r,s="";for(let i=0;i<c.length;i++)c[i]&&(r=xh(c[i]))&&(s&&(s+=" "),s+=r);return s},Q0=(c,...r)=>{let s,i,d,m;const S=g=>{const h=r.reduce((M,D)=>D(M),c());return s=q0(h),i=s.cache.get,d=s.cache.set,m=y,y(g)},y=g=>{const h=i(g);if(h)return h;const M=L0(g,s);return d(g,M),M};return m=S,(...g)=>m(X0(...g))},V0=[],Zt=c=>{const r=s=>s[c]||V0;return r.isThemeGetter=!0,r},Eh=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ah=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Z0=/^\d+\/\d+$/,K0=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,k0=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,J0=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,W0=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,$0=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,$l=c=>Z0.test(c),st=c=>!!c&&!Number.isNaN(Number(c)),Yn=c=>!!c&&Number.isInteger(Number(c)),cr=c=>c.endsWith("%")&&st(c.slice(0,-1)),un=c=>K0.test(c),F0=()=>!0,I0=c=>k0.test(c)&&!J0.test(c),Th=()=>!1,P0=c=>W0.test(c),tp=c=>$0.test(c),ep=c=>!k(c)&&!J(c),np=c=>na(c,Oh,Th),k=c=>Eh.test(c),cl=c=>na(c,Dh,I0),ir=c=>na(c,ip,st),Jm=c=>na(c,zh,Th),lp=c=>na(c,Ch,tp),pc=c=>na(c,_h,P0),J=c=>Ah.test(c),Ia=c=>la(c,Dh),ap=c=>la(c,op),Wm=c=>la(c,zh),up=c=>la(c,Oh),cp=c=>la(c,Ch),bc=c=>la(c,_h,!0),na=(c,r,s)=>{const i=Eh.exec(c);return i?i[1]?r(i[1]):s(i[2]):!1},la=(c,r,s=!1)=>{const i=Ah.exec(c);return i?i[1]?r(i[1]):s:!1},zh=c=>c==="position"||c==="percentage",Ch=c=>c==="image"||c==="url",Oh=c=>c==="length"||c==="size"||c==="bg-size",Dh=c=>c==="length",ip=c=>c==="number",op=c=>c==="family-name",_h=c=>c==="shadow",rp=()=>{const c=Zt("color"),r=Zt("font"),s=Zt("text"),i=Zt("font-weight"),d=Zt("tracking"),m=Zt("leading"),S=Zt("breakpoint"),y=Zt("container"),g=Zt("spacing"),h=Zt("radius"),M=Zt("shadow"),D=Zt("inset-shadow"),B=Zt("text-shadow"),Z=Zt("drop-shadow"),tt=Zt("blur"),w=Zt("perspective"),Q=Zt("aspect"),I=Zt("ease"),W=Zt("animate"),F=()=>["auto","avoid","all","avoid-page","page","left","right","column"],et=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],nt=()=>[...et(),J,k],V=()=>["auto","hidden","clip","visible","scroll"],q=()=>["auto","contain","none"],L=()=>[J,k,g],yt=()=>[$l,"full","auto",...L()],Dt=()=>[Yn,"none","subgrid",J,k],gt=()=>["auto",{span:["full",Yn,J,k]},Yn,J,k],Ut=()=>[Yn,"auto",J,k],Se=()=>["auto","min","max","fr",J,k],ee=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],qt=()=>["start","end","center","stretch","center-safe","end-safe"],_=()=>["auto",...L()],G=()=>[$l,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...L()],H=()=>[c,J,k],St=()=>[...et(),Wm,Jm,{position:[J,k]}],Et=()=>["no-repeat",{repeat:["","x","y","space","round"]}],b=()=>["auto","cover","contain",up,np,{size:[J,k]}],j=()=>[cr,Ia,cl],Y=()=>["","none","full",h,J,k],X=()=>["",st,Ia,cl],ut=()=>["solid","dashed","dotted","double"],rt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],at=()=>[st,cr,Wm,Jm],Kt=()=>["","none",tt,J,k],Nt=()=>["none",st,J,k],we=()=>["none",st,J,k],sn=()=>[st,J,k],fn=()=>[$l,"full",...L()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[un],breakpoint:[un],color:[F0],container:[un],"drop-shadow":[un],ease:["in","out","in-out"],font:[ep],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[un],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[un],shadow:[un],spacing:["px",st],text:[un],"text-shadow":[un],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",$l,k,J,Q]}],container:["container"],columns:[{columns:[st,k,J,y]}],"break-after":[{"break-after":F()}],"break-before":[{"break-before":F()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:nt()}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:q()}],"overscroll-x":[{"overscroll-x":q()}],"overscroll-y":[{"overscroll-y":q()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:yt()}],"inset-x":[{"inset-x":yt()}],"inset-y":[{"inset-y":yt()}],start:[{start:yt()}],end:[{end:yt()}],top:[{top:yt()}],right:[{right:yt()}],bottom:[{bottom:yt()}],left:[{left:yt()}],visibility:["visible","invisible","collapse"],z:[{z:[Yn,"auto",J,k]}],basis:[{basis:[$l,"full","auto",y,...L()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[st,$l,"auto","initial","none",k]}],grow:[{grow:["",st,J,k]}],shrink:[{shrink:["",st,J,k]}],order:[{order:[Yn,"first","last","none",J,k]}],"grid-cols":[{"grid-cols":Dt()}],"col-start-end":[{col:gt()}],"col-start":[{"col-start":Ut()}],"col-end":[{"col-end":Ut()}],"grid-rows":[{"grid-rows":Dt()}],"row-start-end":[{row:gt()}],"row-start":[{"row-start":Ut()}],"row-end":[{"row-end":Ut()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Se()}],"auto-rows":[{"auto-rows":Se()}],gap:[{gap:L()}],"gap-x":[{"gap-x":L()}],"gap-y":[{"gap-y":L()}],"justify-content":[{justify:[...ee(),"normal"]}],"justify-items":[{"justify-items":[...qt(),"normal"]}],"justify-self":[{"justify-self":["auto",...qt()]}],"align-content":[{content:["normal",...ee()]}],"align-items":[{items:[...qt(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...qt(),{baseline:["","last"]}]}],"place-content":[{"place-content":ee()}],"place-items":[{"place-items":[...qt(),"baseline"]}],"place-self":[{"place-self":["auto",...qt()]}],p:[{p:L()}],px:[{px:L()}],py:[{py:L()}],ps:[{ps:L()}],pe:[{pe:L()}],pt:[{pt:L()}],pr:[{pr:L()}],pb:[{pb:L()}],pl:[{pl:L()}],m:[{m:_()}],mx:[{mx:_()}],my:[{my:_()}],ms:[{ms:_()}],me:[{me:_()}],mt:[{mt:_()}],mr:[{mr:_()}],mb:[{mb:_()}],ml:[{ml:_()}],"space-x":[{"space-x":L()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":L()}],"space-y-reverse":["space-y-reverse"],size:[{size:G()}],w:[{w:[y,"screen",...G()]}],"min-w":[{"min-w":[y,"screen","none",...G()]}],"max-w":[{"max-w":[y,"screen","none","prose",{screen:[S]},...G()]}],h:[{h:["screen","lh",...G()]}],"min-h":[{"min-h":["screen","lh","none",...G()]}],"max-h":[{"max-h":["screen","lh",...G()]}],"font-size":[{text:["base",s,Ia,cl]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,J,ir]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",cr,k]}],"font-family":[{font:[ap,k,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[d,J,k]}],"line-clamp":[{"line-clamp":[st,"none",J,ir]}],leading:[{leading:[m,...L()]}],"list-image":[{"list-image":["none",J,k]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",J,k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:H()}],"text-color":[{text:H()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ut(),"wavy"]}],"text-decoration-thickness":[{decoration:[st,"from-font","auto",J,cl]}],"text-decoration-color":[{decoration:H()}],"underline-offset":[{"underline-offset":[st,"auto",J,k]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",J,k]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",J,k]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:St()}],"bg-repeat":[{bg:Et()}],"bg-size":[{bg:b()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Yn,J,k],radial:["",J,k],conic:[Yn,J,k]},cp,lp]}],"bg-color":[{bg:H()}],"gradient-from-pos":[{from:j()}],"gradient-via-pos":[{via:j()}],"gradient-to-pos":[{to:j()}],"gradient-from":[{from:H()}],"gradient-via":[{via:H()}],"gradient-to":[{to:H()}],rounded:[{rounded:Y()}],"rounded-s":[{"rounded-s":Y()}],"rounded-e":[{"rounded-e":Y()}],"rounded-t":[{"rounded-t":Y()}],"rounded-r":[{"rounded-r":Y()}],"rounded-b":[{"rounded-b":Y()}],"rounded-l":[{"rounded-l":Y()}],"rounded-ss":[{"rounded-ss":Y()}],"rounded-se":[{"rounded-se":Y()}],"rounded-ee":[{"rounded-ee":Y()}],"rounded-es":[{"rounded-es":Y()}],"rounded-tl":[{"rounded-tl":Y()}],"rounded-tr":[{"rounded-tr":Y()}],"rounded-br":[{"rounded-br":Y()}],"rounded-bl":[{"rounded-bl":Y()}],"border-w":[{border:X()}],"border-w-x":[{"border-x":X()}],"border-w-y":[{"border-y":X()}],"border-w-s":[{"border-s":X()}],"border-w-e":[{"border-e":X()}],"border-w-t":[{"border-t":X()}],"border-w-r":[{"border-r":X()}],"border-w-b":[{"border-b":X()}],"border-w-l":[{"border-l":X()}],"divide-x":[{"divide-x":X()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":X()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ut(),"hidden","none"]}],"divide-style":[{divide:[...ut(),"hidden","none"]}],"border-color":[{border:H()}],"border-color-x":[{"border-x":H()}],"border-color-y":[{"border-y":H()}],"border-color-s":[{"border-s":H()}],"border-color-e":[{"border-e":H()}],"border-color-t":[{"border-t":H()}],"border-color-r":[{"border-r":H()}],"border-color-b":[{"border-b":H()}],"border-color-l":[{"border-l":H()}],"divide-color":[{divide:H()}],"outline-style":[{outline:[...ut(),"none","hidden"]}],"outline-offset":[{"outline-offset":[st,J,k]}],"outline-w":[{outline:["",st,Ia,cl]}],"outline-color":[{outline:H()}],shadow:[{shadow:["","none",M,bc,pc]}],"shadow-color":[{shadow:H()}],"inset-shadow":[{"inset-shadow":["none",D,bc,pc]}],"inset-shadow-color":[{"inset-shadow":H()}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:H()}],"ring-offset-w":[{"ring-offset":[st,cl]}],"ring-offset-color":[{"ring-offset":H()}],"inset-ring-w":[{"inset-ring":X()}],"inset-ring-color":[{"inset-ring":H()}],"text-shadow":[{"text-shadow":["none",B,bc,pc]}],"text-shadow-color":[{"text-shadow":H()}],opacity:[{opacity:[st,J,k]}],"mix-blend":[{"mix-blend":[...rt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":rt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[st]}],"mask-image-linear-from-pos":[{"mask-linear-from":at()}],"mask-image-linear-to-pos":[{"mask-linear-to":at()}],"mask-image-linear-from-color":[{"mask-linear-from":H()}],"mask-image-linear-to-color":[{"mask-linear-to":H()}],"mask-image-t-from-pos":[{"mask-t-from":at()}],"mask-image-t-to-pos":[{"mask-t-to":at()}],"mask-image-t-from-color":[{"mask-t-from":H()}],"mask-image-t-to-color":[{"mask-t-to":H()}],"mask-image-r-from-pos":[{"mask-r-from":at()}],"mask-image-r-to-pos":[{"mask-r-to":at()}],"mask-image-r-from-color":[{"mask-r-from":H()}],"mask-image-r-to-color":[{"mask-r-to":H()}],"mask-image-b-from-pos":[{"mask-b-from":at()}],"mask-image-b-to-pos":[{"mask-b-to":at()}],"mask-image-b-from-color":[{"mask-b-from":H()}],"mask-image-b-to-color":[{"mask-b-to":H()}],"mask-image-l-from-pos":[{"mask-l-from":at()}],"mask-image-l-to-pos":[{"mask-l-to":at()}],"mask-image-l-from-color":[{"mask-l-from":H()}],"mask-image-l-to-color":[{"mask-l-to":H()}],"mask-image-x-from-pos":[{"mask-x-from":at()}],"mask-image-x-to-pos":[{"mask-x-to":at()}],"mask-image-x-from-color":[{"mask-x-from":H()}],"mask-image-x-to-color":[{"mask-x-to":H()}],"mask-image-y-from-pos":[{"mask-y-from":at()}],"mask-image-y-to-pos":[{"mask-y-to":at()}],"mask-image-y-from-color":[{"mask-y-from":H()}],"mask-image-y-to-color":[{"mask-y-to":H()}],"mask-image-radial":[{"mask-radial":[J,k]}],"mask-image-radial-from-pos":[{"mask-radial-from":at()}],"mask-image-radial-to-pos":[{"mask-radial-to":at()}],"mask-image-radial-from-color":[{"mask-radial-from":H()}],"mask-image-radial-to-color":[{"mask-radial-to":H()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":et()}],"mask-image-conic-pos":[{"mask-conic":[st]}],"mask-image-conic-from-pos":[{"mask-conic-from":at()}],"mask-image-conic-to-pos":[{"mask-conic-to":at()}],"mask-image-conic-from-color":[{"mask-conic-from":H()}],"mask-image-conic-to-color":[{"mask-conic-to":H()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:St()}],"mask-repeat":[{mask:Et()}],"mask-size":[{mask:b()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",J,k]}],filter:[{filter:["","none",J,k]}],blur:[{blur:Kt()}],brightness:[{brightness:[st,J,k]}],contrast:[{contrast:[st,J,k]}],"drop-shadow":[{"drop-shadow":["","none",Z,bc,pc]}],"drop-shadow-color":[{"drop-shadow":H()}],grayscale:[{grayscale:["",st,J,k]}],"hue-rotate":[{"hue-rotate":[st,J,k]}],invert:[{invert:["",st,J,k]}],saturate:[{saturate:[st,J,k]}],sepia:[{sepia:["",st,J,k]}],"backdrop-filter":[{"backdrop-filter":["","none",J,k]}],"backdrop-blur":[{"backdrop-blur":Kt()}],"backdrop-brightness":[{"backdrop-brightness":[st,J,k]}],"backdrop-contrast":[{"backdrop-contrast":[st,J,k]}],"backdrop-grayscale":[{"backdrop-grayscale":["",st,J,k]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[st,J,k]}],"backdrop-invert":[{"backdrop-invert":["",st,J,k]}],"backdrop-opacity":[{"backdrop-opacity":[st,J,k]}],"backdrop-saturate":[{"backdrop-saturate":[st,J,k]}],"backdrop-sepia":[{"backdrop-sepia":["",st,J,k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":L()}],"border-spacing-x":[{"border-spacing-x":L()}],"border-spacing-y":[{"border-spacing-y":L()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",J,k]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[st,"initial",J,k]}],ease:[{ease:["linear","initial",I,J,k]}],delay:[{delay:[st,J,k]}],animate:[{animate:["none",W,J,k]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[w,J,k]}],"perspective-origin":[{"perspective-origin":nt()}],rotate:[{rotate:Nt()}],"rotate-x":[{"rotate-x":Nt()}],"rotate-y":[{"rotate-y":Nt()}],"rotate-z":[{"rotate-z":Nt()}],scale:[{scale:we()}],"scale-x":[{"scale-x":we()}],"scale-y":[{"scale-y":we()}],"scale-z":[{"scale-z":we()}],"scale-3d":["scale-3d"],skew:[{skew:sn()}],"skew-x":[{"skew-x":sn()}],"skew-y":[{"skew-y":sn()}],transform:[{transform:[J,k,"","none","gpu","cpu"]}],"transform-origin":[{origin:nt()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:fn()}],"translate-x":[{"translate-x":fn()}],"translate-y":[{"translate-y":fn()}],"translate-z":[{"translate-z":fn()}],"translate-none":["translate-none"],accent:[{accent:H()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:H()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",J,k]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",J,k]}],fill:[{fill:["none",...H()]}],"stroke-w":[{stroke:[st,Ia,cl,ir]}],stroke:[{stroke:["none",...H()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},sp=Q0(rp);function fl(...c){return sp(gh(c))}const fp=E0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function ta({className:c,variant:r="default",size:s="default",asChild:i=!1,...d}){const m=i?y0:"button";return C.jsx(m,{"code-path":"src/components/ui/button.tsx:52:5","data-slot":"button","data-variant":r,"data-size":s,className:fl(fp({variant:r,size:s,className:c})),...d})}function Gn(c,r,{checkForDefaultPrevented:s=!0}={}){return function(d){if(c?.(d),s===!1||!d.defaultPrevented)return r?.(d)}}function dp(c,r){const s=x.createContext(r),i=m=>{const{children:S,...y}=m,g=x.useMemo(()=>y,Object.values(y));return C.jsx(s.Provider,{value:g,children:S})};i.displayName=c+"Provider";function d(m){const S=x.useContext(s);if(S)return S;if(r!==void 0)return r;throw new Error(`\`${m}\` must be used within \`${c}\``)}return[i,d]}function mp(c,r=[]){let s=[];function i(m,S){const y=x.createContext(S),g=s.length;s=[...s,S];const h=D=>{const{scope:B,children:Z,...tt}=D,w=B?.[c]?.[g]||y,Q=x.useMemo(()=>tt,Object.values(tt));return C.jsx(w.Provider,{value:Q,children:Z})};h.displayName=m+"Provider";function M(D,B){const Z=B?.[c]?.[g]||y,tt=x.useContext(Z);if(tt)return tt;if(S!==void 0)return S;throw new Error(`\`${D}\` must be used within \`${m}\``)}return[h,M]}const d=()=>{const m=s.map(S=>x.createContext(S));return function(y){const g=y?.[c]||m;return x.useMemo(()=>({[`__scope${c}`]:{...y,[c]:g}}),[y,g])}};return d.scopeName=c,[i,hp(d,...r)]}function hp(...c){const r=c[0];if(c.length===1)return r;const s=()=>{const i=c.map(d=>({useScope:d(),scopeName:d.scopeName}));return function(m){const S=i.reduce((y,{useScope:g,scopeName:h})=>{const D=g(m)[`__scope${h}`];return{...y,...D}},{});return x.useMemo(()=>({[`__scope${r.scopeName}`]:S}),[S])}};return s.scopeName=r.scopeName,s}var Pa=globalThis?.document?x.useLayoutEffect:()=>{},vp=Sr[" useId ".trim().toString()]||(()=>{}),yp=0;function or(c){const[r,s]=x.useState(vp());return Pa(()=>{s(i=>i??String(yp++))},[c]),c||(r?`radix-${r}`:"")}var gp=Sr[" useInsertionEffect ".trim().toString()]||Pa;function pp({prop:c,defaultProp:r,onChange:s=()=>{},caller:i}){const[d,m,S]=bp({defaultProp:r,onChange:s}),y=c!==void 0,g=y?c:d;{const M=x.useRef(c!==void 0);x.useEffect(()=>{const D=M.current;D!==y&&console.warn(`${i} is changing from ${D?"controlled":"uncontrolled"} to ${y?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),M.current=y},[y,i])}const h=x.useCallback(M=>{if(y){const D=Sp(M)?M(c):M;D!==c&&S.current?.(D)}else m(M)},[y,c,m,S]);return[g,h]}function bp({defaultProp:c,onChange:r}){const[s,i]=x.useState(c),d=x.useRef(s),m=x.useRef(r);return gp(()=>{m.current=r},[r]),x.useEffect(()=>{d.current!==s&&(m.current?.(s),d.current=s)},[s,d]),[s,i,m]}function Sp(c){return typeof c=="function"}var Nh=rh();const xp=oh(Nh);function Ep(c){const r=Ap(c),s=x.forwardRef((i,d)=>{const{children:m,...S}=i,y=x.Children.toArray(m),g=y.find(zp);if(g){const h=g.props.children,M=y.map(D=>D===g?x.Children.count(h)>1?x.Children.only(null):x.isValidElement(h)?h.props.children:null:D);return C.jsx(r,{...S,ref:d,children:x.isValidElement(h)?x.cloneElement(h,void 0,M):null})}return C.jsx(r,{...S,ref:d,children:m})});return s.displayName=`${c}.Slot`,s}function Ap(c){const r=x.forwardRef((s,i)=>{const{children:d,...m}=s;if(x.isValidElement(d)){const S=Op(d),y=Cp(m,d.props);return d.type!==x.Fragment&&(y.ref=i?Mc(i,S):S),x.cloneElement(d,y)}return x.Children.count(d)>1?x.Children.only(null):null});return r.displayName=`${c}.SlotClone`,r}var Tp=Symbol("radix.slottable");function zp(c){return x.isValidElement(c)&&typeof c.type=="function"&&"__radixId"in c.type&&c.type.__radixId===Tp}function Cp(c,r){const s={...r};for(const i in r){const d=c[i],m=r[i];/^on[A-Z]/.test(i)?d&&m?s[i]=(...y)=>{const g=m(...y);return d(...y),g}:d&&(s[i]=d):i==="style"?s[i]={...d,...m}:i==="className"&&(s[i]=[d,m].filter(Boolean).join(" "))}return{...c,...s}}function Op(c){let r=Object.getOwnPropertyDescriptor(c.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?c.ref:(r=Object.getOwnPropertyDescriptor(c,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?c.props.ref:c.props.ref||c.ref)}var Dp=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],rn=Dp.reduce((c,r)=>{const s=Ep(`Primitive.${r}`),i=x.forwardRef((d,m)=>{const{asChild:S,...y}=d,g=S?s:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),C.jsx(g,{...y,ref:m})});return i.displayName=`Primitive.${r}`,{...c,[r]:i}},{});function _p(c,r){c&&Nh.flushSync(()=>c.dispatchEvent(r))}function tu(c){const r=x.useRef(c);return x.useEffect(()=>{r.current=c}),x.useMemo(()=>(...s)=>r.current?.(...s),[])}function Np(c,r=globalThis?.document){const s=tu(c);x.useEffect(()=>{const i=d=>{d.key==="Escape"&&s(d)};return r.addEventListener("keydown",i,{capture:!0}),()=>r.removeEventListener("keydown",i,{capture:!0})},[s,r])}var Mp="DismissableLayer",gr="dismissableLayer.update",Rp="dismissableLayer.pointerDownOutside",jp="dismissableLayer.focusOutside",$m,Mh=x.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Rh=x.forwardRef((c,r)=>{const{disableOutsidePointerEvents:s=!1,onEscapeKeyDown:i,onPointerDownOutside:d,onFocusOutside:m,onInteractOutside:S,onDismiss:y,...g}=c,h=x.useContext(Mh),[M,D]=x.useState(null),B=M?.ownerDocument??globalThis?.document,[,Z]=x.useState({}),tt=sl(r,q=>D(q)),w=Array.from(h.layers),[Q]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),I=w.indexOf(Q),W=M?w.indexOf(M):-1,F=h.layersWithOutsidePointerEventsDisabled.size>0,et=W>=I,nt=Hp(q=>{const L=q.target,yt=[...h.branches].some(Dt=>Dt.contains(L));!et||yt||(d?.(q),S?.(q),q.defaultPrevented||y?.())},B),V=Bp(q=>{const L=q.target;[...h.branches].some(Dt=>Dt.contains(L))||(m?.(q),S?.(q),q.defaultPrevented||y?.())},B);return Np(q=>{W===h.layers.size-1&&(i?.(q),!q.defaultPrevented&&y&&(q.preventDefault(),y()))},B),x.useEffect(()=>{if(M)return s&&(h.layersWithOutsidePointerEventsDisabled.size===0&&($m=B.body.style.pointerEvents,B.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(M)),h.layers.add(M),Fm(),()=>{s&&h.layersWithOutsidePointerEventsDisabled.size===1&&(B.body.style.pointerEvents=$m)}},[M,B,s,h]),x.useEffect(()=>()=>{M&&(h.layers.delete(M),h.layersWithOutsidePointerEventsDisabled.delete(M),Fm())},[M,h]),x.useEffect(()=>{const q=()=>Z({});return document.addEventListener(gr,q),()=>document.removeEventListener(gr,q)},[]),C.jsx(rn.div,{...g,ref:tt,style:{pointerEvents:F?et?"auto":"none":void 0,...c.style},onFocusCapture:Gn(c.onFocusCapture,V.onFocusCapture),onBlurCapture:Gn(c.onBlurCapture,V.onBlurCapture),onPointerDownCapture:Gn(c.onPointerDownCapture,nt.onPointerDownCapture)})});Rh.displayName=Mp;var Up="DismissableLayerBranch",wp=x.forwardRef((c,r)=>{const s=x.useContext(Mh),i=x.useRef(null),d=sl(r,i);return x.useEffect(()=>{const m=i.current;if(m)return s.branches.add(m),()=>{s.branches.delete(m)}},[s.branches]),C.jsx(rn.div,{...c,ref:d})});wp.displayName=Up;function Hp(c,r=globalThis?.document){const s=tu(c),i=x.useRef(!1),d=x.useRef(()=>{});return x.useEffect(()=>{const m=y=>{if(y.target&&!i.current){let g=function(){jh(Rp,s,h,{discrete:!0})};const h={originalEvent:y};y.pointerType==="touch"?(r.removeEventListener("click",d.current),d.current=g,r.addEventListener("click",d.current,{once:!0})):g()}else r.removeEventListener("click",d.current);i.current=!1},S=window.setTimeout(()=>{r.addEventListener("pointerdown",m)},0);return()=>{window.clearTimeout(S),r.removeEventListener("pointerdown",m),r.removeEventListener("click",d.current)}},[r,s]),{onPointerDownCapture:()=>i.current=!0}}function Bp(c,r=globalThis?.document){const s=tu(c),i=x.useRef(!1);return x.useEffect(()=>{const d=m=>{m.target&&!i.current&&jh(jp,s,{originalEvent:m},{discrete:!1})};return r.addEventListener("focusin",d),()=>r.removeEventListener("focusin",d)},[r,s]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function Fm(){const c=new CustomEvent(gr);document.dispatchEvent(c)}function jh(c,r,s,{discrete:i}){const d=s.originalEvent.target,m=new CustomEvent(c,{bubbles:!1,cancelable:!0,detail:s});r&&d.addEventListener(c,r,{once:!0}),i?_p(d,m):d.dispatchEvent(m)}var rr="focusScope.autoFocusOnMount",sr="focusScope.autoFocusOnUnmount",Im={bubbles:!1,cancelable:!0},Yp="FocusScope",Uh=x.forwardRef((c,r)=>{const{loop:s=!1,trapped:i=!1,onMountAutoFocus:d,onUnmountAutoFocus:m,...S}=c,[y,g]=x.useState(null),h=tu(d),M=tu(m),D=x.useRef(null),B=sl(r,w=>g(w)),Z=x.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;x.useEffect(()=>{if(i){let w=function(F){if(Z.paused||!y)return;const et=F.target;y.contains(et)?D.current=et:qn(D.current,{select:!0})},Q=function(F){if(Z.paused||!y)return;const et=F.relatedTarget;et!==null&&(y.contains(et)||qn(D.current,{select:!0}))},I=function(F){if(document.activeElement===document.body)for(const nt of F)nt.removedNodes.length>0&&qn(y)};document.addEventListener("focusin",w),document.addEventListener("focusout",Q);const W=new MutationObserver(I);return y&&W.observe(y,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",w),document.removeEventListener("focusout",Q),W.disconnect()}}},[i,y,Z.paused]),x.useEffect(()=>{if(y){th.add(Z);const w=document.activeElement;if(!y.contains(w)){const I=new CustomEvent(rr,Im);y.addEventListener(rr,h),y.dispatchEvent(I),I.defaultPrevented||(qp(Vp(wh(y)),{select:!0}),document.activeElement===w&&qn(y))}return()=>{y.removeEventListener(rr,h),setTimeout(()=>{const I=new CustomEvent(sr,Im);y.addEventListener(sr,M),y.dispatchEvent(I),I.defaultPrevented||qn(w??document.body,{select:!0}),y.removeEventListener(sr,M),th.remove(Z)},0)}}},[y,h,M,Z]);const tt=x.useCallback(w=>{if(!s&&!i||Z.paused)return;const Q=w.key==="Tab"&&!w.altKey&&!w.ctrlKey&&!w.metaKey,I=document.activeElement;if(Q&&I){const W=w.currentTarget,[F,et]=Gp(W);F&&et?!w.shiftKey&&I===et?(w.preventDefault(),s&&qn(F,{select:!0})):w.shiftKey&&I===F&&(w.preventDefault(),s&&qn(et,{select:!0})):I===W&&w.preventDefault()}},[s,i,Z.paused]);return C.jsx(rn.div,{tabIndex:-1,...S,ref:B,onKeyDown:tt})});Uh.displayName=Yp;function qp(c,{select:r=!1}={}){const s=document.activeElement;for(const i of c)if(qn(i,{select:r}),document.activeElement!==s)return}function Gp(c){const r=wh(c),s=Pm(r,c),i=Pm(r.reverse(),c);return[s,i]}function wh(c){const r=[],s=document.createTreeWalker(c,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const d=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||d?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)r.push(s.currentNode);return r}function Pm(c,r){for(const s of c)if(!Lp(s,{upTo:r}))return s}function Lp(c,{upTo:r}){if(getComputedStyle(c).visibility==="hidden")return!0;for(;c;){if(r!==void 0&&c===r)return!1;if(getComputedStyle(c).display==="none")return!0;c=c.parentElement}return!1}function Xp(c){return c instanceof HTMLInputElement&&"select"in c}function qn(c,{select:r=!1}={}){if(c&&c.focus){const s=document.activeElement;c.focus({preventScroll:!0}),c!==s&&Xp(c)&&r&&c.select()}}var th=Qp();function Qp(){let c=[];return{add(r){const s=c[0];r!==s&&s?.pause(),c=eh(c,r),c.unshift(r)},remove(r){c=eh(c,r),c[0]?.resume()}}}function eh(c,r){const s=[...c],i=s.indexOf(r);return i!==-1&&s.splice(i,1),s}function Vp(c){return c.filter(r=>r.tagName!=="A")}var Zp="Portal",Hh=x.forwardRef((c,r)=>{const{container:s,...i}=c,[d,m]=x.useState(!1);Pa(()=>m(!0),[]);const S=s||d&&globalThis?.document?.body;return S?xp.createPortal(C.jsx(rn.div,{...i,ref:r}),S):null});Hh.displayName=Zp;function Kp(c,r){return x.useReducer((s,i)=>r[s][i]??s,c)}var Rc=c=>{const{present:r,children:s}=c,i=kp(r),d=typeof s=="function"?s({present:i.isPresent}):x.Children.only(s),m=sl(i.ref,Jp(d));return typeof s=="function"||i.isPresent?x.cloneElement(d,{ref:m}):null};Rc.displayName="Presence";function kp(c){const[r,s]=x.useState(),i=x.useRef(null),d=x.useRef(c),m=x.useRef("none"),S=c?"mounted":"unmounted",[y,g]=Kp(S,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return x.useEffect(()=>{const h=Sc(i.current);m.current=y==="mounted"?h:"none"},[y]),Pa(()=>{const h=i.current,M=d.current;if(M!==c){const B=m.current,Z=Sc(h);c?g("MOUNT"):Z==="none"||h?.display==="none"?g("UNMOUNT"):g(M&&B!==Z?"ANIMATION_OUT":"UNMOUNT"),d.current=c}},[c,g]),Pa(()=>{if(r){let h;const M=r.ownerDocument.defaultView??window,D=Z=>{const w=Sc(i.current).includes(CSS.escape(Z.animationName));if(Z.target===r&&w&&(g("ANIMATION_END"),!d.current)){const Q=r.style.animationFillMode;r.style.animationFillMode="forwards",h=M.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=Q)})}},B=Z=>{Z.target===r&&(m.current=Sc(i.current))};return r.addEventListener("animationstart",B),r.addEventListener("animationcancel",D),r.addEventListener("animationend",D),()=>{M.clearTimeout(h),r.removeEventListener("animationstart",B),r.removeEventListener("animationcancel",D),r.removeEventListener("animationend",D)}}else g("ANIMATION_END")},[r,g]),{isPresent:["mounted","unmountSuspended"].includes(y),ref:x.useCallback(h=>{i.current=h?getComputedStyle(h):null,s(h)},[])}}function Sc(c){return c?.animationName||"none"}function Jp(c){let r=Object.getOwnPropertyDescriptor(c.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?c.ref:(r=Object.getOwnPropertyDescriptor(c,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?c.props.ref:c.props.ref||c.ref)}var fr=0;function Wp(){x.useEffect(()=>{const c=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",c[0]??nh()),document.body.insertAdjacentElement("beforeend",c[1]??nh()),fr++,()=>{fr===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),fr--}},[])}function nh(){const c=document.createElement("span");return c.setAttribute("data-radix-focus-guard",""),c.tabIndex=0,c.style.outline="none",c.style.opacity="0",c.style.position="fixed",c.style.pointerEvents="none",c}var Ge=function(){return Ge=Object.assign||function(r){for(var s,i=1,d=arguments.length;i<d;i++){s=arguments[i];for(var m in s)Object.prototype.hasOwnProperty.call(s,m)&&(r[m]=s[m])}return r},Ge.apply(this,arguments)};function Bh(c,r){var s={};for(var i in c)Object.prototype.hasOwnProperty.call(c,i)&&r.indexOf(i)<0&&(s[i]=c[i]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,i=Object.getOwnPropertySymbols(c);d<i.length;d++)r.indexOf(i[d])<0&&Object.prototype.propertyIsEnumerable.call(c,i[d])&&(s[i[d]]=c[i[d]]);return s}function $p(c,r,s){if(s||arguments.length===2)for(var i=0,d=r.length,m;i<d;i++)(m||!(i in r))&&(m||(m=Array.prototype.slice.call(r,0,i)),m[i]=r[i]);return c.concat(m||Array.prototype.slice.call(r))}var zc="right-scroll-bar-position",Cc="width-before-scroll-bar",Fp="with-scroll-bars-hidden",Ip="--removed-body-scroll-bar-size";function dr(c,r){return typeof c=="function"?c(r):c&&(c.current=r),c}function Pp(c,r){var s=x.useState(function(){return{value:c,callback:r,facade:{get current(){return s.value},set current(i){var d=s.value;d!==i&&(s.value=i,s.callback(i,d))}}}})[0];return s.callback=r,s.facade}var t1=typeof window<"u"?x.useLayoutEffect:x.useEffect,lh=new WeakMap;function e1(c,r){var s=Pp(null,function(i){return c.forEach(function(d){return dr(d,i)})});return t1(function(){var i=lh.get(s);if(i){var d=new Set(i),m=new Set(c),S=s.current;d.forEach(function(y){m.has(y)||dr(y,null)}),m.forEach(function(y){d.has(y)||dr(y,S)})}lh.set(s,c)},[c]),s}function n1(c){return c}function l1(c,r){r===void 0&&(r=n1);var s=[],i=!1,d={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return s.length?s[s.length-1]:c},useMedium:function(m){var S=r(m,i);return s.push(S),function(){s=s.filter(function(y){return y!==S})}},assignSyncMedium:function(m){for(i=!0;s.length;){var S=s;s=[],S.forEach(m)}s={push:function(y){return m(y)},filter:function(){return s}}},assignMedium:function(m){i=!0;var S=[];if(s.length){var y=s;s=[],y.forEach(m),S=s}var g=function(){var M=S;S=[],M.forEach(m)},h=function(){return Promise.resolve().then(g)};h(),s={push:function(M){S.push(M),h()},filter:function(M){return S=S.filter(M),s}}}};return d}function a1(c){c===void 0&&(c={});var r=l1(null);return r.options=Ge({async:!0,ssr:!1},c),r}var Yh=function(c){var r=c.sideCar,s=Bh(c,["sideCar"]);if(!r)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=r.read();if(!i)throw new Error("Sidecar medium not found");return x.createElement(i,Ge({},s))};Yh.isSideCarExport=!0;function u1(c,r){return c.useMedium(r),Yh}var qh=a1(),mr=function(){},jc=x.forwardRef(function(c,r){var s=x.useRef(null),i=x.useState({onScrollCapture:mr,onWheelCapture:mr,onTouchMoveCapture:mr}),d=i[0],m=i[1],S=c.forwardProps,y=c.children,g=c.className,h=c.removeScrollBar,M=c.enabled,D=c.shards,B=c.sideCar,Z=c.noRelative,tt=c.noIsolation,w=c.inert,Q=c.allowPinchZoom,I=c.as,W=I===void 0?"div":I,F=c.gapMode,et=Bh(c,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),nt=B,V=e1([s,r]),q=Ge(Ge({},et),d);return x.createElement(x.Fragment,null,M&&x.createElement(nt,{sideCar:qh,removeScrollBar:h,shards:D,noRelative:Z,noIsolation:tt,inert:w,setCallbacks:m,allowPinchZoom:!!Q,lockRef:s,gapMode:F}),S?x.cloneElement(x.Children.only(y),Ge(Ge({},q),{ref:V})):x.createElement(W,Ge({},q,{className:g,ref:V}),y))});jc.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};jc.classNames={fullWidth:Cc,zeroRight:zc};var c1=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function i1(){if(!document)return null;var c=document.createElement("style");c.type="text/css";var r=c1();return r&&c.setAttribute("nonce",r),c}function o1(c,r){c.styleSheet?c.styleSheet.cssText=r:c.appendChild(document.createTextNode(r))}function r1(c){var r=document.head||document.getElementsByTagName("head")[0];r.appendChild(c)}var s1=function(){var c=0,r=null;return{add:function(s){c==0&&(r=i1())&&(o1(r,s),r1(r)),c++},remove:function(){c--,!c&&r&&(r.parentNode&&r.parentNode.removeChild(r),r=null)}}},f1=function(){var c=s1();return function(r,s){x.useEffect(function(){return c.add(r),function(){c.remove()}},[r&&s])}},Gh=function(){var c=f1(),r=function(s){var i=s.styles,d=s.dynamic;return c(i,d),null};return r},d1={left:0,top:0,right:0,gap:0},hr=function(c){return parseInt(c||"",10)||0},m1=function(c){var r=window.getComputedStyle(document.body),s=r[c==="padding"?"paddingLeft":"marginLeft"],i=r[c==="padding"?"paddingTop":"marginTop"],d=r[c==="padding"?"paddingRight":"marginRight"];return[hr(s),hr(i),hr(d)]},h1=function(c){if(c===void 0&&(c="margin"),typeof window>"u")return d1;var r=m1(c),s=document.documentElement.clientWidth,i=window.innerWidth;return{left:r[0],top:r[1],right:r[2],gap:Math.max(0,i-s+r[2]-r[0])}},v1=Gh(),ea="data-scroll-locked",y1=function(c,r,s,i){var d=c.left,m=c.top,S=c.right,y=c.gap;return s===void 0&&(s="margin"),`
  .`.concat(Fp,` {
   overflow: hidden `).concat(i,`;
   padding-right: `).concat(y,"px ").concat(i,`;
  }
  body[`).concat(ea,`] {
    overflow: hidden `).concat(i,`;
    overscroll-behavior: contain;
    `).concat([r&&"position: relative ".concat(i,";"),s==="margin"&&`
    padding-left: `.concat(d,`px;
    padding-top: `).concat(m,`px;
    padding-right: `).concat(S,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(y,"px ").concat(i,`;
    `),s==="padding"&&"padding-right: ".concat(y,"px ").concat(i,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(zc,` {
    right: `).concat(y,"px ").concat(i,`;
  }
  
  .`).concat(Cc,` {
    margin-right: `).concat(y,"px ").concat(i,`;
  }
  
  .`).concat(zc," .").concat(zc,` {
    right: 0 `).concat(i,`;
  }
  
  .`).concat(Cc," .").concat(Cc,` {
    margin-right: 0 `).concat(i,`;
  }
  
  body[`).concat(ea,`] {
    `).concat(Ip,": ").concat(y,`px;
  }
`)},ah=function(){var c=parseInt(document.body.getAttribute(ea)||"0",10);return isFinite(c)?c:0},g1=function(){x.useEffect(function(){return document.body.setAttribute(ea,(ah()+1).toString()),function(){var c=ah()-1;c<=0?document.body.removeAttribute(ea):document.body.setAttribute(ea,c.toString())}},[])},p1=function(c){var r=c.noRelative,s=c.noImportant,i=c.gapMode,d=i===void 0?"margin":i;g1();var m=x.useMemo(function(){return h1(d)},[d]);return x.createElement(v1,{styles:y1(m,!r,d,s?"":"!important")})},pr=!1;if(typeof window<"u")try{var xc=Object.defineProperty({},"passive",{get:function(){return pr=!0,!0}});window.addEventListener("test",xc,xc),window.removeEventListener("test",xc,xc)}catch{pr=!1}var Fl=pr?{passive:!1}:!1,b1=function(c){return c.tagName==="TEXTAREA"},Lh=function(c,r){if(!(c instanceof Element))return!1;var s=window.getComputedStyle(c);return s[r]!=="hidden"&&!(s.overflowY===s.overflowX&&!b1(c)&&s[r]==="visible")},S1=function(c){return Lh(c,"overflowY")},x1=function(c){return Lh(c,"overflowX")},uh=function(c,r){var s=r.ownerDocument,i=r;do{typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&(i=i.host);var d=Xh(c,i);if(d){var m=Qh(c,i),S=m[1],y=m[2];if(S>y)return!0}i=i.parentNode}while(i&&i!==s.body);return!1},E1=function(c){var r=c.scrollTop,s=c.scrollHeight,i=c.clientHeight;return[r,s,i]},A1=function(c){var r=c.scrollLeft,s=c.scrollWidth,i=c.clientWidth;return[r,s,i]},Xh=function(c,r){return c==="v"?S1(r):x1(r)},Qh=function(c,r){return c==="v"?E1(r):A1(r)},T1=function(c,r){return c==="h"&&r==="rtl"?-1:1},z1=function(c,r,s,i,d){var m=T1(c,window.getComputedStyle(r).direction),S=m*i,y=s.target,g=r.contains(y),h=!1,M=S>0,D=0,B=0;do{if(!y)break;var Z=Qh(c,y),tt=Z[0],w=Z[1],Q=Z[2],I=w-Q-m*tt;(tt||I)&&Xh(c,y)&&(D+=I,B+=tt);var W=y.parentNode;y=W&&W.nodeType===Node.DOCUMENT_FRAGMENT_NODE?W.host:W}while(!g&&y!==document.body||g&&(r.contains(y)||r===y));return(M&&Math.abs(D)<1||!M&&Math.abs(B)<1)&&(h=!0),h},Ec=function(c){return"changedTouches"in c?[c.changedTouches[0].clientX,c.changedTouches[0].clientY]:[0,0]},ch=function(c){return[c.deltaX,c.deltaY]},ih=function(c){return c&&"current"in c?c.current:c},C1=function(c,r){return c[0]===r[0]&&c[1]===r[1]},O1=function(c){return`
  .block-interactivity-`.concat(c,` {pointer-events: none;}
  .allow-interactivity-`).concat(c,` {pointer-events: all;}
`)},D1=0,Il=[];function _1(c){var r=x.useRef([]),s=x.useRef([0,0]),i=x.useRef(),d=x.useState(D1++)[0],m=x.useState(Gh)[0],S=x.useRef(c);x.useEffect(function(){S.current=c},[c]),x.useEffect(function(){if(c.inert){document.body.classList.add("block-interactivity-".concat(d));var w=$p([c.lockRef.current],(c.shards||[]).map(ih),!0).filter(Boolean);return w.forEach(function(Q){return Q.classList.add("allow-interactivity-".concat(d))}),function(){document.body.classList.remove("block-interactivity-".concat(d)),w.forEach(function(Q){return Q.classList.remove("allow-interactivity-".concat(d))})}}},[c.inert,c.lockRef.current,c.shards]);var y=x.useCallback(function(w,Q){if("touches"in w&&w.touches.length===2||w.type==="wheel"&&w.ctrlKey)return!S.current.allowPinchZoom;var I=Ec(w),W=s.current,F="deltaX"in w?w.deltaX:W[0]-I[0],et="deltaY"in w?w.deltaY:W[1]-I[1],nt,V=w.target,q=Math.abs(F)>Math.abs(et)?"h":"v";if("touches"in w&&q==="h"&&V.type==="range")return!1;var L=window.getSelection(),yt=L&&L.anchorNode,Dt=yt?yt===V||yt.contains(V):!1;if(Dt)return!1;var gt=uh(q,V);if(!gt)return!0;if(gt?nt=q:(nt=q==="v"?"h":"v",gt=uh(q,V)),!gt)return!1;if(!i.current&&"changedTouches"in w&&(F||et)&&(i.current=nt),!nt)return!0;var Ut=i.current||nt;return z1(Ut,Q,w,Ut==="h"?F:et)},[]),g=x.useCallback(function(w){var Q=w;if(!(!Il.length||Il[Il.length-1]!==m)){var I="deltaY"in Q?ch(Q):Ec(Q),W=r.current.filter(function(nt){return nt.name===Q.type&&(nt.target===Q.target||Q.target===nt.shadowParent)&&C1(nt.delta,I)})[0];if(W&&W.should){Q.cancelable&&Q.preventDefault();return}if(!W){var F=(S.current.shards||[]).map(ih).filter(Boolean).filter(function(nt){return nt.contains(Q.target)}),et=F.length>0?y(Q,F[0]):!S.current.noIsolation;et&&Q.cancelable&&Q.preventDefault()}}},[]),h=x.useCallback(function(w,Q,I,W){var F={name:w,delta:Q,target:I,should:W,shadowParent:N1(I)};r.current.push(F),setTimeout(function(){r.current=r.current.filter(function(et){return et!==F})},1)},[]),M=x.useCallback(function(w){s.current=Ec(w),i.current=void 0},[]),D=x.useCallback(function(w){h(w.type,ch(w),w.target,y(w,c.lockRef.current))},[]),B=x.useCallback(function(w){h(w.type,Ec(w),w.target,y(w,c.lockRef.current))},[]);x.useEffect(function(){return Il.push(m),c.setCallbacks({onScrollCapture:D,onWheelCapture:D,onTouchMoveCapture:B}),document.addEventListener("wheel",g,Fl),document.addEventListener("touchmove",g,Fl),document.addEventListener("touchstart",M,Fl),function(){Il=Il.filter(function(w){return w!==m}),document.removeEventListener("wheel",g,Fl),document.removeEventListener("touchmove",g,Fl),document.removeEventListener("touchstart",M,Fl)}},[]);var Z=c.removeScrollBar,tt=c.inert;return x.createElement(x.Fragment,null,tt?x.createElement(m,{styles:O1(d)}):null,Z?x.createElement(p1,{noRelative:c.noRelative,gapMode:c.gapMode}):null)}function N1(c){for(var r=null;c!==null;)c instanceof ShadowRoot&&(r=c.host,c=c.host),c=c.parentNode;return r}const M1=u1(qh,_1);var Vh=x.forwardRef(function(c,r){return x.createElement(jc,Ge({},c,{ref:r,sideCar:M1}))});Vh.classNames=jc.classNames;var R1=function(c){if(typeof document>"u")return null;var r=Array.isArray(c)?c[0]:c;return r.ownerDocument.body},Pl=new WeakMap,Ac=new WeakMap,Tc={},vr=0,Zh=function(c){return c&&(c.host||Zh(c.parentNode))},j1=function(c,r){return r.map(function(s){if(c.contains(s))return s;var i=Zh(s);return i&&c.contains(i)?i:(console.error("aria-hidden",s,"in not contained inside",c,". Doing nothing"),null)}).filter(function(s){return!!s})},U1=function(c,r,s,i){var d=j1(r,Array.isArray(c)?c:[c]);Tc[s]||(Tc[s]=new WeakMap);var m=Tc[s],S=[],y=new Set,g=new Set(d),h=function(D){!D||y.has(D)||(y.add(D),h(D.parentNode))};d.forEach(h);var M=function(D){!D||g.has(D)||Array.prototype.forEach.call(D.children,function(B){if(y.has(B))M(B);else try{var Z=B.getAttribute(i),tt=Z!==null&&Z!=="false",w=(Pl.get(B)||0)+1,Q=(m.get(B)||0)+1;Pl.set(B,w),m.set(B,Q),S.push(B),w===1&&tt&&Ac.set(B,!0),Q===1&&B.setAttribute(s,"true"),tt||B.setAttribute(i,"true")}catch(I){console.error("aria-hidden: cannot operate on ",B,I)}})};return M(r),y.clear(),vr++,function(){S.forEach(function(D){var B=Pl.get(D)-1,Z=m.get(D)-1;Pl.set(D,B),m.set(D,Z),B||(Ac.has(D)||D.removeAttribute(i),Ac.delete(D)),Z||D.removeAttribute(s)}),vr--,vr||(Pl=new WeakMap,Pl=new WeakMap,Ac=new WeakMap,Tc={})}},w1=function(c,r,s){s===void 0&&(s="data-aria-hidden");var i=Array.from(Array.isArray(c)?c:[c]),d=R1(c);return d?(i.push.apply(i,Array.from(d.querySelectorAll("[aria-live], script"))),U1(i,d,s,"aria-hidden")):function(){return null}};function H1(c){const r=B1(c),s=x.forwardRef((i,d)=>{const{children:m,...S}=i,y=x.Children.toArray(m),g=y.find(q1);if(g){const h=g.props.children,M=y.map(D=>D===g?x.Children.count(h)>1?x.Children.only(null):x.isValidElement(h)?h.props.children:null:D);return C.jsx(r,{...S,ref:d,children:x.isValidElement(h)?x.cloneElement(h,void 0,M):null})}return C.jsx(r,{...S,ref:d,children:m})});return s.displayName=`${c}.Slot`,s}function B1(c){const r=x.forwardRef((s,i)=>{const{children:d,...m}=s;if(x.isValidElement(d)){const S=L1(d),y=G1(m,d.props);return d.type!==x.Fragment&&(y.ref=i?Mc(i,S):S),x.cloneElement(d,y)}return x.Children.count(d)>1?x.Children.only(null):null});return r.displayName=`${c}.SlotClone`,r}var Y1=Symbol("radix.slottable");function q1(c){return x.isValidElement(c)&&typeof c.type=="function"&&"__radixId"in c.type&&c.type.__radixId===Y1}function G1(c,r){const s={...r};for(const i in r){const d=c[i],m=r[i];/^on[A-Z]/.test(i)?d&&m?s[i]=(...y)=>{const g=m(...y);return d(...y),g}:d&&(s[i]=d):i==="style"?s[i]={...d,...m}:i==="className"&&(s[i]=[d,m].filter(Boolean).join(" "))}return{...c,...s}}function L1(c){let r=Object.getOwnPropertyDescriptor(c.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?c.ref:(r=Object.getOwnPropertyDescriptor(c,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?c.props.ref:c.props.ref||c.ref)}var Uc="Dialog",[Kh]=mp(Uc),[X1,Ue]=Kh(Uc),kh=c=>{const{__scopeDialog:r,children:s,open:i,defaultOpen:d,onOpenChange:m,modal:S=!0}=c,y=x.useRef(null),g=x.useRef(null),[h,M]=pp({prop:i,defaultProp:d??!1,onChange:m,caller:Uc});return C.jsx(X1,{scope:r,triggerRef:y,contentRef:g,contentId:or(),titleId:or(),descriptionId:or(),open:h,onOpenChange:M,onOpenToggle:x.useCallback(()=>M(D=>!D),[M]),modal:S,children:s})};kh.displayName=Uc;var Jh="DialogTrigger",Wh=x.forwardRef((c,r)=>{const{__scopeDialog:s,...i}=c,d=Ue(Jh,s),m=sl(r,d.triggerRef);return C.jsx(rn.button,{type:"button","aria-haspopup":"dialog","aria-expanded":d.open,"aria-controls":d.contentId,"data-state":Tr(d.open),...i,ref:m,onClick:Gn(c.onClick,d.onOpenToggle)})});Wh.displayName=Jh;var Er="DialogPortal",[Q1,$h]=Kh(Er,{forceMount:void 0}),Fh=c=>{const{__scopeDialog:r,forceMount:s,children:i,container:d}=c,m=Ue(Er,r);return C.jsx(Q1,{scope:r,forceMount:s,children:x.Children.map(i,S=>C.jsx(Rc,{present:s||m.open,children:C.jsx(Hh,{asChild:!0,container:d,children:S})}))})};Fh.displayName=Er;var Nc="DialogOverlay",Ih=x.forwardRef((c,r)=>{const s=$h(Nc,c.__scopeDialog),{forceMount:i=s.forceMount,...d}=c,m=Ue(Nc,c.__scopeDialog);return m.modal?C.jsx(Rc,{present:i||m.open,children:C.jsx(Z1,{...d,ref:r})}):null});Ih.displayName=Nc;var V1=H1("DialogOverlay.RemoveScroll"),Z1=x.forwardRef((c,r)=>{const{__scopeDialog:s,...i}=c,d=Ue(Nc,s);return C.jsx(Vh,{as:V1,allowPinchZoom:!0,shards:[d.contentRef],children:C.jsx(rn.div,{"data-state":Tr(d.open),...i,ref:r,style:{pointerEvents:"auto",...i.style}})})}),ol="DialogContent",Ph=x.forwardRef((c,r)=>{const s=$h(ol,c.__scopeDialog),{forceMount:i=s.forceMount,...d}=c,m=Ue(ol,c.__scopeDialog);return C.jsx(Rc,{present:i||m.open,children:m.modal?C.jsx(K1,{...d,ref:r}):C.jsx(k1,{...d,ref:r})})});Ph.displayName=ol;var K1=x.forwardRef((c,r)=>{const s=Ue(ol,c.__scopeDialog),i=x.useRef(null),d=sl(r,s.contentRef,i);return x.useEffect(()=>{const m=i.current;if(m)return w1(m)},[]),C.jsx(tv,{...c,ref:d,trapFocus:s.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Gn(c.onCloseAutoFocus,m=>{m.preventDefault(),s.triggerRef.current?.focus()}),onPointerDownOutside:Gn(c.onPointerDownOutside,m=>{const S=m.detail.originalEvent,y=S.button===0&&S.ctrlKey===!0;(S.button===2||y)&&m.preventDefault()}),onFocusOutside:Gn(c.onFocusOutside,m=>m.preventDefault())})}),k1=x.forwardRef((c,r)=>{const s=Ue(ol,c.__scopeDialog),i=x.useRef(!1),d=x.useRef(!1);return C.jsx(tv,{...c,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:m=>{c.onCloseAutoFocus?.(m),m.defaultPrevented||(i.current||s.triggerRef.current?.focus(),m.preventDefault()),i.current=!1,d.current=!1},onInteractOutside:m=>{c.onInteractOutside?.(m),m.defaultPrevented||(i.current=!0,m.detail.originalEvent.type==="pointerdown"&&(d.current=!0));const S=m.target;s.triggerRef.current?.contains(S)&&m.preventDefault(),m.detail.originalEvent.type==="focusin"&&d.current&&m.preventDefault()}})}),tv=x.forwardRef((c,r)=>{const{__scopeDialog:s,trapFocus:i,onOpenAutoFocus:d,onCloseAutoFocus:m,...S}=c,y=Ue(ol,s),g=x.useRef(null),h=sl(r,g);return Wp(),C.jsxs(C.Fragment,{children:[C.jsx(Uh,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:d,onUnmountAutoFocus:m,children:C.jsx(Rh,{role:"dialog",id:y.contentId,"aria-describedby":y.descriptionId,"aria-labelledby":y.titleId,"data-state":Tr(y.open),...S,ref:h,onDismiss:()=>y.onOpenChange(!1)})}),C.jsxs(C.Fragment,{children:[C.jsx(W1,{titleId:y.titleId}),C.jsx(F1,{contentRef:g,descriptionId:y.descriptionId})]})]})}),Ar="DialogTitle",ev=x.forwardRef((c,r)=>{const{__scopeDialog:s,...i}=c,d=Ue(Ar,s);return C.jsx(rn.h2,{id:d.titleId,...i,ref:r})});ev.displayName=Ar;var nv="DialogDescription",J1=x.forwardRef((c,r)=>{const{__scopeDialog:s,...i}=c,d=Ue(nv,s);return C.jsx(rn.p,{id:d.descriptionId,...i,ref:r})});J1.displayName=nv;var lv="DialogClose",av=x.forwardRef((c,r)=>{const{__scopeDialog:s,...i}=c,d=Ue(lv,s);return C.jsx(rn.button,{type:"button",...i,ref:r,onClick:Gn(c.onClick,()=>d.onOpenChange(!1))})});av.displayName=lv;function Tr(c){return c?"open":"closed"}var uv="DialogTitleWarning",[xb,cv]=dp(uv,{contentName:ol,titleName:Ar,docsSlug:"dialog"}),W1=({titleId:c})=>{const r=cv(uv),s=`\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;return x.useEffect(()=>{c&&(document.getElementById(c)||console.error(s))},[s,c]),null},$1="DialogDescriptionWarning",F1=({contentRef:c,descriptionId:r})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${cv($1).contentName}}.`;return x.useEffect(()=>{const d=c.current?.getAttribute("aria-describedby");r&&d&&(document.getElementById(r)||console.warn(i))},[i,c,r]),null},I1=kh,P1=Wh,tb=Fh,eb=Ih,nb=Ph,lb=ev,ab=av;function ub({...c}){return C.jsx(I1,{"code-path":"src/components/ui/dialog.tsx:10:10","data-slot":"dialog",...c})}function cb({...c}){return C.jsx(P1,{"code-path":"src/components/ui/dialog.tsx:16:10","data-slot":"dialog-trigger",...c})}function ib({...c}){return C.jsx(tb,{"code-path":"src/components/ui/dialog.tsx:22:10","data-slot":"dialog-portal",...c})}function ob({className:c,...r}){return C.jsx(eb,{"code-path":"src/components/ui/dialog.tsx:36:5","data-slot":"dialog-overlay",className:fl("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",c),...r})}function rb({className:c,children:r,showCloseButton:s=!0,...i}){return C.jsxs(ib,{"code-path":"src/components/ui/dialog.tsx:56:5","data-slot":"dialog-portal",children:[C.jsx(ob,{"code-path":"src/components/ui/dialog.tsx:57:7"}),C.jsxs(nb,{"code-path":"src/components/ui/dialog.tsx:58:7","data-slot":"dialog-content",className:fl("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",c),...i,children:[r,s&&C.jsxs(ab,{"code-path":"src/components/ui/dialog.tsx:68:11","data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[C.jsx(d0,{"code-path":"src/components/ui/dialog.tsx:72:13"}),C.jsx("span",{"code-path":"src/components/ui/dialog.tsx:73:13",className:"sr-only",children:"Close"})]})]})]})}function sb({className:c,...r}){return C.jsx("div",{"code-path":"src/components/ui/dialog.tsx:83:5","data-slot":"dialog-header",className:fl("flex flex-col gap-2 text-center sm:text-left",c),...r})}function fb({className:c,...r}){return C.jsx(lb,{"code-path":"src/components/ui/dialog.tsx:109:5","data-slot":"dialog-title",className:fl("text-lg leading-none font-semibold",c),...r})}const db=(c,r)=>new Date(c,r+1,0).getDate(),mb=(c,r)=>new Date(c,r,1).getDay(),hb=(c,r,s)=>`${c}-${String(r+1).padStart(2,"0")}-${String(s).padStart(2,"0")}`,vb=(c,r,s)=>{const i=new Date;return i.getFullYear()===c&&i.getMonth()===r&&i.getDate()===s},yb=(c,r,s,i)=>c.getFullYear()===r&&c.getMonth()===s&&c.getDate()===i;function gb({currentDate:c,onSelectDate:r,hasRecord:s,getDatesInMonth:i}){const[d,m]=x.useState(!1),[S,y]=x.useState(new Date),g=S.getFullYear(),h=S.getMonth(),M=x.useMemo(()=>{const W=i(g,h);return new Set(W)},[g,h,i]),D=x.useMemo(()=>{const W=db(g,h),F=mb(g,h),et=[];for(let nt=0;nt<F;nt++)et.push(null);for(let nt=1;nt<=W;nt++)et.push(nt);return et},[g,h]),B=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],Z=["日","一","二","三","四","五","六"],tt=()=>{y(new Date(g,h-1,1))},w=()=>{y(new Date(g,h+1,1))},Q=W=>{const F=new Date(g,h,W);r(F),m(!1)},I=()=>{const W=new Date;y(W),r(W),m(!1)};return C.jsxs(ub,{"code-path":"src/components/Calendar.tsx:124:5",open:d,onOpenChange:m,children:[C.jsx(cb,{"code-path":"src/components/Calendar.tsx:125:7",asChild:!0,children:C.jsxs(ta,{"code-path":"src/components/Calendar.tsx:126:9",variant:"outline",size:"sm",className:"rounded-full border-amber-200 hover:bg-amber-50 hover:border-amber-300 text-amber-700",children:[C.jsx(t0,{"code-path":"src/components/Calendar.tsx:131:11",className:"w-4 h-4 mr-1"}),"日历"]})}),C.jsxs(rb,{"code-path":"src/components/Calendar.tsx:135:7",className:"sm:max-w-[360px] p-0 overflow-hidden",children:[C.jsx(sb,{"code-path":"src/components/Calendar.tsx:136:9",className:"p-4 pb-2",children:C.jsx(fb,{"code-path":"src/components/Calendar.tsx:137:11",className:"text-center text-lg font-semibold text-gray-800",children:"选择日期"})}),C.jsxs("div",{"code-path":"src/components/Calendar.tsx:142:9",className:"px-4 pb-4",children:[C.jsxs("div",{"code-path":"src/components/Calendar.tsx:144:11",className:"flex items-center justify-between mb-4",children:[C.jsx(ta,{"code-path":"src/components/Calendar.tsx:145:13",variant:"ghost",size:"icon",onClick:tt,className:"h-8 w-8 hover:bg-amber-50",children:C.jsx(mh,{"code-path":"src/components/Calendar.tsx:151:15",className:"h-4 w-4"})}),C.jsxs("span",{"code-path":"src/components/Calendar.tsx:153:13",className:"text-base font-medium text-gray-700",children:[g,"年 ",B[h]]}),C.jsx(ta,{"code-path":"src/components/Calendar.tsx:156:13",variant:"ghost",size:"icon",onClick:w,className:"h-8 w-8 hover:bg-amber-50",children:C.jsx(hh,{"code-path":"src/components/Calendar.tsx:162:15",className:"h-4 w-4"})})]}),C.jsx("div",{"code-path":"src/components/Calendar.tsx:167:11",className:"grid grid-cols-7 gap-1 mb-2",children:Z.map(W=>C.jsx("div",{"code-path":"src/components/Calendar.tsx:169:15",className:"text-center text-xs font-medium text-gray-400 py-1",children:W},W))}),C.jsx("div",{"code-path":"src/components/Calendar.tsx:179:11",className:"grid grid-cols-7 gap-1",children:D.map((W,F)=>{if(W===null)return C.jsx("div",{"code-path":"src/components/Calendar.tsx:182:24",className:"h-9"},`empty-${F}`);const et=hb(g,h,W),nt=M.has(et),V=vb(g,h,W),q=yb(c,g,h,W);return C.jsxs("button",{"code-path":"src/components/Calendar.tsx:191:17",onClick:()=>Q(W),className:`
                    h-9 w-9 rounded-full text-sm font-medium transition-all duration-200
                    flex items-center justify-center relative
                    ${q?"bg-amber-500 text-white shadow-md scale-105":V?"bg-amber-100 text-amber-700 border border-amber-300":nt?"text-gray-700 hover:bg-amber-50":"text-gray-400 hover:bg-gray-50"}
                  `,children:[W,nt&&!q&&C.jsx("span",{"code-path":"src/components/Calendar.tsx:210:21",className:"absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400"})]},W)})}),C.jsx("div",{"code-path":"src/components/Calendar.tsx:218:11",className:"mt-4 pt-3 border-t border-gray-100",children:C.jsx(ta,{"code-path":"src/components/Calendar.tsx:219:13",onClick:I,variant:"outline",className:"w-full rounded-full border-amber-200 hover:bg-amber-50 text-amber-700",children:"回到今天"})}),C.jsxs("div",{"code-path":"src/components/Calendar.tsx:229:11",className:"mt-3 flex items-center justify-center gap-4 text-xs text-gray-500",children:[C.jsxs("div",{"code-path":"src/components/Calendar.tsx:230:13",className:"flex items-center gap-1",children:[C.jsx("span",{"code-path":"src/components/Calendar.tsx:231:15",className:"w-2 h-2 rounded-full bg-amber-500"}),C.jsx("span",{"code-path":"src/components/Calendar.tsx:232:15",children:"选中"})]}),C.jsxs("div",{"code-path":"src/components/Calendar.tsx:234:13",className:"flex items-center gap-1",children:[C.jsx("span",{"code-path":"src/components/Calendar.tsx:235:15",className:"w-2 h-2 rounded-full bg-amber-100 border border-amber-300"}),C.jsx("span",{"code-path":"src/components/Calendar.tsx:236:15",children:"今天"})]}),C.jsxs("div",{"code-path":"src/components/Calendar.tsx:238:13",className:"flex items-center gap-1",children:[C.jsx("span",{"code-path":"src/components/Calendar.tsx:239:15",className:"w-2 h-2 rounded-full bg-amber-400"}),C.jsx("span",{"code-path":"src/components/Calendar.tsx:240:15",children:"有记录"})]})]})]})]})]})}function pb({className:c,...r}){return C.jsx("div",{"code-path":"src/components/ui/card.tsx:7:5","data-slot":"card",className:fl("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",c),...r})}function bb({className:c,...r}){return C.jsx("div",{"code-path":"src/components/ui/card.tsx:66:5","data-slot":"card-content",className:fl("px-6",c),...r})}function Sb(){const{currentAdvice:c,currentNumber:r,currentIndex:s,totalPerDay:i,todayAdviceNumbers:d,todayReadStatus:m,currentDate:S,isToday:y,canGoPrevious:g,canGoNext:h,goToPrevious:M,goToNext:D,goToAdvice:B,switchToDate:Z,getRecordedDates:tt,getDatesInMonth:w,hasRecord:Q,isLoading:I}=kg(),[W,F]=x.useState(!1),[et,nt]=x.useState("");x.useEffect(()=>{c&&(F(!0),setTimeout(()=>{nt(c),F(!1)},150))},[c]);const V=()=>{g&&(F(!0),setTimeout(()=>{M()},150))},q=()=>{h&&(F(!0),setTimeout(()=>{D()},150))},L=Dt=>{Dt!==s&&(F(!0),setTimeout(()=>{B(Dt)},150))},yt=Dt=>{const gt=new Date;if(Dt.toDateString()===gt.toDateString())return"今天";const Se=Dt.getFullYear(),ee=Dt.getMonth()+1,qt=Dt.getDate(),G=["周日","周一","周二","周三","周四","周五","周六"][Dt.getDay()];return`${Se}年${ee}月${qt}日 ${G}`};return I?C.jsx("div",{"code-path":"src/App.tsx:94:7",className:"min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center",children:C.jsxs("div",{"code-path":"src/App.tsx:95:9",className:"flex flex-col items-center gap-4",children:[C.jsx(r0,{"code-path":"src/App.tsx:96:11",className:"w-8 h-8 animate-spin text-amber-600"}),C.jsx("p",{"code-path":"src/App.tsx:97:11",className:"text-amber-700 text-sm",children:"加载中..."})]})}):C.jsx("div",{"code-path":"src/App.tsx:104:5",className:"min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4 sm:p-6 lg:p-8",children:C.jsxs("div",{"code-path":"src/App.tsx:105:7",className:"max-w-2xl mx-auto",children:[C.jsxs("header",{"code-path":"src/App.tsx:107:9",className:"text-center mb-6 pt-4",children:[C.jsxs("div",{"code-path":"src/App.tsx:108:11",className:"inline-flex items-center gap-2 mb-2",children:[C.jsx(Lm,{"code-path":"src/App.tsx:109:13",className:"w-5 h-5 text-amber-500"}),C.jsx("span",{"code-path":"src/App.tsx:110:13",className:"text-amber-600 text-sm font-medium tracking-wider uppercase",children:"Daily Wisdom"}),C.jsx(Lm,{"code-path":"src/App.tsx:111:13",className:"w-5 h-5 text-amber-500"})]}),C.jsx("h1",{"code-path":"src/App.tsx:113:11",className:"text-3xl sm:text-4xl font-bold text-gray-800 mb-2",children:"宝贵的人生建议"}),C.jsx("p",{"code-path":"src/App.tsx:116:11",className:"text-gray-500 text-sm",children:"凯文·凯利 · 500条人生智慧"})]}),C.jsxs("div",{"code-path":"src/App.tsx:120:9",className:"flex items-center justify-between mb-6 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2",children:[C.jsxs("div",{"code-path":"src/App.tsx:121:11",className:"flex items-center gap-2",children:[C.jsx(n0,{"code-path":"src/App.tsx:122:13",className:"w-4 h-4 text-amber-500"}),C.jsxs("span",{"code-path":"src/App.tsx:123:13",className:`text-sm font-medium ${y?"text-amber-600":"text-gray-600"}`,children:[yt(S),y&&C.jsx("span",{"code-path":"src/App.tsx:125:27",className:"ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full",children:"今日"})]})]}),C.jsx(gb,{"code-path":"src/App.tsx:128:11",currentDate:S,onSelectDate:Z,hasRecord:Q,getDatesInMonth:w})]}),C.jsx("div",{"code-path":"src/App.tsx:137:9",className:"flex justify-center gap-2 mb-6",children:Array.from({length:i},(Dt,gt)=>C.jsx("button",{"code-path":"src/App.tsx:139:13",onClick:()=>L(gt),className:`h-2 rounded-full transition-all duration-300 ${gt===s?"bg-amber-500 w-8":m[gt]?"bg-amber-300 w-4":"bg-gray-300 w-4"}`},gt))}),C.jsx(pb,{"code-path":"src/App.tsx:154:9",className:"bg-white/80 backdrop-blur-sm shadow-xl border-0 rounded-2xl overflow-hidden",children:C.jsxs(bb,{"code-path":"src/App.tsx:155:11",className:"p-6 sm:p-10",children:[C.jsxs("div",{"code-path":"src/App.tsx:157:13",className:"flex justify-between items-center mb-6",children:[C.jsx("span",{"code-path":"src/App.tsx:158:15",className:"inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white font-bold text-lg shadow-lg",children:r}),C.jsxs("div",{"code-path":"src/App.tsx:161:15",className:"flex items-center gap-2",children:[m[s]&&C.jsxs("span",{"code-path":"src/App.tsx:164:19",className:"flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full",children:[C.jsx(Gm,{"code-path":"src/App.tsx:165:21",className:"w-3 h-3"}),"已读"]}),C.jsxs("span",{"code-path":"src/App.tsx:169:17",className:"text-gray-400 text-sm",children:[s+1," / ",i]})]})]}),C.jsx("div",{"code-path":"src/App.tsx:176:13",className:`min-h-[200px] flex items-center justify-center transition-all duration-300 ${W?"opacity-0 transform translate-y-2":"opacity-100 transform translate-y-0"}`,children:C.jsx("p",{"code-path":"src/App.tsx:181:15",className:"text-xl sm:text-2xl leading-relaxed text-gray-700 whitespace-pre-line text-center font-medium",children:et})}),C.jsxs("div",{"code-path":"src/App.tsx:187:13",className:"flex justify-between items-center mt-8 pt-6 border-t border-gray-100",children:[C.jsxs(ta,{"code-path":"src/App.tsx:188:15",variant:"outline",size:"lg",onClick:V,disabled:!g,className:`rounded-full px-6 transition-all duration-300 ${g?"hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700":"opacity-30 cursor-not-allowed"}`,children:[C.jsx(mh,{"code-path":"src/App.tsx:199:17",className:"w-5 h-5 mr-1"}),"上一条"]}),C.jsxs(ta,{"code-path":"src/App.tsx:203:15",variant:"outline",size:"lg",onClick:q,disabled:!h,className:`rounded-full px-6 transition-all duration-300 ${h?"hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700":"opacity-30 cursor-not-allowed"}`,children:["下一条",C.jsx(hh,{"code-path":"src/App.tsx:215:17",className:"w-5 h-5 ml-1"})]})]})]})}),C.jsxs("div",{"code-path":"src/App.tsx:222:9",className:"mt-8",children:[C.jsx("p",{"code-path":"src/App.tsx:223:11",className:"text-center text-gray-500 text-sm mb-4",children:y?"今日三条建议":"该日三条建议"}),C.jsx("div",{"code-path":"src/App.tsx:226:11",className:"flex justify-center gap-3",children:d.map((Dt,gt)=>C.jsxs("button",{"code-path":"src/App.tsx:228:15",onClick:()=>L(gt),className:`
                  w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium 
                  transition-all duration-300 relative
                  ${gt===s?"bg-amber-500 text-white shadow-lg scale-110":m[gt]?"bg-amber-100 text-amber-700 border border-amber-300":"bg-white text-gray-500 shadow"}
                `,children:[Dt,m[gt]&&gt!==s&&C.jsx(Gm,{"code-path":"src/App.tsx:245:19",className:"absolute -top-1 -right-1 w-4 h-4 text-green-500 bg-white rounded-full"}),!m[gt]&&gt!==s&&C.jsx(i0,{"code-path":"src/App.tsx:249:19",className:"absolute -top-1 -right-1 w-4 h-4 text-gray-300 bg-white rounded-full"})]},gt))})]}),C.jsx("div",{"code-path":"src/App.tsx:257:9",className:"mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-4",children:C.jsxs("div",{"code-path":"src/App.tsx:258:11",className:"flex items-center justify-between",children:[C.jsxs("div",{"code-path":"src/App.tsx:259:13",children:[C.jsx("p",{"code-path":"src/App.tsx:260:15",className:"text-gray-500 text-xs mb-1",children:"已记录天数"}),C.jsxs("p",{"code-path":"src/App.tsx:261:15",className:"text-2xl font-bold text-amber-600",children:[tt().length,C.jsx("span",{"code-path":"src/App.tsx:263:17",className:"text-sm font-normal text-gray-400 ml-1",children:"天"})]})]}),C.jsxs("div",{"code-path":"src/App.tsx:266:13",className:"text-right",children:[C.jsx("p",{"code-path":"src/App.tsx:267:15",className:"text-gray-500 text-xs mb-1",children:"今日进度"}),C.jsxs("p",{"code-path":"src/App.tsx:268:15",className:"text-2xl font-bold text-amber-600",children:[m.filter(Boolean).length,C.jsxs("span",{"code-path":"src/App.tsx:270:17",className:"text-sm font-normal text-gray-400",children:["/",i]})]})]})]})}),C.jsx("footer",{"code-path":"src/App.tsx:277:9",className:"mt-8 text-center",children:C.jsxs("p",{"code-path":"src/App.tsx:278:11",className:"text-gray-400 text-xs leading-relaxed",children:["每天随机展示3条建议 · 点击日历可查看历史记录",C.jsx("br",{"code-path":"src/App.tsx:280:13"}),"轮播完成后才会出现新的组合"]})})]})})}Gg.createRoot(document.getElementById("root")).render(C.jsx(x.StrictMode,{"code-path":"src/main.tsx:7:3",children:C.jsx(Sb,{"code-path":"src/main.tsx:8:5"})}));
