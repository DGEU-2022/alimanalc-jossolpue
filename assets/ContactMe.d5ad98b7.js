import{s as c,m as r,c as s,a as u,D as h,I as L,u as m,e as x,v as w,w as y,x as S,t as $,J as g,H as F,k as j,j as B,L as M,r as E,b as A,f as D}from"./index.0995445e.js";import{C as J}from"./Col.3c2bad1d.js";import{R as W}from"./Row.da68f29f.js";const q={as:"div",type:"valid",tooltip:!1},K=t=>{const[e,o]=c(r(q,t),["as","class","type","tooltip"]);return s(h,r({get component(){return e.as}},o,{get class(){return u(e.class,`${e.type}-${e.tooltip?"tooltip":"feedback"}`)}}))},z=K,Q=L({}),b=Q,U={as:"div"},X=t=>{const[e,o]=c(r(U,t),["as","controlId"]),n={get controlId(){return e.controlId}};return s(b.Provider,{value:n,get children(){return s(h,r({get component(){return e.as}},o))}})},T=X,Y=$("<label></label>"),Z={},ee=t=>{const[e,o]=c(r(Z,t),["bsPrefix","class","children","controlId","label"]),n=m(e.bsPrefix,"form-floating");return s(T,r({get class(){return u(e.class,n)},get controlId(){return e.controlId}},o,{get children(){return[x(()=>e.children),(()=>{const l=Y.cloneNode(!0);return w(l,()=>e.label),y(()=>S(l,"for",e.controlId)),l})()]}}))},te=ee,se={as:"input",type:"checkbox",isValid:!1,isInvalid:!1},re=t=>{const[e,o]=c(r(se,t),["as","id","bsPrefix","class","type","isValid","isInvalid"]),n=g(b),l=m(e.bsPrefix,"form-check-input");return s(h,r({get component(){return e.as}},o,{get type(){return e.type},get id(){return e.id||n.controlId},get class(){return u(e.class,l,e.isValid&&"is-valid",e.isInvalid&&"is-invalid")}}))},V=re,oe=L(),N=oe,ne=$("<label></label>"),le={},ae=t=>{const[e,o]=c(r(le,t),["bsPrefix","class","for"]),n=m(e.bsPrefix,"form-check-label"),l=g(b);return g(N)?.setHasFormCheckLabel?.(!0),(()=>{const i=ne.cloneNode(!0);return F(i,r(o,{get for(){return e.for||l.controlId},get class(){return u(e.class,n)}}),!1,!1),i})()},O=ae,ce=$("<div></div>"),ie={as:"input",title:"",type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,feedbackTooltip:!1},de=t=>{const[e,o]=c(r(ie,t),["as","id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","class","style","title","type","label","children"]),n=m(e.bsPrefix,"form-check"),l=m(e.bsSwitchPrefix,"form-switch"),[a,i]=j(!1),G=g(b),H={get controlId(){return e.id||G.controlId}},I=B(()=>e.children),k=x(()=>e.label!=null&&e.label!==!1&&!I()||a());return s(b.Provider,{value:H,get children(){return s(N.Provider,{value:{setHasFormCheckLabel:i},get children(){const v=ce.cloneNode(!0);return w(v,()=>I()||[s(V,r(o,{get type(){return e.type==="switch"?"checkbox":e.type},get isValid(){return e.isValid},get isInvalid(){return e.isInvalid},get disabled(){return e.disabled},get as(){return e.as}})),x((()=>{const f=x(()=>!!k());return()=>f()&&s(O,{get title(){return e.title},get children(){return e.label}})})()),x((()=>{const f=x(()=>!!e.feedback);return()=>f()&&s(z,{get type(){return e.feedbackType},get tooltip(){return e.feedbackTooltip},get children(){return e.feedback}})})())]),y(f=>{const R=e.style,_=u(e.class,k()&&n,e.inline&&`${n}-inline`,e.type==="switch"&&l);return f._v$=M(v,R,f._v$),_!==f._v$2&&E(v,f._v$2=_),f},{_v$:void 0,_v$2:void 0}),v}})}})},C=Object.assign(de,{Input:V,Label:O}),ue={as:"input",isValid:!1,isInvalid:!1},me=t=>{const[e,o]=c(r(ue,t),["as","bsPrefix","type","size","htmlSize","id","class","isValid","isInvalid","plaintext","readOnly"]),n=g(b),l=m(e.bsPrefix,"form-control"),a=()=>{let i;return e.plaintext?i={[`${l}-plaintext`]:!0}:i={[l]:!0,[`${l}-${e.size}`]:e.size},i};return s(h,r({get component(){return e.as}},o,{get type(){return e.type},get size(){return e.htmlSize},get readOnly(){return e.readOnly},get id(){return e.id||n.controlId},get class(){return u(a(),e.isValid&&"is-valid",e.isInvalid&&"is-invalid",e.type==="color"&&`${l}-color`)}}))},fe=Object.assign(me,{Feedback:z}),pe=A("form-floating"),be={as:"label",column:!1,visuallyHidden:!1},ge=t=>{const[e,o]=c(r(be,t),["as","bsPrefix","column","visuallyHidden","class","htmlFor"]),n=g(b),l=m(e.bsPrefix,"form-label");let a="col-form-label";typeof e.column=="string"&&(a=`${a} ${a}-${e.column}`);const i=()=>u(e.class,l,e.visuallyHidden&&"visually-hidden",e.column&&a);return e.column?s(J,r({as:"label",get class(){return i()},get htmlFor(){return e.htmlFor||n.controlId}},o)):s(h,r({get component(){return e.as},get class(){return i()},get htmlFor(){return e.htmlFor||n.controlId}},o))},he=ge,xe=$("<input>"),$e={as:"img"},ve=t=>{const[e,o]=c(r($e,t),["bsPrefix","class","id"]),n=g(b),l=m(e.bsPrefix,"form-range");return(()=>{const a=xe.cloneNode(!0);return F(a,r(o,{type:"range",get class(){return u(e.class,l)},get id(){return e.id||n.controlId}}),!1,!1),a})()},Ce=ve,Pe=$("<select></select>"),ye={isValid:!1,isInvalid:!1},Fe=t=>{const[e,o]=c(r(ye,t),["bsPrefix","size","htmlSize","class","isValid","isInvalid","id"]),n=g(b),l=m(e.bsPrefix,"form-select");return(()=>{const a=Pe.cloneNode(!0);return F(a,r(o,{get size(){return e.htmlSize},get class(){return u(e.class,l,e.size&&`${l}-${e.size}`,e.isValid&&"is-valid",e.isInvalid&&"is-invalid")},get id(){return e.id||n.controlId}}),!1,!1),a})()},Ie=Fe,ke={as:"small"},_e=t=>{const[e,o]=c(r(ke,t),["as","bsPrefix","class","muted"]),n=m(e.bsPrefix,"form-text");return s(h,r({get component(){return e.as}},o,{get class(){return u(e.class,n,e.muted&&"text-muted")}}))},Le=_e,we=t=>s(C,r(t,{type:"switch"})),Se=Object.assign(we,{Input:C.Input,Label:C.Label}),je={as:"form"},ze=t=>{const[e,o]=c(r(je,t),["as","class","validated"]);return s(h,r({get component(){return e.as}},o,{get class(){return u(e.class,e.validated&&"was-validated")}}))},d=Object.assign(ze,{Group:T,Control:fe,Floating:pe,Check:C,Switch:Se,Label:he,Text:Le,Range:Ce,Select:Ie,FloatingLabel:te}),Te=$('<div class="col-md-12"><a target="_blank" type="submit" class="btn btn-primary">Enviar</a></div>'),Ve={from:"",subject:"",body:""},[p,P]=j(Ve);function He(){return s(D,{style:{"max-width":"40%","margin-top":"15px"},get children(){return s(d,{get children(){return[s(d.Group,{class:"mb-3",controlId:"formBasicEmail",get children(){return[s(d.Label,{children:"Tu Email"}),s(d.Control,{type:"email",placeholder:"Introducte tu email",get value(){return p().from},onChange:t=>{P({...p(),from:t.currentTarget.value})}}),s(d.Text,{class:"text-muted",children:"No compartiremos tu correo con nadie."})]}}),s(d.Group,{class:"mb-3",controlId:"formBasicSubject",get children(){return[s(d.Label,{children:"Motivo del contacto"}),s(d.Control,{type:"text",placeholder:"Asunto del contacto",get value(){return p().subject},onChange:t=>{P({...p(),subject:t.currentTarget.value})}})]}}),s(d.Group,{class:"mb-3",controlId:"formBasicMesage",get children(){return[s(d.Label,{children:"Mensaje"}),s(d.Control,{as:"textarea",rows:4,placeholder:"Cuerpo del mensaje",get value(){return p().body},onChange:t=>{P({...p(),body:t.currentTarget.value})}})]}}),s(W,{get children(){const t=Te.cloneNode(!0),e=t.firstChild;return t.style.setProperty("text-align","right"),y(()=>S(e,"href",`mailto:amanzanoalcaide@gmail.com?cc=${p().from}&subject=${p().subject}&body=${p().body}`)),t}})]}})}})}export{He as default};