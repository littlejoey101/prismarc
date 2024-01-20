import{a as T}from"./jsx-runtime-f8e698f3.js";import{R as E,r as b}from"./index-f1f2c4b1.js";import{_ as P}from"./inheritsLoose-c82a83d4.js";import{R as v}from"./index-c74c9f7f.js";function U(s,o){if(s==null)return{};var a={},i=Object.keys(s),e,t;for(t=0;t<i.length;t++)e=i[t],!(o.indexOf(e)>=0)&&(a[e]=s[e]);return a}const g={disabled:!1},M=E.createContext(null);var j=function(o){return o.scrollTop},x="unmounted",p="exited",c="entering",h="entered",N="exiting",l=function(s){P(o,s);function o(i,e){var t;t=s.call(this,i,e)||this;var n=e,r=n&&!n.isMounting?i.enter:i.appear,u;return t.appearStatus=null,i.in?r?(u=p,t.appearStatus=c):u=h:i.unmountOnExit||i.mountOnEnter?u=x:u=p,t.state={status:u},t.nextCallback=null,t}o.getDerivedStateFromProps=function(e,t){var n=e.in;return n&&t.status===x?{status:p}:null};var a=o.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==c&&n!==h&&(t=c):(n===c||n===h)&&(t=N)}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e=this.props.timeout,t,n,r;return t=n=r=e,e!=null&&typeof e!="number"&&(t=e.exit,n=e.enter,r=e.appear!==void 0?e.appear:n),{exit:t,enter:n,appear:r}},a.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===c){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this);n&&j(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===p&&this.setState({status:x})},a.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,u=this.props.nodeRef?[r]:[v.findDOMNode(this),r],f=u[0],m=u[1],y=this.getTimeouts(),L=r?y.appear:y.enter;if(!e&&!n||g.disabled){this.safeSetState({status:h},function(){t.props.onEntered(f)});return}this.props.onEnter(f,m),this.safeSetState({status:c},function(){t.props.onEntering(f,m),t.onTransitionEnd(L,function(){t.safeSetState({status:h},function(){t.props.onEntered(f,m)})})})},a.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:v.findDOMNode(this);if(!t||g.disabled){this.safeSetState({status:p},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:N},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:p},function(){e.props.onExited(r)})})})},a.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},a.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this),r=e==null&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],f=u[0],m=u[1];this.props.addEndListener(f,m)}e!=null&&setTimeout(this.nextCallback,e)},a.render=function(){var e=this.state.status;if(e===x)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var r=U(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return E.createElement(M.Provider,{value:null},typeof n=="function"?n(e,r):E.cloneElement(E.Children.only(n),r))},o}(E.Component);l.contextType=M;l.propTypes={};function d(){}l.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d};l.UNMOUNTED=x;l.EXITED=p;l.ENTERING=c;l.ENTERED=h;l.EXITING=N;const G=l,X="_container_jojrc_1",W="_main_jojrc_8",_={container:X,main:W},Z={opacity:0,transform:"translateZ(-150px)"},O={opacity:0,transform:"translateZ(150px)"},$={opacity:1,transform:"translateZ(0)"},w={entering:Z,entered:$,exiting:O,exited:O},I=300,F={transition:`${I}ms ease-in-out all`},C=({children:s,open:o})=>{const[a,i]=b.useState(!1);return b.useEffect(()=>{!a&&o&&i(!0)},[o]),a?T(G,{in:o,timeout:I,mountOnEnter:!0,unmountOnExit:!0,children:e=>T("div",{className:_.container,children:T("div",{style:{...F,...w[e]},className:_.main,children:s})})}):null};try{DiveTransition.displayName="DiveTransition",DiveTransition.__docgenInfo={description:"",displayName:"DiveTransition",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"any"}}}}}catch{}const V={component:C,render({open:s}){return T(C,{open:s,children:"hello"})}},S={args:{open:!1}};var D,k,R;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    open: false
  }
}`,...(R=(k=S.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const z=["Primary"];export{S as Primary,z as __namedExportsOrder,V as default};
//# sourceMappingURL=Dive.stories-62ed5e98.js.map
