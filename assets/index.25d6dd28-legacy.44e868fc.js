!function(){function e(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}System.register(["./useThemeProps.a5d5d6c6-legacy.6329688d.js","./constants-legacy.0c648b7e.js","./index.a8a59334-legacy.f12bfba8.js","./QueryBuilderMaterial-legacy.440b30ac.js","./ButtonBase.3ffc38d6-legacy.b982cff7.js","./main-legacy.dd9da0e8.js","./TransitionGroupContext.1471c9f6-legacy.1ee555fd.js","./refType.47c574f0-legacy.258f7ac3.js","./elementTypeAcceptingRef.3f46c6c6-legacy.a4fdf747.js","./useIsFocusVisible.4fedb338-legacy.587547a2.js","./useEventCallback.3a06ade6-legacy.7700ad23.js","./useEnhancedEffect.cb67364c-legacy.e652c32b.js","./useForkRef.659eae06-legacy.723b7b81.js","./github-fork-ribbon-legacy.bb4b9c75.js"],(function(o,t){"use strict";var a,n,i,r,c,l,s,d,u,p,v,b,f,h,g,m;return{setters:[function(e){a=e.H,n=e.F,i=e.B,r=e.C,c=e.c,l=e.w,s=e.U,d=e.I,u=e.L,p=e.f,v=e.j,b=e.D},function(e){f=e.r},function(){},function(e){h=e.m,g=e.U},function(e){m=e.$},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){function t(e){return a("MuiButton",e)}o("getButtonUtilityClass",t);var x=n("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),y=o("buttonClasses",x),S=f.exports.createContext({}),z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],w=["root"],C=function(e){return l({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},I=i(m,{shouldForwardProp:function(e){return r(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,o[t.variant],o["".concat(t.variant).concat(c(t.color))],o["size".concat(c(t.size))],o["".concat(t.variant,"Size").concat(c(t.size))],"inherit"===t.color&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})((function(o){var t,a,n,i=o.theme,r=o.ownerState;return l({},i.typography.button,(e(t={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":l({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):s(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===r.variant&&"inherit"!==r.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[r.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):s(i.palette[r.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===r.variant&&"inherit"!==r.color&&{border:"1px solid ".concat((i.vars||i).palette[r.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[r.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):s(i.palette[r.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===r.variant&&{backgroundColor:(i.vars||i).palette.grey.A100,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===r.variant&&"inherit"!==r.color&&{backgroundColor:(i.vars||i).palette[r.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[r.color].main}}),"&:active":l({},"contained"===r.variant&&{boxShadow:(i.vars||i).shadows[8]})},"&.".concat(y.focusVisible),l({},"contained"===r.variant&&{boxShadow:(i.vars||i).shadows[6]})),e(t,"&.".concat(y.disabled),l({color:(i.vars||i).palette.action.disabled},"outlined"===r.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"outlined"===r.variant&&"secondary"===r.color&&{border:"1px solid ".concat((i.vars||i).palette.action.disabled)},"contained"===r.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),t),"text"===r.variant&&{padding:"6px 8px"},"text"===r.variant&&"inherit"!==r.color&&{color:(i.vars||i).palette[r.color].main},"outlined"===r.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===r.variant&&"inherit"!==r.color&&{color:(i.vars||i).palette[r.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[r.color].mainChannel," / 0.5)"):"1px solid ".concat(s(i.palette[r.color].main,.5))},"contained"===r.variant&&{color:i.vars?i.vars.palette.text.primary:null==(a=(n=i.palette).getContrastText)?void 0:a.call(n,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],boxShadow:(i.vars||i).shadows[2]},"contained"===r.variant&&"inherit"!==r.color&&{color:(i.vars||i).palette[r.color].contrastText,backgroundColor:(i.vars||i).palette[r.color].main},"inherit"===r.color&&{color:"inherit",borderColor:"currentColor"},"small"===r.size&&"text"===r.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===r.size&&"text"===r.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===r.size&&"outlined"===r.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===r.size&&"outlined"===r.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===r.size&&"contained"===r.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===r.size&&"contained"===r.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},r.fullWidth&&{width:"100%"})}),(function(o){var t;return o.ownerState.disableElevation&&(e(t={boxShadow:"none","&:hover":{boxShadow:"none"}},"&.".concat(y.focusVisible),{boxShadow:"none"}),e(t,"&:active",{boxShadow:"none"}),e(t,"&.".concat(y.disabled),{boxShadow:"none"}),t)})),R=i("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,o){var t=e.ownerState;return[o.startIcon,o["iconSize".concat(c(t.size))]]}})((function(e){var o=e.ownerState;return l({display:"inherit",marginRight:8,marginLeft:-4},"small"===o.size&&{marginLeft:-2},C(o))})),k=i("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,o){var t=e.ownerState;return[o.endIcon,o["iconSize".concat(c(t.size))]]}})((function(e){var o=e.ownerState;return l({display:"inherit",marginRight:-4,marginLeft:8},"small"===o.size&&{marginRight:-2},C(o))}));o("default",f.exports.forwardRef((function(e,o){var a=f.exports.useContext(S),n=d(a,e),i=u({props:n,name:"MuiButton"}),r=i.children,s=i.color,m=void 0===s?"primary":s,x=i.component,y=void 0===x?"button":x,C=i.className,j=i.disabled,E=void 0!==j&&j,B=i.disableElevation,W=void 0!==B&&B,M=i.disableFocusRipple,T=void 0!==M&&M,L=i.endIcon,N=i.focusVisibleClassName,V=i.fullWidth,F=void 0!==V&&V,O=i.size,P=void 0===O?"medium":O,U=i.startIcon,A=i.type,D=i.variant,G=void 0===D?"text":D,H=p(i,z),Q=l({},i,{color:m,component:y,disabled:E,disableElevation:W,disableFocusRipple:T,fullWidth:F,size:P,type:A,variant:G}),$=function(e){var o=e.color,a=e.disableElevation,n=e.fullWidth,i=e.size,r=e.variant,s=e.classes,d={root:["root",r,"".concat(r).concat(c(o)),"size".concat(c(i)),"".concat(r,"Size").concat(c(i)),"inherit"===o&&"colorInherit",a&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(c(i))],endIcon:["endIcon","iconSize".concat(c(i))]},u=b(d,t,s);return l({},s,u)}(Q),q=$.root,J=p($,w),K=U&&h(R,{className:J.startIcon,ownerState:Q,children:U}),X=L&&h(k,{className:J.endIcon,ownerState:Q,children:L});return g(I,l({ownerState:Q,className:v(a.className,q,C),component:y,disabled:E,focusRipple:!T,focusVisibleClassName:v(J.focusVisible,N),ref:o,type:A},H,{classes:J,children:[K,r,X]}))})))}}}))}();
