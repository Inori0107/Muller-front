import{Z as k,r as y,U as V,o as c,d as h,w as r,b as o,h as d,c as i,k as g,F as b,t as n,an as v}from"./index-BJZfzVWU.js";import{b as m}from"./route-block-B_A1xBdJ.js";import{V as u}from"./VCol-EL3TIsdH.js";import{V as w}from"./VDivider-BkgaXzKR.js";import{V as x}from"./VDataTable-B9uhz6f_.js";import{V as P}from"./VRow-B9L5oeNy.js";import{V as A}from"./VContainer-C8Zp0cAo.js";import"./VList-DyPCym3H.js";import"./ssrBoot-CCh0nskH.js";import"./VChip-DQ_j5iXl.js";import"./VSlideGroup-CQV0Xx_G.js";const B=d("h1",{class:"text-center"},"訂單管理",-1),D={__name:"orderManage",setup(C){const{apiAuth:p}=v(),_=k(),s=y([]),f=[{title:"編號",key:"_id"},{title:"帳號",key:"user.account"},{title:"日期",key:"createdAt",value:t=>new Date(t.createdAt).toLocaleString()},{title:"商品",key:"cart_P",sortable:!1},{title:"金額",key:"price",value:t=>t.cart_P.reduce((a,e)=>a+e.quantity*e.p_id.price,0)}];return V(async()=>{var t,a;try{const{data:e}=await p.get("/order/product/all");s.value=e.result,console.log(s.value)}catch(e){console.log(e),_({text:((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),(t,a)=>(c(),h(A,null,{default:r(()=>[o(P,null,{default:r(()=>[o(u,{cols:"12"},{default:r(()=>[B]),_:1}),o(w),o(u,{cols:"12"},{default:r(()=>[o(x,{items:s.value,headers:f},{"item.cart_P":r(({item:e})=>[d("ul",null,[(c(!0),i(b,null,g(e.cart_P,l=>(c(),i("li",{key:l._id},n(l.p_id.name)+" * "+n(l.quantity),1))),128))])]),_:1},8,["items"])]),_:1})]),_:1})]),_:1}))}};typeof m=="function"&&m(D);export{D as default};
