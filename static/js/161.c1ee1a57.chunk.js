"use strict";(self.webpackChunkstarter_bt5=self.webpackChunkstarter_bt5||[]).push([[161],{9161:function(e,s,n){n.r(s);var a=n(9439),t=n(2791),l=n(2711),i=n(8687),r=n(4448),c=n(8755),d=n(2457),o=n(1087),u=n(7261),m=n(6724),p=n(5211),h=n(4938),x=n(3830),j=n(9127),f=n(184);s.default=function(){var e=(0,t.useState)(!1),s=(0,a.Z)(e,2),n=s[0],v=s[1],N=(0,t.useState)(""),g=(0,a.Z)(N,2),b=g[0],y=g[1],O=(0,t.useState)(null),Z=(0,a.Z)(O,2),k=Z[0],w=Z[1],C=(0,t.useState)(null),S=(0,a.Z)(C,2),T=S[0],D=S[1],E=(0,t.useState)(""),R=(0,a.Z)(E,2),J=R[0],q=R[1],I=(0,t.useState)(null),M=(0,a.Z)(I,2),P=M[0],U=M[1],F=(0,t.useState)([]),A=(0,a.Z)(F,2),H=A[0],W=A[1],Y=(0,t.useState)(""),_=(0,a.Z)(Y,2),B=_[0],L=_[1],Q=(0,t.useState)(null),z=(0,a.Z)(Q,2),G=z[0],K=z[1],V=(0,t.useState)(null),X=(0,a.Z)(V,2),$=X[0],ee=X[1],se=(0,i.I0)(),ne=(0,i.v9)((function(e){return e.timeOff.admintimeOff}));console.log(ne);var ae=(0,i.v9)((function(e){return e}));console.log(ae),console.log("Redux State:",ne),(0,t.useEffect)((function(){se((0,d.QW)())}),[]);(0,t.useEffect)((function(){!function(){var e=ne.filter((function(e){var s=new Date(e.fromDate),n=new Date(e.toDate);return(null===G||s>=G)&&(null===$||n<=$)}));W(e)}()}),[G,$,ne]);var te=function(){v(!n)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"header",children:[(0,f.jsxs)("div",{className:"left-corner",children:[(0,f.jsx)("i",{className:"user-icon bi bi-airplane"}),(0,f.jsx)("div",{children:"Time Off"})]}),(0,f.jsx)("div",{className:"tabs",children:(0,f.jsx)("div",{className:"tabs-bar",children:(0,f.jsxs)("div",{className:"tabs-nav-container",children:[(0,f.jsx)("span",{className:"tabs-tab-prev",children:(0,f.jsx)("span",{className:"tabs-tab-prev-icon",children:(0,f.jsx)("i",{className:"tabs-tab-prev-icon-target"})})}),(0,f.jsx)("span",{className:"tabs-tab-next",children:(0,f.jsx)("span",{className:"tabs-tab-next-icon",children:(0,f.jsx)("i",{className:"tabs-tab-next-icon-target"})})}),(0,f.jsx)("div",{className:"tabs-nav-wrap",children:(0,f.jsx)("div",{className:"tabs-nav-scroll",children:(0,f.jsxs)("div",{className:"tabs-nav",children:[(0,f.jsx)("div",{className:"tabs-tab",children:(0,f.jsx)("div",{className:"hidden-div",children:(0,f.jsx)(o.rU,{className:"anchor",style:{lineHeight:"55px",display:"inline-block"},children:"MY Time Off"})})}),(0,f.jsx)("div",{className:"tabs-tab",children:(0,f.jsx)("div",{className:"hidden-div",children:(0,f.jsx)(o.rU,{to:"/adminteamoff",style:{lineHeight:"55px",display:"inline-block"},children:"TEAM Time Off"})})}),(0,f.jsx)("div",{className:"tabs-tab",children:(0,f.jsx)("div",{className:"hidden-div",children:(0,f.jsx)(o.rU,{to:"/employeetimeoff",style:{lineHeight:"55px",display:"inline-block"},children:"Employee Time Off"})})})]})})})]})})})]}),(0,f.jsx)("div",{className:"mytimeoff",style:{marginTop:"120px"},children:(0,f.jsx)("div",{className:"insidemytime",children:(0,f.jsxs)("div",{children:[(0,f.jsx)("h6",{children:"Unpaid"}),(0,f.jsx)("span",{children:"30 days"})]})})}),(0,f.jsxs)("div",{className:"myattedance",children:[(0,f.jsx)("div",{children:(0,f.jsxs)(r.Z,{tag:"h6",className:"border-bottom p-4 mt-0",children:[(0,f.jsx)(l.JO,{icon:"uil:file-edit-alt",color:"#2ad25f",width:22,height:22}),(0,f.jsx)("span",{style:{marginLeft:"10px"},children:"My Requests"})]})}),(0,f.jsxs)("div",{className:"filtercombinaion",children:[(0,f.jsxs)("div",{className:"datepicker",children:[(0,f.jsx)(u.Z,{style:{width:"190px"},value:G,onChange:function(e){return K(e)}}),(0,f.jsx)(u.Z,{style:{width:"190px"},value:$,onChange:function(e){return ee(e)}})]}),(0,f.jsx)("button",{className:"timeoffbuttton",onClick:te,children:"New Request"})]}),(0,f.jsxs)(c.Z,{className:"no-wrap mt-3 align-middle ",responsive:!0,borderless:!0,children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"From"}),(0,f.jsx)("th",{children:"To"}),(0,f.jsx)("th",{children:"Total"}),(0,f.jsx)("th",{children:"Type"}),(0,f.jsx)("th",{children:"Attachment"}),(0,f.jsx)("th",{children:"Status"})]})}),(0,f.jsx)("tbody",{children:H.map((function(e,s){return(0,f.jsxs)("tr",{className:"border-top",children:[(0,f.jsx)("td",{className:"mb-0",children:e.fromDate}),(0,f.jsx)("td",{children:e.toDate}),(0,f.jsx)("td",{children:e.totalTime}),(0,f.jsx)("td",{children:e.leaveTypeName}),(0,f.jsx)("td",{className:"scrollable-td",children:e.attachment}),(0,f.jsx)("td",{children:"pending"===e.statusName?(0,f.jsx)("span",{className:"p-2 bg-danger rounded-circle d-inline-block ms-3"}):"holt"===e.status?(0,f.jsx)("span",{className:"p-2 bg-warning rounded-circle d-inline-block ms-3"}):(0,f.jsx)("span",{className:"p-2 bg-success rounded-circle d-inline-block ms-3"})})]},s)}))})]})]}),(0,f.jsxs)(m.Z,{isOpen:n,toggle:te,className:"requestmodal",children:[(0,f.jsxs)(p.Z,{toggle:te,children:[(0,f.jsx)("i",{className:"fas fa-plus-circle"})," New Request"]}),(0,f.jsxs)(h.Z,{className:"requestbody",children:[(0,f.jsx)("div",{className:"form-group",children:(0,f.jsxs)("div",{className:"input-group",children:[(0,f.jsx)("div",{className:"input-group-prepend",children:(0,f.jsx)("span",{className:"input-group-text",children:(0,f.jsx)(l.JO,{icon:"uil:plane"})})}),(0,f.jsx)("input",{type:"text",className:"form-control",value:b,onChange:function(e){return y(e.target.value)},placeholder:"Type of Request"})]})}),(0,f.jsx)("div",{className:"form-group",children:(0,f.jsxs)("div",{className:"input-group",children:[(0,f.jsx)("div",{className:"input-group-prepend",children:(0,f.jsx)("span",{className:"input-group-text",children:(0,f.jsx)(l.JO,{icon:"uil:clock"})})}),(0,f.jsx)(u.Z.RangePicker,{style:{width:"50%"},value:[k,T],onChange:function(e){w(e[0]),D(e[1])},placeholder:"Date Range"})]})}),(0,f.jsx)("div",{className:"form-group",children:(0,f.jsxs)("div",{className:"input-group",children:[(0,f.jsx)("div",{className:"input-group-prepend",children:(0,f.jsx)("span",{className:"input-group-text",children:(0,f.jsx)(l.JO,{icon:"uil:align-left"})})}),(0,f.jsx)("textarea",{className:"form-control",value:J,onChange:function(e){return q(e.target.value)},placeholder:"Description"})]})}),(0,f.jsx)("div",{className:"form-group",children:(0,f.jsxs)("div",{className:"input-group",children:[(0,f.jsx)("div",{className:"input-group-prepend",children:(0,f.jsx)("span",{className:"input-group-text",children:(0,f.jsx)(l.JO,{icon:"uil:paperclip"})})}),(0,f.jsx)("span",{htmlFor:"attachmentInput",onClick:function(){return function(){var e=document.getElementById("attachmentInput");e&&e.click()}()},children:" Upload attachment"}),(0,f.jsx)("input",{id:"attachmentInput",type:"file",style:{display:"none"},className:"form-control-file",onChange:function(e){return U(e.target.files[0])}})]})}),(0,f.jsx)("div",{className:"form-group",children:(0,f.jsxs)("div",{className:"input-group",children:[(0,f.jsx)("div",{className:"input-group-prepend",children:(0,f.jsx)("span",{className:"input-group-text",children:(0,f.jsx)(l.JO,{icon:"uil:bell"})})}),(0,f.jsx)("input",{type:"text",className:"form-control",value:B,onChange:function(e){return L(e.target.value)},placeholder:"Your Name"})]})})]}),(0,f.jsxs)(x.Z,{children:[(0,f.jsx)(j.Z,{color:"primary",onClick:function(){var e={ReceiverEmail:b,FromDate:k,ToDate:T,Attachment:P,Name:B,Note:J};se((0,d.WJ)(e)),console.log("fucntion called"),te()},children:"Submit"})," ",(0,f.jsx)(j.Z,{color:"secondary",onClick:te,children:"Cancel"})]})]})]})}},4448:function(e,s,n){var a=n(2791),t=n(2007),l=n.n(t),i=n(1694),r=n.n(i),c=n(9622),d=["className","cssModule","tag"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function u(e,s){if(null==e)return{};var n,a,t=function(e,s){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],s.indexOf(n)>=0||(t[n]=e[n]);return t}(e,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var m={className:l().string,cssModule:l().object,tag:c.iC};function p(e){var s=e.className,n=e.cssModule,t=e.tag,l=u(e,d),i=(0,c.mx)(r()(s,"card-title"),n);return a.createElement(t,o({},l,{className:i}))}p.propTypes=m,p.defaultProps={tag:"div"},s.Z=p}}]);
//# sourceMappingURL=161.c1ee1a57.chunk.js.map