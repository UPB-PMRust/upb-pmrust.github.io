import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DnWg_-AV.js";import{o as d,c as g,k as l,e as i,ac as s,l as h,m as t,q as y,s as A,B as e}from"./modules/vue-DKbx_dbu.js";import{_ as o,a as B}from"./systick_csr_register-BdpucjZS.js";import{_ as u}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-BlBCBwmI.js";import{u as C,f as m}from"./slidev/context-DnJ3GH6k.js";import"./modules/unplugin-icons-B8P5KGpi.js";import"./index-ey_DloXA.js";import"./modules/shiki-BBRj7jCE.js";const N={__name:"slides.md__slidev_9",setup(c){const{$slidev:f,$nav:D,$clicksContext:n,$clicks:E,$page:_,$renderContext:S,$frontmatter:r}=C();return n.setup(),(F,k)=>{const a=p;return d(),g(u,y(A(e(m)(e(r),8))),{right:l(v=>[k[2]||(k[2]=i("h3",null,[i("code",null,"SYST_CSR"),s(" register")],-1)),k[3]||(k[3]=i("img",{src:o,class:"rounded"},null,-1)),k[4]||(k[4]=i("h3",null,[s("Register "),i("code",null,"SysTick"),s(" handler")],-1)),h(a,t({},{ranges:[]}),{default:l(()=>k[1]||(k[1]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-rust"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"#["),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"exception"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"unsafe"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," fn"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," SysTick"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    /* systick fired */"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)])),_:1},16)]),default:l(()=>[k[5]||(k[5]=i("h1",null,"SysTick",-1)),k[6]||(k[6]=i("p",null,"ARM Cortex-M peripheral",-1)),k[7]||(k[7]=i("img",{src:B,class:"rounded w-140"},null,-1)),h(a,t({},{ranges:["all","1,7,8","2,9","3,10,11"]}),{default:l(()=>k[0]||(k[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-rust"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," SYST_RVR"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0xe000_e014"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," as"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," SYST_CVR"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0xe000_e018"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," as"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," SYST_CSR"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0xe000_e010"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," as"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// fire systick every 5 seconds")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," interval"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 5_000_000"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"unsafe"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"    write_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"SYST_RVR"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," interval"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"    write_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"SYST_CVR"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // set fields `ENABLE` and `TICKINT`")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"    write_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"SYST_CSR"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0b11"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)])),_:1},16)]),_:1},16)}}};export{N as default};
