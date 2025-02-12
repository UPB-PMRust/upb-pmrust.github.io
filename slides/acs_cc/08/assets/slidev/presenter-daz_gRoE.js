import{a1 as q,z as b,d as N,o,c as f,i as C,B as s,a2 as K,W as T,b as m,T as P,$ as W,e,C as M,g as S,a3 as j,t as B,M as D,L as Q,J as X,V as Y,a4 as Z,l as c,a5 as ee,k as y,h as E,x as te,F as se}from"../modules/vue-CN3z6Qym.js";import{l as oe,k as ne,v as re,s as le,I as ie,J as ae,K as ce,L as ue,M as de,N as ve,o as me,_ as fe}from"../index-BLrClVqf.js";import{u as pe}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-CzTT4UVm.js";import{r as xe,u as _e,a as ke,_ as ge,S as ye,o as be,b as Ce,G as Se,c as we,d as he}from"./shortcuts-CWsdSwP5.js";import{C as $e}from"./ClicksSlider-Dc1pxVR_.js";import{_ as Me}from"./DrawingControls.vue_vue_type_style_index_0_lang-fgwTv4gV.js";import{_ as R}from"./IconButton.vue_vue_type_script_setup_true_lang-BR-7ka7T.js";import{_ as Te}from"./NoteDisplay.vue_vue_type_style_index_0_lang-Co1tZQYt.js";import{a as Ne,S as I}from"./SlideContainer-CHlWeZcq.js";import{S as ze}from"./SlideWrapper-kgNWIEYg.js";import"../modules/shiki-BhTuFuac.js";import"./context-B2Kzjdao.js";import"../modules/unplugin-icons-BZNbowDi.js";function Fe(){const{counter:p,isActive:n,reset:l,pause:r,resume:u}=q(1e3,{controls:!0});return{timer:b(()=>{const a=p.value,w=Math.floor(a%60).toString().padStart(2,"0");return`${Math.floor(a/60).toString().padStart(2,"0")}:${w}`}),isTimerActive:n,resetTimer:l,toggleTimer:()=>n.value?r():u()}}const Le=N({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(p){const n=p,{info:l}=Ne(n.no);return(r,u)=>{var d,a;return o(),f(Te,{class:C(n.class),note:(d=s(l))==null?void 0:d.note,"note-html":(a=s(l))==null?void 0:a.noteHTML,"clicks-context":r.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),Ve={"h-full":"","w-full":""},je={key:0,"w-full":"","h-full":"",flex:"~ col gap-4 items-center justify-center"},Be=N({__name:"ScreenCaptureMirror",setup(p){const n=K("video"),l=T(null),r=T(!1);async function u(){l.value=await navigator.mediaDevices.getDisplayMedia({video:{cursor:"always"},audio:!1,selfBrowserSurface:"include",preferCurrentTab:!1}),n.value.srcObject=l.value,n.value.play(),r.value=!0,l.value.addEventListener("inactive",()=>{n.value.srcObject=null,r.value=!1}),l.value.addEventListener("ended",()=>{n.value.srcObject=null,r.value=!1})}return(d,a)=>(o(),m("div",Ve,[P(e("video",{ref_key:"video",ref:n,class:"w-full h-full object-contain"},null,512),[[W,r.value]]),r.value?S("v-if",!0):(o(),m("div",je,[a[0]||(a[0]=e("div",{op50:""},[M(" Use screen capturing to mirror your main screen back to presenter view."),e("br"),M(" Click the button below and "),e("b",null,"select your other monitor or window"),M(". ")],-1)),e("button",{class:"slidev-form-button",onClick:u}," Start Screen Mirroring ")]))]))}}),De={class:"bg-main h-full slidev-presenter","pt-2px":""},Ee={flex:"~ gap-4 items-center",border:"b main",p1:""},Re={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Ie={key:1,class:"h-full flex justify-center items-center"},Pe={key:0,class:"grid-section note of-auto"},We={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ae={class:"grid-section bottom flex"},Oe={class:"group flex items-center justify-center pl-4 select-none"},Ge={class:"w-22px cursor-pointer"},He={class:"group-not-hover:hidden flex flex-col items-center"},Je={key:0,class:"i-carbon:pause text-lg"},Ue={key:1,class:"i-carbon:play"},qe={class:"text-2xl px-3 my-auto tabular-nums"},Ke={class:"progress-bar"},Qe=N({__name:"presenter",setup(p){const n=j(),l=B();xe(),_e(l),ke();const{clicksContext:r,currentSlideNo:u,currentSlideRoute:d,hasNext:a,nextRoute:w,slides:z,getPrimaryClicks:A,total:O}=oe(),{isDrawing:G}=pe();ne({title:`Presenter - ${me}`}),B(!1);const{timer:H,isTimerActive:J,resetTimer:F,toggleTimer:L}=Fe(),U=b(()=>z.value.map(_=>re(_))),v=b(()=>r.value.current<r.value.total?[d.value,r.value.current+1]:a.value?[w.value,0]:null),k=b(()=>v.value&&U.value[v.value[0].no-1]);D(v,()=>{k.value&&v.value&&(k.value.current=v.value[1])},{immediate:!0});const x=Q("slidev-presenter-main-slide-mode","slides"),V=T();return X(()=>{const _=l.value.querySelector("#slide-content"),t=Y(Z()),g=j();D(()=>{if(!g.value||G.value||!ie.value||!_)return;const i=_.getBoundingClientRect(),h=(t.x-i.left)/i.width*100,$=(t.y-i.top)/i.height*100;if(!(h<0||h>100||$<0||$>100))return{x:h,y:$}},i=>{le.cursor=i})}),(_,t)=>{var g;return o(),m(se,null,[e("div",De,[e("div",{class:C(["grid-container",`layout${s(ae)}`])},[e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col"},[e("div",Ee,[t[5]||(t[5]=e("span",{op50:"",px2:""},"Current",-1)),t[6]||(t[6]=e("div",{"flex-auto":""},null,-1)),c(ge,{modelValue:s(x),"onUpdate:modelValue":t[0]||(t[0]=i=>ee(x)?x.value=i:null),options:[{label:"Slides",value:"slides"},{label:"Screen Mirror",value:"mirror"}]},null,8,["modelValue"])]),s(x)==="mirror"?(o(),f(Be,{key:0})):S("v-if",!0),S(" We use v-show here to still infer the clicks context "),P(c(I,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:s(be)},{default:y(()=>[c(ye,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),[[W,s(x)==="slides"]]),(o(),f($e,{key:(g=s(d))==null?void 0:g.no,"clicks-context":s(A)(s(d)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"]))],512),e("div",Re,[v.value&&k.value?(o(),f(I,{key:"next"},{default:y(()=>[(o(),f(ze,{key:v.value[0].no,"clicks-context":k.value,route:v.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):(o(),m("div",Ie,t[7]||(t[7]=[e("div",{class:"text-gray-500"}," End of the presentation ",-1)]))),t[8]||(t[8]=e("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1))]),V.value&&s(ce)?(o(),m("div",Pe,[c(s(V))])):(o(),m("div",We,[(o(),f(Le,{key:`static-${s(u)}`,no:s(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:E({fontSize:`${s(ue)}em`}),"clicks-context":s(r)},null,8,["no","style","clicks-context"])),t[12]||(t[12]=e("div",{"border-t":"","border-main":""},null,-1)),e("div",{class:C(["py-1 px-2 text-sm transition",s(n)?"":"op25"])},[c(R,{title:"Increase font size",onClick:s(de)},{default:y(()=>t[9]||(t[9]=[e("div",{class:"i-carbon:zoom-in"},null,-1)])),_:1},8,["onClick"]),c(R,{title:"Decrease font size",onClick:s(ve)},{default:y(()=>t[10]||(t[10]=[e("div",{class:"i-carbon:zoom-out"},null,-1)])),_:1},8,["onClick"]),S("v-if",!0)],2)])),e("div",Ae,[c(Ce,{persist:!0,class:C(["transition",s(n)?"":"op25"])},null,8,["class"]),t[15]||(t[15]=e("div",{"flex-auto":""},null,-1)),e("div",Oe,[e("div",Ge,[t[14]||(t[14]=e("div",{class:"i-carbon:time group-hover:hidden text-xl"},null,-1)),e("div",He,[e("div",{class:"relative op-80 hover:op-100",onClick:t[3]||(t[3]=(...i)=>s(L)&&s(L)(...i))},[s(J)?(o(),m("div",Je)):(o(),m("div",Ue))]),e("div",{class:"op-80 hover:op-100",onClick:t[4]||(t[4]=(...i)=>s(F)&&s(F)(...i))},t[13]||(t[13]=[e("div",{class:"i-carbon:renew"},null,-1)]))])]),e("div",qe,te(s(H)),1)])]),(o(),f(Me,{key:2}))],2),e("div",Ke,[e("div",{class:"progress h-3px bg-primary transition-all",style:E({width:`${(s(u)-1)/(s(O)-1)*100+1}%`})},null,4)])]),c(Se),c(we),c(he)],64)}}}),ut=fe(Qe,[["__scopeId","data-v-12993bb4"]]);export{ut as default};
