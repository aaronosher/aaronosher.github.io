(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/SnT":function(e,t,r){"use strict";var a=[776,2359,2359,2367,2367,2984,3007,3021,3633,3635,3648,3657,4352,4449,4520];function n(e){if("string"!=typeof e)throw new Error("string cannot be undefined or null");for(var t=[],r=0,a=0;r<e.length;)c(e[r+(a+=i(r+a,e))])&&a++,s(e[r+a])&&a++,l(e[r+a])&&a++,u(e[r+a])?a++:(t.push(e.substring(r,r+a)),r+=a,a=0);return t}function i(e,t){var r=t[e];if(!function(e){return e&&f(e[0].charCodeAt(0),55296,56319)}(r)||e===t.length-1)return 1;var a=r+t[e+1],n=t.substring(e+2,e+5);return o(a)&&o(n)||function(e){return f(d(e),127995,127999)}(n)?4:2}function o(e){return f(d(e),127462,127487)}function s(e){return"string"==typeof e&&f(e.charCodeAt(0),65024,65039)}function l(e){return"string"==typeof e&&f(e.charCodeAt(0),8400,8447)}function c(e){return"string"==typeof e&&-1!==a.indexOf(e.charCodeAt(0))}function u(e){return"string"==typeof e&&8205===e.charCodeAt(0)}function d(e){return(e.charCodeAt(0)-55296<<10)+(e.charCodeAt(1)-56320)+65536}function f(e,t,r){return e>=t&&e<=r}e.exports=n,e.exports.substr=function(e,t,r){var a=n(e);if(void 0===t)return e;if(t>=a.length)return"";var i=a.length-t,o=t+(void 0===r?i:r);return o>t+i&&(o=void 0),a.slice(t,o).join("")}},"7JLk":function(e,t,r){e.exports={typewriter:"Greeting-module--typewriter--25wmj"}},"9eSz":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),s=a(r("8OQS")),l=a(r("pVnL")),c=a(r("q1tI")),u=a(r("17x9")),d=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,a=h(t||r||[]);return a&&a.src},h=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),g=function(e){var t=d(e),r=p(t);return m[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),r&&c.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function O(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function x(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function I(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+o+s+r+a+t+i+n+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=c.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(L,(0,l.default)({ref:t,src:r},i,{ariaHidden:o}));return a.length>1?c.default.createElement("picture",null,n(a),s):s})),L=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:r,srcSet:a,src:n},h,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var R=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=p(t))&&(m[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=e.loading,I=e.draggable,j=m||g;if(!j)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:R?1:0,transition:C?"opacity "+y+"ms":"none"},s),T="boolean"==typeof b?"lightgray":b,P={transitionDelay:y+"ms"},A=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&P,s,f),V={title:t,alt:this.state.isVisible?"":r,style:A,className:p,itemProp:S},H=this.state.isHydrated?h(j):j[0];if(m)return c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),T&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&P)}),H.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:V,imageVariants:j,generateSources:x}),H.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:V,imageVariants:j,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,w(j),c.default.createElement(L,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:r,title:t,loading:E},H,{imageVariants:j}))}}));if(g){var W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},i);return"inherit"===i.display&&delete W.display,c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},T&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:T,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},C&&P)}),H.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:V,imageVariants:j,generateSources:x}),H.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:V,imageVariants:j,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,w(j),c.default.createElement(L,{alt:r,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:r,title:t,loading:E},H,{imageVariants:j}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),N=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function T(e){return function(t,r,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[r]=e,n),t,"prop",a)}}R.propTypes={resolutions:C,sizes:N,fixed:T(u.default.oneOfType([C,u.default.arrayOf(C)])),fluid:T(u.default.oneOfType([N,u.default.arrayOf(N)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var P=R;t.default=P},IP2g:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return v}));r("E9XD");var a=r("7O5W"),n=r("17x9"),i=r.n(n),o=r("q1tI"),s=r.n(o);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){c(e,t,r[t])}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var h=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){!function(t){var r=function e(t,r,a){if(!l(r)||u(r)||d(r)||f(r)||s(r))return r;var n,i=0,o=0;if(c(r))for(n=[],o=r.length;i<o;i++)n.push(e(t,r[i],a));else for(var p in n={},r)Object.prototype.hasOwnProperty.call(r,p)&&(n[t(p,a)]=e(t,r[p],a));return n},a=function(e){return p(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1)},n=function(e){var t=a(e);return t.substr(0,1).toUpperCase()+t.substr(1)},i=function(e,t){return function(e,t){var r=(t=t||{}).separator||"_",a=t.split||/(?=[A-Z])/;return e.split(a).join(r)}(e,t).toLowerCase()},o=Object.prototype.toString,s=function(e){return"function"==typeof e},l=function(e){return e===Object(e)},c=function(e){return"[object Array]"==o.call(e)},u=function(e){return"[object Date]"==o.call(e)},d=function(e){return"[object RegExp]"==o.call(e)},f=function(e){return"[object Boolean]"==o.call(e)},p=function(e){return(e-=0)==e},h=function(e,t){var r=t&&"process"in t?t.process:t;return"function"!=typeof r?e:function(t,a){return r(t,e,a)}},m={camelize:a,decamelize:i,pascalize:n,depascalize:i,camelizeKeys:function(e,t){return r(h(a,t),e)},decamelizeKeys:function(e,t){return r(h(i,t),e,t)},pascalizeKeys:function(e,t){return r(h(n,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=m:t.humps=m}(p)}));function m(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,a=t.indexOf(":"),n=h.camelize(t.slice(0,a)),i=t.slice(a+1).trim();return n.startsWith("webkit")?e[(r=n,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[n]=i,e}),{})}var g=!1;try{g=!0}catch(w){}function b(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function y(e){return null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e){var t=e.icon,r=e.mask,n=e.symbol,i=e.className,o=e.title,s=y(t),l=b("classes",[].concat(f(function(e){var t,r=(c(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-inverse":e.inverse,"fa-border":e.border,"fa-li":e.listItem,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},"fa-".concat(e.size),null!==e.size),c(t,"fa-rotate-".concat(e.rotation),null!==e.rotation),c(t,"fa-pull-".concat(e.pull),null!==e.pull),t);return Object.keys(r).map((function(e){return r[e]?e:null})).filter((function(e){return e}))}(e)),f(i.split(" ")))),d=b("transform","string"==typeof e.transform?a.parse.transform(e.transform):e.transform),p=b("mask",y(r)),h=Object(a.icon)(s,u({},l,d,p,{symbol:n,title:o}));if(!h)return function(){var e;!g&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",s),null;var m=h.abstract,w={};return Object.keys(e).forEach((function(t){v.defaultProps.hasOwnProperty(t)||(w[t]=e[t])})),S(m[0],w)}v.displayName="FontAwesomeIcon",v.propTypes={border:i.a.bool,className:i.a.string,mask:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),fixedWidth:i.a.bool,inverse:i.a.bool,flip:i.a.oneOf(["horizontal","vertical","both"]),icon:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),listItem:i.a.bool,pull:i.a.oneOf(["right","left"]),pulse:i.a.bool,rotation:i.a.oneOf([90,180,270]),size:i.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i.a.bool,symbol:i.a.oneOfType([i.a.bool,i.a.string]),title:i.a.string,transform:i.a.oneOfType([i.a.string,i.a.object])},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null};var S=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var n=(r.children||[]).map((function(r){return e(t,r)})),i=Object.keys(r.attributes||{}).reduce((function(e,t){var a=r.attributes[t];switch(t){case"class":e.attrs.className=a,delete r.attributes.class;break;case"style":e.attrs.style=m(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[h.camelize(t)]=a}return e}),{attrs:{}}),o=a.style,s=void 0===o?{}:o,l=d(a,["style"]);return i.attrs.style=u({},i.attrs.style,s),t.apply(void 0,[r.tag,u({},i.attrs,l)].concat(f(n)))}.bind(null,s.a.createElement)}).call(this,r("yLpj"))},QeBL:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),i=r("IP2g"),o=r("8tEE"),s=r("TBFr"),l=r("nQb1");function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=r("dI71"),d=r("/SnT"),f=r.n(d),p=r("7JLk"),h=function(e){function t(t){var r;return(r=e.call(this,t)||this).typewrite=r.typewrite.bind(c(r)),r.cursor=r.cursor.bind(c(r)),r.state={greetingText:t.children,visible:!1,cursor:!1,cursorInterval:setInterval(r.cursor,700),finished:!1},setTimeout(r.typewrite,1e3),r}Object(u.a)(t,e);var r=t.prototype;return r.cursor=function(){var e=this.state,t=e.cursor;e.visible&&this.setState({cursor:!t})},r.typewrite=function(){var e=this,t=this.props.children,r=this.state.cursorInterval,a=1,n=setInterval((function(){if(a==t.length)return clearInterval(n),clearInterval(r),void e.setState({cursor:!1,finished:!0});e.setState({greetingText:f.a.substr(t,0,a),visible:!0}),console.log("type"),a++}),2500/t.length)},r.render=function(){var e=this.state,t=e.greetingText,r=e.visible,i=e.cursor,o=e.finished;return n.a.createElement(a.Fragment,null,n.a.createElement("div",{className:p.typewriter,style:{visibility:r?"visible":"hidden"}},n.a.createElement("h1",null,t,!o&&n.a.createElement("span",{style:{visibility:i?"visible":"hidden"}},"_"))))},t}(a.Component);h.defaultProps={children:"Hi, I'm Aaron. 👋"};var m=r("wksi"),g=r("9eSz"),b=r.n(g),y=r("1Yd/");t.default=function(e){var t=e.data;return n.a.createElement(s.a,null,n.a.createElement(y.a,{title:"About"}),n.a.createElement("div",{className:m.container},n.a.createElement("div",{className:m.portraitContainer},n.a.createElement(b.a,{fluid:t.aaron.childImageSharp.fluid,className:m.portrait,alt:"Portrait of Aaron"})),n.a.createElement(h,null),n.a.createElement("div",{className:m.bio},"I study computer science at the"," ",n.a.createElement(l.a,{href:"https://cs.nott.ac.uk"},"University of Nottingham"),", am the president of"," ",n.a.createElement(l.a,{href:"https://hacksocnotts.co.uk"},"HackSoc"),", a Coach at"," ",n.a.createElement(l.a,{href:"https://mlh.io/eu"},"Major League Hacking"),", and co-founder of"," ",n.a.createElement(l.a,{href:"https://hackathons.org.uk"},"Hackathons UK"),"."),n.a.createElement("div",{className:m.brandButtons},n.a.createElement(l.a,{href:"https://linkedin.com/in/aaronosher"},n.a.createElement(i.a,{icon:o.b,color:"black",className:"icon",size:"2x"})),n.a.createElement(l.a,{href:"https://twitter.com/aaronosher"},n.a.createElement(i.a,{icon:o.c,color:"black",className:"icon",size:"2x"})),n.a.createElement(l.a,{href:"https://github.com/aaronosher"},n.a.createElement(i.a,{icon:o.a,color:"black",className:"icon",size:"2x"})))))}},nQb1:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a);t.a=function(e){return n.a.createElement("a",{href:e.href,target:"_blank",rel:"noopener noreferrer"},e.children)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-959cf1cac973833f1387.js.map