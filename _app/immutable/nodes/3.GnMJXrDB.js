import{p as z}from"../chunks/public-api.C_oAbf4K.js";import{e as B,h as F}from"../chunks/essays.BlpHs4zN.js";import{b as f,t as j,d as N}from"../chunks/disclose-version.DaQQL7OG.js";import{ah as P,ai as R,h as V,$ as q,a2 as A,a3 as d,a4 as l,N as G,M as n,a5 as s,a6 as H,aj as I,a0 as J,a1 as K,_ as Q}from"../chunks/runtime.DSIJU85y.js";import{s as U,e as W}from"../chunks/render.y5LvOcdJ.js";import{i as X}from"../chunks/if.D9rpN_GD.js";import{e as Y,i as Z}from"../chunks/each.CALotCoe.js";import{a as $,r as tt}from"../chunks/attributes.DgQD7pip.js";import{g as et}from"../chunks/entry.bRVF4HD3.js";function at(t,a,r,i=r){t.addEventListener(a,r);const e=t.__on_r;e?t.__on_r=()=>{e(),i()}:t.__on_r=i,$()}function st(t,a,r=a){var i=P();at(t,"input",()=>{var e=w(t)?L(t.value):t.value;r(e),i&&e!==(e=a())&&(t.value=e??"")}),R(()=>{var e=a();if(V&&t.defaultValue!==t.value){r(t.value);return}w(t)&&e===L(t.value)||t.type==="date"&&!e&&!t.value||e!==t.value&&(t.value=e??"")})}function w(t){var a=t.type;return a==="number"||a==="range"}function L(t){return t===""?null:+t}const rt=()=>({essays:z(B)}),bt=Object.freeze(Object.defineProperty({__proto__:null,load:rt},Symbol.toStringTag,{value:"Module"}));var lt=j('<tr class="essayTableRow svelte-1uut8tt"><td class="essayTableCell svelte-1uut8tt"><!></td><td class="essayTableCell svelte-1uut8tt" style="text-align: right;"> </td></tr>'),ot=j('<div class="essays svelte-1uut8tt"><h1 class="svelte-1uut8tt">Essays</h1> <table class="essaysTable svelte-1uut8tt"><thead><tr><td class="searchBox svelte-1uut8tt" colspan="2"><label>Filter by title: <input style="margin-left: 10px;"></label></td></tr><tr><th class="essayTableCell svelte-1uut8tt">Title</th><th class="essayTableCell svelte-1uut8tt" style="text-align: right;">Date</th></tr></thead><tbody></tbody></table></div>');function ht(t,a){q(a,!0);let r=I("");function i(v,o){return o.length==0?!0:v.toLowerCase().includes(o.toLowerCase())}var e=ot(),m=d(l(e),2),_=l(m),b=l(_),h=l(b),y=l(h),p=d(l(y));tt(p),s(y),s(h),s(b),H(),s(_);var g=d(_);Y(g,21,()=>a.data.essays,Z,(v,o)=>{var x=N(),k=J(x);X(k,()=>i(n(o).title,n(r)),D=>{var u=lt(),S=Q(()=>et("/essays/"+n(o).id)),c=l(u),E=l(c);F(E,()=>n(o).title),s(c);var T=d(c),M=l(T,!0);K(()=>U(M,new Date(n(o).date).toLocaleDateString())),s(T),s(u),W("click",u,function(...O){var C;(C=n(S))==null||C.apply(this,O)}),f(D,u)}),f(v,x)}),s(g),s(m),s(e),st(p,()=>n(r),v=>G(r,v)),f(t,e),A()}export{ht as component,bt as universal};
