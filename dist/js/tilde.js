/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);

/*
 * jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */

jQuery.extend({
    highlight: function (node, re, nodeName, className) {
        if (node.nodeType === 3) {
            var match = node.data.match(re);
            if (match) {
                var highlight = document.createElement(nodeName || 'span');
                highlight.className = className || 'highlight';
                var wordNode = node.splitText(match.index);
                wordNode.splitText(match[0].length);
                var wordClone = wordNode.cloneNode(true);
                highlight.appendChild(wordClone);
                wordNode.parentNode.replaceChild(highlight, wordNode);
                return 1; //skip added node in parent
            }
        } else if ((node.nodeType === 1 && node.childNodes) && // only element nodes that have children
                !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
                !(node.tagName === nodeName.toUpperCase() && node.className === className)) { // skip if already highlighted
            for (var i = 0; i < node.childNodes.length; i++) {
                i += jQuery.highlight(node.childNodes[i], re, nodeName, className);
            }
        }
        return 0;
    }
});

jQuery.fn.unhighlight = function (options) {
    var settings = { className: 'highlight', element: 'span' };
    jQuery.extend(settings, options);

    return this.find(settings.element + "." + settings.className).each(function () {
        var parent = this.parentNode;
        parent.replaceChild(this.firstChild, this);
        parent.normalize();
    }).end();
};

jQuery.fn.highlight = function (words, options) {
    var settings = { className: 'highlight', element: 'span', caseSensitive: false, wordsOnly: false };
    jQuery.extend(settings, options);
    
    if (words.constructor === String) {
        words = [words];
    }
    words = jQuery.grep(words, function(word, i){
      return word != '';
    });
    words = jQuery.map(words, function(word, i) {
      return word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    });
    if (words.length == 0) { return this; };

    var flag = settings.caseSensitive ? "" : "i";
    var pattern = "(" + words.join("|") + ")";
    if (settings.wordsOnly) {
        pattern = "\\b" + pattern + "\\b";
    }
    var re = new RegExp(pattern, flag);
    
    return this.each(function () {
        jQuery.highlight(this, re, settings.element, settings.className);
    });
};


/*!
 * music-snitch
 * https://github.com/javierarce/music-snitch
 * MIT License
 * by Javier Arce
 */
;(function($) {

  (function(pluginName) {
    var defaults = {

      getCurrentTrack: function(url, $elem) {

        var self = this;

        $.ajax({ url: url, data: null, success: function(data) {
        
          var track = self.getTrackInfo(data);

          if (track) {
            self.showCurrentTrack(track, $elem);
            $elem.trigger("listening", track );
          }

        }, dataType: "jsonp" });

      },

      getTrackInfo: function(data) {

        if (data.error) {
          console.error(data.message);
          return;
        }

        var tracks = data.recenttracks.track;

        track = tracks[0];

        if (track && "@attr" in track && track["@attr"].nowplaying == "true") {
          return { name: track.name, artist: track.artist["#text"] };

        }

      },

      showCurrentTrack: function(track, $elem) {

        $elem.find(".track").html(track.name + ' by ' + '<strong>' + track.artist + '</strong>');
        $elem.addClass("active");
        $elem.find(".track").delay(250).fadeIn(250);

      }
    };

    $.fn[pluginName] = function(options) {

      options = $.extend(true, {}, defaults, options);

      return this.each(function() {
        var elem = this,
        $elem = $(elem);

        var url  = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + options.username + '&api_key=' + options.api_key + '&limit=1&format=json&callback=lastTrackCallback';
        var html = '<a href="http://www.lastfm.es/user/' + options.username + '" title="Currently listening"><div class="track"></div></a>';

        $elem.append(html);

        options.getCurrentTrack(url, $elem);

      });
    };
    $.fn[pluginName].defaults = defaults;
  })('snitch');
})(jQuery);

// The MIT License (MIT)

// Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




! function($) {

    "use strict";

    var Typed = function(el, options) {

        // chosen element to manipulate text
        this.el = $(el);

        // options
        this.options = $.extend({}, $.fn.typed.defaults, options);

        // attribute to type into
        this.isInput = this.el.is('input');
        this.attr = this.options.attr;

        // show cursor
        this.showCursor = this.isInput ? false : this.options.showCursor;

        // text content of element
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()

        // html or plain text
        this.contentType = this.options.contentType;

        // typing speed
        this.typeSpeed = this.options.typeSpeed;

        // add a delay before typing starts
        this.startDelay = this.options.startDelay;

        // backspacing speed
        this.backSpeed = this.options.backSpeed;

        // amount of time to wait before backspacing
        this.backDelay = this.options.backDelay;

        // input strings of text
        this.strings = this.options.strings;

        // character number position of current string
        this.strPos = 0;

        // current array position
        this.arrayPos = 0;

        // number to stop backspacing on.
        // default 0, can change depending on how many chars
        // you want to remove at the time
        this.stopNum = 0;

        // Looping logic
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;

        // for stopping
        this.stop = false;

        // custom cursor
        this.cursorChar = this.options.cursorChar;

        // All systems go!
        this.build();
    };

    Typed.prototype = {

        constructor: Typed

        ,
        init: function() {
            // begin the loop w/ first current string (global self.string)
            // current string will be passed as an argument each time after this
            var self = this;
            self.timeout = setTimeout(function() {
                // Start typing
                self.typewrite(self.strings[self.arrayPos], self.strPos);
            }, self.startDelay);
        }

        ,
        build: function() {
            // Insert cursor
            if (this.showCursor === true) {
                this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
                this.el.after(this.cursor);
            }
            this.init();
        }

        // pass current string state to each function, types 1 char per call
        ,
        typewrite: function(curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;

            // ------------- optional ------------- //
            // backpaces a certain string faster
            // ------------------------------------ //
            // if (self.arrayPos == 1){
            //  self.backDelay = 50;
            // }
            // else{ self.backDelay = 500; }

            // contain typing function in a timeout humanize'd delay
            self.timeout = setTimeout(function() {
                // check for an escape character before a pause value
                // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
                // single ^ are removed from string
                var charPause = 0;
                var substr = curString.substr(curStrPos);
                if (substr.charAt(0) === '^') {
                    var skip = 1; // skip atleast 1
                    if (/^\^\d+/.test(substr)) {
                        substr = /\d+/.exec(substr)[0];
                        skip += substr.length;
                        charPause = parseInt(substr);
                    }

                    // strip out the escape character and pause value so they're not printed
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                }

                if (self.contentType === 'html') {
                    // skip over html tags while typing
                    if (curString.substr(curStrPos).charAt(0) === '<') {
                        var tag = '';
                        while (curString.substr(curStrPos).charAt(0) !== '>') {
                            tag += curString.substr(curStrPos).charAt(0);
                            curStrPos++;
                        }
                        curStrPos++;
                        tag += '>';
                    }
                }

                // timeout for any pause after a character
                self.timeout = setTimeout(function() {
                    if (curStrPos === curString.length) {
                        // fires callback function
                        self.options.onStringTyped(self.arrayPos);

                        // is this the final string
                        if (self.arrayPos === self.strings.length - 1) {
                            // animation that occurs on the last typed string
                            self.options.callback();

                            self.curLoop++;

                            // quit if we wont loop back
                            if (self.loop === false || self.curLoop === self.loopCount)
                                return;
                        }

                        self.timeout = setTimeout(function() {
                            self.backspace(curString, curStrPos);
                        }, self.backDelay);
                    } else {

                        /* call before functions if applicable */
                        if (curStrPos === 0)
                            self.options.preStringTyped(self.arrayPos);

                        // start typing each new char into existing string
                        // curString: arg, self.el.html: original text inside element
                        var nextString = self.elContent + curString.substr(0, curStrPos + 1);
                        if (self.attr) {
                            self.el.attr(self.attr, nextString);
                        } else {
                            if (self.contentType === 'html') {
                                self.el.html(nextString);
                            } else {
                                self.el.text(nextString);
                            }
                        }

                        // add characters one by one
                        curStrPos++;
                        // loop the function
                        self.typewrite(curString, curStrPos);
                    }
                    // end of character pause
                }, charPause);

                // humanized value for typing
            }, humanize);

        }

        ,
        backspace: function(curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
            var self = this;

            self.timeout = setTimeout(function() {

                // ----- this part is optional ----- //
                // check string array position
                // on the first string, only delete one word
                // the stopNum actually represents the amount of chars to
                // keep in the current string. In my case it's 14.
                // if (self.arrayPos == 1){
                //  self.stopNum = 14;
                // }
                //every other time, delete the whole typed string
                // else{
                //  self.stopNum = 0;
                // }

                if (self.contentType === 'html') {
                    // skip over html tags while backspacing
                    if (curString.substr(curStrPos).charAt(0) === '>') {
                        var tag = '';
                        while (curString.substr(curStrPos).charAt(0) !== '<') {
                            tag -= curString.substr(curStrPos).charAt(0);
                            curStrPos--;
                        }
                        curStrPos--;
                        tag += '<';
                    }
                }

                // ----- continue important stuff ----- //
                // replace text with base text + typed characters
                var nextString = self.elContent + curString.substr(0, curStrPos);
                if (self.attr) {
                    self.el.attr(self.attr, nextString);
                } else {
                    if (self.contentType === 'html') {
                        self.el.html(nextString);
                    } else {
                        self.el.text(nextString);
                    }
                }

                // if the number (id of character in current string) is
                // less than the stop number, keep going
                if (curStrPos > self.stopNum) {
                    // subtract characters one by one
                    curStrPos--;
                    // loop the function
                    self.backspace(curString, curStrPos);
                }
                // if the stop number has been reached, increase
                // array position to next string
                else if (curStrPos <= self.stopNum) {
                    self.arrayPos++;

                    if (self.arrayPos === self.strings.length) {
                        self.arrayPos = 0;
                        self.init();
                    } else
                        self.typewrite(self.strings[self.arrayPos], curStrPos);
                }

                // humanized value for typing
            }, humanize);

        }

        // Start & Stop currently not working

        // , stop: function() {
        //     var self = this;

        //     self.stop = true;
        //     clearInterval(self.timeout);
        // }

        // , start: function() {
        //     var self = this;
        //     if(self.stop === false)
        //        return;

        //     this.stop = false;
        //     this.init();
        // }

        // Reset and rebuild the element
        ,
        reset: function() {
            var self = this;
            clearInterval(self.timeout);
            var id = this.el.attr('id');
            this.el.after('<span id="' + id + '"/>')
            this.el.remove();
            this.cursor.remove();
            // Send the callback
            self.options.resetCallback();
        }

    };

    $.fn.typed = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('typed'),
                options = typeof option == 'object' && option;
            if (!data) $this.data('typed', (data = new Typed(this, options)));
            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        // typing speed
        typeSpeed: 0,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    };


}(window.jQuery);

/* I did this little electric poem generator on 2005 :_) */

/*
   FILE ARCHIVED ON 9:19:14 Jan 25, 2005 AND RETRIEVED FROM THE
   INTERNET ARCHIVE ON 15:30:35 Oct 25, 2014.
   JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

   ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
   SECTION 108(a)(3)).
   */
// VivoExquisito-o-Matic (version 2.0)
// El Hombre que Comía Diccionarios - www.elhombrequecomiadiccionarios.com

var i=0
var frase  = new Array()

frase[0]="El agua es aqu&iacute; de un xadjetivoMS tan intenso que no veo el agua"
frase[1]="No hay nada"
frase[2]="&iquest;Ser&eacute; capaz de lograrlo?"
frase[3]="Infinitud xadjetivoFS, xadjetivoFS memoria de los d&iacute;as"
frase[4]="Aqu&iacute; est&aacute;s a salvo de ti"
frase[5]="Avanza hacia el horizonte para convertirte en ballena"
frase[6]="Escucha: no existe el Ayer"
frase[7]="El sol"
frase[8]="Como el xadjetivoMS sonido del Mar"
frase[9]="Perdido en el laberinto de sal"
frase[10]="El Mar"
frase[11]="Las gaviotas susurran acu&aacute;ticas melod&iacute;as"
frase[12]="Nunca"
frase[13]="S&iacute;"
frase[14]="Dispuesto a desaparecer"
frase[15]="Vete"
frase[16]="Qu&eacute;date"
frase[17]="La memoria permanece"
frase[18]="Devorado por estatuas del color de la arena"
frase[19]="Pero ahora no soy nada."
frase[20]="Descubre que est&aacute;s perdido"
frase[21]="La derrota final se esconde entre rocas xadjetivoFP"
frase[22]="&iquest;Qui&eacute;n eres?"
frase[23]="&iquest;Qui&eacute;n soy yo?"
frase[24]="Me das miedo"
frase[25]="Me doy miedo"
frase[26]="Esto no est&aacute; pasando"
frase[26]="Esto no est&aacute; ocurriendo"
frase[27]="La visi&oacute;n xadjetivoFS"
frase[28]="No trates de huir"
frase[29]="Huye"
frase[30]="No lo intentes. Vete"
frase[31]="Int&eacute;ntalo. Hazlo ahora"
frase[32]="La verdad te espera donde acaba la orilla"
frase[33]="Esto es el fin"
frase[34]="Es aqu&iacute; donde rompen las olas"
frase[35]="El tiempo es arena"
frase[36]="La arena es tiempo"
frase[37]="El Mar"
frase[38]="El Mar: Universo salado"
frase[39]="Devorado por estatuas del color de la arena"
frase[40]="Soy incapaz de huir"
frase[41]="All&iacute;, bajo las estrellas, era capaz de todo"
frase[42]="Mira, los peces naranjas nos saludan"
frase[43]="Ya no hay barcos piratas, s&oacute;lo hay piratas"
frase[44]="V&oacute;rtices, V&oacute;rtices, V&oacute;rtices"
frase[45]="&iquest;Por qu&eacute; no me entierras en la arena?"
frase[46]="&iquest;Cu&aacute;l es el secreto que las olas arrastran?"
frase[47]="La clave est&aacute; en el Mar"
frase[48]="Yo soy las olas"
frase[49]="T&uacute; eres el Mar"
frase[50]="Han venido a buscarte, pero t&uacute; no estabas aqu&iacute;"
frase[51]="Soy el xadjetivoMS rey de las olas"
frase[52]="Veo delfines xadjetivoMP que ven delfines xadjetivoMP que te ven a ti"
frase[53]="Los cangrejos xadjetivoMP me lanzan hacia las rocas"
frase[54]="Quieren matarme"
frase[55]="El Oc&eacute;ano quiere matarte"
frase[56]="Quieren matarte"
frase[56]="Soy el Mar"
frase[57]="Eres el Mar"
frase[58]="Mis xadjetivoMP zapatos me han destruido"
frase[59]="Tengo fr&iacute;o"
frase[60]="Como xadjetivoMP p&aacute;jaros de viento que graznan mi Destino"
frase[61]="Ahora es Mañana"
frase[62]="Mañana es Nadie"
frase[63]="Nadie es mi nombre"
frase[64]="Un sueño"
frase[65]="Mi isla"
frase[66]="Yo soy el Mar"
frase[67]="Quiz&aacute; es mejor no mirar atr&aacute;s"

var adjetivo  = new Array()
adjetivo[0] = new Array ("rojo", "rojos", "roja", "rojas")
adjetivo[1] = new Array ("verde", "verdes", "verde", "verdes")
adjetivo[2] = new Array ("azul", "azules", "azul", "azules")
adjetivo[3] = new Array ("amarillo", "amarillos", "amarilla", "amarillas")
adjetivo[4] = new Array ("blanco", "blancos", "blanca", "blancas")
adjetivo[5] = new Array ("negro", "negros", "negra", "negras")
adjetivo[6] = new Array ("gris", "grises", "gris", "grises")
adjetivo[7] = new Array ("bonito", "bonitos", "bonita", "bonitas")
adjetivo[8] = new Array ("malvado", "malvados", "malvada", "malvadas")
adjetivo[9] = new Array ("muerto", "muertos", "muerta", "muertas")
adjetivo[10] = new Array ("triste", "tristes", "triste", "tristes")
adjetivo[11] = new Array ("cansado", "cansados", "cansada", "cansadas")
adjetivo[12] = new Array ("roto", "rotos", "rota", "rotas")
adjetivo[13] = new Array ("claro", "claros", "clara", "claras")
adjetivo[14] = new Array ("oscuro", "oscuros", "oscura", "oscuras")
adjetivo[15] = new Array ("naranja", "naranjas", "naranja", "naranjas")
adjetivo[16] = new Array ("herido", "heridos", "herida", "heridos")
adjetivo[17] = new Array ("inmóvil", "inmóviles", "inmóvil", "inmóviles")
adjetivo[18] = new Array ("oculto", "ocultos", "oculta", "ocultas")
adjetivo[19] = new Array ("alado", "alados", "alada", "aladas")
adjetivo[20] = new Array ("destructor", "destructores", "destructora", "destructoras")
adjetivo[21] = new Array ("anulador", "anuladores", "anuladora", "anuladoras")

function randomNum(max) 
{
  var rNum=NaN
  while (isNaN(rNum))rNum=Math.floor(Math.random()*(max))
    return rNum
}

function replace(cadena) 
{ 
  var pos
  var patron

  if (patron = cadena.match("xadjetivoMS")) pos = 0;
  else if (patron = cadena.match("xadjetivoMP")) pos = 1;
  else if (patron = cadena.match("xadjetivoFS"))	pos = 2;
  else if (patron = cadena.match("xadjetivoFP")) pos = 3;

  rExp = patron;

  results = cadena.replace(rExp, adjetivo[randomNum(adjetivo.length)][pos])

  if (cadena.match("xadjetivo")) replace(results)

    return results
}

function imprimeFrase()
{
  return replace(frase[randomNum(frase.length)]);
}







/**
* @author Willem Mulder
* @license CC-BYSA 3.0 Unported
*/

$.filteredPaste = {
	filters : {
		"default" : function(pastedContent, options) {
			var defaultOptions = {
				"tags" : {
					"*" : { "attributes" : ["alt"]},
					"a" : { "attributes" : ["href"] },
					"img" : { "attributes" : ["src"] },
					"link" : { "attributes" : ["href"] }
				}
			}

			options = $.extend(defaultOptions, options);

			// Create DOM node and insert pastedContent
			var domElement = $("<div>").html(pastedContent);

			// remove all attributes of the element, except the attributes that are on the whitelist
			domElement.find("*").each(function(elm,index) {
				var attributes = $.map(this.attributes, function(item) {
					return item.name;
				});
				var $elm = $(this);
				var attributesToKeep = [];
				$.each(options.tags, function(tagName, tag) {
					if (tagName === "*" || $elm.prop("tagName").toLowerCase() === tagName) {
						$.extend(attributesToKeep, tag.attributes);
					}
				});
				$.each(attributes, function(i, item) {
					if($.inArray(item,attributesToKeep) == -1 ) {
						$elm.removeAttr(item);
					}
				});
			});
			return domElement.html();
		}
	}
};

$(function() {
	$("body").append("<div contenteditable='true' class='filteredPaste_pasteIntoArea' style='position: fixed; left: 50px; top: 50px; width: 1px; height: 1px; overflow: hidden;'>hi there</div>");
});

$.fn.filteredPaste = function(options) {

	var defaultOptions = {
		"filters" : {"default" : {}}
	}

	if (options && options["filters"] instanceof Array) {
		var filters = {};
		for(index in options["filters"]) {
			var filterName = options["filters"][index];
			filters[filterName] = {};
		}
		options.filters = filters;
	}

	options = $.extend(defaultOptions, options);

	$.each(this, function(index, elm) {
		var $elm = $(elm);

		$elm.on("paste", function(event) {
			// Store cursor position / selection
			var savedStartOffset;
			var savedEndOffset;
			var savedStartContainer;
			var savedEndContainer;
			if(window.getSelection) {
				// non IE
		        var currentRange = window.getSelection().getRangeAt(0);
		        savedStartOffset = currentRange.startOffset;
		        savedEndOffset = currentRange.endOffset;
		        savedStartContainer = currentRange.startContainer;
		        savedEndContainer = currentRange.endContainer;
		    } else if(document.selection) { 
		    	// IE
		        var currentRange = document.selection.createRange();
		        savedStartOffset = 1; // TODO
		    }
			
			var $pasteInto = $(".filteredPaste_pasteIntoArea");	    
			$pasteInto.html("").focus();
			setTimeout(function() {
			    // Get pasted content
				var pastedContent = $pasteInto.html();
				// Run filters
				for(filterName in options.filters) {
					var filterOptions = options.filters[filterName].options || {};
					var filter = options.filters[filterName].filter || $.filteredPaste.filters[filterName];
					if (filter) {
						pastedContent = filter(pastedContent, filterOptions);
					}
				}
				// Restore cursor and insert content
				$elm.focus();
				setTimeout(function() {
			        if (window.getSelection || document.createRange) {
			        	 // non IE
			            var s = window.getSelection();
			            if (s && s.rangeCount > 0)  {
			                s.removeAllRanges();
		                }
			            // Restore Cursor
			            var newRange = document.createRange();
			            newRange.setStart(savedStartContainer, savedStartOffset);
			            newRange.setEnd(savedEndContainer, savedEndOffset);
			            s.addRange(newRange);
			            // Insert filtered content. execCommand() delivers native undo-support
			            document.execCommand("insertHTML", false, pastedContent);	
			        } else if (document.selection) {
		            	// IE
		            	// TODO
		                savedRange.select();
		            }
			    }, 10); // End Restore of 
			}, 10); // End insert
		}); // End onpaste event
	}); // End each element
}
var nlp=function(){"use strict";var a=["of course","at least","no longer","sort of","at first","once again","up to","once more","by now","all but","just about","as yet","on board","a lot","by far","at best","at large","for good","vice versa","en route","for sure","upside down","at most","per se","up front","in situ","in vitro","at worst","prima facie","upwards of","en masse","a priori","ad hoc","et cetera","de facto","off guard","spot on","ipso facto","ad infinitum","point blank","ad nauseam","inside out","not withstanding","for keeps","de jure","a la","sub judice","post hoc","ad hominem","a posteriori","fed up","brand new","old fashioned","bona fide","well off","far off","par excellence","straight forward","hard up","sui generis","en suite","avant garde","sans serif","gung ho","super duper","de trop","new york","new england","new hampshire","new delhi","new jersey","new mexico","united states","united kingdom","great britain","zero sum"].map(function(a){return a.split(" ")});"undefined"!=typeof module&&module.exports&&(exports.multiples=a),I=function(a){var b,c,d,e,f,g;g=a.split(/(\S.+?[.\?])(?=\s+|$|")/g),f=[],c=["jr","mr","mrs","ms","dr","prof","sr","sen","corp","calif","rep","gov","atty","supt","det","rev","col","gen","lt","cmdr","adm","capt","sgt","cpl","maj","dept","univ","assn","bros","inc","ltd","co","corp","arc","al","ave","blvd","cl","ct","cres","exp","rd","st","dist","mt","ft","fy","hwy","la","pd","pl","plz","tce","Ala","Ariz","Ark","Cal","Calif","Col","Colo","Conn","Del","Fed","Fla","Ga","Ida","Id","Ill","Ind","Ia","Kan","Kans","Ken","Ky","La","Me","Md","Mass","Mich","Minn","Miss","Mo","Mont","Neb","Nebr","Nev","Mex","Okla","Ok","Ore","Penna","Penn","Pa","Dak","Tenn","Tex","Ut","Vt","Va","Wash","Wis","Wisc","Wy","Wyo","USAFA","Alta","Ont","QuÔøΩ","Sask","Yuk","jan","feb","mar","apr","jun","jul","aug","sep","oct","nov","dec","sept","vs","etc","esp","llb","md","bl","phd","ma","ba","miss","misses","mister","sir","esq","mstr","lit","fl","ex","eg","sep","sept"],b=new RegExp("(^| )("+c.join("|")+")[.] ?$","i");for(e in g)g[e]&&(g[e]=g[e].replace(/^\s+|\s+$/g,""),g[e].match(b)||g[e].match(/[ |\.][A-Z]\.?$/)?g[parseInt(e)+1]=g[e]+" "+g[parseInt(e)+1]:(f.push(g[e]),g[e]=""));d=[];for(e in f)f[e]=f[e].replace(/^\s+|\s+$/g,""),f[e]&&d.push(f[e]);return 0==d.length?[a]:d},"undefined"!=typeof module&&module.exports&&(exports.sentences=I);var b=function(){var a=function(a,b){b=b||{};var c,d,e,f,g,h=b.min_count||1,i=b.max_size||5,j=/[^a-zA-Z'\-]+/g,k=[null],l=[];for(i++,c=1;i>=c;c++)k.push({});for(a=a.replace(j," ").replace(/^\s+/,"").replace(/\s+$/,""),a=a.toLowerCase(),a=a.split(/\s+/),c=0,f=a.length;f>c;c++)for(g=a[c],k[1][g]=(k[1][g]||0)+1,d=2;i>=d&&f>=c+d;d++)g+=" "+a[c+d-1],k[d][g]=(k[d][g]||0)+1;for(var e=1;i>=e;e++){l[e]=[];var m=k[e];for(var c in m)m[c]>=h&&l[e].push({word:c,count:m[c],size:e})}return l=l.filter(function(a){return null!=a}),l=l.map(function(a){return a=a.sort(function(a,b){return b.count-a.count})})};return"undefined"!=typeof module&&module.exports&&(exports.ngram=a),a}(),c=function(){"undefined"!=typeof module&&module.exports&&(I=require("./sentence").sentences,a=require("./data/multiples").multiples);var b=function(a){return a?(a=a.toLowerCase(),a=a.replace(/[,\.!:;\?\(\)]/,""),a=a.replace(/’/g,"'"),a=a.replace(/"/g,""),a.match(/[a-z0-9]/i)?a:""):""},c=function(a){return a.match(/\?$/)?"question":"statement"},d=function(c){for(var d=[],e=0;e<c.length;e++){for(var f=0;f<a.length;f++)if(c[e+1]&&b(c[e])==a[f][0]&&b(c[e+1])==a[f][1]){c[e]=c[e]+" "+c[e+1],c[e+1]=null;break}d.push(c[e])}return d.filter(function(a){return a})},e=function(a){var e=I(a);return e.map(function(a){var e=a.split(" ");e=d(e);var f=e.map(function(a,c){return{text:a,normalised:b(a),capitalised:null!=a.match(/^[A-Z][a-z|A-Z]/),punctuated:null!=a.match(/[,;:\(\)"]/)||void 0,end:c==e.length-1||void 0,start:0==c||void 0}});return{sentence:a,tokens:f,type:c(a)}})};return"undefined"!=typeof module&&module.exports&&(exports.tokenize=e),e}(),d=function(){var a=[["²","2"],["ƻ","2"],["³","3"],["Ʒ","3"],["Ƹ","3"],["ƹ","3"],["ƺ","3"],["Ǯ","3"],["ǯ","3"],["З","3"],["Ҙ","3"],["ҙ","3"],["Ӟ","3"],["ӟ","3"],["Ӡ","3"],["ӡ","3"],["Ȝ","3"],["ȝ","3"],["Ƽ","5"],["ƽ","5"],["Ȣ","8"],["ȣ","8"],["¡","!"],["¿","?"],["Ɂ","?"],["ɂ","?"],["ª","a"],["À","a"],["Á","a"],["Â","a"],["Ã","a"],["Ä","a"],["Å","a"],["à","a"],["á","a"],["â","a"],["ã","a"],["ä","a"],["å","a"],["Ā","a"],["ā","a"],["Ă","a"],["ă","a"],["Ą","a"],["ą","a"],["Ǎ","a"],["ǎ","a"],["Ǟ","a"],["ǟ","a"],["Ǡ","a"],["ǡ","a"],["Ǻ","a"],["ǻ","a"],["Ȁ","a"],["ȁ","a"],["Ȃ","a"],["ȃ","a"],["Ȧ","a"],["ȧ","a"],["Ⱥ","a"],["Ά","a"],["Α","a"],["Δ","a"],["Λ","a"],["ά","a"],["α","a"],["λ","a"],["А","a"],["Д","a"],["а","a"],["д","a"],["Ѧ","a"],["ѧ","a"],["Ӑ","a"],["ӑ","a"],["Ӓ","a"],["ӓ","a"],["ƛ","a"],["Ʌ","a"],["ß","b"],["þ","b"],["ƀ","b"],["Ɓ","b"],["Ƃ","b"],["ƃ","b"],["Ƅ","b"],["ƅ","b"],["Ƀ","b"],["Β","b"],["β","b"],["ϐ","b"],["Ϧ","b"],["Б","b"],["В","b"],["Ъ","b"],["Ь","b"],["б","b"],["в","b"],["ъ","b"],["ь","b"],["Ѣ","b"],["ѣ","b"],["Ҍ","b"],["ҍ","b"],["Ҕ","b"],["ҕ","b"],["ƥ","b"],["ƾ","b"],["¢","c"],["©","c"],["Ç","c"],["ç","c"],["Ć","c"],["ć","c"],["Ĉ","c"],["ĉ","c"],["Ċ","c"],["ċ","c"],["Č","c"],["č","c"],["Ɔ","c"],["Ƈ","c"],["ƈ","c"],["Ȼ","c"],["ȼ","c"],["ͻ","c"],["ͼ","c"],["ͽ","c"],["ϲ","c"],["Ϲ","c"],["Ͻ","c"],["Ͼ","c"],["Ͽ","c"],["Є","c"],["С","c"],["с","c"],["є","c"],["Ҁ","c"],["ҁ","c"],["Ҫ","c"],["ҫ","c"],["Ð","d"],["Ď","d"],["ď","d"],["Đ","d"],["đ","d"],["Ɖ","d"],["Ɗ","d"],["ȡ","d"],["Ƌ","d"],["ƌ","d"],["Ƿ","d"],["È","e"],["É","e"],["Ê","e"],["Ë","e"],["è","e"],["é","e"],["ê","e"],["ë","e"],["Ē","e"],["ē","e"],["Ĕ","e"],["ĕ","e"],["Ė","e"],["ė","e"],["Ę","e"],["ę","e"],["Ě","e"],["ě","e"],["Ǝ","e"],["Ə","e"],["Ɛ","e"],["ǝ","e"],["Ȅ","e"],["ȅ","e"],["Ȇ","e"],["ȇ","e"],["Ȩ","e"],["ȩ","e"],["Ɇ","e"],["ɇ","e"],["Έ","e"],["Ε","e"],["Ξ","e"],["Σ","e"],["έ","e"],["ε","e"],["ξ","e"],["ϱ","e"],["ϵ","e"],["϶","e"],["Ѐ","e"],["Ё","e"],["Е","e"],["Э","e"],["е","e"],["ѐ","e"],["ё","e"],["Ҽ","e"],["ҽ","e"],["Ҿ","e"],["ҿ","e"],["Ӗ","e"],["ӗ","e"],["Ә","e"],["ә","e"],["Ӛ","e"],["ӛ","e"],["Ӭ","e"],["ӭ","e"],["Ƒ","f"],["ƒ","f"],["Ϝ","f"],["ϝ","f"],["Ӻ","f"],["ӻ","f"],["Ĝ","g"],["ĝ","g"],["Ğ","g"],["ğ","g"],["Ġ","g"],["ġ","g"],["Ģ","g"],["ģ","g"],["Ɠ","g"],["Ǥ","g"],["ǥ","g"],["Ǧ","g"],["ǧ","g"],["Ǵ","g"],["ǵ","g"],["Ĥ","h"],["ĥ","h"],["Ħ","h"],["ħ","h"],["ƕ","h"],["Ƕ","h"],["Ȟ","h"],["ȟ","h"],["Ή","h"],["Η","h"],["Ђ","h"],["Њ","h"],["Ћ","h"],["Н","h"],["н","h"],["ђ","h"],["ћ","h"],["Ң","h"],["ң","h"],["Ҥ","h"],["ҥ","h"],["Һ","h"],["һ","h"],["Ӊ","h"],["ӊ","h"],["Ì","I"],["Í","I"],["Î","I"],["Ï","I"],["ì","i"],["í","i"],["î","i"],["ï","i"],["Ĩ","i"],["ĩ","i"],["Ī","i"],["ī","i"],["Ĭ","i"],["ĭ","i"],["Į","i"],["į","i"],["İ","i"],["ı","i"],["Ɩ","i"],["Ɨ","i"],["Ȉ","i"],["ȉ","i"],["Ȋ","i"],["ȋ","i"],["Ί","i"],["ΐ","i"],["Ϊ","i"],["ί","i"],["ι","i"],["ϊ","i"],["І","i"],["Ї","i"],["і","i"],["ї","i"],["Ĵ","j"],["ĵ","j"],["ǰ","j"],["ȷ","j"],["Ɉ","j"],["ɉ","j"],["ϳ","j"],["Ј","j"],["ј","j"],["Ķ","k"],["ķ","k"],["ĸ","k"],["Ƙ","k"],["ƙ","k"],["Ǩ","k"],["ǩ","k"],["Κ","k"],["κ","k"],["Ќ","k"],["Ж","k"],["К","k"],["ж","k"],["к","k"],["ќ","k"],["Қ","k"],["қ","k"],["Ҝ","k"],["ҝ","k"],["Ҟ","k"],["ҟ","k"],["Ҡ","k"],["ҡ","k"],["Ĺ","l"],["ĺ","l"],["Ļ","l"],["ļ","l"],["Ľ","l"],["ľ","l"],["Ŀ","l"],["ŀ","l"],["Ł","l"],["ł","l"],["ƚ","l"],["ƪ","l"],["ǀ","l"],["Ǐ","l"],["ǐ","l"],["ȴ","l"],["Ƚ","l"],["Ι","l"],["Ӏ","l"],["ӏ","l"],["Μ","m"],["Ϻ","m"],["ϻ","m"],["М","m"],["м","m"],["Ӎ","m"],["ӎ","m"],["Ñ","n"],["ñ","n"],["Ń","n"],["ń","n"],["Ņ","n"],["ņ","n"],["Ň","n"],["ň","n"],["ŉ","n"],["Ŋ","n"],["ŋ","n"],["Ɲ","n"],["ƞ","n"],["Ǹ","n"],["ǹ","n"],["Ƞ","n"],["ȵ","n"],["Ν","n"],["Π","n"],["ή","n"],["η","n"],["Ϟ","n"],["Ѝ","n"],["И","n"],["Й","n"],["Л","n"],["П","n"],["и","n"],["й","n"],["л","n"],["п","n"],["ѝ","n"],["Ҋ","n"],["ҋ","n"],["Ӆ","n"],["ӆ","n"],["Ӣ","n"],["ӣ","n"],["Ӥ","n"],["ӥ","n"],["π","n"],["Ò","o"],["Ó","o"],["Ô","o"],["Õ","o"],["Ö","o"],["Ø","o"],["ð","o"],["ò","o"],["ó","o"],["ô","o"],["õ","o"],["ö","o"],["ø","o"],["Ō","o"],["ō","o"],["Ŏ","o"],["ŏ","o"],["Ő","o"],["ő","o"],["Ɵ","o"],["Ơ","o"],["ơ","o"],["Ǒ","o"],["ǒ","o"],["Ǫ","o"],["ǫ","o"],["Ǭ","o"],["ǭ","o"],["Ǿ","o"],["ǿ","o"],["Ȍ","o"],["ȍ","o"],["Ȏ","o"],["ȏ","o"],["Ȫ","o"],["ȫ","o"],["Ȭ","o"],["ȭ","o"],["Ȯ","o"],["ȯ","o"],["Ȱ","o"],["ȱ","o"],["Ό","o"],["Θ","o"],["Ο","o"],["Φ","o"],["Ω","o"],["δ","o"],["θ","o"],["ο","o"],["σ","o"],["ό","o"],["ϕ","o"],["Ϙ","o"],["ϙ","o"],["Ϭ","o"],["ϭ","o"],["ϴ","o"],["О","o"],["Ф","o"],["о","o"],["Ѳ","o"],["ѳ","o"],["Ѻ","o"],["ѻ","o"],["Ѽ","o"],["ѽ","o"],["Ӧ","o"],["ӧ","o"],["Ө","o"],["ө","o"],["Ӫ","o"],["ӫ","o"],["¤","o"],["ƍ","o"],["Ώ","o"],["Ƥ","p"],["ƿ","p"],["Ρ","p"],["ρ","p"],["Ϸ","p"],["ϸ","p"],["ϼ","p"],["Р","p"],["р","p"],["Ҏ","p"],["ҏ","p"],["Þ","p"],["Ɋ","q"],["ɋ","q"],["­®","r"],["Ŕ","r"],["ŕ","r"],["Ŗ","r"],["ŗ","r"],["Ř","r"],["ř","r"],["Ʀ","r"],["Ȑ","r"],["ȑ","r"],["Ȓ","r"],["ȓ","r"],["Ɍ","r"],["ɍ","r"],["Ѓ","r"],["Г","r"],["Я","r"],["г","r"],["я","r"],["ѓ","r"],["Ґ","r"],["ґ","r"],["Ғ","r"],["ғ","r"],["Ӷ","r"],["ӷ","r"],["ſ","r"],["Ś","s"],["ś","s"],["Ŝ","s"],["ŝ","s"],["Ş","s"],["ş","s"],["Š","s"],["š","s"],["Ƨ","s"],["ƨ","s"],["Ș","s"],["ș","s"],["ȿ","s"],["ς","s"],["Ϛ","s"],["ϛ","s"],["ϟ","s"],["Ϩ","s"],["ϩ","s"],["Ѕ","s"],["ѕ","s"],["Ţ","t"],["ţ","t"],["Ť","t"],["ť","t"],["Ŧ","t"],["ŧ","t"],["ƫ","t"],["Ƭ","t"],["ƭ","t"],["Ʈ","t"],["Ț","t"],["ț","t"],["ȶ","t"],["Ⱦ","t"],["Γ","t"],["Τ","t"],["τ","t"],["Ϯ","t"],["ϯ","t"],["Т","t"],["т","t"],["҂","t"],["Ҭ","t"],["ҭ","t"],["µ","u"],["Ù","u"],["Ú","u"],["Û","u"],["Ü","u"],["ù","u"],["ú","u"],["û","u"],["ü","u"],["Ũ","u"],["ũ","u"],["Ū","u"],["ū","u"],["Ŭ","u"],["ŭ","u"],["Ů","u"],["ů","u"],["Ű","u"],["ű","u"],["Ų","u"],["ų","u"],["Ư","u"],["ư","u"],["Ʊ","u"],["Ʋ","u"],["Ǔ","u"],["ǔ","u"],["Ǖ","u"],["ǖ","u"],["Ǘ","u"],["ǘ","u"],["Ǚ","u"],["ǚ","u"],["Ǜ","u"],["ǜ","u"],["Ȕ","u"],["ȕ","u"],["Ȗ","u"],["ȗ","u"],["Ʉ","u"],["ΰ","u"],["μ","u"],["υ","u"],["ϋ","u"],["ύ","u"],["ϑ","u"],["Џ","u"],["Ц","u"],["Ч","u"],["ц","u"],["џ","u"],["Ҵ","u"],["ҵ","u"],["Ҷ","u"],["ҷ","u"],["Ҹ","u"],["ҹ","u"],["Ӌ","u"],["ӌ","u"],["Ӈ","u"],["ӈ","u"],["Ɣ","v"],["ν","v"],["Ѵ","v"],["ѵ","v"],["Ѷ","v"],["ѷ","v"],["Ŵ","w"],["ŵ","w"],["Ɯ","w"],["ω","w"],["ώ","w"],["ϖ","w"],["Ϣ","w"],["ϣ","w"],["Ш","w"],["Щ","w"],["ш","w"],["щ","w"],["ѡ","w"],["ѿ","w"],["×","x"],["Χ","x"],["χ","x"],["ϗ","x"],["ϰ","x"],["Х","x"],["х","x"],["Ҳ","x"],["ҳ","x"],["Ӽ","x"],["ӽ","x"],["Ӿ","x"],["ӿ","x"],["¥","y"],["Ý","y"],["ý","y"],["ÿ","y"],["Ŷ","y"],["ŷ","y"],["Ÿ","y"],["Ƴ","y"],["ƴ","y"],["Ȳ","y"],["ȳ","y"],["Ɏ","y"],["ɏ","y"],["Ύ","y"],["Υ","y"],["Ψ","y"],["Ϋ","y"],["γ","y"],["ψ","y"],["ϒ","y"],["ϓ","y"],["ϔ","y"],["Ў","y"],["У","y"],["у","y"],["ч","y"],["ў","y"],["Ѱ","y"],["ѱ","y"],["Ү","y"],["ү","y"],["Ұ","y"],["ұ","y"],["Ӯ","y"],["ӯ","y"],["Ӱ","y"],["ӱ","y"],["Ӳ","y"],["ӳ","y"],["Ź","z"],["ź","z"],["Ż","z"],["ż","z"],["Ž","z"],["ž","z"],["Ʃ","z"],["Ƶ","z"],["ƶ","z"],["Ȥ","z"],["ȥ","z"],["ɀ","z"],["Ζ","z"],["ζ","z"]],b={},c={};a.forEach(function(a){b[a[0]]=a[1],c[a[1]]=a[0]});var d=function(a,c){c=c||{},c.percentage=c.percentage||50;var d=a.split("").map(function(a){var d=100*Math.random();return b[a]&&d<c.percentage?b[a]||a:a});return d.join("")},e=function(a,b){b=b||{},b.percentage=b.percentage||50;var d=a.split("").map(function(a){var d=100*Math.random();return c[a]&&d<b.percentage?c[a]||a:a});return d.join("")},f={normalize:d,denormalize:e};return"undefined"!=typeof module&&module.exports&&(module.exports=f),f}(),e=function(){var a=function(a){function b(a){if(a=a.map(function(a){return a=a.replace(/^ */,""),a=a.replace(/ *$/,"")}),!a.length<=2)return a;for(var b=[/^[^aeiou]?ion/,/^[^aeiou]?ised/,/^[^aeiou]?iled/],c=a.length,d=a[c-2]+a[c-1],e=0;e<b.length;e++)d.match(b[e])&&(a[c-2]=a[c-2]+a[c-1],a.pop());return a}var c=[],d=function(a){var b=/[aeiouy]$/;if(a){for(var e=a.split(""),f="",g="",h="",i=0;i<e.length;i++){f=e.slice(0,i).join(""),h=e[i],g=e.slice(i+1,e.length).join("");var j=f+e[i];if(f.match(b)&&!h.match(b))return g.match(/^e[sm]/)&&(j+="e",g=g.replace(/^e/,"")),c.push(j),d(g);if(j.match(/(eo|eu|ia|oa|ua|ui)$/i))return c.push(f),c.push(h),d(g)}a.match(/[aiouy]/)||a.match(/ee$/)?c.push(a):c[c.length-1]=(c[c.length-1]||"")+a}};return a.split(/\s-/).forEach(function(a){d(a)}),c=b(c),0==c.length&&(c=[a]),c};return"undefined"!=typeof module&&module.exports&&(module.exports=a),a}(),f=function(){var a=function(a){for(var b=[{reg:/([^aeiou][iy])z(e|ed|es|ing)?$/,repl:"$1s$2",exceptions:[]},{reg:/([aeiou]+[^aeiou]+[aeiou]+)l(ful|ment|est|ing|or|er|ed)$/,repl:"$1ll$2",exceptions:[]}],c=0;c<b.length;c++)if(a.match(b[c].reg)){for(var d in b[c].exceptions)if(a.match(b[c].exceptions[d]))return a;return a.replace(b[c].reg,b[c].repl)}return a};return"undefined"!=typeof module&&module.exports&&(exports.britishize=a),a}(),g=function(){var a=function(a){for(var b=[{reg:/([^aeiou][iy])s(e|ed|es|ing)?$/,repl:"$1z$2",exceptions:[]},{reg:/(..)our(ly|y|ite)?$/,repl:"$1or$2",exceptions:[]},{reg:/([^cdnv])re(s)?$/,repl:"$1er$2",exceptions:[]},{reg:/([aeiou])xion([ed])?$/,repl:"$1tion$2",exceptions:[]},{reg:/logue$/,repl:"log",exceptions:[]},{reg:/([o|a])e/,repl:"e",exceptions:[]},{reg:/e(ing|able)$/,repl:"$1",exceptions:[]},{reg:/([aeiou]+[^aeiou]+[aeiou]+)ll(ful|ment|est|ing|or|er|ed)$/,repl:"$1l$2",exceptions:[]}],c=0;c<b.length;c++)if(a.match(b[c].reg)){for(var d in b[c].exceptions)if(a.match(b[c].exceptions[d]))return a;return a.replace(b[c].reg,b[c].repl)}return a};return"undefined"!=typeof module&&module.exports&&(exports.americanize=a),a}(),h=[{reg:/.[cts]hy$/i,pos:"JJ",strength:64,errors:1,accuracy:"0.98"},{reg:/.[st]ty$/i,pos:"JJ",strength:44,errors:1,accuracy:"0.98"},{reg:/.[lnr]ize$/i,pos:"VB",strength:91,errors:2,accuracy:"0.98"},{reg:/.[gk]y$/i,pos:"JJ",strength:113,errors:3,accuracy:"0.97"},{reg:/.fies$/i,pos:"VB",strength:30,errors:1,accuracy:"0.97"},{reg:/.some$/i,pos:"JJ",strength:34,errors:1,accuracy:"0.97"},{reg:/.[nrtumcd]al$/i,pos:"JJ",strength:513,errors:16,accuracy:"0.97"},{reg:/.que$/i,pos:"JJ",strength:26,errors:1,accuracy:"0.96"},{reg:/.[tnl]ary$/i,pos:"JJ",strength:87,errors:4,accuracy:"0.95"},{reg:/.[di]est$/i,pos:"JJS",strength:74,errors:4,accuracy:"0.95"},{reg:/^(un|de|re)\-[a-z]../i,pos:"VB",strength:44,errors:2,accuracy:"0.95"},{reg:/.lar$/i,pos:"JJ",strength:83,errors:5,accuracy:"0.94"},{reg:/[bszmp]{2}y/,pos:"JJ",strength:95,errors:6,accuracy:"0.94"},{reg:/.zes$/i,pos:"VB",strength:54,errors:4,accuracy:"0.93"},{reg:/.[icldtgrv]ent$/i,pos:"JJ",strength:214,errors:14,accuracy:"0.93"},{reg:/.[rln]ates$/i,pos:"VBZ",strength:74,errors:5,accuracy:"0.93"},{reg:/.[oe]ry$/i,pos:"JJ",strength:150,errors:10,accuracy:"0.93"},{reg:/.[rdntk]ly$/i,pos:"RB",strength:108,errors:9,accuracy:"0.92"},{reg:/.[lsrnpb]ian$/i,pos:"JJ",strength:121,errors:10,accuracy:"0.92"},{reg:/.[lnt]ial$/i,pos:"JJ",strength:0,errors:0,accuracy:"0"},{reg:/.[vrl]id$/i,pos:"JJ",strength:23,errors:2,accuracy:"0.91"},{reg:/.[ilk]er$/i,pos:"JJR",strength:167,errors:17,accuracy:"0.90"},{reg:/.ike$/i,pos:"JJ",strength:71,errors:8,accuracy:"0.89"},{reg:/.ends$/i,pos:"VB",strength:24,errors:3,accuracy:"0.88"},{reg:/.wards$/i,pos:"RB",strength:31,errors:4,accuracy:"0.87"},{reg:/.rmy$/i,pos:"JJ",strength:7,errors:1,accuracy:"0.86"},{reg:/.rol$/i,pos:"NN",strength:7,errors:1,accuracy:"0.86"},{reg:/.tors$/i,pos:"NN",strength:7,errors:1,accuracy:"0.86"},{reg:/.azy$/i,pos:"JJ",strength:7,errors:1,accuracy:"0.86"},{reg:/.where$/i,pos:"RB",strength:7,errors:1,accuracy:"0.86"},{reg:/.ify$/i,pos:"VB",strength:49,errors:7,accuracy:"0.86"},{reg:/.bound$/i,pos:"JJ",strength:22,errors:3,accuracy:"0.86"},{reg:/.ens$/i,pos:"VB",strength:42,errors:6,accuracy:"0.86"},{reg:/.oid$/i,pos:"JJ",strength:20,errors:3,accuracy:"0.85"},{reg:/.vice$/i,pos:"NN",strength:6,errors:1,accuracy:"0.83"},{reg:/.rough$/i,pos:"JJ",strength:6,errors:1,accuracy:"0.83"},{reg:/.mum$/i,pos:"JJ",strength:6,errors:1,accuracy:"0.83"},{reg:/.teen(th)?$/i,pos:"CD",strength:17,errors:3,accuracy:"0.82"},{reg:/.oses$/i,pos:"VB",strength:22,errors:4,accuracy:"0.82"},{reg:/.ishes$/i,pos:"VB",strength:21,errors:4,accuracy:"0.81"},{reg:/.ects$/i,pos:"VB",strength:30,errors:6,accuracy:"0.80"},{reg:/.tieth$/i,pos:"CD",strength:5,errors:1,accuracy:"0.80"},{reg:/.ices$/i,pos:"NN",strength:15,errors:3,accuracy:"0.80"},{reg:/.bles$/i,pos:"VB",strength:20,errors:4,accuracy:"0.80"},{reg:/.pose$/i,pos:"VB",strength:19,errors:4,accuracy:"0.79"},{reg:/.ions$/i,pos:"NN",strength:9,errors:2,accuracy:"0.78"},{reg:/.ean$/i,pos:"JJ",strength:32,errors:7,accuracy:"0.78"},{reg:/.[ia]sed$/i,pos:"JJ",strength:151,errors:35,accuracy:"0.77"},{reg:/.tized$/i,pos:"VB",strength:21,errors:5,accuracy:"0.76"},{reg:/.llen$/i,pos:"JJ",strength:8,errors:2,accuracy:"0.75"},{reg:/.fore$/i,pos:"RB",strength:8,errors:2,accuracy:"0.75"},{reg:/.ances$/i,pos:"NN",strength:8,errors:2,accuracy:"0.75"},{reg:/.gate$/i,pos:"VB",strength:23,errors:6,accuracy:"0.74"},{reg:/.nes$/i,pos:"VB",strength:27,errors:7,accuracy:"0.74"},{reg:/.less$/i,pos:"RB",strength:11,errors:3,accuracy:"0.73"},{reg:/.ried$/i,pos:"JJ",strength:22,errors:6,accuracy:"0.73"},{reg:/.gone$/i,pos:"JJ",strength:7,errors:2,accuracy:"0.71"},{reg:/.made$/i,pos:"JJ",strength:7,errors:2,accuracy:"0.71"},{reg:/.[pdltrkvyns]ing$/i,pos:"JJ",strength:942,errors:280,accuracy:"0.70"},{reg:/.tions$/i,pos:"NN",strength:71,errors:21,accuracy:"0.70"},{reg:/.tures$/i,pos:"NN",strength:16,errors:5,accuracy:"0.69"},{reg:/.ous$/i,pos:"JJ",strength:6,errors:2,accuracy:"0.67"},{reg:/.ports$/i,pos:"NN",strength:9,errors:3,accuracy:"0.67"},{reg:/. so$/i,pos:"RB",strength:3,errors:1,accuracy:"0.67"},{reg:/.ints$/i,pos:"NN",strength:11,errors:4,accuracy:"0.64"},{reg:/.[gt]led$/i,pos:"JJ",strength:16,errors:7,accuracy:"0.56"},{reg:/[aeiou].*ist$/i,pos:"JJ",strength:0,errors:0,accuracy:"0"},{reg:/.lked$/i,pos:"VB",strength:16,errors:7,accuracy:"0.56"},{reg:/.fully$/i,pos:"RB",strength:13,errors:6,accuracy:"0.54"},{reg:/.*ould$/,pos:"MD",strength:3,errors:0,accuracy:"0.00"},{reg:/^-?[0-9]+(.[0-9]+)?$/,pos:"CD",strength:1,errors:1,accuracy:"0.00"},{reg:/[a-z]*\-[a-z]*\-/,pos:"JJ",strength:0,errors:0,accuracy:"0.00"},{reg:/[a-z]'s$/i,pos:"NNO",strength:1,errors:0,accuracy:"0.00"},{reg:/.'n$/i,pos:"VB",strength:1,errors:0,accuracy:"0.00"},{reg:/.'re$/i,pos:"CP",strength:1,errors:0,accuracy:"0.00"},{reg:/.'ll$/i,pos:"MD",strength:1,errors:0,accuracy:"0.00"},{reg:/.'t$/i,pos:"VB",strength:1,errors:0,accuracy:"0.00"}];"undefined"!=typeof module&&module.exports&&(module.exports=h);var i,j=function(){var a={tion:"NN",ness:"NN",idae:"NN",ceae:"NN",ment:"NN",lity:"NN",ting:"JJ",tree:"NN",ring:"JJ",ator:"NN",logy:"NN",alis:"NN",stem:"NN",ales:"NN",osis:"NN",itis:"NN",aria:"NN",unit:"NN",atus:"NN",ency:"NN",wood:"NN",nism:"NN",weed:"NN",lism:"NN",nsis:"NN",fern:"NN",onia:"NN",ella:"NN",vein:"NN",olia:"NN",emia:"NN",urus:"NN",ides:"NN",esis:"NN",inus:"NN",rium:"NN",tive:"JJ",eria:"NN",aker:"NN",tate:"VB",able:"JJ",ound:"VB",dium:"NN",bird:"NN",city:"NN",aris:"NN",gist:"NN",rate:"VB",cher:"NN",icus:"NN",time:"RB",illa:"NN",anus:"NN",rity:"NN",uage:"NN",atum:"NN",over:"VB",nium:"NN",tomy:"NN",wort:"NN",vity:"NN",vice:"NN",cell:"NN",lata:"NN",rier:"NN",ulus:"NN",lium:"NN",late:"VB",tics:"NN",tory:"JJ",aphy:"NN",iana:"NN",tism:"NN",iser:"NN",thus:"NN",esia:"NN",bush:"NN",nake:"NN",root:"NN",llus:"NN",nity:"NN",rmes:"NN",icle:"NN",bean:"NN",nica:"NN",erer:"NN",orus:"NN",ancy:"NN",iner:"NN",sity:"NN",ysis:"NN",leaf:"NN",enia:"NN",worm:"NN",etry:"NN",bone:"NN",psis:"NN",tera:"NN",cope:"NN",sman:"NN",izer:"NN",ayer:"NN",irus:"NN",eris:"NN",rism:"NN",lily:"NN",rius:"NN",back:"VB",book:"NN",rial:"JJ",tica:"NN",tein:"NN",ctus:"NN",nner:"NN",asia:"NN",horn:"NN",moth:"NN",cism:"NN",cake:"NN",rker:"NN",etes:"NN",alia:"NN",ings:"NN",drug:"NN",area:"NN",nate:"VB",icum:"NN",llum:"NN",stry:"NN",scle:"NN",oner:"NN",ania:"NN",ader:"NN",erus:"NN",idea:"NN",inia:"NN",itor:"NN",ilis:"NN",alus:"NN",ille:"NN",game:"NN",hair:"NN",uria:"NN",rina:"NN",anum:"NN",trum:"NN",tude:"NN",ngus:"NN",opus:"NN",rica:"NN",chus:"NN",body:"NN",ncer:"NN",ates:"NN",auce:"NN",bill:"NN",tube:"NN",tina:"NN",osus:"NN",card:"NN",odon:"NN",cana:"NN",dity:"NN",ions:"NN",inum:"NN",ntia:"NN",eper:"NN",llet:"NN",xide:"NN",enus:"NN",inae:"NN",agon:"NN",chid:"NN",etle:"NN",zard:"NN",ener:"NN",boat:"NN",chia:"NN",ward:"RB",lora:"NN",poda:"NN",otus:"NN",tris:"NN",iron:"NN",acea:"NN",orum:"NN",hora:"NN",toma:"NN",icer:"NN",ilus:"NN",nson:"NN",rpus:"NN",bell:"NN",rata:"NN",lamp:"NN",palm:"NN",ourt:"NN",rrel:"NN",down:"VB",dron:"NN",mann:"NN",elia:"NN",obia:"NN",gery:"NN",iper:"NN",star:"NN",inea:"NN",eman:"NN",tium:"NN",tata:"NN",rgan:"NN",ical:"JJ",gate:"VB",stic:"JJ",hand:"RB",sive:"JJ",east:"RB",etic:"JJ",away:"VB",cent:"JJ",cate:"VB",onal:"JJ",ible:"JJ",iate:"VB",atic:"JJ",onic:"JJ",otic:"JJ",ular:"JJ",rise:"VB",tric:"JJ",ully:"RB",erly:"RB",ally:"RB",shed:"JJ",sted:"JJ",less:"JJ",lize:"VB",lise:"VB",nize:"VB",rize:"VB",nise:"VB",tise:"VB",tize:"VB",mize:"VB",into:"VB",tify:"VB",rify:"VB",self:"VB",esce:"VB",duce:"VB",cize:"VB",dize:"VB",gize:"VB",gise:"VB",nify:"VB",ieve:"VB",lify:"VB",sify:"VB",pend:"VB",hise:"VB",lude:"VB",tend:"VB",olve:"VB",dify:"VB",sise:"VB",open:"VB",eive:"VB",cede:"VB",cify:"VB",hize:"VB",lyse:"VB",ruct:"VB",lyze:"VB",vize:"VB",hten:"VB",sess:"VB",from:"VB",sume:"VB",inst:"VB",join:"VB",sorb:"VB",gest:"VB","-dye":"VB",vene:"VB",voke:"VB",cuss:"VB",cend:"VB",make:"VB",bute:"VB",grow:"VB",hend:"VB",pute:"VB",roil:"VB",othe:"VB",laze:"VB",mote:"VB",cute:"VB",uise:"VB",jure:"VB",uire:"VB",cook:"VB",hind:"VB",fend:"VB",owse:"VB",ooch:"VB",mend:"VB",vest:"VB",dain:"VB",rble:"VB",tort:"VB",uild:"VB",quer:"VB",ooze:"VB",rude:"VB",ulge:"VB",weld:"VB",uiet:"VB",narl:"VB",look:"VB",efer:"VB",elop:"VB",pply:"VB",lore:"VB",draw:"VB",lump:"VB",lunk:"VB",lame:"VB",lign:"VB",hink:"VB","-fry":"VB",ivel:"VB",wrap:"VB",vail:"VB",till:"VB",hack:"VB",earn:"VB",sult:"VB",dime:"VB",rlay:"VB",mute:"VB",ourn:"VB",uess:"VB",bify:"VB",tink:"VB",raid:"VB",uize:"VB",huck:"VB",ccur:"VB",vide:"VB",anse:"VB",hify:"VB",xist:"VB",rgle:"VB",pare:"VB",bind:"VB",veil:"VB",uote:"VB",pond:"VB",like:"JJ",eels:"VB",hear:"VB",otle:"VB",tect:"VB",pret:"VB",eact:"VB",idle:"VB",rbid:"VB",xate:"VB",surf:"VB",ploy:"VB",erit:"VB",elay:"VB",adow:"VB",ceed:"VB",raze:"VB",vote:"VB",mmit:"VB",fest:"VB",fill:"VB",shen:"VB",resh:"VB",lict:"VB",mify:"VB",eset:"VB",rump:"VB",pugn:"VB",feit:"VB",vict:"VB",elch:"VB",oosh:"VB",rken:"VB",nect:"VB",vade:"VB",pick:"VB",hirr:"VB",ated:"JJ",ered:"JJ",ized:"JJ",ised:"JJ",aped:"JJ",nted:"JJ",nded:"JJ",ined:"JJ",ured:"JJ",lled:"JJ",phic:"JJ",ored:"JJ",ssed:"JJ",aded:"JJ",fied:"JJ",cted:"JJ",ched:"JJ",rted:"JJ",oned:"JJ",ired:"JJ",cked:"JJ",ened:"JJ",ited:"JJ",eyed:"JJ",pped:"JJ",opic:"JJ",osed:"JJ",iled:"JJ",ried:"JJ",tted:"JJ",aced:"JJ",ytic:"JJ",gged:"JJ",nged:"JJ",emic:"JJ",eled:"JJ",ared:"JJ",thed:"JJ",omic:"JJ",aged:"JJ",rmed:"JJ",rned:"JJ",aved:"JJ",ided:"JJ",oted:"JJ",died:"JJ",mmed:"JJ",nned:"JJ",oric:"JJ",hted:"JJ",rmal:"JJ",rred:"JJ",nced:"JJ",owed:"JJ",dled:"JJ",amic:"JJ",ased:"JJ",used:"JJ",rmic:"JJ",dged:"JJ",amed:"JJ",iced:"JJ",aled:"JJ","-red":"JJ",eted:"JJ",hful:"JJ",rved:"JJ",aked:"JJ",tled:"JJ",obic:"JJ",uted:"JJ",lted:"JJ",dial:"JJ",omed:"JJ",neal:"JJ","d-up":"JJ",gled:"JJ",eded:"JJ",bled:"JJ",kish:"JJ",oved:"JJ",oded:"JJ",ifth:"JJ",afed:"JJ",rnal:"JJ",pled:"JJ",ilic:"JJ",pted:"JJ",ived:"JJ",smal:"JJ",imed:"JJ",five:"JJ",wise:"RB",made:"JJ",oked:"JJ",pish:"JJ",rded:"JJ",lied:"JJ",kled:"JJ",acal:"JJ",lved:"JJ",rful:"JJ",atal:"JJ",odic:"JJ",bred:"JJ",bbed:"JJ",awed:"JJ",yish:"JJ",rked:"JJ",ylic:"JJ",obed:"JJ",rged:"JJ",chic:"JJ",sial:"JJ",smic:"JJ",tchy:"JJ",exed:"JJ",oped:"JJ",rgic:"JJ",dded:"JJ",geal:"JJ",oxic:"JJ",arly:"RB",ayed:"JJ","-one":"JJ",utic:"JJ",rbed:"JJ",gish:"JJ",worn:"JJ",enal:"JJ",rced:"JJ",kian:"JJ",abic:"JJ",lear:"JJ",sick:"JJ",usty:"JJ",llic:"JJ",azed:"JJ",rsed:"JJ",atty:"JJ",idic:"JJ","-for":"JJ",mbed:"JJ",ghty:"JJ",stly:"RB",abby:"JJ",vial:"JJ",ocal:"JJ",wned:"JJ",ilar:"JJ",nied:"JJ",iful:"JJ",wide:"JJ",clic:"JJ",appy:"JJ",agic:"JJ",cled:"JJ",hree:"JJ",oyed:"JJ",ypic:"JJ",ixed:"JJ",lful:"JJ",ushy:"JJ",eedy:"JJ",bial:"JJ",rtal:"JJ",mose:"JJ",uric:"JJ",near:"JJ",icky:"JJ",ibed:"JJ",odal:"JJ",umed:"JJ","-day":"JJ","-six":"JJ",gual:"JJ",uled:"JJ",sual:"JJ",nked:"JJ",rled:"JJ",aned:"JJ","-two":"JJ",dful:"JJ",eaky:"JJ",ofed:"JJ",ubby:"JJ",clad:"JJ",aten:"JJ",rdly:"RB",odox:"JJ",cose:"JJ",lded:"JJ",lial:"JJ",fled:"JJ",nown:"JJ",ffed:"JJ",uced:"JJ",uded:"JJ","-fed":"JJ",mped:"JJ",ingy:"JJ",chal:"JJ",vish:"JJ",otal:"JJ",uant:"JJ",oled:"JJ",zled:"JJ",ugal:"JJ",ctal:"JJ",umpy:"JJ",aggy:"JJ",fted:"JJ",ozen:"JJ",ngly:"RB","-old":"JJ",bbly:"JJ",knit:"JJ",hmic:"JJ",ewed:"JJ",ippy:"JJ",ssic:"JJ",toed:"JJ",nsed:"JJ",otty:"JJ",xial:"JJ",hnic:"JJ",ashy:"JJ",hial:"JJ",lown:"JJ",rung:"JJ",omal:"JJ",unar:"JJ",asal:"JJ",wish:"JJ",ylar:"JJ","00th":"JJ",oeic:"JJ",teal:"JJ",ifty:"JJ",ifid:"JJ",oggy:"JJ","-cut":"JJ",ymic:"JJ",lked:"JJ",lthy:"JJ",assy:"JJ",full:"JJ",yant:"JJ",ucky:"JJ",gued:"JJ",mely:"RB",bral:"JJ",sful:"JJ",shod:"JJ",neic:"JJ",sked:"JJ",nchy:"JJ",urth:"JJ",ccal:"JJ",lued:"JJ",mbic:"JJ",itty:"JJ",edth:"JJ",ggly:"JJ",mned:"JJ",pied:"JJ",axed:"JJ",ecal:"JJ",cile:"JJ",tred:"JJ",uffy:"JJ",edic:"JJ",anky:"JJ",inct:"JJ",asic:"JJ",wept:"JJ","-air":"JJ",impy:"JJ",eamy:"JJ","-set":"JJ",ltic:"JJ",ishy:"JJ",bous:"JJ",tied:"JJ","-ply":"JJ",eval:"JJ",cave:"JJ",adic:"JJ",ocky:"JJ",icit:"JJ",liar:"JJ",wful:"JJ",dern:"JJ",xvii:"JJ",hean:"JJ",ossy:"JJ",nvex:"JJ",unky:"JJ",roud:"JJ",hral:"JJ",angy:"JJ",pant:"JJ",eked:"JJ",nnic:"JJ",siac:"JJ",esic:"JJ",boid:"JJ",rual:"JJ",iffy:"JJ",adal:"JJ",dest:"JJ",irty:"JJ",kety:"JJ",inty:"JJ",lgic:"JJ",hird:"JJ",dric:"JJ",gone:"JJ",unct:"JJ","t-up":"JJ",raic:"JJ",isty:"JJ",paid:"JJ",ilty:"JJ",uing:"JJ",zian:"JJ",emal:"JJ",gean:"JJ",ixth:"JJ",gful:"JJ",eeny:"JJ",easy:"JJ",eged:"JJ","-way":"JJ",uddy:"JJ",liac:"JJ",lden:"JJ",bose:"JJ",iose:"JJ",cive:"JJ",tean:"JJ",dral:"JJ",eved:"JJ",igid:"JJ",llel:"JJ",orty:"JJ",ctyl:"JJ",nkly:"JJ",ghth:"JJ",yric:"JJ","-run":"JJ",eian:"JJ",eepy:"JJ",tood:"JJ",ltry:"JJ",ubic:"JJ",wery:"JJ",nken:"JJ",apen:"JJ",mful:"JJ",emed:"JJ",gile:"JJ",mart:"JJ",yzed:"JJ",alid:"JJ",toic:"JJ","-top":"JJ",rtan:"JJ",mant:"JJ",ngry:"JJ",eyan:"JJ",yoid:"JJ",urnt:"JJ",urvy:"JJ",tair:"JJ",hoid:"JJ",egic:"JJ",moid:"JJ",llan:"JJ",tech:"JJ",ulky:"JJ",osey:"JJ",orny:"JJ",ormy:"JJ",dual:"JJ",oury:"JJ",qual:"JJ",teed:"JJ",eezy:"JJ",rdic:"JJ",alky:"JJ",afty:"JJ",acky:"JJ",ymed:"JJ",yful:"JJ",epid:"JJ",unic:"JJ",endo:"JJ",ensy:"JJ",iked:"JJ",ghed:"JJ",tuck:"JJ",odly:"JJ",iric:"JJ",awny:"JJ",udal:"JJ",axic:"JJ",awky:"JJ",rbal:"JJ",owsy:"JJ","-key":"JJ","-end":"JJ",ammy:"JJ",mune:"JJ",ulic:"JJ",izan:"JJ",ndan:"JJ","true":"JJ",eery:"JJ",zzly:"JJ",eige:"JJ",xxiv:"JJ",odan:"JJ","-toe":"JJ",laid:"JJ",utty:"JJ",usky:"JJ",issy:"JJ",deaf:"JJ",maic:"JJ",vous:"JJ",rpal:"JJ",exic:"JJ",soid:"JJ",ucal:"JJ",oopy:"JJ",lmed:"JJ",roic:"JJ",cund:"JJ",arse:"JJ",vely:"RB",uchy:"JJ",ussy:"JJ","d-on":"JJ",izzy:"JJ",pean:"JJ",mane:"JJ",etty:"JJ",ebby:"JJ",phal:"JJ",odgy:"JJ",ober:"JJ",hoic:"JJ",taic:"JJ",oeal:"JJ",cral:"JJ",hewn:"JJ",heal:"JJ",xxii:"JJ",ainy:"JJ",apid:"JJ",lowy:"JJ",nlit:"JJ",held:"JJ",xxvi:"JJ",inky:"JJ",nsic:"JJ",olid:"JJ",eban:"JJ",kful:"JJ",siny:"JJ",usly:"RB",ably:"RB",ntly:"RB",edly:"RB",tely:"RB",ssly:"RB",shly:"RB",rily:"RB",ibly:"RB",idly:"RB",tily:"RB",sely:"RB",rely:"RB",dily:"RB",kily:"RB",hily:"RB",nely:"RB",ctly:"RB",sily:"RB",ways:"RB",rtly:"RB",pily:"RB",gily:"RB",itly:"RB",nily:"RB",zily:"RB",lely:"RB",etly:"RB",uely:"RB",adly:"RB",much:"RB",gely:"RB",imly:"RB",oubt:"RB",vily:"RB",ftly:"RB",ptly:"RB",chly:"RB",owly:"RB",cely:"RB",rnly:"RB",mply:"RB",cily:"RB",ghly:"RB",that:"RB",rmly:"RB",dely:"RB",high:"RB",orst:"RB",atly:"RB",exly:"RB",atim:"RB",diem:"RB",iori:"RB",utly:"RB",oors:"RB",ffly:"RB",udly:"RB",bily:"RB"};return"undefined"!=typeof module&&module.exports&&(module.exports=a),a}(),k=function(){var a={VB:{name:"verb, generic",example:"eat",parent:"verb",tag:"VB"},VBD:{name:"past-tense verb",example:"ate",parent:"verb",tense:"past",tag:"VBD"},VBN:{name:"past-participle verb",example:"eaten",parent:"verb",tense:"past",tag:"VBN"},VBP:{name:"infinitive verb",example:"eat",parent:"verb",tense:"present",tag:"VBP"},VBZ:{name:"present-tense verb",example:"eats, swims",tense:"present",parent:"verb",tag:"VBZ"},CP:{name:"copula",example:"is, was, were",parent:"verb",tag:"CP"},VBG:{name:"gerund verb",example:"eating,winning",parent:"verb",tag:"VBG"},JJ:{name:"adjective, generic",example:"big, nice",parent:"adjective",tag:"JJ"},JJR:{name:"comparative adjective",example:"bigger, cooler",parent:"adjective",tag:"JJR"},JJS:{name:"superlative adjective",example:"biggest, fattest",parent:"adjective",tag:"JJS"},RB:{name:"adverb",example:"quickly, softly",parent:"adverb",tag:"RB"},RBR:{name:"comparative adverb",example:"faster, cooler",parent:"adverb",tag:"RBR"},RBS:{name:"superlative adverb",example:"fastest (driving), coolest (looking)",parent:"adverb",tag:"RBS"},NN:{name:"noun, generic",example:"dog, rain",parent:"noun",tag:"NN"},NNP:{name:"singular proper noun",example:"Edinburgh, skateboard",parent:"noun",tag:"NNP"},NNA:{name:"noun, active",example:"supplier, singer",parent:"noun",tag:"NNA"},NNPA:{name:"noun, acronym",example:"FBI, N.A.S.A.",parent:"noun",tag:"NNPA"},NNPS:{name:"plural proper noun",example:"Smiths",parent:"noun",tag:"NNPS"},NNS:{name:"plural noun",example:"dogs, foxes",parent:"noun",tag:"NNS"},NNO:{name:"possessive noun",example:"spencer's, sam's",parent:"noun",tag:"NNO"},NNG:{name:"gerund noun",example:"eating,winning - but used grammatically as a noun",parent:"noun",tag:"VBG"},PP:{name:"possessive pronoun",example:"my,one's",parent:"glue",tag:"PP"},FW:{name:"foreign word",example:"mon dieu, voila",parent:"glue",tag:"FW"},CD:{name:"cardinal value, generic",example:"one, two, june 5th",parent:"value",tag:"CD"},DA:{name:"date",example:"june 5th, 1998",parent:"value",tag:"DA"},NU:{name:"number",example:"89, half-million",parent:"value",tag:"NU"},IN:{name:"preposition",example:"of,in,by",parent:"glue",tag:"IN"},MD:{name:"modal verb",example:"can,should",parent:"verb",tag:"MD"},CC:{name:"co-ordating conjunction",example:"and,but,or",parent:"glue",tag:"CC"},PRP:{name:"personal pronoun",example:"I,you,she",parent:"noun",tag:"PRP"},DT:{name:"determiner",example:"the,some",parent:"glue",tag:"DT"},UH:{name:"interjection",example:"oh, oops",parent:"glue",tag:"UH"},EX:{name:"existential there",example:"there",parent:"glue",tag:"EX"}};return"undefined"!=typeof module&&module.exports&&(module.exports=a),a}(),l=function(){var a={a:1,zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19,twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90},b={hundred:100,grand:1e3,thousand:1e3,million:1e6,billion:1e9,trillion:1e12,quadrillion:1e15,quintillion:1e18,sextillion:1e21,septillion:1e24,octillion:1e27,nonillion:1e30,decillion:1e33},c=function(c){if(c=c.replace(/, ?/g,""),c.match(/[0-9][-:][0-9]/))return null;for(var d=1,e=0,f=0,g=[{reg:/^(a\s)?half[\s-]/i,mult:.5},{reg:/^(a\s)?quarter[\s-]/i,mult:.25},{reg:/and[\s-]a[\s-]half\b/i,mult:1.5}],h=0;h<g.length;h++)c.match(g[h].reg)&&(d=g[h].mult,c=c.replace(g[h].reg," "));var i,j=c.toString().split(/[\s-]+/),k=!1;return j.forEach(function(c){if("and"!=c)if(parseFloat(c)){var d=parseFloat(c);20>d&&d>0?("tens"==i&&(k=!0),f+=d,i="tens"):(i=null,f+=d)}else if(a[c]){var d=a[c];20>d&&d>0?("tens"==i&&(k=!0),f+=d,i="tens"):(i=null,f+=d)}else b[c]&&(e+=b[c]*(f||1),f=0,i=null)}),k?null:(e+f)*d};return"undefined"!=typeof module&&module.exports&&(module.exports=c),c}();i=function(){var a,b,c,d,e,f,g,h,i;return c="(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|aug|sept|oct|nov|dec),?",a="([0-9]{1,2}),?",i="([0-9]{4})",g=[{reg:""+c+" "+a+"-"+a+" "+i,example:"March 7th-11th 1987",process:function(a){var b;
return null==a&&(a=[]),b={month:1,day:2,to_day:3,year:4},Object.keys(b).reduce(function(c,d){return c[d]=a[b[d]],c},{})}},{reg:""+a+" of "+c+" to "+a+" of "+c+",? "+i,example:"28th of September to 5th of October 2008",process:function(a){var b;return null==a&&(a=[]),b={day:1,month:2,to_day:3,to_month:4,to_year:5},Object.keys(b).reduce(function(c,d){return c[d]=a[b[d]],c},{})}},{reg:""+c+" "+a+" to "+c+" "+a+" "+i,example:"March 7th to june 11th 1987",process:function(a){var b;return null==a&&(a=[]),b={month:1,day:2,to_month:3,to_day:4,year:5,to_year:5},Object.keys(b).reduce(function(c,d){return c[d]=a[b[d]],c},{})}},{reg:"between "+a+" "+c+" and "+a+" "+c+" "+i,example:"between 13 February and 15 February 1945",process:function(a){var b;return null==a&&(a=[]),b={day:1,month:2,to_day:3,to_month:4,year:5,to_year:5},Object.keys(b).reduce(function(c,d){return c[d]=a[b[d]],c},{})}},{reg:"between "+c+" "+a+" and "+c+" "+a+" "+i,example:"between March 7th and june 11th 1987",process:function(a){var b;return null==a&&(a=[]),b={month:1,day:2,to_month:3,to_day:4,year:5,to_year:5},Object.keys(b).reduce(function(c,d){return c[d]=a[b[d]],c},{})}},{reg:""+c+" "+a+" "+i,example:"March 1st 1987",process:function(a){var b;return null==a&&(a=[]),b={month:1,day:2,year:3},Object.keys(b).reduce(function(c,d){return c[d]=a[b[d]],c},{})}},{reg:""+a+" - "+a+" of "+c+",? "+i,example:"3rd - 5th of March 1969",process:function(a){var b;return null==a&&(a=[]),b={day:1,to_day:2,month:3,year:4},Object.keys(b).reduce(function(c,d){return c[d]=a[b[d]],c},{})}},{reg:""+a+" of "+c+",? "+i,example:"3rd of March 1969",process:function(a){var b;return null==a&&(a=[]),b={day:1,month:2,year:3},Object.keys(b).reduce(function(c,d){return c[d]=a[b[d]],c},{})}},{reg:""+c+" "+i+",? to "+c+" "+i,example:"September 1939 to April 1945",process:function(a){var b;return null==a&&(a=[]),b={month:1,year:2,to_month:3,to_year:4},Object.keys(b).reduce(function(c,d){return c[d]=a[b[d]],c},{})}},{reg:""+c+" "+i,example:"March 1969",process:function(a){var b;return null==a&&(a=[]),b={month:1,year:2},Object.keys(b).reduce(function(c,d){return c[d]=a[b[d]],c},{})}},{reg:""+c+" "+a,example:"March 18th",process:function(a){var b;return null==a&&(a=[]),b={month:1,day:2},Object.keys(b).reduce(function(c,d){return c[d]=a[b[d]],c},{})}},{reg:""+a+" of "+c,example:"18th of March",process:function(a){var b;return null==a&&(a=[]),b={month:2,day:1},Object.keys(b).reduce(function(c,d){return c[d]=a[b[d]],c},{})}},{reg:""+i+" ?- ?"+i,example:"1997-1998",process:function(a){var b;return null==a&&(a=[]),b={year:1,to_year:2},Object.keys(b).reduce(function(c,d){return c[d]=a[b[d]],c},{})}},{reg:""+i,example:"1998",process:function(a){var b;return null==a&&(a=[]),b={year:1},Object.keys(b).reduce(function(c,d){return c[d]=a[b[d]],c},{})}}].map(function(a){return a.reg=new RegExp(a.reg,"g"),a}),d={january:0,february:1,march:2,april:3,may:4,june:5,july:6,august:7,september:8,october:9,november:10,december:11,jan:0,feb:1,mar:2,apr:3,aug:7,sept:8,oct:9,nov:10,dec:11},f=function(a){return a=a.toLowerCase(),a=a.replace(/([0-9])(th|rd|st)/g,"$1")},e=function(a,b){var c;return c=new Date,b=b||{},a.year=parseInt(a.year)||null,a.day=parseInt(a.day)||null,a.to_day=parseInt(a.to_day)||null,a.to_year=parseInt(a.to_year)||null,a.month=d[a.month]||null,a.to_month=d[a.to_month]||null,a.to_year&&!a.year&&(a.year=a.to_year),a.to_month&&!a.month&&(a.month=a.to_month),!a.to_month&&a.month&&(a.to_month=a.month),!a.to_year&&a.year&&(a.to_year=a.year),b.assume_year&&!a.year&&(a.year=c.getFullYear()),a.to_month&&a.to_month<a.month&&(a.month=null,a.to_month=null),a.to_year&&a.to_year<a.year&&(a.year=null,a.to_year=null),(a.year>2090||a.year<1200)&&(a.year=null,a.to_year=null),a.year&&a.day&&a.month&&(a.date_object=new Date,a.date_object.setYear(a.year),a.date_object.setMonth(a.month),a.date_object.setDate(a.day)),a.to_year&&a.to_day&&a.to_month&&(a.to_date_object=new Date,a.to_date_object.setYear(a.to_year),a.to_date_object.setMonth(a.to_month),a.to_date_object.setDate(a.to_day)),a.year||a.month?a:null},h=function(){return g.forEach(function(a){var b,c,d;return d=a.example,d=f(d),b=a.reg.exec(d),c=a.process(b),c=e(c),console.log(c)})},b=function(a,b){var c,d,h,i,j;for(b=b||{},a=f(a),i=0,j=g.length;j>i;i++)if(h=g[i],a.match(h.reg))return c=h.reg.exec(a),d=h.process(c),d=e(d,b);return{}},"undefined"!=typeof module&&module.exports&&(module.exports=b),b}();var m=function(a){var b=this;return b.word=a||"","undefined"!=typeof module&&module.exports&&(l=require("./to_number"),i=require("./coffeejs/date_extractor"),k=require("../../data/parts_of_speech")),b.date=function(a){a=a||{};var c=i(b.word,a);return c&&0!=Object.keys(c).length?c:null},b.is_date=function(){var a=/(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|aug|sept|oct|nov|dec)/i,c=/1?[0-9]:[0-9]{2}/,d=/\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday|mon|tues|wed|thurs|fri|sat|sun)\b/i;return b.word.match(a)||b.word.match(c)||b.word.match(d)?!0:!1},b.number=function(){return b.is_date()?null:l(b.word)},b.which=function(){return b.date()?k.DA:b.number()?k.NU:k.CD}(),b};"undefined"!=typeof module&&module.exports&&(module.exports=m);var n=function(){var a=function(a){if(!a)return null;var b={hour:"an",heir:"an",heirloom:"an",honest:"an",honour:"an",honor:"an",uber:"an"},c=function(a){return a.length<=5&&a.match(/^[A-Z]*$/)?!0:a.length>=4&&a.match(/^([A-Z]\.)*$/)?!0:!1};if(an_acronyms={A:!0,E:!0,F:!0,H:!0,I:!0,L:!0,M:!0,N:!0,O:!0,R:!0,S:!0,X:!0},a_regexs=[/^onc?e/i,/^u[bcfhjkqrstn][aeiou]/i,/^eul/i],b[a])return b[a];if(c(a)&&an_acronyms[a.substr(0,1)])return"an";for(var d=0;d<a_regexs.length;d++)if(a.match(a_regexs[d]))return"a";return a.match(/^[aeiou]/i)?"an":"a"};return"undefined"!=typeof module&&module.exports&&(module.exports=a),a}(),o=function(){var a=[["child","children"],["person","people"],["leaf","leaves"],["database","databases"],["quiz","quizzes"],["child","children"],["stomach","stomachs"],["sex","sexes"],["move","moves"],["shoe","shoes"],["goose","geese"],["phenomenon","phenomena"],["barracks","barracks"],["deer","deer"],["syllabus","syllabi"],["index","indices"],["appendix","appendices"],["criterion","criteria"],["i","we"],["person","people"],["man","men"],["move","moves"],["she","they"],["he","they"],["myself","ourselves"],["yourself","yourselves"],["himself","themselves"],["herself","themselves"],["themself","themselves"],["mine","ours"],["hers","theirs"],["his","theirs"],["its","theirs"],["theirs","theirs"],["sex","sexes"],["photo","photos"],["video","videos"],["narrative","narratives"],["rodeo","rodeos"],["gas","gases"],["epoch","epochs"],["zero","zeros"],["avocado","avocados"],["halo","halos"],["tornado","tornados"],["tuxedo","tuxedos"],["sombrero","sombreros"]],b={aircraft:1,bass:1,bison:1,fowl:1,halibut:1,moose:1,salmon:1,spacecraft:1,tuna:1,trout:1,advice:1,help:1,information:1,knowledge:1,trouble:1,work:1,enjoyment:1,fun:1,recreation:1,relaxation:1,meat:1,rice:1,bread:1,cake:1,coffee:1,ice:1,water:1,oil:1,grass:1,hair:1,fruit:1,wildlife:1,equipment:1,machinery:1,furniture:1,mail:1,luggage:1,jewelry:1,clothing:1,money:1,mathematics:1,economics:1,physics:1,civics:1,ethics:1,gymnastics:1,mumps:1,measles:1,news:1,tennis:1,baggage:1,currency:1,travel:1,soap:1,toothpaste:1,food:1,sugar:1,butter:1,flour:1,progress:1,research:1,leather:1,wool:1,wood:1,coal:1,weather:1,homework:1,cotton:1,silk:1,patience:1,impatience:1,talent:1,energy:1,experience:1,vinegar:1,polish:1,air:1,alcohol:1,anger:1,art:1,beef:1,blood:1,cash:1,chaos:1,cheese:1,chewing:1,conduct:1,confusion:1,courage:1,damage:1,education:1,electricity:1,entertainment:1,fiction:1,forgiveness:1,gold:1,gossip:1,ground:1,happiness:1,history:1,honey:1,hope:1,hospitality:1,importance:1,jam:1,justice:1,laughter:1,leisure:1,lightning:1,literature:1,love:1,luck:1,melancholy:1,milk:1,mist:1,music:1,noise:1,oxygen:1,paper:1,pay:1,peace:1,peanut:1,pepper:1,petrol:1,plastic:1,pork:1,power:1,pressure:1,rain:1,recognition:1,sadness:1,safety:1,salt:1,sand:1,scenery:1,shopping:1,silver:1,snow:1,softness:1,space:1,speed:1,steam:1,sunshine:1,tea:1,thunder:1,time:1,traffic:1,trousers:1,violence:1,warmth:1,washing:1,wind:1,wine:1,steel:1,soccer:1,hockey:1,golf:1,fish:1,gum:1,liquid:1,series:1,sheep:1,species:1,fahrenheit:1,celcius:1,kelvin:1,hertz:1},c=[{reg:/(ax|test)is$/i,repl:"$1es"},{reg:/(octop|vir|radi|nucle|fung|cact|stimul)us$/i,repl:"$1i"},{reg:/(octop|vir)i$/i,repl:"$1i"},{reg:/([rl])f$/i,repl:"$1ves"},{reg:/(alias|status)$/i,repl:"$1es"},{reg:/(bu)s$/i,repl:"$1ses"},{reg:/(al|ad|at|er|et|ed|ad)o$/i,repl:"$1oes"},{reg:/([ti])um$/i,repl:"$1a"},{reg:/([ti])a$/i,repl:"$1a"},{reg:/sis$/i,repl:"ses"},{reg:/(?:([^f])fe|([lr])f)$/i,repl:"$1ves"},{reg:/(hive)$/i,repl:"$1s"},{reg:/([^aeiouy]|qu)y$/i,repl:"$1ies"},{reg:/(x|ch|ss|sh|s|z)$/i,repl:"$1es"},{reg:/(matr|vert|ind|cort)(ix|ex)$/i,repl:"$1ices"},{reg:/([m|l])ouse$/i,repl:"$1ice"},{reg:/([m|l])ice$/i,repl:"$1ice"},{reg:/^(ox)$/i,repl:"$1en"},{reg:/^(oxen)$/i,repl:"$1"},{reg:/(quiz)$/i,repl:"$1zes"},{reg:/(antenn|formul|nebul|vertebr|vit)a$/i,repl:"$1ae"},{reg:/(sis)$/i,repl:"ses"},{reg:/^(?!talis|.*hu)(.*)man$/i,repl:"$1men"},{reg:/(.*)/i,repl:"$1s"}],d=function(e){var f=e.toLowerCase();if(b[f])return e;var g=a.filter(function(a){return a[0]==f});if(g[0])return f==e?g[0][1]:g[0][1].charAt(0).toUpperCase()+string.slice(1);if(e.match(/([a-z]*) (of|in|by|for) [a-z]/)){var h=e.match(/^([a-z]*) (of|in|by|for) [a-z]/)[1];if(h){var i=d(h);return i+e.replace(h,"")}}for(var j in c)if(e.match(c[j].reg))return e.replace(c[j].reg,c[j].repl)},e=[{reg:/([^v])ies$/i,repl:"$1y"},{reg:/ises$/i,repl:"isis"},{reg:/ives$/i,repl:"ife"},{reg:/(antenn|formul|nebul|vertebr|vit)ae$/i,repl:"$1a"},{reg:/(octop|vir|radi|nucle|fung|cact|stimul)(i)$/i,repl:"$1us"},{reg:/(buffal|tomat|tornad)(oes)$/i,repl:"$1o"},{reg:/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i,repl:"$1sis"},{reg:/(vert|ind|cort)(ices)$/i,repl:"$1ex"},{reg:/(matr|append)(ices)$/i,repl:"$1ix"},{reg:/(x|ch|ss|sh|s|z|o)es$/i,repl:"$1"},{reg:/men$/i,repl:"man"},{reg:/(n)ews$/i,repl:"$1ews"},{reg:/([ti])a$/i,repl:"$1um"},{reg:/([^f])ves$/i,repl:"$1fe"},{reg:/([lr])ves$/i,repl:"$1f"},{reg:/([^aeiouy]|qu)ies$/i,repl:"$1y"},{reg:/(s)eries$/i,repl:"$1eries"},{reg:/(m)ovies$/i,repl:"$1ovie"},{reg:/([m|l])ice$/i,repl:"$1ouse"},{reg:/(cris|ax|test)es$/i,repl:"$1is"},{reg:/(alias|status)es$/i,repl:"$1"},{reg:/(ss)$/i,repl:"$1"},{reg:/(ics)$/i,repl:"$1"},{reg:/s$/i,repl:""}],f=function(c){var d=c.toLowerCase();if(b[d])return c;var g=a.filter(function(a){return a[1]==d});if(g[0])return d==c?g[0][0]:g[0][0].charAt(0).toUpperCase()+string.slice(1);if(c.match(/([a-z]*) (of|in|by|for) [a-z]/)){var h=c.match(/^([a-z]*) (of|in|by|for) [a-z]/);if(h&&h[1]){var i=f(h[1]);return i+c.replace(h[1],"")}}for(var j in e)if(c.match(e[j].reg))return c.replace(e[j].reg,e[j].repl);return c},g=function(b){for(var c=0;c<a.length;c++){if(a[c][1]==b)return!0;if(a[c][0]==b)return!1}return f(b)!=b?!0:b.match(/s$/)&&!b.match(/ss$/)&&b.length>3?!0:!1},h=function(a){return b[a]?{plural:a,singular:a}:g(a)?{plural:a,singular:f(a)}:{singular:a,plural:d(a)}},i={inflect:h,is_plural:g,singularize:f,pluralize:d};return"undefined"!=typeof module&&module.exports&&(module.exports=i),i}(),p=function(a,b,c,d){var e=this;e.word=a||"",e.next=b,e.last=c,"undefined"!=typeof module&&module.exports&&(k=require("../../data/parts_of_speech"),o=require("./conjugate/inflect"),n=require("./indefinite_article/indefinite_article"));var f={it:"PRP",they:"PRP",i:"PRP",them:"PRP",you:"PRP",she:"PRP",me:"PRP",he:"PRP",him:"PRP",her:"PRP",us:"PRP",we:"PRP",thou:"PRP"};return e.is_acronym=function(){var a=e.word;return a.length<=5&&a.match(/^[A-Z]*$/)?!0:a.length>=4&&a.match(/^([A-Z]\.)*$/)?!0:!1}(),e.is_entity=function(){if(!d)return!1;var a={itself:1,west:1,western:1,east:1,eastern:1,north:1,northern:1,south:1,southern:1,one:1,your:1,my:1,today:1,yesterday:1,tomorrow:1,era:1,century:1};if(f[d.normalised])return!1;if(a[d.normalised])return!1;if(d.pos){if("NNA"==d.pos.tag)return!1;if("NNO"==d.pos.tag)return!1;if("NNG"==d.pos.tag)return!1;if("NNP"==d.pos.tag)return!0}return d.capitalised?!0:d.normalised.match(" ")?!0:d.normalised.match(".")?!0:e.is_acronym?!0:!1}(),e.conjugate=function(){return o.inflect(e.word)},e.is_plural=function(){return o.is_plural(e.word)}(),e.article=function(){return n(e.word)},e.pluralize=function(){return(o.inflect(e.word)||{}).plural},e.singularize=function(){return(o.inflect(e.word)||{}).singular},e.which=function(){if(e.word.match(/'s$/))return k.NNO;if(e.word.match(/..ing$/))return k.NNG;if(f[e.word])return k.PRP;var a=e.word.substr(0,1);return a.toLowerCase()!=a?e.is_acronym?k.NNPA:e.is_plural?k.NNPS:k.NNP:e.is_plural?k.NNS:k.NN}(),e};"undefined"!=typeof module&&module.exports&&(module.exports=p);var q=function(){var a=function(a){var b={idly:"idle",sporadically:"sporadic",basically:"basic",grammatically:"grammatical",alphabetically:"alphabetical",economically:"economical",conically:"conical",politically:"political",vertically:"vertical",practically:"practical",theoretically:"theoretical",critically:"critical",fantastically:"fantastic",mystically:"mystical",pornographically:"pornographic",fully:"full",jolly:"jolly",wholly:"whole"},c=[{reg:/bly$/i,repl:"ble"},{reg:/gically$/i,repl:"gical"},{reg:/([rsdh])ically$/i,repl:"$1ical"},{reg:/ically$/i,repl:"ic"},{reg:/uly$/i,repl:"ue"},{reg:/ily$/i,repl:"y"},{reg:/(.{3})ly$/i,repl:"$1"}];if(b[a])return b[a];for(var d=0;d<c.length;d++)if(a.match(c[d].reg))return a.replace(c[d].reg,c[d].repl);return a};return"undefined"!=typeof module&&module.exports&&(module.exports=a),a}(),r=function(a,b,c){var d=this;return d.word=a||"",d.next=b,d.last=c,"undefined"!=typeof module&&module.exports&&(q=require("./conjugate/to_adjective"),k=require("../../data/parts_of_speech")),d.conjugate=function(){return{adjective:q(d.word)}},d.which=function(){return d.word.match(/..est$/)?k.RBS:d.word.match(/..er$/)?k.RBR:k.RB}(),d};"undefined"!=typeof module&&module.exports&&(module.exports=r);var s={infinitive:[{reg:/(eed)$/i,repl:{present:"$1s",gerund:"$1ing",past:"$1ed",doer:"$1er"},examples:"sleep",exceptions:[],power:1,tense:"infinitive"},{reg:/(e)(ep)$/i,repl:{present:"$1$2s",gerund:"$1$2ing",past:"$1pt",doer:"$1$2er"},examples:"sleep",exceptions:[],power:1,tense:"infinitive"},{reg:/([a[tg]|i[zn]]|ur|nc|gl|is)e$/i,repl:{present:"$1es",gerund:"$1ing",past:"$1ed"},examples:"angulate, stipulate, orientate",exceptions:["ate","overate"],power:804,tense:"infinitive"},{reg:/([i|f|rr])y$/i,repl:{present:"$1ies",gerund:"$1ying",past:"$1ied"},examples:"unify, classify, glorify",exceptions:[],power:128,tense:"infinitive"},{reg:/([td]er)$/i,repl:{present:"$1s",gerund:"$1ing",past:"$1ed"},examples:"sputter, fritter, charter",exceptions:[],power:123,tense:"infinitive"},{reg:/([bd])le$/i,repl:{present:"$1es",gerund:"$1ing",past:"$1ed"},examples:"shamble, warble, grabble",exceptions:[],power:69,tense:"infinitive"},{reg:/(ish|tch|ess)$/i,repl:{present:"$1es",gerund:"$1ing",past:"$1ed"},examples:"relish, wish, brandish",exceptions:[],power:62,tense:"infinitive"},{reg:/(ion|end|e[nc]t)$/i,repl:{present:"$1s",gerund:"$1ing",past:"$1ed"},examples:"caution, aircondition, cushion",exceptions:["sent","bent","overspent","misspent","went","kent","outwent","forwent","spent","pent","lent","underwent","rent","unbent","shent"],power:55,tense:"infinitive"},{reg:/(om)e$/i,repl:{present:"$1es",gerund:"$1ing",past:"ame"},examples:"become",exceptions:[],power:1,tense:"infinitive"},{reg:/([aeiou])([ptn])$/i,repl:{present:"$1$2s",gerund:"$1$2$2ing",past:"$1$2"},examples:"win",exceptions:[],power:1,tense:"infinitive"},{reg:/(er)$/i,repl:{present:"$1s",gerund:"$1ing",past:"$1ed"},examples:"win",exceptions:[],power:1,tense:"infinitive"}],present:[{reg:/([tzlshicgrvdnkmu])es$/i,repl:{infinitive:"$1e",gerund:"$1ing",past:"$1ed"},examples:"convolutes, angulates, stipulates",exceptions:[],power:923,tense:"present"},{reg:/(n[dtk]|c[kt]|[eo]n|i[nl]|er|a[ytrl])s$/i,repl:{infinitive:"$1",gerund:"$1ing",past:"$1ed"},examples:"wants, squints, garments",exceptions:[],power:153,tense:"present"},{reg:/(ow)s$/i,repl:{infinitive:"$1",gerund:"$1ing",past:"ew"},examples:"wants, squints, garments",exceptions:[],power:153,tense:"present"},{reg:/(op)s$/i,repl:{infinitive:"$1",gerund:"$1ping",past:"$1ped"},examples:"wants, squints, garments",exceptions:[],power:153,tense:"present"},{reg:/([eirs])ts$/i,repl:{infinitive:"$1t",gerund:"$1tting",past:"$1tted"},examples:"outwits, revisits, knits",exceptions:[],power:105,tense:"present"},{reg:/(ll)s$/i,repl:{infinitive:"$1",gerund:"$1ing",past:"$1ed"},examples:"culls, tolls, shalls",exceptions:[],power:92,tense:"present"},{reg:/(el)s$/i,repl:{infinitive:"$1",gerund:"$1ling",past:"$1led"},examples:"swivels, rebels, travels",exceptions:[],power:88,tense:"present"},{reg:/s$/i,repl:{infinitive:"",gerund:"ing",past:"ed"},examples:"swivels, rebels, travels",exceptions:[],power:88,tense:"present"}],gerund:[{reg:/pping$/i,repl:{infinitive:"p",present:"ps",past:"pped"},examples:"clipping",exceptions:[],tense:"gerund"},{reg:/lling$/i,repl:{infinitive:"ll",present:"lls",past:"lled"},examples:"yelling",exceptions:[],tense:"gerund"},{reg:/tting$/i,repl:{infinitive:"t",present:"ts",past:"t"},examples:"quitting",exceptions:[],tense:"gerund"},{reg:/ssing$/i,repl:{infinitive:"ss",present:"sses",past:"ssed"},examples:"confessing",exceptions:[],tense:"gerund"},{reg:/gging$/i,repl:{infinitive:"g",present:"gs",past:"gged"},examples:"jogging",exceptions:[],tense:"gerund"},{reg:/([^aeiou])ying$/i,repl:{infinitive:"$1y",present:"$1ies",past:"$1ied",doer:"$1ier"},examples:"confessing",exceptions:[],tense:"gerund"},{reg:/(i.)ing$/i,repl:{infinitive:"$1e",present:"$1es",past:"$1ed"},examples:"driving",exceptions:[],tense:"gerund"},{reg:/(u[rtcb]|[bdtpkg]l|n[cg]|a[gdkvtc]|[ua]s|[dr]g|yz|o[rlsp]|cre)ing$/i,repl:{infinitive:"$1e",present:"$1es",past:"$1ed"},examples:"convoluting, compensating, fouling",exceptions:[],tense:"gerund"},{reg:/(ch|sh)ing$/i,repl:{infinitive:"$1",present:"$1es",past:"$1ed"},examples:"searching",exceptions:[],tense:"gerund"},{reg:/(..)ing$/i,repl:{infinitive:"$1",present:"$1s",past:"$1ed"},examples:"walking, fawning, farming, swing",exceptions:[],tense:"gerund"}],past:[{reg:/(sh|ch)ed$/i,repl:{infinitive:"$1",present:"$1es",doer:"$1er",gerund:"$1ing"},examples:"finished",exceptions:[],power:1854,tense:"past"},{reg:/(tl|gl)ed$/i,repl:{infinitive:"$1e",present:"$1es",doer:"$1er",gerund:"$1ing"},examples:"felled, flipped",exceptions:[],power:1854,tense:"past"},{reg:/(ss)ed$/i,repl:{infinitive:"$1",present:"$1es",doer:"$1er",gerund:"$1ing"},examples:"passed",exceptions:[],power:0,tense:"past"},{reg:/pped$/i,repl:{infinitive:"p",present:"ps",doer:"pper",gerund:"pping"},examples:"flipped",exceptions:[],power:0,tense:"past"},{reg:/tted$/i,repl:{infinitive:"t",present:"ts",doer:"tter",gerund:"tting"},examples:"batted",exceptions:[],power:0,tense:"past"},{reg:/gged$/i,repl:{infinitive:"g",present:"gs",doer:"gger",gerund:"gging"},examples:"batted",exceptions:[],power:0,tense:"past"},{reg:/(h|ion|n[dt]|ai.|[cs]t|pp|all|ss|tt|int|ail|en|oo.|er|k|p|w|our|rt|ght)ed$/i,repl:{infinitive:"$1",present:"$1s",doer:"$1er",gerund:"$1ing"},examples:"outwitted",exceptions:[],power:1854,tense:"past"},{reg:/(..[^aeiou])ed$/i,repl:{infinitive:"$1e",present:"$1es",doer:"$1er",gerund:"$1ing"},examples:"convoluted, angulated",exceptions:[],power:1854,tense:"past"},{reg:/ied$/i,repl:{infinitive:"y",present:"ies",doer:"ier",gerund:"ying"},examples:"ballyhooed,",exceptions:[],power:0,tense:"past"},{reg:/(.o)ed$/i,repl:{infinitive:"$1o",present:"$1os",doer:"$1oer",gerund:"$1oing"},examples:"ballyhooed,",exceptions:[],power:0,tense:"past"},{reg:/(.i)ed$/i,repl:{infinitive:"$1",present:"$1s",doer:"$1er",gerund:"$1ing"},examples:"ballyhooed,",exceptions:[],power:0,tense:"past"},{reg:/([rl])ew$/i,repl:{infinitive:"$1ow",present:"$1ows",gerund:"$1owing"},example:"overthrew",exceptions:["brew","drew","withdrew","crew","screw","unscrew"],tense:"past"},{reg:/([pl])t$/i,repl:{infinitive:"$1",present:"$1s",gerund:"$1ing"},example:"lept, leant",exceptions:[],tense:"past"}]};"undefined"!=typeof module&&module.exports&&(module.exports=s);var t=function(){var a=[{present:"arises",gerund:"arising",past:"arose",infinitive:"arise",participle:"arisen",doer:"ariser"},{infinitive:"babysit",present:"babysits",past:"babysat",gerund:"babysitting",participle:"babysat",doer:"babysitter"},{infinitive:"be",present:"is",gerund:"being",past:"was",participle:"been",doer:"ber"},{infinitive:"beat",present:"beats",past:"beat",gerund:"beating",participle:"beaten",doer:"beater"},{present:"becomes",gerund:"becoming",past:"became",infinitive:"become",participle:"become",doer:"becomer"},{present:"bends",gerund:"bending",past:"bent",infinitive:"bend",participle:"bent",doer:"bender"},{infinitive:"begin",present:"begins",past:"began",gerund:"beginning",participle:"begun",doer:"beginner"},{infinitive:"bet",present:"bets",past:"bet",gerund:"betting",participle:"bet",doer:"better"},{infinitive:"bind",present:"binds",past:"bound",gerund:"binding",participle:"bound",doer:"binder"},{present:"bites",gerund:"biting",past:"bit",infinitive:"bite",participle:"bitten",doer:"biter"},{infinitive:"bleed",present:"bleeds",past:"bled",gerund:"bleeding",participle:"bled",doer:"bleeder"},{infinitive:"blow",present:"blows",past:"blew",gerund:"blowing",participle:"blown",doer:"blower"},{infinitive:"break",present:"breaks",past:"broke",gerund:"breaking",participle:"broken",doer:"breaker"},{infinitive:"breed",present:"breeds",past:"bred",gerund:"breeding",participle:"bred",doer:"breeder"},{infinitive:"bring",present:"brings",past:"brought",gerund:"bringing",participle:"brought",doer:"bringer"},{infinitive:"broadcast",present:"broadcasts",past:"broadcast",gerund:"broadcasting",participle:"broadcast",doer:"broadcaster"},{infinitive:"build",present:"builds",past:"built",gerund:"building",participle:"built",doer:"builder"},{infinitive:"buy",present:"buys",past:"bought",gerund:"buying",participle:"bought",doer:"buyer"},{present:"catches",gerund:"catching",past:"caught",infinitive:"catch",participle:"caught",doer:"catcher"},{infinitive:"choose",present:"chooses",past:"chose",gerund:"choosing",participle:"chosen",doer:"chooser"},{present:"comes",gerund:"coming",past:"came",infinitive:"come",participle:"come",doer:"comer"},{infinitive:"cost",present:"costs",past:"cost",gerund:"costing",participle:"cost",doer:"coster"},{infinitive:"cut",present:"cuts",past:"cut",gerund:"cutting",participle:"cut",doer:"cutter"},{infinitive:"deal",present:"deals",past:"dealt",gerund:"dealing",participle:"dealt",doer:"dealer"},{infinitive:"dig",present:"digs",past:"dug",gerund:"digging",participle:"dug",doer:"digger"},{infinitive:"do",present:"does",past:"did",gerund:"doing",participle:"done",doer:"doer"},{infinitive:"draw",present:"draws",past:"drew",gerund:"drawing",participle:"drawn",doer:"drawer"},{infinitive:"drink",present:"drinks",past:"drank",gerund:"drinking",participle:"drunk",doer:"drinker"},{infinitive:"drive",present:"drives",past:"drove",gerund:"driving",participle:"driven",doer:"driver"},{infinitive:"eat",present:"eats",past:"ate",gerund:"eating",participle:"eaten",doer:"eater"},{infinitive:"fall",present:"falls",past:"fell",gerund:"falling",participle:"fallen",doer:"faller"},{infinitive:"feed",present:"feeds",past:"fed",gerund:"feeding",participle:"fed",doer:"feeder"},{infinitive:"feel",present:"feels",past:"felt",gerund:"feeling",participle:"felt",doer:"feeler"},{infinitive:"fight",present:"fights",past:"fought",gerund:"fighting",participle:"fought",doer:"fighter"},{infinitive:"find",present:"finds",past:"found",gerund:"finding",participle:"found",doer:"finder"},{infinitive:"fly",present:"flys",past:"flew",gerund:"flying",participle:"flown",doer:"flier"},{infinitive:"forbid",present:"forbids",past:"forbade",gerund:"forbiding",participle:"forbidden",doer:null},{infinitive:"forget",present:"forgets",past:"forgot",gerund:"forgeting",participle:"forgotten",doer:"forgeter"},{infinitive:"forgive",present:"forgives",past:"forgave",gerund:"forgiving",participle:"forgiven",doer:"forgiver"},{infinitive:"freeze",present:"freezes",past:"froze",gerund:"freezing",participle:"frozen",doer:"freezer"},{infinitive:"get",present:"gets",past:"got",gerund:"getting",participle:"gotten",doer:"getter"},{infinitive:"give",present:"gives",past:"gave",gerund:"giving",participle:"given",doer:"giver"},{infinitive:"go",present:"goes",gerund:"going",past:"went",participle:"gone",doer:"goer"},{infinitive:"grow",present:"grows",past:"grew",gerund:"growing",participle:"grown",doer:"grower"},{infinitive:"hang",present:"hangs",past:"hung",gerund:"hanging",participle:"hung",doer:"hanger"},{infinitive:"have",present:"has",past:"had",gerund:"having",participle:"had",doer:null},{infinitive:"hear",present:"hears",past:"heard",gerund:"hearing",participle:"heard",doer:"hearer"},{infinitive:"hide",present:"hides",past:"hid",gerund:"hiding",participle:"hidden",doer:"hider"},{infinitive:"hit",present:"hits",past:"hit",gerund:"hitting",participle:"hit",doer:"hitter"},{infinitive:"hold",present:"holds",past:"held",gerund:"holding",participle:"held",doer:"holder"},{infinitive:"hurt",present:"hurts",past:"hurt",gerund:"hurting",participle:"hurt",doer:"hurter"},{infinitive:"know",present:"knows",past:"knew",gerund:"knowing",participle:"known",doer:"knower"},{infinitive:"lay",present:"lays",past:"laid",gerund:"laying",participle:"laid",doer:"layer"},{infinitive:"lead",present:"leads",past:"led",gerund:"leading",participle:"led",doer:"leader"},{infinitive:"leave",present:"leaves",past:"left",gerund:"leaving",participle:"left",doer:"leaver"},{present:"lends",gerund:"lending",past:"lent",infinitive:"lend",participle:"lent",doer:"lender"},{infinitive:"let",present:"lets",past:"let",gerund:"letting",participle:"let",doer:"letter"},{infinitive:"lie",present:"lies",past:"lay",gerund:"lying",participle:"lied",doer:"lier"},{infinitive:"light",present:"lights",past:"lit",gerund:"lighting",participle:"lit",doer:"lighter"},{infinitive:"lose",present:"loses",past:"lost",gerund:"losing",participle:"lost",doer:"loser"},{infinitive:"make",present:"makes",past:"made",gerund:"making",participle:"made",doer:"maker"},{infinitive:"mean",present:"means",past:"meant",gerund:"meaning",participle:"meant",doer:"meaner"},{infinitive:"meet",present:"meets",past:"met",gerund:"meeting",participle:"met",doer:"meeter"},{infinitive:"pay",present:"pays",past:"paid",gerund:"paying",participle:"paid",doer:"payer"},{infinitive:"put",present:"puts",past:"put",gerund:"putting",participle:"put",doer:"putter"},{infinitive:"quit",present:"quits",past:"quit",gerund:"quitting",participle:"quit",doer:"quitter"},{infinitive:"read",present:"reads",past:"read",gerund:"reading",participle:"read",doer:"reader"},{infinitive:"ride",present:"rides",past:"rode",gerund:"riding",participle:"ridden",doer:"rider"},{infinitive:"ring",present:"rings",past:"rang",gerund:"ringing",participle:"rung",doer:"ringer"},{present:"rises",gerund:"rising",past:"rose",infinitive:"rise",participle:"risen",doer:"riser"},{infinitive:"run",present:"runs",past:"ran",gerund:"running",participle:"run",doer:"runner"},{infinitive:"say",present:"says",past:"said",gerund:"saying",participle:"said",doer:null},{infinitive:"see",present:"sees",past:"saw",gerund:"seeing",participle:"seen",doer:"seer"},{infinitive:"sell",present:"sells",past:"sold",gerund:"selling",participle:"sold",doer:"seller"},{present:"sends",gerund:"sending",past:"sent",infinitive:"send",participle:"sent",doer:"sender"},{infinitive:"set",present:"sets",past:"set",gerund:"setting",participle:"set",doer:"setter"},{infinitive:"shake",present:"shakes",past:"shook",gerund:"shaking",participle:"shaken",doer:"shaker"},{infinitive:"shine",present:"shines",past:"shone",gerund:"shining",participle:"shone",doer:"shiner"},{infinitive:"shoot",present:"shoots",past:"shot",gerund:"shooting",participle:"shot",doer:"shooter"},{infinitive:"show",present:"shows",past:"showed",gerund:"showing",participle:"shown",doer:"shower"},{infinitive:"shut",present:"shuts",past:"shut",gerund:"shutting",participle:"shut",doer:"shutter"},{infinitive:"sing",present:"sings",past:"sang",gerund:"singing",participle:"sung",doer:"singer"},{infinitive:"sink",present:"sinks",past:"sank",gerund:"sinking",participle:"sunk",doer:"sinker"},{infinitive:"sit",present:"sits",past:"sat",gerund:"sitting",participle:"sat",doer:"sitter"},{infinitive:"slide",present:"slides",past:"slid",gerund:"sliding",participle:"slid",doer:"slider"},{infinitive:"speak",present:"speaks",past:"spoke",gerund:"speaking",participle:"spoken",doer:"speaker"},{present:"spends",gerund:"spending",past:"spent",infinitive:"spend",participle:"spent",doer:"spender"},{infinitive:"spin",present:"spins",past:"spun",gerund:"spinning",participle:"spun",doer:"spinner"},{infinitive:"spread",present:"spreads",past:"spread",gerund:"spreading",participle:"spread",doer:"spreader"},{infinitive:"stand",present:"stands",past:"stood",gerund:"standing",participle:"stood",doer:"stander"},{infinitive:"steal",present:"steals",past:"stole",gerund:"stealing",participle:"stolen",doer:"stealer"},{infinitive:"stick",present:"sticks",past:"stuck",gerund:"sticking",participle:"stuck",doer:"sticker"},{infinitive:"sting",present:"stings",past:"stung",gerund:"stinging",participle:"stung",doer:"stinger"},{infinitive:"strike",present:"strikes",past:"struck",gerund:"striking",participle:"struck",doer:"striker"},{infinitive:"swear",present:"swears",past:"swore",gerund:"swearing",participle:"sworn",doer:"swearer"},{infinitive:"swim",present:"swims",past:"swam",gerund:"swiming",participle:"swum",doer:"swimmer"},{infinitive:"swing",present:"swings",past:"swung",gerund:"swinging",participle:"swung",doer:"swinger"},{infinitive:"take",present:"takes",past:"took",gerund:"taking",participle:"taken",doer:"taker"},{infinitive:"teach",present:"teachs",past:"taught",gerund:"teaching",participle:"taught",doer:"teacher"},{infinitive:"tear",present:"tears",past:"tore",gerund:"tearing",participle:"torn",doer:"tearer"},{infinitive:"tell",present:"tells",past:"told",gerund:"telling",participle:"told",doer:"teller"},{infinitive:"think",present:"thinks",past:"thought",gerund:"thinking",participle:"thought",doer:"thinker"},{infinitive:"throw",present:"throws",past:"threw",gerund:"throwing",participle:"thrown",doer:"thrower"},{infinitive:"understand",present:"understands",past:"understood",gerund:"understanding",participle:"understood",doer:null},{infinitive:"wake",present:"wakes",past:"woke",gerund:"waking",participle:"woken",doer:"waker"},{infinitive:"wear",present:"wears",past:"wore",gerund:"wearing",participle:"worn",doer:"wearer"},{present:"wins",gerund:"winning",past:"won",infinitive:"win",participle:"won",doer:"winner"},{infinitive:"withdraw",present:"withdraws",past:"withdrew",gerund:"withdrawing",participle:"withdrawn",doer:"withdrawer"},{present:"writes",gerund:"writing",past:"wrote",infinitive:"write",participle:"written",doer:"writer"},{infinitive:"tie",present:"ties",past:"tied",gerund:"tying",doer:"tier"},{infinitive:"obey",present:"obeys",past:"obeyed",gerund:"obeying",doer:"obeyer"},{infinitive:"ski",present:"skis",past:"skiied",gerund:"skiing",doer:"skier"},{infinitive:"boil",present:"boils",past:"boiled",gerund:"boiling",doer:"boiler"},{infinitive:"feed",present:"feeds",past:"fed",gerund:"feeding",doer:"feeder"},{infinitive:"miss",present:"miss",past:"missed",gerund:"missing",doer:"misser"},{infinitive:"act",present:"acts",past:"acted",gerund:"acting",doer:"actor"},{present:"competes",gerund:"competing",past:"competed",infinitive:"compete",doer:"competitor"},{present:"are",gerund:"are",past:"were",infinitive:"being",doer:""},{infinitive:"imply",present:"implies",past:"implied",gerund:"implying",doer:"implier"}];return"undefined"!=typeof module&&module.exports&&(module.exports=a),a
}(),u=function(){var a=function(a){a=a||"";var b={tie:"tier",dream:"dreamer",sail:"sailer",run:"runner",rub:"rubber",begin:"beginner",win:"winner",claim:"claimant",deal:"dealer",spin:"spinner"},c={aid:1,fail:1,appear:1,happen:1,seem:1,"try":1,say:1,marry:1,be:1,forbid:1,understand:1},d=[{reg:/e$/i,repl:"er"},{reg:/([aeiou])([mlgp])$/i,repl:"$1$2$2er"},{reg:/([rl])y$/i,repl:"$1ier"},{reg:/^(.?.[aeiou])t$/i,repl:"$1tter"}];if(c[a])return null;if(b[a])return b[a];for(var e=0;e<d.length;e++)if(a.match(d[e].reg))return a.replace(d[e].reg,d[e].repl);return a+"er"};return"undefined"!=typeof module&&module.exports&&(module.exports=a),a}(),v=function(){"undefined"!=typeof module&&module.exports&&(u=require("./to_doer"),t=require("./verb_irregulars"),s=require("./verb_rules"));var a=function(a){for(var b={ing:"gerund",tes:"present",ate:"infinitive",zes:"present",ize:"infinitive",ers:"present",les:"present",es:"present",ts:"present",ns:"present",er:"infinitive",le:"infinitive",acks:"present",ends:"present",ands:"present",ocks:"present",tion:"infinitive",lays:"present",rify:"infinitive",eads:"present",ress:"infinitive",lls:"present",els:"present",ify:"infinitive",age:"infinitive",ils:"present",ows:"present",nce:"infinitive",ect:"infinitive",nds:"present",ise:"infinitive",ine:"infinitive",nks:"present",ish:"infinitive",ace:"infinitive",cks:"present",ash:"infinitive",ure:"infinitive",tch:"infinitive",ngs:"present",end:"infinitive",ack:"infinitive",mps:"present",ays:"present",and:"infinitive",ute:"infinitive",ade:"infinitive",ock:"infinitive",ite:"infinitive",rks:"present",ase:"infinitive",ose:"infinitive",use:"infinitive",ams:"present",ars:"present",ops:"present",ffs:"present",als:"present",ive:"infinitive","int":"infinitive",nge:"infinitive",urs:"present",lds:"present",ews:"present",ips:"present",lay:"infinitive",est:"infinitive",ain:"infinitive",ant:"infinitive",eed:"infinitive",ed:"past",s:"present",lt:"past",nt:"past",pt:"past",ew:"past",ld:"past"},c=function(a,b){return-1!==a.indexOf(b,a.length-b.length)},d=Object.keys(b),e=0;e<d.length;e++)if(c(a,d[e]))return b[d[e]];return"infinitive"},b=function(a){var b,c,d,e,f=a.replace(/ed$/,"");return a.match(/[^aeiou]$/)?(d=a+"ing",c=a+"ed",b=a+"s",e=u(f)):(d=a.replace(/[aeiou]$/,"ing"),c=a.replace(/[aeiou]$/,"ed"),b=a.replace(/[aeiou]$/,"es"),e=u(f)),{infinitive:f,present:b,past:c,gerund:d,doer:e}},c=function(a){return a.infinitive?(a.gerund||(a.gerund=a.infinitive+"ing"),a.doer||(a.doer=u(a.infinitive)),a.present||(a.present=a.infinitive+"s"),a.past||(a.past=a.infinitive+"ed"),a):a},d=function(d){if(!d)return{};for(var e=0;e<t.length;e++){var f=t[e];if(d==f.present||d==f.gerund||d==f.past||d==f.infinitive)return c(t[e])}for(var g=a(d)||"infinitive",e=0;e<s[g].length;e++){var h=s[g][e];if(d.match(h.reg)){var i=Object.keys(h.repl).reduce(function(a,b){return a[b]=b==g?d:d.replace(h.reg,h.repl[b]),a},{});return i[h.tense]=d,c(i)}}return b(d)};return"undefined"!=typeof module&&module.exports&&(module.exports=d),d}(),w=function(a,b,c){var d=this;d.word=a||"",d.next=b,d.last=c,"undefined"!=typeof module&&module.exports&&(v=require("./conjugate/conjugate"),k=require("../../data/parts_of_speech"));var e={is:"CP","will be":"CP",will:"CP",are:"CP",was:"CP",were:"CP"},f={can:"MD",may:"MD",could:"MD",might:"MD",will:"MD","ought to":"MD",would:"MD",must:"MD",shall:"MD",should:"MD"},g={past:"VBD",participle:"VBN",infinitive:"VBP",present:"VBZ",gerund:"VBG"};return d.conjugate=function(){return v(d.word)},d.to_past=function(){return"gerund"==d.form?d.word:v(d.word).past},d.to_present=function(){return v(d.word).present},d.to_future=function(){return"will "+v(d.word).infinitive},d.form=function(){var a=v(d.word);for(var b in a)if(a[b]==d.word)return b}(),d.tense=function(){if(d.word.match(/^will ./))return"future";var a=d.form;return"present"==a?"present":"past"==a?"past":"present"}(),d.which=function(){if(e[d.word])return k.CP;if(d.word.match(/([aeiou][^aeiouwyrlm])ing$/))return k.VBG;var a=d.form;return k[g[a]]}(),d.negative=function(){return d.word.match(/n't$/)?!0:(f[d.word]||e[d.word])&&d.next&&"not"==d.next.normalised?!0:!1}(),d};"undefined"!=typeof module&&module.exports&&(module.exports=w);var x=function(){var a=function(a){var b;return b={clean:"cleanliness",naivety:"naivety"},a?b[a]?b[a]:a.match(" ")?a:a.match(/w$/)?a:a.match(/y$/)?a.replace(/y$/,"iness"):a.match(/le$/)?a.replace(/le$/,"ility"):a.match(/ial$/)?a.replace(/ial$/,"y"):a.match(/al$/)?a.replace(/al$/,"ality"):a.match(/ting$/)?a.replace(/ting$/,"ting"):a.match(/ring$/)?a.replace(/ring$/,"ring"):a.match(/bing$/)?a.replace(/bing$/,"bingness"):a.match(/ning$/)?a.replace(/ning$/,"ningness"):a.match(/sing$/)?a.replace(/sing$/,"se"):a.match(/ing$/)?a.replace(/ing$/,"ment"):a.match(/ess$/)?a.replace(/ess$/,"essness"):a.match(/ous$/)?a.replace(/ous$/,"ousness"):a.match(/s$/)?a:a+"ness":""};return"undefined"!=typeof module&&module.exports&&(module.exports=a),a}(),y=function(){var a=function(a){var b={grey:"greyer",gray:"grayer",green:"greener",yellow:"yellower",red:"redder",good:"better",well:"better",bad:"worse",sad:"sadder"},c={absurd:1,aggressive:1,alert:1,alive:1,awesome:1,beautiful:1,big:1,bitter:1,black:1,blue:1,bored:1,boring:1,brash:1,brave:1,brief:1,bright:1,broad:1,brown:1,calm:1,charming:1,cheap:1,clean:1,cold:1,cool:1,cruel:1,cute:1,damp:1,deep:1,dear:1,dead:1,dark:1,dirty:1,drunk:1,dull:1,eager:1,efficient:1,even:1,faint:1,fair:1,fanc:1,fast:1,fat:1,feeble:1,few:1,"fierce ":1,fine:1,flat:1,forgetful:1,frail:1,full:1,gentle:1,glib:1,great:1,green:1,gruesome:1,handsome:1,hard:1,harsh:1,high:1,hollow:1,hot:1,impolite:1,innocent:1,keen:1,kind:1,lame:1,lean:1,light:1,little:1,loose:1,"long":1,loud:1,low:1,lush:1,macho:1,mean:1,meek:1,mellow:1,mundane:1,near:1,neat:1,"new":1,nice:1,normal:1,odd:1,old:1,pale:1,pink:1,plain:1,poor:1,proud:1,purple:1,quick:1,rare:1,rapid:1,red:1,rich:1,ripe:1,rotten:1,round:1,rude:1,sad:1,safe:1,scarce:1,scared:1,shallow:1,sharp:1,"short":1,shrill:1,simple:1,slim:1,slow:1,small:1,smart:1,smooth:1,soft:1,sore:1,sour:1,square:1,stale:1,steep:1,stiff:1,straight:1,strange:1,strong:1,sweet:1,swift:1,tall:1,tame:1,tart:1,tender:1,tense:1,thick:1,thin:1,tight:1,tough:1,vague:1,vast:1,vulgar:1,warm:1,weak:1,wet:1,white:1,wide:1,wild:1,wise:1,young:1,yellow:1,easy:1,narrow:1,late:1,early:1,soon:1,close:1,empty:1,dry:1,windy:1,noisy:1,thirsty:1,hungry:1,fresh:1,quiet:1,clear:1,heavy:1,happy:1,funny:1,lucky:1,pretty:1,important:1,interesting:1,attractive:1,dangerous:1,intellegent:1,pure:1,orange:1,large:1,firm:1,grand:1,formal:1,raw:1,weird:1,glad:1,mad:1,strict:1,tired:1,solid:1,extreme:1,mature:1,"true":1,free:1,curly:1,angry:1},d={overweight:1,main:1,nearby:1,asleep:1,weekly:1,secret:1,certain:1},e=[{reg:/y$/i,repl:"ier"},{reg:/([aeiou])t$/i,repl:"$1tter"},{reg:/([aeou])de$/i,repl:"$1der"},{reg:/nge$/i,repl:"nger"}],f=[/ght$/,/nge$/,/ough$/,/ain$/,/uel$/,/[au]ll$/,/ow$/,/old$/,/oud$/,/e[ae]p$/],g=[/ary$/,/ous$/];if(d[a])return null;if(c[a])return a.match(/e$/)?a+"r":a+"er";if(b[a])return b[a];for(var h=0;h<g.length;h++)if(a.match(g[h]))return"more "+a;for(var h=0;h<e.length;h++)if(a.match(e[h].reg))return a.replace(e[h].reg,e[h].repl);for(var h=0;h<f.length;h++)if(a.match(f[h]))return a+"er";return"more "+a};return"undefined"!=typeof module&&module.exports&&(module.exports=a),a}(),z=function(){var a=function(a){var b={nice:"nicest",late:"latest",hard:"hardest",inner:"innermost",outer:"outermost",far:"furthest",worse:"worst",bad:"worst",good:"best"},c={absurd:1,aggressive:1,alert:1,alive:1,awesome:1,beautiful:1,big:1,bitter:1,black:1,blue:1,bored:1,boring:1,brash:1,brave:1,brief:1,bright:1,broad:1,brown:1,calm:1,charming:1,cheap:1,clean:1,cold:1,cool:1,cruel:1,cute:1,damp:1,deep:1,dear:1,dead:1,dark:1,dirty:1,drunk:1,dull:1,eager:1,efficient:1,even:1,faint:1,fair:1,fanc:1,fast:1,fat:1,feeble:1,few:1,"fierce ":1,fine:1,flat:1,forgetful:1,frail:1,full:1,gentle:1,glib:1,great:1,green:1,gruesome:1,handsome:1,hard:1,harsh:1,high:1,hollow:1,hot:1,impolite:1,innocent:1,keen:1,kind:1,lame:1,lean:1,light:1,little:1,loose:1,"long":1,loud:1,low:1,lush:1,macho:1,mean:1,meek:1,mellow:1,mundane:1,near:1,neat:1,"new":1,nice:1,normal:1,odd:1,old:1,pale:1,pink:1,plain:1,poor:1,proud:1,purple:1,quick:1,rare:1,rapid:1,red:1,rich:1,ripe:1,rotten:1,round:1,rude:1,sad:1,safe:1,scarce:1,scared:1,shallow:1,sharp:1,"short":1,shrill:1,simple:1,slim:1,slow:1,small:1,smart:1,smooth:1,soft:1,sore:1,sour:1,square:1,stale:1,steep:1,stiff:1,straight:1,strange:1,strong:1,sweet:1,swift:1,tall:1,tame:1,tart:1,tender:1,tense:1,thick:1,thin:1,tight:1,tough:1,vague:1,vast:1,vulgar:1,warm:1,weak:1,wet:1,white:1,wide:1,wild:1,wise:1,young:1,yellow:1,easy:1,narrow:1,late:1,early:1,soon:1,close:1,empty:1,dry:1,windy:1,noisy:1,thirsty:1,hungry:1,fresh:1,quiet:1,clear:1,heavy:1,happy:1,funny:1,lucky:1,pretty:1,important:1,interesting:1,attractive:1,dangerous:1,intellegent:1,pure:1,orange:1,large:1,firm:1,grand:1,formal:1,raw:1,weird:1,glad:1,mad:1,strict:1,tired:1,solid:1,extreme:1,mature:1,"true":1,free:1,curly:1,angry:1},d={overweight:1,ready:1},e=[{reg:/y$/i,repl:"iest"},{reg:/([aeiou])t$/i,repl:"$1ttest"},{reg:/([aeou])de$/i,repl:"$1dest"},{reg:/nge$/i,repl:"ngest"}],f=[/ght$/,/nge$/,/ough$/,/ain$/,/uel$/,/[au]ll$/,/ow$/,/oud$/,/...p$/],g=[/ary$/],h=function(a){return a.match(/e$/)?a+"st":a+"est"};if(c[a])return h(a);if(d[a])return"most "+a;if(b[a])return b[a];for(var i=0;i<g.length;i++)if(a.match(g[i]))return"most "+a;for(var i=0;i<e.length;i++)if(a.match(e[i].reg))return a.replace(e[i].reg,e[i].repl);for(var i=0;i<f.length;i++)if(a.match(f[i]))return h(a);return"most "+a};return"undefined"!=typeof module&&module.exports&&(module.exports=a),a}(),A=function(){var a=function(a){var b={idle:"idly","public":"publicly",vague:"vaguely",day:"daily",icy:"icily",single:"singly",female:"womanly",male:"manly",simple:"simply",whole:"wholly",special:"especially",straight:"straight",wrong:"wrong",fast:"fast",hard:"hard",late:"late",early:"early",well:"well",best:"best",latter:"latter",bad:"badly"},c={foreign:1,black:1,modern:1,next:1,difficult:1,degenerate:1,young:1,awake:1,back:1,blue:1,brown:1,orange:1,complex:1,cool:1,dirty:1,done:1,empty:1,fat:1,fertile:1,frozen:1,gold:1,grey:1,gray:1,green:1,medium:1,parallel:1,outdoor:1,unknown:1,undersized:1,used:1,welcome:1,yellow:1,white:1,fixed:1,mixed:1,"super":1,guilty:1,tiny:1,able:1,unable:1,same:1,adult:1},d=[{reg:/al$/i,repl:"ally"},{reg:/ly$/i,repl:"ly"},{reg:/(.{3})y$/i,repl:"$1ily"},{reg:/que$/i,repl:"quely"},{reg:/ue$/i,repl:"uly"},{reg:/ic$/i,repl:"ically"},{reg:/ble$/i,repl:"bly"},{reg:/l$/i,repl:"ly"}],e=[/airs$/,/ll$/,/ee.$/,/ile$/];if(c[a])return null;if(b[a])return b[a];if(a.length<=3)return null;for(var f=0;f<e.length;f++)if(a.match(e[f]))return null;for(var f=0;f<d.length;f++)if(a.match(d[f].reg))return a.replace(d[f].reg,d[f].repl);return a+"ly"};return"undefined"!=typeof module&&module.exports&&(module.exports=a),a}(),B=function(a,b,c){var d=this;return d.word=a||"",d.next=b,d.last=c,"undefined"!=typeof module&&module.exports&&(y=require("./conjugate/to_comparative"),z=require("./conjugate/to_superlative"),A=require("./conjugate/to_adverb"),x=require("./conjugate/to_noun"),k=require("../../data/parts_of_speech")),d.conjugate=function(){return{comparative:y(d.word),superlative:z(d.word),adverb:A(d.word),noun:x(d.word)}},d.which=function(){return d.word.match(/..est$/)?k.JJS:d.word.match(/..er$/)?k.JJR:k.JJ}(),d};"undefined"!=typeof module&&module.exports&&(module.exports=B),"undefined"!=typeof module&&module.exports&&(B=require("./adjective/index"),p=require("./noun/index"),r=require("./adverb/index"),w=require("./verb/index"),m=require("./value/index"));var C={adjective:function(a,b,c,d){return new B(a,b,c,d)},noun:function(a,b,c,d){return new p(a,b,c,d)},adverb:function(a,b,c,d){return new r(a,b,c,d)},verb:function(a,b,c,d){return new w(a,b,c,d)},value:function(a,b,c,d){return new m(a,b,c,d)},glue:function(){return{}}};"undefined"!=typeof module&&module.exports&&(module.exports=C);var D=function(){"undefined"!=typeof module&&module.exports&&(v=require("../parents/verb/conjugate/conjugate"),A=require("../parents/adjective/conjugate/to_adverb"),u=require("../parents/verb/conjugate/to_doer"),z=require("../parents/adjective/conjugate/to_superlative"),y=require("../parents/adjective/conjugate/to_comparative"));var a={yet:"CC",therefore:"CC",or:"CC","while":"CC",nor:"CC",whether:"CC",though:"CC",because:"CC",but:"CC","for":"CC",and:"CC","if":"CC",however:"CC",before:"CC",although:"CC",how:"CC",zero:"CD",one:"CD",two:"CD",three:"CD",four:"CD",five:"CD",six:"CD",seven:"CD",eight:"CD",nine:"CD",ten:"CD",eleven:"CD",twelve:"CD",thirteen:"CD",fourteen:"CD",fifteen:"CD",sixteen:"CD",seventeen:"CD",eighteen:"CD",nineteen:"CD",twenty:"CD",thirty:"CD",forty:"CD",fifty:"CD",sixty:"CD",seventy:"CD",eighty:"CD",ninety:"CD",hundred:"CD",thousand:"CD",million:"CD",billion:"CD",trillion:"CD",quadrillion:"CD",quintillion:"CD",sextillion:"CD",septillion:"CD",octillion:"CD",nonillion:"CD",decillion:"CD",is:"CP","will be":"CP",are:"CP",was:"CP",were:"CP","this":"DT",any:"DT",enough:"DT",each:"DT",whatever:"DT",every:"DT",which:"DT",these:"DT",another:"DT",plenty:"DT",whichever:"DT",neither:"DT",an:"DT",a:"DT",least:"DT",own:"DT",few:"DT",both:"DT",those:"DT",the:"DT",that:"DT",various:"DT",what:"DT",either:"DT",much:"DT",some:"DT","else":"DT",la:"DT",le:"DT",les:"DT",des:"DT",de:"DT",du:"DT",el:"DT",until:"IN",onto:"IN",of:"IN",into:"IN",out:"IN",except:"IN",across:"IN",by:"IN",between:"IN",at:"IN",down:"IN",as:"IN",from:"IN",around:"IN","with":"IN",among:"IN",upon:"IN",amid:"IN",to:"IN",along:"IN",since:"IN",about:"IN",off:"IN",on:"IN",within:"IN","in":"IN",during:"IN",per:"IN",without:"IN",throughout:"IN",through:"IN",than:"IN",via:"IN",up:"IN",can:"MD",may:"MD",could:"MD",might:"MD",will:"MD","ought to":"MD",would:"MD",must:"MD",shall:"MD",should:"MD",mine:"PP",something:"PP",none:"PP",anything:"PP",anyone:"PP",lot:"PP",theirs:"PP",himself:"PP",ours:"PP",his:"PP",my:"PP",their:"PP",yours:"PP",your:"PP",our:"PP",its:"PP",nothing:"PP",herself:"PP",hers:"PP",themselves:"PP",everything:"PP",myself:"PP",itself:"PP",who:"PP",her:"PP",it:"PRP",they:"PRP",i:"PRP",them:"PRP",you:"PRP",she:"PRP",me:"PRP",he:"PRP",him:"PRP",ourselves:"PRP",us:"PRP",we:"PRP",thou:"PRP",il:"PRP",elle:"PRP",now:"RB",again:"RB",already:"RB",soon:"RB",directly:"RB",toward:"RB",forever:"RB",apart:"RB",instead:"RB",yes:"RB",alone:"RB",ago:"RB",indeed:"RB",ever:"RB",quite:"RB",perhaps:"RB",where:"RB",then:"RB",here:"RB",thus:"RB",very:"RB",often:"RB",once:"RB",never:"RB",why:"RB",when:"RB",away:"RB",always:"RB",sometimes:"RB",also:"RB",maybe:"RB",so:"RB",just:"RB",well:"RB",uhh:"UH","uh-oh":"UH",ugh:"UH",sheesh:"UH",eww:"UH",pff:"UH",voila:"UH",oy:"UH",eep:"UH",hurrah:"UH",yuck:"UH",ow:"UH",duh:"UH",oh:"UH",hmm:"UH",yeah:"UH",whoa:"UH",ooh:"UH",whee:"UH",ah:"UH",bah:"UH",gah:"UH",yaa:"UH",phew:"UH",gee:"UH",ahem:"UH",eek:"UH",meh:"UH",yahoo:"UH",oops:"UH","d'oh":"UH",psst:"UH",argh:"UH",grr:"UH",nah:"UH",shhh:"UH",whew:"UH",mmm:"UH",yay:"UH","uh-huh":"UH",boo:"UH",wow:"UH",july:"CD",august:"CD",september:"CD",october:"CD",november:"CD",december:"CD",january:"CD",february:"CD",march:"CD",april:"CD",june:"CD",monday:"CD",tuesday:"CD",wednesday:"CD",thursday:"CD",friday:"CD",saturday:"CD",sunday:"CD","don't":"VB","isn't":"CP","ain't":"CP","aren't":"CP","won't":"VB","shouldn't":"MD","wouldn't":"MD","couldn't":"MD","mustn't":"MD","shan't":"MD",shant:"MD",lets:"MD","let's":"MD","what's":"VB","where'd":"VBD","when'd":"VBD","how'd":"VBD","what'd":"VBD","who'd":"MD","'o":"IN","'em":"PRP",afghan:"JJ",albanian:"JJ",algerian:"JJ",argentine:"JJ",armenian:"JJ",australian:"JJ",aussie:"JJ",austrian:"JJ",bangladeshi:"JJ",belgian:"JJ",bolivian:"JJ",bosnian:"JJ",brazilian:"JJ",bulgarian:"JJ",cambodian:"JJ",canadian:"JJ",chilean:"JJ",chinese:"JJ",colombian:"JJ",croat:"JJ",cuban:"JJ",czech:"JJ",dominican:"JJ",egyptian:"JJ",british:"JJ",estonian:"JJ",ethiopian:"JJ",finnish:"JJ",french:"JJ",gambian:"JJ",georgian:"JJ",german:"JJ",greek:"JJ",haitian:"JJ",hungarian:"JJ",indian:"JJ",indonesian:"JJ",iranian:"JJ",iraqi:"JJ",irish:"JJ",israeli:"JJ",italian:"JJ",jamaican:"JJ",japanese:"JJ",jordanian:"JJ",kenyan:"JJ",korean:"JJ",kuwaiti:"JJ",latvian:"JJ",lebanese:"JJ",liberian:"JJ",libyan:"JJ",lithuanian:"JJ",macedonian:"JJ",malaysian:"JJ",mexican:"JJ",mongolian:"JJ",moroccan:"JJ",dutch:"JJ",nicaraguan:"JJ",nigerian:"JJ",norwegian:"JJ",omani:"JJ",pakistani:"JJ",palestinian:"JJ",filipino:"JJ",polish:"JJ",portuguese:"JJ",qatari:"JJ",romanian:"JJ",russian:"JJ",rwandan:"JJ",samoan:"JJ",saudi:"JJ",scottish:"JJ",senegalese:"JJ",serbian:"JJ",singaporean:"JJ",slovak:"JJ",somali:"JJ",sudanese:"JJ",swedish:"JJ",swiss:"JJ",syrian:"JJ",taiwanese:"JJ",thai:"JJ",tunisian:"JJ",ugandan:"JJ",ukrainian:"JJ",american:"JJ",hindi:"JJ",spanish:"JJ",venezuelan:"JJ",vietnamese:"JJ",welsh:"JJ",african:"JJ",european:"JJ",asian:"JJ",californian:"JJ",nope:"UH",am:"VBP",said:"VBD",says:"VBZ",has:"VB",more:"RBR",had:"VBD",been:"VBD",going:"VBG",other:"JJ",no:"DT",there:"EX",after:"IN",many:"JJ",most:"JJ",last:"JJ",expected:"JJ","long":"JJ",far:"JJ",due:"JJ",higher:"JJR",larger:"JJR",better:"JJR",added:"VB",several:"RB",such:"RB",took:"VB",being:"VBG",began:"VBD",came:"VBD",did:"VBD",go:"VBP",too:"RB",president:"NN",dollar:"NN",student:"NN",patent:"NN",funding:"NN",morning:"NN",banking:"NN",ceiling:"NN",energy:"NN",secretary:"NN",purpose:"NN",friends:"NNS",less:"JJ",event:"NN",divine:"JJ",all:"JJ",define:"VB",went:"VBD",goes:"VBZ",sounds:"VBZ",measure:"VB",enhance:"VB",distinguish:"VB",randomly:"RB",abroad:"RB",given:"VBN",known:"VBN",rather:"RB",shown:"VBN",seen:"VBN",according:"VBG",almost:"RB",means:"VBZ",despite:"IN",only:"JJ",outside:"JJ",below:"IN",multiple:"JJ",anyway:"RB",appropriate:"JJ",unless:"IN",whom:"PP",whose:"PP",evil:"JJ",earlier:"JJR",etc:"FW",twice:"RB",avoid:"VB",favorite:"JJ",whereas:"IN",born:"VBN",hit:"VB",resulting:"VBG",limited:"JJ",developing:"VBG",plus:"CC",biggest:"JJS",random:"JJ",republican:"JJ",okay:"JJ",essential:"JJ",somewhat:"RB",unlike:"IN",secondary:"JJ",somehow:"RB",yourself:"PRP",gay:"JJ",meanwhile:"RB",hence:"RB",further:"RB",furthermore:"RB",easier:"JJR",staining:"VBG",towards:"IN",aside:"RB",moreover:"RB",south:"JJ",pro:"JJ",meant:"VBD",versus:"CC",besides:"IN",northern:"JJ",anymore:"RB",urban:"JJ",acute:"JJ",prime:"JJ",arab:"JJ",overnight:"JJ",newly:"RB",ought:"MD",mixed:"JJ",crucial:"JJ",damn:"RB",behind:"JJ",above:"JJ",beyond:"JJ",against:"JJ",under:"JJ","of course":"RB","at least":"RB","no longer":"RB","sort of":"RB","at first":"RB","once again":"RB","once more":"RB","up to":"RB","by now":"RB","all but":"RB","just about":"RB","on board":"JJ","a lot":"RB","by far":"RB","at best":"RB","at large":"RB","for good":"RB","vice versa":"JJ","en route":"JJ","for sure":"RB","upside down":"JJ","at most":"RB","per se":"RB","at worst":"RB","upwards of":"RB","en masse":"RB","point blank":"RB","up front":"JJ","in situ":"JJ","in vitro":"JJ","ad hoc":"JJ","de facto":"JJ","ad infinitum":"JJ","ad nauseam":"RB","for keeps":"JJ","a priori":"FW","et cetera":"FW","off guard":"JJ","spot on":"JJ","ipso facto":"JJ","not withstanding":"RB","de jure":"RB","a la":"IN","ad hominem":"NN","par excellence":"RB","de trop":"RB","a posteriori":"RB","fed up":"JJ","brand new":"JJ","old fashioned":"JJ","bona fide":"JJ","well off":"JJ","far off":"JJ","straight forward":"JJ","hard up":"JJ","sui generis":"JJ","en suite":"JJ","avant garde":"JJ","sans serif":"JJ","gung ho":"JJ","super duper":"JJ"},b=["collapse","stake","forsee","hide","suck","answer","argue","tend","examine","depend","form","figure","compete","mind","surround","suspect","reflect","wonder","act","hope","end","thank","file","regard","report","imagine","consider","miss","ensure","cause","work","enter","stop","defeat","surge","launch","turn","give","win","like","control","relate","remember","join","listen","train","break","spring","enjoy","fail","understand","recognize","draw","obtain","learn","fill","announce","prevent","fall","achieve","find","realize","involve","remove","lose","lie","build","aid","visit","test","strike","prepare","wait","ask","carry","suppose","determine","raise","send","love","use","pull","improve","contain","think","offer","speak","rise","talk","pick","care","express","remain","operate","deal","close","add","mention","read","support","grow","decide","walk","vary","demand","describe","sell","agree","happen","allow","suffer","have","study","be","press","watch","seem","occur","contribute","claim","become","make","compare","develop","apply","direct","discuss","know","sit","see","lead","indicate","require","change","fix","come","reach","prove","expect","exist","play","permit","meet","kill","pay","charge","increase","fight","tell","catch","believe","create","continue","live","help","represent","edit","serve","ride","appear","cover","set","maintain","start","stay","move","extend","leave","wear","run","design","supply","suggest","want","say","hear","drive","approach","cut","call","include","try","receive","save","discover","marry","throw","show","choose","need","establish","keep","assume","attend","buy","unite","feel","explain","publish","accept","settle","reduce","bring","do","let","shoot","look","take","interact","concern","put","labor","hold","return","select","die","provide","seek","stand","spend","begin","get","wish","hang","write","finish","follow","forget","feed","eat","disagree","produce","attack","attempt","bite","blow","brake","brush","burn","bang","bomb","bet","budget","comfort","cook","copy","cough","crush","cry","check","claw","clip","combine","damage","desire","doubt","drain","drink","dance","decrease","defect","deposit","drift","dip","dive","divorce","dream","exchange","envy","exert","exercise","export","fold","flood","focus","forecast","fracture","grip","guide","guard","guarantee","guess","hate","heat","handle","hire","host","hunt","hurry","import","judge","jump","jam","kick","kiss","knock","laugh","lift","lock","lecture","link","load","loan","lump","melt","message","murder","neglect","overlap","overtake","overuse","print","protest","pump","push","post","progress","promise","purchase","regret","request","reward","roll","rub","rent","repair","sail","scale","screw","shake","shock","sleep","slip","smash","smell","smoke","sneeze","snow","stick","surprise","swim","scratch","search","share","shave","slide","spit","splash","stain","stress","swing","switch","taste","touch","trade","trick","twist","tie","trap","travel","tune","undergo","undo","uplift","vote","wash","wave","whistle","wreck","yawn","betray","restrict","perform","worry","point","activate","fear","plan","note","face","predict","differ","deserve","torture","recall","count","swear","admit","insist","lack","pass","belong","complain","constitute","beat","rely","refuse","range","cite","flash","arrive","reveal","consist","observe","notice","trust","imply","display","view","stare","acknowledge","owe","gaze","treat","account","gather","address","confirm","estimate","manage","participate","sneak","drop","mirror","experience","strive","teach","cost","arch","dislike","favor","earn","emphasize","fly","match","question","emerge","encourage","matter","name","head","line","slam","list","sing","warn","ignore","resemble","spread","feature","place","reverse","accuse","spoil","retain","survive","praise","function","please","date","remind","deliver","echo","engage","deny","obey","yield","center","gain","anticipate","reason","side","thrive","defy","dodge","enable","applaud","bear","persist","pose","reject","attract","await","inhibit","declare","process","risk","urge","value","block","confront","credit","cross","wake","amuse","dare","resent","smile","gloss","threaten","collect","depict","dismiss","submit","benefit","step","deem","limit","sense","issue","embody","force","govern","replace","aim","bother","cater","adopt","empower","outweigh","alter","enrich","influence","prohibit","pursue","warrant","convey","approve","reserve","rest","strain","wander","adjust","dress","market","mingle","disapprove","evaluate","flow","inhabit","pop","rule","depart","roam","assert","disappear","envision","pause","afford","challenge","grab","grumble","house","portray","revel","base","conduct","review","stem","crave","mark","store","target","unlock","weigh","resist","steal","drag","pour","reckon","assign","cling","rank","attach","decline","destroy","interfere","paint","skip","sprinkle","wither","allege","retire","score","monitor","expand","honor","lend","pack","assist","float","appeal","sink","stretch","undermine","assemble","boast","bounce","grasp","install","borrow","crack","elect","shine","shout","contrast","overcome","relax","relent","strengthen","conform","dump","pile","scare","relive","resort","rush","boost","cease","command","excel","plug","plunge","proclaim","discourage","endure","ruin","stumble","abandon","cheat","convince","merge","convert","harm","multiply","overwhelm","chew","invent","bury","wipe"];b.forEach(function(b){var c=v(b);a[c.infinitive]=a[c.infinitive]||"VBP",a[c.past]=a[c.past]||"VBD",a[c.gerund]=a[c.gerund]||"VBG",a[c.present]=a[c.present]||"VBZ",c.participle&&!a[c.participle]&&(a[c.participle]="VBN");var d=u(b);d&&(a[d]="NNA")});var c=["colonial","moody","literal","actual","probable","apparent","usual","aberrant","ablaze","able","absolute","aboard","abrupt","absent","absorbing","absurd","abundant","accurate","adult","afraid","agonizing","ahead","alert","alive","aloof","amazing","arbitrary","arrogant","asleep","astonishing","average","awake","aware","awkward","back","bad","bankrupt","bawdy","beneficial","bent","best","better","big","bitter","bizarre","black","bloody","blue","bouncy","brash","brave","brief","bright","brilliant","broad","broken","brown","burly","busy","cagey","calm","careful","caring","certain","charming","cheap","chief","chilly","civil","clever","close","closed","cloudy","cold","colossal","commercial","common","complete","complex","concerned","concrete","congruent","constant","cooing","cool","correct","cowardly","craven","cruel","cuddly","curly","cute","daily","damaged","damaging","damp","dapper","dark","dashing","dead","deadpan","dear","deep","deeply","defiant","degenerate","delicate","delightful","desperate","determined","didactic","difficult","discreet","done","double","doubtful","downtown","dreary","drunk","dry","dull","eager","early","east","eastern","easy","elderly","elegant","elfin","elite","eminent","empty","encouraging","entire","erect","ethereal","even","exact","expert","extra","extreme","exuberant","exultant","faint","fair","false","fanc","fancy","fast","fat","faulty","feeble","female","fertile","few","fierce","fierce ","financial","fine","firm","first","fit","fixed","flagrant","flat","foamy","foolish","foregoing","foreign","forgetful","former","fortunate","frail","frantic","free","freezing","frequent","fresh","fretful","friendly","full","fun","funny","furry","future","gainful","gaudy","gentle","giant","giddy","gigantic","glad","gleaming","glib","global","gold","gone","good","goofy","graceful","grand","grateful","gratis","gray","great","green","grey","groovy","gross","guarded","half","handy","hanging","hard","harsh","hateful","heady","heavenly","heavy","hellish","helpful","hesitant","high","highfalutin","hollow","homely","honest","hot","huge","humdrum","hurried","hurt","icy","ignorant","ill","illegal","immediate","immense","imminent","impartial","imperfect","impolite","important","imported","initial","innate","inner","inside","irate","jolly","juicy","junior","juvenile","kaput","keen","kind","kindly","knowing","labored","lame","languid","large","late","latter","learned","left","legal","lethal","level","lewd","light","likely","literate","lively","living","lonely","longing","loose","loud","loutish","lovely","loving","low","lowly","lush","luxuriant","lying","macabre","macho","mad","madly","magenta","main","major","makeshift","male","mammoth","married","mature","measly","meaty","medium","meek","mellow","mere","middle","miniature","minor","miscreant","mobile","moldy","mundane","mute","naive","narrow","near","nearby","neat","necessary","neighborly","new","next","nice","nimble","noisy","nonchalant","nondescript","nonstop","north","nosy","obeisant","obese","obscene","observant","obsolete","odd","offbeat","official","ok","old","open","opposite","orange","organic","outdoor","outer","outgoing","oval","over","overall","overt","overweight","overwrought","painful","pale","past","peaceful","perfect","petite","picayune","pink","placid","plain","plant","pleasant","polite","poor","potential","pregnant","premium","present","pricey","prickly","primary","prior","private","profuse","proper","public","pumped","puny","pure","purple","quack","quaint","quick","quickest","quiet","rabid","racial","rare","raw","ready","real","rebel","recondite","red","redundant","relevant","remote","resolute","resonant","rich","right","rightful","ripe","ritzy","robust","romantic","roomy","rotten","rough","round","royal","rude","sad","safe","salty","same","scarce","scary","scientific","screeching","second","secret","secure","sedate","seemly","selfish","senior","separate","severe","shallow","sharp","shiny","shocking","short","shrill","shut","shy","sick","significant","silly","simple","sincere","single","skinny","slight","slim","slimy","slow","small","smelly","smooth","snobbish","social","soft","somber","soon","sordid","sore","sorry","sour","southern","spare","special","specific","spicy","splendid","square","squeamish","stale","standard","standing","steadfast","steady","steep","stereotyped","stiff","still","straight","strange","strict","striped","strong","stupid","sturdy","subdued","subsequent","substantial","sudden","super","superb","superficial","supreme","sure","sweet","swift","taboo","tall","tame","tan","tart","tasteful","tawdry","telling","temporary","tender","tense","terrific","tested","thick","thin","thoughtful","tidy","tight","tiny","top","torpid","tough","tranquil","trite","true","ugly","ultra","unbecoming","understood","uneven","unfair","unlikely","unruly","unsightly","untidy","unwritten","upbeat","upper","uppity","upset","upstairs","uptight","used","useful","utter","uttermost","vagabond","vague","vanilla","various","vast","vengeful","verdant","violet","volatile","vulgar","wanting","warm","wary","wasteful","weak","weary","weekly","weird","welcome","western","wet","white","whole","wholesale","wide","wild","windy","wiry","wise","wistful","womanly","wooden","woozy","wound","wrong","wry","yellow","young","zany","sacred","abroad","absorbing","abstract","academic","accelerated","accented","accountant","acquainted","acute","addicting","addictive","adjustable","admired","adult","adverse","advised","aerosol","afraid","aggravated","aggressive","agreeable","alienate","aligned","all-round","alleged","almond","alright","altruistic","ambient","ambivalent","amiable","amino","amorphous","amused","anatomical","ancestral","angelic","angrier","answerable","anti-gay","antiquarian","antiretroviral","appellate","applicable","apportioned","approachable","appropriated","arabic","archer","aroused","arrested","assertive","assigned","athletic","atrocious","attained","authoritarian","autobiographical","avaricious","avocado","awake","awsome","backstage","backwoods","balding","bandaged","banded","banned","barreled","battle","beaten","begotten","beguiled","bellied","belted","beneficent","besieged","betting","big-money","biggest","biochemical","bipolar","blackened","blame","blessed","blindfolded","bloat","blocked","blooded","blue-collar","blushing","boastful","bolder","bolstered","bonnie","bored","boundary","bounded","bounding","branched","brawling","brazen","breeding","bridged","brimming","brimstone","broadest","broiled","broker","bronze","bruising","buffy","bullied","bungling","burial","buttery","cancerous","candied","canonical","cantankerous","cardinal","carefree","caretaker","casual","cathartic","causal","chapel","characterized","charcoal","cheeky","cherished","chipotle","chirping","chivalrous","circumstantial","civic","civil","civilised","clanking","clapping","claptrap","classless","cleansed","cleric","cloistered","codified","colloquial","colour","combat","combined","comely","commissioned","commonplace","commuter","commuting","comparable","complementary","compromising","conceding","concentrated","conceptual","conditioned","confederate","confident","confidential","confining","confuse","congressional","consequential","conservative","constituent","contaminated","contemporaneous","contraceptive","convertible","convex","cooked","coronary","corporatist","correlated","corroborated","cosmic","cover","crash","crazier","craziest","crypto","culminate","cushioned","dandy","dashing","dazzled","decreased","decrepit","dedicated","defaced","defective","defenseless","deluded","deodorant","departed","depress","designing","despairing","destitute","detective","determined","devastating","deviant","devilish","devoted","diabetic","diagonal","dictated","didactic","differentiated","diffused","dirtier","disabling","disconnected","discovered","disdainful","diseased","disfigured","disheartened","disheveled","disillusioned","disparate","dissident","doable","doctrinal","doing","dotted","double-blind","downbeat","dozen","draining","draught","dread","dried","dropped","drowned","dulled","duplicate","eaten","echoing","economical","elaborated","elastic","elective","electoral","elven","embryo","emerald","emergency","emissary","emotional","employed","enamel","encased","encrusted","endangered","engraved","engrossing","enlarged","enlisted","enlivened","ensconced","entangled","enthralling","entire","envious","eradicated","eroded","esoteric","essential","evaporated","ever-present","evergreen","everlasting","exacting","exasperated","excess","exciting","executable","existent","exonerated","exorbitant","exotic","exponential","export","extraordinary","exultant","exulting","facsimile","fading","fainter","faith-based","fallacious","faltering","famous","fancier","fast-growing","fated","favourable","fearless","feathered","fellow","fermented","ferocious","fiddling","filling","firmer","fitted","flammable","flawed","fledgling","fleshy","flexible","flickering","floral","flowering","flowing","foggy","folic","foolhardy","foolish","footy","forehand","forked","formative","formulaic","foul-mouthed","fractional","fragrant","fraudulent","freakish","freckled","freelance","freight","fresh","fretted","frugal","fulfilling","fuming","funded","funny","furry","garbled","gathered","gendered","geologic","geometric","gibberish","gilded","ginger","glare","glaring","gleaming","glorified","glorious","goalless","gold-plated","goody","grammatical","grande","grateful","gratuitous","graven","greener","grinding","grizzly","groaning","grudging","guaranteed","gusty","gypsy","half-breed","hand-held","handheld","hands-off","hard-pressed","harlot","healing","healthier","healthiest","heart","heart-shaped","heathen","hedonistic","heralded","herbal","high-density","high-performance","high-res","high-yield","hissy","hitless","holiness","homesick","homosexual","honorable","hooded","hopeless","horrendous","horrible","hot-button","huddled","human","humbling","humid","humiliating","hypnotized","idealistic","idiosyncratic","ignited","illustrated","illustrative","imitated","immense","immersive","immigrant","immoral","impassive","impressionable","improbable","impulsive","in-between","in-flight","inattentive","inbound","inbounds","incalculable","incomprehensible","indefatigable","indigenous","indigo","indiscriminate","indomitable","inert","inflate","inform","inheriting","injured","injurious","inking","inoffensive","insane","insensible","insidious","insincere","insistent","insolent","insufferable","intemperate","interdependent","interesting","interfering","intern","interpreted","intersecting","intolerable","intolerant","intuitive","irresolute","irritate","japan","jealous","jerking","joining","joint","journalistic","joyful","keyed","knowing","lacklustre","laden","lagging","lamented","laughable","layered","leather","leathern","leery","left-footed","legible","leisure","lessening","liberating","life-size","lifted","lightest","limitless","listening","literary","liver","livid","lobster","locked","long-held","long-lasting","long-running","long-suffering","loudest","loveliest","low-budget","low-carb","lowering","lucid","luckless","lusty","luxurious","magazine","maniac","manmade","maroon","mastered","mated","material","materialistic","meaningful","measuring","mediaeval","medical","meditated","medley","melodic","memorable","memorial","metabolic","metallic","metallurgical","metering","midair","midterm","midway","mighty","migrating","mind-blowing","mind-boggling","minor","mirrored","misguided","misshapen","mitigated","mixed","modernized","molecular","monarch","monastic","morbid","motley","motorized","mounted","multi-million","multidisciplinary","muscled","muscular","muted","mysterious","mythic","nail-biting","natural","nauseous","negative","networked","neurological","neutered","newest","night","nitrous","no-fly","noncommercial","nonsense","north","nuanced","occurring","offensive","oldest","oncoming","one-eyed","one-year","onstage","onward","opaque","open-ended","operating","opportunist","opposing","opt-in","ordinate","outdone","outlaw","outsized","overboard","overheated","oversize","overworked","oyster","paced","panting","paralyzed","paramount","parental","parted","partisan","passive","pastel","patriot","peacekeeping","pedestrian","peevish","penal","penned","pensive","perceptual","perky","permissible","pernicious","perpetuate","perplexed","pervasive","perverted","petrochemical","philosophical","picturesque","pillaged","piped","piquant","pitching","plausible","pliable","plumb","politician","polygamous","poorest","pornographic","portmanteau","posed","positive","possible","postpartum","prank","pre-emptive","precocious","predicted","premium","preparatory","prerequisite","prescient","preserved","presidential","pressed","pressurized","presumed","prewar","priced","pricier","primal","primer","primetime","printed","private","pro-abortion","problem","procedural","process","prodigious","professional","programmed","progressive","prolific","promising","promulgated","pronged","proportionate","protracted","pulled","pulsed","purgatory","quick","raped","rapid-fire","raunchy","razed","reactive","readable","realizing","recognised","recovering","recurrent","recycled","redeemable","reflecting","regal","registering","reliable","reminiscent","remorseless","removable","renewable","repeating","repellent","reserve","resigned","respectful","rested","restrict","resultant","retaliatory","retiring","revelatory","reverend","reversing","revolving","ridiculous","right-hand","ringed","risque","robust","roomful","rotating","roused","rubber","run-down","running","runtime","rustling","safest","salient","sanctioned","saute","saved","scandalized","scarlet","scattering","sceptical","scheming","schizophrenic","scoundrel","scratched","scratchy","scrolled","seated","second-best","segregated","self-taught","semiautomatic","senior","sensed","sentient","sexier","shadowy","shaken","shaker","shameless","shaped","shiny","shipped","shivering","shoestring","short","short-lived","signed","simplest","simplistic","sizable","skeleton","skinny","skirting","skyrocketed","slamming","slanting","slapstick","sleek","sleepless","sleepy","slender","slimmer","smacking","smokeless","smothered","smouldering","snuff","socialized","solid-state","sometime","sought","spanking","sparing","spattered","specialized","specific","speedy","spherical","spiky","spineless","sprung","squint","stainless","standing","starlight","startled","stately","statewide","stereoscopic","sticky","stimulant","stinky","stoked","stolen","storied","strained","strapping","strengthened","stubborn","stylized","suave","subjective","subjugated","subordinate","succeeding","suffering","summary","sunset","sunshine","supernatural","supervisory","supply-side","surrogate","suspended","suspenseful","swarthy","sweating","sweeping","swinging","swooning","sympathize","synchronized","synonymous","synthetic","tailed","tallest","tangible","tanked","tarry","technical","tectonic","telepathic","tenderest","territorial","testimonial","theistic","thicker","third-world","threatening","tight-lipped","timed","timely","timid","torrent","totalled","tougher","traditional","transformed","transgendered","trapped","traumatic","traveled","traverse","treated","trial","trunk","trusting","trying","twisted","two-lane","tyrannical","unaided","unassisted","unassuming","unattractive","uncapped","uncomfortable","uncontrolled","uncooked","uncooperative","underground","undersea","undisturbed","unearthly","uneasy","unequal","unfazed","unfinished","unforeseen","unforgivable","unidentified","unimaginative","uninspired","unintended","uninvited","universal","unmasked","unorthodox","unparalleled","unpleasant","unprincipled","unread","unreasonable","unregulated","unreliable","unremitting","unsafe","unsanitary","unsealed","unsuccessful","unsupervised","untimely","unwary","unwrapped","uppity","upstart","useless","utter","valiant","valid","valued","vanilla","vaulting","vaunted","veering","vegetative","vented","verbal","verifying","veritable","versed","vinyl","virgin","visceral","visual","voluptuous","walk-on","wanton","warlike","washed","waterproof","waved","weakest","well-bred","well-chosen","well-informed","wetting","wheeled","whirlwind","widen","widening","widow","willful","willing","winnable","winningest","wireless","wistful","woeful","wooded","woodland","wordless","workable","worldly","worldwide","worst-case","worsted","worthless","aggressive","awesome","beautiful","bored","boring","clean","dirty","efficient","gruesome","handsome","innocent","lean","little","long","mean","normal","proud","rapid","scared","smart","thirsty","hungry","clear","happy","lucky","pretty","interesting","attractive","dangerous","intellegent","formal","tired","solid","angry","unknown","detailed","ongoing","prominent","permanent","diverse","partial","moderate","contemporary","intense","widespread","ultimate","ideal","adequate","sophisticated","naked","dominant","precise","intact","adverse","genuine","subtle","universal","resistant","routine","distant","unexpected","soviet","blind","artificial","mild","legitimate","unpublished","superior","intermediate","everyday","dumb","excess","sexy","fake","monthly","premature","sheer","generic","insane","contrary","twin","upcoming","bottom","costly","indirect","sole","unrelated","hispanic","improper","underground","legendary","reluctant","beloved","inappropriate","corrupt","irrelevant","justified","obscure","profound","hostile","influential","inadequate","abstract","timely","authentic","bold","intimate","straightforward","rival","right-wing","racist","symbolic","unprecedented","loyal","talented","troubled","noble","instant","incorrect","dense","blond","deliberate","blank","rear","feminine","apt","stark","alcoholic","teenage","vibrant","humble","vain","covert","bland","trendy","foul","populist","alarming","hooked","wicked","deaf","left-wing","lousy","malignant","stylish","upscale","hourly","refreshing","cozy","slick","dire","yearly","inbred","part-time","finite","backwards","nightly","unauthorized","cheesy","indoor","surreal","bald","masculine","shady","spirited","eerie","horrific","smug","stern","hefty","savvy","bogus","elaborate","gloomy","pristine","extravagant","serene","advanced","perverse","devout","crisp","rosy","slender","melancholy","faux","phony","danish","lofty","nuanced","lax","adept","barren","shameful","sleek","solemn","vacant","dishonest","brisk","fluent","insecure","humid","menacing","moot","soothing","self-loathing","far-reaching","harrowing","scathing","perplexing","calming","unconvincing","unsuspecting","unassuming","surprising","unappealing","vexing","unending","easygoing","appetizing","disgruntled","retarded","undecided","unregulated","unsupervised","unrecognized","crazed","distressed","jagged","paralleled","cramped","warped","antiquated","fabled","deranged","diseased","ragged","intoxicated","hallowed","crowded","ghastly","disorderly","saintly","wily","sly","sprightly","ghostly","oily","hilly","grisly","earthly","friendly","unwieldy"];
return c.forEach(function(b){a[b]="JJ";var c=A(b);c&&c!=b&&!a[c]&&(a[c]=a[c]||"RB");var d=y(b);!d||d.match(/^more ./)||d==b||a[d]||(a[d]=a[d]||"JJR");var e=z(b);!e||e.match(/^most ./)||e==b||a[e]||(a[e]=a[e]||"JJS")}),"undefined"!=typeof module&&module.exports&&(module.exports=a),a}(),E=function(a){var b=this;return b.tokens=a||[],b.tense=function(){var a=b.tokens.filter(function(a){return"verb"==a.pos.parent});return a.map(function(a){return a.analysis.tense})},b.to_past=function(){return b.tokens=b.tokens.map(function(a){return"verb"==a.pos.parent&&(a.text=a.analysis.to_past(),a.normalised=a.text),a}),b},b.to_present=function(){return b.tokens=b.tokens.map(function(a){return"verb"==a.pos.parent&&(a.text=a.analysis.to_present(),a.normalised=a.text),a}),b},b.to_future=function(){return b.tokens=b.tokens.map(function(a){return"verb"==a.pos.parent&&(a.text=a.analysis.to_future(),a.normalised=a.text),a}),b},b.insert=function(a,c){c&&a&&b.tokens.splice(c,0,a)},b.negate=function(){for(var a=0;a<b.tokens.length;a++)if(b.tokens[a].analysis.negative)return b;for(var c=b.tokens.length,a=0;c>a;a++)if(b.tokens[a].pos&&"CP"==b.tokens[a].pos.tag&&!b.tokens[a].analysis.negative){var d={text:"not"};b.tokens[a].analysis.negative=!0,b.tokens[a+1]&&b.tokens[a+1].analysis&&(b.tokens[a+1].analysis.negative=!0),b.insert(d,a+1)}for(var e={past:"didn't",present:"doesn't",future:"won't",gerund:"isn't"},c=b.tokens.length,a=0;c>a;a++)if(b.tokens[a].pos&&"verb"==b.tokens[a].pos.parent&&!b.tokens[a].analysis.negative){var f=b.tokens[a].analysis.tense||"present";b.tokens[a].analysis.negative=!0,"gerund"!=f&&(b.tokens[a].text=b.tokens[a].analysis.conjugate().infinitive,b.tokens[a].normalised=b.tokens[a].text);var d={text:e[f],normalised:e[f]};b.insert(d,a)}return b},b.entities=function(a){var c=[];return a=a||{},b.tokens.forEach(function(a){"noun"==a.pos.parent&&a.analysis.is_entity&&c.push(a)}),a.ignore_gerund&&(c=c.filter(function(a){return"VBG"!=a.pos.tag})),c},b.text=function(){return b.tokens.map(function(a){return a.text}).join(" ")},b.verbs=function(){return b.tokens.filter(function(a){return"verb"==a.pos.parent})},b.adverbs=function(){return b.tokens.filter(function(a){return"adverb"==a.pos.parent})},b.nouns=function(){return b.tokens.filter(function(a){return"noun"==a.pos.parent})},b.adjectives=function(){return b.tokens.filter(function(a){return"adjective"==a.pos.parent})},b.values=function(){return b.tokens.filter(function(a){return"value"==a.pos.parent})},b.tags=function(){return b.tokens.map(function(a){return a.pos.tag})},b};"undefined"!=typeof module&&module.exports&&(module.exports=E);var F=function(a){var b=this;b.sentences=a||[],b.text=function(){return b.sentences.map(function(a){return a.text()}).join(" ")},b.nouns=function(){return b.sentences.map(function(a){return a.nouns()}).reduce(function(a,b){return a.concat(b)},[])},b.entities=function(a){return b.sentences.map(function(b){return b.entities(a)}).reduce(function(a,b){return a.concat(b)},[])},b.adjectives=function(){return b.sentences.map(function(a){return a.adjectives()}).reduce(function(a,b){return a.concat(b)},[])},b.verbs=function(){return b.sentences.map(function(a){return a.verbs()}).reduce(function(a,b){return a.concat(b)},[])},b.adverbs=function(){return b.sentences.map(function(a){return a.adverbs()}).reduce(function(a,b){return a.concat(b)},[])},b.values=function(){return b.sentences.map(function(a){return a.values()}).reduce(function(a,b){return a.concat(b)},[])}};"undefined"!=typeof module&&module.exports&&(module.exports=F);var G=function(){"undefined"!=typeof module&&module.exports&&(c=require("./methods/tokenization/tokenize").tokenize,k=require("./data/parts_of_speech"),h=require("./data/word_rules"),D=require("./data/lexicon"),j=require("./data/unambiguous_suffixes"),E=require("./sentence"),F=require("./section"),C=require("./parents/parents"));var a=function(a,b){return a.text+=" "+b.text,a.normalised+=" "+b.normalised,a.pos_reason+="|"+b.pos_reason,a.start=a.start||b.start,a.capitalised=a.capitalised||b.capitalised,a.end=a.end||b.end,a},b=function(b){for(var c=b.tokens,d=[],e=0;e<=c.length;e++){var f=c[e+1];c[e]&&f&&(c[e].pos.tag==f.pos.tag&&1!=c[e].punctuated&&1!=f.punctuated&&c[e].capitalised==f.capitalised?(c[e+1]=a(c[e],c[e+1]),c[e]=null):"will"==c[e].normalised&&"verb"==f.pos.parent?(c[e+1]=a(c[e],c[e+1]),c[e]=null):"CD"==c[e].pos.tag&&"and"==f.normalised&&c[e+2]&&"CD"==c[e+2].pos.tag?(c[e+1]=a(c[e],c[e+1]),c[e]=null):e>0&&c[e].capitalised&&"of"==f.normalised&&c[e+2]&&c[e+2].capitalised?(c[e+1]=a(c[e],c[e+1]),c[e]=null,c[e+2]=a(c[e+1],c[e+2]),c[e+1]=null):c[e].capitalised&&"of"==f.normalised&&c[e+2]&&"DT"==c[e+2].pos.tag&&c[e+3]&&c[e+3].capitalised&&(c[e+1]=a(c[e],c[e+1]),c[e]=null,c[e+2]=a(c[e+1],c[e+2]),c[e+1]=null)),d.push(c[e])}return b.tokens=d.filter(function(a){return a}),b},d=function(a){if(D[a])return k[D[a]];if(a.match(/^(over|under|out|-|un|re|en).{4}/)){var b=a.replace(/^(over|under|out|.*?-|un|re|en)/,"");return k[D[b]]}},e=function(a){for(var b=0;b<h.length;b++)if(a.match(h[b].reg))return k[h[b].pos]},f=function(a,b,c){var d=c.tokens[b-1],e=c.tokens[b+1],f={the:1,a:1,an:1};return e&&"noun"!=a.pos.parent&&"glue"!=a.pos.parent&&"MD"==e.pos.tag&&(a.pos=k.NN,a.pos_reason="before a modal"),d&&"noun"==a.pos.parent&&"RB"==d.pos.tag&&!d.start&&(a.pos=k.VB,a.pos_reason="after an adverb"),e&&"adjective"==a.pos.parent&&"adjective"==e.pos.parent&&!a.punctuated&&(a.pos=k.RB,a.pos_reason="consecutive_adjectives"),d&&"verb"==a.pos.parent&&f[d.pos.normalised]&&"CP"!=a.pos.tag&&(a.pos=k.NN,a.pos_reason="determiner-verb"),d&&"CP"==d.pos.tag&&"DT"!=a.pos.tag&&"RB"!=a.pos.tag&&"adjective"!=a.pos.parent&&"value"!=a.pos.parent&&(a.pos=k.JJ,a.pos_reason="copula-adjective"),d&&e&&"CP"==d.pos.tag&&"RB"==a.pos.tag&&"verb"==e.pos.parent&&(c.tokens[b+1].pos=k.JJ,c.tokens[b+1].pos_reason="copula-adverb-adjective"),e&&"PRP"==e.pos.tag&&"noun"==a.pos.parent&&!a.punctuated&&(a.pos=k.VB,a.pos_reason="before a [him|her|it]"),d&&e&&"DT"==d.pos.tag&&"noun"==e.pos.parent&&"verb"==a.pos.parent&&(a.pos=k.JJ,a.pos_reason="determiner-adjective-noun"),a},g=function(a){for(var b={"i'd":["i","would"],"she'd":["she","would"],"he'd":["he","would"],"they'd":["they","would"],"we'd":["we","would"],"i'll":["i","will"],"she'll":["she","will"],"he'll":["he","will"],"they'll":["they","will"],"we'll":["we","will"],"i've":["i","have"],"they've":["they","have"],"we've":["we","have"],"should've":["should","have"],"would've":["would","have"],"could've":["could","have"],"must've":["must","have"],"i'm":["i","am"],"he's":["he","is"],"she's":["she","is"],"we're":["we","are"],"they're":["they","are"],cannot:["can","not"]},c=0;c<a.length;c++)if(b[a[c].normalised||null]){var d=a.slice(0,c),e=a.slice(c+1,a.length),f=[{text:"",normalised:b[a[c].normalised][0],start:a[c].start},{text:a[c].text,normalised:b[a[c].normalised][1],start:void 0}];return a=d.concat(f),a=a.concat(e),g(a)}return a},i=function(a,h){h=h||{};var i=c(a);return i.forEach(function(a){var b=a.tokens[0],c=b.normalised.length;b&&b.capitalised&&(d[b.normalised]||j[b.normalised.slice(c-4,c)])&&(a.tokens[0].capitalised=!1),a.tokens=g(a.tokens),a.tokens=a.tokens.map(function(a){if(a.capitalised)return a.pos=k.NN,a.pos_reason="capitalised",a;var b=d(a.normalised);if(b)return a.pos=b,a.pos_reason="lexicon",a;if(!a.normalised)return a.pos=k.UH,a.pos_reason="wordless_string",a;var c=a.normalised.length;if(c>4){var f=a.normalised.substr(c-4,c-1);if(j[f])return a.pos=k[j[f]],a.pos_reason="wordnet suffix",a}var g=e(a.normalised);return g?(a.pos=g,a.pos_reason="regex suffix",a):parseFloat(a.normalised)?(a.pos=k.CD,a.pos_reason="parsefloat",a):a}),a.tokens=a.tokens.map(function(b,c){a.tokens[c+1],a.tokens[c-1];return b.normalised.match(/.ed$/)&&(b.pos=k.VB,b.pos_reason="ed"),b});var h=null,i="";a.tokens=a.tokens.map(function(b,c){{var d=a.tokens[c+1];a.tokens[c-1]}if(b.pos){if("the"==b.normalised||"a"==b.normalised||"an"==b.normalised||"PP"==b.pos.tag)return h="noun",i=b.pos.name,b;if("PRP"==b.pos.tag||"MD"==b.pos.tag)return h="verb",i=b.pos.name,b}return b.pos&&("verb"==h&&"noun"==b.pos.parent&&(!d||d.pos&&"noun"!=d.pos.parent)&&(d&&d.pos&&d.pos.parent==h||(b.pos=k.VB,b.pos_reason="signal from "+i,h=null)),"noun"==h&&"verb"==b.pos.parent&&(!d||d.pos&&"verb"!=d.pos.parent)&&(d&&d.pos&&d.pos.parent==h||(b.pos=k.NN,b.pos_reason="signal from "+i,h=null))),h&&!b.pos&&(d&&d.pos&&d.pos.parent==h||(b.pos=k[h],b.pos_reason="signal from "+i,h=null)),"verb"==h&&b.pos&&"verb"==b.pos.parent&&(h=null),"noun"==h&&b.pos&&"noun"==b.pos.parent&&(h=null),b});var l={};a.tokens.forEach(function(a){a.pos&&(l[a.pos.parent]=!0)}),a.tokens=a.tokens.map(function(a){if(!a.pos){if(l.adjective&&l.noun&&!l.verb)return a.pos=k.VB,a.pos_reason="need one verb",l.verb=!0,a;a.pos=k.NN,a.pos_reason="noun fallback"}return a}),a.tokens=a.tokens.map(function(b,c){return f(b,c,a)}),a.tokens=a.tokens.map(function(b,c){return f(b,c,a)})}),h.dont_combine||(i=i.map(function(a){return b(a)})),i=i.map(function(a){return a.tokens=a.tokens.map(function(b,c){var d=a.tokens[c-1]||null,e=a.tokens[c+1]||null;return b.analysis=C[b.pos.parent](b.normalised,e,d,b),b.analysis.which&&("noun"==b.pos.parent||"adjective"==b.pos.parent),b}),a}),i=i.map(function(a){var b=new E(a.tokens);return b.type=a.type,b}),new F(i)};return"undefined"!=typeof module&&module.exports&&(module.exports=i),i}(),H=function(){"undefined"!=typeof module&&module.exports&&(G=require("./pos"));var a=function(a,b){b=b||{};var c=G(a,b).sentences;return c.reduce(function(a,c){return a.concat(c.entities(b))},[])};return"undefined"!=typeof module&&module.exports&&(module.exports=a),a}();if("undefined"!=typeof module&&module.exports)var C=require("./src/parents/parents"),I=require("./src/methods/tokenization/sentence").sentences,c=require("./src/methods/tokenization/tokenize").tokenize,b=require("./src/methods/tokenization/ngram").ngram,d=require("./src/methods/transliteration/unicode_normalisation"),e=require("./src/methods/syllables/syllable"),J=require("./src/methods/localization/britishize"),g=J.americanize,f=J.britishize,G=require("./src/pos"),H=require("./src/spot");var K={noun:C.noun,adjective:C.adjective,verb:C.verb,adverb:C.adverb,value:C.value,sentences:I,ngram:b,tokenize:c,americanize:g,britishize:f,syllables:e,normalize:d.normalize,denormalize:d.denormalize,pos:G,spot:H};return"undefined"!=typeof module&&module.exports&&(module.exports=K),K}();
/*
 *  PataphysicalDate.js  -- A javascript library which convert Gregorian dates to the Pataphysical Calendar
 *  Author:     Henri Bourcereau (henri AT bourcereau fr) 
 *  URL:         https://github.com/mmai/pataphysical-date
 */

(function(exports){

        PataphysicalDate = function(date){
            if (typeof(date) === 'undefined'){
                date = new Date();
            } else if (typeof(date) === 'string'){
                date = new Date(date);
            }

            if (!(date instanceof Date) || date.toString() === 'Invalid Date'){
                throw new Error('Invalid input date');
            }

            this.gregorian = date;
            var pDate = calculateDate(this.gregorian);

            this.year = pDate.year;
            this.month = pDate.month - 1;
            this.day = pDate.day;
        };  

        PataphysicalDate.prototype = {
            toString: function(){
                var day = this.day;
                if (this.day === 1) {
                    day = "1er";
                }
                return [this.getDayName(), day, this.getMonthName(), this.year].join(' ');
            },
            getFullYear: function(){
                return this.year;
            },
            getMonth: function(){
                return this.month;
            },
            getDay: function(){
                return this.day;
            },
            getDayName: function(){
                var days = ["Samedi", "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

                var name = days[this.day % 7];
                if (this.day === 29) {
                    name = "Hunyadi";
                }

                return name;
            },
            getDayImportance: function(){
                var pmonth = pcalendar[this.month];
                return pmonth.days[this.day - 1].importance;
            },
            getMonthName: function(){
                var pmonth = pcalendar[this.month];
                return pmonth.month;
            }, 
            getSaintOfDay: function(){
                var pmonth = pcalendar[this.month];
                return pmonth.days[this.day - 1].saint;
            }
        };

        var calculateDate = function(date){
            var pDay, pMonth, pYear, pWeekDay;

            var gDay = date.getDate();
            var gMonth = date.getMonth()+1;
            var gYear = date.getFullYear();
            
            var ref;
            if ((gMonth > 9) || (gMonth==9 && gDay > 7)) {
                pYear = gYear - 1872;
                ref = new Date(gYear+"-09-08");
            } else {
                pYear = gYear - 1873;
                ref = new Date(gYear-1+"-09-08");
            }

            var days = dateDiff(date, ref); 

            var leapYear = isLeapYear(gYear);
            var leapDay = leapYear ? -1 : 0;

            if (leapYear && gMonth == 2 && gDay == 23) {
                pDay = 29;
                pMonth = Math.floor(days / 28);
            } else if ((gMonth == 2 && gDay > 23) || (gMonth > 2 && gMonth <7) || (gMonth == 7 && gDay < 13)) {
                pDay = (days + leapDay) % 28 + 1;
                pMonth = Math.floor((days + leapDay) / 28) + 1;
            } else if (gMonth == 7 && gDay == 13) {
                pDay = 29;
                pMonth = Math.floor(days / 28);
            } else if ((gMonth == 7 && gDay > 13) || (gMonth > 7 && gMonth < 9) || (gMonth == 9 && gDay < 8)) {
                pDay = (days + leapDay - 1) % 28 + 1;
                pMonth = Math.floor((days + leapDay - 1) / 28) + 1;
            } else {
                pDay = days % 28 + 1;
                pMonth = Math.floor(days / 28) + 1;
            }

            return {
                day: pDay,
                month: pMonth,
                year: pYear
            }

        };

        var isLeapYear = function (year){
            return dateDiff( new Date(year+"-12-31"), new Date(year+"-01-01")) == 365;
        }

        var dateDiff = function (date1, date2){
            date1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
            date2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
            var ms = Math.abs(date1-date2);
            return ms/1000/60/60/24;
        }

        var pcalendar = [
           { month:"Absolu",
               days:[
                   {importance:"fête suprême première première", saint:"NATIVITÉ d'ALFRED JARRY"},
                   {importance:"fête suprême quarte", saint:"St Ptyx, silentiaire (Abolition de)"},
                   {importance:"fête suprême quarte", saint:"St Phénix, solipsiste et St Hyx, factotum"},
                   {importance:"fête suprême quarte", saint:"St Lucien de Samosate, voyageur"},
                   {importance:"fête suprême quarte", saint:"St Bardamu, voyageur"},
                   {importance:"fête suprême quarte", saint:"Ste Vérola, assistante sociale"},
                   {importance:"fête suprême quarte", saint:"St Alambic, abstracteur"},
                   {importance:"fête suprême tierce", saint:"ABSINTHE, ci-devant *St Alfred"},
                   {importance:"fête suprême quarte", saint:"Descente du St Esprit (de Vin)"},
                   {importance:"vacuation", saint:"Dilution"},
                   {importance:"fête suprême quarte", saint:"Ste Purée, sportswoman"},
                   {importance:"vacuation", saint:"Vide"},
                   {importance:"fête suprême quarte", saint:"St Canterel, l'illuminateur"},
                   {importance:"fête suprême quarte", saint:"St Sophrotatos l'Arménien, pataphysicien"},
                   {importance:"fête suprême tierce", saint:"ÉTHERNITÉ"},
                   {importance:"fête suprême quarte", saint:"St Ibicrate le Géomètre, pataphysicien"},
                   {importance:"vacuation", saint:"Céphalorgie"},
                   {importance:"vacuation", saint:"Flûtes de Pan"},
                   {importance:"fête suprême quarte", saint:"Stes Grues, ophiophiles"},
                   {importance:"fête suprême quarte", saint:"Ste Mélusine, souillarde de cuisine"},
                   {importance:"fête suprême quarte", saint:"*St Venceslas, duc"},
                   {importance:"fête suprême seconde", saint:"EMMANUEL DIEU"},
                   {importance:"fête suprême quarte", saint:"Ste Varia-Miriam, amphibie"},
                   {importance:"fête suprême quarte", saint:"Sts Rakirs et Rastrons, porte-côtelettes"},
                   {importance:"fête suprême quarte", saint:"Nativité de Sa Magnificence Opach"},
                   {importance:"fête suprême quarte", saint:"St Joseb, notaire à la mode de Bretagne"},
                   {importance:"fête suprême quarte", saint:"Stes Gigolette et Gaufrette, dogaresses"},
                   {importance:"vacuation", saint:"Xylostomie"},
                   {importance:"vacuation", saint:"Le Jet Musical"}
               ]
           },
           { month:"Haha",
             days:[
                   {importance:"fête suprême seconde", saint:"L'ÂGE DU Dr FAUSTROLL"},
                   {importance:"fête suprême quarte", saint:"Dissolution d'E. Poe, dinomythurge"},
                   {importance:"fête suprême quarte", saint:"St Gibus, franc-maçon"},
                   {importance:"fête suprême quarte", saint:"Ste Berthe de Courrière, égérie"},
                   {importance:"fête suprême quarte", saint:"Ste Belgique, nourrice"},
                   {importance:"fête suprême quarte", saint:"Ste Tourte, lyrique et Ste Bévue, sociologue"},
                   {importance:"fête suprême quarte", saint:"St Prout, abbé"},
                   {importance:"fête suprême seconde", saint:"FÊTE DU HAHA"},
                   {importance:"vacuation", saint:"Tautologie"},
                   {importance:"fête suprême quarte", saint:"St Panmuphle, huissier"},
                   {importance:"fête suprême quarte", saint:"Sortie de St L. Cranach, apocalypticien"},
                   {importance:"fête suprême quarte", saint:"St Cosinus, savant"},
                   {importance:"fête suprême quarte", saint:"Bse Fenouillard, sainte famille"},
                   {importance:"fête suprême quarte", saint:"Exhibition de la Daromphe"},
                   {importance:"fête suprême tierce", saint:"NATIVITÉ DE L'OESTRE, artificier"},
                   {importance:"fête suprême quarte", saint:"Ste Vadrouille, emblème"},
                   {importance:"fête suprême quarte", saint:"St Homais d'Aquin, prudhomme"},
                   {importance:"fête suprême quarte", saint:"Nativité de Sa Magnificence le baron Mollet (*St Pipe)"},
                   {importance:"fête suprême quarte", saint:"*St Raphaël, apéritif et philistin"},
                   {importance:"fête suprême tierce", saint:"STRANGULATION DE BOSSE-DE-NAGE"},
                   {importance:"fête suprême tierce", saint:"ZIMZOUM DE BOSSE-DE-NAGE"},
                   {importance:"fête suprême seconde", saint:"RÉSURRECTION DE BOSSE-DE-NAGE"},
                   {importance:"fête suprême tierce", saint:"CHAPEAU DE BOSSE-DE-NAGE"},
                   {importance:"fête suprême quarte", saint:"St Cl. Terrasse, musicien des Phynances"},
                   {importance:"fête suprême quarte", saint:"St J.-P. Brisset, philologue, prince des penseurs"},
                   {importance:"fête suprême quarte", saint:"Commémoration du Cure-dent"},
                   {importance:"fête suprême première seconde", saint:"OCCULTATION D'ALFRED JARRY"},
                   {importance:"fête suprême quarte", saint:"Fuite d'Ablou"},
                   {importance:"vacuation", saint:"Marée Terrestre"}
               ]
           },
           { month:"As",
               days:[
                   {importance:"fête suprême tierce", saint:"NATIVITÉ DE PANTAGRUEL"},
                   {importance:"fête suprême quarte", saint:"Ste Rrose Sélavy, héroïne"},
                   {importance:"fête suprême quarte", saint:"Couronnement de Lord Patchogue, miroitier"},
                   {importance:"fête suprême quarte", saint:"St Cravan, boxeur"},
                   {importance:"fête suprême quarte", saint:"St Van Meegeren, faussaire"},
                   {importance:"fête suprême quarte", saint:"St Omnibus, satyre"},
                   {importance:"fête suprême quarte", saint:"St Cyrano de Bergerac, explorateur"},
                   {importance:"fête suprême tierce", saint:"St RIMBE, OISIF"},
                   {importance:"vacuation", saint:"Équarrissage pour tous"},
                   {importance:"fête suprême quarte", saint:"St Abstrait, bourreau"},
                   {importance:"fête suprême quarte", saint:"St Ossian, barde postiche"},
                   {importance:"fête suprême tierce", saint:"DISPUTE DU SIGNE + ET DU SIGNE -"},
                   {importance:"fête suprême tierce", saint:"MOUSTACHES DU Dr FAUSTROLL"},
                   {importance:"fête suprême quarte", saint:"St P. Bonnard, peintre des Phynances"},
                   {importance:"fête suprême première seconde", saint:"NAVIGATION DU Dr FAUSTROLL"},
                   {importance:"fête suprême quarte", saint:"St Cap, captain"},
                   {importance:"fête suprême quarte", saint:"St Pangloss, humoriste passif"},
                   {importance:"fête suprême quarte", saint:"St Chambernac, pauvriseur"},
                   {importance:"fête suprême quarte", saint:"St Courtial des Péreires, aérostier et inventeur"},
                   {importance:"fête suprême quarte", saint:"St Olibrius, augure"},
                   {importance:"fête suprême quarte", saint:"St Possible, schizophrène"},
                   {importance:"fête suprême seconde", saint:"St LAUTRÉAMONT"},
                   {importance:"fête suprême quarte", saint:"St Quincey, critique d'art"},
                   {importance:"fête suprême quarte", saint:"St Berbiguier, martyr"},
                   {importance:"fête suprême quarte", saint:"St Lewis Carroll, professeur"},
                   {importance:"fête suprême quarte", saint:"St Mensonger, évêque"},
                   {importance:"fête suprême quarte", saint:"Ste Visité, fille du précédent"},
                   {importance:"fête suprême quarte", saint:"Nativité de St Swift, chanoine"},
                   {importance:"vacuation", saint:"Traversée du Miroir"}
               ]
           },
           { month:"Sable",
            days:[
                   {importance:"fête suprême tierce", saint:"NOCES DE BALKIS ET DE SALOMON"},
                   {importance:"fête suprême quarte", saint:"St Doublemain, idéologue"},
                   {importance:"fête suprême quarte", saint:"St Phlegmon, doctrinaire"},
                   {importance:"fête suprême quarte", saint:"*Ste Barbe (femme à), femme-canon"},
                   {importance:"fête suprême quarte", saint:"Ste Savate, avocate"},
                   {importance:"fête suprême quarte", saint:"St Navet et Ste Perruque, humanistes"},
                   {importance:"fête suprême quarte", saint:"St Birbe, juge"},
                   {importance:"fête suprême seconde", saint:"CONCEPTION DU P. UBU (A. J.)"},
                   {importance:"fête suprême quarte", saint:"St Sagouin, homme d'État"},
                   {importance:"fête suprême première seconde", saint:"EXALTATION D'UBU ROI (Ubu d'hiver)"},
                   {importance:"fête suprême quarte", saint:"Nativité de St Grabbe, scherziste"},
                   {importance:"fête suprême quarte", saint:"Ste Choupe, mère de famille"},
                   {importance:"fête suprême quarte", saint:"*St Flaive, concierge"},
                   {importance:"fête suprême quarte", saint:"Don Quichotte, champion du monde"},
                   {importance:"fête suprême seconde", saint:"KHURMOOKUM DU Dr FAUSTROLL"},
                   {importance:"fête suprême quarte", saint:"St Nul, exempt"},
                   {importance:"fête suprême quarte", saint:"St Moyen, français"},
                   {importance:"fête suprême quarte", saint:"Ste Lurette, joconde"},
                   {importance:"fête suprême tierce", saint:"GRAVIDITÉ DE MÈRE UBU"},
                   {importance:"fête suprême quarte", saint:"St Sabre, allopathe"},
                   {importance:"fête suprême quarte", saint:"Ste Tape, pompette"},
                   {importance:"fête suprême première seconde", saint:"CÉSAR - ANTECHRIST"},
                   {importance:"fête suprême quarte", saint:"*Ste Viole, vierge et martyre"},
                   {importance:"fête suprême quarte", saint:"Ste Pochetée, gouvernante"},
                   {importance:"fête suprême tierce", saint:"NATIVITÉ DE L'ARCHÉOPTÉRYX"},
                   {importance:"fête suprême quarte", saint:"Monsieur Sisyphe"},
                   {importance:"fête suprême quarte", saint:"St Tic, conjoint"},
                   {importance:"fête suprême quarte", saint:"St Cervelas, penseur"},
                   {importance:"vacuation", saint:"Aleph"}
               ]                   
           },
           {
               month:"Décervelage",
            days:[
                   {importance:"fête suprême tierce", saint:"St ALAODINE, virtuose"},
                   {importance:"fête suprême quarte", saint:"Sts Hassassins, praticiens"},
                   {importance:"vacuation", saint:"Astu"},
                   {importance:"fête suprême première seconde", saint:"DÉCERVELAGE"},
                   {importance:"fête suprême quarte", saint:"Sts Giron, Pile et Cotice, palotins"},
                   {importance:"fête suprême quarte", saint:"Sts Polonais, prolétaires"},
                   {importance:"fête suprême quarte", saint:"Sts Forçats, poliorcètes"},
                   {importance:"fête suprême tierce", saint:"St BORDURE, CAPITAINE"},
                   {importance:"fête suprême quarte", saint:"Dormition de Jacques Vaché, interprète"},
                   {importance:"vacuation", saint:"Drapaud (érection du)"},
                   {importance:"fête suprême quarte", saint:"*St Eustache, libérateur"},
                   {importance:"fête suprême quarte", saint:"St Landru, gynécologue"},
                   {importance:"fête suprême quarte", saint:"St Guillotin, médecin"},
                   {importance:"fête suprême quarte", saint:"Sts 4 Sans-Cou, enchanteurs"},
                   {importance:"fête suprême tierce", saint:"CONSCIENCE D'UBU"},
                   {importance:"fête suprême quarte", saint:"St Mauvais, sujet"},
                   {importance:"fête suprême quarte", saint:"St Mandrin, poète et philosophe"},
                   {importance:"fête suprême quarte", saint:"Sts Pirates et Flibustiers, thaumaturges"},
                   {importance:"fête suprême quarte", saint:"St et Ste Cartouche, vétérinaires"},
                   {importance:"fête suprême quarte", saint:"St Outlaw, aristocrate"},
                   {importance:"fête suprême première seconde", saint:"CHAIRE DU Dr FAUSTROLL"},
                   {importance:"fête suprême seconde", saint:"OSTENTION DU BÂTON À PHYSIQUE"},
                   {importance:"fête suprême quarte", saint:"St Tank, animal"},
                   {importance:"fête suprême quarte", saint:"St Weidman, patriarche"},
                   {importance:"fête suprême quarte", saint:"St Petiot, expert"},
                   {importance:"vacuation", saint:"Escrime"},
                   {importance:"fête suprême quarte", saint:"Sts Chemins de fer, assassins"},
                   {importance:"vacuation", saint:"Repopulation"},
                   {importance:"vacuation", saint:"Lit de Procruste"}
               ]                   
           },
           {
               month:"Gueules",
            days:[
                   {importance:"fête suprême tierce", saint:"DÉPUCELAGE DE MÈRE UBU"},
                   {importance:"fête suprême quarte", saint:"St Sigisbée, eunuque"},
                   {importance:"fête suprême quarte", saint:"St Anthropoïde, policier"},
                   {importance:"fête suprême quarte", saint:"*Ste Goule ou Gudule, institutrice"},
                   {importance:"fête suprême quarte", saint:"Ste Gale, abbesse"},
                   {importance:"fête suprême quarte", saint:"Ste Touche, postulante"},
                   {importance:"fête suprême quarte", saint:"St Gueule, abbé"},
                   {importance:"fête suprême tierce", saint:"FÊTE DE LA CHANDELLE VERTE"},
                   {importance:"fête suprême quarte", saint:"Ste Crêpe, laïque"},
                   {importance:"fête suprême quarte", saint:"St Préservatif, bedeau"},
                   {importance:"fête suprême quarte", saint:"St Baobab, célibataire"},
                   {importance:"fête suprême quarte", saint:"St Membre, compilateur"},
                   {importance:"vacuation", saint:"Copulation"},
                   {importance:"fête suprême quarte", saint:"Nativité de St J. Verne, globe-trotter en chambre"},
                   {importance:"fête suprême tierce", saint:"ALICE AU PAYS DES MERVEILLES"},
                   {importance:"fête suprême quarte", saint:"St Münchhausen, baron"},
                   {importance:"fête suprême quarte", saint:"Le Bétrou, théurge"},
                   {importance:"fête suprême quarte", saint:"Nativité de St Deibler, prestidigitateur"},
                   {importance:"fête suprême quarte", saint:"St Sade ès liens"},
                   {importance:"fête suprême quarte", saint:"St Lafleur, valet"},
                   {importance:"vacuation", saint:"Lavement"},
                   {importance:"fête suprême première seconde", saint:"St SEXE, STYLITE"},
                   {importance:"fête suprême quarte", saint:"Occultation de St J. Torma, euphoriste"},
                   {importance:"fête suprême quarte", saint:"Conversion de St Matorel, bateleur"},
                   {importance:"fête suprême quarte", saint:"Ste Marmelade, inspirée"},
                   {importance:"fête suprême tierce", saint:"L'AMOUR ABSOLU, deliquium"},
                   {importance:"fête suprême quarte", saint:"Ste Tabagie, cosmogène"},
                   {importance:"fête suprême quarte", saint:"Sts Hylactor et Pamphagus"},
                   {importance:"vacuation", saint:"Mouvement Perpétuel"}
               ]                   
           },
           {
               month:"Pédale",
               days:[
                   {importance:"fête suprême tierce", saint:"DU SURMÂLE"},
                   {importance:"fête suprême quarte", saint:"St André Marcueil, ascète cycliste"},
                   {importance:"fête suprême quarte", saint:"St Ellen, hile"},
                   {importance:"fête suprême quarte", saint:"St Michet, idéaliste"},
                   {importance:"fête suprême quarte", saint:"St Ouducul, trouvère"},
                   {importance:"fête suprême quarte", saint:"Vers Belges"},
                   {importance:"fête suprême quarte", saint:"St Gavroche, forain"},
                   {importance:"fête suprême tierce", saint:"LA MACHINE À INSPIRER L'AMOUR"},
                   {importance:"fête suprême quarte", saint:"*St Remezy, évêque in partibus"},
                   {importance:"fête suprême quarte", saint:"Nativité de St Tancrède, jeune homme"},
                   {importance:"fête suprême quarte", saint:"Testament de P. Uccello, le mal illuminé"},
                   {importance:"fête suprême quarte", saint:"St Hari Seldon, psychohistorien galactique"},
                   {importance:"fête suprême quarte", saint:"*Ste Valburge, succube"},
                   {importance:"vacuation", saint:"Sabbat"},
                   {importance:"fête suprême tierce", saint:"Sts ADELPHES, ÉSOTÉRISTES"},
                   {importance:"fête suprême quarte", saint:"Sts Templiers, adeptes"},
                   {importance:"fête suprême quarte", saint:"St Dricarpe, prosélyte"},
                   {importance:"fête suprême quarte", saint:"St Nosocome, carabin"},
                   {importance:"fête suprême quarte", saint:"Ste Goutte, fête militaire"},
                   {importance:"fête suprême quarte", saint:"Ste Cuisse, dame patronnesse"},
                   {importance:"fête suprême quarte", saint:"St Inscrit, Converti"},
                   {importance:"fête suprême seconde", saint:"St SENGLE, DÉSERTEUR"},
                   {importance:"fête suprême quarte", saint:"St Masquarade, uniforme"},
                   {importance:"fête suprême quarte", saint:"Nativité de St Stéphane, faune"},
                   {importance:"fête suprême quarte", saint:"St Poligraf Poligrafovitch, chien"},
                   {importance:"fête suprême quarte", saint:"St Pâle, mineur"},
                   {importance:"fête suprême tierce", saint:"St VALENS, FRÈRE ONIRIQUE"},
                   {importance:"vacuation", saint:"Dédicace du Tripode"},
                   {importance:"fête suprême quarte", saint:"Bse Escampette, dynamiteuse"}
               ]
           },
           {
               month:"Clinamen",
            days:[
                   {importance:"fête suprême tierce", saint:"St ABLOU, PAGE et St HALDERN, DUC"},
                   {importance:"fête suprême quarte", saint:"Sts Hiboux, maîtres-chanteurs"},
                   {importance:"fête suprême quarte", saint:"La Mandragore, solanée androïde"},
                   {importance:"fête suprême quarte", saint:"St Pagne, confident"},
                   {importance:"fête suprême quarte", saint:"Sts Aster et Vulpian, violateurs du Néant"},
                   {importance:"fête suprême quarte", saint:"St Ganymède, professionnel"},
                   {importance:"vacuation", saint:"La Main de Gloire"},
                   {importance:"fête suprême seconde", saint:"LA MACHINE À PEINDRE"},
                   {importance:"fête suprême quarte", saint:"Ste Trique, lunatique"},
                   {importance:"fête suprême quarte", saint:"Rémission des Poissons"},
                   {importance:"fête suprême quarte", saint:"St Maquereau, intercesseur"},
                   {importance:"fête suprême quarte", saint:"St Georges Dazet, poulpe au regard de soie"},
                   {importance:"fête suprême quarte", saint:"Nativité de Maldoror, corsaire aux cheveux d'or"},
                   {importance:"fête suprême quarte", saint:"Sortie d'A. Dürer, hermétiste"},
                   {importance:"fête suprême première première", saint:"INVENTION de la 'PATAPHYSIQUE"},
                   {importance:"fête suprême quarte", saint:"Exit St Domenico Theotocopouli, el Greco"},
                   {importance:"fête suprême quarte", saint:"St Hiéronymus Bosch, démonarque"},
                   {importance:"vacuation", saint:"Les 27 Êtres Issus des Livres Pairs"},
                   {importance:"fête suprême quarte", saint:"St Barbeau, procureur et Ste Morue, juste"},
                   {importance:"vacuation", saint:"Capture du Fourneau"},
                   {importance:"fête suprême quarte", saint:"St Docteur Moreau, insulaire"},
                   {importance:"fête suprême seconde", saint:"FÊTE DES POLYÈDRES"},
                   {importance:"vacuation", saint:"Locus Solus"},
                   {importance:"fête suprême quarte", saint:"*St Tupetu de Tupetu, organisateur de loteries"},
                   {importance:"fête suprême quarte", saint:"Exit St Goya, alchimiste"},
                   {importance:"fête suprême quarte", saint:"St Escargot, sybarite"},
                   {importance:"fête suprême quarte", saint:"Ste Hure de Chasteté, pénitente"},
                   {importance:"fête suprême quarte", saint:"St Turgescent, iconoclaste"},
                   {importance:"vacuation", saint:"Cymbalum Mundi"}
               ]                   
           },
           {
               month:"Palotin",
               days:[
                   {importance:"fête suprême tierce", saint:"Sts CROCODILES, CROCODILES"},
                   {importance:"fête suprême quarte", saint:"Fête des Écluses"},
                   {importance:"fête suprême quarte", saint:"Sts Trolls, pantins"},
                   {importance:"fête suprême quarte", saint:"Ste Susan Calvin, docteur"},
                   {importance:"fête suprême quarte", saint:"Ste Poignée, veuve et Ste Jutte, recluse"},
                   {importance:"fête suprême quarte", saint:"Ste Oneille, gourgandine"},
                   {importance:"fête suprême quarte", saint:"St Fénéon ès Liens"},
                   {importance:"fête suprême tierce", saint:"St BOUGRELAS, PRINCE"},
                   {importance:"fête suprême quarte", saint:"Sts Boleslas et Ladislas, polonais"},
                   {importance:"fête suprême quarte", saint:"St Forficule, Barnabite"},
                   {importance:"vacuation", saint:"Explosion du Palotin"},
                   {importance:"vacuation", saint:"Réprobation du Travail"},
                   {importance:"fête suprême quarte", saint:"Esquive de St Léonard (de Vinci), illusionniste"},
                   {importance:"fête suprême quarte", saint:"St Équivoque, sans-culotte"},
                   {importance:"fête suprême tierce", saint:"ADORATION DU PAL"},
                   {importance:"fête suprême quarte", saint:"Déploration de St Achras, éleveur de Polyèdres"},
                   {importance:"fête suprême quarte", saint:"St Macrotatoure, caudataire"},
                   {importance:"vacuation", saint:"Canotage"},
                   {importance:"fête suprême quarte", saint:"Occultation de St Gauguin, océanide"},
                   {importance:"fête suprême quarte", saint:"St Ti Belot, séide"},
                   {importance:"fête suprême quarte", saint:"Occultation de Sa Magnificence le Dr Sandomir"},
                   {importance:"fête suprême seconde", saint:"Sts PALOTINS des PHYNANCES"},
                   {importance:"fête suprême quarte", saint:"Sts Quatrezoneilles, Herdanpo, Mousched-Gogh, palotins"},
                   {importance:"fête suprême quarte", saint:"Ste Lumelle, écuyère"},
                   {importance:"fête suprême quarte", saint:"Sts Potassons, acolythes"},
                   {importance:"fête suprême quarte", saint:"Ste Prétentaine, rosière"},
                   {importance:"fête suprême quarte", saint:"St Foin, coryphée"},
                   {importance:"fête suprême quarte", saint:"Nativité de St Satie, Grand Parcier de l'Église d'Art"},
                   {importance:"vacuation", saint:"Erratum"}
               ]
           },
           {
               month:"Merdre",
            days:[
                   {importance:"fête suprême tierce", saint:"ACCOUCHEMENT DE Ste JEANNE, PAPESSE"},
                   {importance:"vacuation", saint:"Le Moutardier du Pape"},
                   {importance:"fête suprême quarte", saint:"St Siège, sous-pape"},
                   {importance:"fête suprême quarte", saint:"Nativité de St H. Rousseau, douanier"},
                   {importance:"fête suprême quarte", saint:"St Crouducul, troupier"},
                   {importance:"fête suprême quarte", saint:"*St Cucufat, mécène"},
                   {importance:"fête suprême quarte", saint:"Nativité de M. Plume, propriétaire"},
                   {importance:"fête suprême seconde", saint:"COCUAGE DE M. LE P. UBU"},
                   {importance:"vacuation", saint:"Vidange"},
                   {importance:"fête suprême quarte", saint:"St Barbapoux, amant"},
                   {importance:"fête suprême quarte", saint:"St Memnon, vidangeur"},
                   {importance:"fête suprême quarte", saint:"Stes Miches, catéchumènes"},
                   {importance:"fête suprême quarte", saint:"Ste Lunette, solitaire"},
                   {importance:"fête suprême quarte", saint:"St Sphincter, profès"},
                   {importance:"fête suprême tierce", saint:"Sts SERPENTS D'AIRAIN"},
                   {importance:"fête suprême quarte", saint:"Nativité de *St Donatien A. François"},
                   {importance:"fête suprême quarte", saint:"St Woland, professeur"},
                   {importance:"fête suprême quarte", saint:"St Anal, cordelier et Ste Foire, anagogue"},
                   {importance:"fête suprême quarte", saint:"Ste Fétatoire, super"},
                   {importance:"fête suprême quarte", saint:"Ste Colombine, expurgée"},
                   {importance:"fête suprême quarte", saint:"Ste Pyrotechnie, illuminée"},
                   {importance:"fête suprême première première", saint:"ONTOGÉNIE PATAPHYSIQUE"},
                   {importance:"fête suprême tierce", saint:"INTERPRÉTATION DE L'UMOUR"},
                   {importance:"fête suprême quarte", saint:"Ste Purge, sage-femme"},
                   {importance:"fête suprême seconde", saint:"APPARITION D'UBU ROI"},
                   {importance:"fête suprême quarte", saint:"Ste Barbaque, naïade"},
                   {importance:"fête suprême quarte", saint:"Sts Courts et Longs, gendarmes"},
                   {importance:"fête suprême quarte", saint:"St Raca, cagot"},
                   {importance:"vacuation", saint:"Défaite du Mufle"}
               ]                   
           },
           {
               month:"Gidouille",
               days:[
                   {importance:"fête suprême tierce", saint:"Ste BOUZINE, ESPRIT"},
                   {importance:"fête suprême quarte", saint:"St Lucullus, amateur (Bloomsday)"},
                   {importance:"fête suprême quarte", saint:"Ste Dondon, amazone"},
                   {importance:"fête suprême quarte", saint:"Ste Tripe, républicaine"},
                   {importance:"fête suprême quarte", saint:"St Ugolin, mansuet"},
                   {importance:"fête suprême quarte", saint:"St Dieu, retraité"},
                   {importance:"fête suprême quarte", saint:"St Bébé Toutout, évangéliste"},
                   {importance:"fête suprême tierce", saint:"Ste BOUDOUILLE, BAYADÈRE"},
                   {importance:"fête suprême quarte", saint:"Ste Outre, psychiatre"},
                   {importance:"fête suprême quarte", saint:"St Boudin, recteur"},
                   {importance:"fête suprême quarte", saint:"Sacre de Talou VII, empereur du Ponukélé"},
                   {importance:"fête suprême quarte", saint:"Ste Confiture, dévote et Ste Cliche, donatrice"},
                   {importance:"fête suprême quarte", saint:"Sts Instintestins, conseillers intimes"},
                   {importance:"fête suprême quarte", saint:"St Colon, artilleur"},
                   {importance:"fête suprême tierce", saint:"Ste GIBORGNE, VÉNÉRABLE"},
                   {importance:"fête suprême quarte", saint:"St Inventaire, poète"},
                   {importance:"fête suprême quarte", saint:"Ste Femelle, technicienne"},
                   {importance:"fête suprême seconde", saint:"VISITATION DE MÈRE UBU"},
                   {importance:"fête suprême quarte", saint:"St Sein, tautologue"},
                   {importance:"fête suprême quarte", saint:"St Périnée, zélateur"},
                   {importance:"fête suprême quarte", saint:"St Spéculum, confesseur"},
                   {importance:"fête suprême seconde", saint:"FÊTE DE GIDOUILLE"},
                   {importance:"fête suprême quarte", saint:"St Ombilic, gymnosophiste"},
                   {importance:"fête suprême quarte", saint:"St Gris-gris, ventre"},
                   {importance:"fête suprême quarte", saint:"St Bouffre, pontife"},
                   {importance:"fête suprême quarte", saint:"Ste Goulache, odalisque"},
                   {importance:"fête suprême quarte", saint:"Ste Gandouse, hygiéniste"},
                   {importance:"vacuation", saint:"Poche du Père Ubu"},
                   {importance:"fête suprême seconde", saint:"NOM D'UBU"}
               ]
           },
           {
               month:"Tatane",
            days:[
                   {importance:"fête suprême première seconde", saint:"FÊTE DU P. UBU (Ubu d'été)"},
                   {importance:"fête suprême quarte", saint:"Commémoration du P. Ébé"},
                   {importance:"fête suprême quarte", saint:"Ste Crapule, puriste et St Fantomas, archange"},
                   {importance:"fête suprême quarte", saint:"Ascension du Mouchard, statisticien, psychiatre et policier"},
                   {importance:"fête suprême quarte", saint:"St Arsouille, patricien"},
                   {importance:"fête suprême quarte", saint:"Sts Robot et Cornard, citoyens"},
                   {importance:"fête suprême quarte", saint:"St Biribi, taulier"},
                   {importance:"fête suprême seconde", saint:"SUSCEPTION DU CROC À MERDRE"},
                   {importance:"fête suprême quarte", saint:"Sts Écrase-Merdre, sectateurs"},
                   {importance:"fête suprême quarte", saint:"Sts Pieds Nickelés, trinité"},
                   {importance:"fête suprême quarte", saint:"Stes Canicule et Canule, jouvencelles"},
                   {importance:"fête suprême quarte", saint:"Sts Cannibales, philanthropes"},
                   {importance:"fête suprême quarte", saint:"St Dada, prophète"},
                   {importance:"fête suprême quarte", saint:"Ste Anne, pèlerine, énergumène"},
                   {importance:"fête suprême seconde", saint:"PROCESSION AUX PHYNANCES"},
                   {importance:"fête suprême quarte", saint:"Transfiguration de St V. van Gogh, transmutateur"},
                   {importance:"fête suprême quarte", saint:"Ste Flamberge, voyante"},
                   {importance:"fête suprême quarte", saint:"St Trou, chauffeur"},
                   {importance:"fête suprême quarte", saint:"Ste Taloche, matrone"},
                   {importance:"fête suprême quarte", saint:"St Tiberge, frère quêteur"},
                   {importance:"fête suprême quarte", saint:"Sts Catoblepas, lord et Anoblepas, amiral"},
                   {importance:"fête suprême seconde", saint:"UBU ÈS LIENS"},
                   {importance:"fête suprême quarte", saint:"St Pissembock, oncle"},
                   {importance:"fête suprême quarte", saint:"St Pissedoux, caporal des hommes libres"},
                   {importance:"fête suprême quarte", saint:"St Panurge, moraliste"},
                   {importance:"fête suprême quarte", saint:"St Glé, neurologue-aliéniste"},
                   {importance:"fête suprême quarte", saint:"St Pistolet à Merdre, jubilaire"},
                   {importance:"fête suprême quarte", saint:"Nativité de St Bruggle"},
                   {importance:"vacuation", saint:"Le soleil solide froid"}
               ]                   
           },
           {
               month:"Phalle",
               days:[
                   {importance:"fête suprême tierce", saint:"St CHIBRE, PLANTON"},
                   {importance:"fête suprême quarte", saint:"*Ste Ruth, zélatrice"},
                   {importance:"fête suprême quarte", saint:"St Zebb, passe-partout"},
                   {importance:"fête suprême quarte", saint:"St Mnester, confesseur"},
                   {importance:"fête suprême seconde", saint:"ASSOMPTION DE Ste MESSALINE"},
                   {importance:"vacuation", saint:"Penis Angelicus"},
                   {importance:"fête suprême quarte", saint:"*St Patrobas, pompier"},
                   {importance:"fête suprême tierce", saint:"Ste LÉDA, AJUSTEUSE"},
                   {importance:"fête suprême quarte", saint:"St Godemiché, économe"},
                   {importance:"fête suprême quarte", saint:"Ste Nitouche, orante"},
                   {importance:"fête suprême quarte", saint:"Ste Lèchefrite, botteuse"},
                   {importance:"fête suprême quarte", saint:"Ste Andouille, amphibologue"},
                   {importance:"fête suprême quarte", saint:"Ste Bitre, ouvreuse et St Étalon, couvreur"},
                   {importance:"fête suprême tierce", saint:"BATAILLE DE MORSANG"},
                   {importance:"fête suprême tierce", saint:"MORT DE DIONYSOS, SURHOMME"},
                   {importance:"fête suprême quarte", saint:"Nativité de St Vibescu, pohète et Commémoration de Ste Cuculine d'Ancône"},
                   {importance:"fête suprême quarte", saint:"Ste Gallinacée, cocotte"},
                   {importance:"fête suprême quarte", saint:"St Lingam, bouche-trou"},
                   {importance:"fête suprême quarte", saint:"St Prélote, capucin"},
                   {importance:"fête suprême quarte", saint:"*St Pie VIII, navigant"},
                   {importance:"fête suprême tierce", saint:"St ERBRAND, POLYTECHNICIEN"},
                   {importance:"fête suprême seconde", saint:"Ste DRAGONNE, PYROPHAGE"},
                   {importance:"fête suprême quarte", saint:"*St Lazare, gare"},
                   {importance:"fête suprême quarte", saint:"Ste Orchidée, aumonière"},
                   {importance:"fête suprême quarte", saint:"Nativité apparente d'Artaud le Momo"},
                   {importance:"fête suprême quarte", saint:"Disparition de l'Ancien Breughel, incendiaire"},
                   {importance:"fête suprême quarte", saint:"*St Priape, franc-tireur"},
                   {importance:"fête suprême tierce", saint:"TRANSFIXION DE Ste MESSALINE"},
                   {importance:"vacuation", saint:"Le Termès"}
               ]
           }
       ];

       exports = PataphysicalDate;

   })(typeof exports === 'undefined'? {}: exports);

adjectives = {};

adjectives.ous = ["amorphous", "atrocious", "avaricious", "cancerous", "cantankerous", "chivalrous", "contemporaneous", "envious", "fallacious", "famous", "ferocious", "glorious", "gratuitous", "horrendous", "indigenous", "injurious", "insidious", "jealous", "luxurious", "mysterious", "nauseous", "nitrous", "pernicious", "polygamous", "precocious", "prodigious", "ridiculous", "synonymous", "voluptuous"];

adjectives.ic = ["academic", "altruistic", "angelic", "arabic", "athletic", "cathartic", "civic", "cleric", "cosmic", "diabetic", "didactic", "elastic", "esoteric", "exotic", "folic", "formulaic", "geologic", "geometric", "hedonistic", "idealistic", "idiosyncratic", "journalistic", "materialistic", "melodic", "metabolic", "metallic", "monastic", "mythic", "pornographic", "prolific", "schizophrenic", "semiautomatic", "simplistic", "specific", "stereoscopic", "synthetic", "tectonic", "telepathic", "theistic", "traumatic"]

adjectives.ble = ["adjustable", "agreeable", "amiable", "answerable", "applicable", "approachable", "comparable", "convertible", "doable", "executable", "favourable", "flammable", "flexible", "honorable", "horrible", "impressionable", "improbable", "incalculable", "incomprehensible", "indefatigable", "indomitable", "insensible", "insufferable", "intolerable", "laughable", "legible", "memorable", "permissible", "plausible", "pliable", "possible", "readable", "redeemable", "reliable", "removable", "renewable", "sizable", "tangible", "uncomfortable", "unforgivable", "unreasonable", "unreliable", "veritable", "winnable", "workable"];

adjectives.ed = ["accelerated","accented","acquainted","admired","advised","aggravated","aligned","alleged","amused","apportioned","appropriated","aroused","arrested","assigned","attained","bandaged","banded","banned","barreled","beguiled","bellied","belted","besieged","blackened","blessed","blindfolded","blocked","blooded","bolstered","bored","bounded","branched","bridged","broiled","bullied","candied","characterized","cherished","civilised","cleansed","cloistered","codified","combined","commissioned","concentrated","conditioned","contaminated","cooked","correlated","corroborated","cushioned","dazzled","decreased","dedicated","defaced","deluded","departed","determined","devoted","dictated","differentiated","diffused","disconnected","discovered","diseased","disfigured","disheartened","disheveled","disillusioned","dotted","dried","dropped","drowned","dulled","elaborated","employed","encased","encrusted","endangered","engraved","enlarged","enlisted","enlivened","ensconced","entangled","eradicated","eroded","evaporated","exasperated","exonerated","faith-based","fated","feathered","fermented","fitted","flawed","forked","foul-mouthed","freckled","fretted","funded","garbled","gathered","gendered","gilded","glorified","gold-plated","guaranteed","half-breed","hard-pressed","heart-shaped","heralded","hooded","huddled","hypnotized","ignited","illustrated","imitated","injured","interpreted","keyed","lamented","layered","left-footed","lifted","locked","mastered","mated","meditated","mirrored","misguided","mitigated","mixed","modernized","motorized","mounted","muscled","muted","networked","neutered","nuanced","one-eyed","open-ended","outsized","overheated","overworked","paced","paralyzed","parted","penned","perplexed","perverted","pillaged","piped","posed","predicted","preserved","pressed","pressurized","presumed","priced","printed","programmed","promulgated","pronged","protracted","pulled","pulsed","raped","razed","recognised","recycled","resigned","rested","ringed","roused","sanctioned","saved","scandalized","scratched","scrolled","seated","segregated","sensed","shaped","shipped","short-lived","signed","skyrocketed","smothered","socialized","spattered","specialized","startled","stoked","storied","strained","strengthened","stylized","subjugated","suspended","synchronized","tailed","tanked","tight-lipped","timed","totalled","transformed","transgendered","trapped","traveled","treated","twisted","unaided","unassisted","uncapped","uncontrolled","uncooked","undisturbed","unfazed","unfinished","unidentified","uninspired","unintended","uninvited","unmasked","unparalleled","unprincipled","unregulated","unsealed","unsupervised","unwrapped","valued","vaunted","vented","versed","washed","waved","well-bred","well-informed","wheeled","wooded","worsted"];

adjectives.ing = ["absorbing","addicting","balding","betting","blushing","bounding","brawling","breeding","brimming","bruising","bungling","chirping","clanking","clapping","commuting","compromising","conceding","confining","dashing","designing","despairing","devastating","disabling","doing","draining","echoing","engrossing","enthralling","everlasting","exacting","exciting","exulting","fading","faltering","fast-growing","fiddling","filling","fledgling","flickering","flowering","flowing","fulfilling","fuming","glaring","gleaming","grinding","groaning","grudging","healing","humbling","humiliating","inheriting","inking","interesting","interfering","intersecting","jerking","joining","knowing","lagging","lessening","liberating","listening","long-lasting","long-running","long-suffering","lowering","measuring","metering","migrating","mind-blowing","mind-boggling","nail-biting","occurring","oncoming","operating","opposing","panting","peacekeeping","pitching","promising","realizing","recovering","reflecting","registering","repeating","retiring","reversing","revolving","rotating","running","rustling","scattering","scheming","shivering","shoestring","skirting","slamming","slanting","smacking","smouldering","spanking","sparing","standing","strapping","succeeding","suffering","sweating","sweeping","swinging","swooning","threatening","trusting","trying","unassuming","unremitting","vaulting","veering","verifying","wetting","widening","willing"];

adjectives.al = ["anatomical", "ancestral", "antiretroviral", "autobiographical", "biochemical", "burial", "canonical", "cardinal", "casual", "causal", "charcoal", "circumstantial", "colloquial", "conceptual", "confidential", "congressional", "consequential", "diagonal", "doctrinal", "economical", "electoral", "emotional", "essential", "exponential", "floral", "fractional", "frugal", "grammatical", "herbal", "homosexual", "immoral", "material", "mediaeval", "medical", "memorial", "metallurgical", "natural", "neurological", "noncommercial", "parental", "penal", "perceptual", "petrochemical", "philosophical", "presidential", "primal", "procedural", "professional", "regal", "sceptical", "spherical", "supernatural", "technical", "territorial", "testimonial", "traditional", "trial", "tyrannical", "unequal", "universal", "verbal", "visceral", "visual"];

adjectives.adjectives = ["abroad","abstract","accountant","acute","addictive","adult","adverse","aerosol","afraid","aggressive","alienate","all-round","almond","alright","ambient","ambivalent","amino","angrier","anti-gay","antiquarian","appellate","archer","assertive","authoritarian","avocado","awake","awsome","backstage","backwoods","battle","beaten","begotten","beneficent","big-money","biggest","bipolar","blame","bloat","blue-collar","boastful","bolder","bonnie","boundary","brazen","brimstone","broadest","broker","bronze","buffy","buttery","carefree","caretaker","chapel","cheeky","chipotle","civil","claptrap","classless","colour","combat","commonplace","commuter","complementary","confederate","confident","confuse","conservative","constituent","contraceptive","convex","coronary","corporatist","cover","crash","crazier","craziest","crypto","culminate","dandy","decrepit","defective","defenseless","deodorant","depress","destitute","detective","deviant","devilish","dirtier","disdainful","disparate","dissident","double-blind","downbeat","dozen","draught","dread","duplicate","eaten","elective","elven","embryo","emerald","emergency","emissary","enamel","entire","ever-present","evergreen","excess","existent","exorbitant","export","extraordinary","exultant","facsimile","fainter","fancier","fearless","fellow","firmer","fleshy","foggy","foolhardy","foolish","footy","forehand","formative","fragrant","fraudulent","freakish","freelance","freight","fresh","funny","furry","gibberish","ginger","glare","goalless","goody","grande","grateful","graven","greener","gusty","gypsy","hand-held","handheld","hands-off","harlot","healthier","healthiest","heart","heathen","high-density","high-performance","high-res","high-yield","hissy","hitless","holiness","homesick","hopeless","hot-button","human","humid","illustrative","immense","immersive","immigrant","impassive","impulsive","in-between","in-flight","inattentive","inbound","inbounds","indigo","indiscriminate","inert","inflate","inform","inoffensive","insane","insincere","insistent","insolent","intemperate","interdependent","intern","intolerant","intuitive","irresolute","irritate","japan","joint","joyful","lacklustre","laden","leather","leathern","leery","leisure","life-size","lightest","limitless","literary","liver","livid","lobster","long-held","loudest","loveliest","low-budget","low-carb","lucid","luckless","lusty","magazine","maniac","manmade","maroon","meaningful","medley","midair","midterm","midway","mighty","minor","misshapen","molecular","monarch","morbid","motley","multi-million","multidisciplinary","muscular","negative","newest","night","nonsense","north","offensive","oldest","one-year","onstage","onward","opaque","opportunist","opt-in","ordinate","outdone","outlaw","overboard","oversize","oyster","paramount","partisan","passive","pastel","patriot","pedestrian","peevish","pensive","perky","perpetuate","pervasive","picturesque","piquant","plumb","politician","poorest","portmanteau","positive","postpartum","prank","pre-emptive","premium","preparatory","prerequisite","prescient","prewar","pricier","primer","primetime","private","pro-abortion","problem","process","progressive","proportionate","purgatory","quick","rapid-fire","raunchy","reactive","recurrent","reminiscent","remorseless","repellent","reserve","respectful","restrict","resultant","retaliatory","revelatory","reverend","right-hand","risque","robust","roomful","rubber","run-down","runtime","safest","salient","saute","scarlet","scoundrel","scratchy","second-best","self-taught","senior","sentient","sexier","shadowy","shaken","shaker","shameless","shiny","short","simplest","skeleton","skinny","slapstick","sleek","sleepless","sleepy","slender","slimmer","smokeless","snuff","solid-state","sometime","sought","speedy","spiky","spineless","sprung","squint","stainless","starlight","statewide","sticky","stimulant","stinky","stolen","stubborn","suave","subjective","subordinate","summary","sunset","sunshine","supervisory","supply-side","surrogate","suspenseful","swarthy","sympathize","tallest","tarry","tenderest","thicker","third-world","timid","torrent","tougher","traverse","trunk","two-lane","unattractive","uncooperative","underground","undersea","uneasy","unforeseen","unimaginative","unorthodox","unpleasant","unread","unsafe","unsanitary","unsuccessful","unwary","uppity","upstart","useless","utter","valiant","valid","vanilla","vegetative","vinyl","virgin","walk-on","wanton","warlike","waterproof","weakest","well-chosen","whirlwind","widen","widow","willful","winningest","wireless","wistful","woeful","woodland","wordless","worldwide","worst-case","worthless"];

//Note: this example assumes jQuery is available on your site. 
Retina = function() {
  return {
    init: function(){
      //Get pixel ratio and perform retina replacement
      //Optionally, you may also check a cookie to see if the user has opted out of (or in to) retina support
      var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
      if (pixelRatio > 1) {
        $("img").each(function(idx, el){
          el = $(el);
          if (el.attr("data-src2x")) {
            el.attr("data-src-orig", el.attr("src"));
            el.attr("src", el.attr("data-src2x"));
          }
        });
      }
    }
  };
}();

var myUsername = "javier";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setTildeFavicon() {
  var randomString = "?v=" + Math.round(Math.random() * 10000000);

  var link  = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel  = 'shortcut icon';
  link.href = 'http://tilde.club/~javier/img/favicons/tilde.ico' + randomString;

  $("head").find("[rel='shortcut icon']").remove();
  document.getElementsByTagName('head')[0].appendChild(link);
  $(document).prop('title', 'Is the ~ Who Is Tall Happy?');
}

function setGmailFavicon() {

  var c     = Math.round(Math.random()*12);
  var cT    = c;
  var link  = document.createElement('link');
  var randomString = "?v=" + Math.round(Math.random() * 10000000);
  link.type = 'image/x-icon';
  link.rel  = 'shortcut icon';

  if (c === 11) {
    c = 50;
    cT = "50+";
    link.href = 'http://tilde.club/~javier/img/favicons/gmail_' + c + '.ico' + randomString;
  } else if (c === 12) {
    c = 100;
    cT = "100+";
    link.href = 'img/favicons/gmail_' + c + '.ico' + randomString;
  } else {
    link.href = 'img/favicons/gmail_' + c + '.ico' + randomString;
  }

  $("head").find("[rel='shortcut icon']").remove();
  document.getElementsByTagName('head')[0].appendChild(link);

  if (c === 0) {
    $(document).prop('title', 'Inbox - javier@tilde.club');
  } else if (c > 0 && c < 3) {

    var sentences = ["I feel ignored", "Fwd: They are not humans!", "Re: we found the diamonds", ":(", "Are you there?", "Me me me me"];
    var randomSentence = sentences[Math.round(Math.random()*(sentences.length - 1))];

    $(document).prop('title', randomSentence + " - javier@tilde.club");
  } else {
    $(document).prop('title', 'Inbox ('+cT+') - javier@tilde.club');
  }
}

function initSubliminal() {

  function handleVisibilityChange() {

    var subliminalMessages = [
      "Pay more attention",
      "Do not blink",
      "Hello, I must be going",
      "You blinked, you missed it",
      "I'm not here",
      "You are beautiful",
      "No incoming calls accepted"
    ];

    if (document[hidden]) {
      $("body").addClass("hidden");
      $(".subliminal-message-js").removeClass("u--hidden");

      setGmailFavicon();

    } else {

      setTildeFavicon();

      var randomSubliminalMessage = subliminalMessages[Math.round(Math.random()*(subliminalMessages.length - 1))];
      $(".subliminal-message-js").html(randomSubliminalMessage);

      setTimeout(function() {
        $("body").removeClass("hidden");
        $(".subliminal-message-js").addClass("u--hidden");
      }, 250);
    }
  }

  var hidden, visibilityChange; 
  if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
    hidden = "hidden";
    visibilityChange = "visibilitychange";
  } else if (typeof document.mozHidden !== "undefined") {
    hidden = "mozHidden";
    visibilityChange = "mozvisibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
  }

  document.addEventListener(visibilityChange, handleVisibilityChange, false);


}

function initQR() {
  $qr = $(".qr-js");

  var messages = [
    "http://en.wikipedia.org/wiki/Steganography",
    "http://en.wikipedia.org/wiki/Canary_trap",
    "http://en.wikipedia.org/wiki/Japanese_cryptology_from_the_1500s_to_Meiji",
    "http://en.wikipedia.org/wiki/Nihilist_cipher"
  ];

  var text = messages[Math.round(Math.random() * (messages.length - 1))];

  var src = "http://chart.apis.google.com/chart?cht=qr&chs=200x200&chl=" + text + "&chld=H|0";

  $qr.find("img").attr("src", src);


}

function initAmIOnline() {

  $.ajax({ url: "http://tilde.club/~gabriel/who.json", success: function(data) {
    var online = false;

    $.each(data.online, function(i, username) { 
      if (username === myUsername) { 
        online = true; 
      }
    });

    if (online) $(".online-status-js").removeClass("u--hidden");

  }});


}

function initUpdatedAt() {

  $.ajax({ url: "http://tilde.club/~delfuego/tilde.24h.json", success: function(data) {

    var modtime;

    $.each(data.pagelist, function(i, user) { 
      if (user.username === myUsername) { 
        modtime = user.modtime; 
      }
    });

    if (modtime) {
      var date = new Date(modtime);
      $(".updated-at-js").html("on " + date.toString());
    }

  }});

}

function initMusicSnitch() {

  $(".listening-js").snitch({
    username: "javierarce",
    api_key: "52baf5483029010e0e7ece53ac76449e" 
  }).on("listening", function(e, track) {
    $(".listening-js").removeClass("u--hidden");
  });


}

function initMoments() {

  var moments = [
    "with the help of large amounts of coffee",
    "inconspicuously",
    "in a moment of total sadness",
    "when nobody was looking",
    "because it was the right thing to do",
    "with the assumption that Nature is not grounded in anything beyond herself",
    "in an act of utter desperation",
    "without paying much attention"
  ];

  var randomMoment = moments[Math.round(Math.random()* (moments.length - 1))];
  $(".random-update-moment-js").text(randomMoment);

}

function initNostalgia() {

  $(".nostalgia-slider-js").on("input", function() {
    var level = $(this).val();
    if (level >= 99)      msg = "you are just going to die";
    else if (level >= 95) msg = "what are you doing?";
    else if (level >= 90) msg = "watch out";
    else if (level >= 80) msg = "you don't want to do that";
    else if (level >= 75) msg = "haha… wait!";
    else if (level >= 70) msg = "haha";
    else if (level <= 5)  msg = "you insensible machine";
    else if (level <= 10) msg = "c'mon!";
    else if (level <= 20) msg = "what?";
    else if (level <= 30) msg = "mmm";
    else msg = "";

    if (msg) {
      msg = " <small>(" + msg + ")</small>";
      $(".nostalgia-level-msg-js").html("<strong>" + level + "<small>%</small></strong>" + msg);
    } else {
      $(".nostalgia-level-msg-js").html("<strong>" + level + "<small>%</small></strong>");
    }

  });

}

function initDisparition() {

  var $disparition = $(".disparition-js");
  var disparitionLetters = ["t", "h", "e", "v", "o", "i", "d"];

  if ($disparition.length == 1) {

    var letters = [];

    _.each($disparition.text(), function(l) {
      if (l == " ") {
        letters.push(" ");
      } else {
        letters.push("<a href='#' data-letter='" + l + "'>" + l + "</a>");
      }
    });

    $disparition.html(letters.join(""));

  }

  var hideLetter = function(e) {

    e.preventDefault();
    e.stopPropagation();

    var letter = $(e.target).attr("data-letter");
    if (!letter) return;

    letter = letter.toLowerCase();

    $(this).attr("data-letter", "");

    var index = disparitionLetters.indexOf(letter);

    if (index > -1) {
      disparitionLetters.splice(index, 1);
    }

    $("body").highlight(letter, { element: 'span', className:'da' });

    $('span.da').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass(".da").addClass("ds");
    });

    if (disparitionLetters.length === 0) {
      $disparition.fadeOut("250", function() {
        $disparition.html("<em>F*n</em>");
        $disparition.fadeIn(250);
      });
    }

  };

  $(document).on("click", "a[data-letter]", hideLetter);

}

function initWalk() {

  var $walk = $(".walk-js");

  $.ajax({ 
    url: "http://monitor.javierarce.com/api/today",
    jsonp: "callback",
    dataType: "jsonp",
    success: function(response) {

      if (response) {
        var data  = response[0];
        var steps = numberWithCommas(data.steps);

        if (data.steps > 0) {
          $walk.html("So far today I've walked <strong>" + steps + "</strong> steps, but I haven't gotten anywhere.");
        } else {
          $walk.html("I haven't moved yet.");
        }

      }

    }
  });

}

function initCheckList() {

  var $checklist = $(".checklist-js");

  $checklist.find("li").on("click", function(e) {
    if ($(e.target).attr("type") !== "checkbox") {
      var $checkbox = $(this).find("input[type='checkbox']");
      $checkbox.attr("checked", !$checkbox.attr("checked"));
    }
    $(this).toggleClass("u--line-through");

  });

}

function initType() {

  $(".js-type").typed({
    strings: ["If you are^300 reading this,^700 the mirrors are working^700."],
    typeSpeed: 20
  });

}

function initNLP() {


  $textarea = $(".js-nlp .textarea-field .textarea");
  $textarea.filteredPaste();
  $submit   = $(".js-nlp .js-nlp-submit");

  var extractAdjectives = function(text) {

    var adjectives = [];

    var sentences = nlp.pos(text);

    _.each(sentences.sentences, function(s) {
      adjectives.push(_.pluck(s.adjectives(), "text"));
    });

    adjectives = _.compact(_.flatten(adjectives));
    adjectives = _.without(adjectives, "replaces", "not", "together");

    return adjectives;

  }

  var replaceAdjectives = function($tag, highlightWords) {

    var text                = $tag.text();
    var textAdjectives      = extractAdjectives(text);
    var percentageOfChanges = .7;
    var numChanges          = Math.round(textAdjectives.length * percentageOfChanges);

    if (numChanges < 5) numChanges = textAdjectives.length;

    if (textAdjectives.length == 0) return;

    for (i = 0; i < numChanges; i++) {

      var a = textAdjectives[i];

      if (!a) return;

      if (a.match("ic$")) {
        adjs = adjectives.ic;
      } else if (a.match("ble$")) {
        adjs = adjectives.ble;
      } else if (a.match("ed$")) {
        adjs = adjectives.ed;
      } else if (a.match("ing$")) {
        adjs = adjectives.ing;
      } else if (a.match("al$")) {
        adjs = adjectives.al;
      } else if (a.match("ous")) {
        adjs = adjectives.ous;
      } else {
        adjs = adjectives.adjectives;
      }

      b = adjs[Math.round(Math.random() * (adjs.length - 1))];

      if (a[0] === a[0].toUpperCase()) b = b[0].toUpperCase() + b.substr(1);

      var regex = new RegExp('\\b' + a + '\\b', 'g');

      if (highlightWords) {
        text = text.replace(regex, "<strong>" + b + "</strong>");
      } else {
        text = text.replace(regex, b);
      }

    }

    $tag.html(text);

    return text;

  }

  var onSubmit = function(e) {

    e.preventDefault();
    e.stopPropagation();

    var replaced = replaceAdjectives($textarea, true);

    if (replaced) {
      var $subtitle = $(".js-nlp .js-subtitle small");
      $subtitle.html("&mdash; Paste a short text, punch the black button &mdash;")
      replaceAdjectives($subtitle);
    }

    replaceAdjectives($(".js-adjective"), true);

  };

  $submit.on("click", onSubmit);

}

function initPataphysicalDate() {
  $(".PataphysicalDate-js").html(new PataphysicalDate().toString())
}

$(function() {

  initSubliminal();
  initCheckList();
  initWalk();
  initDisparition();
  initNostalgia();
  initMoments();
  initMusicSnitch();
  initUpdatedAt();
  initAmIOnline();
  initQR();
  initType();
  initNLP();
  initPataphysicalDate();

  Retina.init();

});

