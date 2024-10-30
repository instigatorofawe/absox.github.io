var ct=Object.defineProperty;var ut=(s,t,e)=>t in s?ct(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var q=(s,t,e)=>ut(s,typeof t!="symbol"?t+"":t,e);import{a as P,t as Q}from"../chunks/disclose-version.tJYFEcM6.js";import{a3 as nt,am as Y,a4 as ot,a5 as _t,a6 as ht,U as h,M as v,a8 as i,a7 as c,a9 as a}from"../chunks/runtime.DPaXgKMT.js";import{s as u}from"../chunks/render.BX8Nnrvl.js";import{d as pt}from"../chunks/events.DIqkH7Ji.js";import{p as b}from"../chunks/proxy.1gpJmmdU.js";var w=(s=>(s.Empty=" ",s.X="X",s.O="O",s))(w||{});class _{constructor(t=Array(9).fill(" ")){q(this,"tiles");this.tiles=t}static from_hash(t){let e=new _;for(let r=0;r<9;r++)e.tiles[r]=_.tile_from_hash(t%3),t=Math.floor(t/3);return e}static hash_tile(t){switch(t){case" ":return 0;case"X":return 1;case"O":return 2}}static tile_from_hash(t){switch(t){case 0:return" ";case 1:return"X";case 2:return"O"}return" "}hash(){let t=0;for(let e=0;e<9;e++)t+=_.hash_tile(this.tiles[e])*Math.pow(3,e);return t}invariant_hash(){const t=[[0,1,2,3,4,5,6,7,8],[2,5,8,1,4,7,0,3,6],[8,7,6,5,4,3,2,1,0],[6,3,0,7,4,1,8,5,2],[6,7,8,3,4,5,0,1,2],[2,1,0,5,4,3,8,7,6],[8,5,2,7,4,1,6,3,0],[0,3,6,1,4,7,2,5,8]];let e=[];for(const r of t){let l=0;for(let f=0;f<9;f++)l+=_.hash_tile(this.tiles[r[f]])*Math.pow(3,f);e.push(l)}return Math.min(...e)}empty(){let t=[];for(let e=0;e<9;e++)this.tiles[e]==" "&&t.push(e);return t}winner(){if(this.empty().length>5)return" ";const t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let e of t)if(this.tiles[e[0]]==this.tiles[e[1]]&&this.tiles[e[1]]==this.tiles[e[2]]&&this.tiles[e[0]]!=" ")return this.tiles[e[0]];return" "}turn(){return this.empty().length%2==0?"O":"X"}act(t){let e=[...this.tiles];return e[t]=this.turn(),new _(e)}equals(t){for(let e=0;e<9;e++)if(this.tiles[e]!=t.tiles[e])return!1;return!0}}const p=class p{constructor(){q(this,"valueTable");this.valueTable={}}static getInstance(){return p.instance||(p.instance=new p,p.instance.evaluateRecursive(new _)),p.instance}evaluateRecursive(t){let e=t.invariant_hash();if(e in this.valueTable)return this.valueTable[e];switch(t.winner()){case"X":return this.valueTable[e]=1,1;case"O":return this.valueTable[e]=-1,-1;case" ":if(t.empty().length==0)return this.valueTable[e]=0,0}let r=[];for(let l of t.empty())r.push(this.evaluateRecursive(t.act(l)));if(t.turn()=="X"){let l=Math.max(...r);return this.valueTable[e]=l,l}else{let l=Math.min(...r);return this.valueTable[e]=l,l}}solve(t){let e=t.empty(),r=this.evaluateRecursive(t);for(let l of e)if(r==this.evaluateRecursive(t.act(l)))return l;return-1}};q(p,"instance");let A=p;var ft=(s,t)=>t(),wt=(s,t)=>t(),dt=(s,t)=>t(0),mt=(s,t)=>t(1),kt=(s,t)=>t(2),gt=(s,t)=>t(3),yt=(s,t)=>t(4),xt=(s,t)=>t(5),qt=(s,t)=>t(6),bt=(s,t)=>t(7),Xt=(s,t)=>t(8),Mt=Q('<div style="margin-bottom: 15px;" class="svelte-1uoiwt8"><button class="svelte-1uoiwt8">Reset</button> <button class="svelte-1uoiwt8">Swap</button></div> <div class="row svelte-1uoiwt8"><div class="square svelte-1uoiwt8"><p class="svelte-1uoiwt8"> </p></div> <div class="square svelte-1uoiwt8"><p class="svelte-1uoiwt8"> </p></div> <div class="square svelte-1uoiwt8"><p class="svelte-1uoiwt8"> </p></div></div> <div class="row svelte-1uoiwt8"><div class="square svelte-1uoiwt8"><p class="svelte-1uoiwt8"> </p></div> <div class="square svelte-1uoiwt8"><p class="svelte-1uoiwt8"> </p></div> <div class="square svelte-1uoiwt8"><p class="svelte-1uoiwt8"> </p></div></div> <div class="row svelte-1uoiwt8"><div class="square svelte-1uoiwt8"><p class="svelte-1uoiwt8"> </p></div> <div class="square svelte-1uoiwt8"><p class="svelte-1uoiwt8"> </p></div> <div class="square svelte-1uoiwt8"><p class="svelte-1uoiwt8"> </p></div></div> <div style="min-height: 30px; margin-top: 25px;" class="svelte-1uoiwt8"> </div>',1);function Ot(s,t){nt(t,!0);let e=Y(b(new _)),r=Y("You are X"),l=Y(!0);const f=A.getInstance();function $(){h(e,b(new _)),v(l)?h(r,"You are X"):(h(e,b(v(e).act(f.solve(v(e))))),h(r,"You are O"))}function W(){h(l,!v(l)),$()}function n(N){if(v(e).winner()==w.Empty&&v(e).tiles[N]==w.Empty){let o=v(e).act(N);o.winner()==w.Empty&&o.empty().length>0&&(o=o.act(f.solve(o))),h(e,b(o)),o.winner()!=w.Empty?h(r,"The winner is "+o.winner()+"!"):o.empty().length==0&&h(r,"It's a draw!")}}var F=Mt(),X=ot(F),U=i(X);U.__click=[ft,$];var Z=c(U,2);Z.__click=[wt,W],a(X);var M=c(X,2),d=i(M);d.__click=[dt,n];var V=i(d),S=i(V,!0);a(V),a(d);var m=c(d,2);m.__click=[mt,n];var j=i(m),B=i(j,!0);a(j),a(m);var O=c(m,2);O.__click=[kt,n];var z=i(O),tt=i(z,!0);a(z),a(O),a(M);var T=c(M,2),k=i(T);k.__click=[gt,n];var C=i(k),et=i(C,!0);a(C),a(k);var g=c(k,2);g.__click=[yt,n];var D=i(g),st=i(D,!0);a(D),a(g);var R=c(g,2);R.__click=[xt,n];var G=i(R),it=i(G,!0);a(G),a(R),a(T);var E=c(T,2),y=i(E);y.__click=[qt,n];var H=i(y),at=i(H,!0);a(H),a(y);var x=c(y,2);x.__click=[bt,n];var J=i(x),rt=i(J,!0);a(J),a(x);var I=c(x,2);I.__click=[Xt,n];var K=i(I),lt=i(K,!0);a(K),a(I),a(E);var L=c(E,2),vt=i(L,!0);a(L),_t(()=>{u(S,v(e).tiles[0]),u(B,v(e).tiles[1]),u(tt,v(e).tiles[2]),u(et,v(e).tiles[3]),u(st,v(e).tiles[4]),u(it,v(e).tiles[5]),u(at,v(e).tiles[6]),u(rt,v(e).tiles[7]),u(lt,v(e).tiles[8]),u(vt,v(r))}),P(s,F),ht()}pt(["click"]);var Tt=Q('<div style="margin: auto;"><!></div>');function Ft(s){var t=Tt(),e=i(t);Ot(e,{}),a(t),P(s,t)}export{Ft as component};
