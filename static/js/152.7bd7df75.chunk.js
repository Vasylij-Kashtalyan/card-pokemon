"use strict";(self.webpackChunkcard_pokemon=self.webpackChunkcard_pokemon||[]).push([[152],{152:function(n,t,e){e.r(t),e.d(t,{default:function(){return O}});var a=e(3721),i=e(885),r="Pokemon_list__GuS2J",o="Pokemon_list_title__249y1",s="Pokemon_list_item__-R0x8",l="Pokemon_list_img__mMJTa",h=e(1087),c=e(7689),d=e(168),u=e(1048),m=e(2793),p=e(2791),f=e(8182),g=e(2554),v=e(4419);function k(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function x(n){return parseFloat(n)}var w=e(2065),_=e(6934),b=e(1402),C=e(5878),y=e(7225);function Z(n){return(0,y.Z)("MuiSkeleton",n)}(0,C.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var j,S,N,R,M,P,F,A,T=e(184),X=["animation","className","component","height","style","variant","width"],L=(0,g.F4)(M||(M=j||(j=(0,d.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),W=(0,g.F4)(P||(P=S||(S=(0,d.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),B=(0,_.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,a=k(t.shape.borderRadius)||"px",i=x(t.shape.borderRadius);return(0,m.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,w.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(a,"/").concat(Math.round(i/.6*10)/10).concat(a),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,g.iv)(F||(F=N||(N=(0,d.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),L)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,g.iv)(A||(A=R||(R=(0,d.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),W,(e.vars||e).palette.action.hover)})),D=p.forwardRef((function(n,t){var e=(0,b.Z)({props:n,name:"MuiSkeleton"}),a=e.animation,i=void 0===a?"pulse":a,r=e.className,o=e.component,s=void 0===o?"span":o,l=e.height,h=e.style,c=e.variant,d=void 0===c?"text":c,p=e.width,g=(0,u.Z)(e,X),k=(0,m.Z)({},e,{animation:i,component:s,variant:d,hasChildren:Boolean(g.children)}),x=function(n){var t=n.classes,e=n.variant,a=n.animation,i=n.hasChildren,r=n.width,o=n.height,s={root:["root",e,a,i&&"withChildren",i&&!r&&"fitContent",i&&!o&&"heightAuto"]};return(0,v.Z)(s,Z,t)}(k);return(0,T.jsx)(B,(0,m.Z)({as:s,ref:t,className:(0,f.Z)(x.root,r),ownerState:k},g,{style:(0,m.Z)({width:p,height:l},h)}))})),E=function(n){var t=n.pokemon,e=t.sprites.other["official-artwork"].front_default,a=t.game_indices[0].game_index,d=(0,c.TH)(),u=(0,p.useState)(!0),m=(0,i.Z)(u,2),f=m[0],g=m[1];return(0,p.useEffect)((function(){t&&g(!1)}),[t]),(0,T.jsx)("ul",{className:r,children:f?(0,T.jsx)(D,{variant:"rectangular",width:190,height:240}):(0,T.jsx)("li",{className:"".concat(s," ").concat(t.types[0].type.name),children:(0,T.jsxs)(h.rU,{state:{from:d},to:t.name,children:[(0,T.jsxs)("h5",{className:o,children:[t.name," #",a]}),(0,T.jsx)("img",{className:l,src:e,alt:t.name,loading:"lazy"}),(0,T.jsxs)("span",{className:o,children:["Exp: ",t.base_experience]})]})})})},H="PokemonList_btnMore__5WW6v",J="PokemonList_boxDetails__DxOia";var O=function(n){var t=n.details,e=n.fil,i=n.nextPage;return"/type"===(0,c.TH)().pathname?(0,T.jsx)(T.Fragment,{children:e.map((function(n,t){return(0,T.jsx)(E,{pokemon:n},t)}))}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:J,children:t&&t.map((function(n,t){return(0,T.jsx)(E,{pokemon:n},t)}))}),t.length>=4&&(0,T.jsx)("div",{className:H,children:(0,T.jsx)(a.Z,{onClick:i,children:"Load More"})})]})}}}]);
//# sourceMappingURL=152.7bd7df75.chunk.js.map