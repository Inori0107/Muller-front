import{m as ee,ay as G,ax as te,aD as ae,z as ne,aE as le,ad as oe,az as ie,J as V,r as v,H as ue,af as re,$ as se,Z as x,ac as ce,L as de,aB as fe,aC as T,aF as ve,b as l,aG as xe,U as I,F as k,a4 as _,aH as me,aI as ge,aJ as he,aK as we,ap as R,aL as Ve,M as ye,ab as Fe}from"./index-DmXGs2hY.js";const Ce=ee({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...G(te(),["centerAffix"]),...G(ae(),["centerAffix"])},"VTextarea"),Ie=ne()({name:"VTextarea",directives:{Intersect:le},inheritAttrs:!1,props:Ce(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,D){let{attrs:y,emit:b,slots:u}=D;const o=oe(e,"modelValue"),{isFocused:f,focus:E,blur:U}=ie(e),O=V(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),$=V(()=>{if(y.maxlength)return y.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function J(t,n){var a,i;!e.autofocus||!t||(i=(a=n[0].target)==null?void 0:a.focus)==null||i.call(a)}const S=v(),m=v(),H=ue(""),g=v(),L=V(()=>e.persistentPlaceholder||f.value||e.active);function F(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||E()}function j(t){F(),b("click:control",t)}function K(t){b("mousedown:control",t)}function Z(t){t.stopPropagation(),F(),R(()=>{o.value="",Ve(e["onClick:clear"],t)})}function q(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const i=[n.selectionStart,n.selectionEnd];R(()=>{n.selectionStart=i[0],n.selectionEnd=i[1]})}}const c=v(),M=v(+e.rows),Q=V(()=>["plain","underlined"].includes(e.variant));re(()=>{e.autoGrow||(M.value=+e.rows)});function d(){e.autoGrow&&R(()=>{if(!c.value||!m.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(m.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),i=c.value.scrollHeight,h=parseFloat(t.lineHeight),C=Math.max(parseFloat(e.rows)*h+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),P=parseFloat(e.maxRows)*h+a||1/0,s=Fe(i??0,C,P);M.value=Math.floor((s-a)/h),H.value=ye(s)})}se(d),x(o,d),x(()=>e.rows,d),x(()=>e.maxRows,d),x(()=>e.density,d);let r;return x(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),ce(()=>{r==null||r.disconnect()}),de(()=>{const t=!!(u.counter||e.counter||e.counterValue),n=!!(t||u.details),[a,i]=fe(y),{modelValue:h,...C}=T.filterProps(e),P=ve(e);return l(T,I({ref:S,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":Q.value},e.class],style:e.style},a,C,{centerAffix:!1,focused:f.value}),{...u,default:s=>{let{id:w,isDisabled:z,isDirty:A,isReadonly:W,isValid:X}=s;return l(xe,I({ref:m,style:{"--v-textarea-control-height":H.value},onClick:j,onMousedown:K,"onClick:clear":Z,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},P,{id:w.value,active:L.value||A.value,centerAffix:!1,dirty:A.value||e.dirty,disabled:z.value,focused:f.value,error:X.value===!1}),{...u,default:Y=>{let{props:{class:B,...N}}=Y;return l(k,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),_(l("textarea",I({ref:g,class:B,value:o.value,onInput:q,autofocus:e.autofocus,readonly:W.value,disabled:z.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:F,onBlur:U},N,i),null),[[me("intersect"),{handler:J},null,{once:!0}]]),e.autoGrow&&_(l("textarea",{class:[B,"v-textarea__sizer"],id:`${N.id}-sizer`,"onUpdate:modelValue":p=>o.value=p,ref:c,readonly:!0,"aria-hidden":"true"},null),[[ge,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var w;return l(k,null,[(w=u.details)==null?void 0:w.call(u,s),t&&l(k,null,[l("span",null,null),l(he,{active:e.persistentCounter||f.value,value:O.value,max:$.value,disabled:e.disabled},u.counter)])])}:void 0})}),we({},S,m,g)}});export{Ie as V};
