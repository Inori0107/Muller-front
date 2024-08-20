import{m as v,aQ as S,q as f,v as k,aR as T,s as z,z as C,aS as R,B as _,C as n,G as B,E as w,L as y,b as i,e as x,a9 as $,aT as U,x as I,aU as L,H as O,r as b,Z as j,M as m,aV as A,aW as E,y as M,A as N,aX as q,a7 as G,a8 as H,J as D,o as W,d as X,w as c,V as h,U as F,W as J,X as Q,aw as Y,au as Z,Y as K}from"./index-DmXGs2hY.js";const p=v({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:S,iconColor:String,lineColor:String,...f(),...k(),...T(),...z()},"VTimelineDivider"),ee=C()({name:"VTimelineDivider",props:p(),setup(e,s){let{slots:t}=s;const{sizeClasses:a,sizeStyles:l}=R(e,"v-timeline-divider__dot"),{backgroundColorStyles:u,backgroundColorClasses:d}=_(n(e,"dotColor")),{roundedClasses:o}=B(e,"v-timeline-divider__dot"),{elevationClasses:r}=w(e),{backgroundColorClasses:g,backgroundColorStyles:V}=_(n(e,"lineColor"));return y(()=>i("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[i("div",{class:["v-timeline-divider__before",g.value],style:V.value},null),!e.hideDot&&i("div",{key:"dot",class:["v-timeline-divider__dot",r.value,o.value,a.value],style:l.value},[i("div",{class:["v-timeline-divider__inner-dot",d.value,o.value],style:u.value},[t.default?i($,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},t.default):i(x,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),i("div",{class:["v-timeline-divider__after",g.value],style:V.value},null)])),{}}}),P=v({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:S,iconColor:String,lineInset:[Number,String],...f(),...U(),...z(),...k(),...T(),...I()},"VTimelineItem"),le=C()({name:"VTimelineItem",props:P(),setup(e,s){let{slots:t}=s;const{dimensionStyles:a}=L(e),l=O(0),u=b();return j(u,d=>{var o;d&&(l.value=((o=d.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:o.getBoundingClientRect().width)??0)},{flush:"post"}),y(()=>{var d,o;return i("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":m(l.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${m(e.lineInset)})`:m(0)},e.style]},[i("div",{class:"v-timeline-item__body",style:a.value},[(d=t.default)==null?void 0:d.call(t)]),i(ee,{ref:u,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:t.icon}),e.density!=="compact"&&i("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((o=t.opposite)==null?void 0:o.call(t))])])}),{}}}),ie=v({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...A(P({lineInset:0}),["dotColor","fillDot","hideOpposite","iconColor","lineInset","size"]),...f(),...E(),...I(),...M()},"VTimeline"),ne=C()({name:"VTimeline",props:ie(),setup(e,s){let{slots:t}=s;const{themeClasses:a}=N(e),{densityClasses:l}=q(e),{rtlClasses:u}=G();H({VTimelineDivider:{lineColor:n(e,"lineColor")},VTimelineItem:{density:n(e,"density"),dotColor:n(e,"dotColor"),fillDot:n(e,"fillDot"),hideOpposite:n(e,"hideOpposite"),iconColor:n(e,"iconColor"),lineColor:n(e,"lineColor"),lineInset:n(e,"lineInset"),size:n(e,"size")}});const d=D(()=>{const r=e.side?e.side:e.density!=="default"?"end":null;return r&&`v-timeline--side-${r}`}),o=D(()=>{const r=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return r;case"start":return r[0];case"end":return r[1];default:return null}});return y(()=>i(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,o.value,{"v-timeline--inset-line":!!e.lineInset},a.value,l.value,d.value,u.value,e.class],style:[{"--v-timeline-line-thickness":m(e.lineThickness)},e.style]},t)),{}}}),ae=""+new URL("about-DUnI6_xu.jpeg",import.meta.url).href,oe=""+new URL("choir-oMHGRpM0.png",import.meta.url).href,se={__name:"dialog",props:{title:{type:String,default:"Dialog"}},setup(e){const s=b(!1);return(t,a)=>(W(),X(K,{"max-width":"1000",modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=l=>s.value=l),transition:"dialog-transition"},{activator:c(({props:l})=>[i(h,F(l,{color:"surface-variant",text:"learn more",variant:"flat"}),null,16)]),default:c(()=>[i(J,{title:e.title},{default:c(()=>[i(Q,null,{default:c(()=>[Y(t.$slots,"content")]),_:3}),i(Z,null,{default:c(()=>[i(h,{text:"Close",onClick:a[0]||(a[0]=l=>s.value=!1)})]),_:1})]),_:3},8,["title"])]),_:3},8,["modelValue"]))}};export{ne as V,ae as _,oe as a,se as b,le as c};
