import{aj as Q,z as b,d as z,o,c as f,i as S,B as s,ak as Y,Q as T,b as v,ag as I,al as W,e,ac as M,g as w,a7 as D,t as E,E as L,Y as J,L as K,P as X,am as Z,l as c,an as ee,k as y,h as V,x as te,F as se}from"../modules/vue-B6YwjA3b.js";import{a as oe,u as ne,c as re,d as le,h as ie,j as ae,k as ce,l as ue,m as de,n as me,s as ve,_ as fe}from"../index-C0cTU5lE.js";import{u as pe}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-BABy8WNE.js";import{r as xe,u as _e,a as ke,_ as ge,S as ye,o as be,b as Se,G as we,c as Ce,d as he}from"./shortcuts-BerhPBkf.js";import{C as $e}from"./ClicksSlider-BGuBpnXv.js";import{_ as Me}from"./DrawingControls.vue_vue_type_style_index_0_lang-B28CCdN3.js";import{_ as P}from"./IconButton.vue_vue_type_script_setup_true_lang-BFMpE_WY.js";import{_ as Te}from"./NoteDisplay.vue_vue_type_style_index_0_lang-ClRFWWMR.js";import{a as ze,S as R}from"./SlideContainer-Dy-lE5Hp.js";import{S as Ne}from"./SlideWrapper-DqqArlcX.js";import"../modules/shiki-CxvK6E5A.js";import"./context-CSKBLfl5.js";import"../modules/unplugin-icons--RnrE72w.js";function Fe(){const{counter:p,isActive:n,reset:l,pause:r,resume:u}=Q(1e3,{controls:!0});return{timer:b(()=>{const a=p.value,C=Math.floor(a%60).toString().padStart(2,"0");return`${Math.floor(a/60).toString().padStart(2,"0")}:${C}`}),isTimerActive:n,resetTimer:l,toggleTimer:()=>n.value?r():u()}}const je=z({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(p){const n=p,{info:l}=ze(n.no);return(r,u)=>{var d,a;return o(),f(Te,{class:S(n.class),note:(d=s(l))==null?void 0:d.note,"note-html":(a=s(l))==null?void 0:a.noteHTML,"clicks-context":r.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),Be={"h-full":"","w-full":""},De={key:0,"w-full":"","h-full":"",flex:"~ col gap-4 items-center justify-center"},Ee=z({__name:"ScreenCaptureMirror",setup(p){const n=Y("video"),l=T(null),r=T(!1);async function u(){l.value=await navigator.mediaDevices.getDisplayMedia({video:{cursor:"always"},audio:!1,selfBrowserSurface:"include",preferCurrentTab:!1}),n.value.srcObject=l.value,n.value.play(),r.value=!0,l.value.addEventListener("inactive",()=>{n.value.srcObject=null,r.value=!1}),l.value.addEventListener("ended",()=>{n.value.srcObject=null,r.value=!1})}return(d,a)=>(o(),v("div",Be,[I(e("video",{ref_key:"video",ref:n,class:"w-full h-full object-contain"},null,512),[[W,r.value]]),r.value?w("v-if",!0):(o(),v("div",De,[a[0]||(a[0]=e("div",{op50:""},[M(" Use screen capturing to mirror your main screen back to presenter view."),e("br"),M(" Click the button below and "),e("b",null,"select your other monitor or window"),M(". ")],-1)),e("button",{class:"slidev-form-button",onClick:u}," Start Screen Mirroring ")]))]))}}),Le={class:"bg-main h-full slidev-presenter","pt-2px":""},Ve={flex:"~ gap-4 items-center",border:"b main",p1:""},Pe={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Re={key:1,class:"h-full flex justify-center items-center"},Ie={key:0,class:"grid-section note of-auto"},We={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ae={class:"grid-section bottom flex"},Oe={class:"group flex items-center justify-center pl-4 select-none"},Ge={class:"w-22px cursor-pointer"},He={class:"group-not-hover:hidden flex flex-col items-center"},Ue={key:0,class:"i-carbon:pause text-lg"},qe={key:1,class:"i-carbon:play"},Qe={class:"text-2xl px-3 my-auto tabular-nums"},Ye={class:"progress-bar"},Je=z({__name:"presenter",setup(p){const n=D(),l=E();xe(),_e(l),ke();const{clicksContext:r,currentSlideNo:u,currentSlideRoute:d,hasNext:a,nextRoute:C,slides:N,getPrimaryClicks:A,total:O}=oe(),{isDrawing:G}=pe();ne({title:`Presenter - ${ve}`}),E(!1);const{timer:H,isTimerActive:U,resetTimer:F,toggleTimer:j}=Fe(),q=b(()=>N.value.map(_=>re(_))),m=b(()=>r.value.current<r.value.total?[d.value,r.value.current+1]:a.value?[C.value,0]:null),k=b(()=>m.value&&q.value[m.value[0].no-1]);L(m,()=>{k.value&&m.value&&(k.value.current=m.value[1])},{immediate:!0});const x=J("slidev-presenter-main-slide-mode","slides"),B=T();return K(()=>{const _=l.value.querySelector("#slide-content"),t=X(Z()),g=D();L(()=>{if(!g.value||G.value||!ie.value||!_)return;const i=_.getBoundingClientRect(),h=(t.x-i.left)/i.width*100,$=(t.y-i.top)/i.height*100;if(!(h<0||h>100||$<0||$>100))return{x:h,y:$}},i=>{le.cursor=i})}),(_,t)=>{var g;return o(),v(se,null,[e("div",Le,[e("div",{class:S(["grid-container",`layout${s(ae)}`])},[e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col"},[e("div",Ve,[t[5]||(t[5]=e("span",{op50:"",px2:""},"Current",-1)),t[6]||(t[6]=e("div",{"flex-auto":""},null,-1)),c(ge,{modelValue:s(x),"onUpdate:modelValue":t[0]||(t[0]=i=>ee(x)?x.value=i:null),options:[{label:"Slides",value:"slides"},{label:"Screen Mirror",value:"mirror"}]},null,8,["modelValue"])]),s(x)==="mirror"?(o(),f(Ee,{key:0})):w("v-if",!0),w(" We use v-show here to still infer the clicks context "),I(c(R,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:s(be)},{default:y(()=>[c(ye,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),[[W,s(x)==="slides"]]),(o(),f($e,{key:(g=s(d))==null?void 0:g.no,"clicks-context":s(A)(s(d)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"]))],512),e("div",Pe,[m.value&&k.value?(o(),f(R,{key:"next"},{default:y(()=>[(o(),f(Ne,{key:m.value[0].no,"clicks-context":k.value,route:m.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):(o(),v("div",Re,t[7]||(t[7]=[e("div",{class:"text-gray-500"}," End of the presentation ",-1)]))),t[8]||(t[8]=e("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1))]),B.value&&s(ce)?(o(),v("div",Ie,[c(s(B))])):(o(),v("div",We,[(o(),f(je,{key:`static-${s(u)}`,no:s(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:V({fontSize:`${s(ue)}em`}),"clicks-context":s(r)},null,8,["no","style","clicks-context"])),t[12]||(t[12]=e("div",{"border-t":"","border-main":""},null,-1)),e("div",{class:S(["py-1 px-2 text-sm transition",s(n)?"":"op25"])},[c(P,{title:"Increase font size",onClick:s(de)},{default:y(()=>t[9]||(t[9]=[e("div",{class:"i-carbon:zoom-in"},null,-1)])),_:1},8,["onClick"]),c(P,{title:"Decrease font size",onClick:s(me)},{default:y(()=>t[10]||(t[10]=[e("div",{class:"i-carbon:zoom-out"},null,-1)])),_:1},8,["onClick"]),w("v-if",!0)],2)])),e("div",Ae,[c(Se,{persist:!0,class:S(["transition",s(n)?"":"op25"])},null,8,["class"]),t[15]||(t[15]=e("div",{"flex-auto":""},null,-1)),e("div",Oe,[e("div",Ge,[t[14]||(t[14]=e("div",{class:"i-carbon:time group-hover:hidden text-xl"},null,-1)),e("div",He,[e("div",{class:"relative op-80 hover:op-100",onClick:t[3]||(t[3]=(...i)=>s(j)&&s(j)(...i))},[s(U)?(o(),v("div",Ue)):(o(),v("div",qe))]),e("div",{class:"op-80 hover:op-100",onClick:t[4]||(t[4]=(...i)=>s(F)&&s(F)(...i))},t[13]||(t[13]=[e("div",{class:"i-carbon:renew"},null,-1)]))])]),e("div",Qe,te(s(H)),1)])]),(o(),f(Me,{key:2}))],2),e("div",Ye,[e("div",{class:"progress h-3px bg-primary transition-all",style:V({width:`${(s(u)-1)/(s(O)-1)*100+1}%`})},null,4)])]),c(we),c(Ce),c(he)],64)}}}),ut=fe(Je,[["__scopeId","data-v-12993bb4"]]);export{ut as default};
