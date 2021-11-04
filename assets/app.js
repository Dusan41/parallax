/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*!
  Zoom 1.7.21
  license: MIT
  http://www.jacklmoore.com/zoom
*/
(function(o){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.zoom=function(t,n,e,i){var u,c,a,r,m,l,s,f=o(t),h=f.css("position"),d=o(n);return t.style.position=/(absolute|fixed)/.test(h)?h:"relative",t.style.overflow="hidden",e.style.width=e.style.height="",o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function(){c=f.outerWidth(),u=f.outerHeight(),n===t?(r=c,a=u):(r=d.outerWidth(),a=d.outerHeight()),m=(e.width-c)/r,l=(e.height-u)/a,s=d.offset()},move:function(o){var t=o.pageX-s.left,n=o.pageY-s.top;n=Math.max(Math.min(n,a),0),t=Math.max(Math.min(t,r),0),e.style.left=t*-m+"px",e.style.top=n*-l+"px"}}},o.fn.zoom=function(n){return this.each(function(){var e=o.extend({},t,n||{}),i=e.target&&o(e.target)[0]||this,u=this,c=o(u),a=document.createElement("img"),r=o(a),m="mousemove.zoom",l=!1,s=!1;if(!e.url){var f=u.querySelector("img");if(f&&(e.url=f.getAttribute("data-src")||f.currentSrc||f.src),!e.url)return}c.one("zoom.destroy",function(o,t){c.off(".zoom"),i.style.position=o,i.style.overflow=t,a.onload=null,r.remove()}.bind(this,i.style.position,i.style.overflow)),a.onload=function(){function t(t){f.init(),f.move(t),r.stop().fadeTo(o.support.opacity?e.duration:0,1,o.isFunction(e.onZoomIn)?e.onZoomIn.call(a):!1)}function n(){r.stop().fadeTo(e.duration,0,o.isFunction(e.onZoomOut)?e.onZoomOut.call(a):!1)}var f=o.zoom(i,u,a,e.magnify);"grab"===e.on?c.on("mousedown.zoom",function(e){1===e.which&&(o(document).one("mouseup.zoom",function(){n(),o(document).off(m,f.move)}),t(e),o(document).on(m,f.move),e.preventDefault())}):"click"===e.on?c.on("click.zoom",function(e){return l?void 0:(l=!0,t(e),o(document).on(m,f.move),o(document).one("click.zoom",function(){n(),l=!1,o(document).off(m,f.move)}),!1)}):"toggle"===e.on?c.on("click.zoom",function(o){l?n():t(o),l=!l}):"mouseover"===e.on&&(f.init(),c.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(m,f.move)),e.touch&&c.on("touchstart.zoom",function(o){o.preventDefault(),s?(s=!1,n()):(s=!0,t(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),f.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}).on("touchend.zoom",function(o){o.preventDefault(),s&&(s=!1,n())}),o.isFunction(e.callback)&&e.callback.call(a)},a.setAttribute("role","presentation"),a.alt="",a.src=e.url})},o.fn.zoom.defaults=t})(window.jQuery);

/*============================================================================
  Global - header
==============================================================================*/

var header = {
  init: function(){

    this.setHeaderPosition();

    //remove duplicate header on update
    if ($('.mobile-header').length > 1) {
      var nav_menu = $("#nav").data("mmenu");
      nav_menu.close();
      $('.mobile-header:last, #nav:last').remove();
    }

    // Only applied when there is a full-width banner across top of page
    var $header = $('.feature_image .header.header-background--false');

    // To offset the fixed header
    if ($('.header').hasClass('mm-fixed-top')) {
      $('.menu li:not(.cart) a[href^="#"], .flex-caption a[href^="#"]').on('click', function(e) {

        var anchorlink = $(this).attr('href');

        if($('.index-sections').find(anchorlink).length) {
          e.preventDefault();
          var headerHeight = $('.header').outerHeight();
          $('html, body').animate({
            scrollTop: $(anchorlink).offset().top - headerHeight
          }, 2000)
        }
      })
    };

    if ($header.hasClass('sticky-header--true')) {

      $(".index-sections .shopify-section:nth-child(2), .shopify-section:nth-child(2), .main-wrapper, .page-details-block:nth-child(2)").waypoint(function(direction) {

        if (direction == 'down'){
          $header.addClass('sticky--active fadeInDown delay-0s header_bar');
          $header.removeClass('is-absolute');
          header.dynamicDropdown();
        } else if (direction == 'up'){
          $header.removeClass('sticky--active fadeInDown delay-0s header_bar');
          $header.addClass('is-absolute');
          header.dynamicDropdown();
        }
      }, {
        offset: function() {
          // sticky header activates when merchant scrolls down the page the height of the header plus 250px
          return -$header.outerHeight() - 250
        }
      });
    }

    $header.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
      $(this).removeClass('fadeIn');
    });

    $('#cart').mmenu({
      navbar: {
        add: false
      },
      offCanvas: {
        pageSelector: "#content_wrapper"
      },
      "extensions": [
        "theme-dark",
        "position-front",
        "position-right"
      ]
    });
    $('.cart-button, .icon-menu').on("click", function(e) {
      $('#search').hide();
    });

    var navSettings = {
      "navbar": {
        add: true,
        title: $('.mobile_logo').html()
      },
      scrollBugFix: {
        fix: true
      },
      searchfield: {
        add: $('#header').data('search-enabled'),
        search: false,
        position: "top",
        placeholder: Shopify.translation.search
      },
      "extensions": [
        "theme-dark"
      ],
      offCanvas: { pageSelector: "#content_wrapper" }
    }

    if($('.mobile-search-bar').length > 0) {
      var navSettings = {
        "navbar": {
          add: true,
          title: $('.mobile_logo').html()
        },
        scrollBugFix: {
          fix: true
        },
        "extensions": [
          "theme-dark"
        ],
        offCanvas: { pageSelector: "#content_wrapper" }

      }

    }

    $('#nav').mmenu(
      navSettings,
      {
        searchfield: {
          "form": {
            "action": "/search"
          },
          "input": {
            "name": "q"
          }
        }
      }
    );

    // Add a link to the navbar title
    $('#mm-1').find('.mm-navbar__title').attr('href', '/');

    

    $('body').on('mouseover', '.sub-menu', function() {
      $(this).attr('aria-expanded', true);
    });

    $('body').on('mouseout', '.sub-menu', function() {
      $(this).attr('aria-expanded', false);
    });

    this.dynamicDropdown();
  },
  setHeaderPosition: function() {
    // Determine the header position
    if ($('.promo-banner').length) {
      var announcementHeight = $('.promo-banner').outerHeight();
      $('.header').css('top', announcementHeight);
    } else {
      $('.header').css('top', '0');
    }
  },
  dynamicDropdown: function() {
    var headerNavigationWidth = $('[data-header-navigation]').width();
    var $headerNavItems = $('[data-header-nav-item]');
    var dropdownPosition = $('.header').data('dropdown-position');
    var singleLineNav = true;
    var totalNavItemsWidth = 0;

    $headerNavItems.each(function(index, navItem){
      totalNavItemsWidth += $(navItem).outerWidth();
    })

    if (totalNavItemsWidth > headerNavigationWidth) {
      singleLineNav = false;
    }

    if (dropdownPosition == 'below_header' && singleLineNav == true) {
      $('.header_bar').removeClass('header-dropdown-position--below_parent');
      $('.header_bar').addClass('header-dropdown-position--below_header');
      $('.header_bar').attr('data-dropdown-position', 'below_header');

      $('.header_bar.header-dropdown-position--below_header .dropdown').css({
        "padding-top": $('.header').height() / 2
      });

      $('.header_bar.header-dropdown-position--below_header .disclosure__list-wrap').css({
        "padding-top": $('.header').height() / 2
      });
    } else {
      $('.header').addClass('header-dropdown-position--below_parent');
      $('.header').removeClass('header-dropdown-position--below_header');
      $('.header').attr('data-dropdown-position', 'below_parent');

      $('.header .dropdown').removeAttr('style');
    }
  },
  setPadding: function() {
    if ($('body').hasClass('index') && Shopify.media_queries.large.matches || $('.shopify-section.shopify-section--page-details-template').length && Shopify.media_queries.large.matches) {

      var $reorderableFirstSection = $('.index-sections .shopify-section, .shopify-section--page-details-template .page-details-block').first();

      if ($reorderableFirstSection.hasClass('parallax-banner')) {

        if ($('.header').hasClass('header-background--true') && $('.header').hasClass('header-transparency--false')){
          $reorderableFirstSection.css('padding-top', $('.header').height());
        }
      }
    }
  },
  openDropdown: function() {
    // Grab Menu Items
    var $menuItems = $('.sub-menu');

    // Run loop over each menu item with dropdown
    $.each($menuItems, function(index, menuItem) {

      // Listen for enter key
      $(menuItem).on('keydown', function(e) {

        var itemVisited;

        if ($(this).hasClass('show-dropdown')) {
          var itemVisited = true;
        } else {
          var itemVisited = false;
        }

        // Check if enter key
        if (e.which === 13) {

          // Prevent it from going to the link if item has not been visited
          if (itemVisited === false) {
            e.preventDefault();
          }

          // Show dropdown
          $(this).addClass('show-dropdown');

          // Reset itemVisited so that they can visit the link
          itemVisited = true;
        }
      })

      // Close dropdown when user navigates away from parent menu item
      $(menuItem).on('focusout', function(e) {
        if($(this).find(e.relatedTarget).length === 0) {
          $(menuItem).removeClass('show-dropdown');
        }
      })
    })

  },
  unload: function($target){
    $('a[href^="#"]').off('click');
  }
}

/*============================================================================
  Home page - featured promotions
==============================================================================*/

var featured_promotions = {
  init: function(){
    animate_content.init();
  },
  unload: function($target){
  }
}

/*============================================================================
  Home page - video
==============================================================================*/

var videoTheme = {
  init: function(){

    // Set up plyr for newly embedded video
    var featuredVideos = $('[data-video-element]').get();

    var featuredVideoPlayers = Plyr.setup(featuredVideos, {
      controls: controls,
      fullscreen: {
        enabled: true,
        fallback: true,
        iosNative: true
      },
      storage: {
        enabled: false
      }
    });

    // Adds plyr video id to video wrapper
    $.each(featuredVideoPlayers, function(index, player) {
      var id = player.id;
      var $video;

      if (player.isHTML5) {
        $video = $(player.elements.wrapper).find('video');
        $video.attr('data-plyr-video-id', id);
      }

      // When a video is playing, pause any other instances
      player.on('play', function(event) {
        var instance = event.detail.plyr;
        $.each(featuredVideoPlayers, function(index, player) {
          if (instance.id != player.id) {
            player.pause();
          }
        })
      })
    })

    $('[data-video-element]').each(function(index, video) {

      // Variables
      var $video = $(video);
      var $section = $video.parents('.shopify-section').attr('id', id);
      var $videoElement = $section.find($video);
      var $videoWrapper = $videoElement.parents('.video-wrapper');
      var $playButton = $videoWrapper.find('[data-play-button]');
      var $videoText = $videoWrapper.find('[data-video-text]');
      var $videoTextContainer = $videoWrapper.find('[data-video-text-container]');
      var $posterImage = $videoWrapper.data('poster-image-uploaded');
      var aspectRatio = $videoWrapper.data('aspect-ratio');
      var id = $videoWrapper.data('video-src');
      var isAutoplay = $videoWrapper.data('autoplay');
      var isLoopingEnabled = $videoWrapper.data('autoloop');
      var isMuted = $videoWrapper.data('mute-video');

      $.each(featuredVideoPlayers, function(index, player) {
        var videoID;
        var playerID;

        if (player.isYouTube || player.isVimeo) {
          var videoID = $videoWrapper.attr('id');
          var playerID = $(player.elements.original).attr('id');
        } else if (player.isHTML5) {
          var videoID = $videoWrapper.find('[data-plyr-video-id]').data('plyr-video-id');
          var playerID = player.id;
          $videoElement = $section.find('.plyr--video');
        }

        if (playerID == videoID) {

          // Reset play button icon
          $videoWrapper.removeClass('play-button-icon--visible');

          // Reset image
          $videoWrapper.removeClass('video-is-playing');

          // Autoplay
          if (isAutoplay) {
            // If on desktop or player is YouTube/Vimeo
            if (Shopify.media_queries.large.matches || player.isYouTube || player.isVimeo) {

              player.autoplay = true;

              // Hide image
              $videoWrapper.addClass('video-is-playing');

              // Show video
              $videoElement.show();

              // If display text over video unchecked
              if ($videoTextContainer.hasClass('display-text-over-video--false')) {
                $videoText.hide();
              } else {
                $videoText.show();
              }

              // Keep play button hidden
              $playButton.hide();

              // HTML5 Mobile Video
            } else if (Shopify.media_queries.medium.matches && player.isHTML5) {

              // Hide image
              $videoWrapper.addClass('video-is-playing');

              // Show video
              $videoElement.show();

              // Display button so that video can be played
              $playButton.show();

              player.on('play', function() {
                // Show video
                $videoElement.show();

                // Hide play button
                $playButton.hide();
              })
            }
          } else { // If Autoplay disabled
            // If poster image, show image wrapper otherwise hide it
            if ($posterImage) {
              $videoWrapper.removeClass('video-is-playing');
            } else {
              $videoWrapper.addClass('video-is-playing');
              $videoElement.show();
            }
          }

          // Clicking image will play video
          $videoWrapper.find('.parallax__wrap, .banner__wrap').on('click', function(){
            if (!player.playing && !$videoWrapper.hasClass('video-is-playing')) {
              player.play();
            }
          })

          // Muted
          if (isMuted) {
            player.muted = true;
          }

          // Aspect Ratio
          if (aspectRatio) {
            player.ratio = aspectRatio;
          }

          // Looping
          if (isLoopingEnabled) {
            player.loop = true;
          }

          // Show Video Controls
          // - video controls get hidden using a css class: '.video-controls-enabled--false'

          // If button exists, hide text and poster
          if ($playButton) {
            $playButton.on('click', function() {

              // Hide image
              $videoWrapper.addClass('video-is-playing');

              // Show video
              $videoElement.show();

              // If display text over video unchecked
              if ($videoTextContainer.hasClass('display-text-over-video--false')) {
                $videoText.hide();
              } else {
                $videoText.show();
              }

              // Play video
              player.play();
            })
          }

          player.on('ready', function() {
            videoTheme.resizeVideo($videoWrapper);
          })

          player.on('play', function() {

            // Hide image
            $videoWrapper.addClass('video-is-playing');

            // Reset play button icon
            $videoWrapper.removeClass('play-button-icon--visible');

            // Show video
            $videoElement.show();

            // If display text over video unchecked
            if ($videoTextContainer.hasClass('display-text-over-video--false')) {
              $videoText.hide();
            } else {
              $videoText.show();
            }

            // Hide play button
            if ($playButton) {
              $playButton.hide();
            }
          })

          // If video is paused, play button icon or button must be shown
          // If button text is filled out, use play button
          // If button text is not filled out, use play button icon
          player.on('pause', function() {
            if ($playButton.length > 0) {
              $playButton.show();
              $videoWrapper.removeClass('play-button-icon--visible');
            } else {
              $videoWrapper.addClass('play-button-icon--visible');
            }
          })

          // If page loads with video paused and no button showing, show icon
          if (!player.playing && $playButton.is(':hidden') || $playButton.length == 0) {
            $videoWrapper.addClass('play-button-icon--visible');
          }

          return false;
        }
      })
    })


  },
  resizeVideo: function($videoWrapper) {
    // get height and width of the video
    var videoHeight = $videoWrapper.find('.plyr--video').height();
    var videoWidth = $videoWrapper.find('.plyr__video-wrapper').width();

    // calculate correct padding-bottom percentage for responsive videos
    var paddingBottom = ( videoHeight / videoWidth ) * 100;

    // apply that padding bottom ratio
    $videoWrapper.find('.plyr__video-wrapper').css('padding-bottom', paddingBottom + '%');
  }
}

/*============================================================================
  Banner image
==============================================================================*/

var banner_image = {
  init: function(){

    if (Shopify.media_queries.large.matches) {

      if ($('body').hasClass('index') || $('.shopify-section.shopify-section--page-details-template').length){

        var $reorderableFirstSection = $('.index-sections .shopify-section, .shopify-section--page-details-template .page-details-block').first();

        $reorderableFirstSection.attr('style', '');

        if ($reorderableFirstSection.hasClass('parallax-banner')) {
          //('has banner');
          if ($('.header').hasClass('header-background--true') &&
              $('.header').hasClass('header-transparency--false')){

            $reorderableFirstSection.css('padding-top', $('.header').height());
            $('.header').parent().removeClass('feature_image');
            $('.header').addClass('header_bar');

            if ($('.header').hasClass('sticky-header--false')){
              $('.header').addClass('is-absolute');
            } else {
              $('.header.is-absolute').removeClass('is-absolute');
            }

          } else if ($('.header').hasClass('header-background--false') &&
                     $('.header').hasClass('header-transparency--true')){

            $('.header').parent().addClass('feature_image');
            $('.header').removeClass('header_bar');
            $('.header').addClass('is-absolute');

            if ($('.header').hasClass('sticky-header--true')){
              $('.header').addClass('is-absolute');
            }

          } else if ($('.header').hasClass('header-background--false') &&
                     $('.header').hasClass('header-transparency--false')){

            $('.header').parent().addClass('feature_image');
            $('.header').removeClass('header_bar');
            $('.header').addClass('is-absolute');

            if ($('.header').hasClass('sticky-header--true')){
              $('.header').addClass('is-absolute');
            }

          } else if ($('.header').hasClass('header-background--true') &&
                     $('.header').hasClass('header-transparency--true')){

            $('.header').parent().removeClass('feature_image');
            $('.header').addClass('header_bar');

            if ($('.header').hasClass('sticky-header--false')){
              $('.header').addClass('is-absolute');
            } else {
              $('.header.is-absolute').removeClass('is-absolute');
            }

          }

        } else {
          //('no banner')
          $reorderableFirstSection.css('padding-top', $('.header').height());
          if ($('.header').hasClass('sticky-header--false')){
            $('.header').addClass('header_bar');
            $('.header').addClass('is-absolute');
          } else {
            $('.feature_image').removeClass('feature_image');
            $('.header').addClass('header_bar');
            $('.header.is-absolute').removeClass('is-absolute');
          }
        }
      } else {
        var $staticFirstSection = $('.global-wrapper .shopify-section').first();
        if ($staticFirstSection.children().first().hasClass('featured-image--true')) {
          //(has banner');
          if ($('.header').hasClass('header-background--true')){
            $('.header').parent().addClass('feature_image');
            $('.header').addClass('header_bar');
          } else if ($('.header').hasClass('header-background--false')) {
            $('.header').parent().addClass('feature_image');
            $('.header').removeClass('header_bar');
          }

          if ($('.header').hasClass('header-transparency--false') && $('.header').hasClass('header-background--true')){
            $staticFirstSection.css('padding-top', $('.header').height());
          }

        } else {
          //('no banner')
          if ($('.header').hasClass('sticky-header--false')){
            $('.header').addClass('header_bar');
            $('.header').addClass('is-absolute');
          } else {
            $('.feature_image').removeClass('feature_image');
            $('.header').addClass('header_bar');
            $('.header.is-absolute').removeClass('is-absolute');
          }
        }
      }
    }

  },
  resetPadding: function () {
    var $reorderableFirstSection = $('.index-sections .shopify-section, .shopify-section--page-details-template .page-details-block').first();

    if ($reorderableFirstSection.hasClass('parallax-banner')) {
      $reorderableFirstSection.css('padding-top', '0px');
    } else {
      if (Shopify.media_queries.large.matches) {
        $reorderableFirstSection.css('padding-top', $('.header').height());
      } else {
        $reorderableFirstSection.css('padding-top', '0px');
      }
    }
  },
  unload: function($target){

  }
}

/*============================================================================
  Announcement Bar
==============================================================================*/

var announcement_bar = {
  init: function() {
    if ($('.promo-banner').length) {
      var announcement = Cookies.get('promo-banner');
      if(announcement != 'dismiss') {
        $('body').addClass('promo-banner--true');
        $('.promo-banner__close').on('click', function(){
          $('.promo-banner--true').attr('style', '');
          $('body').removeClass('promo-banner--true');
          announcement_bar.setPadding();
          Cookies.set('promo-banner', 'dismiss', { path: '/' }, { expires: 30 });
        });
      }
    }
    //call setPadding on initialization
    announcement_bar.setPadding();
  },
  setPadding: function() {
    // Setting padding relative to promo banner height
    var bannerHeight = $('.promo-banner').innerHeight();
    var bannerPadding = (bannerHeight - 25) + 'px';
    var parentSection = $('.promo-banner').parent('.shopify-section--header');
    if ($('body').hasClass('promo-banner--true')) {
      if ($('.header').hasClass('sticky-header--true') || $('.mobile-header').hasClass('mobile-sticky-header--false') && Shopify.media_queries.medium.matches) {
        $(parentSection).css('padding-bottom', bannerPadding);
      }
    } else {
      $(parentSection).css('padding-bottom', '0');
      $('.header').css('top', '0');
    }
  }
}

/*============================================================================
  Banner
==============================================================================*/

var banner = {
  init: function(){

    animate_content.init();

    //Arrow scroll

    var headerHeight = $('.header').outerHeight();

    if ($('.header').hasClass('sticky-header--true')) {
      $('.scroll-arrow').smoothScroll({
        offset: -headerHeight
      });
    } else {
      $('.scroll-arrow').smoothScroll();
    }

    announcement_bar.init();
  },
  unload: function($target){
  }
}

/*============================================================================
  Newsletter
==============================================================================*/

var newsletter_popup = {
  init: function() {
    var popup = Cookies.get('popup');
    var newsletter_popup_days = parseInt(Shopify.theme_settings.newsletter_popup_days);
    var cookie_enabled = newsletter_popup_days != 0 ? true : false;

    if (cookie_enabled && popup == 'open') {
      return false;
    } else {
      newsletter_popup.open();
    }
    if (cookie_enabled) {
      Cookies.set('popup', 'open', { expires: newsletter_popup_days });
    }
  },
  open: function() {
    var newsletter_popup_seconds = parseInt(Shopify.theme_settings.newsletter_popup_seconds);

    if (Shopify.theme_settings.newsletter_popup_mobile || Shopify.media_queries.large.matches) {
      setTimeout( function() {
        $.fancybox.open($('.js-newsletter-popup'), {
          baseClass: 'newsletter_popup',
          hash: false,
          infobar : false,
          toolbar: false,
          loop: true,
          smallBtn : true,
          touch: false,
          mobile: {
            preventCaptionOverlap: false,
            toolbar: true,
            buttons: [
              "close"
            ]
          }
        });
      },
      newsletter_popup_seconds * 1000);
    }
  }
}

/*============================================================================
  Product
==============================================================================*/

var product = {
  init: function(){

    var $notify_form = $('.notify_form .contact-form');

    // Find product galleries on page but exclude those in the quickshop (quickshop logic handled in fancybox event)
    var $productGalleries = $('.product-gallery:not([data-quickshop-gallery] .product-gallery)');

    // For each product gallery, create an object and add it to an array of galleries
    var galleriesArray = [];
    globalPlayersArray = [];

    if ($productGalleries.length > 0) {
      $.each($productGalleries, function(index, gallery) {
        var $productSection = $(gallery).closest('.product_section');
        galleriesArray.push({
          element: $(gallery),
          productSection: $productSection,
          thumbnailsEnabled: $productSection.data('thumbnails-enabled'),
          thumbnailsSliderEnabled: $productSection.data('thumbnails-slider-enabled'),
          thumbnailsPosition: $productSection.data('thumbnails-position'),
          thumbnailsArrows: $productSection.data('gallery-arrows-enabled'),
          slideshowAnimation: $productSection.data('slideshow-animation'),
          slideShowSpeed: $productSection.data('slideshow-speed'),
          activateZoom: $productSection.data('activate-zoom'),
          productMediaSupported: $productSection.data('product-media-supported'),
          loopingEnabled: $(gallery).find('.product-gallery__main').data('video-looping-enabled'),
          sectionID: $productSection.parents('.shopify-section').attr('id')
        })
      })
    }

    if (galleriesArray.length > 0) {
      // For each galleryObject, enable a Flickity slider
      $.each(galleriesArray, function(index, galleryObject) {
        product.enableSlider(galleryObject);

        // If product media is supported for the gallery, then also launch product media and Plyr
        if (galleryObject.productMediaSupported) {

          // Find videos within gallery section
          var videos;
          videos = $(galleryObject.element).find('[data-html5-video] video, [data-youtube-video]').get();

          product.loadPlyr(galleryObject, videos);
          product.launchProductMedia(galleryObject);

          // Go through each gallery, on video play check instance ID against other player IDs
          var instance;
          $.each(galleryObject.videoPlayers, function(index, player) {
            player.on('play', function(event) {
              instance = event.detail.plyr;

              // Ensures only one video is playing at a time
              $.each(globalPlayersArray, function(index, player) {
                if (instance.id != player.id) {
                  player.pause();
                }
              })
            })
          })
        }

        // Hover to zoom
        if (galleryObject.activateZoom) {
          document.addEventListener('lazybeforeunveil', product.enableZoom);
        }
      })
    }

    this.loadProductRecommendations();

    this.productSwatches();

    animate_content.init();
  },
  productSwatches: function() {

    $('.product_form.product_form_options.init').each(function() {
        new Shopify.OptionSelectors($(this).data("select-id"), { product: $(this).data("product"), onVariantSelected: selectCallback, enableHistoryState: $(this).data("enable-state") });
    });

    
      $('.product_form').addClass('is-visible');
      $('.swatch :radio').change(function() {
        var optionIndex = $(this).closest('.swatch').attr('data-option-index');
        var optionValue = $(this).val();
        $(this)
          .closest('form')
          .find('.single-option-selector')
          .eq(optionIndex)
          .val(optionValue)
          .trigger('change');
      });

      //Swatches linked with selected options
      if ($('.js-product_section').length){
        var $productForms = $('.js-product_section').find('.product_form');

        //Loop through each product and set the initial option value state

        $productForms.each(function(){
          var JSONData = $(this).data('product');
          var productID = $(this).data('product-id');
          var productSection = '.product-' + productID + ' .js-product_section';
          var swatchOptions = $(this).find('.swatch-options .swatch');
          if (swatchOptions.length > 1){
            Shopify.linkOptionSelectors(JSONData, productSection);
          }
        });
      }

      //Add click event when there is more than one product on the page (eg. Collection in Detail)
      if ($('.js-product_section').length > 1){
        $('body').on('click', '.swatch-element', function(){
          var swatchValue = $(this).data('value').toString();

          $(this)
            .siblings('input[value="'+ swatchValue.replace(/\"/g,'\\"') +'"]')
            .prop("checked", true)
            .trigger("change");

          var JSONData = $(this).parents('.product_form').data('product');
          var productID = $(this).parents('.product_form').data('product-id');
          var productSection = '.product-' + productID + ' .js-product_section';
          var swatchOptions = $(this).parents('.product_form').find('.swatch-options .swatch');
          if (swatchOptions.length > 1){
            Shopify.linkOptionSelectors(JSONData, productSection);
          }
        })
      }
    
  },
  enableZoom: function() {
    var $image = $(event.target);
    var zoomSrc = $image.data('zoom-src');
    if (zoomSrc) {
      $image.wrap('<span class="zoom-container"></span>')
      .css('display', 'block')
      .parent()
      .zoom({
        url: zoomSrc,
        touch: false,
        magnify: 1,
      });
    }
  },
  enableSlider: function(galleryObject) {

    var $el = galleryObject.element.find('.product-gallery__main');
    var $thumbnailProductGallery = galleryObject.element.find('.product-gallery__thumbnails');
    var $slides = $el.find('.product-gallery__image');
    var $thumbnails = $thumbnailProductGallery.find('.product-gallery__thumbnail');
    var arrowShape = 'M95.04 46 21.68 46 48.18 22.8 42.91 16.78 4.96 50 42.91 83.22 48.18 77.2 21.68 54 95.04 54 95.04 46z';

    $el.flickity({
      wrapAround: true,
      adaptiveHeight: true,
      dragThreshold: 10,
      imagesLoaded: true,
      pageDots: false,
      prevNextButtons: $el.data('media-count') > 1 ? true : false,
      autoPlay: galleryObject.slideShowSpeed * 1000,
      fade: galleryObject.slideShowAnimation === 'fade' ? true : false,
      watchCSS: false,
      arrowShape: arrowShape
    })

    var $slides = $el.find('.product-gallery__image');

    $el.on('change.flickity', function() {

      $slides.each(function(index, slide) {

        // Variables to be used
        var $slide = $(slide);
        var mediaType = $slide.data('media-type');

        // Check whether slide is active slide (featured image shown) or inactive slide (slide hidden)
        if ($slide.hasClass('is-selected')) {
          // Switch statement to go through different media types (video, model)
          switch(mediaType) {
            case 'model':

              /* On slide change, if active slide contains 3d model
              * If on desktop, on hover, unbind flickity, after hover bind flickity
              * On model play event, unbind flickity to ensure model can be interacted with
              * On model pause event, bind flickity so that slide can be swiped
              * Pause all model slides when hidden
              */

              if (Shopify.media_queries.large.matches) {

                // On mouseenter event, unbind flickity
                $slide.on('mouseenter', function() {
                  $el.flickity('unbindDrag');
                });

                // On mouseleave event, bind flickity
                $slide.on('mouseleave', function() {
                  $el.flickity('bindDrag');
                });
              }

              // Listen for model pause/play events
              $slide.find('model-viewer').on('shopify_model_viewer_ui_toggle_play', function(){
                $el.flickity('unbindDrag');
              })

              $slide.find('model-viewer').on('shopify_model_viewer_ui_toggle_pause', function(){
                $el.flickity('bindDrag');
              })
            break;
          }
        } else {
          // Below logic deals with the hidden slides when a flickity change is triggered
          // Switch statement to go through different media types (video, model)
          switch(mediaType) {
            case 'model':

              // Pause models when hidden
              if (galleryObject.models.length > 0) {
                $.each(galleryObject.models, function(index, model) {
                  model.pause();
                })
              }
              break;
            case 'video':

              // Variables
              var $htmlVideo = $slide.find('[data-html5-video]');
              var videoID = $htmlVideo.find('video').data('plyr-video-id');

              // Pause all html5 videos for slides that are hidden
              if ($htmlVideo.length) {
                $.each(galleryObject.videoPlayers, function(index, player) {
                  if (player.id == videoID) {
                    player.pause();
                  }
                })
              }
              break;
            case 'external_video':

              // Variables
              var $iframeVideo = $slide.find('iframe');
              var iframeID = $iframeVideo.attr('id');

              // Pause all youtube videos for slides that are hidden
              if ($iframeVideo.length) {
                $.each(galleryObject.videoPlayers, function(index, player) {
                  if (player.media.id == iframeID) {
                    player.pause();
                  }
                })
              }
              break;
          }
        }
      })
    })

    // Ensures Flickity is not collapsed when loaded
    setTimeout(function() {
      $el.flickity('resize');
    }, 500);

    $( window ).on( 'load', function() {
      $el.flickity('resize');
    });

    $slides.each(function(index, slide) {

      // Variables to be used
      var $slide = $(slide);
      var mediaType = $slide.data('media-type');

      // Check whether slide is active slide (featured image shown)
      if ($slide.hasClass('is-selected')) {

        if (mediaType == 'model') {
          // If slide has 3D model, unbind flickity on hover on desktop
          // Allows you to click anywhere to trigger model ui

          if (Shopify.media_queries.large.matches) {

            // On mouseenter event, unbind flickity
            $slide.on('mouseenter', function() {
              $el.flickity('unbindDrag');
            });

            // On mouseleave event, bind flickity
            $slide.on('mouseleave', function() {
              $el.flickity('bindDrag');
            });
          }
        }

        // Detect keyboard 'ENTER' key on slides
        $slide.keypress(function(event) {
          if(event.which == 13) {

            $slide.find('model-viewer, .product-gallery__link, .plyr').focus();

            $el.on('settle.flickity', function( event, index ) {

              // Run video autoplay logic if featured media is a video
              if (mediaType == 'video' || mediaType == 'external_video') {
                checkForVideos();
              }

              // Autoplay model if featured media is a model
              if (mediaType == 'model') {
                // If model container has class is-selected then play the model
                autoplayModel();
              }

              // Unbind settle event
              $el.off('settle.flickity');
            });
          }
        })
      }
    })

    var $sliderArrows = $el.find('.flickity-prev-next-button');

    if (($sliderArrows || $thumbnails) && (Shopify.media_queries.large.matches)) {
      $sliderArrows.on('click', function() {

        // Find out media type of featured media slide
        var mediaType = $el.find('.product-gallery__image.is-selected').data('media-type');

        $el.on('settle.flickity', function(event, index) {

          // Run video autoplay logic if featured media is a video
          if (mediaType == 'video' || mediaType == 'external_video') {
            checkForVideos();
          }

          // Autoplay model if featured media is a model
          if (mediaType == 'model') {
            // If model container has class is-selected then play the model
            autoplayModel();
          }

          // Unbind settle event
          $el.off('settle.flickity');
        });
      })

      // Detect keyboard 'ENTER' key on slider arrows
      $sliderArrows.on('keypress', function(event) {

        if(event.which == 13) {
          $el.focus();
          $el.attr('tabindex', 0);
          $el.find('.product-gallery__image').attr('tabindex', 0);
        }

      })

      $thumbnails.on('click', function() {

        // Change slide
        var index = $(event.currentTarget).index();
        $el.flickity('select', index);

        // Find out media type of featured media slide
        var mediaType = $el.find('.product-gallery__image.is-selected').data('media-type');

        $el.on('settle.flickity', function(event, index) {

          // Run video autoplay logic if featured media is a video
          if (mediaType == 'video' || mediaType == 'external_video') {
            checkForVideos();
          }

          // Autoplay model if featured media is a model
          if (mediaType == 'model') {
            // If model container has class is-selected then play the model
            autoplayModel();
          }

          // Unbind settle event
          $el.off('settle.flickity');
        });
      })

      // Added functionality for keyboard 'enter' key
      $thumbnails.keypress(function(event) {
        var index = $(event.currentTarget).index();

        if(event.which == 13) {

          // Change slide
          $el.flickity('select', index);

          // Find selected slide
          var $selectedSlide = $el.find('.product-gallery__image.is-selected');

          // Find out media type of featured media slide
          var mediaType = $selectedSlide.data('media-type');

          // Bring focus to media inside selected slide once slide has finished animation
          $el.on( 'settle.flickity', function( event, index ) {
            $selectedSlide.find('[data-youtube-video]').attr('tabindex', '0');
            $selectedSlide.find('model-viewer, .plyr, .product-gallery__link').focus();

            // Run video autoplay logic if featured media is a video
            if (mediaType == 'video' || mediaType == 'external_video') {
              checkForVideos();
            }

            // Autoplay model if featured media is a model
            if (mediaType == 'model') {
              // If model container has class is-selected then play the model
              autoplayModel();
            }

            // Unbind settle event
            $el.off('settle.flickity');
          });
        }
      })
    }

    function autoplayModel() {
      $.each(galleryObject.models, function(index, model) {
        var $slide = $(model.container).parents('.product-gallery__image');
        if ($slide.hasClass('is-selected')) {
          model.play();
        }
      })
    }

    function checkForVideos() {
      $slides.each(function(index, slide) {
        // Variables
        var $slide = $(slide);
        var mediaType = $slide.data('media-type');
        var videoID = $slide.find('video').data('plyr-video-id');
        var $iframeVideo = $slide.find('iframe');
        var iframeID = $iframeVideo.attr('id');
        if ($slide.hasClass('is-selected')) {
          if (mediaType == 'video') {
            videoID = $slide.find('video').data('plyr-video-id');
            if (videoID) {
              autoplayVideo(videoID, $slide);
            }
          } else if (mediaType == 'external_video') {
            if (iframeID) {
              autoplayYoutubeVideo(iframeID, $slide);
            }
          }
        }
      })
    }

    function autoplayVideo(videoID, $slide) {
      // Compare id to player object and only play that video
      $.each(galleryObject.videoPlayers, function(index, player){

        if (player.id == videoID) {
          player.play();

          // On fullscreen exit, focus on the thumbnail nav
          player.on('exitfullscreen', function(event){
            var $thumbnailProductGallery = $slide.closest('.product-gallery').find('.product-gallery__thumbnails');
            if ($thumbnailProductGallery.hasClass('vertical-slider-enabled')) {
              $thumbnailProductGallery.attr('tabindex', '0').focus();
            } else {
              $thumbnailProductGallery.focus();
            }
          })
        }
      })
    }

    function autoplayYoutubeVideo(iframeID, $slide) {
      // compare id to player object and only play that video
      $.each(galleryObject.videoPlayers, function(index, player){

        if (player.playing) {
          player.pause();
        }

        if (player.media.id == iframeID) {
          player.play();

          // On fullscreen exit, focus on the thumbnail nav
          player.on('exitfullscreen', function(event){
            var $thumbnailProductGallery = $slide.closest('.product-gallery').find('.product-gallery__thumbnails');
            if ($thumbnailProductGallery.hasClass('vertical-slider-enabled')) {
              $thumbnailProductGallery.attr('tabindex', '0').focus();
            } else {
              $thumbnailProductGallery.focus();
            }
          })
        }
      })
    }

    // Thumbnail gallery logic begins
    if (galleryObject.thumbnailsEnabled == true) {
      if (galleryObject.thumbnailsSliderEnabled == true && $slides.length > 1) {
        // If desktop determine which slider we build
        if (Shopify.media_queries.large.matches) {
          // If thumbnail position is left/right then vertical slider gets enabled
          if (galleryObject.thumbnailsPosition == 'left-thumbnails' || galleryObject.thumbnailsPosition == 'right-thumbnails') {
            $thumbnailProductGallery.css('max-height', $el.closest('.product-gallery').outerHeight());
            $thumbnailProductGallery.addClass('vertical-slider-enabled');

            $thumbnails.on('click', function(event) {
              var index = $(event.currentTarget).index();
              $el.flickity('select', index);
            });

            var navCellHeight = $thumbnails.height();
            var navHeight = $thumbnailProductGallery.height();

            $el.on( 'select.flickity', function() {
              // set selected nav cell
              var flkty = $el.data('flickity');
              $thumbnailProductGallery.find('.is-nav-selected').removeClass('is-nav-selected');
              var $selected = $thumbnails.eq( flkty.selectedIndex ).addClass('is-nav-selected');

              // scroll nav
              var scrollY = $selected.position().top + $thumbnailProductGallery.scrollTop() - ( navHeight + navCellHeight ) / 2;
              $thumbnailProductGallery.animate({
                scrollTop: scrollY
              });
            });
          } else {
              $thumbnailProductGallery.flickity({
                cellAlign: 'center',
                contain: true,
                groupCells: '80%',
                imagesLoaded: true,
                pageDots: false,
                prevNextButtons: $thumbnails.length > 5 ? galleryObject.thumbnailsArrows : false,
                asNavFor: $el[0],
                arrowShape: arrowShape
              });

              // Ensures Flickity is not collapsed when loaded
              setTimeout(function() {
                $thumbnailProductGallery.flickity('resize');
              }, 500);

              $(window).on('load', function() {
                $thumbnailProductGallery.flickity('resize');
              });

              // Once thumbnail is focused, move carousel to that cell
              $.each($thumbnails, function(index, thumbnail) {
                var $thumbnail = $(thumbnail);
                if ($thumbnail.hasClass('is-selected')) {
                  $thumbnail.on('focus', function() {
                    $thumbnailProductGallery.flickity('selectCell', index);
                  })
                }
              })
          }
        } else {
          // If not on desktop, create standard thumbnail slider
          $thumbnailProductGallery.flickity({
            cellAlign: 'center',
            contain: true,
            groupCells: '80%',
            imagesLoaded: true,
            pageDots: false,
            prevNextButtons: $thumbnails.length > 5 ? galleryObject.thumbnailsArrows : false,
            asNavFor: $el[0],
            arrowShape: arrowShape
          });
        }
      } else {
        // If thumbnail slider is disabled, ensure thumbnails can still navigate product images
        $thumbnailProductGallery.find('.product-gallery__thumbnail').on('click', function(){
          var index = $(this).index();
          $el.flickity( 'selectCell', index );
        })
      }
    }
  },
  launchProductMedia: function(galleryObject) {

    // function to check if browser is IE
    var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);

    // Ensure product media libraries are present
    if (!isIE11) {
      window.Shopify.loadFeatures([
        {
          name: 'shopify-xr',
          version: '1.0',
        },
        {
          name: 'model-viewer-ui',
          version: '1.0',
        }
      ], onAllFeaturesLoaded);
    }

    // Enable looping for videos based off their section setting
    // Find videos where they are contained within this section
    // Set looping

    $.each(galleryObject.videoPlayers, function(index, player) {
      var $wrapper = $(player.elements.wrapper);

      if (galleryObject.sectionID != null) {
        var $section = $wrapper.parents('.shopify-section').attr('id', galleryObject.sectionID);
        var loopingEnabled = $section.find(galleryObject.element).find('.product-gallery__main').data('video-looping-enabled');
      } else {
        var loopingEnabled = galleryObject.element.find('.product-gallery__main').data('video-looping-enabled');
      }

      player.loop = loopingEnabled;
    })

    // 3D Model Setup
    var config = {
      // Default control list
      controls: [
        'zoom-in',
        'zoom-out',
        'fullscreen',
      ],
      focusOnPlay: false
    };

    function onAllFeaturesLoaded() {
      // If product media enabled look for model-viewer tags and setup
      galleryObject.models = [];
      var $models = $($('model-viewer', galleryObject.element));
      $models.each(function(index, model) {
        model = new Shopify.ModelViewerUI(model, config);
        galleryObject.models.push(model);
      })
    }
  },
  enableVideoOnHover: function($thumbnail) {
    var $html5Video = $thumbnail.find('[data-html5-video]');
    var $youtubeVideo = $thumbnail.find('[data-youtube-video]');
    var videoID;

    if ($html5Video.length > 0) {
      videoID = $html5Video.find('[data-plyr-video-id]').data('plyr-video-id');
    } else if ($youtubeVideo.length > 0) {
      videoID = $youtubeVideo.find('iframe').attr('id');
    }

    if (videoID) {
      $.each(secondaryMediaPlayers, function(index, player) {

        if (player.id == videoID || player.media.id == videoID) {
          player.toggleControls(false);
          player.muted = true;
          player.play();
        }
      })
    }

  },
  disableVideoOnHover: function($thumbnail) {
    var $html5Video = $thumbnail.find('[data-html5-video]');
    var $youtubeVideo = $thumbnail.find('[data-youtube-video]');
    var videoID;

    if ($html5Video.length > 0) {
      videoID = $html5Video.find('[data-plyr-video-id]').data('plyr-video-id');
    } else if ($youtubeVideo.length > 0) {
      videoID = $youtubeVideo.find('iframe').attr('id');
    }

    if (videoID) {
      $.each(secondaryMediaPlayers, function(index, player) {

        if (player.id == videoID || player.media.id == videoID) {
          if (player.playing) {
            player.pause();
          }
        }
      })
    }
  },
  loadPlyr: function(galleryObject, videos, showSecondaryMedia) {

    // Initializes Plyr library for HTML5 and YouTube videos in Product Gallery
    utilities.launchVideoPlayer(Plyr, galleryObject, videos, showSecondaryMedia);

    if (galleryObject) {
      // Adds plyr video id to video wrapper
      $.each(galleryObject.videoPlayers, function(index, player) {
        var source = player.provider;
        var id = player.id;
        var $video;

        if (source == 'html5') {
          $video = $(player.elements.wrapper).find('video');
          $video.attr('data-plyr-video-id', id);
        }
      })
    }
  },
  loadProductRecommendations: function() {

    /* NE compatibility
    * In NE, we will have a dynamic section ID that will need to be grabbed from the DOM like the other variables
    * var sectionID = $productRecommendationsContainer.data('section-id');
    Ends NE compatibility */

    var $productRecommendations = $('.product-recommendations');
    var $productRecommendationsContainer = $('[data-product-recommendations-container]');
    var productID = $productRecommendations.data('product-id');
    var limit = $productRecommendations.data('limit');
    var recommendationsURL = $productRecommendations.data('recommendations-url');
    var sectionEnabled = $productRecommendations.data('enabled');

    if(sectionEnabled && $('[data-product-sidebar]').length) {
      $productRecommendations.hide();
      $productRecommendationsContainer.show();
    } else {
      $productRecommendations.show();
      $productRecommendationsContainer.hide();
    }

    /* NE compatibility
    * In NE, this request url will need to be updated to reflect the dynamic section ID, 'section_id=' + sectionID
    Ends NE compatibility */

    // Build request URL
    var requestUrl = recommendationsURL + "?section_id=product-recommendations&limit=" + limit + "&product_id=" + productID;

    $.ajax({
      type: 'GET',
      url: requestUrl,
      success: function(data) {
        if (!sectionEnabled) {
          $productRecommendationsContainer.empty();
          return;
        }

        var $recommendedProductsElement = $(data).find('.product-recommendations').html();

        // Insert product list into the product recommendations container
        if(sectionEnabled && $('[data-product-sidebar]').length) {
          $productRecommendationsContainer.html($recommendedProductsElement);
        } else {
          $productRecommendations.html($recommendedProductsElement);
        }

        // Initialize shopify payment buttons
        if (Shopify.PaymentButton) {
          Shopify.PaymentButton.init();
        }

        collection.unload($('.shopify-section--recommended-products'));
        collection.init();
        // active swatch functionality for the recommended product quick shop
        product.productSwatches();

        
      }
    });
  },
  unload: function($target){
    // Destroy Flickity slider
    var $gallerySlider = $target.find('.product-gallery__main');
    var $thumbnailSlider = $target.find('.product-gallery__thumbnails');

    $gallerySlider.flickity('destroy');
    $thumbnailSlider.flickity('destroy');

    document.removeEventListener('lazybeforeunveil', product.enableZoom);
  }
}

/*============================================================================
  Product form
==============================================================================*/

var productFormListeners = {
  init: function(){

    $(document).on("click", ".minus", function(e) {
      var quantity = parseInt($(this).next("input").val());
      quantity -= 1;
      $(this).next("input").val(quantity);

      if (quantity == 0) {
        $(this).closest('li.cart_item').slideUp();
        setTimeout(ajaxSubmitCart, 500);
      } else {
      	$(this).next("input").trigger('change');
      }

      e.stopPropagation();
      e.preventDefault();
      return false;
    });

    $(document).on("click", ".plus", function(e) {
      var quantity = parseInt($(this).prev("input").val());
      quantity += 1;
      $(this).prev("input").val(quantity).trigger('change');

      e.stopPropagation();
      e.preventDefault();
      return false;
    });

    // Prevent the default behavior of the cart link when the quantity input is clicked
    $(document).on('click', '.cart__quantity input.quantity', function(e) {
      return false;
    });

    $(document).on("change", "#cart_form input[type='number']", function() {
      $("#cart_form").submit();
    });

    if ($('.tos_agree').length) {
      $('body').on('click', 'input[type="submit"]', function() {
        if($(this).parents('form').find('.tos_agree').length) {
          if ($(this).parents('form').find('.tos_agree').is(':checked')) {
            $(this).submit();
          } else {
            alert(Shopify.translation.agree_to_terms_warning);
            return false;
          }
        } else {
          $(this).submit();
        }
      });
    }
  },
  unload: function(){

  }
}

/*============================================================================
  Collection
==============================================================================*/

var collection = {
  init: function(){
    

    // Remove the Quick shop button and Fancybox data attributes on mobile devices
    if( Shopify.device.hasTouch.matches) {
      $('.quick_shop').remove();
      $('.quick_shop--list').removeAttr('data-fancybox data-src data-gallery');
    }

    // Display the Quick shop on desktop
    if (Shopify.media_queries.xlarge.matches) {
      $('.quick_shop, .quick_shop--list').fancybox({
        baseClass: 'quick-shop__lightbox product-' + product.id,
        hash: false,
        infobar : false,
        toolbar: false,
        loop: false,
        smallBtn : true,
        video: {
          autoStart: false
        },
        touch: false,
        mobile: {
          preventCaptionOverlap: false,
          toolbar: true,
          buttons: [
            "close"
          ]
        },
        afterShow: function(e) {
          // Grab the fancybox element that is being clicked
          var $fancyboxImageElement = $(this.opts.$orig);

          var $gallery = $('.' + $fancyboxImageElement.data('gallery'));
          var selector = $('.fancybox-is-open').find('.selector-wrapper select');
          var $productForm = $('.fancybox-is-open .js-product_section').find('.product_form');

          //Link sold out options when there is more than one option available
          
            var JSONData = $productForm.data('product');
            var productID = $productForm.data('product-id');
            var productSection = '.product-' + productID + ' .js-product_section';
            var swatchOptions = $productForm.find('.swatch-options .swatch');
            if (swatchOptions.length > 1){
              Shopify.linkOptionSelectors(JSONData, productSection);
            }
          

          selector.trigger('change');

          // Global variables
          var $gallery = $('.' + $fancyboxImageElement.data('gallery'));

          var galleryObject = {
            element: $gallery,
            thumbnailsEnabled: $gallery.parents('.product_section').data('thumbnails-enabled'),
            thumbnailsSliderEnabled: $gallery.parents('.product_section').data('thumbnails-slider-enabled'),
            thumbnailsPosition: $gallery.parents('.product_section').data('thumbnails-position'),
            thumbnailsArrows: $gallery.parents('.product_section').data('gallery-arrows-enabled'),
            slideshowAnimation: $gallery.parents('.product_section').data('slideshow-animation'),
            slideShowSpeed: $gallery.parents('.product_section').data('slideshow-speed'),
            activateZoom: $gallery.parents('.product_section').data('activate-zoom'),
            productMediaSupported: $gallery.parents('.product_section').data('product-media-supported'),
            loopingEnabled: $gallery.data('video-looping-enabled'),
            sectionID: null
          }

          product.enableSlider(galleryObject);

          if (galleryObject.productMediaSupported) {

            // Find videos within gallery section
            var thumbnailVideos;
            thumbnailVideos = $(galleryObject.element).find('[data-html5-video] video, [data-youtube-video]').get();

            product.loadPlyr(galleryObject, thumbnailVideos);
            product.launchProductMedia(galleryObject);
          }

          // Hover to zoom
          if (galleryObject.activateZoom) {
            document.addEventListener('lazybeforeunveil', product.enableZoom);
          }
        },
        afterClose: function() {
          // Grab the fancybox element that is being clicked
          var $fancyboxImageElement = $(this.opts.$orig);
          var $gallery = $('.' + $fancyboxImageElement.data('gallery'))

          // Find videos in gallery
          // Find IDs and match against player
          // If videos are playing, pause them
          var $videosInGallery = $gallery.find('.product-gallery__image[data-media-type="video"], .product-gallery__image[data-media-type="external_video"]');
          $videosInGallery.each(function(index, video) {
            var $iframeVideo = $(video).find('iframe');
            var iframeID = $iframeVideo.attr('id');
            var $html5Video = $(video).find('[data-html5-video]');
            var videoID = $html5Video.find('video').data('plyr-video-id');

            // Pause videos if IDs match
            if ($html5Video.length || $iframeVideo.length) {
              $.each(globalPlayersArray, function(index, player) {
                if (videoID) {
                  if (player.id == videoID && player.playing) {
                    player.pause();
                  }
                } else if (iframeID) {
                  if (player.media.id == iframeID && player.playing) {
                    player.pause();
                  }
                }
              })
            }
          });

          document.removeEventListener('lazybeforeunveil', product.enableZoom);
        }
      });
    }

    $('#sort-by').val($('#sort-by').data('default-sort'));

    $('body')
      .on('change', '#tag_filter, #sort-by', function() {
        var sortValue = $('#sort-by').val();
        var filterValue = $('#tag_filter').val();

        Shopify.queryParams.sort_by = sortValue;
        sortUrl = $.param(Shopify.queryParams);

        if (sortValue && filterValue){
          window.location = filterValue + '?sort_by=' + sortValue;
        } else if (sortValue && !filterValue) {
          window.location = '?' + sortUrl;
        } else if (!sortValue && filterValue){
          window.location = filterValue;
        }
    });

    
  },
  showSecondaryImage: function(){
    // Will be enabled on non-touch devices and screen sizes larger than 960px
    if (!Shopify.device.hasTouch.matches && Shopify.media_queries.larger.matches) {

      // Load Plyr for videos as secondary media
      var secondaryMediaVideos;
      secondaryMediaVideos = $('.thumbnail').find('[data-html5-video] video, [data-youtube-video]').get();

      // If recommended products available, check for data-plyr-loaded attribute
      var plyrLoaded = $('.shopify-section--recommended-products').find('.products').data('plyr-loaded');

      if (!plyrLoaded) {
        product.loadPlyr(galleryObject = null, secondaryMediaVideos, showSecondaryMedia = true);
      }

      $('.has-secondary-media-swap').off().on('mouseenter', function() {
        $(this).find('.image-element__wrap img').toggleClass('secondary-media-hidden');
        $(this).find('[data-html5-video]').toggleClass('secondary-media-hidden');
        $(this).find('.external-video__container').toggleClass('secondary-media-hidden');
        product.enableVideoOnHover($(this));
      });

      $('.has-secondary-media-swap').on('mouseleave', function() {
        $(this).find('.image-element__wrap img').toggleClass('secondary-media-hidden');
        $(this).find('[data-html5-video]').toggleClass('secondary-media-hidden');
        $(this).find('.external-video__container').toggleClass('secondary-media-hidden');
        product.disableVideoOnHover($(this));
      });
    }
  },
  unload: function($target){
    $target.find('.thumbnail').off('mouseenter mouseleave');
    $('body').off('change', '#tag_filter, #sort-by');
    $target.find('.quick_shop, .quick_shop--list').off('click.fb');
  }
}

/*============================================================================
  Map
==============================================================================*/

var map = {
  init: function(){
    if ($(".shopify-section--map .map, .shopify-section--page-contact-template .map, .shopify-section--page-details-template .map").hasClass('js-api-map')) {
      var mapsToLoad = [];

      //Create map settings array
      $('.map').each(function(i, obj) {
        mapsToLoad.push(this);
        mapsToLoad[i].sectionid = $(this).data('id');
        mapsToLoad[i].address = $(this).data('address');
        mapsToLoad[i].directions = $(this).data('directions-address');
        mapsToLoad[i].zoom = $(this).data('zoom');
        mapsToLoad[i].mapstyle = $(this).data('style');
        mapsToLoad[i].showpin = $(this).data('pin');
        mapsToLoad[i].apikey = $(this).data('api-key');
      });

      $.each(mapsToLoad, function(i, instance) {

        //Enable caching to avoid duplicate google maps files
        $.ajaxSetup({ cache: true });

        //Load maps script and find location coordinates
        $.getScript('https://maps.googleapis.com/maps/api/js?key=' + mapsToLoad[i].apikey).then(function() {
          map.findLocation(mapsToLoad[i]);
          $.ajaxSetup({ cache: false });
        });
      });
    }
  },

  findLocation:function(mapArray) {
    var geoLat;
    var geoLng;
    var geocoder = new google.maps.Geocoder();

    //Find and set coordinates
    geocoder.geocode( { 'address': mapArray.address }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {

        geoLat = results[0].geometry.location.lat();
        geoLng = results[0].geometry.location.lng();

        //Create map
        map.initMap(geoLat, geoLng, mapArray);

      }
    });
  },

  initMap:function(lat,lng, mapArray) {

    var location = {lat: lat, lng: lng};
    var styleJson = [];

    //Set style JSON
    if( mapArray.mapstyle == 'aubergine') {
      styleJson = [{"elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}];
    } else if(mapArray.mapstyle == 'retro') {
      styleJson = [{"elementType":"geometry","stylers":[{"color":"#ebe3cd"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#523735"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f1e6"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#c9b2a6"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"color":"#dcd2be"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#ae9e90"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#93817c"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#a5b076"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#447530"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#f5f1e6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fdfcf8"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f8c967"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#e9bc62"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#e98d58"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#db8555"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#806b63"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"transit.line","elementType":"labels.text.fill","stylers":[{"color":"#8f7d77"}]},{"featureType":"transit.line","elementType":"labels.text.stroke","stylers":[{"color":"#ebe3cd"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#b9d3c2"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#92998d"}]}];
    } else if(mapArray.mapstyle == 'silver') {
      styleJson = [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}];
    } else if(mapArray.mapstyle == 'night') {
      styleJson =  [{"elementType":"geometry","stylers":[{"color":"#242f3e"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#746855"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#242f3e"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#263c3f"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#6b9a76"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#38414e"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#212a37"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#9ca5b3"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#746855"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1f2835"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#f3d19c"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2f3948"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#17263c"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#515c6d"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#17263c"}]}];
    } else {
      styleJson = [];
    }

    //Create google maps link
    $('.js-map-link').attr('href', 'https://www.google.com/maps/place/' + mapArray.directions + '/@' + lat + ',' + lng );

    //Set map options
    var mapOptions = {
      zoom: mapArray.zoom,
      center: location,
      styles: styleJson,
      disableDefaultUI: false
    };

    //Create map
    var map = new google.maps.Map(document.getElementById(mapArray.sectionid), mapOptions);

    //Show pin
    if(mapArray.showpin == true) {
      var marker = new google.maps.Marker({
        position: location,
        map: map
      });
    }
  }
}

/*============================================================================
  Article
==============================================================================*/

var article = {
  init: function(){
    banner_image.init();
    banner.init();
    if(window.location.pathname.indexOf('/comments') != -1) {
      $('html,body').animate({scrollTop: $("#new-comment").offset().top-140},'slow');
    }
  },
  unload: function($target){
  }
}


/*============================================================================
  Utilities
==============================================================================*/

var plyrUtils = {
  playButtonIcon:'<button type="button" class="plyr__control plyr__control--overlaid" aria-label="Play, {title}" data-plyr="play"><svg class="play-icon-button-control" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23 20V40L39 29.4248L23 20Z" fill="#323232"/></svg><span class="plyr__sr-only">Play</span></button>',
  playButton: '<button type="button" class="plyr__controls__item plyr__control" aria-label="Play, {title}" data-plyr="play"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Pause</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span></button>',
  muteButton: '<button type="button" class="plyr__controls__item plyr__control" aria-label="Mute" data-plyr="mute"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span></button>',
  progressInput: '<div class="plyr__controls__item plyr__progress__container"><div class="plyr__progress"><input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek"><progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress><span role="tooltip" class="plyr__tooltip">00:00</span></div></div>',
  volume: '<div class="plyr__controls__item plyr__volume"><input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume"></div>',
  fullscreen: '<button type="button" class="plyr__controls__item plyr__control" data-plyr="fullscreen"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span></button>'
}

var controls = plyrUtils.playButtonIcon + '<div class="plyr__controls">' + plyrUtils.playButton + plyrUtils.progressInput + plyrUtils.muteButton + plyrUtils.volume + plyrUtils.fullscreen + '</div';

var globalPlayersArray = [];
var secondaryMediaPlayers;

var utilities = {
  listenForResize: function() {

    window.addEventListener('orientationchange', function ( event ) {
      setTimeout(function() {
        banner.init();
      }, 100);
    });

    // Setup a timer
    var resizeTimeout;

    // Listen for resize events
    window.addEventListener('resize', function ( event ) {

      // If timer is null, reset it to 66ms and run your functions.
      // Otherwise, wait until timer is cleared
      if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
          // Reset timeout
          resizeTimeout = null;
          // Run our resize functions
          announcement_bar.setPadding();
          animate_content.init();
          header.setHeaderPosition();
          banner_image.resetPadding();
          banner.init();
          header.dynamicDropdown();
          header.setPadding();
        }, 66);
      }
    }, false);
  },
  launchVideoPlayer: function(Plyr, galleryObject, videos, showSecondaryMedia) {

    if (galleryObject != null) {
      galleryObject.videoPlayers = Plyr.setup(videos, {
        controls: controls,
        fullscreen: {
          enabled: true,
          fallback: true,
          iosNative: true
        },
        storage: {
          enabled: false
        }
      });

      // Going through galleries array and pushing players into master array
      $.each(galleryObject.videoPlayers, function(index, player) {
        globalPlayersArray.push(player);
      });
    } else if (showSecondaryMedia == true) {
      // Collection page/Recommended Products secondary media
      secondaryMediaPlayers = Plyr.setup(videos, {
        controls: controls,
        fullscreen: {
          enabled: true,
          fallback: true,
          iosNative: true
        },
        storage: {
          enabled: false
        }
      })

      // Add data-attribute 'plyr-loaded="true"' to videos container
      $('.shopify-section--recommended-products').find('.products').attr('data-plyr-loaded', 'true');

      $.each(secondaryMediaPlayers, function(index, player) {
        globalPlayersArray.push(player);
      })

      // Adds plyr video id to video wrapper
      $.each(globalPlayersArray, function(index, player) {
        var source = player.provider;
        var id = player.id;
        var $video;

        if (source == 'html5') {
          $video = $(player.elements.wrapper).find('video');
          $video.attr('data-plyr-video-id', id);
        }
      })

      return secondaryMediaPlayers;
    }
  },
  enableDisclosure: function() {

    var $disclosure = $('[data-disclosure]');
    var $toggle = $('[data-disclosure-toggle]');
    var $disclosureWrap = $('.disclosure__list-wrap');

    //Check if current opened menu is offscreen
    function checkOffScreen($openedToggle) {
      if($openedToggle.siblings('.disclosure__list-wrap').is(':off-right')) {
        $openedToggle.siblings('.disclosure__list-wrap').addClass('disclosure--left');
      }
    }

    function closeDisclosures(ignoreTarget, currentTarget) {
      if(ignoreTarget === true) {
        $toggle.not(currentTarget).removeClass('is-clicked');
        $toggle.not(currentTarget).attr('aria-expanded', 'false');
      } else {
        $toggle.removeClass('is-clicked');
        $toggle.attr('aria-expanded', 'false');
      }

      $disclosureWrap.removeClass('disclosure--left');
    }

    //Close menus on ESC
    $('body').on('keyup', function(e) {
      if(e.which == '27') {
        closeDisclosures();
      }
    });

    //Close menus on hoverout
    $disclosure.on('mouseleave', function(e) {
      closeDisclosures();
    });

    //On click/focus event for toggling options
    $toggle.on('mouseenter focus', function(e) {

      //Close all other menus
      closeDisclosures(true, this);

      var $target = $(e.currentTarget);
      $target.attr('aria-expanded', 'true').addClass('is-clicked');
      checkOffScreen($target);
    });

    //Mobile toggle logic
    $toggle.on('touchstart', function(e) {
      if (Shopify.media_queries.medium.matches || !Shopify.device.hasTouch.matches) {
        var $target = $(e.currentTarget);

        closeDisclosures(true, this);

        if(!$target.hasClass('is-clicked')) {
          $target.attr('aria-expanded', 'true').addClass('is-clicked');
          checkOffScreen($target);
        } else {
          $target.attr('aria-expanded', 'false').removeClass('is-clicked');
          $disclosureWrap.removeClass('disclosure--left');
        }
      }
    })
  },
  addImageDimension: function(imageUrl, size) {
    var insertPosition = imageUrl.lastIndexOf(".");
    return imageUrl.substring(0, insertPosition) + size + imageUrl.substring(insertPosition);
  },
  unload: function() {
    $('[data-disclosure]').off();
    $('[data-disclosure-toggle]').off();
    $('.disclosure__list-wrap').off();
  }
}

var toggleSidebarBlocks = function($toggle){
  if($toggle.next('ul').is(':visible')) {
    $toggle.next('ul').hide();
    $toggle.children('span').html('+');
    $toggle.attr('aria-expanded', false);
  } else {
    $toggle.next('ul').show();
    $toggle.children('span').html('-');
    $toggle.attr('aria-expanded', true);
  }
}

var toggleSidebarMenus = function($toggle){
  var $content = $toggle.next('ul');
  $content.slideToggle();
  $toggle.toggleClass('active');
  $toggle.attr('aria-expanded', $toggle.attr('aria-expanded') == 'true' ? 'false' : 'true');
}

var animate_content = {
  init: function() {
    // added to the listenForResize method
    if (Shopify.media_queries.large.matches || $(window).width() == 0) {
      $(".animate_right").waypoint(function() {
        $(this.element).addClass("animated fadeInRight");
      }, { offset: '80%' });
      $(".animate_left").waypoint(function() {
        $(this.element).addClass("animated fadeInLeft");
      }, { offset: '80%' });
      $(".animate_up").waypoint(function() {
        $(this.element).addClass("animated fadeInUp");
      }, { offset: '80%' });
      $(".animate_in").waypoint(function() {
        $(this.element).addClass("animated fadeIn");
      }, { offset: '80%' });
      $(".animate_down").waypoint(function() {
        $(this.element).addClass("animated fadeInDown");
      }, { offset: '80%' });
    }
  }
}

/*============================================================================
  Cart
==============================================================================*/

var cart = {
  init: function(){
    $("#address_country").val($("#address_country").data("default")).change();
  },
  unload: function(){
  }
}

/*============================================================================
  Search autocomplete
==============================================================================*/

var searchAutocomplete = {
  vars: {
    term: '',
    searchPath: Shopify.routes.search_url,
    displayTimer: ''
  },
  init: function() {
    this.unload();

    // Move mobile search out of mm-slider content for proper overlay display
    $('.mobile-search').appendTo('body');

    // Focus state to display search results
    $('[data-autocomplete-true]').on('focus', function() {
      $(this).parents('[data-autocomplete-true]').find('.search__results-wrapper').show();
    });

    // Clicking outside makes the results disappear.
    $(document).on('click focusout', function(e) {
      if (Shopify.media_queries.large.matches) {
        var searchForm = $(e.target).parents('.search__form');

        if (searchForm.length === 0) {
          $('[data-autocomplete-true] .search__results-wrapper').hide().removeClass('results-found');
        }
      }
    });

    $('[data-dropdown-rel="search"], [data-autocomplete-true] input').on('click touchstart', function(e) {
      if (Shopify.media_queries.medium.matches) {
        var formType = $(this).closest('form').find('[name="type"]').val();
        var position = $(document).scrollTop();
        searchAutocomplete.showMobileSearch(formType, position);
      }
    });

    $('.search-close').on('click touchstart', function() {
      $('body').removeClass('is-active');
      $('.dropdown_link').removeClass('active_link');
      $('.dropdown_container').hide();
      $('.mobile_nav').find('div').removeClass('open');
      $('[data-autocomplete-true] .search__results-wrapper').hide().removeClass('results-found');
    })

    // Submit wildcard searches
    if (Shopify.media_queries.large.matches) {
      $('[data-autocomplete-true] form').on('submit', function(e) {
        e.preventDefault();
        var formValue = $(this).find('input[name="q"]').val();
        var cleanFormValue = encodeURI(formValue);

        if ($(this).find('[name="type"]').length > 0) {
          var searchType = $(this).find('[name="type"]').val();
        } else {
          var searchType = Shopify.theme_settings.search_option;
        }

        if (cleanFormValue == null) {
          window.location.href = Shopify.routes.search_url + '?type=' + searchType;
        } else {
          window.location.href = searchAutocomplete.vars.searchPath + '?type=' + searchType + '&q=' + cleanFormValue + '*';
        }
      });
    }

    $('[data-autocomplete-true] form').each(function() {
      var $this = $(this);
      var input = $this.find('input[name="q"]');

      // Adding a list for showing search results.
      $('<div class="search__results-wrapper"><ul class="search__results"></ul></div>').appendTo($this);

      input.attr('autocomplete', 'off').on('input', function() {
        clearTimeout(searchAutocomplete.vars.displayTimer);
        if ($(this).val().length > 3) {
          searchAutocomplete.vars.term = $(this).val();
          searchAutocomplete.getResults(searchAutocomplete.vars.term, $this);
        } else {
          $('[data-autocomplete-true] .search__results-wrapper').hide().removeClass('results-found');
        }
      });

    });
  },
  getResults: function(term, $this) {

    if ($this.find('[name="type"]').length > 0) {
      var searchType = $this.find('[name="type"]').val();
    } else {
      var searchType = Shopify.theme_settings.search_option;
    }

    jQuery.getJSON("/search/suggest.json", {
      "q": term,
      "resources": {
        "type": searchType,
        "limit": Shopify.theme_settings.search_items_to_display,
        "options": {
          "unavailable_products": "last",
          "fields": "title,body,variants.title,vendor,product_type,tag"
        }
      }
    }).done(function(response) {

      var suggestions = [
        response.resources.results.products,
        response.resources.results.pages,
        response.resources.results.articles
      ];

      var filteredResults = [];

      // Store results in array
      $.each(suggestions, function(index, suggestion) {
        if (suggestion !== undefined && suggestion.length > 0) { // Ensure suggestion exists
          filteredResults.push(suggestion)
        }
      })

      // Display results
      searchAutocomplete.vars.displayTimer = setTimeout(function() {
        searchAutocomplete.displayResults(filteredResults[0], $this);
      }, 500)

    });
  },
  displayResults: function(results, $this) {

    var $resultsWrapper = $this.find('.search__results-wrapper');
    var $resultsList = $this.find('.search__results');
    $resultsWrapper.show();
    $resultsList.empty();

    if ($this.find('[name="type"]').length > 0) {
      var searchType = $this.find('[name="type"]').val();
    } else {
      var searchType = Shopify.theme_settings.search_option;
    }

    if (results && results.length > 0) {
      $.each(results, function(index, result) {

        var link = $('<a tabindex="0"></a>').attr('href', result.url);
        if (Shopify.routes.root_url !== '/') {
          link = $('<a tabindex="0"></a>').attr('href', Shopify.routes.root_url + result.url);
        }

        // If result is a product
        if (result['price']) {

          function formatPrice(price) {
            if (Currency.display_format === 'money_with_currency_format') {
              return '<span class="money">' + Currency.symbol + price + ' ' + Currency.iso_code + '</span>';
            } else {
              return '<span class="money">' + Currency.symbol + price + '</span>';
            }
          }

          if (result.available === true) {
            if (result.compare_at_price_max > result.price_max || result.compare_at_price_min > result.price_min ) {
              var itemPrice = formatPrice(result.price) + ' <span class="was_price">' + formatPrice(result.compare_at_price_max) + '</span>';
            } else {
              if (result.price > 0) {
                if (result.price_min != result.price_max) {
                  var itemPrice = Shopify.translation.product_from + ' ' + formatPrice(result.price);
                } else {
                  var itemPrice = formatPrice(result.price);
                }
              } else {
                var itemPrice = Shopify.theme_settings.free_text;
              }
            }
          } else {
            var itemPrice = Shopify.translation.product_sold_out;
          }

          // if result has an image
          if (result['image']) {
            link.append('<div class="thumbnail"><img class="lazyload lazyload--fade-in" src="' + utilities.addImageDimension(result['image'], '_300x') + '" /></div>');
          }

          link.append('<div class="title">' + result.title + '<br><span class="item-pricing price">'+ itemPrice +'</span></div>');

          // If result is an article
        } else if (result['summary_html']) {
          if (result.image != 'NULL') {
            link.append('<div class="thumbnail"><img class="lazyload lazyload--fade-in" src="' + utilities.addImageDimension(result['image'], '_300x') + '" /></div>');
          }
          link.append('<div class="title">' + result.title + '<br><span class="item-description">'+ result.summary_html.replace(/(<([^>]+)>)/ig,"").slice(0, 25) +' </span></div>');

          // If result is a page
        } else if (result['published_at']) {
          link.append('<div class="title">' + result.title + '<br><span class="item-description">'+ result.body.replace(/(<([^>]+)>)/ig,"").slice(0, 25) +' </span></div>');

        }

        // Wrap link and append to list
        link.wrap('<li class="item-result"></li>');
        $resultsList.append(link.parent());
      });

      if (Currency.native_multi_currency && Currency.shipping_calculator) {
        currencyConverter.init();
      }

      $resultsList.parents('.search__results-wrapper').addClass('results-found');

      $resultsList.prepend('<li class="all-results"><span class="title see-all"><a href="' + this.vars.searchPath + '?type=' + searchType + '&q=' + this.vars.term + '*">' + Shopify.translation.all_results + '<span class="icon-arrow-right"></span></a></span></li>');

    } else {
      // if no results
      var noResults = '<li class="item-result"><span class="no-results title">' + Shopify.translation.no_results + '</span></li>';
      $resultsList.append(noResults);
      $resultsList.parents('.search__results-wrapper').removeClass('results-found');
    }

    $resultsList.show();

  },
  showMobileSearch: function(formType, position) {
    $('body').css('max-height', window.innerHeight);
    $('.mobile-search').fadeIn(200);

    if(/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
      $('.mobile-search input#q').focus();
    } else {
      //Set delay to ensure focus triggers on android
      setTimeout(function() {
        $('.mobile-search input#q').focus();
      }, 205);
    }

    document.body.style.position = 'fixed';
    document.body.style.top = '-' + position + 'px';
    $('.mobile-search').css('top', position)

    var searchHeight = window.innerHeight - 60; //Full screen height - form height
    $('.mobile-search .search__results-wrapper').css('max-height', searchHeight);

    if (formType) {
      $('.mobile-search [name="type"]').val(formType);
    } else {
      $('.mobile-search [name="type"]').val(Shopify.theme_settings.search_option);
    }

    $('.search-form .search-close').on('click touchstart', function(e) {
      e.preventDefault();
      e.stopPropagation();
      searchAutocomplete.hideMobileSearch(position);
      $('[data-autocomplete-true] .search__results-wrapper').hide().removeClass('results-found');
    });
  },
  hideMobileSearch: function(position) {
    $('body').css('max-height', 'none');

    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, position);

    $('.mobile-search').fadeOut(200);
    $('.mobile-search [name="q"]').val('');

    $('body').off('focus', '.search-form .close-search');
    $('body').off('focus', '.search-form .submit-search');
  },
  unload: function() {
    $('body').off('focus', '[data-autocomplete-true] input');
    $('input[name="q"]').off();
    $('[data-dropdown-rel="search"], [data-autocomplete-true] input').off();
    $('.search__results-wrapper').remove();
  }
}

/*============================================================================
  Responsive media
==============================================================================*/

function enableResponsiveVideoWrapper() {
  // Wraps YouTube and Vimeo iframes in Plyr wrapper
  // Does not target iframes already embedded in Plyr wrapper (video sections and product galleries)
  $('iframe[src*="youtube.com"]:not(.plyr__video-wrapper iframe[src*="youtube.com"])').wrap('<div class="plyr__video-embed"></div>');
  $('iframe[src*="vimeo.com"]:not(.plyr__video-wrapper iframe[src*="vimeo.com"])').wrap('<div class="plyr__video-embed"></div>');
}

/*============================================================================
  Start of cart-related functionality
==============================================================================*/

  function ajaxSubmitCart() {
    $cart = $("#cart");
    $.ajax({
      url: '/cart/update.js',
      dataType: 'json',
      cache: false,
      type: 'post',
      data: $cart.serialize(),
      success: function (data) {
        refreshCart(data);
      }
    });
  }

  function ajaxUpdateCart(lineID, quantity, parent) {
    $.ajax({
      url: '/cart/change.js',
      dataType: 'json',
      cache: false,
      type: 'post',
      data: { quantity: quantity, line: lineID },
      success: function (data) {
        refreshCart(data);

        var lineIDIndex = lineID - 1;
		    var $input = parent.find("input[data-line-id='" + lineID + "']");

        //check to see if there are correct amount of products in array
        if (typeof data.items[lineIDIndex] === "undefined"){
          var updated_quantity = 0;
        } else {
          var updated_quantity = data.items[lineIDIndex].quantity;
        }

        if(quantity > 0 && quantity != updated_quantity) {
          if (updated_quantity == 1) {
            items_left_text = Shopify.translation.items_left_count_one;
          } else {
            items_left_text = Shopify.translation.items_left_count_other;
          }

          $('.warning--quantity').remove();

          var warning = '<div class="warning warning--quantity animated bounceIn">' + updated_quantity + ' ' + items_left_text + '</div>';

          $input.parent().next().append(warning);
          $input.val(updated_quantity);
        }
      }
    });
  }

  function refreshCart(cart) {
    $cartBtn = $(".cart-button span");
    if ($cartBtn && $cartBtn.length) {
      var value = $cartBtn.text() || '0';
      var cart_items_html = "";
      var $cart = $("#cart ul");

      $cartBtn.text(value.replace(/[0-9]+/,cart.item_count));
      $cart.find('li:not(:first)').remove();

      if (cart.item_count == 0) {
        $cart.append('<li class="empty_cart">' + Shopify.translation.empty_cart + '</li>');
      } else {
        $.each(cart.items, function(index, item) {

          var line_id = index + 1;

          // Discounts logic
          if (item.discounts.length) {
            var discountAmount = Shopify.formatMoney(item.discounts[0].amount, $('body').data('money-format'));
            var title = item.discounts[0].title;
            discountMessage = '<span class="notification-discount"><strong>' + Shopify.translation.cart_discount + ':</strong> ' + title + ' (-<span class="money">' + discountAmount + '</span>)</span>';
          }

          cart_items_html += '<li>' + '<a class="cart__item" href="' + item.url + '">';

          if (item.image) {
            cart_items_html += '<div class="cart__image">' + '<img src="' + item.image.replace(/(\.[^.]*)$/, "_medium$1").replace('http:', '') + '" alt="' + htmlEncode(item.title) + '" />' + '</div>';
          }

          cart_items_html += '<div class="cart__info">' + '<div class="cart__description">' + item.title;

          if (item.price > item.final_price) {
          	//puts the slash through the old item price
            var itemPrice = '<span class="money">' + Shopify.formatMoney(item.final_line_price, $('body').data('money-format')) + '</span>' + ' <span class="was_price money">' + Shopify.formatMoney(item.original_line_price, $('body').data('money-format')) + '</span>';
            cart_items_html += '<div class="cart__price">' + itemPrice + '</div>' + discountMessage +'</div>'
          } else {
            var itemPrice = '<span class="money">' + Shopify.formatMoney(item.price, $('body').data('money-format')) + '</span>';
            cart_items_html += '<div class="cart__price">' + itemPrice + '</div>';
          }

          cart_items_html += '</div>' + '<div class="cart__quantity">' + '<span class="icon-minus minus"></span>' + '<input type="number" min="0" class="quantity" name="updates[]" id="updates_' + item.id + '" value="' + item.quantity +'"  data-line-id="' + line_id +'" />' + '<span class="icon-plus plus"></span>' + '</div></div></a>';

          if(item.properties) {
            $.each(item.properties, function(title, value) {
              if (value) {
                cart_items_html += '<div class="line-item">' + title +': ' + value + '</div>';
              }
            });
          }
        });

        var cartDiscounts = cart.cart_level_discount_applications;
        var cartDiscountMessage = "";

        for (i=0; i < cartDiscounts.length; i++) {
          var amount = Shopify.formatMoney(cartDiscounts[i].total_allocated_amount, $('body').data('money-format'));
          var title = cartDiscounts[i].title;
          cartDiscountMessage = '<p class="mm-counter price mm-discount-label mm-listitem__text">' + title + '<span>' + '(- <span class="money">' + amount + '</span>)' + '</span>' + '</p>';
        }

        if (cart.cart_level_discount_applications.length > 0) {
          cart_items_html += '<li class="mm-label mm-listitem">' + cartDiscountMessage + '</li>'
        }

        cart_items_html += '<li class="mm-label">' + '<a href="/cart" class="cart__item-subtotal">' + '<span><strong>' + Shopify.translation.subtotal + '</strong></span>' + '<span class="mm-counter price"><span class="money">' + Shopify.formatMoney(cart.total_price, $('body').data('money-format')) + '</span></span>' + '</a>' + '</li>' + '<li class="mm-subtitle">';

        

        

        cart_items_html += '<span class="mm-action_buttons mm-listitem__text"><a href="' + Shopify.theme_settings.cart_url + '" class="action_button edit_cart left">' + Shopify.translation.edit_cart + '</a>' + '<input type="submit" class="action_button right" value="' + Shopify.translation.checkout + '"/>' + '</span>' + '</li>';

        $cart.append(cart_items_html);
        $cart.find('li.cart_item:last').addClass('last_cart_item');
      }
    }
  }

// Document ready
$(function() {

  utilities.listenForResize();
  utilities.enableDisclosure();

  window.lazySizesConfig = window.lazySizesConfig || {};

  lazySizesConfig.expand = 300;
  lazySizesConfig.loadHidden = false;

  $("body").on("click", '.continue', function() {

    var cart = $("#cart").data( "mmenu" );
    cart.close();

    var nav = $("#nav").data( "mmenu" );
    nav.close();

  });

  // Search submit trigger event
  $('.search-form .submit-search').on('click touchstart', function(e) {
    $(this).parents('form').submit();
  });

  // Offscreen check for dropdown menus

  $('.sub-menu').on('mouseenter', function(){
    if($(this).find('.dropdown').is(':off-right')) {
      $(this).find('.dropdown').addClass("dropdown--align");
    }
  });

  $('.sub-menu').on('mouseleave', function(){
    if($(this).find('.dropdown').hasClass('dropdown--align')) {
      $(this).find('.dropdown').removeClass("dropdown--align");
    }
  });

  // Accessibility tabbing
  header.openDropdown();

  // Load Accordions
  var allPanels = $('.accordion > dd');

    for(i = 0; i < allPanels.length; i++) {
    $(allPanels[i]).css('height', $(allPanels[i]).outerHeight());
  }

    allPanels.hide();

  $('.accordion > dt > a').click(function() {
    if(!$(this).parent().next().is(':visible')) {
      allPanels.slideUp();
      $(this).parent().next().slideDown();
      $('.accordion small.right').html('&#9668;');
      $(this).find('small.right').html('&#9660;');
    }

    return false;
  });

  $('.accordion dd:first-of-type').show();

  //Load sections
  banner_image.init();
  header.init();
  banner.init();
  map.init();
  videoTheme.init();
  product.init();
  collection.init();
  cart.init();
  productFormListeners.init();
  featured_promotions.init();
  animate_content.init();

  if (Shopify.theme_settings.enable_autocomplete) {
    searchAutocomplete.init();
  }

  var $jsSections = $('.shopify-section[class*=js]');

  // Loop through sections with js classes and load them in
  var $jsSectionNames = $jsSections.each(function () {
    for (var i = 0; i < this.classList.length; i++) {
      if (this.classList[i].substring(0, 2) === "js"){
        var triggerClass = this.classList[i];
        if (Shopify.theme[triggerClass]) {
          //console.log('Section: ' + triggerClass + ' has been loaded.')
          Shopify.theme[triggerClass].init($(this));
        } else {
          //console.warn('Uh oh, ' + triggerClass + ' is referenced in section schema class, but can not be found. Make sure "z__' + triggerClass + '.js" and Shopify.theme.' + triggerClass + '.init() function exists.');
        }

      }
    }
  });

  objectFitImages();

  if (Currency.native_multi_currency && Currency.shipping_calculator) {
    currencyConverter.init();
  }

  // Initialize Responsive Videos
  enableResponsiveVideoWrapper();

  var $header = $(".feature_image .header");

  $(document).on('click', '.search__submit', function(e) {
    $(this).parent('form').submit();
  });

  $(document).on('click', '#search-toggle, .search__close', function(e) {
    e.stopPropagation();
    e.preventDefault();

    $('.search__form').css('padding-top', $('.header').height() + 50 + 'px');

    if($('#search').is(":visible") && $(window).scrollTop() == 0) {
      
        $header.removeClass('header-background--true');
      
    } else {
      $header.addClass('header-background--true');
    }

    if($('#search').hasClass("fadeIn")) {
      $('#search').removeClass("fadeIn").hide();
    } else {
      $('#search').show().addClass("fadeIn").find('input').focus();
    }

    $(document).on('click', function(e) {
      var searchForm = $(e.target).parents('.search__form');

      if(searchForm.length === 0) {
        $('#search').removeClass("fadeIn").hide();
        $(this).off();
      }
    });
  })

  // Backwards compatibility with flexslider
  $('.slider, .flexslider:not(.homepage_slider)').find('li').unwrap();
  $('.slider, .flexslider:not(.homepage_slider)').flickity({
    pageDots: false,
    autoPlay: 6000,
    imagesLoaded: true,
    lazyLoad: 2,
  });

  var arrowShape = '<svg class="flickity-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.46 24.09"><title>flickity-arrow</title><polygon points="1.41 24.09 0 22.68 10.63 12.05 0 1.41 1.41 0 13.46 12.05 1.41 24.09"/></svg>'

  $('.slider, .flexslider').find('.flickity-prev-next-button.next .flickity-button-icon').replaceWith(arrowShape);

  $('.slider, .flexslider').find('.flickity-prev-next-button.previous').addClass('arrow-is-inverse').find('.flickity-button-icon').replaceWith(arrowShape);


  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches == false) {
    //Lightbox default options
    //https://fancyapps.com/fancybox/3/docs/#options
    $.fancybox.defaults.animationEffect = 'fade';
    $.fancybox.defaults.transitionEffect = 'slide';
    $.fancybox.defaults.hash = false;
    $.fancybox.defaults.infobar = false;
    $.fancybox.defaults.toolbar = false;
    $.fancybox.defaults.arrows = false;
    $.fancybox.defaults.loop = true;
    $.fancybox.defaults.smallBtn = true;
    $.fancybox.defaults.wheel = false;
    $.fancybox.defaults.live = false;
    $.fancybox.defaults.zoom = false;
    $.fancybox.defaults.btnTpl['smallBtn'] = '<a title="Close" data-fancybox-close class="fancybox-item fancybox-close ss-icon" href="javascript:;"></a>';
    $.fancybox.defaults.mobile.preventCaptionOverlap = false;
    $.fancybox.defaults.mobile.toolbar = true;
    $.fancybox.defaults.mobile.buttons = ['close'];
    $.fancybox.defaults.mobile.clickSlide = 'close';
    $.fancybox.defaults.mobile.clickContent = 'zoom';
    $.fancybox.defaults.afterLoad = function(instance, slide) {
      if (instance.current.type == 'image'){
        slide.$content.wrapInner( "<div class='fancybox-image-wrap'></div>" )
      }
      if (instance.group.length > 1){
        slide.$content.find('.fancybox-image-wrap').append('<a title="Previous" class="fancybox-item fancybox-nav fancybox-prev ss-icon" href="javascript:;" data-fancybox-prev><span class="icon-circle-left"></span></a><a title="Next" class="fancybox-item fancybox-nav fancybox-next ss-icon" href="javascript:;" data-fancybox-next><span class="icon-circle-right"></span></a>')
      }
    }

    // Lightbox effect enabled if reduce motion is not enabled
    $('.lightbox').fancybox();

    // Gallery fancybox initialization
    $('[rel="gallery"]').fancybox({
      baseClass: "gallery-section__lightbox",
      clickContent: "nextOrClose"
    });

    // // Trigger fancybox flickity product gallery images
    $('.product-gallery__main .product-gallery__image .fancybox').fancybox({
      baseClass: 'product-section__lightbox',
      clickContent: "nextOrClose",
      beforeShow: function() {
        // Grab the fancybox element that is being clicked
        var $fancyboxImageElement = $(this.opts.$orig);

        // Add alt to fancybox image
        var imageAlt = $fancyboxImageElement.data('alt');
        $('.fancybox-image').attr('alt', imageAlt);
      }
    });
  }

  if (Shopify.theme_settings.newsletter_popup) {
    newsletter_popup.init();
  }

  

  Shopify.queryParams = {};
  if (location.search.length) {
    for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
      aKeyValue = aCouples[i].split('=');
      if (aKeyValue.length > 1) {
        Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
      }
    }
  }

  var tabs = $('ul.tabs');
  tabs.each(function(i) {
    var tab = $(this).find('> li > a');
    tab.click(function(e) {
      var contentLocation = $(this).attr('href');
      if(contentLocation.charAt(0)=="#") {
        e.preventDefault();
        tab.removeClass('active');
        $(this).addClass('active');
        $(this).parents('ul.tabs').next().find(contentLocation).show().css({'display': 'block'}).addClass('active').siblings().hide().removeClass('active');
      }
    });
  });

  //Sidebar toggle
  $(document).on('click', '.menu-toggle', function(e) {
    toggleSidebarMenus($(this));
  });

  var sidebarTouched = false;
  $(document).on('touchstart', '.toggle', function(e) {
    if (Shopify.media_queries.medium.matches || $(this).parents('.sidebar').hasClass('toggle-all--true')) {
      var $toggle = $(this);
      toggleSidebarBlocks($toggle);
      sidebarTouched = true;
      e.preventDefault();
      return false;
    }
  });
  $(document).on('click', '.toggle', function(e) {
    if (Shopify.media_queries.medium.matches || $(this).parents('.sidebar').hasClass('toggle-all--true')) {
      var $toggle = $(this);
      if (!sidebarTouched) {
        toggleSidebarBlocks($toggle);
        e.preventDefault();
        return false;
      }
    }
  });


  if ($("#contact_form").length) {
    var contactFormResponse = url('?customer_posted');
    if (contactFormResponse){
      $('html,body').animate({
        scrollTop: $("#contact_form").offset().top
      });
    }
  }

  
    $('.swatch :radio').change(function() {
      var optionIndex = $(this).closest('.swatch').attr('data-option-index');
      var optionValue = $(this).val();
      $(this)
        .closest('form')
        .find('.single-option-selector')
        .eq(optionIndex)
        .val(optionValue)
        .trigger('change');
    });
  

  $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
  });

  $('body').on("change", "#cart input.quantity", function() {
    ajaxUpdateCart($(this).data('line-id'), $(this).val(), $(this).parents('#cart'));
  });

  $('body').on("change", "#cart #cart-note", function() {
    ajaxSubmitCart();
  });

  
    $(document).on('click', '.ajax-submit', function(e) {
      e.preventDefault();
      var $addToCartForm = $(this).closest('form');
      var $addToCartBtn = $addToCartForm.find('.add_to_cart');

      $.ajax({
        url: '/cart/add.js',
        dataType: 'json',
        type: 'post',
        cache: false,
        data: $addToCartForm.serialize(),
        beforeSend: function() {
          $addToCartBtn.attr('disabled', 'disabled').addClass('disabled');
          $addToCartBtn.find('span').removeClass("zoomIn").addClass('animated zoomOut');
        },
        success: function(itemData) {
          $addToCartBtn.find('span').text(Shopify.translation.product_add_to_cart_success).removeClass('zoomOut').addClass('fadeIn');

          window.setTimeout(function(){
            $addToCartBtn.removeAttr('disabled').removeClass('disabled');
            $addToCartBtn.find('span').addClass("fadeOut").text($addToCartBtn.data('label')).removeClass('fadeIn').removeClass("fadeOut").addClass('zoomIn');
          }, 1000);

          $.ajax({
            url: '/cart.js',
            dataType: "json",
            cache: false,
            success: function(cart) {
              refreshCart(cart);
              window.setTimeout(function(){ $.fancybox.close(); $('.cart-button').click(); }, 500);
            }
          });
        },
        error: function(XMLHttpRequest) {
          var response = eval('(' + XMLHttpRequest.responseText + ')');
          response = response.description;
          $('.warning').remove();

          var warning = '<p class="warning animated bounceIn">' + response.replace('All 1 ', 'All ') + '</p>';
          $addToCartForm.after(warning);
          $addToCartBtn.removeAttr('disabled').removeClass('disabled');
          $addToCartBtn.find('span').text(Shopify.translation.product_add_to_cart).removeClass('zoomOut').addClass('zoomIn');
        }
      });

      return false;
    });
  



  // Variable returns true/false if reduced motion is enabled
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Find instances of flexslider and pause slideshow
  if (reducedMotion) {
    $('.flexslider').flexslider('pause');
  }

});


selectCallback = function(variant, selector) {
  var $product = $('.product-' + selector.product.id);
  var $notify_form = $('.notify-form-' + selector.product.id);
  var $productForm = $('.product_form', $product);
  var variantInventory = $productForm.data('variant-inventory');

  var $notifyFormInputs = $('.notify_form__inputs');

  var notifyEmail = "Email address";
  var notifyEmailValue = "";
  var notifySend = "Send";

  if(variant) {
    if(variant.name != null) {
      var notifyMessage = $notifyFormInputs.data('notify-message') + ' - ' + variant.name;
    } else {
      var notifyMessage = $notifyFormInputs.data('notify-message');
    }
  }

  if ($notifyFormInputs.hasClass('customer--true')) {
    var notifyCustomerEmail = $notifyFormInputs.data('customer-email');
    var notifyEmailInput = '<input required type="email" class="notify_email" name="contact[email]" id="contact[email]" value="'+ notifyCustomerEmail +'" />'
  } else {
    var notifyEmailInput = '<input required type="email" class="notify_email" name="contact[email]" id="contact[email]" placeholder="'+ notifyEmail +'" value="'+ notifyEmailValue +'" />';
  }
  var notifyFormHTML = notifyEmailInput+'<input type="hidden" name="challenge" value="false" /><input type="hidden" name="contact[body]" class="notify_form_message" data-body="'+ notifyMessage +'" value="'+ notifyMessage +'" /><input class="action_button" type="submit" value="'+ notifySend + '" style="margin-bottom:0px" />';

  // Image variant feature
  if (variant && variant.featured_image && $product.is(":visible")) {
    var $sliders = $('.product-gallery__main', $product);
    $sliders.each(function() {
      var $slider = $(this);
      var $sliderInstance = Flickity.data(this);
      if ($slider.is(":visible") && $sliderInstance != undefined ) {
        var index = $('[data-image-id="' + variant.featured_image.id + '"]').data('index');
        $sliderInstance.select( index, false, true );
      }
    });
  }

  if (variant) {
    if (variantInventory) {
      variantInventory.forEach(function(v){
        if (v.id === variant.id) {
          variant.inventory_quantity = v.inventory_quantity;
          variant.inventory_management = v.inventory_management;
          variant.inventory_policy = v.inventory_policy;
        }
      });
    }

    $('.sku span', $product).text(variant.sku);

    
      for (var i=0,length=variant.options.length; i<length; i++) {
        var radioButton = $productForm.find('.swatch[data-option-index="' + escape(i) + '"] :radio[value="' + variant.options[i].replace(/\"/g,'\\"') +'"]');
        if (radioButton.length) {
          radioButton.get(0).checked = true;
        }
      }
    
  }

  if (variant && variant.available == true) {

    if(variant.price < variant.compare_at_price){
      $('.was_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.compare_at_price, $('body').data('money-format')) + '</span>');
      $('.current_price', $product).parent().addClass('sale');
    } else {
      $('.was_price', $product).html('')
      $('.current_price', $product).parent().removeClass('sale');
    }

    if (variant.inventory_management && variant.inventory_quantity > 0) {
      
      
    } else {
      $('.items_left', $product).text('');
      $('.quantity', $product).removeAttr('max');
    }

    // Empty sold out text
    $('.sold_out', $product).text('');

    // Show price, otherwise, show free price text
    if (variant.price > 0) {
      $('.current_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.price, $('body').data('money-format')) + '</span>');
    } else {
      $('.current_price', $product).html("Free");
    }

    $('.modal_price', $product).removeClass('modal_price--sold-out')

    $('.add_to_cart', $product).removeClass('disabled').removeAttr('disabled').find('span').text($('.add_to_cart', $product).data('label'));

    $('.current_price').show();
    $('.was_price').show();

    // Hide the back in stock notification form
    $notify_form.hide();

    // Show the quantity field
    $('.purchase-details__quantity', $product).show();

    // Remove disable from action buttons
    $('.atc-btn-container', $product).removeClass('disabled');

  } else {
    var message = variant ? Shopify.translation.product_sold_out : Shopify.translation.product_unavailable;

    // Hide the quantity field
    $('.purchase-details__quantity', $product).hide();

    // Show the price and change the add to cart and sold out text
    $('.modal_price', $product).addClass('modal_price--sold-out')
    $('.was_price', $product).html('');
    $('.items_left', $product).text('');
    $('.quantity', $product).removeAttr('max');
    $('.sold_out', $product).text(' - ' + message);

    // Disable the add to cart button and Shopify payment button when a variant is sold out
    $('.atc-btn-container', $product).addClass('disabled');
    $('.add_to_cart', $product).addClass('disabled').attr('disabled', 'disabled').find('span').text(message);

    //Hide the back in stock notification form
    $notify_form.hide();
    $notifyFormInputs.empty();

    if (variant && !variant.available) {
      $('.current_price').show();
      $('.was_price').show();
      // Show the variant price, otherwise, show the free price text
      if (variant.price > 0) {
        $('.current_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.price, $('body').data('money-format')) + '</span>');
      } else {
        $('.current_price', $product).html("Free");
      }

      // When a variant is sold out but on sale
      if(variant.price < variant.compare_at_price){
        $('.was_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.compare_at_price, $('body').data('money-format')) + '</span>');
        $('.current_price', $product).parent().addClass('sale');
      } else {
        $('.was_price', $product).html('')
        $('.current_price', $product).parent().removeClass('sale');
      }

      // Show the back in stock notification form
      $notify_form.fadeIn();
      $notifyFormInputs.empty();
      $notifyFormInputs.append(notifyFormHTML);
    } else {
      $('.sold_out', $product).text(message);
      // When a variant is specifically unavailable
      $('.current_price').hide();
      $('.was_price').hide();
    }

  }

  $productForm.removeClass("init");
};

function htmlEncode(value){
    if (value) {
        return $('<div/>').text(value).html();
    } else {
        return '';
    }
}

/* option_selection.js */
function floatToString(t,e){var o=t.toFixed(e).toString();return o.match(/^\.\d+/)?"0"+o:o}if("undefined"==typeof Shopify)var Shopify={};Shopify.each=function(t,e){for(var o=0;o<t.length;o++)e(t[o],o)},Shopify.map=function(t,e){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],i));return o},Shopify.arrayIncludes=function(t,e){for(var o=0;o<t.length;o++)if(t[o]==e)return!0;return!1},Shopify.uniq=function(t){for(var e=[],o=0;o<t.length;o++)Shopify.arrayIncludes(e,t[o])||e.push(t[o]);return e},Shopify.isDefined=function(t){return"undefined"==typeof t?!1:!0},Shopify.getClass=function(t){return Object.prototype.toString.call(t).slice(8,-1)},Shopify.extend=function(t,e){function o(){}o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t,t.baseConstructor=e,t.superClass=e.prototype},Shopify.locationSearch=function(){return window.location.search},Shopify.locationHash=function(){return window.location.hash},Shopify.replaceState=function(t){window.history.replaceState({},document.title,t)},Shopify.urlParam=function(t){var e=RegExp("[?&]"+t+"=([^&#]*)").exec(Shopify.locationSearch());return e&&decodeURIComponent(e[1].replace(/\+/g," "))},Shopify.newState=function(t,e){var o;return o=Shopify.urlParam(t)?Shopify.locationSearch().replace(RegExp("("+t+"=)[^&#]+"),"$1"+e):""===Shopify.locationSearch()?"?"+t+"="+e:Shopify.locationSearch()+"&"+t+"="+e,o+Shopify.locationHash()},Shopify.setParam=function(t,e){Shopify.replaceState(Shopify.newState(t,e))},Shopify.Product=function(t){Shopify.isDefined(t)&&this.update(t)},Shopify.Product.prototype.update=function(t){for(property in t)this[property]=t[property]},Shopify.Product.prototype.optionNames=function(){return"Array"==Shopify.getClass(this.options)?this.options:[]},Shopify.Product.prototype.optionValues=function(t){if(!Shopify.isDefined(this.variants))return null;var e=Shopify.map(this.variants,function(e){var o="option"+(t+1);return void 0==e[o]?null:e[o]});return null==e[0]?null:Shopify.uniq(e)},Shopify.Product.prototype.getVariant=function(t){var e=null;return t.length!=this.options.length?e:(Shopify.each(this.variants,function(o){for(var i=!0,r=0;r<t.length;r++){var n="option"+(r+1);o[n]!=t[r]&&(i=!1)}return 1==i?void(e=o):void 0}),e)},Shopify.Product.prototype.getVariantById=function(t){for(var e=0;e<this.variants.length;e++){var o=this.variants[e];if(t==o.id)return o}return null},Shopify.money_format="$",Shopify.formatMoney=function(t,e){function o(t,e){return"undefined"==typeof t?e:t}function i(t,e,i,r){if(e=o(e,2),i=o(i,","),r=o(r,"."),isNaN(t)||null==t)return 0;t=(t/100).toFixed(e);var n=t.split("."),a=n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+i),s=n[1]?r+n[1]:"";return a+s}"string"==typeof t&&(t=t.replace(".",""));var r="",n=/\{\{\s*(\w+)\s*\}\}/,a=e||this.money_format;switch(a.match(n)[1]){case"amount":r=i(t,2);break;case"amount_no_decimals":r=i(t,0);break;case"amount_with_comma_separator":r=i(t,2,".",",");break;case"amount_with_apostrophe_separator":r=i(t,2);break;case"amount_no_decimals_with_comma_separator":r=i(t,0,".",",")}return a.replace(n,r)},Shopify.OptionSelectors=function(t,e){return this.selectorDivClass="selector-wrapper",this.selectorClass="single-option-selector",this.variantIdFieldIdSuffix="-variant-id",this.variantIdField=null,this.historyState=null,this.selectors=[],this.domIdPrefix=t,this.product=new Shopify.Product(e.product),this.onVariantSelected=Shopify.isDefined(e.onVariantSelected)?e.onVariantSelected:function(){},this.replaceSelector(t),this.initDropdown(),e.enableHistoryState&&(this.historyState=new Shopify.OptionSelectors.HistoryState(this)),!0},Shopify.OptionSelectors.prototype.initDropdown=function(){var t={initialLoad:!0},e=this.selectVariantFromDropdown(t);if(!e){var o=this;setTimeout(function(){o.selectVariantFromParams(t)||o.fireOnChangeForFirstDropdown.call(o,t)})}},Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown=function(t){this.selectors[0].element.onchange(t)},Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown=function(t){var e=this.selectVariantFromParams(t);e||this.selectVariantFromDropdown(t)},Shopify.OptionSelectors.prototype.replaceSelector=function(t){var e=document.getElementById(t),o=e.parentNode;Shopify.each(this.buildSelectors(),function(t){o.insertBefore(t,e)}),e.style.display="none",this.variantIdField=e},Shopify.OptionSelectors.prototype.selectVariantFromDropdown=function(t){var e=document.getElementById(this.domIdPrefix).querySelector("[selected]");if(e||(e=document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')),!e)return!1;var o=e.value;return this.selectVariant(o,t)},Shopify.OptionSelectors.prototype.selectVariantFromParams=function(t){var e=Shopify.urlParam("variant");return this.selectVariant(e,t)},Shopify.OptionSelectors.prototype.selectVariant=function(t,e){var o=this.product.getVariantById(t);if(null==o)return!1;for(var i=0;i<this.selectors.length;i++){var r=this.selectors[i].element,n=r.getAttribute("data-option"),a=o[n];null!=a&&this.optionExistInSelect(r,a)&&(r.value=a)}return"undefined"!=typeof jQuery?jQuery(this.selectors[0].element).trigger("change",e):this.selectors[0].element.onchange(e),!0},Shopify.OptionSelectors.prototype.optionExistInSelect=function(t,e){for(var o=0;o<t.options.length;o++)if(t.options[o].value==e)return!0},Shopify.OptionSelectors.prototype.insertSelectors=function(t,e){Shopify.isDefined(e)&&this.setMessageElement(e),this.domIdPrefix="product-"+this.product.id+"-variant-selector";var o=document.getElementById(t);Shopify.each(this.buildSelectors(),function(t){o.appendChild(t)})},Shopify.OptionSelectors.prototype.buildSelectors=function(){for(var t=0;t<this.product.optionNames().length;t++){var e=new Shopify.SingleOptionSelector(this,t,this.product.optionNames()[t],this.product.optionValues(t));e.element.disabled=!1,this.selectors.push(e)}var o=this.selectorDivClass,i=this.product.optionNames(),r=Shopify.map(this.selectors,function(t){var e=document.createElement("div");if(e.setAttribute("class",o),i.length>1){var r=document.createElement("label");r.htmlFor=t.element.id,r.innerHTML=t.name,e.appendChild(r)}return e.appendChild(t.element),e});return r},Shopify.OptionSelectors.prototype.selectedValues=function(){for(var t=[],e=0;e<this.selectors.length;e++){var o=this.selectors[e].element.value;t.push(o)}return t},Shopify.OptionSelectors.prototype.updateSelectors=function(t,e){var o=this.selectedValues(),i=this.product.getVariant(o);i?(this.variantIdField.disabled=!1,this.variantIdField.value=i.id):this.variantIdField.disabled=!0,this.onVariantSelected(i,this,e),null!=this.historyState&&this.historyState.onVariantChange(i,this,e)},Shopify.OptionSelectorsFromDOM=function(t,e){var o=e.optionNames||[],i=e.priceFieldExists||!0,r=e.delimiter||"/",n=this.createProductFromSelector(t,o,i,r);e.product=n,Shopify.OptionSelectorsFromDOM.baseConstructor.call(this,t,e)},Shopify.extend(Shopify.OptionSelectorsFromDOM,Shopify.OptionSelectors),Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector=function(t,e,o,i){if(!Shopify.isDefined(o))var o=!0;if(!Shopify.isDefined(i))var i="/";var r=document.getElementById(t),n=r.childNodes,a=(r.parentNode,e.length),s=[];Shopify.each(n,function(t,r){if(1==t.nodeType&&"option"==t.tagName.toLowerCase()){var n=t.innerHTML.split(new RegExp("\\s*\\"+i+"\\s*"));0==e.length&&(a=n.length-(o?1:0));var p=n.slice(0,a),l=o?n[a]:"",c=(t.getAttribute("value"),{available:t.disabled?!1:!0,id:parseFloat(t.value),price:l,option1:p[0],option2:p[1],option3:p[2]});s.push(c)}});var p={variants:s};if(0==e.length){p.options=[];for(var l=0;a>l;l++)p.options[l]="option "+(l+1)}else p.options=e;return p},Shopify.SingleOptionSelector=function(t,e,o,i){this.multiSelector=t,this.values=i,this.index=e,this.name=o,this.element=document.createElement("select");for(var r=0;r<i.length;r++){var n=document.createElement("option");n.value=i[r],n.innerHTML=i[r],this.element.appendChild(n)}return this.element.setAttribute("class",this.multiSelector.selectorClass),this.element.setAttribute("data-option","option"+(e+1)),this.element.id=t.domIdPrefix+"-option-"+e,this.element.onchange=function(o,i){i=i||{},t.updateSelectors(e,i)},!0},Shopify.Image={preload:function(t,e){for(var o=0;o<t.length;o++){var i=t[o];this.loadImage(this.getSizedImageUrl(i,e))}},loadImage:function(t){(new Image).src=t},switchImage:function(t,e,o){if(t&&e){var i=this.imageSize(e.src),r=this.getSizedImageUrl(t.src,i);o?o(r,t,e):e.src=r}},imageSize:function(t){var e=t.match(/_(1024x1024|2048x2048|pico|icon|thumb|small|compact|medium|large|grande)\./);return null!=e?e[1]:null},getSizedImageUrl:function(t,e){if(null==e)return t;if("master"==e)return this.removeProtocol(t);var o=t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(null!=o){var i=t.split(o[0]),r=o[0];return this.removeProtocol(i[0]+"_"+e+r)}return null},removeProtocol:function(t){return t.replace(/http(s)?:/,"")}},Shopify.OptionSelectors.HistoryState=function(t){this.browserSupports()&&this.register(t)},Shopify.OptionSelectors.HistoryState.prototype.register=function(t){window.addEventListener("popstate",function(e){t.selectVariantFromParamsOrDropdown({popStateCall:!0})})},Shopify.OptionSelectors.HistoryState.prototype.onVariantChange=function(t,e,o){this.browserSupports()&&(!t||o.initialLoad||o.popStateCall||Shopify.setParam("variant",t.id))},Shopify.OptionSelectors.HistoryState.prototype.browserSupports=function(){return window.history&&window.history.replaceState};


Shopify.updateOptionsInSelector = function(selectorIndex, parent) {

  switch (selectorIndex) {
    case 0:
      var key = 'root';
      var selector = $(parent + ' .single-option-selector:eq(0)');
      break;
    case 1:
      var key = $(parent + ' .single-option-selector:eq(0)').val();
      var selector = $(parent + ' .single-option-selector:eq(1)');
      break;
    case 2:
      var key = $(parent + ' .single-option-selector:eq(0)').val();
      key += ' / ' + $(parent + ' .single-option-selector:eq(1)').val();
      var selector = $(parent + ' .single-option-selector:eq(2)');
  }

  var availableOptions = Shopify.optionsMap[key];

  $(parent + ' .swatch[data-option-index="' + selectorIndex + '"] .swatch-element').each(function() {
    if ($.inArray($(this).attr('data-value'), availableOptions) !== -1) {
      $(this).removeClass('soldout').find(':radio').removeAttr('disabled','disabled').removeAttr('checked');
    }
    else {
      $(this).addClass('soldout').find(':radio').removeAttr('checked').attr('disabled','disabled');
    }
  });
  selector.trigger('change');

};

/* Linked Option Selectors */
Shopify.linkOptionSelectors = function(product, parent) {
    // Building our mapping object.
    Shopify.optionsMap = {};
    for (var i=0; i<product.variants.length; i++) {
      var variant = product.variants[i];
      if (variant.available) {
        // Gathering values for the 1st drop-down.
        Shopify.optionsMap['root'] = Shopify.optionsMap['root'] || [];
        Shopify.optionsMap['root'].push(variant.option1);
        Shopify.optionsMap['root'] = Shopify.uniq(Shopify.optionsMap['root']);
        // Gathering values for the 2nd drop-down.
        if (product.options.length > 1) {
          var key = variant.option1;
          Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
          Shopify.optionsMap[key].push(variant.option2);
          Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
        }
        // Gathering values for the 3rd drop-down.
        if (product.options.length === 3) {
          var key = variant.option1 + ' / ' + variant.option2;
          Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
          Shopify.optionsMap[key].push(variant.option3);
          Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
        }
      }
    }
    // Update options right away.
    Shopify.updateOptionsInSelector(0, parent);
    if (product.options.length > 1) Shopify.updateOptionsInSelector(1, parent);
    if (product.options.length === 3) Shopify.updateOptionsInSelector(2, parent);
    // When there is an update in the first dropdown.
    $(parent + " .single-option-selector:eq(0)").change(function() {
      Shopify.updateOptionsInSelector(1, parent);
      if (product.options.length === 3) Shopify.updateOptionsInSelector(2, parent);
      return true;
    });
    // When there is an update in the second dropdown.
    $(parent + " .single-option-selector:eq(1)").change(function() {
      if (product.options.length === 3) Shopify.updateOptionsInSelector(2, parent);
      return true;
    });
};

/* Vendors */

/*!
 * Flickity PACKAGED v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */

!function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";var i=Array.prototype.slice,n=t.console,d=void 0===n?function(){}:function(t){n.error(t)};function s(h,s,c){(c=c||e||t.jQuery)&&(s.prototype.option||(s.prototype.option=function(t){c.isPlainObject(t)&&(this.options=c.extend(!0,this.options,t))}),c.fn[h]=function(t){return"string"==typeof t?function(t,o,r){var a,l="$()."+h+'("'+o+'")';return t.each(function(t,e){var i=c.data(e,h);if(i){var n=i[o];if(n&&"_"!=o.charAt(0)){var s=n.apply(i,r);a=void 0===a?s:a}else d(l+" is not a valid method")}else d(h+" not initialized. Cannot call methods, i.e. "+l)}),void 0!==a?a:t}(this,t,i.call(arguments,1)):(function(t,n){t.each(function(t,e){var i=c.data(e,h);i?(i.option(n),i._init()):(i=new s(e,n),c.data(e,h,i))})}(this,t),this)},o(c))}function o(t){!t||t&&t.bridget||(t.bridget=s)}return o(e||t.jQuery),s}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function m(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var i="undefined"==typeof console?function(){}:function(t){console.error(t)},y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],b=y.length;function E(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}var S,C=!1;function x(t){if(function(){if(!C){C=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=E(t);S=200==Math.round(m(i.width)),x.isBoxSizeOuter=S,e.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=E(t);if("none"==e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<b;e++){t[y[e]]=0}return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var n=i.isBorderBox="border-box"==e.boxSizing,s=0;s<b;s++){var o=y[s],r=e[o],a=parseFloat(r);i[o]=isNaN(a)?0:a}var l=i.paddingLeft+i.paddingRight,h=i.paddingTop+i.paddingBottom,c=i.marginLeft+i.marginRight,d=i.marginTop+i.marginBottom,u=i.borderLeftWidth+i.borderRightWidth,f=i.borderTopWidth+i.borderBottomWidth,p=n&&S,g=m(e.width);!1!==g&&(i.width=g+(p?0:l+u));var v=m(e.height);return!1!==v&&(i.height=v+(p?0:h+f)),i.innerWidth=i.width-(l+u),i.innerHeight=i.height-(h+f),i.outerWidth=i.width+c,i.outerHeight=i.height+d,i}}return x}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(h,o){var c={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice;c.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},c.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},c.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,o(t,e))return t},c.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.filterFindElements=function(t,n){t=c.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){o(t,n)&&s.push(t);for(var e=t.querySelectorAll(n),i=0;i<e.length;i++)s.push(e[i])}else s.push(t)}),s},c.debounceMethod=function(t,e,n){n=n||100;var s=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,i=this;this[o]=setTimeout(function(){s.apply(i,e),delete i[o]},n)}},c.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var d=h.console;return c.htmlInit=function(a,l){c.docReady(function(){var t=c.toDashed(l),s="data-"+t,e=document.querySelectorAll("["+s+"]"),i=document.querySelectorAll(".js-"+t),n=c.makeArray(e).concat(c.makeArray(i)),o=s+"-options",r=h.jQuery;n.forEach(function(e){var t,i=e.getAttribute(s)||e.getAttribute(o);try{t=i&&JSON.parse(i)}catch(t){return void(d&&d.error("Error parsing "+s+" on "+e.className+": "+t))}var n=new a(e,t);r&&r.data(e,l,n)})})},c}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("get-size")):(e.Flickity=e.Flickity||{},e.Flickity.Cell=i(e,e.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0},n.destroy=function(){this.unselect(),this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},n.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.cells.forEach(function(t){t.select()})},e.unselect=function(){this.cells.forEach(function(t){t.unselect()})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("fizzy-ui-utils")):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=i(e,e.fizzyUIUtils))}(window,function(t,e){var i={startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;this.options.wrapAround&&1<this.cells.length&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),this.setTranslateX(t,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(t,e){t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"},dispatchScrollEvent:function(){var t=this.slides[0];if(t){var e=-this.x-t.target,i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,2<this.restingFrames&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=0<e?i:0;s.wrapShift(o),e-=s.size.outerWidth}},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x-this.velocity;this.applyForce(t)}},applySelectedAttraction:function(){if(!(this.isDraggable&&this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var t=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(t)}}};return i}),function(r,a){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(t,e,i,n,s,o){return a(r,t,e,i,n,s,o)});else if("object"==typeof module&&module.exports)module.exports=a(r,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var t=r.Flickity;r.Flickity=a(r,r.EvEmitter,r.getSize,r.fizzyUIUtils,t.Cell,t.Slide,t.animatePrototype)}}(window,function(n,t,e,a,i,r,s){var l=n.jQuery,o=n.getComputedStyle,h=n.console;function c(t,e){for(t=a.makeArray(t);t.length;)e.appendChild(t.shift())}var d=0,u={};function f(t,e){var i=a.getQueryElement(t);if(i){if(this.element=i,this.element.flickityGUID){var n=u[this.element.flickityGUID];return n.option(e),n}l&&(this.$element=l(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(e),this._create()}else h&&h.error("Bad element for Flickity: "+(i||t))}f.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},f.createMethods=[];var p=f.prototype;a.extend(p,t.prototype),p._create=function(){var t=this.guid=++d;for(var e in this.element.flickityGUID=t,(u[t]=this).selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&n.addEventListener("resize",this),this.options.on){var i=this.options.on[e];this.on(e,i)}f.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){a.extend(this.options,t)},p.activate=function(){this.isActive||(this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize(),c(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready"))},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return a.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){return this._filterFindCellElements(t).map(function(t){return new i(t,this)},this)},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;if(0<t){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var n=new r(this);this.slides.push(n);var s="left"==this.originSide?"marginRight":"marginLeft",o=this._getCanCellFit();this.cells.forEach(function(t,e){if(n.cells.length){var i=n.outerWidth-n.firstMargin+(t.size.outerWidth-t.size[s]);o.call(this,e,i)||(n.updateTarget(),n=new r(this),this.slides.push(n)),n.addCell(t)}else n.addCell(t)},this),n.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!=0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=e(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];0<t;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){s?t.target=n*this.cellAlign:(t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),l&&this.$element){var s=t+=this.options.namespaceJQueryEvents?".flickity":"";if(e){var o=l.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=a.modulo(t,this.slides.length)),this.slides[t])){var n=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[t]),t!=n&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length;if(!(this.options.wrapAround&&1<e))return t;var i=a.modulo(t,e),n=Math.abs(i-this.selectedIndex),s=Math.abs(i+e-this.selectedIndex),o=Math.abs(i-e-this.selectedIndex);!this.isDragSelect&&s<n?t+=e:!this.isDragSelect&&o<n&&(t-=e),t<0?this.x-=this.slideableWidth:e<=t&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),(this.selectedSlide=t).select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{if(t&&"string"==typeof t)if(this.queryCell(t))return void this.selectCell(t,!1,!0);var e=0;t&&this.slides[t]&&(e=t),this.select(e,!1,!0)}},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){if(-1!=this.slides[e].cells.indexOf(t))return e}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=a.makeArray(t);var i=[];return t.forEach(function(t){var e=this.getCell(t);e&&i.push(e)},this),i},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e||(t=a.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(i<=1+2*t)return this.getCellElements();for(var n=[],s=e-t;s<=e+t;s++){var o=this.options.wrapAround?a.modulo(s,i):s,r=this.slides[o];r&&(n=n.concat(r.getCellElements()))}return n},p.queryCell=function(t){if("number"==typeof t)return this.cells[t];if("string"==typeof t){if(t.match(/^[#\.]?[\d\/]/))return;t=this.element.querySelector(t)}return this.getCell(t)},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){"touchstart"!=t.type&&t.preventDefault(),this.focus()},p.onresize=function(){this.watchCSS(),this.resize()},a.debounceMethod(f,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=a.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){this.options.watchCSS&&(-1!=o(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=f.keyboardHandlers[t.keyCode];i&&i.call(this)}},f.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var t=n.pageYOffset;this.element.focus({preventScroll:!0}),n.pageYOffset!=t&&n.scrollTo(n.pageXOffset,t)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),c(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),n.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),l&&this.$element&&l.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete u[this.guid]},a.extend(p,s),f.data=function(t){var e=(t=a.getQueryElement(t))&&t.flickityGUID;return e&&u[e]},a.htmlInit(f,"flickity"),l&&l.bridget&&l.bridget("flickity",f),f.setJQuery=function(t){l=t},f.Cell=i,f.Slide=r,f}),function(e,i){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.Unipointer=i(e,e.EvEmitter)}(window,function(s,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindStartEvent=function(t){this._bindStartEvent(t,!0)},i.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},i._bindStartEvent=function(t,e){var i=(e=void 0===e||e)?"addEventListener":"removeEventListener",n="mousedown";s.PointerEvent?n="pointerdown":"ontouchstart"in s&&(n="touchstart"),t[i](n,this)},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},i.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},i.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},i.onpointerdown=function(t){this._pointerDown(t,t)},i._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},i.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var n={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return i._bindPostStartEvents=function(t){if(t){var e=n[t.type];e.forEach(function(t){s.addEventListener(t,this)},this),this._boundPointerEvents=e}},i._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(t){s.removeEventListener(t,this)},this),delete this._boundPointerEvents)},i.onmousemove=function(t){this._pointerMove(t,t)},i.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},i.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},i._pointerMove=function(t,e){this.pointerMove(t,e)},i.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},i.onmouseup=function(t){this._pointerUp(t,t)},i.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},i.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},i._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},i._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},i._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},i.pointerDone=function(){},i.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},i.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},i._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},i.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},e.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},e}),function(e,i){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("unipointer")):e.Unidragger=i(e,e.Unipointer)}(window,function(o,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindHandles=function(){this._bindHandles(!0)},i.unbindHandles=function(){this._bindHandles(!1)},i._bindHandles=function(t){for(var e=(t=void 0===t||t)?"addEventListener":"removeEventListener",i=t?this._touchActionValue:"",n=0;n<this.handles.length;n++){var s=this.handles[n];this._bindStartEvent(s,t),s[e]("click",this),o.PointerEvent&&(s.style.touchAction=i)}},i._touchActionValue="none",i.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return i.okayPointerDown=function(t){var e=s[t.target.nodeName],i=r[t.target.type],n=!e||i;return n||this._pointerReset(),n},i.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},i.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},i._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},i.hasDragStarted=function(t){return 3<Math.abs(t.x)||3<Math.abs(t.y)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},i._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},i._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},i.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},i._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},i.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},i._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},i.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},i.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},i._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},i.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},e.getPointerPoint=t.getPointerPoint,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):n.Flickity=s(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}(window,function(i,t,e,a){a.extend(t.defaults,{draggable:">1",dragThreshold:3}),t.createMethods.push("_createDrag");var n=t.prototype;a.extend(n,e.prototype),n._touchActionValue="pan-y";var s="createTouch"in document,o=!1;n._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),s&&!o&&(i.addEventListener("touchmove",function(){}),o=!0)},n.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},n.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},n.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=1<this.slides.length:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},n.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},n.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},n._uiChangeDrag=function(){delete this.isFreeScrolling},n.pointerDown=function(t,e){this.isDraggable?this.okayPointerDown(t)&&(this._pointerDownPreventDefault(t),this.pointerDownFocus(t),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),i.addEventListener("scroll",this),this._pointerDownDefault(t,e)):this._pointerDownDefault(t,e)},n._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var r={INPUT:!0,TEXTAREA:!0,SELECT:!0};function l(){return{x:i.pageXOffset,y:i.pageYOffset}}return n.pointerDownFocus=function(t){r[t.target.nodeName]||this.focus()},n._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=r[t.target.nodeName];e||i||n||t.preventDefault()},n.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},n.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},n.pointerDone=function(){i.removeEventListener("scroll",this),delete this.pointerDownScroll},n.dragStart=function(t,e){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),i.removeEventListener("scroll",this),this.dispatchEvent("dragStart",t,[e]))},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},n.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(i.x=i.x%this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=o<s?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])}},n.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},n.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1);return i.distance<n.distance?i.index:n.index},n._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,null!==(e=this.getSlideDistance(-t,n)));)e=Math.abs(e);return{distance:s,index:n-i}},n.getSlideDistance=function(t,e){var i=this.slides.length,n=this.options.wrapAround&&1<i,s=n?a.modulo(e,i):e,o=this.slides[s];if(!o)return null;var r=n?this.slideableWidth*Math.floor(e/i):0;return t-(o.target+r)},n.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||100<new Date-this.dragMoveTime)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return 0<t&&0<e?1:t<0&&e<0?-1:0},n.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},n.onscroll=function(){var t=l(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(3<Math.abs(e)||3<Math.abs(i))&&this._pointerDone()},t}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";var s="http://www.w3.org/2000/svg";function o(t,e){this.direction=t,this.parent=e,this._create()}(o.prototype=Object.create(i.prototype))._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(s,"path"),i=function(t){return"string"!=typeof t?"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z":t}(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&1<t.length)this.enable();else{var e=t.length?t.length-1:0,i=this.isPrevious?0:e;this[this.parent.selectedIndex==i?"disable":"enable"]()}},o.prototype.destroy=function(){this.deactivate(),this.allOff()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var r=e.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}(s.prototype=Object.create(i.prototype))._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),this.parent.element.removeChild(this.holder)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;0<t?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){this.dots.splice(this.dots.length-t,t).forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=s.prototype.onClick=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate(),this.allOff()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,n){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,e,i){return n(t,e,i)}):"object"==typeof module&&module.exports?module.exports=n(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):n(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}(n.prototype=Object.create(t.prototype)).play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,n){var i=e.prototype;return i.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var n=this.cells.length;e=void 0===e?n:e;var s=function(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}(i),o=e==n;if(o)this.slider.appendChild(s);else{var r=this.cells[e].element;this.slider.insertBefore(s,r)}if(0===e)this.cells=i.concat(this.cells);else if(o)this.cells=this.cells.concat(i);else{var a=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(a)}this._sizeCells(i),this.cellChange(e,!0)}},i.append=function(t){this.insert(t,this.cells.length)},i.prepend=function(t){this.insert(t,0)},i.remove=function(t){var e=this.getCells(t);if(e&&e.length){var i=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);i=Math.min(e,i),n.removeFrom(this.cells,t)},this),this.cellChange(i,!0)}},i.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},i.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,o){"use strict";e.createMethods.push("_createLazyload");var i=e.prototype;function s(t,e){this.img=t,this.flickity=e,this.load()}return i._createLazyload=function(){this.on("select",this.lazyLoad)},i.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),n=[];i.forEach(function(t){var e=function(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),i=t.getAttribute("data-flickity-lazyload-src"),n=t.getAttribute("data-flickity-lazyload-srcset");if(e||i||n)return[t]}var s=t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return o.makeArray(s)}(t);n=n.concat(e)}),n.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=o.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(n,s){n.createMethods.push("_createAsNavFor");var t=n.prototype;return t._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},t.setNavCompanion=function(t){t=s.getQueryElement(t);var e=n.data(t);if(e&&e!=this){this.navCompanion=e;var i=this;this.onNavCompanionSelect=function(){i.navCompanionSelect()},e.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},t.navCompanionSelect=function(t){var e=this.navCompanion&&this.navCompanion.selectedCells;if(e){var i=e[0],n=this.navCompanion.cells.indexOf(i),s=n+e.length-1,o=Math.floor(function(t,e,i){return(e-t)*i+t}(n,s,this.navCompanion.cellAlign));if(this.selectCell(o,!1,t),this.removeNavSelectedElements(),!(o>=this.cells.length)){var r=this.cells.slice(n,1+s);this.navSelectedElements=r.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},t.changeNavSelectedClass=function(e){this.navSelectedElements.forEach(function(t){t.classList[e]("is-nav-selected")})},t.activateAsNavFor=function(){this.navCompanionSelect(!0)},t.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},t.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},t.deactivateAsNavFor=function(){this.removeNavSelectedElements()},t.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},n}),function(e,i){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.imagesLoaded=i(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){var s=e.jQuery,o=e.console;function r(t,e){for(var i in e)t[i]=e[i];return t}var a=Array.prototype.slice;function l(t,e,i){if(!(this instanceof l))return new l(t,e,i);var n=t;"string"==typeof t&&(n=document.querySelectorAll(t)),n?(this.elements=function(t){return Array.isArray(t)?t:"object"==typeof t&&"number"==typeof t.length?a.call(t):[t]}(n),this.options=r({},this.options),"function"==typeof e?i=e:r(this.options,e),i&&this.on("always",i),this.getImages(),s&&(this.jqDeferred=new s.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(n||t))}(l.prototype=Object.create(t.prototype)).options={},l.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},l.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&h[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var h={1:!0,9:!0,11:!0};function i(t){this.img=t}function n(t,e){this.url=t,this.element=e,this.img=new Image}return l.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},l.prototype.addImage=function(t){var e=new i(t);this.images.push(e)},l.prototype.addBackground=function(t,e){var i=new n(t,e);this.images.push(i)},l.prototype.check=function(){var n=this;function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},l.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+i,t,e)},l.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},(i.prototype=Object.create(t.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},i.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},l.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((s=t).fn.imagesLoaded=function(t,e){return new l(this,t,e).jqDeferred.promise(s(this))})},l.makeJQueryPlugin(),l}),function(i,n){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("flickity"),require("imagesloaded")):i.Flickity=n(i,i.Flickity,i.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){if(this.options.imagesLoaded){var n=this;i(this.slider).on("progress",function(t,e){var i=n.getParentCell(e.img);n.cellSizeChange(i&&i.element),n.options.freeScroll||n.positionSliderAtSelected()})}},e});

/**
 * Flickity fade v1.0.0
 * Fade between Flickity slides
 */

!function(e,t){"function"==typeof define&&define.amd?define(["flickity/js/index","fizzy-ui-utils/utils"],t):"object"==typeof module&&module.exports?module.exports=t(require("flickity"),require("fizzy-ui-utils")):t(e.Flickity,e.fizzyUIUtils)}(this,function(e,t){var i=e.Slide,s=i.prototype.updateTarget;i.prototype.updateTarget=function(){if(s.apply(this,arguments),this.parent.options.fade){var e=this.target-this.x,t=this.cells[0].x;this.cells.forEach(function(i){var s=i.x-t-e;i.renderPosition(s)})}},i.prototype.setOpacity=function(e){this.cells.forEach(function(t){t.element.style.opacity=e})};var a=e.prototype;e.createMethods.push("_createFade"),a._createFade=function(){this.fadeIndex=this.selectedIndex,this.prevSelectedIndex=this.selectedIndex,this.on("select",this.onSelectFade),this.on("dragEnd",this.onDragEndFade),this.on("settle",this.onSettleFade),this.on("activate",this.onActivateFade),this.on("deactivate",this.onDeactivateFade)};var n=a.updateSlides;a.updateSlides=function(){n.apply(this,arguments),this.options.fade&&this.slides.forEach(function(e,t){var i=t==this.selectedIndex?1:0;e.setOpacity(i)},this)},a.onSelectFade=function(){this.fadeIndex=Math.min(this.prevSelectedIndex,this.slides.length-1),this.prevSelectedIndex=this.selectedIndex},a.onSettleFade=function(){(delete this.didDragEnd,this.options.fade)&&(this.selectedSlide.setOpacity(1),this.slides[this.fadeIndex]&&this.fadeIndex!=this.selectedIndex&&this.slides[this.fadeIndex].setOpacity(0))},a.onDragEndFade=function(){this.didDragEnd=!0},a.onActivateFade=function(){this.options.fade&&this.element.classList.add("is-fade")},a.onDeactivateFade=function(){this.options.fade&&(this.element.classList.remove("is-fade"),this.slides.forEach(function(e){e.setOpacity("")}))};var d=a.positionSlider;a.positionSlider=function(){this.options.fade?(this.fadeSlides(),this.dispatchScrollEvent()):d.apply(this,arguments)};var h=a.positionSliderAtSelected;a.positionSliderAtSelected=function(){this.options.fade&&this.setTranslateX(0),h.apply(this,arguments)},a.fadeSlides=function(){if(!(this.slides.length<2)){var e=this.getFadeIndexes(),t=this.slides[e.a],i=this.slides[e.b],s=this.wrapDifference(t.target,i.target),a=this.wrapDifference(t.target,-this.x);a/=s,t.setOpacity(1-a),i.setOpacity(a);var n=e.a;this.isDragging&&(n=a>.5?e.a:e.b),null!=this.fadeHideIndex&&this.fadeHideIndex!=n&&this.fadeHideIndex!=e.a&&this.fadeHideIndex!=e.b&&this.slides[this.fadeHideIndex].setOpacity(0),this.fadeHideIndex=n}},a.getFadeIndexes=function(){return this.isDragging||this.didDragEnd?this.options.wrapAround?this.getFadeDragWrapIndexes():this.getFadeDragLimitIndexes():{a:this.fadeIndex,b:this.selectedIndex}},a.getFadeDragWrapIndexes=function(){var e=this.slides.map(function(e,t){return this.getSlideDistance(-this.x,t)},this),i=e.map(function(e){return Math.abs(e)}),s=Math.min.apply(Math,i),a=i.indexOf(s),n=e[a],d=this.slides.length,h=n>=0?1:-1;return{a:a,b:t.modulo(a+h,d)}},a.getFadeDragLimitIndexes=function(){for(var e=0,t=0;t<this.slides.length-1;t++){var i=this.slides[t];if(-this.x<i.target)break;e=t}return{a:e,b:e+1}},a.wrapDifference=function(e,t){var i=t-e;if(!this.options.wrapAround)return i;var s=i+this.slideableWidth,a=i-this.slideableWidth;return Math.abs(s)<Math.abs(i)&&(i=s),Math.abs(a)<Math.abs(i)&&(i=a),i};var o=a._getWrapShiftCells;a._getWrapShiftCells=function(){this.options.fade||o.apply(this,arguments)};var r=a.shiftWrapCells;return a.shiftWrapCells=function(){this.options.fade||r.apply(this,arguments)},e});

/*
 * jQuery offscreen plugin
 *
 * Copyright Cory LaViska for A Beautiful Site, LLC
 *
 * @license: http://opensource.org/licenses/MIT
 *
 */
(function($) {
  $.extend($.expr[':'], {
    'off-top': function(el) {
      return $(el).offset().top < $(window).scrollTop();
    },
    'off-right': function(el) {
      return $(el).offset().left + $(el).outerWidth() - $(window).scrollLeft() > $(window).width();
    },
    'off-bottom': function(el) {
      return $(el).offset().top + $(el).outerHeight() - $(window).scrollTop() > $(window).height();
    },
    'off-left': function(el) {
      return $(el).offset().left < $(window).scrollLeft();
    },
    'off-screen': function(el) {
      return $(el).is(':off-top, :off-right, :off-bottom, :off-left');
    }
  });
})(jQuery);

// Plyr
"object"==typeof navigator&&function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Plyr",t):(e=e||self).Plyr=t()}(this,function(){"use strict";!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var t=function(e,t){var n,i;return(t=t||{}).bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i=n.preventDefault,n.preventDefault=function(){i.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};t.prototype=window.Event.prototype,window.CustomEvent=t}}();var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n,i,r,a="object",o=function(e){return e&&e.Math==Math&&e},s=o(typeof globalThis==a&&globalThis)||o(typeof window==a&&window)||o(typeof self==a&&self)||o(typeof e==a&&e)||Function("return this")(),l=function(e){try{return!!e()}catch(e){return!0}},c=!l(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),u={}.propertyIsEnumerable,h=Object.getOwnPropertyDescriptor,f={f:h&&!u.call({1:2},1)?function(e){var t=h(this,e);return!!t&&t.enumerable}:u},d=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},p={}.toString,m=function(e){return p.call(e).slice(8,-1)},g="".split,v=l(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==m(e)?g.call(e,""):Object(e)}:Object,y=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},b=function(e){return v(y(e))},w=function(e){return"object"==typeof e?null!==e:"function"==typeof e},k=function(e,t){if(!w(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!w(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!w(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!w(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")},T={}.hasOwnProperty,S=function(e,t){return T.call(e,t)},E=s.document,A=w(E)&&w(E.createElement),x=function(e){return A?E.createElement(e):{}},P=!c&&!l(function(){return 7!=Object.defineProperty(x("div"),"a",{get:function(){return 7}}).a}),C=Object.getOwnPropertyDescriptor,I={f:c?C:function(e,t){if(e=b(e),t=k(t,!0),P)try{return C(e,t)}catch(e){}if(S(e,t))return d(!f.f.call(e,t),e[t])}},L=function(e){if(!w(e))throw TypeError(String(e)+" is not an object");return e},M=Object.defineProperty,O={f:c?M:function(e,t,n){if(L(e),t=k(t,!0),L(n),P)try{return M(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},j=c?function(e,t,n){return O.f(e,t,d(1,n))}:function(e,t,n){return e[t]=n,e},N=function(e,t){try{j(s,e,t)}catch(n){s[e]=t}return t},_=t(function(e){var t=s["__core-js_shared__"]||N("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),R=_("native-function-to-string",Function.toString),U=s.WeakMap,F="function"==typeof U&&/native code/.test(R.call(U)),q=0,D=Math.random(),H=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++q+D).toString(36)},V=_("keys"),B=function(e){return V[e]||(V[e]=H(e))},z={},W=s.WeakMap;if(F){var K=new W,$=K.get,Y=K.has,G=K.set;n=function(e,t){return G.call(K,e,t),t},i=function(e){return $.call(K,e)||{}},r=function(e){return Y.call(K,e)}}else{var Q=B("state");z[Q]=!0,n=function(e,t){return j(e,Q,t),t},i=function(e){return S(e,Q)?e[Q]:{}},r=function(e){return S(e,Q)}}var X={set:n,get:i,has:r,enforce:function(e){return r(e)?i(e):n(e,{})},getterFor:function(e){return function(t){var n;if(!w(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},J=t(function(e){var t=X.get,n=X.enforce,i=String(R).split("toString");_("inspectSource",function(e){return R.call(e)}),(e.exports=function(e,t,r,a){var o=!!a&&!!a.unsafe,l=!!a&&!!a.enumerable,c=!!a&&!!a.noTargetGet;"function"==typeof r&&("string"!=typeof t||S(r,"name")||j(r,"name",t),n(r).source=i.join("string"==typeof t?t:"")),e!==s?(o?!c&&e[t]&&(l=!0):delete e[t],l?e[t]=r:j(e,t,r)):l?e[t]=r:N(t,r)})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||R.call(this)})}),Z=s,ee=function(e){return"function"==typeof e?e:void 0},te=function(e,t){return arguments.length<2?ee(Z[e])||ee(s[e]):Z[e]&&Z[e][t]||s[e]&&s[e][t]},ne=Math.ceil,ie=Math.floor,re=function(e){return isNaN(e=+e)?0:(e>0?ie:ne)(e)},ae=Math.min,oe=function(e){return e>0?ae(re(e),9007199254740991):0},se=Math.max,le=Math.min,ce=function(e,t){var n=re(e);return n<0?se(n+t,0):le(n,t)},ue=function(e){return function(t,n,i){var r,a=b(t),o=oe(a.length),s=ce(i,o);if(e&&n!=n){for(;o>s;)if((r=a[s++])!=r)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===n)return e||s||0;return!e&&-1}},he={includes:ue(!0),indexOf:ue(!1)},fe=he.indexOf,de=function(e,t){var n,i=b(e),r=0,a=[];for(n in i)!S(z,n)&&S(i,n)&&a.push(n);for(;t.length>r;)S(i,n=t[r++])&&(~fe(a,n)||a.push(n));return a},pe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],me=pe.concat("length","prototype"),ge={f:Object.getOwnPropertyNames||function(e){return de(e,me)}},ve={f:Object.getOwnPropertySymbols},ye=te("Reflect","ownKeys")||function(e){var t=ge.f(L(e)),n=ve.f;return n?t.concat(n(e)):t},be=function(e,t){for(var n=ye(t),i=O.f,r=I.f,a=0;a<n.length;a++){var o=n[a];S(e,o)||i(e,o,r(t,o))}},we=/#|\.prototype\./,ke=function(e,t){var n=Se[Te(e)];return n==Ae||n!=Ee&&("function"==typeof t?l(t):!!t)},Te=ke.normalize=function(e){return String(e).replace(we,".").toLowerCase()},Se=ke.data={},Ee=ke.NATIVE="N",Ae=ke.POLYFILL="P",xe=ke,Pe=I.f,Ce=function(e,t){var n,i,r,a,o,l=e.target,c=e.global,u=e.stat;if(n=c?s:u?s[l]||N(l,{}):(s[l]||{}).prototype)for(i in t){if(a=t[i],r=e.noTargetGet?(o=Pe(n,i))&&o.value:n[i],!xe(c?i:l+(u?".":"#")+i,e.forced)&&void 0!==r){if(typeof a==typeof r)continue;be(a,r)}(e.sham||r&&r.sham)&&j(a,"sham",!0),J(n,i,a,e)}},Ie=!!Object.getOwnPropertySymbols&&!l(function(){return!String(Symbol())}),Le=Array.isArray||function(e){return"Array"==m(e)},Me=function(e){return Object(y(e))},Oe=Object.keys||function(e){return de(e,pe)},je=c?Object.defineProperties:function(e,t){L(e);for(var n,i=Oe(t),r=i.length,a=0;r>a;)O.f(e,n=i[a++],t[n]);return e},Ne=te("document","documentElement"),_e=B("IE_PROTO"),Re=function(){},Ue=function(){var e,t=x("iframe"),n=pe.length;for(t.style.display="none",Ne.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),Ue=e.F;n--;)delete Ue.prototype[pe[n]];return Ue()},Fe=Object.create||function(e,t){var n;return null!==e?(Re.prototype=L(e),n=new Re,Re.prototype=null,n[_e]=e):n=Ue(),void 0===t?n:je(n,t)};z[_e]=!0;var qe=ge.f,De={}.toString,He="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Ve={f:function(e){return He&&"[object Window]"==De.call(e)?function(e){try{return qe(e)}catch(e){return He.slice()}}(e):qe(b(e))}},Be=s.Symbol,ze=_("wks"),We=function(e){return ze[e]||(ze[e]=Ie&&Be[e]||(Ie?Be:H)("Symbol."+e))},Ke={f:We},$e=O.f,Ye=function(e){var t=Z.Symbol||(Z.Symbol={});S(t,e)||$e(t,e,{value:Ke.f(e)})},Ge=O.f,Qe=We("toStringTag"),Xe=function(e,t,n){e&&!S(e=n?e:e.prototype,Qe)&&Ge(e,Qe,{configurable:!0,value:t})},Je=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},Ze=function(e,t,n){if(Je(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}},et=We("species"),tt=function(e,t){var n;return Le(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!Le(n.prototype)?w(n)&&null===(n=n[et])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)},nt=[].push,it=function(e){var t=1==e,n=2==e,i=3==e,r=4==e,a=6==e,o=5==e||a;return function(s,l,c,u){for(var h,f,d=Me(s),p=v(d),m=Ze(l,c,3),g=oe(p.length),y=0,b=u||tt,w=t?b(s,g):n?b(s,0):void 0;g>y;y++)if((o||y in p)&&(f=m(h=p[y],y,d),e))if(t)w[y]=f;else if(f)switch(e){case 3:return!0;case 5:return h;case 6:return y;case 2:nt.call(w,h)}else if(r)return!1;return a?-1:i||r?r:w}},rt={forEach:it(0),map:it(1),filter:it(2),some:it(3),every:it(4),find:it(5),findIndex:it(6)},at=rt.forEach,ot=B("hidden"),st=We("toPrimitive"),lt=X.set,ct=X.getterFor("Symbol"),ut=Object.prototype,ht=s.Symbol,ft=s.JSON,dt=ft&&ft.stringify,pt=I.f,mt=O.f,gt=Ve.f,vt=f.f,yt=_("symbols"),bt=_("op-symbols"),wt=_("string-to-symbol-registry"),kt=_("symbol-to-string-registry"),Tt=_("wks"),St=s.QObject,Et=!St||!St.prototype||!St.prototype.findChild,At=c&&l(function(){return 7!=Fe(mt({},"a",{get:function(){return mt(this,"a",{value:7}).a}})).a})?function(e,t,n){var i=pt(ut,t);i&&delete ut[t],mt(e,t,n),i&&e!==ut&&mt(ut,t,i)}:mt,xt=function(e,t){var n=yt[e]=Fe(ht.prototype);return lt(n,{type:"Symbol",tag:e,description:t}),c||(n.description=t),n},Pt=Ie&&"symbol"==typeof ht.iterator?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof ht},Ct=function(e,t,n){e===ut&&Ct(bt,t,n),L(e);var i=k(t,!0);return L(n),S(yt,i)?(n.enumerable?(S(e,ot)&&e[ot][i]&&(e[ot][i]=!1),n=Fe(n,{enumerable:d(0,!1)})):(S(e,ot)||mt(e,ot,d(1,{})),e[ot][i]=!0),At(e,i,n)):mt(e,i,n)},It=function(e,t){L(e);var n=b(t),i=Oe(n).concat(jt(n));return at(i,function(t){c&&!Lt.call(n,t)||Ct(e,t,n[t])}),e},Lt=function(e){var t=k(e,!0),n=vt.call(this,t);return!(this===ut&&S(yt,t)&&!S(bt,t))&&(!(n||!S(this,t)||!S(yt,t)||S(this,ot)&&this[ot][t])||n)},Mt=function(e,t){var n=b(e),i=k(t,!0);if(n!==ut||!S(yt,i)||S(bt,i)){var r=pt(n,i);return!r||!S(yt,i)||S(n,ot)&&n[ot][i]||(r.enumerable=!0),r}},Ot=function(e){var t=gt(b(e)),n=[];return at(t,function(e){S(yt,e)||S(z,e)||n.push(e)}),n},jt=function(e){var t=e===ut,n=gt(t?bt:b(e)),i=[];return at(n,function(e){!S(yt,e)||t&&!S(ut,e)||i.push(yt[e])}),i};Ie||(J((ht=function(){if(this instanceof ht)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=H(e),n=function(e){this===ut&&n.call(bt,e),S(this,ot)&&S(this[ot],t)&&(this[ot][t]=!1),At(this,t,d(1,e))};return c&&Et&&At(ut,t,{configurable:!0,set:n}),xt(t,e)}).prototype,"toString",function(){return ct(this).tag}),f.f=Lt,O.f=Ct,I.f=Mt,ge.f=Ve.f=Ot,ve.f=jt,c&&(mt(ht.prototype,"description",{configurable:!0,get:function(){return ct(this).description}}),J(ut,"propertyIsEnumerable",Lt,{unsafe:!0})),Ke.f=function(e){return xt(We(e),e)}),Ce({global:!0,wrap:!0,forced:!Ie,sham:!Ie},{Symbol:ht}),at(Oe(Tt),function(e){Ye(e)}),Ce({target:"Symbol",stat:!0,forced:!Ie},{for:function(e){var t=String(e);if(S(wt,t))return wt[t];var n=ht(t);return wt[t]=n,kt[n]=t,n},keyFor:function(e){if(!Pt(e))throw TypeError(e+" is not a symbol");if(S(kt,e))return kt[e]},useSetter:function(){Et=!0},useSimple:function(){Et=!1}}),Ce({target:"Object",stat:!0,forced:!Ie,sham:!c},{create:function(e,t){return void 0===t?Fe(e):It(Fe(e),t)},defineProperty:Ct,defineProperties:It,getOwnPropertyDescriptor:Mt}),Ce({target:"Object",stat:!0,forced:!Ie},{getOwnPropertyNames:Ot,getOwnPropertySymbols:jt}),Ce({target:"Object",stat:!0,forced:l(function(){ve.f(1)})},{getOwnPropertySymbols:function(e){return ve.f(Me(e))}}),ft&&Ce({target:"JSON",stat:!0,forced:!Ie||l(function(){var e=ht();return"[null]"!=dt([e])||"{}"!=dt({a:e})||"{}"!=dt(Object(e))})},{stringify:function(e){for(var t,n,i=[e],r=1;arguments.length>r;)i.push(arguments[r++]);if(n=t=i[1],(w(t)||void 0!==e)&&!Pt(e))return Le(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!Pt(t))return t}),i[1]=t,dt.apply(ft,i)}}),ht.prototype[st]||j(ht.prototype,st,ht.prototype.valueOf),Xe(ht,"Symbol"),z[ot]=!0;var Nt=O.f,_t=s.Symbol;if(c&&"function"==typeof _t&&(!("description"in _t.prototype)||void 0!==_t().description)){var Rt={},Ut=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof Ut?new _t(e):void 0===e?_t():_t(e);return""===e&&(Rt[t]=!0),t};be(Ut,_t);var Ft=Ut.prototype=_t.prototype;Ft.constructor=Ut;var qt=Ft.toString,Dt="Symbol(test)"==String(_t("test")),Ht=/^Symbol\((.*)\)[^)]+$/;Nt(Ft,"description",{configurable:!0,get:function(){var e=w(this)?this.valueOf():this,t=qt.call(e);if(S(Rt,e))return"";var n=Dt?t.slice(7,-1):t.replace(Ht,"$1");return""===n?void 0:n}}),Ce({global:!0,forced:!0},{Symbol:Ut})}Ye("iterator");var Vt=We("unscopables"),Bt=Array.prototype;null==Bt[Vt]&&j(Bt,Vt,Fe(null));var zt,Wt,Kt,$t=function(e){Bt[Vt][e]=!0},Yt={},Gt=!l(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}),Qt=B("IE_PROTO"),Xt=Object.prototype,Jt=Gt?Object.getPrototypeOf:function(e){return e=Me(e),S(e,Qt)?e[Qt]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?Xt:null},Zt=We("iterator"),en=!1;[].keys&&("next"in(Kt=[].keys())?(Wt=Jt(Jt(Kt)))!==Object.prototype&&(zt=Wt):en=!0),null==zt&&(zt={}),S(zt,Zt)||j(zt,Zt,function(){return this});var tn={IteratorPrototype:zt,BUGGY_SAFARI_ITERATORS:en},nn=tn.IteratorPrototype,rn=function(){return this},an=function(e,t,n){var i=t+" Iterator";return e.prototype=Fe(nn,{next:d(1,n)}),Xe(e,i,!1),Yt[i]=rn,e},on=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,i){return L(n),function(e){if(!w(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(i),t?e.call(n,i):n.__proto__=i,n}}():void 0),sn=tn.IteratorPrototype,ln=tn.BUGGY_SAFARI_ITERATORS,cn=We("iterator"),un=function(){return this},hn=function(e,t,n,i,r,a,o){an(n,t,i);var s,l,c,u=function(e){if(e===r&&m)return m;if(!ln&&e in d)return d[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},h=t+" Iterator",f=!1,d=e.prototype,p=d[cn]||d["@@iterator"]||r&&d[r],m=!ln&&p||u(r),g="Array"==t&&d.entries||p;if(g&&(s=Jt(g.call(new e)),sn!==Object.prototype&&s.next&&(Jt(s)!==sn&&(on?on(s,sn):"function"!=typeof s[cn]&&j(s,cn,un)),Xe(s,h,!0))),"values"==r&&p&&"values"!==p.name&&(f=!0,m=function(){return p.call(this)}),d[cn]!==m&&j(d,cn,m),Yt[t]=m,r)if(l={values:u("values"),keys:a?m:u("keys"),entries:u("entries")},o)for(c in l)!ln&&!f&&c in d||J(d,c,l[c]);else Ce({target:t,proto:!0,forced:ln||f},l);return l},fn=X.set,dn=X.getterFor("Array Iterator"),pn=hn(Array,"Array",function(e,t){fn(this,{type:"Array Iterator",target:b(e),index:0,kind:t})},function(){var e=dn(this),t=e.target,n=e.kind,i=e.index++;return!t||i>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:i,done:!1}:"values"==n?{value:t[i],done:!1}:{value:[i,t[i]],done:!1}},"values");Yt.Arguments=Yt.Array,$t("keys"),$t("values"),$t("entries");var mn=function(e,t){var n=[][e];return!n||!l(function(){n.call(null,t||function(){throw 1},1)})},gn=[].join,vn=v!=Object,yn=mn("join",",");Ce({target:"Array",proto:!0,forced:vn||yn},{join:function(e){return gn.call(b(this),void 0===e?",":e)}});var bn=function(e,t,n){var i=k(t);i in e?O.f(e,i,d(0,n)):e[i]=n},wn=We("species"),kn=function(e){return!l(function(){var t=[];return(t.constructor={})[wn]=function(){return{foo:1}},1!==t[e](Boolean).foo})},Tn=We("species"),Sn=[].slice,En=Math.max;Ce({target:"Array",proto:!0,forced:!kn("slice")},{slice:function(e,t){var n,i,r,a=b(this),o=oe(a.length),s=ce(e,o),l=ce(void 0===t?o:t,o);if(Le(a)&&("function"!=typeof(n=a.constructor)||n!==Array&&!Le(n.prototype)?w(n)&&null===(n=n[Tn])&&(n=void 0):n=void 0,n===Array||void 0===n))return Sn.call(a,s,l);for(i=new(void 0===n?Array:n)(En(l-s,0)),r=0;s<l;s++,r++)s in a&&bn(i,r,a[s]);return i.length=r,i}});var An=We("toStringTag"),xn="Arguments"==m(function(){return arguments}()),Pn=function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),An))?n:xn?m(t):"Object"==(i=m(t))&&"function"==typeof t.callee?"Arguments":i},Cn={};Cn[We("toStringTag")]="z";var In="[object z]"!==String(Cn)?function(){return"[object "+Pn(this)+"]"}:Cn.toString,Ln=Object.prototype;In!==Ln.toString&&J(Ln,"toString",In,{unsafe:!0});var Mn=function(){var e=L(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},On=RegExp.prototype,jn=On.toString,Nn=l(function(){return"/a/b"!=jn.call({source:"a",flags:"b"})}),_n="toString"!=jn.name;(Nn||_n)&&J(RegExp.prototype,"toString",function(){var e=L(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in On)?Mn.call(e):n)},{unsafe:!0});var Rn=function(e){return function(t,n){var i,r,a=String(y(t)),o=re(n),s=a.length;return o<0||o>=s?e?"":void 0:(i=a.charCodeAt(o))<55296||i>56319||o+1===s||(r=a.charCodeAt(o+1))<56320||r>57343?e?a.charAt(o):i:e?a.slice(o,o+2):r-56320+(i-55296<<10)+65536}},Un={codeAt:Rn(!1),charAt:Rn(!0)},Fn=Un.charAt,qn=X.set,Dn=X.getterFor("String Iterator");hn(String,"String",function(e){qn(this,{type:"String Iterator",string:String(e),index:0})},function(){var e,t=Dn(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=Fn(n,i),t.index+=e.length,{value:e,done:!1})});var Hn=RegExp.prototype.exec,Vn=String.prototype.replace,Bn=Hn,zn=function(){var e=/a/,t=/b*/g;return Hn.call(e,"a"),Hn.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),Wn=void 0!==/()??/.exec("")[1];(zn||Wn)&&(Bn=function(e){var t,n,i,r,a=this;return Wn&&(n=new RegExp("^"+a.source+"$(?!\\s)",Mn.call(a))),zn&&(t=a.lastIndex),i=Hn.call(a,e),zn&&i&&(a.lastIndex=a.global?i.index+i[0].length:t),Wn&&i&&i.length>1&&Vn.call(i[0],n,function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)}),i});var Kn=Bn,$n=We("species"),Yn=!l(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),Gn=!l(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}),Qn=function(e,t,n,i){var r=We(e),a=!l(function(){var t={};return t[r]=function(){return 7},7!=""[e](t)}),o=a&&!l(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[$n]=function(){return n}),n[r](""),!t});if(!a||!o||"replace"===e&&!Yn||"split"===e&&!Gn){var s=/./[r],c=n(r,""[e],function(e,t,n,i,r){return t.exec===Kn?a&&!r?{done:!0,value:s.call(t,n,i)}:{done:!0,value:e.call(n,t,i)}:{done:!1}}),u=c[0],h=c[1];J(String.prototype,e,u),J(RegExp.prototype,r,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)}),i&&j(RegExp.prototype[r],"sham",!0)}},Xn=Un.charAt,Jn=function(e,t,n){return t+(n?Xn(e,t).length:1)},Zn=function(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==m(e))throw TypeError("RegExp#exec called on incompatible receiver");return Kn.call(e,t)},ei=Math.max,ti=Math.min,ni=Math.floor,ii=/\$([$&'`]|\d\d?|<[^>]*>)/g,ri=/\$([$&'`]|\d\d?)/g;Qn("replace",2,function(e,t,n){return[function(n,i){var r=y(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,r,i):t.call(String(r),n,i)},function(e,r){var a=n(t,e,this,r);if(a.done)return a.value;var o=L(e),s=String(this),l="function"==typeof r;l||(r=String(r));var c=o.global;if(c){var u=o.unicode;o.lastIndex=0}for(var h=[];;){var f=Zn(o,s);if(null===f)break;if(h.push(f),!c)break;""===String(f[0])&&(o.lastIndex=Jn(s,oe(o.lastIndex),u))}for(var d,p="",m=0,g=0;g<h.length;g++){f=h[g];for(var v=String(f[0]),y=ei(ti(re(f.index),s.length),0),b=[],w=1;w<f.length;w++)b.push(void 0===(d=f[w])?d:String(d));var k=f.groups;if(l){var T=[v].concat(b,y,s);void 0!==k&&T.push(k);var S=String(r.apply(void 0,T))}else S=i(v,s,y,b,k,r);y>=m&&(p+=s.slice(m,y)+S,m=y+v.length)}return p+s.slice(m)}];function i(e,n,i,r,a,o){var s=i+e.length,l=r.length,c=ri;return void 0!==a&&(a=Me(a),c=ii),t.call(o,c,function(t,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,i);case"'":return n.slice(s);case"<":c=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return t;if(u>l){var h=ni(u/10);return 0===h?t:h<=l?void 0===r[h-1]?o.charAt(1):r[h-1]+o.charAt(1):t}c=r[u-1]}return void 0===c?"":c})}});var ai=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};Qn("search",1,function(e,t,n){return[function(t){var n=y(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,n):new RegExp(t)[e](String(n))},function(e){var i=n(t,e,this);if(i.done)return i.value;var r=L(e),a=String(this),o=r.lastIndex;ai(o,0)||(r.lastIndex=0);var s=Zn(r,a);return ai(r.lastIndex,o)||(r.lastIndex=o),null===s?-1:s.index}]});var oi=We("match"),si=function(e){var t;return w(e)&&(void 0!==(t=e[oi])?!!t:"RegExp"==m(e))},li=We("species"),ci=function(e,t){var n,i=L(e).constructor;return void 0===i||null==(n=L(i)[li])?t:Je(n)},ui=[].push,hi=Math.min,fi=!l(function(){return!RegExp(4294967295,"y")});Qn("split",2,function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=String(y(this)),r=void 0===n?4294967295:n>>>0;if(0===r)return[];if(void 0===e)return[i];if(!si(e))return t.call(i,e,r);for(var a,o,s,l=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,h=new RegExp(e.source,c+"g");(a=Kn.call(h,i))&&!((o=h.lastIndex)>u&&(l.push(i.slice(u,a.index)),a.length>1&&a.index<i.length&&ui.apply(l,a.slice(1)),s=a[0].length,u=o,l.length>=r));)h.lastIndex===a.index&&h.lastIndex++;return u===i.length?!s&&h.test("")||l.push(""):l.push(i.slice(u)),l.length>r?l.slice(0,r):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=y(this),a=null==t?void 0:t[e];return void 0!==a?a.call(t,r,n):i.call(String(r),t,n)},function(e,r){var a=n(i,e,this,r,i!==t);if(a.done)return a.value;var o=L(e),s=String(this),l=ci(o,RegExp),c=o.unicode,u=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(fi?"y":"g"),h=new l(fi?o:"^(?:"+o.source+")",u),f=void 0===r?4294967295:r>>>0;if(0===f)return[];if(0===s.length)return null===Zn(h,s)?[s]:[];for(var d=0,p=0,m=[];p<s.length;){h.lastIndex=fi?p:0;var g,v=Zn(h,fi?s:s.slice(p));if(null===v||(g=hi(oe(h.lastIndex+(fi?0:p)),s.length))===d)p=Jn(s,p,c);else{if(m.push(s.slice(d,p)),m.length===f)return m;for(var y=1;y<=v.length-1;y++)if(m.push(v[y]),m.length===f)return m;p=d=g}}return m.push(s.slice(d)),m}]},!fi);var di={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},pi=rt.forEach,mi=mn("forEach")?function(e){return pi(this,e,arguments.length>1?arguments[1]:void 0)}:[].forEach;for(var gi in di){var vi=s[gi],yi=vi&&vi.prototype;if(yi&&yi.forEach!==mi)try{j(yi,"forEach",mi)}catch(e){yi.forEach=mi}}var bi=We("iterator"),wi=We("toStringTag"),ki=pn.values;for(var Ti in di){var Si=s[Ti],Ei=Si&&Si.prototype;if(Ei){if(Ei[bi]!==ki)try{j(Ei,bi,ki)}catch(e){Ei[bi]=ki}if(Ei[wi]||j(Ei,wi,Ti),di[Ti])for(var Ai in pn)if(Ei[Ai]!==pn[Ai])try{j(Ei,Ai,pn[Ai])}catch(e){Ei[Ai]=pn[Ai]}}}var xi=We("iterator"),Pi=!l(function(){var e=new URL("b?e=1","http://a"),t=e.searchParams;return e.pathname="c%20d",!t.sort||"http://a/c%20d?e=1"!==e.href||"1"!==t.get("e")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[xi]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash}),Ci=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e},Ii=Object.assign,Li=!Ii||l(function(){var e={},t={},n=Symbol();return e[n]=7,"abcdefghijklmnopqrst".split("").forEach(function(e){t[e]=e}),7!=Ii({},e)[n]||"abcdefghijklmnopqrst"!=Oe(Ii({},t)).join("")})?function(e,t){for(var n=Me(e),i=arguments.length,r=1,a=ve.f,o=f.f;i>r;)for(var s,l=v(arguments[r++]),u=a?Oe(l).concat(a(l)):Oe(l),h=u.length,d=0;h>d;)s=u[d++],c&&!o.call(l,s)||(n[s]=l[s]);return n}:Ii,Mi=function(e,t,n,i){try{return i?t(L(n)[0],n[1]):t(n)}catch(t){var r=e.return;throw void 0!==r&&L(r.call(e)),t}},Oi=We("iterator"),ji=Array.prototype,Ni=function(e){return void 0!==e&&(Yt.Array===e||ji[Oi]===e)},_i=We("iterator"),Ri=function(e){if(null!=e)return e[_i]||e["@@iterator"]||Yt[Pn(e)]},Ui=function(e){var t,n,i,r,a=Me(e),o="function"==typeof this?this:Array,s=arguments.length,l=s>1?arguments[1]:void 0,c=void 0!==l,u=0,h=Ri(a);if(c&&(l=Ze(l,s>2?arguments[2]:void 0,2)),null==h||o==Array&&Ni(h))for(n=new o(t=oe(a.length));t>u;u++)bn(n,u,c?l(a[u],u):a[u]);else for(r=h.call(a),n=new o;!(i=r.next()).done;u++)bn(n,u,c?Mi(r,l,[i.value,u],!0):i.value);return n.length=u,n},Fi=/[^\0-\u007E]/,qi=/[.\u3002\uFF0E\uFF61]/g,Di="Overflow: input needs wider integers to process",Hi=Math.floor,Vi=String.fromCharCode,Bi=function(e){return e+22+75*(e<26)},zi=function(e,t,n){var i=0;for(e=n?Hi(e/700):e>>1,e+=Hi(e/t);e>455;i+=36)e=Hi(e/35);return Hi(i+36*e/(e+38))},Wi=function(e){var t,n,i=[],r=(e=function(e){for(var t=[],n=0,i=e.length;n<i;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var a=e.charCodeAt(n++);56320==(64512&a)?t.push(((1023&r)<<10)+(1023&a)+65536):(t.push(r),n--)}else t.push(r)}return t}(e)).length,a=128,o=0,s=72;for(t=0;t<e.length;t++)(n=e[t])<128&&i.push(Vi(n));var l=i.length,c=l;for(l&&i.push("-");c<r;){var u=2147483647;for(t=0;t<e.length;t++)(n=e[t])>=a&&n<u&&(u=n);var h=c+1;if(u-a>Hi((2147483647-o)/h))throw RangeError(Di);for(o+=(u-a)*h,a=u,t=0;t<e.length;t++){if((n=e[t])<a&&++o>2147483647)throw RangeError(Di);if(n==a){for(var f=o,d=36;;d+=36){var p=d<=s?1:d>=s+26?26:d-s;if(f<p)break;var m=f-p,g=36-p;i.push(Vi(Bi(p+m%g))),f=Hi(m/g)}i.push(Vi(Bi(f))),s=zi(o,h,c==l),o=0,++c}}++o,++a}return i.join("")},Ki=function(e,t,n){for(var i in t)J(e,i,t[i],n);return e},$i=function(e){var t=Ri(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return L(t.call(e))},Yi=We("iterator"),Gi=X.set,Qi=X.getterFor("URLSearchParams"),Xi=X.getterFor("URLSearchParamsIterator"),Ji=/\+/g,Zi=Array(4),er=function(e){return Zi[e-1]||(Zi[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},tr=function(e){try{return decodeURIComponent(e)}catch(t){return e}},nr=function(e){var t=e.replace(Ji," "),n=4;try{return decodeURIComponent(t)}catch(e){for(;n;)t=t.replace(er(n--),tr);return t}},ir=/[!'()~]|%20/g,rr={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},ar=function(e){return rr[e]},or=function(e){return encodeURIComponent(e).replace(ir,ar)},sr=function(e,t){if(t)for(var n,i,r=t.split("&"),a=0;a<r.length;)(n=r[a++]).length&&(i=n.split("="),e.push({key:nr(i.shift()),value:nr(i.join("="))}))},lr=function(e){this.entries.length=0,sr(this.entries,e)},cr=function(e,t){if(e<t)throw TypeError("Not enough arguments")},ur=an(function(e,t){Gi(this,{type:"URLSearchParamsIterator",iterator:$i(Qi(e).entries),kind:t})},"Iterator",function(){var e=Xi(this),t=e.kind,n=e.iterator.next(),i=n.value;return n.done||(n.value="keys"===t?i.key:"values"===t?i.value:[i.key,i.value]),n}),hr=function(){Ci(this,hr,"URLSearchParams");var e,t,n,i,r,a,o,s=arguments.length>0?arguments[0]:void 0,l=[];if(Gi(this,{type:"URLSearchParams",entries:l,updateURL:function(){},updateSearchParams:lr}),void 0!==s)if(w(s))if("function"==typeof(e=Ri(s)))for(t=e.call(s);!(n=t.next()).done;){if((r=(i=$i(L(n.value))).next()).done||(a=i.next()).done||!i.next().done)throw TypeError("Expected sequence with length 2");l.push({key:r.value+"",value:a.value+""})}else for(o in s)S(s,o)&&l.push({key:o,value:s[o]+""});else sr(l,"string"==typeof s?"?"===s.charAt(0)?s.slice(1):s:s+"")},fr=hr.prototype;Ki(fr,{append:function(e,t){cr(arguments.length,2);var n=Qi(this);n.entries.push({key:e+"",value:t+""}),n.updateURL()},delete:function(e){cr(arguments.length,1);for(var t=Qi(this),n=t.entries,i=e+"",r=0;r<n.length;)n[r].key===i?n.splice(r,1):r++;t.updateURL()},get:function(e){cr(arguments.length,1);for(var t=Qi(this).entries,n=e+"",i=0;i<t.length;i++)if(t[i].key===n)return t[i].value;return null},getAll:function(e){cr(arguments.length,1);for(var t=Qi(this).entries,n=e+"",i=[],r=0;r<t.length;r++)t[r].key===n&&i.push(t[r].value);return i},has:function(e){cr(arguments.length,1);for(var t=Qi(this).entries,n=e+"",i=0;i<t.length;)if(t[i++].key===n)return!0;return!1},set:function(e,t){cr(arguments.length,1);for(var n,i=Qi(this),r=i.entries,a=!1,o=e+"",s=t+"",l=0;l<r.length;l++)(n=r[l]).key===o&&(a?r.splice(l--,1):(a=!0,n.value=s));a||r.push({key:o,value:s}),i.updateURL()},sort:function(){var e,t,n,i=Qi(this),r=i.entries,a=r.slice();for(r.length=0,n=0;n<a.length;n++){for(e=a[n],t=0;t<n;t++)if(r[t].key>e.key){r.splice(t,0,e);break}t===n&&r.push(e)}i.updateURL()},forEach:function(e){for(var t,n=Qi(this).entries,i=Ze(e,arguments.length>1?arguments[1]:void 0,3),r=0;r<n.length;)i((t=n[r++]).value,t.key,this)},keys:function(){return new ur(this,"keys")},values:function(){return new ur(this,"values")},entries:function(){return new ur(this,"entries")}},{enumerable:!0}),J(fr,Yi,fr.entries),J(fr,"toString",function(){for(var e,t=Qi(this).entries,n=[],i=0;i<t.length;)e=t[i++],n.push(or(e.key)+"="+or(e.value));return n.join("&")},{enumerable:!0}),Xe(hr,"URLSearchParams"),Ce({global:!0,forced:!Pi},{URLSearchParams:hr});var dr,pr={URLSearchParams:hr,getState:Qi},mr=Un.codeAt,gr=s.URL,vr=pr.URLSearchParams,yr=pr.getState,br=X.set,wr=X.getterFor("URL"),kr=Math.floor,Tr=Math.pow,Sr=/[A-Za-z]/,Er=/[\d+\-.A-Za-z]/,Ar=/\d/,xr=/^(0x|0X)/,Pr=/^[0-7]+$/,Cr=/^\d+$/,Ir=/^[\dA-Fa-f]+$/,Lr=/[\u0000\u0009\u000A\u000D #%\/:?@[\\]]/,Mr=/[\u0000\u0009\u000A\u000D #\/:?@[\\]]/,Or=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,jr=/[\u0009\u000A\u000D]/g,Nr=function(e,t){var n,i,r;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return"Invalid host";if(!(n=Rr(t.slice(1,-1))))return"Invalid host";e.host=n}else if(zr(e)){if(t=function(e){var t,n,i=[],r=e.toLowerCase().replace(qi,".").split(".");for(t=0;t<r.length;t++)n=r[t],i.push(Fi.test(n)?"xn--"+Wi(n):n);return i.join(".")}(t),Lr.test(t))return"Invalid host";if(null===(n=_r(t)))return"Invalid host";e.host=n}else{if(Mr.test(t))return"Invalid host";for(n="",i=Ui(t),r=0;r<i.length;r++)n+=Vr(i[r],Fr);e.host=n}},_r=function(e){var t,n,i,r,a,o,s,l=e.split(".");if(l.length&&""==l[l.length-1]&&l.pop(),(t=l.length)>4)return e;for(n=[],i=0;i<t;i++){if(""==(r=l[i]))return e;if(a=10,r.length>1&&"0"==r.charAt(0)&&(a=xr.test(r)?16:8,r=r.slice(8==a?1:2)),""===r)o=0;else{if(!(10==a?Cr:8==a?Pr:Ir).test(r))return e;o=parseInt(r,a)}n.push(o)}for(i=0;i<t;i++)if(o=n[i],i==t-1){if(o>=Tr(256,5-t))return null}else if(o>255)return null;for(s=n.pop(),i=0;i<n.length;i++)s+=n[i]*Tr(256,3-i);return s},Rr=function(e){var t,n,i,r,a,o,s,l=[0,0,0,0,0,0,0,0],c=0,u=null,h=0,f=function(){return e.charAt(h)};if(":"==f()){if(":"!=e.charAt(1))return;h+=2,u=++c}for(;f();){if(8==c)return;if(":"!=f()){for(t=n=0;n<4&&Ir.test(f());)t=16*t+parseInt(f(),16),h++,n++;if("."==f()){if(0==n)return;if(h-=n,c>6)return;for(i=0;f();){if(r=null,i>0){if(!("."==f()&&i<4))return;h++}if(!Ar.test(f()))return;for(;Ar.test(f());){if(a=parseInt(f(),10),null===r)r=a;else{if(0==r)return;r=10*r+a}if(r>255)return;h++}l[c]=256*l[c]+r,2!=++i&&4!=i||c++}if(4!=i)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;l[c++]=t}else{if(null!==u)return;h++,u=++c}}if(null!==u)for(o=c-u,c=7;0!=c&&o>0;)s=l[c],l[c--]=l[u+o-1],l[u+--o]=s;else if(8!=c)return;return l},Ur=function(e){var t,n,i,r;if("number"==typeof e){for(t=[],n=0;n<4;n++)t.unshift(e%256),e=kr(e/256);return t.join(".")}if("object"==typeof e){for(t="",i=function(e){for(var t=null,n=1,i=null,r=0,a=0;a<8;a++)0!==e[a]?(r>n&&(t=i,n=r),i=null,r=0):(null===i&&(i=a),++r);return r>n&&(t=i,n=r),t}(e),n=0;n<8;n++)r&&0===e[n]||(r&&(r=!1),i===n?(t+=n?":":"::",r=!0):(t+=e[n].toString(16),n<7&&(t+=":")));return"["+t+"]"}return e},Fr={},qr=Li({},Fr,{" ":1,'"':1,"<":1,">":1,"`":1}),Dr=Li({},qr,{"#":1,"?":1,"{":1,"}":1}),Hr=Li({},Dr,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Vr=function(e,t){var n=mr(e,0);return n>32&&n<127&&!S(t,e)?e:encodeURIComponent(e)},Br={ftp:21,file:null,gopher:70,http:80,https:443,ws:80,wss:443},zr=function(e){return S(Br,e.scheme)},Wr=function(e){return""!=e.username||""!=e.password},Kr=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},$r=function(e,t){var n;return 2==e.length&&Sr.test(e.charAt(0))&&(":"==(n=e.charAt(1))||!t&&"|"==n)},Yr=function(e){var t;return e.length>1&&$r(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},Gr=function(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&$r(t[0],!0)||t.pop()},Qr=function(e){return"."===e||"%2e"===e.toLowerCase()},Xr={},Jr={},Zr={},ea={},ta={},na={},ia={},ra={},aa={},oa={},sa={},la={},ca={},ua={},ha={},fa={},da={},pa={},ma={},ga={},va={},ya=function(e,t,n,i){var r,a,o,s,l,c=n||Xr,u=0,h="",f=!1,d=!1,p=!1;for(n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(Or,"")),t=t.replace(jr,""),r=Ui(t);u<=r.length;){switch(a=r[u],c){case Xr:if(!a||!Sr.test(a)){if(n)return"Invalid scheme";c=Zr;continue}h+=a.toLowerCase(),c=Jr;break;case Jr:if(a&&(Er.test(a)||"+"==a||"-"==a||"."==a))h+=a.toLowerCase();else{if(":"!=a){if(n)return"Invalid scheme";h="",c=Zr,u=0;continue}if(n&&(zr(e)!=S(Br,h)||"file"==h&&(Wr(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=h,n)return void(zr(e)&&Br[e.scheme]==e.port&&(e.port=null));h="","file"==e.scheme?c=ua:zr(e)&&i&&i.scheme==e.scheme?c=ea:zr(e)?c=ra:"/"==r[u+1]?(c=ta,u++):(e.cannotBeABaseURL=!0,e.path.push(""),c=ma)}break;case Zr:if(!i||i.cannotBeABaseURL&&"#"!=a)return"Invalid scheme";if(i.cannotBeABaseURL&&"#"==a){e.scheme=i.scheme,e.path=i.path.slice(),e.query=i.query,e.fragment="",e.cannotBeABaseURL=!0,c=va;break}c="file"==i.scheme?ua:na;continue;case ea:if("/"!=a||"/"!=r[u+1]){c=na;continue}c=aa,u++;break;case ta:if("/"==a){c=oa;break}c=pa;continue;case na:if(e.scheme=i.scheme,a==dr)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query;else if("/"==a||"\\"==a&&zr(e))c=ia;else if("?"==a)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query="",c=ga;else{if("#"!=a){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.path.pop(),c=pa;continue}e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query,e.fragment="",c=va}break;case ia:if(!zr(e)||"/"!=a&&"\\"!=a){if("/"!=a){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,c=pa;continue}c=oa}else c=aa;break;case ra:if(c=aa,"/"!=a||"/"!=h.charAt(u+1))continue;u++;break;case aa:if("/"!=a&&"\\"!=a){c=oa;continue}break;case oa:if("@"==a){f&&(h="%40"+h),f=!0,o=Ui(h);for(var m=0;m<o.length;m++){var g=o[m];if(":"!=g||p){var v=Vr(g,Hr);p?e.password+=v:e.username+=v}else p=!0}h=""}else if(a==dr||"/"==a||"?"==a||"#"==a||"\\"==a&&zr(e)){if(f&&""==h)return"Invalid authority";u-=Ui(h).length+1,h="",c=sa}else h+=a;break;case sa:case la:if(n&&"file"==e.scheme){c=fa;continue}if(":"!=a||d){if(a==dr||"/"==a||"?"==a||"#"==a||"\\"==a&&zr(e)){if(zr(e)&&""==h)return"Invalid host";if(n&&""==h&&(Wr(e)||null!==e.port))return;if(s=Nr(e,h))return s;if(h="",c=da,n)return;continue}"["==a?d=!0:"]"==a&&(d=!1),h+=a}else{if(""==h)return"Invalid host";if(s=Nr(e,h))return s;if(h="",c=ca,n==la)return}break;case ca:if(!Ar.test(a)){if(a==dr||"/"==a||"?"==a||"#"==a||"\\"==a&&zr(e)||n){if(""!=h){var y=parseInt(h,10);if(y>65535)return"Invalid port";e.port=zr(e)&&y===Br[e.scheme]?null:y,h=""}if(n)return;c=da;continue}return"Invalid port"}h+=a;break;case ua:if(e.scheme="file","/"==a||"\\"==a)c=ha;else{if(!i||"file"!=i.scheme){c=pa;continue}if(a==dr)e.host=i.host,e.path=i.path.slice(),e.query=i.query;else if("?"==a)e.host=i.host,e.path=i.path.slice(),e.query="",c=ga;else{if("#"!=a){Yr(r.slice(u).join(""))||(e.host=i.host,e.path=i.path.slice(),Gr(e)),c=pa;continue}e.host=i.host,e.path=i.path.slice(),e.query=i.query,e.fragment="",c=va}}break;case ha:if("/"==a||"\\"==a){c=fa;break}i&&"file"==i.scheme&&!Yr(r.slice(u).join(""))&&($r(i.path[0],!0)?e.path.push(i.path[0]):e.host=i.host),c=pa;continue;case fa:if(a==dr||"/"==a||"\\"==a||"?"==a||"#"==a){if(!n&&$r(h))c=pa;else if(""==h){if(e.host="",n)return;c=da}else{if(s=Nr(e,h))return s;if("localhost"==e.host&&(e.host=""),n)return;h="",c=da}continue}h+=a;break;case da:if(zr(e)){if(c=pa,"/"!=a&&"\\"!=a)continue}else if(n||"?"!=a)if(n||"#"!=a){if(a!=dr&&(c=pa,"/"!=a))continue}else e.fragment="",c=va;else e.query="",c=ga;break;case pa:if(a==dr||"/"==a||"\\"==a&&zr(e)||!n&&("?"==a||"#"==a)){if(".."===(l=(l=h).toLowerCase())||"%2e."===l||".%2e"===l||"%2e%2e"===l?(Gr(e),"/"==a||"\\"==a&&zr(e)||e.path.push("")):Qr(h)?"/"==a||"\\"==a&&zr(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&$r(h)&&(e.host&&(e.host=""),h=h.charAt(0)+":"),e.path.push(h)),h="","file"==e.scheme&&(a==dr||"?"==a||"#"==a))for(;e.path.length>1&&""===e.path[0];)e.path.shift();"?"==a?(e.query="",c=ga):"#"==a&&(e.fragment="",c=va)}else h+=Vr(a,Dr);break;case ma:"?"==a?(e.query="",c=ga):"#"==a?(e.fragment="",c=va):a!=dr&&(e.path[0]+=Vr(a,Fr));break;case ga:n||"#"!=a?a!=dr&&("'"==a&&zr(e)?e.query+="%27":e.query+="#"==a?"%23":Vr(a,Fr)):(e.fragment="",c=va);break;case va:a!=dr&&(e.fragment+=Vr(a,qr))}u++}},ba=function(e){var t,n,i=Ci(this,ba,"URL"),r=arguments.length>1?arguments[1]:void 0,a=String(e),o=br(i,{type:"URL"});if(void 0!==r)if(r instanceof ba)t=wr(r);else if(n=ya(t={},String(r)))throw TypeError(n);if(n=ya(o,a,null,t))throw TypeError(n);var s=o.searchParams=new vr,l=yr(s);l.updateSearchParams(o.query),l.updateURL=function(){o.query=String(s)||null},c||(i.href=ka.call(i),i.origin=Ta.call(i),i.protocol=Sa.call(i),i.username=Ea.call(i),i.password=Aa.call(i),i.host=xa.call(i),i.hostname=Pa.call(i),i.port=Ca.call(i),i.pathname=Ia.call(i),i.search=La.call(i),i.searchParams=Ma.call(i),i.hash=Oa.call(i))},wa=ba.prototype,ka=function(){var e=wr(this),t=e.scheme,n=e.username,i=e.password,r=e.host,a=e.port,o=e.path,s=e.query,l=e.fragment,c=t+":";return null!==r?(c+="//",Wr(e)&&(c+=n+(i?":"+i:"")+"@"),c+=Ur(r),null!==a&&(c+=":"+a)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(c+="?"+s),null!==l&&(c+="#"+l),c},Ta=function(){var e=wr(this),t=e.scheme,n=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(e){return"null"}return"file"!=t&&zr(e)?t+"://"+Ur(e.host)+(null!==n?":"+n:""):"null"},Sa=function(){return wr(this).scheme+":"},Ea=function(){return wr(this).username},Aa=function(){return wr(this).password},xa=function(){var e=wr(this),t=e.host,n=e.port;return null===t?"":null===n?Ur(t):Ur(t)+":"+n},Pa=function(){var e=wr(this).host;return null===e?"":Ur(e)},Ca=function(){var e=wr(this).port;return null===e?"":String(e)},Ia=function(){var e=wr(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},La=function(){var e=wr(this).query;return e?"?"+e:""},Ma=function(){return wr(this).searchParams},Oa=function(){var e=wr(this).fragment;return e?"#"+e:""},ja=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(c&&je(wa,{href:ja(ka,function(e){var t=wr(this),n=String(e),i=ya(t,n);if(i)throw TypeError(i);yr(t.searchParams).updateSearchParams(t.query)}),origin:ja(Ta),protocol:ja(Sa,function(e){var t=wr(this);ya(t,String(e)+":",Xr)}),username:ja(Ea,function(e){var t=wr(this),n=Ui(String(e));if(!Kr(t)){t.username="";for(var i=0;i<n.length;i++)t.username+=Vr(n[i],Hr)}}),password:ja(Aa,function(e){var t=wr(this),n=Ui(String(e));if(!Kr(t)){t.password="";for(var i=0;i<n.length;i++)t.password+=Vr(n[i],Hr)}}),host:ja(xa,function(e){var t=wr(this);t.cannotBeABaseURL||ya(t,String(e),sa)}),hostname:ja(Pa,function(e){var t=wr(this);t.cannotBeABaseURL||ya(t,String(e),la)}),port:ja(Ca,function(e){var t=wr(this);Kr(t)||(""==(e=String(e))?t.port=null:ya(t,e,ca))}),pathname:ja(Ia,function(e){var t=wr(this);t.cannotBeABaseURL||(t.path=[],ya(t,e+"",da))}),search:ja(La,function(e){var t=wr(this);""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",ya(t,e,ga)),yr(t.searchParams).updateSearchParams(t.query)}),searchParams:ja(Ma),hash:ja(Oa,function(e){var t=wr(this);""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",ya(t,e,va)):t.fragment=null})}),J(wa,"toJSON",function(){return ka.call(this)},{enumerable:!0}),J(wa,"toString",function(){return ka.call(this)},{enumerable:!0}),gr){var Na=gr.createObjectURL,_a=gr.revokeObjectURL;Na&&J(ba,"createObjectURL",function(e){return Na.apply(gr,arguments)}),_a&&J(ba,"revokeObjectURL",function(e){return _a.apply(gr,arguments)})}function Ra(e){return(Ra="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ua(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fa(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function qa(e,t,n){return t&&Fa(e.prototype,t),n&&Fa(e,n),e}function Da(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ha(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Va(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Xe(ba,"URL"),Ce({global:!0,forced:!Pi,sham:!c},{URL:ba}),function(e){var t=function(){try{return!!Symbol.iterator}catch(e){return!1}}(),n=function(e){var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(n[Symbol.iterator]=function(){return n}),n},i=function(e){return encodeURIComponent(e).replace(/%20/g,"+")},r=function(e){return decodeURIComponent(String(e).replace(/\+/g," "))};"URLSearchParams"in e&&"a=1"===new e.URLSearchParams("?a=1").toString()||function(){var r=function e(t){Object.defineProperty(this,"_entries",{writable:!0,value:{}});var n=Ra(t);if("undefined"===n);else if("string"===n)""!==t&&this._fromString(t);else if(t instanceof e){var i=this;t.forEach(function(e,t){i.append(t,e)})}else{if(null===t||"object"!==n)throw new TypeError("Unsupported input's type for URLSearchParams");if("[object Array]"===Object.prototype.toString.call(t))for(var r=0;r<t.length;r++){var a=t[r];if("[object Array]"!==Object.prototype.toString.call(a)&&2===a.length)throw new TypeError("Expected [string, any] as entry at index "+r+" of URLSearchParams's input");this.append(a[0],a[1])}else for(var o in t)t.hasOwnProperty(o)&&this.append(o,t[o])}},a=r.prototype;a.append=function(e,t){e in this._entries?this._entries[e].push(String(t)):this._entries[e]=[String(t)]},a.delete=function(e){delete this._entries[e]},a.get=function(e){return e in this._entries?this._entries[e][0]:null},a.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]},a.has=function(e){return e in this._entries},a.set=function(e,t){this._entries[e]=[String(t)]},a.forEach=function(e,t){var n;for(var i in this._entries)if(this._entries.hasOwnProperty(i)){n=this._entries[i];for(var r=0;r<n.length;r++)e.call(t,n[r],i,this)}},a.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),n(e)},a.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},a.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),n(e)},t&&(a[Symbol.iterator]=a.entries),a.toString=function(){var e=[];return this.forEach(function(t,n){e.push(i(n)+"="+i(t))}),e.join("&")},e.URLSearchParams=r}();var a=e.URLSearchParams.prototype;"function"!=typeof a.sort&&(a.sort=function(){var e=this,t=[];this.forEach(function(n,i){t.push([i,n]),e._entries||e.delete(i)}),t.sort(function(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0}),e._entries&&(e._entries={});for(var n=0;n<t.length;n++)this.append(t[n][0],t[n][1])}),"function"!=typeof a._fromString&&Object.defineProperty(a,"_fromString",{enumerable:!1,configurable:!1,writable:!1,value:function(e){if(this._entries)this._entries={};else{var t=[];this.forEach(function(e,n){t.push(n)});for(var n=0;n<t.length;n++)this.delete(t[n])}var i,a=(e=e.replace(/^\?/,"")).split("&");for(n=0;n<a.length;n++)i=a[n].split("="),this.append(r(i[0]),i.length>1?r(i[1]):"")}})}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:e),function(e){if(function(){try{var t=new e.URL("b","http://a");return t.pathname="c%20d","http://a/c%20d"===t.href&&t.searchParams}catch(e){return!1}}()||function(){var t=e.URL,n=function(t,n){"string"!=typeof t&&(t=String(t));var i,r=document;if(n&&(void 0===e.location||n!==e.location.href)){(i=(r=document.implementation.createHTMLDocument("")).createElement("base")).href=n,r.head.appendChild(i);try{if(0!==i.href.indexOf(n))throw new Error(i.href)}catch(e){throw new Error("URL unable to set base "+n+" due to "+e)}}var a=r.createElement("a");if(a.href=t,i&&(r.body.appendChild(a),a.href=a.href),":"===a.protocol||!/:/.test(a.href))throw new TypeError("Invalid URL");Object.defineProperty(this,"_anchorElement",{value:a});var o=new e.URLSearchParams(this.search),s=!0,l=!0,c=this;["append","delete","set"].forEach(function(e){var t=o[e];o[e]=function(){t.apply(o,arguments),s&&(l=!1,c.search=o.toString(),l=!0)}}),Object.defineProperty(this,"searchParams",{value:o,enumerable:!0});var u=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:!1,configurable:!1,writable:!1,value:function(){this.search!==u&&(u=this.search,l&&(s=!1,this.searchParams._fromString(this.search),s=!0))}})},i=n.prototype;["hash","host","hostname","port","protocol"].forEach(function(e){!function(e){Object.defineProperty(i,e,{get:function(){return this._anchorElement[e]},set:function(t){this._anchorElement[e]=t},enumerable:!0})}(e)}),Object.defineProperty(i,"search",{get:function(){return this._anchorElement.search},set:function(e){this._anchorElement.search=e,this._updateSearchParams()},enumerable:!0}),Object.defineProperties(i,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e,this._updateSearchParams()},enumerable:!0},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:!0},origin:{get:function(){var e={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol],t=this._anchorElement.port!=e&&""!==this._anchorElement.port;return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(t?":"+this._anchorElement.port:"")},enumerable:!0},password:{get:function(){return""},set:function(e){},enumerable:!0},username:{get:function(){return""},set:function(e){},enumerable:!0}}),n.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)},n.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)},e.URL=n}(),void 0!==e.location&&!("origin"in e.location)){var t=function(){return e.location.protocol+"//"+e.location.hostname+(e.location.port?":"+e.location.port:"")};try{Object.defineProperty(e.location,"origin",{get:t,enumerable:!0})}catch(n){setInterval(function(){e.location.origin=t()},100)}}}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:e);var Ba=We("isConcatSpreadable"),za=!l(function(){var e=[];return e[Ba]=!1,e.concat()[0]!==e}),Wa=kn("concat"),Ka=function(e){if(!w(e))return!1;var t=e[Ba];return void 0!==t?!!t:Le(e)};Ce({target:"Array",proto:!0,forced:!za||!Wa},{concat:function(e){var t,n,i,r,a,o=Me(this),s=tt(o,0),l=0;for(t=-1,i=arguments.length;t<i;t++)if(a=-1===t?o:arguments[t],Ka(a)){if(l+(r=oe(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,l++)n in a&&bn(s,l,a[n])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");bn(s,l++,a)}return s.length=l,s}});var $a=rt.filter;Ce({target:"Array",proto:!0,forced:!kn("filter")},{filter:function(e){return $a(this,e,arguments.length>1?arguments[1]:void 0)}});var Ya=rt.find,Ga=!0;"find"in[]&&Array(1).find(function(){Ga=!1}),Ce({target:"Array",proto:!0,forced:Ga},{find:function(e){return Ya(this,e,arguments.length>1?arguments[1]:void 0)}}),$t("find");var Qa=We("iterator"),Xa=!1;try{var Ja=0,Za={next:function(){return{done:!!Ja++}},return:function(){Xa=!0}};Za[Qa]=function(){return this},Array.from(Za,function(){throw 2})}catch(e){}var eo=function(e,t){if(!t&&!Xa)return!1;var n=!1;try{var i={};i[Qa]=function(){return{next:function(){return{done:n=!0}}}},e(i)}catch(e){}return n},to=!eo(function(e){Array.from(e)});Ce({target:"Array",stat:!0,forced:to},{from:Ui});var no=he.includes;Ce({target:"Array",proto:!0},{includes:function(e){return no(this,e,arguments.length>1?arguments[1]:void 0)}}),$t("includes");var io=rt.map;Ce({target:"Array",proto:!0,forced:!kn("map")},{map:function(e){return io(this,e,arguments.length>1?arguments[1]:void 0)}});var ro=function(e,t,n){var i,r;return on&&"function"==typeof(i=t.constructor)&&i!==n&&w(r=i.prototype)&&r!==n.prototype&&on(e,r),e},ao="\t\n\v\f\r                　\u2028\u2029\ufeff",oo="["+ao+"]",so=RegExp("^"+oo+oo+"*"),lo=RegExp(oo+oo+"*$"),co=function(e){return function(t){var n=String(y(t));return 1&e&&(n=n.replace(so,"")),2&e&&(n=n.replace(lo,"")),n}},uo={start:co(1),end:co(2),trim:co(3)},ho=ge.f,fo=I.f,po=O.f,mo=uo.trim,go=s.Number,vo=go.prototype,yo="Number"==m(Fe(vo)),bo=function(e){var t,n,i,r,a,o,s,l,c=k(e,!1);if("string"==typeof c&&c.length>2)if(43===(t=(c=mo(c)).charCodeAt(0))||45===t){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(o=(a=c.slice(2)).length,s=0;s<o;s++)if((l=a.charCodeAt(s))<48||l>r)return NaN;return parseInt(a,i)}return+c};if(xe("Number",!go(" 0o1")||!go("0b1")||go("+0x1"))){for(var wo,ko=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof ko&&(yo?l(function(){vo.valueOf.call(n)}):"Number"!=m(n))?ro(new go(bo(t)),n,ko):bo(t)},To=c?ho(go):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),So=0;To.length>So;So++)S(go,wo=To[So])&&!S(ko,wo)&&po(ko,wo,fo(go,wo));ko.prototype=vo,vo.constructor=ko,J(s,"Number",ko)}var Eo=l(function(){Oe(1)});Ce({target:"Object",stat:!0,forced:Eo},{keys:function(e){return Oe(Me(e))}});var Ao=function(e){if(si(e))throw TypeError("The method doesn't accept regular expressions");return e},xo=We("match"),Po=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[xo]=!1,"/./"[e](t)}catch(e){}}return!1};Ce({target:"String",proto:!0,forced:!Po("includes")},{includes:function(e){return!!~String(y(this)).indexOf(Ao(e),arguments.length>1?arguments[1]:void 0)}});var Co=!l(function(){return Object.isExtensible(Object.preventExtensions({}))}),Io=t(function(e){var t=O.f,n=H("meta"),i=0,r=Object.isExtensible||function(){return!0},a=function(e){t(e,n,{value:{objectID:"O"+ ++i,weakData:{}}})},o=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!w(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!S(e,n)){if(!r(e))return"F";if(!t)return"E";a(e)}return e[n].objectID},getWeakData:function(e,t){if(!S(e,n)){if(!r(e))return!0;if(!t)return!1;a(e)}return e[n].weakData},onFreeze:function(e){return Co&&o.REQUIRED&&r(e)&&!S(e,n)&&a(e),e}};z[n]=!0}),Lo=(Io.REQUIRED,Io.fastKey,Io.getWeakData,Io.onFreeze,t(function(e){var t=function(e,t){this.stopped=e,this.result=t};(e.exports=function(e,n,i,r,a){var o,s,l,c,u,h,f=Ze(n,i,r?2:1);if(a)o=e;else{if("function"!=typeof(s=Ri(e)))throw TypeError("Target is not iterable");if(Ni(s)){for(l=0,c=oe(e.length);c>l;l++)if((u=r?f(L(h=e[l])[0],h[1]):f(e[l]))&&u instanceof t)return u;return new t(!1)}o=s.call(e)}for(;!(h=o.next()).done;)if((u=Mi(o,f,h.value,r))&&u instanceof t)return u;return new t(!1)}).stop=function(e){return new t(!0,e)}})),Mo=Io.getWeakData,Oo=X.set,jo=X.getterFor,No=rt.find,_o=rt.findIndex,Ro=0,Uo=function(e){return e.frozen||(e.frozen=new Fo)},Fo=function(){this.entries=[]},qo=function(e,t){return No(e.entries,function(e){return e[0]===t})};Fo.prototype={get:function(e){var t=qo(this,e);if(t)return t[1]},has:function(e){return!!qo(this,e)},set:function(e,t){var n=qo(this,e);n?n[1]=t:this.entries.push([e,t])},delete:function(e){var t=_o(this.entries,function(t){return t[0]===e});return~t&&this.entries.splice(t,1),!!~t}};var Do={getConstructor:function(e,t,n,i){var r=e(function(e,a){Ci(e,r,t),Oo(e,{type:t,id:Ro++,frozen:void 0}),null!=a&&Lo(a,e[i],e,n)}),a=jo(t),o=function(e,t,n){var i=a(e),r=Mo(L(t),!0);return!0===r?Uo(i).set(t,n):r[i.id]=n,e};return Ki(r.prototype,{delete:function(e){var t=a(this);if(!w(e))return!1;var n=Mo(e);return!0===n?Uo(t).delete(e):n&&S(n,t.id)&&delete n[t.id]},has:function(e){var t=a(this);if(!w(e))return!1;var n=Mo(e);return!0===n?Uo(t).has(e):n&&S(n,t.id)}}),Ki(r.prototype,n?{get:function(e){var t=a(this);if(w(e)){var n=Mo(e);return!0===n?Uo(t).get(e):n?n[t.id]:void 0}},set:function(e,t){return o(this,e,t)}}:{add:function(e){return o(this,e,!0)}}),r}};t(function(e){var t,n=X.enforce,i=!s.ActiveXObject&&"ActiveXObject"in s,r=Object.isExtensible,a=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},o=e.exports=function(e,t,n,i,r){var a=s[e],o=a&&a.prototype,c=a,u=i?"set":"add",h={},f=function(e){var t=o[e];J(o,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(r&&!w(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return r&&!w(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(r&&!w(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(xe(e,"function"!=typeof a||!(r||o.forEach&&!l(function(){(new a).entries().next()}))))c=n.getConstructor(t,e,i,u),Io.REQUIRED=!0;else if(xe(e,!0)){var d=new c,p=d[u](r?{}:-0,1)!=d,m=l(function(){d.has(1)}),g=eo(function(e){new a(e)}),v=!r&&l(function(){for(var e=new a,t=5;t--;)e[u](t,t);return!e.has(-0)});g||((c=t(function(t,n){Ci(t,c,e);var r=ro(new a,t,c);return null!=n&&Lo(n,r[u],r,i),r})).prototype=o,o.constructor=c),(m||v)&&(f("delete"),f("has"),i&&f("get")),(v||p)&&f(u),r&&o.clear&&delete o.clear}return h[e]=c,Ce({global:!0,forced:c!=a},h),Xe(c,e),r||n.setStrong(c,e,i),c}("WeakMap",a,Do,!0,!0);if(F&&i){t=Do.getConstructor(a,"WeakMap",!0),Io.REQUIRED=!0;var c=o.prototype,u=c.delete,h=c.has,f=c.get,d=c.set;Ki(c,{delete:function(e){if(w(e)&&!r(e)){var i=n(this);return i.frozen||(i.frozen=new t),u.call(this,e)||i.frozen.delete(e)}return u.call(this,e)},has:function(e){if(w(e)&&!r(e)){var i=n(this);return i.frozen||(i.frozen=new t),h.call(this,e)||i.frozen.has(e)}return h.call(this,e)},get:function(e){if(w(e)&&!r(e)){var i=n(this);return i.frozen||(i.frozen=new t),h.call(this,e)?f.call(this,e):i.frozen.get(e)}return f.call(this,e)},set:function(e,i){if(w(e)&&!r(e)){var a=n(this);a.frozen||(a.frozen=new t),h.call(this,e)?d.call(this,e,i):a.frozen.set(e,i)}else d.call(this,e,i);return this}})}});Ce({target:"Object",stat:!0,forced:Object.assign!==Li},{assign:Li});var Ho=uo.trim;Ce({target:"String",proto:!0,forced:function(e){return l(function(){return!!ao[e]()||"​᠎"!="​᠎"[e]()||ao[e].name!==e})}("trim")},{trim:function(){return Ho(this)}});var Vo="".repeat||function(e){var t=String(y(this)),n="",i=re(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n},Bo=1..toFixed,zo=Math.floor,Wo=function(e,t,n){return 0===t?n:t%2==1?Wo(e,t-1,n*e):Wo(e*e,t/2,n)},Ko=Bo&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l(function(){Bo.call({})});Ce({target:"Number",proto:!0,forced:Ko},{toFixed:function(e){var t,n,i,r,a=function(e){if("number"!=typeof e&&"Number"!=m(e))throw TypeError("Incorrect invocation");return+e}(this),o=re(e),s=[0,0,0,0,0,0],l="",c="0",u=function(e,t){for(var n=-1,i=t;++n<6;)i+=e*s[n],s[n]=i%1e7,i=zo(i/1e7)},h=function(e){for(var t=6,n=0;--t>=0;)n+=s[t],s[t]=zo(n/e),n=n%e*1e7},f=function(){for(var e=6,t="";--e>=0;)if(""!==t||0===e||0!==s[e]){var n=String(s[e]);t=""===t?n:t+Vo.call("0",7-n.length)+n}return t};if(o<0||o>20)throw RangeError("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(l="-",a=-a),a>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(a*Wo(2,69,1))-69)<0?a*Wo(2,-t,1):a/Wo(2,t,1),n*=4503599627370496,(t=52-t)>0){for(u(0,n),i=o;i>=7;)u(1e7,0),i-=7;for(u(Wo(10,i,1),0),i=t-1;i>=23;)h(1<<23),i-=23;h(1<<i),u(1,1),h(2),c=f()}else u(0,n),u(1<<-t,0),c=f()+Vo.call("0",o);return c=o>0?l+((r=c.length)<=o?"0."+Vo.call("0",o-r)+c:c.slice(0,r-o)+"."+c.slice(r-o)):l+c}});var $o=f.f,Yo=function(e){return function(t){for(var n,i=b(t),r=Oe(i),a=r.length,o=0,s=[];a>o;)n=r[o++],c&&!$o.call(i,n)||s.push(e?[n,i[n]]:i[n]);return s}},Go={entries:Yo(!0),values:Yo(!1)},Qo=Go.entries;Ce({target:"Object",stat:!0},{entries:function(e){return Qo(e)}});var Xo=Go.values;Ce({target:"Object",stat:!0},{values:function(e){return Xo(e)}});var Jo={addCSS:!0,thumbWidth:15,watch:!0};Ce({target:"Number",stat:!0},{isNaN:function(e){return e!=e}});var Zo=function(e){return null!=e?e.constructor:null},es=function(e,t){return Boolean(e&&t&&e instanceof t)},ts=function(e){return null==e},ns=function(e){return Zo(e)===Object},is=function(e){return Zo(e)===String},rs=function(e){return Array.isArray(e)},as=function(e){return es(e,NodeList)},os={nullOrUndefined:ts,object:ns,number:function(e){return Zo(e)===Number&&!Number.isNaN(e)},string:is,boolean:function(e){return Zo(e)===Boolean},function:function(e){return Zo(e)===Function},array:rs,nodeList:as,element:function(e){return es(e,Element)},event:function(e){return es(e,Event)},empty:function(e){return ts(e)||(is(e)||rs(e)||as(e))&&!e.length||ns(e)&&!Object.keys(e).length}};function ss(e,t){if(t<1){var n=(i="".concat(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/))?Math.max(0,(i[1]?i[1].length:0)-(i[2]?+i[2]:0)):0;return parseFloat(e.toFixed(n))}var i;return Math.round(e/t)*t}Qn("match",1,function(e,t,n){return[function(t){var n=y(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,n):new RegExp(t)[e](String(n))},function(e){var i=n(t,e,this);if(i.done)return i.value;var r=L(e),a=String(this);if(!r.global)return Zn(r,a);var o=r.unicode;r.lastIndex=0;for(var s,l=[],c=0;null!==(s=Zn(r,a));){var u=String(s[0]);l[c]=u,""===u&&(r.lastIndex=Jn(a,oe(r.lastIndex),o)),c++}return 0===c?null:l}]});var ls,cs,us,hs=function(){function e(t,n){Ua(this,e),os.element(t)?this.element=t:os.string(t)&&(this.element=document.querySelector(t)),os.element(this.element)&&os.empty(this.element.rangeTouch)&&(this.config=Object.assign({},Jo,n),this.init())}return qa(e,[{key:"init",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){e.enabled&&(this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach(function(e){t.element[n](e,function(e){return t.set(e)},!1)})}},{key:"get",value:function(t){if(!e.enabled||!os.event(t))return null;var n,i=t.target,r=t.changedTouches[0],a=parseFloat(i.getAttribute("min"))||0,o=parseFloat(i.getAttribute("max"))||100,s=parseFloat(i.getAttribute("step"))||1,l=o-a,c=i.getBoundingClientRect(),u=100/c.width*(this.config.thumbWidth/2)/100;return(n=100/c.width*(r.clientX-c.left))<0?n=0:n>100&&(n=100),n<50?n-=(100-2*n)*u:n>50&&(n+=2*(n-50)*u),a+ss(l*(n/100),s)}},{key:"set",value:function(t){e.enabled&&os.event(t)&&!t.target.disabled&&(t.preventDefault(),t.target.value=this.get(t),function(e,t){if(e&&t){var n=new Event(t);e.dispatchEvent(n)}}(t.target,"touchend"===t.type?"change":"input"))}}],[{key:"setup",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;if(os.empty(t)||os.string(t)?i=Array.from(document.querySelectorAll(os.string(t)?t:'input[type="range"]')):os.element(t)?i=[t]:os.nodeList(t)?i=Array.from(t):os.array(t)&&(i=t.filter(os.element)),os.empty(i))return null;var r=Object.assign({},Jo,n);os.string(t)&&r.watch&&new MutationObserver(function(n){Array.from(n).forEach(function(n){Array.from(n.addedNodes).forEach(function(n){if(os.element(n)&&function(){return Array.from(document.querySelectorAll(i)).includes(this)}.call(n,i=t)){var i;new e(n,r)}})})}).observe(document.body,{childList:!0,subtree:!0});return i.map(function(t){return new e(t,n)})}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),e}(),fs=We("species"),ds=function(e){var t=te(e),n=O.f;c&&t&&!t[fs]&&n(t,fs,{configurable:!0,get:function(){return this}})},ps=s.location,ms=s.setImmediate,gs=s.clearImmediate,vs=s.process,ys=s.MessageChannel,bs=s.Dispatch,ws=0,ks={},Ts=function(e){if(ks.hasOwnProperty(e)){var t=ks[e];delete ks[e],t()}},Ss=function(e){return function(){Ts(e)}},Es=function(e){Ts(e.data)},As=function(e){s.postMessage(e+"",ps.protocol+"//"+ps.host)};ms&&gs||(ms=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return ks[++ws]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},ls(ws),ws},gs=function(e){delete ks[e]},"process"==m(vs)?ls=function(e){vs.nextTick(Ss(e))}:bs&&bs.now?ls=function(e){bs.now(Ss(e))}:ys?(us=(cs=new ys).port2,cs.port1.onmessage=Es,ls=Ze(us.postMessage,us,1)):!s.addEventListener||"function"!=typeof postMessage||s.importScripts||l(As)?ls="onreadystatechange"in x("script")?function(e){Ne.appendChild(x("script")).onreadystatechange=function(){Ne.removeChild(this),Ts(e)}}:function(e){setTimeout(Ss(e),0)}:(ls=As,s.addEventListener("message",Es,!1)));var xs,Ps,Cs,Is,Ls,Ms,Os,js={set:ms,clear:gs},Ns=te("navigator","userAgent")||"",_s=I.f,Rs=js.set,Us=s.MutationObserver||s.WebKitMutationObserver,Fs=s.process,qs=s.Promise,Ds="process"==m(Fs),Hs=_s(s,"queueMicrotask"),Vs=Hs&&Hs.value;Vs||(xs=function(){var e,t;for(Ds&&(e=Fs.domain)&&e.exit();Ps;){t=Ps.fn,Ps=Ps.next;try{t()}catch(e){throw Ps?Is():Cs=void 0,e}}Cs=void 0,e&&e.enter()},Ds?Is=function(){Fs.nextTick(xs)}:Us&&!/(iphone|ipod|ipad).*applewebkit/i.test(Ns)?(Ls=!0,Ms=document.createTextNode(""),new Us(xs).observe(Ms,{characterData:!0}),Is=function(){Ms.data=Ls=!Ls}):qs&&qs.resolve?(Os=qs.resolve(void 0),Is=function(){Os.then(xs)}):Is=function(){Rs.call(s,xs)});var Bs,zs,Ws,Ks=Vs||function(e){var t={fn:e,next:void 0};Cs&&(Cs.next=t),Ps||(Ps=t,Is()),Cs=t},$s=function(e){var t,n;this.promise=new e(function(e,i){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=i}),this.resolve=Je(t),this.reject=Je(n)},Ys={f:function(e){return new $s(e)}},Gs=function(e,t){if(L(e),w(t)&&t.constructor===e)return t;var n=Ys.f(e);return(0,n.resolve)(t),n.promise},Qs=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},Xs=js.set,Js=We("species"),Zs="Promise",el=X.get,tl=X.set,nl=X.getterFor(Zs),il=s.Promise,rl=s.TypeError,al=s.document,ol=s.process,sl=s.fetch,ll=ol&&ol.versions,cl=ll&&ll.v8||"",ul=Ys.f,hl=ul,fl="process"==m(ol),dl=!!(al&&al.createEvent&&s.dispatchEvent),pl=xe(Zs,function(){var e=il.resolve(1),t=function(){},n=(e.constructor={})[Js]=function(e){e(t,t)};return!((fl||"function"==typeof PromiseRejectionEvent)&&e.then(t)instanceof n&&0!==cl.indexOf("6.6")&&-1===Ns.indexOf("Chrome/66"))}),ml=pl||!eo(function(e){il.all(e).catch(function(){})}),gl=function(e){var t;return!(!w(e)||"function"!=typeof(t=e.then))&&t},vl=function(e,t,n){if(!t.notified){t.notified=!0;var i=t.reactions;Ks(function(){for(var r=t.value,a=1==t.state,o=0;i.length>o;){var s,l,c,u=i[o++],h=a?u.ok:u.fail,f=u.resolve,d=u.reject,p=u.domain;try{h?(a||(2===t.rejection&&kl(e,t),t.rejection=1),!0===h?s=r:(p&&p.enter(),s=h(r),p&&(p.exit(),c=!0)),s===u.promise?d(rl("Promise-chain cycle")):(l=gl(s))?l.call(s,f,d):f(s)):d(r)}catch(e){p&&!c&&p.exit(),d(e)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&bl(e,t)})}},yl=function(e,t,n){var i,r;dl?((i=al.createEvent("Event")).promise=t,i.reason=n,i.initEvent(e,!1,!0),s.dispatchEvent(i)):i={promise:t,reason:n},(r=s["on"+e])?r(i):"unhandledrejection"===e&&function(e,t){var n=s.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}("Unhandled promise rejection",n)},bl=function(e,t){Xs.call(s,function(){var n,i=t.value;if(wl(t)&&(n=Qs(function(){fl?ol.emit("unhandledRejection",i,e):yl("unhandledrejection",e,i)}),t.rejection=fl||wl(t)?2:1,n.error))throw n.value})},wl=function(e){return 1!==e.rejection&&!e.parent},kl=function(e,t){Xs.call(s,function(){fl?ol.emit("rejectionHandled",e):yl("rejectionhandled",e,t.value)})},Tl=function(e,t,n,i){return function(r){e(t,n,r,i)}},Sl=function(e,t,n,i){t.done||(t.done=!0,i&&(t=i),t.value=n,t.state=2,vl(e,t,!0))},El=function(e,t,n,i){if(!t.done){t.done=!0,i&&(t=i);try{if(e===n)throw rl("Promise can't be resolved itself");var r=gl(n);r?Ks(function(){var i={done:!1};try{r.call(n,Tl(El,e,i,t),Tl(Sl,e,i,t))}catch(n){Sl(e,i,n,t)}}):(t.value=n,t.state=1,vl(e,t,!1))}catch(n){Sl(e,{done:!1},n,t)}}};pl&&(il=function(e){Ci(this,il,Zs),Je(e),Bs.call(this);var t=el(this);try{e(Tl(El,this,t),Tl(Sl,this,t))}catch(e){Sl(this,t,e)}},(Bs=function(e){tl(this,{type:Zs,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=Ki(il.prototype,{then:function(e,t){var n=nl(this),i=ul(ci(this,il));return i.ok="function"!=typeof e||e,i.fail="function"==typeof t&&t,i.domain=fl?ol.domain:void 0,n.parent=!0,n.reactions.push(i),0!=n.state&&vl(this,n,!1),i.promise},catch:function(e){return this.then(void 0,e)}}),zs=function(){var e=new Bs,t=el(e);this.promise=e,this.resolve=Tl(El,e,t),this.reject=Tl(Sl,e,t)},Ys.f=ul=function(e){return e===il||e===Ws?new zs(e):hl(e)},"function"==typeof sl&&Ce({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return Gs(il,sl.apply(s,arguments))}})),Ce({global:!0,wrap:!0,forced:pl},{Promise:il}),Xe(il,Zs,!1),ds(Zs),Ws=Z.Promise,Ce({target:Zs,stat:!0,forced:pl},{reject:function(e){var t=ul(this);return t.reject.call(void 0,e),t.promise}}),Ce({target:Zs,stat:!0,forced:pl},{resolve:function(e){return Gs(this,e)}}),Ce({target:Zs,stat:!0,forced:ml},{all:function(e){var t=this,n=ul(t),i=n.resolve,r=n.reject,a=Qs(function(){var n=Je(t.resolve),a=[],o=0,s=1;Lo(e,function(e){var l=o++,c=!1;a.push(void 0),s++,n.call(t,e).then(function(e){c||(c=!0,a[l]=e,--s||i(a))},r)}),--s||i(a)});return a.error&&r(a.value),n.promise},race:function(e){var t=this,n=ul(t),i=n.reject,r=Qs(function(){var r=Je(t.resolve);Lo(e,function(e){r.call(t,e).then(n.resolve,i)})});return r.error&&i(r.value),n.promise}});var Al="".startsWith,xl=Math.min;Ce({target:"String",proto:!0,forced:!Po("startsWith")},{startsWith:function(e){var t=String(y(this));Ao(e);var n=oe(xl(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return Al?Al.call(t,i,n):t.slice(n,n+i.length)===i}});var Pl,Cl,Il,Ll=function(e){return null!=e?e.constructor:null},Ml=function(e,t){return Boolean(e&&t&&e instanceof t)},Ol=function(e){return null==e},jl=function(e){return Ll(e)===Object},Nl=function(e){return Ll(e)===String},_l=function(e){return Array.isArray(e)},Rl=function(e){return Ml(e,NodeList)},Ul=function(e){return Ol(e)||(Nl(e)||_l(e)||Rl(e))&&!e.length||jl(e)&&!Object.keys(e).length},Fl={nullOrUndefined:Ol,object:jl,number:function(e){return Ll(e)===Number&&!Number.isNaN(e)},string:Nl,boolean:function(e){return Ll(e)===Boolean},function:function(e){return Ll(e)===Function},array:_l,weakMap:function(e){return Ml(e,WeakMap)},nodeList:Rl,element:function(e){return Ml(e,Element)},textNode:function(e){return Ll(e)===Text},event:function(e){return Ml(e,Event)},keyboardEvent:function(e){return Ml(e,KeyboardEvent)},cue:function(e){return Ml(e,window.TextTrackCue)||Ml(e,window.VTTCue)},track:function(e){return Ml(e,TextTrack)||!Ol(e)&&Nl(e.kind)},promise:function(e){return Ml(e,Promise)},url:function(e){if(Ml(e,window.URL))return!0;if(!Nl(e))return!1;var t=e;e.startsWith("http://")&&e.startsWith("https://")||(t="http://".concat(e));try{return!Ul(new URL(t).hostname)}catch(e){return!1}},empty:Ul},ql=(Pl=document.createElement("span"),Cl={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},Il=Object.keys(Cl).find(function(e){return void 0!==Pl.style[e]}),!!Fl.string(Il)&&Cl[Il]);function Dl(e,t){setTimeout(function(){try{e.hidden=!0,e.offsetHeight,e.hidden=!1}catch(e){}},t)}var Hl={isIE:!!document.documentMode,isEdge:window.navigator.userAgent.includes("Edge"),isWebkit:"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent),isIPhone:/(iPhone|iPod)/gi.test(navigator.platform),isIos:/(iPad|iPhone|iPod)/gi.test(navigator.platform)},Vl=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,null}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e}();function Bl(e,t,n){var i=this,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(e&&"addEventListener"in e&&!Fl.empty(t)&&Fl.function(n)){var s=t.split(" "),l=o;Vl&&(l={passive:a,capture:o}),s.forEach(function(t){i&&i.eventListeners&&r&&i.eventListeners.push({element:e,type:t,callback:n,options:l}),e[r?"addEventListener":"removeEventListener"](t,n,l)})}}function zl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Bl.call(this,e,t,n,!0,i,r)}function Wl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Bl.call(this,e,t,n,!1,i,r)}function Kl(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Bl.call(this,e,n,function o(){Wl(e,n,o,r,a);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];i.apply(t,l)},!0,r,a)}function $l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(Fl.element(e)&&!Fl.empty(t)){var r=new CustomEvent(t,{bubbles:n,detail:Object.assign({},i,{plyr:this})});e.dispatchEvent(r)}}function Yl(e,t){return t.split(".").reduce(function(e,t){return e&&e[t]},e)}function Gl(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(!n.length)return e;var r=n.shift();return Fl.object(r)?(Object.keys(r).forEach(function(t){Fl.object(r[t])?(Object.keys(e).includes(t)||Object.assign(e,Da({},t,{})),Gl(e[t],r[t])):Object.assign(e,Da({},t,r[t]))}),Gl.apply(void 0,[e].concat(n))):e}function Ql(e,t){var n=e.length?e:[e];Array.from(n).reverse().forEach(function(e,n){var i=n>0?t.cloneNode(!0):t,r=e.parentNode,a=e.nextSibling;i.appendChild(e),a?r.insertBefore(i,a):r.appendChild(i)})}function Xl(e,t){Fl.element(e)&&!Fl.empty(t)&&Object.entries(t).filter(function(e){var t=Ha(e,2)[1];return!Fl.nullOrUndefined(t)}).forEach(function(t){var n=Ha(t,2),i=n[0],r=n[1];return e.setAttribute(i,r)})}function Jl(e,t,n){var i=document.createElement(e);return Fl.object(t)&&Xl(i,t),Fl.string(n)&&(i.innerText=n),i}function Zl(e,t,n,i){Fl.element(t)&&t.appendChild(Jl(e,n,i))}function ec(e){Fl.nodeList(e)||Fl.array(e)?Array.from(e).forEach(ec):Fl.element(e)&&Fl.element(e.parentNode)&&e.parentNode.removeChild(e)}function tc(e){if(Fl.element(e))for(var t=e.childNodes.length;t>0;)e.removeChild(e.lastChild),t-=1}function nc(e,t){return Fl.element(t)&&Fl.element(t.parentNode)&&Fl.element(e)?(t.parentNode.replaceChild(e,t),e):null}function ic(e,t){if(!Fl.string(e)||Fl.empty(e))return{};var n={},i=Gl({},t);return e.split(",").forEach(function(e){var t=e.trim(),r=t.replace(".",""),a=t.replace(/[[\]]/g,"").split("="),o=Ha(a,1)[0],s=a.length>1?a[1].replace(/["']/g,""):"";switch(t.charAt(0)){case".":Fl.string(i.class)?n.class="".concat(i.class," ").concat(r):n.class=r;break;case"#":n.id=t.replace("#","");break;case"[":n[o]=s}}),Gl(i,n)}function rc(e,t){if(Fl.element(e)){var n=t;Fl.boolean(n)||(n=!e.hidden),e.hidden=n}}function ac(e,t,n){if(Fl.nodeList(e))return Array.from(e).map(function(e){return ac(e,t,n)});if(Fl.element(e)){var i="toggle";return void 0!==n&&(i=n?"add":"remove"),e.classList[i](t),e.classList.contains(t)}return!1}function oc(e,t){return Fl.element(e)&&e.classList.contains(t)}function sc(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}function lc(e){return this.elements.container.querySelectorAll(e)}function cc(e){return this.elements.container.querySelector(e)}function uc(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Fl.element(e)&&(e.focus({preventScroll:!0}),t&&ac(e,this.config.classNames.tabFocus))}var hc,fc={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},dc={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check:function(e,t,n){var i=Hl.isIPhone&&n&&dc.playsinline,r=dc[e]||"html5"!==t;return{api:r,ui:r&&dc.rangeInput&&("video"!==e||!Hl.isIPhone||i)}},pip:!(Hl.isIPhone||!Fl.function(Jl("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||Jl("video").disablePictureInPicture)),airplay:Fl.function(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime:function(e){if(Fl.empty(e))return!1;var t=Ha(e.split("/"),1)[0],n=e;if(!this.isHTML5||t!==this.type)return!1;Object.keys(fc).includes(n)&&(n+='; codecs="'.concat(fc[e],'"'));try{return Boolean(n&&this.media.canPlayType(n).replace(/no/,""))}catch(e){return!1}},textTracks:"textTracks"in document.createElement("video"),rangeInput:(hc=document.createElement("input"),hc.type="range","range"===hc.type),touch:"ontouchstart"in document.documentElement,transitions:!1!==ql,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches};function pc(e){return!!(Fl.array(e)||Fl.string(e)&&e.includes(":"))&&(Fl.array(e)?e:e.split(":")).map(Number).every(Fl.number)}function mc(e){if(!Fl.array(e)||!e.every(Fl.number))return null;var t=Ha(e,2),n=t[0],i=t[1],r=function e(t,n){return 0===n?t:e(n,t%n)}(n,i);return[n/r,i/r]}function gc(e){var t=function(e){return pc(e)?e.split(":").map(Number):null},n=t(e);if(null===n&&(n=t(this.config.ratio)),null===n&&!Fl.empty(this.embed)&&Fl.array(this.embed.ratio)&&(n=this.embed.ratio),null===n&&this.isHTML5){var i=this.media;n=mc([i.videoWidth,i.videoHeight])}return n}function vc(e){if(!this.isVideo)return{};var t=gc.call(this,e),n=Ha(Fl.array(t)?t:[0,0],2),i=100/n[0]*n[1];if(this.elements.wrapper.style.paddingBottom="".concat(i,"%"),this.isVimeo&&this.supported.ui){var r=(240-i)/4.8;this.media.style.transform="translateY(-".concat(r,"%)")}else this.isHTML5&&this.elements.wrapper.classList.toggle(this.config.classNames.videoFixedRatio,null!==t);return{padding:i,ratio:t}}var yc={getSources:function(){var e=this;return this.isHTML5?Array.from(this.media.querySelectorAll("source")).filter(function(t){var n=t.getAttribute("type");return!!Fl.empty(n)||dc.mime.call(e,n)}):[]},getQualityOptions:function(){return yc.getSources.call(this).map(function(e){return Number(e.getAttribute("size"))}).filter(Boolean)},extend:function(){if(this.isHTML5){var e=this;Fl.empty(this.config.ratio)||vc.call(e),Object.defineProperty(e.media,"quality",{get:function(){var t=yc.getSources.call(e).find(function(t){return t.getAttribute("src")===e.source});return t&&Number(t.getAttribute("size"))},set:function(t){var n=yc.getSources.call(e).find(function(e){return Number(e.getAttribute("size"))===t});if(n){var i=e.media,r=i.currentTime,a=i.paused,o=i.preload,s=i.readyState;e.media.src=n.getAttribute("src"),("none"!==o||s)&&(e.once("loadedmetadata",function(){e.currentTime=r,a||e.play()}),e.media.load()),$l.call(e,e.media,"qualitychange",!1,{quality:t})}}})}},cancelRequests:function(){this.isHTML5&&(ec(yc.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"))}};function bc(e){return Fl.array(e)?e.filter(function(t,n){return e.indexOf(t)===n}):e}var wc=O.f,kc=ge.f,Tc=We("match"),Sc=s.RegExp,Ec=Sc.prototype,Ac=/a/g,xc=/a/g,Pc=new Sc(Ac)!==Ac;if(c&&xe("RegExp",!Pc||l(function(){return xc[Tc]=!1,Sc(Ac)!=Ac||Sc(xc)==xc||"/a/i"!=Sc(Ac,"i")}))){for(var Cc=function(e,t){var n=this instanceof Cc,i=si(e),r=void 0===t;return!n&&i&&e.constructor===Cc&&r?e:ro(Pc?new Sc(i&&!r?e.source:e,t):Sc((i=e instanceof Cc)?e.source:e,i&&r?Mn.call(e):t),n?this:Ec,Cc)},Ic=function(e){e in Cc||wc(Cc,e,{configurable:!0,get:function(){return Sc[e]},set:function(t){Sc[e]=t}})},Lc=kc(Sc),Mc=0;Lc.length>Mc;)Ic(Lc[Mc++]);Ec.constructor=Cc,Cc.prototype=Ec,J(s,"RegExp",Cc)}function Oc(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return Fl.empty(e)?e:e.toString().replace(/{(\d+)}/g,function(e,t){return n[t].toString()})}function jc(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1"),"g"),n.toString())}function Nc(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString().replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}function _c(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString();return(e=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString();return e=jc(e,"-"," "),e=jc(e,"_"," "),jc(e=Nc(e)," ","")}(e)).charAt(0).toLowerCase()+e.slice(1)}function Rc(e){var t=document.createElement("div");return t.appendChild(e),t.innerHTML}ds("RegExp");var Uc={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},Fc=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Fl.empty(e)||Fl.empty(t))return"";var n=Yl(t.i18n,e);if(Fl.empty(n))return Object.keys(Uc).includes(e)?Uc[e]:"";var i={"{seektime}":t.seekTime,"{title}":t.title};return Object.entries(i).forEach(function(e){var t=Ha(e,2),i=t[0],r=t[1];n=jc(n,i,r)}),n},qc=function(){function e(t){Ua(this,e),this.enabled=t.config.storage.enabled,this.key=t.config.storage.key}return qa(e,[{key:"get",value:function(t){if(!e.supported||!this.enabled)return null;var n=window.localStorage.getItem(this.key);if(Fl.empty(n))return null;var i=JSON.parse(n);return Fl.string(t)&&t.length?i[t]:i}},{key:"set",value:function(t){if(e.supported&&this.enabled&&Fl.object(t)){var n=this.get();Fl.empty(n)&&(n={}),Gl(n,t),window.localStorage.setItem(this.key,JSON.stringify(n))}}}],[{key:"supported",get:function(){try{if(!("localStorage"in window))return!1;return window.localStorage.setItem("___test","___test"),window.localStorage.removeItem("___test"),!0}catch(e){return!1}}}]),e}();function Dc(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";return new Promise(function(n,i){try{var r=new XMLHttpRequest;if(!("withCredentials"in r))return;r.addEventListener("load",function(){if("text"===t)try{n(JSON.parse(r.responseText))}catch(e){n(r.responseText)}else n(r.response)}),r.addEventListener("error",function(){throw new Error(r.status)}),r.open("GET",e,!0),r.responseType=t,r.send()}catch(e){i(e)}})}function Hc(e,t){if(Fl.string(e)){var n=Fl.string(t),i=function(){return null!==document.getElementById(t)},r=function(e,t){e.innerHTML=t,n&&i()||document.body.insertAdjacentElement("afterbegin",e)};if(!n||!i()){var a=qc.supported,o=document.createElement("div");if(o.setAttribute("hidden",""),n&&o.setAttribute("id",t),a){var s=window.localStorage.getItem("".concat("cache","-").concat(t));if(null!==s){var l=JSON.parse(s);r(o,l.content)}}Dc(e).then(function(e){Fl.empty(e)||(a&&window.localStorage.setItem("".concat("cache","-").concat(t),JSON.stringify({content:e})),r(o,e))}).catch(function(){})}}}var Vc=Math.ceil,Bc=Math.floor;Ce({target:"Math",stat:!0},{trunc:function(e){return(e>0?Bc:Vc)(e)}});var zc=function(e){return Math.trunc(e/60/60%60,10)},Wc=function(e){return Math.trunc(e/60%60,10)},Kc=function(e){return Math.trunc(e%60,10)};function $c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!Fl.number(e))return $c(null,t,n);var i=function(e){return"0".concat(e).slice(-2)},r=zc(e),a=Wc(e),o=Kc(e);return r=t||r>0?"".concat(r,":"):"","".concat(n&&e>0?"-":"").concat(r).concat(i(a),":").concat(i(o))}var Yc={getIconUrl:function(){var e=new URL(this.config.iconUrl,window.location).host!==window.location.host||Hl.isIE&&!window.svg4everybody;return{url:this.config.iconUrl,cors:e}},findElements:function(){try{return this.elements.controls=cc.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:lc.call(this,this.config.selectors.buttons.play),pause:cc.call(this,this.config.selectors.buttons.pause),restart:cc.call(this,this.config.selectors.buttons.restart),rewind:cc.call(this,this.config.selectors.buttons.rewind),fastForward:cc.call(this,this.config.selectors.buttons.fastForward),mute:cc.call(this,this.config.selectors.buttons.mute),pip:cc.call(this,this.config.selectors.buttons.pip),airplay:cc.call(this,this.config.selectors.buttons.airplay),settings:cc.call(this,this.config.selectors.buttons.settings),captions:cc.call(this,this.config.selectors.buttons.captions),fullscreen:cc.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=cc.call(this,this.config.selectors.progress),this.elements.inputs={seek:cc.call(this,this.config.selectors.inputs.seek),volume:cc.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:cc.call(this,this.config.selectors.display.buffer),currentTime:cc.call(this,this.config.selectors.display.currentTime),duration:cc.call(this,this.config.selectors.display.duration)},Fl.element(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))),!0}catch(e){return this.debug.warn("It looks like there is a problem with your custom controls HTML",e),this.toggleNativeControls(!0),!1}},createIcon:function(e,t){var n=Yc.getIconUrl.call(this),i="".concat(n.cors?"":n.url,"#").concat(this.config.iconPrefix),r=document.createElementNS("http://www.w3.org/2000/svg","svg");Xl(r,Gl(t,{role:"presentation",focusable:"false"}));var a=document.createElementNS("http://www.w3.org/2000/svg","use"),o="".concat(i,"-").concat(e);return"href"in a&&a.setAttributeNS("http://www.w3.org/1999/xlink","href",o),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o),r.appendChild(a),r},createLabel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Fc(e,this.config);return Jl("span",Object.assign({},t,{class:[t.class,this.config.classNames.hidden].filter(Boolean).join(" ")}),n)},createBadge:function(e){if(Fl.empty(e))return null;var t=Jl("span",{class:this.config.classNames.menu.value});return t.appendChild(Jl("span",{class:this.config.classNames.menu.badge},e)),t},createButton:function(e,t){var n=this,i=Gl({},t),r=_c(e),a={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach(function(e){Object.keys(i).includes(e)&&(a[e]=i[e],delete i[e])}),"button"!==a.element||Object.keys(i).includes("type")||(i.type="button"),Object.keys(i).includes("class")?i.class.split(" ").some(function(e){return e===n.config.classNames.control})||Gl(i,{class:"".concat(i.class," ").concat(this.config.classNames.control)}):i.class=this.config.classNames.control,e){case"play":a.toggle=!0,a.label="play",a.labelPressed="pause",a.icon="play",a.iconPressed="pause";break;case"mute":a.toggle=!0,a.label="mute",a.labelPressed="unmute",a.icon="volume",a.iconPressed="muted";break;case"captions":a.toggle=!0,a.label="enableCaptions",a.labelPressed="disableCaptions",a.icon="captions-off",a.iconPressed="captions-on";break;case"fullscreen":a.toggle=!0,a.label="enterFullscreen",a.labelPressed="exitFullscreen",a.icon="enter-fullscreen",a.iconPressed="exit-fullscreen";break;case"play-large":i.class+=" ".concat(this.config.classNames.control,"--overlaid"),r="play",a.label="play",a.icon="play";break;default:Fl.empty(a.label)&&(a.label=r),Fl.empty(a.icon)&&(a.icon=e)}var o=Jl(a.element);return a.toggle?(o.appendChild(Yc.createIcon.call(this,a.iconPressed,{class:"icon--pressed"})),o.appendChild(Yc.createIcon.call(this,a.icon,{class:"icon--not-pressed"})),o.appendChild(Yc.createLabel.call(this,a.labelPressed,{class:"label--pressed"})),o.appendChild(Yc.createLabel.call(this,a.label,{class:"label--not-pressed"}))):(o.appendChild(Yc.createIcon.call(this,a.icon)),o.appendChild(Yc.createLabel.call(this,a.label))),Gl(i,ic(this.config.selectors.buttons[r],i)),Xl(o,i),"play"===r?(Fl.array(this.elements.buttons[r])||(this.elements.buttons[r]=[]),this.elements.buttons[r].push(o)):this.elements.buttons[r]=o,o},createRange:function(e,t){var n=Jl("input",Gl(ic(this.config.selectors.inputs[e]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":Fc(e,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},t));return this.elements.inputs[e]=n,Yc.updateRangeFill.call(this,n),hs.setup(n),n},createProgress:function(e,t){var n=Jl("progress",Gl(ic(this.config.selectors.display[e]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},t));if("volume"!==e){n.appendChild(Jl("span",null,"0"));var i={played:"played",buffer:"buffered"}[e],r=i?Fc(i,this.config):"";n.innerText="% ".concat(r.toLowerCase())}return this.elements.display[e]=n,n},createTime:function(e,t){var n=ic(this.config.selectors.display[e],t),i=Jl("div",Gl(n,{class:"".concat(n.class?n.class:""," ").concat(this.config.classNames.display.time," ").trim(),"aria-label":Fc(e,this.config)}),"00:00");return this.elements.display[e]=i,i},bindMenuItemShortcuts:function(e,t){var n=this;zl(e,"keydown keyup",function(i){if([32,38,39,40].includes(i.which)&&(i.preventDefault(),i.stopPropagation(),"keydown"!==i.type)){var r,a=sc(e,'[role="menuitemradio"]');if(!a&&[32,39].includes(i.which))Yc.showMenuPanel.call(n,t,!0);else 32!==i.which&&(40===i.which||a&&39===i.which?(r=e.nextElementSibling,Fl.element(r)||(r=e.parentNode.firstElementChild)):(r=e.previousElementSibling,Fl.element(r)||(r=e.parentNode.lastElementChild)),uc.call(n,r,!0))}},!1),zl(e,"keyup",function(e){13===e.which&&Yc.focusFirstMenuItem.call(n,null,!0)})},createMenuItem:function(e){var t=this,n=e.value,i=e.list,r=e.type,a=e.title,o=e.badge,s=void 0===o?null:o,l=e.checked,c=void 0!==l&&l,u=ic(this.config.selectors.inputs[r]),h=Jl("button",Gl(u,{type:"button",role:"menuitemradio",class:"".concat(this.config.classNames.control," ").concat(u.class?u.class:"").trim(),"aria-checked":c,value:n})),f=Jl("span");f.innerHTML=a,Fl.element(s)&&f.appendChild(s),h.appendChild(f),Object.defineProperty(h,"checked",{enumerable:!0,get:function(){return"true"===h.getAttribute("aria-checked")},set:function(e){e&&Array.from(h.parentNode.children).filter(function(e){return sc(e,'[role="menuitemradio"]')}).forEach(function(e){return e.setAttribute("aria-checked","false")}),h.setAttribute("aria-checked",e?"true":"false")}}),this.listeners.bind(h,"click keyup",function(e){if(!Fl.keyboardEvent(e)||32===e.which){switch(e.preventDefault(),e.stopPropagation(),h.checked=!0,r){case"language":t.currentTrack=Number(n);break;case"quality":t.quality=n;break;case"speed":t.speed=parseFloat(n)}Yc.showMenuPanel.call(t,"home",Fl.keyboardEvent(e))}},r,!1),Yc.bindMenuItemShortcuts.call(this,h,r),i.appendChild(h)},formatTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Fl.number(e)?$c(e,zc(this.duration)>0,t):e},updateTimeDisplay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Fl.element(e)&&Fl.number(t)&&(e.innerText=Yc.formatTime(t,n))},updateVolume:function(){this.supported.ui&&(Fl.element(this.elements.inputs.volume)&&Yc.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),Fl.element(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||0===this.volume))},setRange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Fl.element(e)&&(e.value=t,Yc.updateRangeFill.call(this,e))},updateProgress:function(e){var t=this;if(this.supported.ui&&Fl.event(e)){var n=0;if(e)switch(e.type){case"timeupdate":case"seeking":case"seeked":n=function(e,t){return 0===e||0===t||Number.isNaN(e)||Number.isNaN(t)?0:(e/t*100).toFixed(2)}(this.currentTime,this.duration),"timeupdate"===e.type&&Yc.setRange.call(this,this.elements.inputs.seek,n);break;case"playing":case"progress":!function(e,n){var i=Fl.number(n)?n:0,r=Fl.element(e)?e:t.elements.display.buffer;if(Fl.element(r)){r.value=i;var a=r.getElementsByTagName("span")[0];Fl.element(a)&&(a.childNodes[0].nodeValue=i)}}(this.elements.display.buffer,100*this.buffered)}}},updateRangeFill:function(e){var t=Fl.event(e)?e.target:e;if(Fl.element(t)&&"range"===t.getAttribute("type")){if(sc(t,this.config.selectors.inputs.seek)){t.setAttribute("aria-valuenow",this.currentTime);var n=Yc.formatTime(this.currentTime),i=Yc.formatTime(this.duration),r=Fc("seekLabel",this.config);t.setAttribute("aria-valuetext",r.replace("{currentTime}",n).replace("{duration}",i))}else if(sc(t,this.config.selectors.inputs.volume)){var a=100*t.value;t.setAttribute("aria-valuenow",a),t.setAttribute("aria-valuetext","".concat(a.toFixed(1),"%"))}else t.setAttribute("aria-valuenow",t.value);Hl.isWebkit&&t.style.setProperty("--value","".concat(t.value/t.max*100,"%"))}},updateSeekTooltip:function(e){var t=this;if(this.config.tooltips.seek&&Fl.element(this.elements.inputs.seek)&&Fl.element(this.elements.display.seekTooltip)&&0!==this.duration){var n="".concat(this.config.classNames.tooltip,"--visible"),i=function(e){return ac(t.elements.display.seekTooltip,n,e)};if(this.touch)i(!1);else{var r=0,a=this.elements.progress.getBoundingClientRect();if(Fl.event(e))r=100/a.width*(e.pageX-a.left);else{if(!oc(this.elements.display.seekTooltip,n))return;r=parseFloat(this.elements.display.seekTooltip.style.left,10)}r<0?r=0:r>100&&(r=100),Yc.updateTimeDisplay.call(this,this.elements.display.seekTooltip,this.duration/100*r),this.elements.display.seekTooltip.style.left="".concat(r,"%"),Fl.event(e)&&["mouseenter","mouseleave"].includes(e.type)&&i("mouseenter"===e.type)}}},timeUpdate:function(e){var t=!Fl.element(this.elements.display.duration)&&this.config.invertTime;Yc.updateTimeDisplay.call(this,this.elements.display.currentTime,t?this.duration-this.currentTime:this.currentTime,t),e&&"timeupdate"===e.type&&this.media.seeking||Yc.updateProgress.call(this,e)},durationUpdate:function(){if(this.supported.ui&&(this.config.invertTime||!this.currentTime)){if(this.duration>=Math.pow(2,32))return rc(this.elements.display.currentTime,!0),void rc(this.elements.progress,!0);Fl.element(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);var e=Fl.element(this.elements.display.duration);!e&&this.config.displayDuration&&this.paused&&Yc.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),e&&Yc.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),Yc.updateSeekTooltip.call(this)}},toggleMenuButton:function(e,t){rc(this.elements.settings.buttons[e],!t)},updateSetting:function(e,t,n){var i=this.elements.settings.panels[e],r=null,a=t;if("captions"===e)r=this.currentTrack;else{if(r=Fl.empty(n)?this[e]:n,Fl.empty(r)&&(r=this.config[e].default),!Fl.empty(this.options[e])&&!this.options[e].includes(r))return void this.debug.warn("Unsupported value of '".concat(r,"' for ").concat(e));if(!this.config[e].options.includes(r))return void this.debug.warn("Disabled value of '".concat(r,"' for ").concat(e))}if(Fl.element(a)||(a=i&&i.querySelector('[role="menu"]')),Fl.element(a)){this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML=Yc.getLabel.call(this,e,r);var o=a&&a.querySelector('[value="'.concat(r,'"]'));Fl.element(o)&&(o.checked=!0)}},getLabel:function(e,t){switch(e){case"speed":return 1===t?Fc("normal",this.config):"".concat(t,"&times;");case"quality":if(Fl.number(t)){var n=Fc("qualityLabel.".concat(t),this.config);return n.length?n:"".concat(t,"p")}return Nc(t);case"captions":return Xc.getLabel.call(this);default:return null}},setQualityMenu:function(e){var t=this;if(Fl.element(this.elements.settings.panels.quality)){var n=this.elements.settings.panels.quality.querySelector('[role="menu"]');Fl.array(e)&&(this.options.quality=bc(e).filter(function(e){return t.config.quality.options.includes(e)}));var i=!Fl.empty(this.options.quality)&&this.options.quality.length>1;if(Yc.toggleMenuButton.call(this,"quality",i),tc(n),Yc.checkMenu.call(this),i){var r=function(e){var n=Fc("qualityBadge.".concat(e),t.config);return n.length?Yc.createBadge.call(t,n):null};this.options.quality.sort(function(e,n){var i=t.config.quality.options;return i.indexOf(e)>i.indexOf(n)?1:-1}).forEach(function(e){Yc.createMenuItem.call(t,{value:e,list:n,type:"quality",title:Yc.getLabel.call(t,"quality",e),badge:r(e)})}),Yc.updateSetting.call(this,"quality",n)}}},setCaptionsMenu:function(){var e=this;if(Fl.element(this.elements.settings.panels.captions)){var t=this.elements.settings.panels.captions.querySelector('[role="menu"]'),n=Xc.getTracks.call(this),i=Boolean(n.length);if(Yc.toggleMenuButton.call(this,"captions",i),tc(t),Yc.checkMenu.call(this),i){var r=n.map(function(n,i){return{value:i,checked:e.captions.toggled&&e.currentTrack===i,title:Xc.getLabel.call(e,n),badge:n.language&&Yc.createBadge.call(e,n.language.toUpperCase()),list:t,type:"language"}});r.unshift({value:-1,checked:!this.captions.toggled,title:Fc("disabled",this.config),list:t,type:"language"}),r.forEach(Yc.createMenuItem.bind(this)),Yc.updateSetting.call(this,"captions",t)}}},setSpeedMenu:function(e){var t=this;if(Fl.element(this.elements.settings.panels.speed)){var n=this.elements.settings.panels.speed.querySelector('[role="menu"]');Fl.array(e)?this.options.speed=e:(this.isHTML5||this.isVimeo)&&(this.options.speed=[.5,.75,1,1.25,1.5,1.75,2]),this.options.speed=this.options.speed.filter(function(e){return t.config.speed.options.includes(e)});var i=!Fl.empty(this.options.speed)&&this.options.speed.length>1;Yc.toggleMenuButton.call(this,"speed",i),tc(n),Yc.checkMenu.call(this),i&&(this.options.speed.forEach(function(e){Yc.createMenuItem.call(t,{value:e,list:n,type:"speed",title:Yc.getLabel.call(t,"speed",e)})}),Yc.updateSetting.call(this,"speed",n))}},checkMenu:function(){var e=this.elements.settings.buttons,t=!Fl.empty(e)&&Object.values(e).some(function(e){return!e.hidden});rc(this.elements.settings.menu,!t)},focusFirstMenuItem:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.elements.settings.popup.hidden){var n=e;Fl.element(n)||(n=Object.values(this.elements.settings.panels).find(function(e){return!e.hidden}));var i=n.querySelector('[role^="menuitem"]');uc.call(this,i,t)}},toggleMenu:function(e){var t=this.elements.settings.popup,n=this.elements.buttons.settings;if(Fl.element(t)&&Fl.element(n)){var i=t.hidden,r=i;if(Fl.boolean(e))r=e;else if(Fl.keyboardEvent(e)&&27===e.which)r=!1;else if(Fl.event(e)){var a=Fl.function(e.composedPath)?e.composedPath()[0]:e.target,o=t.contains(a);if(o||!o&&e.target!==n&&r)return}n.setAttribute("aria-expanded",r),rc(t,!r),ac(this.elements.container,this.config.classNames.menu.open,r),r&&Fl.keyboardEvent(e)?Yc.focusFirstMenuItem.call(this,null,!0):r||i||uc.call(this,n,Fl.keyboardEvent(e))}},getMenuSize:function(e){var t=e.cloneNode(!0);t.style.position="absolute",t.style.opacity=0,t.removeAttribute("hidden"),e.parentNode.appendChild(t);var n=t.scrollWidth,i=t.scrollHeight;return ec(t),{width:n,height:i}},showMenuPanel:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.elements.container.querySelector("#plyr-settings-".concat(this.id,"-").concat(t));if(Fl.element(i)){var r=i.parentNode,a=Array.from(r.children).find(function(e){return!e.hidden});if(dc.transitions&&!dc.reducedMotion){r.style.width="".concat(a.scrollWidth,"px"),r.style.height="".concat(a.scrollHeight,"px");var o=Yc.getMenuSize.call(this,i);zl.call(this,r,ql,function t(n){n.target===r&&["width","height"].includes(n.propertyName)&&(r.style.width="",r.style.height="",Wl.call(e,r,ql,t))}),r.style.width="".concat(o.width,"px"),r.style.height="".concat(o.height,"px")}rc(a,!0),rc(i,!1),Yc.focusFirstMenuItem.call(this,i,n)}},setDownloadUrl:function(){var e=this.elements.buttons.download;Fl.element(e)&&e.setAttribute("href",this.download)},create:function(e){var t=this,n=Yc.bindMenuItemShortcuts,i=Yc.createButton,r=Yc.createProgress,a=Yc.createRange,o=Yc.createTime,s=Yc.setQualityMenu,l=Yc.setSpeedMenu,c=Yc.showMenuPanel;this.elements.controls=null,this.config.controls.includes("play-large")&&this.elements.container.appendChild(i.call(this,"play-large"));var u=Jl("div",ic(this.config.selectors.controls.wrapper));this.elements.controls=u;var h={class:"plyr__controls__item"};return bc(this.config.controls).forEach(function(s){if("restart"===s&&u.appendChild(i.call(t,"restart",h)),"rewind"===s&&u.appendChild(i.call(t,"rewind",h)),"play"===s&&u.appendChild(i.call(t,"play",h)),"fast-forward"===s&&u.appendChild(i.call(t,"fast-forward",h)),"progress"===s){var l=Jl("div",{class:"".concat(h.class," plyr__progress__container")}),f=Jl("div",ic(t.config.selectors.progress));if(f.appendChild(a.call(t,"seek",{id:"plyr-seek-".concat(e.id)})),f.appendChild(r.call(t,"buffer")),t.config.tooltips.seek){var d=Jl("span",{class:t.config.classNames.tooltip},"00:00");f.appendChild(d),t.elements.display.seekTooltip=d}t.elements.progress=f,l.appendChild(t.elements.progress),u.appendChild(l)}if("current-time"===s&&u.appendChild(o.call(t,"currentTime",h)),"duration"===s&&u.appendChild(o.call(t,"duration",h)),"mute"===s||"volume"===s){var p=t.elements.volume;if(Fl.element(p)&&u.contains(p)||(p=Jl("div",Gl({},h,{class:"".concat(h.class," plyr__volume").trim()})),t.elements.volume=p,u.appendChild(p)),"mute"===s&&p.appendChild(i.call(t,"mute")),"volume"===s){var m={max:1,step:.05,value:t.config.volume};p.appendChild(a.call(t,"volume",Gl(m,{id:"plyr-volume-".concat(e.id)})))}}if("captions"===s&&u.appendChild(i.call(t,"captions",h)),"settings"===s&&!Fl.empty(t.config.settings)){var g=Jl("div",Gl({},h,{class:"".concat(h.class," plyr__menu").trim(),hidden:""}));g.appendChild(i.call(t,"settings",{"aria-haspopup":!0,"aria-controls":"plyr-settings-".concat(e.id),"aria-expanded":!1}));var v=Jl("div",{class:"plyr__menu__container",id:"plyr-settings-".concat(e.id),hidden:""}),y=Jl("div"),b=Jl("div",{id:"plyr-settings-".concat(e.id,"-home")}),w=Jl("div",{role:"menu"});b.appendChild(w),y.appendChild(b),t.elements.settings.panels.home=b,t.config.settings.forEach(function(i){var r=Jl("button",Gl(ic(t.config.selectors.buttons.settings),{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--forward"),role:"menuitem","aria-haspopup":!0,hidden:""}));n.call(t,r,i),zl(r,"click",function(){c.call(t,i,!1)});var a=Jl("span",null,Fc(i,t.config)),o=Jl("span",{class:t.config.classNames.menu.value});o.innerHTML=e[i],a.appendChild(o),r.appendChild(a),w.appendChild(r);var s=Jl("div",{id:"plyr-settings-".concat(e.id,"-").concat(i),hidden:""}),l=Jl("button",{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--back")});l.appendChild(Jl("span",{"aria-hidden":!0},Fc(i,t.config))),l.appendChild(Jl("span",{class:t.config.classNames.hidden},Fc("menuBack",t.config))),zl(s,"keydown",function(e){37===e.which&&(e.preventDefault(),e.stopPropagation(),c.call(t,"home",!0))},!1),zl(l,"click",function(){c.call(t,"home",!1)}),s.appendChild(l),s.appendChild(Jl("div",{role:"menu"})),y.appendChild(s),t.elements.settings.buttons[i]=r,t.elements.settings.panels[i]=s}),v.appendChild(y),g.appendChild(v),u.appendChild(g),t.elements.settings.popup=v,t.elements.settings.menu=g}if("pip"===s&&dc.pip&&u.appendChild(i.call(t,"pip",h)),"airplay"===s&&dc.airplay&&u.appendChild(i.call(t,"airplay",h)),"download"===s){var k=Gl({},h,{element:"a",href:t.download,target:"_blank"}),T=t.config.urls.download;!Fl.url(T)&&t.isEmbed&&Gl(k,{icon:"logo-".concat(t.provider),label:t.provider}),u.appendChild(i.call(t,"download",k))}"fullscreen"===s&&u.appendChild(i.call(t,"fullscreen",h))}),this.isHTML5&&s.call(this,yc.getQualityOptions.call(this)),l.call(this),u},inject:function(){var e=this;if(this.config.loadSprite){var t=Yc.getIconUrl.call(this);t.cors&&Hc(t.url,"sprite-plyr")}this.id=Math.floor(1e4*Math.random());var n=null;this.elements.controls=null;var i={id:this.id,seektime:this.config.seekTime,title:this.config.title},r=!0;Fl.function(this.config.controls)&&(this.config.controls=this.config.controls.call(this,i)),this.config.controls||(this.config.controls=[]),Fl.element(this.config.controls)||Fl.string(this.config.controls)?n=this.config.controls:(n=Yc.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:Xc.getLabel.call(this)}),r=!1);var a,o=function(e){var t=e;return Object.entries(i).forEach(function(e){var n=Ha(e,2),i=n[0],r=n[1];t=jc(t,"{".concat(i,"}"),r)}),t};if(r&&(Fl.string(this.config.controls)?n=o(n):Fl.element(n)&&(n.innerHTML=o(n.innerHTML))),Fl.string(this.config.selectors.controls.container)&&(a=document.querySelector(this.config.selectors.controls.container)),Fl.element(a)||(a=this.elements.container),a[Fl.element(n)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",n),Fl.element(this.elements.controls)||Yc.findElements.call(this),!Fl.empty(this.elements.buttons)){var s=function(t){var n=e.config.classNames.controlPressed;Object.defineProperty(t,"pressed",{enumerable:!0,get:function(){return oc(t,n)},set:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];ac(t,n,e)}})};Object.values(this.elements.buttons).filter(Boolean).forEach(function(e){Fl.array(e)||Fl.nodeList(e)?Array.from(e).filter(Boolean).forEach(s):s(e)})}if(Hl.isEdge&&Dl(a),this.config.tooltips.controls){var l=this.config,c=l.classNames,u=l.selectors,h="".concat(u.controls.wrapper," ").concat(u.labels," .").concat(c.hidden),f=lc.call(this,h);Array.from(f).forEach(function(t){ac(t,e.config.classNames.hidden,!1),ac(t,e.config.classNames.tooltip,!0)})}}};function Gc(e){var t=e;if(!(arguments.length>1&&void 0!==arguments[1])||arguments[1]){var n=document.createElement("a");n.href=t,t=n.href}try{return new URL(t)}catch(e){return null}}function Qc(e){var t=new URLSearchParams;return Fl.object(e)&&Object.entries(e).forEach(function(e){var n=Ha(e,2),i=n[0],r=n[1];t.set(i,r)}),t}var Xc={setup:function(){if(this.supported.ui)if(!this.isVideo||this.isYouTube||this.isHTML5&&!dc.textTracks)Fl.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&Yc.setCaptionsMenu.call(this);else{if(Fl.element(this.elements.captions)||(this.elements.captions=Jl("div",ic(this.config.selectors.captions)),function(e,t){Fl.element(e)&&Fl.element(t)&&t.parentNode.insertBefore(e,t.nextSibling)}(this.elements.captions,this.elements.wrapper)),Hl.isIE&&window.URL){var e=this.media.querySelectorAll("track");Array.from(e).forEach(function(e){var t=e.getAttribute("src"),n=Gc(t);null!==n&&n.hostname!==window.location.href.hostname&&["http:","https:"].includes(n.protocol)&&Dc(t,"blob").then(function(t){e.setAttribute("src",window.URL.createObjectURL(t))}).catch(function(){ec(e)})})}var t=bc((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map(function(e){return e.split("-")[0]})),n=(this.storage.get("language")||this.config.captions.language||"auto").toLowerCase();if("auto"===n)n=Ha(t,1)[0];var i=this.storage.get("captions");if(Fl.boolean(i)||(i=this.config.captions.active),Object.assign(this.captions,{toggled:!1,active:i,language:n,languages:t}),this.isHTML5){var r=this.config.captions.update?"addtrack removetrack":"removetrack";zl.call(this,this.media.textTracks,r,Xc.update.bind(this))}setTimeout(Xc.update.bind(this),0)}},update:function(){var e=this,t=Xc.getTracks.call(this,!0),n=this.captions,i=n.active,r=n.language,a=n.meta,o=n.currentTrackNode,s=Boolean(t.find(function(e){return e.language===r}));this.isHTML5&&this.isVideo&&t.filter(function(e){return!a.get(e)}).forEach(function(t){e.debug.log("Track added",t),a.set(t,{default:"showing"===t.mode}),t.mode="hidden",zl.call(e,t,"cuechange",function(){return Xc.updateCues.call(e)})}),(s&&this.language!==r||!t.includes(o))&&(Xc.setLanguage.call(this,r),Xc.toggle.call(this,i&&s)),ac(this.elements.container,this.config.classNames.captions.enabled,!Fl.empty(t)),(this.config.controls||[]).includes("settings")&&this.config.settings.includes("captions")&&Yc.setCaptionsMenu.call(this)},toggle:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.supported.ui){var n=this.captions.toggled,i=this.config.classNames.captions.active,r=Fl.nullOrUndefined(e)?!n:e;if(r!==n){if(t||(this.captions.active=r,this.storage.set({captions:r})),!this.language&&r&&!t){var a=Xc.getTracks.call(this),o=Xc.findTrack.call(this,[this.captions.language].concat(Va(this.captions.languages)),!0);return this.captions.language=o.language,void Xc.set.call(this,a.indexOf(o))}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=r),ac(this.elements.container,i,r),this.captions.toggled=r,Yc.updateSetting.call(this,"captions"),$l.call(this,this.media,r?"captionsenabled":"captionsdisabled")}}},set:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Xc.getTracks.call(this);if(-1!==e)if(Fl.number(e))if(e in n){if(this.captions.currentTrack!==e){this.captions.currentTrack=e;var i=n[e],r=(i||{}).language;this.captions.currentTrackNode=i,Yc.updateSetting.call(this,"captions"),t||(this.captions.language=r,this.storage.set({language:r})),this.isVimeo&&this.embed.enableTextTrack(r),$l.call(this,this.media,"languagechange")}Xc.toggle.call(this,!0,t),this.isHTML5&&this.isVideo&&Xc.updateCues.call(this)}else this.debug.warn("Track not found",e);else this.debug.warn("Invalid caption argument",e);else Xc.toggle.call(this,!1,t)},setLanguage:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(Fl.string(e)){var n=e.toLowerCase();this.captions.language=n;var i=Xc.getTracks.call(this),r=Xc.findTrack.call(this,[n]);Xc.set.call(this,i.indexOf(r),t)}else this.debug.warn("Invalid language argument",e)},getTracks:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Array.from((this.media||{}).textTracks||[]).filter(function(n){return!e.isHTML5||t||e.captions.meta.has(n)}).filter(function(e){return["captions","subtitles"].includes(e.kind)})},findTrack:function(e){var t,n=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Xc.getTracks.call(this),a=function(e){return Number((n.captions.meta.get(e)||{}).default)},o=Array.from(r).sort(function(e,t){return a(t)-a(e)});return e.every(function(e){return!(t=o.find(function(t){return t.language===e}))}),t||(i?o[0]:void 0)},getCurrentTrack:function(){return Xc.getTracks.call(this)[this.currentTrack]},getLabel:function(e){var t=e;return!Fl.track(t)&&dc.textTracks&&this.captions.toggled&&(t=Xc.getCurrentTrack.call(this)),Fl.track(t)?Fl.empty(t.label)?Fl.empty(t.language)?Fc("enabled",this.config):e.language.toUpperCase():t.label:Fc("disabled",this.config)},updateCues:function(e){if(this.supported.ui)if(Fl.element(this.elements.captions))if(Fl.nullOrUndefined(e)||Array.isArray(e)){var t=e;if(!t){var n=Xc.getCurrentTrack.call(this);t=Array.from((n||{}).activeCues||[]).map(function(e){return e.getCueAsHTML()}).map(Rc)}var i=t.map(function(e){return e.trim()}).join("\n");if(i!==this.elements.captions.innerHTML){tc(this.elements.captions);var r=Jl("span",ic(this.config.selectors.caption));r.innerHTML=i,this.elements.captions.appendChild(r),$l.call(this,this.media,"cuechange")}}else this.debug.warn("updateCues: Invalid input",e);else this.debug.warn("No captions element to render to")}},Jc={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.5.6/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240]},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/v2/video/{0}.json"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},tabFocus:"plyr__tab-focus",previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1},youtube:{noCookie:!1,rel:0,showinfo:0,iv_load_policy:3,modestbranding:1}},Zc="picture-in-picture",eu="inline",tu={html5:"html5",youtube:"youtube",vimeo:"vimeo"},nu={audio:"audio",video:"video"};var iu=function(){},ru=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Ua(this,e),this.enabled=window.console&&t,this.enabled&&this.log("Debugging enabled")}return qa(e,[{key:"log",get:function(){return this.enabled?Function.prototype.bind.call(console.log,console):iu}},{key:"warn",get:function(){return this.enabled?Function.prototype.bind.call(console.warn,console):iu}},{key:"error",get:function(){return this.enabled?Function.prototype.bind.call(console.error,console):iu}}]),e}();function au(){if(this.enabled){var e=this.player.elements.buttons.fullscreen;Fl.element(e)&&(e.pressed=this.active),$l.call(this.player,this.target,this.active?"enterfullscreen":"exitfullscreen",!0),Hl.isIos||function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Fl.element(e)){var n=lc.call(this,"button:not(:disabled), input:not(:disabled), [tabindex]"),i=n[0],r=n[n.length-1];Bl.call(this,this.elements.container,"keydown",function(e){if("Tab"===e.key&&9===e.keyCode){var t=document.activeElement;t!==r||e.shiftKey?t===i&&e.shiftKey&&(r.focus(),e.preventDefault()):(i.focus(),e.preventDefault())}},t,!1)}}.call(this.player,this.target,this.active)}}function ou(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e?this.scrollPosition={x:window.scrollX||0,y:window.scrollY||0}:window.scrollTo(this.scrollPosition.x,this.scrollPosition.y),document.body.style.overflow=e?"hidden":"",ac(this.target,this.player.config.classNames.fullscreen.fallback,e),Hl.isIos){var t=document.head.querySelector('meta[name="viewport"]'),n="viewport-fit=cover";t||(t=document.createElement("meta")).setAttribute("name","viewport");var i=Fl.string(t.content)&&t.content.includes(n);e?(this.cleanupViewport=!i,i||(t.content+=",".concat(n))):this.cleanupViewport&&(t.content=t.content.split(",").filter(function(e){return e.trim()!==n}).join(","))}au.call(this)}var su=function(){function e(t){var n=this;Ua(this,e),this.player=t,this.prefix=e.prefix,this.property=e.property,this.scrollPosition={x:0,y:0},this.forceFallback="force"===t.config.fullscreen.fallback,zl.call(this.player,document,"ms"===this.prefix?"MSFullscreenChange":"".concat(this.prefix,"fullscreenchange"),function(){au.call(n)}),zl.call(this.player,this.player.elements.container,"dblclick",function(e){Fl.element(n.player.elements.controls)&&n.player.elements.controls.contains(e.target)||n.toggle()}),this.update()}return qa(e,[{key:"update",value:function(){var t;this.enabled?(t=this.forceFallback?"Fallback (forced)":e.native?"Native":"Fallback",this.player.debug.log("".concat(t," fullscreen enabled"))):this.player.debug.log("Fullscreen not supported and fallback disabled");ac(this.player.elements.container,this.player.config.classNames.fullscreen.enabled,this.enabled)}},{key:"enter",value:function(){this.enabled&&(Hl.isIos&&this.player.config.fullscreen.iosNative?this.target.webkitEnterFullscreen():!e.native||this.forceFallback?ou.call(this,!0):this.prefix?Fl.empty(this.prefix)||this.target["".concat(this.prefix,"Request").concat(this.property)]():this.target.requestFullscreen())}},{key:"exit",value:function(){if(this.enabled)if(Hl.isIos&&this.player.config.fullscreen.iosNative)this.target.webkitExitFullscreen(),this.player.play();else if(!e.native||this.forceFallback)ou.call(this,!1);else if(this.prefix){if(!Fl.empty(this.prefix)){var t="moz"===this.prefix?"Cancel":"Exit";document["".concat(this.prefix).concat(t).concat(this.property)]()}}else(document.cancelFullScreen||document.exitFullscreen).call(document)}},{key:"toggle",value:function(){this.active?this.exit():this.enter()}},{key:"usingNative",get:function(){return e.native&&!this.forceFallback}},{key:"enabled",get:function(){return(e.native||this.player.config.fullscreen.fallback)&&this.player.config.fullscreen.enabled&&this.player.supported.ui&&this.player.isVideo}},{key:"active",get:function(){return!!this.enabled&&(!e.native||this.forceFallback?oc(this.target,this.player.config.classNames.fullscreen.fallback):(this.prefix?document["".concat(this.prefix).concat(this.property,"Element")]:document.fullscreenElement)===this.target)}},{key:"target",get:function(){return Hl.isIos&&this.player.config.fullscreen.iosNative?this.player.media:this.player.elements.container}}],[{key:"native",get:function(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)}},{key:"prefix",get:function(){if(Fl.function(document.exitFullscreen))return"";var e="";return["webkit","moz","ms"].some(function(t){return!(!Fl.function(document["".concat(t,"ExitFullscreen")])&&!Fl.function(document["".concat(t,"CancelFullScreen")]))&&(e=t,!0)}),e}},{key:"property",get:function(){return"moz"===this.prefix?"FullScreen":"Fullscreen"}}]),e}(),lu=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1};function cu(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new Promise(function(n,i){var r=new Image,a=function(){delete r.onload,delete r.onerror,(r.naturalWidth>=t?n:i)(r)};Object.assign(r,{onload:a,onerror:a,src:e})})}Ce({target:"Math",stat:!0},{sign:lu});var uu={addStyleHook:function(){ac(this.elements.container,this.config.selectors.container.replace(".",""),!0),ac(this.elements.container,this.config.classNames.uiSupported,this.supported.ui)},toggleNativeControls:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.isHTML5?this.media.setAttribute("controls",""):this.media.removeAttribute("controls")},build:function(){var e=this;if(this.listeners.media(),!this.supported.ui)return this.debug.warn("Basic support only for ".concat(this.provider," ").concat(this.type)),void uu.toggleNativeControls.call(this,!0);Fl.element(this.elements.controls)||(Yc.inject.call(this),this.listeners.controls()),uu.toggleNativeControls.call(this),this.isHTML5&&Xc.setup.call(this),this.volume=null,this.muted=null,this.loop=null,this.quality=null,this.speed=null,Yc.updateVolume.call(this),Yc.timeUpdate.call(this),uu.checkPlaying.call(this),ac(this.elements.container,this.config.classNames.pip.supported,dc.pip&&this.isHTML5&&this.isVideo),ac(this.elements.container,this.config.classNames.airplay.supported,dc.airplay&&this.isHTML5),ac(this.elements.container,this.config.classNames.isIos,Hl.isIos),ac(this.elements.container,this.config.classNames.isTouch,this.touch),this.ready=!0,setTimeout(function(){$l.call(e,e.media,"ready")},0),uu.setTitle.call(this),this.poster&&uu.setPoster.call(this,this.poster,!1).catch(function(){}),this.config.duration&&Yc.durationUpdate.call(this)},setTitle:function(){var e=Fc("play",this.config);if(Fl.string(this.config.title)&&!Fl.empty(this.config.title)&&(e+=", ".concat(this.config.title)),Array.from(this.elements.buttons.play||[]).forEach(function(t){t.setAttribute("aria-label",e)}),this.isEmbed){var t=cc.call(this,"iframe");if(!Fl.element(t))return;var n=Fl.empty(this.config.title)?"video":this.config.title,i=Fc("frameTitle",this.config);t.setAttribute("title",i.replace("{title}",n))}},togglePoster:function(e){ac(this.elements.container,this.config.classNames.posterEnabled,e)},setPoster:function(e){var t=this;return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]||!this.poster?(this.media.setAttribute("poster",e),function(){var e=this;return new Promise(function(t){return e.ready?setTimeout(t,0):zl.call(e,e.elements.container,"ready",t)}).then(function(){})}.call(this).then(function(){return cu(e)}).catch(function(n){throw e===t.poster&&uu.togglePoster.call(t,!1),n}).then(function(){if(e!==t.poster)throw new Error("setPoster cancelled by later call to setPoster")}).then(function(){return Object.assign(t.elements.poster.style,{backgroundImage:"url('".concat(e,"')"),backgroundSize:""}),uu.togglePoster.call(t,!0),e})):Promise.reject(new Error("Poster already set"))},checkPlaying:function(e){var t=this;ac(this.elements.container,this.config.classNames.playing,this.playing),ac(this.elements.container,this.config.classNames.paused,this.paused),ac(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach(function(e){Object.assign(e,{pressed:t.playing})}),Fl.event(e)&&"timeupdate"===e.type||uu.toggleControls.call(this)},checkLoading:function(e){var t=this;this.loading=["stalled","waiting"].includes(e.type),clearTimeout(this.timers.loading),this.timers.loading=setTimeout(function(){ac(t.elements.container,t.config.classNames.loading,t.loading),uu.toggleControls.call(t)},this.loading?250:0)},toggleControls:function(e){var t=this.elements.controls;if(t&&this.config.hideControls){var n=this.touch&&this.lastSeekTime+2e3>Date.now();this.toggleControls(Boolean(e||this.loading||this.paused||t.pressed||t.hover||n))}}},hu=function(){function e(t){Ua(this,e),this.player=t,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.setTabFocus=this.setTabFocus.bind(this),this.firstTouch=this.firstTouch.bind(this)}return qa(e,[{key:"handleKey",value:function(e){var t=this.player,n=t.elements,i=e.keyCode?e.keyCode:e.which,r="keydown"===e.type,a=r&&i===this.lastKey;if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&Fl.number(i)){if(r){var o=document.activeElement;if(Fl.element(o)){var s=t.config.selectors.editable;if(o!==n.inputs.seek&&sc(o,s))return;if(32===e.which&&sc(o,'button, [role^="menuitem"]'))return}switch([32,37,38,39,40,48,49,50,51,52,53,54,56,57,67,70,73,75,76,77,79].includes(i)&&(e.preventDefault(),e.stopPropagation()),i){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:a||(t.currentTime=t.duration/10*(i-48));break;case 32:case 75:a||t.togglePlay();break;case 38:t.increaseVolume(.1);break;case 40:t.decreaseVolume(.1);break;case 77:a||(t.muted=!t.muted);break;case 39:t.forward();break;case 37:t.rewind();break;case 70:t.fullscreen.toggle();break;case 67:a||t.toggleCaptions();break;case 76:t.loop=!t.loop}27===i&&!t.fullscreen.usingNative&&t.fullscreen.active&&t.fullscreen.toggle(),this.lastKey=i}else this.lastKey=null}}},{key:"toggleMenu",value:function(e){Yc.toggleMenu.call(this.player,e)}},{key:"firstTouch",value:function(){var e=this.player,t=e.elements;e.touch=!0,ac(t.container,e.config.classNames.isTouch,!0)}},{key:"setTabFocus",value:function(e){var t=this.player,n=t.elements;if(clearTimeout(this.focusTimer),"keydown"!==e.type||9===e.which){"keydown"===e.type&&(this.lastKeyDown=e.timeStamp);var i,r=e.timeStamp-this.lastKeyDown<=20;if("focus"!==e.type||r)i=t.config.classNames.tabFocus,ac(lc.call(t,".".concat(i)),i,!1),this.focusTimer=setTimeout(function(){var e=document.activeElement;n.container.contains(e)&&ac(document.activeElement,t.config.classNames.tabFocus,!0)},10)}}},{key:"global",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.player;t.config.keyboard.global&&Bl.call(t,window,"keydown keyup",this.handleKey,e,!1),Bl.call(t,document.body,"click",this.toggleMenu,e),Kl.call(t,document.body,"touchstart",this.firstTouch),Bl.call(t,document.body,"keydown focus blur",this.setTabFocus,e,!1,!0)}},{key:"container",value:function(){var e=this.player,t=e.config,n=e.elements,i=e.timers;!t.keyboard.global&&t.keyboard.focused&&zl.call(e,n.container,"keydown keyup",this.handleKey,!1),zl.call(e,n.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",function(t){var r=n.controls;r&&"enterfullscreen"===t.type&&(r.pressed=!1,r.hover=!1);var a=0;["touchstart","touchmove","mousemove"].includes(t.type)&&(uu.toggleControls.call(e,!0),a=e.touch?3e3:2e3),clearTimeout(i.controls),i.controls=setTimeout(function(){return uu.toggleControls.call(e,!1)},a)});var r=function(t){if(!t)return vc.call(e);var i=n.container.getBoundingClientRect(),r=i.width,a=i.height;return vc.call(e,"".concat(r,":").concat(a))},a=function(){clearTimeout(i.resized),i.resized=setTimeout(r,50)};zl.call(e,n.container,"enterfullscreen exitfullscreen",function(t){var i=e.fullscreen,o=i.target,s=i.usingNative;if(o===n.container&&(e.isEmbed||!Fl.empty(e.config.ratio))){var l="enterfullscreen"===t.type,c=r(l);c.padding;!function(t,n,i){if(e.isVimeo){var r=e.elements.wrapper.firstChild,a=Ha(t,2)[1],o=Ha(gc.call(e),2),s=o[0],l=o[1];r.style.maxWidth=i?"".concat(a/l*s,"px"):null,r.style.margin=i?"0 auto":null}}(c.ratio,0,l),s||(l?zl.call(e,window,"resize",a):Wl.call(e,window,"resize",a))}})}},{key:"media",value:function(){var e=this,t=this.player,n=t.elements;if(zl.call(t,t.media,"timeupdate seeking seeked",function(e){return Yc.timeUpdate.call(t,e)}),zl.call(t,t.media,"durationchange loadeddata loadedmetadata",function(e){return Yc.durationUpdate.call(t,e)}),zl.call(t,t.media,"canplay loadeddata",function(){rc(n.volume,!t.hasAudio),rc(n.buttons.mute,!t.hasAudio)}),zl.call(t,t.media,"ended",function(){t.isHTML5&&t.isVideo&&t.config.resetOnEnd&&t.restart()}),zl.call(t,t.media,"progress playing seeking seeked",function(e){return Yc.updateProgress.call(t,e)}),zl.call(t,t.media,"volumechange",function(e){return Yc.updateVolume.call(t,e)}),zl.call(t,t.media,"playing play pause ended emptied timeupdate",function(e){return uu.checkPlaying.call(t,e)}),zl.call(t,t.media,"waiting canplay seeked playing",function(e){return uu.checkLoading.call(t,e)}),t.supported.ui&&t.config.clickToPlay&&!t.isAudio){var i=cc.call(t,".".concat(t.config.classNames.video));if(!Fl.element(i))return;zl.call(t,n.container,"click",function(r){([n.container,i].includes(r.target)||i.contains(r.target))&&(t.touch&&t.config.hideControls||(t.ended?(e.proxy(r,t.restart,"restart"),e.proxy(r,t.play,"play")):e.proxy(r,t.togglePlay,"play")))})}t.supported.ui&&t.config.disableContextMenu&&zl.call(t,n.wrapper,"contextmenu",function(e){e.preventDefault()},!1),zl.call(t,t.media,"volumechange",function(){t.storage.set({volume:t.volume,muted:t.muted})}),zl.call(t,t.media,"ratechange",function(){Yc.updateSetting.call(t,"speed"),t.storage.set({speed:t.speed})}),zl.call(t,t.media,"qualitychange",function(e){Yc.updateSetting.call(t,"quality",null,e.detail.quality)}),zl.call(t,t.media,"ready qualitychange",function(){Yc.setDownloadUrl.call(t)});var r=t.config.events.concat(["keyup","keydown"]).join(" ");zl.call(t,t.media,r,function(e){var i=e.detail,r=void 0===i?{}:i;"error"===e.type&&(r=t.media.error),$l.call(t,n.container,e.type,!0,r)})}},{key:"proxy",value:function(e,t,n){var i=this.player,r=i.config.listeners[n],a=!0;Fl.function(r)&&(a=r.call(i,e)),a&&Fl.function(t)&&t.call(i,e)}},{key:"bind",value:function(e,t,n,i){var r=this,a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=this.player,s=o.config.listeners[i],l=Fl.function(s);zl.call(o,e,t,function(e){return r.proxy(e,n,i)},a&&!l)}},{key:"controls",value:function(){var e=this,t=this.player,n=t.elements,i=Hl.isIE?"change":"input";if(n.buttons.play&&Array.from(n.buttons.play).forEach(function(n){e.bind(n,"click",t.togglePlay,"play")}),this.bind(n.buttons.restart,"click",t.restart,"restart"),this.bind(n.buttons.rewind,"click",t.rewind,"rewind"),this.bind(n.buttons.fastForward,"click",t.forward,"fastForward"),this.bind(n.buttons.mute,"click",function(){t.muted=!t.muted},"mute"),this.bind(n.buttons.captions,"click",function(){return t.toggleCaptions()}),this.bind(n.buttons.download,"click",function(){$l.call(t,t.media,"download")},"download"),this.bind(n.buttons.fullscreen,"click",function(){t.fullscreen.toggle()},"fullscreen"),this.bind(n.buttons.pip,"click",function(){t.pip="toggle"},"pip"),this.bind(n.buttons.airplay,"click",t.airplay,"airplay"),this.bind(n.buttons.settings,"click",function(e){e.stopPropagation(),Yc.toggleMenu.call(t,e)}),this.bind(n.buttons.settings,"keyup",function(e){var n=e.which;[13,32].includes(n)&&(13!==n?(e.preventDefault(),e.stopPropagation(),Yc.toggleMenu.call(t,e)):Yc.focusFirstMenuItem.call(t,null,!0))},null,!1),this.bind(n.settings.menu,"keydown",function(e){27===e.which&&Yc.toggleMenu.call(t,e)}),this.bind(n.inputs.seek,"mousedown mousemove",function(e){var t=n.progress.getBoundingClientRect(),i=100/t.width*(e.pageX-t.left);e.currentTarget.setAttribute("seek-value",i)}),this.bind(n.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",function(e){var n=e.currentTarget,i=e.keyCode?e.keyCode:e.which;if(!Fl.keyboardEvent(e)||39===i||37===i){t.lastSeekTime=Date.now();var r=n.hasAttribute("play-on-seeked"),a=["mouseup","touchend","keyup"].includes(e.type);r&&a?(n.removeAttribute("play-on-seeked"),t.play()):!a&&t.playing&&(n.setAttribute("play-on-seeked",""),t.pause())}}),Hl.isIos){var r=lc.call(t,'input[type="range"]');Array.from(r).forEach(function(t){return e.bind(t,i,function(e){return Dl(e.target)})})}this.bind(n.inputs.seek,i,function(e){var n=e.currentTarget,i=n.getAttribute("seek-value");Fl.empty(i)&&(i=n.value),n.removeAttribute("seek-value"),t.currentTime=i/n.max*t.duration},"seek"),this.bind(n.progress,"mouseenter mouseleave mousemove",function(e){return Yc.updateSeekTooltip.call(t,e)}),this.bind(n.progress,"mousemove touchmove",function(e){var n=t.previewThumbnails;n&&n.loaded&&n.startMove(e)}),this.bind(n.progress,"mouseleave click",function(){var e=t.previewThumbnails;e&&e.loaded&&e.endMove(!1,!0)}),this.bind(n.progress,"mousedown touchstart",function(e){var n=t.previewThumbnails;n&&n.loaded&&n.startScrubbing(e)}),this.bind(n.progress,"mouseup touchend",function(e){var n=t.previewThumbnails;n&&n.loaded&&n.endScrubbing(e)}),Hl.isWebkit&&Array.from(lc.call(t,'input[type="range"]')).forEach(function(n){e.bind(n,"input",function(e){return Yc.updateRangeFill.call(t,e.target)})}),t.config.toggleInvert&&!Fl.element(n.display.duration)&&this.bind(n.display.currentTime,"click",function(){0!==t.currentTime&&(t.config.invertTime=!t.config.invertTime,Yc.timeUpdate.call(t))}),this.bind(n.inputs.volume,i,function(e){t.volume=e.target.value},"volume"),this.bind(n.controls,"mouseenter mouseleave",function(e){n.controls.hover=!t.touch&&"mouseenter"===e.type}),this.bind(n.controls,"mousedown mouseup touchstart touchend touchcancel",function(e){n.controls.pressed=["mousedown","touchstart"].includes(e.type)}),this.bind(n.controls,"focusin",function(){var i=t.config,r=t.timers;ac(n.controls,i.classNames.noTransition,!0),uu.toggleControls.call(t,!0),setTimeout(function(){ac(n.controls,i.classNames.noTransition,!1)},0);var a=e.touch?3e3:4e3;clearTimeout(r.controls),r.controls=setTimeout(function(){return uu.toggleControls.call(t,!1)},a)}),this.bind(n.inputs.volume,"wheel",function(e){var n=e.webkitDirectionInvertedFromDevice,i=Ha([e.deltaX,-e.deltaY].map(function(e){return n?-e:e}),2),r=i[0],a=i[1],o=Math.sign(Math.abs(r)>Math.abs(a)?r:a);t.increaseVolume(o/50);var s=t.media.volume;(1===o&&s<1||-1===o&&s>0)&&e.preventDefault()},"volume",!1)}}]),e}(),fu=O.f,du=Function.prototype,pu=du.toString,mu=/^\s*function ([^ (]*)/;!c||"name"in du||fu(du,"name",{configurable:!0,get:function(){try{return pu.call(this).match(mu)[1]}catch(e){return""}}});var gu=Math.max,vu=Math.min;Ce({target:"Array",proto:!0,forced:!kn("splice")},{splice:function(e,t){var n,i,r,a,o,s,l=Me(this),c=oe(l.length),u=ce(e,c),h=arguments.length;if(0===h?n=i=0:1===h?(n=0,i=c-u):(n=h-2,i=vu(gu(re(t),0),c-u)),c+n-i>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(r=tt(l,i),a=0;a<i;a++)(o=u+a)in l&&bn(r,a,l[o]);if(r.length=i,n<i){for(a=u;a<c-i;a++)s=a+n,(o=a+i)in l?l[s]=l[o]:delete l[s];for(a=c;a>c-i+n;a--)delete l[a-1]}else if(n>i)for(a=c-i;a>u;a--)s=a+n-1,(o=a+i-1)in l?l[s]=l[o]:delete l[s];for(a=0;a<n;a++)l[a+u]=arguments[a+2];return l.length=c-i+n,r}});var yu=t(function(e,t){e.exports=function(){var e=function(){},t={},n={},i={};function r(e,t){if(e){var r=i[e];if(n[e]=t,r)for(;r.length;)r[0](e,t),r.splice(0,1)}}function a(t,n){t.call&&(t={success:t}),n.length?(t.error||e)(n):(t.success||e)(t)}function o(t,n,i,r){var a,s,l=document,c=i.async,u=(i.numRetries||0)+1,h=i.before||e,f=t.replace(/^(css|img)!/,"");r=r||0,/(^css!|\.css$)/.test(t)?((s=l.createElement("link")).rel="stylesheet",s.href=f,(a="hideFocus"in s)&&s.relList&&(a=0,s.rel="preload",s.as="style")):/(^img!|\.(png|gif|jpg|svg)$)/.test(t)?(s=l.createElement("img")).src=f:((s=l.createElement("script")).src=t,s.async=void 0===c||c),s.onload=s.onerror=s.onbeforeload=function(e){var l=e.type[0];if(a)try{s.sheet.cssText.length||(l="e")}catch(e){18!=e.code&&(l="e")}if("e"==l){if((r+=1)<u)return o(t,n,i,r)}else if("preload"==s.rel&&"style"==s.as)return s.rel="stylesheet";n(t,l,e.defaultPrevented)},!1!==h(t,s)&&l.head.appendChild(s)}function s(e,n,i){var s,l;if(n&&n.trim&&(s=n),l=(s?i:n)||{},s){if(s in t)throw"LoadJS";t[s]=!0}function c(t,n){!function(e,t,n){var i,r,a=(e=e.push?e:[e]).length,s=a,l=[];for(i=function(e,n,i){if("e"==n&&l.push(e),"b"==n){if(!i)return;l.push(e)}--a||t(l)},r=0;r<s;r++)o(e[r],i,n)}(e,function(e){a(l,e),t&&a({success:t,error:n},e),r(s,e)},l)}if(l.returnPromise)return new Promise(c);c()}return s.ready=function(e,t){return function(e,t){e=e.push?e:[e];var r,a,o,s=[],l=e.length,c=l;for(r=function(e,n){n.length&&s.push(e),--c||t(s)};l--;)a=e[l],(o=n[a])?r(a,o):(i[a]=i[a]||[]).push(r)}(e,function(e){a(t,e)}),s},s.done=function(e){r(e,[])},s.reset=function(){t={},n={},i={}},s.isDefined=function(e){return e in t},s}()});function bu(e){return new Promise(function(t,n){yu(e,{success:t,error:n})})}function wu(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,$l.call(this,this.media,e?"play":"pause"))}var ku={setup:function(){var e=this;ac(this.elements.wrapper,this.config.classNames.embed,!0),vc.call(this),Fl.object(window.Vimeo)?ku.ready.call(this):bu(this.config.urls.vimeo.sdk).then(function(){ku.ready.call(e)}).catch(function(t){e.debug.warn("Vimeo SDK (player.js) failed to load",t)})},ready:function(){var e=this,t=this,n=t.config.vimeo,i=Qc(Gl({},{loop:t.config.loop.active,autoplay:t.autoplay,muted:t.muted,gesture:"media",playsinline:!this.config.fullscreen.iosNative},n)),r=t.media.getAttribute("src");Fl.empty(r)&&(r=t.media.getAttribute(t.config.attributes.embed.id));var a,o=(a=r,Fl.empty(a)?null:Fl.number(Number(a))?a:a.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:a),s=Jl("iframe"),l=Oc(t.config.urls.vimeo.iframe,o,i);s.setAttribute("src",l),s.setAttribute("allowfullscreen",""),s.setAttribute("allowtransparency",""),s.setAttribute("allow","autoplay");var c=Jl("div",{poster:t.poster,class:t.config.classNames.embedContainer});c.appendChild(s),t.media=nc(c,t.media),Dc(Oc(t.config.urls.vimeo.api,o),"json").then(function(e){if(!Fl.empty(e)){var n=new URL(e[0].thumbnail_large);n.pathname="".concat(n.pathname.split("_")[0],".jpg"),uu.setPoster.call(t,n.href).catch(function(){})}}),t.embed=new window.Vimeo.Player(s,{autopause:t.config.autopause,muted:t.muted}),t.media.paused=!0,t.media.currentTime=0,t.supported.ui&&t.embed.disableTextTrack(),t.media.play=function(){return wu.call(t,!0),t.embed.play()},t.media.pause=function(){return wu.call(t,!1),t.embed.pause()},t.media.stop=function(){t.pause(),t.currentTime=0};var u=t.media.currentTime;Object.defineProperty(t.media,"currentTime",{get:function(){return u},set:function(e){var n=t.embed,i=t.media,r=t.paused,a=t.volume,o=r&&!n.hasPlayed;i.seeking=!0,$l.call(t,i,"seeking"),Promise.resolve(o&&n.setVolume(0)).then(function(){return n.setCurrentTime(e)}).then(function(){return o&&n.pause()}).then(function(){return o&&n.setVolume(a)}).catch(function(){})}});var h=t.config.speed.selected;Object.defineProperty(t.media,"playbackRate",{get:function(){return h},set:function(e){t.embed.setPlaybackRate(e).then(function(){h=e,$l.call(t,t.media,"ratechange")}).catch(function(e){"Error"===e.name&&Yc.setSpeedMenu.call(t,[])})}});var f=t.config.volume;Object.defineProperty(t.media,"volume",{get:function(){return f},set:function(e){t.embed.setVolume(e).then(function(){f=e,$l.call(t,t.media,"volumechange")})}});var d=t.config.muted;Object.defineProperty(t.media,"muted",{get:function(){return d},set:function(e){var n=!!Fl.boolean(e)&&e;t.embed.setVolume(n?0:t.config.volume).then(function(){d=n,$l.call(t,t.media,"volumechange")})}});var p,m=t.config.loop;Object.defineProperty(t.media,"loop",{get:function(){return m},set:function(e){var n=Fl.boolean(e)?e:t.config.loop.active;t.embed.setLoop(n).then(function(){m=n})}}),t.embed.getVideoUrl().then(function(e){p=e,Yc.setDownloadUrl.call(t)}).catch(function(t){e.debug.warn(t)}),Object.defineProperty(t.media,"currentSrc",{get:function(){return p}}),Object.defineProperty(t.media,"ended",{get:function(){return t.currentTime===t.duration}}),Promise.all([t.embed.getVideoWidth(),t.embed.getVideoHeight()]).then(function(n){var i=Ha(n,2),r=i[0],a=i[1];t.embed.ratio=[r,a],vc.call(e)}),t.embed.setAutopause(t.config.autopause).then(function(e){t.config.autopause=e}),t.embed.getVideoTitle().then(function(n){t.config.title=n,uu.setTitle.call(e)}),t.embed.getCurrentTime().then(function(e){u=e,$l.call(t,t.media,"timeupdate")}),t.embed.getDuration().then(function(e){t.media.duration=e,$l.call(t,t.media,"durationchange")}),t.embed.getTextTracks().then(function(e){t.media.textTracks=e,Xc.setup.call(t)}),t.embed.on("cuechange",function(e){var n=e.cues,i=(void 0===n?[]:n).map(function(e){return function(e){var t=document.createDocumentFragment(),n=document.createElement("div");return t.appendChild(n),n.innerHTML=e,t.firstChild.innerText}(e.text)});Xc.updateCues.call(t,i)}),t.embed.on("loaded",function(){(t.embed.getPaused().then(function(e){wu.call(t,!e),e||$l.call(t,t.media,"playing")}),Fl.element(t.embed.element)&&t.supported.ui)&&t.embed.element.setAttribute("tabindex",-1)}),t.embed.on("play",function(){wu.call(t,!0),$l.call(t,t.media,"playing")}),t.embed.on("pause",function(){wu.call(t,!1)}),t.embed.on("timeupdate",function(e){t.media.seeking=!1,u=e.seconds,$l.call(t,t.media,"timeupdate")}),t.embed.on("progress",function(e){t.media.buffered=e.percent,$l.call(t,t.media,"progress"),1===parseInt(e.percent,10)&&$l.call(t,t.media,"canplaythrough"),t.embed.getDuration().then(function(e){e!==t.media.duration&&(t.media.duration=e,$l.call(t,t.media,"durationchange"))})}),t.embed.on("seeked",function(){t.media.seeking=!1,$l.call(t,t.media,"seeked")}),t.embed.on("ended",function(){t.media.paused=!0,$l.call(t,t.media,"ended")}),t.embed.on("error",function(e){t.media.error=e,$l.call(t,t.media,"error")}),setTimeout(function(){return uu.build.call(t)},0)}};function Tu(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,$l.call(this,this.media,e?"play":"pause"))}function Su(e){return e.noCookie?"https://www.youtube-nocookie.com":"http:"===window.location.protocol?"http://www.youtube.com":void 0}var Eu={setup:function(){var e=this;if(ac(this.elements.wrapper,this.config.classNames.embed,!0),Fl.object(window.YT)&&Fl.function(window.YT.Player))Eu.ready.call(this);else{var t=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){Fl.function(t)&&t(),Eu.ready.call(e)},bu(this.config.urls.youtube.sdk).catch(function(t){e.debug.warn("YouTube API failed to load",t)})}},getTitle:function(e){var t=this;Dc(Oc(this.config.urls.youtube.api,e)).then(function(e){if(Fl.object(e)){var n=e.title,i=e.height,r=e.width;t.config.title=n,uu.setTitle.call(t),t.embed.ratio=[r,i]}vc.call(t)}).catch(function(){vc.call(t)})},ready:function(){var e=this,t=e.media&&e.media.getAttribute("id");if(Fl.empty(t)||!t.startsWith("youtube-")){var n=e.media.getAttribute("src");Fl.empty(n)&&(n=e.media.getAttribute(this.config.attributes.embed.id));var i,r,a=(i=n,Fl.empty(i)?null:i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:i),o=(r=e.provider,"".concat(r,"-").concat(Math.floor(1e4*Math.random()))),s=Jl("div",{id:o,poster:e.poster});e.media=nc(s,e.media);var l=function(e){return"https://i.ytimg.com/vi/".concat(a,"/").concat(e,"default.jpg")};cu(l("maxres"),121).catch(function(){return cu(l("sd"),121)}).catch(function(){return cu(l("hq"))}).then(function(t){return uu.setPoster.call(e,t.src)}).then(function(t){t.includes("maxres")||(e.elements.poster.style.backgroundSize="cover")}).catch(function(){});var c=e.config.youtube;e.embed=new window.YT.Player(o,{videoId:a,host:Su(c),playerVars:Gl({},{autoplay:e.config.autoplay?1:0,hl:e.config.hl,controls:e.supported.ui?0:1,disablekb:1,playsinline:e.config.fullscreen.iosNative?0:1,cc_load_policy:e.captions.active?1:0,cc_lang_pref:e.config.captions.language,widget_referrer:window?window.location.href:null},c),events:{onError:function(t){if(!e.media.error){var n=t.data,i={2:"The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",5:"The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",100:"The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",101:"The owner of the requested video does not allow it to be played in embedded players.",150:"The owner of the requested video does not allow it to be played in embedded players."}[n]||"An unknown error occured";e.media.error={code:n,message:i},$l.call(e,e.media,"error")}},onPlaybackRateChange:function(t){var n=t.target;e.media.playbackRate=n.getPlaybackRate(),$l.call(e,e.media,"ratechange")},onReady:function(t){if(!Fl.function(e.media.play)){var n=t.target;Eu.getTitle.call(e,a),e.media.play=function(){Tu.call(e,!0),n.playVideo()},e.media.pause=function(){Tu.call(e,!1),n.pauseVideo()},e.media.stop=function(){n.stopVideo()},e.media.duration=n.getDuration(),e.media.paused=!0,e.media.currentTime=0,Object.defineProperty(e.media,"currentTime",{get:function(){return Number(n.getCurrentTime())},set:function(t){e.paused&&!e.embed.hasPlayed&&e.embed.mute(),e.media.seeking=!0,$l.call(e,e.media,"seeking"),n.seekTo(t)}}),Object.defineProperty(e.media,"playbackRate",{get:function(){return n.getPlaybackRate()},set:function(e){n.setPlaybackRate(e)}});var i=e.config.volume;Object.defineProperty(e.media,"volume",{get:function(){return i},set:function(t){i=t,n.setVolume(100*i),$l.call(e,e.media,"volumechange")}});var r=e.config.muted;Object.defineProperty(e.media,"muted",{get:function(){return r},set:function(t){var i=Fl.boolean(t)?t:r;r=i,n[i?"mute":"unMute"](),$l.call(e,e.media,"volumechange")}}),Object.defineProperty(e.media,"currentSrc",{get:function(){return n.getVideoUrl()}}),Object.defineProperty(e.media,"ended",{get:function(){return e.currentTime===e.duration}}),e.options.speed=n.getAvailablePlaybackRates(),e.supported.ui&&e.media.setAttribute("tabindex",-1),$l.call(e,e.media,"timeupdate"),$l.call(e,e.media,"durationchange"),clearInterval(e.timers.buffering),e.timers.buffering=setInterval(function(){e.media.buffered=n.getVideoLoadedFraction(),(null===e.media.lastBuffered||e.media.lastBuffered<e.media.buffered)&&$l.call(e,e.media,"progress"),e.media.lastBuffered=e.media.buffered,1===e.media.buffered&&(clearInterval(e.timers.buffering),$l.call(e,e.media,"canplaythrough"))},200),setTimeout(function(){return uu.build.call(e)},50)}},onStateChange:function(t){var n=t.target;switch(clearInterval(e.timers.playing),e.media.seeking&&[1,2].includes(t.data)&&(e.media.seeking=!1,$l.call(e,e.media,"seeked")),t.data){case-1:$l.call(e,e.media,"timeupdate"),e.media.buffered=n.getVideoLoadedFraction(),$l.call(e,e.media,"progress");break;case 0:Tu.call(e,!1),e.media.loop?(n.stopVideo(),n.playVideo()):$l.call(e,e.media,"ended");break;case 1:e.config.autoplay||!e.media.paused||e.embed.hasPlayed?(Tu.call(e,!0),$l.call(e,e.media,"playing"),e.timers.playing=setInterval(function(){$l.call(e,e.media,"timeupdate")},50),e.media.duration!==n.getDuration()&&(e.media.duration=n.getDuration(),$l.call(e,e.media,"durationchange"))):e.media.pause();break;case 2:e.muted||e.embed.unMute(),Tu.call(e,!1)}$l.call(e,e.elements.container,"statechange",!1,{code:t.data})}}})}}},Au={setup:function(){this.media?(ac(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),ac(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&ac(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=Jl("div",{class:this.config.classNames.video}),Ql(this.media,this.elements.wrapper),this.elements.poster=Jl("div",{class:this.config.classNames.poster}),this.elements.wrapper.appendChild(this.elements.poster)),this.isHTML5?yc.extend.call(this):this.isYouTube?Eu.setup.call(this):this.isVimeo&&ku.setup.call(this)):this.debug.warn("No media element found!")}},xu=function(){function e(t){var n=this;Ua(this,e),this.player=t,this.config=t.config.ads,this.playing=!1,this.initialized=!1,this.elements={container:null,displayContainer:null},this.manager=null,this.loader=null,this.cuePoints=null,this.events={},this.safetyTimer=null,this.countdownTimer=null,this.managerPromise=new Promise(function(e,t){n.on("loaded",e),n.on("error",t)}),this.load()}return qa(e,[{key:"load",value:function(){var e=this;this.enabled&&(Fl.object(window.google)&&Fl.object(window.google.ima)?this.ready():bu(this.player.config.urls.googleIMA.sdk).then(function(){e.ready()}).catch(function(){e.trigger("error",new Error("Google IMA SDK failed to load"))}))}},{key:"ready",value:function(){var e,t=this;this.enabled||((e=this).manager&&e.manager.destroy(),e.elements.displayContainer&&e.elements.displayContainer.destroy(),e.elements.container.remove()),this.startSafetyTimer(12e3,"ready()"),this.managerPromise.then(function(){t.clearSafetyTimer("onAdsManagerLoaded()")}),this.listeners(),this.setupIMA()}},{key:"setupIMA",value:function(){this.elements.container=Jl("div",{class:this.player.config.classNames.ads}),this.player.elements.container.appendChild(this.elements.container),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setLocale(this.player.config.ads.language),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),this.elements.displayContainer=new google.ima.AdDisplayContainer(this.elements.container,this.player.media),this.requestAds()}},{key:"requestAds",value:function(){var e=this,t=this.player.elements.container;try{this.loader=new google.ima.AdsLoader(this.elements.displayContainer),this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,function(t){return e.onAdsManagerLoaded(t)},!1),this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,function(t){return e.onAdError(t)},!1);var n=new google.ima.AdsRequest;n.adTagUrl=this.tagUrl,n.linearAdSlotWidth=t.offsetWidth,n.linearAdSlotHeight=t.offsetHeight,n.nonLinearAdSlotWidth=t.offsetWidth,n.nonLinearAdSlotHeight=t.offsetHeight,n.forceNonLinearFullSlot=!1,n.setAdWillPlayMuted(!this.player.muted),this.loader.requestAds(n)}catch(e){this.onAdError(e)}}},{key:"pollCountdown",value:function(){var e=this;if(!(arguments.length>0&&void 0!==arguments[0]&&arguments[0]))return clearInterval(this.countdownTimer),void this.elements.container.removeAttribute("data-badge-text");this.countdownTimer=setInterval(function(){var t=$c(Math.max(e.manager.getRemainingTime(),0)),n="".concat(Fc("advertisement",e.player.config)," - ").concat(t);e.elements.container.setAttribute("data-badge-text",n)},100)}},{key:"onAdsManagerLoaded",value:function(e){var t=this;if(this.enabled){var n=new google.ima.AdsRenderingSettings;n.restoreCustomPlaybackStateOnAdBreakComplete=!0,n.enablePreloading=!0,this.manager=e.getAdsManager(this.player,n),this.cuePoints=this.manager.getCuePoints(),this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,function(e){return t.onAdError(e)}),Object.keys(google.ima.AdEvent.Type).forEach(function(e){t.manager.addEventListener(google.ima.AdEvent.Type[e],function(e){return t.onAdEvent(e)})}),this.trigger("loaded")}}},{key:"addCuePoints",value:function(){var e=this;Fl.empty(this.cuePoints)||this.cuePoints.forEach(function(t){if(0!==t&&-1!==t&&t<e.player.duration){var n=e.player.elements.progress;if(Fl.element(n)){var i=100/e.player.duration*t,r=Jl("span",{class:e.player.config.classNames.cues});r.style.left="".concat(i.toString(),"%"),n.appendChild(r)}}})}},{key:"onAdEvent",value:function(e){var t=this,n=this.player.elements.container,i=e.getAd(),r=e.getAdData();switch(function(e){$l.call(t.player,t.player.media,"ads".concat(e.replace(/_/g,"").toLowerCase()))}(e.type),e.type){case google.ima.AdEvent.Type.LOADED:this.trigger("loaded"),this.pollCountdown(!0),i.isLinear()||(i.width=n.offsetWidth,i.height=n.offsetHeight);break;case google.ima.AdEvent.Type.STARTED:this.manager.setVolume(this.player.volume);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:this.loadAds();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:this.pollCountdown(),this.resumeContent();break;case google.ima.AdEvent.Type.LOG:r.adError&&this.player.debug.warn("Non-fatal ad error: ".concat(r.adError.getMessage()))}}},{key:"onAdError",value:function(e){this.cancel(),this.player.debug.warn("Ads error",e)}},{key:"listeners",value:function(){var e,t=this,n=this.player.elements.container;this.player.on("canplay",function(){t.addCuePoints()}),this.player.on("ended",function(){t.loader.contentComplete()}),this.player.on("timeupdate",function(){e=t.player.currentTime}),this.player.on("seeked",function(){var n=t.player.currentTime;Fl.empty(t.cuePoints)||t.cuePoints.forEach(function(i,r){e<i&&i<n&&(t.manager.discardAdBreak(),t.cuePoints.splice(r,1))})}),window.addEventListener("resize",function(){t.manager&&t.manager.resize(n.offsetWidth,n.offsetHeight,google.ima.ViewMode.NORMAL)})}},{key:"play",value:function(){var e=this,t=this.player.elements.container;this.managerPromise||this.resumeContent(),this.managerPromise.then(function(){e.manager.setVolume(e.player.volume),e.elements.displayContainer.initialize();try{e.initialized||(e.manager.init(t.offsetWidth,t.offsetHeight,google.ima.ViewMode.NORMAL),e.manager.start()),e.initialized=!0}catch(t){e.onAdError(t)}}).catch(function(){})}},{key:"resumeContent",value:function(){this.elements.container.style.zIndex="",this.playing=!1,this.player.media.play()}},{key:"pauseContent",value:function(){this.elements.container.style.zIndex=3,this.playing=!0,this.player.media.pause()}},{key:"cancel",value:function(){this.initialized&&this.resumeContent(),this.trigger("error"),this.loadAds()}},{key:"loadAds",value:function(){var e=this;this.managerPromise.then(function(){e.manager&&e.manager.destroy(),e.managerPromise=new Promise(function(t){e.on("loaded",t),e.player.debug.log(e.manager)}),e.requestAds()}).catch(function(){})}},{key:"trigger",value:function(e){for(var t=this,n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var a=this.events[e];Fl.array(a)&&a.forEach(function(e){Fl.function(e)&&e.apply(t,i)})}},{key:"on",value:function(e,t){return Fl.array(this.events[e])||(this.events[e]=[]),this.events[e].push(t),this}},{key:"startSafetyTimer",value:function(e,t){var n=this;this.player.debug.log("Safety timer invoked from: ".concat(t)),this.safetyTimer=setTimeout(function(){n.cancel(),n.clearSafetyTimer("startSafetyTimer()")},e)}},{key:"clearSafetyTimer",value:function(e){Fl.nullOrUndefined(this.safetyTimer)||(this.player.debug.log("Safety timer cleared from: ".concat(e)),clearTimeout(this.safetyTimer),this.safetyTimer=null)}},{key:"enabled",get:function(){var e=this.config;return this.player.isHTML5&&this.player.isVideo&&e.enabled&&(!Fl.empty(e.publisherId)||Fl.url(e.tagUrl))}},{key:"tagUrl",get:function(){var e=this.config;if(Fl.url(e.tagUrl))return e.tagUrl;var t={AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:this.publisherId};return"".concat("https://go.aniview.com/api/adserver6/vast/","?").concat(Qc(t))}}]),e}(),Pu=rt.findIndex,Cu=!0;"findIndex"in[]&&Array(1).findIndex(function(){Cu=!1}),Ce({target:"Array",proto:!0,forced:Cu},{findIndex:function(e){return Pu(this,e,arguments.length>1?arguments[1]:void 0)}}),$t("findIndex");var Iu=function(){function e(t){Ua(this,e),this.player=t,this.thumbnails=[],this.loaded=!1,this.lastMouseMoveTime=Date.now(),this.mouseDown=!1,this.loadedImages=[],this.elements={thumb:{},scrubbing:{}},this.load()}return qa(e,[{key:"load",value:function(){var e=this;this.player.elements.display.seekTooltip&&(this.player.elements.display.seekTooltip.hidden=this.enabled),this.enabled&&this.getThumbnails().then(function(){e.enabled&&(e.render(),e.determineContainerAutoSizing(),e.loaded=!0)})}},{key:"getThumbnails",value:function(){var e=this;return new Promise(function(t){var n=e.player.config.previewThumbnails.src;if(Fl.empty(n))throw new Error("Missing previewThumbnails.src config attribute");var i=(Fl.string(n)?[n]:n).map(function(t){return e.getThumbnail(t)});Promise.all(i).then(function(){e.thumbnails.sort(function(e,t){return e.height-t.height}),e.player.debug.log("Preview thumbnails",e.thumbnails),t()})})}},{key:"getThumbnail",value:function(e){var t=this;return new Promise(function(n){Dc(e).then(function(i){var r,a,o={frames:(r=i,a=[],r.split(/\r\n\r\n|\n\n|\r\r/).forEach(function(e){var t={};e.split(/\r\n|\n|\r/).forEach(function(e){if(Fl.number(t.startTime)){if(!Fl.empty(e.trim())&&Fl.empty(t.text)){var n=e.trim().split("#xywh="),i=Ha(n,1);if(t.text=i[0],n[1]){var r=Ha(n[1].split(","),4);t.x=r[0],t.y=r[1],t.w=r[2],t.h=r[3]}}}else{var a=e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);a&&(t.startTime=60*Number(a[1]||0)*60+60*Number(a[2])+Number(a[3])+Number("0.".concat(a[4])),t.endTime=60*Number(a[6]||0)*60+60*Number(a[7])+Number(a[8])+Number("0.".concat(a[9])))}}),t.text&&a.push(t)}),a),height:null,urlPrefix:""};o.frames[0].text.startsWith("/")||o.frames[0].text.startsWith("http://")||o.frames[0].text.startsWith("https://")||(o.urlPrefix=e.substring(0,e.lastIndexOf("/")+1));var s=new Image;s.onload=function(){o.height=s.naturalHeight,o.width=s.naturalWidth,t.thumbnails.push(o),n()},s.src=o.urlPrefix+o.frames[0].text})})}},{key:"startMove",value:function(e){if(this.loaded&&Fl.event(e)&&["touchmove","mousemove"].includes(e.type)&&this.player.media.duration){if("touchmove"===e.type)this.seekTime=this.player.media.duration*(this.player.elements.inputs.seek.value/100);else{var t=this.player.elements.progress.getBoundingClientRect(),n=100/t.width*(e.pageX-t.left);this.seekTime=this.player.media.duration*(n/100),this.seekTime<0&&(this.seekTime=0),this.seekTime>this.player.media.duration-1&&(this.seekTime=this.player.media.duration-1),this.mousePosX=e.pageX,this.elements.thumb.time.innerText=$c(this.seekTime)}this.showImageAtCurrentTime()}}},{key:"endMove",value:function(){this.toggleThumbContainer(!1,!0)}},{key:"startScrubbing",value:function(e){!1!==e.button&&0!==e.button||(this.mouseDown=!0,this.player.media.duration&&(this.toggleScrubbingContainer(!0),this.toggleThumbContainer(!1,!0),this.showImageAtCurrentTime()))}},{key:"endScrubbing",value:function(){var e=this;this.mouseDown=!1,Math.ceil(this.lastTime)===Math.ceil(this.player.media.currentTime)?this.toggleScrubbingContainer(!1):Kl.call(this.player,this.player.media,"timeupdate",function(){e.mouseDown||e.toggleScrubbingContainer(!1)})}},{key:"listeners",value:function(){var e=this;this.player.on("play",function(){e.toggleThumbContainer(!1,!0)}),this.player.on("seeked",function(){e.toggleThumbContainer(!1)}),this.player.on("timeupdate",function(){e.lastTime=e.player.media.currentTime})}},{key:"render",value:function(){this.elements.thumb.container=Jl("div",{class:this.player.config.classNames.previewThumbnails.thumbContainer}),this.elements.thumb.imageContainer=Jl("div",{class:this.player.config.classNames.previewThumbnails.imageContainer}),this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);var e=Jl("div",{class:this.player.config.classNames.previewThumbnails.timeContainer});this.elements.thumb.time=Jl("span",{},"00:00"),e.appendChild(this.elements.thumb.time),this.elements.thumb.container.appendChild(e),Fl.element(this.player.elements.progress)&&this.player.elements.progress.appendChild(this.elements.thumb.container),this.elements.scrubbing.container=Jl("div",{class:this.player.config.classNames.previewThumbnails.scrubbingContainer}),this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)}},{key:"showImageAtCurrentTime",value:function(){var e=this;this.mouseDown?this.setScrubbingContainerSize():this.setThumbContainerSizeAndPos();var t=this.thumbnails[0].frames.findIndex(function(t){return e.seekTime>=t.startTime&&e.seekTime<=t.endTime}),n=t>=0,i=0;this.mouseDown||this.toggleThumbContainer(n),n&&(this.thumbnails.forEach(function(n,r){e.loadedImages.includes(n.frames[t].text)&&(i=r)}),t!==this.showingThumb&&(this.showingThumb=t,this.loadImage(i)))}},{key:"loadImage",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=this.showingThumb,i=this.thumbnails[t],r=i.urlPrefix,a=i.frames[n],o=i.frames[n].text,s=r+o;if(this.currentImageElement&&this.currentImageElement.dataset.filename===o)this.showImage(this.currentImageElement,a,t,n,o,!1),this.currentImageElement.dataset.index=n,this.removeOldImages(this.currentImageElement);else{this.loadingImage&&this.usingSprites&&(this.loadingImage.onload=null);var l=new Image;l.src=s,l.dataset.index=n,l.dataset.filename=o,this.showingThumbFilename=o,this.player.debug.log("Loading image: ".concat(s)),l.onload=function(){return e.showImage(l,a,t,n,o,!0)},this.loadingImage=l,this.removeOldImages(l)}}},{key:"showImage",value:function(e,t,n,i,r){var a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];this.player.debug.log("Showing thumb: ".concat(r,". num: ").concat(i,". qual: ").concat(n,". newimg: ").concat(a)),this.setImageSizeAndOffset(e,t),a&&(this.currentImageContainer.appendChild(e),this.currentImageElement=e,this.loadedImages.includes(r)||this.loadedImages.push(r)),this.preloadNearby(i,!0).then(this.preloadNearby(i,!1)).then(this.getHigherQuality(n,e,t,r))}},{key:"removeOldImages",value:function(e){var t=this;Array.from(this.currentImageContainer.children).forEach(function(n){if("img"===n.tagName.toLowerCase()){var i=t.usingSprites?500:1e3;if(n.dataset.index!==e.dataset.index&&!n.dataset.deleting){n.dataset.deleting=!0;var r=t.currentImageContainer;setTimeout(function(){r.removeChild(n),t.player.debug.log("Removing thumb: ".concat(n.dataset.filename))},i)}}})}},{key:"preloadNearby",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise(function(i){setTimeout(function(){var r=t.thumbnails[0].frames[e].text;if(t.showingThumbFilename===r){var a;a=n?t.thumbnails[0].frames.slice(e):t.thumbnails[0].frames.slice(0,e).reverse();var o=!1;a.forEach(function(e){var n=e.text;if(n!==r&&!t.loadedImages.includes(n)){o=!0,t.player.debug.log("Preloading thumb filename: ".concat(n));var a=t.thumbnails[0].urlPrefix+n,s=new Image;s.src=a,s.onload=function(){t.player.debug.log("Preloaded thumb filename: ".concat(n)),t.loadedImages.includes(n)||t.loadedImages.push(n),i()}}}),o||i()}},300)})}},{key:"getHigherQuality",value:function(e,t,n,i){var r=this;if(e<this.thumbnails.length-1){var a=t.naturalHeight;this.usingSprites&&(a=n.h),a<this.thumbContainerHeight&&setTimeout(function(){r.showingThumbFilename===i&&(r.player.debug.log("Showing higher quality thumb for: ".concat(i)),r.loadImage(e+1))},300)}}},{key:"toggleThumbContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.player.config.classNames.previewThumbnails.thumbContainerShown;this.elements.thumb.container.classList.toggle(n,e),!e&&t&&(this.showingThumb=null,this.showingThumbFilename=null)}},{key:"toggleScrubbingContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.player.config.classNames.previewThumbnails.scrubbingContainerShown;this.elements.scrubbing.container.classList.toggle(t,e),e||(this.showingThumb=null,this.showingThumbFilename=null)}},{key:"determineContainerAutoSizing",value:function(){this.elements.thumb.imageContainer.clientHeight>20&&(this.sizeSpecifiedInCSS=!0)}},{key:"setThumbContainerSizeAndPos",value:function(){if(!this.sizeSpecifiedInCSS){var e=Math.floor(this.thumbContainerHeight*this.thumbAspectRatio);this.elements.thumb.imageContainer.style.height="".concat(this.thumbContainerHeight,"px"),this.elements.thumb.imageContainer.style.width="".concat(e,"px")}this.setThumbContainerPos()}},{key:"setThumbContainerPos",value:function(){var e=this.player.elements.progress.getBoundingClientRect(),t=this.player.elements.container.getBoundingClientRect(),n=this.elements.thumb.container,i=t.left-e.left+10,r=t.right-e.left-n.clientWidth-10,a=this.mousePosX-e.left-n.clientWidth/2;a<i&&(a=i),a>r&&(a=r),n.style.left="".concat(a,"px")}},{key:"setScrubbingContainerSize",value:function(){this.elements.scrubbing.container.style.width="".concat(this.player.media.clientWidth,"px"),this.elements.scrubbing.container.style.height="".concat(this.player.media.clientWidth/this.thumbAspectRatio,"px")}},{key:"setImageSizeAndOffset",value:function(e,t){if(this.usingSprites){var n=this.thumbContainerHeight/t.h;e.style.height="".concat(Math.floor(e.naturalHeight*n),"px"),e.style.width="".concat(Math.floor(e.naturalWidth*n),"px"),e.style.left="-".concat(t.x*n,"px"),e.style.top="-".concat(t.y*n,"px")}}},{key:"enabled",get:function(){return this.player.isHTML5&&this.player.isVideo&&this.player.config.previewThumbnails.enabled}},{key:"currentImageContainer",get:function(){return this.mouseDown?this.elements.scrubbing.container:this.elements.thumb.imageContainer}},{key:"usingSprites",get:function(){return Object.keys(this.thumbnails[0].frames[0]).includes("w")}},{key:"thumbAspectRatio",get:function(){return this.usingSprites?this.thumbnails[0].frames[0].w/this.thumbnails[0].frames[0].h:this.thumbnails[0].width/this.thumbnails[0].height}},{key:"thumbContainerHeight",get:function(){return this.mouseDown?Math.floor(this.player.media.clientWidth/this.thumbAspectRatio):Math.floor(this.player.media.clientWidth/this.thumbAspectRatio/4)}},{key:"currentImageElement",get:function(){return this.mouseDown?this.currentScrubbingImageElement:this.currentThumbnailImageElement},set:function(e){this.mouseDown?this.currentScrubbingImageElement=e:this.currentThumbnailImageElement=e}}]),e}(),Lu={insertElements:function(e,t){var n=this;Fl.string(t)?Zl(e,this.media,{src:t}):Fl.array(t)&&t.forEach(function(t){Zl(e,n.media,t)})},change:function(e){var t=this;Yl(e,"sources.length")?(yc.cancelRequests.call(this),this.destroy.call(this,function(){t.options.quality=[],ec(t.media),t.media=null,Fl.element(t.elements.container)&&t.elements.container.removeAttribute("class");var n=e.sources,i=e.type,r=Ha(n,1)[0],a=r.provider,o=void 0===a?tu.html5:a,s=r.src,l="html5"===o?i:"div",c="html5"===o?{}:{src:s};Object.assign(t,{provider:o,type:i,supported:dc.check(i,o,t.config.playsinline),media:Jl(l,c)}),t.elements.container.appendChild(t.media),Fl.boolean(e.autoplay)&&(t.config.autoplay=e.autoplay),t.isHTML5&&(t.config.crossorigin&&t.media.setAttribute("crossorigin",""),t.config.autoplay&&t.media.setAttribute("autoplay",""),Fl.empty(e.poster)||(t.poster=e.poster),t.config.loop.active&&t.media.setAttribute("loop",""),t.config.muted&&t.media.setAttribute("muted",""),t.config.playsinline&&t.media.setAttribute("playsinline","")),uu.addStyleHook.call(t),t.isHTML5&&Lu.insertElements.call(t,"source",n),t.config.title=e.title,Au.setup.call(t),t.isHTML5&&Object.keys(e).includes("tracks")&&Lu.insertElements.call(t,"track",e.tracks),(t.isHTML5||t.isEmbed&&!t.supported.ui)&&uu.build.call(t),t.isHTML5&&t.media.load(),t.previewThumbnails&&t.previewThumbnails.load(),t.fullscreen.update()},!0)):this.debug.warn("Invalid source format")}};var Mu,Ou=function(){function e(t,n){var i=this;if(Ua(this,e),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=dc.touch,this.media=t,Fl.string(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||Fl.nodeList(this.media)||Fl.array(this.media))&&(this.media=this.media[0]),this.config=Gl({},Jc,e.defaults,n||{},function(){try{return JSON.parse(i.media.getAttribute("data-plyr-config"))}catch(e){return{}}}()),this.elements={container:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new ru(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",dc),!Fl.nullOrUndefined(this.media)&&Fl.element(this.media))if(this.media.plyr)this.debug.warn("Target already setup");else if(this.config.enabled)if(dc.check().api){var r=this.media.cloneNode(!0);r.autoplay=!1,this.elements.original=r;var a=this.media.tagName.toLowerCase(),o=null,s=null;switch(a){case"div":if(o=this.media.querySelector("iframe"),Fl.element(o)){if(s=Gc(o.getAttribute("src")),this.provider=function(e){return/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e)?tu.youtube:/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e)?tu.vimeo:null}(s.toString()),this.elements.container=this.media,this.media=o,this.elements.container.className="",s.search.length){var l=["1","true"];l.includes(s.searchParams.get("autoplay"))&&(this.config.autoplay=!0),l.includes(s.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=l.includes(s.searchParams.get("playsinline")),this.config.youtube.hl=s.searchParams.get("hl")):this.config.playsinline=!0}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(Fl.empty(this.provider)||!Object.keys(tu).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type=nu.video;break;case"video":case"audio":this.type=a,this.provider=tu.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type")}this.supported=dc.check(this.type,this.provider,this.config.playsinline),this.supported.api?(this.eventListeners=[],this.listeners=new hu(this),this.storage=new qc(this),this.media.plyr=this,Fl.element(this.elements.container)||(this.elements.container=Jl("div",{tabindex:0}),Ql(this.media,this.elements.container)),uu.addStyleHook.call(this),Au.setup.call(this),this.config.debug&&zl.call(this,this.elements.container,this.config.events.join(" "),function(e){i.debug.log("event: ".concat(e.type))}),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&uu.build.call(this),this.listeners.container(),this.listeners.global(),this.fullscreen=new su(this),this.config.ads.enabled&&(this.ads=new xu(this)),this.isHTML5&&this.config.autoplay&&setTimeout(function(){return i.play()},10),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new Iu(this))):this.debug.error("Setup failed: no support")}else this.debug.error("Setup failed: no support");else this.debug.error("Setup failed: disabled by config");else this.debug.error("Setup failed: no suitable element passed")}return qa(e,[{key:"play",value:function(){var e=this;return Fl.function(this.media.play)?(this.ads&&this.ads.enabled&&this.ads.managerPromise.then(function(){return e.ads.play()}).catch(function(){return e.media.play()}),this.media.play()):null}},{key:"pause",value:function(){this.playing&&Fl.function(this.media.pause)&&this.media.pause()}},{key:"togglePlay",value:function(e){(Fl.boolean(e)?e:!this.playing)?this.play():this.pause()}},{key:"stop",value:function(){this.isHTML5?(this.pause(),this.restart()):Fl.function(this.media.stop)&&this.media.stop()}},{key:"restart",value:function(){this.currentTime=0}},{key:"rewind",value:function(e){this.currentTime=this.currentTime-(Fl.number(e)?e:this.config.seekTime)}},{key:"forward",value:function(e){this.currentTime=this.currentTime+(Fl.number(e)?e:this.config.seekTime)}},{key:"increaseVolume",value:function(e){var t=this.media.muted?0:this.volume;this.volume=t+(Fl.number(e)?e:0)}},{key:"decreaseVolume",value:function(e){this.increaseVolume(-e)}},{key:"toggleCaptions",value:function(e){Xc.toggle.call(this,e,!1)}},{key:"airplay",value:function(){dc.airplay&&this.media.webkitShowPlaybackTargetPicker()}},{key:"toggleControls",value:function(e){if(this.supported.ui&&!this.isAudio){var t=oc(this.elements.container,this.config.classNames.hideControls),n=void 0===e?void 0:!e,i=ac(this.elements.container,this.config.classNames.hideControls,n);if(i&&this.config.controls.includes("settings")&&!Fl.empty(this.config.settings)&&Yc.toggleMenu.call(this,!1),i!==t){var r=i?"controlshidden":"controlsshown";$l.call(this,this.media,r)}return!i}return!1}},{key:"on",value:function(e,t){zl.call(this,this.elements.container,e,t)}},{key:"once",value:function(e,t){Kl.call(this,this.elements.container,e,t)}},{key:"off",value:function(e,t){Wl(this.elements.container,e,t)}},{key:"destroy",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.ready){var i=function(){document.body.style.overflow="",t.embed=null,n?(Object.keys(t.elements).length&&(ec(t.elements.buttons.play),ec(t.elements.captions),ec(t.elements.controls),ec(t.elements.wrapper),t.elements.buttons.play=null,t.elements.captions=null,t.elements.controls=null,t.elements.wrapper=null),Fl.function(e)&&e()):(function(){this&&this.eventListeners&&(this.eventListeners.forEach(function(e){var t=e.element,n=e.type,i=e.callback,r=e.options;t.removeEventListener(n,i,r)}),this.eventListeners=[])}.call(t),nc(t.elements.original,t.elements.container),$l.call(t,t.elements.original,"destroyed",!0),Fl.function(e)&&e.call(t.elements.original),t.ready=!1,setTimeout(function(){t.elements=null,t.media=null},200))};this.stop(),clearTimeout(this.timers.loading),clearTimeout(this.timers.controls),clearTimeout(this.timers.resized),this.isHTML5?(uu.toggleNativeControls.call(this,!0),i()):this.isYouTube?(clearInterval(this.timers.buffering),clearInterval(this.timers.playing),null!==this.embed&&Fl.function(this.embed.destroy)&&this.embed.destroy(),i()):this.isVimeo&&(null!==this.embed&&this.embed.unload().then(i),setTimeout(i,200))}}},{key:"supports",value:function(e){return dc.mime.call(this,e)}},{key:"isHTML5",get:function(){return this.provider===tu.html5}},{key:"isEmbed",get:function(){return this.isYouTube||this.isVimeo}},{key:"isYouTube",get:function(){return this.provider===tu.youtube}},{key:"isVimeo",get:function(){return this.provider===tu.vimeo}},{key:"isVideo",get:function(){return this.type===nu.video}},{key:"isAudio",get:function(){return this.type===nu.audio}},{key:"playing",get:function(){return Boolean(this.ready&&!this.paused&&!this.ended)}},{key:"paused",get:function(){return Boolean(this.media.paused)}},{key:"stopped",get:function(){return Boolean(this.paused&&0===this.currentTime)}},{key:"ended",get:function(){return Boolean(this.media.ended)}},{key:"currentTime",set:function(e){if(this.duration){var t=Fl.number(e)&&e>0;this.media.currentTime=t?Math.min(e,this.duration):0,this.debug.log("Seeking to ".concat(this.currentTime," seconds"))}},get:function(){return Number(this.media.currentTime)}},{key:"buffered",get:function(){var e=this.media.buffered;return Fl.number(e)?e:e&&e.length&&this.duration>0?e.end(0)/this.duration:0}},{key:"seeking",get:function(){return Boolean(this.media.seeking)}},{key:"duration",get:function(){var e=parseFloat(this.config.duration),t=(this.media||{}).duration,n=Fl.number(t)&&t!==1/0?t:0;return e||n}},{key:"volume",set:function(e){var t=e;Fl.string(t)&&(t=Number(t)),Fl.number(t)||(t=this.storage.get("volume")),Fl.number(t)||(t=this.config.volume),t>1&&(t=1),t<0&&(t=0),this.config.volume=t,this.media.volume=t,!Fl.empty(e)&&this.muted&&t>0&&(this.muted=!1)},get:function(){return Number(this.media.volume)}},{key:"muted",set:function(e){var t=e;Fl.boolean(t)||(t=this.storage.get("muted")),Fl.boolean(t)||(t=this.config.muted),this.config.muted=t,this.media.muted=t},get:function(){return Boolean(this.media.muted)}},{key:"hasAudio",get:function(){return!this.isHTML5||(!!this.isAudio||(Boolean(this.media.mozHasAudio)||Boolean(this.media.webkitAudioDecodedByteCount)||Boolean(this.media.audioTracks&&this.media.audioTracks.length)))}},{key:"speed",set:function(e){var t=this,n=null;Fl.number(e)&&(n=e),Fl.number(n)||(n=this.storage.get("speed")),Fl.number(n)||(n=this.config.speed.selected);var i=this.minimumSpeed,r=this.maximumSpeed;n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:255;return Math.min(Math.max(e,t),n)}(n,i,r),this.config.speed.selected=n,setTimeout(function(){t.media.playbackRate=n},0)},get:function(){return Number(this.media.playbackRate)}},{key:"minimumSpeed",get:function(){return this.isYouTube?Math.min.apply(Math,Va(this.options.speed)):this.isVimeo?.5:.0625}},{key:"maximumSpeed",get:function(){return this.isYouTube?Math.max.apply(Math,Va(this.options.speed)):this.isVimeo?2:16}},{key:"quality",set:function(e){var t=this.config.quality,n=this.options.quality;if(n.length){var i=[!Fl.empty(e)&&Number(e),this.storage.get("quality"),t.selected,t.default].find(Fl.number),r=!0;if(!n.includes(i)){var a=function(e,t){return Fl.array(e)&&e.length?e.reduce(function(e,n){return Math.abs(n-t)<Math.abs(e-t)?n:e}):null}(n,i);this.debug.warn("Unsupported quality option: ".concat(i,", using ").concat(a," instead")),i=a,r=!1}t.selected=i,this.media.quality=i,r&&this.storage.set({quality:i})}},get:function(){return this.media.quality}},{key:"loop",set:function(e){var t=Fl.boolean(e)?e:this.config.loop.active;this.config.loop.active=t,this.media.loop=t},get:function(){return Boolean(this.media.loop)}},{key:"source",set:function(e){Lu.change.call(this,e)},get:function(){return this.media.currentSrc}},{key:"download",get:function(){var e=this.config.urls.download;return Fl.url(e)?e:this.source},set:function(e){Fl.url(e)&&(this.config.urls.download=e,Yc.setDownloadUrl.call(this))}},{key:"poster",set:function(e){this.isVideo?uu.setPoster.call(this,e,!1).catch(function(){}):this.debug.warn("Poster can only be set for video")},get:function(){return this.isVideo?this.media.getAttribute("poster"):null}},{key:"ratio",get:function(){if(!this.isVideo)return null;var e=mc(gc.call(this));return Fl.array(e)?e.join(":"):e},set:function(e){this.isVideo?Fl.string(e)&&pc(e)?(this.config.ratio=e,vc.call(this)):this.debug.error("Invalid aspect ratio specified (".concat(e,")")):this.debug.warn("Aspect ratio can only be set for video")}},{key:"autoplay",set:function(e){var t=Fl.boolean(e)?e:this.config.autoplay;this.config.autoplay=t},get:function(){return Boolean(this.config.autoplay)}},{key:"currentTrack",set:function(e){Xc.set.call(this,e,!1)},get:function(){var e=this.captions,t=e.toggled,n=e.currentTrack;return t?n:-1}},{key:"language",set:function(e){Xc.setLanguage.call(this,e,!1)},get:function(){return(Xc.getCurrentTrack.call(this)||{}).language}},{key:"pip",set:function(e){if(dc.pip){var t=Fl.boolean(e)?e:!this.pip;Fl.function(this.media.webkitSetPresentationMode)&&this.media.webkitSetPresentationMode(t?Zc:eu),Fl.function(this.media.requestPictureInPicture)&&(!this.pip&&t?this.media.requestPictureInPicture():this.pip&&!t&&document.exitPictureInPicture())}},get:function(){return dc.pip?Fl.empty(this.media.webkitPresentationMode)?this.media===document.pictureInPictureElement:this.media.webkitPresentationMode===Zc:null}}],[{key:"supported",value:function(e,t,n){return dc.check(e,t,n)}},{key:"loadSprite",value:function(e,t){return Hc(e,t)}},{key:"setup",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;return Fl.string(t)?i=Array.from(document.querySelectorAll(t)):Fl.nodeList(t)?i=Array.from(t):Fl.array(t)&&(i=t.filter(Fl.element)),Fl.empty(i)?null:i.map(function(t){return new e(t,n)})}}]),e}();return Ou.defaults=(Mu=Jc,JSON.parse(JSON.stringify(Mu))),Ou});

/*! js-url - v2.5.3 - 2018-04-05 */!function(){var a=function(){function a(){}function b(a){return decodeURIComponent(a.replace(/\+/g," "))}function c(a,b){var c=a.charAt(0),d=b.split(c);return c===a?d:(a=parseInt(a.substring(1),10),d[a<0?d.length+a:a-1])}function d(a,c){for(var d=a.charAt(0),e=c.split("&"),f=[],g={},h=[],i=a.substring(1),j=0,k=e.length;j<k;j++)if(f=e[j].match(/(.*?)=(.*)/),f||(f=[e[j],e[j],""]),""!==f[1].replace(/\s/g,"")){if(f[2]=b(f[2]||""),i===f[1])return f[2];h=f[1].match(/(.*)\[([0-9]+)\]/),h?(g[h[1]]=g[h[1]]||[],g[h[1]][h[2]]=f[2]):g[f[1]]=f[2]}return d===a?g:g[i]}return function(b,e){var f,g={};if("tld?"===b)return a();if(e=e||window.location.toString(),!b)return e;if(b=b.toString(),f=e.match(/^mailto:([^\/].+)/))g.protocol="mailto",g.email=f[1];else{if((f=e.match(/(.*?)\/#\!(.*)/))&&(e=f[1]+f[2]),(f=e.match(/(.*?)#(.*)/))&&(g.hash=f[2],e=f[1]),g.hash&&b.match(/^#/))return d(b,g.hash);if((f=e.match(/(.*?)\?(.*)/))&&(g.query=f[2],e=f[1]),g.query&&b.match(/^\?/))return d(b,g.query);if((f=e.match(/(.*?)\:?\/\/(.*)/))&&(g.protocol=f[1].toLowerCase(),e=f[2]),(f=e.match(/(.*?)(\/.*)/))&&(g.path=f[2],e=f[1]),g.path=(g.path||"").replace(/^([^\/])/,"/$1"),b.match(/^[\-0-9]+$/)&&(b=b.replace(/^([^\/])/,"/$1")),b.match(/^\//))return c(b,g.path.substring(1));if(f=c("/-1",g.path.substring(1)),f&&(f=f.match(/(.*?)\.([^.]+)$/))&&(g.file=f[0],g.filename=f[1],g.fileext=f[2]),(f=e.match(/(.*)\:([0-9]+)$/))&&(g.port=f[2],e=f[1]),(f=e.match(/(.*?)@(.*)/))&&(g.auth=f[1],e=f[2]),g.auth&&(f=g.auth.match(/(.*)\:(.*)/),g.user=f?f[1]:g.auth,g.pass=f?f[2]:void 0),g.hostname=e.toLowerCase(),"."===b.charAt(0))return c(b,g.hostname);a()&&(f=g.hostname.match(a()),f&&(g.tld=f[3],g.domain=f[2]?f[2]+"."+f[3]:void 0,g.sub=f[1]||void 0)),g.port=g.port||("https"===g.protocol?"443":"80"),g.protocol=g.protocol||("443"===g.port?"https":"http")}return b in g?g[b]:"{}"===b?g:void 0}}();"function"==typeof window.define&&window.define.amd?window.define("js-url",[],function(){return a}):("undefined"!=typeof window.jQuery&&window.jQuery.extend({url:function(a,b){return window.url(a,b)}}),window.url=a)}();

/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

// fancyBox v3.5.6
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================

!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),
n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.6",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"ï¿½":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);


/*
 * Pointer Events Polyfill: Adds support for the style attribute "pointer-events: none" to browsers without this feature (namely, IE).
 * (c) 2013, Kent Mewhort, licensed under BSD. See LICENSE.txt for details.
 */

function PointerEventsPolyfill(t){if(this.options={selector:"*",mouseEvents:["click","dblclick","mousedown","mouseup"],usePolyfillIf:function(){if("Microsoft Internet Explorer"==navigator.appName){var t=navigator.userAgent;if(null!=t.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)){var e=parseFloat(RegExp.$1);if(11>e)return!0}}return!1}},t){var e=this;$.each(t,function(t,n){e.options[t]=n})}this.options.usePolyfillIf()&&this.register_mouse_events()}PointerEventsPolyfill.initialize=function(t){return null==PointerEventsPolyfill.singleton&&(PointerEventsPolyfill.singleton=new PointerEventsPolyfill(t)),PointerEventsPolyfill.singleton},PointerEventsPolyfill.prototype.register_mouse_events=function(){$(document).on(this.options.mouseEvents.join(" "),this.options.selector,function(t){if("none"==$(this).css("pointer-events")){var e=$(this).css("display");$(this).css("display","none");var n=document.elementFromPoint(t.clientX,t.clientY);return e?$(this).css("display",e):$(this).css("display",""),t.target=n,$(n).trigger(t),!1}return!0})};

/*
 * jQuery mmenu v7.3.3
 * @requires jQuery 1.7.0 or later
 *
 * mmenujs.com
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(t){var e,n,i,s,a,r="mmenu";t[r]&&t[r].version>"7.3.3"||(t[r]=function(t,e,n){return this.$menu=t,this._api=["bind","getInstance","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=e,this.conf=n,this.vars={},this.cbck={},this.mtch={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initWrappers(),this._initAddons(),this._initExtensions(),this._initHooks(),this._initMenu(),this._initPanels(),this._initOpened(),this._initAnchors(),this._initMatchMedia(),"function"==typeof this.___debug&&this.___debug(),this},t[r].version="7.3.3",t[r].uniqueId=0,t[r].wrappers={},t[r].addons={},t[r].defaults={hooks:{},extensions:[],wrappers:[],navbar:{add:!0,title:"Menu",titleLink:"parent"},onClick:{setSelected:!0},slidingSubmenus:!0},t[r].configuration={classNames:{divider:"Divider",inset:"Inset",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,language:null,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},t[r].prototype={getInstance:function(){return this},initPanels:function(t){this._initPanels(t)},openPanel:function(e,s){if(this.trigger("openPanel:before",e),e&&e.length&&(e.is("."+n.panel)||(e=e.closest("."+n.panel)),e.is("."+n.panel))){var a=this;if("boolean"!=typeof s&&(s=!0),e.parent("."+n.listitem+"_vertical").length)e.parents("."+n.listitem+"_vertical").addClass(n.listitem+"_opened").children("."+n.panel).removeClass(n.hidden),this.openPanel(e.parents("."+n.panel).not(function(){return t(this).parent("."+n.listitem+"_vertical").length}).first()),this.trigger("openPanel:start",e),this.trigger("openPanel:finish",e);else{if(e.hasClass(n.panel+"_opened"))return;var l=this.$pnls.children("."+n.panel),o=this.$pnls.children("."+n.panel+"_opened");if(!t[r].support.csstransitions)return o.addClass(n.hidden).removeClass(n.panel+"_opened"),e.removeClass(n.hidden).addClass(n.panel+"_opened"),this.trigger("openPanel:start",e),void this.trigger("openPanel:finish",e);l.not(e).removeClass(n.panel+"_opened-parent");for(var d=e.data(i.parent);d;)(d=d.closest("."+n.panel)).parent("."+n.listitem+"_vertical").length||d.addClass(n.panel+"_opened-parent"),d=d.data(i.parent);l.removeClass(n.panel+"_highest").not(o).not(e).addClass(n.hidden),e.removeClass(n.hidden);var c=function(){o.removeClass(n.panel+"_opened"),e.addClass(n.panel+"_opened"),e.hasClass(n.panel+"_opened-parent")?(o.addClass(n.panel+"_highest"),e.removeClass(n.panel+"_opened-parent")):(o.addClass(n.panel+"_opened-parent"),e.addClass(n.panel+"_highest")),a.trigger("openPanel:start",e)},h=function(){o.removeClass(n.panel+"_highest").addClass(n.hidden),e.removeClass(n.panel+"_highest"),a.trigger("openPanel:finish",e)};s&&!e.hasClass(n.panel+"_noanimation")?setTimeout(function(){a.__transitionend(e,function(){h()},a.conf.transitionDuration),c()},a.conf.openingInterval):(c(),h())}this.trigger("openPanel:after",e)}},closePanel:function(t){this.trigger("closePanel:before",t);var e=t.parent();e.hasClass(n.listitem+"_vertical")&&(e.removeClass(n.listitem+"_opened"),t.addClass(n.hidden),this.trigger("closePanel",t)),this.trigger("closePanel:after",t)},closeAllPanels:function(t){this.trigger("closeAllPanels:before"),this.$pnls.find("."+n.listview).children().removeClass(n.listitem+"_selected").filter("."+n.listitem+"_vertical").removeClass(n.listitem+"_opened");var e=this.$pnls.children("."+n.panel),i=t&&t.length?t:e.first();this.$pnls.children("."+n.panel).not(i).removeClass(n.panel+"_opened").removeClass(n.panel+"_opened-parent").removeClass(n.panel+"_highest").addClass(n.hidden),this.openPanel(i,!1),this.trigger("closeAllPanels:after")},togglePanel:function(t){var e=t.parent();e.hasClass(n.listitem+"_vertical")&&this[e.hasClass(n.listitem+"_opened")?"closePanel":"openPanel"](t)},setSelected:function(t){this.trigger("setSelected:before",t),this.$menu.find("."+n.listitem+"_selected").removeClass(n.listitem+"_selected"),t.addClass(n.listitem+"_selected"),this.trigger("setSelected:after",t)},bind:function(t,e){this.cbck[t]=this.cbck[t]||[],this.cbck[t].push(e)},trigger:function(){var t=Array.prototype.slice.call(arguments),e=t.shift();if(this.cbck[e])for(var n=0,i=this.cbck[e].length;n<i;n++)this.cbck[e][n].apply(this,t)},matchMedia:function(t,e,n){var i={yes:e,no:n};this.mtch[t]=this.mtch[t]||[],this.mtch[t].push(i)},i18n:function(e){return t[r].i18n(e,this.conf.language)},_initHooks:function(){for(var t in this.opts.hooks)this.bind(t,this.opts.hooks[t])},_initWrappers:function(){this.trigger("initWrappers:before");for(var e=0;e<this.opts.wrappers.length;e++){var n=t[r].wrappers[this.opts.wrappers[e]];"function"==typeof n&&n.call(this)}this.trigger("initWrappers:after")},_initAddons:function(){var e;for(e in this.trigger("initAddons:before"),t[r].addons)t[r].addons[e].add.call(this),t[r].addons[e].add=function(){};for(e in t[r].addons)t[r].addons[e].setup.call(this);this.trigger("initAddons:after")},_initExtensions:function(){this.trigger("initExtensions:before");var t=this;for(var e in this.opts.extensions.constructor===Array&&(this.opts.extensions={all:this.opts.extensions}),this.opts.extensions)this.opts.extensions[e]=this.opts.extensions[e].length?n.menu+"_"+this.opts.extensions[e].join(" "+n.menu+"_"):"",this.opts.extensions[e]&&function(e){t.matchMedia(e,function(){this.$menu.addClass(this.opts.extensions[e])},function(){this.$menu.removeClass(this.opts.extensions[e])})}(e);this.trigger("initExtensions:after")},_initMenu:function(){this.trigger("initMenu:before");this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){t(this).attr("id",n.mm(t(this).attr("id")))})),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=t('<div class="'+n.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.addClass(n.menu).parent().addClass(n.wrapper),this.trigger("initMenu:after")},_initPanels:function(e){this.trigger("initPanels:before",e),e=e||this.$pnls.children(this.conf.panelNodetype);var i=t(),s=this,a=function(e){e.filter(s.conf.panelNodetype).each(function(e){var r=s._initPanel(t(this));if(r){s._initNavbar(r),s._initListview(r),i=i.add(r);var l=r.children("."+n.listview).children("li").children(s.conf.panelNodetype).add(r.children("."+s.conf.classNames.panel));l.length&&a(l)}})};a(e),this.trigger("initPanels:after",i)},_initPanel:function(t){this.trigger("initPanel:before",t);if(t.hasClass(n.panel))return t;if(this.__refactorClass(t,this.conf.classNames.panel,n.panel),this.__refactorClass(t,this.conf.classNames.nopanel,n.nopanel),this.__refactorClass(t,this.conf.classNames.inset,n.listview+"_inset"),t.filter("."+n.listview+"_inset").addClass(n.nopanel),t.hasClass(n.nopanel))return!1;var e=t.hasClass(this.conf.classNames.vertical)||!this.opts.slidingSubmenus;t.removeClass(this.conf.classNames.vertical);var s=t.attr("id")||this.__getUniqueId();t.is("ul, ol")&&(t.removeAttr("id"),t.wrap("<div />"),t=t.parent()),t.attr("id",s),t.addClass(n.panel+" "+n.hidden);var a=t.parent("li");return e?a.addClass(n.listitem+"_vertical"):t.appendTo(this.$pnls),a.length&&(a.data(i.child,t),t.data(i.parent,a)),this.trigger("initPanel:after",t),t},_initNavbar:function(e){if(this.trigger("initNavbar:before",e),!e.children("."+n.navbar).length){var s=e.data(i.parent),a=t('<div class="'+n.navbar+'" />'),r=this.__getPanelTitle(e,this.opts.navbar.title),l="";if(s&&s.length){if(s.hasClass(n.listitem+"_vertical"))return;if(s.parent().is("."+n.listview))var o=s.children("a, span").not("."+n.btn+"_next");else o=s.closest("."+n.panel).find('a[href="#'+e.attr("id")+'"]');var d=(s=(o=o.first()).closest("."+n.panel)).attr("id");switch(r=this.__getPanelTitle(e,t("<span>"+o.text()+"</span>").text()),this.opts.navbar.titleLink){case"anchor":l=o.attr("href")||"";break;case"parent":l="#"+d}a.append('<a class="'+n.btn+" "+n.btn+"_prev "+n.navbar+'__btn" href="#'+d+'" />')}else if(!this.opts.navbar.title)return;this.opts.navbar.add&&e.addClass(n.panel+"_has-navbar"),a.append('<a class="'+n.navbar+'__title"'+(l.length?' href="'+l+'"':"")+">"+r+"</a>").prependTo(e),this.trigger("initNavbar:after",e)}},_initListview:function(e){this.trigger("initListview:before",e);var s=this.__childAddBack(e,"ul, ol");this.__refactorClass(s,this.conf.classNames.nolistview,n.nolistview);var a=s.not("."+n.nolistview).addClass(n.listview).children().addClass(n.listitem);this.__refactorClass(a,this.conf.classNames.selected,n.listitem+"_selected"),this.__refactorClass(a,this.conf.classNames.divider,n.listitem+"_divider"),this.__refactorClass(a,this.conf.classNames.spacer,n.listitem+"_spacer"),a.children("a, span").not("."+n.btn).addClass(n.listitem+"__text");var r=e.data(i.parent);if(r&&r.is("."+n.listitem)&&!r.children("."+n.btn).length){var l=r.children("a, span").first(),o=t('<a class="'+n.btn+" "+n.btn+"_next "+n.listitem+'__btn" href="#'+e.attr("id")+'" />');o.insertAfter(l),l.is("span")&&(o.addClass(n.listitem+"__text "+l.attr("class")).html(l.html()),l.remove())}this.trigger("initListview:after",e)},_initOpened:function(){this.trigger("initOpened:before");var t=this.$pnls.find("."+n.listitem+"_selected").removeClass(n.listitem+"_selected").last().addClass(n.listitem+"_selected"),e=t.length?t.closest("."+n.panel):this.$pnls.children("."+n.panel).first();this.openPanel(e,!1),this.trigger("initOpened:after")},_initAnchors:function(){this.trigger("initAnchors:before");var e=this;a.$body.on(s.click+"-oncanvas","a[href]",function(i){var s=t(this),a=s.attr("href"),l=e.$menu.find(s).length,o=s.is("."+n.listitem+" > a"),d=s.is('[rel="external"]')||s.is('[target="_blank"]');if(l&&a.length>1&&"#"==a.slice(0,1))try{var c=e.$menu.find(a);if(c.is("."+n.panel))return e[s.parent().hasClass(n.listitem+"_vertical")?"togglePanel":"openPanel"](c),void i.preventDefault()}catch(t){}var h={close:null,setSelected:null,preventDefault:"#"==a.slice(0,1)};for(var p in t[r].addons){var f=t[r].addons[p].clickAnchor.call(e,s,l,o,d);if(f){if("boolean"==typeof f)return void i.preventDefault();"object"==typeof f&&(h=t.extend({},h,f))}}l&&o&&!d&&(e.__valueOrFn(s,e.opts.onClick.setSelected,h.setSelected)&&e.setSelected(t(i.target).parent()),e.__valueOrFn(s,e.opts.onClick.preventDefault,h.preventDefault)&&i.preventDefault(),e.__valueOrFn(s,e.opts.onClick.close,h.close)&&e.opts.offCanvas&&"function"==typeof e.close&&e.close())}),this.trigger("initAnchors:after")},_initMatchMedia:function(){var t=this;for(var e in this.mtch)!function(){var n=e,i=window.matchMedia(n);t._fireMatchMedia(n,i),i.addListener(function(e){t._fireMatchMedia(n,e)})}()},_fireMatchMedia:function(t,e){for(var n=e.matches?"yes":"no",i=0;i<this.mtch[t].length;i++)this.mtch[t][i][n].call(this)},_getOriginalMenuId:function(){var t=this.$menu.attr("id");return this.conf.clone&&t&&t.length&&(t=n.umm(t)),t},__api:function(){var e=this,n={};return t.each(this._api,function(t){var i=this;n[i]=function(){var t=e[i].apply(e,arguments);return void 0===t?n:t}}),n},__valueOrFn:function(t,e,n){if("function"==typeof e){var i=e.call(t[0]);if(void 0!==i)return i}return"function"!=typeof e&&void 0!==e||void 0===n?e:n},__getPanelTitle:function(e,n){var s;return"function"==typeof this.opts.navbar.title&&(s=this.opts.navbar.title.call(e[0])),void 0===s&&(s=e.data(i.title)),void 0!==s?s:"string"==typeof n?this.i18n(n):this.i18n(t[r].defaults.navbar.title)},__refactorClass:function(t,e,n){return t.filter("."+e).removeClass(e).addClass(n)},__findAddBack:function(t,e){return t.find(e).add(t.filter(e))},__childAddBack:function(t,e){return t.children(e).add(t.filter(e))},__filterListItems:function(t){return t.not("."+n.listitem+"_divider").not("."+n.hidden)},__filterListItemAnchors:function(t){return this.__filterListItems(t).children("a").not("."+n.btn+"_next")},__openPanelWoAnimation:function(t){t.hasClass(n.panel+"_noanimation")||(t.addClass(n.panel+"_noanimation"),this.__transitionend(t,function(){t.removeClass(n.panel+"_noanimation")},this.conf.openingInterval),this.openPanel(t))},__transitionend:function(t,e,n){var i=!1,a=function(n){void 0!==n&&n.target!=t[0]||(i||(t.off(s.transitionend),t.off(s.webkitTransitionEnd),e.call(t[0])),i=!0)};t.on(s.transitionend,a),t.on(s.webkitTransitionEnd,a),setTimeout(a,1.1*n)},__getUniqueId:function(){return n.mm(t[r].uniqueId++)}},t.fn[r]=function(e,l){!function(){if(t[r].glbl)return;a={$wndw:t(window),$docu:t(document),$html:t("html"),$body:t("body")},n={},i={},s={},t.each([n,i,s],function(t,e){e.add=function(t){t=t.split(" ");for(var n=0,i=t.length;n<i;n++)e[t[n]]=e.mm(t[n])}}),n.mm=function(t){return"mm-"+t},n.add("wrapper menu panels panel nopanel navbar listview nolistview listitem btn hidden"),n.umm=function(t){return"mm-"==t.slice(0,3)&&(t=t.slice(3)),t},i.mm=function(t){return"mm-"+t},i.add("parent child title"),s.mm=function(t){return t+".mm"},s.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"),t[r]._c=n,t[r]._d=i,t[r]._e=s,t[r].glbl=a}();var o=t();return this.each(function(){var n=t(this);if(!n.data(r)){var i=jQuery.extend(!0,{},t[r].defaults,e),s=jQuery.extend(!0,{},t[r].configuration,l),a=new t[r](n,i,s);a.$menu.data(r,a.__api()),o=o.add(a.$menu)}}),o},t[r].i18n=(e={},function(n,i){switch(typeof n){case"object":return"string"==typeof i&&(void 0===e[i]&&(e[i]={}),t.extend(e[i],n)),e;case"string":return"string"==typeof i&&void 0!==e[i]&&e[i][n]||n;case"undefined":default:return e}}),t[r].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:"undefined"==typeof Modernizr||void 0===Modernizr.csstransitions||Modernizr.csstransitions})}(jQuery);
!function(e){var t,n,i,o,r="offCanvas";e.mmenu.addons[r]={setup:function(){if(this.opts[r]){var n=this.opts[r],i=this.conf[r];o=e.mmenu.glbl,this._api=e.merge(this._api,["open","close","setPage"]),"object"!=typeof n&&(n={}),n=this.opts[r]=e.extend(!0,{},e.mmenu.defaults[r],n),"string"!=typeof i.page.selector&&(i.page.selector="> "+i.page.nodetype),this.vars.opened=!1;var s=[t.menu+"_offcanvas"];this.bind("initMenu:after",function(){var e=this;this._initBlocker(),this.setPage(o.$page),this._initWindow_offCanvas(),this.$menu.addClass(s.join(" ")).parent("."+t.wrapper).removeClass(t.wrapper),this.$menu[i.menu.insertMethod](i.menu.insertSelector);var n=window.location.hash;if(n){var r=this._getOriginalMenuId();r&&r==n.slice(1)&&setTimeout(function(){e.open()},1e3)}}),this.bind("setPage:after",function(e){o.$blck&&o.$blck.children("a").attr("href","#"+e.attr("id"))}),this.bind("open:start:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initBlocker:after:sr-text",function(){o.$blck.children("a").html(this.__sr_text(this.i18n(this.conf.screenReader.text.closeMenu)))})}},add:function(){t=e.mmenu._c,n=e.mmenu._d,i=e.mmenu._e,t.add("slideout page no-csstransforms3d"),n.add("style")},clickAnchor:function(e,n){var i=this;if(this.opts[r]){var s=this._getOriginalMenuId();if(s&&e.is('[href="#'+s+'"]')){if(n)return this.open(),!0;var a=e.closest("."+t.menu);if(a.length){var p=a.data("mmenu");if(p&&p.close)return p.close(),i.__transitionend(a,function(){i.open()},i.conf.transitionDuration),!0}return this.open(),!0}if(o.$page)return(s=o.$page.first().attr("id"))&&e.is('[href="#'+s+'"]')?(this.close(),!0):void 0}}},e.mmenu.defaults[r]={blockUI:!0,moveBackground:!0},e.mmenu.configuration[r]={menu:{insertMethod:"prependTo",insertSelector:"body"},page:{nodetype:"div",selector:null,noSelector:[],wrapIfNeeded:!0}},e.mmenu.prototype.open=function(){if(this.trigger("open:before"),!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open:after")}},e.mmenu.prototype._openSetup=function(){var s=this,a=this.opts[r];this.closeAllOthers(),o.$page.each(function(){e(this).data(n.style,e(this).attr("style")||"")}),o.$wndw.trigger(i.resize+"-"+r,[!0]);var p=[t.wrapper+"_opened"];a.blockUI&&p.push(t.wrapper+"_blocking"),"modal"==a.blockUI&&p.push(t.wrapper+"_modal"),a.moveBackground&&p.push(t.wrapper+"_background"),o.$html.addClass(p.join(" ")),setTimeout(function(){s.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(t.menu+"_opened")},e.mmenu.prototype._openFinish=function(){var e=this;this.__transitionend(o.$page.first(),function(){e.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),o.$html.addClass(t.wrapper+"_opening")},e.mmenu.prototype.close=function(){if(this.trigger("close:before"),this.vars.opened){var i=this;this.__transitionend(o.$page.first(),function(){i.$menu.removeClass(t.menu+"_opened");var r=[t.wrapper+"_opened",t.wrapper+"_blocking",t.wrapper+"_modal",t.wrapper+"_background"];o.$html.removeClass(r.join(" ")),o.$page.each(function(){var t=e(this).data(n.style);e(this).attr("style",t)}),i.vars.opened=!1,i.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),o.$html.removeClass(t.wrapper+"_opening"),this.trigger("close:after")}},e.mmenu.prototype.closeAllOthers=function(){o.$body.find("."+t.menu+"_offcanvas").not(this.$menu).each(function(){var t=e(this).data("mmenu");t&&t.close&&t.close()})},e.mmenu.prototype.setPage=function(n){this.trigger("setPage:before",n);var i=this,s=this.conf[r];n&&n.length||(n=o.$body.find(s.page.selector).not("."+t.menu).not("."+t.wrapper+"__blocker"),s.page.noSelector.length&&(n=n.not(s.page.noSelector.join(", "))),n.length>1&&s.page.wrapIfNeeded&&(n=n.wrapAll("<"+this.conf[r].page.nodetype+" />").parent())),n.addClass(t.page+" "+t.slideout).each(function(){e(this).attr("id",e(this).attr("id")||i.__getUniqueId())}),o.$page=n,this.trigger("setPage:after",n)},e.mmenu.prototype._initWindow_offCanvas=function(){o.$wndw.off(i.keydown+"-"+r).on(i.keydown+"-"+r,function(e){if(o.$html.hasClass(t.wrapper+"_opened")&&9==e.keyCode)return e.preventDefault(),!1});var e=0;o.$wndw.off(i.resize+"-"+r).on(i.resize+"-"+r,function(n,i){if(1==o.$page.length&&(i||o.$html.hasClass(t.wrapper+"_opened"))){var r=o.$wndw.height();(i||r!=e)&&(e=r,o.$page.css("minHeight",r))}})},e.mmenu.prototype._initBlocker=function(){var n=this,s=this.opts[r],a=this.conf[r];this.trigger("initBlocker:before"),s.blockUI&&(o.$blck||(o.$blck=e('<div class="'+t.wrapper+"__blocker "+t.slideout+'" />').append("<a />")),o.$blck.appendTo(a.menu.insertSelector).off(i.touchstart+"-"+r+" "+i.touchmove+"-"+r).on(i.touchstart+"-"+r+" "+i.touchmove+"-"+r,function(e){e.preventDefault(),e.stopPropagation(),o.$blck.trigger(i.mousedown+"-"+r)}).off(i.mousedown+"-"+r).on(i.mousedown+"-"+r,function(e){e.preventDefault(),o.$html.hasClass(t.wrapper+"_modal")||(n.closeAllOthers(),n.close())}),this.trigger("initBlocker:after"))}}(jQuery);
!function(t){var i,n,e="screenReader";t.mmenu.addons[e]={setup:function(){var r=this,a=this.opts[e],s=this.conf[e];t.mmenu.glbl,"boolean"==typeof a&&(a={aria:a,text:a}),"object"!=typeof a&&(a={}),(a=this.opts[e]=t.extend(!0,{},t.mmenu.defaults[e],a)).aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("initOpened:after",function(){this.trigger("initOpened:after:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+i.listview).children().each(function(){r.__sr_aria(t(this),"hidden",t(this).is("."+i.hidden))})}),this.bind("openPanel:start",function(t){var n=this.$menu.find("."+i.panel).not(t).not(t.parents("."+i.panel)),e=t.add(t.find("."+i.listitem+"_vertical ."+i.listitem+"_opened").children("."+i.panel));this.__sr_aria(n,"hidden",!0),this.__sr_aria(e,"hidden",!1)}),this.bind("closePanel",function(t){this.__sr_aria(t,"hidden",!0)}),this.bind("initPanels:after",function(n){var e=n.find("."+i.btn).each(function(){r.__sr_aria(t(this),"owns",t(this).attr("href").replace("#",""))});this.__sr_aria(e,"haspopup",!0)}),this.bind("initNavbar:after",function(t){var n=t.children("."+i.navbar);this.__sr_aria(n,"hidden",!t.hasClass(i.panel+"_has-navbar"))}),a.text&&"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(t){var n=t.children("."+i.navbar),e=!!n.children("."+i.btn+"_prev").length;this.__sr_aria(n.children("."+i.title),"hidden",e)})),a.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])}),this.bind("initBlocker:after",function(){this.trigger("initBlocker:after:sr-text")})}),this.bind("initNavbar:after",function(t){var n=t.children("."+i.navbar),e=this.i18n(s.text.closeSubmenu);n.children("."+i.btn+"_prev").html(this.__sr_text(e))}),this.bind("initListview:after",function(t){var e=t.data(n.parent);if(e&&e.length){var a=e.children("."+i.btn+"_next"),o=this.i18n(s.text[a.parent().is("."+i.listitem+"_vertical")?"toggleSubmenu":"openSubmenu"]);a.append(r.__sr_text(o))}}))},add:function(){i=t.mmenu._c,n=t.mmenu._d,t.mmenu._e,i.add("sronly")},clickAnchor:function(t,i){}},t.mmenu.defaults[e]={aria:!0,text:!0},t.mmenu.configuration[e]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},t.mmenu.prototype.__sr_aria=function(t,i,n){t.prop("aria-"+i,n)[n?"attr":"removeAttr"]("aria-"+i,n)},t.mmenu.prototype.__sr_role=function(t,i){t.prop("role",i)[i?"attr":"removeAttr"]("role",i)},t.mmenu.prototype.__sr_text=function(t){return'<span class="'+i.sronly+'">'+t+"</span>"}}(jQuery);
!function(o){var t,n,e,r="scrollBugFix";o.mmenu.addons[r]={setup:function(){var n=this.opts[r];this.conf[r];e=o.mmenu.glbl,o.mmenu.support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof n&&(n={fix:n}),"object"!=typeof n&&(n={}),(n=this.opts[r]=o.extend(!0,{},o.mmenu.defaults[r],n)).fix&&(this.bind("open:start",function(){this.$pnls.children("."+t.panel+"_opened").scrollTop(0)}),this.bind("initMenu:after",function(){this["_initWindow_"+r]()})))},add:function(){t=o.mmenu._c,o.mmenu._d,n=o.mmenu._e},clickAnchor:function(o,t){}},o.mmenu.defaults[r]={fix:!0},o.mmenu.prototype["_initWindow_"+r]=function(){var s=this;o(document).off(n.touchmove+"-"+r).on(n.touchmove+"-"+r,function(o){e.$html.hasClass(t.wrapper+"_opened")&&o.preventDefault()});var i=!1;e.$body.off(n.touchstart+"-"+r).on(n.touchstart+"-"+r,"."+t.panels+"> ."+t.panel,function(o){e.$html.hasClass(t.wrapper+"_opened")&&(i||(i=!0,0===o.currentTarget.scrollTop?o.currentTarget.scrollTop=1:o.currentTarget.scrollHeight===o.currentTarget.scrollTop+o.currentTarget.offsetHeight&&(o.currentTarget.scrollTop-=1),i=!1))}).off(n.touchmove+"-"+r).on(n.touchmove+"-"+r,"."+t.panels+"> ."+t.panel,function(n){e.$html.hasClass(t.wrapper+"_opened")&&o(this)[0].scrollHeight>o(this).innerHeight()&&n.stopPropagation()}),e.$wndw.off(n.orientationchange+"-"+r).on(n.orientationchange+"-"+r,function(){s.$pnls.children("."+t.panel+"_opened").scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})}}(jQuery);
!function(e){var n,s,a,t="searchfield";function i(e,n){if(n)for(var s in n)e.attr(s,n[s])}e.mmenu.addons[t]={setup:function(){var s=this,a=this.opts[t],i=this.conf[t];e.mmenu.glbl,"boolean"==typeof a&&(a={add:a}),"object"!=typeof a&&(a={}),"boolean"==typeof a.panel&&(a.panel={add:a.panel}),"object"!=typeof a.panel&&(a.panel={}),a.add&&("panel"==a.addTo&&(a.panel.add=!0),a.panel.add&&(a.showSubPanels=!1,a.panel.splash&&(a.cancel=!0)),a=this.opts[t]=e.extend(!0,{},e.mmenu.defaults[t],a),i=this.conf[t]=e.extend(!0,{},e.mmenu.configuration[t],i),this.bind("close:start",function(){this.$menu.find("."+n.searchfield).children("input").blur()}),this.bind("initPanels:after",function(n){var t,i=e();switch(a.panel.add&&(i=this._initSearchPanel(n)),a.addTo){case"panels":t=n;break;case"panel":t=i;break;default:t=this.$menu.find(a.addTo)}(t.each(function(){var n=s._initSearchfield(e(this));a.search&&n.length&&s._initSearching(n)}),a.noResults)&&(a.panel.add?i:n).each(function(){s._initNoResultsMsg(e(this))})}))},add:function(){n=e.mmenu._c,s=e.mmenu._d,a=e.mmenu._e,n.add("searchfield"),s.add("searchfield"),a.add("input focus blur")},clickAnchor:function(e,s){if(e.hasClass(n.searchfield+"__btn")){if(e.hasClass(n.btn+"_close")){var a=e.closest("."+n.searchfield).find("input");return a.val(""),this.search(a),!0}if(e.hasClass(n.btn+"_next"))return e.closest("."+n.searchfield).submit(),!0}}},e.mmenu.defaults[t]={add:!1,addTo:"panels",noResults:"No results found.",placeholder:"Search",panel:{add:!1,dividers:!0,fx:"none",id:null,splash:null,title:"Search"},search:!0,showTextItems:!1,showSubPanels:!0},e.mmenu.configuration[t]={clear:!1,form:!1,input:!1,submit:!1},e.mmenu.prototype._initSearchPanel=function(s){var a=this.opts[t];this.conf[t];if(this.$pnls.children("."+n.panel+"_search").length)return e();var i=e('<div class="'+n.panel+'_search " />').append("<ul />").appendTo(this.$pnls);switch(a.panel.id&&i.attr("id",a.panel.id),a.panel.title&&i.attr("data-mm-title",a.panel.title),a.panel.fx){case!1:break;case"none":i.addClass(n.panel+"_noanimation");break;default:i.addClass(n.panel+"_fx-"+a.panel.fx)}return a.panel.splash&&i.append('<div class="'+n.panel+'__searchsplash">'+a.panel.splash+"</div>"),this._initPanels(i),i},e.mmenu.prototype._initSearchfield=function(s){var a=this.opts[t],l=this.conf[t];if(s.parent("."+n.listitem+"_vertical").length)return e();if(s.find("."+n.searchfield).length)return s.find("."+n.searchfield);var d=e("<"+(l.form?"form":"div")+' class="'+n.searchfield+'" />'),h=e('<div class="'+n.searchfield+'__input" />'),r=e('<input placeholder="'+this.i18n(a.placeholder)+'" type="text" autocomplete="off" />');return h.append(r).appendTo(d),s.prepend(d),s.hasClass(n.panel)&&s.addClass(n.panel+"_has-searchfield"),i(r,l.input),l.clear&&e('<a class="'+n.btn+" "+n.btn+"_close "+n.searchfield+'__btn" href="#" />').appendTo(h),i(d,l.form),l.form&&l.submit&&!l.clear&&e('<a class="'+n.btn+" "+n.btn+"_next "+n.searchfield+'__btn" href="#" />').appendTo(h),a.cancel&&e('<a href="#" class="'+n.searchfield+'__cancel">'+this.i18n("cancel")+"</a>").appendTo(d),d},e.mmenu.prototype._initSearching=function(i){var l=this,d=this.opts[t],h=(this.conf[t],{});i.closest("."+n.panel+"_search").length?(h.$pnls=this.$pnls.find("."+n.panel),h.$nrsp=i.closest("."+n.panel)):i.closest("."+n.panel).length?(h.$pnls=i.closest("."+n.panel),h.$nrsp=h.$pnls):(h.$pnls=this.$pnls.find("."+n.panel),h.$nrsp=this.$menu),h.$pnls=h.$pnls.not(function(){return e(this).parent("."+n.listitem+"_vertical").length}),d.panel.add&&(h.$pnls=h.$pnls.not("."+n.panel+"_search"));var r=i.find("input"),c=i.find("."+n.searchfield+"__cancel"),p=this.$pnls.children("."+n.panel+"_search"),o=h.$pnls.find("."+n.listitem);h.$itms=o.not("."+n.listitem+"_divider"),h.$dvdr=o.filter("."+n.listitem+"_divider"),d.panel.add&&d.panel.splash&&r.off(a.focus+"-"+t+"-splash").on(a.focus+"-"+t+"-splash",function(e){l.openPanel(p)}),d.cancel&&(r.off(a.focus+"-"+t+"-cancel").on(a.focus+"-"+t+"-cancel",function(e){c.addClass(n.searchfield+"__cancel-active")}),c.off(a.click+"-"+t+"-splash").on(a.click+"-"+t+"-splash",function(s){s.preventDefault(),e(this).removeClass(n.searchfield+"__cancel-active"),p.hasClass(n.panel+"_opened")&&l.openPanel(l.$pnls.children("."+n.panel+"_opened-parent").last())})),d.panel.add&&"panel"==d.addTo&&this.bind("openPanel:finish",function(e){e[0]===p[0]&&r.focus()}),r.data(s.searchfield,h).off(a.input+"-"+t).on(a.input+"-"+t,function(e){(function(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1})(e.keyCode)||l.search(r)}),this.search(r)},e.mmenu.prototype._initNoResultsMsg=function(s){var a=this.opts[t];this.conf[t];if(s.closest("."+n.panel).length||(s=this.$pnls.children("."+n.panel).first()),!s.children("."+n.panel+"__noresultsmsg").length){var i=s.children("."+n.listview).first(),l=e('<div class="'+n.panel+"__noresultsmsg "+n.hidden+'" />').append(this.i18n(a.noResults));i.length?l.insertAfter(i):l.prependTo(s)}},e.mmenu.prototype.search=function(a,i){var l=this,d=this.opts[t];this.conf[t];a=a||this.$menu.find("."+n.searchfield).chidren("input").first(),i=(i=i||a.val()).toLowerCase().trim();var h=a.data(s.searchfield),r=a.closest("."+n.searchfield).find("."+n.btn),c=this.$pnls.children("."+n.panel+"_search"),p=h.$pnls,o=h.$itms,f=h.$dvdr,u=h.$nrsp;if(o.removeClass(n.listitem+"_nosubitems").find("."+n.btn+"_fullwidth-search").removeClass(n.btn+"_fullwidth-search "+n.btn+"_fullwidth"),c.children("."+n.listview).empty(),p.scrollTop(0),i.length){if(o.add(f).addClass(n.hidden),o.each(function(){var s=e(this),a="a";(d.showTextItems||d.showSubPanels&&s.find("."+n.btn+"_next"))&&(a="a, span"),s.children(a).not("."+n.btn+"_next").text().toLowerCase().indexOf(i)>-1&&s.removeClass(n.hidden)}),d.panel.add){var m=e();p.each(function(){var s=l.__filterListItems(e(this).find("."+n.listitem)).clone(!0);s.length&&(d.panel.dividers&&(m=m.add('<li class="'+n.listitem+" "+n.listitem+'_divider">'+e(this).find("."+n.navbar+"__title").text()+"</li>")),m=m.add(s))}),m.find("."+n.mm("toggle")).remove().end().find("."+n.mm("check")).remove().end().find("."+n.btn).remove(),c.children("."+n.listview).append(m),this.openPanel(c)}else d.showSubPanels&&p.each(function(a){var t=e(this);l.__filterListItems(t.find("."+n.listitem)).each(function(){var a=e(this).data(s.child);a&&a.find("."+n.listview).children().removeClass(n.hidden)})}),e(p.get().reverse()).each(function(t){var i=e(this),d=i.data(s.parent);d&&(l.__filterListItems(i.find("."+n.listitem)).length?d.hasClass(n.hidden)&&d.removeClass(n.hidden).children("."+n.btn+"_next").not("."+n.btn+"_fullwidth").addClass(n.btn+"_fullwidth").addClass(n.btn+"_fullwidth-search"):a.closest("."+n.panel).length||((i.hasClass(n.panel+"_opened")||i.hasClass(n.panel+"_opened-parent"))&&setTimeout(function(){l.openPanel(d.closest("."+n.panel))},(t+1)*(1.5*l.conf.openingInterval)),d.addClass(n.listitem+"_nosubitems")))}),this.__filterListItems(p.find("."+n.listitem)).each(function(){e(this).prevAll("."+n.listitem+"_divider").first().removeClass(n.hidden)});r.removeClass(n.hidden),u.find("."+n.panel+"__noresultsmsg")[o.not("."+n.hidden).length?"addClass":"removeClass"](n.hidden),d.panel.add&&(d.panel.splash&&c.find("."+n.panel+"__searchsplash").addClass(n.hidden),o.add(f).removeClass(n.hidden))}else o.add(f).removeClass(n.hidden),r.addClass(n.hidden),u.find("."+n.panel+"__noresultsmsg").addClass(n.hidden),d.panel.add&&(d.panel.splash?c.find("."+n.panel+"__searchsplash").removeClass(n.hidden):a.closest("."+n.panel+"_search").length||this.openPanel(this.$pnls.children("."+n.panel+"_opened-parent").last()));this.trigger("updateListview")}}(jQuery);
!function(s){var t,e,n="fixedElements";s.mmenu.addons[n]={setup:function(){if(this.opts.offCanvas){this.opts[n];var i=this.conf[n];e=s.mmenu.glbl;this.bind("setPage:after",function(o){var c=this.conf.classNames[n].fixed,f=o.find("."+c);this.__refactorClass(f,c,t.slideout),f[i.elemInsertMethod](i.elemInsertSelector);var a=this.conf.classNames[n].sticky,d=o.find("."+a);this.__refactorClass(d,a,t.sticky),(d=o.find("."+t.sticky)).length&&(this.bind("open:start",function(){if("hidden"==e.$html.css("overflow")){var t=e.$wndw.scrollTop()+i.sticky.offset;d.each(function(){s(this).css("top",parseInt(s(this).css("top"),10)+t)})}}),this.bind("close:finish",function(){d.css("top","")}))})}},add:function(){t=s.mmenu._c,s.mmenu._d,s.mmenu._e,t.add("sticky")},clickAnchor:function(s,t){}},s.mmenu.configuration[n]={sticky:{offset:0},elemInsertMethod:"appendTo",elemInsertSelector:"body"},s.mmenu.configuration.classNames[n]={fixed:"Fixed",sticky:"Sticky"}}(jQuery);
!function(n){var a;n.mmenu.addons.navbars={setup:function(){var t=this,e=this.opts.navbars,o=this.conf.navbars;if(n.mmenu.glbl,void 0!==e){e instanceof Array||(e=[e]);var r={},s={};e.length&&(n.each(e,function(i){var c=e[i];"boolean"==typeof c&&c&&(c={}),"object"!=typeof c&&(c={}),void 0===c.content&&(c.content=["prev","title"]),c.content instanceof Array||(c.content=[c.content]),c=n.extend(!0,{},t.opts.navbar,c);var d=n('<div class="'+a.navbar+'" />'),v=c.height;"number"!=typeof v?v=1:(v=Math.min(4,Math.max(1,v)))>1&&d.addClass(a.navbar+"_size-"+v);var m=c.position;switch(m){case"bottom":break;default:m="top"}r[m]||(r[m]=0),r[m]+=v,s[m]||(s[m]=n('<div class="'+a.navbars+"_"+m+'" />')),s[m].append(d);for(var u=0,b=c.content.length;u<b;u++){var l=n.mmenu.addons.navbars[c.content[u]]||null;l?l.call(t,d,c,o):((l=c.content[u])instanceof n||(l=n(c.content[u])),d.append(l))}var f=n.mmenu.addons.navbars[c.type]||null;f&&f.call(t,d,c,o),d.children("."+a.btn).length&&d.addClass(a.navbar+"_has-btns")}),this.bind("initMenu:after",function(){for(var n in r)this.$menu.addClass(a.menu+"_navbar_"+n+"-"+r[n]),this.$menu["bottom"==n?"append":"prepend"](s[n])}))}},add:function(){a=n.mmenu._c,n.mmenu._d,n.mmenu._e,a.add("navbars")},clickAnchor:function(n,a){}},n.mmenu.configuration.navbars={breadcrumbs:{separator:"/",removeFirst:!1}},n.mmenu.configuration.classNames.navbars={}}(jQuery);
!function(a){a.mmenu.addons.navbars.breadcrumbs=function(r,n,e){var s=this,t=a.mmenu._c,i=a.mmenu._d;t.add("separator");var b=a('<span class="'+t.navbar+'__breadcrumbs" />').appendTo(r);this.bind("initNavbar:after",function(r){if(!r.children("."+t.navbar).children("."+t.navbar+"__breadcrumbs").length){r.removeClass(t.panel+"_has-navbar");for(var n=[],s=a('<span class="'+t.navbar+'__breadcrumbs"></span>'),b=r,c=!0;b&&b.length;){if(b.is("."+t.panel)||(b=b.closest("."+t.panel)),!b.parent("."+t.listitem+"_vertical").length){var d=b.children("."+t.navbar).children("."+t.navbar+"__title").text();d.length&&n.unshift(c?"<span>"+d+"</span>":'<a href="#'+b.attr("id")+'">'+d+"</a>"),c=!1}b=b.data(i.parent)}e.breadcrumbs.removeFirst&&n.shift(),s.append(n.join('<span class="'+t.separator+'">'+e.breadcrumbs.separator+"</span>")).appendTo(r.children("."+t.navbar))}}),this.bind("openPanel:start",function(a){var r=a.find("."+t.navbar+"__breadcrumbs");r.length&&b.html(r.html()||"")}),this.bind("initNavbar:after:sr-aria",function(r){r.children("."+t.navbar).children("."+t.breadcrumbs).children("a").each(function(){s.__sr_aria(a(this),"owns",a(this).attr("href").slice(1))})})}}(jQuery);
!function(t){t.mmenu.addons.navbars.close=function(e,n){var s=t.mmenu._c;t.mmenu.glbl;s.add("close");var a=t('<a class="'+s.btn+" "+s.btn+"_close "+s.navbar+'__btn" href="#" />').appendTo(e);this.bind("setPage:after",function(t){a.attr("href","#"+t.attr("id"))}),this.bind("setPage:after:sr-text",function(t){a.html(this.__sr_text(this.i18n(this.conf.screenReader.text.closeMenu))),this.__sr_aria(a,"owns",a.attr("href").slice(1))})}}(jQuery);
!function(a){a.mmenu.addons.navbars.next=function(n,t){var e,s,r,i=a.mmenu._c,h=a('<a class="'+i.btn+" "+i.btn+"_next "+i.navbar+'__btn" href="#" />').appendTo(n);this.bind("openPanel:start",function(a){e=a.find("."+this.conf.classNames.navbars.panelNext),s=e.attr("href"),r=e.html(),s?h.attr("href",s):h.removeAttr("href"),h[s||r?"removeClass":"addClass"](i.hidden),h.html(r)}),this.bind("openPanel:start:sr-aria",function(a){this.__sr_aria(h,"hidden",h.hasClass(i.hidden)),this.__sr_aria(h,"owns",(h.attr("href")||"").slice(1))})},a.mmenu.configuration.classNames.navbars.panelNext="Next"}(jQuery);
!function(a){a.mmenu.addons.navbars.prev=function(n,r){var e,t,i,s=a.mmenu._c,h=a('<a class="'+s.btn+" "+s.btn+"_prev "+s.navbar+'__btn" href="#" />').appendTo(n);this.bind("initNavbar:after",function(a){a.removeClass(s.panel+"_has-navbar")}),this.bind("openPanel:start",function(a){a.parent("."+s.listitem+"_vertical").length||((e=a.find("."+this.conf.classNames.navbars.panelPrev)).length||(e=a.children("."+s.navbar).children("."+s.btn+"_prev")),t=e.attr("href"),i=e.html(),t?h.attr("href",t):h.removeAttr("href"),h[t||i?"removeClass":"addClass"](s.hidden),h.html(i))}),this.bind("initNavbar:after:sr-aria",function(a){var n=a.children("."+s.navbar);this.__sr_aria(n,"hidden",!0)}),this.bind("openPanel:start:sr-aria",function(a){this.__sr_aria(h,"hidden",h.hasClass(s.hidden)),this.__sr_aria(h,"owns",(h.attr("href")||"").slice(1))})},a.mmenu.configuration.classNames.navbars.panelPrev="Prev"}(jQuery);
!function(e){e.mmenu.addons.navbars.searchfield=function(s,t){e.mmenu._c;"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=s}}(jQuery);
!function(t){t.mmenu.addons.navbars.title=function(a,n){var e,i,r,s,l=t.mmenu._c,h=t('<a class="'+l.navbar+'__title" />').appendTo(a);this.bind("openPanel:start",function(t){t.parent("."+l.listitem+"_vertical").length||((r=t.find("."+this.conf.classNames.navbars.panelTitle)).length||(r=t.children("."+l.navbar).children("."+l.navbar+"__title")),e=r.attr("href"),i=r.html()||n.title,e?h.attr("href",e):h.removeAttr("href"),h[e||i?"removeClass":"addClass"](l.hidden),h.html(i))}),this.bind("openPanel:start:sr-aria",function(t){if(this.opts.screenReader.text&&(s||(s=this.$menu.children("."+l.navbars+"_top, ."+l.navbars+"_bottom").children("."+l.navbar).children("."+l.btn+"_prev")),s.length)){var a=!0;"parent"==this.opts.navbar.titleLink&&(a=!s.hasClass(l.hidden)),this.__sr_aria(h,"hidden",a)}})},t.mmenu.configuration.classNames.navbars.panelTitle="Title"}(jQuery);

!function(p){var l="mmenu";if("undefined"==typeof console)return;var s=document.mmenu_console||console||{info:function(){},log:function(){},warn:function(){}};p[l].glbl,p[l]._c,p[l]._d,p[l]._e;function u(e){s.warn("MMENU: "+e)}function r(e,o,t){var n="MMENU: "+e+" is deprecated";t&&(n+=" as of version "+t),o&&(n+=", use "+o+" instead"),n+=".",s.warn(n)}p[l].prototype.___deprecated=function(){var e,o,t,n=this.opts.extensions,s="";for(var i in n.constructor===Array&&(n={all:n}),n)s+=n[i].join(" ")+" ";for(var a=["pageNodetype","pageSelector","noPageSelector","wrapPageIfNeeded","menuInsertMethod","menuInsertSelector"],d=["page.nodetype","page.selector","page.noSelector","page.wrapIfNeeded","menu.insertMethod","menu.insertSelector"],h=0;h<a.length;h++)void 0!==this.conf.offCanvas[a[h]]&&r('The "offCanvas.'+a[h]+'" configuration option','"offCanvas.'+d[h]+'"',"7.1");for(-1<s.indexOf("listview-")&&-1==s.indexOf("listview-justify")&&r('The "listview" sizes','the CSS variable "--mm-listitem-size"',"7.1"),this.opts.iconbar&&this.opts.iconbar.size&&r('The option "iconbar.size"','the CSS variable "--mm-iconbar-size"',"7.1"),this.opts.iconPanels&&this.opts.iconPanels.size&&r('The option "iconbar.size"','the CSS variable "--mm-iconpanel-size"',"7.1"),this.opts.sidebar&&this.opts.sidebar.collapsed&&this.opts.sidebar.collapsed.size&&r('The option "sidebar.collapsed.size"','the CSS variable "--mm-sidebar-collapsed-size"',"7.1"),this.opts.sidebar&&this.opts.sidebar.expanded&&this.opts.sidebar.expanded.size&&r('The option "sidebar.expanded.size"','the CSS variable "--mm-sidebar-expanded-size"',"7.1"),"function"==typeof this.opts.initMenu&&r('The option "initMenu"','"hooks.initMenu:before" or "hooks.initMenu:after"',"7.0"),"function"==typeof this.opts.initPanels&&r('The option "initPanels"','"hooks.initPanels:before", "hooks.initPanels:after", "hooks.initPanel:before" or "hooks.initPanel:after"',"7.0"),this.opts.offCanvas&&(this.opts.offCanvas.position&&r('The option "offCanvas.position"','the "positioning" extension',"7.0"),this.opts.offCanvas.zposition&&r('The option "offCanvas.zposition"','the "positioning" extension',"7.0"),this.opts.searchfield&&void 0!==this.opts.searchfield.resultsPanel&&r('The option "searchfield.resultsPanel"','"searchfield.panel"',"7.0")),-1<s.indexOf("widescreen")&&r('The "widescreen" extension','the "sidebar" add-on',"7.0"),-1<s.indexOf("iconbar")&&r('The "iconbar" extension','the "sidebar" add-on',"7.0"),this.opts.counters&&void 0!==this.opts.counters.update&&r('The option "counters.update"','"counters.count"',"6.0"),this.opts.navbar&&"panel"==this.opts.navbar.titleLink&&r('The value "panel" for the "navbar.titleLink" option','"parent"',"6.0"),-1<s.indexOf("effect-")&&r('The "effect-" prefix for the "effects" extension','"fx-"',"6.0"),-1<s.indexOf("justfied-listview")&&r('The "justified-listview" extension','"listview-justify"',"6.0"),void 0!==this.conf.offCanvas.menuInjectMethod&&("append"!=this.conf.offCanvas.menuInjectMethod&&"prepend"!=this.conf.offCanvas.menuInjectMethod||r('"'+this.conf.offCanvas.menuInjectMethod+'" for the "offCanvas.menuInjectMethod" configuration option','"'+this.conf.offCanvas.menuInjectMethod+'To"',"6.0"),r('The "offCanvas.menuInjectMethod" configuration option','"offCanvas.menuInsertMethod"',"6.0")),void 0!==this.conf.offCanvas.menuWrapperSelector&&r('The "offCanvas.menuWrapperSelector" configuration option','"offCanvas.menuInsertSelector"',"6.0"),("boolean"==typeof this.opts.currentItem&&this.opts.currentItem||"object"==typeof this.opts.currentItem&&this.opts.currentItem.find)&&r('The "currentItem" add-on','"setSelected.current": "detect"',"5.7"),void 0!==this.opts.dragOpen&&r('The "dragOpen" add-on','the "drag" add-on',"5.7"),void 0!==this.opts.dragClose&&r('The "dragClose" add-on','the "drag" add-on',"5.7"),-1<s.indexOf("pageshadow")&&r('The "pageshadow" extension','"shadow-page"',"5.7"),-1<s.indexOf("panelshadow")&&r('The "panelshadow" extension','"shadow-panels"',"5.7"),-1<s.indexOf("leftSubpanels")&&r('The "leftSubpanels" extension','the "rtl" add-on',"5.7"),this.bind("init",function(){r('The API method "init"','"initPanels"',"5.7")}),void 0!==this.conf.searchfield&&"boolean"==typeof this.conf.searchfield.form&&this.conf.searchfield.form&&r('Boolean "true" for the "searchfield.form" configuration option',"an object","5.6"),this.opts.offCanvas&&void 0!==this.opts.offCanvas.modal&&r('The option "offCanvas.modal"','"offCanvas.blockUI"',"5.5"),void 0!==this.opts.onClick.blockUI&&r('The option "onClick.blockUI"',null,"5.5"),void 0!==this.opts.searchfield&&"menu"==this.opts.searchfield.addTo&&r('The value "menu" for the "searchfield.addTo" option','the "navbars" add-on',"5.2"),void 0!==this.opts.header&&r('The "header" add-on','the "navbars" add-on',"5.1"),void 0!==this.opts.footer&&r('The "footer" add-on','the "navbars" add-on',"5.1"),-1<s.indexOf("effect-slide")&&r('The "effect-slide" extension','"effect-menu-slide"',"5.1"),void 0!==this.conf.classNames.header&&r('The "header" add-on','the "navbars" add-on',"5.1"),void 0!==this.conf.classNames.footer&&r('The "footer" add-on','the "navbars" add-on',"5.1"),void 0!==this.conf.classNames.buttonbars&&r('The "buttonbars" add-on',!1,"5.1"),this.$menu.find(".Buttonbar").length&&r("The buttonbars add-on",!1,"5.1"),void 0!==this.opts.labels&&r('The "labels" add-on','"dividers"',"5.0"),void 0!==this.opts.classes&&r('The option "classes"','"extensions"',"5.0"),void 0!==this.opts.searchfield&&void 0!==this.opts.searchfield.showLinksOnly&&r('The option "searchfield.showLinksOnly"','"!searchfield.showTextItems"',"5.0"),void 0!==this.conf.classNames.label&&r('The configuration option "classNames.labels"','"classNames.dividers"',"5.0"),this.$menu.find(".Label").length&&r('The classname "Label"','"Divider"',"5.0"),p(".FixedTop").length&&r('The classname "FixedTop"','"Fixed"',"5.0"),p(".FixedBottom").length&&r('The classname "FixedBottom"','"Fixed"',"5.0"),this.$menu.on("setPage setPage.mm setSelected setSelected.mm open open.mm opening opening.mm opened opened.mm close close.mm closing closing.mm closed closed.mm toggle toggle.mm",function(e){r('The custom event "'+e.type+'"',"the API","5.0")}),o=0,t=(e=["position","zposition","modal","moveBackground"]).length;o<t;o++)void 0!==this.opts[e[o]]&&r('The option "'+e[o]+'"',"offCanvas."+e[o],"4.3");for(o=0,t=(e=["panel","list","selected","label","spacer"]).length;o<t;o++)void 0!==this.conf[e[o]+"Class"]&&r('The configuration option "'+e[o]+'Class"',"classNames."+e[o],"4.3");for(void 0!==this.conf.counterClass&&r('The configuration option "counterClass"',"classNames.counters.counter","4.3"),o=0,t=(e=["pageNodetype","pageSelector","menuWrapperSelector","menuInjectMethod"]).length;o<t;o++)void 0!==this.conf[e[o]]&&r('The configuration option "'+e[o]+'"',"offCanvas."+e[o],"4.3");this.opts.onClick&&void 0!==this.opts.onClick.setLocationHref&&r('The option "onClick.setLocationHref"',"!onClick.preventDefault","4.1"),void 0!==this.conf.panelNodeType&&r('The configuration option "panelNodeType"',"panelNodetype","4.1")},p[l].prototype.___debug=function(){for(var e=["offCanvas","screenReader","scrollBugFix","autoHeight","backButton","columns","counters","dividers","drag","dropdown","iconbar","iconPanels","keyboardNavigation","lazySubmenus","navbars","pageScroll","rtl","searchfield","sectionIndexer","setSelected","sidebar","toggles"],o=0,t=e.length;o<t;o++)void 0!==this.opts[e[o]]&&void 0===p[l].addons[e[o]]&&u('The "'+e[o]+'" add-on is not available.');if(void 0===p[l].addons.searchfield&&void 0!==this.opts.navbars&&this.opts.navbars instanceof Array)for(var n=0;n<this.opts.navbars.length;n++)if(this.opts.navbars[n].content instanceof Array)for(var s=0;s<this.opts.navbars[n].content.length;s++)"searchfield"==this.opts.navbars[n].content[s]&&u('The "searchfield" add-on is not available.');void 0!==this.opts.searchfield&&this.conf.searchfield.submit&&(this.conf.searchfield.form||u('The "searchfield.submit" configuration option requires the "searchfield.form" configuration option to be set.'),this.conf.searchfield.clear&&u('It is not possible to use both the "searchfield.clear" and the "searchfield.submit" configuration options.'));var i=!1,a=!1,d=this.opts.extensions,h="";for(var r in d.constructor===Array&&(d={all:d}),d)h+=d[r]+" ";switch(this.opts.offCanvas&&(i="left",a="back"),!0){case-1<h.indexOf("position-right"):i="right";break;case-1<h.indexOf("position-top"):i="top",a="front";break;case-1<h.indexOf("position-bottom"):i="bottom",a="front"}switch(!0){case-1<h.indexOf("position-front"):a="front"}if("back"==a)switch(p("body").css("background-color")){case"":case"transparent":case"none":case"rgba(0,0,0,0)":case"rgba( 0, 0, 0, 0 )":case"rgba( 0,0,0,0 )":case"rgba(0, 0, 0, 0)":u("Set a background-color for the <BODY />.")}void 0!==this.opts.sidebar&&(this.opts.sidebar.collapsed.use||this.opts.sidebar.expanded.use)&&i&&a&&("left"!=i?u('Don\'t use the "sidebar" add-on with the "position-'+i+'" extension.'):"back"!=a&&u('Don\'t use the "sidebar" add-on with the "position-'+a+'" extension.')),void 0!==this.opts.dropdown&&this.opts.dropdown.drop&&i&&a&&("left"!=i?u('Don\'t use the "dropdown" add-on with the "position-'+i+'" extension.'):"back"!=a&&u('Don\'t use the "dropdown" add-on with the "position-'+a+'" extension.')),-1<h.indexOf("popup")&&i&&a&&("left"!=i?u('Don\'t use the "popup" extension with the "position-'+i+'" extension.'):"back"!=a&&u('Don\'t use the "popup" extension with the "position-'+a+'" extension.'));var f=-1<h.indexOf("mm-fx-menu-slide"),c=-1<h.indexOf("mm-fx-menu-zoom");-1<h.indexOf("mm-fx-panels-zoom")&&!this.opts.slidingSubmenus&&u('Don\'t use the "panels-zoom" effect in combination with the "slidingSubmenus" option set to "false".'),(f||c)&&(this.opts.offCanvas?("top"!=i&&"bottom"!=i||u("Don't use the \""+(f?"menu-slide":"menu-zoom")+'" effect in combination with the "position-'+i+'" extension.'),"back"!=a&&u("Don't use the \""+(f?"menu-slide":"menu-zoom")+'" effect in combination with the "position-'+a+'" extension.')):u("Don't use the \""+(f?"menu-slide":"menu-zoom")+'" effect in combination with the "offCanvas" option set to "false".'))}}(jQuery);

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-mediaqueries-touchevents-setclasses !*/
 !function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in d)if(d.hasOwnProperty(l)){if(e=[],n=d[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=c.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?c.className.baseVal=n:c.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,d,u="modernizr",p=i("div"),m=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:u+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+u,(m.fake?m:p).appendChild(a),m.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=u,m.fake&&(m.style.background="",m.style.overflow="hidden",d=c.style.overflow,c.style.overflow="hidden",c.appendChild(m)),l=t(p,e),m.fake?(m.parentNode.removeChild(m),c.style.overflow=d,c.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],d=[],u={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var c=n.documentElement,p="svg"===c.nodeName.toLowerCase(),m=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();u.mq=m,Modernizr.addTest("mediaqueries",m("only all"));var h=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];u._prefixes=h;var v=u.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");v(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete u.addTest,delete u.addAsyncTest;for(var y=0;y<Modernizr._q.length;y++)Modernizr._q[y]();e.Modernizr=Modernizr}(window,document);

/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */

!function (e) { var n = !1; if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) { var o = window.Cookies, t = window.Cookies = e(); t.noConflict = function () { return window.Cookies = o, t } } }(function () { function e() { for (var e = 0, n = {}; e < arguments.length; e++) { var o = arguments[e]; for (var t in o) n[t] = o[t] } return n } function n(o) { function t(n, r, i) { var c; if ("undefined" != typeof document) { if (arguments.length > 1) { if ("number" == typeof (i = e({ path: "/" }, t.defaults, i)).expires) { var a = new Date; a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a } i.expires = i.expires ? i.expires.toUTCString() : ""; try { c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c) } catch (e) { } r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape); var f = ""; for (var s in i) i[s] && (f += "; " + s, !0 !== i[s] && (f += "=" + i[s])); return document.cookie = n + "=" + r + f } n || (c = {}); for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) { var l = p[u].split("="), C = l.slice(1).join("="); '"' === C.charAt(0) && (C = C.slice(1, -1)); try { var g = l[0].replace(d, decodeURIComponent); if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try { C = JSON.parse(C) } catch (e) { } if (n === g) { c = C; break } n || (c[g] = C) } catch (e) { } } return c } } return t.set = t, t.get = function (e) { return t.call(t, e) }, t.getJSON = function () { return t.apply({ json: !0 }, [].slice.call(arguments)) }, t.defaults = {}, t.remove = function (n, o) { t(n, "", e(o, { expires: -1 })) }, t.withConverter = n, t } return n(function () { }) });


/*!
 * jQuery Smooth Scroll - v2.2.0 - 2017-05-05
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2017 Karl Swedberg
 * Licensed MIT
 */


!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){var b={},c={exclude:[],excludeWithin:[],offset:0,direction:"top",delegateSelector:null,scrollElement:null,scrollTarget:null,autoFocus:!1,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},d=function(b){var c=[],d=!1,e=b.dir&&"left"===b.dir?"scrollLeft":"scrollTop";return this.each(function(){var b=a(this);if(this!==document&&this!==window)return!document.scrollingElement||this!==document.documentElement&&this!==document.body?void(b[e]()>0?c.push(this):(b[e](1),d=b[e]()>0,d&&c.push(this),b[e](0))):(c.push(document.scrollingElement),!1)}),c.length||this.each(function(){this===document.documentElement&&"smooth"===a(this).css("scrollBehavior")&&(c=[this]),c.length||"BODY"!==this.nodeName||(c=[this])}),"first"===b.el&&c.length>1&&(c=[c[0]]),c},e=/^([\-\+]=)(\d+)/;a.fn.extend({scrollable:function(a){var b=d.call(this,{dir:a});return this.pushStack(b)},firstScrollable:function(a){var b=d.call(this,{el:"first",dir:a});return this.pushStack(b)},smoothScroll:function(b,c){if("options"===(b=b||{}))return c?this.each(function(){var b=a(this),d=a.extend(b.data("ssOpts")||{},c);a(this).data("ssOpts",d)}):this.first().data("ssOpts");var d=a.extend({},a.fn.smoothScroll.defaults,b),e=function(b){var c=function(a){return a.replace(/(:|\.|\/)/g,"\\$1")},e=this,f=a(this),g=a.extend({},d,f.data("ssOpts")||{}),h=d.exclude,i=g.excludeWithin,j=0,k=0,l=!0,m={},n=a.smoothScroll.filterPath(location.pathname),o=a.smoothScroll.filterPath(e.pathname),p=location.hostname===e.hostname||!e.hostname,q=g.scrollTarget||o===n,r=c(e.hash);if(r&&!a(r).length&&(l=!1),g.scrollTarget||p&&q&&r){for(;l&&j<h.length;)f.is(c(h[j++]))&&(l=!1);for(;l&&k<i.length;)f.closest(i[k++]).length&&(l=!1)}else l=!1;l&&(g.preventDefault&&b.preventDefault(),a.extend(m,g,{scrollTarget:g.scrollTarget||r,link:e}),a.smoothScroll(m))};return null!==b.delegateSelector?this.off("click.smoothscroll",b.delegateSelector).on("click.smoothscroll",b.delegateSelector,e):this.off("click.smoothscroll").on("click.smoothscroll",e),this}});var f=function(a){var b={relative:""},c="string"==typeof a&&e.exec(a);return"number"==typeof a?b.px=a:c&&(b.relative=c[1],b.px=parseFloat(c[2])||0),b},g=function(b){var c=a(b.scrollTarget);b.autoFocus&&c.length&&(c[0].focus(),c.is(document.activeElement)||(c.prop({tabIndex:-1}),c[0].focus())),b.afterScroll.call(b.link,b)};a.smoothScroll=function(c,d){if("options"===c&&"object"==typeof d)return a.extend(b,d);var e,h,i,j,k=f(c),l={},m=0,n="offset",o="scrollTop",p={},q={};k.px?e=a.extend({link:null},a.fn.smoothScroll.defaults,b):(e=a.extend({link:null},a.fn.smoothScroll.defaults,c||{},b),e.scrollElement&&(n="position","static"===e.scrollElement.css("position")&&e.scrollElement.css("position","relative")),d&&(k=f(d))),o="left"===e.direction?"scrollLeft":o,e.scrollElement?(h=e.scrollElement,k.px||/^(?:HTML|BODY)$/.test(h[0].nodeName)||(m=h[o]())):h=a("html, body").firstScrollable(e.direction),e.beforeScroll.call(h,e),l=k.px?k:{relative:"",px:a(e.scrollTarget)[n]()&&a(e.scrollTarget)[n]()[e.direction]||0},p[o]=l.relative+(l.px+m+e.offset),i=e.speed,"auto"===i&&(j=Math.abs(p[o]-h[o]()),i=j/e.autoCoefficient),q={duration:i,easing:e.easing,complete:function(){g(e)}},e.step&&(q.step=e.step),h.length?h.stop().animate(p,q):g(e)},a.smoothScroll.version="2.2.0",a.smoothScroll.filterPath=function(a){return a=a||"",a.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},a.fn.smoothScroll.defaults=c});

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

/**
* @version 1.3.2
* @author Marius Hansen <marius.o.hansen@gmail.com>
* @license MIT
* @description Easy parallax plugin using pure javascript. Cross browser support, including mobile platforms. Based on goodparallax
* @copyright © Marius Hansen 2019
*/
var windowHeight=window.innerHeight,windowHeightExtra=0,safari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),mobile=/Mobi/.test(navigator.userAgent);safari&&!mobile&&(windowHeightExtra=window.outerHeight-window.innerHeight),mobile&&(windowHeight=window.screen.availHeight,windowHeightExtra=(window.screen.availHeight-window.innerHeight)/2);var positionParallax=function(e,t,a,i){var n=e.top/t-windowHeightExtra;a[i].style.top=n+"px"},animateParallax=function(e,t){for(var a=0;e.length>a;a++){var i=e[a].parentElement.parentElement.getBoundingClientRect();0<=i.top+i.height&&i.top<=windowHeight&&positionParallax(i,t,e,a)}},calculateHeight=function(e,t){for(var a=0;e.length>a;a++){var i=e[a].parentElement.parentElement.getBoundingClientRect(),n=e[a].parentElement.parentElement.offsetTop,o=(windowHeight-i.height)/2,r=windowHeight>i.height+n?i.height+n-n/t:i.height+2*(o-o/t);e[a].style.height=r+2*windowHeightExtra+"px",positionParallax(i,t,e,a)}},universalParallax=function(){this.init=function(i){void 0===i&&(i={}),i={speed:void 0!==i.speed?i.speed:1.5,className:void 0!==i.className?i.className:"parallax"};for(var n=document.getElementsByClassName(i.className),e=0;n.length>e;e++){var t=document.createElement("div");n[e].parentNode.insertBefore(t,n[e]),t.appendChild(n[e]);var a=n[e].parentElement;a.className+="parallax__container","relative"!==window.getComputedStyle(a.parentElement,null).getPropertyValue("position")&&(a.parentElement.style.position="relative");var o=n[e].dataset.parallaxImage;void 0!==o&&(n[e].style.backgroundImage="url("+o+")",1===n[e].classList.length&&"parallax"===n[e].classList[0]&&(n[e].style.backgroundRepeat="no-repeat",n[e].style.backgroundPosition="center",n[e].style.backgroundSize="cover"))}document.addEventListener("readystatechange",function(e){var t,a;"complete"===e.target.readyState&&(t=n,(a=i.speed)<1&&(a=1),calculateHeight(t,a),mobile||window.addEventListener("resize",function(){windowHeight=window.innerHeight,calculateHeight(t,a)}),window.addEventListener("scroll",function(){animateParallax(t,a)}))})}};

/*! lazysizes - v5.2.2 */
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,a=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,l=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],i={},G=Array.prototype.forEach,J=function(e,t){if(!i[t]){i[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return i[t].test(e[$]("class")||"")&&i[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var i;if(i=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(i," "))}},V=function(t,i,e){var a=e?P:"removeEventListener";if(e){V(t,i)}r.forEach(function(e){t[a](e,i)})},X=function(e,t,i,a,r){var n=D.createEvent("Event");if(!i){i={}}i.instance=k;n.initEvent(t,!a,!r);n.detail=i;e.dispatchEvent(n);return n},Y=function(e,t){var i;if(!a&&(i=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}i({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,i){i=i||e.offsetWidth;while(i<H.minSize&&t&&!e._lazysizesWidth){i=t.offsetWidth;t=t.parentNode}return i},ee=function(){var i,a;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;i=true;a=false;while(e.length){e.shift()()}i=false};var e=function(e,t){if(i&&!t){e.apply(this,arguments)}else{n.push(e);if(!a){a=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(i,e){return e?function(){ee(i)}:function(){var e=this;var t=arguments;ee(function(){i.apply(e,t)})}},ie=function(e){var i;var a=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){i=false;a=f.now();e()};var s=l&&n>49?function(){l(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(i){return}i=true;t=r-(f.now()-a);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ae=function(e){var t,i;var a=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-i;if(e<a){I(n,a-e)}else{(l||r)(r)}};return function(){i=f.now();if(!t){t=I(n,a)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var N=0;var M=-1;var x=function(e){N--;if(!e||N<0||!e.target){N=0}};var W=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var S=function(e,t){var i;var a=e;var r=W(e);g-=t;b+=t;p-=t;C+=t;while(r&&(a=a.offsetParent)&&a!=D.body&&a!=O){r=(Z(a,"opacity")||1)>0;if(r&&Z(a,"overflow")!="visible"){i=a.getBoundingClientRect();r=C>i.left&&p<i.right&&b>i.top-1&&g<i.bottom+1}}return r};var t=function(){var e,t,i,a,r,n,s,l,o,u,f,c;var d=k.elements;if((h=H.loadMode)&&N<8&&(e=d.length)){t=0;M++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(l=d[t][$]("data-expand"))||!(n=l*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&N<1&&M>2&&h>2&&!D.hidden){w=f;M=0}else if(h>1&&M>1&&N<6){w=u}else{w=_}}if(o!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;o=n}i=d[t].getBoundingClientRect();if((b=i.bottom)>=s&&(g=i.top)<=z&&(C=i.right)>=s*c&&(p=i.left)<=y&&(b||C||p||g)&&(H.loadHidden||W(d[t]))&&(m&&N<3&&!l&&(h<3||M<4)||S(d[t],n))){R(d[t]);r=true;if(N>9){break}}else if(!r&&m&&!a&&N<4&&M<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!l&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){a=v[0]||d[t]}}if(a&&!r){R(a)}}};var i=ie(t);var B=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}x(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,L);X(t,"lazyloaded")};var a=te(B);var L=function(e){a({target:e.target})};var T=function(t,i){try{t.contentWindow.location.replace(i)}catch(e){t.src=i}};var F=function(e){var t;var i=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(i){e.setAttribute("srcset",i)}};var s=te(function(t,e,i,a,r){var n,s,l,o,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(a){if(i){K(t,H.autosizesClass)}else{t.setAttribute("sizes",a)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){l=t.parentNode;o=l&&j.test(l.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||o);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(x,2500);V(t,L,true)}if(o){G.call(l.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!o){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||o)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,"ls-is-cached")}B(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){N--}},true)});var R=function(e){if(e._lazyRace){return}var t;var i=n.test(e.nodeName);var a=i&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=a=="auto";if((r||!m)&&i&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;N++;s(e,t,r,a,i)};var r=ae(function(){H.loadMode=3;i()});var l=function(){if(H.loadMode==3){H.loadMode=2}r()};var o=function(){if(m){return}if(f.now()-e<999){I(o,999);return}m=true;H.loadMode=3;i();q("scroll",l,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",i,true);q("resize",i,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(i).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",i,true);O[P]("DOMAttrModified",i,true);setInterval(i,999)}q("hashchange",i,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,i,true)});if(/d$|^c/.test(D.readyState)){o()}else{q("load",o);D[P]("DOMContentLoaded",i);I(o,2e4)}if(k.elements.length){t();ee._lsFlush()}else{i()}},checkElems:i,unveil:R,_aLSL:l}}(),re=function(){var i;var n=te(function(e,t,i,a){var r,n,s;e._lazysizesWidth=a;a+="px";e.setAttribute("sizes",a);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",a)}}if(!i.detail.dataAttr){Y(e,i.detail)}});var a=function(e,t,i){var a;var r=e.parentNode;if(r){i=s(e,r,i);a=X(e,"lazybeforesizes",{width:i,dataAttr:!!t});if(!a.defaultPrevented){i=a.detail.width;if(i&&i!==e._lazysizesWidth){n(e,r,a,i)}}}};var e=function(){var e;var t=i.length;if(t){e=0;for(;e<t;e++){a(i[e])}}};var t=ae(e);return{_:function(){i=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:a}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});

/* instant.page v2.0.1 - (C) 2019 Alexandre Dieulot - https://instant.page/license */
window.onload = function() {
  var t,e,n,o=document.createElement("link"),s=o.relList&&o.relList.supports&&o.relList.supports("prefetch"),a=navigator.connection&&navigator.connection.saveData,i="instantAllowQueryString"in document.body.dataset,r="instantAllowExternalLinks"in document.body.dataset,d="instantWhitelist"in document.body.dataset,c=65,u=!1,l=!1;if("instantIntensity"in document.body.dataset)if("mousedown"==document.body.dataset.instantIntensity.substr(0,"mousedown".length))u=!0,"mousedown-only"==document.body.dataset.instantIntensity&&(l=!0);else{var _t=parseInt(document.body.dataset.instantIntensity);isNaN(_t)||(c=_t)}if(s&&!a){o.rel="prefetch",document.head.appendChild(o);var _s={capture:!0,passive:!0};l||document.addEventListener("touchstart",function(e){n=performance.now();var o=e.target.closest("a");m(o)&&(o.addEventListener("touchcancel",f,{passive:!0}),o.addEventListener("touchend",f,{passive:!0}),t=o.href,p(o.href))},_s),u?document.addEventListener("mousedown",function(e){var n=e.target.closest("a");m(n)&&(n.addEventListener("mouseout",h,{passive:!0}),t=n.href,p(n.href))},_s):document.addEventListener("mouseover",function(o){if(!(performance.now()-n<1100)){var a=o.target.closest("a");m(a)&&(a.addEventListener("mouseout",h,{passive:!0}),t=a.href,e=setTimeout(function(){p(a.href),e=void 0},c))}},_s)}function f(){t=void 0,v()}function h(n){n.relatedTarget&&n.target.closest("a")==n.relatedTarget.closest("a")||(e&&(clearTimeout(e),e=void 0),t=void 0,v())}function m(e){if(e&&e.href&&t!=e.href&&(!d||"instant"in e.dataset)&&(r||e.origin==location.origin||"instant"in e.dataset)&&["http:","https:"].includes(e.protocol)&&("http:"!=e.protocol||"https:"!=location.protocol)&&(i||!e.search||"instant"in e.dataset)&&!(e.hash&&e.pathname+e.search==location.pathname+location.search||"noInstant"in e.dataset))return!0}function p(t){o.href=t}function v(){o.removeAttribute("href")}
}

// Loads in script when called
var loadScript = function (name, url, callback) {
  if (Shopify.theme[name]) {
    callback;
  } else {
    $.ajax({
      url: url,
      dataType: 'script',
      success: callback,
      async: false
    });
  }
}


$(document)
  .on('shopify:block:select', function(e){

    var blockId = e.detail.blockId;
    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('shopify-section--slideshow')){
      Shopify.theme.jsSlideshow.blockSelect(blockId, $parentSection);
    }

    if ($parentSection.find('.map--container').length) {
      map.init();
    }

    if ($parentSection.find('.parallax-banner')) {
      $(this).find('.parallax__container > .parallax').unwrap();
      new universalParallax().init();
    }

});

$(document)
  .on('shopify:block:deselect', function(e){

    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('shopify-section--slideshow')){
      Shopify.theme.jsSlideshow.blockDeselect($parentSection);
    }

});

$(document)
  .on('shopify:section:load', function(e){

    // Shopify section as jQuery object
    var $section = $(e.target);

    // Vanilla js selection of Shopify section
    var section = document.getElementById('shopify-section-' + e.detail.sectionId);

    var sectionObjectUrl = $section.find('[data-theme-editor-load-script]').attr('src');

    // Check classes on schema and look for js (eg. jsMap)
    for (var i = 0; i < section.classList.length; i++) {
      if (section.classList[i].substring(0, 2) === "js"){
        var triggerClass = section.classList[i];

        // Check to see if section script exists
        if (typeof Shopify.theme[triggerClass] == 'undefined') {
          // make AJAX call to load script
          loadScript(triggerClass, sectionObjectUrl, function () {
            Shopify.theme[triggerClass].init($(section));
          });

        } else {
          if (Shopify.theme[triggerClass]) {
            //console.log('Section: ' + triggerClass + ' has been loaded.')
            Shopify.theme[triggerClass].init($(section));
          } else {
            //console.warn('Uh oh, ' + triggerClass + ' is referenced in section schema class, but can not be found. Make sure "z__' + triggerClass + '.js" and Shopify.theme.' + triggerClass + '.init() function exists.');
          }
        }
      }
    }

    utilities.enableDisclosure();

    // Call methods based on section classes
    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if (Shopify.theme_settings.newsletter_popup) {
      newsletter_popup.init();
    }

    if ($parentSection.hasClass('shopify-section--recommended-products')) {
      product.loadProductRecommendations();
    }

    if (Shopify.theme_settings.enable_autocomplete) {
      searchAutocomplete.init();
    }

    if ($parentSection.hasClass('shopify-section--cart-template')) {
      productFormListeners.init();
      cart.init();
    }

    if ($parentSection.hasClass('shopify-section--image-with-text-overlay')){
      banner_image.init();
      banner.init();
    }

    if ($parentSection.hasClass('shopify-section--map') || $parentSection.hasClass('shopify-section--page-contact-template') || $parentSection.hasClass('shopify-section--page-details-template')) {
      map.init();
    }

    if ($parentSection.hasClass('shopify-section--featured-product')) {
      product.init();
    }

    if ($parentSection.hasClass('shopify-section--featured-collection')) {
      collection.init();
      product.init();
      banner.init();
    }

    if ($parentSection.hasClass('shopify-section--featured-promotions')) {
      featured_promotions.init();
    }

    if ($parentSection.hasClass('shopify-section--image-with-text')) {
      animate_content.init();
    }

    if ($parentSection.hasClass('shopify-section--video')) {
      videoTheme.init();
      banner.init();
    }

    if ($parentSection.hasClass('shopify-section--product-template')) {
      collection.init();
      product.init();
    }

    if ($parentSection.hasClass('shopify-section--product-sidebar')){
      product.loadProductRecommendations();
    }

    if ($parentSection.hasClass('shopify-section--collection-template')) {
      banner_image.init();
      collection.init();
      product.init();
    }

    if ($parentSection.hasClass('shopify-section--page-contact-template')) {
      banner_image.init();
      banner.init();
    }

    if ($parentSection.hasClass('shopify-section--article-template')) {
      article.init();
    }

    if ($parentSection.hasClass('shopify-section--search-template')) {
      collection.init();
    }

    if ($parentSection.hasClass('shopify-section--page-banner-template')) {
      banner_image.init();
      banner.init();
    }

    if ($parentSection.hasClass('shopify-section--blog-template')) {
      banner_image.init();
      banner.init();
    }

    if ($parentSection.hasClass('shopify-section--header')) {
      banner_image.init();
      header.init();
    }

    if ($parentSection.hasClass('parallax-banner')) {
      $(this).find('.parallax__container > .parallax').unwrap();
      new universalParallax().init();
    }
});

$(document)
  .on('shopify:section:unload', function(e){

    utilities.unload();

    var $target = $(e.target);
    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('shopify-section--image-with-text-overlay')) {
      banner.unload($target);
    }

    if ($parentSection.hasClass('shopify-section--slideshow')) {
      Shopify.theme.jsSlideshow.unload($target);
    }

    if ($parentSection.hasClass('shopify-section--featured-product')) {
      product.unload($target);
    }

    if ($parentSection.hasClass('shopify-section--featured-collection')) {
      collection.unload($target);
    }

    if ($parentSection.hasClass('shopify-section--product-template')) {
      product.unload($target);
    }

    if ($parentSection.hasClass('shopify-section--collection-template')) {
      collection.unload($target);
    }
});

$(document)
  .on('shopify:section:select', function(e){

    // Shopify section as jQuery object
    var $section = $(e.target);

    // Vanilla js selection of Shopify section
    var section = document.getElementById('shopify-section-' + e.detail.sectionId);

    // Force show state when section is selected in theme editor
    for (var i = 0; i < section.classList.length; i++) {
      if (section.classList[i].substring(0, 2) === "js") {
        var triggerClass = section.classList[i];

        if (Shopify.theme[triggerClass].showThemeEditorState) {
          Shopify.theme[triggerClass].showThemeEditorState(e.detail.sectionId, $section);
        }
      }
    }

    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    header.init();
    banner_image.init();
    banner.init();

    $('.lightbox').fancybox();
});

$(document)
  .on('shopify:section:deselect', function(e){

    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

});

$(document)
  .on('shopify:section:reorder', function(e){

    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    header.init();
    banner_image.init();

});
