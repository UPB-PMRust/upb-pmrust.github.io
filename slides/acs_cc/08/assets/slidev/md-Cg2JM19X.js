import{d as p,z as f,o as i,b as m,e as r,f as _,h as v,c as k,k as $,q as g,s as h,B as c}from"../modules/vue-CN3z6Qym.js";import{u,f as x}from"./context-B2Kzjdao.js";import"../index-BLrClVqf.js";import"../modules/shiki-BhTuFuac.js";function l(e){return e.startsWith("/")?"/slides/acs_cc/08"+e.slice(1):e}function y(e,o=!1){const s=e&&["#","rgb","hsl"].some(n=>e.indexOf(n)===0),t={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?o?`linear-gradient(#0005, #0008), url(${l(e)})`:`url("${l(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const B={class:"my-auto w-full"},C=p({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const o=e,s=f(()=>y(o.background,!0));return(t,n)=>(i(),m("div",{class:"slidev-layout cover text-center",style:v(s.value)},[r("div",B,[_(t.$slots,"default")])],4))}}),q={__name:"slides.md__slidev_1",setup(e){const{$slidev:o,$nav:s,$clicksContext:t,$clicks:n,$page:b,$renderContext:w,$frontmatter:d}=u();return t.setup(),(z,a)=>(i(),k(C,g(h(c(x)(c(d),0))),{default:$(()=>a[0]||(a[0]=[r("h1",null,"Networking",-1),r("p",null,"Lecture 8",-1)])),_:1},16))}};export{q as default};
