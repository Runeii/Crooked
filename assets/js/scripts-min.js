function launch_page(){$(".world_info").hide(),$.getJSON(wordpress.template_directory+"/worlds.json",function(a){console.log("Worlds loaded"),worldData=a,setupParallax(getParameters(getNavUrl()).world),animate_stage()})}function resetScroll(){nav.classList.add("hide"),last_scroll=0}function animate_stage(){body.classList.add("sunrise"),setTimeout(function(){html.classList.add("daytime"),nav.classList.add("hide")},5500)}function transitionAnimation(){$("html, body").animate({scrollTop:image_parent.offset().top-windowHeight/2+image_parent.height()/2},1e3,function(){!1===event_stop_one&&(event_stop_one=!0,can_parent.css({width:can_parent.width(),left:can_parent.offset().left,top:"50%",transform:"translateY(-50%)",position:"fixed"}),html.classList.remove("daytime"),html.classList.add("transition-move"),$("#the_cans").length?image_parent.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(a){!1===event_stop_two&&(event_stop_two=!0,html.classList.add("transitioning"),can_parent.find(".loading").one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(a){!1===event_stop_three&&(event_stop_three=!0,refreshElements())}))}):!1===event_stop_two&&(event_stop_two=!0,html.classList.add("transitioning"),can_parent.find(".loading").one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(a){!1===event_stop_three&&(event_stop_three=!0,refreshElements())})))})}function refreshElements(){var a,b=$(target).attr("data-world"),c=worldData[b],d="";$.each(c,function(c,e){a="default"===b?c:b+"_"+c,Array.isArray(e)?d+='<picture id="'+a+'">\n                    <source\n                      media="all and (orientation: landscape)"\n                      srcset="'+wordpress.template_directory+e[0]+'">\n                    <source\n                      media="all and (orientation: portrait)"\n                      srcset="'+wordpress.template_directory+e[1]+'">\n                    <img\n                      src="'+wordpress.template_directory+e[1]+'">\n                  </picture>':d+='<picture id="'+a+'">\n                    <source\n                      media="all and (orientation: landscape)"\n                      srcset="'+wordpress.template_directory+e+'" class="landscape_only">\n                    <source\n                      media="all and (orientation: portrait)"\n                      srcset="'+wordpress.template_directory+'/assets/img/worlds/blank.gif">\n                    <img\n                      src="'+wordpress.template_directory+e+'" class="landscape_only">\n                  </picture>'}),target.animate({opacity:0},{duration:1e3,start:function(){body.classList.remove("midnight","default","dayglo","mother"),body.classList.add(b)},complete:function(){switchWorld(b,d),event_stop_one=!1,event_stop_two=!1,event_stop_three=!1}})}function switchWorld(a,b){header.innerHTML=b,lede.innerHTML=worldData.copy[a].lede,introduction.innerHTML=worldData.copy[a].introduction,Pace.restart(),Pace.once("done",function(){setupParallax(a),page_sunrise(a)})}function setupParallax(){var a,b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",c=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],worldData.layers[b]),d=worldData[b];a="default"==b?"#":"#"+b+"_",$.each(c,function(b,c){for(var e=0,f=c.length;e<f;e++)$(a+c[e]+" img").addClass("parallax_"+b),delete d[c[e]]}),$.each(d,function(b){$(a+b+" img").addClass("parallax_five").css({position:"fixed"})}),parallax_one=$(".parallax_one"),parallax_two=$(".parallax_two"),parallax_three=$(".parallax_three"),parallax_four=$(".parallax_four"),parallax_five=$(".parallax_five"),setup_scroll(b)}function setup_scroll(a){window.addEventListener("scroll",function(a){ticking||(ticking=!0,this_scroll=$(window).scrollTop(),fix_header||(this_scroll>=1.1*last_scroll?(nav.classList.add("hide"),last_scroll=this_scroll):this_scroll<=last_scroll/1.1&&(nav.classList.remove("hide"),last_scroll=this_scroll)),window.requestAnimationFrame(function(){var a=1*this_scroll;parallax_one.css({transform:"translateY("+a/5+"px)"}),parallax_two.css({transform:"translateY("+a/4+"px)"}),parallax_three.css({transform:"translateY("+a/3+"px)"}),parallax_four.css({transform:"translateY("+a/2+"px)"}),ticking=!1}))})}function page_sunrise(a){resetScroll();$(window).scrollTop(0)||$("body").scrollTop(0);$("body").fadeOut(500,function(){$("#the_cans .image img").each(function(){$(this).css({height:"",width:""})}),can_parent.css({width:"",left:"",top:"",transform:"",position:""}),$("html").removeClass("transition-setup").removeClass("transition-start").removeClass("transition-move").removeClass("transitioning"),$(".target_parent").each(function(){$(this).removeClass("target_parent")}),$(".world_info").hide(),$(".target_world").removeClass("target_world"),target.css({opacity:"1"}),body.classList.add("sunrise"),$("body").fadeIn(1500),setTimeout(function(){html.classList.add("daytime"),can_parent.css({opacity:1}),transitioning=!1},5e3)})}function getNavUrl(){return window.location.search.replace("?","")}function getParameters(a){var b={};a=a.toLowerCase(),a=a.split("&");for(var c=a.length,d=0;d<c;d++){var e=a[d].slice(0,a[d].search("=")),f=a[d].slice(a[d].search("=")).replace("=","");b[e]=f}return b}!function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"\t"===a||"\n"===a||"\f"===a||"\r"===a}function e(){I=!1,L=a.devicePixelRatio,J={},K={},q.DPR=L||1,M.width=Math.max(a.innerWidth||0,x.clientWidth),M.height=Math.max(a.innerHeight||0,x.clientHeight),M.vw=M.width/100,M.vh=M.height/100,p=[M.height,M.width,L].join("-"),M.em=q.getEmValue(),M.rem=M.em}function f(a,b,c,d){var e,f,g,h;return"saveData"===z.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function g(a){var b,c=q.getSet(a),d=!1;"pending"!==c&&(d=p,c&&(b=q.setRes(c),q.applySetCandidate(b,a))),a[q.ns].evaled=d}function h(a,b){return a.res-b.res}function i(a,b,c){var d;return!c&&b&&(c=a[q.ns].sets,c=c&&c[c.length-1]),d=j(b,c),d&&(b=q.makeUrl(b),a[q.ns].curSrc=b,a[q.ns].curCan=d,d.res||Y(d,d.set.sizes)),d}function j(a,b){var c,d,e;if(a&&b)for(e=q.parseSet(b),a=q.makeUrl(a),c=0;c<e.length;c++)if(a===q.makeUrl(e[c].url)){d=e[c];break}return d}function k(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[q.ns]=!0,(f=e.getAttribute("srcset"))&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function l(a,b){function c(b){var c,d=b.exec(a.substring(l));return d?(c=d[0],l+=c.length,c):void 0}function e(){var a,c,d,e,h,i,j,k,l,n=!1,o={};for(e=0;e<g.length;e++)h=g[e],i=h[h.length-1],j=h.substring(0,h.length-1),k=parseInt(j,10),l=parseFloat(j),T.test(j)&&"w"===i?((a||c)&&(n=!0),0===k?n=!0:a=k):U.test(j)&&"x"===i?((a||c||d)&&(n=!0),0>l?n=!0:c=l):T.test(j)&&"h"===i?((d||c)&&(n=!0),0===k?n=!0:d=k):n=!0;n||(o.url=f,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,m.push(o))}for(var f,g,h,i,j,k=a.length,l=0,m=[];;){if(c(Q),l>=k)return m;f=c(R),g=[],","===f.slice(-1)?(f=f.replace(S,""),e()):function(){for(c(P),h="",i="in descriptor";;){if(j=a.charAt(l),"in descriptor"===i)if(d(j))h&&(g.push(h),h="",i="after descriptor");else{if(","===j)return l+=1,h&&g.push(h),void e();if("("===j)h+=j,i="in parens";else{if(""===j)return h&&g.push(h),void e();h+=j}}else if("in parens"===i)if(")"===j)h+=j,i="in descriptor";else{if(""===j)return g.push(h),void e();h+=j}else if("after descriptor"===i)if(d(j));else{if(""===j)return void e();i="in descriptor",l-=1}l+=1}}()}}function m(a){var b,c,e,f,g,h,i=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,j=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(c=function(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(""===(e=a.charAt(j)))return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}(a),e=c.length,b=0;e>b;b++)if(f=c[b],g=f[f.length-1],function(a){return!!(i.test(a)&&parseFloat(a)>=0)||(!!j.test(a)||("0"===a||"-0"===a||"+0"===a))}(g)){if(h=g,f.pop(),0===f.length)return h;if(f=f.join(" "),q.matchesMedia(f))return h}return"100vw"}b.createElement("picture");var n,o,p,q={},r=!1,s=function(){},t=b.createElement("img"),u=t.getAttribute,v=t.setAttribute,w=t.removeAttribute,x=b.documentElement,y={},z={algorithm:""},A="data-pfsrc",B=A+"set",C=navigator.userAgent,D=/rident/.test(C)||/ecko/.test(C)&&C.match(/rv\:(\d+)/)&&RegExp.$1>35,E="currentSrc",F=/\s+\+?\d+(e\d+)?w/,G=a.picturefillCFG,H="font-size:100%!important;",I=!0,J={},K={},L=a.devicePixelRatio,M={px:1,in:96},N=b.createElement("a"),O=!1,P=/^[ \t\n\r\u000c]+/,Q=/^[, \t\n\r\u000c]+/,R=/^[^ \t\n\r\u000c]+/,S=/[,]+$/,T=/^\d+$/,U=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,V=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},W=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},X=function(){var a=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},b=W(function(b){return"return "+a((b||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(a,c){var d;if(!(a in J))if(J[a]=!1,c&&(d=a.match(/^([\d\.]+)(em|vw|px)$/)))J[a]=d[1]*M[d[2]];else try{J[a]=new Function("e",b(a))(M)}catch(a){}return J[a]}}(),Y=function(a,b){return a.w?(a.cWidth=q.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},Z=function(a){if(r){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||q.qsa(f.context||b,f.reevaluate||f.reselect?q.sel:q.selShort),e=c.length){for(q.setupRun(f),O=!0,d=0;e>d;d++)q.fillImg(c[d],f);q.teardownRun(f)}}};a.console&&console.warn,E in t||(E="src"),y["image/jpeg"]=!0,y["image/gif"]=!0,y["image/png"]=!0,y["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),q.ns=("pf"+(new Date).getTime()).substr(0,9),q.supSrcset="srcset"in t,q.supSizes="sizes"in t,q.supPicture=!!a.HTMLPictureElement,q.supSrcset&&q.supPicture&&!q.supSizes&&function(a){t.srcset="data:,a",a.src="data:,a",q.supSrcset=t.complete===a.complete,q.supPicture=q.supSrcset&&q.supPicture}(b.createElement("img")),q.supSrcset&&!q.supSizes?function(){var a="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",c=b.createElement("img"),d=function(){2===c.width&&(q.supSizes=!0),o=q.supSrcset&&!q.supSizes,r=!0,setTimeout(Z)};c.onload=d,c.onerror=d,c.setAttribute("sizes","9px"),c.srcset=a+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",c.src=a}():r=!0,q.selShort="picture>img,img[srcset]",q.sel=q.selShort,q.cfg=z,q.DPR=L||1,q.u=M,q.types=y,q.setSize=s,q.makeUrl=W(function(a){return N.href=a,N.href}),q.qsa=function(a,b){return"querySelector"in a?a.querySelectorAll(b):[]},q.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?q.matchesMedia=function(a){return!a||matchMedia(a).matches}:q.matchesMedia=q.mMQ,q.matchesMedia.apply(this,arguments)},q.mMQ=function(a){return!a||X(a)},q.calcLength=function(a){var b=X(a,!0)||!1;return 0>b&&(b=!1),b},q.supportsType=function(a){return!a||y[a]},q.parseSize=W(function(a){var b=(a||"").match(/(\([^)]+\))?\s*(.+)/);return{media:b&&b[1],length:b&&b[2]}}),q.parseSet=function(a){return a.cands||(a.cands=l(a.srcset,a)),a.cands},q.getEmValue=function(){var a;if(!n&&(a=b.body)){var c=b.createElement("div"),d=x.style.cssText,e=a.style.cssText;c.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",x.style.cssText=H,a.style.cssText=H,a.appendChild(c),n=c.offsetWidth,a.removeChild(c),n=parseFloat(n,10),x.style.cssText=d,a.style.cssText=e}return n||16},q.calcListLength=function(a){if(!(a in K)||z.uT){var b=q.calcLength(m(a));K[a]=b||M.width}return K[a]},q.setRes=function(a){var b;if(a){b=q.parseSet(a);for(var c=0,d=b.length;d>c;c++)Y(b[c],a.sizes)}return b},q.setRes.res=Y,q.applySetCandidate=function(a,b){if(a.length){var c,d,e,g,j,k,l,m,n,o=b[q.ns],p=q.DPR;if(k=o.curSrc||b[E],l=o.curCan||i(b,k,a[0].set),l&&l.set===a[0].set&&((n=D&&!b.complete&&l.res-.1>p)||(l.cached=!0,l.res>=p&&(j=l))),!j)for(a.sort(h),g=a.length,j=a[g-1],d=0;g>d;d++)if(c=a[d],c.res>=p){e=d-1,j=a[e]&&(n||k!==q.makeUrl(c.url))&&f(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}j&&(m=q.makeUrl(j.url),o.curSrc=m,o.curCan=j,m!==k&&q.setSrc(b,j),q.setSize(b))}},q.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},q.getSet=function(a){var b,c,d,e=!1,f=a[q.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&q.matchesMedia(c.media)&&(d=q.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},q.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),l=a[q.ns];(l.src===c||d.src)&&(l.src=u.call(a,"src"),l.src?v.call(a,A,l.src):w.call(a,A)),(l.srcset===c||d.srcset||!q.supSrcset||a.srcset)&&(e=u.call(a,"srcset"),l.srcset=e,h=!0),l.sets=[],i&&(l.pic=!0,k(b,l.sets)),l.srcset?(f={srcset:l.srcset,sizes:u.call(a,"sizes")},l.sets.push(f),(g=(o||l.src)&&F.test(l.srcset||""))||!l.src||j(l.src,f)||f.has1x||(f.srcset+=", "+l.src,f.cands.push({url:l.src,d:1,set:f}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=c,l.supported=!(i||f&&!q.supSrcset||g&&!q.supSizes),h&&q.supSrcset&&!l.supported&&(e?(v.call(a,B,e),a.srcset=""):w.call(a,B)),l.supported&&!l.srcset&&(!l.src&&a.src||a.src!==q.makeUrl(l.src))&&(null===l.src?a.removeAttribute("src"):a.src=l.src),l.parsed=!0},q.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[q.ns]||(a[q.ns]={}),c=a[q.ns],(d||c.evaled!==p)&&((!c.parsed||b.reevaluate)&&q.parseSets(a,a.parentNode,b),c.supported?c.evaled=p:g(a))},q.setupRun=function(){(!O||I||L!==a.devicePixelRatio)&&e()},q.supPicture?(Z=s,q.fillImg=s):function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(q.fillImgs(),(c=c||d.test(a))&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=x.clientHeight,h=function(){I=Math.max(a.innerWidth||0,x.clientWidth)!==M.width||x.clientHeight!==g,g=x.clientHeight,I&&q.fillImgs()};V(a,"resize",function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}}(h,99)),V(b,"readystatechange",e)}(),q.picturefill=Z,q.fillImgs=Z,q.teardownRun=s,Z._=q,a.picturefillCFG={pf:q,push:function(a){var b=a.shift();"function"==typeof q[b]?q[b].apply(q,a):(z[b]=a[0],O&&q.fillImgs({reselect:!0}))}};for(;G&&G.length;)a.picturefillCFG.push(G.shift());a.picturefill=Z,"object"==typeof module&&"object"==typeof module.exports?module.exports=Z:"function"==typeof define&&define.amd&&define("picturefill",function(){return Z}),q.supPicture||(y["image/webp"]=function(b,c){var d=new a.Image;return d.onerror=function(){y[b]=!1,Z()},d.onload=function(){y[b]=1===d.width,Z()},d.src=c,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);var passiveSupported=!1;try{var options=Object.defineProperty({},"passive",{get:function(){passiveSupported=!0}});window.addEventListener("test",null,options)}catch(a){}var html=document.documentElement,body=document.body,nav=document.getElementById("nav"),header=document.getElementById("header"),sun=document.getElementById("sun"),lede=document.querySelector("#welcome .lede"),introduction=document.querySelector("#welcome .introduction"),parallax_one,parallax_two,parallax_three,parallax_four,parallax_five,target,can_parent,image_parent,transitioning=!1,swapping=!1,worldData,fix_header,windowHeight=$(window).height(),windowWidth=$(window).width(),event_stop_one=!1,event_stop_two=!1,event_stop_three=!1,last_scroll=windowHeight/100,ticking=!1;$("#mobile-menu").click(function(){$(this).parent().toggleClass("open")}),$("#nav a").click(function(){$("#nav").removeClass("open")}),$(".explore-button a").click(function(){return!1===transitioning&&(transitioning=!0,target=$("#"+this.getAttribute("target")),$("#the_cans .image img").each(function(){$(this).css({height:$(this).height(),width:$(this).width()})}),$(".world_info").show(),target.parents().addClass("target_parent"),target.addClass("target_world"),html.classList.add("transition-start"),body.classList.remove("sunrise"),can_parent=$(".can.target_parent"),image_parent=$(".image.target_parent"),$(header).one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(a){transitionAnimation()})),!1}),$('a[href*="#"]').not('[href="#"]').click(function(a){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=$(this.hash);b=b.length?b:$("[name="+this.hash.slice(1)+"]"),b.length&&(a.preventDefault(),fix_header=!0,$("html, body").animate({scrollTop:b.offset().top-$("#nav").height()},1e3,function(){fix_header=!1,nav.classList.remove("hide"),last_scroll=window.scrollY}))}});