import{R as u,r as _,a0 as f,o as s,d as k,w as c,b as y,h as b,c as i,F as h,k as g,t as l,W as V}from"./index-Tq5kx18G.js";import{b as n}from"./route-block-B_A1xBdJ.js";import{V as P}from"./VDataTable-DIS81-B4.js";import{V as v}from"./VCol-C1KvAf0A.js";import"./VList-eEuKqMB9.js";import"./ssrBoot-BNVEgV9L.js";import"./VDivider-DSz9UAsc.js";import"./VChip-DdydsuLF.js";import"./VSlideGroup-DcR_Jp-p.js";const w={__name:"productOrder",setup(x){const{apiAuth:m}=V(),p=u(),o=_([]),d=[{title:"編號",key:"_id"},{title:"日期",key:"createdAt",value:t=>new Date(t.createdAt).toLocaleString()},{title:"商品",key:"cart_P",sortable:!1},{title:"金額",key:"price",value:t=>t.cart_P.reduce((a,e)=>a+e.quantity*e.p_id.price,0)}];return f(async()=>{var t,a;try{const{data:e}=await m.get("/order/product");o.value=e.result}catch(e){console.log(e),p({text:((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),(t,a)=>(s(),k(v,{cols:"12"},{default:c(()=>[y(P,{items:o.value,headers:d},{"item.cart_P":c(({item:e})=>[b("ul",null,[(s(!0),i(h,null,g(e.cart_P,r=>(s(),i("li",{key:r._id},l(r.p_id.name)+" * "+l(r.quantity),1))),128))])]),_:1},8,["items"])]),_:1}))}};typeof n=="function"&&n(w);export{w as default};
