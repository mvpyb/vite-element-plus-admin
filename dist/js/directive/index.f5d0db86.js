import{_ as O,b as U}from"../../assets/index.f6aa079a.js";import{l as h}from"../element-plus/element-plus.b5a7575a.js";import{L as W}from"../index/index.dffd0e5c.js";import{e as y,a7 as p,al as _,V as d,W as e,u as E,o as a,a as t,a1 as s,X as i,c as X,$ as r,a0 as $,b8 as q,b7 as A}from"../@vue/@vue.080f2ebe.js";import"../pinia/pinia.ecf2080f.js";import"../vue-demi/vue-demi.4f3c4c97.js";import"../js-cookie/js-cookie.431252a9.js";import"../axios/axios.21f17a99.js";import"../geotiff/geotiff.09715990.js";import"../vue-router/vue-router.377509c1.js";import"../path-to-regexp/path-to-regexp.ecb763cd.js";import"../fuse.js/fuse.js.8cd4e865.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../screenfull/screenfull.468e47d2.js";import"../vue-i18n/vue-i18n.98c23e45.js";import"../@intlify/@intlify.391e75eb.js";import"../@amap/@amap.58aba9ee.js";import"../vue/vue.1414c1c1.js";import"../mitt/mitt.fcf4f812.js";import"../lodash-es/lodash-es.dd34ae20.js";import"../@vueuse/@vueuse.f0b33c52.js";import"../qs/qs.71f2d2b1.js";import"../side-channel/side-channel.147ab9b8.js";import"../get-intrinsic/get-intrinsic.c9f38a1e.js";import"../has-symbols/has-symbols.37c383d9.js";import"../function-bind/function-bind.20151ab8.js";import"../has/has.21528ef4.js";import"../call-bind/call-bind.45258027.js";import"../object-inspect/object-inspect.ddd6d7bd.js";import"../nprogress/nprogress.558663b1.js";/* empty css                                 */import"../clipboard/clipboard.a3dfcb76.js";import"../@element-plus/@element-plus.5ea2a7b5.js";import"../xe-utils/xe-utils.d9e2cfb8.js";import"../vxe-table/vxe-table.1efe9f30.js";import"../vite-plugin-mock/vite-plugin-mock.65169573.js";import"../mockjs/mockjs.57e773d8.js";import"../@popperjs/@popperjs.1e3895c9.js";import"../@ctrl/@ctrl.08d0615d.js";import"../dayjs/dayjs.51a47833.js";import"../async-validator/async-validator.233a0906.js";import"../memoize-one/memoize-one.7f51d3ef.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.190fc729.js";import"../@floating-ui/@floating-ui.835c30f5.js";import"../lodash-unified/lodash-unified.418bdfd8.js";const n=m=>(q("data-v-f199f67a"),m=m(),A(),m),F={class:"section-container"},G=n(()=>t("div",{class:"card-header"},[t("span",null,"\u590D\u5236 v-copy")],-1)),H={class:"h50"},J=r(" \u590D\u5236 "),K=n(()=>t("div",{class:"card-header"},[t("span",null,"\u6C34\u6CE2\u7EB9\u52A8\u6548 v-waves")],-1)),Q={class:"h50"},Y=r(" \u70B9\u6211\u70B9\u6211\u5FEB\u70B9\u6211 "),Z=n(()=>t("div",{class:"card-header"},[t("span",null,"\u957F\u6309\u6307\u4EE4 v-longpress")],-1)),ee={class:"h50"},te=r(" \u957F\u6309\u62111s\u4EE5\u4E0A "),se=n(()=>t("div",{class:"card-header"},[t("span",null,"\u9632\u6296\u6307\u4EE4 v-dobounce")],-1)),oe={class:"h50"},ae=r(" \u70B9\u6211\u770B\u770B "),ie=n(()=>t("div",{class:"card-header"},[t("span",null,"\u6C34\u5370 v-waterMarker")],-1)),re={class:"water-marker h200"},le=n(()=>t("div",{class:"card-header"},[t("span",null,"\u62D6\u62FD\u6307\u4EE4 v-draggable")],-1)),de={class:"drag-container h200"},ne={class:"drag-box"},ce=n(()=>t("div",{class:"card-header"},[t("span",null,"\u6743\u9650\u6307\u4EE4 v-permission")],-1)),_e=r(" \u5207\u6362\u6743\u9650 "),pe={class:"item"},ue=r(" \u6709\u6743\u9650 admin "),me={class:"item"},ve=r(" \u6709\u6743\u9650 editor "),he={class:"item"},fe=r(" \u6709\u6743\u9650 admin + editor"),ge={class:"item"},be=r("\u6709\u6743\u9650 user"),ye=n(()=>t("div",{class:"card-header"},[t("span",null,"coming soon")],-1)),xe=n(()=>t("div",{class:"h50"},"\u5373\u5C06\u63A8\u51FA\u4E00\u4E9B\u5176\u4ED6\u5E38\u7528\u6307\u4EE4\uFF0C\u5982\u61D2\u52A0\u8F7D\u7B49",-1)),we={name:"Directive"},ke=Object.assign(we,{setup(m){const V=U(),C=()=>{h.ElMessage.success("\u590D\u5236\u6210\u529F")},S=()=>{h.ElMessage.error("\u590D\u5236\u5931\u8D25")},I=()=>{h.ElMessage.error("\u4F60\u6309\u75BC\u6211\u4E86...")},M=()=>{h.ElMessage.warning("\u55EF\uFF0C\u4F60\u8BF4\u7684\u90FD\u5BF9\u3002\u3002\u3002")},f=y(""),g=y([]),u=y(0),D=async()=>{const x=["admin","editor","user"];u.value++,u.value>2&&(u.value=0),g.value=x.splice(u.value,1),await V.SET_DIRECTIVE_ROLE(E(g))};return(x,w)=>{const z=p("el-input"),o=p("el-col"),l=p("el-button"),k=p("el-row"),c=p("el-card"),B=p("el-tag"),b=_("clipboard"),R=_("wave"),L=_("longpress"),N=_("dobounce"),P=_("waterMarker"),T=_("draggable"),v=_("permission");return a(),d(E(W),{title:"\u81EA\u5B9A\u4E49\u6307\u4EE4",subtitle:"\u975E\u5E38\u5B9E\u7528\u7684Vue\u81EA\u5B9A\u4E49\u6307\u4EE4"},{body:e(()=>[t("div",F,[s(k,{gutter:25},{default:e(()=>[s(o,{span:12},{default:e(()=>[s(c,null,{header:e(()=>[G]),default:e(()=>[t("div",H,[s(k,{gutter:10},{default:e(()=>[s(o,{span:18},{default:e(()=>[s(z,{placeholder:"\u8BF7\u8F93\u5165",modelValue:f.value,"onUpdate:modelValue":w[0]||(w[0]=j=>f.value=j)},null,8,["modelValue"])]),_:1}),s(o,{span:6},{default:e(()=>[i((a(),d(l,{type:"primary"},{default:e(()=>[J]),_:1})),[[b,f.value,"copy"],[b,C,"success"],[b,S,"error"]])]),_:1})]),_:1})])]),_:1})]),_:1}),s(o,{span:12},{default:e(()=>[s(c,null,{header:e(()=>[K]),default:e(()=>[t("div",Q,[i((a(),d(l,{type:"primary"},{default:e(()=>[Y]),_:1})),[[R]])])]),_:1})]),_:1}),s(o,{span:12},{default:e(()=>[s(c,null,{header:e(()=>[Z]),default:e(()=>[t("div",ee,[i((a(),d(l,{type:"primary"},{default:e(()=>[te]),_:1})),[[L,I]])])]),_:1})]),_:1}),s(o,{span:12},{default:e(()=>[s(c,null,{header:e(()=>[se]),default:e(()=>[t("div",oe,[i((a(),d(l,{type:"primary"},{default:e(()=>[ae]),_:1})),[[N,M]])])]),_:1})]),_:1}),s(o,{span:12},{default:e(()=>[s(c,null,{header:e(()=>[ie]),default:e(()=>[i(t("div",re,null,512),[[P,{text:"\u5C0F\u7070\u7070\u7248\u6743\u6240\u6709",textColor:"rgba(239,53,54,0.4)"}]])]),_:1})]),_:1}),s(o,{span:12},{default:e(()=>[s(c,null,{header:e(()=>[le]),default:e(()=>[t("div",de,[i(t("div",ne,null,512),[[T]])])]),_:1})]),_:1}),s(o,{span:24},{default:e(()=>[s(c,null,{header:e(()=>[ce]),default:e(()=>[s(l,{style:{margin:"10px 0"},type:"primary",onClick:D,size:"small"},{default:e(()=>[_e]),_:1}),(a(),X("div",{key:u.value},[s(B,{class:"permission-sourceCode",type:"info"},{default:e(()=>[r(" \u5F53\u524D\u6743\u9650 \uFF1A"+$(g.value.join("_")),1)]),_:1}),t("div",pe,[i((a(),d(l,{type:"success",size:"small"},{default:e(()=>[ue]),_:1})),[[v,["admin"]]])]),t("div",me,[i((a(),d(l,{type:"warning",size:"small"},{default:e(()=>[ve]),_:1})),[[v,["editor"]]])]),t("div",he,[i((a(),d(l,{type:"danger",size:"small"},{default:e(()=>[fe]),_:1})),[[v,["admin","editor"]]])]),t("div",ge,[i((a(),d(l,{type:"primary",size:"small"},{default:e(()=>[be]),_:1})),[[v,["user"]]])])]))]),_:1})]),_:1}),s(o,{span:24},{default:e(()=>[s(c,null,{header:e(()=>[ye]),default:e(()=>[xe]),_:1})]),_:1})]),_:1})])]),_:1})}}});var ht=O(ke,[["__scopeId","data-v-f199f67a"]]);export{ht as default};
