import{R as l}from"./react-99067adc.js";var f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=l.createContext&&l.createContext(f),o=globalThis&&globalThis.__assign||function(){return o=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++){r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},o.apply(this,arguments)},m=globalThis&&globalThis.__rest||function(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(e[n[a]]=t[n[a]]);return e};function g(t){return t&&t.map(function(r,e){return l.createElement(r.tag,o({key:e},r.attr),g(r.child))})}function d(t){return function(r){return l.createElement(y,o({attr:o({},t.attr)},r),g(t.child))}}function y(t){var r=function(e){var n=t.attr,a=t.size,c=t.title,h=m(t,["attr","size","title"]),s=a||e.size||"1em",i;return e.className&&(i=e.className),t.className&&(i=(i?i+" ":"")+t.className),l.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,h,{className:i,style:o(o({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),t.children)};return u!==void 0?l.createElement(u.Consumer,null,function(e){return r(e)}):r(f)}function b(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16"}},{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16"}}]})(t)}function w(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"}}]})(t)}export{w as F,b as a};
