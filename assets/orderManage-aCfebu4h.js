import{n as k,r as y,C as V,o as c,d as h,w as r,b as o,h as d,c as i,k as g,F as b,t as n,x}from"./index-CVvZw8qE.js";import{b as m}from"./route-block-B_A1xBdJ.js";import{V as u}from"./VCol-B5GCxmh0.js";import{V as v}from"./VDataTable-C3uqjKtA.js";import{V as w}from"./VRow-DTsnVxnQ.js";import{V as P}from"./VContainer-VPoMaffN.js";import"./VList-BnGgGKiW.js";import"./ssrBoot-CGpYOCTX.js";import"./VDivider-uAH7WjID.js";import"./VChip-CjBHi-vs.js";import"./VSlideGroup-DKGPLyO2.js";const A=d("h1",{class:"text-center"},"訂單管理",-1),B={__name:"orderManage",setup(C){const{apiAuth:p}=x(),_=k(),s=y([]),f=[{title:"編號",key:"_id"},{title:"帳號",key:"user.account"},{title:"日期",key:"createdAt",value:t=>new Date(t.createdAt).toLocaleString()},{title:"商品",key:"cart_P",sortable:!1},{title:"金額",key:"price",value:t=>t.cart_P.reduce((a,e)=>a+e.quantity*e.p_id.price,0)}];return V(async()=>{var t,a;try{const{data:e}=await p.get("/order/product/all");s.value=e.result,console.log(s.value)}catch(e){console.log(e),_({text:((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),(t,a)=>(c(),h(P,null,{default:r(()=>[o(w,{class:"my-8"},{default:r(()=>[o(u,{cols:"12"},{default:r(()=>[A]),_:1}),o(u,{cols:"12"},{default:r(()=>[o(v,{items:s.value,headers:f},{"item.cart_P":r(({item:e})=>[d("ul",null,[(c(!0),i(b,null,g(e.cart_P,l=>(c(),i("li",{key:l._id},n(l.p_id.name)+" * "+n(l.quantity),1))),128))])]),_:1},8,["items"])]),_:1})]),_:1})]),_:1}))}};typeof m=="function"&&m(B);export{B as default};
