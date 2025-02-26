import{_ as n}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DJe71ucc.js";import{o as r,c as p,k as t,e as i,ac as s,l as d,m as o,q as g,s as y,B as a}from"./modules/vue-CA2n1rq1.js";import{_ as u}from"./sysctrl_registers-BZzIa36P.js";import{_ as A}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-Dbe74TJS.js";import{u as m,f as c}from"./slidev/context-D3EokhXE.js";import"./modules/unplugin-icons-rp0Zxjs_.js";import"./index-DwXs9ow3.js";import"./modules/shiki-7akj1J5k.js";const T={__name:"slides.md__slidev_31",setup(B){const{$slidev:C,$nav:_,$clicksContext:e,$clicks:f,$page:D,$renderContext:E,$frontmatter:k}=m();return e.setup(),(v,l)=>{const h=n;return r(),p(A,g(y(a(c)(a(k),30))),{right:t(x=>l[1]||(l[1]=[i("p",null,[i("img",{src:u,alt:"SysCtrl Registers"})],-1)])),default:t(()=>[l[2]||(l[2]=i("h1",null,"No Compiler Optimization",-1)),l[3]||(l[3]=i("p",null,[s("CPUID: "),i("strong",null,"0xe000_ed00"),s(" ("),i("em",null,"0xe000_0000 + 0xed00"),s(")")],-1)),d(h,o({},{ranges:["all","1","3-4","6","7-10"]}),{default:t(()=>l[0]||(l[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-rust"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"use"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," core"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"ptr"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"read_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," SYS_CTRL"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," usize"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0xe000_0000"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," CPUID"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," usize"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0xed00"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," cpuid_reg"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"SYS_CTRL"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," +"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," CPUID"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," as"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *const"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"unsafe"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"	// avoid compiler optimization")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"	read_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"cpuid_reg"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)])),_:1},16),l[4]||(l[4]=i("table",null,[i("thead",null,[i("tr",null,[i("th"),i("th")])]),i("tbody",null,[i("tr",null,[i("td",null,[i("code",null,"read_volatile"),s(", "),i("code",null,"write_volatile")]),i("td",null,[i("strong",null,"no"),s(" compiler "),i("strong",null,"optimization")])]),i("tr",null,[i("td",null,[i("code",null,"read"),s(", "),i("code",null,"write"),s(", "),i("code",null,"*p")]),i("td",null,[i("strong",null,"use"),s(" compiler "),i("strong",null,"optimization")])])])],-1))]),_:1},16)}}};export{T as default};
