import{_ as L,a as w}from"../modules/unplugin-icons-C3Ul7TD2.js";import{d as A,t as E,H as N,I as y,J as B,z as _,K as q,o as c,b as v,f as M,C as u,c as C,g as V,i as z,h as K}from"../modules/vue-C77xe5bo.js";import{h as k,m as $,C as D,j as R,u as j}from"../index-FLOW2kxs.js";import{u as J}from"./context-B02dhZ3t.js";const U=["title"],P=A({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:k.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(S){const e=S,{$clicksContext:a}=J(),n=E(),d=$();N(()=>{a.unregister(d)}),y(()=>{var t;(t=n.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),B(()=>{var r;if(!a||!((r=e.ranges)!=null&&r.length))return;const t=a.calculateSince(e.at,e.ranges.length-1);a.register(d,t);const o=_(()=>t?Math.max(0,a.current-t.start+1):D),s=_(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());y(()=>{if(!n.value)return;let i=e.ranges[o.value]??s.value;const g=i==="hide";n.value.classList.toggle(R,g),g&&(i=e.ranges[o.value+1]??s.value);const h=n.value.querySelector(".shiki"),f=Array.from(h.querySelectorAll("code > .line")),H=f.length;if(j(i,H,e.startLine,l=>[f[l]]),e.maxHeight){const l=Array.from(h.querySelectorAll(".line.highlighted"));l.reduce((m,I)=>I.offsetHeight+m,0)>n.value.offsetHeight?l[0].scrollIntoView({behavior:"smooth",block:"start"}):l.length>0&&l[Math.round((l.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:p,copy:b}=q();function x(){var o,s;const t=(s=(o=n.value)==null?void 0:o.querySelector(".slidev-code"))==null?void 0:s.textContent;t&&b(t)}return(t,o)=>{const s=L,r=w;return c(),v("div",{ref_key:"el",ref:n,class:z(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:K({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[M(t.$slots,"default"),u(k).codeCopy?(c(),v("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:u(p)?"Copied":"Copy",onClick:o[0]||(o[0]=i=>x())},[u(p)?(c(),C(s,{key:0,class:"p-2 w-8 h-8"})):(c(),C(r,{key:1,class:"p-2 w-8 h-8"}))],8,U)):V("v-if",!0)],6)}}});export{P as _};
