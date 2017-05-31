// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"	"===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){A[b]=!1,ba()},d.onload=function(){A[b]=1===d.width,ba()},d.src=c,"pending"}function f(){M=!1,P=a.devicePixelRatio,N={},O={},s.DPR=P||1,Q.width=Math.max(a.innerWidth||0,z.clientWidth),Q.height=Math.max(a.innerHeight||0,z.clientHeight),Q.vw=Q.width/100,Q.vh=Q.height/100,r=[Q.height,Q.width,P].join("-"),Q.em=s.getEmValue(),Q.rem=Q.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===B.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||aa(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),X.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):Y.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):X.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(T),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(U),m>=l)return n;g=c(V),h=[],","===g.slice(-1)?(g=g.replace(W,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=!1,u=function(){},v=b.createElement("img"),w=v.getAttribute,x=v.setAttribute,y=v.removeAttribute,z=b.documentElement,A={},B={algorithm:""},C="data-pfsrc",D=C+"set",E=navigator.userAgent,F=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,G="currentSrc",H=/\s+\+?\d+(e\d+)?w/,I=/(\([^)]+\))?\s*(.+)/,J=a.picturefillCFG,K="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",L="font-size:100%!important;",M=!0,N={},O={},P=a.devicePixelRatio,Q={px:1,"in":96},R=b.createElement("a"),S=!1,T=/^[ \t\n\r\u000c]+/,U=/^[, \t\n\r\u000c]+/,V=/^[^ \t\n\r\u000c]+/,W=/[,]+$/,X=/^\d+$/,Y=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Z=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},$=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},_=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=$(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in N))if(N[b]=!1,d&&(e=b.match(a)))N[b]=e[1]*Q[e[2]];else try{N[b]=new Function("e",c(b))(Q)}catch(f){}return N[b]}}(),aa=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},ba=function(a){if(t){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),S=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}}};o=a.console&&console.warn?function(a){console.warn(a)}:u,G in v||(G="src"),A["image/jpeg"]=!0,A["image/gif"]=!0,A["image/png"]=!0,A["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in v,s.supSizes="sizes"in v,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){v.srcset="data:,a",a.src="data:,a",s.supSrcset=v.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.supSrcset&&!s.supSizes?!function(){var a="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",c="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",d=b.createElement("img"),e=function(){var a=d.width;2===a&&(s.supSizes=!0),q=s.supSrcset&&!s.supSizes,t=!0,setTimeout(ba)};d.onload=e,d.onerror=e,d.setAttribute("sizes","9px"),d.srcset=c+" 1w,"+a+" 9w",d.src=c}():t=!0,s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=B,s.DPR=P||1,s.u=Q,s.types=A,s.setSize=u,s.makeUrl=$(function(a){return R.href=a,R.href}),s.qsa=function(a,b){return"querySelector"in a?a.querySelectorAll(b):[]},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?_(a):!0},s.calcLength=function(a){var b=_(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?A[a]:!0},s.parseSize=$(function(a){var b=(a||"").match(I);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=z.style.cssText,e=a.style.cssText;c.style.cssText=K,z.style.cssText=L,a.style.cssText=L,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),z.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in O)||B.uT){var b=s.calcLength(n(a));O[a]=b?b:Q.width}return O[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)aa(b[c],a.sizes)}return b},s.setRes.res=aa,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[G],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=F&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=w.call(a,"src"),j.src?x.call(a,C,j.src):y.call(a,C)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=w.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:w.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&H.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g&&!s.supSizes),h&&s.supSrcset&&!j.supported&&(e?(x.call(a,D,e),a.srcset=""):y.call(a,D)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!S||M||P!==a.devicePixelRatio)&&f()},s.supPicture?(ba=u,s.fillImg=u):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=z.clientHeight,i=function(){M=Math.max(a.innerWidth||0,z.clientWidth)!==Q.width||z.clientHeight!==h,h=z.clientHeight,M&&s.fillImgs()};Z(a,"resize",g(i,99)),Z(b,"readystatechange",e)}(),s.picturefill=ba,s.fillImgs=ba,s.teardownRun=u,ba._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(B[b]=a[0],S&&s.fillImgs({reselect:!0}))}};for(;J&&J.length;)a.picturefillCFG.push(J.shift());a.picturefill=ba,"object"==typeof module&&"object"==typeof module.exports?module.exports=ba:"function"==typeof define&&define.amd&&define("picturefill",function(){return ba}),s.supPicture||(A["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);

!function(a){"use strict";var b,c=0,d=function(){window.picturefill&&a(window.picturefill),(window.picturefill||c>9999)&&clearInterval(b),c++};b=setInterval(d,8),d()}(function(a){"use strict";var b=window.document,c=window.Element,d=window.MutationObserver,e=function(){},f={disconnect:e,take:e,observe:e,start:e,stop:e,connected:!1},g=/^loade|^c|^i/.test(b.readyState||""),h=a._;if(h.mutationSupport=!1,h.observer=f,Object.keys&&window.HTMLSourceElement&&b.addEventListener){var i,j,k,l,m={src:1,srcset:1,sizes:1,media:1},n=Object.keys(m),o={attributes:!0,childList:!0,subtree:!0,attributeFilter:n},p=c&&c.prototype,q={},r=function(a,b){q[a]=h[a],h[a]=b};p&&!p.matches&&(p.matches=p.matchesSelector||p.mozMatchesSelector||p.webkitMatchesSelector||p.msMatchesSelector),p&&p.matches&&(i=function(a,b){return a.matches(b)},h.mutationSupport=!(!Object.create||!Object.defineProperties)),h.mutationSupport&&(f.observe=function(){k&&(f.connected=!0,j&&j.observe(b.documentElement,o))},f.disconnect=function(){f.connected=!1,j&&j.disconnect()},f.take=function(){j?h.onMutations(j.takeRecords()):l&&l.take()},f.start=function(){k=!0,f.observe()},f.stop=function(){k=!1,f.disconnect()},r("setupRun",function(){return f.disconnect(),q.setupRun.apply(this,arguments)}),r("teardownRun",function(){var a=q.setupRun.apply(this,arguments);return f.observe(),a}),r("setSrc",function(){var a,b=f.connected;return f.disconnect(),a=q.setSrc.apply(this,arguments),b&&f.observe(),a}),h.onMutations=function(a){var b,c,d=[];for(b=0,c=a.length;c>b;b++)g&&"childList"===a[b].type?h.onSubtreeChange(a[b],d):"attributes"===a[b].type&&h.onAttrChange(a[b],d);d.length&&h.fillImgs({elements:d,reevaluate:!0})},h.onSubtreeChange=function(a,b){h.findAddedMutations(a.addedNodes,b),h.findRemovedMutations(a.removedNodes,a.target,b)},h.findAddedMutations=function(a,b){var c,d,e,f;for(c=0,d=a.length;d>c;c++)e=a[c],1===e.nodeType&&(f=e.nodeName.toUpperCase(),"PICTURE"===f?h.addToElements(e.getElementsByTagName("img")[0],b):"IMG"===f&&i(e,h.selShort)?h.addToElements(e,b):"SOURCE"===f?h.addImgForSource(e,e.parentNode,b):h.addToElements(h.qsa(e,h.selShort),b))},h.findRemovedMutations=function(a,b,c){var d,e,f;for(d=0,e=a.length;e>d;d++)f=a[d],1===f.nodeType&&"SOURCE"===f.nodeName.toUpperCase()&&h.addImgForSource(f,b,c)},h.addImgForSource=function(a,b,c){b&&"PICTURE"!==(b.nodeName||"").toUpperCase()&&(b=b.parentNode,b&&"PICTURE"===(b.nodeName||"").toUpperCase()||(b=null)),b&&h.addToElements(b.getElementsByTagName("img")[0],c)},h.addToElements=function(a,b){var c,d;if(a)if("length"in a&&!a.nodeType)for(c=0,d=a.length;d>c;c++)h.addToElements(a[c],b);else a.parentNode&&-1===b.indexOf(a)&&b.push(a)},h.onAttrChange=function(a,b){var c,d=a.target[h.ns];d||"srcset"!==a.attributeName||"IMG"!==(c=a.target.nodeName.toUpperCase())?d&&(c||(c=a.target.nodeName.toUpperCase()),"IMG"===c?(a.attributeName in d&&(d[a.attributeName]=void 0),h.addToElements(a.target,b)):"SOURCE"===c&&h.addImgForSource(a.target,a.target.parentNode,b)):h.addToElements(a.target,b)},h.supPicture||(d&&!h.testMutationEvents?j=new d(h.onMutations):(l=function(){var a=!1,b=[],c=window.setImmediate||window.setTimeout;return function(d){a||(a=!0,l.take||(l.take=function(){b.length&&(h.onMutations(b),b=[]),a=!1}),c(l.take)),b.push(d)}}(),b.documentElement.addEventListener("DOMNodeInserted",function(a){f.connected&&g&&l({type:"childList",addedNodes:[a.target],removedNodes:[]})},!0),b.documentElement.addEventListener("DOMNodeRemoved",function(a){f.connected&&g&&"SOURCE"===(a.target||{}).nodeName&&l({type:"childList",addedNodes:[],removedNodes:[a.target],target:a.target.parentNode})},!0),b.documentElement.addEventListener("DOMAttrModified",function(a){f.connected&&m[a.attrName]&&l({type:"attributes",target:a.target,attributeName:a.attrName})},!0)),window.HTMLImageElement&&Object.defineProperties&&!function(){var a=b.createElement("img"),c=[],d=a.getAttribute,e=a.setAttribute,f={src:1};h.supSrcset&&!h.supSizes&&(f.srcset=1),Object.defineProperties(HTMLImageElement.prototype,{getAttribute:{value:function(a){var b;return f[a]&&(b=this[h.ns])&&void 0!==b[a]?b[a]:d.apply(this,arguments)},writeable:!0,enumerable:!0,configurable:!0}}),h.supSrcset||c.push("srcset"),h.supSizes||c.push("sizes"),c.forEach(function(a){Object.defineProperty(HTMLImageElement.prototype,a,{set:function(b){e.call(this,a,b)},get:function(){return d.call(this,a)||""},enumerable:!0,configurable:!0})}),"currentSrc"in a||!function(){var a,c=function(a,b){null==b&&(b=a.src||""),Object.defineProperty(a,"pfCurrentSrc",{value:b,writable:!0})},d=c;h.supSrcset&&window.devicePixelRatio&&(a=function(a,b){var c=a.d||a.w||a.res,d=b.d||b.w||b.res;return c-d},c=function(b){var c,e,f,g,i=b[h.ns];if(i&&i.supported&&i.srcset&&i.sets&&(e=h.parseSet(i.sets[0]))&&e.sort){for(e.sort(a),f=e.length,g=e[f-1],c=0;f>c;c++)if(e[c].d>=window.devicePixelRatio){g=e[c];break}g&&(g=h.makeUrl(g.url))}d(b,g)}),b.addEventListener("load",function(a){"IMG"===a.target.nodeName.toUpperCase()&&c(a.target)},!0),Object.defineProperty(HTMLImageElement.prototype,"currentSrc",{set:function(){window.console&&console.warn&&console.warn("currentSrc can't be set on img element")},get:function(){return this.complete&&c(this),this.src||this.srcset?this.pfCurrentSrc||"":""},enumerable:!0,configurable:!0})}(),!window.HTMLSourceElement||"srcset"in b.createElement("source")||["srcset","sizes"].forEach(function(a){Object.defineProperty(window.HTMLSourceElement.prototype,a,{set:function(b){this.setAttribute(a,b)},get:function(){return this.getAttribute(a)||""},enumerable:!0,configurable:!0})})}(),f.start()),g||b.addEventListener("DOMContentLoaded",function(){g=!0}))}});

(function($) {
	$.fn.connections = function(options) {
		if (options === 'update') {
			return processConnections(update, this);
		} else if (options === 'remove') {
			return processConnections(destroy, this);
		} else {
			options = $.extend(true, {
				borderClasses: {},
				'class': 'connection',
				css: {},
				from: this,
				tag: 'connection',
				to: this,
				within: ':root'
			}, options);
			connect(options);
			return this;
		}
	};

	$.event.special.connections = {
		teardown: function(namespaces) {
			processConnections(destroy, $(this));
		}
	}

	var connect = function(options) {
		var borderClasses = options.borderClasses;
		var tag = options.tag;
		var end1 = $(options.from);
		var end2 = $(options.to);
		var within = $(options.within);
		delete options.borderClasses;
		delete options.tag;
		delete options.from;
		delete options.to;
		delete options.within;
		within.each(function() {
			var container = this;
			var done = new Array();
			end1.each(function() {
				var node = this;
				done.push(this);
				end2.not(done).each(function() {
					createConnection(container, [node, this], tag, borderClasses, options);
				});
			});
		});
	};

	var createConnection = function(container, nodes, tag, borderClasses, options) {
		var css = $.extend({ position: 'absolute' }, options.css);
		var connection = $('<' + tag + '/>', options).css(css);
		connection.appendTo(container);

		var border_w = (connection.outerWidth() - connection.innerWidth()) / 2;
		var border_h = (connection.outerHeight() - connection.innerHeight()) / 2;

		if (border_w <= 0 && border_h <= 0) {
			border_w = border_h = 1;
		}

		var data = {
			borderClasses: borderClasses,
			border_h: border_h,
			border_w: border_w,
			node_from: $(nodes[0]),
			node_to: $(nodes[1]),
			nodes_dom: nodes,
			css: css
		}

		if ('none' === connection.css('border-top-style')) {
			data.css.borderStyle = 'solid';
		}
		$.data(connection.get(0), 'connection', data);
		$.data(connection.get(0), 'connections', [connection.get(0)]);
		for (var i = 0; i < 2; i++) {
			var connections = connection.add($.data(nodes[i], 'connections')).get();
			$.data(nodes[i], 'connections', connections);
			if (connections.length == 1) {
				$(nodes[i]).on('connections.connections', false);
			}
		}
		update(connection.get(0));
	};

	var destroy = function(connection) {
		var nodes = $.data(connection, 'connection').nodes_dom;
		for (var i = 0; i < 2; i++) {
			var connections = $($.data(nodes[i], 'connections')).not(connection).get();
			$.data(nodes[i], 'connections', connections);
		}
		$(connection).remove();
	};

	var getState = function(data) {
		data.rect_from = data.nodes_dom[0].getBoundingClientRect();
		data.rect_to = data.nodes_dom[1].getBoundingClientRect();
		var cached = data.cache;
		data.cache = [
			data.rect_from.top, data.rect_from.right, data.rect_from.bottom, data.rect_from.left,
			data.rect_to.top, data.rect_to.right, data.rect_to.bottom, data.rect_to.left
		];
		data.hidden = (0 === (data.cache[0] | data.cache[1] | data.cache[2] | data.cache[3])) ||
					(0 === (data.cache[4] | data.cache[5] | data.cache[6] | data.cache[7]));
		data.unmodified = true;
		if (cached === undefined) {
			return data.unmodified = false;
		}
		for (var i = 0; i < 8; i++) {
			if (cached[i] !== data.cache[i]) {
				return data.unmodified = false;
			}
		}
	}

	var update = function(connection) {
		var data = $.data(connection, 'connection');
		getState(data);
		if (data.unmodified) {
			return;
		}
		var border_h = data.border_h;
		var border_w = data.border_w;
		var from_node = data.node_from;
		var to_node = data.node_to;
		var from = data.rect_from;
		var to = data.rect_to;
		var b = (from.bottom + from.top) / 2;
		var r = (to.left + to.right) / 2;
		var t = (to.bottom + to.top) / 2;
		var l = (from.left + from.right) / 2;

		var h = ['right', 'left'];
		if (l > r) {
			h = h.reverse();
			var x = Math.max(r - border_w / 2, Math.min(from.right, to.right));
			r = l + border_w / 2;
			l = x;
		} else {
			l -= border_w / 2;
			r = Math.min(r + border_w / 2, Math.max(from.left, to.left));
		}
		var v = ['bottom', 'top'];
		if (t > b) {
			v = v.reverse();
			var x = Math.max(b - border_h / 2, Math.min(from.bottom, to.bottom));
			b = t + border_h / 2;
			t = x;
		} else {
			b = Math.min(b, Math.max(from.top, to.top));
			t -= border_h / 2;
		}
		var width = r - l;
		var height = b - t;
		if (width < border_w) {
			t = Math.max(t, Math.min(from.bottom, to.bottom));
			b = Math.min(b, Math.max(from.top, to.top));
			l = Math.max(from.left, to.left);
			r = Math.min(from.right, to.right);
			r = l = (l + r - border_w) / 2;
		}
		if (height < border_h) {
			l = Math.max(l, Math.min(from.right, to.right));
			r = Math.min(r, Math.max(from.left, to.left));
			t = Math.max(from.top, to.top);
			b = Math.min(from.bottom, to.bottom);
			b = t = (t + b - border_h) / 2;
		}
		width = r - l;
		height = b - t;
		width <= 0 && (border_h = 0);
		height <= 0 && (border_w = 0);
		var style =
				'border-' + v[0] + '-' + h[0] + '-radius: 0;' +
				'border-' + v[0] + '-' + h[1] + '-radius: 0;' +
				'border-' + v[1] + '-' + h[0] + '-radius: 0;';
		(border_h <= 0 || border_w <= 0) && (style += 'border-' + v[1] + '-' + h[1] + '-radius: 0;');
		if (data.hidden) {
			style += 'display: none;';
		} else {
			data.css['border-' + v[0] + '-width'] = 0;
			data.css['border-' + h[0] + '-width'] = 0;
			data.css['border-' + v[1] + '-width'] = border_h;
			data.css['border-' + h[1] + '-width'] = border_w;
			var current_rect = connection.getBoundingClientRect();
			data.css.left = connection.offsetLeft + l - current_rect.left;
			data.css.top = connection.offsetTop + t - current_rect.top;
			data.css.width = width - border_w;
			data.css.height = height - border_h;
		}
		var bc = data.borderClasses;
		$(connection).
				removeClass(bc[v[0]]).removeClass(bc[h[0]]).
				addClass(bc[v[1]]).addClass(bc[h[1]]).
				attr('style', style).
				css(data.css);
	}

	var processConnections = function(method, elements) {
		return elements.each(function() {
			var connections = $.data(this, 'connections');
			if (connections instanceof Array) {
				for (var i = 0, len = connections.length; i < len; i++) {
					method(connections[i]);
				}
			}
		});
	};
})(jQuery);
/*! tocca v2.0.0 || Gianluca Guarini */
!function(a,b){"use strict";if("function"!=typeof a.createEvent)return!1;var c,d,e,f,g,h,i,j,k,l=function(a){var b=a.toLowerCase(),c="MS"+a;return navigator.msPointerEnabled?c:!!window.PointerEvent&&b},m={useJquery:!b.IGNORE_JQUERY&&"undefined"!=typeof jQuery,swipeThreshold:b.SWIPE_THRESHOLD||100,tapThreshold:b.TAP_THRESHOLD||150,dbltapThreshold:b.DBL_TAP_THRESHOLD||200,longtapThreshold:b.LONG_TAP_THRESHOLD||1e3,tapPrecision:b.TAP_PRECISION/2||30,justTouchEvents:b.JUST_ON_TOUCH_DEVICES},n=!1,o={touchstart:l("PointerDown")||"touchstart",touchend:l("PointerUp")||"touchend",touchmove:l("PointerMove")||"touchmove"},p=function(a){return!a.pointerId||"undefined"==typeof c||a.pointerId===c},q=function(a,b,c){for(var d=b.split(" "),e=d.length;e--;)a.addEventListener(d[e],c,!1)},r=function(a){return a.targetTouches?a.targetTouches[0]:a},s=function(){return(new Date).getTime()},t=function(b,c,f,g){var h=a.createEvent("Event");if(h.originalEvent=f,g=g||{},g.x=d,g.y=e,g.distance=g.distance,m.useJquery&&(h=jQuery.Event(c,{originalEvent:f}),jQuery(b).trigger(h,g)),h.initEvent){for(var i in g)h[i]=g[i];h.initEvent(c,!0,!0),b.dispatchEvent(h)}for(;b;)b["on"+c]&&b["on"+c](h),b=b.parentNode},u=function(a){if(p(a)&&(c=a.pointerId,"mousedown"!==a.type&&(n=!0),"mousedown"!==a.type||!n)){var b=r(a);f=d=b.pageX,g=e=b.pageY,k=setTimeout(function(){t(a.target,"longtap",a),i=a.target},m.longtapThreshold),h=s(),x++}},v=function(a){if(p(a)){if(c=void 0,"mouseup"===a.type&&n)return void(n=!1);var b=[],l=s(),o=g-e,q=f-d;if(clearTimeout(j),clearTimeout(k),q<=-m.swipeThreshold&&b.push("swiperight"),q>=m.swipeThreshold&&b.push("swipeleft"),o<=-m.swipeThreshold&&b.push("swipedown"),o>=m.swipeThreshold&&b.push("swipeup"),b.length){for(var r=0;r<b.length;r++){var u=b[r];t(a.target,u,a,{distance:{x:Math.abs(q),y:Math.abs(o)}})}x=0}else f>=d-m.tapPrecision&&f<=d+m.tapPrecision&&g>=e-m.tapPrecision&&g<=e+m.tapPrecision&&h+m.tapThreshold-l>=0&&(t(a.target,x>=2&&i===a.target?"dbltap":"tap",a),i=a.target),j=setTimeout(function(){x=0},m.dbltapThreshold)}},w=function(a){if(p(a)&&("mousemove"!==a.type||!n)){var b=r(a);d=b.pageX,e=b.pageY}},x=0;q(a,o.touchstart+(m.justTouchEvents?"":" mousedown"),u),q(a,o.touchend+(m.justTouchEvents?"":" mouseup"),v),q(a,o.touchmove+(m.justTouchEvents?"":" mousemove"),w),b.tocca=function(a){for(var b in a)m[b]=a[b];return m}}(document,window);
;"use strict";

//Test features
var passiveSupported = false;
try {
  var options = Object.defineProperty({}, "passive", {
    get: function get() {
      passiveSupported = true;
    }
  });
  window.addEventListener("test", null, options);
} catch (err) {}

//Cache elements
var html = document.documentElement,
    body = document.body,
    nav = document.getElementById('nav'),
    header = document.getElementById('header'),
    sun = document.getElementById('sun'),
    lede = document.querySelector('#welcome .lede'),
    introduction = document.querySelector('#welcome .introduction'),
    connections,
    target,
    can_parent,
    image_parent;

//General variables
var transitioning = false;
var swapping = false;
var worldData;
var windowHeight = $(window).height();
var windowWidth = $(window).width();
var event_stop_one = false;
var event_stop_two = false;
var event_stop_three = false;
var stalks_active = false;

function recache_elements() {
  html = document.documentElement;
  body = document.body;
  nav = document.getElementById('nav');
  header = document.getElementById('header');
  sun = document.getElementById('sun');
  lede = document.querySelector('#welcome .lede');
  introduction = document.querySelector('#welcome .introduction');
  transitioning = false;
  swapping = false;
  windowHeight = $(window).height();
  windowWidth = $(window).width();
}
//Kick everything off
function launch_page() {
  $.getJSON(wordpress.template_directory + "/worlds.json", function (data) {
    worldData = data;
    var get = getParameters(getNavUrl());
    setupParallax(get.world);
    setup_stalks();
    layout_header();
    click_eye();
    animate_stage();
  });
}
launch_page();

function setup_stalks() {
  $().connections({ from: '#midnight_eye', to: '#midnight_can', class: 'stalk', within: '#midnight_slot' });
  $().connections({ from: '#dayglo_eye', to: '#dayglo_can', class: 'stalk', within: '#dayglo_slot' });
  $().connections({ from: '#mother_eye', to: '#mother_can', class: 'stalk', within: '#mother_slot' });
  connections = $('connection');
  stalks_active = true;
  setTimeout(function () {
    update_stalks();
  }, 50);
}

function update_stalks() {
  window.requestAnimationFrame(function () {
    if (stalks_active === true) {
      connections.connections('update');
      update_stalks();
    }
  });
}

// Page scrolling effects
var last_scroll = windowHeight / 100;
var ticking = false;

function resetScroll() {
  last_scroll = 0;
}
function animate_stage() {
  body.classList.add('sunrise');
  setTimeout(function () {
    html.classList.add('daytime');
  }, 5500);
}

$("#mobile-menu").click(function () {
  $(this).parent().toggleClass('open');
});

$("#nav a").click(function () {
  $('#nav').removeClass('open');
});

/*
Transitioning between worlds
*/
$(".can_tooltip").on('mouseover mouseout', function () {
  $(this).siblings().toggleClass('hover');
});

function click_eye() {
  var eyes = document.querySelectorAll(".can_tooltip");
  var handler = function handler(eye) {
    eye.addEventListener("click", function (e) {
      switch_world(e);
    });
    eye.addEventListener("tap", function (e) {
      switch_world(e);
    });
  };
  for (var i = 0; i < eyes.length; i++) {
    handler(eyes[i]);
  }
}

function switch_world(e) {
  var eye = e.target;
  if (transitioning === false) {
    transitioning = true;
    stalks_active = false;
    connections.connections('remove');
    target = eye.getAttribute("data-world");
    eye.classList.add('notransition');

    eye.style.top = eye.getBoundingClientRect().top + 'px';
    eye.style.left = eye.getBoundingClientRect().left + 'px';
    eye.style.position = 'fixed';

    $(html).addClass('transition-stage-pre');
    //Weird hack to force reflow and avoid transition
    $(eye).offset();
    eye.classList.remove('notransition');
    $(html).addClass('transition-stage-1');
    eye.classList.add('target');
    $(eye).one('animationend webkitAnimationEnd oAnimationEnd oanimationend MSAnimationEnd', function (e) {
      $('html,body').scrollTop(0);
      $(window).scrollTop(0);
      cleanBodyClasses(target);
      //Callback in this next function progresses animation
      replaceElements(target);
      eye.classList.remove('target');
      eye.style.top = "";
      eye.style.left = "";
      eye.style.position = 'absolute';
    });
  }
  e.preventDefault();
  return false;
}

function replaceElements(target) {
  console.log(target);
  header.innerHTML = '';
  $("#header").load(wordpress.template_directory + '/world_data/selector.php', { world: target, directory: wordpress.template_directory }, function () {
    //We need to wait for loading to be complete
    layout_header();
    $(html).addClass('transition-stage-2');
    $('#hill_one').one('animationend webkitAnimationEnd oAnimationEnd oanimationend MSAnimationEnd', function (e) {
      setup_stalks();
      $(html).removeClass('transition-stage-pre');
      $(html).removeClass('transition-stage-1');
      $(html).removeClass('transition-stage-2');
      $(html).removeClass('transition-stage-2');
      transitioning = false;
    });
  });
}

function layout_header() {
  var overlay = document.getElementById('overlays');
  var welcome = document.getElementById('welcome');
  if (overlay !== null) {
    header.style.height = header.clientHeight + welcome.clientHeight + 'px';
    header.style.borderTop = welcome.clientHeight + 'px solid transparent';
    overlay.style.top = -1 * (overlay.clientHeight / 2 - 1.5 * nav.clientHeight) + 'px';
  }
}

function cleanBodyClasses(target) {
  body.classList.remove('default');
  body.classList.remove('dayglo');
  body.classList.remove('mother');
  body.classList.remove('midnight');
  body.classList.add(target);
}

function setupParallax(world) {
  window.addEventListener('scroll', function (e) {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(function () {
        console.log(world);
        if (world === 'default') {
          this_scroll = $(window).scrollTop();
        } else {
          this_scroll = $(window).scrollTop() - windowHeight / 2;
        }
        if (this_scroll > 0) {
          var layers = document.getElementsByClassName("parallax");
          var layer, speed, yPos;
          for (var i = 0; i < layers.length; i++) {
            layer = layers[i];
            speed = layer.getAttribute('data-speed');
            layer.style.transform = 'translate3d(0px, ' + this_scroll * (2 / speed) + 'px, 0px)';
          }
        }
        ticking = false;
      });
    }
  });
}

//Tools
if (!Math.sign) {
  Math.sign = function (x) {
    // If x is NaN, the result is NaN.
    // If x is -0, the result is -0.
    // If x is +0, the result is +0.
    // If x is negative and not -0, the result is -1.
    // If x is positive and not +0, the result is +1.
    x = +x; // convert to a number
    if (x === 0 || isNaN(x)) {
      return Number(x);
    }
    return x > 0 ? 1 : -1;
  };
}
function getNavUrl() {
  //Get Url
  return window.location.search.replace("?", "");
}
function getParameters(url) {
  //Params obj
  var params = {};
  //To lowercase
  url = url.toLowerCase();
  //To array
  url = url.split('&');

  //Iterate over url parameters array
  var length = url.length;
  for (var i = 0; i < length; i++) {
    //Create prop
    var prop = url[i].slice(0, url[i].search('='));
    //Create Val
    var value = url[i].slice(url[i].search('=')).replace('=', '');
    //Params New Attr
    params[prop] = value;
  }
  return params;
}

$('a[href*="#"]').not('[href="#"]').click(function (event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - $('#nav').height()
      }, 1000, function () {
        last_scroll = window.scrollY;
      });
    }
  }
});

///////////////////////////////
/* Browser specifix fixes */
////////////////////////////////

//Improve scrolling in IE11
smooth_scrolling = false;
if (navigator.userAgent.match(/Trident\/7\./)) {
  $('body').on("mousewheel", function (event) {
    event.preventDefault();
    if (smooth_scrolling === false) {
      smooth_scrolling = true;
      var wd = event.originalEvent.wheelDelta;
      var csp = window.pageYOffset;
      console.log(csp - wd);
      $('html, body').animate({
        scrollTop: csp - wd * 2
      }, Math.abs(wd) * 2, function () {
        smooth_scrolling = false;
      });
    }
  });
}
