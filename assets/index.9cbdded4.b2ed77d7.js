import{H as I,F as T,B as k,w as s,c as B,L as H,f as U,j as O,D as P}from"./useThemeProps.a5d5d6c6.aac3a44a.js";import{r as e}from"./constants.480c1b1f.js";import"./index.a8a59334.605faa85.js";import{n as X,e as Y}from"./utils.10c27212.79cf5979.js";import{n as Z}from"./useFormControl.6c63a0c0.82b49e76.js";import{r as pr}from"./useFormControl.6c63a0c0.82b49e76.js";import{m as w}from"./QueryBuilderMaterial.5f9a43c3.js";import{a as u}from"./isMuiElement.55d010ec.f28fbc6f.js";import"./main.6d520c35.js";/* empty css                           */function _(r){return I("MuiFormControl",r)}const G=T("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]),dr=G,J=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],K=r=>{const{classes:o,margin:i,fullWidth:t}=r,d={root:["root",i!=="none"&&`margin${B(i)}`,t&&"fullWidth"]};return P(d,_,o)},Q=k("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:r},o)=>s({},o.root,o[`margin${B(r.margin)}`],r.fullWidth&&o.fullWidth)})(({ownerState:r})=>s({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},r.margin==="normal"&&{marginTop:16,marginBottom:8},r.margin==="dense"&&{marginTop:8,marginBottom:4},r.fullWidth&&{width:"100%"})),V=e.exports.forwardRef(function(r,o){const i=H({props:r,name:"MuiFormControl"}),{children:t,className:d,color:c="primary",component:p="div",disabled:l=!1,error:f=!1,focused:h,fullWidth:g=!1,hiddenLabel:v=!1,margin:N="none",required:C=!1,size:b="medium",variant:x="outlined"}=i,$=U(i,J),W=s({},i,{color:c,component:p,disabled:l,error:f,fullWidth:g,hiddenLabel:v,margin:N,required:C,size:b,variant:x}),y=K(W),[z,D]=e.exports.useState(()=>{let a=!1;return t&&e.exports.Children.forEach(t,n=>{if(!u(n,["Input","Select"]))return;const L=u(n,["Select"])?n.props.input:n;L&&X(L.props)&&(a=!0)}),a}),[M,F]=e.exports.useState(()=>{let a=!1;return t&&e.exports.Children.forEach(t,n=>{!u(n,["Input","Select"])||Y(n.props,!0)&&(a=!0)}),a}),[S,m]=e.exports.useState(!1);l&&S&&m(!1);const q=h!==void 0&&!l?h:S;let E;const R=e.exports.useCallback(()=>{F(!0)},[]),j=e.exports.useCallback(()=>{F(!1)},[]),A={adornedStart:z,setAdornedStart:D,color:c,disabled:l,error:f,filled:M,focused:q,fullWidth:g,hiddenLabel:v,size:b,onBlur:()=>{m(!1)},onEmpty:j,onFilled:R,onFocus:()=>{m(!0)},registerEffect:E,required:C,variant:x};return w(Z.Provider,{value:A,children:w(Q,s({as:p,ownerState:W,className:O(y.root,d),ref:o},$,{children:t}))})}),mr=V;export{mr as default,dr as formControlClasses,_ as getFormControlUtilityClasses,pr as useFormControl};
