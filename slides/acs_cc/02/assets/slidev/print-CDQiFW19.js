const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingPreview-C2tecwov.js","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-DNbvcbCN.js","assets/modules/vue-3IkLI3QN.js","assets/index-C0ijmvUP.js","assets/modules/shiki-T74XZk3k.js","assets/modules/shiki-Bxv373Z5.css","assets/index-tG-ueoKf.css"])))=>i.map(i=>d[i]);
import{d as v,z as l,Q as z,ao as m,P as A,ak as D,o as n,b as r,l as u,B as e,i as $,c as k,g as h,h as F,ag as C,al as y,F as d,ai as B,e as N,D as R,L as M}from"../modules/vue-3IkLI3QN.js";import{t as V}from"../modules/shiki-T74XZk3k.js";import{q as j,v as _,w as G,x as f,y as I,z as T,A as W,_ as q,a as g,c as b,C as H,B as x,D as p,E as K,F as O}from"../index-C0ijmvUP.js";import{G as Q,S as X,a as J}from"./SlideWrapper-DiTVOErq.js";const U=["id"],Y=v({__name:"PrintSlideClick",props:{nav:{}},setup(o){const a=l(()=>o.nav.currentSlideRoute.value),s=l(()=>({height:`${j.value}px`,width:`${_.value}px`})),t=z();G(()=>import("./DrawingPreview-C2tecwov.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(i=>t.value=i.default);const c=l(()=>`${a.value.no.toString().padStart(3,"0")}-${(o.nav.clicks.value+1).toString().padStart(2,"0")}`);return m(I,A({nav:o.nav,configs:f,themeConfigs:l(()=>f.themeConfig)})),m(T,D("slide-element")),(i,S)=>(n(),r("div",{id:c.value,ref:"slide-element",class:"print-slide-container",style:F(s.value)},[u(e(Q)),u(X,{"clicks-context":i.nav.clicksContext.value,class:$(e(W)(a.value)),route:a.value},null,8,["clicks-context","class","route"]),t.value?(n(),k(e(t),{key:0,page:a.value.no},null,8,["page"])):h("v-if",!0),u(e(J))],12,U))}}),P=q(Y,[["__scopeId","data-v-8514f695"]]),Z=v({__name:"PrintSlide",props:{hidden:{type:Boolean},route:{}},setup(o){const{isPrintWithClicks:a}=g(),s=b(o.route,()=>a.value?0:H);return(t,c)=>(n(),r(d,null,[C(u(P,{nav:e(x)(t.route,e(s))},null,8,["nav"]),[[y,!t.hidden]]),e(a)?(n(),r(d,{key:0},[h(`
      clicks0.total can be any number >=0 when rendering.
      So total-clicksStart can be negative in intermediate states.
    `),(n(!0),r(d,null,B(Math.max(0,e(s).total-e(s).clicksStart),i=>C((n(),k(P,{key:i,nav:e(x)(t.route,e(b)(t.route,i+e(s).clicksStart))},null,8,["nav"])),[[y,!t.hidden]])),128))],64)):h("v-if",!0)],64))}}),ee={id:"print-content"},te=v({__name:"PrintContainer",props:{width:{}},setup(o){const a=o,{slides:s,printRange:t}=g(),c=l(()=>a.width),i=l(()=>a.width/p.value),S=l(()=>c.value/i.value),L=l(()=>S.value<p.value?c.value/_.value:i.value*p.value/_.value),E=l(()=>({"select-none":!f.selectable}));return m(K,L),(ne,se)=>(n(),r("div",{id:"print-container",class:$(E.value)},[N("div",ee,[(n(!0),r(d,null,B(e(t),w=>(n(),k(Z,{key:w,route:e(s)[w-1]},null,8,["route"]))),128))])],2))}}),ae={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},ce=v({__name:"print",setup(o){const{isPrintMode:a}=g();return R(()=>{a?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),M(()=>{V()}),(s,t)=>(n(),r("div",ae,[u(te,{class:"w-full h-full",style:{background:"var(--slidev-slide-container-background, black)"},width:e(O).width.value},null,8,["width"]),t[0]||(t[0]=N("div",{id:"twoslash-container"},null,-1))]))}});export{ce as default};
