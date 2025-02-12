import{s as W,a as N,b as P}from"./chunk-LT65WG3R-Cvd-UiQU.js";import{a as u,f as t,l as H,m as S,n as C,h as z,F,G as U,y as O}from"./Mermaid.vue_vue_type_script_setup_true_lang-CLWK6YVN.js";import{l as J}from"./chunk-IHYUGLNO-CCLb0tey.js";import{G as X}from"./chunk-EOAU2GW5-Bv9_hzPz.js";import"./chunk-TGZYFRKZ-BUcUi5hO.js";import"./chunk-HL6ZG6DQ-DmCcC_Fn.js";import"./modules/vue-CfOVo5sz.js";import"./index-mX53M2U2.js";import"./modules/shiki-BCAiZ4dZ.js";import"./modules/file-saver-C8BEGaqa.js";var L={},D=u((e,i)=>{L[e]=i},"set"),Y=u(e=>L[e],"get"),A=u(()=>Object.keys(L),"keys"),I=u(()=>A().length,"size"),$={get:Y,set:D,keys:A,size:I},q=u(e=>e.append("circle").attr("class","start-state").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit).attr("cy",t().state.padding+t().state.sizeUnit),"drawStartState"),Z=u(e=>e.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",t().state.textHeight).attr("class","divider").attr("x2",t().state.textHeight*2).attr("y1",0).attr("y2",0),"drawDivider"),j=u((e,i)=>{const d=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+2*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(i.id),o=d.node().getBBox();return e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",o.width+2*t().state.padding).attr("height",o.height+2*t().state.padding).attr("rx",t().state.radius),d},"drawSimpleState"),K=u((e,i)=>{const d=u(function(l,b,m){const E=l.append("tspan").attr("x",2*t().state.padding).text(b);m||E.attr("dy",t().state.textHeight)},"addTspan"),r=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+1.3*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(i.descriptions[0]).node().getBBox(),g=r.height,p=e.append("text").attr("x",t().state.padding).attr("y",g+t().state.padding*.4+t().state.dividerMargin+t().state.textHeight).attr("class","state-description");let a=!0,s=!0;i.descriptions.forEach(function(l){a||(d(p,l,s),s=!1),a=!1});const w=e.append("line").attr("x1",t().state.padding).attr("y1",t().state.padding+g+t().state.dividerMargin/2).attr("y2",t().state.padding+g+t().state.dividerMargin/2).attr("class","descr-divider"),x=p.node().getBBox(),c=Math.max(x.width,r.width);return w.attr("x2",c+3*t().state.padding),e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",c+2*t().state.padding).attr("height",x.height+g+2*t().state.padding).attr("rx",t().state.radius),e},"drawDescrState"),Q=u((e,i,d)=>{const o=t().state.padding,r=2*t().state.padding,g=e.node().getBBox(),p=g.width,a=g.x,s=e.append("text").attr("x",0).attr("y",t().state.titleShift).attr("font-size",t().state.fontSize).attr("class","state-title").text(i.id),x=s.node().getBBox().width+r;let c=Math.max(x,p);c===p&&(c=c+r);let l;const b=e.node().getBBox();i.doc,l=a-o,x>p&&(l=(p-c)/2+o),Math.abs(a-b.x)<o&&x>p&&(l=a-(x-p)/2);const m=1-t().state.textHeight;return e.insert("rect",":first-child").attr("x",l).attr("y",m).attr("class",d?"alt-composit":"composit").attr("width",c).attr("height",b.height+t().state.textHeight+t().state.titleShift+1).attr("rx","0"),s.attr("x",l+o),x<=p&&s.attr("x",a+(c-r)/2-x/2+o),e.insert("rect",":first-child").attr("x",l).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",c).attr("height",t().state.textHeight*3).attr("rx",t().state.radius),e.insert("rect",":first-child").attr("x",l).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",c).attr("height",b.height+3+2*t().state.textHeight).attr("rx",t().state.radius),e},"addTitleAndBox"),V=u(e=>(e.append("circle").attr("class","end-state-outer").attr("r",t().state.sizeUnit+t().state.miniPadding).attr("cx",t().state.padding+t().state.sizeUnit+t().state.miniPadding).attr("cy",t().state.padding+t().state.sizeUnit+t().state.miniPadding),e.append("circle").attr("class","end-state-inner").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit+2).attr("cy",t().state.padding+t().state.sizeUnit+2)),"drawEndState"),tt=u((e,i)=>{let d=t().state.forkWidth,o=t().state.forkHeight;if(i.parentId){let r=d;d=o,o=r}return e.append("rect").style("stroke","black").style("fill","black").attr("width",d).attr("height",o).attr("x",t().state.padding).attr("y",t().state.padding)},"drawForkJoinState"),et=u((e,i,d,o)=>{let r=0;const g=o.append("text");g.style("text-anchor","start"),g.attr("class","noteText");let p=e.replace(/\r\n/g,"<br/>");p=p.replace(/\n/g,"<br/>");const a=p.split(z.lineBreakRegex);let s=1.25*t().state.noteMargin;for(const w of a){const x=w.trim();if(x.length>0){const c=g.append("tspan");if(c.text(x),s===0){const l=c.node().getBBox();s+=l.height}r+=s,c.attr("x",i+t().state.noteMargin),c.attr("y",d+r+1.25*t().state.noteMargin)}}return{textWidth:g.node().getBBox().width,textHeight:r}},"_drawLongText"),at=u((e,i)=>{i.attr("class","state-note");const d=i.append("rect").attr("x",0).attr("y",t().state.padding),o=i.append("g"),{textWidth:r,textHeight:g}=et(e,0,0,o);return d.attr("height",g+2*t().state.noteMargin),d.attr("width",r+t().state.noteMargin*2),d},"drawNote"),_=u(function(e,i){const d=i.id,o={id:d,label:i.id,width:0,height:0},r=e.append("g").attr("id",d).attr("class","stateGroup");i.type==="start"&&q(r),i.type==="end"&&V(r),(i.type==="fork"||i.type==="join")&&tt(r,i),i.type==="note"&&at(i.note.text,r),i.type==="divider"&&Z(r),i.type==="default"&&i.descriptions.length===0&&j(r,i),i.type==="default"&&i.descriptions.length>0&&K(r,i);const g=r.node().getBBox();return o.width=g.width+2*t().state.padding,o.height=g.height+2*t().state.padding,$.set(d,o),o},"drawState"),G=0,it=u(function(e,i,d){const o=u(function(s){switch(s){case N.relationType.AGGREGATION:return"aggregation";case N.relationType.EXTENSION:return"extension";case N.relationType.COMPOSITION:return"composition";case N.relationType.DEPENDENCY:return"dependency"}},"getRelationType");i.points=i.points.filter(s=>!Number.isNaN(s.y));const r=i.points,g=F().x(function(s){return s.x}).y(function(s){return s.y}).curve(U),p=e.append("path").attr("d",g(r)).attr("id","edge"+G).attr("class","transition");let a="";if(t().state.arrowMarkerAbsolute&&(a=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,a=a.replace(/\(/g,"\\("),a=a.replace(/\)/g,"\\)")),p.attr("marker-end","url("+a+"#"+o(N.relationType.DEPENDENCY)+"End)"),d.title!==void 0){const s=e.append("g").attr("class","stateLabel"),{x:w,y:x}=O.calcLabelPosition(i.points),c=z.getRows(d.title);let l=0;const b=[];let m=0,E=0;for(let f=0;f<=c.length;f++){const h=s.append("text").attr("text-anchor","middle").text(c[f]).attr("x",w).attr("y",x+l),y=h.node().getBBox();m=Math.max(m,y.width),E=Math.min(E,y.x),S.info(y.x,w,x+l),l===0&&(l=h.node().getBBox().height,S.info("Title height",l,x)),b.push(h)}let v=l*c.length;if(c.length>1){const f=(c.length-1)*l*.5;b.forEach((h,y)=>h.attr("y",x+y*l-f)),v=l*c.length}const n=s.node().getBBox();s.insert("rect",":first-child").attr("class","box").attr("x",w-m/2-t().state.padding/2).attr("y",x-v/2-t().state.padding/2-3.5).attr("width",m+t().state.padding).attr("height",v+t().state.padding),S.info(n)}G++},"drawEdge"),B,T={},nt=u(function(){},"setConf"),rt=u(function(e){e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"insertMarkers"),st=u(function(e,i,d,o){B=t().state;const r=t().securityLevel;let g;r==="sandbox"&&(g=H("#i"+i));const p=r==="sandbox"?H(g.nodes()[0].contentDocument.body):H("body"),a=r==="sandbox"?g.nodes()[0].contentDocument:document;S.debug("Rendering diagram "+e);const s=p.select(`[id='${i}']`);rt(s);const w=o.db.getRootDoc();R(w,s,void 0,!1,p,a,o);const x=B.padding,c=s.node().getBBox(),l=c.width+x*2,b=c.height+x*2,m=l*1.75;C(s,b,m,B.useMaxWidth),s.attr("viewBox",`${c.x-B.padding}  ${c.y-B.padding} `+l+" "+b)},"draw"),dt=u(e=>e?e.length*B.fontSizeFactor:1,"getLabelWidth"),R=u((e,i,d,o,r,g,p)=>{const a=new X({compound:!0,multigraph:!0});let s,w=!0;for(s=0;s<e.length;s++)if(e[s].stmt==="relation"){w=!1;break}d?a.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:w?1:B.edgeLengthFactor,nodeSep:w?1:50,isMultiGraph:!0}):a.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:w?1:B.edgeLengthFactor,nodeSep:w?1:50,ranker:"tight-tree",isMultiGraph:!0}),a.setDefaultEdgeLabel(function(){return{}}),p.db.extract(e);const x=p.db.getStates(),c=p.db.getRelations(),l=Object.keys(x);for(const n of l){const f=x[n];d&&(f.parentId=d);let h;if(f.doc){let y=i.append("g").attr("id",f.id).attr("class","stateGroup");h=R(f.doc,y,f.id,!o,r,g,p);{y=Q(y,f,o);let k=y.node().getBBox();h.width=k.width,h.height=k.height+B.padding/2,T[f.id]={y:B.compositTitleSize}}}else h=_(i,f,a);if(f.note){const y={descriptions:[],id:f.id+"-note",note:f.note,type:"note"},k=_(i,y,a);f.note.position==="left of"?(a.setNode(h.id+"-note",k),a.setNode(h.id,h)):(a.setNode(h.id,h),a.setNode(h.id+"-note",k)),a.setParent(h.id,h.id+"-group"),a.setParent(h.id+"-note",h.id+"-group")}else a.setNode(h.id,h)}S.debug("Count=",a.nodeCount(),a);let b=0;c.forEach(function(n){b++,S.debug("Setting edge",n),a.setEdge(n.id1,n.id2,{relation:n,width:dt(n.title),height:B.labelHeight*z.getRows(n.title).length,labelpos:"c"},"id"+b)}),J(a),S.debug("Graph after layout",a.nodes());const m=i.node();a.nodes().forEach(function(n){n!==void 0&&a.node(n)!==void 0?(S.warn("Node "+n+": "+JSON.stringify(a.node(n))),r.select("#"+m.id+" #"+n).attr("transform","translate("+(a.node(n).x-a.node(n).width/2)+","+(a.node(n).y+(T[n]?T[n].y:0)-a.node(n).height/2)+" )"),r.select("#"+m.id+" #"+n).attr("data-x-shift",a.node(n).x-a.node(n).width/2),g.querySelectorAll("#"+m.id+" #"+n+" .divider").forEach(h=>{const y=h.parentElement;let k=0,M=0;y&&(y.parentElement&&(k=y.parentElement.getBBox().width),M=parseInt(y.getAttribute("data-x-shift"),10),Number.isNaN(M)&&(M=0)),h.setAttribute("x1",0-M+8),h.setAttribute("x2",k-M-8)})):S.debug("No Node "+n+": "+JSON.stringify(a.node(n)))});let E=m.getBBox();a.edges().forEach(function(n){n!==void 0&&a.edge(n)!==void 0&&(S.debug("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(a.edge(n))),it(i,a.edge(n),a.edge(n).relation))}),E=m.getBBox();const v={id:d||"root",label:d||"root",width:0,height:0};return v.width=E.width+2*B.padding,v.height=E.height+2*B.padding,S.debug("Doc rendered",v,a),v},"renderDoc"),ot={setConf:nt,draw:st},mt={parser:W,db:N,renderer:ot,styles:P,init:u(e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,N.clear()},"init")};export{mt as diagram};
