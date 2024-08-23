import{_ as q}from"./choir-BYqQ1bQj.js";import{_ as Q}from"./conductor-CMHokzN-.js";import{_ as G,a as H,b as J}from"./signUp-CDOt0sEP.js";import{m as x,aQ as L,q as p,v as O,aR as A,s as N,z,aS as X,B as w,C as _,G as Y,E as Z,L as $,b as t,e as K,a6 as ee,aT as te,x as j,aU as le,H as se,r as S,Z as ae,M as D,aV as ie,aW as oe,y as ne,A as re,aX as de,a4 as ce,a5 as ue,J as I,N as _e,a as B,o as g,d as E,w as s,Q as F,R as M,i as h,f as n,c as k,S as me,h as l,_ as ve,F as fe,k as ye,a0 as ge,ao as he,t as P,p as Ce,l as be}from"./index-BqewrQzb.js";import{V as Ve,a as R}from"./VTabs-Cbtt6nGz.js";import{A as Se}from"./aos-Cuzn-GnL.js";import{V as b}from"./VContainer-Ca8ocAuZ.js";import{V as De}from"./VSheet-CykkeA7L.js";import{V as U}from"./VRow-CnaoZfnn.js";import{V}from"./VCol-BN1FpXXd.js";import"./index.esm-CqqhNu6j.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./ssrBoot-D00BboUA.js";import"./VSlideGroup-BWzBaDIC.js";const ke=x({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:L,iconColor:String,lineColor:String,...p(),...O(),...A(),...N()},"VTimelineDivider"),Te=z()({name:"VTimelineDivider",props:ke(),setup(e,v){let{slots:o}=v;const{sizeClasses:c,sizeStyles:d}=X(e,"v-timeline-divider__dot"),{backgroundColorStyles:m,backgroundColorClasses:r}=w(_(e,"dotColor")),{roundedClasses:u}=Y(e,"v-timeline-divider__dot"),{elevationClasses:a}=Z(e),{backgroundColorClasses:f,backgroundColorStyles:C}=w(_(e,"lineColor"));return $(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",f.value],style:C.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",a.value,u.value,c.value],style:d.value},[t("div",{class:["v-timeline-divider__inner-dot",r.value,u.value],style:m.value},[o.default?t(ee,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},o.default):t(K,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",f.value],style:C.value},null)])),{}}}),W=x({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:L,iconColor:String,lineInset:[Number,String],...p(),...te(),...N(),...O(),...A(),...j()},"VTimelineItem"),Ie=z()({name:"VTimelineItem",props:W(),setup(e,v){let{slots:o}=v;const{dimensionStyles:c}=le(e),d=se(0),m=S();return ae(m,r=>{var u;r&&(d.value=((u=r.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:u.getBoundingClientRect().width)??0)},{flush:"post"}),$(()=>{var r,u;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":D(d.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${D(e.lineInset)})`:D(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:c.value},[(r=o.default)==null?void 0:r.call(o)]),t(Te,{ref:m,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:o.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((u=o.opposite)==null?void 0:u.call(o))])])}),{}}}),xe=x({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...ie(W({lineInset:0}),["dotColor","fillDot","hideOpposite","iconColor","lineInset","size"]),...p(),...oe(),...j(),...ne()},"VTimeline"),pe=z()({name:"VTimeline",props:xe(),setup(e,v){let{slots:o}=v;const{themeClasses:c}=re(e),{densityClasses:d}=de(e),{rtlClasses:m}=ce();ue({VTimelineDivider:{lineColor:_(e,"lineColor")},VTimelineItem:{density:_(e,"density"),dotColor:_(e,"dotColor"),fillDot:_(e,"fillDot"),hideOpposite:_(e,"hideOpposite"),iconColor:_(e,"iconColor"),lineColor:_(e,"lineColor"),lineInset:_(e,"lineInset"),size:_(e,"size")}});const r=I(()=>{const a=e.side?e.side:e.density!=="default"?"end":null;return a&&`v-timeline--side-${a}`}),u=I(()=>{const a=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return a;case"start":return a[0];case"end":return a[1];default:return null}});return $(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,u.value,{"v-timeline--inset-line":!!e.lineInset},c.value,d.value,r.value,m.value,e.class],style:[{"--v-timeline-line-thickness":D(e.lineThickness)},e.style]},o)),{}}}),ze=""+new URL("about-DUnI6_xu.jpeg",import.meta.url).href,$e=""+new URL("pianist-Dj13aNCv.webp",import.meta.url).href,we=l("h2",{class:"mt-4 text-center"},"木樓之友",-1),Be={key:0},Pe={key:1},T={__name:"dialog",setup(e,{expose:v}){const o=S(!1),c=S(0),d=S(!0);_e();const m=()=>{o.value=!1},r=()=>{d.value=!0};return v({isActive:o,openDialog:()=>o.value=!0}),(u,a)=>{const f=B("v-tab-item"),C=B("v-tabs-items");return g(),E(me,{"max-width":"500",modelValue:o.value,"onUpdate:modelValue":a[4]||(a[4]=y=>o.value=y),transition:"dialog-transition"},{default:s(()=>[t(F,null,{default:s(()=>[we,t(M,null,{default:s(()=>[t(h,{src:G}),t(Ve,{modelValue:c.value,"onUpdate:modelValue":a[2]||(a[2]=y=>c.value=y),"fixed-tabs":"false"},{default:s(()=>[t(R,{onClick:a[0]||(a[0]=y=>d.value=!0)},{default:s(()=>[n("登入")]),_:1}),t(R,{onClick:a[1]||(a[1]=y=>d.value=!1)},{default:s(()=>[n("註冊")]),_:1})]),_:1},8,["modelValue"]),t(C,{modelValue:c.value,"onUpdate:modelValue":a[3]||(a[3]=y=>c.value=y)},{default:s(()=>[t(f,null,{default:s(()=>[d.value?(g(),k("div",Be,[t(H,{onLoginSuccess:m})])):(g(),k("div",Pe,[t(J,{onSignUpSuccess:r})]))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},i=e=>(Ce("data-v-f2634f9b"),e=e(),be(),e),Re={id:"bg"},Ue=i(()=>l("h2",{class:"title"},[l("span",{class:"hash"},"木樓合唱團"),n(" 在藝術總監暨指揮彭孟賢的帶領下，專注於呈現精緻合唱藝術。"),l("br"),n(" 近年除了在國際賽事屢獲首獎外，也數次受到國際邀演舉行巡迴音樂會，"),l("br"),n(" 木樓的足跡來到世界各地，累積了數十場音樂會，用一場場的演出，讓全世界聽到臺灣。"),l("br")],-1)),Le=i(()=>l("h2",{class:"title text-center mb-4","data-aos":"fade-left","data-aos-offset":"500"},[n(" 在未來，木樓將飛往更多國家與土地，傳遞更多精緻樂音；"),l("br"),n(" 在臺灣，以溫暖的歌聲讚頌寶島的美，延續良善，讓愛扎根。 ")],-1)),Oe={class:"bg"},Ae={class:"text-overlay text-bg"},Ne=i(()=>l("br",null,null,-1)),je=i(()=>l("br",null,null,-1)),Ee=i(()=>l("br",null,null,-1)),Fe=i(()=>l("br",null,null,-1)),Me=i(()=>l("h1",{class:"text-left pb-5"},"藝術總監暨指揮　彭孟賢",-1)),We=i(()=>l("p",{class:"text-left mb-4"}," 自2013年起擔任木樓合唱團藝術總監暨常任指揮至今，帶領該團於國際賽中連續獲得首獎殊榮；2015年彭孟賢帶領木樓合唱團榮獲《第九屆布拉姆斯國際合唱大賽暨音樂節》大賽總冠軍，2016年再度帶領木樓榮獲《第九屆世界合唱大賽冠軍賽》男聲室內合唱世界金牌總冠軍，木樓合唱團於德國國際文化交流基金會世界千大合唱團排名中，自2016年至2020年3月於室內合唱團項目連續四年蟬聯冠軍寶座。彭孟賢於藝術性、音樂能力、樂曲呈現整體性等方面獲得極高評價，國際評審曾讚譽：「瘋狂而驚人的指揮、令人崇敬的成就、迷人而撼動人心的音樂」。 ",-1)),qe=i(()=>l("br",null,null,-1)),Qe=i(()=>l("br",null,null,-1)),Ge=i(()=>l("br",null,null,-1)),He=i(()=>l("br",null,null,-1)),Je=i(()=>l("br",null,null,-1)),Xe=i(()=>l("br",null,null,-1)),Ye=i(()=>l("br",null,null,-1)),Ze=i(()=>l("br",null,null,-1)),Ke=i(()=>l("h1",{class:"text-left pb-5"},"鋼琴　王乃加",-1)),et=i(()=>l("p",null," 自3歲開始學習鋼琴。師事謝秋月、林得恩、徐頌仁、諸大明等教授。曾受鋼琴家史蘭倩絲卡讚譽「擁有驚人的視譜能力，是位不可多得的伴奏家」。美國新英格蘭音樂院教授派翠希亞．桑德讚賞「其演奏令人深刻，是位有潛力、天賦異稟的鋼琴家」。現任教於多所音樂班，以及擔任台北愛樂歌劇坊、台北室內合唱團、木樓合唱團鋼琴合作。亦擁有個人專屬頻道，定期發表編創作品。 ",-1)),tt=i(()=>l("div",{class:"pb-5"},null,-1)),lt=i(()=>l("br",null,null,-1)),st=i(()=>l("br",null,null,-1)),at=i(()=>l("br",null,null,-1)),it=i(()=>l("br",null,null,-1)),ot={__name:"introduce copy",setup(e){Se.init({offset:400,duration:1500,once:!0});const v=[{year:"1999年",description:"木樓合唱團正式成立。",category:"years"},{year:"2007年",description:"赴日參加《第23屆寶塚國際室內合唱比賽》，獲民謠組金牌、浪漫組銀牌、綜合成績第二名。",category:"years"}],o=[{year:"2010年",description:"發行專輯《Wandering in a Song 流＋轉》：2010年《大鳴大放》音樂會實況錄音，入圍第22屆金曲獎傳統暨藝術音樂類『最佳演唱獎』。",category:"years_10"},{year:"2012年",description:"受邀於新加坡、馬來西亞新山、泰國曼谷等地舉辦四場巡演音樂會。",category:"years_10"},{year:"2013年",description:"彭孟賢老師接任藝術總監暨指揮，並首度於國家音樂廳舉辦專場音樂會。",category:"years_10"},{year:"2014年",description:"啟動《吹動島嶼的風》委託創作計畫，並於臺北中山堂正式發表。",category:"years_10"},{year:"2015年",description:"赴德參加《第九屆德國布拉姆斯國際合唱大賽》獲得宗教組、民謠組、男聲室內合唱組等三面金牌，並榮獲大賽總冠軍。",category:"years_10"},{year:"2016年",description:"赴俄羅斯參加《第九屆世界合唱大賽：冠軍賽》獲得無伴奏宗教音樂組、男聲室內合唱組、現代音樂組等三面金牌，並以打破大會紀錄之高分贏得男聲室內合唱世界金牌冠軍！因代表臺灣參賽，表現優異、為國爭光，回國後接受蔡英文總統與文化部鄭麗君部長接見表揚。",category:"years_10"},{year:"2017年",description:"7月受《新加坡國際合唱節》邀請擔任駐節邀請團，於活動中舉辦兩場專場公演，並與星洲日報合作於馬來西亞吉隆坡舉辦《璀璨臺灣》音樂會。同年7月受中國福建省藝術教育協會邀請擔任《第一屆海峽兩岸合唱教育大會》邀請擔任示範團隊，赴中國福州演出專場音樂會。發行專輯《吹動島嶼的風》，為詞曲全委創專輯，獲財團法人國家文化藝術基金會補助出版。另發行精選輯《木色Ⅱ》，收錄華語、臺語等多首作品。",category:"years_10"},{year:"2018年",description:"首度受邀赴美，於西雅圖、達拉斯、舊金山等三城舉辦巡迴音樂會。再度接受中國福建省藝術教育協會邀請，赴中國廈門市擔任《第二屆海峽兩岸合唱教育大會》示範團隊，演出兩場專場音樂會。",category:"years_10"},{year:"2019年",description:"2019年2月接受美國合唱指揮協會ACDA邀請，赴堪薩斯於《60周年全美雙年總會》演出；同時受邀於舊金山史丹佛大學紀念教堂與洛杉磯巡演。成立首支附屬團隊「木樓松柏合唱團」，推廣並經營精緻純男聲合唱。",category:"years_10"}],c=[{year:"2020年",description:"接受國際合唱聯盟IFCM邀請，赴紐西蘭奧克蘭市於每三年舉辦一次的合唱盛事─《世界合唱大會WSCM》演出兩場專場音樂會（因COVID-19疫情最終未能成行）。",category:"years_20"},{year:"2021年",description:"發行專輯《木色Ⅲ─愛的禮讚》，並獲110年度財團法人國家文化藝術基金會及臺北市政府文化局補助出版。成立「木色歌手」，培養追求頂尖卓越並具備豐富音樂素養、優秀演唱能力的歌手，持續琢磨打造木樓作為精緻男聲合唱的品牌。",category:"years_20"}],d=I(()=>[...v,...o,...c]),m=r=>{switch(r){case"years":return"years-style";case"years_10":return"years_10-style";case"years_20":return"years_20-style";default:return""}};return(r,u)=>(g(),k("div",Re,[t(De,{class:"heroPic"},{default:s(()=>[t(b,null,{default:s(()=>[Ue,t(h,{class:"my-8",src:ze,"data-aos":"fade-in"}),Le]),_:1})]),_:1}),l("div",Oe,[t(b,{class:"choir"},{default:s(()=>[t(h,{src:q,class:"opacity-70 my-8","data-aos":"zoom-out"}),l("p",Ae,[n(" 木樓合唱團為室內男聲合唱團，"),Ne,n(" 1999年成立至今秉持「男聲合唱藝術精緻化」的理念，"),je,n(" 透過追求完美的演唱，呈現深度藝術性的音樂內涵；"),Ee,n(" 透過歌者與聽眾間心靈感受的對話，傳達出音樂精緻的美感"),Fe,t(T,{title:"大事記"},{content:s(()=>[t(pe,{align:"start",side:"end"},{default:s(()=>[(g(!0),k(fe,null,ye(d.value,(a,f)=>(g(),E(Ie,{key:f,"dot-color":"grey darken-3",size:"small"},{default:s(()=>[t(F,{class:ge(["timeline-card",m(a.category)]),"data-aos":"fade-left","data-aos-delay":f*200},{default:s(()=>[t(he,null,{default:s(()=>[n(P(a.year),1)]),_:2},1024),t(M,null,{default:s(()=>[l("div",null,P(a.description),1)]),_:2},1024)]),_:2},1032,["class","data-aos-delay"])]),_:2},1024))),128))]),_:1})]),_:1})])]),_:1}),t(b,{class:"mt-8","data-aos":"fade-left","data-aos-offset":"1000"},{default:s(()=>[t(U,{class:"text-bg"},{default:s(()=>[t(V,{cols:"12",md:"6",class:"text-center align-content-center",order:"2","order-md":"1"},{default:s(()=>[l("div",null,[Me,We,t(T,{title:"藝術總監暨指揮　彭孟賢","data-aos":"fade-down"},{content:s(()=>[n(" 　　現任臺灣合唱協會常任理事、德國國際文化交流基金會舉辦之國際合唱大賽評審、木樓合唱團藝術總監暨指揮、國立客家兒童合唱團團長暨指揮、臺北市教師合唱團藝術總監暨指揮、臺大EMBA合唱團藝術總監暨指揮、原聲國際學院合唱團藝術總監暨指揮、榮星青少年合唱團暨室內婦女合唱團音樂總監暨指揮、大愛之聲合唱團指揮、福建省藝術教育協會藝術顧問、美國合唱協會會員。2021年受邀擔任臺北市立交響樂團附設合唱團客席指揮。曾獲頒「特殊優良教師暨卓越獎」、「藝術教育貢獻獎」、「臺灣國際重唱藝術節暨創新合唱比賽─最佳指揮獎」。2020年獲頒「客家事務獎章」，並入選「2020臺灣客家名人錄」。"),qe,Qe,n(" 　　近年連續受邀參與國際賽事及演出，並獲邀擔任國際評審，其足跡遍布西班牙、拉脫維亞、俄羅斯、德國、美國、新加坡、馬來西亞、中國等地，為臺灣合唱綻放異彩。 自2013年起擔任木樓合唱團藝術總監暨常任指揮至今，帶領該團於國際賽中連續獲得首獎殊榮；2015年彭孟賢帶領木樓合唱團榮獲《第九屆布拉姆斯國際合唱大賽暨音樂節》大賽總冠軍，2016年再度帶領木樓榮獲《第九屆世界合唱大賽冠軍賽》男聲室內合唱世界金牌總冠軍，木樓合唱團於德國國際文化交流基金會世界千大合唱團排名中，自2016年至2020年3月於室內合唱團項目連續四年蟬聯冠軍寶座。彭孟賢於藝術性、音樂能力、樂曲呈現整體性等方面獲得極高評價，國際評審曾讚譽：「瘋狂而驚人的指揮、令人崇敬的成就、迷人而撼動人心的音樂」。 　　2019年彭孟賢帶領木樓合唱團獲「美國合唱指揮協會」邀請於60週年年會演出兩場專場音樂會。2020年獲世界合唱大會邀請演出兩專場音樂會，從全世界44國179個合唱團隊脫穎而出，成為全球二十四個頂尖合唱團隊之一（因COVID-19疫情取消）。"),Ge,He,n(" 2016年起，彭孟賢受邀擔任國際評審與講師。2016年至2017年起受德國國際文化交流基金會邀請擔任《第五屆西班牙巴塞隆納國際合唱大賽》國際評審、《第三屆歐洲國際合唱大賽暨冠軍賽》舉辦於拉脫維亞擔任國際評審，2018年7月受台北愛樂文教基金會邀請擔任《第一屆臺北國際合唱大賽》國際評審。2018年至2020年間受客家委員會邀請擔任第一屆至第三屆《客家合唱比賽》評審。"),Je,Xe,n(" 　　2017年至2020年間，連續受邀至中國福建、廈門等地，擔任第一至第三屆《海峽兩岸合唱教育大會》國際講師，教授專題講座〈發聲法〉〈排練技巧〉〈指揮法〉與〈合唱音樂詮釋〉，累計參加之指揮學員達上千人，並指揮木樓合唱團演出數場專場音樂會。2017年受湖南省音樂家協會合唱專業委員會邀請擔任《第四屆合唱藝術工作坊》駐營國際講師，中國各地共500名指揮學員前來研習。2018年10月再受德國國際文化交流基金會邀請於中國貴陽教授三日大師班與指揮講座《世界音樂—合唱指揮研討會議》，來自中國200名指揮進行研習。2019年臺灣合唱協會規劃桂冠合唱講堂中，彭孟賢於臺北與花蓮兩地以「聲彩繽紛的合唱世界：美聲合唱養成」為題進行演講。2019年11月指揮原聲國際學院合唱團於《第二十一屆中國上海國際藝術節》演出專場音樂會，12月帶領國立客家兒童合唱團於國家音樂廳演出連篇交響詩《臺灣客家369樂章》，2020年製作指揮國立客家兒童合唱團《情寄客家》創團專場音樂會，深耕推廣合唱文化教育與合唱藝術展演。"),Ye,Ze,n(" 　　彭孟賢在合唱藝術發展上有著理想，以其對合唱藝術的敏銳前瞻性，發展臺灣在地合唱，積極推廣臺灣合唱文化藝術，並接軌國際合唱及深耕臺灣合唱教育與精緻合唱藝術展演，將合唱文化影響力推深及廣。 ")]),_:1})])]),_:1}),t(V,{cols:"12",md:"6",order:"1","order-md":"2"},{default:s(()=>[t(h,{src:Q,rounded:""})]),_:1})]),_:1})]),_:1}),t(b,{"data-aos":"fade-right","data-aos-offset":"1000"},{default:s(()=>[t(U,{class:"text-bg"},{default:s(()=>[t(V,{cols:"12",md:"6"},{default:s(()=>[t(h,{src:$e})]),_:1}),t(V,{cols:"12",md:"6",class:"text-center align-content-center"},{default:s(()=>[Ke,et,tt,t(T,{title:"鋼琴　王乃加","data-aos":"fade-down"},{content:s(()=>[n(" 　　自3歲開始學習鋼琴。師事謝秋月、林得恩、徐頌仁、諸大明等教授。曾受鋼琴家史蘭倩絲卡讚譽「擁有驚人的視譜能力，是位不可多得的伴奏家」。美國新英格蘭音樂院教授派翠希亞．桑德讚賞「其演奏令人印象深刻，是位有潛力、天賦異稟的鋼琴家」。現任教於多所音樂班，以及擔任台北愛樂歌劇坊、台北室內合唱團、木樓合唱團鋼琴合作。亦擁有個人專屬頻道，定期發表編創作品。"),lt,st,n(" 　　近年來活躍於樂壇，累積豐富的演出經歷，多次受邀於巴赫音樂節、國際合唱音樂節演出。與台北愛樂歌劇坊演出《費加洛婚禮》、《法斯塔夫》、《喬凡尼先生》、《塞維爾的理髮師》、《愛情靈藥》、《弄臣》等多部歌劇，並演出近四十場《甘泉藝文沙龍音樂會》。與台北室內合唱團錄製〈大地之歌〉、〈謠唱島嶼〉、〈聽你．聽我〉、〈當代狂潮〉專輯，入圍及榮獲金曲獎。與木樓合唱團錄製〈文學與音樂的對話〉、〈木色Ⅱ〉、〈吹動島嶼的風〉〈木色Ⅲ愛的禮讚〉專輯。與天作之合劇團演出創團劇《天堂邊緣》。"),at,it,n(" 　　2019年11月與台北室內合唱團赴海南島演出。2017年9月與台北室內合唱團赴上海現代音樂節演出。3月和大提琴家張正傑赴印度演出。2015年與台北室內合唱團於香港演出。2012年與台北愛樂室內合唱團受邀至北京及西安等地演出。2009與台北室內合唱團於香港、日本演出。2007年受邀於湖南大學演出鋼琴獨奏。2001年入圍華信愛樂鋼琴菁英獎，接受古典愛樂電臺專訪。 ")]),_:1})]),_:1})]),_:1})]),_:1})])]))}},Vt=ve(ot,[["__scopeId","data-v-f2634f9b"]]);export{Vt as default};
