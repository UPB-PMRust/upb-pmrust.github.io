import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Rr2BtIRF.js";import{o as d,c as g,k as a,e as i,ac as s,l as k,m as e,q as o,s as y,B as h}from"./modules/vue-3IkLI3QN.js";import{I as A}from"./slidev/default-CtxtTGA0.js";import{u as D,f as B}from"./slidev/context-CPlD-YuV.js";import"./modules/unplugin-icons-ChrubmjO.js";import"./index-CfIU1fUJ.js";import"./modules/shiki-T74XZk3k.js";const N={__name:"rust.md__slidev_6",setup(u){const{$slidev:f,$nav:b,$clicksContext:n,$clicks:c,$page:m,$renderContext:C,$frontmatter:r}=D();return n.setup(),(F,t)=>{const l=p;return d(),g(A,o(y(h(B)(h(r),5))),{default:a(()=>[t[2]||(t[2]=i("h1",null,"Flip bit",-1)),t[3]||(t[3]=i("h3",null,[s("Flip the bit on position "),i("code",null,"bit"),s(" of "),i("code",null,"register")],-1)),k(l,e({},{ranges:["all","2","3","4","1,5,6"]}),{default:a(()=>t[0]||(t[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-rust"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"fn"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," flip_bit"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"register"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," usize"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," bit"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u8"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," ->"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," usize"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // assume register is 0b1000, bit is 2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    //   1 << 2 is 0b0100")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    //   0b1100 ^ 0b0100 is 0b1000")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    register"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," ^"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," <<"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," bit")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)])),_:1},16),t[4]||(t[4]=i("h3",null,"Flip multiple bits",-1)),k(l,e({},{ranges:[]}),{default:a(()=>t[1]||(t[1]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-rust"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"fn"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," flip_bits"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"register"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," usize"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," bits"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," usize"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," ->"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," usize"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // assume register is 0b1000, bits is 0b0111")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    //   0b1000 ^ 0b0111 is 0b1111")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    register"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," ^"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," bits"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"   ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)])),_:1},16)]),_:1},16)}}};export{N as default};
