import{j as ft,F as Nt,a as ut}from"./jsx-runtime-f8e698f3.js";import{r as u,a as Et}from"./index-f1f2c4b1.js";import{r as Ht}from"./index-c74c9f7f.js";import{B as It}from"./Button-65b3b1ee.js";import"./standaloneUtils-1446f3b8.js";function _(t){return vt(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function H(t){var e;return(e=(vt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function vt(t){return t instanceof Node||t instanceof O(t).Node}function T(t){return t instanceof Element||t instanceof O(t).Element}function k(t){return t instanceof HTMLElement||t instanceof O(t).HTMLElement}function at(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof O(t).ShadowRoot}function z(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(r)}function $t(t){return["table","td","th"].includes(_(t))}function rt(t){const e=it(),n=L(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function jt(t){let e=Y(t);for(;k(e)&&!U(e);){if(rt(e))return e;e=Y(e)}return null}function it(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function U(t){return["html","body","#document"].includes(_(t))}function L(t){return O(t).getComputedStyle(t)}function tt(t){return T(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Y(t){if(_(t)==="html")return t;const e=t.assignedSlot||t.parentNode||at(t)&&t.host||H(t);return at(e)?e.host:e}function Ct(t){const e=Y(t);return U(e)?t.ownerDocument?t.ownerDocument.body:t.body:k(e)&&z(e)?e:Ct(e)}function nt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=Ct(t),s=r===((o=t.ownerDocument)==null?void 0:o.body),i=O(r);return s?e.concat(i,i.visualViewport||[],z(r)?r:[],i.frameElement&&n?nt(i.frameElement):[]):e.concat(r,nt(r,[],n))}const q=Math.min,j=Math.max,Z=Math.round,N=t=>({x:t,y:t});function Xt(t,e,n){return j(t,q(e,n))}function St(t,e){return typeof t=="function"?t(e):t}function st(t){return t.split("-")[0]}function ct(t){return t.split("-")[1]}function Yt(t){return t==="x"?"y":"x"}function Tt(t){return t==="y"?"height":"width"}function lt(t){return["top","bottom"].includes(st(t))?"y":"x"}function Ot(t){return Yt(lt(t))}function qt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Kt(t){return typeof t!="number"?qt(t):{top:t,right:t,bottom:t,left:t}}function At(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function dt(t,e,n){let{reference:o,floating:r}=t;const s=lt(e),i=Ot(e),c=Tt(i),l=st(e),f=s==="y",a=o.x+o.width/2-r.width/2,g=o.y+o.height/2-r.height/2,h=o[c]/2-r[c]/2;let d;switch(l){case"top":d={x:a,y:o.y-r.height};break;case"bottom":d={x:a,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:g};break;case"left":d={x:o.x-r.width,y:g};break;default:d={x:o.x,y:o.y}}switch(ct(e)){case"start":d[i]-=h*(n&&f?-1:1);break;case"end":d[i]+=h*(n&&f?-1:1);break}return d}const zt=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:i}=n,c=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let f=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:a,y:g}=dt(f,o,l),h=o,d={},p=0;for(let w=0;w<c.length;w++){const{name:b,fn:E}=c[w],{x:v,y:C,data:m,reset:y}=await E({x:a,y:g,initialPlacement:o,placement:h,strategy:r,middlewareData:d,rects:f,platform:i,elements:{reference:t,floating:e}});if(a=v??a,g=C??g,d={...d,[b]:{...d[b],...m}},y&&p<=50){p++,typeof y=="object"&&(y.placement&&(h=y.placement),y.rects&&(f=y.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):y.rects),{x:a,y:g}=dt(f,h,l)),w=-1;continue}}return{x:a,y:g,placement:h,strategy:r,middlewareData:d}},mt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:s,platform:i,elements:c,middlewareData:l}=e,{element:f,padding:a=0}=St(t,e)||{};if(f==null)return{};const g=Kt(a),h={x:n,y:o},d=Ot(r),p=Tt(d),w=await i.getDimensions(f),b=d==="y",E=b?"top":"left",v=b?"bottom":"right",C=b?"clientHeight":"clientWidth",m=s.reference[p]+s.reference[d]-h[d]-s.floating[p],y=h[d]-s.reference[d],A=await(i.getOffsetParent==null?void 0:i.getOffsetParent(f));let x=A?A[C]:0;(!x||!await(i.isElement==null?void 0:i.isElement(A)))&&(x=c.floating[C]||s.floating[p]);const B=m/2-y/2,F=x/2-w[p]/2-1,M=q(g[E],F),P=q(g[v],F),D=M,W=x-w[p]-P,S=x/2-w[p]/2+B,I=Xt(D,S,W),R=!l.arrow&&ct(r)!=null&&S!=I&&s.reference[p]/2-(S<D?M:P)-w[p]/2<0,V=R?S<D?S-D:S-W:0;return{[d]:h[d]+V,data:{[d]:I,centerOffset:S-I-V,...R&&{alignmentOffset:V}},reset:R}}});async function Gt(t,e){const{placement:n,platform:o,elements:r}=t,s=await(o.isRTL==null?void 0:o.isRTL(r.floating)),i=st(n),c=ct(n),l=lt(n)==="y",f=["left","top"].includes(i)?-1:1,a=s&&l?-1:1,g=St(e,t);let{mainAxis:h,crossAxis:d,alignmentAxis:p}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return c&&typeof p=="number"&&(d=c==="end"?p*-1:p),l?{x:d*a,y:h*f}:{x:h*f,y:d*a}}const Qt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,r=await Gt(e,t);return{x:n+r.x,y:o+r.y,data:r}}}};function Lt(t){const e=L(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=k(t),s=r?t.offsetWidth:n,i=r?t.offsetHeight:o,c=Z(n)!==s||Z(o)!==i;return c&&(n=s,o=i),{width:n,height:o,$:c}}function Pt(t){return T(t)?t:t.contextElement}function X(t){const e=Pt(t);if(!k(e))return N(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:s}=Lt(e);let i=(s?Z(n.width):n.width)/o,c=(s?Z(n.height):n.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const Zt=N(0);function Dt(t){const e=O(t);return!it()||!e.visualViewport?Zt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Jt(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==O(t)?!1:e}function K(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=Pt(t);let i=N(1);e&&(o?T(o)&&(i=X(o)):i=X(t));const c=Jt(s,n,o)?Dt(s):N(0);let l=(r.left+c.x)/i.x,f=(r.top+c.y)/i.y,a=r.width/i.x,g=r.height/i.y;if(s){const h=O(s),d=o&&T(o)?O(o):o;let p=h.frameElement;for(;p&&o&&d!==h;){const w=X(p),b=p.getBoundingClientRect(),E=L(p),v=b.left+(p.clientLeft+parseFloat(E.paddingLeft))*w.x,C=b.top+(p.clientTop+parseFloat(E.paddingTop))*w.y;l*=w.x,f*=w.y,a*=w.x,g*=w.y,l+=v,f+=C,p=O(p).frameElement}}return At({width:a,height:g,x:l,y:f})}function Ut(t){let{rect:e,offsetParent:n,strategy:o}=t;const r=k(n),s=H(n);if(n===s)return e;let i={scrollLeft:0,scrollTop:0},c=N(1);const l=N(0);if((r||!r&&o!=="fixed")&&((_(n)!=="body"||z(s))&&(i=tt(n)),k(n))){const f=K(n);c=X(n),l.x=f.x+n.clientLeft,l.y=f.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-i.scrollLeft*c.x+l.x,y:e.y*c.y-i.scrollTop*c.y+l.y}}function te(t){return Array.from(t.getClientRects())}function kt(t){return K(H(t)).left+tt(t).scrollLeft}function ee(t){const e=H(t),n=tt(t),o=t.ownerDocument.body,r=j(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=j(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+kt(t);const c=-n.scrollTop;return L(o).direction==="rtl"&&(i+=j(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:i,y:c}}function ne(t,e){const n=O(t),o=H(t),r=n.visualViewport;let s=o.clientWidth,i=o.clientHeight,c=0,l=0;if(r){s=r.width,i=r.height;const f=it();(!f||f&&e==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}return{width:s,height:i,x:c,y:l}}function oe(t,e){const n=K(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,s=k(t)?X(t):N(1),i=t.clientWidth*s.x,c=t.clientHeight*s.y,l=r*s.x,f=o*s.y;return{width:i,height:c,x:l,y:f}}function gt(t,e,n){let o;if(e==="viewport")o=ne(t,n);else if(e==="document")o=ee(H(t));else if(T(e))o=oe(e,n);else{const r=Dt(t);o={...e,x:e.x-r.x,y:e.y-r.y}}return At(o)}function Mt(t,e){const n=Y(t);return n===e||!T(n)||U(n)?!1:L(n).position==="fixed"||Mt(n,e)}function re(t,e){const n=e.get(t);if(n)return n;let o=nt(t,[],!1).filter(c=>T(c)&&_(c)!=="body"),r=null;const s=L(t).position==="fixed";let i=s?Y(t):t;for(;T(i)&&!U(i);){const c=L(i),l=rt(i);!l&&c.position==="fixed"&&(r=null),(s?!l&&!r:!l&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||z(i)&&!l&&Mt(t,i))?o=o.filter(a=>a!==i):r=c,i=Y(i)}return e.set(t,o),o}function ie(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[...n==="clippingAncestors"?re(e,this._c):[].concat(n),o],c=i[0],l=i.reduce((f,a)=>{const g=gt(e,a,r);return f.top=j(g.top,f.top),f.right=q(g.right,f.right),f.bottom=q(g.bottom,f.bottom),f.left=j(g.left,f.left),f},gt(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function se(t){return Lt(t)}function ce(t,e,n){const o=k(e),r=H(e),s=n==="fixed",i=K(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=N(0);if(o||!o&&!s)if((_(e)!=="body"||z(r))&&(c=tt(e)),o){const f=K(e,!0,s,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}else r&&(l.x=kt(r));return{x:i.left+c.scrollLeft-l.x,y:i.top+c.scrollTop-l.y,width:i.width,height:i.height}}function pt(t,e){return!k(t)||L(t).position==="fixed"?null:e?e(t):t.offsetParent}function Bt(t,e){const n=O(t);if(!k(t))return n;let o=pt(t,e);for(;o&&$t(o)&&L(o).position==="static";)o=pt(o,e);return o&&(_(o)==="html"||_(o)==="body"&&L(o).position==="static"&&!rt(o))?n:o||jt(t)||n}const le=async function(t){let{reference:e,floating:n,strategy:o}=t;const r=this.getOffsetParent||Bt,s=this.getDimensions;return{reference:ce(e,await r(n),o),floating:{x:0,y:0,...await s(n)}}};function fe(t){return L(t).direction==="rtl"}const Ft={convertOffsetParentRelativeRectToViewportRelativeRect:Ut,getDocumentElement:H,getClippingRect:ie,getOffsetParent:Bt,getElementRects:le,getClientRects:te,getDimensions:se,getScale:X,isElement:T,isRTL:fe},ue=(t,e,n)=>{const o=new Map,r={platform:Ft,...n},s={...r.platform,_c:o};return zt(t,e,{...r,platform:s})},ae=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:r}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?mt({element:o.current,padding:r}).fn(n):{}:o?mt({element:o,padding:r}).fn(n):{}}}};var Q=typeof document<"u"?u.useLayoutEffect:u.useEffect;function J(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(o=n;o--!==0;)if(!J(t[o],e[o]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,r[o]))return!1;for(o=n;o--!==0;){const s=r[o];if(!(s==="_owner"&&t.$$typeof)&&!J(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function Wt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function ht(t,e){const n=Wt(t);return Math.round(e*n)/n}function yt(t){const e=u.useRef(t);return Q(()=>{e.current=t}),e}function de(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:s,floating:i}={},transform:c=!0,whileElementsMounted:l,open:f}=t,[a,g]=u.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[h,d]=u.useState(o);J(h,o)||d(o);const[p,w]=u.useState(null),[b,E]=u.useState(null),v=u.useCallback(R=>{R!=A.current&&(A.current=R,w(R))},[w]),C=u.useCallback(R=>{R!==x.current&&(x.current=R,E(R))},[E]),m=s||p,y=i||b,A=u.useRef(null),x=u.useRef(null),B=u.useRef(a),F=yt(l),M=yt(r),P=u.useCallback(()=>{if(!A.current||!x.current)return;const R={placement:e,strategy:n,middleware:h};M.current&&(R.platform=M.current),ue(A.current,x.current,R).then(V=>{const $={...V,isPositioned:!0};D.current&&!J(B.current,$)&&(B.current=$,Ht.flushSync(()=>{g($)}))})},[h,e,n,M]);Q(()=>{f===!1&&B.current.isPositioned&&(B.current.isPositioned=!1,g(R=>({...R,isPositioned:!1})))},[f]);const D=u.useRef(!1);Q(()=>(D.current=!0,()=>{D.current=!1}),[]),Q(()=>{if(m&&(A.current=m),y&&(x.current=y),m&&y){if(F.current)return F.current(m,y,P);P()}},[m,y,P,F]);const W=u.useMemo(()=>({reference:A,floating:x,setReference:v,setFloating:C}),[v,C]),S=u.useMemo(()=>({reference:m,floating:y}),[m,y]),I=u.useMemo(()=>{const R={position:n,left:0,top:0};if(!S.floating)return R;const V=ht(S.floating,a.x),$=ht(S.floating,a.y);return c?{...R,transform:"translate("+V+"px, "+$+"px)",...Wt(S.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:V,top:$}},[n,c,S.floating,a.x,a.y]);return u.useMemo(()=>({...a,update:P,refs:W,elements:S,floatingStyles:I}),[a,P,W,S,I])}const me=Et["useInsertionEffect".toString()],ge=me||(t=>t());function pe(t){const e=u.useRef(()=>{});return ge(()=>{e.current=t}),u.useCallback(function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return e.current==null?void 0:e.current(...o)},[])}var Vt=typeof document<"u"?u.useLayoutEffect:u.useEffect;function ot(){return ot=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ot.apply(this,arguments)}let et=!1,he=0;const wt=()=>"floating-ui-"+he++;function ye(){const[t,e]=u.useState(()=>et?wt():void 0);return Vt(()=>{t==null&&e(wt())},[]),u.useEffect(()=>{et||(et=!0)},[]),t}const we=Et["useId".toString()],_t=we||ye,xe=u.forwardRef(function(e,n){let{context:{placement:o,elements:{floating:r},middlewareData:{arrow:s}},width:i=14,height:c=7,tipRadius:l=0,strokeWidth:f=0,staticOffset:a,stroke:g,d:h,style:{transform:d,...p}={},...w}=e;const b=_t();if(!r)return null;f*=2;const E=f/2,v=i/2*(l/-8+1),C=c/2*l/4,[m,y]=o.split("-"),A=Ft.isRTL(r),x=!!h,B=m==="top"||m==="bottom",F=a&&y==="end"?"bottom":"top";let M=a&&y==="end"?"right":"left";a&&A&&(M=y==="end"?"left":"right");const P=(s==null?void 0:s.x)!=null?a||s.x:"",D=(s==null?void 0:s.y)!=null?a||s.y:"",W=h||"M0,0"+(" H"+i)+(" L"+(i-v)+","+(c-C))+(" Q"+i/2+","+c+" "+v+","+(c-C))+" Z",S={top:x?"rotate(180deg)":"",left:x?"rotate(90deg)":"rotate(-90deg)",bottom:x?"":"rotate(180deg)",right:x?"rotate(-90deg)":"rotate(90deg)"}[m];return u.createElement("svg",ot({},w,{"aria-hidden":!0,ref:n,width:x?i:i+f,height:i,viewBox:"0 0 "+i+" "+(c>i?c:i),style:{position:"absolute",pointerEvents:"none",[M]:P,[F]:D,[m]:B||x?"100%":"calc(100% - "+f/2+"px)",transform:""+S+(d??""),...p}}),f>0&&u.createElement("path",{clipPath:"url(#"+b+")",fill:"none",stroke:g,strokeWidth:f+(h?0:1),d:W}),u.createElement("path",{stroke:f&&!h?w.fill:"none",d:W}),u.createElement("clipPath",{id:b},u.createElement("rect",{x:-E,y:E*(x?-1:1),width:i+f,height:i})))});function Re(){const t=new Map;return{emit(e,n){var o;(o=t.get(e))==null||o.forEach(r=>r(n))},on(e,n){t.set(e,[...t.get(e)||[],n])},off(e,n){var o;t.set(e,((o=t.get(e))==null?void 0:o.filter(r=>r!==n))||[])}}}const be=u.createContext(null),Ee=()=>u.useContext(be);function ve(t){var e;t===void 0&&(t={});const{open:n=!1,onOpenChange:o,nodeId:r}=t,[s,i]=u.useState(null),c=((e=t.elements)==null?void 0:e.reference)||s,l=de(t),f=Ee(),a=pe((m,y)=>{m&&(h.current.openEvent=y),o==null||o(m,y)}),g=u.useRef(null),h=u.useRef({}),d=u.useState(()=>Re())[0],p=_t(),w=u.useCallback(m=>{const y=T(m)?{getBoundingClientRect:()=>m.getBoundingClientRect(),contextElement:m}:m;l.refs.setReference(y)},[l.refs]),b=u.useCallback(m=>{(T(m)||m===null)&&(g.current=m,i(m)),(T(l.refs.reference.current)||l.refs.reference.current===null||m!==null&&!T(m))&&l.refs.setReference(m)},[l.refs]),E=u.useMemo(()=>({...l.refs,setReference:b,setPositionReference:w,domReference:g}),[l.refs,b,w]),v=u.useMemo(()=>({...l.elements,domReference:c}),[l.elements,c]),C=u.useMemo(()=>({...l,refs:E,elements:v,dataRef:h,nodeId:r,floatingId:p,events:d,open:n,onOpenChange:a}),[l,r,p,d,n,a,E,v]);return Vt(()=>{const m=f==null?void 0:f.nodesRef.current.find(y=>y.id===r);m&&(m.context=C)}),u.useMemo(()=>({...l,context:C,refs:E,elements:v}),[l,E,v,C])}const Ce=7,Se=0,Te=({initialTooltip:t,...e})=>{const{localStorageKey:n="firstTimeTooltip",offset:o=0}=t,[r,s]=u.useState(n?localStorage[n]!=="false":!0);u.useEffect(()=>{let a;function g(){n&&(localStorage[n]="false",s(!1))}return r&&n&&(a=setTimeout(()=>{g()},1e4)),()=>{a&&clearTimeout(a),g()}},[]);const i=u.useRef(null),{refs:c,floatingStyles:l,context:f}=ve({middleware:[ae({element:i}),Qt(Ce+Se+o)],placement:t.placement});return ft(Nt,{children:[ut(It,{...e,rootRef:c.setReference}),ft("div",{ref:c.setFloating,style:{...l,background:"rgba(0, 0, 0, 0.3)",fontSize:8,pointerEvents:"none",userSelect:"text",padding:"2px 4px",opacity:r?1:0,transition:"opacity 0.3s ease-in-out",textShadow:"1px 1px 2px BLACK",zIndex:11},children:[t.content,ut(xe,{ref:i,context:f,style:{opacity:.7}})]})]})};try{ButtonWithTooltip.displayName="ButtonWithTooltip",ButtonWithTooltip.__docgenInfo={description:"",displayName:"ButtonWithTooltip",props:{initialTooltip:{defaultValue:null,description:"",name:"initialTooltip",required:!0,type:{name:"{ content: string; placement?: Placement | undefined; localStorageKey?: string | null | undefined; offset?: number | undefined; }"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},inScreen:{defaultValue:null,description:"",name:"inScreen",required:!1,type:{name:"boolean"}},rootRef:{defaultValue:null,description:"",name:"rootRef",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}}}catch{}const ke={component:Te},G={args:{label:"test",initialTooltip:{content:"hi there",localStorageKey:null}}};var xt,Rt,bt;G.parameters={...G.parameters,docs:{...(xt=G.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  args: {
    label: 'test',
    initialTooltip: {
      content: 'hi there',
      localStorageKey: null
    }
  }
}`,...(bt=(Rt=G.parameters)==null?void 0:Rt.docs)==null?void 0:bt.source}}};const Me=["Primary"];export{G as Primary,Me as __namedExportsOrder,ke as default};
//# sourceMappingURL=ButtonWithTooltip.stories-72f836da.js.map
