/*! For license information please see component---src-pages-activities-tsx-7290b161f9c2a22775f5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1QCq":function(e,t,n){e.exports={container:"Activites-module--container--37xnN"}},"7Ns6":function(e,t,n){e.exports={navigation:"Navigation-module--navigation--jv6LY",appear:"Navigation-module--appear--2MFlG",active:"Navigation-module--active--FqC11"}},TBFr:function(e,t,n){"use strict";var i=n("dI71"),a=n("q1tI"),r=n.n(a),c=n("vfMV"),o=n("TSYQ"),s=n.n(o),l=n("Wbzz"),u=n("7Ns6"),m=function(){var e=Object(l.useStaticQuery)("1419723371");return r.a.createElement("div",{className:u.navigation},r.a.createElement(l.Link,{to:"/",activeClassName:u.active},"About"),r.a.createElement("a",{href:e.file.publicURL,target:"_blank",rel:"noreferrer noopener"},"CV"))},p=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.size,i=s()(c.App,"medium"===n&&c.medium,"large"===n&&c.medium);return r.a.createElement(a.Fragment,null,r.a.createElement(m,null),r.a.createElement("div",{className:i},t))},t}(a.Component);p.defaultProps={size:"small"};t.a=p},TSYQ:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)&&i.length){var c=a.apply(null,i);c&&e.push(c)}else if("object"===r)for(var o in i)n.call(i,o)&&i[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(i=function(){return a}.apply(t,[]))||(e.exports=i)}()},exI9:function(e,t,n){e.exports={container:"Activity-module--container--3d1_h",thumb:"Activity-module--thumb--1XEsB",thumbHover:"Activity-module--thumb-hover--1znw8",title:"Activity-module--title--2q9kn",description:"Activity-module--description--2wjNe",aHover:"Activity-module--a-hover--3NEYE"}},lOxX:function(e,t,n){"use strict";n.r(t);var i=n("dI71"),a=n("q1tI"),r=n.n(a),c=n("TBFr"),o=n("exI9"),s=n("nQb1"),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props.activity;return r.a.createElement("div",{className:o.container},r.a.createElement("h3",{className:o.title},e.title),e.image&&e.link&&r.a.createElement(s.a,{href:e.link},r.a.createElement("img",{src:e.image,className:o.thumb})),e.image&&!e.link&&r.a.createElement("img",{src:e.image,className:o.thumb}),r.a.createElement("p",{className:o.description},e.description))},t}(a.Component),u=n("1QCq"),m=n("qteF"),p=n.n(m),d=[{title:"President of HackSoc",description:r.a.createElement(a.Fragment,null,"I picked up the reigns of HackSoc as president in March 2018. I'm currently on my second term as president. I'm responsible for the general activites of the society, as well as overseeing the organising of our annual hackathon, ",r.a.createElement(s.a,{href:"https://hacknotts.com"},"HackNotts"),". In my time as president, I've overhauled the way the society is run and have improved my leadership skills."),link:"https://hacksocnotts.co.uk",image:p.a}],g=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return r.a.createElement(c.a,{size:"medium"},r.a.createElement("div",{className:u.container},r.a.createElement("h1",null,"Activities"),d.map((function(e,t){return r.a.createElement(l,{activity:e,key:t})}))))},t}(a.Component);t.default=g},nQb1:function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i);t.a=function(e){return a.a.createElement("a",{href:e.href,target:"_blank",rel:"noopener noreferrer"},e.children)}},qteF:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3OTMuNiAxMDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3OTMuNiAxMDAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+Cjx0aXRsZT5WXzAxIFdoaXRlPC90aXRsZT4KPGcgaWQ9InZfMDFfV2hpdGUiPgoJPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iNTI5LjEsODIgNTI5LjEsMTY0LjkgNjYxLjQsMjQ3LjggNjYxLjQsMTY0LjkgNzkzLjcsMjQ3LjggNzkzLjcsNzE3LjEgMzk2LjgsNDc4LjEgMCw3MTcuMSAwLDI0OC4yIAoJCTEzMi4zLDE2NS4zIDEzMi4zLDI0OC4yIDI2NC41LDE2NS4zIDI2NC41LDgyLjQgMjY0LjUsODMuMyAzOTYuOCwwLjQgMzk2LjgsMCA1MjkuMSw4Mi45IAkiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzk2LjgsNTAyIDAsNzQxIDAsMTAwMCAzOTYuOCw3NjQuOCA3OTMuNywxMDAwIDc5My43LDc0MSAJIi8+CjwvZz4KPC9zdmc+Cg=="},vfMV:function(e,t,n){e.exports={particlesBg:"Container-module--particlesBg--3fStE",App:"Container-module--App--2ibAF",fadeUp:"Container-module--fade-up--1t8WK",medium:"Container-module--medium--m4BII"}}}]);
//# sourceMappingURL=component---src-pages-activities-tsx-7290b161f9c2a22775f5.js.map