(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function L(){}function _e(e,t){for(const n in t)e[n]=t[n];return e}function Oe(e){return e()}function ke(){return Object.create(null)}function Y(e){e.forEach(Oe)}function he(e){return typeof e=="function"}function x(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Q;function ae(e,t){return Q||(Q=document.createElement("a")),Q.href=t,e===Q.href}function qe(e){return Object.keys(e).length===0}function me(e,...t){if(e==null)return L;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ne(e){let t;return me(e,n=>t=n)(),t}function ge(e,t,n){e.$$.on_destroy.push(me(t,n))}function He(e,t,n,o){if(e){const s=je(e,t,n,o);return e[0](s)}}function je(e,t,n,o){return e[1]&&o?_e(n.ctx.slice(),e[1](o(t))):n.ctx}function Fe(e,t,n,o){if(e[2]&&o){const s=e[2](o(n));if(t.dirty===void 0)return s;if(typeof s=="object"){const l=[],u=Math.max(t.dirty.length,s.length);for(let r=0;r<u;r+=1)l[r]=t.dirty[r]|s[r];return l}return t.dirty|s}return t.dirty}function Ue(e,t,n,o,s,l){if(s){const u=je(t,n,o,l);e.p(u,s)}}function We(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let o=0;o<n;o++)t[o]=-1;return t}return-1}function Ee(e){return e??""}function ce(e,t,n){return e.set(n),t}function m(e,t){e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function j(e){return document.createTextNode(e)}function z(){return j(" ")}function ne(){return j("")}function oe(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function $(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ye(e){return Array.from(e.childNodes)}function ye(e,t){t=""+t,e.data!==t&&(e.data=t)}function Xe(e,t,{bubbles:n=!1,cancelable:o=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,o,t),s}function ee(e,t){return new e(t)}let G;function X(e){G=e}function be(){if(!G)throw new Error("Function called outside component initialization");return G}function Ge(e){be().$$.after_update.push(e)}function Je(e){be().$$.on_destroy.push(e)}function ve(){const e=be();return(t,n,{cancelable:o=!1}={})=>{const s=e.$$.callbacks[t];if(s){const l=Xe(t,n,{cancelable:o});return s.slice().forEach(u=>{u.call(e,l)}),!l.defaultPrevented}return!0}}function Le(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(o=>o.call(this,t))}const F=[],Ae=[];let W=[];const ze=[],Ve=Promise.resolve();let fe=!1;function Be(){fe||(fe=!0,Ve.then(Pe))}function se(){return Be(),Ve}function de(e){W.push(e)}const ue=new Set;let N=0;function Pe(){if(N!==0)return;const e=G;do{try{for(;N<F.length;){const t=F[N];N++,X(t),Ke(t.$$)}}catch(t){throw F.length=0,N=0,t}for(X(null),F.length=0,N=0;Ae.length;)Ae.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];ue.has(n)||(ue.add(n),n())}W.length=0}while(F.length);for(;ze.length;)ze.pop()();fe=!1,ue.clear(),X(e)}function Ke(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(de)}}function Qe(e){const t=[],n=[];W.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),W=t}const Z=new Set;let T;function re(){T={r:0,c:[],p:T}}function ie(){T.r||Y(T.c),T=T.p}function S(e,t){e&&e.i&&(Z.delete(e),e.i(t))}function C(e,t,n,o){if(e&&e.o){if(Z.has(e))return;Z.add(e),T.c.push(()=>{Z.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function xe(e,t){const n={},o={},s={$$scope:1};let l=e.length;for(;l--;){const u=e[l],r=t[l];if(r){for(const i in u)i in r||(o[i]=1);for(const i in r)s[i]||(n[i]=r[i],s[i]=1);e[l]=r}else for(const i in u)s[i]=1}for(const u in o)u in n||(n[u]=void 0);return n}function Re(e){return typeof e=="object"&&e!==null?e:{}}function P(e){e&&e.c()}function V(e,t,n,o){const{fragment:s,after_update:l}=e.$$;s&&s.m(t,n),o||de(()=>{const u=e.$$.on_mount.map(Oe).filter(he);e.$$.on_destroy?e.$$.on_destroy.push(...u):Y(u),e.$$.on_mount=[]}),l.forEach(de)}function B(e,t){const n=e.$$;n.fragment!==null&&(Qe(n.after_update),Y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ze(e,t){e.$$.dirty[0]===-1&&(F.push(e),Be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(e,t,n,o,s,l,u,r=[-1]){const i=G;X(e);const c=e.$$={fragment:null,ctx:[],props:l,update:L,not_equal:s,bound:ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:ke(),dirty:r,skip_bound:!1,root:t.target||i.$$.root};u&&u(c.root);let a=!1;if(c.ctx=n?n(e,t.props||{},(y,f,...v)=>{const h=v.length?v[0]:f;return c.ctx&&s(c.ctx[y],c.ctx[y]=h)&&(!c.skip_bound&&c.bound[y]&&c.bound[y](h),a&&Ze(e,y)),f}):[],c.update(),a=!0,Y(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const y=Ye(t.target);c.fragment&&c.fragment.l(y),y.forEach(b)}else c.fragment&&c.fragment.c();t.intro&&S(e.$$.fragment),V(e,t.target,t.anchor,t.customElement),Pe()}X(i)}class M{$destroy(){B(this,1),this.$destroy=L}$on(t,n){if(!he(n))return L;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(t){this.$$set&&!qe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function le(e){if(!e)throw Error("Parameter args is required");if(!e.component==!e.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(e.component&&(e.asyncComponent=()=>Promise.resolve(e.component)),typeof e.asyncComponent!="function")throw Error("Parameter asyncComponent must be a function");if(e.conditions){Array.isArray(e.conditions)||(e.conditions=[e.conditions]);for(let n=0;n<e.conditions.length;n++)if(!e.conditions[n]||typeof e.conditions[n]!="function")throw Error("Invalid parameter conditions["+n+"]")}return e.loadingComponent&&(e.asyncComponent.loading=e.loadingComponent,e.asyncComponent.loadingParams=e.loadingParams||void 0),{component:e.asyncComponent,userData:e.userData,conditions:e.conditions&&e.conditions.length?e.conditions:void 0,props:e.props&&Object.keys(e.props).length?e.props:{},_sveltesparouter:!0}}const H=[];function De(e,t){return{subscribe:we(e,t).subscribe}}function we(e,t=L){let n;const o=new Set;function s(r){if(x(e,r)&&(e=r,n)){const i=!H.length;for(const c of o)c[1](),H.push(c,e);if(i){for(let c=0;c<H.length;c+=2)H[c][0](H[c+1]);H.length=0}}}function l(r){s(r(e))}function u(r,i=L){const c=[r,i];return o.add(c),o.size===1&&(n=t(s)||L),r(e),()=>{o.delete(c),o.size===0&&n&&(n(),n=null)}}return{set:s,update:l,subscribe:u}}function Me(e,t,n){const o=!Array.isArray(e),s=o?[e]:e,l=t.length<2;return De(n,u=>{let r=!1;const i=[];let c=0,a=L;const y=()=>{if(c)return;a();const v=t(o?i[0]:i,u);l?u(v):a=he(v)?v:L},f=s.map((v,h)=>me(v,I=>{i[h]=I,c&=~(1<<h),r&&y()},()=>{c|=1<<h}));return r=!0,y(),function(){Y(f),a(),r=!1}})}function et(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,o,s,l,u=[],r="",i=e.split("/");for(i[0]||i.shift();s=i.shift();)n=s[0],n==="*"?(u.push("wild"),r+="/(.*)"):n===":"?(o=s.indexOf("?",1),l=s.indexOf(".",1),u.push(s.substring(1,~o?o:~l?l:s.length)),r+=~o&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(r+=(~o?"?":"")+"\\"+s.substring(l))):r+="/"+s;return{keys:u,pattern:new RegExp("^"+r+(t?"(?=$|/)":"/?$"),"i")}}function tt(e){let t,n,o;const s=[e[2]];var l=e[0];function u(r){let i={};for(let c=0;c<s.length;c+=1)i=_e(i,s[c]);return{props:i}}return l&&(t=ee(l,u()),t.$on("routeEvent",e[7])),{c(){t&&P(t.$$.fragment),n=ne()},m(r,i){t&&V(t,r,i),w(r,n,i),o=!0},p(r,i){const c=i&4?xe(s,[Re(r[2])]):{};if(i&1&&l!==(l=r[0])){if(t){re();const a=t;C(a.$$.fragment,1,0,()=>{B(a,1)}),ie()}l?(t=ee(l,u()),t.$on("routeEvent",r[7]),P(t.$$.fragment),S(t.$$.fragment,1),V(t,n.parentNode,n)):t=null}else l&&t.$set(c)},i(r){o||(t&&S(t.$$.fragment,r),o=!0)},o(r){t&&C(t.$$.fragment,r),o=!1},d(r){r&&b(n),t&&B(t,r)}}}function nt(e){let t,n,o;const s=[{params:e[1]},e[2]];var l=e[0];function u(r){let i={};for(let c=0;c<s.length;c+=1)i=_e(i,s[c]);return{props:i}}return l&&(t=ee(l,u()),t.$on("routeEvent",e[6])),{c(){t&&P(t.$$.fragment),n=ne()},m(r,i){t&&V(t,r,i),w(r,n,i),o=!0},p(r,i){const c=i&6?xe(s,[i&2&&{params:r[1]},i&4&&Re(r[2])]):{};if(i&1&&l!==(l=r[0])){if(t){re();const a=t;C(a.$$.fragment,1,0,()=>{B(a,1)}),ie()}l?(t=ee(l,u()),t.$on("routeEvent",r[6]),P(t.$$.fragment),S(t.$$.fragment,1),V(t,n.parentNode,n)):t=null}else l&&t.$set(c)},i(r){o||(t&&S(t.$$.fragment,r),o=!0)},o(r){t&&C(t.$$.fragment,r),o=!1},d(r){r&&b(n),t&&B(t,r)}}}function ot(e){let t,n,o,s;const l=[nt,tt],u=[];function r(i,c){return i[1]?0:1}return t=r(e),n=u[t]=l[t](e),{c(){n.c(),o=ne()},m(i,c){u[t].m(i,c),w(i,o,c),s=!0},p(i,[c]){let a=t;t=r(i),t===a?u[t].p(i,c):(re(),C(u[a],1,1,()=>{u[a]=null}),ie(),n=u[t],n?n.p(i,c):(n=u[t]=l[t](i),n.c()),S(n,1),n.m(o.parentNode,o))},i(i){s||(S(n),s=!0)},o(i){C(n),s=!1},d(i){u[t].d(i),i&&b(o)}}}function Se(){const e=window.location.href.indexOf("#/");let t=e>-1?window.location.href.substr(e+1):"/";const n=t.indexOf("?");let o="";return n>-1&&(o=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:o}}const $e=De(null,function(t){t(Se());const n=()=>{t(Se())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});Me($e,e=>e.location);const st=Me($e,e=>e.querystring),Ie=we(void 0);async function te(e){if(!e||e.length<1||e.charAt(0)!="/"&&e.indexOf("#/")!==0)throw Error("Invalid parameter location");await se(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(e.charAt(0)=="#"?"":"#")+e}async function Te(e){if(!e||e.length<1||e.charAt(0)!="/"&&e.indexOf("#/")!==0)throw Error("Invalid parameter location");await se();const t=(e.charAt(0)=="#"?"":"#")+e;try{const n={...history.state};delete n.__svelte_spa_router_scrollX,delete n.__svelte_spa_router_scrollY,window.history.replaceState(n,void 0,t)}catch{console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event("hashchange"))}function rt(e){e?window.scrollTo(e.__svelte_spa_router_scrollX,e.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function it(e,t,n){let{routes:o={}}=t,{prefix:s=""}=t,{restoreScrollState:l=!1}=t;class u{constructor(d,_){if(!_||typeof _!="function"&&(typeof _!="object"||_._sveltesparouter!==!0))throw Error("Invalid component object");if(!d||typeof d=="string"&&(d.length<1||d.charAt(0)!="/"&&d.charAt(0)!="*")||typeof d=="object"&&!(d instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:k,keys:E}=et(d);this.path=d,typeof _=="object"&&_._sveltesparouter===!0?(this.component=_.component,this.conditions=_.conditions||[],this.userData=_.userData,this.props=_.props||{}):(this.component=()=>Promise.resolve(_),this.conditions=[],this.props={}),this._pattern=k,this._keys=E}match(d){if(s){if(typeof s=="string")if(d.startsWith(s))d=d.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const R=d.match(s);if(R&&R[0])d=d.substr(R[0].length)||"/";else return null}}const _=this._pattern.exec(d);if(_===null)return null;if(this._keys===!1)return _;const k={};let E=0;for(;E<this._keys.length;){try{k[this._keys[E]]=decodeURIComponent(_[E+1]||"")||null}catch{k[this._keys[E]]=null}E++}return k}async checkConditions(d){for(let _=0;_<this.conditions.length;_++)if(!await this.conditions[_](d))return!1;return!0}}const r=[];o instanceof Map?o.forEach((p,d)=>{r.push(new u(d,p))}):Object.keys(o).forEach(p=>{r.push(new u(p,o[p]))});let i=null,c=null,a={};const y=ve();async function f(p,d){await se(),y(p,d)}let v=null,h=null;l&&(h=p=>{p.state&&(p.state.__svelte_spa_router_scrollY||p.state.__svelte_spa_router_scrollX)?v=p.state:v=null},window.addEventListener("popstate",h),Ge(()=>{rt(v)}));let I=null,A=null;const O=$e.subscribe(async p=>{I=p;let d=0;for(;d<r.length;){const _=r[d].match(p.location);if(!_){d++;continue}const k={route:r[d].path,location:p.location,querystring:p.querystring,userData:r[d].userData,params:_&&typeof _=="object"&&Object.keys(_).length?_:null};if(!await r[d].checkConditions(k)){n(0,i=null),A=null,f("conditionsFailed",k);return}f("routeLoading",Object.assign({},k));const E=r[d].component;if(A!=E){E.loading?(n(0,i=E.loading),A=E,n(1,c=E.loadingParams),n(2,a={}),f("routeLoaded",Object.assign({},k,{component:i,name:i.name,params:c}))):(n(0,i=null),A=null);const R=await E();if(p!=I)return;n(0,i=R&&R.default||R),A=E}_&&typeof _=="object"&&Object.keys(_).length?n(1,c=_):n(1,c=null),n(2,a=r[d].props),f("routeLoaded",Object.assign({},k,{component:i,name:i.name,params:c})).then(()=>{Ie.set(c)});return}n(0,i=null),A=null,Ie.set(void 0)});Je(()=>{O(),h&&window.removeEventListener("popstate",h)});function q(p){Le.call(this,e,p)}function K(p){Le.call(this,e,p)}return e.$$set=p=>{"routes"in p&&n(3,o=p.routes),"prefix"in p&&n(4,s=p.prefix),"restoreScrollState"in p&&n(5,l=p.restoreScrollState)},e.$$.update=()=>{e.$$.dirty&32&&(history.scrollRestoration=l?"manual":"auto")},[i,c,a,o,s,l,q,K]}class lt extends M{constructor(t){super(),D(this,t,it,ot,x,{routes:3,prefix:4,restoreScrollState:5})}}const ct="/assets/svelte-a39f39b7.svg";function ut(e){let t,n,o,s,l,u,r,i,c,a,y,f,v,h,I,A,O,q,K,p,d,_;return{c(){t=g("article"),t.innerHTML=`<section class="svelte-y6vz37"><h2 class="svelte-y6vz37">Pages in Storybook</h2> 
    <p class="svelte-y6vz37">We recommend building UIs with a
      <a href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e" target="_blank" rel="noopener noreferrer" class="svelte-y6vz37"><strong>component-driven</strong></a>
      process starting with atomic components and ending with pages.</p> 
    <p class="svelte-y6vz37">Render pages with mock data. This makes it easy to build and review page states without
      needing to navigate to them in your app. Here are some handy patterns for managing page data
      in Storybook:</p> 
    <ul class="svelte-y6vz37"><li class="svelte-y6vz37">Use a higher-level connected component. Storybook helps you compose such data from the
        &quot;args&quot; of child component stories</li> 
      <li class="svelte-y6vz37">Assemble data in the page component from your services. You can mock these services out
        using Storybook.</li></ul> 
    <p class="svelte-y6vz37">Get a guided tutorial on component-driven development at
      <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer" class="svelte-y6vz37">Storybook tutorials</a>
      . Read more in the
      <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer" class="svelte-y6vz37">docs</a>
      .</p> 
    <div class="tip-wrapper svelte-y6vz37"><span class="tip svelte-y6vz37">Tip</span>
      Adjust the width of the canvas with the
      <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" class="svelte-y6vz37"><g fill="none" fill-rule="evenodd"><path d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0
            01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0
            010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z" id="a" fill="#999" class="svelte-y6vz37"></path></g></svg>
      Viewports addon in the toolbar</div></section>`,n=z(),o=g("article"),s=g("section"),l=g("h2"),l.textContent="Image referencing",u=z(),r=g("p"),r.textContent=`To test if all image imports are working consistently, there's 3 images that should be the
      same visually, but were referenced differently. If you see only two images, there's something
      wrong!`,i=z(),c=g("div"),a=z(),y=g("img"),v=z(),h=g("div"),I=z(),A=g("article"),O=g("section"),q=g("h2"),q.textContent=".env variables",K=z(),p=g("p"),p.innerHTML=`Only variables starting with <span class="pre">VITE_</span> will be available to access via
      <span class="pre">{"VITE_WILL_BE_AVAILABLE":"by using import.meta.env.VITE_WILL_BE_AVAILABLE","BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":false}</span>`,d=z(),_=g("pre"),_.textContent=`{"VITE_WILL_BE_AVAILABLE":"by using import.meta.env.VITE_WILL_BE_AVAILABLE","BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":false}: ${JSON.stringify({VITE_WILL_BE_AVAILABLE:"by using import.meta.env.VITE_WILL_BE_AVAILABLE",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},void 0,4)}`,$(l,"class","svelte-y6vz37"),$(r,"class","svelte-y6vz37"),$(c,"class","background-image svelte-y6vz37"),ae(y.src,f=ct)||$(y,"src",f),$(y,"alt","A"),$(y,"class","image-tag svelte-y6vz37"),$(h,"class","background-image-globally"),$(s,"class","svelte-y6vz37"),$(q,"class","svelte-y6vz37"),$(p,"class","svelte-y6vz37"),$(O,"class","svelte-y6vz37")},m(k,E){w(k,t,E),w(k,n,E),w(k,o,E),m(o,s),m(s,l),m(s,u),m(s,r),m(s,i),m(s,c),m(s,a),m(s,y),m(s,v),m(s,h),w(k,I,E),w(k,A,E),m(A,O),m(O,q),m(O,K),m(O,p),m(O,d),m(O,_)},p:L,i:L,o:L,d(k){k&&b(t),k&&b(n),k&&b(o),k&&b(I),k&&b(A)}}}class at extends M{constructor(t){super(),D(this,t,null,ut,x,{})}}function ft(e){let t,n,o,s,l,u,r,i;return{c(){t=g("h1"),t.textContent="403 - Forbidden",n=z(),o=g("p"),s=j(e[0]),l=z(),u=g("button"),u.textContent="Go home"},m(c,a){w(c,t,a),w(c,n,a),w(c,o,a),m(o,s),w(c,l,a),w(c,u,a),r||(i=oe(u,"click",e[1]),r=!0)},p(c,[a]){a&1&&ye(s,c[0])},i:L,o:L,d(c){c&&b(t),c&&b(n),c&&b(o),c&&b(l),c&&b(u),r=!1,i()}}}function dt(e,t,n){let o;return ge(e,st,l=>n(0,o=l)),[o,()=>{te("/").catch(l=>{throw l})}]}class pt extends M{constructor(t){super(),D(this,t,dt,ft,x,{})}}function _t(e){let t;return{c(){t=g("h1"),t.textContent="404 - Not Found"},m(n,o){w(n,t,o)},p:L,i:L,o:L,d(n){n&&b(t)}}}class ht extends M{constructor(t){super(),D(this,t,null,_t,x,{})}}const U=we(null);function Ce(e){let t,n,o=e[0].name+"",s,l,u,r,i;return{c(){t=g("article"),n=g("h1"),s=j(o),l=z(),u=g("img"),ae(u.src,r=e[0].image)||$(u,"src",r),$(u,"alt",i=e[0].name+"'s profile picture"),$(u,"class","svelte-1l7mm2s")},m(c,a){w(c,t,a),m(t,n),m(n,s),m(t,l),m(t,u)},p(c,a){a&1&&o!==(o=c[0].name+"")&&ye(s,o),a&1&&!ae(u.src,r=c[0].image)&&$(u,"src",r),a&1&&i!==(i=c[0].name+"'s profile picture")&&$(u,"alt",i)},d(c){c&&b(t)}}}function mt(e){let t,n=e[0]&&Ce(e);return{c(){n&&n.c(),t=ne()},m(o,s){n&&n.m(o,s),w(o,t,s)},p(o,[s]){o[0]?n?n.p(o,s):(n=Ce(o),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:L,o:L,d(o){n&&n.d(o),o&&b(t)}}}function gt(e,t,n){let o;return ge(e,U,s=>n(0,o=s)),[o]}class yt extends M{constructor(t){super(),D(this,t,gt,mt,x,{})}}const bt=()=>Ne(U)!==null,J=new Map;J.set("/",le({component:at}));J.set("/profile",le({component:yt,conditions:[bt]}));J.set("/not-authorized",le({component:pt}));J.set("*",le({component:ht}));function vt({detail:e}){if(!window.location.hash.startsWith("#/")){const{search:t}=window.location;window.history.replaceState(null,"",`${window.location.origin}${window.location.pathname}`),Te(e.location+t).catch(n=>{throw n})}}async function wt(e){const{route:t}=e.detail;await Te(`/not-authorized?route=${t}`)}const $t="/assets/Luna-cd2f53c6.jpg";function kt(e){let t,n,o,s,l;const u=e[7].default,r=He(u,e,e[6],null);return{c(){t=g("button"),r&&r.c(),$(t,"type","button"),$(t,"class",n=Ee(["storybook-button",`storybook-button--${e[0]}`,e[2]].join(" "))+" svelte-fztlcy"),$(t,"style",e[1])},m(i,c){w(i,t,c),r&&r.m(t,null),o=!0,s||(l=oe(t,"click",e[3]),s=!0)},p(i,[c]){r&&r.p&&(!o||c&64)&&Ue(r,u,i,i[6],o?Fe(u,i[6],c,null):We(i[6]),null),(!o||c&5&&n!==(n=Ee(["storybook-button",`storybook-button--${i[0]}`,i[2]].join(" "))+" svelte-fztlcy"))&&$(t,"class",n),(!o||c&2)&&$(t,"style",i[1])},i(i){o||(S(r,i),o=!0)},o(i){C(r,i),o=!1},d(i){i&&b(t),r&&r.d(i),s=!1,l()}}}function Et(e,t,n){let o,s,{$$slots:l={},$$scope:u}=t,{primary:r=!1}=t,{backgroundColor:i=void 0}=t,{size:c}=t;const a=ve();function y(){a("click")}return e.$$set=f=>{"primary"in f&&n(4,r=f.primary),"backgroundColor"in f&&n(5,i=f.backgroundColor),"size"in f&&n(0,c=f.size),"$$scope"in f&&n(6,u=f.$$scope)},e.$$.update=()=>{e.$$.dirty&16&&n(2,o=r?"storybook-button--primary":"storybook-button--secondary"),e.$$.dirty&32&&n(1,s=i?`background-color: ${i}`:"")},[c,s,o,y,r,i,u,l]}class pe extends M{constructor(t){super(),D(this,t,Et,kt,x,{primary:4,backgroundColor:5,size:0})}}function Lt(e){let t,n,o,s;return t=new pe({props:{size:"small",$$slots:{default:[zt]},$$scope:{ctx:e}}}),t.$on("click",e[1]),o=new pe({props:{primary:!0,size:"small",$$slots:{default:[St]},$$scope:{ctx:e}}}),o.$on("click",e[3]),{c(){P(t.$$.fragment),n=z(),P(o.$$.fragment)},m(l,u){V(t,l,u),w(l,n,u),V(o,l,u),s=!0},p(l,u){const r={};u&128&&(r.$$scope={dirty:u,ctx:l}),t.$set(r);const i={};u&128&&(i.$$scope={dirty:u,ctx:l}),o.$set(i)},i(l){s||(S(t.$$.fragment,l),S(o.$$.fragment,l),s=!0)},o(l){C(t.$$.fragment,l),C(o.$$.fragment,l),s=!1},d(l){B(t,l),l&&b(n),B(o,l)}}}function At(e){let t,n,o,s=e[0].name+"",l,u,r,i,c,a,y;return i=new pe({props:{size:"small",$$slots:{default:[It]},$$scope:{ctx:e}}}),i.$on("click",e[2]),{c(){t=g("span"),n=j("Welcome, "),o=g("b"),l=j(s),u=j("!"),r=z(),P(i.$$.fragment),$(t,"class","welcome svelte-1hlocu8")},m(f,v){w(f,t,v),m(t,n),m(t,o),m(o,l),m(t,u),w(f,r,v),V(i,f,v),c=!0,a||(y=oe(t,"click",e[5]),a=!0)},p(f,v){(!c||v&1)&&s!==(s=f[0].name+"")&&ye(l,s);const h={};v&128&&(h.$$scope={dirty:v,ctx:f}),i.$set(h)},i(f){c||(S(i.$$.fragment,f),c=!0)},o(f){C(i.$$.fragment,f),c=!1},d(f){f&&b(t),f&&b(r),B(i,f),a=!1,y()}}}function zt(e){let t;return{c(){t=j("Log in")},m(n,o){w(n,t,o)},d(n){n&&b(t)}}}function St(e){let t;return{c(){t=j("Sign up")},m(n,o){w(n,t,o)},d(n){n&&b(t)}}}function It(e){let t;return{c(){t=j("Log out")},m(n,o){w(n,t,o)},d(n){n&&b(t)}}}function Ct(e){let t,n,o,s,l,u,r,i,c,a;const y=[At,Lt],f=[];function v(h,I){return h[0]?0:1}return u=v(e),r=f[u]=y[u](e),{c(){t=g("header"),n=g("div"),o=g("div"),o.innerHTML=`<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="svelte-1hlocu8"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg> 
      <h1 class="svelte-1hlocu8">Acme</h1>`,s=z(),l=g("div"),r.c(),$(o,"class","logo svelte-1hlocu8"),$(n,"class","wrapper svelte-1hlocu8")},m(h,I){w(h,t,I),m(t,n),m(n,o),m(n,s),m(n,l),f[u].m(l,null),i=!0,c||(a=oe(o,"click",e[4]),c=!0)},p(h,[I]){let A=u;u=v(h),u===A?f[u].p(h,I):(re(),C(f[A],1,1,()=>{f[A]=null}),ie(),r=f[u],r?r.p(h,I):(r=f[u]=y[u](h),r.c()),S(r,1),r.m(l,null))},i(h){i||(S(r),i=!0)},o(h){C(r),i=!1},d(h){h&&b(t),f[u].d(),c=!1,a()}}}function Ot(e,t,n){let{user:o=null}=t;const s=ve();function l(){s("login")}function u(){s("logout")}function r(){s("createAccount")}const i=()=>{te("/").catch(a=>{throw a})},c=()=>{te("/profile").catch(a=>{throw a})};return e.$$set=a=>{"user"in a&&n(0,o=a.user)},[o,l,u,r,i,c]}class jt extends M{constructor(t){super(),D(this,t,Ot,Ct,x,{user:0})}}function Vt(e){let t,n,o,s,l,u;return n=new jt({props:{user:e[0]}}),n.$on("login",e[2]),n.$on("logout",e[3]),n.$on("createAccount",e[4]),l=new lt({props:{routes:J}}),l.$on("routeLoading",vt),l.$on("conditionsFailed",wt),{c(){t=g("header"),P(n.$$.fragment),o=z(),s=g("main"),P(l.$$.fragment)},m(r,i){w(r,t,i),V(n,t,null),w(r,o,i),w(r,s,i),V(l,s,null),u=!0},p(r,[i]){const c={};i&1&&(c.user=r[0]),n.$set(c)},i(r){u||(S(n.$$.fragment,r),S(l.$$.fragment,r),u=!0)},o(r){C(n.$$.fragment,r),C(l.$$.fragment,r),u=!1},d(r){r&&b(t),B(n),r&&b(o),r&&b(s),B(l)}}}function Bt(e,t,n){let o;ge(e,U,i=>n(0,o=i));const s={name:"João Silva",image:$t};return[o,s,()=>ce(U,o=s,o),()=>{te("/").then(async()=>{await se(),ce(U,o=null,o)}).catch(i=>{throw i})},()=>ce(U,o=s,o)]}class Pt extends M{constructor(t){super(),D(this,t,Bt,Vt,x,{})}}new Pt({target:document.getElementById("app")});
