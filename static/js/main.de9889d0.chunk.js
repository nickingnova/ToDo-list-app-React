(this["webpackJsonpcurso-react"]=this["webpackJsonpcurso-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(4),l=n.n(o),a=n(6),u=n(2);var s=n(0),i=c.a.createContext();function d(e){var t=function(e,t){var n=c.a.useState(!1),r=Object(u.a)(n,2),o=r[0],l=r[1],a=c.a.useState(!0),s=Object(u.a)(a,2),i=s[0],d=s[1],m=c.a.useState(t),j=Object(u.a)(m,2),f=j[0],p=j[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,r=localStorage.getItem(e);r?n=JSON.parse(r):(localStorage.setItem(e,JSON.stringify(t)),n=t),p(n),d(!1)}catch(o){l(o)}}),2e3)}),[t,e]),{item:f,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),p(t)}catch(o){l(o)}},loading:i,error:o}}("ITEMS_V1",[]),n=t.item,r=t.saveItem,o=t.loading,l=t.error,d=c.a.useState(""),m=Object(u.a)(d,2),j=m[0],f=m[1],p=c.a.useState(!1),b=Object(u.a)(p,2),O=b[0],x=b[1],g=n.filter((function(e){return e.completed})).length,h=n.length,v=[];v=!j.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=j.toLowerCase();return t.includes(n)}));return Object(s.jsx)(i.Provider,{value:{error:l,loading:o,totalItems:h,completedItems:g,searchValue:j,setSearchValue:f,searchedItem:v,completeItem:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(a.a)(n);c[t].completed?c[t].completed=!1:c[t].completed=!0,r(c)},deleteItem:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(a.a)(n);c.splice(t,1),r(c)},openModal:O,setOpenModal:x,addItem:function(e){var t=Object(a.a)(n);t.push({completed:!1,text:e}),r(t)}},children:e.children})}n(13),n(14);function m(){var e=c.a.useContext(i),t=e.totalItems,n=e.completedItems;return Object(s.jsxs)("h2",{className:"TodoCounter",children:[" Has completado ",n," de ",t," TODOs "]})}n(15);function j(){var e=c.a.useContext(i),t=e.searchValue,n=e.setSearchValue;return Object(s.jsx)("input",{type:"text",className:"TodoSearch",placeholder:"Ingrese un valor",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}n(16);function f(e){return Object(s.jsx)("section",{children:Object(s.jsx)("ul",{children:e.children})})}var p,b,O,x,g,h,v,I,y,E,C,w,S,T,N,k;n(17);function M(e){var t=e.children;return l.a.createPortal(Object(s.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}var D=["title","titleId"];function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function P(e,t){var n=e.title,c=e.titleId,o=L(e,D);return r.createElement("svg",B({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 408.576 408.576",style:{enableBackground:"new 0 0 408.576 408.576"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},o),n?r.createElement("title",{id:c},n):null,p||(p=r.createElement("g",null,r.createElement("g",null,r.createElement("path",{d:"M204.288,0C91.648,0,0,91.648,0,204.288s91.648,204.288,204.288,204.288s204.288-91.648,204.288-204.288 S316.928,0,204.288,0z M318.464,150.528l-130.56,129.536c-7.68,7.68-19.968,8.192-28.16,0.512L90.624,217.6 c-8.192-7.68-8.704-20.48-1.536-28.672c7.68-8.192,20.48-8.704,28.672-1.024l54.784,50.176L289.28,121.344 c8.192-8.192,20.992-8.192,29.184,0C326.656,129.536,326.656,142.336,318.464,150.528z"})))),b||(b=r.createElement("g",null)),O||(O=r.createElement("g",null)),x||(x=r.createElement("g",null)),g||(g=r.createElement("g",null)),h||(h=r.createElement("g",null)),v||(v=r.createElement("g",null)),I||(I=r.createElement("g",null)),y||(y=r.createElement("g",null)),E||(E=r.createElement("g",null)),C||(C=r.createElement("g",null)),w||(w=r.createElement("g",null)),S||(S=r.createElement("g",null)),T||(T=r.createElement("g",null)),N||(N=r.createElement("g",null)),k||(k=r.createElement("g",null)))}var F,J,V=r.forwardRef(P),z=(n.p,["title","titleId"]);function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function A(e,t){var n=e.title,c=e.titleId,o=_(e,z);return r.createElement("svg",R({height:"512pt",viewBox:"0 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},o),n?r.createElement("title",{id:c},n):null,F||(F=r.createElement("path",{d:"m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0",fill:"#f44336"})),J||(J=r.createElement("path",{d:"m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0",fill:"#fafafa"})))}var H=r.forwardRef(A),X=(n.p,n(18),{check:function(e){return Object(s.jsx)(V,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return Object(s.jsx)(H,{className:"Icon-svg Icon-svg--delete",fill:e})}});function q(e){var t=e.type,n=e.color,r=void 0===n?"gray":n,c=e.onClick;return Object(s.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:c,children:X[t](r)})}function G(e){var t=e.completed,n=e.onComplete;return Object(s.jsx)(q,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function K(e){var t=e.onDelete;return Object(s.jsx)(q,{type:"delete",onClick:t})}n(19);function Q(e){return Object(s.jsxs)("li",{className:"TodoItem",children:[Object(s.jsx)(G,{completed:e.completed,onComplete:e.onComplete}),Object(s.jsx)("h2",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(s.jsx)(K,{onDelete:e.onDelete})]})}n(20);var U=function(e){return Object(s.jsx)(c.a.Fragment,{children:Object(s.jsx)("button",{className:"CreateTodoButton ".concat(e.openModal&&"CreateTodoButton-active"),onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})})};n(21);function W(){var e=c.a.useState(""),t=Object(u.a)(e,2),n=t[0],r=t[1],o=c.a.useContext(i),l=o.addItem,a=o.setOpenModal;return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(n),a(!1)},children:[Object(s.jsx)("label",{children:"Escribe tu nuevo To Do"}),Object(s.jsx)("textarea",{value:n,onChange:function(e){r(e.target.value)},placeholder:"Escribe una nueva tarea"}),Object(s.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(s.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button-cancel",onClick:function(){a(!1)},children:"Cancelar"}),Object(s.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:"A\xf1adir"})]})]})}function Y(e){e.error;return Object(s.jsx)("p",{children:"Desesperate, hubo un error"})}n(22);function Z(){return Object(s.jsxs)("div",{className:"LoadingTodo-container",children:[Object(s.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(s.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(s.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function $(){return Object(s.jsx)("p",{children:"\xa1Crea tu primer todo!"})}function ee(){var e=c.a.useContext(i),t=e.error,n=e.loading,r=e.searchedItem,o=e.completeItem,l=e.deleteItem,a=e.openModal,u=e.setOpenModal;return Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsx)(m,{}),Object(s.jsx)(j,{}),Object(s.jsxs)(f,{children:[t&&Object(s.jsx)(Y,{}),n&&Object(s.jsx)(Z,{}),!n&&!r.length&&Object(s.jsx)($,{}),r.map((function(e){return Object(s.jsx)(Q,{text:e.text,completed:e.completed,onComplete:function(){return o(e.text)},onDelete:function(){return l(e.text)}},e.text)}))]}),a&&Object(s.jsx)(M,{children:Object(s.jsx)(W,{})}),Object(s.jsx)(U,{setOpenModal:u,openModal:a})]})}var te=function(){return Object(s.jsx)(d,{children:Object(s.jsx)(ee,{})})};l.a.render(Object(s.jsx)(te,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.de9889d0.chunk.js.map