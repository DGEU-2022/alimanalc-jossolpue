import{s as i,a as r,m as o,b as u,D as x,u as p,I as H,C as w,g as C,p as j,q as L,r as z,t as y,E as h,B as S,h as T,f as R,J as M,n as D,c as A,H as q}from"./index.76c7c38f.js";import{R as J}from"./Row.9064e31e.js";const W=["xxl","xl","lg","md","sm","xs"];function Z(t){const[e,s]=i(t,["as","bsPrefix","class"]),n=p(e.bsPrefix,"col"),l=H(),a=[],c=[];l().forEach(P=>{const $=s[P];let m,d,F;typeof $=="object"&&$!=null?{span:m,offset:d,order:F}=$:m=$;const v=P!=="xs"?`-${P}`:"";m&&a.push(m===!0?`${n}${v}`:`${n}${v}-${m}`),F!=null&&c.push(`order${v}-${F}`),d!=null&&c.push(`offset${v}-${d}`)});const[V,k]=i(s,W);return[o(k,{get class(){return u(e.class,...a,...c)}}),{get as(){return e.as},get bsPrefix(){return n},get spans(){return a}}]}const K=t=>{const[e,s]=Z(t),[n,l]=i(e,["class"]);return r(x,o({get component(){return s.as??"div"}},l,{get class(){return u(n.class,!s.spans.length&&s.bsPrefix)}}))},Q=K,U={as:"div",type:"valid",tooltip:!1},X=t=>{const[e,s]=i(o(U,t),["as","class","type","tooltip"]);return r(x,o({get component(){return e.as}},s,{get class(){return u(e.class,`${e.type}-${e.tooltip?"tooltip":"feedback"}`)}}))},E=X,Y=w({}),g=Y,ee={as:"div"},te=t=>{const[e,s]=i(o(ee,t),["as","controlId"]),n={get controlId(){return e.controlId}};return r(g.Provider,{value:n,get children(){return r(x,o({get component(){return e.as}},s))}})},N=te,se=y("<label></label>"),re={},oe=t=>{const[e,s]=i(o(re,t),["bsPrefix","class","children","controlId","label"]),n=p(e.bsPrefix,"form-floating");return r(N,o({get class(){return u(e.class,n)},get controlId(){return e.controlId}},s,{get children(){return[C(()=>e.children),(()=>{const l=se.cloneNode(!0);return j(l,()=>e.label),L(()=>z(l,"for",e.controlId)),l})()]}}))},ne=oe,le={as:"input",type:"checkbox",isValid:!1,isInvalid:!1},ae=t=>{const[e,s]=i(o(le,t),["as","id","bsPrefix","class","type","isValid","isInvalid"]),n=h(g),l=p(e.bsPrefix,"form-check-input");return r(x,o({get component(){return e.as}},s,{get type(){return e.type},get id(){return e.id||n.controlId},get class(){return u(e.class,l,e.isValid&&"is-valid",e.isInvalid&&"is-invalid")}}))},B=ae,ce=w(),O=ce,ie=y("<label></label>"),de={},ue=t=>{const[e,s]=i(o(de,t),["bsPrefix","class","for"]),n=p(e.bsPrefix,"form-check-label"),l=h(g);return h(O)?.setHasFormCheckLabel?.(!0),(()=>{const c=ie.cloneNode(!0);return S(c,o(s,{get for(){return e.for||l.controlId},get class(){return u(e.class,n)}}),!1,!1),c})()},G=ue,fe=y("<div></div>"),pe={as:"input",title:"",type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,feedbackTooltip:!1},me=t=>{const[e,s]=i(o(pe,t),["as","id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","class","style","title","type","label","children"]),n=p(e.bsPrefix,"form-check"),l=p(e.bsSwitchPrefix,"form-switch"),[a,c]=T(!1),V=h(g),k={get controlId(){return e.id||V.controlId}},P=R(()=>e.children),$=C(()=>e.label!=null&&e.label!==!1&&!P()||a());return r(g.Provider,{value:k,get children(){return r(O.Provider,{value:{setHasFormCheckLabel:c},get children(){const m=fe.cloneNode(!0);return j(m,()=>P()||[r(B,o(s,{get type(){return e.type==="switch"?"checkbox":e.type},get isValid(){return e.isValid},get isInvalid(){return e.isInvalid},get disabled(){return e.disabled},get as(){return e.as}})),C((()=>{const d=C(()=>!!$());return()=>d()&&r(G,{get title(){return e.title},get children(){return e.label}})})()),C((()=>{const d=C(()=>!!e.feedback);return()=>d()&&r(E,{get type(){return e.feedbackType},get tooltip(){return e.feedbackTooltip},get children(){return e.feedback}})})())]),L(d=>{const F=e.style,v=u(e.class,$()&&n,e.inline&&`${n}-inline`,e.type==="switch"&&l);return d._v$=M(m,F,d._v$),v!==d._v$2&&D(m,d._v$2=v),d},{_v$:void 0,_v$2:void 0}),m}})}})},I=Object.assign(me,{Input:B,Label:G}),be={as:"input",isValid:!1,isInvalid:!1},ge=t=>{const[e,s]=i(o(be,t),["as","bsPrefix","type","size","htmlSize","id","class","isValid","isInvalid","plaintext","readOnly"]),n=h(g),l=p(e.bsPrefix,"form-control"),a=()=>{let c;return e.plaintext?c={[`${l}-plaintext`]:!0}:c={[l]:!0,[`${l}-${e.size}`]:e.size},c};return r(x,o({get component(){return e.as}},s,{get type(){return e.type},get size(){return e.htmlSize},get readOnly(){return e.readOnly},get id(){return e.id||n.controlId},get class(){return u(a(),e.isValid&&"is-valid",e.isInvalid&&"is-invalid",e.type==="color"&&`${l}-color`)}}))},he=Object.assign(ge,{Feedback:E}),xe=A("form-floating"),$e={as:"label",column:!1,visuallyHidden:!1},ve=t=>{const[e,s]=i(o($e,t),["as","bsPrefix","column","visuallyHidden","class","htmlFor"]),n=h(g),l=p(e.bsPrefix,"form-label");let a="col-form-label";typeof e.column=="string"&&(a=`${a} ${a}-${e.column}`);const c=()=>u(e.class,l,e.visuallyHidden&&"visually-hidden",e.column&&a);return e.column?r(Q,o({as:"label",get class(){return c()},get htmlFor(){return e.htmlFor||n.controlId}},s)):r(x,o({get component(){return e.as},get class(){return c()},get htmlFor(){return e.htmlFor||n.controlId}},s))},Pe=ve,Ce=y("<input>"),ye={as:"img"},Fe=t=>{const[e,s]=i(o(ye,t),["bsPrefix","class","id"]),n=h(g),l=p(e.bsPrefix,"form-range");return(()=>{const a=Ce.cloneNode(!0);return S(a,o(s,{type:"range",get class(){return u(e.class,l)},get id(){return e.id||n.controlId}}),!1,!1),a})()},Ie=Fe,ke=y("<select></select>"),_e={isValid:!1,isInvalid:!1},Le=t=>{const[e,s]=i(o(_e,t),["bsPrefix","size","htmlSize","class","isValid","isInvalid","id"]),n=h(g),l=p(e.bsPrefix,"form-select");return(()=>{const a=ke.cloneNode(!0);return S(a,o(s,{get size(){return e.htmlSize},get class(){return u(e.class,l,e.size&&`${l}-${e.size}`,e.isValid&&"is-valid",e.isInvalid&&"is-invalid")},get id(){return e.id||n.controlId}}),!1,!1),a})()},Se=Le,Ve={as:"small"},we=t=>{const[e,s]=i(o(Ve,t),["as","bsPrefix","class","muted"]),n=p(e.bsPrefix,"form-text");return r(x,o({get component(){return e.as}},s,{get class(){return u(e.class,n,e.muted&&"text-muted")}}))},je=we,ze=t=>r(I,o(t,{type:"switch"})),Te=Object.assign(ze,{Input:I.Input,Label:I.Label}),Ee={as:"form"},Ne=t=>{const[e,s]=i(o(Ee,t),["as","class","validated"]);return r(x,o({get component(){return e.as}},s,{get class(){return u(e.class,e.validated&&"was-validated")}}))},f=Object.assign(Ne,{Group:N,Control:he,Floating:xe,Check:I,Switch:Te,Label:Pe,Text:je,Range:Ie,Select:Se,FloatingLabel:ne}),Be=y('<div class="col-md-12"><a target="_blank" type="submit" class="btn btn-primary">Enviar</a></div>'),Oe={from:"",subject:"",body:""},[b,_]=T(Oe);function Re(){return r(q,{style:{"max-width":"40%","margin-top":"15px"},get children(){return r(f,{get children(){return[r(f.Group,{class:"mb-3",controlId:"formBasicEmail",get children(){return[r(f.Label,{children:"Tu Email"}),r(f.Control,{type:"email",placeholder:"Introducte tu email",get value(){return b().from},onChange:t=>{_({...b(),from:t.currentTarget.value})}}),r(f.Text,{class:"text-muted",children:"No compartiremos tu correo con nadie."})]}}),r(f.Group,{class:"mb-3",controlId:"formBasicSubject",get children(){return[r(f.Label,{children:"Motivo del contacto"}),r(f.Control,{type:"text",placeholder:"Asunto del contacto",get value(){return b().subject},onChange:t=>{_({...b(),subject:t.currentTarget.value})}})]}}),r(f.Group,{class:"mb-3",controlId:"formBasicMesage",get children(){return[r(f.Label,{children:"Mensaje"}),r(f.Control,{as:"textarea",rows:4,placeholder:"Cuerpo del mensaje",get value(){return b().body},onChange:t=>{_({...b(),body:t.currentTarget.value})}})]}}),r(J,{get children(){const t=Be.cloneNode(!0),e=t.firstChild;return t.style.setProperty("text-align","right"),L(()=>z(e,"href",`mailto:amanzanoalcaide@gmail.com?cc=${b().from}&subject=${b().subject}&body=${b().body}`)),t}})]}})}})}export{Re as default};
