import{d as m,X as f,z as _,r as x,o as n,b as v,e as o,B as a,x as r,C as g,c as u,k as i,g as c}from"../modules/vue-CfOVo5sz.js";import{l as k,_ as h}from"../index-mX53M2U2.js";import"../modules/shiki-BCAiZ4dZ.js";const B={class:"grid justify-center text-center pt-15% gap-5"},C={class:"text-2xl"},N={class:"op-60"},y={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},R=m({__name:"404",setup(w){const{currentRoute:l}=f(),{total:d}=k(),s=_(()=>{const t=l.value.path.match(/\d+/);if(t){const e=+t[0];if(e>0&&e<=d.value)return e}return null});return(p,t)=>{const e=x("RouterLink");return n(),v("div",B,[o("div",null,[t[2]||(t[2]=o("h1",{class:"text-9xl font-light"}," 404 ",-1)),o("p",C,[t[0]||(t[0]=a(" Page ")),o("code",N,r(g(l).path),1),t[1]||(t[1]=a(" not found "))])]),o("div",y,[s.value!==1?(n(),u(e,{key:0,to:"/",class:"page-link"},{default:i(()=>t[3]||(t[3]=[a(" Go Home ")])),_:1})):c("v-if",!0),s.value?(n(),u(e,{key:1,to:`/${s.value}`,class:"page-link"},{default:i(()=>[a(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):c("v-if",!0)])])}}}),G=h(R,[["__scopeId","data-v-bed71a35"]]);export{G as default};
