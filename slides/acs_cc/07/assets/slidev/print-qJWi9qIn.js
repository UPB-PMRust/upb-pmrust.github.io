const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingPreview-S4YaY0tI.js","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-DftXqQZo.js","assets/modules/vue-hG-17ODh.js","assets/index-M2y9Cm6-.js","assets/modules/shiki-D4NO5lSi.js","assets/modules/shiki-Bxv373Z5.css","assets/index-5uBY-UwK.css"])))=>i.map(i=>d[i]);
import{d as v,z as l,_ as E,a9 as m,Z as M,a5 as V,o as n,b as r,l as u,C as e,i as $,c as S,g as h,h as z,M as C,a3 as b,F as d,Q as N,e as B,I as A,J as F}from"../modules/vue-hG-17ODh.js";import{t as I}from"../modules/shiki-D4NO5lSi.js";import{Q as T,R as _,S as W,h as f,i as j,T as D,P as G,_ as Q,l as k,x as y,C as H,U as x,V as p,f as J,W as K}from"../index-M2y9Cm6-.js";import{G as O,S as U,a as X}from"./SlideWrapper-D5icZhnm.js";import"./context-CwxOqQQZ.js";const Z=["id"],q=v({__name:"PrintSlideClick",props:{nav:{}},setup(o){const a=l(()=>o.nav.currentSlideRoute.value),s=l(()=>({height:`${T.value}px`,width:`${_.value}px`})),t=E();W(()=>import("./DrawingPreview-S4YaY0tI.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(i=>t.value=i.default);const c=l(()=>`${a.value.no.toString().padStart(3,"0")}-${(o.nav.clicks.value+1).toString().padStart(2,"0")}`);return m(j,M({nav:o.nav,configs:f,themeConfigs:l(()=>f.themeConfig)})),m(D,V("slide-element")),(i,g)=>(n(),r("div",{id:c.value,ref:"slide-element",class:"print-slide-container",style:z(s.value)},[u(e(O)),u(U,{"clicks-context":i.nav.clicksContext.value,class:$(e(G)(a.value)),route:a.value},null,8,["clicks-context","class","route"]),t.value?(n(),S(e(t),{key:0,page:a.value.no},null,8,["page"])):h("v-if",!0),u(e(X))],12,Z))}}),P=Q(q,[["__scopeId","data-v-8514f695"]]),Y=v({__name:"PrintSlide",props:{hidden:{type:Boolean},route:{}},setup(o){const{isPrintWithClicks:a}=k(),s=y(o.route,()=>a.value?0:H);return(t,c)=>(n(),r(d,null,[C(u(P,{nav:e(x)(t.route,e(s))},null,8,["nav"]),[[b,!t.hidden]]),e(a)?(n(),r(d,{key:0},[h(`
      clicks0.total can be any number >=0 when rendering.
      So total-clicksStart can be negative in intermediate states.
    `),(n(!0),r(d,null,N(Math.max(0,e(s).total-e(s).clicksStart),i=>C((n(),S(P,{key:i,nav:e(x)(t.route,e(y)(t.route,i+e(s).clicksStart))},null,8,["nav"])),[[b,!t.hidden]])),128))],64)):h("v-if",!0)],64))}}),ee={id:"print-content"},te=v({__name:"PrintContainer",props:{width:{}},setup(o){const a=o,{slides:s,printRange:t}=k(),c=l(()=>a.width),i=l(()=>a.width/p.value),g=l(()=>c.value/i.value),L=l(()=>g.value<p.value?c.value/_.value:i.value*p.value/_.value),R=l(()=>({"select-none":!f.selectable}));return m(J,L),(ne,se)=>(n(),r("div",{id:"print-container",class:$(R.value)},[B("div",ee,[(n(!0),r(d,null,N(e(t),w=>(n(),S(Y,{key:w,route:e(s)[w-1]},null,8,["route"]))),128))])],2))}}),ae={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},ue=v({__name:"print",setup(o){const{isPrintMode:a}=k();return A(()=>{a?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),F(()=>{I()}),(s,t)=>(n(),r("div",ae,[u(te,{class:"w-full h-full",style:{background:"var(--slidev-slide-container-background, black)"},width:e(K).width.value},null,8,["width"]),t[0]||(t[0]=B("div",{id:"twoslash-container"},null,-1))]))}});export{ue as default};
