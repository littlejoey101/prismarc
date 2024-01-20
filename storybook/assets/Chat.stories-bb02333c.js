import{j as c,a as r}from"./jsx-runtime-f8e698f3.js";import{r as s}from"./index-f1f2c4b1.js";import{f as _}from"./botUtils-5a3ac7b2.js";import{C as w,c as C,f as M}from"./MessageFormatted-802b5c81.js";import{B as d}from"./Button-65b3b1ee.js";import"./standaloneUtils-1446f3b8.js";window.spamMessage=window.spamMessage??"";window.loadedData={language:{}};const B={component:w,render(a){const[m,i]=s.useState(a.messages),[p,x]=s.useState(!1),[u,l]=s.useState(a.opened);s.useEffect(()=>{const e=new AbortController;return addEventListener("keyup",t=>{t.code==="KeyY"&&(C.value="/",l(!0),t.stopImmediatePropagation()),t.code==="Escape"&&(l(!1),t.stopImmediatePropagation())},{signal:e.signal}),()=>e.abort()}),s.useEffect(()=>{i(a.messages)},[a.messages]),s.useEffect(()=>{if(!p)return;const e=()=>{const o=window.spamMessage?_(window.spamMessage):[{text:"tes"},{text:"t"}];i(n=>[...n,...Array.from({length:10}).map((g,k)=>{var v;return{id:(((v=n.at(-1))==null?void 0:v.id)??0)+k+1,parts:o}})])},t=setInterval(()=>e(),5e3);return e(),()=>clearInterval(t)},[p]);const E=()=>{for(const e of m)M(e,!1,()=>{i([...m])})};return c("div",{children:[c("div",{style:{fontSize:6,userSelect:"auto",color:"gray"},children:["Hint: you can capture needed message with ",r("code",{children:"bot.on('message', console.log)"}),", copy object, and assign it here to ",r("code",{children:"window.spamMessage"})," variable (but ensure the correct frame window is selected in devtools)"]}),r(w,{...a,opened:u,messages:m,onClose:()=>l(!1),fetchCompletionItems:async(e,t)=>{console.log("fetchCompletionItems"),await new Promise(n=>{setTimeout(n,0)});let o=["test",...Array.from({length:50}).map((n,g)=>`minecraft:hello${g}`)];return t==="/"&&(o=o.map(n=>`/${n}`)),o}}),c(d,{onClick:()=>l(e=>!e),children:["Open: ",u?"on":"off"]}),r(d,{onClick:()=>E(),children:"Fade"}),c(d,{onClick:()=>x(e=>!e),children:["Auto Spam: ",p?"on":"off"]}),r(d,{onClick:()=>i(a.messages),children:"Reset"})]})}},f={args:{messages:[{parts:[{bold:!1,italic:!1,underlined:!1,strikethrough:!1,obfuscated:!1,json:{insertion:"pviewer672",clickEvent:{action:"suggest_command",value:"/tell pviewer672 "},hoverEvent:{action:"show_entity",contents:{type:"minecraft:player",id:"ecd0eeb1-625e-3fea-b16e-cb449dcfa434",name:{text:"pviewer672"}}},text:"pviewer672"},text:"pviewer672",clickEvent:{action:"suggest_command",value:"/tell pviewer672 "},hoverEvent:{action:"show_entity",contents:{type:"minecraft:player",id:"ecd0eeb1-625e-3fea-b16e-cb449dcfa434",name:{text:"pviewer672"}}}},{text:" joined the game",color:"yellow",bold:!1,italic:!1,underlined:!1,strikethrough:!1,obfuscated:!1}],id:0}]}};var h,b,y;f.parameters={...f.parameters,docs:{...(h=f.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    messages: [{
      parts: [{
        'bold': false,
        'italic': false,
        'underlined': false,
        'strikethrough': false,
        'obfuscated': false,
        'json': {
          'insertion': 'pviewer672',
          'clickEvent': {
            'action': 'suggest_command',
            'value': '/tell pviewer672 '
          },
          'hoverEvent': {
            'action': 'show_entity',
            'contents': {
              'type': 'minecraft:player',
              'id': 'ecd0eeb1-625e-3fea-b16e-cb449dcfa434',
              'name': {
                'text': 'pviewer672'
              }
            }
          },
          'text': 'pviewer672'
        },
        'text': 'pviewer672',
        'clickEvent': {
          'action': 'suggest_command',
          'value': '/tell pviewer672 '
        },
        'hoverEvent': {
          'action': 'show_entity',
          //@ts-expect-error
          'contents': {
            'type': 'minecraft:player',
            'id': 'ecd0eeb1-625e-3fea-b16e-cb449dcfa434',
            'name': {
              'text': 'pviewer672'
            }
          }
        }
      }, {
        'text': ' joined the game',
        'color': 'yellow',
        'bold': false,
        'italic': false,
        'underlined': false,
        'strikethrough': false,
        'obfuscated': false
      }],
      id: 0
    }]
    // opened: false,
  }
}`,...(y=(b=f.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const T=["Primary"];export{f as Primary,T as __namedExportsOrder,B as default};
//# sourceMappingURL=Chat.stories-bb02333c.js.map
