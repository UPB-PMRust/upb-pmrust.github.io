const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-D4mpolQ3.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-C0Dyr-x6.js","assets/modules/vue-HnlFfQU9.js","assets/modules/shiki-Ds-lOcJc.js","assets/modules/shiki-Bxv373Z5.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-CGdcNKwC.js","assets/index-BC5f5NX9.js","assets/index-_sZMR71D.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-D9jXilNi.js","assets/slidev/shortcuts-DnMeWU0M.js","assets/slidev/SlideContainer-Dpb21Fs6.js","assets/SlideContainer-D7-oIHLP.css","assets/slidev/context-jerWTb7_.js","assets/modules/unplugin-icons-E2KCir8A.js","assets/slidev/SlideWrapper-Ck5jsprI.js","assets/SlideWrapper-CDrmjCbE.css","assets/shortcuts-DiOZ60qP.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{z as b,E as B,ap as H,d as h,ad as R,o as a,c as v,B as e,b as g,e as i,f as L,i as E,g as d,aq as N,k as D,ac as F,an as M,Q as w,l as _,F as T,h as O,t as U}from"../modules/vue-HnlFfQU9.js";import{u as W}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-CGdcNKwC.js";import{G as A,x,a as P,w as G,H as V,I as C,d as $,J as K,k as S,K as m,L as k,M as j}from"../index-BC5f5NX9.js";import{c as q,G as J,d as Q,u as X,r as Y,a as Z,S as ee,b as te,o as se}from"./shortcuts-DnMeWU0M.js";import{b as oe}from"../modules/unplugin-icons-E2KCir8A.js";import{S as ae}from"./SlideContainer-Dpb21Fs6.js";import"../modules/shiki-Ds-lOcJc.js";import"./context-jerWTb7_.js";import"./IconButton.vue_vue_type_script_setup_true_lang-D9jXilNi.js";import"./SlideWrapper-Ck5jsprI.js";const ne=2e3;function le(f){const n=b(()=>f.value&&A.value);function r(){document.body.style.cursor="none"}function s(){document.body.style.cursor=""}let t=null;B(n,u=>{u||s()}),H(document.body,["pointermove","pointerdown"],()=>{s(),t&&clearTimeout(t),n.value&&(t=setTimeout(r,ne))},{passive:!0})}const ie="/slides/acs_cc/06/assets/logo-BYkHSa_O.png",re={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-modal"},ue=h({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(f,{emit:n}){const r=f,t=R(r,"modelValue",n);function u(){t.value=!1}return(p,o)=>(a(),v(N,null,[e(t)?(a(),g("div",re,[i("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=c=>u())}),i("div",{class:E(["m-auto rounded-md bg-main shadow",r.class]),"dark:border":"~ main"},[L(p.$slots,"default")],2)])):d("v-if",!0)],1024))}}),de={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ce=["innerHTML"],me=h({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(f,{emit:n}){const t=R(f,"modelValue",n),u=b(()=>typeof x.info=="string");return(p,o)=>(a(),v(ue,{modelValue:e(t),"onUpdate:modelValue":o[0]||(o[0]=c=>M(t)?t.value=c:null),class:"px-6 py-4"},{default:D(()=>[i("div",de,[u.value?(a(),g("div",{key:0,class:"mb-4",innerHTML:e(x).info},null,8,ce)):d("v-if",!0),o[1]||(o[1]=i("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[i("div",{class:"flex gap-1 children:my-auto"},[i("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),i("img",{class:"w-5 h-5",src:ie,alt:"Slidev logo"}),i("div",{style:{color:"#2082A6"}},[i("b",null,"Sli"),F("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),fe=h({__name:"Controls",setup(f){const{isEmbedded:n}=P(),r=!x.drawings.presenterOnly&&!n.value,s=w();r&&G(()=>import("./DrawingControls-D4mpolQ3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(p=>s.value=p.default);const t=w(),u=w();return(p,o)=>(a(),g(T,null,[s.value?(a(),v(e(s),{key:0})):d("v-if",!0),_(q),_(J),t.value?(a(),v(e(t),{key:1})):d("v-if",!0),u.value?(a(),v(e(u),{key:2,modelValue:e(V),"onUpdate:modelValue":o[0]||(o[0]=c=>M(V)?V.value=c:null)},null,8,["modelValue"])):d("v-if",!0),e(x).info?(a(),v(me,{key:3,modelValue:e(C),"onUpdate:modelValue":o[1]||(o[1]=c=>M(C)?C.value=c:null)},null,8,["modelValue"])):d("v-if",!0),_(Q)],64))}}),pe={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ve=h({__name:"PresenterMouse",setup(f){return(n,r)=>{const s=oe;return e($).cursor?(a(),g("div",pe,[_(s,{class:"absolute stroke-white dark:stroke-black",style:O({left:`${e($).cursor.x}%`,top:`${e($).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):d("v-if",!0)}}}),$e=h({__name:"play",setup(f){const{next:n,prev:r,isPrintMode:s,isPresenter:t}=P(),{isDrawing:u}=W(),p=U();function o(l){var y;S.value||l.button===0&&((y=l.target)==null?void 0:y.id)==="slide-container"&&(l.pageX/window.innerWidth>.5?n():r())}X(p),Y(),Z(),le(b(()=>!t.value&&!s.value));const c=b(()=>K.value||S.value),I=w(),z=b(()=>{let l="";return m.value.brightness!==k.brightness&&(l+=`brightness(${m.value.brightness}) `),m.value.contrast!==k.contrast&&(l+=`contrast(${m.value.contrast}) `),m.value.sepia!==k.sepia&&(l+=`sepia(${m.value.sepia}) `),m.value.hueRotate!==k.hueRotate&&(l+=`hue-rotate(${m.value.hueRotate}deg) `),m.value.invert&&(l+="invert(1) "),{filter:l}});return(l,y)=>(a(),g(T,null,[i("div",{id:"page-root",ref_key:"root",ref:p,class:E(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[_(ae,{style:{background:"var(--slidev-slide-container-background, black)"},"is-main":"","content-style":z.value,onPointerdown:o,onContextmenu:e(se)},{default:D(()=>[_(ee,{"render-context":"slide"}),_(ve)]),controls:D(()=>[e(s)?d("v-if",!0):(a(),g("div",{key:0,class:E(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[c.value?"!opacity-100 right-0":"opacity-0 p-2",e(u)?"pointer-events-none":""]])},[_(te,{persist:c.value},null,8,["persist"])],2))]),_:1},8,["content-style","onContextmenu"]),I.value&&e(S)?(a(),v(e(I),{key:0,resize:!0})):d("v-if",!0)],2),e(s)?d("v-if",!0):(a(),v(fe,{key:0})),y[0]||(y[0]=i("div",{id:"twoslash-container"},null,-1))],64))}});export{$e as default};
