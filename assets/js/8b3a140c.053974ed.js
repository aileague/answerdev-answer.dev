/*! For license information please see 8b3a140c.053974ed.js.LICENSE.txt */
(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[9469],{848:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(9496),a=r(5924),o=r(9463);const s="header_gy1m",i={blog:{title:n.createElement(o.Z,{id:"blogHeader.title"},"Blog"),slogon:n.createElement(o.Z,{id:"blogHeader.slogon"},"Learn everything about Answer and leverage your Q&A community to the next level.")},contact:{title:n.createElement(o.Z,{id:"contact.title"},"Contact us"),slogon:n.createElement(o.Z,{id:"contact.slogon"},"We always get an answer to your question.")}},l=e=>{let{type:t}=e;return n.createElement("div",{className:(0,a.Z)("py-5",s)},n.createElement("div",{className:"container"},n.createElement("h1",null,i[t].title),n.createElement("div",{className:"fs-20"},i[t].slogon)))},c=(0,n.memo)(l)},1616:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(9496),a=r(5924);const o=e=>{let{type:t="br",name:r,className:o,size:s,onClick:i,title:l=""}=e;return n.createElement("i",{className:(0,a.Z)(t,`bi-${r}`,o),style:{...s&&{fontSize:s}},onClick:i,onKeyDown:i,title:l})}},4987:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>B});var n=r(9496),a=r(4875),o=r.n(a),s=r(5675),i=r(4637);const l=n.forwardRef((({bsPrefix:e,fluid:t=!1,as:r="div",className:n,...a},l)=>{const c=(0,s.vE)(e,"container"),m="string"==typeof t?`-${t}`:"-fluid";return(0,i.jsx)(r,{ref:l,...a,className:o()(n,t?`${c}${m}`:c)})}));l.displayName="Container";const c=l;var m=r(8774),u=r(3785),d=r(7940);const f=e=>n.forwardRef(((t,r)=>(0,i.jsx)("div",{...t,ref:r,className:o()(t.className,e)}))),p=n.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...a},l)=>{const c=(0,s.vE)(e,"card-img");return(0,i.jsx)(n,{ref:l,className:o()(r?`${c}-${r}`:c,t),...a})}));p.displayName="CardImg";const v=p,b=n.createContext(null);b.displayName="CardHeaderContext";const y=b,h=n.forwardRef((({bsPrefix:e,className:t,as:r="div",...a},l)=>{const c=(0,s.vE)(e,"card-header"),m=(0,n.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,i.jsx)(y.Provider,{value:m,children:(0,i.jsx)(r,{ref:l,...a,className:o()(t,c)})})}));h.displayName="CardHeader";const E=h,g=f("h5"),x=f("h6"),w=(0,d.Z)("card-body"),N=(0,d.Z)("card-title",{Component:g}),k=(0,d.Z)("card-subtitle",{Component:x}),Z=(0,d.Z)("card-link",{Component:"a"}),C=(0,d.Z)("card-text",{Component:"p"}),j=(0,d.Z)("card-footer"),$=(0,d.Z)("card-img-overlay"),_=n.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:a,body:l=!1,children:c,as:m="div",...u},d)=>{const f=(0,s.vE)(e,"card");return(0,i.jsx)(m,{ref:d,...u,className:o()(t,f,r&&`bg-${r}`,n&&`text-${n}`,a&&`border-${a}`),children:l?(0,i.jsx)(w,{children:c}):c})}));_.displayName="Card";const S=Object.assign(_,{Img:v,Title:N,Subtitle:k,Body:w,Link:Z,Text:C,Header:E,Footer:j,ImgOverlay:$});var P=r(2575),O=r(9463),R=r(6298),F=r.n(R),A=r(7613),I=r(1616),T=r(848);const z=[{key:"email",url:"mailto:support@answer.dev",icon:n.createElement(I.Z,{name:"envelope-fill",size:"48px",className:"text-primary"}),info:n.createElement(O.Z,{id:"contact.email",values:{br:n.createElement("br",null)}},"Email us at {br} support@answer.dev")},{key:"community",url:"https://meta.answer.dev",icon:n.createElement(I.Z,{name:"chat-square-text-fill",size:"48px",className:"text-primary"}),info:n.createElement(O.Z,{id:"contact.community",values:{br:n.createElement("br",null)}},"Ask the {br} Answer Community")},{key:"twitter",url:"https://twitter.com/answerdev",icon:n.createElement(I.Z,{name:"twitter",size:"48px",className:"text-primary"}),info:n.createElement(O.Z,{id:"contact.twitter",values:{br:n.createElement("br",null)}},"Tweet or Message {br} @AnswerDev on Twitter")}];function B(){return(0,n.useEffect)((()=>{const e=document.createElement("script");return e.src="//js.hsforms.net/forms/v2.js",document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[]),n.createElement(A.Z,{title:(0,O.I)({message:"Contact Us"}),description:"Got a question? We're always here for you."},n.createElement(T.Z,{type:"contact"}),n.createElement(c,{className:"pb-5"},n.createElement("h3",{className:"mt-5 mb-3"},n.createElement(O.Z,{id:"contact.getSupport"},"Get Support")),n.createElement(m.Z,{className:"pb-5 mb-5"},z.map((e=>n.createElement(u.Z,{sm:12,md:6,lg:3,key:e.key,className:"mb-4 mb-md-4"},n.createElement(S,{as:"a",href:e.url,target:"_blank"},n.createElement(S.Body,null,e.icon,n.createElement("div",{className:"fs-20 text-body mt-3"},e.info))))))),n.createElement("h3",{className:"mb-3"},n.createElement(O.Z,{id:"contact.marketing.title"},"Marketing Inquiries")),n.createElement("div",{className:"pb-5 mb-5"},n.createElement(O.Z,{id:"contact.marketing.email",values:{email:n.createElement("a",{href:"mailto:marketing@answer.dev"},"marketing@answer.dev")}},"Send Email to {email}")),n.createElement("h3",{className:"mb-3"},n.createElement(O.Z,{id:"contact.above.title"},"None of the Above?")),n.createElement("div",{className:"mb-3"},n.createElement(O.Z,{id:"contact.above.description"}," If you don\u2019t find what you\u2019re looking for, please use the form below to submit your request. We\u2019ll try and get back to you as soon as possible.")),n.createElement(m.Z,null,n.createElement(u.Z,{md:12,lg:7,xl:5},n.createElement(F(),{portalId:"23567456",formId:"784f94e6-9bfd-4f5e-aeba-5ba40563de8c",loading:n.createElement("div",{className:"text-center"},n.createElement(P.Z,{animation:"border",role:"status",variant:"secondary"},n.createElement("span",{className:"visually-hidden"},n.createElement(O.Z,{id:"loading"},"Loading..."))))})))))}},4875:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=a.apply(null,r);s&&e.push(s)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},3785:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(4875),a=r.n(n),o=r(9496),s=r(5675),i=r(4637);const l=o.forwardRef(((e,t)=>{const[{className:r,...n},{as:o="div",bsPrefix:l,spans:c}]=function({as:e,bsPrefix:t,className:r,...n}){t=(0,s.vE)(t,"col");const o=(0,s.pi)(),i=(0,s.zG)(),l=[],c=[];return o.forEach((e=>{const r=n[e];let a,o,s;delete n[e],"object"==typeof r&&null!=r?({span:a,offset:o,order:s}=r):a=r;const m=e!==i?`-${e}`:"";a&&l.push(!0===a?`${t}${m}`:`${t}${m}-${a}`),null!=s&&c.push(`order${m}-${s}`),null!=o&&c.push(`offset${m}-${o}`)})),[{...n,className:a()(r,...l,...c)},{as:e,bsPrefix:t,spans:l}]}(e);return(0,i.jsx)(o,{...n,ref:t,className:a()(r,!c.length&&l)})}));l.displayName="Col";const c=l},8774:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(4875),a=r.n(n),o=r(9496),s=r(5675),i=r(4637);const l=o.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},o)=>{const l=(0,s.vE)(e,"row"),c=(0,s.pi)(),m=(0,s.zG)(),u=`${l}-cols`,d=[];return c.forEach((e=>{const t=n[e];let r;delete n[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const a=e!==m?`-${e}`:"";null!=r&&d.push(`${u}${a}-${r}`)})),(0,i.jsx)(r,{ref:o,...n,className:a()(t,l,...d)})}));l.displayName="Row";const c=l},2575:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(4875),a=r.n(n),o=r(9496),s=r(5675),i=r(4637);const l=o.forwardRef((({bsPrefix:e,variant:t,animation:r="border",size:n,as:o="div",className:l,...c},m)=>{const u=`${e=(0,s.vE)(e,"spinner")}-${r}`;return(0,i.jsx)(o,{ref:m,...c,className:a()(l,u,n&&`${u}-${n}`,t&&`text-${t}`)})}));l.displayName="Spinner";const c=l},5675:(e,t,r)=>{"use strict";r.d(t,{SC:()=>u,pi:()=>c,vE:()=>l,zG:()=>m});var n=r(9496);r(4637);const a=["xxl","xl","lg","md","sm","xs"],o=n.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"}),{Consumer:s,Provider:i}=o;function l(e,t){const{prefixes:r}=(0,n.useContext)(o);return e||r[t]||t}function c(){const{breakpoints:e}=(0,n.useContext)(o);return e}function m(){const{minBreakpoint:e}=(0,n.useContext)(o);return e}function u(){const{dir:e}=(0,n.useContext)(o);return"rtl"===e}},7940:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(4875),a=r.n(n),o=/-(.)/g;var s=r(9496),i=r(5675),l=r(4637);const c=e=>{return e[0].toUpperCase()+(t=e,t.replace(o,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function m(e,{displayName:t=c(e),Component:r,defaultProps:n}={}){const o=s.forwardRef((({className:t,bsPrefix:o,as:s=r||"div",...c},m)=>{const u={...n,...c},d=(0,i.vE)(o,e);return(0,l.jsx)(s,{ref:m,className:a()(t,d),...u})}));return o.displayName=t,o}},2945:(e,t,r)=>{"use strict";r(2767);var n=r(9496),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),t.Fragment=o("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,o={},c=null,m=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(m=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:m,props:o,_owner:s.current}}t.jsx=c,t.jsxs=c},4637:(e,t,r)=>{"use strict";e.exports=r(2945)},6298:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=s(r(9496));s(r(7995));function s(e){return e&&e.__esModule?e:{default:e}}var i=0,l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={loaded:!1},r.id=i++,r.createForm=r.createForm.bind(r),r.findFormElement=r.findFormElement.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"createForm",value:function(){var e=this;if(window.hbspt){if(null===this.el)return;var t=n({},this.props);delete t.loading,delete t.onSubmit,delete t.onReady;var r=n({},t,{target:"#"+this.el.getAttribute("id"),onFormSubmit:function(t){var r=t.serializeArray();e.props.onSubmit(r)}});return window.hbspt.forms.create(r),!0}setTimeout(this.createForm,1)}},{key:"loadScript",value:function(){var e=this,t=document.createElement("script");t.defer=!0,t.onload=function(){e.createForm(),e.findFormElement()},t.src="//js.hsforms.net/forms/v2.js",document.head.appendChild(t)}},{key:"findFormElement",value:function(){if(null!==this.el){var e=this.el.querySelector("iframe");e?(this.setState({loaded:!0}),this.props.onReady&&this.props.onReady(e)):setTimeout(this.findFormElement,1)}}},{key:"componentDidMount",value:function(){window.hbspt||this.props.noScript?(this.createForm(),this.findFormElement()):this.loadScript()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return o.default.createElement("div",null,o.default.createElement("div",{ref:function(t){return e.el=t},id:"reactHubspotForm"+this.id,style:{display:this.state.loaded?"block":"none"}}),!this.state.loaded&&this.props.loading)}}]),t}(o.default.Component);t.default=l,e.exports=t.default}}]);