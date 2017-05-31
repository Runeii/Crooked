function recache_elements(){html=document.documentElement,body=document.body,nav=document.getElementById("nav"),header=document.getElementById("header"),sun=document.getElementById("sun"),lede=document.querySelector("#welcome .lede"),introduction=document.querySelector("#welcome .introduction"),transitioning=!1,swapping=!1,windowHeight=$(window).height(),windowWidth=$(window).width()}function launch_page(){$.getJSON(wordpress.template_directory+"/worlds.json",function(a){worldData=a,setupParallax(getParameters(getNavUrl()).world),setup_stalks(),layout_header(),click_eye(),animate_stage()})}function setup_stalks(){$().connections({from:"#midnight_eye",to:"#midnight_can",class:"stalk",within:"#midnight_slot"}),$().connections({from:"#dayglo_eye",to:"#dayglo_can",class:"stalk",within:"#dayglo_slot"}),$().connections({from:"#mother_eye",to:"#mother_can",class:"stalk",within:"#mother_slot"}),connections=$("connection"),stalks_active=!0,setTimeout(function(){update_stalks()},50)}function update_stalks(){window.requestAnimationFrame(function(){!0===stalks_active&&(connections.connections("update"),update_stalks())})}function resetScroll(){last_scroll=0}function animate_stage(){body.classList.add("sunrise"),setTimeout(function(){html.classList.add("daytime")},5500)}function click_eye(){for(var a=document.querySelectorAll(".can_tooltip"),b=0;b<a.length;b++)!function(a){a.addEventListener("click",function(a){switch_world(a)}),a.addEventListener("tap",function(a){switch_world(a)})}(a[b])}function switch_world(a){var b=a.target;return!1===transitioning&&(transitioning=!0,stalks_active=!1,connections.connections("remove"),target=b.getAttribute("data-world"),b.classList.add("notransition"),b.style.top=b.getBoundingClientRect().top+"px",b.style.left=b.getBoundingClientRect().left+"px",b.style.position="fixed",$(html).addClass("transition-stage-pre"),$(b).offset(),b.classList.remove("notransition"),$(html).addClass("transition-stage-1"),b.classList.add("target"),$(b).one("animationend webkitAnimationEnd oAnimationEnd oanimationend MSAnimationEnd",function(a){$("html,body").scrollTop(0),$(window).scrollTop(0),cleanBodyClasses(target),replaceElements(target),b.classList.remove("target"),b.style.top="",b.style.left="",b.style.position="absolute"})),a.preventDefault(),!1}function replaceElements(a){console.log(a),header.innerHTML="",$("#header").load(wordpress.template_directory+"/world_data/selector.php",{world:a,directory:wordpress.template_directory},function(){layout_header(),$(html).addClass("transition-stage-2"),$("#hill_one").one("animationend webkitAnimationEnd oAnimationEnd oanimationend MSAnimationEnd",function(a){setup_stalks(),$(html).removeClass("transition-stage-pre"),$(html).removeClass("transition-stage-1"),$(html).removeClass("transition-stage-2"),$(html).removeClass("transition-stage-2"),transitioning=!1})})}function layout_header(){var a=document.getElementById("overlays"),b=document.getElementById("welcome");null!==a&&(header.style.height=header.clientHeight+b.clientHeight+"px",header.style.borderTop=b.clientHeight+"px solid transparent",a.style.top=-1*(a.clientHeight/2-1.5*nav.clientHeight)+"px")}function cleanBodyClasses(a){body.classList.remove("default"),body.classList.remove("dayglo"),body.classList.remove("mother"),body.classList.remove("midnight"),body.classList.add(a)}function setupParallax(a){window.addEventListener("scroll",function(b){ticking||(ticking=!0,window.requestAnimationFrame(function(){if(console.log(a),this_scroll="default"===a?$(window).scrollTop():$(window).scrollTop()-windowHeight/2,this_scroll>0)for(var b,c,d=document.getElementsByClassName("parallax"),e=0;e<d.length;e++)b=d[e],c=b.getAttribute("data-speed"),b.style.transform="translate3d(0px, "+this_scroll*(2/c)+"px, 0px)";ticking=!1}))})}function getNavUrl(){return window.location.search.replace("?","")}function getParameters(a){var b={};a=a.toLowerCase(),a=a.split("&");for(var c=a.length,d=0;d<c;d++){var e=a[d].slice(0,a[d].search("=")),f=a[d].slice(a[d].search("=")).replace("=","");b[e]=f}return b}!function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"\t"===a||"\n"===a||"\f"===a||"\r"===a}function e(){I=!1,L=a.devicePixelRatio,J={},K={},q.DPR=L||1,M.width=Math.max(a.innerWidth||0,x.clientWidth),M.height=Math.max(a.innerHeight||0,x.clientHeight),M.vw=M.width/100,M.vh=M.height/100,p=[M.height,M.width,L].join("-"),M.em=q.getEmValue(),M.rem=M.em}function f(a,b,c,d){var e,f,g,h;return"saveData"===z.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function g(a){var b,c=q.getSet(a),d=!1;"pending"!==c&&(d=p,c&&(b=q.setRes(c),q.applySetCandidate(b,a))),a[q.ns].evaled=d}function h(a,b){return a.res-b.res}function i(a,b,c){var d;return!c&&b&&(c=a[q.ns].sets,c=c&&c[c.length-1]),d=j(b,c),d&&(b=q.makeUrl(b),a[q.ns].curSrc=b,a[q.ns].curCan=d,d.res||Y(d,d.set.sizes)),d}function j(a,b){var c,d,e;if(a&&b)for(e=q.parseSet(b),a=q.makeUrl(a),c=0;c<e.length;c++)if(a===q.makeUrl(e[c].url)){d=e[c];break}return d}function k(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[q.ns]=!0,(f=e.getAttribute("srcset"))&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function l(a,b){function c(b){var c,d=b.exec(a.substring(l));return d?(c=d[0],l+=c.length,c):void 0}function e(){var a,c,d,e,h,i,j,k,l,n=!1,o={};for(e=0;e<g.length;e++)h=g[e],i=h[h.length-1],j=h.substring(0,h.length-1),k=parseInt(j,10),l=parseFloat(j),T.test(j)&&"w"===i?((a||c)&&(n=!0),0===k?n=!0:a=k):U.test(j)&&"x"===i?((a||c||d)&&(n=!0),0>l?n=!0:c=l):T.test(j)&&"h"===i?((d||c)&&(n=!0),0===k?n=!0:d=k):n=!0;n||(o.url=f,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,m.push(o))}for(var f,g,h,i,j,k=a.length,l=0,m=[];;){if(c(Q),l>=k)return m;f=c(R),g=[],","===f.slice(-1)?(f=f.replace(S,""),e()):function(){for(c(P),h="",i="in descriptor";;){if(j=a.charAt(l),"in descriptor"===i)if(d(j))h&&(g.push(h),h="",i="after descriptor");else{if(","===j)return l+=1,h&&g.push(h),void e();if("("===j)h+=j,i="in parens";else{if(""===j)return h&&g.push(h),void e();h+=j}}else if("in parens"===i)if(")"===j)h+=j,i="in descriptor";else{if(""===j)return g.push(h),void e();h+=j}else if("after descriptor"===i)if(d(j));else{if(""===j)return void e();i="in descriptor",l-=1}l+=1}}()}}function m(a){var b,c,e,f,g,h,i=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,j=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(c=function(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(""===(e=a.charAt(j)))return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}(a),e=c.length,b=0;e>b;b++)if(f=c[b],g=f[f.length-1],function(a){return!!(i.test(a)&&parseFloat(a)>=0)||(!!j.test(a)||("0"===a||"-0"===a||"+0"===a))}(g)){if(h=g,f.pop(),0===f.length)return h;if(f=f.join(" "),q.matchesMedia(f))return h}return"100vw"}b.createElement("picture");var n,o,p,q={},r=!1,s=function(){},t=b.createElement("img"),u=t.getAttribute,v=t.setAttribute,w=t.removeAttribute,x=b.documentElement,y={},z={algorithm:""},A="data-pfsrc",B=A+"set",C=navigator.userAgent,D=/rident/.test(C)||/ecko/.test(C)&&C.match(/rv\:(\d+)/)&&RegExp.$1>35,E="currentSrc",F=/\s+\+?\d+(e\d+)?w/,G=a.picturefillCFG,H="font-size:100%!important;",I=!0,J={},K={},L=a.devicePixelRatio,M={px:1,in:96},N=b.createElement("a"),O=!1,P=/^[ \t\n\r\u000c]+/,Q=/^[, \t\n\r\u000c]+/,R=/^[^ \t\n\r\u000c]+/,S=/[,]+$/,T=/^\d+$/,U=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,V=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},W=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},X=function(){var a=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},b=W(function(b){return"return "+a((b||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(a,c){var d;if(!(a in J))if(J[a]=!1,c&&(d=a.match(/^([\d\.]+)(em|vw|px)$/)))J[a]=d[1]*M[d[2]];else try{J[a]=new Function("e",b(a))(M)}catch(a){}return J[a]}}(),Y=function(a,b){return a.w?(a.cWidth=q.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},Z=function(a){if(r){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||q.qsa(f.context||b,f.reevaluate||f.reselect?q.sel:q.selShort),e=c.length){for(q.setupRun(f),O=!0,d=0;e>d;d++)q.fillImg(c[d],f);q.teardownRun(f)}}};a.console&&console.warn,E in t||(E="src"),y["image/jpeg"]=!0,y["image/gif"]=!0,y["image/png"]=!0,y["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),q.ns=("pf"+(new Date).getTime()).substr(0,9),q.supSrcset="srcset"in t,q.supSizes="sizes"in t,q.supPicture=!!a.HTMLPictureElement,q.supSrcset&&q.supPicture&&!q.supSizes&&function(a){t.srcset="data:,a",a.src="data:,a",q.supSrcset=t.complete===a.complete,q.supPicture=q.supSrcset&&q.supPicture}(b.createElement("img")),q.supSrcset&&!q.supSizes?function(){var a="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",c=b.createElement("img"),d=function(){2===c.width&&(q.supSizes=!0),o=q.supSrcset&&!q.supSizes,r=!0,setTimeout(Z)};c.onload=d,c.onerror=d,c.setAttribute("sizes","9px"),c.srcset=a+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",c.src=a}():r=!0,q.selShort="picture>img,img[srcset]",q.sel=q.selShort,q.cfg=z,q.DPR=L||1,q.u=M,q.types=y,q.setSize=s,q.makeUrl=W(function(a){return N.href=a,N.href}),q.qsa=function(a,b){return"querySelector"in a?a.querySelectorAll(b):[]},q.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?q.matchesMedia=function(a){return!a||matchMedia(a).matches}:q.matchesMedia=q.mMQ,q.matchesMedia.apply(this,arguments)},q.mMQ=function(a){return!a||X(a)},q.calcLength=function(a){var b=X(a,!0)||!1;return 0>b&&(b=!1),b},q.supportsType=function(a){return!a||y[a]},q.parseSize=W(function(a){var b=(a||"").match(/(\([^)]+\))?\s*(.+)/);return{media:b&&b[1],length:b&&b[2]}}),q.parseSet=function(a){return a.cands||(a.cands=l(a.srcset,a)),a.cands},q.getEmValue=function(){var a;if(!n&&(a=b.body)){var c=b.createElement("div"),d=x.style.cssText,e=a.style.cssText;c.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",x.style.cssText=H,a.style.cssText=H,a.appendChild(c),n=c.offsetWidth,a.removeChild(c),n=parseFloat(n,10),x.style.cssText=d,a.style.cssText=e}return n||16},q.calcListLength=function(a){if(!(a in K)||z.uT){var b=q.calcLength(m(a));K[a]=b||M.width}return K[a]},q.setRes=function(a){var b;if(a){b=q.parseSet(a);for(var c=0,d=b.length;d>c;c++)Y(b[c],a.sizes)}return b},q.setRes.res=Y,q.applySetCandidate=function(a,b){if(a.length){var c,d,e,g,j,k,l,m,n,o=b[q.ns],p=q.DPR;if(k=o.curSrc||b[E],l=o.curCan||i(b,k,a[0].set),l&&l.set===a[0].set&&((n=D&&!b.complete&&l.res-.1>p)||(l.cached=!0,l.res>=p&&(j=l))),!j)for(a.sort(h),g=a.length,j=a[g-1],d=0;g>d;d++)if(c=a[d],c.res>=p){e=d-1,j=a[e]&&(n||k!==q.makeUrl(c.url))&&f(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}j&&(m=q.makeUrl(j.url),o.curSrc=m,o.curCan=j,m!==k&&q.setSrc(b,j),q.setSize(b))}},q.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},q.getSet=function(a){var b,c,d,e=!1,f=a[q.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&q.matchesMedia(c.media)&&(d=q.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},q.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),l=a[q.ns];(l.src===c||d.src)&&(l.src=u.call(a,"src"),l.src?v.call(a,A,l.src):w.call(a,A)),(l.srcset===c||d.srcset||!q.supSrcset||a.srcset)&&(e=u.call(a,"srcset"),l.srcset=e,h=!0),l.sets=[],i&&(l.pic=!0,k(b,l.sets)),l.srcset?(f={srcset:l.srcset,sizes:u.call(a,"sizes")},l.sets.push(f),(g=(o||l.src)&&F.test(l.srcset||""))||!l.src||j(l.src,f)||f.has1x||(f.srcset+=", "+l.src,f.cands.push({url:l.src,d:1,set:f}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=c,l.supported=!(i||f&&!q.supSrcset||g&&!q.supSizes),h&&q.supSrcset&&!l.supported&&(e?(v.call(a,B,e),a.srcset=""):w.call(a,B)),l.supported&&!l.srcset&&(!l.src&&a.src||a.src!==q.makeUrl(l.src))&&(null===l.src?a.removeAttribute("src"):a.src=l.src),l.parsed=!0},q.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[q.ns]||(a[q.ns]={}),c=a[q.ns],(d||c.evaled!==p)&&((!c.parsed||b.reevaluate)&&q.parseSets(a,a.parentNode,b),c.supported?c.evaled=p:g(a))},q.setupRun=function(){(!O||I||L!==a.devicePixelRatio)&&e()},q.supPicture?(Z=s,q.fillImg=s):function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(q.fillImgs(),(c=c||d.test(a))&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=x.clientHeight,h=function(){I=Math.max(a.innerWidth||0,x.clientWidth)!==M.width||x.clientHeight!==g,g=x.clientHeight,I&&q.fillImgs()};V(a,"resize",function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}}(h,99)),V(b,"readystatechange",e)}(),q.picturefill=Z,q.fillImgs=Z,q.teardownRun=s,Z._=q,a.picturefillCFG={pf:q,push:function(a){var b=a.shift();"function"==typeof q[b]?q[b].apply(q,a):(z[b]=a[0],O&&q.fillImgs({reselect:!0}))}};for(;G&&G.length;)a.picturefillCFG.push(G.shift());a.picturefill=Z,"object"==typeof module&&"object"==typeof module.exports?module.exports=Z:"function"==typeof define&&define.amd&&define("picturefill",function(){return Z}),q.supPicture||(y["image/webp"]=function(b,c){var d=new a.Image;return d.onerror=function(){y[b]=!1,Z()},d.onload=function(){y[b]=1===d.width,Z()},d.src=c,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document),function(a){"use strict";var b,c=0,d=function(){window.picturefill&&a(window.picturefill),(window.picturefill||c>9999)&&clearInterval(b),c++};b=setInterval(d,8),d()}(function(a){"use strict";var b=window.document,c=window.Element,d=window.MutationObserver,e=function(){},f={disconnect:e,take:e,observe:e,start:e,stop:e,connected:!1},g=/^loade|^c|^i/.test(b.readyState||""),h=a._;if(h.mutationSupport=!1,h.observer=f,Object.keys&&window.HTMLSourceElement&&b.addEventListener){var i,j,k,l,m={src:1,srcset:1,sizes:1,media:1},n=Object.keys(m),o={attributes:!0,childList:!0,subtree:!0,attributeFilter:n},p=c&&c.prototype,q={},r=function(a,b){q[a]=h[a],h[a]=b};p&&!p.matches&&(p.matches=p.matchesSelector||p.mozMatchesSelector||p.webkitMatchesSelector||p.msMatchesSelector),p&&p.matches&&(i=function(a,b){return a.matches(b)},h.mutationSupport=!(!Object.create||!Object.defineProperties)),h.mutationSupport&&(f.observe=function(){k&&(f.connected=!0,j&&j.observe(b.documentElement,o))},f.disconnect=function(){f.connected=!1,j&&j.disconnect()},f.take=function(){j?h.onMutations(j.takeRecords()):l&&l.take()},f.start=function(){k=!0,f.observe()},f.stop=function(){k=!1,f.disconnect()},r("setupRun",function(){return f.disconnect(),q.setupRun.apply(this,arguments)}),r("teardownRun",function(){var a=q.setupRun.apply(this,arguments);return f.observe(),a}),r("setSrc",function(){var a,b=f.connected;return f.disconnect(),a=q.setSrc.apply(this,arguments),b&&f.observe(),a}),h.onMutations=function(a){var b,c,d=[];for(b=0,c=a.length;c>b;b++)g&&"childList"===a[b].type?h.onSubtreeChange(a[b],d):"attributes"===a[b].type&&h.onAttrChange(a[b],d);d.length&&h.fillImgs({elements:d,reevaluate:!0})},h.onSubtreeChange=function(a,b){h.findAddedMutations(a.addedNodes,b),h.findRemovedMutations(a.removedNodes,a.target,b)},h.findAddedMutations=function(a,b){var c,d,e,f;for(c=0,d=a.length;d>c;c++)e=a[c],1===e.nodeType&&(f=e.nodeName.toUpperCase(),"PICTURE"===f?h.addToElements(e.getElementsByTagName("img")[0],b):"IMG"===f&&i(e,h.selShort)?h.addToElements(e,b):"SOURCE"===f?h.addImgForSource(e,e.parentNode,b):h.addToElements(h.qsa(e,h.selShort),b))},h.findRemovedMutations=function(a,b,c){var d,e,f;for(d=0,e=a.length;e>d;d++)f=a[d],1===f.nodeType&&"SOURCE"===f.nodeName.toUpperCase()&&h.addImgForSource(f,b,c)},h.addImgForSource=function(a,b,c){b&&"PICTURE"!==(b.nodeName||"").toUpperCase()&&((b=b.parentNode)&&"PICTURE"===(b.nodeName||"").toUpperCase()||(b=null)),b&&h.addToElements(b.getElementsByTagName("img")[0],c)},h.addToElements=function(a,b){var c,d;if(a)if("length"in a&&!a.nodeType)for(c=0,d=a.length;d>c;c++)h.addToElements(a[c],b);else a.parentNode&&-1===b.indexOf(a)&&b.push(a)},h.onAttrChange=function(a,b){var c,d=a.target[h.ns];d||"srcset"!==a.attributeName||"IMG"!==(c=a.target.nodeName.toUpperCase())?d&&(c||(c=a.target.nodeName.toUpperCase()),"IMG"===c?(a.attributeName in d&&(d[a.attributeName]=void 0),h.addToElements(a.target,b)):"SOURCE"===c&&h.addImgForSource(a.target,a.target.parentNode,b)):h.addToElements(a.target,b)},h.supPicture||(d&&!h.testMutationEvents?j=new d(h.onMutations):(l=function(){var a=!1,b=[],c=window.setImmediate||window.setTimeout;return function(d){a||(a=!0,l.take||(l.take=function(){b.length&&(h.onMutations(b),b=[]),a=!1}),c(l.take)),b.push(d)}}(),b.documentElement.addEventListener("DOMNodeInserted",function(a){f.connected&&g&&l({type:"childList",addedNodes:[a.target],removedNodes:[]})},!0),b.documentElement.addEventListener("DOMNodeRemoved",function(a){f.connected&&g&&"SOURCE"===(a.target||{}).nodeName&&l({type:"childList",addedNodes:[],removedNodes:[a.target],target:a.target.parentNode})},!0),b.documentElement.addEventListener("DOMAttrModified",function(a){f.connected&&m[a.attrName]&&l({type:"attributes",target:a.target,attributeName:a.attrName})},!0)),window.HTMLImageElement&&Object.defineProperties&&function(){var a=b.createElement("img"),c=[],d=a.getAttribute,e=a.setAttribute,f={src:1};h.supSrcset&&!h.supSizes&&(f.srcset=1),Object.defineProperties(HTMLImageElement.prototype,{getAttribute:{value:function(a){var b;return f[a]&&(b=this[h.ns])&&void 0!==b[a]?b[a]:d.apply(this,arguments)},writeable:!0,enumerable:!0,configurable:!0}}),h.supSrcset||c.push("srcset"),h.supSizes||c.push("sizes"),c.forEach(function(a){Object.defineProperty(HTMLImageElement.prototype,a,{set:function(b){e.call(this,a,b)},get:function(){return d.call(this,a)||""},enumerable:!0,configurable:!0})}),"currentSrc"in a||function(){var a,c=function(a,b){null==b&&(b=a.src||""),Object.defineProperty(a,"pfCurrentSrc",{value:b,writable:!0})},d=c;h.supSrcset&&window.devicePixelRatio&&(a=function(a,b){return(a.d||a.w||a.res)-(b.d||b.w||b.res)},c=function(b){var c,e,f,g,i=b[h.ns];if(i&&i.supported&&i.srcset&&i.sets&&(e=h.parseSet(i.sets[0]))&&e.sort){for(e.sort(a),f=e.length,g=e[f-1],c=0;f>c;c++)if(e[c].d>=window.devicePixelRatio){g=e[c];break}g&&(g=h.makeUrl(g.url))}d(b,g)}),b.addEventListener("load",function(a){"IMG"===a.target.nodeName.toUpperCase()&&c(a.target)},!0),Object.defineProperty(HTMLImageElement.prototype,"currentSrc",{set:function(){window.console&&console.warn&&console.warn("currentSrc can't be set on img element")},get:function(){return this.complete&&c(this),this.src||this.srcset?this.pfCurrentSrc||"":""},enumerable:!0,configurable:!0})}(),!window.HTMLSourceElement||"srcset"in b.createElement("source")||["srcset","sizes"].forEach(function(a){Object.defineProperty(window.HTMLSourceElement.prototype,a,{set:function(b){this.setAttribute(a,b)},get:function(){return this.getAttribute(a)||""},enumerable:!0,configurable:!0})})}(),f.start()),g||b.addEventListener("DOMContentLoaded",function(){g=!0}))}}),function(a){a.fn.connections=function(c){return"update"===c?g(f,this):"remove"===c?g(d,this):(c=a.extend(!0,{borderClasses:{},class:"connection",css:{},from:this,tag:"connection",to:this,within:":root"},c),b(c),this)},a.event.special.connections={teardown:function(b){g(d,a(this))}};var b=function(b){var d=b.borderClasses,e=b.tag,f=a(b.from),g=a(b.to),h=a(b.within);delete b.borderClasses,delete b.tag,delete b.from,delete b.to,delete b.within,h.each(function(){var a=this,h=new Array;f.each(function(){var f=this;h.push(this),g.not(h).each(function(){c(a,[f,this],e,d,b)})})})},c=function(b,c,d,e,g){var h=a.extend({position:"absolute"},g.css),i=a("<"+d+"/>",g).css(h);i.appendTo(b);var j=(i.outerWidth()-i.innerWidth())/2,k=(i.outerHeight()-i.innerHeight())/2;j<=0&&k<=0&&(j=k=1);var l={borderClasses:e,border_h:k,border_w:j,node_from:a(c[0]),node_to:a(c[1]),nodes_dom:c,css:h};"none"===i.css("border-top-style")&&(l.css.borderStyle="solid"),a.data(i.get(0),"connection",l),a.data(i.get(0),"connections",[i.get(0)]);for(var m=0;m<2;m++){var n=i.add(a.data(c[m],"connections")).get();a.data(c[m],"connections",n),1==n.length&&a(c[m]).on("connections.connections",!1)}f(i.get(0))},d=function(b){for(var c=a.data(b,"connection").nodes_dom,d=0;d<2;d++){var e=a(a.data(c[d],"connections")).not(b).get();a.data(c[d],"connections",e)}a(b).remove()},e=function(a){a.rect_from=a.nodes_dom[0].getBoundingClientRect(),a.rect_to=a.nodes_dom[1].getBoundingClientRect();var b=a.cache;if(a.cache=[a.rect_from.top,a.rect_from.right,a.rect_from.bottom,a.rect_from.left,a.rect_to.top,a.rect_to.right,a.rect_to.bottom,a.rect_to.left],a.hidden=0==(a.cache[0]|a.cache[1]|a.cache[2]|a.cache[3])||0==(a.cache[4]|a.cache[5]|a.cache[6]|a.cache[7]),a.unmodified=!0,void 0===b)return a.unmodified=!1;for(var c=0;c<8;c++)if(b[c]!==a.cache[c])return a.unmodified=!1},f=function(b){var c=a.data(b,"connection");if(e(c),!c.unmodified){var d=c.border_h,f=c.border_w,g=(c.node_from,c.node_to,c.rect_from),h=c.rect_to,i=(g.bottom+g.top)/2,j=(h.left+h.right)/2,k=(h.bottom+h.top)/2,l=(g.left+g.right)/2,m=["right","left"];if(l>j){m=m.reverse();var n=Math.max(j-f/2,Math.min(g.right,h.right));j=l+f/2,l=n}else l-=f/2,j=Math.min(j+f/2,Math.max(g.left,h.left));var o=["bottom","top"];if(k>i){o=o.reverse();var n=Math.max(i-d/2,Math.min(g.bottom,h.bottom));i=k+d/2,k=n}else i=Math.min(i,Math.max(g.top,h.top)),k-=d/2;var p=j-l,q=i-k;p<f&&(k=Math.max(k,Math.min(g.bottom,h.bottom)),i=Math.min(i,Math.max(g.top,h.top)),l=Math.max(g.left,h.left),j=Math.min(g.right,h.right),j=l=(l+j-f)/2),q<d&&(l=Math.max(l,Math.min(g.right,h.right)),j=Math.min(j,Math.max(g.left,h.left)),k=Math.max(g.top,h.top),i=Math.min(g.bottom,h.bottom),i=k=(k+i-d)/2),p=j-l,q=i-k,p<=0&&(d=0),q<=0&&(f=0);var r="border-"+o[0]+"-"+m[0]+"-radius: 0;border-"+o[0]+"-"+m[1]+"-radius: 0;border-"+o[1]+"-"+m[0]+"-radius: 0;";if((d<=0||f<=0)&&(r+="border-"+o[1]+"-"+m[1]+"-radius: 0;"),c.hidden)r+="display: none;";else{c.css["border-"+o[0]+"-width"]=0,c.css["border-"+m[0]+"-width"]=0,c.css["border-"+o[1]+"-width"]=d,c.css["border-"+m[1]+"-width"]=f;var s=b.getBoundingClientRect();c.css.left=b.offsetLeft+l-s.left,c.css.top=b.offsetTop+k-s.top,c.css.width=p-f,c.css.height=q-d}var t=c.borderClasses;a(b).removeClass(t[o[0]]).removeClass(t[m[0]]).addClass(t[o[1]]).addClass(t[m[1]]).attr("style",r).css(c.css)}},g=function(b,c){return c.each(function(){var c=a.data(this,"connections");if(c instanceof Array)for(var d=0,e=c.length;d<e;d++)b(c[d])})}}(jQuery),function(a,b){"use strict";if("function"!=typeof a.createEvent)return!1;var c,d,e,f,g,h,i,j,k,l=function(a){var b=a.toLowerCase(),c="MS"+a;return navigator.msPointerEnabled?c:!!window.PointerEvent&&b},m={useJquery:!b.IGNORE_JQUERY&&"undefined"!=typeof jQuery,swipeThreshold:b.SWIPE_THRESHOLD||100,tapThreshold:b.TAP_THRESHOLD||150,dbltapThreshold:b.DBL_TAP_THRESHOLD||200,longtapThreshold:b.LONG_TAP_THRESHOLD||1e3,tapPrecision:b.TAP_PRECISION/2||30,justTouchEvents:b.JUST_ON_TOUCH_DEVICES},n=!1,o={touchstart:l("PointerDown")||"touchstart",touchend:l("PointerUp")||"touchend",touchmove:l("PointerMove")||"touchmove"},p=function(a){return!a.pointerId||void 0===c||a.pointerId===c},q=function(a,b,c){for(var d=b.split(" "),e=d.length;e--;)a.addEventListener(d[e],c,!1)},r=function(a){return a.targetTouches?a.targetTouches[0]:a},s=function(){return(new Date).getTime()},t=function(b,c,f,g){var h=a.createEvent("Event");if(h.originalEvent=f,g=g||{},g.x=d,g.y=e,g.distance=g.distance,m.useJquery&&(h=jQuery.Event(c,{originalEvent:f}),jQuery(b).trigger(h,g)),h.initEvent){for(var i in g)h[i]=g[i];h.initEvent(c,!0,!0),b.dispatchEvent(h)}for(;b;)b["on"+c]&&b["on"+c](h),b=b.parentNode},u=function(a){if(p(a)&&(c=a.pointerId,"mousedown"!==a.type&&(n=!0),"mousedown"!==a.type||!n)){var b=r(a);f=d=b.pageX,g=e=b.pageY,k=setTimeout(function(){t(a.target,"longtap",a),i=a.target},m.longtapThreshold),h=s(),x++}},v=function(a){if(p(a)){if(c=void 0,"mouseup"===a.type&&n)return void(n=!1);var b=[],l=s(),o=g-e,q=f-d;if(clearTimeout(j),clearTimeout(k),q<=-m.swipeThreshold&&b.push("swiperight"),q>=m.swipeThreshold&&b.push("swipeleft"),o<=-m.swipeThreshold&&b.push("swipedown"),o>=m.swipeThreshold&&b.push("swipeup"),b.length){for(var r=0;r<b.length;r++){var u=b[r];t(a.target,u,a,{distance:{x:Math.abs(q),y:Math.abs(o)}})}x=0}else f>=d-m.tapPrecision&&f<=d+m.tapPrecision&&g>=e-m.tapPrecision&&g<=e+m.tapPrecision&&h+m.tapThreshold-l>=0&&(t(a.target,x>=2&&i===a.target?"dbltap":"tap",a),i=a.target),j=setTimeout(function(){x=0},m.dbltapThreshold)}},w=function(a){if(p(a)&&("mousemove"!==a.type||!n)){var b=r(a);d=b.pageX,e=b.pageY}},x=0;q(a,o.touchstart+(m.justTouchEvents?"":" mousedown"),u),q(a,o.touchend+(m.justTouchEvents?"":" mouseup"),v),q(a,o.touchmove+(m.justTouchEvents?"":" mousemove"),w),b.tocca=function(a){for(var b in a)m[b]=a[b];return m}}(document,window);var passiveSupported=!1;try{var options=Object.defineProperty({},"passive",{get:function(){passiveSupported=!0}});window.addEventListener("test",null,options)}catch(a){}var html=document.documentElement,body=document.body,nav=document.getElementById("nav"),header=document.getElementById("header"),sun=document.getElementById("sun"),lede=document.querySelector("#welcome .lede"),introduction=document.querySelector("#welcome .introduction"),connections,target,can_parent,image_parent,transitioning=!1,swapping=!1,worldData,windowHeight=$(window).height(),windowWidth=$(window).width(),event_stop_one=!1,event_stop_two=!1,event_stop_three=!1,stalks_active=!1;launch_page();var last_scroll=windowHeight/100,ticking=!1;$("#mobile-menu").click(function(){$(this).parent().toggleClass("open")}),$("#nav a").click(function(){$("#nav").removeClass("open")}),$(".can_tooltip").on("mouseover mouseout",function(){$(this).siblings().toggleClass("hover")}),Math.sign||(Math.sign=function(a){return a=+a,0===a||isNaN(a)?Number(a):a>0?1:-1}),$('a[href*="#"]').not('[href="#"]').click(function(a){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=$(this.hash);b=b.length?b:$("[name="+this.hash.slice(1)+"]"),b.length&&(a.preventDefault(),$("html, body").animate({scrollTop:b.offset().top-$("#nav").height()},1e3,function(){last_scroll=window.scrollY}))}}),smooth_scrolling=!1,navigator.userAgent.match(/Trident\/7\./)&&$("body").on("mousewheel",function(a){if(a.preventDefault(),!1===smooth_scrolling){smooth_scrolling=!0;var b=a.originalEvent.wheelDelta,c=window.pageYOffset;console.log(c-b),$("html, body").animate({scrollTop:c-2*b},2*Math.abs(b),function(){smooth_scrolling=!1})}});