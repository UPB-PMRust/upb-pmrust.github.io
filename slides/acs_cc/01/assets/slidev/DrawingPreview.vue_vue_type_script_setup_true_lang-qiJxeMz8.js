import{a0 as kt,Y as st,aH as Nt,t as O,z as rt,P as It,y as At,n as Ct,E as $t,d as Ft,B as ct,o as Kt,b as Tt,g as Rt}from"../modules/vue-COoRZ4PV.js";import{a as zt,x as dt,ah as nt,ai as ft,aj as Ot,a7 as Ut}from"../index-BxXefzgA.js";var Ht=Object.defineProperty,pt=Object.getOwnPropertySymbols,Vt=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable,gt=(t,e,s)=>e in t?Ht(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,it=(t,e)=>{for(var s in e||(e={}))Vt.call(e,s)&&gt(t,s,e[s]);if(pt)for(var s of pt(e))jt.call(e,s)&&gt(t,s,e[s]);return t},Bt=()=>({emit(t,...e){for(let s=this.events[t]||[],r=0,n=s.length;r<n;r++)s[r](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var r;this.events[t]=(r=this.events[t])==null?void 0:r.filter(n=>e!==n)}}});function q(t,e){return t-e}function Gt(t){return t<0?-1:1}function Y(t){return[Math.abs(t),Gt(t)]}function Pt(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var qt=2,L=qt;function bt(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),r=document.createElementNS("http://www.w3.org/2000/svg","marker"),n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("fill",e),r.setAttribute("id",t),r.setAttribute("viewBox","0 -5 10 10"),r.setAttribute("refX","5"),r.setAttribute("refY","0"),r.setAttribute("markerWidth","4"),r.setAttribute("markerHeight","4"),r.setAttribute("orient","auto"),n.setAttribute("d","M0,-5L10,0L0,5"),r.appendChild(n),s.appendChild(r),s}function Yt(t,e){const s=t.x-e.x,r=t.y-e.y;return s*s+r*r}function Xt(t,e,s){let r=e.x,n=e.y,i=s.x-r,o=s.y-n;if(i!==0||o!==0){const a=((t.x-r)*i+(t.y-n)*o)/(i*i+o*o);a>1?(r=s.x,n=s.y):a>0&&(r+=i*a,n+=o*a)}return i=t.x-r,o=t.y-n,i*i+o*o}function Zt(t,e){let s=t[0];const r=[s];let n;for(let i=1,o=t.length;i<o;i++)n=t[i],Yt(n,s)>e&&(r.push(n),s=n);return s!==n&&n&&r.push(n),r}function at(t,e,s,r,n){let i=r,o=0;for(let a=e+1;a<s;a++){const l=Xt(t[a],t[e],t[s]);l>i&&(o=a,i=l)}i>r&&(o-e>1&&at(t,e,o,r,n),n.push(t[o]),s-o>1&&at(t,o,s,r,n))}function Qt(t,e){const s=t.length-1,r=[t[0]];return at(t,0,s,e,r),r.push(t[s]),r}function mt(t,e,s=!1){if(t.length<=2)return t;const r=e*e;return t=s?t:Zt(t,r),t=Qt(t,r),t}var T=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,r;const n=this.drauu.el,i=(e=this.drauu.options.coordinateScale)!=null?e:1,o=(s=this.drauu.options.offset)!=null?s:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-a.left+o.x)*i,y:(t.pageY-a.top+o.y)*i,pressure:t.pressure}}else{const a=this.drauu.svgPoint;a.x=t.clientX+o.x,a.y=t.clientY+o.y;const l=a.matrixTransform((r=n.getScreenCTM())==null?void 0:r.inverse());return{x:l.x*i,y:l.y*i,pressure:t.pressure}}}createElement(t,e){var s;const r=document.createElementNS("http://www.w3.org/2000/svg",t),n=e?it(it({},this.brush),e):this.brush;return r.setAttribute("fill",(s=n.fill)!=null?s:"transparent"),r.setAttribute("stroke",n.color),r.setAttribute("stroke-width",n.size.toString()),r.setAttribute("stroke-linecap","round"),n.dasharray&&r.setAttribute("stroke-dasharray",n.dasharray),r}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(L))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Jt=class $ extends T{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Pt();const s=bt(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=mt(this.points,1,!0),this.count=0),this.attr("d",$.toSvgData(this.points)),!0}onEnd(){const e=this.el;if(this.el=null,!e)return!1;if(e.setAttribute("d",$.toSvgData(mt(this.points,1,!0))),!e.getTotalLength()){const{x:s,y:r}=this.points[0],n=this.brush.size/2;e.setAttribute("d",`M ${s-n} ${r} a ${n},${n} 0 1,0 ${n*2},0 a ${n},${n} 0 1,0 ${-n*2},0`),e.setAttribute("fill",this.brush.color),e.setAttribute("stroke-width","0")}return!0}static line(e,s){const r=s.x-e.x,n=s.y-e.y;return{length:Math.sqrt(r**2+n**2),angle:Math.atan2(n,r)}}static controlPoint(e,s,r,n){const i=s||e,o=r||e,a=.2,l=$.line(i,o),g=l.angle+(n?Math.PI:0),v=l.length*a,y=e.x+Math.cos(g)*v,P=e.y+Math.sin(g)*v;return{x:y,y:P}}static bezierCommand(e,s,r){const n=$.controlPoint(r[s-1],r[s-2],e),i=$.controlPoint(e,r[s-1],r[s+1],!0);return`C ${n.x.toFixed(L)},${n.y.toFixed(L)} ${i.x.toFixed(L)},${i.y.toFixed(L)} ${e.x.toFixed(L)},${e.y.toFixed(L)}`}static toSvgData(e){return e.reduce((s,r,n,i)=>n===0?`M ${r.x.toFixed(L)},${r.y.toFixed(L)}`:`${s} ${$.bezierCommand(r,n,i)}`,"")}},Wt=class extends T{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=Y(t.x-this.start.x),[r,n]=Y(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,r);e=i,r=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",r);else{const[i,o]=[this.start.x,this.start.x+e*s].sort(q),[a,l]=[this.start.y,this.start.y+r*n].sort(q);this.attr("cx",(i+o)/2),this.attr("cy",(a+l)/2),this.attr("rx",(o-i)/2),this.attr("ry",(l-a)/2)}return!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(!t.getTotalLength())return!1}catch{return!1}return!0}},te=class extends T{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,r)=>{if(s&&s.length)for(let n=0;n<s.length;n++){const i=s[n];if(i.getTotalLength){const o=i.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const l=i.getPointAtLength(o*a/this.pathSubFactor),g=i.getPointAtLength(o*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:g.x,y1:l.y,y2:g.y,segment:a,element:r||i})}}else i.children&&e(i.children,i)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t];if(this.svgPointPrevious&&this.svgPointCurrent){const s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,r=t.x2,n=e.x1,i=e.x2,o=t.y1,a=t.y2,l=e.y1,g=e.y2,v=(s-r)*(l-g)-(o-a)*(n-i),y=(s*a-o*r)*(n-i)-(s-r)*(n*g-l*i),P=(s*a-o*r)*(l-g)-(o-a)*(n*g-l*i),f=(d,c,S)=>d>=c&&d<=S?!0:d>=S&&d<=c;if(v===0)return!1;{const d={x:y/v,y:P/v};return f(d.x,s,r)&&f(d.y,o,a)&&f(d.x,n,i)&&f(d.y,l,g)}}},ee=class extends T{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=Pt(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(bt(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const r=t.x-this.start.x,n=t.y-this.start.y;if(n!==0){let i=r/n;i=Math.round(i),Math.abs(i)<=1?(e=this.start.x+n*i,s=this.start.y+n):(e=this.start.x+r,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(t.getTotalLength()<5)return!1}catch{return!1}return!0}},se=class extends T{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=Y(t.x-this.start.x),[r,n]=Y(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,r);e=i,r=i}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-r),this.attr("width",e*2),this.attr("height",r*2);else{const[i,o]=[this.start.x,this.start.x+e*s].sort(q),[a,l]=[this.start.y,this.start.y+r*n].sort(q);this.attr("x",i),this.attr("y",a),this.attr("width",o-i),this.attr("height",l-a)}return!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(!t.getTotalLength())return!1}catch{return!1}return!0}};function vt(t,e,s,r=n=>n){return t*r(.5-e*(.5-s))}function re(t){return[-t[0],-t[1]]}function M(t,e){return[t[0]+e[0],t[1]+e[1]]}function b(t,e){return[t[0]-e[0],t[1]-e[1]]}function E(t,e){return[t[0]*e,t[1]*e]}function ne(t,e){return[t[0]/e,t[1]/e]}function U(t){return[t[1],-t[0]]}function yt(t,e){return t[0]*e[0]+t[1]*e[1]}function ie(t,e){return t[0]===e[0]&&t[1]===e[1]}function ae(t){return Math.hypot(t[0],t[1])}function oe(t){return t[0]*t[0]+t[1]*t[1]}function xt(t,e){return oe(b(t,e))}function St(t){return ne(t,ae(t))}function he(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function H(t,e,s){let r=Math.sin(s),n=Math.cos(s),i=t[0]-e[0],o=t[1]-e[1],a=i*n-o*r,l=i*r+o*n;return[a+e[0],l+e[1]]}function ot(t,e,s){return M(t,E(b(e,t),s))}function _t(t,e,s){return M(t,E(e,s))}var{min:K,PI:le}=Math,wt=.275,V=le+1e-4;function ue(t,e={}){let{size:s=16,smoothing:r=.5,thinning:n=.5,simulatePressure:i=!0,easing:o=u=>u,start:a={},end:l={},last:g=!1}=e,{cap:v=!0,easing:y=u=>u*(2-u)}=a,{cap:P=!0,easing:f=u=>--u*u*u+1}=l;if(t.length===0||s<=0)return[];let d=t[t.length-1].runningLength,c=a.taper===!1?0:a.taper===!0?Math.max(s,d):a.taper,S=l.taper===!1?0:l.taper===!0?Math.max(s,d):l.taper,F=Math.pow(s*r,2),D=[],h=[],x=t.slice(0,10).reduce((u,w)=>{let p=w.pressure;if(i){let m=K(1,w.distance/s),W=K(1,1-m);p=K(1,u+(W-u)*(m*wt))}return(u+p)/2},t[0].pressure),_=vt(s,n,t[t.length-1].pressure,o),X,Z=t[0].vector,R=t[0].point,j=R,A=R,C=j,Q=!1;for(let u=0;u<t.length;u++){let{pressure:w}=t[u],{point:p,vector:m,distance:W,runningLength:z}=t[u];if(u<t.length-1&&d-z<3)continue;if(n){if(i){let I=K(1,W/s),et=K(1,1-I);w=K(1,x+(et-x)*(I*wt))}_=vt(s,n,w,o)}else _=s/2;X===void 0&&(X=_);let Mt=z<c?y(z/c):1,Lt=d-z<S?f((d-z)/S):1;_=Math.max(.01,_*Math.min(Mt,Lt));let ht=(u<t.length-1?t[u+1]:t[u]).vector,tt=u<t.length-1?yt(m,ht):1,Dt=yt(m,Z)<0&&!Q,lt=tt!==null&&tt<0;if(Dt||lt){let I=E(U(Z),_);for(let et=1/13,G=0;G<=1;G+=et)A=H(b(p,I),p,V*G),D.push(A),C=H(M(p,I),p,V*-G),h.push(C);R=A,j=C,lt&&(Q=!0);continue}if(Q=!1,u===t.length-1){let I=E(U(m),_);D.push(b(p,I)),h.push(M(p,I));continue}let ut=E(U(ot(ht,m,tt)),_);A=b(p,ut),(u<=1||xt(R,A)>F)&&(D.push(A),R=A),C=M(p,ut),(u<=1||xt(j,C)>F)&&(h.push(C),j=C),x=w,Z=m}let k=t[0].point.slice(0,2),N=t.length>1?t[t.length-1].point.slice(0,2):M(t[0].point,[1,1]),J=[],B=[];if(t.length===1){if(!(c||S)||g){let u=_t(k,St(U(b(k,N))),-(X||_)),w=[];for(let p=1/13,m=p;m<=1;m+=p)w.push(H(u,k,V*2*m));return w}}else{if(!(c||S&&t.length===1))if(v)for(let w=1/13,p=w;p<=1;p+=w){let m=H(h[0],k,V*p);J.push(m)}else{let w=b(D[0],h[0]),p=E(w,.5),m=E(w,.51);J.push(b(k,p),b(k,m),M(k,m),M(k,p))}let u=U(re(t[t.length-1].vector));if(S||c&&t.length===1)B.push(N);else if(P){let w=_t(N,u,_);for(let p=1/29,m=p;m<1;m+=p)B.push(H(w,N,V*3*m))}else B.push(M(N,E(u,_)),M(N,E(u,_*.99)),b(N,E(u,_*.99)),b(N,E(u,_)))}return D.concat(B,h.reverse(),J)}function ce(t,e={}){var s;let{streamline:r=.5,size:n=16,last:i=!1}=e;if(t.length===0)return[];let o=.15+(1-r)*.85,a=Array.isArray(t[0])?t:t.map(({x:f,y:d,pressure:c=.5})=>[f,d,c]);if(a.length===2){let f=a[1];a=a.slice(0,-1);for(let d=1;d<5;d++)a.push(ot(a[0],f,d/4))}a.length===1&&(a=[...a,[...M(a[0],[1,1]),...a[0].slice(2)]]);let l=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],g=!1,v=0,y=l[0],P=a.length-1;for(let f=1;f<a.length;f++){let d=i&&f===P?a[f].slice(0,2):ot(y.point,a[f],o);if(ie(y.point,d))continue;let c=he(d,y.point);if(v+=c,f<P&&!g){if(v<n)continue;g=!0}y={point:d,pressure:a[f][2]>=0?a[f][2]:.5,vector:St(b(y.point,d)),distance:c,runningLength:v},l.push(y)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function de(t,e={}){return ue(ce(t,e),e)}var fe=class Et extends T{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return Et.getSvgData(e,this.brush)}static getSvgData(e,s){const r=de(e,it({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!r.length)return"";const n=r.reduce((i,[o,a],l,g)=>{const[v,y]=g[(l+1)%g.length];return i.push(o,a,(o+v)/2,(a+y)/2),i},["M",...r[0],"Q"]);return n.push("Z"),n.map(i=>typeof i=="number"?i.toFixed(2):i).join(" ")}};function pe(t){return{draw:new Jt(t),stylus:new fe(t),line:new ee(t),rectangle:new se(t),ellipse:new Wt(t),eraseLine:new te(t)}}var ge=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Bt(),this._originalPointerId=null,this._models=pe(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const r=this.resolveSelector(e)||this.el,n=this.eventStart.bind(this),i=this.eventMove.bind(this),o=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);r.addEventListener("pointerdown",n,{passive:!1}),s.addEventListener("pointermove",i,{passive:!1}),s.addEventListener("pointerup",o,{passive:!1}),s.addEventListener("pointercancel",o,{passive:!1}),s.addEventListener("keydown",a,!1),s.addEventListener("keyup",a,!1),this._disposables.push(()=>{r.removeEventListener("pointerdown",n),s.removeEventListener("pointermove",i),s.removeEventListener("pointerup",o),s.removeEventListener("pointercancel",o),s.removeEventListener("keydown",a,!1),s.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;s&&(this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)}))}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this._elements=[],this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const r=this._elements[s];if(r){r.after(t);return}}this.el.prepend(t)}};function me(t){return new ge(t)}const ve=kt(()=>{const{currentSlideNo:t,isPresenter:e}=zt(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],r=st("slidev-drawing-enabled",!1),n=st("slidev-drawing-pinned",!1),i=Nt(st("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),o=O(!1),a=O(!1),l=O(!1),g=O(!1),v=O("stylus"),y=rt(()=>dt.drawings.syncAll||e.value);let P=!1;const f=rt({get(){return v.value},set(h){v.value=h,h==="arrow"?(c.mode="line",i.arrowEnd=!0):(c.mode=h,i.arrowEnd=!1)}}),d=It({brush:i,acceptsInputTypes:rt(()=>r.value&&(!dt.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),c=At(me(d));function S(){c.clear(),y.value&&ft(t.value,"")}function F(){var h;l.value=c.canRedo(),a.value=c.canUndo(),g.value=!!((h=c.el)!=null&&h.children.length)}function D(h){P=!0;const x=nt[h||t.value];x!=null?c.load(x):c.clear(),F(),P=!1}return c.on("changed",()=>{if(F(),!P){const h=c.dump(),x=t.value;(nt[x]||"")!==h&&y.value&&ft(x,c.dump())}}),Ot(h=>{P=!0,h[t.value]!=null&&c.load(h[t.value]||""),P=!1,F()}),Ct(()=>{$t(t,()=>{c.mounted&&D()},{immediate:!0})}),c.on("start",()=>o.value=!0),c.on("end",()=>o.value=!1),window.addEventListener("keydown",h=>{if(!r.value||Ut.value)return;const x=!h.ctrlKey&&!h.altKey&&!h.shiftKey&&!h.metaKey;let _=!0;h.code==="KeyZ"&&(h.ctrlKey||h.metaKey)?h.shiftKey?c.redo():c.undo():h.code==="Escape"?r.value=!1:h.code==="KeyL"&&x?f.value="line":h.code==="KeyA"&&x?f.value="arrow":h.code==="KeyS"&&x?f.value="stylus":h.code==="KeyR"&&x?f.value="rectangle":h.code==="KeyE"&&x?f.value="ellipse":h.code==="KeyC"&&x?S():h.code.startsWith("Digit")&&x&&+h.code[5]<=s.length?i.color=s[+h.code[5]-1]:_=!1,_&&(h.preventDefault(),h.stopPropagation())},!1),{brush:i,brushColors:s,canClear:g,canRedo:l,canUndo:a,clear:S,drauu:c,drauuOptions:d,drawingEnabled:r,drawingMode:f,drawingPinned:n,drawingState:nt,isDrawing:o,loadCanvas:D}}),ye=["innerHTML"],we=Ft({__name:"DrawingPreview",props:{page:{}},setup(t){const{drawingState:e}=ve();return(s,r)=>ct(e)[s.page]?(Kt(),Tt("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:ct(e)[s.page]},null,8,ye)):Rt("v-if",!0)}});export{we as _,ve as u};
