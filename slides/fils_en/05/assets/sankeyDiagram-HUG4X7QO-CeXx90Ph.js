import{a as e,f as yt,g as Dt,s as jt,d as $t,e as Rt,u as Vt,t as Ft,z as Wt,h as Ht,q as Ut,l as Q,aY as Gt,bg as Yt,b8 as qt}from"./Mermaid.vue_vue_type_script_setup_true_lang-DX0RlGE3.js";import"./modules/vue-CfOVo5sz.js";import"./index-C-rmmsl8.js";import"./modules/shiki-BCAiZ4dZ.js";import"./modules/file-saver-C8BEGaqa.js";var rt=function(){var t=e(function(_,s,a,u){for(a=a||{},u=_.length;u--;a[_[u]]=s);return a},"o"),i=[1,9],r=[1,10],l=[1,5,10,12],f={trace:e(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:e(function(s,a,u,x,b,y,v){var M=y.length-1;switch(b){case 7:const A=x.findOrCreateNode(y[M-4].trim().replaceAll('""','"')),N=x.findOrCreateNode(y[M-2].trim().replaceAll('""','"')),I=parseFloat(y[M].trim());x.addLink(A,N,I);break;case 8:case 9:case 11:this.$=y[M];break;case 10:this.$=y[M-1];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:i,20:r},{1:[2,6],7:11,10:[1,12]},t(r,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(l,[2,8]),t(l,[2,9]),{19:[1,16]},t(l,[2,11]),{1:[2,1]},{1:[2,5]},t(r,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:i,20:r},{15:18,16:7,17:8,18:i,20:r},{18:[1,19]},t(r,[2,3]),{12:[1,20]},t(l,[2,10]),{15:21,16:7,17:8,18:i,20:r},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:e(function(s,a){if(a.recoverable)this.trace(s);else{var u=new Error(s);throw u.hash=a,u}},"parseError"),parse:e(function(s){var a=this,u=[0],x=[],b=[null],y=[],v=this.table,M="",A=0,N=0,I=2,B=1,R=y.slice.call(arguments,1),w=Object.create(this.lexer),P={yy:{}};for(var j in this.yy)Object.prototype.hasOwnProperty.call(this.yy,j)&&(P.yy[j]=this.yy[j]);w.setInput(s,P.yy),P.yy.lexer=w,P.yy.parser=this,typeof w.yylloc>"u"&&(w.yylloc={});var z=w.yylloc;y.push(z);var O=w.options&&w.options.ranges;typeof P.yy.parseError=="function"?this.parseError=P.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function g(L){u.length=u.length-2*L,b.length=b.length-L,y.length=y.length-L}e(g,"popStack");function T(){var L;return L=x.pop()||w.lex()||B,typeof L!="number"&&(L instanceof Array&&(x=L,L=x.pop()),L=a.symbols_[L]||L),L}e(T,"lex");for(var E,D,C,n,d={},h,c,o,k;;){if(D=u[u.length-1],this.defaultActions[D]?C=this.defaultActions[D]:((E===null||typeof E>"u")&&(E=T()),C=v[D]&&v[D][E]),typeof C>"u"||!C.length||!C[0]){var S="";k=[];for(h in v[D])this.terminals_[h]&&h>I&&k.push("'"+this.terminals_[h]+"'");w.showPosition?S="Parse error on line "+(A+1)+`:
`+w.showPosition()+`
Expecting `+k.join(", ")+", got '"+(this.terminals_[E]||E)+"'":S="Parse error on line "+(A+1)+": Unexpected "+(E==B?"end of input":"'"+(this.terminals_[E]||E)+"'"),this.parseError(S,{text:w.match,token:this.terminals_[E]||E,line:w.yylineno,loc:z,expected:k})}if(C[0]instanceof Array&&C.length>1)throw new Error("Parse Error: multiple actions possible at state: "+D+", token: "+E);switch(C[0]){case 1:u.push(E),b.push(w.yytext),y.push(w.yylloc),u.push(C[1]),E=null,N=w.yyleng,M=w.yytext,A=w.yylineno,z=w.yylloc;break;case 2:if(c=this.productions_[C[1]][1],d.$=b[b.length-c],d._$={first_line:y[y.length-(c||1)].first_line,last_line:y[y.length-1].last_line,first_column:y[y.length-(c||1)].first_column,last_column:y[y.length-1].last_column},O&&(d._$.range=[y[y.length-(c||1)].range[0],y[y.length-1].range[1]]),n=this.performAction.apply(d,[M,N,A,P.yy,C[1],b,y].concat(R)),typeof n<"u")return n;c&&(u=u.slice(0,-1*c*2),b=b.slice(0,-1*c),y=y.slice(0,-1*c)),u.push(this.productions_[C[1]][0]),b.push(d.$),y.push(d._$),o=v[u[u.length-2]][u[u.length-1]],u.push(o);break;case 3:return!0}}return!0},"parse")},p=function(){var _={EOF:1,parseError:e(function(a,u){if(this.yy.parser)this.yy.parser.parseError(a,u);else throw new Error(a)},"parseError"),setInput:e(function(s,a){return this.yy=a||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:e(function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var a=s.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},"input"),unput:e(function(s){var a=s.length,u=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var x=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),u.length-1&&(this.yylineno-=u.length-1);var b=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:u?(u.length===x.length?this.yylloc.first_column:0)+x[x.length-u.length].length-u[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[b[0],b[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},"unput"),more:e(function(){return this._more=!0,this},"more"),reject:e(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:e(function(s){this.unput(this.match.slice(s))},"less"),pastInput:e(function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:e(function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:e(function(){var s=this.pastInput(),a=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+a+"^"},"showPosition"),test_match:e(function(s,a){var u,x,b;if(this.options.backtrack_lexer&&(b={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(b.yylloc.range=this.yylloc.range.slice(0))),x=s[0].match(/(?:\r\n?|\n).*/g),x&&(this.yylineno+=x.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:x?x[x.length-1].length-x[x.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],u=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),u)return u;if(this._backtrack){for(var y in b)this[y]=b[y];return!1}return!1},"test_match"),next:e(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,a,u,x;this._more||(this.yytext="",this.match="");for(var b=this._currentRules(),y=0;y<b.length;y++)if(u=this._input.match(this.rules[b[y]]),u&&(!a||u[0].length>a[0].length)){if(a=u,x=y,this.options.backtrack_lexer){if(s=this.test_match(u,b[y]),s!==!1)return s;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(s=this.test_match(a,b[x]),s!==!1?s:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:e(function(){var a=this.next();return a||this.lex()},"lex"),begin:e(function(a){this.conditionStack.push(a)},"begin"),popState:e(function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:e(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:e(function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},"topState"),pushState:e(function(a){this.begin(a)},"pushState"),stateStackSize:e(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:e(function(a,u,x,b){switch(x){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},"anonymous"),rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};return _}();f.lexer=p;function m(){this.yy={}}return e(m,"Parser"),m.prototype=f,f.Parser=m,new m}();rt.parser=rt;var J=rt,nt=[],it=[],tt=new Map,Xt=e(()=>{nt=[],it=[],tt=new Map,Wt()},"clear"),W,Qt=(W=class{constructor(i,r,l=0){this.source=i,this.target=r,this.value=l}},e(W,"SankeyLink"),W),Kt=e((t,i,r)=>{nt.push(new Qt(t,i,r))},"addLink"),H,Zt=(H=class{constructor(i){this.ID=i}},e(H,"SankeyNode"),H),Jt=e(t=>{t=Ht.sanitizeText(t,yt());let i=tt.get(t);return i===void 0&&(i=new Zt(t),tt.set(t,i),it.push(i)),i},"findOrCreateNode"),te=e(()=>it,"getNodes"),ee=e(()=>nt,"getLinks"),ne=e(()=>({nodes:it.map(t=>({id:t.ID})),links:nt.map(t=>({source:t.source.ID,target:t.target.ID,value:t.value}))}),"getGraph"),ie={nodesMap:tt,getConfig:e(()=>yt().sankey,"getConfig"),getNodes:te,getLinks:ee,getGraph:ne,addLink:Kt,findOrCreateNode:Jt,getAccTitle:Dt,setAccTitle:jt,getAccDescription:$t,setAccDescription:Rt,getDiagramTitle:Vt,setDiagramTitle:Ft,clear:Xt};function ot(t,i){let r;if(i===void 0)for(const l of t)l!=null&&(r<l||r===void 0&&l>=l)&&(r=l);else{let l=-1;for(let f of t)(f=i(f,++l,t))!=null&&(r<f||r===void 0&&f>=f)&&(r=f)}return r}e(ot,"max");function pt(t,i){let r;if(i===void 0)for(const l of t)l!=null&&(r>l||r===void 0&&l>=l)&&(r=l);else{let l=-1;for(let f of t)(f=i(f,++l,t))!=null&&(r>f||r===void 0&&f>=f)&&(r=f)}return r}e(pt,"min");function K(t,i){let r=0;if(i===void 0)for(let l of t)(l=+l)&&(r+=l);else{let l=-1;for(let f of t)(f=+i(f,++l,t))&&(r+=f)}return r}e(K,"sum");function _t(t){return t.target.depth}e(_t,"targetDepth");function xt(t){return t.depth}e(xt,"left");function vt(t,i){return i-1-t.height}e(vt,"right");function gt(t,i){return t.sourceLinks.length?t.depth:i-1}e(gt,"justify");function bt(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?pt(t.sourceLinks,_t)-1:0}e(bt,"center");function q(t){return function(){return t}}e(q,"constant");function at(t,i){return X(t.source,i.source)||t.index-i.index}e(at,"ascendingSourceBreadth");function lt(t,i){return X(t.target,i.target)||t.index-i.index}e(lt,"ascendingTargetBreadth");function X(t,i){return t.y0-i.y0}e(X,"ascendingBreadth");function Z(t){return t.value}e(Z,"value");function St(t){return t.index}e(St,"defaultId");function wt(t){return t.nodes}e(wt,"defaultNodes");function Lt(t){return t.links}e(Lt,"defaultLinks");function ut(t,i){const r=t.get(i);if(!r)throw new Error("missing: "+i);return r}e(ut,"find");function ct({nodes:t}){for(const i of t){let r=i.y0,l=r;for(const f of i.sourceLinks)f.y0=r+f.width/2,r+=f.width;for(const f of i.targetLinks)f.y1=l+f.width/2,l+=f.width}}e(ct,"computeLinkBreadths");function Tt(){let t=0,i=0,r=1,l=1,f=24,p=8,m,_=St,s=gt,a,u,x=wt,b=Lt,y=6;function v(){const n={nodes:x.apply(null,arguments),links:b.apply(null,arguments)};return M(n),A(n),N(n),I(n),w(n),ct(n),n}e(v,"sankey"),v.update=function(n){return ct(n),n},v.nodeId=function(n){return arguments.length?(_=typeof n=="function"?n:q(n),v):_},v.nodeAlign=function(n){return arguments.length?(s=typeof n=="function"?n:q(n),v):s},v.nodeSort=function(n){return arguments.length?(a=n,v):a},v.nodeWidth=function(n){return arguments.length?(f=+n,v):f},v.nodePadding=function(n){return arguments.length?(p=m=+n,v):p},v.nodes=function(n){return arguments.length?(x=typeof n=="function"?n:q(n),v):x},v.links=function(n){return arguments.length?(b=typeof n=="function"?n:q(n),v):b},v.linkSort=function(n){return arguments.length?(u=n,v):u},v.size=function(n){return arguments.length?(t=i=0,r=+n[0],l=+n[1],v):[r-t,l-i]},v.extent=function(n){return arguments.length?(t=+n[0][0],r=+n[1][0],i=+n[0][1],l=+n[1][1],v):[[t,i],[r,l]]},v.iterations=function(n){return arguments.length?(y=+n,v):y};function M({nodes:n,links:d}){for(const[c,o]of n.entries())o.index=c,o.sourceLinks=[],o.targetLinks=[];const h=new Map(n.map((c,o)=>[_(c,o,n),c]));for(const[c,o]of d.entries()){o.index=c;let{source:k,target:S}=o;typeof k!="object"&&(k=o.source=ut(h,k)),typeof S!="object"&&(S=o.target=ut(h,S)),k.sourceLinks.push(o),S.targetLinks.push(o)}if(u!=null)for(const{sourceLinks:c,targetLinks:o}of n)c.sort(u),o.sort(u)}e(M,"computeNodeLinks");function A({nodes:n}){for(const d of n)d.value=d.fixedValue===void 0?Math.max(K(d.sourceLinks,Z),K(d.targetLinks,Z)):d.fixedValue}e(A,"computeNodeValues");function N({nodes:n}){const d=n.length;let h=new Set(n),c=new Set,o=0;for(;h.size;){for(const k of h){k.depth=o;for(const{target:S}of k.sourceLinks)c.add(S)}if(++o>d)throw new Error("circular link");h=c,c=new Set}}e(N,"computeNodeDepths");function I({nodes:n}){const d=n.length;let h=new Set(n),c=new Set,o=0;for(;h.size;){for(const k of h){k.height=o;for(const{source:S}of k.targetLinks)c.add(S)}if(++o>d)throw new Error("circular link");h=c,c=new Set}}e(I,"computeNodeHeights");function B({nodes:n}){const d=ot(n,o=>o.depth)+1,h=(r-t-f)/(d-1),c=new Array(d);for(const o of n){const k=Math.max(0,Math.min(d-1,Math.floor(s.call(null,o,d))));o.layer=k,o.x0=t+k*h,o.x1=o.x0+f,c[k]?c[k].push(o):c[k]=[o]}if(a)for(const o of c)o.sort(a);return c}e(B,"computeNodeLayers");function R(n){const d=pt(n,h=>(l-i-(h.length-1)*m)/K(h,Z));for(const h of n){let c=i;for(const o of h){o.y0=c,o.y1=c+o.value*d,c=o.y1+m;for(const k of o.sourceLinks)k.width=k.value*d}c=(l-c+m)/(h.length+1);for(let o=0;o<h.length;++o){const k=h[o];k.y0+=c*(o+1),k.y1+=c*(o+1)}E(h)}}e(R,"initializeNodeBreadths");function w(n){const d=B(n);m=Math.min(p,(l-i)/(ot(d,h=>h.length)-1)),R(d);for(let h=0;h<y;++h){const c=Math.pow(.99,h),o=Math.max(1-c,(h+1)/y);j(d,c,o),P(d,c,o)}}e(w,"computeNodeBreadths");function P(n,d,h){for(let c=1,o=n.length;c<o;++c){const k=n[c];for(const S of k){let L=0,V=0;for(const{source:G,value:st}of S.targetLinks){let Y=st*(S.layer-G.layer);L+=D(G,S)*Y,V+=Y}if(!(V>0))continue;let U=(L/V-S.y0)*d;S.y0+=U,S.y1+=U,T(S)}a===void 0&&k.sort(X),z(k,h)}}e(P,"relaxLeftToRight");function j(n,d,h){for(let c=n.length,o=c-2;o>=0;--o){const k=n[o];for(const S of k){let L=0,V=0;for(const{target:G,value:st}of S.sourceLinks){let Y=st*(G.layer-S.layer);L+=C(S,G)*Y,V+=Y}if(!(V>0))continue;let U=(L/V-S.y0)*d;S.y0+=U,S.y1+=U,T(S)}a===void 0&&k.sort(X),z(k,h)}}e(j,"relaxRightToLeft");function z(n,d){const h=n.length>>1,c=n[h];g(n,c.y0-m,h-1,d),O(n,c.y1+m,h+1,d),g(n,l,n.length-1,d),O(n,i,0,d)}e(z,"resolveCollisions");function O(n,d,h,c){for(;h<n.length;++h){const o=n[h],k=(d-o.y0)*c;k>1e-6&&(o.y0+=k,o.y1+=k),d=o.y1+m}}e(O,"resolveCollisionsTopToBottom");function g(n,d,h,c){for(;h>=0;--h){const o=n[h],k=(o.y1-d)*c;k>1e-6&&(o.y0-=k,o.y1-=k),d=o.y0-m}}e(g,"resolveCollisionsBottomToTop");function T({sourceLinks:n,targetLinks:d}){if(u===void 0){for(const{source:{sourceLinks:h}}of d)h.sort(lt);for(const{target:{targetLinks:h}}of n)h.sort(at)}}e(T,"reorderNodeLinks");function E(n){if(u===void 0)for(const{sourceLinks:d,targetLinks:h}of n)d.sort(lt),h.sort(at)}e(E,"reorderLinks");function D(n,d){let h=n.y0-(n.sourceLinks.length-1)*m/2;for(const{target:c,width:o}of n.sourceLinks){if(c===d)break;h+=o+m}for(const{source:c,width:o}of d.targetLinks){if(c===n)break;h-=o}return h}e(D,"targetTop");function C(n,d){let h=d.y0-(d.targetLinks.length-1)*m/2;for(const{source:c,width:o}of d.targetLinks){if(c===n)break;h+=o+m}for(const{target:c,width:o}of n.sourceLinks){if(c===d)break;h-=o}return h}return e(C,"sourceTop"),v}e(Tt,"Sankey");var ht=Math.PI,ft=2*ht,F=1e-6,se=ft-F;function et(){this._x0=this._y0=this._x1=this._y1=null,this._=""}e(et,"Path");function mt(){return new et}e(mt,"path");et.prototype=mt.prototype={constructor:et,moveTo:e(function(t,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)},"moveTo"),closePath:e(function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},"closePath"),lineTo:e(function(t,i){this._+="L"+(this._x1=+t)+","+(this._y1=+i)},"lineTo"),quadraticCurveTo:e(function(t,i,r,l){this._+="Q"+ +t+","+ +i+","+(this._x1=+r)+","+(this._y1=+l)},"quadraticCurveTo"),bezierCurveTo:e(function(t,i,r,l,f,p){this._+="C"+ +t+","+ +i+","+ +r+","+ +l+","+(this._x1=+f)+","+(this._y1=+p)},"bezierCurveTo"),arcTo:e(function(t,i,r,l,f){t=+t,i=+i,r=+r,l=+l,f=+f;var p=this._x1,m=this._y1,_=r-t,s=l-i,a=p-t,u=m-i,x=a*a+u*u;if(f<0)throw new Error("negative radius: "+f);if(this._x1===null)this._+="M"+(this._x1=t)+","+(this._y1=i);else if(x>F)if(!(Math.abs(u*_-s*a)>F)||!f)this._+="L"+(this._x1=t)+","+(this._y1=i);else{var b=r-p,y=l-m,v=_*_+s*s,M=b*b+y*y,A=Math.sqrt(v),N=Math.sqrt(x),I=f*Math.tan((ht-Math.acos((v+x-M)/(2*A*N)))/2),B=I/N,R=I/A;Math.abs(B-1)>F&&(this._+="L"+(t+B*a)+","+(i+B*u)),this._+="A"+f+","+f+",0,0,"+ +(u*b>a*y)+","+(this._x1=t+R*_)+","+(this._y1=i+R*s)}},"arcTo"),arc:e(function(t,i,r,l,f,p){t=+t,i=+i,r=+r,p=!!p;var m=r*Math.cos(l),_=r*Math.sin(l),s=t+m,a=i+_,u=1^p,x=p?l-f:f-l;if(r<0)throw new Error("negative radius: "+r);this._x1===null?this._+="M"+s+","+a:(Math.abs(this._x1-s)>F||Math.abs(this._y1-a)>F)&&(this._+="L"+s+","+a),r&&(x<0&&(x=x%ft+ft),x>se?this._+="A"+r+","+r+",0,1,"+u+","+(t-m)+","+(i-_)+"A"+r+","+r+",0,1,"+u+","+(this._x1=s)+","+(this._y1=a):x>F&&(this._+="A"+r+","+r+",0,"+ +(x>=ht)+","+u+","+(this._x1=t+r*Math.cos(f))+","+(this._y1=i+r*Math.sin(f))))},"arc"),rect:e(function(t,i,r,l){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)+"h"+ +r+"v"+ +l+"h"+-r+"Z"},"rect"),toString:e(function(){return this._},"toString")};var re=mt;function dt(t){return e(function(){return t},"constant")}e(dt,"default");function Et(t){return t[0]}e(Et,"x");function At(t){return t[1]}e(At,"y");var oe=Array.prototype.slice;function Mt(t){return t.source}e(Mt,"linkSource");function Nt(t){return t.target}e(Nt,"linkTarget");function Ct(t){var i=Mt,r=Nt,l=Et,f=At,p=null;function m(){var _,s=oe.call(arguments),a=i.apply(this,s),u=r.apply(this,s);if(p||(p=_=re()),t(p,+l.apply(this,(s[0]=a,s)),+f.apply(this,s),+l.apply(this,(s[0]=u,s)),+f.apply(this,s)),_)return p=null,_+""||null}return e(m,"link"),m.source=function(_){return arguments.length?(i=_,m):i},m.target=function(_){return arguments.length?(r=_,m):r},m.x=function(_){return arguments.length?(l=typeof _=="function"?_:dt(+_),m):l},m.y=function(_){return arguments.length?(f=typeof _=="function"?_:dt(+_),m):f},m.context=function(_){return arguments.length?(p=_??null,m):p},m}e(Ct,"link");function Pt(t,i,r,l,f){t.moveTo(i,r),t.bezierCurveTo(i=(i+l)/2,r,i,f,l,f)}e(Pt,"curveHorizontal");function It(){return Ct(Pt)}e(It,"linkHorizontal");function zt(t){return[t.source.x1,t.y0]}e(zt,"horizontalSource");function Ot(t){return[t.target.x0,t.y1]}e(Ot,"horizontalTarget");function Bt(){return It().source(zt).target(Ot)}e(Bt,"default");var $,kt=($=class{static next(i){return new $(i+ ++$.count)}constructor(i){this.id=i,this.href=`#${i}`}toString(){return"url("+this.href+")"}},e($,"Uid"),$.count=0,$),ae={left:xt,right:vt,center:bt,justify:gt},le=e(function(t,i,r,l){const{securityLevel:f,sankey:p}=yt(),m=Ut.sankey;let _;f==="sandbox"&&(_=Q("#i"+i));const s=f==="sandbox"?Q(_.nodes()[0].contentDocument.body):Q("body"),a=f==="sandbox"?s.select(`[id="${i}"]`):Q(`[id="${i}"]`),u=(p==null?void 0:p.width)??m.width,x=(p==null?void 0:p.height)??m.width,b=(p==null?void 0:p.useMaxWidth)??m.useMaxWidth,y=(p==null?void 0:p.nodeAlignment)??m.nodeAlignment,v=(p==null?void 0:p.prefix)??m.prefix,M=(p==null?void 0:p.suffix)??m.suffix,A=(p==null?void 0:p.showValues)??m.showValues,N=l.db.getGraph(),I=ae[y];Tt().nodeId(g=>g.id).nodeWidth(10).nodePadding(10+(A?15:0)).nodeAlign(I).extent([[0,0],[u,x]])(N);const w=Gt(Yt);a.append("g").attr("class","nodes").selectAll(".node").data(N.nodes).join("g").attr("class","node").attr("id",g=>(g.uid=kt.next("node-")).id).attr("transform",function(g){return"translate("+g.x0+","+g.y0+")"}).attr("x",g=>g.x0).attr("y",g=>g.y0).append("rect").attr("height",g=>g.y1-g.y0).attr("width",g=>g.x1-g.x0).attr("fill",g=>w(g.id));const P=e(({id:g,value:T})=>A?`${g}
${v}${Math.round(T*100)/100}${M}`:g,"getText");a.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(N.nodes).join("text").attr("x",g=>g.x0<u/2?g.x1+6:g.x0-6).attr("y",g=>(g.y1+g.y0)/2).attr("dy",`${A?"0":"0.35"}em`).attr("text-anchor",g=>g.x0<u/2?"start":"end").text(P);const j=a.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(N.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),z=(p==null?void 0:p.linkColor)??"gradient";if(z==="gradient"){const g=j.append("linearGradient").attr("id",T=>(T.uid=kt.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",T=>T.source.x1).attr("x2",T=>T.target.x0);g.append("stop").attr("offset","0%").attr("stop-color",T=>w(T.source.id)),g.append("stop").attr("offset","100%").attr("stop-color",T=>w(T.target.id))}let O;switch(z){case"gradient":O=e(g=>g.uid,"coloring");break;case"source":O=e(g=>w(g.source.id),"coloring");break;case"target":O=e(g=>w(g.target.id),"coloring");break;default:O=z}j.append("path").attr("d",Bt()).attr("stroke",O).attr("stroke-width",g=>Math.max(1,g.width)),qt(void 0,a,0,b)},"draw"),ue={draw:le},ce=e(t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,`
`).trim(),"prepareTextForParsing"),he=J.parse.bind(J);J.parse=t=>he(ce(t));var me={parser:J,db:ie,renderer:ue};export{me as diagram};
