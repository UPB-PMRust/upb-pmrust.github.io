import{d as p,z as r,ao as t,t as l,ae as f,o as c,b as v,l as d,B as s,c as C,av as x,i as _,h as g}from"../modules/vue-DhPaUGDG.js";import{ab as S,ac as b,ad as j,ae as y,af as h,x as k,A as z,ag as B,_ as G}from"../index-DgP76q7e.js";const W={render:()=>[]},A={render:()=>[]},O={render:()=>[]},R={render:()=>[]},$=["data-slidev-no","lang"],q=p({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(i){const e=i,o=r(()=>{var a,n;return((n=(a=e.route.meta)==null?void 0:a.slide)==null?void 0:n.frontmatter.zoom)??1});t(S,e.route),t(b,e.route.meta.slide.frontmatter),t(j,l(e.route.no)),t(y,l(e.renderContext)),t(h,f(e,"clicksContext")),t(B,o);const u=r(()=>o.value===1?void 0:{width:`${100/o.value}%`,height:`${100/o.value}%`,transformOrigin:"top left",transform:`scale(${o.value})`}),m=r(()=>({...u.value,"user-select":k.selectable?void 0:"none"}));return(a,n)=>(c(),v("div",{"data-slidev-no":e.route.no,class:_(s(z)(i.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:g(m.value),lang:e.route.meta.slide.frontmatter.lang},[d(s(R)),(c(),C(x(e.route.component))),d(s(O))],14,$))}}),D=G(q,[["__scopeId","data-v-89f8a958"]]);export{A as G,D as S,W as a};
