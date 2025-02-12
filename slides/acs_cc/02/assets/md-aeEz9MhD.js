import{_ as d}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Ddi1bEaP.js";import{o as p,c as g,k as a,e as i,ac as s,l,m as k,q as o,s as y,B as h}from"./modules/vue-3IkLI3QN.js";import{I as A}from"./slidev/default-OA2FBA-c.js";import{u as B,f as u}from"./slidev/context-Dlaph57V.js";import"./modules/unplugin-icons-ChrubmjO.js";import"./index-C0ijmvUP.js";import"./modules/shiki-T74XZk3k.js";const S={__name:"c.md__slidev_22",setup(D){const{$slidev:c,$nav:f,$clicksContext:n,$clicks:C,$page:b,$renderContext:m,$frontmatter:r}=B();return n.setup(),(_,t)=>{const e=d;return p(),g(A,o(y(h(u)(h(r),21))),{default:a(()=>[t[2]||(t[2]=i("h1",null,"Bitwise Ops - in C",-1)),t[3]||(t[3]=i("h2",null,[s("Set the "),i("code",null,"1"),s(" on position "),i("code",null,"bit"),s(" of "),i("code",null,"register"),s(" in C")],-1)),l(e,k({},{ranges:["all","2","3","4","1,5,6"]}),{default:a(()=>t[0]||(t[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-c"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"unsigned"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," int"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," set_bit"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"unsigned"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," int"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," register_value"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," unsigned"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," char"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," bit"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // assume register_value is 0b1000, bit is 2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    //   1 << 2 is 0b0100")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    //   0b1000 | 0b0100 is 0b1100")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"    return"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," register_value "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"|"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," <<"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," bit"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)])),_:1},16),t[4]||(t[4]=i("h2",null,"Set multiple bits",-1)),l(e,k({},{ranges:[]}),{default:a(()=>t[1]||(t[1]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-c"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"unsigned"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," int"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," set_bits"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"unsigned"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," int"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," register_value"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," unsigned"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," int"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," bits"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // assume register_value is 0b1000, bits is 0b0111")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    //   0b1000 | 0b0111 is 0b1111")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"    return"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," register_value "),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"|"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," bits"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)])),_:1},16)]),_:1},16)}}};export{S as default};
