import{S as J,i as P,s as V,k as p,l as w,n as d,I as O,b as n,B as j,h as s,q as v,a as A,m as M,r as K,c as U,G as N,u as Q,J as G}from"../../chunks/index-48d6358e.js";import{b as D}from"../../chunks/paths-b4419565.js";function R(t){let a,o;return{c(){a=p("img"),this.h()},l(e){a=w(e,"IMG",{class:!0,style:!0,width:!0,height:!0,src:!0}),this.h()},h(){d(a,"class","animate-spin absolute select-none"),d(a,"style",`left: ${t[0][0]}%; top: ${t[0][1]}%; z-index: ${t[0][4]};`),d(a,"width",t[0][2]*332),d(a,"height",t[0][2]*477),O(a.src,o=`${D||""}/${t[0][3]}.png`)||d(a,"src",o)},m(e,r){n(e,a,r)},p:j,i:j,o:j,d(e){e&&s(a)}}}function T(t,a,o){let{width:e}=a,{height:r}=a,{scale:h}=a,{character:g}=a,{counter:_}=a;const m=[e,r,h,g,_];return t.$$set=f=>{"width"in f&&o(1,e=f.width),"height"in f&&o(2,r=f.height),"scale"in f&&o(3,h=f.scale),"character"in f&&o(4,g=f.character),"counter"in f&&o(5,_=f.counter)},[m,e,r,h,g,_]}class W extends J{constructor(a){super(),P(this,a,T,R,V,{width:1,height:2,scale:3,character:4,counter:5})}}function X(t){let a,o,e,r,h,g,_,m,f,q,b,C,u,c,z,S,y,F,k,E,B,L,I,H;return{c(){a=p("div"),o=v(t[1]),r=A(),h=p("audio"),_=A(),m=p("audio"),q=A(),b=p("audio"),u=A(),c=p("audio"),S=A(),y=p("audio"),k=A(),E=p("audio"),L=A(),I=p("audio"),this.h()},l(i){a=w(i,"DIV",{class:!0,style:!0});var l=M(a);o=K(l,t[1]),l.forEach(s),r=U(i),h=w(i,"AUDIO",{src:!0}),M(h).forEach(s),_=U(i),m=w(i,"AUDIO",{src:!0}),M(m).forEach(s),q=U(i),b=w(i,"AUDIO",{src:!0}),M(b).forEach(s),u=U(i),c=w(i,"AUDIO",{src:!0}),M(c).forEach(s),S=U(i),y=w(i,"AUDIO",{src:!0}),M(y).forEach(s),k=U(i),E=w(i,"AUDIO",{src:!0}),M(E).forEach(s),L=U(i),I=w(i,"AUDIO",{src:!0}),M(I).forEach(s),this.h()},h(){d(a,"class","absolute top-1 right-1 text-white font-sans text-xl bg-black px-2"),d(a,"style",e=`z-index: ${t[1]+1}`),O(h.src,g=D+"/audio/hamood.mp3")||d(h,"src",g),O(m.src,f=D+"/audio/hamood-2.mp3")||d(m,"src",f),O(b.src,C=D+"/audio/hamood-habibi-hamood.mp3")||d(b,"src",C),O(c.src,z=D+"/audio/goumganmeninoma.mp3")||d(c,"src",z),O(y.src,F=D+"/audio/goumganmeninoma-2.mp3")||d(y,"src",F),O(E.src,B=D+"/audio/ye-amad-hamadi.mp3")||d(E,"src",B),O(I.src,H=D+"/audio/secret.mp3")||d(I,"src",H)},m(i,l){n(i,a,l),N(a,o),n(i,r,l),n(i,h,l),t[2](h),n(i,_,l),n(i,m,l),t[3](m),n(i,q,l),n(i,b,l),t[4](b),n(i,u,l),n(i,c,l),t[5](c),n(i,S,l),n(i,y,l),t[6](y),n(i,k,l),n(i,E,l),t[7](E),n(i,L,l),n(i,I,l),t[8](I)},p(i,[l]){l&2&&Q(o,i[1]),l&2&&e!==(e=`z-index: ${i[1]+1}`)&&d(a,"style",e)},i:j,o:j,d(i){i&&s(a),i&&s(r),i&&s(h),t[2](null),i&&s(_),i&&s(m),t[3](null),i&&s(q),i&&s(b),t[4](null),i&&s(u),i&&s(c),t[5](null),i&&s(S),i&&s(y),t[6](null),i&&s(k),i&&s(E),t[7](null),i&&s(L),i&&s(I),t[8](null)}}}function Y(t,a,o){let e={},r=0,h=()=>{let c=Math.floor(Math.random()*1e3)==0?"ohmahgawd":"hamood",z,S=Math.random()*100-4,y=Math.random()*100-10,F=Math.random()*.6+.1;if(c=="ohmahgawd")z=e.ohmahgawd;else{let k=Object.keys(e)[Math.floor(Math.random()*(Object.keys(e).length-1))];console.log(k),z=e[k]}z.play(),o(1,r++,r),new W({target:document.body,props:{width:S,height:y,scale:F,character:c,counter:r}})};document.body.addEventListener("click",h),document.addEventListener("keyup",u=>{u.code=="Space"&&h()});function g(u){G[u?"unshift":"push"](()=>{e.hamood=u,o(0,e)})}function _(u){G[u?"unshift":"push"](()=>{e["hamood-2"]=u,o(0,e)})}function m(u){G[u?"unshift":"push"](()=>{e["hamood-habibi-hamood"]=u,o(0,e)})}function f(u){G[u?"unshift":"push"](()=>{e.goumganmeninoma=u,o(0,e)})}function q(u){G[u?"unshift":"push"](()=>{e["goumganmeninoma-2"]=u,o(0,e)})}function b(u){G[u?"unshift":"push"](()=>{e["ye-amad-hamadi"]=u,o(0,e)})}function C(u){G[u?"unshift":"push"](()=>{e.ohmahgawd=u,o(0,e)})}return[e,r,g,_,m,f,q,b,C]}class $ extends J{constructor(a){super(),P(this,a,Y,X,V,{})}}export{$ as default};
