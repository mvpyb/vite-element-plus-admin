import{v as g}from"../../assets/index.f6aa079a.js";function p(e,r){if(arguments.length===0||!e)return null;const s=r||"{y}-{m}-{d} {h}:{i}:{s}";let t;typeof e=="object"?t=e:(typeof e=="string"&&(/^[0-9]+$/.test(e)?e=parseInt(e):e=e.replace(new RegExp(/-/gm),"/")),typeof e=="number"&&e.toString().length===10&&(e=e*1e3),t=new Date(e));const a={y:t.getFullYear(),m:t.getMonth()+1,d:t.getDate(),h:t.getHours(),i:t.getMinutes(),s:t.getSeconds(),a:t.getDay()};return s.replace(/{([ymdhisa])+}/g,(f,n)=>{const o=a[n];return n==="a"?["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"][o]:o.toString().padStart(2,"0")})}function c(e){if(!g(e))return"";const r=/^(\d{3})\d{4}(\d{4})$/;return e.replace(r,"$1****$2")}export{c as e,p};
