(this["webpackJsonpevaluacion-final"]=this["webpackJsonpevaluacion-final"]||[]).push([[0],{18:function(e,t,a){e.exports=a(32)},22:function(e,t,a){},23:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),i=a(6),u=(a(22),a(9)),o=a(1);a(23),a(24);function m(e){return e.species="Human"===e.species?"Humano":"Alien",e.status="Alive"===e.status?"Vivo":"Muerto",e}var s=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return e.map(m)}))},p=function(e){var t=function(t){t.preventDefault(),e.handleFilters({key:t.target.id,value:t.target.value})};return l.a.createElement("form",{action:""},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"filterName"},"Busca tu personaje"),l.a.createElement("input",{type:"text",id:"filterName",value:e.filterName,onChange:t})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"filterSpecie"},"Busca por especie"),l.a.createElement("select",{name:"filterSpecie",id:"filterSpecie",value:e.filterSpecie,onChange:t},l.a.createElement("option",{value:"all"},"Todos"),l.a.createElement("option",{value:"Humano"},"Humano"),l.a.createElement("option",{value:"Alien"},"Alien"))))},f=function(e){return l.a.createElement("div",{className:"modal"},l.a.createElement("header",{className:"modal__header"},l.a.createElement("a",{href:"/"},l.a.createElement("span",{className:"modal__close--icon"}))),l.a.createElement("section",null,l.a.createElement("img",{src:e.image,alt:e.name}),l.a.createElement("h2",null,e.name),l.a.createElement("ul",null,l.a.createElement("li",null,"Estado: ".concat(e.status)),l.a.createElement("li",null,"Especie: ".concat(e.specie)),l.a.createElement("li",null,"Planeta de origen: ".concat(e.origin.name)),l.a.createElement("li",null,"N\xba de episodios: ".concat(e.episodes.length)))),l.a.createElement(i.b,{to:"/"},l.a.createElement("button",null,"Cerrar")))},E=function(e){return l.a.createElement(i.b,{to:"/character/".concat(e.id)},l.a.createElement("article",null,l.a.createElement("img",{src:e.image,alt:e.name}),l.a.createElement("h3",null,e.name),l.a.createElement("p",null,e.specie)))},d=function(e){if(0===e.characters.length){var t="all"===e.filterSpecie?"personaje":e.filterSpecie;return l.a.createElement("p",null,"No hay ning\xfan ".concat(t," que coincida con la palabra ").concat(e.filterName))}var a=e.characters.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})).map((function(e){return l.a.createElement(E,{key:e.id,id:e.id,name:e.name,image:e.image,specie:e.species})}));return l.a.createElement("section",null,a)};var h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),m=i[0],E=i[1],h=Object(n.useState)("all"),v=Object(u.a)(h,2),g=v[0],b=v[1];function N(e){return"all"===g||e.species===g}function S(e){return e.name.toLowerCase().includes(m.toLowerCase())}return Object(n.useEffect)((function(){s().then((function(e){r(e)}))}),[]),l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("h1",null,"Rick & Morty")),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/"},l.a.createElement(p,{filterSpecie:g,filterName:m,handleFilters:function(e){"filterName"===e.key?E(e.value):"filterSpecie"===e.key&&b(e.value)}}),l.a.createElement(d,{filterName:m,filterSpecie:g,characters:a.filter(S).filter(N)})),l.a.createElement(o.a,{path:"/character/:id",render:function(e){var t=parseInt(e.match.params.id),n=a.find((function(e){return e.id===t}));return n?l.a.createElement(f,{image:n.image,name:n.name,status:n.status,specie:n.species,origin:n.origin,episodes:n.episode}):l.a.createElement("p",null,"'Personaje no encontrado'")}})))};c.a.render(l.a.createElement(i.a,null,l.a.createElement(h,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4ef5062d.chunk.js.map