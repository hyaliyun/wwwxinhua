"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30437],{39718:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var i=s(74848),n=s(28453),r=s(93935);const l={tags:["visibility"]},o="Visibility",c={id:"tests/visibility/index",title:"Visibility",description:"A category to play with draft/unlisted front matter.",source:"@site/_dogfooding/_docs tests/tests/visibility/index.mdx",sourceDirName:"tests/visibility",slug:"/tests/visibility/",permalink:"/tests/docs/tests/visibility/",draft:!1,unlisted:!1,tags:[{inline:!1,label:"Visibility",permalink:"/tests/docs/tags/visibility"}],version:"current",frontMatter:{tags:["visibility"]},sidebar:"sidebar",previous:{title:"TOC partial test",permalink:"/tests/docs/tests/toc-partials/"},next:{title:"Some Drafts - Listed 1",permalink:"/tests/docs/tests/visibility/some-drafts/draft-subcategory/listed1"}},d={},a=[];function u(e){const t={a:"a",h1:"h1",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"visibility",children:"Visibility"})}),"\n",(0,i.jsx)(t.p,{children:"A category to play with draft/unlisted front matter."}),"\n",(0,i.jsx)(t.p,{children:"In dev, both draft/unlisted items are displayed."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"In production, draft items shouldn't be accessible:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"pathname:///tests/docs/tests/visibility/only-drafts/draft1",children:"/tests/docs/tests/visibility/only-drafts/draft1"})}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"In production, unlisted items should remain accessible, but be hidden in the sidebar (unless currently browsed):"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tests/docs/tests/visibility/only-unlisteds/unlisted1",children:"./only-unlisteds/unlisted1.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tests/docs/tests/visibility/only-unlisteds/unlisted2",children:"./only-unlisteds/unlisted2.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tests/docs/tests/visibility/only-unlisteds/unlisted-subcategory/unlisted3",children:"./only-unlisteds/unlisted-subcategory/unlisted3.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tests/docs/tests/visibility/some-unlisteds/unlisted1",children:"./some-unlisteds/unlisted1.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tests/docs/tests/visibility/some-unlisteds/unlisted2",children:"./some-unlisteds/unlisted2.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tests/docs/tests/visibility/some-unlisteds/unlisted-subcategory/unlisted3",children:"./some-unlisteds/unlisted-subcategory/unlisted3.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tests/docs/tests/visibility/force-unlisted",children:"./force-unlisted.mdx"})}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n","\n",(0,i.jsx)(r.A,{})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}h.displayName="MDXContent(_dogfooding\\_docs tests\\tests\\visibility\\index.mdx)"},93935:(e,t,s)=>{s.d(t,{A:()=>b});s(96540);var i=s(34164),n=s(45357),r=s(14783),l=s(57824),o=s(40877),c=s(50993),d=s(85225);const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=s(74848);function h(e){let{href:t,children:s}=e;return(0,u.jsx)(r.A,{href:t,className:(0,i.A)("card padding--lg",a.cardContainer),children:s})}function m(e){let{href:t,icon:s,title:n,description:r}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(d.A,{as:"h2",className:(0,i.A)("text--truncate",a.cardTitle),title:n,children:[s," ",n]}),r&&(0,u.jsx)("p",{className:(0,i.A)("text--truncate",a.cardDescription),title:r,children:r})]})}function f(e){let{item:t}=e;const s=(0,n.Nr)(t),i=function(){const{selectMessage:e}=(0,l.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,u.jsx)(m,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function p(e){let{item:t}=e;const s=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:s,title:t.label,description:t.description??i?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(p,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const s=(0,n.$S)();return(0,u.jsx)(b,{items:s.items,className:t})}function b(e){const{items:t,className:s}=e;if(!t)return(0,u.jsx)(y,{...e});const r=(0,n.d1)(t);return(0,u.jsx)("section",{className:(0,i.A)("row",s),children:r.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},t)))})}},57824:(e,t,s)=>{s.d(t,{W:()=>d});var i=s(96540),n=s(97639);const r=["zero","one","two","few","many","other"];function l(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,i.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function d(){const e=c();return{selectMessage:(t,s)=>function(e,t,s){const i=e.split("|");if(1===i.length)return i[0];i.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const n=s.select(t),r=s.pluralForms.indexOf(n);return i[Math.min(r,i.length-1)]}(s,t,e)}}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>o});var i=s(96540);const n={},r=i.createContext(n);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);