import{_ as n}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BoI6AP6B.js";import{o as r,c as p,k as l,e as i,l as d,m as g,B as s,q as y,s as o,C as k}from"./modules/vue-CfOVo5sz.js";import{I as A}from"./slidev/default-CVfN6odP.js";import{u as c,f as u}from"./slidev/context-u_D7oJMp.js";import"./modules/unplugin-icons-vnfR6w8e.js";import"./index-C-rmmsl8.js";import"./modules/shiki-BCAiZ4dZ.js";const b={__name:"slides.md__slidev_20",setup(B){const{$slidev:D,$nav:f,$clicksContext:t,$clicks:m,$page:E,$renderContext:C,$frontmatter:h}=c();return t.setup(),(F,a)=>{const e=n;return r(),p(A,y(o(k(u)(k(h),19))),{default:l(()=>[a[1]||(a[1]=i("h1",null,"Executor",-1)),d(e,g({},{ranges:["all","1","4-16","5-12","14,15"]}),{default:l(()=>a[0]||(a[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-rust"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"static"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," TASKS"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ["),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"Option"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"impl"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Future"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">;"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," N"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ["),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"None"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," N"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"fn"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," executor"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"    loop"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"        // ask all tasks to continue if they have available data")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"        for"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," task"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," in"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," TASKS"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"iter_mut"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"            if"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," let"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Some"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"task"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," task"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"                if"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Poll"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"Ready"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"_"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," task"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"poll"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"                    *"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"task"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"  None")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"                }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"            }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"        }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"        // wait for interrupts")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"        cortex_m"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"asm"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"wfi"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)])),_:1},16),a[2]||(a[2]=i("ul",null,[i("li",null,[s("this is a simplified version, "),i("code",null,"Option<impl Future>"),s(" does not work")]),i("li",null,[s("the executor is not able to use "),i("code",null,"TASKS"),s(" like this")]),i("li",null,[s("an efficient executor will not poll all the tasks, it uses a "),i("code",null,"waker"),s(" that tasks use to signal the executor")])],-1))]),_:1},16)}}};export{b as default};
