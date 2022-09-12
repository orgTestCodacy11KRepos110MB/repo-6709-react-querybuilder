import{H as b,F as $,B as l,c as o,w as i,U as v,e as k,g as f,L as S,f as x,j as y,D as C}from"./useThemeProps.a5d5d6c6.aac3a44a.js";import{r as z}from"./constants.480c1b1f.js";import"./index.a8a59334.605faa85.js";import{u as B}from"./SwitchBase.4af3d418.170067a7.js";import{m as g,U as R}from"./QueryBuilderMaterial.5f9a43c3.js";import"./refType.47c574f0.0e1578ef.js";import"./main.6d520c35.js";import"./ButtonBase.3ffc38d6.0ca95c7c.js";import"./TransitionGroupContext.1471c9f6.8d419d47.js";import"./elementTypeAcceptingRef.3f46c6c6.69c462ff.js";import"./useFormControl.6c63a0c0.82b49e76.js";import"./useControlled.c2328b4a.b48dee26.js";/* empty css                           */import"./useIsFocusVisible.4fedb338.0963335e.js";import"./useEventCallback.3a06ade6.0f83143f.js";import"./useEnhancedEffect.cb67364c.ffd0bb6b.js";import"./useForkRef.659eae06.f5e4dcf5.js";function M(e){return b("MuiSwitch",e)}const D=$("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),a=D,N=["className","color","edge","size","sx"],U=e=>{const{classes:t,edge:r,size:n,color:d,checked:h,disabled:p}=e,m={root:["root",r&&`edge${o(r)}`,`size${o(n)}`],switchBase:["switchBase",`color${o(d)}`,h&&"checked",p&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=C(m,M,t);return i({},t,u)},I=l("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.edge&&t[`edge${o(r.edge)}`],t[`size${o(r.size)}`]]}})(({ownerState:e})=>i({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${a.thumb}`]:{width:16,height:16},[`& .${a.switchBase}`]:{padding:4,[`&.${a.checked}`]:{transform:"translateX(16px)"}}})),O=l(B,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.switchBase,{[`& .${a.input}`]:t.input},r.color!=="default"&&t[`color${o(r.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${a.checked}`]:{transform:"translateX(20px)"},[`&.${a.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${a.checked} + .${a.track}`]:{opacity:.5},[`&.${a.disabled} + .${a.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${a.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>i({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:v(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${a.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:v(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${a.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${e.palette.mode==="light"?k(e.palette[t.color].main,.62):f(e.palette[t.color].main,.55)}`}},[`&.${a.checked} + .${a.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}})),T=l("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),j=l("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),A=z.exports.forwardRef(function(e,t){const r=S({props:e,name:"MuiSwitch"}),{className:n,color:d="primary",edge:h=!1,size:p="medium",sx:m}=r,u=x(r,N),s=i({},r,{color:d,edge:h,size:p}),c=U(s),w=g(j,{className:c.thumb,ownerState:s});return R(I,{className:y(c.root,n),sx:m,ownerState:s,children:[g(O,i({type:"checkbox",icon:w,checkedIcon:w,ref:t,ownerState:s},u,{classes:i({},c,{root:c.switchBase})})),g(T,{className:c.track,ownerState:s})]})}),te=A;export{te as default,M as getSwitchUtilityClass,a as switchClasses};
