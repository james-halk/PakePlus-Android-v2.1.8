function Dg(i,r){for(var s=0;s<r.length;s++){const c=r[s];if(typeof c!="string"&&!Array.isArray(c)){for(const d in c)if(d!=="default"&&!(d in i)){const m=Object.getOwnPropertyDescriptor(c,d);m&&Object.defineProperty(i,d,m.get?m:{enumerable:!0,get:()=>c[d]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const S of m.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&c(S)}).observe(document,{childList:!0,subtree:!0});function s(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=s(d);fetch(d.href,m)}})();function ih(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Io={exports:{}},$a={};var Om;function _g(){if(Om)return $a;Om=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(c,d,m){var S=null;if(m!==void 0&&(S=""+m),d.key!==void 0&&(S=""+d.key),"key"in d){m={};for(var y in d)y!=="key"&&(m[y]=d[y])}else m=d;return d=m.ref,{$$typeof:i,type:c,key:S,ref:d!==void 0?d:null,props:m}}return $a.Fragment=r,$a.jsx=s,$a.jsxs=s,$a}var Dm;function Ng(){return Dm||(Dm=1,Io.exports=_g()),Io.exports}var _=Ng(),Po={exports:{}},ut={};var _m;function Mg(){if(_m)return ut;_m=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),S=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),Y=Symbol.iterator;function V(b){return b===null||typeof b!="object"?null:(b=Y&&b[Y]||b["@@iterator"],typeof b=="function"?b:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,Q={};function $(b,j,q){this.props=b,this.context=j,this.refs=Q,this.updater=q||P}$.prototype.isReactComponent={},$.prototype.setState=function(b,j){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,j,"setState")},$.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function Z(){}Z.prototype=$.prototype;function F(b,j,q){this.props=b,this.context=j,this.refs=Q,this.updater=q||P}var tt=F.prototype=new Z;tt.constructor=F,w(tt,$.prototype),tt.isPureReactComponent=!0;var et=Array.isArray;function ot(){}var H={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function mt(b,j,q){var X=q.ref;return{$$typeof:i,type:b,key:j,ref:X!==void 0?X:null,props:q}}function gt(b,j){return mt(b.type,j,b.props)}function Et(b){return typeof b=="object"&&b!==null&&b.$$typeof===i}function Ut(b){var j={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(q){return j[q]})}var Se=/\/+/g;function ee(b,j){return typeof b=="object"&&b!==null&&b.key!=null?Ut(""+b.key):j.toString(36)}function qt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(ot,ot):(b.status="pending",b.then(function(j){b.status==="pending"&&(b.status="fulfilled",b.value=j)},function(j){b.status==="pending"&&(b.status="rejected",b.reason=j)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function D(b,j,q,X,at){var rt=typeof b;(rt==="undefined"||rt==="boolean")&&(b=null);var lt=!1;if(b===null)lt=!0;else switch(rt){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(b.$$typeof){case i:case r:lt=!0;break;case M:return lt=b._init,D(lt(b._payload),j,q,X,at)}}if(lt)return at=at(b),lt=X===""?"."+ee(b,0):X,et(at)?(q="",lt!=null&&(q=lt.replace(Se,"$&/")+"/"),D(at,j,q,"",function(we){return we})):at!=null&&(Et(at)&&(at=gt(at,q+(at.key==null||b&&b.key===at.key?"":(""+at.key).replace(Se,"$&/")+"/")+lt)),j.push(at)),1;lt=0;var Kt=X===""?".":X+":";if(et(b))for(var Nt=0;Nt<b.length;Nt++)X=b[Nt],rt=Kt+ee(X,Nt),lt+=D(X,j,q,rt,at);else if(Nt=V(b),typeof Nt=="function")for(b=Nt.call(b),Nt=0;!(X=b.next()).done;)X=X.value,rt=Kt+ee(X,Nt++),lt+=D(X,j,q,rt,at);else if(rt==="object"){if(typeof b.then=="function")return D(qt(b),j,q,X,at);throw j=String(b),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return lt}function G(b,j,q){if(b==null)return b;var X=[],at=0;return D(b,X,"","",function(rt){return j.call(q,rt,at++)}),X}function B(b){if(b._status===-1){var j=b._result;j=j(),j.then(function(q){(b._status===0||b._status===-1)&&(b._status=1,b._result=q)},function(q){(b._status===0||b._status===-1)&&(b._status=2,b._result=q)}),b._status===-1&&(b._status=0,b._result=j)}if(b._status===1)return b._result.default;throw b._result}var St=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},At={map:G,forEach:function(b,j,q){G(b,function(){j.apply(this,arguments)},q)},count:function(b){var j=0;return G(b,function(){j++}),j},toArray:function(b){return G(b,function(j){return j})||[]},only:function(b){if(!Et(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return ut.Activity=O,ut.Children=At,ut.Component=$,ut.Fragment=s,ut.Profiler=d,ut.PureComponent=F,ut.StrictMode=c,ut.Suspense=g,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ut.__COMPILER_RUNTIME={__proto__:null,c:function(b){return H.H.useMemoCache(b)}},ut.cache=function(b){return function(){return b.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(b,j,q){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var X=w({},b.props),at=b.key;if(j!=null)for(rt in j.key!==void 0&&(at=""+j.key),j)!L.call(j,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&j.ref===void 0||(X[rt]=j[rt]);var rt=arguments.length-2;if(rt===1)X.children=q;else if(1<rt){for(var lt=Array(rt),Kt=0;Kt<rt;Kt++)lt[Kt]=arguments[Kt+2];X.children=lt}return mt(b.type,at,X)},ut.createContext=function(b){return b={$$typeof:S,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:m,_context:b},b},ut.createElement=function(b,j,q){var X,at={},rt=null;if(j!=null)for(X in j.key!==void 0&&(rt=""+j.key),j)L.call(j,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(at[X]=j[X]);var lt=arguments.length-2;if(lt===1)at.children=q;else if(1<lt){for(var Kt=Array(lt),Nt=0;Nt<lt;Nt++)Kt[Nt]=arguments[Nt+2];at.children=Kt}if(b&&b.defaultProps)for(X in lt=b.defaultProps,lt)at[X]===void 0&&(at[X]=lt[X]);return mt(b,rt,at)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(b){return{$$typeof:y,render:b}},ut.isValidElement=Et,ut.lazy=function(b){return{$$typeof:M,_payload:{_status:-1,_result:b},_init:B}},ut.memo=function(b,j){return{$$typeof:h,type:b,compare:j===void 0?null:j}},ut.startTransition=function(b){var j=H.T,q={};H.T=q;try{var X=b(),at=H.S;at!==null&&at(q,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(ot,St)}catch(rt){St(rt)}finally{j!==null&&q.types!==null&&(j.types=q.types),H.T=j}},ut.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ut.use=function(b){return H.H.use(b)},ut.useActionState=function(b,j,q){return H.H.useActionState(b,j,q)},ut.useCallback=function(b,j){return H.H.useCallback(b,j)},ut.useContext=function(b){return H.H.useContext(b)},ut.useDebugValue=function(){},ut.useDeferredValue=function(b,j){return H.H.useDeferredValue(b,j)},ut.useEffect=function(b,j){return H.H.useEffect(b,j)},ut.useEffectEvent=function(b){return H.H.useEffectEvent(b)},ut.useId=function(){return H.H.useId()},ut.useImperativeHandle=function(b,j,q){return H.H.useImperativeHandle(b,j,q)},ut.useInsertionEffect=function(b,j){return H.H.useInsertionEffect(b,j)},ut.useLayoutEffect=function(b,j){return H.H.useLayoutEffect(b,j)},ut.useMemo=function(b,j){return H.H.useMemo(b,j)},ut.useOptimistic=function(b,j){return H.H.useOptimistic(b,j)},ut.useReducer=function(b,j,q){return H.H.useReducer(b,j,q)},ut.useRef=function(b){return H.H.useRef(b)},ut.useState=function(b){return H.H.useState(b)},ut.useSyncExternalStore=function(b,j,q){return H.H.useSyncExternalStore(b,j,q)},ut.useTransition=function(){return H.H.useTransition()},ut.version="19.2.3",ut}var Nm;function br(){return Nm||(Nm=1,Po.exports=Mg()),Po.exports}var x=br();const Rg=ih(x),Sr=Dg({__proto__:null,default:Rg},[x]);var tr={exports:{}},Fa={},er={exports:{}},nr={};var Mm;function jg(){return Mm||(Mm=1,(function(i){function r(D,G){var B=D.length;D.push(G);t:for(;0<B;){var St=B-1>>>1,At=D[St];if(0<d(At,G))D[St]=G,D[B]=At,B=St;else break t}}function s(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var G=D[0],B=D.pop();if(B!==G){D[0]=B;t:for(var St=0,At=D.length,b=At>>>1;St<b;){var j=2*(St+1)-1,q=D[j],X=j+1,at=D[X];if(0>d(q,B))X<At&&0>d(at,q)?(D[St]=at,D[X]=B,St=X):(D[St]=q,D[j]=B,St=j);else if(X<At&&0>d(at,B))D[St]=at,D[X]=B,St=X;else break t}}return G}function d(D,G){var B=D.sortIndex-G.sortIndex;return B!==0?B:D.id-G.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var S=Date,y=S.now();i.unstable_now=function(){return S.now()-y}}var g=[],h=[],M=1,O=null,Y=3,V=!1,P=!1,w=!1,Q=!1,$=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function tt(D){for(var G=s(h);G!==null;){if(G.callback===null)c(h);else if(G.startTime<=D)c(h),G.sortIndex=G.expirationTime,r(g,G);else break;G=s(h)}}function et(D){if(w=!1,tt(D),!P)if(s(g)!==null)P=!0,ot||(ot=!0,Ut());else{var G=s(h);G!==null&&qt(et,G.startTime-D)}}var ot=!1,H=-1,L=5,mt=-1;function gt(){return Q?!0:!(i.unstable_now()-mt<L)}function Et(){if(Q=!1,ot){var D=i.unstable_now();mt=D;var G=!0;try{t:{P=!1,w&&(w=!1,Z(H),H=-1),V=!0;var B=Y;try{e:{for(tt(D),O=s(g);O!==null&&!(O.expirationTime>D&&gt());){var St=O.callback;if(typeof St=="function"){O.callback=null,Y=O.priorityLevel;var At=St(O.expirationTime<=D);if(D=i.unstable_now(),typeof At=="function"){O.callback=At,tt(D),G=!0;break e}O===s(g)&&c(g),tt(D)}else c(g);O=s(g)}if(O!==null)G=!0;else{var b=s(h);b!==null&&qt(et,b.startTime-D),G=!1}}break t}finally{O=null,Y=B,V=!1}G=void 0}}finally{G?Ut():ot=!1}}}var Ut;if(typeof F=="function")Ut=function(){F(Et)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,ee=Se.port2;Se.port1.onmessage=Et,Ut=function(){ee.postMessage(null)}}else Ut=function(){$(Et,0)};function qt(D,G){H=$(function(){D(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return Y},i.unstable_next=function(D){switch(Y){case 1:case 2:case 3:var G=3;break;default:G=Y}var B=Y;Y=G;try{return D()}finally{Y=B}},i.unstable_requestPaint=function(){Q=!0},i.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=Y;Y=D;try{return G()}finally{Y=B}},i.unstable_scheduleCallback=function(D,G,B){var St=i.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?St+B:St):B=St,D){case 1:var At=-1;break;case 2:At=250;break;case 5:At=1073741823;break;case 4:At=1e4;break;default:At=5e3}return At=B+At,D={id:M++,callback:G,priorityLevel:D,startTime:B,expirationTime:At,sortIndex:-1},B>St?(D.sortIndex=B,r(h,D),s(g)===null&&D===s(h)&&(w?(Z(H),H=-1):w=!0,qt(et,B-St))):(D.sortIndex=At,r(g,D),P||V||(P=!0,ot||(ot=!0,Ut()))),D},i.unstable_shouldYield=gt,i.unstable_wrapCallback=function(D){var G=Y;return function(){var B=Y;Y=G;try{return D.apply(this,arguments)}finally{Y=B}}}})(nr)),nr}var Rm;function Ug(){return Rm||(Rm=1,er.exports=jg()),er.exports}var lr={exports:{}},te={};var jm;function wg(){if(jm)return te;jm=1;var i=br();function r(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)h+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(g,h,M){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:O==null?null:""+O,children:g,containerInfo:h,implementation:M}}var S=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,te.createPortal=function(g,h){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return m(g,h,null,M)},te.flushSync=function(g){var h=S.T,M=c.p;try{if(S.T=null,c.p=2,g)return g()}finally{S.T=h,c.p=M,c.d.f()}},te.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(g,h))},te.prefetchDNS=function(g){typeof g=="string"&&c.d.D(g)},te.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var M=h.as,O=y(M,h.crossOrigin),Y=typeof h.integrity=="string"?h.integrity:void 0,V=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;M==="style"?c.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:O,integrity:Y,fetchPriority:V}):M==="script"&&c.d.X(g,{crossOrigin:O,integrity:Y,fetchPriority:V,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},te.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var M=y(h.as,h.crossOrigin);c.d.M(g,{crossOrigin:M,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(g)},te.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var M=h.as,O=y(M,h.crossOrigin);c.d.L(g,M,{crossOrigin:O,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},te.preloadModule=function(g,h){if(typeof g=="string")if(h){var M=y(h.as,h.crossOrigin);c.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:M,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(g)},te.requestFormReset=function(g){c.d.r(g)},te.unstable_batchedUpdates=function(g,h){return g(h)},te.useFormState=function(g,h,M){return S.H.useFormState(g,h,M)},te.useFormStatus=function(){return S.H.useHostTransitionStatus()},te.version="19.2.3",te}var Um;function ch(){if(Um)return lr.exports;Um=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),lr.exports=wg(),lr.exports}var wm;function Hg(){if(wm)return Fa;wm=1;var i=Ug(),r=br(),s=ch();function c(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function S(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(m(t)!==t)throw Error(c(188))}function h(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(c(188));return e!==t?null:t}for(var n=t,l=e;;){var a=n.return;if(a===null)break;var u=a.alternate;if(u===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===n)return g(a),t;if(u===l)return g(a),e;u=u.sibling}throw Error(c(188))}if(n.return!==l.return)n=a,l=u;else{for(var o=!1,f=a.child;f;){if(f===n){o=!0,n=a,l=u;break}if(f===l){o=!0,l=a,n=u;break}f=f.sibling}if(!o){for(f=u.child;f;){if(f===n){o=!0,n=u,l=a;break}if(f===l){o=!0,l=u,n=a;break}f=f.sibling}if(!o)throw Error(c(189))}}if(n.alternate!==l)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?t:e}function M(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=M(t),e!==null)return e;t=t.sibling}return null}var O=Object.assign,Y=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),F=Symbol.for("react.context"),tt=Symbol.for("react.forward_ref"),et=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),mt=Symbol.for("react.activity"),gt=Symbol.for("react.memo_cache_sentinel"),Et=Symbol.iterator;function Ut(t){return t===null||typeof t!="object"?null:(t=Et&&t[Et]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Symbol.for("react.client.reference");function ee(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case $:return"Profiler";case Q:return"StrictMode";case et:return"Suspense";case ot:return"SuspenseList";case mt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case P:return"Portal";case F:return t.displayName||"Context";case Z:return(t._context.displayName||"Context")+".Consumer";case tt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return e=t.displayName||null,e!==null?e:ee(t.type)||"Memo";case L:e=t._payload,t=t._init;try{return ee(t(e))}catch{}}return null}var qt=Array.isArray,D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},St=[],At=-1;function b(t){return{current:t}}function j(t){0>At||(t.current=St[At],St[At]=null,At--)}function q(t,e){At++,St[At]=t.current,t.current=e}var X=b(null),at=b(null),rt=b(null),lt=b(null);function Kt(t,e){switch(q(rt,e),q(at,t),q(X,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?$d(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=$d(e),t=Fd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(X),q(X,t)}function Nt(){j(X),j(at),j(rt)}function we(t){t.memoizedState!==null&&q(lt,t);var e=X.current,n=Fd(e,t.type);e!==n&&(q(at,t),q(X,n))}function on(t){at.current===t&&(j(X),j(at)),lt.current===t&&(j(lt),Ka._currentValue=B)}var rn,zr;function Yn(t){if(rn===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rn=e&&e[1]||"",zr=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rn+t+zr}var Ui=!1;function wi(t,e){if(!t||Ui)return"";Ui=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(C){var z=C}Reflect.construct(t,[],U)}else{try{U.call()}catch(C){z=C}t.call(U.prototype)}}else{try{throw Error()}catch(C){z=C}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(C){if(C&&z&&typeof C.stack=="string")return[C.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),o=u[0],f=u[1];if(o&&f){var v=o.split(`
`),T=f.split(`
`);for(a=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;a<T.length&&!T[a].includes("DetermineComponentFrameRoot");)a++;if(l===v.length||a===T.length)for(l=v.length-1,a=T.length-1;1<=l&&0<=a&&v[l]!==T[a];)a--;for(;1<=l&&0<=a;l--,a--)if(v[l]!==T[a]){if(l!==1||a!==1)do if(l--,a--,0>a||v[l]!==T[a]){var N=`
`+v[l].replace(" at new "," at ");return t.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",t.displayName)),N}while(1<=l&&0<=a);break}}}finally{Ui=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Yn(n):""}function uv(t,e){switch(t.tag){case 26:case 27:case 5:return Yn(t.type);case 16:return Yn("Lazy");case 13:return t.child!==e&&e!==null?Yn("Suspense Fallback"):Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 15:return wi(t.type,!1);case 11:return wi(t.type.render,!1);case 1:return wi(t.type,!0);case 31:return Yn("Activity");default:return""}}function Cr(t){try{var e="",n=null;do e+=uv(t,n),n=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Hi=Object.prototype.hasOwnProperty,Bi=i.unstable_scheduleCallback,Yi=i.unstable_cancelCallback,iv=i.unstable_shouldYield,cv=i.unstable_requestPaint,se=i.unstable_now,ov=i.unstable_getCurrentPriorityLevel,Or=i.unstable_ImmediatePriority,Dr=i.unstable_UserBlockingPriority,eu=i.unstable_NormalPriority,rv=i.unstable_LowPriority,_r=i.unstable_IdlePriority,sv=i.log,fv=i.unstable_setDisableYieldValue,aa=null,fe=null;function sn(t){if(typeof sv=="function"&&fv(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(aa,t)}catch{}}var de=Math.clz32?Math.clz32:hv,dv=Math.log,mv=Math.LN2;function hv(t){return t>>>=0,t===0?32:31-(dv(t)/mv|0)|0}var nu=256,lu=262144,au=4194304;function qn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function uu(t,e,n){var l=t.pendingLanes;if(l===0)return 0;var a=0,u=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var f=l&134217727;return f!==0?(l=f&~u,l!==0?a=qn(l):(o&=f,o!==0?a=qn(o):n||(n=f&~t,n!==0&&(a=qn(n))))):(f=l&~u,f!==0?a=qn(f):o!==0?a=qn(o):n||(n=l&~t,n!==0&&(a=qn(n)))),a===0?0:e!==0&&e!==a&&(e&u)===0&&(u=a&-a,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:a}function ua(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function vv(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nr(){var t=au;return au<<=1,(au&62914560)===0&&(au=4194304),t}function qi(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ia(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function yv(t,e,n,l,a,u){var o=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var f=t.entanglements,v=t.expirationTimes,T=t.hiddenUpdates;for(n=o&~n;0<n;){var N=31-de(n),U=1<<N;f[N]=0,v[N]=-1;var z=T[N];if(z!==null)for(T[N]=null,N=0;N<z.length;N++){var C=z[N];C!==null&&(C.lane&=-536870913)}n&=~U}l!==0&&Mr(t,l,0),u!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=u&~(o&~e))}function Mr(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-de(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|n&261930}function Rr(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var l=31-de(n),a=1<<l;a&e|t[l]&e&&(t[l]|=e),n&=~a}}function jr(t,e){var n=e&-e;return n=(n&42)!==0?1:Gi(n),(n&(t.suspendedLanes|e))!==0?0:n}function Gi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Li(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ur(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Sm(t.type))}function wr(t,e){var n=G.p;try{return G.p=t,e()}finally{G.p=n}}var fn=Math.random().toString(36).slice(2),Wt="__reactFiber$"+fn,le="__reactProps$"+fn,fl="__reactContainer$"+fn,Xi="__reactEvents$"+fn,gv="__reactListeners$"+fn,pv="__reactHandles$"+fn,Hr="__reactResources$"+fn,ca="__reactMarker$"+fn;function Qi(t){delete t[Wt],delete t[le],delete t[Xi],delete t[gv],delete t[pv]}function dl(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fl]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=am(t);t!==null;){if(n=t[Wt])return n;t=am(t)}return e}t=n,n=t.parentNode}return null}function ml(t){if(t=t[Wt]||t[fl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function oa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(c(33))}function hl(t){var e=t[Hr];return e||(e=t[Hr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function kt(t){t[ca]=!0}var Br=new Set,Yr={};function Gn(t,e){vl(t,e),vl(t+"Capture",e)}function vl(t,e){for(Yr[t]=e,t=0;t<e.length;t++)Br.add(e[t])}var bv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qr={},Gr={};function Sv(t){return Hi.call(Gr,t)?!0:Hi.call(qr,t)?!1:bv.test(t)?Gr[t]=!0:(qr[t]=!0,!1)}function iu(t,e,n){if(Sv(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function cu(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Le(t,e,n,l){if(l===null)t.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+l)}}function xe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lr(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xv(t,e,n){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,u=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,u.call(this,o)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vi(t){if(!t._valueTracker){var e=Lr(t)?"checked":"value";t._valueTracker=xv(t,e,""+t[e])}}function Xr(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),l="";return t&&(l=Lr(t)?t.checked?"true":"false":t.value),t=l,t!==n?(e.setValue(t),!0):!1}function ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ev=/[\n"\\]/g;function Ee(t){return t.replace(Ev,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Zi(t,e,n,l,a,u,o,f){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+xe(e)):t.value!==""+xe(e)&&(t.value=""+xe(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?Ki(t,o,xe(e)):n!=null?Ki(t,o,xe(n)):l!=null&&t.removeAttribute("value"),a==null&&u!=null&&(t.defaultChecked=!!u),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+xe(f):t.removeAttribute("name")}function Qr(t,e,n,l,a,u,o,f){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Vi(t);return}n=n!=null?""+xe(n):"",e=e!=null?""+xe(e):n,f||e===t.value||(t.value=e),t.defaultValue=e}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=f?t.checked:!!l,t.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),Vi(t)}function Ki(t,e,n){e==="number"&&ou(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function yl(t,e,n,l){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&l&&(t[n].defaultSelected=!0)}else{for(n=""+xe(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,l&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Vr(t,e,n){if(e!=null&&(e=""+xe(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+xe(n):""}function Zr(t,e,n,l){if(e==null){if(l!=null){if(n!=null)throw Error(c(92));if(qt(l)){if(1<l.length)throw Error(c(93));l=l[0]}n=l}n==null&&(n=""),e=n}n=xe(e),t.defaultValue=n,l=t.textContent,l===n&&l!==""&&l!==null&&(t.value=l),Vi(t)}function gl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Av=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kr(t,e,n){var l=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,n):typeof n!="number"||n===0||Av.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function kr(t,e,n){if(e!=null&&typeof e!="object")throw Error(c(62));if(t=t.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var a in e)l=e[a],e.hasOwnProperty(a)&&n[a]!==l&&Kr(t,a,l)}else for(var u in e)e.hasOwnProperty(u)&&Kr(t,u,e[u])}function ki(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ru(t){return zv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xe(){}var Ji=null;function Wi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pl=null,bl=null;function Jr(t){var e=ml(t);if(e&&(t=e.stateNode)){var n=t[le]||null;t:switch(t=e.stateNode,e.type){case"input":if(Zi(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ee(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var l=n[e];if(l!==t&&l.form===t.form){var a=l[le]||null;if(!a)throw Error(c(90));Zi(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)l=n[e],l.form===t.form&&Xr(l)}break t;case"textarea":Vr(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&yl(t,!!n.multiple,e,!1)}}}var $i=!1;function Wr(t,e,n){if($i)return t(e,n);$i=!0;try{var l=t(e);return l}finally{if($i=!1,(pl!==null||bl!==null)&&($u(),pl&&(e=pl,t=bl,bl=pl=null,Jr(e),t)))for(e=0;e<t.length;e++)Jr(t[e])}}function ra(t,e){var n=t.stateNode;if(n===null)return null;var l=n[le]||null;if(l===null)return null;n=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(c(231,e,typeof n));return n}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fi=!1;if(Qe)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){Fi=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{Fi=!1}var dn=null,Ii=null,su=null;function $r(){if(su)return su;var t,e=Ii,n=e.length,l,a="value"in dn?dn.value:dn.textContent,u=a.length;for(t=0;t<n&&e[t]===a[t];t++);var o=n-t;for(l=1;l<=o&&e[n-l]===a[u-l];l++);return su=a.slice(t,1<l?1-l:void 0)}function fu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function du(){return!0}function Fr(){return!1}function ae(t){function e(n,l,a,u,o){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=u,this.target=o,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(n=t[f],this[f]=n?n(u):u[f]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?du:Fr,this.isPropagationStopped=Fr,this}return O(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=du)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=du)},persist:function(){},isPersistent:du}),e}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mu=ae(Ln),fa=O({},Ln,{view:0,detail:0}),Cv=ae(fa),Pi,tc,da,hu=O({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==da&&(da&&t.type==="mousemove"?(Pi=t.screenX-da.screenX,tc=t.screenY-da.screenY):tc=Pi=0,da=t),Pi)},movementY:function(t){return"movementY"in t?t.movementY:tc}}),Ir=ae(hu),Ov=O({},hu,{dataTransfer:0}),Dv=ae(Ov),_v=O({},fa,{relatedTarget:0}),ec=ae(_v),Nv=O({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Mv=ae(Nv),Rv=O({},Ln,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jv=ae(Rv),Uv=O({},Ln,{data:0}),Pr=ae(Uv),wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Bv[t])?!!e[t]:!1}function nc(){return Yv}var qv=O({},fa,{key:function(t){if(t.key){var e=wv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(t){return t.type==="keypress"?fu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gv=ae(qv),Lv=O({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ts=ae(Lv),Xv=O({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),Qv=ae(Xv),Vv=O({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=ae(Vv),Kv=O({},hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=ae(Kv),Jv=O({},Ln,{newState:0,oldState:0}),Wv=ae(Jv),$v=[9,13,27,32],lc=Qe&&"CompositionEvent"in window,ma=null;Qe&&"documentMode"in document&&(ma=document.documentMode);var Fv=Qe&&"TextEvent"in window&&!ma,es=Qe&&(!lc||ma&&8<ma&&11>=ma),ns=" ",ls=!1;function as(t,e){switch(t){case"keyup":return $v.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function us(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sl=!1;function Iv(t,e){switch(t){case"compositionend":return us(e);case"keypress":return e.which!==32?null:(ls=!0,ns);case"textInput":return t=e.data,t===ns&&ls?null:t;default:return null}}function Pv(t,e){if(Sl)return t==="compositionend"||!lc&&as(t,e)?(t=$r(),su=Ii=dn=null,Sl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return es&&e.locale!=="ko"?null:e.data;default:return null}}var ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function is(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ty[t.type]:e==="textarea"}function cs(t,e,n,l){pl?bl?bl.push(l):bl=[l]:pl=l,e=li(e,"onChange"),0<e.length&&(n=new mu("onChange","change",null,n,l),t.push({event:n,listeners:e}))}var ha=null,va=null;function ey(t){Vd(t,0)}function vu(t){var e=oa(t);if(Xr(e))return t}function os(t,e){if(t==="change")return e}var rs=!1;if(Qe){var ac;if(Qe){var uc="oninput"in document;if(!uc){var ss=document.createElement("div");ss.setAttribute("oninput","return;"),uc=typeof ss.oninput=="function"}ac=uc}else ac=!1;rs=ac&&(!document.documentMode||9<document.documentMode)}function fs(){ha&&(ha.detachEvent("onpropertychange",ds),va=ha=null)}function ds(t){if(t.propertyName==="value"&&vu(va)){var e=[];cs(e,va,t,Wi(t)),Wr(ey,e)}}function ny(t,e,n){t==="focusin"?(fs(),ha=e,va=n,ha.attachEvent("onpropertychange",ds)):t==="focusout"&&fs()}function ly(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vu(va)}function ay(t,e){if(t==="click")return vu(e)}function uy(t,e){if(t==="input"||t==="change")return vu(e)}function iy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var me=typeof Object.is=="function"?Object.is:iy;function ya(t,e){if(me(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),l=Object.keys(e);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!Hi.call(e,a)||!me(t[a],e[a]))return!1}return!0}function ms(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hs(t,e){var n=ms(t);t=0;for(var l;n;){if(n.nodeType===3){if(l=t+n.textContent.length,t<=e&&l>=e)return{node:n,offset:e-t};t=l}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=ms(n)}}function vs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ys(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ou(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ou(t.document)}return e}function ic(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var cy=Qe&&"documentMode"in document&&11>=document.documentMode,xl=null,cc=null,ga=null,oc=!1;function gs(t,e,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oc||xl==null||xl!==ou(l)||(l=xl,"selectionStart"in l&&ic(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ga&&ya(ga,l)||(ga=l,l=li(cc,"onSelect"),0<l.length&&(e=new mu("onSelect","select",null,e,n),t.push({event:e,listeners:l}),e.target=xl)))}function Xn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var El={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionrun:Xn("Transition","TransitionRun"),transitionstart:Xn("Transition","TransitionStart"),transitioncancel:Xn("Transition","TransitionCancel"),transitionend:Xn("Transition","TransitionEnd")},rc={},ps={};Qe&&(ps=document.createElement("div").style,"AnimationEvent"in window||(delete El.animationend.animation,delete El.animationiteration.animation,delete El.animationstart.animation),"TransitionEvent"in window||delete El.transitionend.transition);function Qn(t){if(rc[t])return rc[t];if(!El[t])return t;var e=El[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ps)return rc[t]=e[n];return t}var bs=Qn("animationend"),Ss=Qn("animationiteration"),xs=Qn("animationstart"),oy=Qn("transitionrun"),ry=Qn("transitionstart"),sy=Qn("transitioncancel"),Es=Qn("transitionend"),As=new Map,sc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sc.push("scrollEnd");function Me(t,e){As.set(t,e),Gn(e,[t])}var yu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ae=[],Al=0,fc=0;function gu(){for(var t=Al,e=fc=Al=0;e<t;){var n=Ae[e];Ae[e++]=null;var l=Ae[e];Ae[e++]=null;var a=Ae[e];Ae[e++]=null;var u=Ae[e];if(Ae[e++]=null,l!==null&&a!==null){var o=l.pending;o===null?a.next=a:(a.next=o.next,o.next=a),l.pending=a}u!==0&&Ts(n,a,u)}}function pu(t,e,n,l){Ae[Al++]=t,Ae[Al++]=e,Ae[Al++]=n,Ae[Al++]=l,fc|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function dc(t,e,n,l){return pu(t,e,n,l),bu(t)}function Vn(t,e){return pu(t,null,null,e),bu(t)}function Ts(t,e,n){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n);for(var a=!1,u=t.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(a=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,a&&e!==null&&(a=31-de(n),t=u.hiddenUpdates,l=t[a],l===null?t[a]=[e]:l.push(e),e.lane=n|536870912),u):null}function bu(t){if(50<qa)throw qa=0,Eo=null,Error(c(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Tl={};function fy(t,e,n,l){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function he(t,e,n,l){return new fy(t,e,n,l)}function mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ve(t,e){var n=t.alternate;return n===null?(n=he(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function zs(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Su(t,e,n,l,a,u){var o=0;if(l=t,typeof t=="function")mc(t)&&(o=1);else if(typeof t=="string")o=yg(t,n,X.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case mt:return t=he(31,n,e,a),t.elementType=mt,t.lanes=u,t;case w:return Zn(n.children,a,u,e);case Q:o=8,a|=24;break;case $:return t=he(12,n,e,a|2),t.elementType=$,t.lanes=u,t;case et:return t=he(13,n,e,a),t.elementType=et,t.lanes=u,t;case ot:return t=he(19,n,e,a),t.elementType=ot,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:o=10;break t;case Z:o=9;break t;case tt:o=11;break t;case H:o=14;break t;case L:o=16,l=null;break t}o=29,n=Error(c(130,t===null?"null":typeof t,"")),l=null}return e=he(o,n,e,a),e.elementType=t,e.type=l,e.lanes=u,e}function Zn(t,e,n,l){return t=he(7,t,l,e),t.lanes=n,t}function hc(t,e,n){return t=he(6,t,null,e),t.lanes=n,t}function Cs(t){var e=he(18,null,null,0);return e.stateNode=t,e}function vc(t,e,n){return e=he(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Os=new WeakMap;function Te(t,e){if(typeof t=="object"&&t!==null){var n=Os.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Cr(e)},Os.set(t,e),e)}return{value:t,source:e,stack:Cr(e)}}var zl=[],Cl=0,xu=null,pa=0,ze=[],Ce=0,mn=null,He=1,Be="";function Ze(t,e){zl[Cl++]=pa,zl[Cl++]=xu,xu=t,pa=e}function Ds(t,e,n){ze[Ce++]=He,ze[Ce++]=Be,ze[Ce++]=mn,mn=t;var l=He;t=Be;var a=32-de(l)-1;l&=~(1<<a),n+=1;var u=32-de(e)+a;if(30<u){var o=a-a%5;u=(l&(1<<o)-1).toString(32),l>>=o,a-=o,He=1<<32-de(e)+a|n<<a|l,Be=u+t}else He=1<<u|n<<a|l,Be=t}function yc(t){t.return!==null&&(Ze(t,1),Ds(t,1,0))}function gc(t){for(;t===xu;)xu=zl[--Cl],zl[Cl]=null,pa=zl[--Cl],zl[Cl]=null;for(;t===mn;)mn=ze[--Ce],ze[Ce]=null,Be=ze[--Ce],ze[Ce]=null,He=ze[--Ce],ze[Ce]=null}function _s(t,e){ze[Ce++]=He,ze[Ce++]=Be,ze[Ce++]=mn,He=e.id,Be=e.overflow,mn=t}var $t=null,Mt=null,yt=!1,hn=null,Oe=!1,pc=Error(c(519));function vn(t){var e=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ba(Te(e,t)),pc}function Ns(t){var e=t.stateNode,n=t.type,l=t.memoizedProps;switch(e[Wt]=t,e[le]=l,n){case"dialog":dt("cancel",e),dt("close",e);break;case"iframe":case"object":case"embed":dt("load",e);break;case"video":case"audio":for(n=0;n<La.length;n++)dt(La[n],e);break;case"source":dt("error",e);break;case"img":case"image":case"link":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"input":dt("invalid",e),Qr(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":dt("invalid",e);break;case"textarea":dt("invalid",e),Zr(e,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||l.suppressHydrationWarning===!0||Jd(e.textContent,n)?(l.popover!=null&&(dt("beforetoggle",e),dt("toggle",e)),l.onScroll!=null&&dt("scroll",e),l.onScrollEnd!=null&&dt("scrollend",e),l.onClick!=null&&(e.onclick=Xe),e=!0):e=!1,e||vn(t,!0)}function Ms(t){for($t=t.return;$t;)switch($t.tag){case 5:case 31:case 13:Oe=!1;return;case 27:case 3:Oe=!0;return;default:$t=$t.return}}function Ol(t){if(t!==$t)return!1;if(!yt)return Ms(t),yt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Bo(t.type,t.memoizedProps)),n=!n),n&&Mt&&vn(t),Ms(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));Mt=lm(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));Mt=lm(t)}else e===27?(e=Mt,_n(t.type)?(t=Xo,Xo=null,Mt=t):Mt=e):Mt=$t?_e(t.stateNode.nextSibling):null;return!0}function Kn(){Mt=$t=null,yt=!1}function bc(){var t=hn;return t!==null&&(oe===null?oe=t:oe.push.apply(oe,t),hn=null),t}function ba(t){hn===null?hn=[t]:hn.push(t)}var Sc=b(null),kn=null,Ke=null;function yn(t,e,n){q(Sc,e._currentValue),e._currentValue=n}function ke(t){t._currentValue=Sc.current,j(Sc)}function xc(t,e,n){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===n)break;t=t.return}}function Ec(t,e,n,l){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){var o=a.child;u=u.firstContext;t:for(;u!==null;){var f=u;u=a;for(var v=0;v<e.length;v++)if(f.context===e[v]){u.lanes|=n,f=u.alternate,f!==null&&(f.lanes|=n),xc(u.return,n,t),l||(o=null);break t}u=f.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(c(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),xc(o,n,t),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function Dl(t,e,n,l){t=null;for(var a=e,u=!1;a!==null;){if(!u){if((a.flags&524288)!==0)u=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var f=a.type;me(a.pendingProps.value,o.value)||(t!==null?t.push(f):t=[f])}}else if(a===lt.current){if(o=a.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Ka):t=[Ka])}a=a.return}t!==null&&Ec(e,t,n,l),e.flags|=262144}function Eu(t){for(t=t.firstContext;t!==null;){if(!me(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Jn(t){kn=t,Ke=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ft(t){return Rs(kn,t)}function Au(t,e){return kn===null&&Jn(t),Rs(t,e)}function Rs(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Ke===null){if(t===null)throw Error(c(308));Ke=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ke=Ke.next=e;return n}var dy=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},my=i.unstable_scheduleCallback,hy=i.unstable_NormalPriority,Gt={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ac(){return{controller:new dy,data:new Map,refCount:0}}function Sa(t){t.refCount--,t.refCount===0&&my(hy,function(){t.controller.abort()})}var xa=null,Tc=0,_l=0,Nl=null;function vy(t,e){if(xa===null){var n=xa=[];Tc=0,_l=Do(),Nl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Tc++,e.then(js,js),e}function js(){if(--Tc===0&&xa!==null){Nl!==null&&(Nl.status="fulfilled");var t=xa;xa=null,_l=0,Nl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function yy(t,e){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var Us=D.S;D.S=function(t,e){pd=se(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&vy(t,e),Us!==null&&Us(t,e)};var Wn=b(null);function zc(){var t=Wn.current;return t!==null?t:_t.pooledCache}function Tu(t,e){e===null?q(Wn,Wn.current):q(Wn,e.pool)}function ws(){var t=zc();return t===null?null:{parent:Gt._currentValue,pool:t}}var Ml=Error(c(460)),Cc=Error(c(474)),zu=Error(c(542)),Cu={then:function(){}};function Hs(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bs(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Xe,Xe),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qs(t),t;default:if(typeof e.status=="string")e.then(Xe,Xe);else{if(t=_t,t!==null&&100<t.shellSuspendCounter)throw Error(c(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=l}},function(l){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qs(t),t}throw Fn=e,Ml}}function $n(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Fn=n,Ml):n}}var Fn=null;function Ys(){if(Fn===null)throw Error(c(459));var t=Fn;return Fn=null,t}function qs(t){if(t===Ml||t===zu)throw Error(c(483))}var Rl=null,Ea=0;function Ou(t){var e=Ea;return Ea+=1,Rl===null&&(Rl=[]),Bs(Rl,t,e)}function Aa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Du(t,e){throw e.$$typeof===Y?Error(c(525)):(t=Object.prototype.toString.call(e),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Gs(t){function e(E,p){if(t){var A=E.deletions;A===null?(E.deletions=[p],E.flags|=16):A.push(p)}}function n(E,p){if(!t)return null;for(;p!==null;)e(E,p),p=p.sibling;return null}function l(E){for(var p=new Map;E!==null;)E.key!==null?p.set(E.key,E):p.set(E.index,E),E=E.sibling;return p}function a(E,p){return E=Ve(E,p),E.index=0,E.sibling=null,E}function u(E,p,A){return E.index=A,t?(A=E.alternate,A!==null?(A=A.index,A<p?(E.flags|=67108866,p):A):(E.flags|=67108866,p)):(E.flags|=1048576,p)}function o(E){return t&&E.alternate===null&&(E.flags|=67108866),E}function f(E,p,A,R){return p===null||p.tag!==6?(p=hc(A,E.mode,R),p.return=E,p):(p=a(p,A),p.return=E,p)}function v(E,p,A,R){var I=A.type;return I===w?N(E,p,A.props.children,R,A.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===L&&$n(I)===p.type)?(p=a(p,A.props),Aa(p,A),p.return=E,p):(p=Su(A.type,A.key,A.props,null,E.mode,R),Aa(p,A),p.return=E,p)}function T(E,p,A,R){return p===null||p.tag!==4||p.stateNode.containerInfo!==A.containerInfo||p.stateNode.implementation!==A.implementation?(p=vc(A,E.mode,R),p.return=E,p):(p=a(p,A.children||[]),p.return=E,p)}function N(E,p,A,R,I){return p===null||p.tag!==7?(p=Zn(A,E.mode,R,I),p.return=E,p):(p=a(p,A),p.return=E,p)}function U(E,p,A){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=hc(""+p,E.mode,A),p.return=E,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case V:return A=Su(p.type,p.key,p.props,null,E.mode,A),Aa(A,p),A.return=E,A;case P:return p=vc(p,E.mode,A),p.return=E,p;case L:return p=$n(p),U(E,p,A)}if(qt(p)||Ut(p))return p=Zn(p,E.mode,A,null),p.return=E,p;if(typeof p.then=="function")return U(E,Ou(p),A);if(p.$$typeof===F)return U(E,Au(E,p),A);Du(E,p)}return null}function z(E,p,A,R){var I=p!==null?p.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return I!==null?null:f(E,p,""+A,R);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case V:return A.key===I?v(E,p,A,R):null;case P:return A.key===I?T(E,p,A,R):null;case L:return A=$n(A),z(E,p,A,R)}if(qt(A)||Ut(A))return I!==null?null:N(E,p,A,R,null);if(typeof A.then=="function")return z(E,p,Ou(A),R);if(A.$$typeof===F)return z(E,p,Au(E,A),R);Du(E,A)}return null}function C(E,p,A,R,I){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return E=E.get(A)||null,f(p,E,""+R,I);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case V:return E=E.get(R.key===null?A:R.key)||null,v(p,E,R,I);case P:return E=E.get(R.key===null?A:R.key)||null,T(p,E,R,I);case L:return R=$n(R),C(E,p,A,R,I)}if(qt(R)||Ut(R))return E=E.get(A)||null,N(p,E,R,I,null);if(typeof R.then=="function")return C(E,p,A,Ou(R),I);if(R.$$typeof===F)return C(E,p,A,Au(p,R),I);Du(p,R)}return null}function K(E,p,A,R){for(var I=null,pt=null,W=p,ct=p=0,vt=null;W!==null&&ct<A.length;ct++){W.index>ct?(vt=W,W=null):vt=W.sibling;var bt=z(E,W,A[ct],R);if(bt===null){W===null&&(W=vt);break}t&&W&&bt.alternate===null&&e(E,W),p=u(bt,p,ct),pt===null?I=bt:pt.sibling=bt,pt=bt,W=vt}if(ct===A.length)return n(E,W),yt&&Ze(E,ct),I;if(W===null){for(;ct<A.length;ct++)W=U(E,A[ct],R),W!==null&&(p=u(W,p,ct),pt===null?I=W:pt.sibling=W,pt=W);return yt&&Ze(E,ct),I}for(W=l(W);ct<A.length;ct++)vt=C(W,E,ct,A[ct],R),vt!==null&&(t&&vt.alternate!==null&&W.delete(vt.key===null?ct:vt.key),p=u(vt,p,ct),pt===null?I=vt:pt.sibling=vt,pt=vt);return t&&W.forEach(function(Un){return e(E,Un)}),yt&&Ze(E,ct),I}function nt(E,p,A,R){if(A==null)throw Error(c(151));for(var I=null,pt=null,W=p,ct=p=0,vt=null,bt=A.next();W!==null&&!bt.done;ct++,bt=A.next()){W.index>ct?(vt=W,W=null):vt=W.sibling;var Un=z(E,W,bt.value,R);if(Un===null){W===null&&(W=vt);break}t&&W&&Un.alternate===null&&e(E,W),p=u(Un,p,ct),pt===null?I=Un:pt.sibling=Un,pt=Un,W=vt}if(bt.done)return n(E,W),yt&&Ze(E,ct),I;if(W===null){for(;!bt.done;ct++,bt=A.next())bt=U(E,bt.value,R),bt!==null&&(p=u(bt,p,ct),pt===null?I=bt:pt.sibling=bt,pt=bt);return yt&&Ze(E,ct),I}for(W=l(W);!bt.done;ct++,bt=A.next())bt=C(W,E,ct,bt.value,R),bt!==null&&(t&&bt.alternate!==null&&W.delete(bt.key===null?ct:bt.key),p=u(bt,p,ct),pt===null?I=bt:pt.sibling=bt,pt=bt);return t&&W.forEach(function(Og){return e(E,Og)}),yt&&Ze(E,ct),I}function Dt(E,p,A,R){if(typeof A=="object"&&A!==null&&A.type===w&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case V:t:{for(var I=A.key;p!==null;){if(p.key===I){if(I=A.type,I===w){if(p.tag===7){n(E,p.sibling),R=a(p,A.props.children),R.return=E,E=R;break t}}else if(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===L&&$n(I)===p.type){n(E,p.sibling),R=a(p,A.props),Aa(R,A),R.return=E,E=R;break t}n(E,p);break}else e(E,p);p=p.sibling}A.type===w?(R=Zn(A.props.children,E.mode,R,A.key),R.return=E,E=R):(R=Su(A.type,A.key,A.props,null,E.mode,R),Aa(R,A),R.return=E,E=R)}return o(E);case P:t:{for(I=A.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===A.containerInfo&&p.stateNode.implementation===A.implementation){n(E,p.sibling),R=a(p,A.children||[]),R.return=E,E=R;break t}else{n(E,p);break}else e(E,p);p=p.sibling}R=vc(A,E.mode,R),R.return=E,E=R}return o(E);case L:return A=$n(A),Dt(E,p,A,R)}if(qt(A))return K(E,p,A,R);if(Ut(A)){if(I=Ut(A),typeof I!="function")throw Error(c(150));return A=I.call(A),nt(E,p,A,R)}if(typeof A.then=="function")return Dt(E,p,Ou(A),R);if(A.$$typeof===F)return Dt(E,p,Au(E,A),R);Du(E,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,p!==null&&p.tag===6?(n(E,p.sibling),R=a(p,A),R.return=E,E=R):(n(E,p),R=hc(A,E.mode,R),R.return=E,E=R),o(E)):n(E,p)}return function(E,p,A,R){try{Ea=0;var I=Dt(E,p,A,R);return Rl=null,I}catch(W){if(W===Ml||W===zu)throw W;var pt=he(29,W,null,E.mode);return pt.lanes=R,pt.return=E,pt}}}var In=Gs(!0),Ls=Gs(!1),gn=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function pn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function bn(t,e,n){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(xt&2)!==0){var a=l.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),l.pending=e,e=bu(t),Ts(t,null,n),e}return pu(t,l,e,n),bu(t)}function Ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,Rr(t,n)}}function _c(t,e){var n=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?a=u=o:u=u.next=o,n=n.next}while(n!==null);u===null?a=u=e:u=u.next=e}else a=u=e;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Nc=!1;function za(){if(Nc){var t=Nl;if(t!==null)throw t}}function Ca(t,e,n,l){Nc=!1;var a=t.updateQueue;gn=!1;var u=a.firstBaseUpdate,o=a.lastBaseUpdate,f=a.shared.pending;if(f!==null){a.shared.pending=null;var v=f,T=v.next;v.next=null,o===null?u=T:o.next=T,o=v;var N=t.alternate;N!==null&&(N=N.updateQueue,f=N.lastBaseUpdate,f!==o&&(f===null?N.firstBaseUpdate=T:f.next=T,N.lastBaseUpdate=v))}if(u!==null){var U=a.baseState;o=0,N=T=v=null,f=u;do{var z=f.lane&-536870913,C=z!==f.lane;if(C?(ht&z)===z:(l&z)===z){z!==0&&z===_l&&(Nc=!0),N!==null&&(N=N.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var K=t,nt=f;z=e;var Dt=n;switch(nt.tag){case 1:if(K=nt.payload,typeof K=="function"){U=K.call(Dt,U,z);break t}U=K;break t;case 3:K.flags=K.flags&-65537|128;case 0:if(K=nt.payload,z=typeof K=="function"?K.call(Dt,U,z):K,z==null)break t;U=O({},U,z);break t;case 2:gn=!0}}z=f.callback,z!==null&&(t.flags|=64,C&&(t.flags|=8192),C=a.callbacks,C===null?a.callbacks=[z]:C.push(z))}else C={lane:z,tag:f.tag,payload:f.payload,callback:f.callback,next:null},N===null?(T=N=C,v=U):N=N.next=C,o|=z;if(f=f.next,f===null){if(f=a.shared.pending,f===null)break;C=f,f=C.next,C.next=null,a.lastBaseUpdate=C,a.shared.pending=null}}while(!0);N===null&&(v=U),a.baseState=v,a.firstBaseUpdate=T,a.lastBaseUpdate=N,u===null&&(a.shared.lanes=0),Tn|=o,t.lanes=o,t.memoizedState=U}}function Xs(t,e){if(typeof t!="function")throw Error(c(191,t));t.call(e)}function Qs(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Xs(n[t],e)}var jl=b(null),_u=b(0);function Vs(t,e){t=nn,q(_u,t),q(jl,e),nn=t|e.baseLanes}function Mc(){q(_u,nn),q(jl,jl.current)}function Rc(){nn=_u.current,j(jl),j(_u)}var ve=b(null),De=null;function Sn(t){var e=t.alternate;q(Bt,Bt.current&1),q(ve,t),De===null&&(e===null||jl.current!==null||e.memoizedState!==null)&&(De=t)}function jc(t){q(Bt,Bt.current),q(ve,t),De===null&&(De=t)}function Zs(t){t.tag===22?(q(Bt,Bt.current),q(ve,t),De===null&&(De=t)):xn()}function xn(){q(Bt,Bt.current),q(ve,ve.current)}function ye(t){j(ve),De===t&&(De=null),j(Bt)}var Bt=b(0);function Nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Go(n)||Lo(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Je=0,it=null,Ct=null,Lt=null,Mu=!1,Ul=!1,Pn=!1,Ru=0,Oa=0,wl=null,gy=0;function wt(){throw Error(c(321))}function Uc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!me(t[n],e[n]))return!1;return!0}function wc(t,e,n,l,a,u){return Je=u,it=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=t===null||t.memoizedState===null?_f:$c,Pn=!1,u=n(l,a),Pn=!1,Ul&&(u=ks(e,n,l,a)),Ks(t),u}function Ks(t){D.H=Na;var e=Ct!==null&&Ct.next!==null;if(Je=0,Lt=Ct=it=null,Mu=!1,Oa=0,wl=null,e)throw Error(c(300));t===null||Xt||(t=t.dependencies,t!==null&&Eu(t)&&(Xt=!0))}function ks(t,e,n,l){it=t;var a=0;do{if(Ul&&(wl=null),Oa=0,Ul=!1,25<=a)throw Error(c(301));if(a+=1,Lt=Ct=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}D.H=Nf,u=e(n,l)}while(Ul);return u}function py(){var t=D.H,e=t.useState()[0];return e=typeof e.then=="function"?Da(e):e,t=t.useState()[0],(Ct!==null?Ct.memoizedState:null)!==t&&(it.flags|=1024),e}function Hc(){var t=Ru!==0;return Ru=0,t}function Bc(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Yc(t){if(Mu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Mu=!1}Je=0,Lt=Ct=it=null,Ul=!1,Oa=Ru=0,wl=null}function ne(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?it.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Yt(){if(Ct===null){var t=it.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Lt===null?it.memoizedState:Lt.next;if(e!==null)Lt=e,Ct=t;else{if(t===null)throw it.alternate===null?Error(c(467)):Error(c(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Lt===null?it.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function ju(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Da(t){var e=Oa;return Oa+=1,wl===null&&(wl=[]),t=Bs(wl,t,e),e=it,(Lt===null?e.memoizedState:Lt.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?_f:$c),t}function Uu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Da(t);if(t.$$typeof===F)return Ft(t)}throw Error(c(438,String(t)))}function qc(t){var e=null,n=it.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var l=it.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=ju(),it.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),l=0;l<t;l++)n[l]=gt;return e.index++,n}function We(t,e){return typeof e=="function"?e(t):e}function wu(t){var e=Yt();return Gc(e,Ct,t)}function Gc(t,e,n){var l=t.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=n;var a=t.baseQueue,u=l.pending;if(u!==null){if(a!==null){var o=a.next;a.next=u.next,u.next=o}e.baseQueue=a=u,l.pending=null}if(u=t.baseState,a===null)t.memoizedState=u;else{e=a.next;var f=o=null,v=null,T=e,N=!1;do{var U=T.lane&-536870913;if(U!==T.lane?(ht&U)===U:(Je&U)===U){var z=T.revertLane;if(z===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),U===_l&&(N=!0);else if((Je&z)===z){T=T.next,z===_l&&(N=!0);continue}else U={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},v===null?(f=v=U,o=u):v=v.next=U,it.lanes|=z,Tn|=z;U=T.action,Pn&&n(u,U),u=T.hasEagerState?T.eagerState:n(u,U)}else z={lane:U,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},v===null?(f=v=z,o=u):v=v.next=z,it.lanes|=U,Tn|=U;T=T.next}while(T!==null&&T!==e);if(v===null?o=u:v.next=f,!me(u,t.memoizedState)&&(Xt=!0,N&&(n=Nl,n!==null)))throw n;t.memoizedState=u,t.baseState=o,t.baseQueue=v,l.lastRenderedState=u}return a===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Lc(t){var e=Yt(),n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=t;var l=n.dispatch,a=n.pending,u=e.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do u=t(u,o.action),o=o.next;while(o!==a);me(u,e.memoizedState)||(Xt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,l]}function Js(t,e,n){var l=it,a=Yt(),u=yt;if(u){if(n===void 0)throw Error(c(407));n=n()}else n=e();var o=!me((Ct||a).memoizedState,n);if(o&&(a.memoizedState=n,Xt=!0),a=a.queue,Vc(Fs.bind(null,l,a,t),[t]),a.getSnapshot!==e||o||Lt!==null&&Lt.memoizedState.tag&1){if(l.flags|=2048,Hl(9,{destroy:void 0},$s.bind(null,l,a,n,e),null),_t===null)throw Error(c(349));u||(Je&127)!==0||Ws(l,e,n)}return n}function Ws(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=it.updateQueue,e===null?(e=ju(),it.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $s(t,e,n,l){e.value=n,e.getSnapshot=l,Is(e)&&Ps(t)}function Fs(t,e,n){return n(function(){Is(e)&&Ps(t)})}function Is(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!me(t,n)}catch{return!0}}function Ps(t){var e=Vn(t,2);e!==null&&re(e,t,2)}function Xc(t){var e=ne();if(typeof t=="function"){var n=t;if(t=n(),Pn){sn(!0);try{n()}finally{sn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:We,lastRenderedState:t},e}function tf(t,e,n,l){return t.baseState=n,Gc(t,Ct,typeof l=="function"?l:We)}function by(t,e,n,l,a){if(Yu(t))throw Error(c(485));if(t=e.action,t!==null){var u={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){u.listeners.push(o)}};D.T!==null?n(!0):u.isTransition=!1,l(u),n=e.pending,n===null?(u.next=e.pending=u,ef(e,u)):(u.next=n.next,e.pending=n.next=u)}}function ef(t,e){var n=e.action,l=e.payload,a=t.state;if(e.isTransition){var u=D.T,o={};D.T=o;try{var f=n(a,l),v=D.S;v!==null&&v(o,f),nf(t,e,f)}catch(T){Qc(t,e,T)}finally{u!==null&&o.types!==null&&(u.types=o.types),D.T=u}}else try{u=n(a,l),nf(t,e,u)}catch(T){Qc(t,e,T)}}function nf(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){lf(t,e,l)},function(l){return Qc(t,e,l)}):lf(t,e,n)}function lf(t,e,n){e.status="fulfilled",e.value=n,af(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,ef(t,n)))}function Qc(t,e,n){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=n,af(e),e=e.next;while(e!==l)}t.action=null}function af(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function uf(t,e){return e}function cf(t,e){if(yt){var n=_t.formState;if(n!==null){t:{var l=it;if(yt){if(Mt){e:{for(var a=Mt,u=Oe;a.nodeType!==8;){if(!u){a=null;break e}if(a=_e(a.nextSibling),a===null){a=null;break e}}u=a.data,a=u==="F!"||u==="F"?a:null}if(a){Mt=_e(a.nextSibling),l=a.data==="F!";break t}}vn(l)}l=!1}l&&(e=n[0])}}return n=ne(),n.memoizedState=n.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uf,lastRenderedState:e},n.queue=l,n=Cf.bind(null,it,l),l.dispatch=n,l=Xc(!1),u=Wc.bind(null,it,!1,l.queue),l=ne(),a={state:e,dispatch:null,action:t,pending:null},l.queue=a,n=by.bind(null,it,a,u,n),a.dispatch=n,l.memoizedState=t,[e,n,!1]}function of(t){var e=Yt();return rf(e,Ct,t)}function rf(t,e,n){if(e=Gc(t,e,uf)[0],t=wu(We)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Da(e)}catch(o){throw o===Ml?zu:o}else l=e;e=Yt();var a=e.queue,u=a.dispatch;return n!==e.memoizedState&&(it.flags|=2048,Hl(9,{destroy:void 0},Sy.bind(null,a,n),null)),[l,u,t]}function Sy(t,e){t.action=e}function sf(t){var e=Yt(),n=Ct;if(n!==null)return rf(e,n,t);Yt(),e=e.memoizedState,n=Yt();var l=n.queue.dispatch;return n.memoizedState=t,[e,l,!1]}function Hl(t,e,n,l){return t={tag:t,create:n,deps:l,inst:e,next:null},e=it.updateQueue,e===null&&(e=ju(),it.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(l=n.next,n.next=t,t.next=l,e.lastEffect=t),t}function ff(){return Yt().memoizedState}function Hu(t,e,n,l){var a=ne();it.flags|=t,a.memoizedState=Hl(1|e,{destroy:void 0},n,l===void 0?null:l)}function Bu(t,e,n,l){var a=Yt();l=l===void 0?null:l;var u=a.memoizedState.inst;Ct!==null&&l!==null&&Uc(l,Ct.memoizedState.deps)?a.memoizedState=Hl(e,u,n,l):(it.flags|=t,a.memoizedState=Hl(1|e,u,n,l))}function df(t,e){Hu(8390656,8,t,e)}function Vc(t,e){Bu(2048,8,t,e)}function xy(t){it.flags|=4;var e=it.updateQueue;if(e===null)e=ju(),it.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function mf(t){var e=Yt().memoizedState;return xy({ref:e,nextImpl:t}),function(){if((xt&2)!==0)throw Error(c(440));return e.impl.apply(void 0,arguments)}}function hf(t,e){return Bu(4,2,t,e)}function vf(t,e){return Bu(4,4,t,e)}function yf(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gf(t,e,n){n=n!=null?n.concat([t]):null,Bu(4,4,yf.bind(null,e,t),n)}function Zc(){}function pf(t,e){var n=Yt();e=e===void 0?null:e;var l=n.memoizedState;return e!==null&&Uc(e,l[1])?l[0]:(n.memoizedState=[t,e],t)}function bf(t,e){var n=Yt();e=e===void 0?null:e;var l=n.memoizedState;if(e!==null&&Uc(e,l[1]))return l[0];if(l=t(),Pn){sn(!0);try{t()}finally{sn(!1)}}return n.memoizedState=[l,e],l}function Kc(t,e,n){return n===void 0||(Je&1073741824)!==0&&(ht&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=Sd(),it.lanes|=t,Tn|=t,n)}function Sf(t,e,n,l){return me(n,e)?n:jl.current!==null?(t=Kc(t,n,l),me(t,e)||(Xt=!0),t):(Je&42)===0||(Je&1073741824)!==0&&(ht&261930)===0?(Xt=!0,t.memoizedState=n):(t=Sd(),it.lanes|=t,Tn|=t,e)}function xf(t,e,n,l,a){var u=G.p;G.p=u!==0&&8>u?u:8;var o=D.T,f={};D.T=f,Wc(t,!1,e,n);try{var v=a(),T=D.S;if(T!==null&&T(f,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var N=yy(v,l);_a(t,e,N,be(t))}else _a(t,e,l,be(t))}catch(U){_a(t,e,{then:function(){},status:"rejected",reason:U},be())}finally{G.p=u,o!==null&&f.types!==null&&(o.types=f.types),D.T=o}}function Ey(){}function kc(t,e,n,l){if(t.tag!==5)throw Error(c(476));var a=Ef(t).queue;xf(t,a,e,B,n===null?Ey:function(){return Af(t),n(l)})}function Ef(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:We,lastRenderedState:B},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:We,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Af(t){var e=Ef(t);e.next===null&&(e=t.alternate.memoizedState),_a(t,e.next.queue,{},be())}function Jc(){return Ft(Ka)}function Tf(){return Yt().memoizedState}function zf(){return Yt().memoizedState}function Ay(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=be();t=pn(n);var l=bn(e,t,n);l!==null&&(re(l,e,n),Ta(l,e,n)),e={cache:Ac()},t.payload=e;return}e=e.return}}function Ty(t,e,n){var l=be();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Yu(t)?Of(e,n):(n=dc(t,e,n,l),n!==null&&(re(n,t,l),Df(n,e,l)))}function Cf(t,e,n){var l=be();_a(t,e,n,l)}function _a(t,e,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yu(t))Of(e,a);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var o=e.lastRenderedState,f=u(o,n);if(a.hasEagerState=!0,a.eagerState=f,me(f,o))return pu(t,e,a,0),_t===null&&gu(),!1}catch{}if(n=dc(t,e,a,l),n!==null)return re(n,t,l),Df(n,e,l),!0}return!1}function Wc(t,e,n,l){if(l={lane:2,revertLane:Do(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Yu(t)){if(e)throw Error(c(479))}else e=dc(t,n,l,2),e!==null&&re(e,t,2)}function Yu(t){var e=t.alternate;return t===it||e!==null&&e===it}function Of(t,e){Ul=Mu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Df(t,e,n){if((n&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,Rr(t,n)}}var Na={readContext:Ft,use:Uu,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt};Na.useEffectEvent=wt;var _f={readContext:Ft,use:Uu,useCallback:function(t,e){return ne().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:df,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Hu(4194308,4,yf.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hu(4194308,4,t,e)},useInsertionEffect:function(t,e){Hu(4,2,t,e)},useMemo:function(t,e){var n=ne();e=e===void 0?null:e;var l=t();if(Pn){sn(!0);try{t()}finally{sn(!1)}}return n.memoizedState=[l,e],l},useReducer:function(t,e,n){var l=ne();if(n!==void 0){var a=n(e);if(Pn){sn(!0);try{n(e)}finally{sn(!1)}}}else a=e;return l.memoizedState=l.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},l.queue=t,t=t.dispatch=Ty.bind(null,it,t),[l.memoizedState,t]},useRef:function(t){var e=ne();return t={current:t},e.memoizedState=t},useState:function(t){t=Xc(t);var e=t.queue,n=Cf.bind(null,it,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Zc,useDeferredValue:function(t,e){var n=ne();return Kc(n,t,e)},useTransition:function(){var t=Xc(!1);return t=xf.bind(null,it,t.queue,!0,!1),ne().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var l=it,a=ne();if(yt){if(n===void 0)throw Error(c(407));n=n()}else{if(n=e(),_t===null)throw Error(c(349));(ht&127)!==0||Ws(l,e,n)}a.memoizedState=n;var u={value:n,getSnapshot:e};return a.queue=u,df(Fs.bind(null,l,u,t),[t]),l.flags|=2048,Hl(9,{destroy:void 0},$s.bind(null,l,u,n,e),null),n},useId:function(){var t=ne(),e=_t.identifierPrefix;if(yt){var n=Be,l=He;n=(l&~(1<<32-de(l)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Ru++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=gy++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Jc,useFormState:cf,useActionState:cf,useOptimistic:function(t){var e=ne();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Wc.bind(null,it,!0,n),n.dispatch=e,[t,e]},useMemoCache:qc,useCacheRefresh:function(){return ne().memoizedState=Ay.bind(null,it)},useEffectEvent:function(t){var e=ne(),n={impl:t};return e.memoizedState=n,function(){if((xt&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},$c={readContext:Ft,use:Uu,useCallback:pf,useContext:Ft,useEffect:Vc,useImperativeHandle:gf,useInsertionEffect:hf,useLayoutEffect:vf,useMemo:bf,useReducer:wu,useRef:ff,useState:function(){return wu(We)},useDebugValue:Zc,useDeferredValue:function(t,e){var n=Yt();return Sf(n,Ct.memoizedState,t,e)},useTransition:function(){var t=wu(We)[0],e=Yt().memoizedState;return[typeof t=="boolean"?t:Da(t),e]},useSyncExternalStore:Js,useId:Tf,useHostTransitionStatus:Jc,useFormState:of,useActionState:of,useOptimistic:function(t,e){var n=Yt();return tf(n,Ct,t,e)},useMemoCache:qc,useCacheRefresh:zf};$c.useEffectEvent=mf;var Nf={readContext:Ft,use:Uu,useCallback:pf,useContext:Ft,useEffect:Vc,useImperativeHandle:gf,useInsertionEffect:hf,useLayoutEffect:vf,useMemo:bf,useReducer:Lc,useRef:ff,useState:function(){return Lc(We)},useDebugValue:Zc,useDeferredValue:function(t,e){var n=Yt();return Ct===null?Kc(n,t,e):Sf(n,Ct.memoizedState,t,e)},useTransition:function(){var t=Lc(We)[0],e=Yt().memoizedState;return[typeof t=="boolean"?t:Da(t),e]},useSyncExternalStore:Js,useId:Tf,useHostTransitionStatus:Jc,useFormState:sf,useActionState:sf,useOptimistic:function(t,e){var n=Yt();return Ct!==null?tf(n,Ct,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:qc,useCacheRefresh:zf};Nf.useEffectEvent=mf;function Fc(t,e,n,l){e=t.memoizedState,n=n(l,e),n=n==null?e:O({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ic={enqueueSetState:function(t,e,n){t=t._reactInternals;var l=be(),a=pn(l);a.payload=e,n!=null&&(a.callback=n),e=bn(t,a,l),e!==null&&(re(e,t,l),Ta(e,t,l))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var l=be(),a=pn(l);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=bn(t,a,l),e!==null&&(re(e,t,l),Ta(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=be(),l=pn(n);l.tag=2,e!=null&&(l.callback=e),e=bn(t,l,n),e!==null&&(re(e,t,n),Ta(e,t,n))}};function Mf(t,e,n,l,a,u,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,u,o):e.prototype&&e.prototype.isPureReactComponent?!ya(n,l)||!ya(a,u):!0}function Rf(t,e,n,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,l),e.state!==t&&Ic.enqueueReplaceState(e,e.state,null)}function tl(t,e){var n=e;if("ref"in e){n={};for(var l in e)l!=="ref"&&(n[l]=e[l])}if(t=t.defaultProps){n===e&&(n=O({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function jf(t){yu(t)}function Uf(t){console.error(t)}function wf(t){yu(t)}function qu(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Hf(t,e,n){try{var l=t.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Pc(t,e,n){return n=pn(n),n.tag=3,n.payload={element:null},n.callback=function(){qu(t,e)},n}function Bf(t){return t=pn(t),t.tag=3,t}function Yf(t,e,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var u=l.value;t.payload=function(){return a(u)},t.callback=function(){Hf(e,n,l)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Hf(e,n,l),typeof a!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function zy(t,e,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=n.alternate,e!==null&&Dl(e,n,a,!0),n=ve.current,n!==null){switch(n.tag){case 31:case 13:return De===null?Fu():n.alternate===null&&Ht===0&&(Ht=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Cu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([l]):e.add(l),zo(t,l,a)),!1;case 22:return n.flags|=65536,l===Cu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([l]):n.add(l)),zo(t,l,a)),!1}throw Error(c(435,n.tag))}return zo(t,l,a),Fu(),!1}if(yt)return e=ve.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,l!==pc&&(t=Error(c(422),{cause:l}),ba(Te(t,n)))):(l!==pc&&(e=Error(c(423),{cause:l}),ba(Te(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,l=Te(l,n),a=Pc(t.stateNode,l,a),_c(t,a),Ht!==4&&(Ht=2)),!1;var u=Error(c(520),{cause:l});if(u=Te(u,n),Ya===null?Ya=[u]:Ya.push(u),Ht!==4&&(Ht=2),e===null)return!0;l=Te(l,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Pc(n.stateNode,l,t),_c(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(zn===null||!zn.has(u))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Bf(a),Yf(a,t,n,l),_c(n,a),!1}n=n.return}while(n!==null);return!1}var to=Error(c(461)),Xt=!1;function It(t,e,n,l){e.child=t===null?Ls(e,null,n,l):In(e,t.child,n,l)}function qf(t,e,n,l,a){n=n.render;var u=e.ref;if("ref"in l){var o={};for(var f in l)f!=="ref"&&(o[f]=l[f])}else o=l;return Jn(e),l=wc(t,e,n,o,u,a),f=Hc(),t!==null&&!Xt?(Bc(t,e,a),$e(t,e,a)):(yt&&f&&yc(e),e.flags|=1,It(t,e,l,a),e.child)}function Gf(t,e,n,l,a){if(t===null){var u=n.type;return typeof u=="function"&&!mc(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,Lf(t,e,u,l,a)):(t=Su(n.type,null,l,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!oo(t,a)){var o=u.memoizedProps;if(n=n.compare,n=n!==null?n:ya,n(o,l)&&t.ref===e.ref)return $e(t,e,a)}return e.flags|=1,t=Ve(u,l),t.ref=e.ref,t.return=e,e.child=t}function Lf(t,e,n,l,a){if(t!==null){var u=t.memoizedProps;if(ya(u,l)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=l=u,oo(t,a))(t.flags&131072)!==0&&(Xt=!0);else return e.lanes=t.lanes,$e(t,e,a)}return eo(t,e,n,l,a)}function Xf(t,e,n,l){var a=l.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,t!==null){for(l=e.child=t.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~u}else l=0,e.child=null;return Qf(t,e,u,n,l)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Tu(e,u!==null?u.cachePool:null),u!==null?Vs(e,u):Mc(),Zs(e);else return l=e.lanes=536870912,Qf(t,e,u!==null?u.baseLanes|n:n,n,l)}else u!==null?(Tu(e,u.cachePool),Vs(e,u),xn(),e.memoizedState=null):(t!==null&&Tu(e,null),Mc(),xn());return It(t,e,a,n),e.child}function Ma(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Qf(t,e,n,l,a){var u=zc();return u=u===null?null:{parent:Gt._currentValue,pool:u},e.memoizedState={baseLanes:n,cachePool:u},t!==null&&Tu(e,null),Mc(),Zs(e),t!==null&&Dl(t,e,l,!0),e.childLanes=a,null}function Gu(t,e){return e=Xu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Vf(t,e,n){return In(e,t.child,null,n),t=Gu(e,e.pendingProps),t.flags|=2,ye(e),e.memoizedState=null,t}function Cy(t,e,n){var l=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(yt){if(l.mode==="hidden")return t=Gu(e,l),e.lanes=536870912,Ma(null,t);if(jc(e),(t=Mt)?(t=nm(t,Oe),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:mn!==null?{id:He,overflow:Be}:null,retryLane:536870912,hydrationErrors:null},n=Cs(t),n.return=e,e.child=n,$t=e,Mt=null)):t=null,t===null)throw vn(e);return e.lanes=536870912,null}return Gu(e,l)}var u=t.memoizedState;if(u!==null){var o=u.dehydrated;if(jc(e),a)if(e.flags&256)e.flags&=-257,e=Vf(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(c(558));else if(Xt||Dl(t,e,n,!1),a=(n&t.childLanes)!==0,Xt||a){if(l=_t,l!==null&&(o=jr(l,n),o!==0&&o!==u.retryLane))throw u.retryLane=o,Vn(t,o),re(l,t,o),to;Fu(),e=Vf(t,e,n)}else t=u.treeContext,Mt=_e(o.nextSibling),$t=e,yt=!0,hn=null,Oe=!1,t!==null&&_s(e,t),e=Gu(e,l),e.flags|=4096;return e}return t=Ve(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Lu(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function eo(t,e,n,l,a){return Jn(e),n=wc(t,e,n,l,void 0,a),l=Hc(),t!==null&&!Xt?(Bc(t,e,a),$e(t,e,a)):(yt&&l&&yc(e),e.flags|=1,It(t,e,n,a),e.child)}function Zf(t,e,n,l,a,u){return Jn(e),e.updateQueue=null,n=ks(e,l,n,a),Ks(t),l=Hc(),t!==null&&!Xt?(Bc(t,e,u),$e(t,e,u)):(yt&&l&&yc(e),e.flags|=1,It(t,e,n,u),e.child)}function Kf(t,e,n,l,a){if(Jn(e),e.stateNode===null){var u=Tl,o=n.contextType;typeof o=="object"&&o!==null&&(u=Ft(o)),u=new n(l,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ic,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=l,u.state=e.memoizedState,u.refs={},Oc(e),o=n.contextType,u.context=typeof o=="object"&&o!==null?Ft(o):Tl,u.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Fc(e,n,o,l),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(o=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),o!==u.state&&Ic.enqueueReplaceState(u,u.state,null),Ca(e,l,u,a),za(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){u=e.stateNode;var f=e.memoizedProps,v=tl(n,f);u.props=v;var T=u.context,N=n.contextType;o=Tl,typeof N=="object"&&N!==null&&(o=Ft(N));var U=n.getDerivedStateFromProps;N=typeof U=="function"||typeof u.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f||T!==o)&&Rf(e,u,l,o),gn=!1;var z=e.memoizedState;u.state=z,Ca(e,l,u,a),za(),T=e.memoizedState,f||z!==T||gn?(typeof U=="function"&&(Fc(e,n,U,l),T=e.memoizedState),(v=gn||Mf(e,n,v,l,z,T,o))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=T),u.props=l,u.state=T,u.context=o,l=v):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{u=e.stateNode,Dc(t,e),o=e.memoizedProps,N=tl(n,o),u.props=N,U=e.pendingProps,z=u.context,T=n.contextType,v=Tl,typeof T=="object"&&T!==null&&(v=Ft(T)),f=n.getDerivedStateFromProps,(T=typeof f=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o!==U||z!==v)&&Rf(e,u,l,v),gn=!1,z=e.memoizedState,u.state=z,Ca(e,l,u,a),za();var C=e.memoizedState;o!==U||z!==C||gn||t!==null&&t.dependencies!==null&&Eu(t.dependencies)?(typeof f=="function"&&(Fc(e,n,f,l),C=e.memoizedState),(N=gn||Mf(e,n,N,l,z,C,v)||t!==null&&t.dependencies!==null&&Eu(t.dependencies))?(T||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,C,v),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,C,v)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||o===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=C),u.props=l,u.state=C,u.context=v,l=N):(typeof u.componentDidUpdate!="function"||o===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),l=!1)}return u=l,Lu(t,e),l=(e.flags&128)!==0,u||l?(u=e.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&l?(e.child=In(e,t.child,null,a),e.child=In(e,null,n,a)):It(t,e,n,a),e.memoizedState=u.state,t=e.child):t=$e(t,e,a),t}function kf(t,e,n,l){return Kn(),e.flags|=256,It(t,e,n,l),e.child}var no={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lo(t){return{baseLanes:t,cachePool:ws()}}function ao(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=pe),t}function Jf(t,e,n){var l=e.pendingProps,a=!1,u=(e.flags&128)!==0,o;if((o=u)||(o=t!==null&&t.memoizedState===null?!1:(Bt.current&2)!==0),o&&(a=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(yt){if(a?Sn(e):xn(),(t=Mt)?(t=nm(t,Oe),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:mn!==null?{id:He,overflow:Be}:null,retryLane:536870912,hydrationErrors:null},n=Cs(t),n.return=e,e.child=n,$t=e,Mt=null)):t=null,t===null)throw vn(e);return Lo(t)?e.lanes=32:e.lanes=536870912,null}var f=l.children;return l=l.fallback,a?(xn(),a=e.mode,f=Xu({mode:"hidden",children:f},a),l=Zn(l,a,n,null),f.return=e,l.return=e,f.sibling=l,e.child=f,l=e.child,l.memoizedState=lo(n),l.childLanes=ao(t,o,n),e.memoizedState=no,Ma(null,l)):(Sn(e),uo(e,f))}var v=t.memoizedState;if(v!==null&&(f=v.dehydrated,f!==null)){if(u)e.flags&256?(Sn(e),e.flags&=-257,e=io(t,e,n)):e.memoizedState!==null?(xn(),e.child=t.child,e.flags|=128,e=null):(xn(),f=l.fallback,a=e.mode,l=Xu({mode:"visible",children:l.children},a),f=Zn(f,a,n,null),f.flags|=2,l.return=e,f.return=e,l.sibling=f,e.child=l,In(e,t.child,null,n),l=e.child,l.memoizedState=lo(n),l.childLanes=ao(t,o,n),e.memoizedState=no,e=Ma(null,l));else if(Sn(e),Lo(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var T=o.dgst;o=T,l=Error(c(419)),l.stack="",l.digest=o,ba({value:l,source:null,stack:null}),e=io(t,e,n)}else if(Xt||Dl(t,e,n,!1),o=(n&t.childLanes)!==0,Xt||o){if(o=_t,o!==null&&(l=jr(o,n),l!==0&&l!==v.retryLane))throw v.retryLane=l,Vn(t,l),re(o,t,l),to;Go(f)||Fu(),e=io(t,e,n)}else Go(f)?(e.flags|=192,e.child=t.child,e=null):(t=v.treeContext,Mt=_e(f.nextSibling),$t=e,yt=!0,hn=null,Oe=!1,t!==null&&_s(e,t),e=uo(e,l.children),e.flags|=4096);return e}return a?(xn(),f=l.fallback,a=e.mode,v=t.child,T=v.sibling,l=Ve(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,T!==null?f=Ve(T,f):(f=Zn(f,a,n,null),f.flags|=2),f.return=e,l.return=e,l.sibling=f,e.child=l,Ma(null,l),l=e.child,f=t.child.memoizedState,f===null?f=lo(n):(a=f.cachePool,a!==null?(v=Gt._currentValue,a=a.parent!==v?{parent:v,pool:v}:a):a=ws(),f={baseLanes:f.baseLanes|n,cachePool:a}),l.memoizedState=f,l.childLanes=ao(t,o,n),e.memoizedState=no,Ma(t.child,l)):(Sn(e),n=t.child,t=n.sibling,n=Ve(n,{mode:"visible",children:l.children}),n.return=e,n.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=n,e.memoizedState=null,n)}function uo(t,e){return e=Xu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Xu(t,e){return t=he(22,t,null,e),t.lanes=0,t}function io(t,e,n){return In(e,t.child,null,n),t=uo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Wf(t,e,n){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),xc(t.return,e,n)}function co(t,e,n,l,a,u){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:u}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=n,o.tailMode=a,o.treeForkCount=u)}function $f(t,e,n){var l=e.pendingProps,a=l.revealOrder,u=l.tail;l=l.children;var o=Bt.current,f=(o&2)!==0;if(f?(o=o&1|2,e.flags|=128):o&=1,q(Bt,o),It(t,e,l,n),l=yt?pa:0,!f&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wf(t,n,e);else if(t.tag===19)Wf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&Nu(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),co(e,!1,a,n,u,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Nu(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}co(e,!0,n,null,u,l);break;case"together":co(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function $e(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Dl(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(c(153));if(e.child!==null){for(t=e.child,n=Ve(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ve(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function oo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Eu(t)))}function Oy(t,e,n){switch(e.tag){case 3:Kt(e,e.stateNode.containerInfo),yn(e,Gt,t.memoizedState.cache),Kn();break;case 27:case 5:we(e);break;case 4:Kt(e,e.stateNode.containerInfo);break;case 10:yn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,jc(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(Sn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Jf(t,e,n):(Sn(e),t=$e(t,e,n),t!==null?t.sibling:null);Sn(e);break;case 19:var a=(t.flags&128)!==0;if(l=(n&e.childLanes)!==0,l||(Dl(t,e,n,!1),l=(n&e.childLanes)!==0),a){if(l)return $f(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(Bt,Bt.current),l)break;return null;case 22:return e.lanes=0,Xf(t,e,n,e.pendingProps);case 24:yn(e,Gt,t.memoizedState.cache)}return $e(t,e,n)}function Ff(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Xt=!0;else{if(!oo(t,n)&&(e.flags&128)===0)return Xt=!1,Oy(t,e,n);Xt=(t.flags&131072)!==0}else Xt=!1,yt&&(e.flags&1048576)!==0&&Ds(e,pa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=$n(e.elementType),e.type=t,typeof t=="function")mc(t)?(l=tl(t,l),e.tag=1,e=Kf(null,e,t,l,n)):(e.tag=0,e=eo(null,e,t,l,n));else{if(t!=null){var a=t.$$typeof;if(a===tt){e.tag=11,e=qf(null,e,t,l,n);break t}else if(a===H){e.tag=14,e=Gf(null,e,t,l,n);break t}}throw e=ee(t)||t,Error(c(306,e,""))}}return e;case 0:return eo(t,e,e.type,e.pendingProps,n);case 1:return l=e.type,a=tl(l,e.pendingProps),Kf(t,e,l,a,n);case 3:t:{if(Kt(e,e.stateNode.containerInfo),t===null)throw Error(c(387));l=e.pendingProps;var u=e.memoizedState;a=u.element,Dc(t,e),Ca(e,l,null,n);var o=e.memoizedState;if(l=o.cache,yn(e,Gt,l),l!==u.cache&&Ec(e,[Gt],n,!0),za(),l=o.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=kf(t,e,l,n);break t}else if(l!==a){a=Te(Error(c(424)),e),ba(a),e=kf(t,e,l,n);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Mt=_e(t.firstChild),$t=e,yt=!0,hn=null,Oe=!0,n=Ls(e,null,l,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kn(),l===a){e=$e(t,e,n);break t}It(t,e,l,n)}e=e.child}return e;case 26:return Lu(t,e),t===null?(n=om(e.type,null,e.pendingProps,null))?e.memoizedState=n:yt||(n=e.type,t=e.pendingProps,l=ai(rt.current).createElement(n),l[Wt]=e,l[le]=t,Pt(l,n,t),kt(l),e.stateNode=l):e.memoizedState=om(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return we(e),t===null&&yt&&(l=e.stateNode=um(e.type,e.pendingProps,rt.current),$t=e,Oe=!0,a=Mt,_n(e.type)?(Xo=a,Mt=_e(l.firstChild)):Mt=a),It(t,e,e.pendingProps.children,n),Lu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&yt&&((a=l=Mt)&&(l=lg(l,e.type,e.pendingProps,Oe),l!==null?(e.stateNode=l,$t=e,Mt=_e(l.firstChild),Oe=!1,a=!0):a=!1),a||vn(e)),we(e),a=e.type,u=e.pendingProps,o=t!==null?t.memoizedProps:null,l=u.children,Bo(a,u)?l=null:o!==null&&Bo(a,o)&&(e.flags|=32),e.memoizedState!==null&&(a=wc(t,e,py,null,null,n),Ka._currentValue=a),Lu(t,e),It(t,e,l,n),e.child;case 6:return t===null&&yt&&((t=n=Mt)&&(n=ag(n,e.pendingProps,Oe),n!==null?(e.stateNode=n,$t=e,Mt=null,t=!0):t=!1),t||vn(e)),null;case 13:return Jf(t,e,n);case 4:return Kt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=In(e,null,l,n):It(t,e,l,n),e.child;case 11:return qf(t,e,e.type,e.pendingProps,n);case 7:return It(t,e,e.pendingProps,n),e.child;case 8:return It(t,e,e.pendingProps.children,n),e.child;case 12:return It(t,e,e.pendingProps.children,n),e.child;case 10:return l=e.pendingProps,yn(e,e.type,l.value),It(t,e,l.children,n),e.child;case 9:return a=e.type._context,l=e.pendingProps.children,Jn(e),a=Ft(a),l=l(a),e.flags|=1,It(t,e,l,n),e.child;case 14:return Gf(t,e,e.type,e.pendingProps,n);case 15:return Lf(t,e,e.type,e.pendingProps,n);case 19:return $f(t,e,n);case 31:return Cy(t,e,n);case 22:return Xf(t,e,n,e.pendingProps);case 24:return Jn(e),l=Ft(Gt),t===null?(a=zc(),a===null&&(a=_t,u=Ac(),a.pooledCache=u,u.refCount++,u!==null&&(a.pooledCacheLanes|=n),a=u),e.memoizedState={parent:l,cache:a},Oc(e),yn(e,Gt,a)):((t.lanes&n)!==0&&(Dc(t,e),Ca(e,null,null,n),za()),a=t.memoizedState,u=e.memoizedState,a.parent!==l?(a={parent:l,cache:l},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),yn(e,Gt,l)):(l=u.cache,yn(e,Gt,l),l!==a.cache&&Ec(e,[Gt],n,!0))),It(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(c(156,e.tag))}function Fe(t){t.flags|=4}function ro(t,e,n,l,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(Td())t.flags|=8192;else throw Fn=Cu,Cc}else t.flags&=-16777217}function If(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!mm(e))if(Td())t.flags|=8192;else throw Fn=Cu,Cc}function Qu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Nr():536870912,t.lanes|=e,Gl|=e)}function Ra(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,l=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=l,t.childLanes=n,e}function Dy(t,e,n){var l=e.pendingProps;switch(gc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return Rt(e),null;case 3:return n=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ke(Gt),Nt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Ol(e)?Fe(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,bc())),Rt(e),null;case 26:var a=e.type,u=e.memoizedState;return t===null?(Fe(e),u!==null?(Rt(e),If(e,u)):(Rt(e),ro(e,a,null,l,n))):u?u!==t.memoizedState?(Fe(e),Rt(e),If(e,u)):(Rt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Fe(e),Rt(e),ro(e,a,t,l,n)),null;case 27:if(on(e),n=rt.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Fe(e);else{if(!l){if(e.stateNode===null)throw Error(c(166));return Rt(e),null}t=X.current,Ol(e)?Ns(e):(t=um(a,l,n),e.stateNode=t,Fe(e))}return Rt(e),null;case 5:if(on(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Fe(e);else{if(!l){if(e.stateNode===null)throw Error(c(166));return Rt(e),null}if(u=X.current,Ol(e))Ns(e);else{var o=ai(rt.current);switch(u){case 1:u=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:u=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":u=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":u=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":u=o.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?o.createElement(a,{is:l.is}):o.createElement(a)}}u[Wt]=e,u[le]=l;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)u.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=u;t:switch(Pt(u,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Fe(e)}}return Rt(e),ro(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Fe(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(c(166));if(t=rt.current,Ol(e)){if(t=e.stateNode,n=e.memoizedProps,l=null,a=$t,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}t[Wt]=e,t=!!(t.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Jd(t.nodeValue,n)),t||vn(e,!0)}else t=ai(t).createTextNode(l),t[Wt]=e,e.stateNode=t}return Rt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(l=Ol(e),n!==null){if(t===null){if(!l)throw Error(c(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(557));t[Wt]=e}else Kn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Rt(e),t=!1}else n=bc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(ye(e),e):(ye(e),null);if((e.flags&128)!==0)throw Error(c(558))}return Rt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Ol(e),l!==null&&l.dehydrated!==null){if(t===null){if(!a)throw Error(c(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(c(317));a[Wt]=e}else Kn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Rt(e),a=!1}else a=bc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(ye(e),e):(ye(e),null)}return ye(e),(e.flags&128)!==0?(e.lanes=n,e):(n=l!==null,t=t!==null&&t.memoizedState!==null,n&&(l=e.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==a&&(l.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Qu(e,e.updateQueue),Rt(e),null);case 4:return Nt(),t===null&&Ro(e.stateNode.containerInfo),Rt(e),null;case 10:return ke(e.type),Rt(e),null;case 19:if(j(Bt),l=e.memoizedState,l===null)return Rt(e),null;if(a=(e.flags&128)!==0,u=l.rendering,u===null)if(a)Ra(l,!1);else{if(Ht!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Nu(t),u!==null){for(e.flags|=128,Ra(l,!1),t=u.updateQueue,e.updateQueue=t,Qu(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)zs(n,t),n=n.sibling;return q(Bt,Bt.current&1|2),yt&&Ze(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&se()>Ju&&(e.flags|=128,a=!0,Ra(l,!1),e.lanes=4194304)}else{if(!a)if(t=Nu(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Qu(e,t),Ra(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!yt)return Rt(e),null}else 2*se()-l.renderingStartTime>Ju&&n!==536870912&&(e.flags|=128,a=!0,Ra(l,!1),e.lanes=4194304);l.isBackwards?(u.sibling=e.child,e.child=u):(t=l.last,t!==null?t.sibling=u:e.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=se(),t.sibling=null,n=Bt.current,q(Bt,a?n&1|2:n&1),yt&&Ze(e,l.treeForkCount),t):(Rt(e),null);case 22:case 23:return ye(e),Rc(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(n&536870912)!==0&&(e.flags&128)===0&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),n=e.updateQueue,n!==null&&Qu(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==n&&(e.flags|=2048),t!==null&&j(Wn),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ke(Gt),Rt(e),null;case 25:return null;case 30:return null}throw Error(c(156,e.tag))}function _y(t,e){switch(gc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ke(Gt),Nt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return on(e),null;case 31:if(e.memoizedState!==null){if(ye(e),e.alternate===null)throw Error(c(340));Kn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ye(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(c(340));Kn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return j(Bt),null;case 4:return Nt(),null;case 10:return ke(e.type),null;case 22:case 23:return ye(e),Rc(),t!==null&&j(Wn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ke(Gt),null;case 25:return null;default:return null}}function Pf(t,e){switch(gc(e),e.tag){case 3:ke(Gt),Nt();break;case 26:case 27:case 5:on(e);break;case 4:Nt();break;case 31:e.memoizedState!==null&&ye(e);break;case 13:ye(e);break;case 19:j(Bt);break;case 10:ke(e.type);break;case 22:case 23:ye(e),Rc(),t!==null&&j(Wn);break;case 24:ke(Gt)}}function ja(t,e){try{var n=e.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&t)===t){l=void 0;var u=n.create,o=n.inst;l=u(),o.destroy=l}n=n.next}while(n!==a)}}catch(f){zt(e,e.return,f)}}function En(t,e,n){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){var o=l.inst,f=o.destroy;if(f!==void 0){o.destroy=void 0,a=e;var v=n,T=f;try{T()}catch(N){zt(a,v,N)}}}l=l.next}while(l!==u)}}catch(N){zt(e,e.return,N)}}function td(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Qs(e,n)}catch(l){zt(t,t.return,l)}}}function ed(t,e,n){n.props=tl(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(l){zt(t,e,l)}}function Ua(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof n=="function"?t.refCleanup=n(l):n.current=l}}catch(a){zt(t,e,a)}}function Ye(t,e){var n=t.ref,l=t.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){zt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){zt(t,e,a)}else n.current=null}function nd(t){var e=t.type,n=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break t;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){zt(t,t.return,a)}}function so(t,e,n){try{var l=t.stateNode;Fy(l,t.type,n,e),l[le]=e}catch(a){zt(t,t.return,a)}}function ld(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&_n(t.type)||t.tag===4}function fo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ld(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&_n(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mo(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xe));else if(l!==4&&(l===27&&_n(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(mo(t,e,n),t=t.sibling;t!==null;)mo(t,e,n),t=t.sibling}function Vu(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(l!==4&&(l===27&&_n(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Vu(t,e,n),t=t.sibling;t!==null;)Vu(t,e,n),t=t.sibling}function ad(t){var e=t.stateNode,n=t.memoizedProps;try{for(var l=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Pt(e,l,n),e[Wt]=t,e[le]=n}catch(u){zt(t,t.return,u)}}var Ie=!1,Qt=!1,ho=!1,ud=typeof WeakSet=="function"?WeakSet:Set,Jt=null;function Ny(t,e){if(t=t.containerInfo,wo=fi,t=ys(t),ic(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var o=0,f=-1,v=-1,T=0,N=0,U=t,z=null;e:for(;;){for(var C;U!==n||a!==0&&U.nodeType!==3||(f=o+a),U!==u||l!==0&&U.nodeType!==3||(v=o+l),U.nodeType===3&&(o+=U.nodeValue.length),(C=U.firstChild)!==null;)z=U,U=C;for(;;){if(U===t)break e;if(z===n&&++T===a&&(f=o),z===u&&++N===l&&(v=o),(C=U.nextSibling)!==null)break;U=z,z=U.parentNode}U=C}n=f===-1||v===-1?null:{start:f,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ho={focusedElem:t,selectionRange:n},fi=!1,Jt=e;Jt!==null;)if(e=Jt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Jt=t;else for(;Jt!==null;){switch(e=Jt,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,a=u.memoizedProps,u=u.memoizedState,l=n.stateNode;try{var K=tl(n.type,a);t=l.getSnapshotBeforeUpdate(K,u),l.__reactInternalSnapshotBeforeUpdate=t}catch(nt){zt(n,n.return,nt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)qo(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":qo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(c(163))}if(t=e.sibling,t!==null){t.return=e.return,Jt=t;break}Jt=e.return}}function id(t,e,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:tn(t,n),l&4&&ja(5,n);break;case 1:if(tn(t,n),l&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(o){zt(n,n.return,o)}else{var a=tl(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){zt(n,n.return,o)}}l&64&&td(n),l&512&&Ua(n,n.return);break;case 3:if(tn(t,n),l&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Qs(t,e)}catch(o){zt(n,n.return,o)}}break;case 27:e===null&&l&4&&ad(n);case 26:case 5:tn(t,n),e===null&&l&4&&nd(n),l&512&&Ua(n,n.return);break;case 12:tn(t,n);break;case 31:tn(t,n),l&4&&rd(t,n);break;case 13:tn(t,n),l&4&&sd(t,n),l&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=qy.bind(null,n),ug(t,n))));break;case 22:if(l=n.memoizedState!==null||Ie,!l){e=e!==null&&e.memoizedState!==null||Qt,a=Ie;var u=Qt;Ie=l,(Qt=e)&&!u?en(t,n,(n.subtreeFlags&8772)!==0):tn(t,n),Ie=a,Qt=u}break;case 30:break;default:tn(t,n)}}function cd(t){var e=t.alternate;e!==null&&(t.alternate=null,cd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Qi(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,ue=!1;function Pe(t,e,n){for(n=n.child;n!==null;)od(t,e,n),n=n.sibling}function od(t,e,n){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(aa,n)}catch{}switch(n.tag){case 26:Qt||Ye(n,e),Pe(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Qt||Ye(n,e);var l=jt,a=ue;_n(n.type)&&(jt=n.stateNode,ue=!1),Pe(t,e,n),Qa(n.stateNode),jt=l,ue=a;break;case 5:Qt||Ye(n,e);case 6:if(l=jt,a=ue,jt=null,Pe(t,e,n),jt=l,ue=a,jt!==null)if(ue)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(n.stateNode)}catch(u){zt(n,e,u)}else try{jt.removeChild(n.stateNode)}catch(u){zt(n,e,u)}break;case 18:jt!==null&&(ue?(t=jt,tm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Jl(t)):tm(jt,n.stateNode));break;case 4:l=jt,a=ue,jt=n.stateNode.containerInfo,ue=!0,Pe(t,e,n),jt=l,ue=a;break;case 0:case 11:case 14:case 15:En(2,n,e),Qt||En(4,n,e),Pe(t,e,n);break;case 1:Qt||(Ye(n,e),l=n.stateNode,typeof l.componentWillUnmount=="function"&&ed(n,e,l)),Pe(t,e,n);break;case 21:Pe(t,e,n);break;case 22:Qt=(l=Qt)||n.memoizedState!==null,Pe(t,e,n),Qt=l;break;default:Pe(t,e,n)}}function rd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Jl(t)}catch(n){zt(e,e.return,n)}}}function sd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Jl(t)}catch(n){zt(e,e.return,n)}}function My(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new ud),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new ud),e;default:throw Error(c(435,t.tag))}}function Zu(t,e){var n=My(t);e.forEach(function(l){if(!n.has(l)){n.add(l);var a=Gy.bind(null,t,l);l.then(a,a)}})}function ie(t,e){var n=e.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],u=t,o=e,f=o;t:for(;f!==null;){switch(f.tag){case 27:if(_n(f.type)){jt=f.stateNode,ue=!1;break t}break;case 5:jt=f.stateNode,ue=!1;break t;case 3:case 4:jt=f.stateNode.containerInfo,ue=!0;break t}f=f.return}if(jt===null)throw Error(c(160));od(u,o,a),jt=null,ue=!1,u=a.alternate,u!==null&&(u.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)fd(e,t),e=e.sibling}var Re=null;function fd(t,e){var n=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ie(e,t),ce(t),l&4&&(En(3,t,t.return),ja(3,t),En(5,t,t.return));break;case 1:ie(e,t),ce(t),l&512&&(Qt||n===null||Ye(n,n.return)),l&64&&Ie&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=Re;if(ie(e,t),ce(t),l&512&&(Qt||n===null||Ye(n,n.return)),l&4){var u=n!==null?n.memoizedState:null;if(l=t.memoizedState,n===null)if(l===null)if(t.stateNode===null){t:{l=t.type,n=t.memoizedProps,a=a.ownerDocument||a;e:switch(l){case"title":u=a.getElementsByTagName("title")[0],(!u||u[ca]||u[Wt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=a.createElement(l),a.head.insertBefore(u,a.querySelector("head > title"))),Pt(u,l,n),u[Wt]=t,kt(u),l=u;break t;case"link":var o=fm("link","href",a).get(l+(n.href||""));if(o){for(var f=0;f<o.length;f++)if(u=o[f],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(f,1);break e}}u=a.createElement(l),Pt(u,l,n),a.head.appendChild(u);break;case"meta":if(o=fm("meta","content",a).get(l+(n.content||""))){for(f=0;f<o.length;f++)if(u=o[f],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(f,1);break e}}u=a.createElement(l),Pt(u,l,n),a.head.appendChild(u);break;default:throw Error(c(468,l))}u[Wt]=t,kt(u),l=u}t.stateNode=l}else dm(a,t.type,t.stateNode);else t.stateNode=sm(a,l,t.memoizedProps);else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?dm(a,t.type,t.stateNode):sm(a,l,t.memoizedProps)):l===null&&t.stateNode!==null&&so(t,t.memoizedProps,n.memoizedProps)}break;case 27:ie(e,t),ce(t),l&512&&(Qt||n===null||Ye(n,n.return)),n!==null&&l&4&&so(t,t.memoizedProps,n.memoizedProps);break;case 5:if(ie(e,t),ce(t),l&512&&(Qt||n===null||Ye(n,n.return)),t.flags&32){a=t.stateNode;try{gl(a,"")}catch(K){zt(t,t.return,K)}}l&4&&t.stateNode!=null&&(a=t.memoizedProps,so(t,a,n!==null?n.memoizedProps:a)),l&1024&&(ho=!0);break;case 6:if(ie(e,t),ce(t),l&4){if(t.stateNode===null)throw Error(c(162));l=t.memoizedProps,n=t.stateNode;try{n.nodeValue=l}catch(K){zt(t,t.return,K)}}break;case 3:if(ci=null,a=Re,Re=ui(e.containerInfo),ie(e,t),Re=a,ce(t),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Jl(e.containerInfo)}catch(K){zt(t,t.return,K)}ho&&(ho=!1,dd(t));break;case 4:l=Re,Re=ui(t.stateNode.containerInfo),ie(e,t),ce(t),Re=l;break;case 12:ie(e,t),ce(t);break;case 31:ie(e,t),ce(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Zu(t,l)));break;case 13:ie(e,t),ce(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ku=se()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Zu(t,l)));break;case 22:a=t.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,T=Ie,N=Qt;if(Ie=T||a,Qt=N||v,ie(e,t),Qt=N,Ie=T,ce(t),l&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||v||Ie||Qt||el(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){v=n=e;try{if(u=v.stateNode,a)o=u.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{f=v.stateNode;var U=v.memoizedProps.style,z=U!=null&&U.hasOwnProperty("display")?U.display:null;f.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(K){zt(v,v.return,K)}}}else if(e.tag===6){if(n===null){v=e;try{v.stateNode.nodeValue=a?"":v.memoizedProps}catch(K){zt(v,v.return,K)}}}else if(e.tag===18){if(n===null){v=e;try{var C=v.stateNode;a?em(C,!0):em(v.stateNode,!1)}catch(K){zt(v,v.return,K)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Zu(t,n))));break;case 19:ie(e,t),ce(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Zu(t,l)));break;case 30:break;case 21:break;default:ie(e,t),ce(t)}}function ce(t){var e=t.flags;if(e&2){try{for(var n,l=t.return;l!==null;){if(ld(l)){n=l;break}l=l.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var a=n.stateNode,u=fo(t);Vu(t,u,a);break;case 5:var o=n.stateNode;n.flags&32&&(gl(o,""),n.flags&=-33);var f=fo(t);Vu(t,f,o);break;case 3:case 4:var v=n.stateNode.containerInfo,T=fo(t);mo(t,T,v);break;default:throw Error(c(161))}}catch(N){zt(t,t.return,N)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;dd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function tn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)id(t,e.alternate,e),e=e.sibling}function el(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:En(4,e,e.return),el(e);break;case 1:Ye(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&ed(e,e.return,n),el(e);break;case 27:Qa(e.stateNode);case 26:case 5:Ye(e,e.return),el(e);break;case 22:e.memoizedState===null&&el(e);break;case 30:el(e);break;default:el(e)}t=t.sibling}}function en(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,a=t,u=e,o=u.flags;switch(u.tag){case 0:case 11:case 15:en(a,u,n),ja(4,u);break;case 1:if(en(a,u,n),l=u,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(T){zt(l,l.return,T)}if(l=u,a=l.updateQueue,a!==null){var f=l.stateNode;try{var v=a.shared.hiddenCallbacks;if(v!==null)for(a.shared.hiddenCallbacks=null,a=0;a<v.length;a++)Xs(v[a],f)}catch(T){zt(l,l.return,T)}}n&&o&64&&td(u),Ua(u,u.return);break;case 27:ad(u);case 26:case 5:en(a,u,n),n&&l===null&&o&4&&nd(u),Ua(u,u.return);break;case 12:en(a,u,n);break;case 31:en(a,u,n),n&&o&4&&rd(a,u);break;case 13:en(a,u,n),n&&o&4&&sd(a,u);break;case 22:u.memoizedState===null&&en(a,u,n),Ua(u,u.return);break;case 30:break;default:en(a,u,n)}e=e.sibling}}function vo(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Sa(n))}function yo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Sa(t))}function je(t,e,n,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)md(t,e,n,l),e=e.sibling}function md(t,e,n,l){var a=e.flags;switch(e.tag){case 0:case 11:case 15:je(t,e,n,l),a&2048&&ja(9,e);break;case 1:je(t,e,n,l);break;case 3:je(t,e,n,l),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Sa(t)));break;case 12:if(a&2048){je(t,e,n,l),t=e.stateNode;try{var u=e.memoizedProps,o=u.id,f=u.onPostCommit;typeof f=="function"&&f(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(v){zt(e,e.return,v)}}else je(t,e,n,l);break;case 31:je(t,e,n,l);break;case 13:je(t,e,n,l);break;case 23:break;case 22:u=e.stateNode,o=e.alternate,e.memoizedState!==null?u._visibility&2?je(t,e,n,l):wa(t,e):u._visibility&2?je(t,e,n,l):(u._visibility|=2,Bl(t,e,n,l,(e.subtreeFlags&10256)!==0||!1)),a&2048&&vo(o,e);break;case 24:je(t,e,n,l),a&2048&&yo(e.alternate,e);break;default:je(t,e,n,l)}}function Bl(t,e,n,l,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,o=e,f=n,v=l,T=o.flags;switch(o.tag){case 0:case 11:case 15:Bl(u,o,f,v,a),ja(8,o);break;case 23:break;case 22:var N=o.stateNode;o.memoizedState!==null?N._visibility&2?Bl(u,o,f,v,a):wa(u,o):(N._visibility|=2,Bl(u,o,f,v,a)),a&&T&2048&&vo(o.alternate,o);break;case 24:Bl(u,o,f,v,a),a&&T&2048&&yo(o.alternate,o);break;default:Bl(u,o,f,v,a)}e=e.sibling}}function wa(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,l=e,a=l.flags;switch(l.tag){case 22:wa(n,l),a&2048&&vo(l.alternate,l);break;case 24:wa(n,l),a&2048&&yo(l.alternate,l);break;default:wa(n,l)}e=e.sibling}}var Ha=8192;function Yl(t,e,n){if(t.subtreeFlags&Ha)for(t=t.child;t!==null;)hd(t,e,n),t=t.sibling}function hd(t,e,n){switch(t.tag){case 26:Yl(t,e,n),t.flags&Ha&&t.memoizedState!==null&&gg(n,Re,t.memoizedState,t.memoizedProps);break;case 5:Yl(t,e,n);break;case 3:case 4:var l=Re;Re=ui(t.stateNode.containerInfo),Yl(t,e,n),Re=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Ha,Ha=16777216,Yl(t,e,n),Ha=l):Yl(t,e,n));break;default:Yl(t,e,n)}}function vd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ba(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];Jt=l,gd(l,t)}vd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yd(t),t=t.sibling}function yd(t){switch(t.tag){case 0:case 11:case 15:Ba(t),t.flags&2048&&En(9,t,t.return);break;case 3:Ba(t);break;case 12:Ba(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ku(t)):Ba(t);break;default:Ba(t)}}function Ku(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];Jt=l,gd(l,t)}vd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:En(8,e,e.return),Ku(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Ku(e));break;default:Ku(e)}t=t.sibling}}function gd(t,e){for(;Jt!==null;){var n=Jt;switch(n.tag){case 0:case 11:case 15:En(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Sa(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Jt=l;else t:for(n=t;Jt!==null;){l=Jt;var a=l.sibling,u=l.return;if(cd(l),l===n){Jt=null;break t}if(a!==null){a.return=u,Jt=a;break t}Jt=u}}}var Ry={getCacheForType:function(t){var e=Ft(Gt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Ft(Gt).controller.signal}},jy=typeof WeakMap=="function"?WeakMap:Map,xt=0,_t=null,ft=null,ht=0,Tt=0,ge=null,An=!1,ql=!1,go=!1,nn=0,Ht=0,Tn=0,nl=0,po=0,pe=0,Gl=0,Ya=null,oe=null,bo=!1,ku=0,pd=0,Ju=1/0,Wu=null,zn=null,Vt=0,Cn=null,Ll=null,ln=0,So=0,xo=null,bd=null,qa=0,Eo=null;function be(){return(xt&2)!==0&&ht!==0?ht&-ht:D.T!==null?Do():Ur()}function Sd(){if(pe===0)if((ht&536870912)===0||yt){var t=lu;lu<<=1,(lu&3932160)===0&&(lu=262144),pe=t}else pe=536870912;return t=ve.current,t!==null&&(t.flags|=32),pe}function re(t,e,n){(t===_t&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)&&(Xl(t,0),On(t,ht,pe,!1)),ia(t,n),((xt&2)===0||t!==_t)&&(t===_t&&((xt&2)===0&&(nl|=n),Ht===4&&On(t,ht,pe,!1)),qe(t))}function xd(t,e,n){if((xt&6)!==0)throw Error(c(327));var l=!n&&(e&127)===0&&(e&t.expiredLanes)===0||ua(t,e),a=l?Hy(t,e):To(t,e,!0),u=l;do{if(a===0){ql&&!l&&On(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!Uy(n)){a=To(t,e,!1),u=!1;continue}if(a===2){if(u=e,t.errorRecoveryDisabledLanes&u)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var f=t;a=Ya;var v=f.current.memoizedState.isDehydrated;if(v&&(Xl(f,o).flags|=256),o=To(f,o,!1),o!==2){if(go&&!v){f.errorRecoveryDisabledLanes|=u,nl|=u,a=4;break t}u=oe,oe=a,u!==null&&(oe===null?oe=u:oe.push.apply(oe,u))}a=o}if(u=!1,a!==2)continue}}if(a===1){Xl(t,0),On(t,e,0,!0);break}t:{switch(l=t,u=a,u){case 0:case 1:throw Error(c(345));case 4:if((e&4194048)!==e)break;case 6:On(l,e,pe,!An);break t;case 2:oe=null;break;case 3:case 5:break;default:throw Error(c(329))}if((e&62914560)===e&&(a=ku+300-se(),10<a)){if(On(l,e,pe,!An),uu(l,0,!0)!==0)break t;ln=e,l.timeoutHandle=Id(Ed.bind(null,l,n,oe,Wu,bo,e,pe,nl,Gl,An,u,"Throttled",-0,0),a);break t}Ed(l,n,oe,Wu,bo,e,pe,nl,Gl,An,u,null,-0,0)}}break}while(!0);qe(t)}function Ed(t,e,n,l,a,u,o,f,v,T,N,U,z,C){if(t.timeoutHandle=-1,U=e.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xe},hd(e,u,U);var K=(u&62914560)===u?ku-se():(u&4194048)===u?pd-se():0;if(K=pg(U,K),K!==null){ln=u,t.cancelPendingCommit=K(Nd.bind(null,t,e,u,n,l,a,o,f,v,N,U,null,z,C)),On(t,u,o,!T);return}}Nd(t,e,u,n,l,a,o,f,v)}function Uy(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],u=a.getSnapshot;a=a.value;try{if(!me(u(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function On(t,e,n,l){e&=~po,e&=~nl,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var a=e;0<a;){var u=31-de(a),o=1<<u;l[u]=-1,a&=~o}n!==0&&Mr(t,n,e)}function $u(){return(xt&6)===0?(Ga(0),!1):!0}function Ao(){if(ft!==null){if(Tt===0)var t=ft.return;else t=ft,Ke=kn=null,Yc(t),Rl=null,Ea=0,t=ft;for(;t!==null;)Pf(t.alternate,t),t=t.return;ft=null}}function Xl(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,tg(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),ln=0,Ao(),_t=t,ft=n=Ve(t.current,null),ht=e,Tt=0,ge=null,An=!1,ql=ua(t,e),go=!1,Gl=pe=po=nl=Tn=Ht=0,oe=Ya=null,bo=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var a=31-de(l),u=1<<a;e|=t[a],l&=~u}return nn=e,gu(),n}function Ad(t,e){it=null,D.H=Na,e===Ml||e===zu?(e=Ys(),Tt=3):e===Cc?(e=Ys(),Tt=4):Tt=e===to?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ge=e,ft===null&&(Ht=1,qu(t,Te(e,t.current)))}function Td(){var t=ve.current;return t===null?!0:(ht&4194048)===ht?De===null:(ht&62914560)===ht||(ht&536870912)!==0?t===De:!1}function zd(){var t=D.H;return D.H=Na,t===null?Na:t}function Cd(){var t=D.A;return D.A=Ry,t}function Fu(){Ht=4,An||(ht&4194048)!==ht&&ve.current!==null||(ql=!0),(Tn&134217727)===0&&(nl&134217727)===0||_t===null||On(_t,ht,pe,!1)}function To(t,e,n){var l=xt;xt|=2;var a=zd(),u=Cd();(_t!==t||ht!==e)&&(Wu=null,Xl(t,e)),e=!1;var o=Ht;t:do try{if(Tt!==0&&ft!==null){var f=ft,v=ge;switch(Tt){case 8:Ao(),o=6;break t;case 3:case 2:case 9:case 6:ve.current===null&&(e=!0);var T=Tt;if(Tt=0,ge=null,Ql(t,f,v,T),n&&ql){o=0;break t}break;default:T=Tt,Tt=0,ge=null,Ql(t,f,v,T)}}wy(),o=Ht;break}catch(N){Ad(t,N)}while(!0);return e&&t.shellSuspendCounter++,Ke=kn=null,xt=l,D.H=a,D.A=u,ft===null&&(_t=null,ht=0,gu()),o}function wy(){for(;ft!==null;)Od(ft)}function Hy(t,e){var n=xt;xt|=2;var l=zd(),a=Cd();_t!==t||ht!==e?(Wu=null,Ju=se()+500,Xl(t,e)):ql=ua(t,e);t:do try{if(Tt!==0&&ft!==null){e=ft;var u=ge;e:switch(Tt){case 1:Tt=0,ge=null,Ql(t,e,u,1);break;case 2:case 9:if(Hs(u)){Tt=0,ge=null,Dd(e);break}e=function(){Tt!==2&&Tt!==9||_t!==t||(Tt=7),qe(t)},u.then(e,e);break t;case 3:Tt=7;break t;case 4:Tt=5;break t;case 7:Hs(u)?(Tt=0,ge=null,Dd(e)):(Tt=0,ge=null,Ql(t,e,u,7));break;case 5:var o=null;switch(ft.tag){case 26:o=ft.memoizedState;case 5:case 27:var f=ft;if(o?mm(o):f.stateNode.complete){Tt=0,ge=null;var v=f.sibling;if(v!==null)ft=v;else{var T=f.return;T!==null?(ft=T,Iu(T)):ft=null}break e}}Tt=0,ge=null,Ql(t,e,u,5);break;case 6:Tt=0,ge=null,Ql(t,e,u,6);break;case 8:Ao(),Ht=6;break t;default:throw Error(c(462))}}By();break}catch(N){Ad(t,N)}while(!0);return Ke=kn=null,D.H=l,D.A=a,xt=n,ft!==null?0:(_t=null,ht=0,gu(),Ht)}function By(){for(;ft!==null&&!iv();)Od(ft)}function Od(t){var e=Ff(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?Iu(t):ft=e}function Dd(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Zf(n,e,e.pendingProps,e.type,void 0,ht);break;case 11:e=Zf(n,e,e.pendingProps,e.type.render,e.ref,ht);break;case 5:Yc(e);default:Pf(n,e),e=ft=zs(e,nn),e=Ff(n,e,nn)}t.memoizedProps=t.pendingProps,e===null?Iu(t):ft=e}function Ql(t,e,n,l){Ke=kn=null,Yc(e),Rl=null,Ea=0;var a=e.return;try{if(zy(t,a,e,n,ht)){Ht=1,qu(t,Te(n,t.current)),ft=null;return}}catch(u){if(a!==null)throw ft=a,u;Ht=1,qu(t,Te(n,t.current)),ft=null;return}e.flags&32768?(yt||l===1?t=!0:ql||(ht&536870912)!==0?t=!1:(An=t=!0,(l===2||l===9||l===3||l===6)&&(l=ve.current,l!==null&&l.tag===13&&(l.flags|=16384))),_d(e,t)):Iu(e)}function Iu(t){var e=t;do{if((e.flags&32768)!==0){_d(e,An);return}t=e.return;var n=Dy(e.alternate,e,nn);if(n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);Ht===0&&(Ht=5)}function _d(t,e){do{var n=_y(t.alternate,t);if(n!==null){n.flags&=32767,ft=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ft=t;return}ft=t=n}while(t!==null);Ht=6,ft=null}function Nd(t,e,n,l,a,u,o,f,v){t.cancelPendingCommit=null;do Pu();while(Vt!==0);if((xt&6)!==0)throw Error(c(327));if(e!==null){if(e===t.current)throw Error(c(177));if(u=e.lanes|e.childLanes,u|=fc,yv(t,n,u,o,f,v),t===_t&&(ft=_t=null,ht=0),Ll=e,Cn=t,ln=n,So=u,xo=a,bd=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ly(eu,function(){return wd(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,a=G.p,G.p=2,o=xt,xt|=4;try{Ny(t,e,n)}finally{xt=o,G.p=a,D.T=l}}Vt=1,Md(),Rd(),jd()}}function Md(){if(Vt===1){Vt=0;var t=Cn,e=Ll,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var l=G.p;G.p=2;var a=xt;xt|=4;try{fd(e,t);var u=Ho,o=ys(t.containerInfo),f=u.focusedElem,v=u.selectionRange;if(o!==f&&f&&f.ownerDocument&&vs(f.ownerDocument.documentElement,f)){if(v!==null&&ic(f)){var T=v.start,N=v.end;if(N===void 0&&(N=T),"selectionStart"in f)f.selectionStart=T,f.selectionEnd=Math.min(N,f.value.length);else{var U=f.ownerDocument||document,z=U&&U.defaultView||window;if(z.getSelection){var C=z.getSelection(),K=f.textContent.length,nt=Math.min(v.start,K),Dt=v.end===void 0?nt:Math.min(v.end,K);!C.extend&&nt>Dt&&(o=Dt,Dt=nt,nt=o);var E=hs(f,nt),p=hs(f,Dt);if(E&&p&&(C.rangeCount!==1||C.anchorNode!==E.node||C.anchorOffset!==E.offset||C.focusNode!==p.node||C.focusOffset!==p.offset)){var A=U.createRange();A.setStart(E.node,E.offset),C.removeAllRanges(),nt>Dt?(C.addRange(A),C.extend(p.node,p.offset)):(A.setEnd(p.node,p.offset),C.addRange(A))}}}}for(U=[],C=f;C=C.parentNode;)C.nodeType===1&&U.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<U.length;f++){var R=U[f];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}fi=!!wo,Ho=wo=null}finally{xt=a,G.p=l,D.T=n}}t.current=e,Vt=2}}function Rd(){if(Vt===2){Vt=0;var t=Cn,e=Ll,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var l=G.p;G.p=2;var a=xt;xt|=4;try{id(t,e.alternate,e)}finally{xt=a,G.p=l,D.T=n}}Vt=3}}function jd(){if(Vt===4||Vt===3){Vt=0,cv();var t=Cn,e=Ll,n=ln,l=bd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Vt=5:(Vt=0,Ll=Cn=null,Ud(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(zn=null),Li(n),e=e.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(aa,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=D.T,a=G.p,G.p=2,D.T=null;try{for(var u=t.onRecoverableError,o=0;o<l.length;o++){var f=l[o];u(f.value,{componentStack:f.stack})}}finally{D.T=e,G.p=a}}(ln&3)!==0&&Pu(),qe(t),a=t.pendingLanes,(n&261930)!==0&&(a&42)!==0?t===Eo?qa++:(qa=0,Eo=t):qa=0,Ga(0)}}function Ud(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Sa(e)))}function Pu(){return Md(),Rd(),jd(),wd()}function wd(){if(Vt!==5)return!1;var t=Cn,e=So;So=0;var n=Li(ln),l=D.T,a=G.p;try{G.p=32>n?32:n,D.T=null,n=xo,xo=null;var u=Cn,o=ln;if(Vt=0,Ll=Cn=null,ln=0,(xt&6)!==0)throw Error(c(331));var f=xt;if(xt|=4,yd(u.current),md(u,u.current,o,n),xt=f,Ga(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(aa,u)}catch{}return!0}finally{G.p=a,D.T=l,Ud(t,e)}}function Hd(t,e,n){e=Te(n,e),e=Pc(t.stateNode,e,2),t=bn(t,e,2),t!==null&&(ia(t,2),qe(t))}function zt(t,e,n){if(t.tag===3)Hd(t,t,n);else for(;e!==null;){if(e.tag===3){Hd(e,t,n);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(zn===null||!zn.has(l))){t=Te(n,t),n=Bf(2),l=bn(e,n,2),l!==null&&(Yf(n,l,e,t),ia(l,2),qe(l));break}}e=e.return}}function zo(t,e,n){var l=t.pingCache;if(l===null){l=t.pingCache=new jy;var a=new Set;l.set(e,a)}else a=l.get(e),a===void 0&&(a=new Set,l.set(e,a));a.has(n)||(go=!0,a.add(n),t=Yy.bind(null,t,e,n),e.then(t,t))}function Yy(t,e,n){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,_t===t&&(ht&n)===n&&(Ht===4||Ht===3&&(ht&62914560)===ht&&300>se()-ku?(xt&2)===0&&Xl(t,0):po|=n,Gl===ht&&(Gl=0)),qe(t)}function Bd(t,e){e===0&&(e=Nr()),t=Vn(t,e),t!==null&&(ia(t,e),qe(t))}function qy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bd(t,n)}function Gy(t,e){var n=0;switch(t.tag){case 31:case 13:var l=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(e),Bd(t,n)}function Ly(t,e){return Bi(t,e)}var ti=null,Vl=null,Co=!1,ei=!1,Oo=!1,Dn=0;function qe(t){t!==Vl&&t.next===null&&(Vl===null?ti=Vl=t:Vl=Vl.next=t),ei=!0,Co||(Co=!0,Qy())}function Ga(t,e){if(!Oo&&ei){Oo=!0;do for(var n=!1,l=ti;l!==null;){if(t!==0){var a=l.pendingLanes;if(a===0)var u=0;else{var o=l.suspendedLanes,f=l.pingedLanes;u=(1<<31-de(42|t)+1)-1,u&=a&~(o&~f),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Ld(l,u))}else u=ht,u=uu(l,l===_t?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||ua(l,u)||(n=!0,Ld(l,u));l=l.next}while(n);Oo=!1}}function Xy(){Yd()}function Yd(){ei=Co=!1;var t=0;Dn!==0&&Py()&&(t=Dn);for(var e=se(),n=null,l=ti;l!==null;){var a=l.next,u=qd(l,e);u===0?(l.next=null,n===null?ti=a:n.next=a,a===null&&(Vl=n)):(n=l,(t!==0||(u&3)!==0)&&(ei=!0)),l=a}Vt!==0&&Vt!==5||Ga(t),Dn!==0&&(Dn=0)}function qd(t,e){for(var n=t.suspendedLanes,l=t.pingedLanes,a=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var o=31-de(u),f=1<<o,v=a[o];v===-1?((f&n)===0||(f&l)!==0)&&(a[o]=vv(f,e)):v<=e&&(t.expiredLanes|=f),u&=~f}if(e=_t,n=ht,n=uu(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,n===0||t===e&&(Tt===2||Tt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Yi(l),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||ua(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(l!==null&&Yi(l),Li(n)){case 2:case 8:n=Dr;break;case 32:n=eu;break;case 268435456:n=_r;break;default:n=eu}return l=Gd.bind(null,t),n=Bi(n,l),t.callbackPriority=e,t.callbackNode=n,e}return l!==null&&l!==null&&Yi(l),t.callbackPriority=2,t.callbackNode=null,2}function Gd(t,e){if(Vt!==0&&Vt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Pu()&&t.callbackNode!==n)return null;var l=ht;return l=uu(t,t===_t?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(xd(t,l,e),qd(t,se()),t.callbackNode!=null&&t.callbackNode===n?Gd.bind(null,t):null)}function Ld(t,e){if(Pu())return null;xd(t,e,!0)}function Qy(){eg(function(){(xt&6)!==0?Bi(Or,Xy):Yd()})}function Do(){if(Dn===0){var t=_l;t===0&&(t=nu,nu<<=1,(nu&261888)===0&&(nu=256)),Dn=t}return Dn}function Xd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ru(""+t)}function Qd(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Vy(t,e,n,l,a){if(e==="submit"&&n&&n.stateNode===a){var u=Xd((a[le]||null).action),o=l.submitter;o&&(e=(e=o[le]||null)?Xd(e.formAction):o.getAttribute("formAction"),e!==null&&(u=e,o=null));var f=new mu("action","action",null,l,a);t.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Dn!==0){var v=o?Qd(a,o):new FormData(a);kc(n,{pending:!0,data:v,method:a.method,action:u},null,v)}}else typeof u=="function"&&(f.preventDefault(),v=o?Qd(a,o):new FormData(a),kc(n,{pending:!0,data:v,method:a.method,action:u},u,v))},currentTarget:a}]})}}for(var _o=0;_o<sc.length;_o++){var No=sc[_o],Zy=No.toLowerCase(),Ky=No[0].toUpperCase()+No.slice(1);Me(Zy,"on"+Ky)}Me(bs,"onAnimationEnd"),Me(Ss,"onAnimationIteration"),Me(xs,"onAnimationStart"),Me("dblclick","onDoubleClick"),Me("focusin","onFocus"),Me("focusout","onBlur"),Me(oy,"onTransitionRun"),Me(ry,"onTransitionStart"),Me(sy,"onTransitionCancel"),Me(Es,"onTransitionEnd"),vl("onMouseEnter",["mouseout","mouseover"]),vl("onMouseLeave",["mouseout","mouseover"]),vl("onPointerEnter",["pointerout","pointerover"]),vl("onPointerLeave",["pointerout","pointerover"]),Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ky=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(La));function Vd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var l=t[n],a=l.event;l=l.listeners;t:{var u=void 0;if(e)for(var o=l.length-1;0<=o;o--){var f=l[o],v=f.instance,T=f.currentTarget;if(f=f.listener,v!==u&&a.isPropagationStopped())break t;u=f,a.currentTarget=T;try{u(a)}catch(N){yu(N)}a.currentTarget=null,u=v}else for(o=0;o<l.length;o++){if(f=l[o],v=f.instance,T=f.currentTarget,f=f.listener,v!==u&&a.isPropagationStopped())break t;u=f,a.currentTarget=T;try{u(a)}catch(N){yu(N)}a.currentTarget=null,u=v}}}}function dt(t,e){var n=e[Xi];n===void 0&&(n=e[Xi]=new Set);var l=t+"__bubble";n.has(l)||(Zd(e,t,2,!1),n.add(l))}function Mo(t,e,n){var l=0;e&&(l|=4),Zd(n,t,l,e)}var ni="_reactListening"+Math.random().toString(36).slice(2);function Ro(t){if(!t[ni]){t[ni]=!0,Br.forEach(function(n){n!=="selectionchange"&&(ky.has(n)||Mo(n,!1,t),Mo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ni]||(e[ni]=!0,Mo("selectionchange",!1,e))}}function Zd(t,e,n,l){switch(Sm(e)){case 2:var a=xg;break;case 8:a=Eg;break;default:a=ko}n=a.bind(null,e,n,t),a=void 0,!Fi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),l?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function jo(t,e,n,l,a){var u=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var f=l.stateNode.containerInfo;if(f===a)break;if(o===4)for(o=l.return;o!==null;){var v=o.tag;if((v===3||v===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;f!==null;){if(o=dl(f),o===null)return;if(v=o.tag,v===5||v===6||v===26||v===27){l=u=o;continue t}f=f.parentNode}}l=l.return}Wr(function(){var T=u,N=Wi(n),U=[];t:{var z=As.get(t);if(z!==void 0){var C=mu,K=t;switch(t){case"keypress":if(fu(n)===0)break t;case"keydown":case"keyup":C=Gv;break;case"focusin":K="focus",C=ec;break;case"focusout":K="blur",C=ec;break;case"beforeblur":case"afterblur":C=ec;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Ir;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Qv;break;case bs:case Ss:case xs:C=Mv;break;case Es:C=Zv;break;case"scroll":case"scrollend":C=Cv;break;case"wheel":C=kv;break;case"copy":case"cut":case"paste":C=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=ts;break;case"toggle":case"beforetoggle":C=Wv}var nt=(e&4)!==0,Dt=!nt&&(t==="scroll"||t==="scrollend"),E=nt?z!==null?z+"Capture":null:z;nt=[];for(var p=T,A;p!==null;){var R=p;if(A=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||A===null||E===null||(R=ra(p,E),R!=null&&nt.push(Xa(p,R,A))),Dt)break;p=p.return}0<nt.length&&(z=new C(z,K,null,n,N),U.push({event:z,listeners:nt}))}}if((e&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",z&&n!==Ji&&(K=n.relatedTarget||n.fromElement)&&(dl(K)||K[fl]))break t;if((C||z)&&(z=N.window===N?N:(z=N.ownerDocument)?z.defaultView||z.parentWindow:window,C?(K=n.relatedTarget||n.toElement,C=T,K=K?dl(K):null,K!==null&&(Dt=m(K),nt=K.tag,K!==Dt||nt!==5&&nt!==27&&nt!==6)&&(K=null)):(C=null,K=T),C!==K)){if(nt=Ir,R="onMouseLeave",E="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(nt=ts,R="onPointerLeave",E="onPointerEnter",p="pointer"),Dt=C==null?z:oa(C),A=K==null?z:oa(K),z=new nt(R,p+"leave",C,n,N),z.target=Dt,z.relatedTarget=A,R=null,dl(N)===T&&(nt=new nt(E,p+"enter",K,n,N),nt.target=A,nt.relatedTarget=Dt,R=nt),Dt=R,C&&K)e:{for(nt=Jy,E=C,p=K,A=0,R=E;R;R=nt(R))A++;R=0;for(var I=p;I;I=nt(I))R++;for(;0<A-R;)E=nt(E),A--;for(;0<R-A;)p=nt(p),R--;for(;A--;){if(E===p||p!==null&&E===p.alternate){nt=E;break e}E=nt(E),p=nt(p)}nt=null}else nt=null;C!==null&&Kd(U,z,C,nt,!1),K!==null&&Dt!==null&&Kd(U,Dt,K,nt,!0)}}t:{if(z=T?oa(T):window,C=z.nodeName&&z.nodeName.toLowerCase(),C==="select"||C==="input"&&z.type==="file")var pt=os;else if(is(z))if(rs)pt=uy;else{pt=ly;var W=ny}else C=z.nodeName,!C||C.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?T&&ki(T.elementType)&&(pt=os):pt=ay;if(pt&&(pt=pt(t,T))){cs(U,pt,n,N);break t}W&&W(t,z,T),t==="focusout"&&T&&z.type==="number"&&T.memoizedProps.value!=null&&Ki(z,"number",z.value)}switch(W=T?oa(T):window,t){case"focusin":(is(W)||W.contentEditable==="true")&&(xl=W,cc=T,ga=null);break;case"focusout":ga=cc=xl=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,gs(U,n,N);break;case"selectionchange":if(cy)break;case"keydown":case"keyup":gs(U,n,N)}var ct;if(lc)t:{switch(t){case"compositionstart":var vt="onCompositionStart";break t;case"compositionend":vt="onCompositionEnd";break t;case"compositionupdate":vt="onCompositionUpdate";break t}vt=void 0}else Sl?as(t,n)&&(vt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(vt="onCompositionStart");vt&&(es&&n.locale!=="ko"&&(Sl||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Sl&&(ct=$r()):(dn=N,Ii="value"in dn?dn.value:dn.textContent,Sl=!0)),W=li(T,vt),0<W.length&&(vt=new Pr(vt,t,null,n,N),U.push({event:vt,listeners:W}),ct?vt.data=ct:(ct=us(n),ct!==null&&(vt.data=ct)))),(ct=Fv?Iv(t,n):Pv(t,n))&&(vt=li(T,"onBeforeInput"),0<vt.length&&(W=new Pr("onBeforeInput","beforeinput",null,n,N),U.push({event:W,listeners:vt}),W.data=ct)),Vy(U,t,T,n,N)}Vd(U,e)})}function Xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function li(t,e){for(var n=e+"Capture",l=[];t!==null;){var a=t,u=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||u===null||(a=ra(t,n),a!=null&&l.unshift(Xa(t,a,u)),a=ra(t,e),a!=null&&l.push(Xa(t,a,u))),t.tag===3)return l;t=t.return}return[]}function Jy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Kd(t,e,n,l,a){for(var u=e._reactName,o=[];n!==null&&n!==l;){var f=n,v=f.alternate,T=f.stateNode;if(f=f.tag,v!==null&&v===l)break;f!==5&&f!==26&&f!==27||T===null||(v=T,a?(T=ra(n,u),T!=null&&o.unshift(Xa(n,T,v))):a||(T=ra(n,u),T!=null&&o.push(Xa(n,T,v)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Wy=/\r\n?/g,$y=/\u0000|\uFFFD/g;function kd(t){return(typeof t=="string"?t:""+t).replace(Wy,`
`).replace($y,"")}function Jd(t,e){return e=kd(e),kd(t)===e}function Ot(t,e,n,l,a,u){switch(n){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||gl(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&gl(t,""+l);break;case"className":cu(t,"class",l);break;case"tabIndex":cu(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":cu(t,n,l);break;case"style":kr(t,l,u);break;case"data":if(e!=="object"){cu(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=ru(""+l),t.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Ot(t,e,"name",a.name,a,null),Ot(t,e,"formEncType",a.formEncType,a,null),Ot(t,e,"formMethod",a.formMethod,a,null),Ot(t,e,"formTarget",a.formTarget,a,null)):(Ot(t,e,"encType",a.encType,a,null),Ot(t,e,"method",a.method,a,null),Ot(t,e,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=ru(""+l),t.setAttribute(n,l);break;case"onClick":l!=null&&(t.onclick=Xe);break;case"onScroll":l!=null&&dt("scroll",t);break;case"onScrollEnd":l!=null&&dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(c(60));t.innerHTML=n}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}n=ru(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""+l):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":l===!0?t.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,l):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(n,l):t.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(n):t.setAttribute(n,l);break;case"popover":dt("beforetoggle",t),dt("toggle",t),iu(t,"popover",l);break;case"xlinkActuate":Le(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Le(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Le(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Le(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Le(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Le(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Le(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Le(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Le(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":iu(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Tv.get(n)||n,iu(t,n,l))}}function Uo(t,e,n,l,a,u){switch(n){case"style":kr(t,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(c(60));t.innerHTML=n}}break;case"children":typeof l=="string"?gl(t,l):(typeof l=="number"||typeof l=="bigint")&&gl(t,""+l);break;case"onScroll":l!=null&&dt("scroll",t);break;case"onScrollEnd":l!=null&&dt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Xe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yr.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),u=t[le]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,a),typeof l=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,l,a);break t}n in t?t[n]=l:l===!0?t.setAttribute(n,""):iu(t,n,l)}}}function Pt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",t),dt("load",t);var l=!1,a=!1,u;for(u in n)if(n.hasOwnProperty(u)){var o=n[u];if(o!=null)switch(u){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:Ot(t,e,u,o,n,null)}}a&&Ot(t,e,"srcSet",n.srcSet,n,null),l&&Ot(t,e,"src",n.src,n,null);return;case"input":dt("invalid",t);var f=u=o=a=null,v=null,T=null;for(l in n)if(n.hasOwnProperty(l)){var N=n[l];if(N!=null)switch(l){case"name":a=N;break;case"type":o=N;break;case"checked":v=N;break;case"defaultChecked":T=N;break;case"value":u=N;break;case"defaultValue":f=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,e));break;default:Ot(t,e,l,N,n,null)}}Qr(t,u,f,v,T,o,a,!1);return;case"select":dt("invalid",t),l=o=u=null;for(a in n)if(n.hasOwnProperty(a)&&(f=n[a],f!=null))switch(a){case"value":u=f;break;case"defaultValue":o=f;break;case"multiple":l=f;default:Ot(t,e,a,f,n,null)}e=u,n=o,t.multiple=!!l,e!=null?yl(t,!!l,e,!1):n!=null&&yl(t,!!l,n,!0);return;case"textarea":dt("invalid",t),u=a=l=null;for(o in n)if(n.hasOwnProperty(o)&&(f=n[o],f!=null))switch(o){case"value":l=f;break;case"defaultValue":a=f;break;case"children":u=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(c(91));break;default:Ot(t,e,o,f,n,null)}Zr(t,l,a,u);return;case"option":for(v in n)n.hasOwnProperty(v)&&(l=n[v],l!=null)&&(v==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Ot(t,e,v,l,n,null));return;case"dialog":dt("beforetoggle",t),dt("toggle",t),dt("cancel",t),dt("close",t);break;case"iframe":case"object":dt("load",t);break;case"video":case"audio":for(l=0;l<La.length;l++)dt(La[l],t);break;case"image":dt("error",t),dt("load",t);break;case"details":dt("toggle",t);break;case"embed":case"source":case"link":dt("error",t),dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in n)if(n.hasOwnProperty(T)&&(l=n[T],l!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:Ot(t,e,T,l,n,null)}return;default:if(ki(e)){for(N in n)n.hasOwnProperty(N)&&(l=n[N],l!==void 0&&Uo(t,e,N,l,n,void 0));return}}for(f in n)n.hasOwnProperty(f)&&(l=n[f],l!=null&&Ot(t,e,f,l,n,null))}function Fy(t,e,n,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,u=null,o=null,f=null,v=null,T=null,N=null;for(C in n){var U=n[C];if(n.hasOwnProperty(C)&&U!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":v=U;default:l.hasOwnProperty(C)||Ot(t,e,C,null,l,U)}}for(var z in l){var C=l[z];if(U=n[z],l.hasOwnProperty(z)&&(C!=null||U!=null))switch(z){case"type":u=C;break;case"name":a=C;break;case"checked":T=C;break;case"defaultChecked":N=C;break;case"value":o=C;break;case"defaultValue":f=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,e));break;default:C!==U&&Ot(t,e,z,C,l,U)}}Zi(t,o,f,v,T,N,u,a);return;case"select":C=o=f=z=null;for(u in n)if(v=n[u],n.hasOwnProperty(u)&&v!=null)switch(u){case"value":break;case"multiple":C=v;default:l.hasOwnProperty(u)||Ot(t,e,u,null,l,v)}for(a in l)if(u=l[a],v=n[a],l.hasOwnProperty(a)&&(u!=null||v!=null))switch(a){case"value":z=u;break;case"defaultValue":f=u;break;case"multiple":o=u;default:u!==v&&Ot(t,e,a,u,l,v)}e=f,n=o,l=C,z!=null?yl(t,!!n,z,!1):!!l!=!!n&&(e!=null?yl(t,!!n,e,!0):yl(t,!!n,n?[]:"",!1));return;case"textarea":C=z=null;for(f in n)if(a=n[f],n.hasOwnProperty(f)&&a!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Ot(t,e,f,null,l,a)}for(o in l)if(a=l[o],u=n[o],l.hasOwnProperty(o)&&(a!=null||u!=null))switch(o){case"value":z=a;break;case"defaultValue":C=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(c(91));break;default:a!==u&&Ot(t,e,o,a,l,u)}Vr(t,z,C);return;case"option":for(var K in n)z=n[K],n.hasOwnProperty(K)&&z!=null&&!l.hasOwnProperty(K)&&(K==="selected"?t.selected=!1:Ot(t,e,K,null,l,z));for(v in l)z=l[v],C=n[v],l.hasOwnProperty(v)&&z!==C&&(z!=null||C!=null)&&(v==="selected"?t.selected=z&&typeof z!="function"&&typeof z!="symbol":Ot(t,e,v,z,l,C));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in n)z=n[nt],n.hasOwnProperty(nt)&&z!=null&&!l.hasOwnProperty(nt)&&Ot(t,e,nt,null,l,z);for(T in l)if(z=l[T],C=n[T],l.hasOwnProperty(T)&&z!==C&&(z!=null||C!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,e));break;default:Ot(t,e,T,z,l,C)}return;default:if(ki(e)){for(var Dt in n)z=n[Dt],n.hasOwnProperty(Dt)&&z!==void 0&&!l.hasOwnProperty(Dt)&&Uo(t,e,Dt,void 0,l,z);for(N in l)z=l[N],C=n[N],!l.hasOwnProperty(N)||z===C||z===void 0&&C===void 0||Uo(t,e,N,z,l,C);return}}for(var E in n)z=n[E],n.hasOwnProperty(E)&&z!=null&&!l.hasOwnProperty(E)&&Ot(t,e,E,null,l,z);for(U in l)z=l[U],C=n[U],!l.hasOwnProperty(U)||z===C||z==null&&C==null||Ot(t,e,U,z,l,C)}function Wd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Iy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],u=a.transferSize,o=a.initiatorType,f=a.duration;if(u&&f&&Wd(o)){for(o=0,f=a.responseEnd,l+=1;l<n.length;l++){var v=n[l],T=v.startTime;if(T>f)break;var N=v.transferSize,U=v.initiatorType;N&&Wd(U)&&(v=v.responseEnd,o+=N*(v<f?1:(f-T)/(v-T)))}if(--l,e+=8*(u+o)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var wo=null,Ho=null;function ai(t){return t.nodeType===9?t:t.ownerDocument}function $d(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Bo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yo=null;function Py(){var t=window.event;return t&&t.type==="popstate"?t===Yo?!1:(Yo=t,!0):(Yo=null,!1)}var Id=typeof setTimeout=="function"?setTimeout:void 0,tg=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,eg=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(t){return Pd.resolve(null).then(t).catch(ng)}:Id;function ng(t){setTimeout(function(){throw t})}function _n(t){return t==="head"}function tm(t,e){var n=e,l=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){t.removeChild(a),Jl(e);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Qa(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Qa(n);for(var u=n.firstChild;u;){var o=u.nextSibling,f=u.nodeName;u[ca]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=o}}else n==="body"&&Qa(t.ownerDocument.body);n=a}while(n);Jl(e)}function em(t,e){var n=t;t=0;do{var l=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=l}while(n)}function qo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qo(n),Qi(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function lg(t,e,n,l){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ca])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=_e(t.nextSibling),t===null)break}return null}function ag(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_e(t.nextSibling),t===null))return null;return t}function nm(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=_e(t.nextSibling),t===null))return null;return t}function Go(t){return t.data==="$?"||t.data==="$~"}function Lo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ug(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var l=function(){e(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function _e(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Xo=null;function lm(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return _e(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function um(t,e,n){switch(e=ai(n),t){case"html":if(t=e.documentElement,!t)throw Error(c(452));return t;case"head":if(t=e.head,!t)throw Error(c(453));return t;case"body":if(t=e.body,!t)throw Error(c(454));return t;default:throw Error(c(451))}}function Qa(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Qi(t)}var Ne=new Map,im=new Set;function ui(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var an=G.d;G.d={f:ig,r:cg,D:og,C:rg,L:sg,m:fg,X:mg,S:dg,M:hg};function ig(){var t=an.f(),e=$u();return t||e}function cg(t){var e=ml(t);e!==null&&e.tag===5&&e.type==="form"?Af(e):an.r(t)}var Zl=typeof document>"u"?null:document;function cm(t,e,n){var l=Zl;if(l&&typeof e=="string"&&e){var a=Ee(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),im.has(a)||(im.add(a),t={rel:t,crossOrigin:n,href:e},l.querySelector(a)===null&&(e=l.createElement("link"),Pt(e,"link",t),kt(e),l.head.appendChild(e)))}}function og(t){an.D(t),cm("dns-prefetch",t,null)}function rg(t,e){an.C(t,e),cm("preconnect",t,e)}function sg(t,e,n){an.L(t,e,n);var l=Zl;if(l&&t&&e){var a='link[rel="preload"][as="'+Ee(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ee(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ee(n.imageSizes)+'"]')):a+='[href="'+Ee(t)+'"]';var u=a;switch(e){case"style":u=Kl(t);break;case"script":u=kl(t)}Ne.has(u)||(t=O({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ne.set(u,t),l.querySelector(a)!==null||e==="style"&&l.querySelector(Va(u))||e==="script"&&l.querySelector(Za(u))||(e=l.createElement("link"),Pt(e,"link",t),kt(e),l.head.appendChild(e)))}}function fg(t,e){an.m(t,e);var n=Zl;if(n&&t){var l=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Ee(l)+'"][href="'+Ee(t)+'"]',u=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=kl(t)}if(!Ne.has(u)&&(t=O({rel:"modulepreload",href:t},e),Ne.set(u,t),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Za(u)))return}l=n.createElement("link"),Pt(l,"link",t),kt(l),n.head.appendChild(l)}}}function dg(t,e,n){an.S(t,e,n);var l=Zl;if(l&&t){var a=hl(l).hoistableStyles,u=Kl(t);e=e||"default";var o=a.get(u);if(!o){var f={loading:0,preload:null};if(o=l.querySelector(Va(u)))f.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ne.get(u))&&Qo(t,n);var v=o=l.createElement("link");kt(v),Pt(v,"link",t),v._p=new Promise(function(T,N){v.onload=T,v.onerror=N}),v.addEventListener("load",function(){f.loading|=1}),v.addEventListener("error",function(){f.loading|=2}),f.loading|=4,ii(o,e,l)}o={type:"stylesheet",instance:o,count:1,state:f},a.set(u,o)}}}function mg(t,e){an.X(t,e);var n=Zl;if(n&&t){var l=hl(n).hoistableScripts,a=kl(t),u=l.get(a);u||(u=n.querySelector(Za(a)),u||(t=O({src:t,async:!0},e),(e=Ne.get(a))&&Vo(t,e),u=n.createElement("script"),kt(u),Pt(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function hg(t,e){an.M(t,e);var n=Zl;if(n&&t){var l=hl(n).hoistableScripts,a=kl(t),u=l.get(a);u||(u=n.querySelector(Za(a)),u||(t=O({src:t,async:!0,type:"module"},e),(e=Ne.get(a))&&Vo(t,e),u=n.createElement("script"),kt(u),Pt(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(a,u))}}function om(t,e,n,l){var a=(a=rt.current)?ui(a):null;if(!a)throw Error(c(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Kl(n.href),n=hl(a).hoistableStyles,l=n.get(e),l||(l={type:"style",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Kl(n.href);var u=hl(a).hoistableStyles,o=u.get(t);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,o),(u=a.querySelector(Va(t)))&&!u._p&&(o.instance=u,o.state.loading=5),Ne.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ne.set(t,n),u||vg(a,t,n,o.state))),e&&l===null)throw Error(c(528,""));return o}if(e&&l!==null)throw Error(c(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=kl(n),n=hl(a).hoistableScripts,l=n.get(e),l||(l={type:"script",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,t))}}function Kl(t){return'href="'+Ee(t)+'"'}function Va(t){return'link[rel="stylesheet"]['+t+"]"}function rm(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function vg(t,e,n,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Pt(e,"link",n),kt(e),t.head.appendChild(e))}function kl(t){return'[src="'+Ee(t)+'"]'}function Za(t){return"script[async]"+t}function sm(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Ee(n.href)+'"]');if(l)return e.instance=l,kt(l),l;var a=O({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),kt(l),Pt(l,"style",a),ii(l,n.precedence,t),e.instance=l;case"stylesheet":a=Kl(n.href);var u=t.querySelector(Va(a));if(u)return e.state.loading|=4,e.instance=u,kt(u),u;l=rm(n),(a=Ne.get(a))&&Qo(l,a),u=(t.ownerDocument||t).createElement("link"),kt(u);var o=u;return o._p=new Promise(function(f,v){o.onload=f,o.onerror=v}),Pt(u,"link",l),e.state.loading|=4,ii(u,n.precedence,t),e.instance=u;case"script":return u=kl(n.src),(a=t.querySelector(Za(u)))?(e.instance=a,kt(a),a):(l=n,(a=Ne.get(u))&&(l=O({},n),Vo(l,a)),t=t.ownerDocument||t,a=t.createElement("script"),kt(a),Pt(a,"link",l),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(c(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,ii(l,n.precedence,t));return e.instance}function ii(t,e,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,u=a,o=0;o<l.length;o++){var f=l[o];if(f.dataset.precedence===e)u=f;else if(u!==a)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Qo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Vo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ci=null;function fm(t,e,n){if(ci===null){var l=new Map,a=ci=new Map;a.set(n,l)}else a=ci,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(t))return l;for(l.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var u=n[a];if(!(u[ca]||u[Wt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var o=u.getAttribute(e)||"";o=t+o;var f=l.get(o);f?f.push(u):l.set(o,[u])}}return l}function dm(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function yg(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function mm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function gg(t,e,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Kl(l.href),u=e.querySelector(Va(a));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=oi.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=u,kt(u);return}u=e.ownerDocument||e,l=rm(l),(a=Ne.get(a))&&Qo(l,a),u=u.createElement("link"),kt(u);var o=u;o._p=new Promise(function(f,v){o.onload=f,o.onerror=v}),Pt(u,"link",l),n.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=oi.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Zo=0;function pg(t,e){return t.stylesheets&&t.count===0&&si(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var l=setTimeout(function(){if(t.stylesheets&&si(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Zo===0&&(Zo=62500*Iy());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&si(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Zo?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function oi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)si(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ri=null;function si(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ri=new Map,e.forEach(bg,t),ri=null,oi.call(t))}function bg(t,e){if(!(e.state.loading&4)){var n=ri.get(t);if(n)var l=n.get(null);else{n=new Map,ri.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<a.length;u++){var o=a[u];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),l=o)}l&&n.set(null,l)}a=e.instance,o=a.getAttribute("data-precedence"),u=n.get(o)||l,u===l&&n.set(null,a),n.set(o,a),this.count++,l=oi.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),u?u.parentNode.insertBefore(a,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Ka={$$typeof:F,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function Sg(t,e,n,l,a,u,o,f,v){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.hiddenUpdates=qi(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=u,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function hm(t,e,n,l,a,u,o,f,v,T,N,U){return t=new Sg(t,e,n,o,v,T,N,U,f),e=1,u===!0&&(e|=24),u=he(3,null,null,e),t.current=u,u.stateNode=t,e=Ac(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:e},Oc(u),t}function vm(t){return t?(t=Tl,t):Tl}function ym(t,e,n,l,a,u){a=vm(a),l.context===null?l.context=a:l.pendingContext=a,l=pn(e),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=bn(t,l,e),n!==null&&(re(n,t,e),Ta(n,t,e))}function gm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ko(t,e){gm(t,e),(t=t.alternate)&&gm(t,e)}function pm(t){if(t.tag===13||t.tag===31){var e=Vn(t,67108864);e!==null&&re(e,t,67108864),Ko(t,67108864)}}function bm(t){if(t.tag===13||t.tag===31){var e=be();e=Gi(e);var n=Vn(t,e);n!==null&&re(n,t,e),Ko(t,e)}}var fi=!0;function xg(t,e,n,l){var a=D.T;D.T=null;var u=G.p;try{G.p=2,ko(t,e,n,l)}finally{G.p=u,D.T=a}}function Eg(t,e,n,l){var a=D.T;D.T=null;var u=G.p;try{G.p=8,ko(t,e,n,l)}finally{G.p=u,D.T=a}}function ko(t,e,n,l){if(fi){var a=Jo(l);if(a===null)jo(t,e,l,di,n),xm(t,l);else if(Tg(a,t,e,n,l))l.stopPropagation();else if(xm(t,l),e&4&&-1<Ag.indexOf(t)){for(;a!==null;){var u=ml(a);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var o=qn(u.pendingLanes);if(o!==0){var f=u;for(f.pendingLanes|=2,f.entangledLanes|=2;o;){var v=1<<31-de(o);f.entanglements[1]|=v,o&=~v}qe(u),(xt&6)===0&&(Ju=se()+500,Ga(0))}}break;case 31:case 13:f=Vn(u,2),f!==null&&re(f,u,2),$u(),Ko(u,2)}if(u=Jo(l),u===null&&jo(t,e,l,di,n),u===a)break;a=u}a!==null&&l.stopPropagation()}else jo(t,e,l,null,n)}}function Jo(t){return t=Wi(t),Wo(t)}var di=null;function Wo(t){if(di=null,t=dl(t),t!==null){var e=m(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=S(e),t!==null)return t;t=null}else if(n===31){if(t=y(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return di=t,null}function Sm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ov()){case Or:return 2;case Dr:return 8;case eu:case rv:return 32;case _r:return 268435456;default:return 32}default:return 32}}var $o=!1,Nn=null,Mn=null,Rn=null,ka=new Map,Ja=new Map,jn=[],Ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xm(t,e){switch(t){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ja.delete(e.pointerId)}}function Wa(t,e,n,l,a,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[a]},e!==null&&(e=ml(e),e!==null&&pm(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function Tg(t,e,n,l,a){switch(e){case"focusin":return Nn=Wa(Nn,t,e,n,l,a),!0;case"dragenter":return Mn=Wa(Mn,t,e,n,l,a),!0;case"mouseover":return Rn=Wa(Rn,t,e,n,l,a),!0;case"pointerover":var u=a.pointerId;return ka.set(u,Wa(ka.get(u)||null,t,e,n,l,a)),!0;case"gotpointercapture":return u=a.pointerId,Ja.set(u,Wa(Ja.get(u)||null,t,e,n,l,a)),!0}return!1}function Em(t){var e=dl(t.target);if(e!==null){var n=m(e);if(n!==null){if(e=n.tag,e===13){if(e=S(n),e!==null){t.blockedOn=e,wr(t.priority,function(){bm(n)});return}}else if(e===31){if(e=y(n),e!==null){t.blockedOn=e,wr(t.priority,function(){bm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jo(t.nativeEvent);if(n===null){n=t.nativeEvent;var l=new n.constructor(n.type,n);Ji=l,n.target.dispatchEvent(l),Ji=null}else return e=ml(n),e!==null&&pm(e),t.blockedOn=n,!1;e.shift()}return!0}function Am(t,e,n){mi(t)&&n.delete(e)}function zg(){$o=!1,Nn!==null&&mi(Nn)&&(Nn=null),Mn!==null&&mi(Mn)&&(Mn=null),Rn!==null&&mi(Rn)&&(Rn=null),ka.forEach(Am),Ja.forEach(Am)}function hi(t,e){t.blockedOn===e&&(t.blockedOn=null,$o||($o=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,zg)))}var vi=null;function Tm(t){vi!==t&&(vi=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){vi===t&&(vi=null);for(var e=0;e<t.length;e+=3){var n=t[e],l=t[e+1],a=t[e+2];if(typeof l!="function"){if(Wo(l||n)===null)continue;break}var u=ml(n);u!==null&&(t.splice(e,3),e-=3,kc(u,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Jl(t){function e(v){return hi(v,t)}Nn!==null&&hi(Nn,t),Mn!==null&&hi(Mn,t),Rn!==null&&hi(Rn,t),ka.forEach(e),Ja.forEach(e);for(var n=0;n<jn.length;n++){var l=jn[n];l.blockedOn===t&&(l.blockedOn=null)}for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)Em(n),n.blockedOn===null&&jn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],u=n[l+1],o=a[le]||null;if(typeof u=="function")o||Tm(n);else if(o){var f=null;if(u&&u.hasAttribute("formAction")){if(a=u,o=u[le]||null)f=o.formAction;else if(Wo(a)!==null)continue}else f=o.action;typeof f=="function"?n[l+1]=f:(n.splice(l,3),l-=3),Tm(n)}}}function zm(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(o){return a=o})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Fo(t){this._internalRoot=t}yi.prototype.render=Fo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(c(409));var n=e.current,l=be();ym(n,l,t,e,null,null)},yi.prototype.unmount=Fo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ym(t.current,2,null,t,null,null),$u(),e[fl]=null}};function yi(t){this._internalRoot=t}yi.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ur();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&Em(t)}};var Cm=r.version;if(Cm!=="19.2.3")throw Error(c(527,Cm,"19.2.3"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=h(e),t=t!==null?M(t):null,t=t===null?null:t.stateNode,t};var Cg={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gi.isDisabled&&gi.supportsFiber)try{aa=gi.inject(Cg),fe=gi}catch{}}return Fa.createRoot=function(t,e){if(!d(t))throw Error(c(299));var n=!1,l="",a=jf,u=Uf,o=wf;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=hm(t,1,!1,null,null,n,l,null,a,u,o,zm),t[fl]=e.current,Ro(t),new Fo(e)},Fa.hydrateRoot=function(t,e,n){if(!d(t))throw Error(c(299));var l=!1,a="",u=jf,o=Uf,f=wf,v=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(f=n.onRecoverableError),n.formState!==void 0&&(v=n.formState)),e=hm(t,1,!0,e,n??null,l,a,v,u,o,f,zm),e.context=vm(null),n=e.current,l=be(),l=Gi(l),a=pn(l),a.callback=null,bn(n,a,l),n=l,e.current.lanes=n,ia(e,n),qe(e),t[fl]=e.current,Ro(t),new yi(e)},Fa.version="19.2.3",Fa}var Hm;function Bg(){if(Hm)return tr.exports;Hm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),tr.exports=Hg(),tr.exports}var Yg=Bg();const qg=[`对一个东西最好的批评
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
试试另一顶。`],il="advice_history_v2",oh="advice_rotation_v2",ul=3,Gg=500,ll=(i=new Date)=>i.toISOString().split("T")[0],Pl=(i,r)=>{try{const s=localStorage.getItem(i);return s?JSON.parse(s):r}catch{return r}},vr=(i,r)=>{try{localStorage.setItem(i,JSON.stringify(r))}catch(s){console.error("Failed to save to localStorage:",s)}},Lg=i=>{const r=[...i];for(let s=r.length-1;s>0;s--){const c=Math.floor(Math.random()*(s+1));[r[s],r[c]]=[r[c],r[s]]}return r},rh=()=>{const i=Array.from({length:Gg},(r,s)=>s);return{remainingIndices:Lg(i),lastShuffleTime:Date.now()}},Bm=(i,r)=>{const s=Pl(il,{});if(s[i])return{record:s[i],newRotation:r};let c={...r};c.remainingIndices.length<ul&&(c=rh());const d=c.remainingIndices.slice(0,ul),m=c.remainingIndices.slice(ul),S={date:i,advices:d.map(g=>({index:g,read:!1})),currentIndex:0,createdAt:Date.now()};s[i]=S,vr(il,s);const y={remainingIndices:m,lastShuffleTime:c.lastShuffleTime};return vr(oh,y),{record:S,newRotation:y}},ar=(i,r)=>{const s=Pl(il,{});s[i]&&(s[i]={...s[i],...r},vr(il,s))},Xg=()=>{const[i,r]=x.useState(new Date),[s,c]=x.useState(null),[d,m]=x.useState(null),[S,y]=x.useState(!0),[g,h]=x.useState(0);x.useEffect(()=>{const L=Pl(oh,null)||rh();m(L);const mt=ll(),{record:gt}=Bm(mt,L);c(gt),h(gt.currentIndex),y(!1)},[]);const M=x.useCallback(H=>{if(!d)return;const L=ll(H),{record:mt,newRotation:gt}=Bm(L,d);r(H),c(mt),h(mt.currentIndex),m(gt)},[d]),O=x.useCallback(()=>{if(g>0){const H=g-1;h(H);const L=ll(i);ar(L,{currentIndex:H}),s&&c({...s,currentIndex:H})}},[g,i,s]),Y=x.useCallback(()=>{if(g<ul-1){const H=g+1;h(H);const L=ll(i);ar(L,{currentIndex:H}),s&&c({...s,currentIndex:H})}},[g,i,s]),V=x.useCallback(H=>{if(H>=0&&H<ul){h(H);const L=ll(i);ar(L,{currentIndex:H}),s&&c({...s,currentIndex:H})}},[i,s]),P=x.useCallback(()=>{if(!s||S)return"";const H=s.advices[g];return qg[H?.index]||""},[s,g,S]),w=x.useCallback(()=>!s||S?0:s.advices[g]?.index+1||0,[s,g,S]),Q=x.useCallback(()=>s?s.advices.map(H=>H.index+1):[],[s]),$=x.useCallback(()=>ll(i)===ll(new Date),[i]),Z=x.useCallback(()=>{const H=Pl(il,{});return Object.keys(H).sort()},[]),F=x.useCallback((H,L)=>{const mt=Pl(il,{}),gt=`${H}-${String(L+1).padStart(2,"0")}`;return Object.keys(mt).filter(Et=>Et.startsWith(gt)).sort()},[]),tt=x.useCallback(H=>!!Pl(il,{})[H],[]),et=g>0,ot=g<ul-1;return{currentAdvice:P(),currentNumber:w(),currentIndex:g,totalPerDay:ul,todayAdviceNumbers:Q(),currentDate:i,isToday:$(),canGoPrevious:et,canGoNext:ot,goToPrevious:O,goToNext:Y,goToAdvice:V,switchToDate:M,getRecordedDates:Z,getDatesInMonth:F,hasRecord:tt,isLoading:S}};const Qg=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vg=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,c)=>c?c.toUpperCase():s.toLowerCase()),Ym=i=>{const r=Vg(i);return r.charAt(0).toUpperCase()+r.slice(1)},sh=(...i)=>i.filter((r,s,c)=>!!r&&r.trim()!==""&&c.indexOf(r)===s).join(" ").trim(),Zg=i=>{for(const r in i)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var Kg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const kg=x.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:d="",children:m,iconNode:S,...y},g)=>x.createElement("svg",{ref:g,...Kg,width:r,height:r,stroke:i,strokeWidth:c?Number(s)*24/Number(r):s,className:sh("lucide",d),...!m&&!Zg(y)&&{"aria-hidden":"true"},...y},[...S.map(([h,M])=>x.createElement(h,M)),...Array.isArray(m)?m:[m]]));const ol=(i,r)=>{const s=x.forwardRef(({className:c,...d},m)=>x.createElement(kg,{ref:m,iconNode:r,className:sh(`lucide-${Qg(Ym(i))}`,`lucide-${i}`,c),...d}));return s.displayName=Ym(i),s};const Jg=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],Wg=ol("calendar-days",Jg);const $g=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Fg=ol("calendar",$g);const Ig=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],fh=ol("chevron-left",Ig);const Pg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],dh=ol("chevron-right",Pg);const t0=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],e0=ol("refresh-cw",t0);const n0=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],qm=ol("sparkles",n0);const l0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],a0=ol("x",l0);function Gm(i,r){if(typeof i=="function")return i(r);i!=null&&(i.current=r)}function Ni(...i){return r=>{let s=!1;const c=i.map(d=>{const m=Gm(d,r);return!s&&typeof m=="function"&&(s=!0),m});if(s)return()=>{for(let d=0;d<c.length;d++){const m=c[d];typeof m=="function"?m():Gm(i[d],null)}}}}function rl(...i){return x.useCallback(Ni(...i),i)}var u0=Symbol.for("react.lazy"),Oi=Sr[" use ".trim().toString()];function i0(i){return typeof i=="object"&&i!==null&&"then"in i}function mh(i){return i!=null&&typeof i=="object"&&"$$typeof"in i&&i.$$typeof===u0&&"_payload"in i&&i0(i._payload)}function c0(i){const r=r0(i),s=x.forwardRef((c,d)=>{let{children:m,...S}=c;mh(m)&&typeof Oi=="function"&&(m=Oi(m._payload));const y=x.Children.toArray(m),g=y.find(f0);if(g){const h=g.props.children,M=y.map(O=>O===g?x.Children.count(h)>1?x.Children.only(null):x.isValidElement(h)?h.props.children:null:O);return _.jsx(r,{...S,ref:d,children:x.isValidElement(h)?x.cloneElement(h,void 0,M):null})}return _.jsx(r,{...S,ref:d,children:m})});return s.displayName=`${i}.Slot`,s}var o0=c0("Slot");function r0(i){const r=x.forwardRef((s,c)=>{let{children:d,...m}=s;if(mh(d)&&typeof Oi=="function"&&(d=Oi(d._payload)),x.isValidElement(d)){const S=m0(d),y=d0(m,d.props);return d.type!==x.Fragment&&(y.ref=c?Ni(c,S):S),x.cloneElement(d,y)}return x.Children.count(d)>1?x.Children.only(null):null});return r.displayName=`${i}.SlotClone`,r}var s0=Symbol("radix.slottable");function f0(i){return x.isValidElement(i)&&typeof i.type=="function"&&"__radixId"in i.type&&i.type.__radixId===s0}function d0(i,r){const s={...r};for(const c in r){const d=i[c],m=r[c];/^on[A-Z]/.test(c)?d&&m?s[c]=(...y)=>{const g=m(...y);return d(...y),g}:d&&(s[c]=d):c==="style"?s[c]={...d,...m}:c==="className"&&(s[c]=[d,m].filter(Boolean).join(" "))}return{...i,...s}}function m0(i){let r=Object.getOwnPropertyDescriptor(i.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?i.ref:(r=Object.getOwnPropertyDescriptor(i,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?i.props.ref:i.props.ref||i.ref)}function hh(i){var r,s,c="";if(typeof i=="string"||typeof i=="number")c+=i;else if(typeof i=="object")if(Array.isArray(i)){var d=i.length;for(r=0;r<d;r++)i[r]&&(s=hh(i[r]))&&(c&&(c+=" "),c+=s)}else for(s in i)i[s]&&(c&&(c+=" "),c+=s);return c}function vh(){for(var i,r,s=0,c="",d=arguments.length;s<d;s++)(i=arguments[s])&&(r=hh(i))&&(c&&(c+=" "),c+=r);return c}const Lm=i=>typeof i=="boolean"?`${i}`:i===0?"0":i,Xm=vh,h0=(i,r)=>s=>{var c;if(r?.variants==null)return Xm(i,s?.class,s?.className);const{variants:d,defaultVariants:m}=r,S=Object.keys(d).map(h=>{const M=s?.[h],O=m?.[h];if(M===null)return null;const Y=Lm(M)||Lm(O);return d[h][Y]}),y=s&&Object.entries(s).reduce((h,M)=>{let[O,Y]=M;return Y===void 0||(h[O]=Y),h},{}),g=r==null||(c=r.compoundVariants)===null||c===void 0?void 0:c.reduce((h,M)=>{let{class:O,className:Y,...V}=M;return Object.entries(V).every(P=>{let[w,Q]=P;return Array.isArray(Q)?Q.includes({...m,...y}[w]):{...m,...y}[w]===Q})?[...h,O,Y]:h},[]);return Xm(i,S,g,s?.class,s?.className)},v0=(i,r)=>{const s=new Array(i.length+r.length);for(let c=0;c<i.length;c++)s[c]=i[c];for(let c=0;c<r.length;c++)s[i.length+c]=r[c];return s},y0=(i,r)=>({classGroupId:i,validator:r}),yh=(i=new Map,r=null,s)=>({nextPart:i,validators:r,classGroupId:s}),Di="-",Qm=[],g0="arbitrary..",p0=i=>{const r=S0(i),{conflictingClassGroups:s,conflictingClassGroupModifiers:c}=i;return{getClassGroupId:S=>{if(S.startsWith("[")&&S.endsWith("]"))return b0(S);const y=S.split(Di),g=y[0]===""&&y.length>1?1:0;return gh(y,g,r)},getConflictingClassGroupIds:(S,y)=>{if(y){const g=c[S],h=s[S];return g?h?v0(h,g):g:h||Qm}return s[S]||Qm}}},gh=(i,r,s)=>{if(i.length-r===0)return s.classGroupId;const d=i[r],m=s.nextPart.get(d);if(m){const h=gh(i,r+1,m);if(h)return h}const S=s.validators;if(S===null)return;const y=r===0?i.join(Di):i.slice(r).join(Di),g=S.length;for(let h=0;h<g;h++){const M=S[h];if(M.validator(y))return M.classGroupId}},b0=i=>i.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const r=i.slice(1,-1),s=r.indexOf(":"),c=r.slice(0,s);return c?g0+c:void 0})(),S0=i=>{const{theme:r,classGroups:s}=i;return x0(s,r)},x0=(i,r)=>{const s=yh();for(const c in i){const d=i[c];xr(d,s,c,r)}return s},xr=(i,r,s,c)=>{const d=i.length;for(let m=0;m<d;m++){const S=i[m];E0(S,r,s,c)}},E0=(i,r,s,c)=>{if(typeof i=="string"){A0(i,r,s);return}if(typeof i=="function"){T0(i,r,s,c);return}z0(i,r,s,c)},A0=(i,r,s)=>{const c=i===""?r:ph(r,i);c.classGroupId=s},T0=(i,r,s,c)=>{if(C0(i)){xr(i(c),r,s,c);return}r.validators===null&&(r.validators=[]),r.validators.push(y0(s,i))},z0=(i,r,s,c)=>{const d=Object.entries(i),m=d.length;for(let S=0;S<m;S++){const[y,g]=d[S];xr(g,ph(r,y),s,c)}},ph=(i,r)=>{let s=i;const c=r.split(Di),d=c.length;for(let m=0;m<d;m++){const S=c[m];let y=s.nextPart.get(S);y||(y=yh(),s.nextPart.set(S,y)),s=y}return s},C0=i=>"isThemeGetter"in i&&i.isThemeGetter===!0,O0=i=>{if(i<1)return{get:()=>{},set:()=>{}};let r=0,s=Object.create(null),c=Object.create(null);const d=(m,S)=>{s[m]=S,r++,r>i&&(r=0,c=s,s=Object.create(null))};return{get(m){let S=s[m];if(S!==void 0)return S;if((S=c[m])!==void 0)return d(m,S),S},set(m,S){m in s?s[m]=S:d(m,S)}}},yr="!",Vm=":",D0=[],Zm=(i,r,s,c,d)=>({modifiers:i,hasImportantModifier:r,baseClassName:s,maybePostfixModifierPosition:c,isExternal:d}),_0=i=>{const{prefix:r,experimentalParseClassName:s}=i;let c=d=>{const m=[];let S=0,y=0,g=0,h;const M=d.length;for(let w=0;w<M;w++){const Q=d[w];if(S===0&&y===0){if(Q===Vm){m.push(d.slice(g,w)),g=w+1;continue}if(Q==="/"){h=w;continue}}Q==="["?S++:Q==="]"?S--:Q==="("?y++:Q===")"&&y--}const O=m.length===0?d:d.slice(g);let Y=O,V=!1;O.endsWith(yr)?(Y=O.slice(0,-1),V=!0):O.startsWith(yr)&&(Y=O.slice(1),V=!0);const P=h&&h>g?h-g:void 0;return Zm(m,V,Y,P)};if(r){const d=r+Vm,m=c;c=S=>S.startsWith(d)?m(S.slice(d.length)):Zm(D0,!1,S,void 0,!0)}if(s){const d=c;c=m=>s({className:m,parseClassName:d})}return c},N0=i=>{const r=new Map;return i.orderSensitiveModifiers.forEach((s,c)=>{r.set(s,1e6+c)}),s=>{const c=[];let d=[];for(let m=0;m<s.length;m++){const S=s[m],y=S[0]==="[",g=r.has(S);y||g?(d.length>0&&(d.sort(),c.push(...d),d=[]),c.push(S)):d.push(S)}return d.length>0&&(d.sort(),c.push(...d)),c}},M0=i=>({cache:O0(i.cacheSize),parseClassName:_0(i),sortModifiers:N0(i),...p0(i)}),R0=/\s+/,j0=(i,r)=>{const{parseClassName:s,getClassGroupId:c,getConflictingClassGroupIds:d,sortModifiers:m}=r,S=[],y=i.trim().split(R0);let g="";for(let h=y.length-1;h>=0;h-=1){const M=y[h],{isExternal:O,modifiers:Y,hasImportantModifier:V,baseClassName:P,maybePostfixModifierPosition:w}=s(M);if(O){g=M+(g.length>0?" "+g:g);continue}let Q=!!w,$=c(Q?P.substring(0,w):P);if(!$){if(!Q){g=M+(g.length>0?" "+g:g);continue}if($=c(P),!$){g=M+(g.length>0?" "+g:g);continue}Q=!1}const Z=Y.length===0?"":Y.length===1?Y[0]:m(Y).join(":"),F=V?Z+yr:Z,tt=F+$;if(S.indexOf(tt)>-1)continue;S.push(tt);const et=d($,Q);for(let ot=0;ot<et.length;++ot){const H=et[ot];S.push(F+H)}g=M+(g.length>0?" "+g:g)}return g},U0=(...i)=>{let r=0,s,c,d="";for(;r<i.length;)(s=i[r++])&&(c=bh(s))&&(d&&(d+=" "),d+=c);return d},bh=i=>{if(typeof i=="string")return i;let r,s="";for(let c=0;c<i.length;c++)i[c]&&(r=bh(i[c]))&&(s&&(s+=" "),s+=r);return s},w0=(i,...r)=>{let s,c,d,m;const S=g=>{const h=r.reduce((M,O)=>O(M),i());return s=M0(h),c=s.cache.get,d=s.cache.set,m=y,y(g)},y=g=>{const h=c(g);if(h)return h;const M=j0(g,s);return d(g,M),M};return m=S,(...g)=>m(U0(...g))},H0=[],Zt=i=>{const r=s=>s[i]||H0;return r.isThemeGetter=!0,r},Sh=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,xh=/^\((?:(\w[\w-]*):)?(.+)\)$/i,B0=/^\d+\/\d+$/,Y0=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,q0=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,G0=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,L0=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,X0=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Wl=i=>B0.test(i),st=i=>!!i&&!Number.isNaN(Number(i)),wn=i=>!!i&&Number.isInteger(Number(i)),ur=i=>i.endsWith("%")&&st(i.slice(0,-1)),un=i=>Y0.test(i),Q0=()=>!0,V0=i=>q0.test(i)&&!G0.test(i),Eh=()=>!1,Z0=i=>L0.test(i),K0=i=>X0.test(i),k0=i=>!k(i)&&!J(i),J0=i=>na(i,zh,Eh),k=i=>Sh.test(i),al=i=>na(i,Ch,V0),ir=i=>na(i,P0,st),Km=i=>na(i,Ah,Eh),W0=i=>na(i,Th,K0),pi=i=>na(i,Oh,Z0),J=i=>xh.test(i),Ia=i=>la(i,Ch),$0=i=>la(i,tp),km=i=>la(i,Ah),F0=i=>la(i,zh),I0=i=>la(i,Th),bi=i=>la(i,Oh,!0),na=(i,r,s)=>{const c=Sh.exec(i);return c?c[1]?r(c[1]):s(c[2]):!1},la=(i,r,s=!1)=>{const c=xh.exec(i);return c?c[1]?r(c[1]):s:!1},Ah=i=>i==="position"||i==="percentage",Th=i=>i==="image"||i==="url",zh=i=>i==="length"||i==="size"||i==="bg-size",Ch=i=>i==="length",P0=i=>i==="number",tp=i=>i==="family-name",Oh=i=>i==="shadow",ep=()=>{const i=Zt("color"),r=Zt("font"),s=Zt("text"),c=Zt("font-weight"),d=Zt("tracking"),m=Zt("leading"),S=Zt("breakpoint"),y=Zt("container"),g=Zt("spacing"),h=Zt("radius"),M=Zt("shadow"),O=Zt("inset-shadow"),Y=Zt("text-shadow"),V=Zt("drop-shadow"),P=Zt("blur"),w=Zt("perspective"),Q=Zt("aspect"),$=Zt("ease"),Z=Zt("animate"),F=()=>["auto","avoid","all","avoid-page","page","left","right","column"],tt=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],et=()=>[...tt(),J,k],ot=()=>["auto","hidden","clip","visible","scroll"],H=()=>["auto","contain","none"],L=()=>[J,k,g],mt=()=>[Wl,"full","auto",...L()],gt=()=>[wn,"none","subgrid",J,k],Et=()=>["auto",{span:["full",wn,J,k]},wn,J,k],Ut=()=>[wn,"auto",J,k],Se=()=>["auto","min","max","fr",J,k],ee=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],qt=()=>["start","end","center","stretch","center-safe","end-safe"],D=()=>["auto",...L()],G=()=>[Wl,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...L()],B=()=>[i,J,k],St=()=>[...tt(),km,Km,{position:[J,k]}],At=()=>["no-repeat",{repeat:["","x","y","space","round"]}],b=()=>["auto","cover","contain",F0,J0,{size:[J,k]}],j=()=>[ur,Ia,al],q=()=>["","none","full",h,J,k],X=()=>["",st,Ia,al],at=()=>["solid","dashed","dotted","double"],rt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],lt=()=>[st,ur,km,Km],Kt=()=>["","none",P,J,k],Nt=()=>["none",st,J,k],we=()=>["none",st,J,k],on=()=>[st,J,k],rn=()=>[Wl,"full",...L()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[un],breakpoint:[un],color:[Q0],container:[un],"drop-shadow":[un],ease:["in","out","in-out"],font:[k0],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[un],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[un],shadow:[un],spacing:["px",st],text:[un],"text-shadow":[un],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Wl,k,J,Q]}],container:["container"],columns:[{columns:[st,k,J,y]}],"break-after":[{"break-after":F()}],"break-before":[{"break-before":F()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:et()}],overflow:[{overflow:ot()}],"overflow-x":[{"overflow-x":ot()}],"overflow-y":[{"overflow-y":ot()}],overscroll:[{overscroll:H()}],"overscroll-x":[{"overscroll-x":H()}],"overscroll-y":[{"overscroll-y":H()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:mt()}],"inset-x":[{"inset-x":mt()}],"inset-y":[{"inset-y":mt()}],start:[{start:mt()}],end:[{end:mt()}],top:[{top:mt()}],right:[{right:mt()}],bottom:[{bottom:mt()}],left:[{left:mt()}],visibility:["visible","invisible","collapse"],z:[{z:[wn,"auto",J,k]}],basis:[{basis:[Wl,"full","auto",y,...L()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[st,Wl,"auto","initial","none",k]}],grow:[{grow:["",st,J,k]}],shrink:[{shrink:["",st,J,k]}],order:[{order:[wn,"first","last","none",J,k]}],"grid-cols":[{"grid-cols":gt()}],"col-start-end":[{col:Et()}],"col-start":[{"col-start":Ut()}],"col-end":[{"col-end":Ut()}],"grid-rows":[{"grid-rows":gt()}],"row-start-end":[{row:Et()}],"row-start":[{"row-start":Ut()}],"row-end":[{"row-end":Ut()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Se()}],"auto-rows":[{"auto-rows":Se()}],gap:[{gap:L()}],"gap-x":[{"gap-x":L()}],"gap-y":[{"gap-y":L()}],"justify-content":[{justify:[...ee(),"normal"]}],"justify-items":[{"justify-items":[...qt(),"normal"]}],"justify-self":[{"justify-self":["auto",...qt()]}],"align-content":[{content:["normal",...ee()]}],"align-items":[{items:[...qt(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...qt(),{baseline:["","last"]}]}],"place-content":[{"place-content":ee()}],"place-items":[{"place-items":[...qt(),"baseline"]}],"place-self":[{"place-self":["auto",...qt()]}],p:[{p:L()}],px:[{px:L()}],py:[{py:L()}],ps:[{ps:L()}],pe:[{pe:L()}],pt:[{pt:L()}],pr:[{pr:L()}],pb:[{pb:L()}],pl:[{pl:L()}],m:[{m:D()}],mx:[{mx:D()}],my:[{my:D()}],ms:[{ms:D()}],me:[{me:D()}],mt:[{mt:D()}],mr:[{mr:D()}],mb:[{mb:D()}],ml:[{ml:D()}],"space-x":[{"space-x":L()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":L()}],"space-y-reverse":["space-y-reverse"],size:[{size:G()}],w:[{w:[y,"screen",...G()]}],"min-w":[{"min-w":[y,"screen","none",...G()]}],"max-w":[{"max-w":[y,"screen","none","prose",{screen:[S]},...G()]}],h:[{h:["screen","lh",...G()]}],"min-h":[{"min-h":["screen","lh","none",...G()]}],"max-h":[{"max-h":["screen","lh",...G()]}],"font-size":[{text:["base",s,Ia,al]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[c,J,ir]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ur,k]}],"font-family":[{font:[$0,k,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[d,J,k]}],"line-clamp":[{"line-clamp":[st,"none",J,ir]}],leading:[{leading:[m,...L()]}],"list-image":[{"list-image":["none",J,k]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",J,k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:B()}],"text-color":[{text:B()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...at(),"wavy"]}],"text-decoration-thickness":[{decoration:[st,"from-font","auto",J,al]}],"text-decoration-color":[{decoration:B()}],"underline-offset":[{"underline-offset":[st,"auto",J,k]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",J,k]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",J,k]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:St()}],"bg-repeat":[{bg:At()}],"bg-size":[{bg:b()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},wn,J,k],radial:["",J,k],conic:[wn,J,k]},I0,W0]}],"bg-color":[{bg:B()}],"gradient-from-pos":[{from:j()}],"gradient-via-pos":[{via:j()}],"gradient-to-pos":[{to:j()}],"gradient-from":[{from:B()}],"gradient-via":[{via:B()}],"gradient-to":[{to:B()}],rounded:[{rounded:q()}],"rounded-s":[{"rounded-s":q()}],"rounded-e":[{"rounded-e":q()}],"rounded-t":[{"rounded-t":q()}],"rounded-r":[{"rounded-r":q()}],"rounded-b":[{"rounded-b":q()}],"rounded-l":[{"rounded-l":q()}],"rounded-ss":[{"rounded-ss":q()}],"rounded-se":[{"rounded-se":q()}],"rounded-ee":[{"rounded-ee":q()}],"rounded-es":[{"rounded-es":q()}],"rounded-tl":[{"rounded-tl":q()}],"rounded-tr":[{"rounded-tr":q()}],"rounded-br":[{"rounded-br":q()}],"rounded-bl":[{"rounded-bl":q()}],"border-w":[{border:X()}],"border-w-x":[{"border-x":X()}],"border-w-y":[{"border-y":X()}],"border-w-s":[{"border-s":X()}],"border-w-e":[{"border-e":X()}],"border-w-t":[{"border-t":X()}],"border-w-r":[{"border-r":X()}],"border-w-b":[{"border-b":X()}],"border-w-l":[{"border-l":X()}],"divide-x":[{"divide-x":X()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":X()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...at(),"hidden","none"]}],"divide-style":[{divide:[...at(),"hidden","none"]}],"border-color":[{border:B()}],"border-color-x":[{"border-x":B()}],"border-color-y":[{"border-y":B()}],"border-color-s":[{"border-s":B()}],"border-color-e":[{"border-e":B()}],"border-color-t":[{"border-t":B()}],"border-color-r":[{"border-r":B()}],"border-color-b":[{"border-b":B()}],"border-color-l":[{"border-l":B()}],"divide-color":[{divide:B()}],"outline-style":[{outline:[...at(),"none","hidden"]}],"outline-offset":[{"outline-offset":[st,J,k]}],"outline-w":[{outline:["",st,Ia,al]}],"outline-color":[{outline:B()}],shadow:[{shadow:["","none",M,bi,pi]}],"shadow-color":[{shadow:B()}],"inset-shadow":[{"inset-shadow":["none",O,bi,pi]}],"inset-shadow-color":[{"inset-shadow":B()}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:B()}],"ring-offset-w":[{"ring-offset":[st,al]}],"ring-offset-color":[{"ring-offset":B()}],"inset-ring-w":[{"inset-ring":X()}],"inset-ring-color":[{"inset-ring":B()}],"text-shadow":[{"text-shadow":["none",Y,bi,pi]}],"text-shadow-color":[{"text-shadow":B()}],opacity:[{opacity:[st,J,k]}],"mix-blend":[{"mix-blend":[...rt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":rt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[st]}],"mask-image-linear-from-pos":[{"mask-linear-from":lt()}],"mask-image-linear-to-pos":[{"mask-linear-to":lt()}],"mask-image-linear-from-color":[{"mask-linear-from":B()}],"mask-image-linear-to-color":[{"mask-linear-to":B()}],"mask-image-t-from-pos":[{"mask-t-from":lt()}],"mask-image-t-to-pos":[{"mask-t-to":lt()}],"mask-image-t-from-color":[{"mask-t-from":B()}],"mask-image-t-to-color":[{"mask-t-to":B()}],"mask-image-r-from-pos":[{"mask-r-from":lt()}],"mask-image-r-to-pos":[{"mask-r-to":lt()}],"mask-image-r-from-color":[{"mask-r-from":B()}],"mask-image-r-to-color":[{"mask-r-to":B()}],"mask-image-b-from-pos":[{"mask-b-from":lt()}],"mask-image-b-to-pos":[{"mask-b-to":lt()}],"mask-image-b-from-color":[{"mask-b-from":B()}],"mask-image-b-to-color":[{"mask-b-to":B()}],"mask-image-l-from-pos":[{"mask-l-from":lt()}],"mask-image-l-to-pos":[{"mask-l-to":lt()}],"mask-image-l-from-color":[{"mask-l-from":B()}],"mask-image-l-to-color":[{"mask-l-to":B()}],"mask-image-x-from-pos":[{"mask-x-from":lt()}],"mask-image-x-to-pos":[{"mask-x-to":lt()}],"mask-image-x-from-color":[{"mask-x-from":B()}],"mask-image-x-to-color":[{"mask-x-to":B()}],"mask-image-y-from-pos":[{"mask-y-from":lt()}],"mask-image-y-to-pos":[{"mask-y-to":lt()}],"mask-image-y-from-color":[{"mask-y-from":B()}],"mask-image-y-to-color":[{"mask-y-to":B()}],"mask-image-radial":[{"mask-radial":[J,k]}],"mask-image-radial-from-pos":[{"mask-radial-from":lt()}],"mask-image-radial-to-pos":[{"mask-radial-to":lt()}],"mask-image-radial-from-color":[{"mask-radial-from":B()}],"mask-image-radial-to-color":[{"mask-radial-to":B()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":tt()}],"mask-image-conic-pos":[{"mask-conic":[st]}],"mask-image-conic-from-pos":[{"mask-conic-from":lt()}],"mask-image-conic-to-pos":[{"mask-conic-to":lt()}],"mask-image-conic-from-color":[{"mask-conic-from":B()}],"mask-image-conic-to-color":[{"mask-conic-to":B()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:St()}],"mask-repeat":[{mask:At()}],"mask-size":[{mask:b()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",J,k]}],filter:[{filter:["","none",J,k]}],blur:[{blur:Kt()}],brightness:[{brightness:[st,J,k]}],contrast:[{contrast:[st,J,k]}],"drop-shadow":[{"drop-shadow":["","none",V,bi,pi]}],"drop-shadow-color":[{"drop-shadow":B()}],grayscale:[{grayscale:["",st,J,k]}],"hue-rotate":[{"hue-rotate":[st,J,k]}],invert:[{invert:["",st,J,k]}],saturate:[{saturate:[st,J,k]}],sepia:[{sepia:["",st,J,k]}],"backdrop-filter":[{"backdrop-filter":["","none",J,k]}],"backdrop-blur":[{"backdrop-blur":Kt()}],"backdrop-brightness":[{"backdrop-brightness":[st,J,k]}],"backdrop-contrast":[{"backdrop-contrast":[st,J,k]}],"backdrop-grayscale":[{"backdrop-grayscale":["",st,J,k]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[st,J,k]}],"backdrop-invert":[{"backdrop-invert":["",st,J,k]}],"backdrop-opacity":[{"backdrop-opacity":[st,J,k]}],"backdrop-saturate":[{"backdrop-saturate":[st,J,k]}],"backdrop-sepia":[{"backdrop-sepia":["",st,J,k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":L()}],"border-spacing-x":[{"border-spacing-x":L()}],"border-spacing-y":[{"border-spacing-y":L()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",J,k]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[st,"initial",J,k]}],ease:[{ease:["linear","initial",$,J,k]}],delay:[{delay:[st,J,k]}],animate:[{animate:["none",Z,J,k]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[w,J,k]}],"perspective-origin":[{"perspective-origin":et()}],rotate:[{rotate:Nt()}],"rotate-x":[{"rotate-x":Nt()}],"rotate-y":[{"rotate-y":Nt()}],"rotate-z":[{"rotate-z":Nt()}],scale:[{scale:we()}],"scale-x":[{"scale-x":we()}],"scale-y":[{"scale-y":we()}],"scale-z":[{"scale-z":we()}],"scale-3d":["scale-3d"],skew:[{skew:on()}],"skew-x":[{"skew-x":on()}],"skew-y":[{"skew-y":on()}],transform:[{transform:[J,k,"","none","gpu","cpu"]}],"transform-origin":[{origin:et()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:rn()}],"translate-x":[{"translate-x":rn()}],"translate-y":[{"translate-y":rn()}],"translate-z":[{"translate-z":rn()}],"translate-none":["translate-none"],accent:[{accent:B()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:B()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",J,k]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",J,k]}],fill:[{fill:["none",...B()]}],"stroke-w":[{stroke:[st,Ia,al,ir]}],stroke:[{stroke:["none",...B()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},np=w0(ep);function sl(...i){return np(vh(i))}const lp=h0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function ta({className:i,variant:r="default",size:s="default",asChild:c=!1,...d}){const m=c?o0:"button";return _.jsx(m,{"code-path":"src/components/ui/button.tsx:52:5","data-slot":"button","data-variant":r,"data-size":s,className:sl(lp({variant:r,size:s,className:i})),...d})}function Bn(i,r,{checkForDefaultPrevented:s=!0}={}){return function(d){if(i?.(d),s===!1||!d.defaultPrevented)return r?.(d)}}function ap(i,r){const s=x.createContext(r),c=m=>{const{children:S,...y}=m,g=x.useMemo(()=>y,Object.values(y));return _.jsx(s.Provider,{value:g,children:S})};c.displayName=i+"Provider";function d(m){const S=x.useContext(s);if(S)return S;if(r!==void 0)return r;throw new Error(`\`${m}\` must be used within \`${i}\``)}return[c,d]}function up(i,r=[]){let s=[];function c(m,S){const y=x.createContext(S),g=s.length;s=[...s,S];const h=O=>{const{scope:Y,children:V,...P}=O,w=Y?.[i]?.[g]||y,Q=x.useMemo(()=>P,Object.values(P));return _.jsx(w.Provider,{value:Q,children:V})};h.displayName=m+"Provider";function M(O,Y){const V=Y?.[i]?.[g]||y,P=x.useContext(V);if(P)return P;if(S!==void 0)return S;throw new Error(`\`${O}\` must be used within \`${m}\``)}return[h,M]}const d=()=>{const m=s.map(S=>x.createContext(S));return function(y){const g=y?.[i]||m;return x.useMemo(()=>({[`__scope${i}`]:{...y,[i]:g}}),[y,g])}};return d.scopeName=i,[c,ip(d,...r)]}function ip(...i){const r=i[0];if(i.length===1)return r;const s=()=>{const c=i.map(d=>({useScope:d(),scopeName:d.scopeName}));return function(m){const S=c.reduce((y,{useScope:g,scopeName:h})=>{const O=g(m)[`__scope${h}`];return{...y,...O}},{});return x.useMemo(()=>({[`__scope${r.scopeName}`]:S}),[S])}};return s.scopeName=r.scopeName,s}var Pa=globalThis?.document?x.useLayoutEffect:()=>{},cp=Sr[" useId ".trim().toString()]||(()=>{}),op=0;function cr(i){const[r,s]=x.useState(cp());return Pa(()=>{s(c=>c??String(op++))},[i]),i||(r?`radix-${r}`:"")}var rp=Sr[" useInsertionEffect ".trim().toString()]||Pa;function sp({prop:i,defaultProp:r,onChange:s=()=>{},caller:c}){const[d,m,S]=fp({defaultProp:r,onChange:s}),y=i!==void 0,g=y?i:d;{const M=x.useRef(i!==void 0);x.useEffect(()=>{const O=M.current;O!==y&&console.warn(`${c} is changing from ${O?"controlled":"uncontrolled"} to ${y?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),M.current=y},[y,c])}const h=x.useCallback(M=>{if(y){const O=dp(M)?M(i):M;O!==i&&S.current?.(O)}else m(M)},[y,i,m,S]);return[g,h]}function fp({defaultProp:i,onChange:r}){const[s,c]=x.useState(i),d=x.useRef(s),m=x.useRef(r);return rp(()=>{m.current=r},[r]),x.useEffect(()=>{d.current!==s&&(m.current?.(s),d.current=s)},[s,d]),[s,c,m]}function dp(i){return typeof i=="function"}var Dh=ch();const mp=ih(Dh);function hp(i){const r=vp(i),s=x.forwardRef((c,d)=>{const{children:m,...S}=c,y=x.Children.toArray(m),g=y.find(gp);if(g){const h=g.props.children,M=y.map(O=>O===g?x.Children.count(h)>1?x.Children.only(null):x.isValidElement(h)?h.props.children:null:O);return _.jsx(r,{...S,ref:d,children:x.isValidElement(h)?x.cloneElement(h,void 0,M):null})}return _.jsx(r,{...S,ref:d,children:m})});return s.displayName=`${i}.Slot`,s}function vp(i){const r=x.forwardRef((s,c)=>{const{children:d,...m}=s;if(x.isValidElement(d)){const S=bp(d),y=pp(m,d.props);return d.type!==x.Fragment&&(y.ref=c?Ni(c,S):S),x.cloneElement(d,y)}return x.Children.count(d)>1?x.Children.only(null):null});return r.displayName=`${i}.SlotClone`,r}var yp=Symbol("radix.slottable");function gp(i){return x.isValidElement(i)&&typeof i.type=="function"&&"__radixId"in i.type&&i.type.__radixId===yp}function pp(i,r){const s={...r};for(const c in r){const d=i[c],m=r[c];/^on[A-Z]/.test(c)?d&&m?s[c]=(...y)=>{const g=m(...y);return d(...y),g}:d&&(s[c]=d):c==="style"?s[c]={...d,...m}:c==="className"&&(s[c]=[d,m].filter(Boolean).join(" "))}return{...i,...s}}function bp(i){let r=Object.getOwnPropertyDescriptor(i.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?i.ref:(r=Object.getOwnPropertyDescriptor(i,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?i.props.ref:i.props.ref||i.ref)}var Sp=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],cn=Sp.reduce((i,r)=>{const s=hp(`Primitive.${r}`),c=x.forwardRef((d,m)=>{const{asChild:S,...y}=d,g=S?s:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),_.jsx(g,{...y,ref:m})});return c.displayName=`Primitive.${r}`,{...i,[r]:c}},{});function xp(i,r){i&&Dh.flushSync(()=>i.dispatchEvent(r))}function tu(i){const r=x.useRef(i);return x.useEffect(()=>{r.current=i}),x.useMemo(()=>(...s)=>r.current?.(...s),[])}function Ep(i,r=globalThis?.document){const s=tu(i);x.useEffect(()=>{const c=d=>{d.key==="Escape"&&s(d)};return r.addEventListener("keydown",c,{capture:!0}),()=>r.removeEventListener("keydown",c,{capture:!0})},[s,r])}var Ap="DismissableLayer",gr="dismissableLayer.update",Tp="dismissableLayer.pointerDownOutside",zp="dismissableLayer.focusOutside",Jm,_h=x.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Nh=x.forwardRef((i,r)=>{const{disableOutsidePointerEvents:s=!1,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:m,onInteractOutside:S,onDismiss:y,...g}=i,h=x.useContext(_h),[M,O]=x.useState(null),Y=M?.ownerDocument??globalThis?.document,[,V]=x.useState({}),P=rl(r,H=>O(H)),w=Array.from(h.layers),[Q]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),$=w.indexOf(Q),Z=M?w.indexOf(M):-1,F=h.layersWithOutsidePointerEventsDisabled.size>0,tt=Z>=$,et=Dp(H=>{const L=H.target,mt=[...h.branches].some(gt=>gt.contains(L));!tt||mt||(d?.(H),S?.(H),H.defaultPrevented||y?.())},Y),ot=_p(H=>{const L=H.target;[...h.branches].some(gt=>gt.contains(L))||(m?.(H),S?.(H),H.defaultPrevented||y?.())},Y);return Ep(H=>{Z===h.layers.size-1&&(c?.(H),!H.defaultPrevented&&y&&(H.preventDefault(),y()))},Y),x.useEffect(()=>{if(M)return s&&(h.layersWithOutsidePointerEventsDisabled.size===0&&(Jm=Y.body.style.pointerEvents,Y.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(M)),h.layers.add(M),Wm(),()=>{s&&h.layersWithOutsidePointerEventsDisabled.size===1&&(Y.body.style.pointerEvents=Jm)}},[M,Y,s,h]),x.useEffect(()=>()=>{M&&(h.layers.delete(M),h.layersWithOutsidePointerEventsDisabled.delete(M),Wm())},[M,h]),x.useEffect(()=>{const H=()=>V({});return document.addEventListener(gr,H),()=>document.removeEventListener(gr,H)},[]),_.jsx(cn.div,{...g,ref:P,style:{pointerEvents:F?tt?"auto":"none":void 0,...i.style},onFocusCapture:Bn(i.onFocusCapture,ot.onFocusCapture),onBlurCapture:Bn(i.onBlurCapture,ot.onBlurCapture),onPointerDownCapture:Bn(i.onPointerDownCapture,et.onPointerDownCapture)})});Nh.displayName=Ap;var Cp="DismissableLayerBranch",Op=x.forwardRef((i,r)=>{const s=x.useContext(_h),c=x.useRef(null),d=rl(r,c);return x.useEffect(()=>{const m=c.current;if(m)return s.branches.add(m),()=>{s.branches.delete(m)}},[s.branches]),_.jsx(cn.div,{...i,ref:d})});Op.displayName=Cp;function Dp(i,r=globalThis?.document){const s=tu(i),c=x.useRef(!1),d=x.useRef(()=>{});return x.useEffect(()=>{const m=y=>{if(y.target&&!c.current){let g=function(){Mh(Tp,s,h,{discrete:!0})};const h={originalEvent:y};y.pointerType==="touch"?(r.removeEventListener("click",d.current),d.current=g,r.addEventListener("click",d.current,{once:!0})):g()}else r.removeEventListener("click",d.current);c.current=!1},S=window.setTimeout(()=>{r.addEventListener("pointerdown",m)},0);return()=>{window.clearTimeout(S),r.removeEventListener("pointerdown",m),r.removeEventListener("click",d.current)}},[r,s]),{onPointerDownCapture:()=>c.current=!0}}function _p(i,r=globalThis?.document){const s=tu(i),c=x.useRef(!1);return x.useEffect(()=>{const d=m=>{m.target&&!c.current&&Mh(zp,s,{originalEvent:m},{discrete:!1})};return r.addEventListener("focusin",d),()=>r.removeEventListener("focusin",d)},[r,s]),{onFocusCapture:()=>c.current=!0,onBlurCapture:()=>c.current=!1}}function Wm(){const i=new CustomEvent(gr);document.dispatchEvent(i)}function Mh(i,r,s,{discrete:c}){const d=s.originalEvent.target,m=new CustomEvent(i,{bubbles:!1,cancelable:!0,detail:s});r&&d.addEventListener(i,r,{once:!0}),c?xp(d,m):d.dispatchEvent(m)}var or="focusScope.autoFocusOnMount",rr="focusScope.autoFocusOnUnmount",$m={bubbles:!1,cancelable:!0},Np="FocusScope",Rh=x.forwardRef((i,r)=>{const{loop:s=!1,trapped:c=!1,onMountAutoFocus:d,onUnmountAutoFocus:m,...S}=i,[y,g]=x.useState(null),h=tu(d),M=tu(m),O=x.useRef(null),Y=rl(r,w=>g(w)),V=x.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;x.useEffect(()=>{if(c){let w=function(F){if(V.paused||!y)return;const tt=F.target;y.contains(tt)?O.current=tt:Hn(O.current,{select:!0})},Q=function(F){if(V.paused||!y)return;const tt=F.relatedTarget;tt!==null&&(y.contains(tt)||Hn(O.current,{select:!0}))},$=function(F){if(document.activeElement===document.body)for(const et of F)et.removedNodes.length>0&&Hn(y)};document.addEventListener("focusin",w),document.addEventListener("focusout",Q);const Z=new MutationObserver($);return y&&Z.observe(y,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",w),document.removeEventListener("focusout",Q),Z.disconnect()}}},[c,y,V.paused]),x.useEffect(()=>{if(y){Im.add(V);const w=document.activeElement;if(!y.contains(w)){const $=new CustomEvent(or,$m);y.addEventListener(or,h),y.dispatchEvent($),$.defaultPrevented||(Mp(Hp(jh(y)),{select:!0}),document.activeElement===w&&Hn(y))}return()=>{y.removeEventListener(or,h),setTimeout(()=>{const $=new CustomEvent(rr,$m);y.addEventListener(rr,M),y.dispatchEvent($),$.defaultPrevented||Hn(w??document.body,{select:!0}),y.removeEventListener(rr,M),Im.remove(V)},0)}}},[y,h,M,V]);const P=x.useCallback(w=>{if(!s&&!c||V.paused)return;const Q=w.key==="Tab"&&!w.altKey&&!w.ctrlKey&&!w.metaKey,$=document.activeElement;if(Q&&$){const Z=w.currentTarget,[F,tt]=Rp(Z);F&&tt?!w.shiftKey&&$===tt?(w.preventDefault(),s&&Hn(F,{select:!0})):w.shiftKey&&$===F&&(w.preventDefault(),s&&Hn(tt,{select:!0})):$===Z&&w.preventDefault()}},[s,c,V.paused]);return _.jsx(cn.div,{tabIndex:-1,...S,ref:Y,onKeyDown:P})});Rh.displayName=Np;function Mp(i,{select:r=!1}={}){const s=document.activeElement;for(const c of i)if(Hn(c,{select:r}),document.activeElement!==s)return}function Rp(i){const r=jh(i),s=Fm(r,i),c=Fm(r.reverse(),i);return[s,c]}function jh(i){const r=[],s=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:c=>{const d=c.tagName==="INPUT"&&c.type==="hidden";return c.disabled||c.hidden||d?NodeFilter.FILTER_SKIP:c.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)r.push(s.currentNode);return r}function Fm(i,r){for(const s of i)if(!jp(s,{upTo:r}))return s}function jp(i,{upTo:r}){if(getComputedStyle(i).visibility==="hidden")return!0;for(;i;){if(r!==void 0&&i===r)return!1;if(getComputedStyle(i).display==="none")return!0;i=i.parentElement}return!1}function Up(i){return i instanceof HTMLInputElement&&"select"in i}function Hn(i,{select:r=!1}={}){if(i&&i.focus){const s=document.activeElement;i.focus({preventScroll:!0}),i!==s&&Up(i)&&r&&i.select()}}var Im=wp();function wp(){let i=[];return{add(r){const s=i[0];r!==s&&s?.pause(),i=Pm(i,r),i.unshift(r)},remove(r){i=Pm(i,r),i[0]?.resume()}}}function Pm(i,r){const s=[...i],c=s.indexOf(r);return c!==-1&&s.splice(c,1),s}function Hp(i){return i.filter(r=>r.tagName!=="A")}var Bp="Portal",Uh=x.forwardRef((i,r)=>{const{container:s,...c}=i,[d,m]=x.useState(!1);Pa(()=>m(!0),[]);const S=s||d&&globalThis?.document?.body;return S?mp.createPortal(_.jsx(cn.div,{...c,ref:r}),S):null});Uh.displayName=Bp;function Yp(i,r){return x.useReducer((s,c)=>r[s][c]??s,i)}var Mi=i=>{const{present:r,children:s}=i,c=qp(r),d=typeof s=="function"?s({present:c.isPresent}):x.Children.only(s),m=rl(c.ref,Gp(d));return typeof s=="function"||c.isPresent?x.cloneElement(d,{ref:m}):null};Mi.displayName="Presence";function qp(i){const[r,s]=x.useState(),c=x.useRef(null),d=x.useRef(i),m=x.useRef("none"),S=i?"mounted":"unmounted",[y,g]=Yp(S,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return x.useEffect(()=>{const h=Si(c.current);m.current=y==="mounted"?h:"none"},[y]),Pa(()=>{const h=c.current,M=d.current;if(M!==i){const Y=m.current,V=Si(h);i?g("MOUNT"):V==="none"||h?.display==="none"?g("UNMOUNT"):g(M&&Y!==V?"ANIMATION_OUT":"UNMOUNT"),d.current=i}},[i,g]),Pa(()=>{if(r){let h;const M=r.ownerDocument.defaultView??window,O=V=>{const w=Si(c.current).includes(CSS.escape(V.animationName));if(V.target===r&&w&&(g("ANIMATION_END"),!d.current)){const Q=r.style.animationFillMode;r.style.animationFillMode="forwards",h=M.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=Q)})}},Y=V=>{V.target===r&&(m.current=Si(c.current))};return r.addEventListener("animationstart",Y),r.addEventListener("animationcancel",O),r.addEventListener("animationend",O),()=>{M.clearTimeout(h),r.removeEventListener("animationstart",Y),r.removeEventListener("animationcancel",O),r.removeEventListener("animationend",O)}}else g("ANIMATION_END")},[r,g]),{isPresent:["mounted","unmountSuspended"].includes(y),ref:x.useCallback(h=>{c.current=h?getComputedStyle(h):null,s(h)},[])}}function Si(i){return i?.animationName||"none"}function Gp(i){let r=Object.getOwnPropertyDescriptor(i.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?i.ref:(r=Object.getOwnPropertyDescriptor(i,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?i.props.ref:i.props.ref||i.ref)}var sr=0;function Lp(){x.useEffect(()=>{const i=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",i[0]??th()),document.body.insertAdjacentElement("beforeend",i[1]??th()),sr++,()=>{sr===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),sr--}},[])}function th(){const i=document.createElement("span");return i.setAttribute("data-radix-focus-guard",""),i.tabIndex=0,i.style.outline="none",i.style.opacity="0",i.style.position="fixed",i.style.pointerEvents="none",i}var Ge=function(){return Ge=Object.assign||function(r){for(var s,c=1,d=arguments.length;c<d;c++){s=arguments[c];for(var m in s)Object.prototype.hasOwnProperty.call(s,m)&&(r[m]=s[m])}return r},Ge.apply(this,arguments)};function wh(i,r){var s={};for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&r.indexOf(c)<0&&(s[c]=i[c]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,c=Object.getOwnPropertySymbols(i);d<c.length;d++)r.indexOf(c[d])<0&&Object.prototype.propertyIsEnumerable.call(i,c[d])&&(s[c[d]]=i[c[d]]);return s}function Xp(i,r,s){if(s||arguments.length===2)for(var c=0,d=r.length,m;c<d;c++)(m||!(c in r))&&(m||(m=Array.prototype.slice.call(r,0,c)),m[c]=r[c]);return i.concat(m||Array.prototype.slice.call(r))}var zi="right-scroll-bar-position",Ci="width-before-scroll-bar",Qp="with-scroll-bars-hidden",Vp="--removed-body-scroll-bar-size";function fr(i,r){return typeof i=="function"?i(r):i&&(i.current=r),i}function Zp(i,r){var s=x.useState(function(){return{value:i,callback:r,facade:{get current(){return s.value},set current(c){var d=s.value;d!==c&&(s.value=c,s.callback(c,d))}}}})[0];return s.callback=r,s.facade}var Kp=typeof window<"u"?x.useLayoutEffect:x.useEffect,eh=new WeakMap;function kp(i,r){var s=Zp(null,function(c){return i.forEach(function(d){return fr(d,c)})});return Kp(function(){var c=eh.get(s);if(c){var d=new Set(c),m=new Set(i),S=s.current;d.forEach(function(y){m.has(y)||fr(y,null)}),m.forEach(function(y){d.has(y)||fr(y,S)})}eh.set(s,i)},[i]),s}function Jp(i){return i}function Wp(i,r){r===void 0&&(r=Jp);var s=[],c=!1,d={read:function(){if(c)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return s.length?s[s.length-1]:i},useMedium:function(m){var S=r(m,c);return s.push(S),function(){s=s.filter(function(y){return y!==S})}},assignSyncMedium:function(m){for(c=!0;s.length;){var S=s;s=[],S.forEach(m)}s={push:function(y){return m(y)},filter:function(){return s}}},assignMedium:function(m){c=!0;var S=[];if(s.length){var y=s;s=[],y.forEach(m),S=s}var g=function(){var M=S;S=[],M.forEach(m)},h=function(){return Promise.resolve().then(g)};h(),s={push:function(M){S.push(M),h()},filter:function(M){return S=S.filter(M),s}}}};return d}function $p(i){i===void 0&&(i={});var r=Wp(null);return r.options=Ge({async:!0,ssr:!1},i),r}var Hh=function(i){var r=i.sideCar,s=wh(i,["sideCar"]);if(!r)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var c=r.read();if(!c)throw new Error("Sidecar medium not found");return x.createElement(c,Ge({},s))};Hh.isSideCarExport=!0;function Fp(i,r){return i.useMedium(r),Hh}var Bh=$p(),dr=function(){},Ri=x.forwardRef(function(i,r){var s=x.useRef(null),c=x.useState({onScrollCapture:dr,onWheelCapture:dr,onTouchMoveCapture:dr}),d=c[0],m=c[1],S=i.forwardProps,y=i.children,g=i.className,h=i.removeScrollBar,M=i.enabled,O=i.shards,Y=i.sideCar,V=i.noRelative,P=i.noIsolation,w=i.inert,Q=i.allowPinchZoom,$=i.as,Z=$===void 0?"div":$,F=i.gapMode,tt=wh(i,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),et=Y,ot=kp([s,r]),H=Ge(Ge({},tt),d);return x.createElement(x.Fragment,null,M&&x.createElement(et,{sideCar:Bh,removeScrollBar:h,shards:O,noRelative:V,noIsolation:P,inert:w,setCallbacks:m,allowPinchZoom:!!Q,lockRef:s,gapMode:F}),S?x.cloneElement(x.Children.only(y),Ge(Ge({},H),{ref:ot})):x.createElement(Z,Ge({},H,{className:g,ref:ot}),y))});Ri.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Ri.classNames={fullWidth:Ci,zeroRight:zi};var Ip=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Pp(){if(!document)return null;var i=document.createElement("style");i.type="text/css";var r=Ip();return r&&i.setAttribute("nonce",r),i}function tb(i,r){i.styleSheet?i.styleSheet.cssText=r:i.appendChild(document.createTextNode(r))}function eb(i){var r=document.head||document.getElementsByTagName("head")[0];r.appendChild(i)}var nb=function(){var i=0,r=null;return{add:function(s){i==0&&(r=Pp())&&(tb(r,s),eb(r)),i++},remove:function(){i--,!i&&r&&(r.parentNode&&r.parentNode.removeChild(r),r=null)}}},lb=function(){var i=nb();return function(r,s){x.useEffect(function(){return i.add(r),function(){i.remove()}},[r&&s])}},Yh=function(){var i=lb(),r=function(s){var c=s.styles,d=s.dynamic;return i(c,d),null};return r},ab={left:0,top:0,right:0,gap:0},mr=function(i){return parseInt(i||"",10)||0},ub=function(i){var r=window.getComputedStyle(document.body),s=r[i==="padding"?"paddingLeft":"marginLeft"],c=r[i==="padding"?"paddingTop":"marginTop"],d=r[i==="padding"?"paddingRight":"marginRight"];return[mr(s),mr(c),mr(d)]},ib=function(i){if(i===void 0&&(i="margin"),typeof window>"u")return ab;var r=ub(i),s=document.documentElement.clientWidth,c=window.innerWidth;return{left:r[0],top:r[1],right:r[2],gap:Math.max(0,c-s+r[2]-r[0])}},cb=Yh(),ea="data-scroll-locked",ob=function(i,r,s,c){var d=i.left,m=i.top,S=i.right,y=i.gap;return s===void 0&&(s="margin"),`
  .`.concat(Qp,` {
   overflow: hidden `).concat(c,`;
   padding-right: `).concat(y,"px ").concat(c,`;
  }
  body[`).concat(ea,`] {
    overflow: hidden `).concat(c,`;
    overscroll-behavior: contain;
    `).concat([r&&"position: relative ".concat(c,";"),s==="margin"&&`
    padding-left: `.concat(d,`px;
    padding-top: `).concat(m,`px;
    padding-right: `).concat(S,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(y,"px ").concat(c,`;
    `),s==="padding"&&"padding-right: ".concat(y,"px ").concat(c,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(zi,` {
    right: `).concat(y,"px ").concat(c,`;
  }
  
  .`).concat(Ci,` {
    margin-right: `).concat(y,"px ").concat(c,`;
  }
  
  .`).concat(zi," .").concat(zi,` {
    right: 0 `).concat(c,`;
  }
  
  .`).concat(Ci," .").concat(Ci,` {
    margin-right: 0 `).concat(c,`;
  }
  
  body[`).concat(ea,`] {
    `).concat(Vp,": ").concat(y,`px;
  }
`)},nh=function(){var i=parseInt(document.body.getAttribute(ea)||"0",10);return isFinite(i)?i:0},rb=function(){x.useEffect(function(){return document.body.setAttribute(ea,(nh()+1).toString()),function(){var i=nh()-1;i<=0?document.body.removeAttribute(ea):document.body.setAttribute(ea,i.toString())}},[])},sb=function(i){var r=i.noRelative,s=i.noImportant,c=i.gapMode,d=c===void 0?"margin":c;rb();var m=x.useMemo(function(){return ib(d)},[d]);return x.createElement(cb,{styles:ob(m,!r,d,s?"":"!important")})},pr=!1;if(typeof window<"u")try{var xi=Object.defineProperty({},"passive",{get:function(){return pr=!0,!0}});window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{pr=!1}var $l=pr?{passive:!1}:!1,fb=function(i){return i.tagName==="TEXTAREA"},qh=function(i,r){if(!(i instanceof Element))return!1;var s=window.getComputedStyle(i);return s[r]!=="hidden"&&!(s.overflowY===s.overflowX&&!fb(i)&&s[r]==="visible")},db=function(i){return qh(i,"overflowY")},mb=function(i){return qh(i,"overflowX")},lh=function(i,r){var s=r.ownerDocument,c=r;do{typeof ShadowRoot<"u"&&c instanceof ShadowRoot&&(c=c.host);var d=Gh(i,c);if(d){var m=Lh(i,c),S=m[1],y=m[2];if(S>y)return!0}c=c.parentNode}while(c&&c!==s.body);return!1},hb=function(i){var r=i.scrollTop,s=i.scrollHeight,c=i.clientHeight;return[r,s,c]},vb=function(i){var r=i.scrollLeft,s=i.scrollWidth,c=i.clientWidth;return[r,s,c]},Gh=function(i,r){return i==="v"?db(r):mb(r)},Lh=function(i,r){return i==="v"?hb(r):vb(r)},yb=function(i,r){return i==="h"&&r==="rtl"?-1:1},gb=function(i,r,s,c,d){var m=yb(i,window.getComputedStyle(r).direction),S=m*c,y=s.target,g=r.contains(y),h=!1,M=S>0,O=0,Y=0;do{if(!y)break;var V=Lh(i,y),P=V[0],w=V[1],Q=V[2],$=w-Q-m*P;(P||$)&&Gh(i,y)&&(O+=$,Y+=P);var Z=y.parentNode;y=Z&&Z.nodeType===Node.DOCUMENT_FRAGMENT_NODE?Z.host:Z}while(!g&&y!==document.body||g&&(r.contains(y)||r===y));return(M&&Math.abs(O)<1||!M&&Math.abs(Y)<1)&&(h=!0),h},Ei=function(i){return"changedTouches"in i?[i.changedTouches[0].clientX,i.changedTouches[0].clientY]:[0,0]},ah=function(i){return[i.deltaX,i.deltaY]},uh=function(i){return i&&"current"in i?i.current:i},pb=function(i,r){return i[0]===r[0]&&i[1]===r[1]},bb=function(i){return`
  .block-interactivity-`.concat(i,` {pointer-events: none;}
  .allow-interactivity-`).concat(i,` {pointer-events: all;}
`)},Sb=0,Fl=[];function xb(i){var r=x.useRef([]),s=x.useRef([0,0]),c=x.useRef(),d=x.useState(Sb++)[0],m=x.useState(Yh)[0],S=x.useRef(i);x.useEffect(function(){S.current=i},[i]),x.useEffect(function(){if(i.inert){document.body.classList.add("block-interactivity-".concat(d));var w=Xp([i.lockRef.current],(i.shards||[]).map(uh),!0).filter(Boolean);return w.forEach(function(Q){return Q.classList.add("allow-interactivity-".concat(d))}),function(){document.body.classList.remove("block-interactivity-".concat(d)),w.forEach(function(Q){return Q.classList.remove("allow-interactivity-".concat(d))})}}},[i.inert,i.lockRef.current,i.shards]);var y=x.useCallback(function(w,Q){if("touches"in w&&w.touches.length===2||w.type==="wheel"&&w.ctrlKey)return!S.current.allowPinchZoom;var $=Ei(w),Z=s.current,F="deltaX"in w?w.deltaX:Z[0]-$[0],tt="deltaY"in w?w.deltaY:Z[1]-$[1],et,ot=w.target,H=Math.abs(F)>Math.abs(tt)?"h":"v";if("touches"in w&&H==="h"&&ot.type==="range")return!1;var L=window.getSelection(),mt=L&&L.anchorNode,gt=mt?mt===ot||mt.contains(ot):!1;if(gt)return!1;var Et=lh(H,ot);if(!Et)return!0;if(Et?et=H:(et=H==="v"?"h":"v",Et=lh(H,ot)),!Et)return!1;if(!c.current&&"changedTouches"in w&&(F||tt)&&(c.current=et),!et)return!0;var Ut=c.current||et;return gb(Ut,Q,w,Ut==="h"?F:tt)},[]),g=x.useCallback(function(w){var Q=w;if(!(!Fl.length||Fl[Fl.length-1]!==m)){var $="deltaY"in Q?ah(Q):Ei(Q),Z=r.current.filter(function(et){return et.name===Q.type&&(et.target===Q.target||Q.target===et.shadowParent)&&pb(et.delta,$)})[0];if(Z&&Z.should){Q.cancelable&&Q.preventDefault();return}if(!Z){var F=(S.current.shards||[]).map(uh).filter(Boolean).filter(function(et){return et.contains(Q.target)}),tt=F.length>0?y(Q,F[0]):!S.current.noIsolation;tt&&Q.cancelable&&Q.preventDefault()}}},[]),h=x.useCallback(function(w,Q,$,Z){var F={name:w,delta:Q,target:$,should:Z,shadowParent:Eb($)};r.current.push(F),setTimeout(function(){r.current=r.current.filter(function(tt){return tt!==F})},1)},[]),M=x.useCallback(function(w){s.current=Ei(w),c.current=void 0},[]),O=x.useCallback(function(w){h(w.type,ah(w),w.target,y(w,i.lockRef.current))},[]),Y=x.useCallback(function(w){h(w.type,Ei(w),w.target,y(w,i.lockRef.current))},[]);x.useEffect(function(){return Fl.push(m),i.setCallbacks({onScrollCapture:O,onWheelCapture:O,onTouchMoveCapture:Y}),document.addEventListener("wheel",g,$l),document.addEventListener("touchmove",g,$l),document.addEventListener("touchstart",M,$l),function(){Fl=Fl.filter(function(w){return w!==m}),document.removeEventListener("wheel",g,$l),document.removeEventListener("touchmove",g,$l),document.removeEventListener("touchstart",M,$l)}},[]);var V=i.removeScrollBar,P=i.inert;return x.createElement(x.Fragment,null,P?x.createElement(m,{styles:bb(d)}):null,V?x.createElement(sb,{noRelative:i.noRelative,gapMode:i.gapMode}):null)}function Eb(i){for(var r=null;i!==null;)i instanceof ShadowRoot&&(r=i.host,i=i.host),i=i.parentNode;return r}const Ab=Fp(Bh,xb);var Xh=x.forwardRef(function(i,r){return x.createElement(Ri,Ge({},i,{ref:r,sideCar:Ab}))});Xh.classNames=Ri.classNames;var Tb=function(i){if(typeof document>"u")return null;var r=Array.isArray(i)?i[0]:i;return r.ownerDocument.body},Il=new WeakMap,Ai=new WeakMap,Ti={},hr=0,Qh=function(i){return i&&(i.host||Qh(i.parentNode))},zb=function(i,r){return r.map(function(s){if(i.contains(s))return s;var c=Qh(s);return c&&i.contains(c)?c:(console.error("aria-hidden",s,"in not contained inside",i,". Doing nothing"),null)}).filter(function(s){return!!s})},Cb=function(i,r,s,c){var d=zb(r,Array.isArray(i)?i:[i]);Ti[s]||(Ti[s]=new WeakMap);var m=Ti[s],S=[],y=new Set,g=new Set(d),h=function(O){!O||y.has(O)||(y.add(O),h(O.parentNode))};d.forEach(h);var M=function(O){!O||g.has(O)||Array.prototype.forEach.call(O.children,function(Y){if(y.has(Y))M(Y);else try{var V=Y.getAttribute(c),P=V!==null&&V!=="false",w=(Il.get(Y)||0)+1,Q=(m.get(Y)||0)+1;Il.set(Y,w),m.set(Y,Q),S.push(Y),w===1&&P&&Ai.set(Y,!0),Q===1&&Y.setAttribute(s,"true"),P||Y.setAttribute(c,"true")}catch($){console.error("aria-hidden: cannot operate on ",Y,$)}})};return M(r),y.clear(),hr++,function(){S.forEach(function(O){var Y=Il.get(O)-1,V=m.get(O)-1;Il.set(O,Y),m.set(O,V),Y||(Ai.has(O)||O.removeAttribute(c),Ai.delete(O)),V||O.removeAttribute(s)}),hr--,hr||(Il=new WeakMap,Il=new WeakMap,Ai=new WeakMap,Ti={})}},Ob=function(i,r,s){s===void 0&&(s="data-aria-hidden");var c=Array.from(Array.isArray(i)?i:[i]),d=Tb(i);return d?(c.push.apply(c,Array.from(d.querySelectorAll("[aria-live], script"))),Cb(c,d,s,"aria-hidden")):function(){return null}};function Db(i){const r=_b(i),s=x.forwardRef((c,d)=>{const{children:m,...S}=c,y=x.Children.toArray(m),g=y.find(Mb);if(g){const h=g.props.children,M=y.map(O=>O===g?x.Children.count(h)>1?x.Children.only(null):x.isValidElement(h)?h.props.children:null:O);return _.jsx(r,{...S,ref:d,children:x.isValidElement(h)?x.cloneElement(h,void 0,M):null})}return _.jsx(r,{...S,ref:d,children:m})});return s.displayName=`${i}.Slot`,s}function _b(i){const r=x.forwardRef((s,c)=>{const{children:d,...m}=s;if(x.isValidElement(d)){const S=jb(d),y=Rb(m,d.props);return d.type!==x.Fragment&&(y.ref=c?Ni(c,S):S),x.cloneElement(d,y)}return x.Children.count(d)>1?x.Children.only(null):null});return r.displayName=`${i}.SlotClone`,r}var Nb=Symbol("radix.slottable");function Mb(i){return x.isValidElement(i)&&typeof i.type=="function"&&"__radixId"in i.type&&i.type.__radixId===Nb}function Rb(i,r){const s={...r};for(const c in r){const d=i[c],m=r[c];/^on[A-Z]/.test(c)?d&&m?s[c]=(...y)=>{const g=m(...y);return d(...y),g}:d&&(s[c]=d):c==="style"?s[c]={...d,...m}:c==="className"&&(s[c]=[d,m].filter(Boolean).join(" "))}return{...i,...s}}function jb(i){let r=Object.getOwnPropertyDescriptor(i.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?i.ref:(r=Object.getOwnPropertyDescriptor(i,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?i.props.ref:i.props.ref||i.ref)}var ji="Dialog",[Vh]=up(ji),[Ub,Ue]=Vh(ji),Zh=i=>{const{__scopeDialog:r,children:s,open:c,defaultOpen:d,onOpenChange:m,modal:S=!0}=i,y=x.useRef(null),g=x.useRef(null),[h,M]=sp({prop:c,defaultProp:d??!1,onChange:m,caller:ji});return _.jsx(Ub,{scope:r,triggerRef:y,contentRef:g,contentId:cr(),titleId:cr(),descriptionId:cr(),open:h,onOpenChange:M,onOpenToggle:x.useCallback(()=>M(O=>!O),[M]),modal:S,children:s})};Zh.displayName=ji;var Kh="DialogTrigger",kh=x.forwardRef((i,r)=>{const{__scopeDialog:s,...c}=i,d=Ue(Kh,s),m=rl(r,d.triggerRef);return _.jsx(cn.button,{type:"button","aria-haspopup":"dialog","aria-expanded":d.open,"aria-controls":d.contentId,"data-state":Tr(d.open),...c,ref:m,onClick:Bn(i.onClick,d.onOpenToggle)})});kh.displayName=Kh;var Er="DialogPortal",[wb,Jh]=Vh(Er,{forceMount:void 0}),Wh=i=>{const{__scopeDialog:r,forceMount:s,children:c,container:d}=i,m=Ue(Er,r);return _.jsx(wb,{scope:r,forceMount:s,children:x.Children.map(c,S=>_.jsx(Mi,{present:s||m.open,children:_.jsx(Uh,{asChild:!0,container:d,children:S})}))})};Wh.displayName=Er;var _i="DialogOverlay",$h=x.forwardRef((i,r)=>{const s=Jh(_i,i.__scopeDialog),{forceMount:c=s.forceMount,...d}=i,m=Ue(_i,i.__scopeDialog);return m.modal?_.jsx(Mi,{present:c||m.open,children:_.jsx(Bb,{...d,ref:r})}):null});$h.displayName=_i;var Hb=Db("DialogOverlay.RemoveScroll"),Bb=x.forwardRef((i,r)=>{const{__scopeDialog:s,...c}=i,d=Ue(_i,s);return _.jsx(Xh,{as:Hb,allowPinchZoom:!0,shards:[d.contentRef],children:_.jsx(cn.div,{"data-state":Tr(d.open),...c,ref:r,style:{pointerEvents:"auto",...c.style}})})}),cl="DialogContent",Fh=x.forwardRef((i,r)=>{const s=Jh(cl,i.__scopeDialog),{forceMount:c=s.forceMount,...d}=i,m=Ue(cl,i.__scopeDialog);return _.jsx(Mi,{present:c||m.open,children:m.modal?_.jsx(Yb,{...d,ref:r}):_.jsx(qb,{...d,ref:r})})});Fh.displayName=cl;var Yb=x.forwardRef((i,r)=>{const s=Ue(cl,i.__scopeDialog),c=x.useRef(null),d=rl(r,s.contentRef,c);return x.useEffect(()=>{const m=c.current;if(m)return Ob(m)},[]),_.jsx(Ih,{...i,ref:d,trapFocus:s.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Bn(i.onCloseAutoFocus,m=>{m.preventDefault(),s.triggerRef.current?.focus()}),onPointerDownOutside:Bn(i.onPointerDownOutside,m=>{const S=m.detail.originalEvent,y=S.button===0&&S.ctrlKey===!0;(S.button===2||y)&&m.preventDefault()}),onFocusOutside:Bn(i.onFocusOutside,m=>m.preventDefault())})}),qb=x.forwardRef((i,r)=>{const s=Ue(cl,i.__scopeDialog),c=x.useRef(!1),d=x.useRef(!1);return _.jsx(Ih,{...i,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:m=>{i.onCloseAutoFocus?.(m),m.defaultPrevented||(c.current||s.triggerRef.current?.focus(),m.preventDefault()),c.current=!1,d.current=!1},onInteractOutside:m=>{i.onInteractOutside?.(m),m.defaultPrevented||(c.current=!0,m.detail.originalEvent.type==="pointerdown"&&(d.current=!0));const S=m.target;s.triggerRef.current?.contains(S)&&m.preventDefault(),m.detail.originalEvent.type==="focusin"&&d.current&&m.preventDefault()}})}),Ih=x.forwardRef((i,r)=>{const{__scopeDialog:s,trapFocus:c,onOpenAutoFocus:d,onCloseAutoFocus:m,...S}=i,y=Ue(cl,s),g=x.useRef(null),h=rl(r,g);return Lp(),_.jsxs(_.Fragment,{children:[_.jsx(Rh,{asChild:!0,loop:!0,trapped:c,onMountAutoFocus:d,onUnmountAutoFocus:m,children:_.jsx(Nh,{role:"dialog",id:y.contentId,"aria-describedby":y.descriptionId,"aria-labelledby":y.titleId,"data-state":Tr(y.open),...S,ref:h,onDismiss:()=>y.onOpenChange(!1)})}),_.jsxs(_.Fragment,{children:[_.jsx(Lb,{titleId:y.titleId}),_.jsx(Qb,{contentRef:g,descriptionId:y.descriptionId})]})]})}),Ar="DialogTitle",Ph=x.forwardRef((i,r)=>{const{__scopeDialog:s,...c}=i,d=Ue(Ar,s);return _.jsx(cn.h2,{id:d.titleId,...c,ref:r})});Ph.displayName=Ar;var tv="DialogDescription",Gb=x.forwardRef((i,r)=>{const{__scopeDialog:s,...c}=i,d=Ue(tv,s);return _.jsx(cn.p,{id:d.descriptionId,...c,ref:r})});Gb.displayName=tv;var ev="DialogClose",nv=x.forwardRef((i,r)=>{const{__scopeDialog:s,...c}=i,d=Ue(ev,s);return _.jsx(cn.button,{type:"button",...c,ref:r,onClick:Bn(i.onClick,()=>d.onOpenChange(!1))})});nv.displayName=ev;function Tr(i){return i?"open":"closed"}var lv="DialogTitleWarning",[m1,av]=ap(lv,{contentName:cl,titleName:Ar,docsSlug:"dialog"}),Lb=({titleId:i})=>{const r=av(lv),s=`\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;return x.useEffect(()=>{i&&(document.getElementById(i)||console.error(s))},[s,i]),null},Xb="DialogDescriptionWarning",Qb=({contentRef:i,descriptionId:r})=>{const c=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${av(Xb).contentName}}.`;return x.useEffect(()=>{const d=i.current?.getAttribute("aria-describedby");r&&d&&(document.getElementById(r)||console.warn(c))},[c,i,r]),null},Vb=Zh,Zb=kh,Kb=Wh,kb=$h,Jb=Fh,Wb=Ph,$b=nv;function Fb({...i}){return _.jsx(Vb,{"code-path":"src/components/ui/dialog.tsx:10:10","data-slot":"dialog",...i})}function Ib({...i}){return _.jsx(Zb,{"code-path":"src/components/ui/dialog.tsx:16:10","data-slot":"dialog-trigger",...i})}function Pb({...i}){return _.jsx(Kb,{"code-path":"src/components/ui/dialog.tsx:22:10","data-slot":"dialog-portal",...i})}function t1({className:i,...r}){return _.jsx(kb,{"code-path":"src/components/ui/dialog.tsx:36:5","data-slot":"dialog-overlay",className:sl("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",i),...r})}function e1({className:i,children:r,showCloseButton:s=!0,...c}){return _.jsxs(Pb,{"code-path":"src/components/ui/dialog.tsx:56:5","data-slot":"dialog-portal",children:[_.jsx(t1,{"code-path":"src/components/ui/dialog.tsx:57:7"}),_.jsxs(Jb,{"code-path":"src/components/ui/dialog.tsx:58:7","data-slot":"dialog-content",className:sl("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",i),...c,children:[r,s&&_.jsxs($b,{"code-path":"src/components/ui/dialog.tsx:68:11","data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[_.jsx(a0,{"code-path":"src/components/ui/dialog.tsx:72:13"}),_.jsx("span",{"code-path":"src/components/ui/dialog.tsx:73:13",className:"sr-only",children:"Close"})]})]})]})}function n1({className:i,...r}){return _.jsx("div",{"code-path":"src/components/ui/dialog.tsx:83:5","data-slot":"dialog-header",className:sl("flex flex-col gap-2 text-center sm:text-left",i),...r})}function l1({className:i,...r}){return _.jsx(Wb,{"code-path":"src/components/ui/dialog.tsx:109:5","data-slot":"dialog-title",className:sl("text-lg leading-none font-semibold",i),...r})}const a1=(i,r)=>new Date(i,r+1,0).getDate(),u1=(i,r)=>new Date(i,r,1).getDay(),i1=(i,r,s)=>`${i}-${String(r+1).padStart(2,"0")}-${String(s).padStart(2,"0")}`,c1=(i,r,s)=>{const c=new Date;return c.getFullYear()===i&&c.getMonth()===r&&c.getDate()===s},o1=(i,r,s,c)=>i.getFullYear()===r&&i.getMonth()===s&&i.getDate()===c;function r1({currentDate:i,onSelectDate:r,hasRecord:s,getDatesInMonth:c}){const[d,m]=x.useState(!1),[S,y]=x.useState(new Date),g=S.getFullYear(),h=S.getMonth(),M=x.useMemo(()=>{const Z=c(g,h);return new Set(Z)},[g,h,c]),O=x.useMemo(()=>{const Z=a1(g,h),F=u1(g,h),tt=[];for(let et=0;et<F;et++)tt.push(null);for(let et=1;et<=Z;et++)tt.push(et);return tt},[g,h]),Y=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],V=["日","一","二","三","四","五","六"],P=()=>{y(new Date(g,h-1,1))},w=()=>{y(new Date(g,h+1,1))},Q=Z=>{const F=new Date(g,h,Z);r(F),m(!1)},$=()=>{const Z=new Date;y(Z),r(Z),m(!1)};return _.jsxs(Fb,{"code-path":"src/components/Calendar.tsx:124:5",open:d,onOpenChange:m,children:[_.jsx(Ib,{"code-path":"src/components/Calendar.tsx:125:7",asChild:!0,children:_.jsxs(ta,{"code-path":"src/components/Calendar.tsx:126:9",variant:"outline",size:"sm",className:"rounded-full border-amber-200 hover:bg-amber-50 hover:border-amber-300 text-amber-700",children:[_.jsx(Wg,{"code-path":"src/components/Calendar.tsx:131:11",className:"w-4 h-4 mr-1"}),"日历"]})}),_.jsxs(e1,{"code-path":"src/components/Calendar.tsx:135:7",className:"sm:max-w-[360px] p-0 overflow-hidden",children:[_.jsx(n1,{"code-path":"src/components/Calendar.tsx:136:9",className:"p-4 pb-2",children:_.jsx(l1,{"code-path":"src/components/Calendar.tsx:137:11",className:"text-center text-lg font-semibold text-gray-800",children:"选择日期"})}),_.jsxs("div",{"code-path":"src/components/Calendar.tsx:142:9",className:"px-4 pb-4",children:[_.jsxs("div",{"code-path":"src/components/Calendar.tsx:144:11",className:"flex items-center justify-between mb-4",children:[_.jsx(ta,{"code-path":"src/components/Calendar.tsx:145:13",variant:"ghost",size:"icon",onClick:P,className:"h-8 w-8 hover:bg-amber-50",children:_.jsx(fh,{"code-path":"src/components/Calendar.tsx:151:15",className:"h-4 w-4"})}),_.jsxs("span",{"code-path":"src/components/Calendar.tsx:153:13",className:"text-base font-medium text-gray-700",children:[g,"年 ",Y[h]]}),_.jsx(ta,{"code-path":"src/components/Calendar.tsx:156:13",variant:"ghost",size:"icon",onClick:w,className:"h-8 w-8 hover:bg-amber-50",children:_.jsx(dh,{"code-path":"src/components/Calendar.tsx:162:15",className:"h-4 w-4"})})]}),_.jsx("div",{"code-path":"src/components/Calendar.tsx:167:11",className:"grid grid-cols-7 gap-1 mb-2",children:V.map(Z=>_.jsx("div",{"code-path":"src/components/Calendar.tsx:169:15",className:"text-center text-xs font-medium text-gray-400 py-1",children:Z},Z))}),_.jsx("div",{"code-path":"src/components/Calendar.tsx:179:11",className:"grid grid-cols-7 gap-1",children:O.map((Z,F)=>{if(Z===null)return _.jsx("div",{"code-path":"src/components/Calendar.tsx:182:24",className:"h-10"},`empty-${F}`);const tt=i1(g,h,Z),et=M.has(tt),ot=c1(g,h,Z),H=o1(i,g,h,Z);return _.jsxs("button",{"code-path":"src/components/Calendar.tsx:191:17",onClick:()=>Q(Z),className:`
                    h-10 w-10 rounded-full text-sm font-medium transition-all duration-200
                    flex items-center justify-center relative mx-auto
                    ${H?"bg-amber-500 text-white shadow-md scale-105 ring-2 ring-amber-300":ot?"bg-amber-100 text-amber-700 border-2 border-amber-400 hover:bg-amber-200":et?"bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200":"text-gray-400 hover:bg-gray-100"}
                  `,children:[Z,et&&!H&&_.jsx("span",{"code-path":"src/components/Calendar.tsx:210:21",className:"absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-500"})]},Z)})}),_.jsx("div",{"code-path":"src/components/Calendar.tsx:218:11",className:"mt-4 pt-3 border-t border-gray-100",children:_.jsx(ta,{"code-path":"src/components/Calendar.tsx:219:13",onClick:$,variant:"outline",className:"w-full rounded-full border-amber-200 hover:bg-amber-50 text-amber-700",children:"回到今天"})}),_.jsxs("div",{"code-path":"src/components/Calendar.tsx:229:11",className:"mt-3 flex items-center justify-center gap-4 text-xs text-gray-500",children:[_.jsxs("div",{"code-path":"src/components/Calendar.tsx:230:13",className:"flex items-center gap-1",children:[_.jsx("span",{"code-path":"src/components/Calendar.tsx:231:15",className:"w-4 h-4 rounded-full bg-amber-500 ring-2 ring-amber-300"}),_.jsx("span",{"code-path":"src/components/Calendar.tsx:232:15",children:"选中"})]}),_.jsxs("div",{"code-path":"src/components/Calendar.tsx:234:13",className:"flex items-center gap-1",children:[_.jsx("span",{"code-path":"src/components/Calendar.tsx:235:15",className:"w-4 h-4 rounded-full bg-amber-100 border-2 border-amber-400"}),_.jsx("span",{"code-path":"src/components/Calendar.tsx:236:15",children:"今天"})]}),_.jsxs("div",{"code-path":"src/components/Calendar.tsx:238:13",className:"flex items-center gap-1",children:[_.jsx("span",{"code-path":"src/components/Calendar.tsx:239:15",className:"w-4 h-4 rounded-full bg-amber-50 border border-amber-200 relative",children:_.jsx("span",{"code-path":"src/components/Calendar.tsx:240:17",className:"absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500"})}),_.jsx("span",{"code-path":"src/components/Calendar.tsx:242:15",children:"有记录"})]})]})]})]})]})}function s1({className:i,...r}){return _.jsx("div",{"code-path":"src/components/ui/card.tsx:7:5","data-slot":"card",className:sl("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",i),...r})}function f1({className:i,...r}){return _.jsx("div",{"code-path":"src/components/ui/card.tsx:66:5","data-slot":"card-content",className:sl("px-6",i),...r})}function d1(){const{currentAdvice:i,currentNumber:r,currentIndex:s,totalPerDay:c,todayAdviceNumbers:d,currentDate:m,isToday:S,canGoPrevious:y,canGoNext:g,goToPrevious:h,goToNext:M,goToAdvice:O,switchToDate:Y,getRecordedDates:V,getDatesInMonth:P,hasRecord:w,isLoading:Q}=Xg(),[$,Z]=x.useState(!1),[F,tt]=x.useState("");x.useEffect(()=>{i&&(Z(!0),setTimeout(()=>{tt(i),Z(!1)},150))},[i]);const et=()=>{y&&(Z(!0),setTimeout(()=>{h()},150))},ot=()=>{g&&(Z(!0),setTimeout(()=>{M()},150))},H=gt=>{gt!==s&&(Z(!0),setTimeout(()=>{O(gt)},150))},L=gt=>{const Et=new Date;if(gt.toDateString()===Et.toDateString())return"今天";const Se=gt.getFullYear(),ee=gt.getMonth()+1,qt=gt.getDate(),G=["周日","周一","周二","周三","周四","周五","周六"][gt.getDay()];return`${Se}年${ee}月${qt}日 ${G}`};if(Q)return _.jsx("div",{"code-path":"src/App.tsx:93:7",className:"min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center",children:_.jsxs("div",{"code-path":"src/App.tsx:94:9",className:"flex flex-col items-center gap-4",children:[_.jsx(e0,{"code-path":"src/App.tsx:95:11",className:"w-8 h-8 animate-spin text-amber-600"}),_.jsx("p",{"code-path":"src/App.tsx:96:11",className:"text-amber-700 text-sm",children:"加载中..."})]})});const mt=V().length;return _.jsx("div",{"code-path":"src/App.tsx:105:5",className:"min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4 sm:p-6 lg:p-8",children:_.jsxs("div",{"code-path":"src/App.tsx:106:7",className:"max-w-2xl mx-auto",children:[_.jsxs("header",{"code-path":"src/App.tsx:108:9",className:"text-center mb-6 pt-4",children:[_.jsxs("div",{"code-path":"src/App.tsx:109:11",className:"inline-flex items-center gap-2 mb-2",children:[_.jsx(qm,{"code-path":"src/App.tsx:110:13",className:"w-5 h-5 text-amber-500"}),_.jsx("span",{"code-path":"src/App.tsx:111:13",className:"text-amber-600 text-sm font-medium tracking-wider uppercase",children:"Daily Wisdom"}),_.jsx(qm,{"code-path":"src/App.tsx:112:13",className:"w-5 h-5 text-amber-500"})]}),_.jsx("h1",{"code-path":"src/App.tsx:114:11",className:"text-3xl sm:text-4xl font-bold text-gray-800 mb-2",children:"宝贵的人生建议"}),_.jsx("p",{"code-path":"src/App.tsx:117:11",className:"text-gray-500 text-sm",children:"凯文·凯利 · 500条人生智慧"})]}),_.jsxs("div",{"code-path":"src/App.tsx:121:9",className:"flex items-center justify-between mb-6 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2",children:[_.jsxs("div",{"code-path":"src/App.tsx:122:11",className:"flex items-center gap-2",children:[_.jsx(Fg,{"code-path":"src/App.tsx:123:13",className:"w-4 h-4 text-amber-500"}),_.jsxs("span",{"code-path":"src/App.tsx:124:13",className:`text-sm font-medium ${S?"text-amber-600":"text-gray-600"}`,children:[L(m),S&&_.jsx("span",{"code-path":"src/App.tsx:126:27",className:"ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full",children:"今日"})]})]}),_.jsx(r1,{"code-path":"src/App.tsx:129:11",currentDate:m,onSelectDate:Y,hasRecord:w,getDatesInMonth:P})]}),_.jsx("div",{"code-path":"src/App.tsx:138:9",className:"flex justify-center gap-2 mb-6",children:Array.from({length:c},(gt,Et)=>_.jsx("button",{"code-path":"src/App.tsx:140:13",onClick:()=>H(Et),className:`h-2 rounded-full transition-all duration-300 ${Et===s?"bg-amber-500 w-8":"bg-gray-300 w-4 hover:bg-amber-300"}`},Et))}),_.jsx(s1,{"code-path":"src/App.tsx:153:9",className:"bg-white/80 backdrop-blur-sm shadow-xl border-0 rounded-2xl overflow-hidden",children:_.jsxs(f1,{"code-path":"src/App.tsx:154:11",className:"p-6 sm:p-10",children:[_.jsxs("div",{"code-path":"src/App.tsx:156:13",className:"flex justify-between items-center mb-6",children:[_.jsx("span",{"code-path":"src/App.tsx:157:15",className:"inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white font-bold text-lg shadow-lg",children:r}),_.jsxs("span",{"code-path":"src/App.tsx:160:15",className:"text-gray-400 text-sm",children:[s+1," / ",c]})]}),_.jsx("div",{"code-path":"src/App.tsx:166:13",className:`min-h-[200px] flex items-center justify-center transition-all duration-300 ${$?"opacity-0 transform translate-y-2":"opacity-100 transform translate-y-0"}`,children:_.jsx("p",{"code-path":"src/App.tsx:171:15",className:"text-xl sm:text-2xl leading-relaxed text-gray-700 whitespace-pre-line text-center font-medium",children:F})}),_.jsxs("div",{"code-path":"src/App.tsx:177:13",className:"flex justify-between items-center mt-8 pt-6 border-t border-gray-100",children:[_.jsxs(ta,{"code-path":"src/App.tsx:178:15",variant:"outline",size:"lg",onClick:et,disabled:!y,className:`rounded-full px-6 transition-all duration-300 ${y?"hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700":"opacity-30 cursor-not-allowed"}`,children:[_.jsx(fh,{"code-path":"src/App.tsx:189:17",className:"w-5 h-5 mr-1"}),"上一条"]}),_.jsxs(ta,{"code-path":"src/App.tsx:193:15",variant:"outline",size:"lg",onClick:ot,disabled:!g,className:`rounded-full px-6 transition-all duration-300 ${g?"hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700":"opacity-30 cursor-not-allowed"}`,children:["下一条",_.jsx(dh,{"code-path":"src/App.tsx:205:17",className:"w-5 h-5 ml-1"})]})]})]})}),_.jsxs("div",{"code-path":"src/App.tsx:212:9",className:"mt-8",children:[_.jsx("p",{"code-path":"src/App.tsx:213:11",className:"text-center text-gray-500 text-sm mb-4",children:S?"今日三条建议":"该日三条建议"}),_.jsx("div",{"code-path":"src/App.tsx:216:11",className:"flex justify-center gap-3",children:d.map((gt,Et)=>_.jsx("button",{"code-path":"src/App.tsx:218:15",onClick:()=>H(Et),className:`
                  w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium 
                  transition-all duration-300
                  ${Et===s?"bg-amber-500 text-white shadow-lg scale-110 ring-2 ring-amber-300":"bg-white text-gray-500 shadow hover:bg-amber-50 hover:text-amber-600"}
                `,children:gt},Et))})]}),_.jsxs("div",{"code-path":"src/App.tsx:237:9",className:"mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center",children:[_.jsx("p",{"code-path":"src/App.tsx:238:11",className:"text-gray-500 text-xs mb-1",children:"已记录天数"}),_.jsxs("p",{"code-path":"src/App.tsx:239:11",className:"text-3xl font-bold text-amber-600",children:[mt,_.jsx("span",{"code-path":"src/App.tsx:241:13",className:"text-sm font-normal text-gray-400 ml-1",children:"天"})]})]}),_.jsx("footer",{"code-path":"src/App.tsx:246:9",className:"mt-8 text-center",children:_.jsxs("p",{"code-path":"src/App.tsx:247:11",className:"text-gray-400 text-xs leading-relaxed",children:["每天随机展示3条建议 · 点击日历可查看历史记录",_.jsx("br",{"code-path":"src/App.tsx:249:13"}),"轮播完成后才会出现新的组合"]})})]})})}Yg.createRoot(document.getElementById("root")).render(_.jsx(x.StrictMode,{"code-path":"src/main.tsx:7:3",children:_.jsx(d1,{"code-path":"src/main.tsx:8:5"})}));
