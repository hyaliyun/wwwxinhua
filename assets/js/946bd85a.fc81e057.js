"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97610],{87006:(e,a,t)=>{t.d(a,{A:()=>P});var n=t(96540);const l=e=>!!e&&e instanceof Date;let s=1;const o=()=>s++;function c(e){let{field:a,value:t,data:l,lastElement:s,openBracket:c,closeBracket:r,level:i,style:u,shouldExpandNode:d,clickToExpandNode:p}=e;const b=(0,n.useRef)(!1),[x,h,v]=function(e){const[a,t]=(0,n.useState)(e());return[a,()=>t((e=>!e)),t]}((()=>d(i,t,a)));(0,n.useEffect)((()=>{b.current?v(d(i,t,a)):b.current=!0}),[d]);const _=x?u.collapseIcon:u.expandIcon,E=x?"collapse JSON":"expand JSON",N=function(){const e=(0,n.useRef)();return void 0===e.current&&(e.current=`:jsnvw:${o()}:`),e.current}(),f=i+1,k=l.length-1,g=e=>{" "===e.key&&(e.preventDefault(),h())};return(0,n.createElement)("div",{className:u.basicChildStyle,role:"list"},(0,n.createElement)("span",{className:_,onClick:h,onKeyDown:g,role:"button",tabIndex:0,"aria-label":E,"aria-expanded":x,"aria-controls":x?N:void 0}),a&&(p?(0,n.createElement)("span",{className:u.clickableLabel,onClick:h,onKeyDown:g,role:"button",tabIndex:-1},a,":"):(0,n.createElement)("span",{className:u.label},a,":")),(0,n.createElement)("span",{className:u.punctuation},c),x?(0,n.createElement)("div",{id:N},l.map(((e,a)=>(0,n.createElement)(m,{key:e[0]||a,field:e[0],value:e[1],style:u,lastElement:a===k,level:f,shouldExpandNode:d,clickToExpandNode:p})))):(0,n.createElement)("span",{className:u.collapsedContent,onClick:h,onKeyDown:g,role:"button",tabIndex:-1,"aria-hidden":!0,"aria-label":E,"aria-expanded":x}),(0,n.createElement)("span",{className:u.punctuation},r),!s&&(0,n.createElement)("span",{className:u.punctuation},","))}function r(e){let{field:a,openBracket:t,closeBracket:l,lastElement:s,style:o}=e;return(0,n.createElement)("div",{className:o.basicChildStyle,role:"listitem"},a&&(0,n.createElement)("span",{className:o.label},a,":"),(0,n.createElement)("span",{className:o.punctuation},t),(0,n.createElement)("span",{className:o.punctuation},l),!s&&(0,n.createElement)("span",{className:o.punctuation},","))}function i(e){let{field:a,value:t,style:n,lastElement:l,shouldExpandNode:s,clickToExpandNode:o,level:i}=e;return 0===Object.keys(t).length?r({field:a,openBracket:"{",closeBracket:"}",lastElement:l,style:n}):c({field:a,value:t,lastElement:l||!1,level:i,openBracket:"{",closeBracket:"}",style:n,shouldExpandNode:s,clickToExpandNode:o,data:Object.keys(t).map((e=>[e,t[e]]))})}function u(e){let{field:a,value:t,style:n,lastElement:l,level:s,shouldExpandNode:o,clickToExpandNode:i}=e;return 0===t.length?r({field:a,openBracket:"[",closeBracket:"]",lastElement:l,style:n}):c({field:a,value:t,lastElement:l||!1,level:s,openBracket:"[",closeBracket:"]",style:n,shouldExpandNode:o,clickToExpandNode:i,data:t.map((e=>[void 0,e]))})}function d(e){let{field:a,value:t,style:s,lastElement:o}=e,c=t,r=s.otherValue;var i;return null===t?(c="null",r=s.nullValue):void 0===t?(c="undefined",r=s.undefinedValue):"string"==typeof(i=t)||i instanceof String?(c=s.noQuotesForStringValues?t:`"${t}"`,r=s.stringValue):(e=>"boolean"==typeof e||e instanceof Boolean)(t)?(c=t?"true":"false",r=s.booleanValue):(e=>"number"==typeof e||e instanceof Number)(t)?(c=t.toString(),r=s.numberValue):(e=>"bigint"==typeof e||e instanceof BigInt)(t)?(c=`${t.toString()}n`,r=s.numberValue):c=l(t)?t.toISOString():t.toString(),""===a&&(a='""'),(0,n.createElement)("div",{className:s.basicChildStyle,role:"listitem"},a&&(0,n.createElement)("span",{className:s.label},a,":"),(0,n.createElement)("span",{className:r},c),!o&&(0,n.createElement)("span",{className:s.punctuation},","))}function m(e){const a=e.value;return t=a,Array.isArray(t)?(0,n.createElement)(u,Object.assign({},e)):(e=>e instanceof Object&&null!==e)(a)&&!l(a)?(0,n.createElement)(i,Object.assign({},e)):(0,n.createElement)(d,Object.assign({},e));var t}var p="_2bkNM";const b={container:"_2IvMF _GzYRV",basicChildStyle:p,label:"_1MGIk",clickableLabel:"_2YKJg _1MGIk _1MFti",nullValue:"_2T6PJ",undefinedValue:"_1Gho6",stringValue:"_vGjyY",booleanValue:"_3zQKs",numberValue:"_1bQdo",otherValue:"_1xvuR",punctuation:"_3uHL6 _3eOF8",collapseIcon:"_oLqym _f10Tu _1MFti _1LId0",expandIcon:"_2AXVT _f10Tu _1MFti _1UmXx",collapsedContent:"_2KJWg _1pNG9 _1MFti",noQuotesForStringValues:!1},x=()=>!0,h=e=>{let{data:a,style:t=b,shouldExpandNode:l=x,clickToExpandNode:s=!1}=e;return(0,n.createElement)("div",{className:t.container},(0,n.createElement)(m,{value:a,style:t,lastElement:!0,level:0,shouldExpandNode:l,clickToExpandNode:s}))},v="containerParaiso_cQJv",_="basicElementParaiso_QZsA",E="labelParaiso_wRN4",N="nullValueParaiso_AoA7",f="undefinedValueParaiso_FhTI",k="stringValueParaiso_V3BI",g="booleanValueParaiso_DtTx",y="numberValueParaiso_QJS7",j="otherValueParaiso_LEJn",V="punctuationParaiso_IgdH",I="expandIconParaiso_FXv1",S="collapseIconParaiso_vUhq",C="collapseContentParaiso_r7rr";var B=t(74848);const A={container:v,basicChildStyle:_,label:E,nullValue:N,undefinedValue:f,stringValue:k,booleanValue:g,numberValue:y,otherValue:j,punctuation:V,collapseIcon:S,expandIcon:I,collapsedContent:C};function P(e){let{src:a,collapseDepth:t}=e;return(0,B.jsx)(h,{data:a,shouldExpandNode:(e,a)=>Array.isArray(a)?a.length<5:void 0!==t&&e<t,style:A})}},53855:(e,a,t)=>{t.d(a,{A:()=>r});t(96540);var n=t(21141),l=t(14783);const s={container:"container_UJDL",nav:"nav_uyzg",navlink:"navlink_fkkq",active:"active_YJyX"};var o=t(74848);function c(e){let{to:a,children:t}=e;return(0,o.jsx)(l.A,{className:s.navlink,isNavLink:!0,to:a,exact:!0,activeStyle:{backgroundColor:"#363739"},children:t})}function r(e){let{children:a}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.A,{children:[(0,o.jsx)("html",{lang:"en"}),(0,o.jsx)("title",{children:"Docusaurus debug panel"}),(0,o.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("nav",{className:s.nav,children:[(0,o.jsx)(c,{to:"/__docusaurus/debug",children:"Config"}),(0,o.jsx)(c,{to:"/__docusaurus/debug/metadata",children:"Metadata"}),(0,o.jsx)(c,{to:"/__docusaurus/debug/registry",children:"Registry"}),(0,o.jsx)(c,{to:"/__docusaurus/debug/routes",children:"Routes"}),(0,o.jsx)(c,{to:"/__docusaurus/debug/content",children:"Content"}),(0,o.jsx)(c,{to:"/__docusaurus/debug/globalData",children:"Global data"})]}),(0,o.jsx)("main",{className:s.container,children:a})]})]})}},28495:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r});t(96540);var n=t(90214),l=t(53855),s=t(87006);const o={listItem:"listItem_Ild6",route:"route_NfVu",routeName:"routeName_Q1Ui"};var c=t(74848);function r(){return(0,c.jsxs)(l.A,{children:[(0,c.jsx)("h2",{children:"Routes"}),(0,c.jsx)("ul",{className:"clean-list",children:n.A.map((e=>{let{path:a,exact:t,routes:n}=e;return(0,c.jsxs)("li",{className:o.listItem,children:[(0,c.jsx)("div",{className:o.route,children:(0,c.jsx)("code",{className:o.routeName,children:a})}),(0,c.jsxs)("div",{children:["Is exact: ",(0,c.jsx)("code",{children:String(Boolean(t))})]}),n&&(0,c.jsxs)("div",{children:["Child Routes:",(0,c.jsx)(s.A,{src:n})]})]},a)}))})]})}}}]);