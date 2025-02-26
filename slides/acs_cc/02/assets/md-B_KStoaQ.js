import{_ as n}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DJe71ucc.js";import{o as r,c as p,k as l,e as i,l as d,m as g,ac as k,q as o,s as y,B as a}from"./modules/vue-CA2n1rq1.js";import{_ as A}from"./sio_registers-CFV3GWPG.js";import{_ as B}from"./sio_gpio_oe-Chzin8uV.js";import{_ as m}from"./sio_gpio_in-Douo1SM_.js";import{_}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-Dbe74TJS.js";import{u as C,f as D}from"./slidev/context-D3EokhXE.js";import"./modules/unplugin-icons-rp0Zxjs_.js";import"./index-DwXs9ow3.js";import"./modules/shiki-7akj1J5k.js";const q={__name:"slides.md__slidev_50",setup(u){const{$slidev:c,$nav:f,$clicksContext:t,$clicks:E,$page:v,$renderContext:O,$frontmatter:h}=C();return t.setup(),(F,s)=>{const e=n;return r(),p(_,o(y(a(D)(a(h),49))),{right:l(I=>[s[1]||(s[1]=i("h5",null,"GPIO_IN",-1)),s[2]||(s[2]=i("img",{src:m,class:"rounded"},null,-1)),d(e,g({},{ranges:["all","4,8","4,9","10,11","4,12","5,7,13,14"]}),{default:l(()=>s[0]||(s[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-rust"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"use"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," core"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"ptr"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"read_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),k(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"use"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," core"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"ptr"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"write_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),k(`
`),i("span",{class:"line"}),k(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," GPIO_OE"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0xd000_0020"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," as"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),k(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," GPIO_IN"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *const"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0xd000_0004"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," as"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *const"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),k(`
`),i("span",{class:"line"}),k(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," value"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," unsafe"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ")]),k(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // write_volatile(GPIO_OE, !(1 << pin));")]),k(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"    let"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," gpio_oe"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," read_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"GPIO_OE"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),k(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // set bin `pin` of `gpio_oe` to 0 (input)")]),k(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    gpio_oe"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," gpio_oe"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," &"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," !"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," <<"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," pin"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),k(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"    write_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"GPIO_OE"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," gpio_oe"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),k(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"    read_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"GPIO_IN"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," >>"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," pin"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," &"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0b1")]),k(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"};")])])],-1)])),_:1},16)]),default:l(()=>[s[3]||(s[3]=i("h1",null,"SIO Input",-1)),s[4]||(s[4]=i("img",{src:A,class:"rounded"},null,-1)),s[5]||(s[5]=i("h5",null,"GPIO_OE",-1)),s[6]||(s[6]=i("img",{src:B,class:"rounded"},null,-1))]),_:1},16)}}};export{q as default};
