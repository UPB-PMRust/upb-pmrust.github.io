const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingPreview-Dd6km6SC.js","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-WWMoLlby.js","assets/modules/vue-CbgvOqXg.js","assets/index-BFr_FCKg.js","assets/modules/shiki-DzUaBWIh.js","assets/modules/shiki-Bxv373Z5.css","assets/index-CR7bH6jR.css"])))=>i.map(i=>d[i]);
import{d as v,z as l,W as R,a5 as m,V as T,a1 as V,o as n,b as r,l as u,B as e,i as $,c as S,g as h,h as z,T as C,$ as b,F as d,O as N,e as B,E as A,G as F}from"../modules/vue-CbgvOqXg.js";import{t as G}from"../modules/shiki-DzUaBWIh.js";import{O as M,P as _,Q as W,c as f,i as j,R as D,N as I,_ as O,l as k,v as y,C as H,S as x,T as p,h as K,U as Q}from"../index-BFr_FCKg.js";import{G as U,S as X,a as q}from"./SlideWrapper-CU_gQq8x.js";import"./context-tHxKCYXf.js";const J=["id"],Y=v({__name:"PrintSlideClick",props:{nav:{}},setup(o){const a=l(()=>o.nav.currentSlideRoute.value),s=l(()=>({height:`${M.value}px`,width:`${_.value}px`})),t=R();W(()=>import("./DrawingPreview-Dd6km6SC.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(i=>t.value=i.default);const c=l(()=>`${a.value.no.toString().padStart(3,"0")}-${(o.nav.clicks.value+1).toString().padStart(2,"0")}`);return m(j,T({nav:o.nav,configs:f,themeConfigs:l(()=>f.themeConfig)})),m(D,V("slide-element")),(i,g)=>(n(),r("div",{id:c.value,ref:"slide-element",class:"print-slide-container",style:z(s.value)},[u(e(U)),u(X,{"clicks-context":i.nav.clicksContext.value,class:$(e(I)(a.value)),route:a.value},null,8,["clicks-context","class","route"]),t.value?(n(),S(e(t),{key:0,page:a.value.no},null,8,["page"])):h("v-if",!0),u(e(q))],12,J))}}),P=O(Y,[["__scopeId","data-v-8514f695"]]),Z=v({__name:"PrintSlide",props:{hidden:{type:Boolean},route:{}},setup(o){const{isPrintWithClicks:a}=k(),s=y(o.route,()=>a.value?0:H);return(t,c)=>(n(),r(d,null,[C(u(P,{nav:e(x)(t.route,e(s))},null,8,["nav"]),[[b,!t.hidden]]),e(a)?(n(),r(d,{key:0},[h(`
      clicks0.total can be any number >=0 when rendering.
      So total-clicksStart can be negative in intermediate states.
    `),(n(!0),r(d,null,N(Math.max(0,e(s).total-e(s).clicksStart),i=>C((n(),S(P,{key:i,nav:e(x)(t.route,e(y)(t.route,i+e(s).clicksStart))},null,8,["nav"])),[[b,!t.hidden]])),128))],64)):h("v-if",!0)],64))}}),ee={id:"print-content"},te=v({__name:"PrintContainer",props:{width:{}},setup(o){const a=o,{slides:s,printRange:t}=k(),c=l(()=>a.width),i=l(()=>a.width/p.value),g=l(()=>c.value/i.value),E=l(()=>g.value<p.value?c.value/_.value:i.value*p.value/_.value),L=l(()=>({"select-none":!f.selectable}));return m(K,E),(ne,se)=>(n(),r("div",{id:"print-container",class:$(L.value)},[B("div",ee,[(n(!0),r(d,null,N(e(t),w=>(n(),S(Z,{key:w,route:e(s)[w-1]},null,8,["route"]))),128))])],2))}}),ae={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},ue=v({__name:"print",setup(o){const{isPrintMode:a}=k();return A(()=>{a?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),F(()=>{G()}),(s,t)=>(n(),r("div",ae,[u(te,{class:"w-full h-full",style:{background:"var(--slidev-slide-container-background, black)"},width:e(Q).width.value},null,8,["width"]),t[0]||(t[0]=B("div",{id:"twoslash-container"},null,-1))]))}});export{ue as default};
