"use strict";(self.webpackChunkcard_pokemon=self.webpackChunkcard_pokemon||[]).push([[256],{827:function(e,n,t){t.d(n,{C:function(){return c},k:function(){return a}});var r="https://pokeapi.co/api/v2";function a(e){return fetch("".concat(r,"/pokemon/").concat(e)).then((function(n){return n.ok?n.json():Promise.reject(new Error("\u041d\u0435\u0442 \u043f\u043e\u043a\u0435\u043c\u043e\u043d\u0430 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(e)))}))}function c(e,n){return fetch("".concat(r,"/pokemon?offset=").concat(e,"&limit=").concat(n)).then((function(e){if(e.ok)return e.json()}))}},5256:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(5861),a=t(885),c=t(7757),s=t.n(c),o=t(7689),i=t(827),u=t(2791),f="PokemoPage_box__eL2CS",l="PokemoPage_box_effect__kO5Ar",m="PokemoPage_box_img__FDUWh",h="PokemoPage_box_text__i7f16",p="PokemoPage_list__gfGPg",_="PokemoPage_list_title__Y17q2",d="PokemoPage_list_item__z4sET",k=t(5190),x="BoxPage_container__qC4qH",v=t(184);function j(e){var n=e.children;return(0,v.jsx)("div",{className:x,children:n})}function P(e){var n=e.pokemon,t=e.abilities,r=n.sprites.other["official-artwork"].front_default,a=n.types[0].type.name,c=(0,o.TH)(),s=(0,o.s0)();return n&&(0,v.jsxs)(j,{children:[(0,v.jsx)(k.Z,{onClick:function(){var e;if(null!==c&&void 0!==c&&null!==(e=c.state)&&void 0!==e&&e.from){var n,t=null===c||void 0===c||null===(n=c.state)||void 0===n?void 0:n.from,r=t.pathname,a=t.search;return s("".concat(r).concat(a))}return s("/")},children:"Back"}),(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)("img",{className:m,src:r,alt:n.name}),(0,v.jsxs)("ul",{className:p,children:[(0,v.jsx)("h1",{className:_,children:n.name}),(0,v.jsxs)("li",{className:d,children:["Type: ",a]}),n.stats.map((function(e){return(0,v.jsxs)("li",{className:d,children:[e.stat.name,": ",e.base_stat]},e.stat.name)}))]})]}),(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("h2",{className:_,children:"Abilities"}),(0,v.jsx)("p",{children:"Effect"}),(0,v.jsx)("span",{className:h,children:t.effect}),(0,v.jsx)("p",{children:"Short Effect"}),(0,v.jsx)("span",{className:h,children:t.short_effect})]})]})}var g=function(e){var n=(0,u.useState)(null),t=(0,a.Z)(n,2),c=t[0],f=t[1],l=(0,u.useState)([]),m=(0,a.Z)(l,2),h=m[0],p=m[1],_=(0,o.UO)().name;return(0,u.useEffect)((function(){try{var e=function(){var e=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.k)(_);case 2:n=e.sent,f(n),t=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.abilities.map(function(){var e=(0,r.Z)(s().mark((function e(n){var t,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.ability,e.next=3,fetch(t.url);case 3:return r=e.sent,e.next=6,r.json();case 6:a=e.sent,p(a.effect_entries[1]);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),t(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(n){console.log(n)}}),[_]),c&&(0,v.jsx)(P,{pokemon:c,abilities:h})}}}]);
//# sourceMappingURL=256.90a667d8.chunk.js.map