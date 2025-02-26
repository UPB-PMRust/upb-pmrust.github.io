import{o as r,c as u,k as t,e as l,ac as n,q as i,s as d,B as s}from"./modules/vue-DhPaUGDG.js";import{_ as m}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-6866eh-P.js";import{u as p,f}from"./slidev/context-Cxq8qIIM.js";import{_ as g}from"./index-0EyTsI9t.js";import"./modules/shiki-CSnDgpMH.js";const _="/slides/fils_en/09/assets/layout-BgnYmcYo.svg",b={__name:"slides.md__slidev_11",setup(c){const{$slidev:v,$nav:x,$clicksContext:o,$clicks:y,$page:$,$renderContext:k,$frontmatter:a}=p();return o.setup(),(w,e)=>(r(),u(m,i(d(s(f)(s(a),10))),{right:t(B=>e[0]||(e[0]=[l("img",{src:_,class:"w-64 rounded"},null,-1)])),default:t(()=>[e[1]||(e[1]=l("h1",null,"Memory Layout",-1)),e[2]||(e[2]=l("p",null,"protection",-1)),e[3]||(e[3]=l("h3",null,"Flash",-1)),e[4]||(e[4]=l("ul",null,[l("li",null,[l("strong",null,"Code"),n(" - "),l("em",null,"read"),n(" and "),l("em",null,"execute")]),l("li",null,[l("strong",null,".rodata"),n(" - constants - "),l("em",null,"read only")]),l("li",null,[l("strong",null,".data"),n(" - "),l("em",null,"in flash"),n(" - initialized global variables "),l("ul",null,[l("li",null,[n("is copied to RAM at startup by the "),l("code",null,"init"),n(" function")]),l("li",null,[l("em",null,"should not be accessed after startup")])])])],-1)),e[5]||(e[5]=l("h3",null,"RAM",-1)),e[6]||(e[6]=l("ul",null,[l("li",null,[l("strong",null,"stack"),n(" - "),l("em",null,"read"),n(" and "),l("em",null,"write"),l("ul",null,[l("li",null,[l("em",null,"usually protected by unaccessible memory before and after")])])]),l("li",null,[l("strong",null,".data"),n(" - "),l("em",null,"in RAM"),n(" - global variables - "),l("em",null,"read"),n(" and write")]),l("li",null,[l("strong",null,".bss"),n(" - global variables (not initialized or initialized to "),l("code",null,"0"),n(") - "),l("em",null,"read"),n(" and "),l("em",null,"write")])],-1))]),_:1},16))}},A=g(b,[["__scopeId","data-v-4efecae6"]]);export{A as default};
