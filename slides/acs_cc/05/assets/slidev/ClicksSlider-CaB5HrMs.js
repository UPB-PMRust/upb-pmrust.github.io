import{d as b,z as i,o as u,b as d,e as s,C as g,F as f,x as v,O as _,T as h,U as w,i as c,h as x}from"../modules/vue-C77xe5bo.js";import{y as z,z as S,C as B,_ as M}from"../index-FLOW2kxs.js";const F=["title"],T={class:"flex gap-0.2 items-center min-w-16 font-mono mr1"},$={"text-primary":""},D={op50:"","text-sm":""},I={key:1,op50:"","flex-auto":"",pl1:""},L={relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~"},U=["min","max"],V=b({__name:"ClicksSlider",props:{clicksContext:{},readonly:{type:Boolean},active:{type:Boolean,default:!0}},setup(y){const a=y,t=i(()=>a.clicksContext.total),p=i(()=>z(0,a.clicksContext.clicksStart,t.value)),r=i(()=>t.value-p.value+1),l=i({get(){return a.clicksContext.current>t.value?-1:a.clicksContext.current},set(n){a.clicksContext.current=n}}),k=i(()=>S(p.value,t.value+1));function C(){a.readonly||(l.value<0||l.value>t.value)&&(l.value=0)}return(n,o)=>(u(),d("div",{class:c(["flex gap-1 items-center select-none",r.value&&a.clicksContext.isMounted?"":"op50"]),title:`Clicks in this slide: ${r.value}`},[s("div",T,[o[4]||(o[4]=s("div",{class:"i-carbon:cursor-1 text-sm op50"},null,-1)),l.value>=0&&l.value!==g(B)&&n.active?(u(),d(f,{key:0},[o[2]||(o[2]=s("div",{"flex-auto":""},null,-1)),s("span",$,v(l.value),1),o[3]||(o[3]=s("span",{op25:"","text-sm":""},"/",-1)),s("span",D,v(t.value),1)],64)):(u(),d("div",I,v(t.value),1))]),s("div",L,[(u(!0),d(f,null,_(k.value,e=>(u(),d("div",{key:e,border:"y main","of-hidden":"",relative:"",class:c([e===0?"rounded-l border-l":"",e===t.value?"rounded-r border-r":""]),style:x({width:r.value>0?`${1/r.value*100}%`:"100%"})},[s("div",{absolute:"","inset-0":"",class:c(e<=l.value&&n.active?"bg-primary op15":"")},null,2),s("div",{class:c([+e==+l.value&&n.active?"text-primary font-bold op100 border-primary":"op30 border-main",e===0?"rounded-l":"",e===t.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},v(e),3)],6))),128)),h(s("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e),class:c(["range",n.readonly?"pointer-events-none":""]),type:"range",min:p.value,max:t.value,step:1,absolute:"","inset-0":"","z-label":"",op0:"",style:x({"--thumb-width":`${1/(r.value+1)*100}%`}),onMousedown:C,onFocus:o[1]||(o[1]=e=>{var m;return(m=e.currentTarget)==null?void 0:m.blur()})},null,46,U),[[w,l.value]])])],10,F))}}),E=M(V,[["__scopeId","data-v-2f60c910"]]);export{E as C};
