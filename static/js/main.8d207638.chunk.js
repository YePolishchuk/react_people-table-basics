(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(24),a=c(7),r=c(2),s=(c(33),c(34),c(35),c(11)),i=c.n(s),j=c(3),l=function(){var e=function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})};return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(a.c,{className:e,to:"/",children:"Home"}),Object(j.jsx)(a.c,{className:e,to:"/people",children:"People"})]})})}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(r.b,{})})})]})},o=c(4),b=c(22),d=c(0),h=(c(37),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var O=function(){return Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})},x=function(){return Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})},m=function(e){var t=e.person;return Object(j.jsx)(a.b,{to:"/people/".concat(null===t||void 0===t?void 0:t.slug),className:i()({"has-text-danger":"f"===(null===t||void 0===t?void 0:t.sex)}),children:null===t||void 0===t?void 0:t.name})},p=function(e){var t=e.people,c=Object(r.r)().slug,n=function(e){return t.find((function(t){return t.name===e}))||null};return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":e.slug===c}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(m,{person:e})}),Object(j.jsx)("td",{children:e.sex}),Object(j.jsx)("td",{children:e.born}),Object(j.jsx)("td",{children:e.died}),Object(j.jsx)("td",{children:n(e.motherName)?Object(j.jsx)(m,{person:n(e.motherName)}):e.motherName||"-"}),Object(j.jsx)("td",{children:n(e.fatherName)?Object(j.jsx)(m,{person:n(e.fatherName)}):e.fatherName||"-"})]},e.slug)}))})]})},f=function(){var e=Object(d.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(d.useState)(!0),r=Object(o.a)(a,2),s=r[0],i=r[1],l=Object(d.useState)(!1),m=Object(o.a)(l,2),f=m[0],v=m[1];return Object(d.useEffect)((function(){i(!0),u().then((function(e){return n(function(e){return e.map((function(t){var c=e.find((function(e){return e.name===t.motherName})),n=e.find((function(e){return e.name===t.fatherName}));return Object(b.a)(Object(b.a)({},t),{},{mother:c,father:n})}))}(e))})).catch((function(){return v(!0)})).finally((function(){return i(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[s&&Object(j.jsx)(h,{}),f&&Object(j.jsx)(x,{}),!s&&0===c.length&&Object(j.jsx)(O,{}),0!==c.length&&!s&&!f&&Object(j.jsx)(p,{people:c})]})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsxs)(a.a,{children:[Object(j.jsx)(r.e,{children:Object(j.jsxs)(r.c,{path:"/",element:Object(j.jsx)(l,{}),children:[Object(j.jsx)(r.c,{index:!0,element:Object(j.jsx)("h1",{className:"title",children:"Home Page"})}),Object(j.jsx)(r.c,{path:"home",element:Object(j.jsx)(r.a,{to:"/",replace:!0})}),Object(j.jsx)(r.c,{path:"people",element:Object(j.jsx)(f,{}),children:Object(j.jsx)(r.c,{path:":slug"})}),Object(j.jsx)(r.c,{path:"*",element:Object(j.jsx)("h1",{className:"title",children:"Page not found"})})]})}),Object(j.jsx)(l,{})]}))}},[[38,1,2]]]);
//# sourceMappingURL=main.8d207638.chunk.js.map