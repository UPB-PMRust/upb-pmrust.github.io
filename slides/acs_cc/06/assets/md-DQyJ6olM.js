import{d as m,v as i,aH as _,o as c,c as h,k as a,e,ac as s,l as u,q as g,s as y,B as d}from"./modules/vue-DEQWyQKW.js";import{C as x,_ as C}from"./index-fd1oCgR2.js";import{_ as $}from"./slidev/VClicks-CBNs_Tvf.js";import{_ as M}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-DNQKT3Gi.js";import{u as k,f as v}from"./slidev/context-DE4pAaeJ.js";import"./modules/shiki-XbUv2Cd0.js";const b=m({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:l=>i("span",l)}},render(){return i($,{every:x,at:this.at,hide:this.hide,fade:this.fade,handleSpecialElements:!1},{default:()=>{var l,n;return(n=(l=this.$slots).default)==null?void 0:n.call(l).map(o=>o.type===_?this.wrapText(o):o)}})}}),w="/slides/acs_cc/06/assets/dma-D7APsCf2.svg",A={__name:"slides.md__slidev_5",setup(l){const{$slidev:n,$nav:o,$clicksContext:p,$clicks:B,$page:D,$renderContext:P,$frontmatter:f}=k();return p.setup(),(T,t)=>{const r=b;return c(),h(M,g(y(d(v)(d(f),4))),{right:a(N=>t[2]||(t[2]=[e("img",{src:w,class:"rounded"},null,-1)])),default:a(()=>[t[3]||(t[3]=e("h1",null,"DMA",-1)),t[4]||(t[4]=e("ul",null,[e("li",null,[s("offloads the MCU from doing "),e("strong",null,"memory to memory"),s(" operations")]),e("li",null,[s("due to MMIO, usually implies "),e("strong",null,"transfers from and to peripherals")]),e("li",null,"raises an interrupt when a transfer is done")],-1)),u(r,null,{default:a(()=>t[0]||(t[0]=[e("p",null,"⚠️ DMA does not know about the data stored in cache.",-1)])),_:1}),u(r,null,{default:a(()=>t[1]||(t[1]=[e("ul",null,[e("li",null,[s("for chips that use cache "),e("ul",null,[e("li",null,[s("the DMA buffer’s memory region has to be set manually to "),e("em",null,"nocache"),s(" (if MCU knows)")]),e("li",null,"or, the cache has to be flushed before and, possibly after, a DMA transfer")])])],-1)])),_:1})]),_:1},16)}}},E=C(A,[["__scopeId","data-v-57ec73f1"]]);export{E as default};
