import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BOw3keDL.js";import{o as d,c as g,k as l,e as i,l as t,m as h,ac as s,q as y,s as A,B as e}from"./modules/vue-B6YwjA3b.js";import{_ as o}from"./timer_registers_2-Brk1edk5.js";import{_ as B}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-kMNrc1So.js";import{u as m,f as u}from"./slidev/context-zVRH_9_z.js";import"./modules/unplugin-icons--RnrE72w.js";import"./index-_ZyV6vn9.js";import"./modules/shiki-CxvK6E5A.js";const N={__name:"slides.md__slidev_13",setup(c){const{$slidev:f,$nav:C,$clicksContext:n,$clicks:D,$page:_,$renderContext:E,$frontmatter:r}=m();return n.setup(),(v,a)=>{const k=p;return d(),g(B,y(A(e(u)(e(r),12))),{right:l(x=>a[2]||(a[2]=[i("div",{align:"center"},[i("img",{src:o,class:"rounded w-100"})],-1)])),default:l(()=>[a[3]||(a[3]=i("h1",null,"Alarm",-1)),a[4]||(a[4]=i("p",null,"triggering an interrupt at an interval",-1)),t(k,h({},{ranges:[]}),{default:l(()=>a[0]||(a[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-rust"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"#["),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"interrupt"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"unsafe"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," fn"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," TIMER_IRQ_0"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," /* alarm fired */"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }")])])],-1)])),_:1},16),t(k,h({},{ranges:["all","1,10","2,11,12","3,4,13"]}),{default:l(()=>a[1]||(a[1]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-rust"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," TIMERLR"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *const"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0x4005_400c"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," ALARM0"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0x4005_4010"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// + 0x2000 is bitwise set")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," INTE_SET"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *mut"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," u32"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0x4005_4038"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," +"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0x2000"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// set an alarm after 3 seconds")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," us"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 3_0000_0000"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"unsafe"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"    let"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," time"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," read_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"TIMERLR"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // use `wrapping_add` as overflowing may panic")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"    write_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"ALARM0"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," time"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"wrapping_add"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"us"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"));")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"    write_volatile"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"INTE_SET"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," <<"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"};")])])],-1)])),_:1},16),a[5]||(a[5]=i("ul",null,[i("li",null,"the alarm can be set only for the lower 32 bits"),i("li",null,[s("maximum 72 minutes (use "),i("em",null,"RTC"),s(" for longer alarms)")])],-1))]),_:1},16)}}};export{N as default};
