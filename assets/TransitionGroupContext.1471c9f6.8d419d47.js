import{J as p}from"./constants.480c1b1f.js";function i(t,o){if(t==null)return{};var e={},r=Object.keys(t),n,c;for(c=0;c<r.length;c++)n=r[c],!(o.indexOf(n)>=0)&&(e[n]=t[n]);return e}function u(t,o){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},u(t,o)}function y(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,u(t,o)}const O=p.createContext(null);export{i as _,y as u,O as y};
