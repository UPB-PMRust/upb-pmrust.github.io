import{d as p,z as r,a3 as t,t as l,E as f,o as c,b as C,l as d,C as s,c as v,A as _,i as g,h as x}from"../modules/vue-CCYl-6Lk.js";import{e as S,d as b,b as j,c as y,a as h,h as k,J as z,g as B,_ as G}from"../index-WKo7tjWB.js";const T={render:()=>[]},W={render:()=>[]},O={render:()=>[]},R={render:()=>[]},$=["data-slidev-no","lang"],q=p({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(i){const e=i,o=r(()=>{var n,a;return((a=(n=e.route.meta)==null?void 0:n.slide)==null?void 0:a.frontmatter.zoom)??1});t(S,e.route),t(b,e.route.meta.slide.frontmatter),t(j,l(e.route.no)),t(y,l(e.renderContext)),t(h,f(e,"clicksContext")),t(B,o);const u=r(()=>o.value===1?void 0:{width:`${100/o.value}%`,height:`${100/o.value}%`,transformOrigin:"top left",transform:`scale(${o.value})`}),m=r(()=>({...u.value,"user-select":k.selectable?void 0:"none"}));return(n,a)=>(c(),C("div",{"data-slidev-no":e.route.no,class:g(s(z)(i.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:x(m.value),lang:e.route.meta.slide.frontmatter.lang},[d(s(R)),(c(),v(_(e.route.component))),d(s(O))],14,$))}}),A=G(q,[["__scopeId","data-v-89f8a958"]]);export{W as G,A as S,T as a};
