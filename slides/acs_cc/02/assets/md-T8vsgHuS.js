import{_ as n}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DJe71ucc.js";import{o as r,c as p,k as h,e as i,ac as s,l as d,m as g,q as y,s as A,B as a}from"./modules/vue-CA2n1rq1.js";import{_ as B,a as o}from"./gpio_ctrl_register-CIv1QHeq.js";import{_ as C}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-Dbe74TJS.js";import{u as c,f as _}from"./slidev/context-D3EokhXE.js";import"./modules/unplugin-icons-rp0Zxjs_.js";import"./index-DwXs9ow3.js";import"./modules/shiki-7akj1J5k.js";const L={__name:"slides.md__slidev_56",setup(u){const{$slidev:D,$nav:m,$clicksContext:l,$clicks:E,$page:F,$renderContext:f,$frontmatter:t}=c();return l.setup(),(O,k)=>{const e=n;return r(),p(C,y(A(a(_)(a(t),55))),{right:h(x=>k[1]||(k[1]=[i("h5",null,"GPIOx_CTRL",-1),i("p",null,[s("Offset: 0x004, 0x00c, … 0x0ec (0x4 + 8*x) "),i("img",{src:B,class:"rounded"})],-1)])),default:h(()=>[k[2]||(k[2]=i("h1",null,"IO Bank Output",-1)),k[3]||(k[3]=i("img",{src:o,class:"rounded"},null,-1)),d(e,g({},{ranges:["all","4,9","9,11","5,12","6,7,13-16","17"]}),{default:h(()=>k[0]||(k[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-rust"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"use"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," core"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"ptr"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"read_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"use"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," core"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"ptr"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"write_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," GPIOX_CTRL"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0x4001_4004"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," GPIO_OE_SET"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0xd000_0024"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," as"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," GPIO_OUT_SET"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":*mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0xd000_0014"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," as"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," GPIO_OUT_CLR"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":*mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0xd000_0018"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," as"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," gpio_ctrl"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"GPIOX_CTRL"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," +"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 8"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," pin"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," as"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"unsafe"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"    write_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"gpio_ctrl"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 5"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"    write_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"GPIO_OE_SET"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," <<"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," pin"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"    let"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," reg"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," match"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," value"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"      0"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," =>"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," GPIO_OUT_CLR"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"      _"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," =>"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," GPIO_OUT_SET")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    };")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"    write_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"reg"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," <<"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," pin"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"};")])])],-1)])),_:1},16)]),_:1},16)}}};export{L as default};
