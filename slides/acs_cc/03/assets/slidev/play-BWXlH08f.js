const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-Bhiqc9xN.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-Ccsz2lH9.js","assets/modules/vue-CbgvOqXg.js","assets/modules/shiki-DzUaBWIh.js","assets/modules/shiki-Bxv373Z5.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-C85UTqi7.js","assets/index-D5HfSqv9.js","assets/index-BZMPJK5g.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-U5aCoOm7.js","assets/slidev/shortcuts-_D3725F2.js","assets/slidev/SlideContainer-CW-v0dv_.js","assets/SlideContainer-D7-oIHLP.css","assets/slidev/context-BtcN1W8X.js","assets/modules/unplugin-icons-DWTsmq9r.js","assets/slidev/SlideWrapper-BwA6wv7K.js","assets/SlideWrapper-CDrmjCbE.css","assets/shortcuts-DiOZ60qP.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{z as b,M as B,a7 as N,d as h,Q as T,o as a,c as v,B as e,b as g,e as i,f as H,i as E,g as d,a8 as L,k as D,C as W,a4 as M,W as w,l as _,F as I,h as F,t as O}from"../modules/vue-CbgvOqXg.js";import{u as U}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-C85UTqi7.js";import{$ as A,c as x,l as P,Q as G,a0 as V,a1 as C,s as $,a2 as Q,J as S,a3 as m,a4 as k,a5 as j}from"../index-D5HfSqv9.js";import{c as J,G as K,d as X,u as Y,r as q,a as Z,S as ee,b as te,o as se}from"./shortcuts-_D3725F2.js";import{d as oe}from"../modules/unplugin-icons-DWTsmq9r.js";import{S as ae}from"./SlideContainer-CW-v0dv_.js";import"../modules/shiki-DzUaBWIh.js";import"./context-BtcN1W8X.js";import"./IconButton.vue_vue_type_script_setup_true_lang-U5aCoOm7.js";import"./SlideWrapper-BwA6wv7K.js";const ne=2e3;function le(f){const n=b(()=>f.value&&A.value);function r(){document.body.style.cursor="none"}function s(){document.body.style.cursor=""}let t=null;B(n,u=>{u||s()}),N(document.body,["pointermove","pointerdown"],()=>{s(),t&&clearTimeout(t),n.value&&(t=setTimeout(r,ne))},{passive:!0})}const ie="/slides/acs_cc/03/assets/logo-BYkHSa_O.png",re={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-modal"},ue=h({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(f,{emit:n}){const r=f,t=T(r,"modelValue",n);function u(){t.value=!1}return(p,o)=>(a(),v(L,null,[e(t)?(a(),g("div",re,[i("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=c=>u())}),i("div",{class:E(["m-auto rounded-md bg-main shadow",r.class]),"dark:border":"~ main"},[H(p.$slots,"default")],2)])):d("v-if",!0)],1024))}}),de={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ce=["innerHTML"],me=h({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(f,{emit:n}){const t=T(f,"modelValue",n),u=b(()=>typeof x.info=="string");return(p,o)=>(a(),v(ue,{modelValue:e(t),"onUpdate:modelValue":o[0]||(o[0]=c=>M(t)?t.value=c:null),class:"px-6 py-4"},{default:D(()=>[i("div",de,[u.value?(a(),g("div",{key:0,class:"mb-4",innerHTML:e(x).info},null,8,ce)):d("v-if",!0),o[1]||(o[1]=i("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[i("div",{class:"flex gap-1 children:my-auto"},[i("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),i("img",{class:"w-5 h-5",src:ie,alt:"Slidev logo"}),i("div",{style:{color:"#2082A6"}},[i("b",null,"Sli"),W("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),fe=h({__name:"Controls",setup(f){const{isEmbedded:n}=P(),r=!x.drawings.presenterOnly&&!n.value,s=w();r&&G(()=>import("./DrawingControls-Bhiqc9xN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(p=>s.value=p.default);const t=w(),u=w();return(p,o)=>(a(),g(I,null,[s.value?(a(),v(e(s),{key:0})):d("v-if",!0),_(J),_(K),t.value?(a(),v(e(t),{key:1})):d("v-if",!0),u.value?(a(),v(e(u),{key:2,modelValue:e(V),"onUpdate:modelValue":o[0]||(o[0]=c=>M(V)?V.value=c:null)},null,8,["modelValue"])):d("v-if",!0),e(x).info?(a(),v(me,{key:3,modelValue:e(C),"onUpdate:modelValue":o[1]||(o[1]=c=>M(C)?C.value=c:null)},null,8,["modelValue"])):d("v-if",!0),_(X)],64))}}),pe={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ve=h({__name:"PresenterMouse",setup(f){return(n,r)=>{const s=oe;return e($).cursor?(a(),g("div",pe,[_(s,{class:"absolute stroke-white dark:stroke-black",style:F({left:`${e($).cursor.x}%`,top:`${e($).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):d("v-if",!0)}}}),$e=h({__name:"play",setup(f){const{next:n,prev:r,isPrintMode:s,isPresenter:t}=P(),{isDrawing:u}=U(),p=O();function o(l){var y;S.value||l.button===0&&((y=l.target)==null?void 0:y.id)==="slide-container"&&(l.pageX/window.innerWidth>.5?n():r())}Y(p),q(),Z(),le(b(()=>!t.value&&!s.value));const c=b(()=>Q.value||S.value),R=w(),z=b(()=>{let l="";return m.value.brightness!==k.brightness&&(l+=`brightness(${m.value.brightness}) `),m.value.contrast!==k.contrast&&(l+=`contrast(${m.value.contrast}) `),m.value.sepia!==k.sepia&&(l+=`sepia(${m.value.sepia}) `),m.value.hueRotate!==k.hueRotate&&(l+=`hue-rotate(${m.value.hueRotate}deg) `),m.value.invert&&(l+="invert(1) "),{filter:l}});return(l,y)=>(a(),g(I,null,[i("div",{id:"page-root",ref_key:"root",ref:p,class:E(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[_(ae,{style:{background:"var(--slidev-slide-container-background, black)"},"is-main":"","content-style":z.value,onPointerdown:o,onContextmenu:e(se)},{default:D(()=>[_(ee,{"render-context":"slide"}),_(ve)]),controls:D(()=>[e(s)?d("v-if",!0):(a(),g("div",{key:0,class:E(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[c.value?"!opacity-100 right-0":"opacity-0 p-2",e(u)?"pointer-events-none":""]])},[_(te,{persist:c.value},null,8,["persist"])],2))]),_:1},8,["content-style","onContextmenu"]),R.value&&e(S)?(a(),v(e(R),{key:0,resize:!0})):d("v-if",!0)],2),e(s)?d("v-if",!0):(a(),v(fe,{key:0})),y[0]||(y[0]=i("div",{id:"twoslash-container"},null,-1))],64))}});export{$e as default};
