(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"3iAQ":function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return u})),r.d(t,"default",(function(){return f}));var n=r("FdF9"),a=r("MX0m"),o=r.n(a),c=r("YNhk"),l=n.default.createElement,s=e=>{var{title:t,description:r,fullUrl:a,demoUrl:s,type:i}=e;return l(n.default.Fragment,null,l("div",{className:"jsx-3438415624 card"},l("div",{className:"jsx-3438415624"},l("h3",{className:"jsx-3438415624 card-title"},t),l("p",{className:"jsx-3438415624 card-description"},r," "),l("p",{className:"jsx-3438415624 svg-icon"},i),l("div",{className:"jsx-3438415624 eq-div-flex"},l(c.a,{mref:a},l("a",{className:"jsx-3438415624"},"view sourcecode on github")),l("br",{className:"jsx-3438415624"}),l(c.a,{href:s},l("a",{className:"jsx-3438415624"},"view demo live on site"))))),l(o.a,{id:"3438415624"},[".card.jsx-3438415624{outline:2px solid var(--c4);}"]))},i=n.default.createElement,u=!0;function f(e){var{projects:t}=e,{0:r,1:a}=Object(n.useState)(""),o=t.filter(e=>e.title.toLowerCase().includes(r.toLowerCase()));return i(n.default.Fragment,null,i("h1",null,"these are my projects"),i("p",null,"Feel free to check them out, I can only have JavaScript and HTML projects here because only they will run on this site"),i("input",{"aria-label":"Search projects",type:"text",onChange:e=>a(e.target.value),placeholder:"Search projects"}),o.map(e=>i(s,e)))}},YFqc:function(e,t,r){e.exports=r("cTJO")},YNhk:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=r("FdF9"),c=r("YFqc"),l=r.n(c),s=o.default.createElement;t.a=e=>{var{href:t,mref:r}=e,o=a(e,["href","mref"]);return s(l.a,n(r?{href:r}:{href:"".concat("/eulerthedestroyer").concat(t)},o))}},cTJO:function(e,t,r){"use strict";var n=r("284h");t.__esModule=!0,t.default=void 0;var a,o=n(r("FdF9")),c=r("elyg"),l=r("nOHt"),s=new Map,i=window.IntersectionObserver,u={};var f=(e,t)=>{var r=a||(i?a=new i(e=>{e.forEach(e=>{if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}})},{rootMargin:"200px"}):void 0);return r?(r.observe(e),s.set(e,t),()=>{try{r.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):()=>{}};function p(e,t,r,n){(0,c.isLocalURL)(t)&&(e.prefetch(t,r,n).catch(e=>{0}),u[t+"%"+r]=!0)}var d=function(e){var t=!1!==e.prefetch,[r,n]=o.default.useState(),a=(0,l.useRouter)(),s=a&&a.pathname||"/",{href:d,as:h}=o.default.useMemo(()=>{var[t,r]=(0,c.resolveHref)(s,e.href,!0);return{href:t,as:e.as?(0,c.resolveHref)(s,e.as):r||t}},[s,e.href,e.as]);o.default.useEffect(()=>{if(t&&i&&r&&r.tagName&&(0,c.isLocalURL)(d)&&!u[d+"%"+h])return f(r,()=>{p(a,d,h)})},[t,r,d,h,a]);var{children:v,replace:m,shallow:y,scroll:g,locale:w}=e;"string"===typeof v&&(v=o.default.createElement("a",null,v));var j=o.Children.only(v),b={ref:e=>{e&&n(e),j&&"object"===typeof j&&j.ref&&("function"===typeof j.ref?j.ref(e):"object"===typeof j.ref&&(j.ref.current=e))},onClick:e=>{j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,l,s){var{nodeName:i}=e.currentTarget;("A"!==i||!function(e){var{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==l&&(l=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o,locale:s}).then(e=>{e&&l&&(window.scrollTo(0,0),document.body.focus())}))}(e,a,d,h,m,y,g,w)}};return t&&(b.onMouseEnter=e=>{(0,c.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),p(a,d,h,{priority:!0}))}),(e.passHref||"a"===j.type&&!("href"in j.props))&&(b.href=(0,c.addBasePath)((0,c.addLocale)(h,"undefined"!==typeof w?w:a&&a.locale,a&&a.defaultLocale))),o.default.cloneElement(j,b)};t.default=d},rg9c:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-projects",function(){return r("3iAQ")}])}},[["rg9c",0,1,2,3]]]);