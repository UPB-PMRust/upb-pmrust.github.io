import{_ as n}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DnWg_-AV.js";import{o as r,c as p,k as h,e as i,l as d,m as g,ac as s,q as y,s as A,B as a}from"./modules/vue-DKbx_dbu.js";import{I as B}from"./slidev/default-CLKX-ypk.js";import{u as C,f as D}from"./slidev/context-DnJ3GH6k.js";import"./modules/unplugin-icons-B8P5KGpi.js";import"./index-ey_DloXA.js";import"./modules/shiki-BBRj7jCE.js";const w={__name:"slides.md__slidev_33",setup(o){const{$slidev:c,$nav:m,$clicksContext:l,$clicks:u,$page:f,$renderContext:F,$frontmatter:t}=C();return l.setup(),(_,k)=>{const e=n;return r(),p(B,y(A(a(D)(a(t),32))),{default:h(()=>[k[1]||(k[1]=i("h1",null,"ADC",-1)),k[2]||(k[2]=i("p",null,"in Embassy",-1)),d(e,g({},{ranges:["all","1","3-5","7","8","10","13-14","15","15,16","17","12,13,15,17,18"]}),{default:h(()=>k[0]||(k[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-rust"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"use"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," embassy_rp"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"adc"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"{"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"Adc"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Channel"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Config"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," InterruptHandler"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"};")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"bind_interrupts!"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"struct"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Irqs"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"    ADC_IRQ_FIFO"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," =>"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," InterruptHandler"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"});")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," p"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," embassy_rp"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"init"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"Default"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"default"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"());")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," mut"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," adc"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Adc"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"new"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"p"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"ADC"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Irqs"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," Config"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"default"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"());")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," mut"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," p26"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Channel"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"new_pin"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"p"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"PIN_26"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," Pull"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"None"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"loop"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"    let"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," level"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," adc"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"read"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"&mut"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," p26"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"await"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"unwrap"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"    info!"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Pin 26 ADC: "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"{}"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," level"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"    let"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," voltage"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 3300"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," level"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," /"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 4095"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"    info!"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Pin 26 voltage: "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"{}"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"."),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"{}"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"V"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," voltage"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," /"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1000"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," voltage"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," %"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1000"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"    Timer"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"after_secs"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"await"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)])),_:1},16)]),_:1},16)}}};export{w as default};
