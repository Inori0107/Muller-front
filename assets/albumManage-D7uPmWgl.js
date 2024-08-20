import{P as G,r as d,o as g,d as V,w as o,b as r,V as c,f as S,Q as $,at as J,i as Z,e as _,g as ee,S as ae,R as s,W as le,ar as te,t as re,X as oe,c as se,k as ne,F as ue,au as de,Y as ie,h as me,T as ve,a as pe}from"./index-DmXGs2hY.js";import{c as ge,a as P,e as ce,f as fe,u as Ve,b as f,V as be}from"./index.esm-3PPDD835.js";import{b as j}from"./route-block-B_A1xBdJ.js";import{V as B}from"./VCol-z06Mw91z.js";import{V as ye,a as ke}from"./VDataTable-DDiWEggY.js";import{V as Ce}from"./VRow-CqmavEP7.js";import{V as xe}from"./VCheckbox-CsjVne2d.js";import{V as Me}from"./VTextarea-C4jCJWnF.js";import{V as we}from"./VContainer-JypX1jX1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VList-DUlqQqe5.js";import"./ssrBoot-BbT2pxTJ.js";import"./VDivider-DQZXRd6D.js";import"./VChip-CqSC1gvD.js";import"./VSlideGroup-BLTTtzGK.js";const Ue=me("h1",{class:"text-center"},"專輯管理",-1),Se={__name:"albumManage",setup($e){const{apiAuth:F}=ve(),A=G(),h=d(null),i=d({open:!1,id:""}),q=l=>{l?(i.value.id=l._id,b.value.value=l.name,y.value.value=l.price,k.value.value=l.description,n.value=l.song.map(e=>({value:e,errorMessage:"",added:!0})).filter(e=>e.value!==""),n.value.push({value:"",errorMessage:"",added:!1}),C.value.value=l.category,x.value.value=l.sell):(i.value.id="",E(),n.value=[{value:"",errorMessage:"",added:!1}]),i.value.open=!0},L=()=>{i.value.open=!1,E(),h.value.deleteFileRecord()},N=["專輯","樂譜"],H=ge({name:P().required("商品名稱必填"),price:ce().typeError("商品價格格式錯誤").required("商品價格必填").min(0,"商品價格不能小於 0"),description:P().required("商品說明必填"),song:P(),category:P().required("商品分類必填").test("isCategory","商品分類錯誤",l=>N.includes(l)),sell:fe()}),{handleSubmit:O,isSubmitting:T,resetForm:E}=Ve({validationSchema:H,initialValues:{name:"",price:0,description:"",song:"",sell:!0}}),b=f("name"),y=f("price"),k=f("description");f("song");const C=f("category"),x=f("sell"),p=d([]),z=d([]),n=d([{value:"",errorMessage:"",added:!1}]),Q=()=>{const l=n.value[n.value.length-1];if(!l.value){l.errorMessage="此字段必填";return}l.added=!0,n.value.push({value:"",errorMessage:"",added:!1})},W=l=>{n.value.splice(l,1),n.value.length===0&&n.value.push({value:"",errorMessage:"",added:!1})},X=O(async l=>{var e,v,a;if(!((e=p.value[0])!=null&&e.error)&&!(i.value.id.length===0&&p.value.length<1)){n.value.filter(t=>t.value!=="");try{const t=new FormData;t.append("name",l.name),t.append("price",l.price),t.append("description",l.description),n.value.forEach(u=>{t.append("song[]",u.value)}),t.append("category",l.category),t.append("sell",l.sell),p.value.length>0&&t.append("image",p.value[0].file),i.value.id===""?await F.post("/product",t):await F.patch("/product/"+i.value.id,t),A({text:i.value.id===""?"新增成功":"編輯成功",snackbarProps:{color:"green"}}),L(),m(!0)}catch(t){console.log(t),A({text:((a=(v=t==null?void 0:t.response)==null?void 0:v.data)==null?void 0:a.message)||"發生錯誤",snackbarProps:{color:"red"}})}}}),D=d(10),M=d([{key:"createdAt",order:"desc"}]),w=d(1),I=d([]),Y=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"價格",align:"center",sortable:!0,key:"price"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"操作",align:"center",sortable:!1,key:"action"}],R=d(!0),K=d(0),U=d(""),m=async l=>{var e,v,a,t;l&&(w.value=1),R.value=!0;try{const{data:u}=await F.get("/product/all",{params:{page:w.value,itemsPerPage:D.value,sortBy:((e=M.value[0])==null?void 0:e.key)||"createdAt",sortOrder:((v=M.value[0])==null?void 0:v.order)||"desc",category:"專輯",search:U.value}});I.value.splice(0,I.value.length,...u.result.data),K.value=u.result.total}catch(u){console.log(u),A({text:((t=(a=u==null?void 0:u.response)==null?void 0:a.data)==null?void 0:t.message)||"發生錯誤",snackbarProps:{color:"red"}})}R.value=!1};return m(),(l,e)=>{const v=pe("vue-file-agent");return g(),V(we,null,{default:o(()=>[r(Ce,null,{default:o(()=>[r(B,{cols:"12"},{default:o(()=>[Ue]),_:1}),r(B,{cols:"12"},{default:o(()=>[r(c,{color:"green",onClick:e[0]||(e[0]=a=>q(null))},{default:o(()=>[S("新增商品")]),_:1})]),_:1}),r(B,{cols:"12"},{default:o(()=>[r(ye,{"items-per-page":D.value,"onUpdate:itemsPerPage":[e[4]||(e[4]=a=>D.value=a),e[7]||(e[7]=a=>m(!1))],"sort-by":M.value,"onUpdate:sortBy":[e[5]||(e[5]=a=>M.value=a),e[8]||(e[8]=a=>m(!1))],page:w.value,"onUpdate:page":[e[6]||(e[6]=a=>w.value=a),e[9]||(e[9]=a=>m(!1))],items:I.value,headers:Y,loading:R.value,"items-length":K.value,search:U.value,hover:""},{top:o(()=>[r($,{label:"搜尋",modelValue:U.value,"onUpdate:modelValue":e[1]||(e[1]=a=>U.value=a),"append-icon":"mdi-magnify",onClickAppend:e[2]||(e[2]=a=>m(!0)),onKeydown:e[3]||(e[3]=J(a=>m(!0),["enter"]))},null,8,["modelValue"])]),"item.image":o(({value:a})=>[r(Z,{src:a,height:"150px",contain:""},null,8,["src"])]),"item.sell":o(({value:a})=>[a?(g(),V(_,{key:0,icon:"mdi-check"})):ee("",!0)]),"item.action":o(({item:a})=>[r(c,{icon:"mdi-pencil",variant:"text",color:"blue",onClick:t=>q(a)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1}),r(ie,{modelValue:i.value.open,"onUpdate:modelValue":e[17]||(e[17]=a=>i.value.open=a),persistent:"",width:"500"},{default:o(()=>[r(be,{onSubmit:ae(s(X),["prevent"]),disabled:s(T)},{default:o(()=>[r(le,null,{default:o(()=>[r(te,null,{default:o(()=>[S(re(i.value.id?"編輯商品":"新增商品"),1)]),_:1}),r(oe,null,{default:o(()=>[r($,{label:"名稱",modelValue:s(b).value.value,"onUpdate:modelValue":e[10]||(e[10]=a=>s(b).value.value=a),"error-messages":s(b).errorMessage.value},null,8,["modelValue","error-messages"]),r($,{label:"價格",type:"number",min:"0",modelValue:s(y).value.value,"onUpdate:modelValue":e[11]||(e[11]=a=>s(y).value.value=a),"error-messages":s(y).errorMessage.value},null,8,["modelValue","error-messages"]),r(ke,{label:"分類",items:N,modelValue:s(C).value.value,"onUpdate:modelValue":e[12]||(e[12]=a=>s(C).value.value=a),"error-messages":s(C).errorMessage.value},null,8,["modelValue","error-messages"]),r(xe,{label:"上架",modelValue:s(x).value.value,"onUpdate:modelValue":e[13]||(e[13]=a=>s(x).value.value=a),"error-messages":s(x).errorMessage.value},null,8,["modelValue","error-messages"]),r(Me,{label:"說明",modelValue:s(k).value.value,"onUpdate:modelValue":e[14]||(e[14]=a=>s(k).value.value=a),"error-messages":s(k).errorMessage.value},null,8,["modelValue","error-messages"]),(g(!0),se(ue,null,ne(n.value,(a,t)=>(g(),V(B,{key:t,cols:"12",class:"d-flex align-items-center"},{default:o(()=>[r($,{label:"歌曲列表（每行一首）",modelValue:a.value,"onUpdate:modelValue":u=>a.value=u,"error-messages":a.errorMessage},null,8,["modelValue","onUpdate:modelValue","error-messages"]),t===n.value.length-1&&!a.added?(g(),V(c,{key:0,icon:"mdi-plus",variant:"text",color:"green",onClick:Q})):(g(),V(c,{key:1,icon:"mdi-delete",variant:"text",color:"red",onClick:u=>W(t)},null,8,["onClick"]))]),_:2},1024))),128)),r(v,{modelValue:p.value,"onUpdate:modelValue":e[15]||(e[15]=a=>p.value=a),"raw-model-value":z.value,"onUpdate:rawModelValue":e[16]||(e[16]=a=>z.value=a),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:h},null,8,["modelValue","raw-model-value"])]),_:1}),r(de,null,{default:o(()=>[r(c,{color:"red",loading:s(T),onClick:L},{default:o(()=>[S("取消")]),_:1},8,["loading"]),r(c,{color:"green",type:"submit",loading:s(T)},{default:o(()=>[S("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1},8,["modelValue"])]),_:1})}}};typeof j=="function"&&j(Se);export{Se as default};
