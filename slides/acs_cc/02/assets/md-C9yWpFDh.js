import{d as g,t as b,a6 as $,o as p,b as k,e as t,m as c,B as n,g as w,c as v,k as f,l as O,ac as u,q as C,s as P}from"./modules/vue-CA2n1rq1.js";import{am as x}from"./index-DwXs9ow3.js";import{_ as I}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-Dbe74TJS.js";import{u as _,f as B}from"./slidev/context-D3EokhXE.js";import"./modules/shiki-7akj1J5k.js";const S=["width","height"],V=["id"],W=["fill"],A=["id"],D=["fill"],G=["x1","y1","x2","y2","stroke","stroke-width","marker-end","marker-start"],M=["x1","y1","x2","y2"],N=g({__name:"Arrow",props:{x1:{},y1:{},x2:{},y2:{},width:{},color:{},twoWay:{type:Boolean}},emits:["dblclick","clickOutside"],setup(y,{emit:m}){const l=m,s=x(),a={markerUnits:"strokeWidth",markerHeight:7,refY:3.5,orient:"auto"},d=b();return $(d,()=>l("clickOutside")),(e,o)=>(p(),k("svg",{class:"absolute left-0 top-0",width:Math.max(+e.x1,+e.x2)+50,height:Math.max(+e.y1,+e.y2)+50},[t("defs",null,[t("marker",c({id:n(s),markerWidth:"10",refX:"9"},a),[t("polygon",{points:"0 0, 10 3.5, 0 7",fill:e.color||"currentColor",onDblclick:o[0]||(o[0]=i=>l("dblclick"))},null,40,W)],16,V),e.twoWay?(p(),k("marker",c({key:0,id:`${n(s)}-rev`,markerWidth:"20",refX:"11"},a),[t("polygon",{points:"20 0, 10 3.5, 20 7",fill:e.color||"currentColor",onDblclick:o[1]||(o[1]=i=>l("dblclick"))},null,40,D)],16,A)):w("v-if",!0)]),t("line",{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stroke:e.color||"currentColor","stroke-width":e.width||2,"marker-end":`url(#${n(s)})`,"marker-start":e.twoWay?`url(#${n(s)}-rev)`:"none",onDblclick:o[2]||(o[2]=i=>l("dblclick"))},null,40,G),t("line",{ref_key:"clickArea",ref:d,x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stroke:"transparent","stroke-linecap":"round","stroke-width":20,onDblclick:o[3]||(o[3]=i=>l("dblclick"))},null,40,M)],8,S))}}),U="/slides/acs_cc/02/assets/rp2040_chip-CV0iByFf.png",X="/slides/acs_cc/02/assets/pin_functions-8nVvajmE.png",H={__name:"slides.md__slidev_48",setup(y){const{$slidev:m,$nav:l,$clicksContext:s,$clicks:a,$page:d,$renderContext:e,$frontmatter:o}=_();return s.setup(),(i,r)=>{const h=N;return p(),v(I,C(P(n(B)(n(o),47))),{right:f(z=>[r[0]||(r[0]=t("h2",null,"Peripherals",-1)),r[1]||(r[1]=t("table",null,[t("thead",null,[t("tr",null,[t("th"),t("th")])]),t("tbody",null,[t("tr",null,[t("td",null,"SIO"),t("td",null,"Single Cycle Input/Output, is able to control the GPIO pins")]),t("tr",null,[t("td",null,"GPIO"),t("td",null,"Multiplexes the functions of the GPIO pins")])])],-1)),r[2]||(r[2]=t("img",{src:X,class:"rounded"},null,-1)),O(h,{x1:"520",y1:"220",x2:"714",y2:"270",color:"#0060df",width:"2",arrowSize:"1"})]),default:f(()=>[r[3]||(r[3]=t("h1",null,"GPIO",-1)),r[4]||(r[4]=t("div",{align:"center"},[t("img",{src:U,class:"h-80 rounded"})],-1)),r[5]||(r[5]=t("p",null,[t("em",null,"SIO"),u(": Set the pin as Input or Output"),t("br"),t("em",null,"IO Bank (GPIO)"),u(": Use the correct MUX function (F5)"),t("br"),t("em",null,"PAD"),u(": Set the pin input and output parameters")],-1))]),_:1},16)}}};export{H as default};
