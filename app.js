!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=65)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(36))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(4),o=e(9),i=e(6);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(15),o=e(17);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(4),o=e(18),i=e(19),c=e(8),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(5);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(26),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(0),o=e(22),i=e(2),c=e(23),a=e(31),s=e(57),u=o("wks"),f=r.Symbol,l=s?f:f&&f.withoutSetter||c;t.exports=function(t){return i(u,t)||(a&&i(f,t)?u[t]=f[t]:u[t]=l("Symbol."+t)),u[t]}},function(t,n,e){var r=e(0),o=e(14).f,i=e(5),c=e(39),a=e(10),s=e(44),u=e(53);t.exports=function(t,n){var e,f,l,p,d,v=t.target,h=t.global,y=t.stat;if(e=h?r:y?r[v]||a(v,{}):(r[v]||{}).prototype)for(f in n){if(p=n[f],l=t.noTargetGet?(d=o(e,f))&&d.value:e[f],!u(h?f:v+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;s(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,f,p,t)}}},function(t,n,e){var r=e(4),o=e(37),i=e(6),c=e(7),a=e(8),s=e(2),u=e(18),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=c(t),n=a(n,!0),u)try{return f(t,n)}catch(t){}if(s(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(1),o=e(16),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(4),o=e(1),i=e(38);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(21),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(0),o=e(10),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(43),o=e(21);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){var r=e(46),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){"use strict";var r=e(54).forEach,o=e(58),i=e(59),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){var r=e(17);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(3),o=e(30),i=e(12)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(16);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){"use strict";var r=e(13),o=e(1),i=e(30),c=e(3),a=e(28),s=e(11),u=e(62),f=e(29),l=e(63),p=e(12),d=e(33),v=p("isConcatSpreadable"),h=d>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),y=l("concat"),g=function(t){if(!c(t))return!1;var n=t[v];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!h||!y},{concat:function(t){var n,e,r,o,i,c=a(this),l=f(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(g(i=-1===n?c:arguments[n])){if(p+(o=s(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&u(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(l,p++,i)}return l.length=p,l}})},function(t,n,e){var r,o,i=e(0),c=e(64),a=i.process,s=a&&a.versions,u=s&&s.v8;u?o=(r=u.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){},function(t,n,e){"use strict";var r=e(13),o=e(27);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(5),i=e(2),c=e(10),a=e(20),s=e(40),u=s.get,f=s.enforce,l=String(String).split("String");(t.exports=function(t,n,e,a){var s=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),f(e).source=l.join("string"==typeof n?n:"")),t!==r?(s?!p&&t[n]&&(u=!0):delete t[n],u?t[n]=e:o(t,n,e)):u?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},function(t,n,e){var r,o,i,c=e(41),a=e(0),s=e(3),u=e(5),f=e(2),l=e(42),p=e(24),d=a.WeakMap;if(c){var v=new d,h=v.get,y=v.has,g=v.set;r=function(t,n){return g.call(v,t,n),n},o=function(t){return h.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var b=l("state");p[b]=!0,r=function(t,n){return u(t,b,n),n},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!s(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(20),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(22),o=e(23),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(2),o=e(45),i=e(14),c=e(9);t.exports=function(t,n){for(var e=o(n),a=c.f,s=i.f,u=0;u<e.length;u++){var f=e[u];r(t,f)||a(t,f,s(n,f))}}},function(t,n,e){var r=e(25),o=e(47),i=e(52),c=e(19);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(48),o=e(51).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(2),o=e(7),i=e(49).indexOf,c=e(24);t.exports=function(t,n){var e,a=o(t),s=0,u=[];for(e in a)!r(c,e)&&r(a,e)&&u.push(e);for(;n.length>s;)r(a,e=n[s++])&&(~i(u,e)||u.push(e));return u}},function(t,n,e){var r=e(7),o=e(11),i=e(50),c=function(t){return function(n,e,c){var a,s=r(n),u=o(s.length),f=i(c,u);if(t&&e!=e){for(;u>f;)if((a=s[f++])!=a)return!0}else for(;u>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(26),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=a[c(t)];return e==u||e!=s&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},s=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(55),o=e(15),i=e(28),c=e(11),a=e(29),s=[].push,u=function(t){var n=1==t,e=2==t,u=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,v,h,y){for(var g,b,m=i(d),w=o(m),S=r(v,h,3),x=c(w.length),L=0,O=y||a,E=n?O(d,x):e?O(d,0):void 0;x>L;L++)if((p||L in w)&&(b=S(g=w[L],L,m),t))if(n)E[L]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return L;case 2:s.call(E,g)}else if(f)return!1;return l?-1:u||f?f:E}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},function(t,n,e){var r=e(56);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(31);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){"use strict";var r=e(1);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(4),o=e(1),i=e(2),c=Object.defineProperty,a={},s=function(t){throw t};t.exports=function(t,n){if(i(a,t))return a[t];n||(n={});var e=[][t],u=!!i(n,"ACCESSORS")&&n.ACCESSORS,f=i(n,0)?n[0]:s,l=i(n,1)?n[1]:void 0;return a[t]=!!e&&!o((function(){if(u&&!r)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:s}):t[1]=1,e.call(t,f,l)}))}},function(t,n,e){var r=e(0),o=e(61),i=e(27),c=e(5);for(var a in o){var s=r[a],u=s&&s.prototype;if(u&&u.forEach!==i)try{c(u,"forEach",i)}catch(t){u.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){"use strict";var r=e(8),o=e(9),i=e(6);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){var r=e(1),o=e(12),i=e(33),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r=e(25);t.exports=r("navigator","userAgent")||""},function(t,n,e){"use strict";e.r(n);e(34),e(35),e(60),e(32);function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=n}var n,e,o;return n=t,o=[{key:"showLog",value:function(t){var n=document.querySelector(".worklog"),e=document.createElement("div");e.classList.add("inst"),e.innerHTML='\n        <div class="date">'.concat(t.date,'</div>\n        <div class="id">Server: ').concat(t.id,'</div>\n        <div class="info">INFO: ').concat(t.info,"</div>\n      "),n.appendChild(e),document.querySelectorAll(".wrapper")[1].scrollTop=9999}}],(e=[{key:"showWidget",value:function(){var t=document.createElement("div");t.classList.add("wrapper"),t.innerHTML='\n        <h2 class="header">Worklog:</h2>\n        <div class="list worklog"></div>\n     ',this.container.appendChild(t)}}])&&r(n.prototype,e),o&&r(n,o),t}();function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(n,e,r,o,i){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=n,this.createInst=e,this.stopInst=r,this.startInst=o,this.deleteInst=i}var n,e,r;return n=t,r=[{key:"showInst",value:function(t){var n=document.querySelector(".instance");n.classList.add("list");var e,r=document.createElement("div");r.classList.add("inst"),e="running"===t.state?"&#9658":"&#9616;&nbsp;&#9612;",r.innerHTML='\n            <div class="id">'.concat(t.id,'</div>\n            <div class="status">\n                Status: \n                <div class="icon-').concat(t.state,'"></div>\n                ').concat(t.state,'\n            </div>\n            <div class="actions" id="').concat(t.id,'">\n                  Actions:\n                  <div class="action-').concat(t.state,'">').concat(e,'</div>\n                  <div class="action-delete">&#10006</div>\n            </div>\n      '),n.appendChild(r),document.querySelector(".wrapper").scrollTop=9999}},{key:"clearServers",value:function(){for(var t=document.querySelector(".instance");t.firstChild;)t.removeChild(t.firstChild)}}],(e=[{key:"showWidget",value:function(){var t=this,n=document.createElement("div");n.classList.add("wrapper"),n.innerHTML='\n        <h2 class="header">Your micro instances</h2>\n        <div class="list instance"></div>\n        <div class="footer">Create new instance</div>  \n     ',this.container.appendChild(n),document.querySelector("#root").addEventListener("click",(function(n){n.target.classList.contains("footer")?t.createInst():n.target.classList.contains("action-delete")?t.deleteInst(n.target.closest(".actions").id):n.target.classList.contains("action-running")?t.stopInst(n.target.closest(".actions").id):n.target.classList.contains("action-stopped")&&t.startInst(n.target.closest(".actions").id)}))}}])&&i(n.prototype,e),r&&i(n,r),t}();function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.ws=new WebSocket(n),this.listInst=[],this.listLog=[],this.ws.addEventListener("open",(function(){console.log("connected")})),this.ws.addEventListener("message",(function(t){var n=JSON.parse(t.data);"received"===n.type?(console.log(n),o.showLog(n.data)):(console.log(n),o.showLog(n.data),c.clearServers(),n.data.instances.forEach((function(t){c.showInst(t)})))})),this.ws.addEventListener("close",(function(t){console.log("connection closed",t)})),this.ws.addEventListener("error",(function(){console.log("error")}))}var n,e,r;return n=t,(e=[{key:"create",value:function(){this.ws.send(JSON.stringify({type:"create"}))}},{key:"delete",value:function(t){this.ws.send(JSON.stringify({type:"delete",data:{id:t}}))}},{key:"start",value:function(t){this.ws.send(JSON.stringify({type:"start",data:{id:t}}))}},{key:"stop",value:function(t){this.ws.send(JSON.stringify({type:"stop",data:{id:t}}))}}])&&a(n.prototype,e),r&&a(n,r),t}();function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(new(function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=document.getElementById("root"),this.api=new s("wss://ws-third-backend-ajsb.herokuapp.com/ws"),this.createInst=this.createInst.bind(this),this.stopInst=this.stopInst.bind(this),this.startInst=this.startInst.bind(this),this.deleteInst=this.deleteInst.bind(this)}var n,e,r;return n=t,(e=[{key:"start",value:function(){var t=new c(this.container,this.createInst,this.stopInst,this.startInst,this.deleteInst),n=new o(this.container);t.showWidget(),n.showWidget()}},{key:"createInst",value:function(){this.api.create()}},{key:"stopInst",value:function(t){this.api.stop(t)}},{key:"startInst",value:function(t){this.api.start(t)}},{key:"deleteInst",value:function(t){this.api.delete(t)}}])&&u(n.prototype,e),r&&u(n,r),t}())).start()}]);