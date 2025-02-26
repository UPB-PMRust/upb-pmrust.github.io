import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-iQswvviH.js";import{o as d,c as g,k as h,e as i,l as t,m as l,C as s,q as y,s as A,B as e}from"./modules/vue-Bffu7dd3.js";import{I as B}from"./slidev/default-L7Y4ynpx.js";import{u as c,f as o}from"./slidev/context-DgT5fMFw.js";import"./modules/unplugin-icons-DcPIiIJR.js";import"./index-tHgztOIR.js";import"./modules/shiki-2dz5EIP7.js";const R={__name:"slides.md__slidev_31",setup(D){const{$slidev:C,$nav:f,$clicksContext:n,$clicks:u,$page:E,$renderContext:m,$frontmatter:r}=c();return n.setup(),(S,k)=>{const a=p;return d(),g(B,y(A(e(o)(e(r),30))),{default:h(()=>[k[2]||(k[2]=i("h1",null,"Start the network stack",-1)),k[3]||(k[3]=i("ol",null,[i("li",null,"Write a network task")],-1)),t(a,l({lines:!1},{ranges:["*"]}),{default:h(()=>k[0]||(k[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-rust"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"#["),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"embassy_executor"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"task"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"async"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," fn"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," net_task"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"stack"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," &"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"'"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"static"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Stack"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"cyw43"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"NetDriver"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<'"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"static"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">>)"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," ->"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," !"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    stack"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"run"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"await")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)])),_:1},16),k[4]||(k[4]=i("ol",{start:"2"},[i("li",null,"Start the network stack")],-1)),t(a,l({},{ranges:["1,2","4,5","4,6","4,7-12","14"]}),{default:h(()=>k[1]||(k[1]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-rust"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// chosen by fair dice roll. guaranteed to be random.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," seed"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0x0123_4567_89ab_cdef"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Init network stack")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"static"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," STACK"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," StaticCell"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"Stack"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"cyw43"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"NetDriver"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<'"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"static"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">>>"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," StaticCell"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"new"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"static"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," RESOURCES"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," StaticCell"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"StackResources"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"2"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">>"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," StaticCell"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"new"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," stack"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," &*"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"STACK"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"init"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"Stack"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"new"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    net_device"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    config"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"    RESOURCES"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"init"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"StackResources"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"2"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"new"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    seed"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"));")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"unwrap!"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"spawner"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"spawn"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"net_task"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"stack"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")));")])])],-1)])),_:1},16)]),_:1},16)}}};export{R as default};
