import{d as p,z as f,o as i,b as m,e as r,f as _,h as v,c as $,k as g,q as h,s as k,C as l}from"../modules/vue-CL5xpWoU.js";import{u as d,f as x}from"./context-kIrVtJrG.js";import"../index-DpVqY6Lx.js";import"../modules/shiki-DfjNPGy3.js";function c(e){return e.startsWith("/")?"/slides/fils_en/10"+e.slice(1):e}function y(e,n=!1){const s=e&&["#","rgb","hsl"].some(o=>e.indexOf(o)===0),t={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0005, #0008), url(${c(e)})`:`url("${c(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const C={class:"my-auto w-full"},b=p({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){d();const n=e,s=f(()=>y(n.background,!0));return(t,o)=>(i(),m("div",{class:"slidev-layout cover text-center",style:v(s.value)},[r("div",C,[_(t.$slots,"default")])],4))}}),R={__name:"slides.md__slidev_1",setup(e){const{$slidev:n,$nav:s,$clicksContext:t,$clicks:o,$page:B,$renderContext:S,$frontmatter:u}=d();return t.setup(),(z,a)=>(i(),$(b,h(k(l(x)(l(u),0))),{default:g(()=>a[0]||(a[0]=[r("h1",null,"Embedded Operating Systems",-1),r("p",null,"Lecture 10",-1)])),_:1},16))}};export{R as default};
