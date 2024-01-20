import{a as n}from"./jsx-runtime-f8e698f3.js";import{r as m}from"./index-f1f2c4b1.js";import{a as i,M as d}from"./MessageFormatted-802b5c81.js";import{f as g}from"./botUtils-5a3ac7b2.js";import"./standaloneUtils-1446f3b8.js";const c=({message:e})=>{const o=m.useMemo(()=>g(typeof e=="string"?i(e):e),[e]);return n(d,{parts:o})};try{MessageFormattedString.displayName="MessageFormattedString",MessageFormattedString.__docgenInfo={description:"like MessageFormatted, but receives raw string or json instead, uses window.loadedData",displayName:"MessageFormattedString",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string | Record<string, any>"}}}}}catch{}const M={component:c},r={args:{message:"§cYou died!"}};var t,s,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    // red text using minecraft styling symbol
    message: '\\u00A7cYou died!'
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const _=["Primary"];export{r as Primary,_ as __namedExportsOrder,M as default};
//# sourceMappingURL=MessageFormattedString.stories-73250c60.js.map
