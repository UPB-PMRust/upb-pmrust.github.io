import{t as v,z as i,B as c,P as N,d as j,aG as P,a3 as A,ao as g,o as w,b as $,e as u,f as _,h as f,g as q,F}from"../modules/vue-DEQWyQKW.js";import{$ as D,a8 as r,a9 as U,aa as V,a as G,D as b,S as k,v as M,q as C,b as H,E as L,z as O,_ as T}from"../index-fd1oCgR2.js";function W(t){var e;return{info:v(((e=D(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const h={};function ie(t){function e(a){return h[a]??(h[a]=W(a))}return{info:i({get(){return e(c(t)).info.value},set(a){e(c(t)).info.value=a}}),update:async(a,o)=>{const n=e(o??c(t)),s=await n.update(a);return s&&(n.info.value=s),s}}}const l=N({});let J=[],K=[];r(l,"$syncUp",!0);r(l,"$syncDown",!0);r(l,"$paused",!1);r(l,"$onSet",t=>J.push(t));r(l,"$onPatch",t=>K.push(t));U();r(l,"$patch",async()=>!1);const Q=V(l,l,!0);var x;(x=window.navigator.userAgent.match(/Chrome\/(\d+)/))==null||x[1];var B;(B=window.navigator.userAgent.match(/Chrome\/(\d+)/))==null||B[1];class R{constructor(){this._screenshotSession=null}getSnapshot(e,a){const o=e+(a?"-dark":"-light"),n=Q.state[o];if(!n)return;const s=D(e);if(s&&(n==null?void 0:n.revision)===(s==null?void 0:s.meta.slide.revision))return n.image}async saveSnapshot(e,a,o){return!1}async startCapturing(e){return!1}}const X=new R,Y=["id"],Z=["id"],ee={class:"slidev-slide-container w-full h-full relative"},te=["src"],ae=j({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1},no:{type:Number,required:!1},useSnapshot:{type:Boolean,default:!1},contentStyle:{type:Object,default:()=>({})}},setup(t){const e=t,{isPrintMode:a}=G(),o=v(null),n=P(o),s=v(null),E=i(()=>e.width??n.width.value),z=i(()=>e.width?e.width/b.value:n.height.value),d=i(()=>k.value&&!a.value?+k.value:Math.min(E.value/M.value,z.value/C.value)),I=i(()=>({...e.contentStyle,height:`${C.value}px`,width:`${M.value}px`,transform:`translate(-50%, -50%) scale(${d.value})`,"--slidev-slide-scale":d.value})),p=i(()=>e.width?{width:`${e.width}px`,height:`${e.width/b.value}px`}:{});e.isMain&&A(i(()=>`:root { --slidev-slide-scale: ${d.value}; }`)),g(L,d),g(O,s);const S=i(()=>{if(!(e.no==null||!e.useSnapshot))return X.getSnapshot(e.no,H.value)});return(m,y)=>S.value?(w(),$(F,{key:1},[q(" Image Snapshot "),u("div",ee,[u("img",{src:S.value,class:"w-full h-full object-cover",style:f(p.value)},null,12,te),y[0]||(y[0]=u("div",{absolute:"","bottom-1":"","right-1":"","p0.5":"","text-cyan:75":"","bg-cyan:10":"",rounded:"",title:"Snapshot"},[u("div",{class:"i-carbon-camera"})],-1))])],2112)):(w(),$("div",{key:0,id:t.isMain?"slide-container":void 0,ref_key:"container",ref:o,class:"slidev-slide-container",style:f(p.value)},[u("div",{id:t.isMain?"slide-content":void 0,ref_key:"slideElement",ref:s,class:"slidev-slide-content",style:f(I.value)},[_(m.$slots,"default",{},void 0,!0)],12,Z),_(m.$slots,"controls",{},void 0,!0)],12,Y))}}),le=T(ae,[["__scopeId","data-v-0f1b262a"]]);export{le as S,W as a,ie as u};
