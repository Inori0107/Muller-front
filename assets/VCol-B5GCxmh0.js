import{bl as a,bm as f,N as y,O as S,P as C,Q as k,G as N,ar as h}from"./index-CVvZw8qE.js";const i=a.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}),d=a.reduce((e,s)=>{const t="offset"+f(s);return e[t]={type:[String,Number],default:null},e},{}),m=a.reduce((e,s)=>{const t="order"+f(s);return e[t]={type:[String,Number],default:null},e},{}),u={col:Object.keys(i),offset:Object.keys(d),order:Object.keys(m)};function P(e,s,t){let l=e;if(!(t==null||t===!1)){if(s){const r=s.replace(e,"");l+=`-${r}`}return e==="col"&&(l="v-"+l),e==="col"&&(t===""||t===!0)||(l+=`-${t}`),l.toLowerCase()}}const L=["auto","start","end","center","baseline","stretch"],V=y({cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...d,order:{type:[String,Number],default:null},...m,alignSelf:{type:String,default:null,validator:e=>L.includes(e)},...S(),...C()},"VCol"),O=k()({name:"VCol",props:V(),setup(e,s){let{slots:t}=s;const l=N(()=>{const r=[];let o;for(o in u)u[o].forEach(n=>{const g=e[n],c=P(o,n,g);c&&r.push(c)});const b=r.some(n=>n.startsWith("v-col-"));return r.push({"v-col":!b||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),r});return()=>{var r;return h(e.tag,{class:[l.value,e.class],style:e.style},(r=t.default)==null?void 0:r.call(t))}}});export{O as V};
