import{t as v,z as i,B as c,V as j,d as z,a6 as P,N as V,a5 as g,o as w,b as _,e as u,f as $,h as f,g as A,F}from"../modules/vue-CbgvOqXg.js";import{V as N,W as r,X as O,Y as T,l as U,T as b,Z as k,P as M,O as C,r as W,h as q,R as H,_ as L}from"../index-BFr_FCKg.js";function R(t){var e;return{info:v(((e=N(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const h={};function ie(t){function e(a){return h[a]??(h[a]=R(a))}return{info:i({get(){return e(c(t)).info.value},set(a){e(c(t)).info.value=a}}),update:async(a,o)=>{const n=e(o??c(t)),s=await n.update(a);return s&&(n.info.value=s),s}}}const l=j({});let X=[],Y=[];r(l,"$syncUp",!0);r(l,"$syncDown",!0);r(l,"$paused",!1);r(l,"$onSet",t=>X.push(t));r(l,"$onPatch",t=>Y.push(t));O();r(l,"$patch",async()=>!1);const Z=T(l,l,!0);var x;(x=window.navigator.userAgent.match(/Chrome\/(\d+)/))==null||x[1];var B;(B=window.navigator.userAgent.match(/Chrome\/(\d+)/))==null||B[1];class G{constructor(){this._screenshotSession=null}getSnapshot(e,a){const o=e+(a?"-dark":"-light"),n=Z.state[o];if(!n)return;const s=N(e);if(s&&(n==null?void 0:n.revision)===(s==null?void 0:s.meta.slide.revision))return n.image}async saveSnapshot(e,a,o){return!1}async startCapturing(e){return!1}}const J=new G,K=["id"],Q=["id"],ee={class:"slidev-slide-container w-full h-full relative"},te=["src"],ae=z({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1},no:{type:Number,required:!1},useSnapshot:{type:Boolean,default:!1},contentStyle:{type:Object,default:()=>({})}},setup(t){const e=t,{isPrintMode:a}=U(),o=v(null),n=P(o),s=v(null),D=i(()=>e.width??n.width.value),E=i(()=>e.width?e.width/b.value:n.height.value),d=i(()=>k.value&&!a.value?+k.value:Math.min(D.value/M.value,E.value/C.value)),I=i(()=>({...e.contentStyle,height:`${C.value}px`,width:`${M.value}px`,transform:`translate(-50%, -50%) scale(${d.value})`,"--slidev-slide-scale":d.value})),p=i(()=>e.width?{width:`${e.width}px`,height:`${e.width/b.value}px`}:{});e.isMain&&V(i(()=>`:root { --slidev-slide-scale: ${d.value}; }`)),g(q,d),g(H,s);const S=i(()=>{if(!(e.no==null||!e.useSnapshot))return J.getSnapshot(e.no,W.value)});return(m,y)=>S.value?(w(),_(F,{key:1},[A(" Image Snapshot "),u("div",ee,[u("img",{src:S.value,class:"w-full h-full object-cover",style:f(p.value)},null,12,te),y[0]||(y[0]=u("div",{absolute:"","bottom-1":"","right-1":"","p0.5":"","text-cyan:75":"","bg-cyan:10":"",rounded:"",title:"Snapshot"},[u("div",{class:"i-carbon-camera"})],-1))])],2112)):(w(),_("div",{key:0,id:t.isMain?"slide-container":void 0,ref_key:"container",ref:o,class:"slidev-slide-container",style:f(p.value)},[u("div",{id:t.isMain?"slide-content":void 0,ref_key:"slideElement",ref:s,class:"slidev-slide-content",style:f(I.value)},[$(m.$slots,"default",{},void 0,!0)],12,Q),$(m.$slots,"controls",{},void 0,!0)],12,K))}}),le=L(ae,[["__scopeId","data-v-0f1b262a"]]);export{le as S,R as a,ie as u};
