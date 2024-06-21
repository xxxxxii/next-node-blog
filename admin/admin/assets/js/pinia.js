import{i as t}from"./vue-demi.js";import{ao as e,j as n,an as s,aw as o,J as a,k as c,T as r,K as i,ax as u,ab as f,h as p,i as l,y as h,U as d,z as y}from"./@vue.js";
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let v;const b=t=>v=t,_=Symbol();function j(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var m,O;function $(){const o=e(!0),a=o.run((()=>n({})));let c=[],r=[];const i=s({install(t){b(i),i._a=t,t.provide(_,i),t.config.globalProperties.$pinia=i,r.forEach((t=>c.push(t))),r=[]},use(e){return this._a||t?c.push(e):r.push(e),this},_p:c,_a:null,_e:o,_s:new Map,state:a});return i}(O=m||(m={})).direct="direct",O.patchObject="patch object",O.patchFunction="patch function";const g=()=>{};function P(t,e,n,s=g){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&p()&&l(o),o}function S(t,...e){t.slice().forEach((t=>{t(...e)}))}const w=t=>t();function E(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],o=t[n];j(o)&&j(s)&&t.hasOwnProperty(n)&&!i(s)&&!u(s)?t[n]=E(o,s):t[n]=s}return t}const x=Symbol();const{assign:I}=Object;function M(t,s,o={},a,p,l){let d;const y=I({actions:{}},o),v={deep:!0};let _,O,$,M=[],k=[];const A=a.state.value[t];let F;function J(e){let n;_=O=!1,"function"==typeof e?(e(a.state.value[t]),n={type:m.patchFunction,storeId:t,events:$}):(E(a.state.value[t],e),n={type:m.patchObject,payload:e,storeId:t,events:$});const s=F=Symbol();h().then((()=>{F===s&&(_=!0)})),O=!0,S(M,n,a.state.value[t])}l||A||(a.state.value[t]={}),n({});const z=l?function(){const{state:t}=o,e=t?t():{};this.$patch((t=>{I(t,e)}))}:g;function C(e,n){return function(){b(a);const s=Array.from(arguments),o=[],c=[];let r;S(k,{args:s,name:e,store:N,after:function(t){o.push(t)},onError:function(t){c.push(t)}});try{r=n.apply(this&&this.$id===t?this:N,s)}catch(i){throw S(c,i),i}return r instanceof Promise?r.then((t=>(S(o,t),t))).catch((t=>(S(c,t),Promise.reject(t)))):(S(o,r),r)}}const K={_p:a,$id:t,$onAction:P.bind(null,k),$patch:J,$reset:z,$subscribe(e,n={}){const s=P(M,e,n.detached,(()=>o())),o=d.run((()=>c((()=>a.state.value[t]),(s=>{("sync"===n.flush?O:_)&&e({storeId:t,type:m.direct,events:$},s)}),I({},v,n))));return s},$dispose:function(){d.stop(),M=[],k=[],a._s.delete(t)}},N=r(K);a._s.set(t,N);const T=(a._a&&a._a.runWithContext||w)((()=>a._e.run((()=>(d=e()).run(s)))));for(const e in T){const n=T[e];if(i(n)&&(!i(W=n)||!W.effect)||u(n))l||(!A||j(U=n)&&U.hasOwnProperty(x)||(i(n)?n.value=A[e]:E(n,A[e])),a.state.value[t][e]=n);else if("function"==typeof n){const t=C(e,n);T[e]=t,y.actions[e]=n}}var U,W;return I(N,T),I(f(N),T),Object.defineProperty(N,"$state",{get:()=>a.state.value[t],set:t=>{J((e=>{I(e,t)}))}}),a._p.forEach((t=>{I(N,d.run((()=>t({store:N,app:a._a,pinia:a,options:y}))))})),A&&l&&o.hydrate&&o.hydrate(N.$state,A),_=!0,O=!0,N}function k(t,e,n){let c,r;const i="function"==typeof e;function u(t,n){const u=o();(t=t||(u?a(_,null):null))&&b(t),(t=v)._s.has(c)||(i?M(c,e,r,t):function(t,e,n,o){const{state:a,actions:c,getters:r}=e,i=n.state.value[t];let u;u=M(t,(function(){i||(n.state.value[t]=a?a():{});const e=d(n.state.value[t]);return I(e,c,Object.keys(r||{}).reduce(((e,o)=>(e[o]=s(y((()=>{b(n);const e=n._s.get(t);return r[o].call(e,e)}))),e)),{}))}),e,n,0,!0)}(c,r,t));return t._s.get(c)}return"string"==typeof t?(c=t,r=i?n:e):(r=t,c=t.id),u.$id=c,u}export{$ as c,k as d};
