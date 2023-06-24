"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[255],{6255:function(e,n,r){r.r(n),r.d(n,{default:function(){return fe}});var t=r(9434),a=r(6916),o=function(e){return e.contacts.items},i=function(e){return e.filter.filter},c=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},s=(0,a.P1)([i,o],(function(e,n){var r=e.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(r)})).sort((function(e,n){return e.name.localeCompare(n.name)}))})),u=r(695),d=r(5861),m=r(4687),f=r.n(m),p=r(3634),h=r(5218),v=r(1614),x=r(4554),b=r(232),g=r(6151),Z=r(184),j=function(){var e=(0,t.I0)(),n=(0,t.v9)(o),r=function(){var r=(0,d.Z)(f().mark((function r(t){var a,o,i;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),a=t.currentTarget,o=a.elements.name.value,i=a.elements.number.value,!n.some((function(e){return e.name.toLowerCase()===o.toLowerCase()}))){r.next=8;break}return h.Am.error("".concat(o," is already in contacts")),r.abrupt("return");case 8:if(""!==o&&""!==i){r.next=11;break}return h.Am.error("Fields cannot be empty. Enter some data!"),r.abrupt("return");case 11:return r.prev=11,r.next=14,e((0,p.uK)({name:o,number:i})).unwrap();case 14:h.Am.success("".concat(o," is added to contacts")),a.reset(),r.next=21;break;case 18:r.prev=18,r.t0=r.catch(11),console.log(r.t0);case 21:case"end":return r.stop()}}),r,null,[[11,18]])})));return function(e){return r.apply(this,arguments)}}();return(0,Z.jsx)(v.Z,{maxWidth:"sm",sx:{p:4,mb:3,bgcolor:"#ffffff",borderRadius:"10px",boxShadow:3},children:(0,Z.jsxs)(x.Z,{component:"form",autoComplete:"off",noValidate:!0,onSubmit:r,children:[(0,Z.jsx)(b.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name"}),(0,Z.jsx)(b.Z,{margin:"normal",required:!0,fullWidth:!0,id:"number",label:"Number",name:"number"}),(0,Z.jsx)(g.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:2,mb:2},size:"large",children:"Add contact"})]})})},y=r(1634),w=r(890),z=function(){var e=(0,t.v9)(i),n=(0,t.I0)();return(0,Z.jsxs)(v.Z,{maxWidth:"sm",children:[(0,Z.jsx)(w.Z,{sx:{mb:1},fontSize:"22px",color:"#212121",fontWeight:"700",paragraph:!0,align:"center",children:"Find contacts by name"}),(0,Z.jsx)(b.Z,{sx:{mb:1},margin:"normal",fullWidth:!0,name:"filter",value:e,onChange:function(e){n((0,y.a)(e.currentTarget.value))}})]})},S=r(9439),C=r(4942),k=r(3366),R=r(7462),W=r(2791),I=r(8182),P=r(4419),M=r(2065),E=r(6934),T=r(1402),A=r(3701),F=r(4036),L=r(5878),_=r(1217);function N(e){return(0,_.Z)("MuiIconButton",e)}var O=(0,L.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),q=["edge","children","className","color","disabled","disableFocusRipple","size"],B=(0,E.ZP)(A.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,"default"!==r.color&&n["color".concat((0,F.Z)(r.color))],r.edge&&n["edge".concat((0,F.Z)(r.edge))],n["size".concat((0,F.Z)(r.size))]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,R.Z)({textAlign:"center",flex:"0 0 auto",fontSize:n.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(n.vars||n).palette.action.active,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest})},!r.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.activeChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,M.Fq)(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})}),(function(e){var n,r=e.theme,t=e.ownerState,a=null==(n=(r.vars||r).palette)?void 0:n[t.color];return(0,R.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,R.Z)({color:null==a?void 0:a.main},!t.disableRipple&&{"&:hover":(0,R.Z)({},a&&{backgroundColor:r.vars?"rgba(".concat(a.mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,M.Fq)(a.main,r.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:r.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:r.typography.pxToRem(28)},(0,C.Z)({},"&.".concat(O.disabled),{backgroundColor:"transparent",color:(r.vars||r).palette.action.disabled}))})),D=W.forwardRef((function(e,n){var r=(0,T.Z)({props:e,name:"MuiIconButton"}),t=r.edge,a=void 0!==t&&t,o=r.children,i=r.className,c=r.color,l=void 0===c?"default":c,s=r.disabled,u=void 0!==s&&s,d=r.disableFocusRipple,m=void 0!==d&&d,f=r.size,p=void 0===f?"medium":f,h=(0,k.Z)(r,q),v=(0,R.Z)({},r,{edge:a,color:l,disabled:u,disableFocusRipple:m,size:p}),x=function(e){var n=e.classes,r=e.disabled,t=e.color,a=e.edge,o=e.size,i={root:["root",r&&"disabled","default"!==t&&"color".concat((0,F.Z)(t)),a&&"edge".concat((0,F.Z)(a)),"size".concat((0,F.Z)(o))]};return(0,P.Z)(i,N,n)}(v);return(0,Z.jsx)(B,(0,R.Z)({className:(0,I.Z)(x.root,i),centerRipple:!0,focusRipple:!m,disabled:u,ref:n,ownerState:v},h,{children:o}))})),V=r(7247),H=r(1286),K=r(1889),G=r(7107);var Y=W.createContext(null);function J(){return W.useContext(Y)}var Q=r(1413),U="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var X=function(e){var n=e.children,r=e.theme,t=J(),a=W.useMemo((function(){var e=null===t?r:function(e,n){return"function"===typeof n?n(e):(0,Q.Z)((0,Q.Z)({},e),n)}(t,r);return null!=e&&(e[U]=null!==t),e}),[r,t]);return(0,Z.jsx)(Y.Provider,{value:a,children:n})},$=r(2564),ee=r(9120),ne={};function re(e,n,r){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return W.useMemo((function(){var a=e&&n[e]||n;if("function"===typeof r){var o=r(a),i=e?(0,R.Z)({},n,(0,C.Z)({},e,o)):o;return t?function(){return i}:i}return e?(0,R.Z)({},n,(0,C.Z)({},e,r)):(0,R.Z)({},n,r)}),[e,n,r,t])}var te=function(e){var n=e.children,r=e.theme,t=e.themeId,a=(0,ee.Z)(ne),o=J()||ne,i=re(t,a,r),c=re(t,o,r,!0);return(0,Z.jsx)(X,{theme:c,children:(0,Z.jsx)($.T.Provider,{value:i,children:n})})},ae=r(988),oe=["theme"];function ie(e){var n=e.theme,r=(0,k.Z)(e,oe),t=n[ae.Z];return(0,Z.jsx)(te,(0,R.Z)({},r,{themeId:t?ae.Z:void 0,theme:t||n}))}var ce=r(7004),le={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4},se=function(e){var n=e.isOpen,r=e.id,a=e.name,o=e.number,i=e.onClose,c=W.useState(a),l=(0,S.Z)(c,2),s=l[0],u=l[1],m=W.useState(o),v=(0,S.Z)(m,2),j=v[0],y=v[1],w=(0,t.I0)(),z=function(){var e=(0,d.Z)(f().mark((function e(n){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==s&&""!==j){e.next=4;break}return h.Am.error("Fields cannot be empty. Enter some data!"),e.abrupt("return");case 4:return e.prev=4,e.next=7,w((0,p.Tk)({name:s,number:j,id:r})).unwrap();case 7:h.Am.success("".concat(a," contact was changed")),i(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0),h.Am.error("Oooops!..Something went wrong:( Please try later");case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(n){return e.apply(this,arguments)}}();return(0,Z.jsx)("div",{children:(0,Z.jsx)(ce.Z,{open:n,onClose:i,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,Z.jsx)(x.Z,{sx:le,children:(0,Z.jsxs)(x.Z,{component:"form",autoComplete:"off",noValidate:!0,onSubmit:z,children:[(0,Z.jsx)(b.Z,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",value:s,onChange:function(e){var n=e.target.value;return u(n)}}),(0,Z.jsx)(b.Z,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,id:"number",label:"Number",name:"number",value:j,onChange:function(e){var n=e.target.value;return y(n)}}),(0,Z.jsxs)(K.ZP,{container:!0,justifyContent:"center",children:[(0,Z.jsx)(g.Z,{type:"submit",variant:"contained",sx:{mt:2,mb:2,mr:2},children:"Save"}),(0,Z.jsx)(g.Z,{type:"button",size:"medium",variant:"outlined",sx:{mt:2,mb:2},onClick:i,children:"Cancel"})]})]})})})})},ue=(0,G.Z)({palette:{primary:{main:"#1976d2"}}}),de=function(e){var n=e.id,r=e.name,a=e.number,o=(0,t.I0)(),i=(0,W.useState)(!1),c=(0,S.Z)(i,2),l=c[0],s=c[1],u=function(){var e=(0,d.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o((0,p.GK)(n)).unwrap();case 3:h.Am.success("".concat(r," was deleted from contacts")),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),m=function(){return s((function(e){return!e}))};return(0,Z.jsxs)(ie,{theme:ue,children:[(0,Z.jsxs)(K.ZP,{container:!0,spacing:4,columns:16,children:[(0,Z.jsx)(K.ZP,{item:!0,xs:6,children:(0,Z.jsx)(w.Z,{paragraph:!0,fontSize:"20px",fontWeight:"500",color:"#757575",children:r})}),(0,Z.jsx)(K.ZP,{item:!0,xs:6,children:(0,Z.jsx)(w.Z,{fontSize:"20px",color:"#212121",paragraph:!0,children:a})}),(0,Z.jsx)(K.ZP,{item:!0,xs:!0,children:(0,Z.jsx)(D,{type:"button","aria-label":"delete",size:"small",color:"primary",onClick:u,children:(0,Z.jsx)(V.Z,{})})}),(0,Z.jsx)(K.ZP,{item:!0,xs:!0,children:(0,Z.jsx)(D,{type:"button","aria-label":"delete",size:"small",color:"primary",onClick:m,children:(0,Z.jsx)(H.Z,{})})})]}),l&&(0,Z.jsx)(se,{onClose:m,id:n,name:r,number:a,isOpen:l})]})},me=function(){var e=(0,t.v9)(s);return(0,Z.jsx)(v.Z,{sx:{mt:4},maxWidth:"md",children:(0,Z.jsx)(x.Z,{sx:{p:4,bgcolor:"#ffffff",borderRadius:"10px",boxShadow:3},component:"ul",children:e.map((function(e){var n=e.id,r=e.name,t=e.number;return(0,Z.jsx)(de,{id:n,name:r,number:t},n)}))})})},fe=function(){var e=(0,t.v9)(c),n=(0,t.v9)(l),r=(0,t.v9)(s),a=(0,t.I0)();return(0,W.useEffect)((function(){a((0,p.yF)())}),[a]),(0,Z.jsx)(v.Z,{component:"main",maxWidth:"md",children:(0,Z.jsxs)(x.Z,{sx:{marginTop:3,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,Z.jsx)(w.Z,{sx:{mb:4},variant:"h1",fontSize:"40px",fontWeight:"700",align:"center",gutterBottom:!0,children:"Phonebook"}),(0,Z.jsx)(j,{}),(0,Z.jsx)(w.Z,{sx:{mb:4},variant:"h2",fontSize:"34px",fontWeight:"700",align:"center",gutterBottom:!0,children:"Contacts"}),(0,Z.jsx)(z,{}),0===r.length?(0,Z.jsx)(w.Z,{sx:{mb:2},fontSize:"18px",color:"#212121",fontWeight:"700",paragraph:!0,align:"center",children:"You have no contacts yet"}):(0,Z.jsx)(me,{}),e&&!n&&(0,Z.jsx)(u.a,{})]})})}},7247:function(e,n,r){var t=r(4836);n.Z=void 0;var a=t(r(5649)),o=r(184),i=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=i},1286:function(e,n,r){var t=r(4836);n.Z=void 0;var a=t(r(5649)),o=r(184),i=(0,a.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=i}}]);
//# sourceMappingURL=255.02e71419.chunk.js.map