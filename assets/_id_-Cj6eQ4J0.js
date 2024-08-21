import{_ as J,Z as M,N as Q,r as w,J as U,o as u,c as V,b as t,w as a,i as P,h as i,t as n,O as c,as as X,V as m,e as q,f as r,j as p,d as h,Q as b,ao as j,R as I,F as x,k as N,g as Y,bd as Z,Y as z,X as G,at as H,p as K,l as W,an as tt}from"./index-BJZfzVWU.js";import{c as at,b as et,u as st,e as lt,V as ot}from"./index.esm-Dc0CSnYp.js";import{V as B}from"./VContainer-C8Zp0cAo.js";import{V as _}from"./VRow-B9L5oeNy.js";import{V as d}from"./VCol-EL3TIsdH.js";import{V as rt}from"./VDivider-BkgaXzKR.js";import{V as ct}from"./VSheet-CcO2aDsU.js";import"./_commonjsHelpers-Cpj98o6Y.js";const F=f=>(K("data-v-b72cf5aa"),f=f(),W(),f),ut={class:"my-4"},nt={class:"mx-1"},dt={class:"my-4"},it={style:{"line-height":"3rem"}},mt=F(()=>i("h1",{class:"text-red"},"已下架",-1)),pt=F(()=>i("div",{class:"category"},"更多商品",-1)),_t={__name:"[id]",setup(f){const{api:k}=tt(),T=z(),$=G(),g=M(),S=Q(),o=w({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:"",song:[]});(async()=>{var s,l;try{const{data:e}=await k.get("/product/"+T.params.id);Object.assign(o.value,e.result),document.title="購物網 | "+o.value.name}catch(e){g({text:((l=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:l.message)||"發生錯誤",snackbarProps:{color:"red"}})}})();const R=async(s,l)=>{if(!S.isLogin){$.push({query:{login:!0}});return}try{const e=await S.addCart_P(s,l);g({text:e.text,snackbarProps:{color:e.color}})}catch{g({text:"加入購物車失敗",snackbarProps:{color:"red"}})}},O=at({quantity:et().typeError("數量必填").required("數量必填").min(1,"最少為 1")}),{isSubmitting:C,handleSubmit:A}=st({validationSchema:O,initialValues:{quantity:1}}),y=lt("quantity"),D=A(async s=>{R(o.value._id,s.quantity)}),v=w([]);(async()=>{var s,l;try{const{data:e}=await k.get("/product",{params:{category:"專輯"}});v.value.splice(0,v.value.length,...e.result.data)}catch(e){g({text:((l=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:l.message)||"發生錯誤",snackbarProps:{color:"red"}})}})();const E=U(()=>v.value.filter(s=>s._id!==o.value._id));return(s,l)=>(u(),V(x,null,[t(ct,{style:{height:"auto","padding-top":"84px"}},{default:a(()=>[t(B,null,{default:a(()=>[t(_,{justify:"center",align:"center"},{default:a(()=>[t(d,{cols:"9",md:"4",class:"text-center"},{default:a(()=>[t(P,{src:o.value.image,class:"img"},null,8,["src"])]),_:1}),t(d,{cols:"9",md:"5"},{default:a(()=>[t(d,null,{default:a(()=>[i("h1",ut,n(o.value.name),1),i("p",nt,"NT $"+n(o.value.price),1),t(rt,{class:"my-4"}),i("p",dt,n(o.value.description),1)]),_:1}),t(ot,{disabled:c(C),onSubmit:X(c(D),["prevent"])},{default:a(()=>[t(_,{class:"mx-1"},{default:a(()=>[t(m,{variant:"",icon:"",onClick:l[0]||(l[0]=e=>c(y).value.value--)},{default:a(()=>[t(q,null,{default:a(()=>[r("mdi-minus")]),_:1})]),_:1}),t(p),i("span",it,n(c(y).value),1),t(p),t(m,{variant:"",icon:"",onClick:l[1]||(l[1]=e=>c(y).value.value++)},{default:a(()=>[t(q,null,{default:a(()=>[r("mdi-plus")]),_:1})]),_:1}),t(p),t(m,{type:"submit","prepend-icon":"mdi-cart",loading:c(C),flat:"false"},{default:a(()=>[r(" 加入購物車 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1}),t(_,{justify:"center",class:"mt-8"},{default:a(()=>[o.value.song.length>0?(u(),h(d,{key:0,cols:"9"},{default:a(()=>[t(b,{class:"cool-card"},{default:a(()=>[t(j,{class:"song-title"},{default:a(()=>[r("收錄曲目")]),_:1}),t(I,null,{default:a(()=>[t(_,null,{default:a(()=>[(u(!0),V(x,null,N(o.value.song,(e,L)=>(u(),h(d,{cols:"12",key:L},{default:a(()=>[t(b,{class:"song-card"},{default:a(()=>[t(I,null,{default:a(()=>[r(n(e),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})):Y("",!0)]),_:1}),t(Z,{class:"align-center justify-center text-center","model-value":!o.value.sell,persistent:""},{default:a(()=>[mt,t(m,{to:"/shop/product"},{default:a(()=>[r("商品列表")]),_:1})]),_:1},8,["model-value"])]),_:1})]),_:1}),t(B,{class:"mt-4 mb-8"},{default:a(()=>[pt,t(_,{justify:"center"},{default:a(()=>[(u(!0),V(x,null,N(c(E),e=>(u(),h(d,{cols:"7",md:"3",key:e._id,class:"my-8"},{default:a(()=>[t(b,null,{default:a(()=>[t(P,{src:e.image},null,8,["src"]),t(j,{class:"card-title"},{default:a(()=>[r(n(e.name),1)]),_:2},1024),t(H,null,{default:a(()=>[t(p),t(m,{to:"/shop/products/"+e._id},{default:a(()=>[r("查看詳情")]),_:2},1032,["to"]),t(p)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})],64))}},Ct=J(_t,[["__scopeId","data-v-b72cf5aa"]]);export{Ct as default};
