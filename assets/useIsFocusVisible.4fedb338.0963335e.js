import{r as s}from"./constants.480c1b1f.js";let i=!0,c=!1,u;const d={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&d[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function m(t){t.metaKey||t.altKey||t.ctrlKey||(i=!0)}function o(){i=!1}function f(){this.visibilityState==="hidden"&&c&&(i=!0)}function y(t){t.addEventListener("keydown",m,!0),t.addEventListener("mousedown",o,!0),t.addEventListener("pointerdown",o,!0),t.addEventListener("touchstart",o,!0),t.addEventListener("visibilitychange",f,!0)}function w(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return i||l(e)}function b(){const t=s.exports.useCallback(r=>{r!=null&&y(r.ownerDocument)},[]),e=s.exports.useRef(!1);function n(){return e.current?(c=!0,window.clearTimeout(u),u=window.setTimeout(()=>{c=!1},100),e.current=!1,!0):!1}function a(r){return w(r)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:a,onBlur:n,ref:t}}export{b as m};
