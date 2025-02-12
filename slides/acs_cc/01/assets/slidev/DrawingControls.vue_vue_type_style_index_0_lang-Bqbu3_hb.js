import{d as M,t as B,Y as R,aN as h,o as c,b as V,f as A,h as S,B as e,c as D,k as a,l as n,i,e as s,x as F,ag as f,ah as P,F as Y,ai as j,al as b,g as z}from"../modules/vue-aHe5IXe5.js";import{L as T}from"../modules/shiki-C7YhHq0d.js";import{u as _}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-CjYVC2rH.js";import{_ as r}from"./IconButton.vue_vue_type_script_setup_true_lang-fgn95x5W.js";import{V as $}from"./shortcuts-Dq9hrWr9.js";const q=M({__name:"Draggable",props:{storageKey:{},initial:{}},setup(L){const u=L,g=B(null),m=u.initial??{x:0,y:0},y=u.storageKey?R(u.storageKey,m):B(m),{style:C}=h(g,{initialValue:y});return(k,v)=>(c(),V("div",{ref_key:"el",ref:g,class:"fixed",style:S(e(C))},[A(k.$slots,"default")],4))}}),G={class:"flex bg-main p-2"},H={class:"inline-block w-7 text-center"},I={class:"pt-.5"},J={class:"i-carbon:pin-filled transform -rotate-45"},O={class:"i-carbon:pin"},Q={class:"i-carbon:error"},W={class:"i-carbon:close-outline"},al=M({__name:"DrawingControls",setup(L){const{brush:u,canClear:g,canRedo:m,canUndo:y,clear:C,drauu:k,drawingEnabled:v,drawingMode:o,drawingPinned:d,brushColors:N}=_();function U(){k.undo()}function E(){k.redo()}let x="stylus";function p(w){o.value=w,v.value=!0,w!=="eraseLine"&&(x=w)}function K(w){u.color=w,v.value=!0,o.value=x}return(w,l)=>e(v)||e(d)?(c(),D(q,{key:0,class:i(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-nav border border-main",!e(v)&&e(d)?"opacity-40 hover:opacity-90":""]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:a(()=>[n(r,{title:"Draw with stylus",class:i({shallow:e(o)!=="stylus"}),onClick:l[0]||(l[0]=t=>p("stylus"))},{default:a(()=>l[13]||(l[13]=[s("div",{class:"i-carbon:pen"},null,-1)])),_:1},8,["class"]),n(r,{title:"Draw a line",class:i({shallow:e(o)!=="line"}),onClick:l[1]||(l[1]=t=>p("line"))},{default:a(()=>l[14]||(l[14]=[s("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[s("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1)])),_:1},8,["class"]),n(r,{title:"Draw an arrow",class:i({shallow:e(o)!=="arrow"}),onClick:l[2]||(l[2]=t=>p("arrow"))},{default:a(()=>l[15]||(l[15]=[s("div",{class:"i-carbon:arrow-up-right"},null,-1)])),_:1},8,["class"]),n(r,{title:"Draw an ellipse",class:i({shallow:e(o)!=="ellipse"}),onClick:l[3]||(l[3]=t=>p("ellipse"))},{default:a(()=>l[16]||(l[16]=[s("div",{class:"i-carbon:radio-button"},null,-1)])),_:1},8,["class"]),n(r,{title:"Draw a rectangle",class:i({shallow:e(o)!=="rectangle"}),onClick:l[4]||(l[4]=t=>p("rectangle"))},{default:a(()=>l[17]||(l[17]=[s("div",{class:"i-carbon:checkbox"},null,-1)])),_:1},8,["class"]),n(r,{title:"Erase",class:i({shallow:e(o)!=="eraseLine"}),onClick:l[5]||(l[5]=t=>p("eraseLine"))},{default:a(()=>l[18]||(l[18]=[s("div",{class:"i-carbon:erase"},null,-1)])),_:1},8,["class"]),n($),n(e(T),null,{popper:a(()=>[s("div",G,[s("div",H,F(e(u).size),1),s("div",I,[f(s("input",{"onUpdate:modelValue":l[6]||(l[6]=t=>e(u).size=t),type:"range",min:"1",max:"15",onChange:l[7]||(l[7]=t=>o.value=e(x))},null,544),[[P,e(u).size]])])])]),default:a(()=>[n(r,{title:"Adjust stroke width",class:i({shallow:e(o)==="eraseLine"})},{default:a(()=>l[19]||(l[19]=[s("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[s("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),s("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),s("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])),_:1},8,["class"])]),_:1}),(c(!0),V(Y,null,j(e(N),t=>(c(),D(r,{key:t,title:"Set brush color",class:i(e(u).color===t&&e(o)!=="eraseLine"?"active":"shallow"),onClick:X=>K(t)},{default:a(()=>[s("div",{class:i(["w-6 h-6 transition-all transform border",e(u).color!==t?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:S(e(v)?{background:t}:{borderColor:t})},null,6)]),_:2},1032,["class","onClick"]))),128)),n($),n(r,{title:"Undo",class:i({disabled:!e(y)}),onClick:l[8]||(l[8]=t=>U())},{default:a(()=>l[20]||(l[20]=[s("div",{class:"i-carbon:undo"},null,-1)])),_:1},8,["class"]),n(r,{title:"Redo",class:i({disabled:!e(m)}),onClick:l[9]||(l[9]=t=>E())},{default:a(()=>l[21]||(l[21]=[s("div",{class:"i-carbon:redo"},null,-1)])),_:1},8,["class"]),n(r,{title:"Delete",class:i({disabled:!e(g)}),onClick:l[10]||(l[10]=t=>e(C)())},{default:a(()=>l[22]||(l[22]=[s("div",{class:"i-carbon:trash-can"},null,-1)])),_:1},8,["class"]),n($),n(r,{title:e(d)?"Unpin drawing":"Pin drawing",class:i({shallow:!e(d)}),onClick:l[11]||(l[11]=t=>d.value=!e(d))},{default:a(()=>[f(s("div",J,null,512),[[b,e(d)]]),f(s("div",O,null,512),[[b,!e(d)]])]),_:1},8,["title","class"]),e(v)?(c(),D(r,{key:0,title:e(d)?"Drawing pinned":"Drawing unpinned",class:i({shallow:!e(v)}),onClick:l[12]||(l[12]=t=>v.value=!e(v))},{default:a(()=>[f(s("div",Q,null,512),[[b,e(d)]]),f(s("div",W,null,512),[[b,!e(d)]])]),_:1},8,["title","class"])):z("v-if",!0)]),_:1},8,["class"])):z("v-if",!0)}});export{al as _};
