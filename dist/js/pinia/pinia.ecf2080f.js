import{i as Z}from"../vue-demi/vue-demi.4f3c4c97.js";import{k as V,e as H,C as E,h as B,A as $,f as G,p as M,l as L,aw as J,ao as T,y as tt,n as et,t as st,m as nt}from"../@vue/@vue.080f2ebe.js";/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let N;const R=t=>N=t,U=Symbol();function C(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var I;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(I||(I={}));function it(){const t=V(!0),r=t.run(()=>H({}));let s=[],e=[];const o=E({install(u){R(o),o._a=u,u.provide(U,o),u.config.globalProperties.$pinia=o,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!Z?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:r});return o}const W=()=>{};function F(t,r,s,e=W){t.push(r);const o=()=>{const u=t.indexOf(r);u>-1&&(t.splice(u,1),e())};return!s&&B()&&tt(o),o}function _(t,...r){t.slice().forEach(s=>{s(...r)})}function O(t,r){for(const s in r){if(!r.hasOwnProperty(s))continue;const e=r[s],o=t[s];C(o)&&C(e)&&t.hasOwnProperty(s)&&!L(e)&&!J(e)?t[s]=O(o,e):t[s]=e}return t}const ot=Symbol();function ct(t){return!C(t)||!t.hasOwnProperty(ot)}const{assign:h}=Object;function rt(t){return!!(L(t)&&t.effect)}function ut(t,r,s,e){const{state:o,actions:u,getters:f}=r,a=s.state.value[t];let m;function y(){a||(s.state.value[t]=o?o():{});const b=st(s.state.value[t]);return h(b,u,Object.keys(f||{}).reduce((p,v)=>(p[v]=E(nt(()=>{R(s);const d=s._s.get(t);return f[v].call(d,d)})),p),{}))}return m=q(t,y,r,s,e,!0),m.$reset=function(){const p=o?o():{};this.$patch(v=>{h(v,p)})},m}function q(t,r,s={},e,o,u){let f;const a=h({actions:{}},s),m={deep:!0};let y,b,p=E([]),v=E([]),d;const g=e.state.value[t];!u&&!g&&(e.state.value[t]={}),H({});let x;function A(c){let n;y=b=!1,typeof c=="function"?(c(e.state.value[t]),n={type:I.patchFunction,storeId:t,events:d}):(O(e.state.value[t],c),n={type:I.patchObject,payload:c,storeId:t,events:d});const S=x=Symbol();et().then(()=>{x===S&&(y=!0)}),b=!0,_(p,n,e.state.value[t])}const z=W;function D(){f.stop(),p=[],v=[],e._s.delete(t)}function K(c,n){return function(){R(e);const S=Array.from(arguments),P=[],w=[];function X(i){P.push(i)}function Y(i){w.push(i)}_(v,{args:S,name:c,store:l,after:X,onError:Y});let k;try{k=n.apply(this&&this.$id===t?this:l,S)}catch(i){throw _(w,i),i}return k instanceof Promise?k.then(i=>(_(P,i),i)).catch(i=>(_(w,i),Promise.reject(i))):(_(P,k),k)}}const Q={_p:e,$id:t,$onAction:F.bind(null,v),$patch:A,$reset:z,$subscribe(c,n={}){const S=F(p,c,n.detached,()=>P()),P=f.run(()=>G(()=>e.state.value[t],w=>{(n.flush==="sync"?b:y)&&c({storeId:t,type:I.direct,events:d},w)},h({},m,n)));return S},$dispose:D},l=M(h({},Q));e._s.set(t,l);const j=e._e.run(()=>(f=V(),f.run(()=>r())));for(const c in j){const n=j[c];if(L(n)&&!rt(n)||J(n))u||(g&&ct(n)&&(L(n)?n.value=g[c]:O(n,g[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const S=K(c,n);j[c]=S,a.actions[c]=n}}return h(l,j),h(T(l),j),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{A(n=>{h(n,c)})}}),e._p.forEach(c=>{h(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),g&&u&&s.hydrate&&s.hydrate(l.$state,g),y=!0,b=!0,l}function lt(t,r,s){let e,o;const u=typeof r=="function";typeof t=="string"?(e=t,o=u?s:r):(o=t,e=t.id);function f(a,m){const y=B();return a=a||y&&$(U),a&&R(a),a=N,a._s.has(e)||(u?q(e,r,o,a):ut(e,o,a)),a._s.get(e)}return f.$id=e,f}export{it as c,lt as d};
