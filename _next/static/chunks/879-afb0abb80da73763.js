(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[879],{3576:function(e,t,r){"use strict";var n=r(5893),o=r(1664),a=r.n(o);t.Z=function(e){var t=e.color,r=e.href,o=void 0===r?"#":r,l=e.download,i=void 0!==l&&l,c=e.className,u=void 0===c?"":c,s=e.target,f=void 0===s?"_self":s,d=e.children,p="red"===t?"text-white bg-red-400 border-red-500":"text-white bg-gray-600 border-gray-700";return(0,n.jsx)(a(),{href:o,passHref:!0,children:(0,n.jsx)("a",{className:"p-3 text-sm uppercase border rounded-lg shadow-md transition-colors text-center whitespace-nowrap ".concat(p," hover:text-gray-600 hover:bg-gray-100 hover:border-gray-200 ").concat(u),download:i,target:f,rel:"noopener noreferrer",children:d})})}},5643:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5893),o=r(9008),a=r(4726),l=function(e){e.children;return(0,n.jsxs)("footer",{className:"pt-10 pb-6 text-center text-base text-gray-600",children:["Design \ud83c\udfa8 by ",(0,n.jsx)(a.Z,{href:"https://github.com/nmuelle1slcc",target:"_blank",children:"Natalie Mueller"})]})},i=function(e){var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("title",{children:"Natalie Mueller - SLCC Student ePortfolio"}),(0,n.jsx)("meta",{name:"description",content:"SLCC Student ePortfolio for Natalie Mueller"}),(0,n.jsx)("meta",{property:"og:title",content:"Natalie Mueller - SLCC Student ePortfolio"}),(0,n.jsx)("meta",{property:"og:description",content:"SLCC Student ePortfolio for Natalie Mueller"}),(0,n.jsx)("meta",{property:"og:url",content:"nmuelle1slcc.github.io"}),(0,n.jsx)("meta",{name:"twitter:title",content:"Natalie Mueller - SLCC Student ePortfolio"}),(0,n.jsx)("meta",{name:"twitter:description",content:"SLCC Student ePortfolio for Natalie Mueller"}),(0,n.jsx)("meta",{property:"twitter:url",content:"nmuelle1slcc.github.io"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"/images/preview.png?height=536&pad_color=a8edea&width=1026"}),(0,n.jsx)("meta",{property:"og:image:secure_url",content:"/images/preview.png?height=536&pad_color=a8edea&width=1026"}),(0,n.jsx)("meta",{property:"og:image:width",content:"1026"}),(0,n.jsx)("meta",{property:"og:image:height",content:"536"}),(0,n.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{property:"twitter:domain",content:"nmuelle1slcc.github.io"}),(0,n.jsx)("meta",{property:"twitter:text:title",content:"Natalie Mueller - SLCC Student ePortfolio"}),(0,n.jsx)("meta",{property:"twitter:image",content:"/images/preview.png"}),(0,n.jsx)("meta",{property:"msapplication-TileColor",content:"#da532c"}),(0,n.jsx)("meta",{property:"theme-color",content:"#a8edea"})]}),(0,n.jsxs)("div",{className:"container p-3 flex flex-col min-h-screen mx-auto text-lg text-gray-800",children:[(0,n.jsx)("main",{className:"flex-grow",children:t}),(0,n.jsx)(l,{})]})]})}},4726:function(e,t,r){"use strict";var n=r(5893),o=r(1664),a=r.n(o);t.Z=function(e){var t=e.href,r=void 0===t?"#":t,o=e.target,l=void 0===o?"_self":o,i=e.children;return(0,n.jsx)(a(),{href:r,passHref:!0,children:(0,n.jsx)("a",{target:l,className:"underline hover:text-red-400",children:i})})}},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},i=r(1003),c=r(880),u=r(9246);var s={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),a=l.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,m=l.default.useRef(d),h=l.default.useRef(p),g=e.children,y=e.replace,v=e.shallow,b=e.scroll,x=e.locale;"string"===typeof g&&(g=l.default.createElement("a",null,g));var j=(t=l.default.Children.only(g))&&"object"===typeof t&&t.ref,w=o(u.useIntersection({rootMargin:"200px"}),3),C=w[0],S=w[1],M=w[2],L=l.default.useCallback((function(e){h.current===p&&m.current===d||(M(),h.current=p,m.current=d),C(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[p,j,d,M,C]);l.default.useEffect((function(){var e=S&&r&&i.isLocalURL(d),t="undefined"!==typeof x?x:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,S,x,r,n]);var _={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:l}))}(e,n,d,p,y,v,b,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof x?x:n&&n.locale,E=n&&n.isLocaleDomain&&i.getDomainLocale(p,N,n&&n.locales,n&&n.domainLocales);_.href=E||i.addBasePath(i.addLocale(p,N,n&&n.defaultLocale))}return l.default.cloneElement(t,_)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],m=o(a.useState(t?t.current:null),2),h=m[0],g=m[1],y=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),u.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),c.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:r}))}),[n,h,r,d]),v=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!i&&!d){var e=l.requestIdleCallback((function(){return p(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&g(t.current)}),[t]),[y,d,v]};var a=r(7294),l=r(4686),i="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)}}]);