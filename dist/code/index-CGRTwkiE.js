(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i=globalThis,hs=_i.ShadowRoot&&(_i.ShadyCSS===void 0||_i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,us=Symbol(),Es=new WeakMap;let uo=class{constructor(e,i,s){if(this._$cssResult$=!0,s!==us)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(hs&&e===void 0){const s=i!==void 0&&i.length===1;s&&(e=Es.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Es.set(i,e))}return e}toString(){return this.cssText}};const Qo=t=>new uo(typeof t=="string"?t:t+"",void 0,us),S=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((s,o,a)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[a+1],t[0]);return new uo(i,t,us)},Zo=(t,e)=>{if(hs)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const s=document.createElement("style"),o=_i.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}},Ds=hs?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const s of e.cssRules)i+=s.cssText;return Qo(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Jo,defineProperty:tr,getOwnPropertyDescriptor:er,getOwnPropertyNames:ir,getOwnPropertySymbols:sr,getPrototypeOf:or}=Object,Di=globalThis,Ts=Di.trustedTypes,rr=Ts?Ts.emptyScript:"",ar=Di.reactiveElementPolyfillSupport,We=(t,e)=>t,Ae={toAttribute(t,e){switch(e){case Boolean:t=t?rr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},ps=(t,e)=>!Jo(t,e),Ls={attribute:!0,type:String,converter:Ae,reflect:!1,hasChanged:ps};Symbol.metadata??=Symbol("metadata"),Di.litPropertyMetadata??=new WeakMap;class $e extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=Ls){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(e,i),!i.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(e,s,i);o!==void 0&&tr(this.prototype,e,o)}}static getPropertyDescriptor(e,i,s){const{get:o,set:a}=er(this.prototype,e)??{get(){return this[i]},set(n){this[i]=n}};return{get(){return o?.call(this)},set(n){const d=o?.call(this);a.call(this,n),this.requestUpdate(e,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ls}static _$Ei(){if(this.hasOwnProperty(We("elementProperties")))return;const e=or(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(We("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(We("properties"))){const i=this.properties,s=[...ir(i),...sr(i)];for(const o of s)this.createProperty(o,i[o])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[s,o]of i)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[i,s]of this.elementProperties){const o=this._$Eu(i,s);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const o of s)i.unshift(Ds(o))}else e!==void 0&&i.push(Ds(e));return i}static _$Eu(e,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Zo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,i,s){this._$AK(e,s)}_$EC(e,i){const s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(o!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:Ae).toAttribute(i,s.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,i){const s=this.constructor,o=s._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=s.getPropertyOptions(o),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Ae;this._$Em=o,this[o]=n.fromAttribute(i,a.type),this._$Em=null}}requestUpdate(e,i,s){if(e!==void 0){if(s??=this.constructor.getPropertyOptions(e),!(s.hasChanged??ps)(this[e],i))return;this.P(e,i,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,i,s){this._$AL.has(e)||this._$AL.set(e,i),s.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(i)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(i=>this._$EC(i,this[i])),this._$EU()}updated(e){}firstUpdated(e){}}$e.elementStyles=[],$e.shadowRootOptions={mode:"open"},$e[We("elementProperties")]=new Map,$e[We("finalized")]=new Map,ar?.({ReactiveElement:$e}),(Di.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fs=globalThis,ki=fs.trustedTypes,Os=ki?ki.createPolicy("lit-html",{createHTML:t=>t}):void 0,po="$lit$",ie=`lit$${(Math.random()+"").slice(9)}$`,fo="?"+ie,nr=`<${fo}>`,fe=document,Qe=()=>fe.createComment(""),Ze=t=>t===null||typeof t!="object"&&typeof t!="function",mo=Array.isArray,lr=t=>mo(t)||typeof t?.[Symbol.iterator]=="function",Fi=`[ 	
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Is=/-->/g,Ps=/>/g,de=RegExp(`>|${Fi}(?:([^\\s"'>=/]+)(${Fi}*=${Fi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ms=/'/g,Rs=/"/g,go=/^(?:script|style|textarea|title)$/i,cr=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),b=cr(1),kt=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Fs=new WeakMap,ue=fe.createTreeWalker(fe,129);function bo(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Os!==void 0?Os.createHTML(e):e}const dr=(t,e)=>{const i=t.length-1,s=[];let o,a=e===2?"<svg>":"",n=Me;for(let d=0;d<i;d++){const c=t[d];let h,m,u=-1,p=0;for(;p<c.length&&(n.lastIndex=p,m=n.exec(c),m!==null);)p=n.lastIndex,n===Me?m[1]==="!--"?n=Is:m[1]!==void 0?n=Ps:m[2]!==void 0?(go.test(m[2])&&(o=RegExp("</"+m[2],"g")),n=de):m[3]!==void 0&&(n=de):n===de?m[0]===">"?(n=o??Me,u=-1):m[1]===void 0?u=-2:(u=n.lastIndex-m[2].length,h=m[1],n=m[3]===void 0?de:m[3]==='"'?Rs:Ms):n===Rs||n===Ms?n=de:n===Is||n===Ps?n=Me:(n=de,o=void 0);const f=n===de&&t[d+1].startsWith("/>")?" ":"";a+=n===Me?c+nr:u>=0?(s.push(h),c.slice(0,u)+po+c.slice(u)+ie+f):c+ie+(u===-2?d:f)}return[bo(t,a+(t[i]||"<?>")+(e===2?"</svg>":"")),s]};class Je{constructor({strings:e,_$litType$:i},s){let o;this.parts=[];let a=0,n=0;const d=e.length-1,c=this.parts,[h,m]=dr(e,i);if(this.el=Je.createElement(h,s),ue.currentNode=this.el.content,i===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=ue.nextNode())!==null&&c.length<d;){if(o.nodeType===1){if(o.hasAttributes())for(const u of o.getAttributeNames())if(u.endsWith(po)){const p=m[n++],f=o.getAttribute(u).split(ie),g=/([.?@])?(.*)/.exec(p);c.push({type:1,index:a,name:g[2],strings:f,ctor:g[1]==="."?ur:g[1]==="?"?pr:g[1]==="@"?fr:Ti}),o.removeAttribute(u)}else u.startsWith(ie)&&(c.push({type:6,index:a}),o.removeAttribute(u));if(go.test(o.tagName)){const u=o.textContent.split(ie),p=u.length-1;if(p>0){o.textContent=ki?ki.emptyScript:"";for(let f=0;f<p;f++)o.append(u[f],Qe()),ue.nextNode(),c.push({type:2,index:++a});o.append(u[p],Qe())}}}else if(o.nodeType===8)if(o.data===fo)c.push({type:2,index:a});else{let u=-1;for(;(u=o.data.indexOf(ie,u+1))!==-1;)c.push({type:7,index:a}),u+=ie.length-1}a++}}static createElement(e,i){const s=fe.createElement("template");return s.innerHTML=e,s}}function Ee(t,e,i=t,s){if(e===kt)return e;let o=s!==void 0?i._$Co?.[s]:i._$Cl;const a=Ze(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(t),o._$AT(t,i,s)),s!==void 0?(i._$Co??=[])[s]=o:i._$Cl=o),o!==void 0&&(e=Ee(t,o._$AS(t,e.values),o,s)),e}class hr{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:s}=this._$AD,o=(e?.creationScope??fe).importNode(i,!0);ue.currentNode=o;let a=ue.nextNode(),n=0,d=0,c=s[0];for(;c!==void 0;){if(n===c.index){let h;c.type===2?h=new ii(a,a.nextSibling,this,e):c.type===1?h=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(h=new mr(a,this,e)),this._$AV.push(h),c=s[++d]}n!==c?.index&&(a=ue.nextNode(),n++)}return ue.currentNode=fe,o}p(e){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}}class ii{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,s,o){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=Ee(this,e,i),Ze(e)?e===K||e==null||e===""?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==kt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):lr(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==K&&Ze(this._$AH)?this._$AA.nextSibling.data=e:this.T(fe.createTextNode(e)),this._$AH=e}$(e){const{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Je.createElement(bo(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(i);else{const a=new hr(o,this),n=a.u(this.options);a.p(i),this.T(n),this._$AH=a}}_$AC(e){let i=Fs.get(e.strings);return i===void 0&&Fs.set(e.strings,i=new Je(e)),i}k(e){mo(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,o=0;for(const a of e)o===i.length?i.push(s=new ii(this.S(Qe()),this.S(Qe()),this,this.options)):s=i[o],s._$AI(a),o++;o<i.length&&(this._$AR(s&&s._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Ti{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,s,o,a){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=i,this._$AM=o,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=K}_$AI(e,i=this,s,o){const a=this.strings;let n=!1;if(a===void 0)e=Ee(this,e,i,0),n=!Ze(e)||e!==this._$AH&&e!==kt,n&&(this._$AH=e);else{const d=e;let c,h;for(e=a[0],c=0;c<a.length-1;c++)h=Ee(this,d[s+c],i,c),h===kt&&(h=this._$AH[c]),n||=!Ze(h)||h!==this._$AH[c],h===K?e=K:e!==K&&(e+=(h??"")+a[c+1]),this._$AH[c]=h}n&&!o&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ur extends Ti{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}let pr=class extends Ti{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}};class fr extends Ti{constructor(e,i,s,o,a){super(e,i,s,o,a),this.type=5}_$AI(e,i=this){if((e=Ee(this,e,i,0)??K)===kt)return;const s=this._$AH,o=e===K&&s!==K||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==K&&(s===K||o);o&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class mr{constructor(e,i,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Ee(this,e)}}const gr=fs.litHtmlPolyfillSupport;gr?.(Je,ii),(fs.litHtmlVersions??=[]).push("3.1.2");const br=(t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(o===void 0){const a=i?.renderBefore??null;s._$litPart$=o=new ii(e.insertBefore(Qe(),a),a,void 0,i??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pt=class extends $e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=br(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return kt}};Pt._$litElement$=!0,Pt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Pt});const vr=globalThis.litElementPolyfillSupport;vr?.({LitElement:Pt});(globalThis.litElementVersions??=[]).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ms=t=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yr={attribute:!0,type:String,converter:Ae,reflect:!1,hasChanged:ps},wr=(t=yr,e,i)=>{const{kind:s,metadata:o}=i;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(i.name,t),s==="accessor"){const{name:n}=i;return{set(d){const c=e.get.call(this);e.set.call(this,d),this.requestUpdate(n,c,t)},init(d){return d!==void 0&&this.P(n,void 0,t),d}}}if(s==="setter"){const{name:n}=i;return function(d){const c=this[n];e.call(this,d),this.requestUpdate(n,c,t)}}throw Error("Unsupported decorator location: "+s)};function l(t){return(e,i)=>typeof i=="object"?wr(t,e,i):((s,o,a)=>{const n=o.hasOwnProperty(a);return o.constructor.createProperty(a,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(o,a):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gs(t){return(e,i)=>{const s=typeof e=="function"?e:e[i];Object.assign(s,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gi=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(t,e){return(i,s,o)=>{const a=n=>n.renderRoot?.querySelector(t)??null;if(e){const{get:n,set:d}=typeof s=="object"?i:o??(()=>{const c=Symbol();return{get(){return this[c]},set(h){this[c]=h}}})();return Gi(i,s,{get(){let c=n.call(this);return c===void 0&&(c=a(this),(c!==null||this.hasUpdated)&&d.call(this,c)),c}})}return Gi(i,s,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _r(t){return(e,i)=>Gi(e,i,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},si=t=>(...e)=>({_$litDirective$:t,values:e});let oi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,s){this._$Ct=e,this._$AM=i,this._$Ci=s}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qi=class extends oi{constructor(e){if(super(e),this.it=K,e.type!==Nt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===K||e==null)return this._t=void 0,this.it=e;if(e===kt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const i=[e];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};Qi.directiveName="unsafeHTML",Qi.resultType=1;const Se=si(Qi),xr=new Map([["Battleaxe",{damage:"1d10",twoHanded:!0,cost:7,melee:!0}],["Blackjack",{damage:"1d3",sneakDamage:"2d6",cost:3,subdualDamage:!0,melee:!0}],["Club",{damage:"1d4",cost:3,melee:!0}],["Flail",{damage:"1d6",cost:6,melee:!0}],["Garrote",{damage:"1",sneakDamage:"3d4",cost:2,melee:!0}],["Lance",{damage:"1d12",cost:25,onlyUsableWhileMounted:!0,doubleDamageMountedCharging:!0,melee:!0}],["Longsword",{damage:"1d8",cost:10,melee:!0}],["Mace",{damage:"1d6",cost:5,melee:!0}],["Polearm",{damage:"1d10",cost:7,twoHanded:!0,melee:!0}],["Short sword",{damage:"1d6",cost:7,melee:!0}],["Spear",{damage:"1d8",cost:3,doubleDamageMountedCharging:!0,melee:!0}],["Staff",{damage:"1d4",cost:.5,melee:!0}],["Two-handed sword",{damage:"1d10",cost:15,twoHanded:!0,melee:!0}],["Warhammer",{damage:"1d8",cost:5,melee:!0}],["Blowgun",{range:{short:20,medium:40,long:60},damage:"1d3",sneakDamage:"1d5",cost:6,melee:!1,missile:!0}],["Crossbow",{range:{short:80,medium:160,long:240},damage:"1d6",twoHanded:!0,cost:30,melee:!1,missile:!0}],["Dagger",{range:{short:10,medium:20,long:30},damage:"1d4",sneakDamage:"1d10",thrown:!0,cost:3,addStrengthToDamageAtShortRange:!0,melee:!0,missile:!0}],["Dart",{range:{short:20,medium:40,long:60},damage:"1d3",thrown:!0,cost:.5,addStrengthToDamageAtShortRange:!0,melee:!1,missile:!0}],["Handaxe",{range:{short:10,medium:20,long:30},damage:"1d3",thrown:!0,cost:4,addStrengthToDamageAtShortRange:!0,melee:!0,missile:!0}],["Javelin",{range:{short:30,medium:60,long:90},damage:"1d3",thrown:!0,cost:1,addStrengthToDamageAtShortRange:!0,melee:!1,missile:!0}],["Longbow",{range:{short:70,medium:140,long:210},damage:"1d6",twoHanded:!0,cost:40,melee:!1,missile:!0}],["Shortbow",{range:{short:50,medium:100,long:150},damage:"1d6",twoHanded:!0,cost:25,melee:!1,missile:!0}],["Sling",{range:{short:40,medium:80,long:160},damage:"1d3",cost:2,addStrengthToDamageAtShortRange:!0,melee:!1,missile:!0}]]);var kr=S`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Bs=new WeakMap;function vo(t){let e=Bs.get(t);return e||(e=window.getComputedStyle(t,null),Bs.set(t,e)),e}function $r(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=vo(t);return e.visibility!=="hidden"&&e.display!=="none"}function Cr(t){const e=vo(t),{overflowY:i,overflowX:s}=e;return i==="scroll"||s==="scroll"?!0:i!=="auto"||s!=="auto"?!1:t.scrollHeight>t.clientHeight&&i==="auto"||t.scrollWidth>t.clientWidth&&s==="auto"}function Sr(t){const e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!$r(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Cr(t)}function zr(t){var e,i;const s=Zi(t),o=(e=s[0])!=null?e:null,a=(i=s[s.length-1])!=null?i:null;return{start:o,end:a}}function Ar(t,e){var i;return((i=t.getRootNode({composed:!0}))==null?void 0:i.host)!==e}function Zi(t){const e=new WeakMap,i=[];function s(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||e.has(o))return;e.set(o,!0),!i.includes(o)&&Sr(o)&&i.push(o),o instanceof HTMLSlotElement&&Ar(o,t)&&o.assignedElements({flatten:!0}).forEach(a=>{s(a)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&s(o.shadowRoot)}for(const a of o.children)s(a)}return s(t),i.sort((o,a)=>{const n=Number(o.getAttribute("tabindex"))||0;return(Number(a.getAttribute("tabindex"))||0)-n})}var yo=Object.defineProperty,Er=Object.defineProperties,Dr=Object.getOwnPropertyDescriptor,Tr=Object.getOwnPropertyDescriptors,Vs=Object.getOwnPropertySymbols,Lr=Object.prototype.hasOwnProperty,Or=Object.prototype.propertyIsEnumerable,Bi=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Ns=(t,e,i)=>e in t?yo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Zt=(t,e)=>{for(var i in e||(e={}))Lr.call(e,i)&&Ns(t,i,e[i]);if(Vs)for(var i of Vs(e))Or.call(e,i)&&Ns(t,i,e[i]);return t},ri=(t,e)=>Er(t,Tr(e)),r=(t,e,i,s)=>{for(var o=s>1?void 0:s?Dr(e,i):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(o=(s?n(e,i,o):n(o))||o);return s&&o&&yo(e,i,o),o},Ir=function(t,e){this[0]=t,this[1]=e},Pr=t=>{var e=t[Bi("asyncIterator")],i=!1,s,o={};return e==null?(e=t[Bi("iterator")](),s=a=>o[a]=n=>e[a](n)):(e=e.call(t),s=a=>o[a]=n=>{if(i){if(i=!1,a==="throw")throw n;return n}return i=!0,{done:!1,value:new Ir(new Promise(d=>{var c=e[a](n);if(!(c instanceof Object))throw TypeError("Object expected");d(c)}),1)}}),o[Bi("iterator")]=()=>o,s("next"),"throw"in e?s("throw"):o.throw=a=>{throw a},"return"in e&&s("return"),o};function*bs(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Pr(bs(t.shadowRoot.activeElement))))}function Mr(){return[...bs()].pop()}var Re=[],wo=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var i;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=Mr();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=Zi(this.element);let a=o.findIndex(d=>d===s);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){a+n>=o.length?a=0:a+n<0?a=o.length-1:a+=n,this.previousFocus=this.currentFocus;const d=o[a];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||d&&this.possiblyHasTabbableChildren(d))return;e.preventDefault(),this.currentFocus=d,(i=this.currentFocus)==null||i.focus({preventScroll:!1});const c=[...bs()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Re.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Re=Re.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Re[Re.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Zi(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],s=this.tabDirection==="forward"?e:i;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function Rr(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Ji=new Set;function Fr(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Br(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function qe(t){if(Ji.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=Fr()+Br();document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function je(t){Ji.delete(t),Ji.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function ts(t,e,i="vertical",s="smooth"){const o=Rr(t,e),a=o.top+e.scrollTop,n=o.left+e.scrollLeft,d=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,h=e.scrollTop,m=e.scrollTop+e.offsetHeight;(i==="horizontal"||i==="both")&&(n<d?e.scrollTo({left:n,behavior:s}):n+t.clientWidth>c&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:s})),(i==="vertical"||i==="both")&&(a<h?e.scrollTo({top:a,behavior:s}):a+t.clientHeight>m&&e.scrollTo({top:a-e.offsetHeight+t.clientHeight,behavior:s}))}var Vr=S`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,es="";function is(t){es=t}function Nr(t=""){if(!es){const e=[...document.getElementsByTagName("script")],i=e.find(s=>s.hasAttribute("data-shoelace"));if(i)is(i.getAttribute("data-shoelace"));else{const s=e.find(a=>/shoelace(\.min)?\.js($|\?)/.test(a.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(a.src));let o="";s&&(o=s.getAttribute("src")),is(o.split("/").slice(0,-1).join("/"))}}return es.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Hr={name:"default",resolver:t=>Nr(`assets/icons/${t}.svg`)},Ur=Hr,Hs={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Wr={name:"system",resolver:t=>t in Hs?`data:image/svg+xml,${encodeURIComponent(Hs[t])}`:""},qr=Wr,jr=[Ur,qr],ss=[];function Kr(t){ss.push(t)}function Yr(t){ss=ss.filter(e=>e!==t)}function Us(t){return jr.find(e=>e.name===t)}var Xr=S`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function x(t,e){const i=Zt({waitUntilFirstUpdate:!1},e);return(s,o)=>{const{update:a}=s,n=Array.isArray(t)?t:[t];s.update=function(d){n.forEach(c=>{const h=c;if(d.has(h)){const m=d.get(h),u=this[h];m!==u&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](m,u)}}),a.call(this,d)}}}var T=S`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,E=class extends Pt{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,Zt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const s=customElements.get(t);if(!s){customElements.define(t,class extends e{},i);return}let o=" (unknown version)",a=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in s&&s.version&&(a=" v"+s.version),!(o&&a&&o===a)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${a} has already been registered.`)}};E.version="2.15.0";E.dependencies={};r([l()],E.prototype,"dir",2);r([l()],E.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gr=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e,_o=t=>t.strings===void 0,Qr={},Zr=(t,e=Qr)=>t._$AH=e;var Fe=Symbol(),fi=Symbol(),Vi,Ni=new Map,j=class extends E{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let s;if(e?.spriteSheet){this.svg=b`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(o),this.svg}try{if(s=await fetch(t,{mode:"cors"}),!s.ok)return s.status===410?Fe:fi}catch{return fi}try{const o=document.createElement("div");o.innerHTML=await s.text();const a=o.firstElementChild;if(((i=a?.tagName)==null?void 0:i.toLowerCase())!=="svg")return Fe;Vi||(Vi=new DOMParser);const d=Vi.parseFromString(a.outerHTML,"text/html").body.querySelector("svg");return d?(d.part.add("svg"),document.adoptNode(d)):Fe}catch{return Fe}}connectedCallback(){super.connectedCallback(),Kr(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Yr(this)}getIconSource(){const t=Us(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),s=i?Us(this.library):void 0;if(!e){this.svg=null;return}let o=Ni.get(e);if(o||(o=this.resolveIcon(e,s),Ni.set(e,o)),!this.initialRender)return;const a=await o;if(a===fi&&Ni.delete(e),e===this.getIconSource().url){if(Gr(a)){this.svg=a;return}switch(a){case fi:case Fe:this.svg=null,this.emit("sl-error");break;default:this.svg=a.cloneNode(!0),(t=s?.mutator)==null||t.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};j.styles=[T,Xr];r([I()],j.prototype,"svg",2);r([l({reflect:!0})],j.prototype,"name",2);r([l()],j.prototype,"src",2);r([l()],j.prototype,"label",2);r([l({reflect:!0})],j.prototype,"library",2);r([x("label")],j.prototype,"handleLabelChange",1);r([x(["name","src","library"])],j.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=si(class extends oi{constructor(t){if(super(t),t.type!==Nt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(e)}const i=t.element.classList;for(const s of this.st)s in e||(i.remove(s),this.st.delete(s));for(const s in e){const o=!!e[s];o===this.st.has(s)||this.nt?.has(s)||(o?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return kt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xo=Symbol.for(""),Jr=t=>{if(t?.r===xo)return t?._$litStatic$},$i=(t,...e)=>({_$litStatic$:e.reduce((i,s,o)=>i+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[o+1],t[0]),r:xo}),Ws=new Map,ta=t=>(e,...i)=>{const s=i.length;let o,a;const n=[],d=[];let c,h=0,m=!1;for(;h<s;){for(c=e[h];h<s&&(a=i[h],(o=Jr(a))!==void 0);)c+=o+e[++h],m=!0;h!==s&&d.push(a),n.push(c),h++}if(h===s&&n.push(e[s]),m){const u=n.join("$$lit$$");(e=Ws.get(u))===void 0&&(n.raw=n,Ws.set(u,e=n)),i=d}return t(e,...i)},Ke=ta(b);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=t=>t??K;var st=class extends E{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?$i`a`:$i`button`;return Ke`
      <${e}
        part="base"
        class=${O({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${A(t?void 0:this.disabled)}
        type=${A(t?void 0:"button")}
        href=${A(t?this.href:void 0)}
        target=${A(t?this.target:void 0)}
        download=${A(t?this.download:void 0)}
        rel=${A(t&&this.target?"noreferrer noopener":void 0)}
        role=${A(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${A(this.name)}
          library=${A(this.library)}
          src=${A(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};st.styles=[T,Vr];st.dependencies={"sl-icon":j};r([$(".icon-button")],st.prototype,"button",2);r([I()],st.prototype,"hasFocus",2);r([l()],st.prototype,"name",2);r([l()],st.prototype,"library",2);r([l()],st.prototype,"src",2);r([l()],st.prototype,"href",2);r([l()],st.prototype,"target",2);r([l()],st.prototype,"download",2);r([l()],st.prototype,"label",2);r([l({type:Boolean,reflect:!0})],st.prototype,"disabled",2);var ko=new Map,ea=new WeakMap;function ia(t){return t??{keyframes:[],options:{duration:0}}}function qs(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function U(t,e){ko.set(t,ia(e))}function Y(t,e,i){const s=ea.get(t);if(s?.[e])return qs(s[e],i.dir);const o=ko.get(e);return o?qs(o,i.dir):{keyframes:[],options:{duration:0}}}function bt(t,e){return new Promise(i=>{function s(o){o.target===t&&(t.removeEventListener(e,s),i())}t.addEventListener(e,s)})}function Z(t,e,i){return new Promise(s=>{if(i?.duration===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,ri(Zt({},i),{duration:os()?0:i.duration}));o.addEventListener("cancel",s,{once:!0}),o.addEventListener("finish",s,{once:!0})})}function js(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function os(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function it(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}function Ci(t,e){return t.map(i=>ri(Zt({},i),{height:i.height==="auto"?`${e}px`:i.height}))}const rs=new Set,sa=new MutationObserver(zo),Ce=new Map;let $o=document.documentElement.dir||"ltr",Co=document.documentElement.lang||navigator.language,he;sa.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function So(...t){t.map(e=>{const i=e.$code.toLowerCase();Ce.has(i)?Ce.set(i,Object.assign(Object.assign({},Ce.get(i)),e)):Ce.set(i,e),he||(he=e)}),zo()}function zo(){$o=document.documentElement.dir||"ltr",Co=document.documentElement.lang||navigator.language,[...rs.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let oa=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){rs.add(this.host)}hostDisconnected(){rs.delete(this.host)}dir(){return`${this.host.dir||$o}`.toLowerCase()}lang(){return`${this.host.lang||Co}`.toLowerCase()}getTranslationData(e){var i,s;const o=new Intl.Locale(e.replace(/_/g,"-")),a=o?.language.toLowerCase(),n=(s=(i=o?.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&s!==void 0?s:"",d=Ce.get(`${a}-${n}`),c=Ce.get(a);return{locale:o,language:a,region:n,primary:d,secondary:c}}exists(e,i){var s;const{primary:o,secondary:a}=this.getTranslationData((s=i.lang)!==null&&s!==void 0?s:this.lang());return i=Object.assign({includeFallback:!1},i),!!(o&&o[e]||a&&a[e]||i.includeFallback&&he&&he[e])}term(e,...i){const{primary:s,secondary:o}=this.getTranslationData(this.lang());let a;if(s&&s[e])a=s[e];else if(o&&o[e])a=o[e];else if(he&&he[e])a=he[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof a=="function"?a(...i):a}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(e,i)}};var Ao={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};So(Ao);var ra=Ao,N=class extends oa{};So(ra);var vt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const s=i.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function aa(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(i+=s.textContent)}),i}function Ks(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Ct=class extends E{constructor(){super(...arguments),this.hasSlotController=new vt(this,"footer"),this.localize=new N(this),this.modal=new wo(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),qe(this)))}disconnectedCallback(){var t;super.disconnectedCallback(),je(this),(t=this.closeWatcher)==null||t.destroy()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=Y(this,"drawer.denyClose",{dir:this.localize.dir()});Z(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),qe(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([it(this.drawer),it(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Y(this,`drawer.show${Ks(this.placement)}`,{dir:this.localize.dir()}),i=Y(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Z(this.panel,e.keyframes,e.options),Z(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),je(this)),await Promise.all([it(this.drawer),it(this.overlay)]);const t=Y(this,`drawer.hide${Ks(this.placement)}`,{dir:this.localize.dir()}),e=Y(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Z(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Z(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),qe(this)),this.open&&this.contained&&(this.modal.deactivate(),je(this))}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}render(){return b`
      <div
        part="base"
        class=${O({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${A(this.noHeader?this.label:void 0)}
          aria-labelledby=${A(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":b`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Ct.styles=[T,kr];Ct.dependencies={"sl-icon-button":st};r([$(".drawer")],Ct.prototype,"drawer",2);r([$(".drawer__panel")],Ct.prototype,"panel",2);r([$(".drawer__overlay")],Ct.prototype,"overlay",2);r([l({type:Boolean,reflect:!0})],Ct.prototype,"open",2);r([l({reflect:!0})],Ct.prototype,"label",2);r([l({reflect:!0})],Ct.prototype,"placement",2);r([l({type:Boolean,reflect:!0})],Ct.prototype,"contained",2);r([l({attribute:"no-header",type:Boolean,reflect:!0})],Ct.prototype,"noHeader",2);r([x("open",{waitUntilFirstUpdate:!0})],Ct.prototype,"handleOpenChange",1);r([x("contained",{waitUntilFirstUpdate:!0})],Ct.prototype,"handleNoModalChange",1);U("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});U("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});U("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});U("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});U("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});U("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});U("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});U("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});U("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});U("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});U("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Ct.define("sl-drawer");var na=S`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,la=S`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const oe=Math.min,xt=Math.max,Si=Math.round,mi=Math.floor,re=t=>({x:t,y:t}),ca={left:"right",right:"left",bottom:"top",top:"bottom"},da={start:"end",end:"start"};function as(t,e,i){return xt(t,oe(e,i))}function Te(t,e){return typeof t=="function"?t(e):t}function ae(t){return t.split("-")[0]}function Le(t){return t.split("-")[1]}function Eo(t){return t==="x"?"y":"x"}function vs(t){return t==="y"?"height":"width"}function ai(t){return["top","bottom"].includes(ae(t))?"y":"x"}function ys(t){return Eo(ai(t))}function ha(t,e,i){i===void 0&&(i=!1);const s=Le(t),o=ys(t),a=vs(o);let n=o==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(n=zi(n)),[n,zi(n)]}function ua(t){const e=zi(t);return[ns(t),e,ns(e)]}function ns(t){return t.replace(/start|end/g,e=>da[e])}function pa(t,e,i){const s=["left","right"],o=["right","left"],a=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return i?e?o:s:e?s:o;case"left":case"right":return e?a:n;default:return[]}}function fa(t,e,i,s){const o=Le(t);let a=pa(ae(t),i==="start",s);return o&&(a=a.map(n=>n+"-"+o),e&&(a=a.concat(a.map(ns)))),a}function zi(t){return t.replace(/left|right|bottom|top/g,e=>ca[e])}function ma(t){return{top:0,right:0,bottom:0,left:0,...t}}function Do(t){return typeof t!="number"?ma(t):{top:t,right:t,bottom:t,left:t}}function Ai(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Ys(t,e,i){let{reference:s,floating:o}=t;const a=ai(e),n=ys(e),d=vs(n),c=ae(e),h=a==="y",m=s.x+s.width/2-o.width/2,u=s.y+s.height/2-o.height/2,p=s[d]/2-o[d]/2;let f;switch(c){case"top":f={x:m,y:s.y-o.height};break;case"bottom":f={x:m,y:s.y+s.height};break;case"right":f={x:s.x+s.width,y:u};break;case"left":f={x:s.x-o.width,y:u};break;default:f={x:s.x,y:s.y}}switch(Le(e)){case"start":f[n]-=p*(i&&h?-1:1);break;case"end":f[n]+=p*(i&&h?-1:1);break}return f}const ga=async(t,e,i)=>{const{placement:s="bottom",strategy:o="absolute",middleware:a=[],platform:n}=i,d=a.filter(Boolean),c=await(n.isRTL==null?void 0:n.isRTL(e));let h=await n.getElementRects({reference:t,floating:e,strategy:o}),{x:m,y:u}=Ys(h,s,c),p=s,f={},g=0;for(let y=0;y<d.length;y++){const{name:C,fn:D}=d[y],{x:_,y:k,data:v,reset:w}=await D({x:m,y:u,initialPlacement:s,placement:p,strategy:o,middlewareData:f,rects:h,platform:n,elements:{reference:t,floating:e}});m=_??m,u=k??u,f={...f,[C]:{...f[C],...v}},w&&g<=50&&(g++,typeof w=="object"&&(w.placement&&(p=w.placement),w.rects&&(h=w.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:o}):w.rects),{x:m,y:u}=Ys(h,p,c)),y=-1)}return{x:m,y:u,placement:p,strategy:o,middlewareData:f}};async function ws(t,e){var i;e===void 0&&(e={});const{x:s,y:o,platform:a,rects:n,elements:d,strategy:c}=t,{boundary:h="clippingAncestors",rootBoundary:m="viewport",elementContext:u="floating",altBoundary:p=!1,padding:f=0}=Te(e,t),g=Do(f),C=d[p?u==="floating"?"reference":"floating":u],D=Ai(await a.getClippingRect({element:(i=await(a.isElement==null?void 0:a.isElement(C)))==null||i?C:C.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(d.floating)),boundary:h,rootBoundary:m,strategy:c})),_=u==="floating"?{...n.floating,x:s,y:o}:n.reference,k=await(a.getOffsetParent==null?void 0:a.getOffsetParent(d.floating)),v=await(a.isElement==null?void 0:a.isElement(k))?await(a.getScale==null?void 0:a.getScale(k))||{x:1,y:1}:{x:1,y:1},w=Ai(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:_,offsetParent:k,strategy:c}):_);return{top:(D.top-w.top+g.top)/v.y,bottom:(w.bottom-D.bottom+g.bottom)/v.y,left:(D.left-w.left+g.left)/v.x,right:(w.right-D.right+g.right)/v.x}}const ba=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:s,placement:o,rects:a,platform:n,elements:d,middlewareData:c}=e,{element:h,padding:m=0}=Te(t,e)||{};if(h==null)return{};const u=Do(m),p={x:i,y:s},f=ys(o),g=vs(f),y=await n.getDimensions(h),C=f==="y",D=C?"top":"left",_=C?"bottom":"right",k=C?"clientHeight":"clientWidth",v=a.reference[g]+a.reference[f]-p[f]-a.floating[g],w=p[f]-a.reference[f],z=await(n.getOffsetParent==null?void 0:n.getOffsetParent(h));let R=z?z[k]:0;(!R||!await(n.isElement==null?void 0:n.isElement(z)))&&(R=d.floating[k]||a.floating[g]);const F=v/2-w/2,P=R/2-y[g]/2-1,L=oe(u[D],P),ut=oe(u[_],P),G=L,wt=R-y[g]-ut,rt=R/2-y[g]/2+F,mt=as(G,rt,wt),Ot=!c.arrow&&Le(o)!=null&&rt!==mt&&a.reference[g]/2-(rt<G?L:ut)-y[g]/2<0,Xt=Ot?rt<G?rt-G:rt-wt:0;return{[f]:p[f]+Xt,data:{[f]:mt,centerOffset:rt-mt-Xt,...Ot&&{alignmentOffset:Xt}},reset:Ot}}}),va=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,s;const{placement:o,middlewareData:a,rects:n,initialPlacement:d,platform:c,elements:h}=e,{mainAxis:m=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...C}=Te(t,e);if((i=a.arrow)!=null&&i.alignmentOffset)return{};const D=ae(o),_=ae(d)===d,k=await(c.isRTL==null?void 0:c.isRTL(h.floating)),v=p||(_||!y?[zi(d)]:ua(d));!p&&g!=="none"&&v.push(...fa(d,y,g,k));const w=[d,...v],z=await ws(e,C),R=[];let F=((s=a.flip)==null?void 0:s.overflows)||[];if(m&&R.push(z[D]),u){const G=ha(o,n,k);R.push(z[G[0]],z[G[1]])}if(F=[...F,{placement:o,overflows:R}],!R.every(G=>G<=0)){var P,L;const G=(((P=a.flip)==null?void 0:P.index)||0)+1,wt=w[G];if(wt)return{data:{index:G,overflows:F},reset:{placement:wt}};let rt=(L=F.filter(mt=>mt.overflows[0]<=0).sort((mt,Ot)=>mt.overflows[1]-Ot.overflows[1])[0])==null?void 0:L.placement;if(!rt)switch(f){case"bestFit":{var ut;const mt=(ut=F.map(Ot=>[Ot.placement,Ot.overflows.filter(Xt=>Xt>0).reduce((Xt,Go)=>Xt+Go,0)]).sort((Ot,Xt)=>Ot[1]-Xt[1])[0])==null?void 0:ut[0];mt&&(rt=mt);break}case"initialPlacement":rt=d;break}if(o!==rt)return{reset:{placement:rt}}}return{}}}};async function ya(t,e){const{placement:i,platform:s,elements:o}=t,a=await(s.isRTL==null?void 0:s.isRTL(o.floating)),n=ae(i),d=Le(i),c=ai(i)==="y",h=["left","top"].includes(n)?-1:1,m=a&&c?-1:1,u=Te(e,t);let{mainAxis:p,crossAxis:f,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return d&&typeof g=="number"&&(f=d==="end"?g*-1:g),c?{x:f*m,y:p*h}:{x:p*h,y:f*m}}const wa=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,s;const{x:o,y:a,placement:n,middlewareData:d}=e,c=await ya(e,t);return n===((i=d.offset)==null?void 0:i.placement)&&(s=d.arrow)!=null&&s.alignmentOffset?{}:{x:o+c.x,y:a+c.y,data:{...c,placement:n}}}}},_a=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:o}=e,{mainAxis:a=!0,crossAxis:n=!1,limiter:d={fn:C=>{let{x:D,y:_}=C;return{x:D,y:_}}},...c}=Te(t,e),h={x:i,y:s},m=await ws(e,c),u=ai(ae(o)),p=Eo(u);let f=h[p],g=h[u];if(a){const C=p==="y"?"top":"left",D=p==="y"?"bottom":"right",_=f+m[C],k=f-m[D];f=as(_,f,k)}if(n){const C=u==="y"?"top":"left",D=u==="y"?"bottom":"right",_=g+m[C],k=g-m[D];g=as(_,g,k)}const y=d.fn({...e,[p]:f,[u]:g});return{...y,data:{x:y.x-i,y:y.y-s}}}}},xa=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:i,rects:s,platform:o,elements:a}=e,{apply:n=()=>{},...d}=Te(t,e),c=await ws(e,d),h=ae(i),m=Le(i),u=ai(i)==="y",{width:p,height:f}=s.floating;let g,y;h==="top"||h==="bottom"?(g=h,y=m===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(y=h,g=m==="end"?"top":"bottom");const C=f-c[g],D=p-c[y],_=!e.middlewareData.shift;let k=C,v=D;if(u){const z=p-c.left-c.right;v=m||_?oe(D,z):z}else{const z=f-c.top-c.bottom;k=m||_?oe(C,z):z}if(_&&!m){const z=xt(c.left,0),R=xt(c.right,0),F=xt(c.top,0),P=xt(c.bottom,0);u?v=p-2*(z!==0||R!==0?z+R:xt(c.left,c.right)):k=f-2*(F!==0||P!==0?F+P:xt(c.top,c.bottom))}await n({...e,availableWidth:v,availableHeight:k});const w=await o.getDimensions(a.floating);return p!==w.width||f!==w.height?{reset:{rects:!0}}:{}}}};function ne(t){return To(t)?(t.nodeName||"").toLowerCase():"#document"}function $t(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Jt(t){var e;return(e=(To(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function To(t){return t instanceof Node||t instanceof $t(t).Node}function Qt(t){return t instanceof Element||t instanceof $t(t).Element}function Ht(t){return t instanceof HTMLElement||t instanceof $t(t).HTMLElement}function Xs(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof $t(t).ShadowRoot}function ni(t){const{overflow:e,overflowX:i,overflowY:s,display:o}=Tt(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+i)&&!["inline","contents"].includes(o)}function ka(t){return["table","td","th"].includes(ne(t))}function _s(t){const e=xs(),i=Tt(t);return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(i.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(i.contain||"").includes(s))}function $a(t){let e=De(t);for(;Ht(e)&&!Li(e);){if(_s(e))return e;e=De(e)}return null}function xs(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Li(t){return["html","body","#document"].includes(ne(t))}function Tt(t){return $t(t).getComputedStyle(t)}function Oi(t){return Qt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function De(t){if(ne(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Xs(t)&&t.host||Jt(t);return Xs(e)?e.host:e}function Lo(t){const e=De(t);return Li(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ht(e)&&ni(e)?e:Lo(e)}function ti(t,e,i){var s;e===void 0&&(e=[]),i===void 0&&(i=!0);const o=Lo(t),a=o===((s=t.ownerDocument)==null?void 0:s.body),n=$t(o);return a?e.concat(n,n.visualViewport||[],ni(o)?o:[],n.frameElement&&i?ti(n.frameElement):[]):e.concat(o,ti(o,[],i))}function Oo(t){const e=Tt(t);let i=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const o=Ht(t),a=o?t.offsetWidth:i,n=o?t.offsetHeight:s,d=Si(i)!==a||Si(s)!==n;return d&&(i=a,s=n),{width:i,height:s,$:d}}function ks(t){return Qt(t)?t:t.contextElement}function ze(t){const e=ks(t);if(!Ht(e))return re(1);const i=e.getBoundingClientRect(),{width:s,height:o,$:a}=Oo(e);let n=(a?Si(i.width):i.width)/s,d=(a?Si(i.height):i.height)/o;return(!n||!Number.isFinite(n))&&(n=1),(!d||!Number.isFinite(d))&&(d=1),{x:n,y:d}}const Ca=re(0);function Io(t){const e=$t(t);return!xs()||!e.visualViewport?Ca:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Sa(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==$t(t)?!1:e}function me(t,e,i,s){e===void 0&&(e=!1),i===void 0&&(i=!1);const o=t.getBoundingClientRect(),a=ks(t);let n=re(1);e&&(s?Qt(s)&&(n=ze(s)):n=ze(t));const d=Sa(a,i,s)?Io(a):re(0);let c=(o.left+d.x)/n.x,h=(o.top+d.y)/n.y,m=o.width/n.x,u=o.height/n.y;if(a){const p=$t(a),f=s&&Qt(s)?$t(s):s;let g=p,y=g.frameElement;for(;y&&s&&f!==g;){const C=ze(y),D=y.getBoundingClientRect(),_=Tt(y),k=D.left+(y.clientLeft+parseFloat(_.paddingLeft))*C.x,v=D.top+(y.clientTop+parseFloat(_.paddingTop))*C.y;c*=C.x,h*=C.y,m*=C.x,u*=C.y,c+=k,h+=v,g=$t(y),y=g.frameElement}}return Ai({width:m,height:u,x:c,y:h})}const za=[":popover-open",":modal"];function Po(t){return za.some(e=>{try{return t.matches(e)}catch{return!1}})}function Aa(t){let{elements:e,rect:i,offsetParent:s,strategy:o}=t;const a=o==="fixed",n=Jt(s),d=e?Po(e.floating):!1;if(s===n||d&&a)return i;let c={scrollLeft:0,scrollTop:0},h=re(1);const m=re(0),u=Ht(s);if((u||!u&&!a)&&((ne(s)!=="body"||ni(n))&&(c=Oi(s)),Ht(s))){const p=me(s);h=ze(s),m.x=p.x+s.clientLeft,m.y=p.y+s.clientTop}return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-c.scrollLeft*h.x+m.x,y:i.y*h.y-c.scrollTop*h.y+m.y}}function Ea(t){return Array.from(t.getClientRects())}function Mo(t){return me(Jt(t)).left+Oi(t).scrollLeft}function Da(t){const e=Jt(t),i=Oi(t),s=t.ownerDocument.body,o=xt(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),a=xt(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let n=-i.scrollLeft+Mo(t);const d=-i.scrollTop;return Tt(s).direction==="rtl"&&(n+=xt(e.clientWidth,s.clientWidth)-o),{width:o,height:a,x:n,y:d}}function Ta(t,e){const i=$t(t),s=Jt(t),o=i.visualViewport;let a=s.clientWidth,n=s.clientHeight,d=0,c=0;if(o){a=o.width,n=o.height;const h=xs();(!h||h&&e==="fixed")&&(d=o.offsetLeft,c=o.offsetTop)}return{width:a,height:n,x:d,y:c}}function La(t,e){const i=me(t,!0,e==="fixed"),s=i.top+t.clientTop,o=i.left+t.clientLeft,a=Ht(t)?ze(t):re(1),n=t.clientWidth*a.x,d=t.clientHeight*a.y,c=o*a.x,h=s*a.y;return{width:n,height:d,x:c,y:h}}function Gs(t,e,i){let s;if(e==="viewport")s=Ta(t,i);else if(e==="document")s=Da(Jt(t));else if(Qt(e))s=La(e,i);else{const o=Io(t);s={...e,x:e.x-o.x,y:e.y-o.y}}return Ai(s)}function Ro(t,e){const i=De(t);return i===e||!Qt(i)||Li(i)?!1:Tt(i).position==="fixed"||Ro(i,e)}function Oa(t,e){const i=e.get(t);if(i)return i;let s=ti(t,[],!1).filter(d=>Qt(d)&&ne(d)!=="body"),o=null;const a=Tt(t).position==="fixed";let n=a?De(t):t;for(;Qt(n)&&!Li(n);){const d=Tt(n),c=_s(n);!c&&d.position==="fixed"&&(o=null),(a?!c&&!o:!c&&d.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||ni(n)&&!c&&Ro(t,n))?s=s.filter(m=>m!==n):o=d,n=De(n)}return e.set(t,s),s}function Ia(t){let{element:e,boundary:i,rootBoundary:s,strategy:o}=t;const n=[...i==="clippingAncestors"?Oa(e,this._c):[].concat(i),s],d=n[0],c=n.reduce((h,m)=>{const u=Gs(e,m,o);return h.top=xt(u.top,h.top),h.right=oe(u.right,h.right),h.bottom=oe(u.bottom,h.bottom),h.left=xt(u.left,h.left),h},Gs(e,d,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Pa(t){const{width:e,height:i}=Oo(t);return{width:e,height:i}}function Ma(t,e,i){const s=Ht(e),o=Jt(e),a=i==="fixed",n=me(t,!0,a,e);let d={scrollLeft:0,scrollTop:0};const c=re(0);if(s||!s&&!a)if((ne(e)!=="body"||ni(o))&&(d=Oi(e)),s){const u=me(e,!0,a,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else o&&(c.x=Mo(o));const h=n.left+d.scrollLeft-c.x,m=n.top+d.scrollTop-c.y;return{x:h,y:m,width:n.width,height:n.height}}function Qs(t,e){return!Ht(t)||Tt(t).position==="fixed"?null:e?e(t):t.offsetParent}function Fo(t,e){const i=$t(t);if(!Ht(t)||Po(t))return i;let s=Qs(t,e);for(;s&&ka(s)&&Tt(s).position==="static";)s=Qs(s,e);return s&&(ne(s)==="html"||ne(s)==="body"&&Tt(s).position==="static"&&!_s(s))?i:s||$a(t)||i}const Ra=async function(t){const e=this.getOffsetParent||Fo,i=this.getDimensions;return{reference:Ma(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await i(t.floating)}}};function Fa(t){return Tt(t).direction==="rtl"}const xi={convertOffsetParentRelativeRectToViewportRelativeRect:Aa,getDocumentElement:Jt,getClippingRect:Ia,getOffsetParent:Fo,getElementRects:Ra,getClientRects:Ea,getDimensions:Pa,getScale:ze,isElement:Qt,isRTL:Fa};function Ba(t,e){let i=null,s;const o=Jt(t);function a(){var d;clearTimeout(s),(d=i)==null||d.disconnect(),i=null}function n(d,c){d===void 0&&(d=!1),c===void 0&&(c=1),a();const{left:h,top:m,width:u,height:p}=t.getBoundingClientRect();if(d||e(),!u||!p)return;const f=mi(m),g=mi(o.clientWidth-(h+u)),y=mi(o.clientHeight-(m+p)),C=mi(h),_={rootMargin:-f+"px "+-g+"px "+-y+"px "+-C+"px",threshold:xt(0,oe(1,c))||1};let k=!0;function v(w){const z=w[0].intersectionRatio;if(z!==c){if(!k)return n();z?n(!1,z):s=setTimeout(()=>{n(!1,1e-7)},100)}k=!1}try{i=new IntersectionObserver(v,{..._,root:o.ownerDocument})}catch{i=new IntersectionObserver(v,_)}i.observe(t)}return n(!0),a}function Va(t,e,i,s){s===void 0&&(s={});const{ancestorScroll:o=!0,ancestorResize:a=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:c=!1}=s,h=ks(t),m=o||a?[...h?ti(h):[],...ti(e)]:[];m.forEach(D=>{o&&D.addEventListener("scroll",i,{passive:!0}),a&&D.addEventListener("resize",i)});const u=h&&d?Ba(h,i):null;let p=-1,f=null;n&&(f=new ResizeObserver(D=>{let[_]=D;_&&_.target===h&&f&&(f.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var k;(k=f)==null||k.observe(e)})),i()}),h&&!c&&f.observe(h),f.observe(e));let g,y=c?me(t):null;c&&C();function C(){const D=me(t);y&&(D.x!==y.x||D.y!==y.y||D.width!==y.width||D.height!==y.height)&&i(),y=D,g=requestAnimationFrame(C)}return i(),()=>{var D;m.forEach(_=>{o&&_.removeEventListener("scroll",i),a&&_.removeEventListener("resize",i)}),u?.(),(D=f)==null||D.disconnect(),f=null,c&&cancelAnimationFrame(g)}}const Na=_a,Ha=va,Zs=xa,Ua=ba,Wa=(t,e,i)=>{const s=new Map,o={platform:xi,...i},a={...o.platform,_c:s};return ga(t,e,{...o,platform:a})};function qa(t){return ja(t)}function Hi(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function ja(t){for(let e=t;e;e=Hi(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Hi(t);e;e=Hi(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||i.filter!=="none"||e.tagName==="BODY"))return e}return null}function Ka(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var W=class extends E{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let s=0,o=0,a=0,n=0,d=0,c=0,h=0,m=0;i?t.top<e.top?(s=t.left,o=t.bottom,a=t.right,n=t.bottom,d=e.left,c=e.top,h=e.right,m=e.top):(s=e.left,o=e.bottom,a=e.right,n=e.bottom,d=t.left,c=t.top,h=t.right,m=t.top):t.left<e.left?(s=t.right,o=t.top,a=e.left,n=e.top,d=t.right,c=t.bottom,h=e.left,m=e.bottom):(s=e.right,o=e.top,a=t.left,n=t.top,d=e.right,c=e.bottom,h=t.left,m=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${m}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Ka(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Va(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[wa({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Zs({apply:({rects:i})=>{const s=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${i.reference.width}px`:"",this.popup.style.height=o?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Ha({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Na({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Zs({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Ua({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>xi.getOffsetParent(i,qa):xi.getOffsetParent;Wa(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:ri(Zt({},xi),{getOffsetParent:e})}).then(({x:i,y:s,middlewareData:o,placement:a})=>{const n=getComputedStyle(this).direction==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[a.split("-")[0]];if(this.setAttribute("data-current-placement",a),Object.assign(this.popup.style,{left:`${i}px`,top:`${s}px`}),this.arrow){const c=o.arrow.x,h=o.arrow.y;let m="",u="",p="",f="";if(this.arrowPlacement==="start"){const g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=n?g:"",f=n?"":g}else if(this.arrowPlacement==="end"){const g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=n?"":g,f=n?g:"",p=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",m=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof c=="number"?`${c}px`:"",m=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:m,right:u,bottom:p,left:f,[d]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return b`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${O({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${O({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?b`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};W.styles=[T,la];r([$(".popup")],W.prototype,"popup",2);r([$(".popup__arrow")],W.prototype,"arrowEl",2);r([l()],W.prototype,"anchor",2);r([l({type:Boolean,reflect:!0})],W.prototype,"active",2);r([l({reflect:!0})],W.prototype,"placement",2);r([l({reflect:!0})],W.prototype,"strategy",2);r([l({type:Number})],W.prototype,"distance",2);r([l({type:Number})],W.prototype,"skidding",2);r([l({type:Boolean})],W.prototype,"arrow",2);r([l({attribute:"arrow-placement"})],W.prototype,"arrowPlacement",2);r([l({attribute:"arrow-padding",type:Number})],W.prototype,"arrowPadding",2);r([l({type:Boolean})],W.prototype,"flip",2);r([l({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],W.prototype,"flipFallbackPlacements",2);r([l({attribute:"flip-fallback-strategy"})],W.prototype,"flipFallbackStrategy",2);r([l({type:Object})],W.prototype,"flipBoundary",2);r([l({attribute:"flip-padding",type:Number})],W.prototype,"flipPadding",2);r([l({type:Boolean})],W.prototype,"shift",2);r([l({type:Object})],W.prototype,"shiftBoundary",2);r([l({attribute:"shift-padding",type:Number})],W.prototype,"shiftPadding",2);r([l({attribute:"auto-size"})],W.prototype,"autoSize",2);r([l()],W.prototype,"sync",2);r([l({type:Object})],W.prototype,"autoSizeBoundary",2);r([l({attribute:"auto-size-padding",type:Number})],W.prototype,"autoSizePadding",2);r([l({attribute:"hover-bridge",type:Boolean})],W.prototype,"hoverBridge",2);var dt=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var i,s,o;const a=((i=this.containingElement)==null?void 0:i.getRootNode())instanceof ShadowRoot?(o=(s=document.activeElement)==null?void 0:s.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||a?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const i=e.getAllItems(),s=i[0],o=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(s),s.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(s=>zr(s).start);let i;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=e.button;break;default:i=e}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await it(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=Y(this,"dropdown.show",{dir:this.localize.dir()});await Z(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await it(this);const{keyframes:t,options:e}=Y(this,"dropdown.hide",{dir:this.localize.dir()});await Z(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return b`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${A(this.sync?this.sync:void 0)}
        class=${O({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};dt.styles=[T,na];dt.dependencies={"sl-popup":W};r([$(".dropdown")],dt.prototype,"popup",2);r([$(".dropdown__trigger")],dt.prototype,"trigger",2);r([$(".dropdown__panel")],dt.prototype,"panel",2);r([l({type:Boolean,reflect:!0})],dt.prototype,"open",2);r([l({reflect:!0})],dt.prototype,"placement",2);r([l({type:Boolean,reflect:!0})],dt.prototype,"disabled",2);r([l({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],dt.prototype,"stayOpenOnSelect",2);r([l({attribute:!1})],dt.prototype,"containingElement",2);r([l({type:Number})],dt.prototype,"distance",2);r([l({type:Number})],dt.prototype,"skidding",2);r([l({type:Boolean})],dt.prototype,"hoist",2);r([l({reflect:!0})],dt.prototype,"sync",2);r([x("open",{waitUntilFirstUpdate:!0})],dt.prototype,"handleOpenChange",1);U("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});U("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});dt.define("sl-dropdown");var Ya=S`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,li=class extends E{constructor(){super(...arguments),this.localize=new N(this)}render(){return b`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};li.styles=[T,Ya];var Be=new WeakMap,Ve=new WeakMap,Ne=new WeakMap,Ui=new WeakSet,gi=new WeakMap,te=class{constructor(t,e){this.handleFormData=i=>{const s=this.options.disabled(this.host),o=this.options.name(this.host),a=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!n&&typeof o=="string"&&o.length>0&&typeof a<"u"&&(Array.isArray(a)?a.forEach(d=>{i.formData.append(o,d.toString())}):i.formData.append(o,a.toString()))},this.handleFormSubmit=i=>{var s;const o=this.options.disabled(this.host),a=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=Be.get(this.form))==null||s.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!o&&!a(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),gi.set(this.host,[])},this.handleInteraction=i=>{const s=gi.get(this.host);s.includes(i.type)||s.push(i.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const s of i)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Zt({form:i=>{const s=i.form;if(s){const a=i.getRootNode().querySelector(`#${s}`);if(a)return a}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var s;return(s=i.disabled)!=null?s:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,s)=>i.value=s,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),gi.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),gi.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Be.has(this.form)?Be.get(this.form).add(this.host):Be.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ve.has(this.form)||(Ve.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ne.has(this.form)||(Ne.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Be.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ve.has(this.form)&&(this.form.reportValidity=Ve.get(this.form),Ve.delete(this.form)),Ne.has(this.form)&&(this.form.checkValidity=Ne.get(this.form),Ne.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Ui.add(t):Ui.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{e.hasAttribute(s)&&i.setAttribute(s,e.getAttribute(s))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=!!Ui.has(e),s=!!e.required;e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Ii=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Xa=Object.freeze(ri(Zt({},Ii),{valid:!1,valueMissing:!0})),Ga=Object.freeze(ri(Zt({},Ii),{valid:!1,customError:!0})),Bo=S`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button[checked]]) {
    z-index: 2;
  }
`,q=class extends E{constructor(){super(...arguments),this.formControlController=new te(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new vt(this,"[default]","prefix","suffix"),this.localize=new N(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ii}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?$i`a`:$i`button`;return Ke`
      <${e}
        part="base"
        class=${O({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${A(t?void 0:this.disabled)}
        type=${A(t?void 0:this.type)}
        title=${this.title}
        name=${A(t?void 0:this.name)}
        value=${A(t?void 0:this.value)}
        href=${A(t?this.href:void 0)}
        target=${A(t?this.target:void 0)}
        download=${A(t?this.download:void 0)}
        rel=${A(t?this.rel:void 0)}
        role=${A(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Ke` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Ke`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};q.styles=[T,Bo];q.dependencies={"sl-icon":j,"sl-spinner":li};r([$(".button")],q.prototype,"button",2);r([I()],q.prototype,"hasFocus",2);r([I()],q.prototype,"invalid",2);r([l()],q.prototype,"title",2);r([l({reflect:!0})],q.prototype,"variant",2);r([l({reflect:!0})],q.prototype,"size",2);r([l({type:Boolean,reflect:!0})],q.prototype,"caret",2);r([l({type:Boolean,reflect:!0})],q.prototype,"disabled",2);r([l({type:Boolean,reflect:!0})],q.prototype,"loading",2);r([l({type:Boolean,reflect:!0})],q.prototype,"outline",2);r([l({type:Boolean,reflect:!0})],q.prototype,"pill",2);r([l({type:Boolean,reflect:!0})],q.prototype,"circle",2);r([l()],q.prototype,"type",2);r([l()],q.prototype,"name",2);r([l()],q.prototype,"value",2);r([l()],q.prototype,"href",2);r([l()],q.prototype,"target",2);r([l()],q.prototype,"rel",2);r([l()],q.prototype,"download",2);r([l()],q.prototype,"form",2);r([l({attribute:"formaction"})],q.prototype,"formAction",2);r([l({attribute:"formenctype"})],q.prototype,"formEnctype",2);r([l({attribute:"formmethod"})],q.prototype,"formMethod",2);r([l({attribute:"formnovalidate",type:Boolean})],q.prototype,"formNoValidate",2);r([l({attribute:"formtarget"})],q.prototype,"formTarget",2);r([x("disabled",{waitUntilFirstUpdate:!0})],q.prototype,"handleDisabledChange",1);q.define("sl-button");var Qa=S`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,$s=class extends E{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],i=t.composedPath().find(o=>{var a;return e.includes(((a=o?.getAttribute)==null?void 0:a.call(o,"role"))||"")});if(!i)return;const s=i;s.type==="checkbox"&&(s.checked=!s.checked),this.emit("sl-select",{detail:{item:s}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),i=this.getCurrentItem();let s=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?s++:t.key==="ArrowUp"?s--:t.key==="Home"?s=0:t.key==="End"&&(s=e.length-1),s<0&&(s=e.length-1),s>e.length-1&&(s=0),this.setCurrentItem(e[s]),e[s].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===t?"0":"-1")})}render(){return b`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};$s.styles=[T,Qa];r([$("slot")],$s.prototype,"defaultSlot",2);$s.define("sl-menu");var Za=S`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const s of i)s._$AO?.(e,!1),Ye(s,e);return!0},Ei=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},Vo=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),en(e)}};function Ja(t){this._$AN!==void 0?(Ei(this),this._$AM=t,Vo(this)):this._$AM=t}function tn(t,e=!1,i=0){const s=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(s))for(let a=i;a<s.length;a++)Ye(s[a],!1),Ei(s[a]);else s!=null&&(Ye(s,!1),Ei(s));else Ye(this,t)}const en=t=>{t.type==Nt.CHILD&&(t._$AP??=tn,t._$AQ??=Ja)};class sn extends oi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,s){super._$AT(e,i,s),Vo(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(Ye(this,e),Ei(this))}setValue(e){if(_o(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const on=()=>new rn;class rn{}const Wi=new WeakMap,an=si(class extends sn{render(t){return K}update(t,[e]){const i=e!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),K}rt(t){if(typeof this.Y=="function"){const e=this.ht??globalThis;let i=Wi.get(e);i===void 0&&(i=new WeakMap,Wi.set(e,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?Wi.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var nn=class{constructor(t,e,i){this.popupRef=on(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var o;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(o=s.target.role)!=null&&o.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),o=s?.assignedElements({flatten:!0}).filter(m=>m.localName==="sl-menu")[0],a=this.localize.dir()==="rtl";if(!o)return;const{left:n,top:d,width:c,height:h}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${a?n+c:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${d}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${a?n+c:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${d+h}px`)},(this.host=t).addController(this),this.hasSlotController=e,this.localize=i}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const s of e.assignedElements())if(i=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let s=1;s!==i.length;++s)i[s].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((o,a)=>{var n;const d=(n=e.get(a))!=null?n:new CSSUnitValue(0,"px"),h=(d instanceof CSSUnitValue?d:new CSSUnitValue(0,"px")).to("px");return o-h.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=this.localize.dir()==="ltr";return this.isConnected?b`
      <sl-popup
        ${an(this.popupRef)}
        placement=${t?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:b` <slot name="submenu" hidden></slot> `}},St=class extends E{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.localize=new N(this),this.hasSlotController=new vt(this,"submenu"),this.submenuController=new nn(this,this.hasSlotController,this.localize),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return aa(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return b`
      <div
        id="anchor"
        part="base"
        class=${O({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?b` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};St.styles=[T,Za];St.dependencies={"sl-icon":j,"sl-popup":W,"sl-spinner":li};r([$("slot:not([name])")],St.prototype,"defaultSlot",2);r([$(".menu-item")],St.prototype,"menuItem",2);r([l()],St.prototype,"type",2);r([l({type:Boolean,reflect:!0})],St.prototype,"checked",2);r([l()],St.prototype,"value",2);r([l({type:Boolean,reflect:!0})],St.prototype,"loading",2);r([l({type:Boolean,reflect:!0})],St.prototype,"disabled",2);r([x("checked")],St.prototype,"handleCheckedChange",1);r([x("disabled")],St.prototype,"handleDisabledChange",1);r([x("type")],St.prototype,"handleTypeChange",1);St.define("sl-menu-item");var ln=S`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,ve=(t="value")=>(e,i)=>{const s=e.constructor,o=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(a,n,d){var c;const h=s.getPropertyOptions(t),m=typeof h.attribute=="string"?h.attribute:t;if(a===m){const u=h.converter||Ae,f=(typeof u=="function"?u:(c=u?.fromAttribute)!=null?c:Ae.fromAttribute)(d,h.type);this[t]!==f&&(this[i]=f)}o.call(this,a,n,d)}},ye=S`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=si(class extends oi{constructor(t){if(super(t),t.type!==Nt.PROPERTY&&t.type!==Nt.ATTRIBUTE&&t.type!==Nt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!_o(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===kt||e===K)return e;const i=t.element,s=t.name;if(t.type===Nt.PROPERTY){if(e===i[s])return kt}else if(t.type===Nt.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(s))return kt}else if(t.type===Nt.ATTRIBUTE&&i.getAttribute(s)===e+"")return kt;return Zr(t),e}});var X=class extends E{constructor(){super(...arguments),this.formControlController=new te(this),this.hasSlotController=new vt(this,"help-text","label"),this.localize=new N(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,i=this.output.offsetWidth,s=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",a=e*t;if(o){const n=`${e-a}px + ${t} * ${s}`;this.output.style.translate=`calc((${n} - ${i/2}px - ${s} / 2))`}else{const n=`${a}px - ${t} * ${s}`;this.output.style.translate=`calc(${n} - ${i/2}px + ${s} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.syncTooltip(t)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e;return b`
      <div
        part="form-control"
        class=${O({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${O({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${A(this.name)}
              ?disabled=${this.disabled}
              min=${A(this.min)}
              max=${A(this.max)}
              step=${A(this.step)}
              .value=${ge(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?b`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};X.styles=[T,ye,ln];r([$(".range__control")],X.prototype,"input",2);r([$(".range__tooltip")],X.prototype,"output",2);r([I()],X.prototype,"hasFocus",2);r([I()],X.prototype,"hasTooltip",2);r([l()],X.prototype,"title",2);r([l()],X.prototype,"name",2);r([l({type:Number})],X.prototype,"value",2);r([l()],X.prototype,"label",2);r([l({attribute:"help-text"})],X.prototype,"helpText",2);r([l({type:Boolean,reflect:!0})],X.prototype,"disabled",2);r([l({type:Number})],X.prototype,"min",2);r([l({type:Number})],X.prototype,"max",2);r([l({type:Number})],X.prototype,"step",2);r([l()],X.prototype,"tooltip",2);r([l({attribute:!1})],X.prototype,"tooltipFormatter",2);r([l({reflect:!0})],X.prototype,"form",2);r([ve()],X.prototype,"defaultValue",2);r([gs({passive:!0})],X.prototype,"handleThumbDragStart",1);r([x("value",{waitUntilFirstUpdate:!0})],X.prototype,"handleValueChange",1);r([x("disabled",{waitUntilFirstUpdate:!0})],X.prototype,"handleDisabledChange",1);r([x("hasTooltip",{waitUntilFirstUpdate:!0})],X.prototype,"syncRange",1);X.define("sl-range");const cn=S`
  :host {
    display: block;
    padding: 0px;
    font-family: var(--main-font, 'Arial', sans-serif);
    font-size: 1em;
		--primary-text-color: black;
		--secondary-text-color: rgb(113, 133, 122);
		--background-color: #ffffff;
  }
	:host([theme="dark"]) {
		--primary-text-color: #ffffff;
		--secondary-text-color: #c3c3c3;
		--background-color: #000000;
	}
	.disabled {
		opacity: 0.5;
		pointer-events: none;
	}

  .wrapper {
    border: 1px solid var(--secondary-text-color);
		background-color: var(--background-color);
		color: var(--primary-text-color);
    padding: 10px;
		padding-bottom: 20px;
    border-radius: 10px;
    min-width: 390px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
	h1 {
		margin: 0;
		padding: 0;
		font-size: 0.8em;
	}
	h2 {
		margin: 0;
		padding: 0;
		font-size: 0.6em;
	}
	.checkboxes {
		margin: 0;
		padding: 0;
		display: flex;
		gap: 5px;
		align-items: center;
		flex-wrap: wrap;
	}
	.checkboxes li {
		flex-direction: row;
		list-style: none;
		font-size: 0.8em;
		min-width: fit-content;
	}
	.checkboxes label {
		display: flex;
		flex-direction: row;
		gap: 3px;
		align-items: center;
	}
	.you-are {
		color: var(--secondary-text-color);
		font-size: 1.1em;
	}
	.your-target-is {
		color: var(--secondary-text-color);
		font-size: 1.1em;
	}
	.title {
		font-size: 1em;
		color: var(--primary-text-color);
		text-align: center;
	}
	.sub-title {
		font-size: 1em;
		color: var(--primary-text-color);
		margin-bottom: 10px;
		font-weight: normal;
	}
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dn(t){return t.replace(/-./g,e=>e[1].toUpperCase())}function hn(t=""){return t?.replace(/([a-z])([A-Z])/g,"$1-$2")?.toLowerCase()}class un extends Pt{static get styles(){return[cn]}static get properties(){return{theme:{type:String,reflect:!0},strength:{type:Number,required:!0},invisible:{state:!0},onHigherGround:{state:!0},squeezing:{state:!0},entangled:{state:!0},untrained:{state:!0},firingIntoMelee:{state:!0},mounted:{state:!0},charging:{state:!0},sneakAttacking:{state:!0},oponentBehindCover:{state:!0},oponentBlinded:{state:!0},oponentEntangled:{state:!0},oponentHelpless:{state:!0},oponentProne:{state:!0},disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this.theme=null,this.attackerInvisible=!1,this.attackerOnHigherGround=!1,this.attackerSqueezing=!1,this.attackerEntangled=!1,this.attackerUntrained=!1,this.attackerFiringIntoMelee=!1,this.attackerMounted=!1,this.attackerCharging=!1,this.attackerSneakAttacking=!1,this.opponentBehindCover=!1,this.opponentBlinded=!1,this.opponentEntangled=!1,this.opponentHelpless=!1,this.opponentProne=!1,this.disabled=!0}connectedCallback(){super.connectedCallback();const e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;this.theme||(e?this.theme="dark":this.theme="light")}firstUpdated(){this.handleSlotChanged()}handleSlotChanged(){const i=this.shadowRoot?.querySelector("slot")?.assignedNodes().filter(s=>s.nodeName==="EQUIPPED-WEAPON");this.disabled=i?.length===0;for(const s of i||[]){s.setAttribute("theme",this.theme);for(const o of["attackerInvisible","attackerOnHigherGround","attackerSqueezing","attackerEntangled","attackerUntrained","attackerFiringIntoMelee","attackerMounted","attackerCharging","attackerSneakAttacking","opponentBehindCover","opponentBlinded","opponentEntangled","opponentHelpless","opponentProne"])this[o]?s.setAttribute(hn(o),""):s.removeAttribute(this[o])}}render(){return b`
      <div class="wrapper" part="wrapper">
        <h1 class="title" part="title">Weapons</h1>
        <slot @slotchange="${this.handleSlotChanged}"
          >You have no weapons currently equipped.</slot
        >
        <div class="you-are ${this.disabled?"disabled":""}" part="you-are">
          <h2 class="sub-title" part="sub-title">You are...</h2>
          <ul class="checkboxes" part="checkboxes">
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-invisible"
                  .checked="${this.attackerInvisible}"
                  @change="${this.handleCheckboxChange}"
                />
                invisible
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-on-higher-ground"
                  .checked="${this.attackerOnHigherGround}"
                  @change="${this.handleCheckboxChange}"
                />
                On higher ground
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-squeezing"
                  .checked="${this.attackerSqueezing}"
                  @change="${this.handleCheckboxChange}"
                />
                squeezing
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-entangled"
                  .checked="${this.attackerEntangled}"
                  @change="${this.handleCheckboxChange}"
                />
                entangled
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-untrained"
                  .checked="${this.attackerUntrained}"
                  @change="${this.handleCheckboxChange}"
                />
                untrained
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-firing-into-melee"
                  .checked="${this.attackerFiringIntoMelee}"
                  @change="${this.handleCheckboxChange}"
                />
                firing into melee
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-mounted"
                  .checked="${this.attackerMounted}"
                  @change="${this.handleCheckboxChange}"
                />
                mounted
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-charging"
                  .checked="${this.attackerCharging}"
                  @change="${this.handleCheckboxChange}"
                />
                charging
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="attacker-sneak-attacking"
                  .checked="${this.attackerSneakAttacking}"
                  @change="${this.handleCheckboxChange}"
                />
                sneak attacking
              </label>
            </li>
          </ul>
        </div>
        <div
          class="your-target-is ${this.disabled?"disabled":""}"
          part="your-target-is"
        >
          <h2 class="sub-title" part="sub-title">Your target is...</h2>
          <ul class="checkboxes" part="checkboxes">
            <li>
              <label>
                <input
                  type="checkbox"
                  name="opponent-behind-cover"
                  .checked="${this.opponentBehindCover}"
                  @change="${this.handleCheckboxChange}"
                />
                behind cover
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="opponent-blinded"
                  .checked="${this.opponentBlinded}"
                  @change="${this.handleCheckboxChange}"
                />
                blinded
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="opponent-entangled"
                  .checked="${this.opponentEntangled}"
                  @change="${this.handleCheckboxChange}"
                />
                entangled
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="opponent-helpless"
                  .checked="${this.opponentHelpless}"
                  @change="${this.handleCheckboxChange}"
                />
                helpless
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="opponent-prone"
                  .checked="${this.opponentProne}"
                  @change="${this.handleCheckboxChange}"
                />
                prone
              </label>
            </li>
          </ul>
        </div>
      </div>
    `}handleCheckboxChange(e){this[dn(e.target.name)]=e.target.checked;const s=this.shadowRoot?.querySelector("slot")?.assignedNodes().filter(o=>o.nodeName==="EQUIPPED-WEAPON");for(const o of s||[])e.target.checked?o.setAttribute(e.target.name,""):o.removeAttribute(e.target.name)}}window.customElements.define("weapons-panel",un);class pn extends Pt{static get styles(){return S`
      :host {
        display: block;
        padding: 0px;
        font-family: var(--main-font, 'Arial', sans-serif);
        font-size: 1em;
      }
      .wrapper {
        border: 1px black solid;
        width: fit-content;
        aspect-ratio: 1 / 1;
        padding: 5px;
        border-radius: 10px;
        min-width: 60px;
        max-width: min-content;
        display: flex;
        flex-direction: column;
      }
      h1 {
        margin: 0 auto;
        width: max-content;
        font-size: 1em;
        flex: 0.6;
      }
      button {
        margin: 0 auto;
        display: block;
        border: 0;
        background-color: unset;
        flex: 1.4;
        font-size: 1.7em;
        border-radius: 5px;
        width: 100%;
      }
      button.with-base {
        flex: 0;
      }
      .clickable:hover {
        background-color: rgba(211, 211, 211, 0.5);
      }
      .clickable {
        cursor: pointer;
      }
      .clickable:active {
        transform: translateY(1px);
      }
      .base {
        padding: 5px;
        min-width: 18px;
        max-width: fit-content;
        margin: 0 auto;
        text-align: center;
        border: 1px black solid;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        margin-top: -12px;
        background-color: white;
      }
    `}static get properties(){return{name:{type:String},value:{type:Number},modifier:{type:String},suffix:{type:String},textPosition:{type:String,attribute:"text-position"},clickable:{type:Boolean},base:{type:Number}}}constructor(){super(),this.name="",this.value=null,this.modifier="",this.suffix="",this.textPosition="top",this.clickable=!1,this.base=null}render(){return b`
      <div class="wrapper" part="wrapper">
        ${this.textPosition!=="bottom"?b`<h1 part="name">${this.name}</h1>`:b``}
        <button
          @click=${this._onClick}
          part="value"
          class="${this.clickable?"clickable":""} ${this.base?"with-base":""}"
        >
          ${this.modifier}${this.value}${this.suffix}
        </button>
        ${this.textPosition==="bottom"?b`<h1 part="name">${this.name}</h1>`:b``}
      </div>
      ${this.base?this._displayBase():b``}
    `}_displayBase(){return b` <div class="base">${this.base}</div> `}_onClick(){this.dispatchEvent(new CustomEvent("value-clicked"))}}window.customElements.define("stat-display",pn);const qi=t=>t<=3?-3:t>=4&&t<=5?-2:t>=6&&t<=8?-1:t>=9&&t<=12?0:t>=13&&t<=15?1:t>=16&&t<=17?2:t>=18?3:0;class Js{type="";name="";description="";roll={qty:1,die:20,mod:0,attackDieAdjustment:0,damageMultiplier:1};weapon={type:"melee",name:"",wielding:"",subdualDamage:!1,range:""};conditions={attacker:{invisible:!1,onHigherGround:!1,squeezing:!1,entangled:!1,untrained:!1,mounted:!1,charging:!1,sneakAttacking:!1,firingIntoMelee:!1},opponent:{behindCover:!1,blinded:!1,entangled:!1,helpless:!1,prone:!1}}}const Dt=["d3","d4","d5","d6","d7","d8","d10","d12","d14","d16","d20","d24","d30"],Ue=new Map([["Battleaxe",{damage:"1d10",twoHanded:!0,cost:7,melee:!0}],["Blackjack",{damage:"1d3",sneakDamage:"2d6",cost:3,subdualDamage:!0,melee:!0}],["Club",{damage:"1d4",cost:3,melee:!0}],["Flail",{damage:"1d6",cost:6,melee:!0}],["Garrote",{damage:"1",sneakDamage:"3d4",cost:2,melee:!0}],["Lance",{damage:"1d12",cost:25,onlyUsableWhileMounted:!0,doubleDamageMountedCharging:!0,melee:!0}],["Longsword",{damage:"1d8",cost:10,melee:!0}],["Mace",{damage:"1d6",cost:5,melee:!0}],["Polearm",{damage:"1d10",cost:7,twoHanded:!0,melee:!0}],["Short sword",{damage:"1d6",cost:7,melee:!0}],["Spear",{damage:"1d8",cost:3,doubleDamageMountedCharging:!0,melee:!0}],["Staff",{damage:"1d4",cost:.5,melee:!0}],["Two-handed sword",{damage:"1d10",cost:15,twoHanded:!0,melee:!0}],["Warhammer",{damage:"1d8",cost:5,melee:!0}],["Blowgun",{range:{short:20,medium:40,long:60},damage:"1d3",sneakDamage:"1d5",cost:6,melee:!1,missile:!0}],["Crossbow",{range:{short:80,medium:160,long:240},damage:"1d6",twoHanded:!0,cost:30,melee:!1,missile:!0}],["Dagger",{range:{short:10,medium:20,long:30},damage:"1d4",sneakDamage:"1d10",thrown:!0,cost:3,addStrengthToDamageAtShortRange:!0,melee:!0,missile:!0}],["Dart",{range:{short:20,medium:40,long:60},damage:"1d3",thrown:!0,cost:.5,addStrengthToDamageAtShortRange:!0,melee:!1,missile:!0}],["Handaxe",{range:{short:10,medium:20,long:30},damage:"1d3",thrown:!0,cost:4,addStrengthToDamageAtShortRange:!0,melee:!0,missile:!0}],["Javelin",{range:{short:30,medium:60,long:90},damage:"1d3",thrown:!0,cost:1,addStrengthToDamageAtShortRange:!0,melee:!1,missile:!0}],["Longbow",{range:{short:70,medium:140,long:210},damage:"1d6",twoHanded:!0,cost:40,melee:!1,missile:!0}],["Shortbow",{range:{short:50,medium:100,long:150},damage:"1d6",twoHanded:!0,cost:25,melee:!1,missile:!0}],["Sling",{range:{short:40,medium:80,long:160},damage:"1d3",cost:2,addStrengthToDamageAtShortRange:!0,melee:!1,missile:!0}]]),fn=t=>{const e=Ue.get(t);if(e)return e},mn=S`
  :host {
    display: block;
    padding: 0px;
    font-family: var(--main-font, 'Arial', sans-serif);
    font-size: 1em;
    --primary-text-color: black;
    --secondary-text-color: rgb(113, 133, 122);
    --background-color: #ffffff;
  }
  :host([theme='dark']) {
    --primary-text-color: #ffffff;
    --secondary-text-color: #c3c3c3;
    --background-color: #000000;
  }
  .wrapper {
    border: 1px var(--secondary-text-color) solid;
    background-color: var(--background-color);
    color: var(--primary-text-color);
    padding: 15px;
    border-radius: 10px;
    min-width: 390px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  button.attack-display-button,
  button.damage-display-button {
    aspect-ratio: 1 / 1;
    border-radius: 5px;
    border: 1px var(--secondary-text-color) solid;
    cursor: pointer;
    background: none;
    min-width: 60px;
    min-height: 60px;
    margin: 0;
    padding: 0;
    color: var(--primary-text-color);
  }
  button:hover {
    background-color: rgba(211, 211, 211, 0.5);
  }
  button:active {
    transform: translateY(1px);
  }
  .wielding-and-subdual {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .dice-chain-adjustment-buttons {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .dice-chain-adjustment-buttons button {
    margin: 0;
    padding: 0px;
    aspect-ratio: 1/1;
    width: 22px;
    border: 1px var(--secondary-text-color) solid;
    cursor: pointer;
    border-radius: 50%;
  }
  .wrapper header .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: fit-content;
    text-align: left;
    gap: 5px;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-size: 1em;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-size: 0.8em;
  }
  .range {
    font-size: 0.8em;
  }
  ul {
    font-size: 0.8em;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .checkboxes {
    margin: 0;
    padding: 0;
  }
  .checkboxes li {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  header {
    display: flex;
    justify-content: space-between;
  }
  input[type='checkbox'],
  input[type='radio'] {
    margin: 0;
  }
  .range ul {
    display: flex;
    gap: 5px;
  }
  .range label {
    display: flex;
    gap: 5px;
    flex-direction: row;
    align-items: center;
  }
  .attack {
    display: flex;
    gap: 5px;
  }
  .damage {
    display: flex;
    gap: 5px;
  }
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt={ONE_HANDED:"one-handed",TWO_HANDED:"two-handed",DUAL_WIELD_MAIN_HAND:"dual-wield-main-hand",DUAL_WIELD_OFF_HAND:"dual-wield-off-hand"},bi={"one-handed":"One Handed","two-handed":"Two Handed","dual-wield-main-hand":"Dual Wield - Main Hand","dual-wield-off-hand":"Dual Wield - Off Hand"};class gn extends Pt{static get styles(){return[mn]}static get properties(){return{theme:{type:String,reflect:!0},strength:{type:Number,required:!0},agility:{type:Number,required:!0},type:{type:String},weapon:{type:String,reflect:!0},attackDie:{attribute:"attack-die",type:String,reflect:!0},damageDie:{attribute:"damage-die",type:String,reflect:!0},attackModifierAdjustment:{attribute:"attack-modifier-adjustment",type:Number},attackModifierOverride:{attribute:"attack-modifier-override",type:Number},damageModifierAdjustment:{attribute:"damage-modifier-adjustment",type:Number},damageModifierOverride:{attribute:"damage-modifier-override",type:Number},attackerInvisible:{attribute:"attacker-invisible",type:Boolean},attackerOnHigherGround:{attribute:"attacker-on-higher-ground",type:Boolean},attackerSqueezing:{attribute:"attacker-squeezing",type:Boolean},attackerEntangled:{attribute:"attacker-entangled",type:Boolean},attackerUntrained:{attribute:"attacker-untrained",type:Boolean},attackerMounted:{attribute:"attacker-mounted",type:Boolean},attackerCharging:{attribute:"attacker-charging",type:Boolean},attackerSneakAttacking:{attribute:"attacker-sneak-attacking",type:Boolean},opponentBehindCover:{attribute:"opponent-behind-cover",type:Boolean},opponentBlinded:{attribute:"opponent-blinded",type:Boolean},opponentEntangled:{attribute:"opponent-entangled",type:Boolean},opponentHelpless:{attribute:"opponent-helpless",type:Boolean},opponentProne:{attribute:"opponent-prone",type:Boolean},wielding:{type:String,reflect:!0},attackerFiringIntoMelee:{type:Boolean,attribute:"attacker-firing-into-melee"},range:{state:!0},attackDieAdjustment:{state:!0},damageDieAdjustment:{state:!0}}}constructor(){super(),this.theme=null,this.type=null,this.strength=null,this.agility=null,this.weapon=null,this.attackDie="d20",this.wielding=gt.ONE_HANDED,this.subdualDamage=null,this.damageDie=null,this.attackModifierAdjustment=0,this.attackModifierOverride=null,this.damageModifierAdjustment=0,this.damageModifierOverride=null,this.attackerInvisible=!1,this.attackerOnHigherGround=!1,this.attackerSqueezing=!1,this.attackerEntangled=!1,this.attackerUntrained=!1,this.attackerFiringIntoMelee=!1,this.attackerMounted=!1,this.attackerCharging=!1,this.attackerSneakAttacking=!1,this.opponentBehindCover=!1,this.opponentBlinded=!1,this.opponentEntangled=!1,this.opponentHelpless=!1,this.opponentProne=!1,this.attackDieAdjustment=0,this.range=null}render(){this.type||(this.type=Ue.get(this.weapon||"Dagger")?.melee?"melee":"missile");const e=Ue.get(this.weapon||"Dagger")?.twoHanded,i=!!Ue.get(this.weapon||"Dagger")?.subdualDamage;return b`
      <div class="wrapper" part="wrapper">
        <header part="header">
          <div class="text">
            <h1 part="title">${this.weapon}</h1>
            <h2 part="subtitle">
              ${this.type==="melee"?"Melee":"Missile"}
            </h2>
            ${this.weaponRangeSelector}
          </div>
          <div class="buttons">
            <div class="wielding-and-subdual" part="wielding-and-subdual">
              <select @change="${this.handleWieldingChange}">
                <option
                  value="${gt.ONE_HANDED}"
                  ?selected="${this.wielding===gt.ONE_HANDED}"
                >
                  ${bi[gt.ONE_HANDED]}
                </option>
                <option
                  value="${gt.TWO_HANDED}"
                  ?selected="${this.wielding===gt.TWO_HANDED||e}"
                >
                  ${bi[gt.TWO_HANDED]}
                </option>
                <option
                  value="${gt.DUAL_WIELD_MAIN_HAND}"
                  ?selected="${this.wielding===gt.DUAL_WIELD_MAIN_HAND}"
                >
                  ${bi[gt.DUAL_WIELD_MAIN_HAND]}
                </option>
                <option
                  value="${gt.DUAL_WIELD_OFF_HAND}"
                  ?selected="${this.wielding===gt.DUAL_WIELD_OFF_HAND}"
                >
                  ${bi[gt.DUAL_WIELD_OFF_HAND]}
                </option>
              </select>
              <label>
                ${i?b`<em>subdual only</em>`:b``}
              </label>
            </div>
            <div class="attack" part="attack">
              <div class="dice-chain-adjustment-buttons">
                <button
                  id="increment-dice-chain"
                  @click="${this.adjustAttackDieUp}"
                >
                  +
                </button>
                <button
                  id="decrement-dice-chain"
                  @click="${this.adjustAttackDieDown}"
                >
                  -
                </button>
              </div>
              <button
                class="attack-display-button"
                @click="${this._attackRoll}"
              >
                <h2 part="subtitle">Attack</h2>
                ${this.attackDisplay}
              </button>
            </div>
            <div class="damage" part="damage">
              <button
                class="damage-display-button"
                @click="${this._damageRoll}"
              >
                <h2 part="subtitle">Damage</h2>
                ${this.damageDisplay}
              </button>
            </div>
          </div>
        </header>
      </div>
    `}get weaponRangeSelector(){const e=fn(this.weapon);return e?.missile?(this.range||(this.range="short",e.melee&&e.missile&&(this.range="melee")),b`
      <div class="range" part="range">
        <ul>
          ${e.melee?b`
                <li>
                  <label>
                    <input
                      id="range-melee"
                      type="radio"
                      name="range"
                      value="melee"
                      .checked="${this.range==="melee"}"
                      @change="${this.handleRangeChange}"
                    />
                    Melee
                  </label>
                </li>
              `:b``}
          <li>
            <label>
              <input
                id="range-short"
                type="radio"
                name="range"
                value="short"
                .checked="${this.range==="short"}"
                @change="${this.handleRangeChange}"
              />
              Short (${e?.range?.short})
            </label>
          </li>
          <li>
            <label>
              <input
                id="range-medium"
                type="radio"
                name="range"
                value="medium"
                .checked="${this.range==="medium"}"
                @change="${this.handleRangeChange}"
              />
              Medium (${e?.range?.medium})
            </label>
          </li>
          <li>
            <label>
              <input
                id="range-long"
                type="radio"
                name="range"
                value="long"
                .checked="${this.range==="long"}"
                @change="${this.handleRangeChange}"
              />
              Long (${e?.range?.long})
            </label>
          </li>
        </ul>
      </div>
    `):b``}handleSubdualDamageChange(){this.subdualDamage=!this.subdualDamage,this.dispatchEvent(new CustomEvent("change",{detail:{subdualDamage:this.subdualDamage}}))}handleWieldingChange(e){this.wielding=e.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{wielding:this.wielding}}))}handleRangeChange(e){e.target.value==="melee"?this.type="melee":this.type="missile",this.range=e.target.value}adjustAttackDieUp(){this._attackDie!=="d30"&&this.attackDieAdjustment++}adjustAttackDieDown(){this._attackDie!=="d3"&&this.attackDieAdjustment--}_attackRoll(){const e=new Js;e.name=this.type==="melee"?"Melee Attack":"Missile Attack",e.description=`A ${this.type} attack roll was made with a ${this.weapon?.toLowerCase()}`,e.type="attack",e.weapon.type=this.type,e.weapon.name=this.weapon,e.weapon.wielding=this.wielding,e.weapon.subdualDamage=this.subdualDamage,e.weapon.range=this.range;const[i,s]=this._attackDie.split("d");e.roll.qty=Number(i||1),e.roll.die=Number(s||20),e.roll.mod=this._attackModifier,e.roll.attackDieAdjustment=this.attackDieAdjustment,e.conditions.attacker.charging=this.attackerCharging,e.conditions.attacker.entangled=this.attackerCharging,e.conditions.attacker.attackerFiringIntoMelee=this.attackerFiringIntoMelee,e.conditions.attacker.invisible=this.attackerInvisible,e.conditions.attacker.mounted=this.attackerMounted,e.conditions.attacker.onHigherGround=this.attackerOnHigherGround,e.conditions.attacker.sneakAttacking=this.attackerSneakAttacking,e.conditions.attacker.squeezing=this.attackerSqueezing,e.conditions.attacker.untrained=this.attackerUntrained,this.dispatchEvent(new CustomEvent("dice-roll",{detail:{diceRoll:e}})),this.attackDieAdjustment=0}_damageRoll(){const e=new Js;e.name=this.type==="melee"?"Melee Damage":"Missile Damage",e.description=`A ${this.type} damage roll was made with a ${this.weapon?.toLowerCase()}`,e.weapon.type=this.type,e.weapon.name=this.weapon,e.weapon.wielding=this.wielding,e.weapon.subdualDamage=this.subdualDamage,e.weapon.range=this.range;const[i,s]=this._damageDie.split("d");e.roll.qty=Number(i||1),e.roll.die=Number(s||4),e.roll.mod=this._damageModifier,e.conditions.attacker.charging=this.attackerCharging,e.conditions.attacker.entangled=this.attackerCharging,e.conditions.attacker.attackerFiringIntoMelee=this.attackerFiringIntoMelee,e.conditions.attacker.invisible=this.attackerInvisible,e.conditions.attacker.mounted=this.attackerMounted,e.conditions.attacker.onHigherGround=this.attackerOnHigherGround,e.conditions.attacker.sneakAttacking=this.attackerSneakAttacking,e.conditions.attacker.squeezing=this.attackerSqueezing,e.conditions.attacker.untrained=this.attackerUntrained,this.dispatchEvent(new CustomEvent("dice-roll",{detail:{diceRoll:e}}))}incrementDiceChain(e,i=1){for(let s=i;s>0;s--)Dt[Dt.indexOf(e)+1]&&(e=Dt[Dt.indexOf(e)+1]);return e}decrementDiceChain(e,i=1){for(let s=i;s>0;s--)Dt[Dt.indexOf(e)-1]&&(e=Dt[Dt.indexOf(e)-1]);return e}get _attackDie(){let[e,i]=this.attackDie.split("d");i=`d${i}`,e=e||"1",this.attackerSqueezing&&(i=this.decrementDiceChain(i)),this.attackerEntangled&&(i=this.decrementDiceChain(i)),this.attackerUntrained&&(i=this.decrementDiceChain(i)),this.opponentEntangled&&(i=this.incrementDiceChain(i)),this.opponentHelpless&&(i=this.incrementDiceChain(i)),this.type==="melee"&&(this.wielding===gt.DUAL_WIELD_MAIN_HAND&&(this.agility<=8&&(i=this.decrementDiceChain(i,3)),this.agility>=9&&this.agility<=11&&(i=this.decrementDiceChain(i,2)),this.agility>=12&&this.agility<=15&&(i=this.decrementDiceChain(i)),this.agility>=16&&this.agility<=17&&(i=this.decrementDiceChain(i))),this.wielding===gt.DUAL_WIELD_OFF_HAND&&(this.agility<=8&&(i=this.decrementDiceChain(i,4)),this.agility>=9&&this.agility<=11&&(i=this.decrementDiceChain(i,3)),this.agility>=12&&this.agility<=15&&(i=this.decrementDiceChain(i,2)),this.agility>=16&&this.agility<=17&&(i=this.decrementDiceChain(i)),this.agility>=18&&(i=this.decrementDiceChain(i)))),this.type==="missile"&&this.range==="long"&&(i=this.decrementDiceChain(i));let s=this.attackDieAdjustment;for(;s!==0;)if(s<0){if(i==="d3"){s=0;continue}i=Dt[Dt.indexOf(i)-1],s++}else{if(i==="d30"){s=0;continue}i=Dt[Dt.indexOf(i)+1],s--}return`${e}${i}`}get _attackModifier(){let e=0;return this.type==="melee"&&(e=qi(this.strength),this.attackerInvisible&&(e+=2),this.attackerOnHigherGround&&(e+=1),this.opponentProne&&(e+=2)),this.type==="missile"&&(e=qi(this.agility),this.range==="medium"&&(e-=2),this.attackerFiringIntoMelee&&(e-=1),this.opponentProne&&(e-=2)),this.opponentBehindCover&&(e-=2),this.opponentBlinded&&(e+=2),this.attackModifierAdjustment&&(e+=this.attackModifierAdjustment),this.attackModifierOverride&&(e=this.attackModifierOverride),e}get attackDisplay(){const e=this._attackDie,i=this._attackModifier;return`${e}${i?i>0?`+${i}`:i:""}`}get _damageDie(){const e=Ue.get(this.weapon);let i=null;return e?.damage&&(i=e.damage),this.attackerSneakAttacking&&e?.sneakDamage&&(i=e?.sneakDamage),this.damageDie&&(i=this.damageDie),i}get _damageModifier(){let e=0;return(this.type==="melee"||this.type==="missile"&&this.range==="short")&&(e=qi(this.strength)),this.damageModifierAdjustment&&(e+=this.damageModifierAdjustment),this.damageModifierOverride&&(e=this.damageModifierOverride),e}get damageDisplay(){const e=this._damageModifier;return`${this._damageDie}${e?e>0?`+${e}`:e:""}`}}window.customElements.define("equipped-weapon",gn);const bn=S`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 34px;
    padding: 12px;
  }
`;var vn=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,ci=(t,e,i,s)=>{for(var o=s>1?void 0:s?yn(e,i):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(o=(s?n(e,i,o):n(o))||o);return s&&o&&vn(e,i,o),o};function wn(t){return Math.floor(Math.random()*t)+1}function _n(t,e,i){let s=[];for(let a=0;a<t;a++)s.push(wn(e));let o=s.reduce((a,n)=>a+n,0)+i;return{rolls:s,total:o}}let be=class extends Pt{constructor(){super(...arguments),this.strength=3,this.agility=3,this.addedWeaponsList=[],this.diceRollResult=""}incrementWeapon(t){const e=t.detail.name,i=[...this.addedWeaponsList,e];this.addedWeaponsList=i}decrementWeapon(t){const e=t.detail.name,i=this.addedWeaponsList.lastIndexOf(e);i!==-1&&this.addedWeaponsList.splice(i,1),this.addedWeaponsList=[...this.addedWeaponsList]}get weaponsMenu(){const t=Array.from(xr.entries()).map(([e,i])=>b`<weapon-row
        name="${e}"
        @decrement-weapon="${this.decrementWeapon}"
        @increment-weapon="${this.incrementWeapon}"
      ></weapon-row>`);return b` <sl-dropdown>
      <sl-button slot="trigger" caret>Select Weapons</sl-button>
      <sl-menu> ${t} </sl-menu>
    </sl-dropdown>`}attributeChange(t){const e=t.target.label,[i]=e.split(" ");this[i.toLowerCase()]=t.target.value}diceRoll(t){const e=this.shadowRoot.querySelector(".drawer-placement-bottom"),{name:i,description:s,roll:o,type:a}=t.detail.diceRoll,{total:n,rolls:d}=_n(o.qty,o.die,o.mod);let c=`${o.qty}d${o.die}`;o.mod>0?c+=` + ${o.mod}`:o.mod<0&&(c+=` - ${o.mod*-1}`);let h=d.map(p=>`<span class="die-result">${p}</span>`).join(" + ");console.log(h),o.mod>0?h+=` + ${o.mod}`:o.mod<0&&(h+=` - ${o.mod*-1}`),h+=` = ${n}`;let m=!1,u=!1;a==="attack"&&(d[0]===1&&(m=!0),d[0]===o.die&&o.die>=20&&(u=!0)),this.diceRollResult=b`
      <h2>${i}</h2>
      <p>${s}</p>
      <div><strong>Roll</strong> ${Se(c)}</div>
      <div><strong>Result</strong> ${Se(h)}</div>
      ${m?b`<div><strong>Fumble!</strong></div>`:b``}
      ${u?b`<div><strong>Crit!</strong></div>`:b``}
    `,e.show()}render(){return b`
      <main>
        <h1>DCC Attack Calculator</h1>
        <sl-range
          @sl-change="${this.attributeChange}"
          help-text="Set character strength (3-18)"
          label="Strength (${this.strength})"
          min="3"
          max="18"
        ></sl-range>
        <sl-range
          @sl-change="${this.attributeChange}"
          help-text="Set character agility (3-18)"
          label="Agility (${this.agility})"
          min="3"
          max="18"
        ></sl-range>
        ${this.weaponsMenu}
        <weapons-panel
          >${this.addedWeaponsList.map(t=>b`<equipped-weapon
              .weapon="${t}"
              strength="${this.strength}"
              agility="${this.agility}"
              @dice-roll="${this.diceRoll}"
            ></equipped-weapon>`)}</weapons-panel
        >
        <sl-drawer placement="bottom" class="drawer-placement-bottom">
          ${this.diceRollResult}
        </sl-drawer>
      </main>
    `}};be.styles=[bn,S`
      h1 {
        margin: 0;
        padding: 0;
      }
      main {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    `];ci([l({type:Number})],be.prototype,"strength",2);ci([l({type:Number})],be.prototype,"agility",2);ci([l({state:!0,attribute:!1})],be.prototype,"addedWeaponsList",2);ci([l({state:!0,attribute:!1})],be.prototype,"diceRollResult",2);be=ci([ms("app-home")],be);var xn=S`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Cs=class extends E{render(){return b` <slot></slot> `}};Cs.styles=[T,xn];Cs.define("sl-visually-hidden");var kn=S`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,at=class extends E{constructor(){super(),this.localize=new N(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=js(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=js(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await it(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:s}=Y(this,"tooltip.show",{dir:this.localize.dir()});await Z(this.popup.popup,i,s),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await it(this.body);const{keyframes:i,options:s}=Y(this,"tooltip.hide",{dir:this.localize.dir()});await Z(this.popup.popup,i,s),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}render(){return b`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${O({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};at.styles=[T,kn];at.dependencies={"sl-popup":W};r([$("slot:not([name])")],at.prototype,"defaultSlot",2);r([$(".tooltip__body")],at.prototype,"body",2);r([$("sl-popup")],at.prototype,"popup",2);r([l()],at.prototype,"content",2);r([l()],at.prototype,"placement",2);r([l({type:Boolean,reflect:!0})],at.prototype,"disabled",2);r([l({type:Number})],at.prototype,"distance",2);r([l({type:Boolean,reflect:!0})],at.prototype,"open",2);r([l({type:Number})],at.prototype,"skidding",2);r([l()],at.prototype,"trigger",2);r([l({type:Boolean})],at.prototype,"hoist",2);r([x("open",{waitUntilFirstUpdate:!0})],at.prototype,"handleOpenChange",1);r([x(["content","distance","hoist","placement","skidding"])],at.prototype,"handleOptionsChange",1);r([x("disabled")],at.prototype,"handleDisabledChange",1);U("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});U("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});at.define("sl-tooltip");var $n=S`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,Cn=S`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Sn=S`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,ot=class extends E{constructor(){super(...arguments),this.formControlController=new te(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new vt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return b`
      <div
        class=${O({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${O({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${A(this.value)}
            .indeterminate=${ge(this.indeterminate)}
            .checked=${ge(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?b`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?b`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ot.styles=[T,ye,Sn];ot.dependencies={"sl-icon":j};r([$('input[type="checkbox"]')],ot.prototype,"input",2);r([I()],ot.prototype,"hasFocus",2);r([l()],ot.prototype,"title",2);r([l()],ot.prototype,"name",2);r([l()],ot.prototype,"value",2);r([l({reflect:!0})],ot.prototype,"size",2);r([l({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);r([l({type:Boolean,reflect:!0})],ot.prototype,"checked",2);r([l({type:Boolean,reflect:!0})],ot.prototype,"indeterminate",2);r([ve("checked")],ot.prototype,"defaultChecked",2);r([l({reflect:!0})],ot.prototype,"form",2);r([l({type:Boolean,reflect:!0})],ot.prototype,"required",2);r([l({attribute:"help-text"})],ot.prototype,"helpText",2);r([x("disabled",{waitUntilFirstUpdate:!0})],ot.prototype,"handleDisabledChange",1);r([x(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],ot.prototype,"handleStateChange",1);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function to(t,e,i){return t?e(t):i?.(t)}var J=class ls extends E{constructor(){super(...arguments),this.localize=new N(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await it(this.childrenContainer);const{keyframes:e,options:i}=Y(this,"tree-item.collapse",{dir:this.localize.dir()});await Z(this.childrenContainer,Ci(e,this.childrenContainer.scrollHeight),i),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&ls.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await it(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:i}=Y(this,"tree-item.expand",{dir:this.localize.dir()});await Z(this.childrenContainer,Ci(e,this.childrenContainer.scrollHeight),i),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>ls.isTreeItem(i)&&(e||!i.disabled)):[]}render(){const e=this.localize.dir()==="rtl",i=!this.loading&&(!this.isLeaf||this.lazy);return b`
      <div
        part="base"
        class="${O({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":i,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${O({"tree-item__expand-button":!0,"tree-item__expand-button--visible":i})}
            aria-hidden="true"
          >
            ${to(this.loading,()=>b` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${to(this.selectable,()=>b`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${ge(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};J.styles=[T,Cn];J.dependencies={"sl-checkbox":ot,"sl-icon":j,"sl-spinner":li};r([I()],J.prototype,"indeterminate",2);r([I()],J.prototype,"isLeaf",2);r([I()],J.prototype,"loading",2);r([I()],J.prototype,"selectable",2);r([l({type:Boolean,reflect:!0})],J.prototype,"expanded",2);r([l({type:Boolean,reflect:!0})],J.prototype,"selected",2);r([l({type:Boolean,reflect:!0})],J.prototype,"disabled",2);r([l({type:Boolean,reflect:!0})],J.prototype,"lazy",2);r([$("slot:not([name])")],J.prototype,"defaultSlot",2);r([$("slot[name=children]")],J.prototype,"childrenSlot",2);r([$(".tree-item__item")],J.prototype,"itemElement",2);r([$(".tree-item__children")],J.prototype,"childrenContainer",2);r([$(".tree-item__expand-button slot")],J.prototype,"expandButtonSlot",2);r([x("loading",{waitUntilFirstUpdate:!0})],J.prototype,"handleLoadingChange",1);r([x("disabled")],J.prototype,"handleDisabledChange",1);r([x("selected")],J.prototype,"handleSelectedChange",1);r([x("expanded",{waitUntilFirstUpdate:!0})],J.prototype,"handleExpandedChange",1);r([x("expanded",{waitUntilFirstUpdate:!0})],J.prototype,"handleExpandAnimation",1);r([x("lazy",{waitUntilFirstUpdate:!0})],J.prototype,"handleLazyChange",1);var Xe=J;U("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});U("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function et(t,e,i){const s=o=>Object.is(o,-0)?0:o;return t<e?s(e):t>i?s(i):s(t)}function eo(t,e=!1){function i(a){const n=a.getChildrenItems({includeDisabled:!1});if(n.length){const d=n.every(h=>h.selected),c=n.every(h=>!h.selected&&!h.indeterminate);a.selected=d,a.indeterminate=!d&&!c}}function s(a){const n=a.parentElement;Xe.isTreeItem(n)&&(i(n),s(n))}function o(a){for(const n of a.getChildrenItems())n.selected=e?a.selected||n.selected:!n.disabled&&a.selected,o(n);e&&i(a)}o(t),s(t)}var we=class extends E{constructor(){super(),this.selection="single",this.localize=new N(this),this.clickTarget=null,this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const i=t.querySelector(`[slot="${e}-icon"]`),s=this.getExpandButtonIcon(e);s&&(i===null?t.append(s):i.hasAttribute("data-default")&&i.replaceWith(s))})},this.handleTreeChanged=t=>{for(const e of t){const i=[...e.addedNodes].filter(Xe.isTreeItem),s=[...e.removedNodes].filter(Xe.isTreeItem);i.forEach(this.initTreeItem),this.lastFocusedItem&&s.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Xe.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(t){const i=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(i){const s=i.cloneNode(!0);return[s,...s.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),s.setAttribute("data-default",""),s.slot=`${t}-icon`,s}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),eo(t);else if(this.selection==="single"||t.isLeaf){const s=this.getAllTreeItems();for(const o of s)o.selected=o===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const i=this.selectedItems;(e.length!==i.length||i.some(s=>!e.includes(s)))&&Promise.all(i.map(s=>s.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(o=>{var a;return["input","textarea"].includes((a=o?.tagName)==null?void 0:a.toLowerCase())}))return;const e=this.getFocusableItems(),i=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const o=e.findIndex(c=>c.matches(":focus")),a=e[o],n=c=>{const h=e[et(c,0,e.length-1)];this.focusItem(h)},d=c=>{a.expanded=c};t.key==="ArrowDown"?n(o+1):t.key==="ArrowUp"?n(o-1):i&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft"?!a||a.disabled||a.expanded||a.isLeaf&&!a.lazy?n(o+1):d(!0):i&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight"?!a||a.disabled||a.isLeaf||!a.expanded?n(o-1):d(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(a.disabled||this.selectItem(a))}}handleClick(t){const e=t.target,i=e.closest("sl-tree-item"),s=t.composedPath().some(o=>{var a;return(a=o?.classList)==null?void 0:a.contains("tree-item__expand-button")});!i||i.disabled||e!==this.clickTarget||(s?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const i of e)i.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(i=>eo(i,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=i=>i.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(i=>{var s;if(i.disabled)return!1;const o=(s=i.parentElement)==null?void 0:s.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(i),!e.has(i)})}render(){return b`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};we.styles=[T,$n];r([$("slot:not([name])")],we.prototype,"defaultSlot",2);r([$("slot[name=expand-icon]")],we.prototype,"expandedIconSlot",2);r([$("slot[name=collapse-icon]")],we.prototype,"collapsedIconSlot",2);r([l()],we.prototype,"selection",2);r([x("selection")],we.prototype,"handleSelectionChange",1);we.define("sl-tree");Xe.define("sl-tree-item");var zn=S`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,An=0,di=class extends E{constructor(){super(...arguments),this.attrId=++An,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return b`
      <slot
        part="base"
        class=${O({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};di.styles=[T,zn];r([l({reflect:!0})],di.prototype,"name",2);r([l({type:Boolean,reflect:!0})],di.prototype,"active",2);r([x("active")],di.prototype,"handleActiveChange",1);di.define("sl-tab-panel");var En=S`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,le=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return b`
      <span
        part="base"
        class=${O({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?b`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};le.styles=[T,En];le.dependencies={"sl-icon-button":st};r([l({reflect:!0})],le.prototype,"variant",2);r([l({reflect:!0})],le.prototype,"size",2);r([l({type:Boolean,reflect:!0})],le.prototype,"pill",2);r([l({type:Boolean})],le.prototype,"removable",2);le.define("sl-tag");var Dn=S`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,H=class extends E{constructor(){super(...arguments),this.formControlController=new te(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new vt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const o=e??this.input.selectionStart,a=i??this.input.selectionEnd;this.input.setRangeText(t,o,a,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e;return b`
      <div
        part="form-control"
        class=${O({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${O({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${A(this.name)}
              .value=${ge(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${A(this.placeholder)}
              rows=${A(this.rows)}
              minlength=${A(this.minlength)}
              maxlength=${A(this.maxlength)}
              autocapitalize=${A(this.autocapitalize)}
              autocorrect=${A(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${A(this.spellcheck)}
              enterkeyhint=${A(this.enterkeyhint)}
              inputmode=${A(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};H.styles=[T,ye,Dn];r([$(".textarea__control")],H.prototype,"input",2);r([I()],H.prototype,"hasFocus",2);r([l()],H.prototype,"title",2);r([l()],H.prototype,"name",2);r([l()],H.prototype,"value",2);r([l({reflect:!0})],H.prototype,"size",2);r([l({type:Boolean,reflect:!0})],H.prototype,"filled",2);r([l()],H.prototype,"label",2);r([l({attribute:"help-text"})],H.prototype,"helpText",2);r([l()],H.prototype,"placeholder",2);r([l({type:Number})],H.prototype,"rows",2);r([l()],H.prototype,"resize",2);r([l({type:Boolean,reflect:!0})],H.prototype,"disabled",2);r([l({type:Boolean,reflect:!0})],H.prototype,"readonly",2);r([l({reflect:!0})],H.prototype,"form",2);r([l({type:Boolean,reflect:!0})],H.prototype,"required",2);r([l({type:Number})],H.prototype,"minlength",2);r([l({type:Number})],H.prototype,"maxlength",2);r([l()],H.prototype,"autocapitalize",2);r([l()],H.prototype,"autocorrect",2);r([l()],H.prototype,"autocomplete",2);r([l({type:Boolean})],H.prototype,"autofocus",2);r([l()],H.prototype,"enterkeyhint",2);r([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],H.prototype,"spellcheck",2);r([l()],H.prototype,"inputmode",2);r([ve()],H.prototype,"defaultValue",2);r([x("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);r([x("rows",{waitUntilFirstUpdate:!0})],H.prototype,"handleRowsChange",1);r([x("value",{waitUntilFirstUpdate:!0})],H.prototype,"handleValueChange",1);H.define("sl-textarea");var Tn=S`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Ln=0,Ut=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.attrId=++Ln,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,b`
      <div
        part="base"
        class=${O({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?b`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Ut.styles=[T,Tn];Ut.dependencies={"sl-icon-button":st};r([$(".tab")],Ut.prototype,"tab",2);r([l({reflect:!0})],Ut.prototype,"panel",2);r([l({type:Boolean,reflect:!0})],Ut.prototype,"active",2);r([l({type:Boolean})],Ut.prototype,"closable",2);r([l({type:Boolean,reflect:!0})],Ut.prototype,"disabled",2);r([x("active")],Ut.prototype,"handleActiveChange",1);r([x("disabled")],Ut.prototype,"handleDisabledChange",1);Ut.define("sl-tab");var On=S`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,zt=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(i=>!["aria-labelledby","aria-controls"].includes(i.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(i=>i.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((i,s)=>{var o;i[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),s.unobserve(i[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(t={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(i=>t.includeDisabled?i.tagName.toLowerCase()==="sl-tab":i.tagName.toLowerCase()==="sl-tab"&&!i.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const i=t.target.closest("sl-tab");i?.closest("sl-tab-group")===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(t){const i=t.target.closest("sl-tab");if(i?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const o=this.tabs.find(n=>n.matches(":focus")),a=this.localize.dir()==="rtl";if(o?.tagName.toLowerCase()==="sl-tab"){let n=this.tabs.indexOf(o);t.key==="Home"?n=0:t.key==="End"?n=this.tabs.length-1:["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"?n--:(["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown")&&n++,n<0&&(n=this.tabs.length-1),n>this.tabs.length-1&&(n=0),this.tabs[n].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[n],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&ts(this.tabs[n],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=Zt({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const i=this.activeTab;this.activeTab=t,this.tabs.forEach(s=>s.active=s===this.activeTab),this.panels.forEach(s=>{var o;return s.active=s.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&ts(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(i=>i.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,i=t.clientHeight,s=this.localize.dir()==="rtl",o=this.getAllTabs(),n=o.slice(0,o.indexOf(t)).reduce((d,c)=>({left:d.left+c.clientWidth,top:d.top+c.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(i=>i.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return b`
      <div
        part="base"
        class=${O({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?b`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?b`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};zt.styles=[T,On];zt.dependencies={"sl-icon-button":st};r([$(".tab-group")],zt.prototype,"tabGroup",2);r([$(".tab-group__body")],zt.prototype,"body",2);r([$(".tab-group__nav")],zt.prototype,"nav",2);r([$(".tab-group__indicator")],zt.prototype,"indicator",2);r([I()],zt.prototype,"hasScrollControls",2);r([l()],zt.prototype,"placement",2);r([l()],zt.prototype,"activation",2);r([l({attribute:"no-scroll-controls",type:Boolean})],zt.prototype,"noScrollControls",2);r([x("noScrollControls",{waitUntilFirstUpdate:!0})],zt.prototype,"updateScrollControls",1);r([x("placement",{waitUntilFirstUpdate:!0})],zt.prototype,"syncIndicator",1);zt.define("sl-tab-group");li.define("sl-spinner");var In=S`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Ge(t,e){function i(o){const a=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,d=a.left+n.scrollX,c=a.top+n.scrollY,h=o.pageX-d,m=o.pageY-c;e?.onMove&&e.onMove(h,m)}function s(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",s),e?.onStop&&e.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",s),e?.initialEvent instanceof PointerEvent&&i(e.initialEvent)}var At=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),Ge(this,{onMove:(i,s)=>{let o=this.vertical?s:i;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(n=>{let d;n.endsWith("%")?d=this.size*(parseFloat(n)/100):d=parseFloat(n),e&&!this.vertical&&(d=this.size-d),o>=d-this.snapThreshold&&o<=d+this.snapThreshold&&(o=d)}),this.position=et(this.pixelsToPercentage(o),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=this.position;const i=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=i),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=i),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),this.position=et(e,0,100)}}handleResize(t){const{width:e,height:i}=t[0].contentRect;this.size=this.vertical?i:e,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",i=this.localize.dir()==="rtl",s=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?i&&!this.vertical?this.style[t]=`${s} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${s}`:i&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${o}`,this.style[e]="",b`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${A(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};At.styles=[T,In];r([$(".divider")],At.prototype,"divider",2);r([l({type:Number,reflect:!0})],At.prototype,"position",2);r([l({attribute:"position-in-pixels",type:Number})],At.prototype,"positionInPixels",2);r([l({type:Boolean,reflect:!0})],At.prototype,"vertical",2);r([l({type:Boolean,reflect:!0})],At.prototype,"disabled",2);r([l()],At.prototype,"primary",2);r([l()],At.prototype,"snap",2);r([l({type:Number,attribute:"snap-threshold"})],At.prototype,"snapThreshold",2);r([x("position")],At.prototype,"handlePositionChange",1);r([x("positionInPixels")],At.prototype,"handlePositionInPixelsChange",1);r([x("vertical")],At.prototype,"handleVerticalChange",1);At.define("sl-split-panel");var Pn=S`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,pt=class extends E{constructor(){super(...arguments),this.formControlController=new te(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new vt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return b`
      <div
        class=${O({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${O({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${A(this.value)}
            .checked=${ge(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};pt.styles=[T,ye,Pn];r([$('input[type="checkbox"]')],pt.prototype,"input",2);r([I()],pt.prototype,"hasFocus",2);r([l()],pt.prototype,"title",2);r([l()],pt.prototype,"name",2);r([l()],pt.prototype,"value",2);r([l({reflect:!0})],pt.prototype,"size",2);r([l({type:Boolean,reflect:!0})],pt.prototype,"disabled",2);r([l({type:Boolean,reflect:!0})],pt.prototype,"checked",2);r([ve("checked")],pt.prototype,"defaultChecked",2);r([l({reflect:!0})],pt.prototype,"form",2);r([l({type:Boolean,reflect:!0})],pt.prototype,"required",2);r([l({attribute:"help-text"})],pt.prototype,"helpText",2);r([x("checked",{waitUntilFirstUpdate:!0})],pt.prototype,"handleCheckedChange",1);r([x("disabled",{waitUntilFirstUpdate:!0})],pt.prototype,"handleDisabledChange",1);pt.define("sl-switch");var Mn=S`
  :host {
    display: contents;
  }
`,Pi=class extends E{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(i=>this.resizeObserver.unobserve(i)),this.observedElements=[],e.forEach(i=>{this.resizeObserver.observe(i),this.observedElements.push(i)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return b` <slot @slotchange=${this.handleSlotChange}></slot> `}};Pi.styles=[T,Mn];r([l({type:Boolean,reflect:!0})],Pi.prototype,"disabled",2);r([x("disabled",{waitUntilFirstUpdate:!0})],Pi.prototype,"handleDisabledChange",1);Pi.define("sl-resize-observer");var Rn=S`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,B=class extends E{constructor(){super(...arguments),this.formControlController=new te(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new vt(this,"help-text","label"),this.localize=new N(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>b`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=e.closest(".select__clear")!==null,s=e.closest("sl-icon-button")!==null;if(!(i||s)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const o=this.getAllOptions(),a=o.indexOf(this.currentOption);let n=Math.max(0,a);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=a+1,n>o.length-1&&(n=0)):t.key==="ArrowUp"?(n=a-1,n<0&&(n=o.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=o.length-1),this.setCurrentOption(o[n])}if(t.key.length===1||t.key==="Backspace"){const o=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const a of o)if(a.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(a);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const i=t.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="sl-icon-button");this.disabled||i||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const i=t.target.closest("sl-option"),s=this.value;i&&!i.disabled&&(this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],i=[];customElements.get("sl-option")?(t.forEach(s=>i.push(s.value)),this.setSelectedOptions(t.filter(s=>e.includes(s.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(t,e){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(s=>s.selected=!1),i.length&&i.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i,s;this.selectedOptions=this.getAllOptions().filter(o=>o.selected),this.multiple?(this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(e=(t=this.selectedOptions[0])==null?void 0:t.value)!=null?e:"",this.displayLabel=(s=(i=this.selectedOptions[0])==null?void 0:i.getTextLabel())!=null?s:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return b`<div @sl-remove=${s=>this.handleTagRemove(s,t)}>
          ${typeof i=="string"?Se(i):i}
        </div>`}else if(e===this.maxOptionsVisible)return b`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return b``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(i=>e.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await it(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=Y(this,"select.show",{dir:this.localize.dir()});await Z(this.popup.popup,t,e),this.currentOption&&ts(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await it(this);const{keyframes:t,options:e}=Y(this,"select.hide",{dir:this.localize.dir()});await Z(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,bt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,bt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,o=this.clearable&&!this.disabled&&this.value.length>0,a=this.placeholder&&this.value.length===0;return b`
      <div
        part="form-control"
        class=${O({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${O({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":a,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?b`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?b`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};B.styles=[T,ye,Rn];B.dependencies={"sl-icon":j,"sl-popup":W,"sl-tag":le};r([$(".select")],B.prototype,"popup",2);r([$(".select__combobox")],B.prototype,"combobox",2);r([$(".select__display-input")],B.prototype,"displayInput",2);r([$(".select__value-input")],B.prototype,"valueInput",2);r([$(".select__listbox")],B.prototype,"listbox",2);r([I()],B.prototype,"hasFocus",2);r([I()],B.prototype,"displayLabel",2);r([I()],B.prototype,"currentOption",2);r([I()],B.prototype,"selectedOptions",2);r([l()],B.prototype,"name",2);r([l({converter:{fromAttribute:t=>t.split(" "),toAttribute:t=>t.join(" ")}})],B.prototype,"value",2);r([ve()],B.prototype,"defaultValue",2);r([l({reflect:!0})],B.prototype,"size",2);r([l()],B.prototype,"placeholder",2);r([l({type:Boolean,reflect:!0})],B.prototype,"multiple",2);r([l({attribute:"max-options-visible",type:Number})],B.prototype,"maxOptionsVisible",2);r([l({type:Boolean,reflect:!0})],B.prototype,"disabled",2);r([l({type:Boolean})],B.prototype,"clearable",2);r([l({type:Boolean,reflect:!0})],B.prototype,"open",2);r([l({type:Boolean})],B.prototype,"hoist",2);r([l({type:Boolean,reflect:!0})],B.prototype,"filled",2);r([l({type:Boolean,reflect:!0})],B.prototype,"pill",2);r([l()],B.prototype,"label",2);r([l({reflect:!0})],B.prototype,"placement",2);r([l({attribute:"help-text"})],B.prototype,"helpText",2);r([l({reflect:!0})],B.prototype,"form",2);r([l({type:Boolean,reflect:!0})],B.prototype,"required",2);r([l()],B.prototype,"getTag",2);r([x("disabled",{waitUntilFirstUpdate:!0})],B.prototype,"handleDisabledChange",1);r([x("value",{waitUntilFirstUpdate:!0})],B.prototype,"handleValueChange",1);r([x("open",{waitUntilFirstUpdate:!0})],B.prototype,"handleOpenChange",1);U("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});U("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});B.define("sl-select");var Fn=S`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Ss=class extends E{constructor(){super(...arguments),this.effect="none"}render(){return b`
      <div
        part="base"
        class=${O({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Ss.styles=[T,Fn];r([l()],Ss.prototype,"effect",2);Ss.define("sl-skeleton");var Bn=S`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const No="important",Vn=" !"+No,yt=si(class extends oi{constructor(t){if(super(t),t.type!==Nt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return s==null?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)e[s]==null&&(this.ft.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in e){const o=e[s];if(o!=null){this.ft.add(s);const a=typeof o=="string"&&o.endsWith(Vn);s.includes("-")||a?i.setProperty(s,a?o.slice(0,-11):o,a?No:""):i[s]=o}}return kt}});var ft=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:i,right:s,width:o}=this.rating.getBoundingClientRect(),a=e?this.roundToPrecision((s-t)/o*this.max,this.precision):this.roundToPrecision((t-i)/o*this.max,this.precision);return et(a,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl",s=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight"){const o=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft"){const o=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==s&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const i=1/e;return Math.ceil(t*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let i=0;return this.disabled||this.readonly?i=this.value:i=this.isHovering?this.hoverValue:this.value,b`
      <div
        part="base"
        class=${O({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(s=>i>s&&i<s+1?b`
                <span
                  class=${O({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===s+1})}
                  role="presentation"
                >
                  <div
                    style=${yt({clipPath:t?`inset(0 ${(i-s)*100}% 0 0)`:`inset(0 0 0 ${(i-s)*100}%)`})}
                  >
                    ${Se(this.getSymbol(s+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${yt({clipPath:t?`inset(0 0 0 ${100-(i-s)*100}%)`:`inset(0 ${100-(i-s)*100}% 0 0)`})}
                  >
                    ${Se(this.getSymbol(s+1))}
                  </div>
                </span>
              `:b`
              <span
                class=${O({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===s+1,"rating__symbol--active":i>=s+1})}
                role="presentation"
              >
                ${Se(this.getSymbol(s+1))}
              </span>
            `)}
        </span>
      </div>
    `}};ft.styles=[T,Bn];ft.dependencies={"sl-icon":j};r([$(".rating")],ft.prototype,"rating",2);r([I()],ft.prototype,"hoverValue",2);r([I()],ft.prototype,"isHovering",2);r([l()],ft.prototype,"label",2);r([l({type:Number})],ft.prototype,"value",2);r([l({type:Number})],ft.prototype,"max",2);r([l({type:Number})],ft.prototype,"precision",2);r([l({type:Boolean,reflect:!0})],ft.prototype,"readonly",2);r([l({type:Boolean,reflect:!0})],ft.prototype,"disabled",2);r([l()],ft.prototype,"getSymbol",2);r([gs({passive:!0})],ft.prototype,"handleTouchMove",1);r([x("hoverValue")],ft.prototype,"handleHoverValueChange",1);r([x("isHovering")],ft.prototype,"handleIsHoveringChange",1);ft.define("sl-rating");var Nn=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],ce=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=e.getTime()-t.getTime(),{unit:s,value:o}=Nn.find(a=>Math.abs(i)<a.max);if(this.isoTime=e.toISOString(),this.titleTime=this.localize.date(e,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(i/o),s,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let a;s==="minute"?a=vi("second"):s==="hour"?a=vi("minute"):s==="day"?a=vi("hour"):a=vi("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),a)}return b` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};r([I()],ce.prototype,"isoTime",2);r([I()],ce.prototype,"relativeTime",2);r([I()],ce.prototype,"titleTime",2);r([l()],ce.prototype,"date",2);r([l()],ce.prototype,"format",2);r([l()],ce.prototype,"numeric",2);r([l({type:Boolean})],ce.prototype,"sync",2);function vi(t){const i={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return i-Date.now()%i}ce.define("sl-relative-time");var Hn=S`
  ${Bo}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Mt=class extends E{constructor(){super(...arguments),this.hasSlotController=new vt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Ke`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${O({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${A(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Mt.styles=[T,Hn];r([$(".button")],Mt.prototype,"input",2);r([$(".hidden-input")],Mt.prototype,"hiddenInput",2);r([I()],Mt.prototype,"hasFocus",2);r([l({type:Boolean,reflect:!0})],Mt.prototype,"checked",2);r([l()],Mt.prototype,"value",2);r([l({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2);r([l({reflect:!0})],Mt.prototype,"size",2);r([l({type:Boolean,reflect:!0})],Mt.prototype,"pill",2);r([x("disabled",{waitUntilFirstUpdate:!0})],Mt.prototype,"handleDisabledChange",1);Mt.define("sl-radio-button");var Un=S`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Wn=S`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,_e=class extends E{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=He(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=He(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=He(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=He(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const i=t.indexOf(e),s=He(e);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",i===0),s.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<t.length-1),s.toggleAttribute("data-sl-button-group__button--last",i===t.length-1),s.toggleAttribute("data-sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return b`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};_e.styles=[T,Wn];r([$("slot")],_e.prototype,"defaultSlot",2);r([I()],_e.prototype,"disableRole",2);r([l()],_e.prototype,"label",2);function He(t){var e;const i="sl-button, sl-radio-button";return(e=t.closest(i))!=null?e:t.querySelector(i)}var ht=class extends E{constructor(){super(...arguments),this.formControlController=new te(this),this.hasSlotController=new vt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?Ga:t?Xa:Ii}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),s=this.value;e.disabled||(this.value=e.value,i.forEach(o=>o.checked=o===e),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const i=this.getAllRadios().filter(d=>!d.disabled),s=(e=i.find(d=>d.checked))!=null?e:i[0],o=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,a=this.value;let n=i.indexOf(s)+o;n<0&&(n=i.length-1),n>i.length-1&&(n=0),this.getAllRadios().forEach(d=>{d.checked=!1,this.hasButtonGroup||(d.tabIndex=-1)}),this.value=i[n].value,i[n].checked=!0,this.hasButtonGroup?i[n].shadowRoot.querySelector("button").focus():(i[n].tabIndex=0,i[n].focus()),this.value!==a&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),i=t.find(s=>s.checked)||t[0];i&&i.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const i=this.getAllRadios();if(await Promise.all(i.map(async s=>{await s.updateComplete,s.checked=s.value===this.value,s.size=this.size})),this.hasButtonGroup=i.some(s=>s.tagName.toLowerCase()==="sl-radio-button"),i.length>0&&!i.some(s=>s.checked))if(this.hasButtonGroup){const s=(t=i[0].shadowRoot)==null?void 0:t.querySelector("button");s&&(s.tabIndex=0)}else i[0].tabIndex=0;if(this.hasButtonGroup){const s=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");s&&(s.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,o=b`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return b`
      <fieldset
        part="form-control"
        class=${O({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?b`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};ht.styles=[T,ye,Un];ht.dependencies={"sl-button-group":_e};r([$("slot:not([name])")],ht.prototype,"defaultSlot",2);r([$(".radio-group__validation-input")],ht.prototype,"validationInput",2);r([I()],ht.prototype,"hasButtonGroup",2);r([I()],ht.prototype,"errorMessage",2);r([I()],ht.prototype,"defaultValue",2);r([l()],ht.prototype,"label",2);r([l({attribute:"help-text"})],ht.prototype,"helpText",2);r([l()],ht.prototype,"name",2);r([l({reflect:!0})],ht.prototype,"value",2);r([l({reflect:!0})],ht.prototype,"size",2);r([l({reflect:!0})],ht.prototype,"form",2);r([l({type:Boolean,reflect:!0})],ht.prototype,"required",2);r([x("size",{waitUntilFirstUpdate:!0})],ht.prototype,"handleSizeChange",1);r([x("value")],ht.prototype,"handleValueChange",1);ht.define("sl-radio-group");var qn=S`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Oe=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*e,s=i-this.value/100*i;this.indicatorOffset=`${s}px`}}render(){return b`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Oe.styles=[T,qn];r([$(".progress-ring__indicator")],Oe.prototype,"indicator",2);r([I()],Oe.prototype,"indicatorOffset",2);r([l({type:Number,reflect:!0})],Oe.prototype,"value",2);r([l()],Oe.prototype,"label",2);Oe.define("sl-progress-ring");var jn=S`
  :host {
    display: inline-block;
  }
`;let Ho=null;class Uo{}Uo.render=function(t,e){Ho(t,e)};self.QrCreator=Uo;(function(t){function e(d,c,h,m){var u={},p=t(h,c);p.u(d),p.J(),m=m||0;var f=p.h(),g=p.h()+2*m;return u.text=d,u.level=c,u.version=h,u.O=g,u.a=function(y,C){return y-=m,C-=m,0>y||y>=f||0>C||C>=f?!1:p.a(y,C)},u}function i(d,c,h,m,u,p,f,g,y,C){function D(_,k,v,w,z,R,F){_?(d.lineTo(k+R,v+F),d.arcTo(k,v,w,z,p)):d.lineTo(k,v)}f?d.moveTo(c+p,h):d.moveTo(c,h),D(g,m,h,m,u,-p,0),D(y,m,u,c,u,0,-p),D(C,c,u,c,h,p,0),D(f,c,h,m,h,0,p)}function s(d,c,h,m,u,p,f,g,y,C){function D(_,k,v,w){d.moveTo(_+v,k),d.lineTo(_,k),d.lineTo(_,k+w),d.arcTo(_,k,_+v,k,p)}f&&D(c,h,p,p),g&&D(m,h,-p,p),y&&D(m,u,-p,-p),C&&D(c,u,p,-p)}function o(d,c){var h=c.fill;if(typeof h=="string")d.fillStyle=h;else{var m=h.type,u=h.colorStops;if(h=h.position.map(f=>Math.round(f*c.size)),m==="linear-gradient")var p=d.createLinearGradient.apply(d,h);else if(m==="radial-gradient")p=d.createRadialGradient.apply(d,h);else throw Error("Unsupported fill");u.forEach(([f,g])=>{p.addColorStop(f,g)}),d.fillStyle=p}}function a(d,c){t:{var h=c.text,m=c.v,u=c.N,p=c.K,f=c.P;for(u=Math.max(1,u||1),p=Math.min(40,p||40);u<=p;u+=1)try{var g=e(h,m,u,f);break t}catch{}g=void 0}if(!g)return null;for(h=d.getContext("2d"),c.background&&(h.fillStyle=c.background,h.fillRect(c.left,c.top,c.size,c.size)),m=g.O,p=c.size/m,h.beginPath(),f=0;f<m;f+=1)for(u=0;u<m;u+=1){var y=h,C=c.left+u*p,D=c.top+f*p,_=f,k=u,v=g.a,w=C+p,z=D+p,R=_-1,F=_+1,P=k-1,L=k+1,ut=Math.floor(Math.min(.5,Math.max(0,c.R))*p),G=v(_,k),wt=v(R,P),rt=v(R,k);R=v(R,L);var mt=v(_,L);L=v(F,L),k=v(F,k),F=v(F,P),_=v(_,P),C=Math.round(C),D=Math.round(D),w=Math.round(w),z=Math.round(z),G?i(y,C,D,w,z,ut,!rt&&!_,!rt&&!mt,!k&&!mt,!k&&!_):s(y,C,D,w,z,ut,rt&&_&&wt,rt&&mt&&R,k&&mt&&L,k&&_&&F)}return o(h,c),h.fill(),d}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Ho=function(d,c){var h={};Object.assign(h,n,d),h.N=h.minVersion,h.K=h.maxVersion,h.v=h.ecLevel,h.left=h.left,h.top=h.top,h.size=h.size,h.fill=h.fill,h.background=h.background,h.text=h.text,h.R=h.radius,h.P=h.quiet,c instanceof HTMLCanvasElement?((c.width!==h.size||c.height!==h.size)&&(c.width=h.size,c.height=h.size),c.getContext("2d").clearRect(0,0,c.width,c.height),a(c,h)):(d=document.createElement("canvas"),d.width=h.size,d.height=h.size,h=a(d,h),c.appendChild(h))}})(function(){function t(c){var h=i.s(c);return{S:function(){return 4},b:function(){return h.length},write:function(m){for(var u=0;u<h.length;u+=1)m.put(h[u],8)}}}function e(){var c=[],h=0,m={B:function(){return c},c:function(u){return(c[Math.floor(u/8)]>>>7-u%8&1)==1},put:function(u,p){for(var f=0;f<p;f+=1)m.m((u>>>p-f-1&1)==1)},f:function(){return h},m:function(u){var p=Math.floor(h/8);c.length<=p&&c.push(0),u&&(c[p]|=128>>>h%8),h+=1}};return m}function i(c,h){function m(_,k){for(var v=-1;7>=v;v+=1)if(!(-1>=_+v||g<=_+v))for(var w=-1;7>=w;w+=1)-1>=k+w||g<=k+w||(f[_+v][k+w]=0<=v&&6>=v&&(w==0||w==6)||0<=w&&6>=w&&(v==0||v==6)||2<=v&&4>=v&&2<=w&&4>=w)}function u(_,k){for(var v=g=4*c+17,w=Array(v),z=0;z<v;z+=1){w[z]=Array(v);for(var R=0;R<v;R+=1)w[z][R]=null}for(f=w,m(0,0),m(g-7,0),m(0,g-7),v=a.G(c),w=0;w<v.length;w+=1)for(z=0;z<v.length;z+=1){R=v[w];var F=v[z];if(f[R][F]==null)for(var P=-2;2>=P;P+=1)for(var L=-2;2>=L;L+=1)f[R+P][F+L]=P==-2||P==2||L==-2||L==2||P==0&&L==0}for(v=8;v<g-8;v+=1)f[v][6]==null&&(f[v][6]=v%2==0);for(v=8;v<g-8;v+=1)f[6][v]==null&&(f[6][v]=v%2==0);for(v=a.w(p<<3|k),w=0;15>w;w+=1)z=!_&&(v>>w&1)==1,f[6>w?w:8>w?w+1:g-15+w][8]=z,f[8][8>w?g-w-1:9>w?15-w:14-w]=z;if(f[g-8][8]=!_,7<=c){for(v=a.A(c),w=0;18>w;w+=1)z=!_&&(v>>w&1)==1,f[Math.floor(w/3)][w%3+g-8-3]=z;for(w=0;18>w;w+=1)z=!_&&(v>>w&1)==1,f[w%3+g-8-3][Math.floor(w/3)]=z}if(y==null){for(_=d.I(c,p),v=e(),w=0;w<C.length;w+=1)z=C[w],v.put(4,4),v.put(z.b(),a.f(4,c)),z.write(v);for(w=z=0;w<_.length;w+=1)z+=_[w].j;if(v.f()>8*z)throw Error("code length overflow. ("+v.f()+">"+8*z+")");for(v.f()+4<=8*z&&v.put(0,4);v.f()%8!=0;)v.m(!1);for(;!(v.f()>=8*z)&&(v.put(236,8),!(v.f()>=8*z));)v.put(17,8);var ut=0;for(z=w=0,R=Array(_.length),F=Array(_.length),P=0;P<_.length;P+=1){var G=_[P].j,wt=_[P].o-G;for(w=Math.max(w,G),z=Math.max(z,wt),R[P]=Array(G),L=0;L<R[P].length;L+=1)R[P][L]=255&v.B()[L+ut];for(ut+=G,L=a.C(wt),G=s(R[P],L.b()-1).l(L),F[P]=Array(L.b()-1),L=0;L<F[P].length;L+=1)wt=L+G.b()-F[P].length,F[P][L]=0<=wt?G.c(wt):0}for(L=v=0;L<_.length;L+=1)v+=_[L].o;for(v=Array(v),L=ut=0;L<w;L+=1)for(P=0;P<_.length;P+=1)L<R[P].length&&(v[ut]=R[P][L],ut+=1);for(L=0;L<z;L+=1)for(P=0;P<_.length;P+=1)L<F[P].length&&(v[ut]=F[P][L],ut+=1);y=v}for(_=y,v=-1,w=g-1,z=7,R=0,k=a.F(k),F=g-1;0<F;F-=2)for(F==6&&--F;;){for(P=0;2>P;P+=1)f[w][F-P]==null&&(L=!1,R<_.length&&(L=(_[R]>>>z&1)==1),k(w,F-P)&&(L=!L),f[w][F-P]=L,--z,z==-1&&(R+=1,z=7));if(w+=v,0>w||g<=w){w-=v,v=-v;break}}}var p=o[h],f=null,g=0,y=null,C=[],D={u:function(_){_=t(_),C.push(_),y=null},a:function(_,k){if(0>_||g<=_||0>k||g<=k)throw Error(_+","+k);return f[_][k]},h:function(){return g},J:function(){for(var _=0,k=0,v=0;8>v;v+=1){u(!0,v);var w=a.D(D);(v==0||_>w)&&(_=w,k=v)}u(!1,k)}};return D}function s(c,h){if(typeof c.length>"u")throw Error(c.length+"/"+h);var m=function(){for(var p=0;p<c.length&&c[p]==0;)p+=1;for(var f=Array(c.length-p+h),g=0;g<c.length-p;g+=1)f[g]=c[g+p];return f}(),u={c:function(p){return m[p]},b:function(){return m.length},multiply:function(p){for(var f=Array(u.b()+p.b()-1),g=0;g<u.b();g+=1)for(var y=0;y<p.b();y+=1)f[g+y]^=n.i(n.g(u.c(g))+n.g(p.c(y)));return s(f,0)},l:function(p){if(0>u.b()-p.b())return u;for(var f=n.g(u.c(0))-n.g(p.c(0)),g=Array(u.b()),y=0;y<u.b();y+=1)g[y]=u.c(y);for(y=0;y<p.b();y+=1)g[y]^=n.i(n.g(p.c(y))+f);return s(g,0).l(p)}};return u}i.s=function(c){for(var h=[],m=0;m<c.length;m++){var u=c.charCodeAt(m);128>u?h.push(u):2048>u?h.push(192|u>>6,128|u&63):55296>u||57344<=u?h.push(224|u>>12,128|u>>6&63,128|u&63):(m++,u=65536+((u&1023)<<10|c.charCodeAt(m)&1023),h.push(240|u>>18,128|u>>12&63,128|u>>6&63,128|u&63))}return h};var o={L:1,M:0,Q:3,H:2},a=function(){function c(u){for(var p=0;u!=0;)p+=1,u>>>=1;return p}var h=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],m={w:function(u){for(var p=u<<10;0<=c(p)-c(1335);)p^=1335<<c(p)-c(1335);return(u<<10|p)^21522},A:function(u){for(var p=u<<12;0<=c(p)-c(7973);)p^=7973<<c(p)-c(7973);return u<<12|p},G:function(u){return h[u-1]},F:function(u){switch(u){case 0:return function(p,f){return(p+f)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,f){return f%3==0};case 3:return function(p,f){return(p+f)%3==0};case 4:return function(p,f){return(Math.floor(p/2)+Math.floor(f/3))%2==0};case 5:return function(p,f){return p*f%2+p*f%3==0};case 6:return function(p,f){return(p*f%2+p*f%3)%2==0};case 7:return function(p,f){return(p*f%3+(p+f)%2)%2==0};default:throw Error("bad maskPattern:"+u)}},C:function(u){for(var p=s([1],0),f=0;f<u;f+=1)p=p.multiply(s([1,n.i(f)],0));return p},f:function(u,p){if(u!=4||1>p||40<p)throw Error("mode: "+u+"; type: "+p);return 10>p?8:16},D:function(u){for(var p=u.h(),f=0,g=0;g<p;g+=1)for(var y=0;y<p;y+=1){for(var C=0,D=u.a(g,y),_=-1;1>=_;_+=1)if(!(0>g+_||p<=g+_))for(var k=-1;1>=k;k+=1)0>y+k||p<=y+k||(_!=0||k!=0)&&D==u.a(g+_,y+k)&&(C+=1);5<C&&(f+=3+C-5)}for(g=0;g<p-1;g+=1)for(y=0;y<p-1;y+=1)C=0,u.a(g,y)&&(C+=1),u.a(g+1,y)&&(C+=1),u.a(g,y+1)&&(C+=1),u.a(g+1,y+1)&&(C+=1),(C==0||C==4)&&(f+=3);for(g=0;g<p;g+=1)for(y=0;y<p-6;y+=1)u.a(g,y)&&!u.a(g,y+1)&&u.a(g,y+2)&&u.a(g,y+3)&&u.a(g,y+4)&&!u.a(g,y+5)&&u.a(g,y+6)&&(f+=40);for(y=0;y<p;y+=1)for(g=0;g<p-6;g+=1)u.a(g,y)&&!u.a(g+1,y)&&u.a(g+2,y)&&u.a(g+3,y)&&u.a(g+4,y)&&!u.a(g+5,y)&&u.a(g+6,y)&&(f+=40);for(y=C=0;y<p;y+=1)for(g=0;g<p;g+=1)u.a(g,y)&&(C+=1);return f+=Math.abs(100*C/p/p-50)/5*10}};return m}(),n=function(){for(var c=Array(256),h=Array(256),m=0;8>m;m+=1)c[m]=1<<m;for(m=8;256>m;m+=1)c[m]=c[m-4]^c[m-5]^c[m-6]^c[m-8];for(m=0;255>m;m+=1)h[c[m]]=m;return{g:function(u){if(1>u)throw Error("glog("+u+")");return h[u]},i:function(u){for(;0>u;)u+=255;for(;256<=u;)u-=255;return c[u]}}}(),d=function(){function c(u,p){switch(p){case o.L:return h[4*(u-1)];case o.M:return h[4*(u-1)+1];case o.Q:return h[4*(u-1)+2];case o.H:return h[4*(u-1)+3]}}var h=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],m={I:function(u,p){var f=c(u,p);if(typeof f>"u")throw Error("bad rs block @ typeNumber:"+u+"/errorCorrectLevel:"+p);u=f.length/3,p=[];for(var g=0;g<u;g+=1)for(var y=f[3*g],C=f[3*g+1],D=f[3*g+2],_=0;_<y;_+=1){var k=D,v={};v.o=C,v.j=k,p.push(v)}return p}};return m}();return i}());const Kn=QrCreator;var Rt=class extends E{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Kn.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return b`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${yt({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Rt.styles=[T,jn];r([$("canvas")],Rt.prototype,"canvas",2);r([l()],Rt.prototype,"value",2);r([l()],Rt.prototype,"label",2);r([l({type:Number})],Rt.prototype,"size",2);r([l()],Rt.prototype,"fill",2);r([l()],Rt.prototype,"background",2);r([l({type:Number})],Rt.prototype,"radius",2);r([l({attribute:"error-correction"})],Rt.prototype,"errorCorrection",2);r([x(["background","errorCorrection","fill","radius","size","value"])],Rt.prototype,"generate",1);Rt.define("sl-qr-code");var Yn=S`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Wt=class extends E{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return b`
      <span
        part="base"
        class=${O({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?b` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Wt.styles=[T,Yn];Wt.dependencies={"sl-icon":j};r([I()],Wt.prototype,"checked",2);r([I()],Wt.prototype,"hasFocus",2);r([l()],Wt.prototype,"value",2);r([l({reflect:!0})],Wt.prototype,"size",2);r([l({type:Boolean,reflect:!0})],Wt.prototype,"disabled",2);r([x("checked")],Wt.prototype,"handleCheckedChange",1);r([x("disabled",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleDisabledChange",1);Wt.define("sl-radio");var Xn=S`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Lt=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(i=>{i.nodeType===Node.ELEMENT_NODE&&(i.hasAttribute("slot")||(e+=i.textContent)),i.nodeType===Node.TEXT_NODE&&(e+=i.textContent)}),e.trim()}render(){return b`
      <div
        part="base"
        class=${O({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Lt.styles=[T,Xn];Lt.dependencies={"sl-icon":j};r([$(".option__label")],Lt.prototype,"defaultSlot",2);r([I()],Lt.prototype,"current",2);r([I()],Lt.prototype,"selected",2);r([I()],Lt.prototype,"hasHover",2);r([l({reflect:!0})],Lt.prototype,"value",2);r([l({type:Boolean,reflect:!0})],Lt.prototype,"disabled",2);r([x("disabled")],Lt.prototype,"handleDisabledChange",1);r([x("selected")],Lt.prototype,"handleSelectedChange",1);r([x("value")],Lt.prototype,"handleValueChange",1);Lt.define("sl-option");W.define("sl-popup");var Gn=S`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,hi=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return b`
      <div
        part="base"
        class=${O({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${A(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${yt({width:`${this.value}%`})}>
          ${this.indeterminate?"":b` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};hi.styles=[T,Gn];r([l({type:Number,reflect:!0})],hi.prototype,"value",2);r([l({type:Boolean,reflect:!0})],hi.prototype,"indeterminate",2);r([l()],hi.prototype,"label",2);hi.define("sl-progress-bar");var Qn=S`
  :host {
    display: contents;
  }
`,qt=class extends E{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return b` <slot></slot> `}};qt.styles=[T,Qn];r([l({reflect:!0})],qt.prototype,"attr",2);r([l({attribute:"attr-old-value",type:Boolean,reflect:!0})],qt.prototype,"attrOldValue",2);r([l({attribute:"char-data",type:Boolean,reflect:!0})],qt.prototype,"charData",2);r([l({attribute:"char-data-old-value",type:Boolean,reflect:!0})],qt.prototype,"charDataOldValue",2);r([l({attribute:"child-list",type:Boolean,reflect:!0})],qt.prototype,"childList",2);r([l({type:Boolean,reflect:!0})],qt.prototype,"disabled",2);r([x("disabled")],qt.prototype,"handleDisabledChange",1);r([x("attr",{waitUntilFirstUpdate:!0}),x("attr-old-value",{waitUntilFirstUpdate:!0}),x("char-data",{waitUntilFirstUpdate:!0}),x("char-data-old-value",{waitUntilFirstUpdate:!0}),x("childList",{waitUntilFirstUpdate:!0})],qt.prototype,"handleChange",1);qt.define("sl-mutation-observer");var Zn=S`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,M=class extends E{constructor(){super(...arguments),this.formControlController=new te(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new vt(this,"help-text","label"),this.localize=new N(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const o=e??this.input.selectionStart,a=i??this.input.selectionEnd;this.input.setRangeText(t,o,a,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,a=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return b`
      <div
        part="form-control"
        class=${O({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${O({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${A(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${A(this.placeholder)}
              minlength=${A(this.minlength)}
              maxlength=${A(this.maxlength)}
              min=${A(this.min)}
              max=${A(this.max)}
              step=${A(this.step)}
              .value=${ge(this.value)}
              autocapitalize=${A(this.autocapitalize)}
              autocomplete=${A(this.autocomplete)}
              autocorrect=${A(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${A(this.pattern)}
              enterkeyhint=${A(this.enterkeyhint)}
              inputmode=${A(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${a?b`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?b`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?b`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:b`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};M.styles=[T,ye,Zn];M.dependencies={"sl-icon":j};r([$(".input__control")],M.prototype,"input",2);r([I()],M.prototype,"hasFocus",2);r([l()],M.prototype,"title",2);r([l({reflect:!0})],M.prototype,"type",2);r([l()],M.prototype,"name",2);r([l()],M.prototype,"value",2);r([ve()],M.prototype,"defaultValue",2);r([l({reflect:!0})],M.prototype,"size",2);r([l({type:Boolean,reflect:!0})],M.prototype,"filled",2);r([l({type:Boolean,reflect:!0})],M.prototype,"pill",2);r([l()],M.prototype,"label",2);r([l({attribute:"help-text"})],M.prototype,"helpText",2);r([l({type:Boolean})],M.prototype,"clearable",2);r([l({type:Boolean,reflect:!0})],M.prototype,"disabled",2);r([l()],M.prototype,"placeholder",2);r([l({type:Boolean,reflect:!0})],M.prototype,"readonly",2);r([l({attribute:"password-toggle",type:Boolean})],M.prototype,"passwordToggle",2);r([l({attribute:"password-visible",type:Boolean})],M.prototype,"passwordVisible",2);r([l({attribute:"no-spin-buttons",type:Boolean})],M.prototype,"noSpinButtons",2);r([l({reflect:!0})],M.prototype,"form",2);r([l({type:Boolean,reflect:!0})],M.prototype,"required",2);r([l()],M.prototype,"pattern",2);r([l({type:Number})],M.prototype,"minlength",2);r([l({type:Number})],M.prototype,"maxlength",2);r([l()],M.prototype,"min",2);r([l()],M.prototype,"max",2);r([l()],M.prototype,"step",2);r([l()],M.prototype,"autocapitalize",2);r([l()],M.prototype,"autocorrect",2);r([l()],M.prototype,"autocomplete",2);r([l({type:Boolean})],M.prototype,"autofocus",2);r([l()],M.prototype,"enterkeyhint",2);r([l({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],M.prototype,"spellcheck",2);r([l()],M.prototype,"inputmode",2);r([x("disabled",{waitUntilFirstUpdate:!0})],M.prototype,"handleDisabledChange",1);r([x("step",{waitUntilFirstUpdate:!0})],M.prototype,"handleStepChange",1);r([x("value",{waitUntilFirstUpdate:!0})],M.prototype,"handleValueChange",1);M.define("sl-input");var Jn=S`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Wo=class extends E{render(){return b` <slot part="base" class="menu-label"></slot> `}};Wo.styles=[T,Jn];Wo.define("sl-menu-label");var tl=S`
  :host {
    display: block;
  }
`,ji=new Map;function el(t,e="cors"){const i=ji.get(t);if(i!==void 0)return Promise.resolve(i);const s=fetch(t,{mode:e}).then(async o=>{const a={ok:o.ok,status:o.status,html:await o.text()};return ji.set(t,a),a});return ji.set(t,s),s}var Ie=class extends E{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(i=>e.setAttribute(i.name,i.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await el(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(i=>this.executeScript(i)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return b`<slot></slot>`}};Ie.styles=[T,tl];r([l()],Ie.prototype,"src",2);r([l()],Ie.prototype,"mode",2);r([l({attribute:"allow-scripts",type:Boolean})],Ie.prototype,"allowScripts",2);r([x("src")],Ie.prototype,"handleSrcChange",1);Ie.define("sl-include");var il=S`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,xe=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),i=this.localize.dir()==="rtl";t.preventDefault(),Ge(this.base,{onMove:s=>{this.position=parseFloat(et(s/e*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const s=t.shiftKey?10:1;let o=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight")&&(o-=s),(e&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft")&&(o+=s),t.key==="Home"&&(o=0),t.key==="End"&&(o=100),o=et(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const t=this.localize.dir()==="rtl";return b`
      <div
        part="base"
        id="image-comparer"
        class=${O({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${yt({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${yt({left:t?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};xe.styles=[T,il];xe.scopedElement={"sl-icon":j};r([$(".image-comparer")],xe.prototype,"base",2);r([$(".image-comparer__handle")],xe.prototype,"handle",2);r([l({type:Number,reflect:!0})],xe.prototype,"position",2);r([x("position",{waitUntilFirstUpdate:!0})],xe.prototype,"handlePositionChange",1);xe.define("sl-image-comparer");j.define("sl-icon");st.define("sl-icon-button");var Mi=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],i=this.unit==="bit"?t:e,s=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),i.length-1)),o=i[s]+this.unit,a=parseFloat((this.value/Math.pow(1e3,s)).toPrecision(3));return this.localize.number(a,{style:"unit",unit:o,unitDisplay:this.display})}};r([l({type:Number})],Mi.prototype,"value",2);r([l()],Mi.prototype,"unit",2);r([l()],Mi.prototype,"display",2);Mi.define("sl-format-bytes");var Et=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return b`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};r([l()],Et.prototype,"date",2);r([l()],Et.prototype,"weekday",2);r([l()],Et.prototype,"era",2);r([l()],Et.prototype,"year",2);r([l()],Et.prototype,"month",2);r([l()],Et.prototype,"day",2);r([l()],Et.prototype,"hour",2);r([l()],Et.prototype,"minute",2);r([l()],Et.prototype,"second",2);r([l({attribute:"time-zone-name"})],Et.prototype,"timeZoneName",2);r([l({attribute:"time-zone"})],Et.prototype,"timeZone",2);r([l({attribute:"hour-format"})],Et.prototype,"hourFormat",2);Et.define("sl-format-date");var Ft=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};r([l({type:Number})],Ft.prototype,"value",2);r([l()],Ft.prototype,"type",2);r([l({attribute:"no-grouping",type:Boolean})],Ft.prototype,"noGrouping",2);r([l()],Ft.prototype,"currency",2);r([l({attribute:"currency-display"})],Ft.prototype,"currencyDisplay",2);r([l({attribute:"minimum-integer-digits",type:Number})],Ft.prototype,"minimumIntegerDigits",2);r([l({attribute:"minimum-fraction-digits",type:Number})],Ft.prototype,"minimumFractionDigits",2);r([l({attribute:"maximum-fraction-digits",type:Number})],Ft.prototype,"maximumFractionDigits",2);r([l({attribute:"minimum-significant-digits",type:Number})],Ft.prototype,"minimumSignificantDigits",2);r([l({attribute:"maximum-significant-digits",type:Number})],Ft.prototype,"maximumSignificantDigits",2);Ft.define("sl-format-number");var sl=S`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Ri=class extends E{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Ri.styles=[T,sl];r([l({type:Boolean,reflect:!0})],Ri.prototype,"vertical",2);r([x("vertical")],Ri.prototype,"handleVerticalChange",1);Ri.define("sl-divider");var ol=S`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,nt=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),i=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let o=this.from,a="";i?[o,a]=this.from.trim().split("."):s&&([o,a]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(o):null;n?s?t=n.getAttribute(a)||"":i?t=n[a]||"":t=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),s=this.errorLabel||this.localize.term("error"),o=t==="success"?this.successIcon:this.errorIcon,a=Y(this,"copy.in",{dir:"ltr"}),n=Y(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?i:s,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,o.hidden=!1,await o.animate(a.keyframes,a.options).finished,setTimeout(async()=>{await o.animate(n.keyframes,n.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(a.keyframes,a.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return b`
      <sl-tooltip
        class=${O({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};nt.styles=[T,ol];nt.dependencies={"sl-icon":j,"sl-tooltip":at};r([$('slot[name="copy-icon"]')],nt.prototype,"copyIcon",2);r([$('slot[name="success-icon"]')],nt.prototype,"successIcon",2);r([$('slot[name="error-icon"]')],nt.prototype,"errorIcon",2);r([$("sl-tooltip")],nt.prototype,"tooltip",2);r([I()],nt.prototype,"isCopying",2);r([I()],nt.prototype,"status",2);r([l()],nt.prototype,"value",2);r([l()],nt.prototype,"from",2);r([l({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);r([l({attribute:"copy-label"})],nt.prototype,"copyLabel",2);r([l({attribute:"success-label"})],nt.prototype,"successLabel",2);r([l({attribute:"error-label"})],nt.prototype,"errorLabel",2);r([l({attribute:"feedback-duration",type:Number})],nt.prototype,"feedbackDuration",2);r([l({attribute:"tooltip-placement"})],nt.prototype,"tooltipPlacement",2);r([l({type:Boolean})],nt.prototype,"hoist",2);U("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});U("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});nt.define("sl-copy-button");var rl=S`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Bt=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await it(this.body);const{keyframes:e,options:i}=Y(this,"details.show",{dir:this.localize.dir()});await Z(this.body,Ci(e,this.body.scrollHeight),i),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await it(this.body);const{keyframes:e,options:i}=Y(this,"details.hide",{dir:this.localize.dir()});await Z(this.body,Ci(e,this.body.scrollHeight),i),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,bt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,bt(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return b`
      <details
        part="base"
        class=${O({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Bt.styles=[T,rl];Bt.dependencies={"sl-icon":j};r([$(".details")],Bt.prototype,"details",2);r([$(".details__header")],Bt.prototype,"header",2);r([$(".details__body")],Bt.prototype,"body",2);r([$(".details__expand-icon-slot")],Bt.prototype,"expandIconSlot",2);r([l({type:Boolean,reflect:!0})],Bt.prototype,"open",2);r([l()],Bt.prototype,"summary",2);r([l({type:Boolean,reflect:!0})],Bt.prototype,"disabled",2);r([x("open",{waitUntilFirstUpdate:!0})],Bt.prototype,"handleOpenChange",1);U("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});U("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});Bt.define("sl-details");var al=S`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,jt=class extends E{constructor(){super(...arguments),this.hasSlotController=new vt(this,"footer"),this.localize=new N(this),this.modal=new wo(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),qe(this))}disconnectedCallback(){var t;super.disconnectedCallback(),this.modal.deactivate(),je(this),(t=this.closeWatcher)==null||t.destroy()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const i=Y(this,"dialog.denyClose",{dir:this.localize.dir()});Z(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),qe(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([it(this.dialog),it(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=Y(this,"dialog.show",{dir:this.localize.dir()}),i=Y(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Z(this.panel,e.keyframes,e.options),Z(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([it(this.dialog),it(this.overlay)]);const t=Y(this,"dialog.hide",{dir:this.localize.dir()}),e=Y(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Z(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Z(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,je(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}render(){return b`
      <div
        part="base"
        class=${O({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${A(this.noHeader?this.label:void 0)}
          aria-labelledby=${A(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":b`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};jt.styles=[T,al];jt.dependencies={"sl-icon-button":st};r([$(".dialog")],jt.prototype,"dialog",2);r([$(".dialog__panel")],jt.prototype,"panel",2);r([$(".dialog__overlay")],jt.prototype,"overlay",2);r([l({type:Boolean,reflect:!0})],jt.prototype,"open",2);r([l({reflect:!0})],jt.prototype,"label",2);r([l({attribute:"no-header",type:Boolean,reflect:!0})],jt.prototype,"noHeader",2);r([x("open",{waitUntilFirstUpdate:!0})],jt.prototype,"handleOpenChange",1);U("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});U("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});U("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});U("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});U("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});jt.define("sl-dialog");ot.define("sl-checkbox");var nl=S`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function ct(t,e){ll(t)&&(t="100%");const i=cl(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function yi(t){return Math.min(1,Math.max(0,t))}function ll(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function cl(t){return typeof t=="string"&&t.indexOf("%")!==-1}function qo(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function wi(t){return Number(t)<=1?`${Number(t)*100}%`:t}function pe(t){return t.length===1?"0"+t:String(t)}function dl(t,e,i){return{r:ct(t,255)*255,g:ct(e,255)*255,b:ct(i,255)*255}}function io(t,e,i){t=ct(t,255),e=ct(e,255),i=ct(i,255);const s=Math.max(t,e,i),o=Math.min(t,e,i);let a=0,n=0;const d=(s+o)/2;if(s===o)n=0,a=0;else{const c=s-o;switch(n=d>.5?c/(2-s-o):c/(s+o),s){case t:a=(e-i)/c+(e<i?6:0);break;case e:a=(i-t)/c+2;break;case i:a=(t-e)/c+4;break}a/=6}return{h:a,s:n,l:d}}function Ki(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*(6*i):i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function hl(t,e,i){let s,o,a;if(t=ct(t,360),e=ct(e,100),i=ct(i,100),e===0)o=i,a=i,s=i;else{const n=i<.5?i*(1+e):i+e-i*e,d=2*i-n;s=Ki(d,n,t+1/3),o=Ki(d,n,t),a=Ki(d,n,t-1/3)}return{r:s*255,g:o*255,b:a*255}}function so(t,e,i){t=ct(t,255),e=ct(e,255),i=ct(i,255);const s=Math.max(t,e,i),o=Math.min(t,e,i);let a=0;const n=s,d=s-o,c=s===0?0:d/s;if(s===o)a=0;else{switch(s){case t:a=(e-i)/d+(e<i?6:0);break;case e:a=(i-t)/d+2;break;case i:a=(t-e)/d+4;break}a/=6}return{h:a,s:c,v:n}}function ul(t,e,i){t=ct(t,360)*6,e=ct(e,100),i=ct(i,100);const s=Math.floor(t),o=t-s,a=i*(1-e),n=i*(1-o*e),d=i*(1-(1-o)*e),c=s%6,h=[i,n,a,a,d,i][c],m=[d,i,i,n,a,a][c],u=[a,a,d,i,i,n][c];return{r:h*255,g:m*255,b:u*255}}function oo(t,e,i,s){const o=[pe(Math.round(t).toString(16)),pe(Math.round(e).toString(16)),pe(Math.round(i).toString(16))];return s&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function pl(t,e,i,s,o){const a=[pe(Math.round(t).toString(16)),pe(Math.round(e).toString(16)),pe(Math.round(i).toString(16)),pe(fl(s))];return o&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function fl(t){return Math.round(parseFloat(t)*255).toString(16)}function ro(t){return _t(t)/255}function _t(t){return parseInt(t,16)}function ml(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const cs={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function gl(t){let e={r:0,g:0,b:0},i=1,s=null,o=null,a=null,n=!1,d=!1;return typeof t=="string"&&(t=yl(t)),typeof t=="object"&&(Gt(t.r)&&Gt(t.g)&&Gt(t.b)?(e=dl(t.r,t.g,t.b),n=!0,d=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Gt(t.h)&&Gt(t.s)&&Gt(t.v)?(s=wi(t.s),o=wi(t.v),e=ul(t.h,s,o),n=!0,d="hsv"):Gt(t.h)&&Gt(t.s)&&Gt(t.l)&&(s=wi(t.s),a=wi(t.l),e=hl(t.h,s,a),n=!0,d="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=qo(i),{ok:n,format:t.format||d,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}const bl="[-\\+]?\\d+%?",vl="[-\\+]?\\d*\\.\\d+%?",se="(?:"+vl+")|(?:"+bl+")",Yi="[\\s|\\(]+("+se+")[,|\\s]+("+se+")[,|\\s]+("+se+")\\s*\\)?",Xi="[\\s|\\(]+("+se+")[,|\\s]+("+se+")[,|\\s]+("+se+")[,|\\s]+("+se+")\\s*\\)?",It={CSS_UNIT:new RegExp(se),rgb:new RegExp("rgb"+Yi),rgba:new RegExp("rgba"+Xi),hsl:new RegExp("hsl"+Yi),hsla:new RegExp("hsla"+Xi),hsv:new RegExp("hsv"+Yi),hsva:new RegExp("hsva"+Xi),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function yl(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(cs[t])t=cs[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=It.rgb.exec(t);return i?{r:i[1],g:i[2],b:i[3]}:(i=It.rgba.exec(t),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=It.hsl.exec(t),i?{h:i[1],s:i[2],l:i[3]}:(i=It.hsla.exec(t),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=It.hsv.exec(t),i?{h:i[1],s:i[2],v:i[3]}:(i=It.hsva.exec(t),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=It.hex8.exec(t),i?{r:_t(i[1]),g:_t(i[2]),b:_t(i[3]),a:ro(i[4]),format:e?"name":"hex8"}:(i=It.hex6.exec(t),i?{r:_t(i[1]),g:_t(i[2]),b:_t(i[3]),format:e?"name":"hex"}:(i=It.hex4.exec(t),i?{r:_t(i[1]+i[1]),g:_t(i[2]+i[2]),b:_t(i[3]+i[3]),a:ro(i[4]+i[4]),format:e?"name":"hex8"}:(i=It.hex3.exec(t),i?{r:_t(i[1]+i[1]),g:_t(i[2]+i[2]),b:_t(i[3]+i[3]),format:e?"name":"hex"}:!1)))))))))}function Gt(t){return!!It.CSS_UNIT.exec(String(t))}class Q{constructor(e="",i={}){if(e instanceof Q)return e;typeof e=="number"&&(e=ml(e)),this.originalInput=e;const s=gl(e);this.originalInput=e,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??s.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let i,s,o;const a=e.r/255,n=e.g/255,d=e.b/255;return a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),d<=.03928?o=d/12.92:o=Math.pow((d+.055)/1.055,2.4),.2126*i+.7152*s+.0722*o}getAlpha(){return this.a}setAlpha(e){return this.a=qo(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=so(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=so(this.r,this.g,this.b),i=Math.round(e.h*360),s=Math.round(e.s*100),o=Math.round(e.v*100);return this.a===1?`hsv(${i}, ${s}%, ${o}%)`:`hsva(${i}, ${s}%, ${o}%, ${this.roundA})`}toHsl(){const e=io(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=io(this.r,this.g,this.b),i=Math.round(e.h*360),s=Math.round(e.s*100),o=Math.round(e.l*100);return this.a===1?`hsl(${i}, ${s}%, ${o}%)`:`hsla(${i}, ${s}%, ${o}%, ${this.roundA})`}toHex(e=!1){return oo(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return pl(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),i=Math.round(this.g),s=Math.round(this.b);return this.a===1?`rgb(${e}, ${i}, ${s})`:`rgba(${e}, ${i}, ${s}, ${this.roundA})`}toPercentageRgb(){const e=i=>`${Math.round(ct(i,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=i=>Math.round(ct(i,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+oo(this.r,this.g,this.b,!1);for(const[i,s]of Object.entries(cs))if(e===s)return i;return!1}toString(e){const i=!!e;e=e??this.format;let s=!1;const o=this.a<1&&this.a>=0;return!i&&o&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(s=this.toRgbString()),e==="prgb"&&(s=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(s=this.toHexString()),e==="hex3"&&(s=this.toHexString(!0)),e==="hex4"&&(s=this.toHex8String(!0)),e==="hex8"&&(s=this.toHex8String()),e==="name"&&(s=this.toName()),e==="hsl"&&(s=this.toHslString()),e==="hsv"&&(s=this.toHsvString()),s||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new Q(this.toString())}lighten(e=10){const i=this.toHsl();return i.l+=e/100,i.l=yi(i.l),new Q(i)}brighten(e=10){const i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(e/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(e/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(e/100)))),new Q(i)}darken(e=10){const i=this.toHsl();return i.l-=e/100,i.l=yi(i.l),new Q(i)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const i=this.toHsl();return i.s-=e/100,i.s=yi(i.s),new Q(i)}saturate(e=10){const i=this.toHsl();return i.s+=e/100,i.s=yi(i.s),new Q(i)}greyscale(){return this.desaturate(100)}spin(e){const i=this.toHsl(),s=(i.h+e)%360;return i.h=s<0?360+s:s,new Q(i)}mix(e,i=50){const s=this.toRgb(),o=new Q(e).toRgb(),a=i/100,n={r:(o.r-s.r)*a+s.r,g:(o.g-s.g)*a+s.g,b:(o.b-s.b)*a+s.b,a:(o.a-s.a)*a+s.a};return new Q(n)}analogous(e=6,i=30){const s=this.toHsl(),o=360/i,a=[this];for(s.h=(s.h-(o*e>>1)+720)%360;--e;)s.h=(s.h+o)%360,a.push(new Q(s));return a}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new Q(e)}monochromatic(e=6){const i=this.toHsv(),{h:s}=i,{s:o}=i;let{v:a}=i;const n=[],d=1/e;for(;e--;)n.push(new Q({h:s,s:o,v:a})),a=(a+d)%1;return n}splitcomplement(){const e=this.toHsl(),{h:i}=e;return[this,new Q({h:(i+72)%360,s:e.s,l:e.l}),new Q({h:(i+216)%360,s:e.s,l:e.l})]}onBackground(e){const i=this.toRgb(),s=new Q(e).toRgb(),o=i.a+s.a*(1-i.a);return new Q({r:(i.r*i.a+s.r*s.a*(1-i.a))/o,g:(i.g*i.a+s.g*s.a*(1-i.a))/o,b:(i.b*i.a+s.b*s.a*(1-i.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const i=this.toHsl(),{h:s}=i,o=[this],a=360/e;for(let n=1;n<e;n++)o.push(new Q({h:(s+n*a)%360,s:i.s,l:i.l}));return o}equals(e){return this.toRgbString()===new Q(e).toRgbString()}}var ao="EyeDropper"in window,V=class extends E{constructor(){super(),this.formControlController=new te(this),this.isSafeValue=!1,this.localize=new N(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=e.querySelector(".color-picker__slider-handle"),{width:s}=e.getBoundingClientRect();let o=this.value,a=this.value;i.focus(),t.preventDefault(),Ge(e,{onMove:n=>{this.alpha=et(n/s*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=e.querySelector(".color-picker__slider-handle"),{width:s}=e.getBoundingClientRect();let o=this.value,a=this.value;i.focus(),t.preventDefault(),Ge(e,{onMove:n=>{this.hue=et(n/s*360,0,360),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),i=e.querySelector(".color-picker__grid-handle"),{width:s,height:o}=e.getBoundingClientRect();let a=this.value,n=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,Ge(e,{onMove:(d,c)=>{this.saturation=et(d/s*100,0,100),this.brightness=et(100-c/o*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==a&&(a=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=et(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=et(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=et(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=et(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,i=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=et(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=et(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=et(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=et(this.brightness-e,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new Q(t);if(!e.isValid)return null;const i=e.toHsl(),s={h:i.h,s:i.s*100,l:i.l*100,a:i.a},o=e.toRgb(),a=e.toHexString(),n=e.toHex8String(),d=e.toHsv(),c={h:d.h,s:d.s*100,v:d.v*100,a:d.a};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(a),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!ao)return;new EyeDropper().open().then(e=>{const i=this.value;this.setColor(e.sRGBHex),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,i,s=100){const o=new Q(`hsva(${t}, ${e}%, ${i}%, ${s/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(e);i!==null?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=i.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),s=b`
      <div
        part="base"
        class=${O({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?b`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${yt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${O({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${yt({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${A(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${yt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${A(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?b`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${yt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${yt({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${A(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${yt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":b`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${ao?b`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${i.length>0?b`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(o=>{const a=this.parseColor(o);return a?b`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${A(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(a.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${yt({backgroundColor:a.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?s:b`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${O({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${yt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${s}
      </sl-dropdown>
    `}};V.styles=[T,nl];V.dependencies={"sl-button-group":_e,"sl-button":q,"sl-dropdown":dt,"sl-icon":j,"sl-input":M,"sl-visually-hidden":Cs};r([$('[part~="base"]')],V.prototype,"base",2);r([$('[part~="input"]')],V.prototype,"input",2);r([$(".color-dropdown")],V.prototype,"dropdown",2);r([$('[part~="preview"]')],V.prototype,"previewButton",2);r([$('[part~="trigger"]')],V.prototype,"trigger",2);r([I()],V.prototype,"hasFocus",2);r([I()],V.prototype,"isDraggingGridHandle",2);r([I()],V.prototype,"isEmpty",2);r([I()],V.prototype,"inputValue",2);r([I()],V.prototype,"hue",2);r([I()],V.prototype,"saturation",2);r([I()],V.prototype,"brightness",2);r([I()],V.prototype,"alpha",2);r([l()],V.prototype,"value",2);r([ve()],V.prototype,"defaultValue",2);r([l()],V.prototype,"label",2);r([l()],V.prototype,"format",2);r([l({type:Boolean,reflect:!0})],V.prototype,"inline",2);r([l({reflect:!0})],V.prototype,"size",2);r([l({attribute:"no-format-toggle",type:Boolean})],V.prototype,"noFormatToggle",2);r([l()],V.prototype,"name",2);r([l({type:Boolean,reflect:!0})],V.prototype,"disabled",2);r([l({type:Boolean})],V.prototype,"hoist",2);r([l({type:Boolean})],V.prototype,"opacity",2);r([l({type:Boolean})],V.prototype,"uppercase",2);r([l()],V.prototype,"swatches",2);r([l({reflect:!0})],V.prototype,"form",2);r([l({type:Boolean,reflect:!0})],V.prototype,"required",2);r([x("format",{waitUntilFirstUpdate:!0})],V.prototype,"handleFormatChange",1);r([x("opacity",{waitUntilFirstUpdate:!0})],V.prototype,"handleOpacityChange",1);r([x("value")],V.prototype,"handleValueChange",1);V.define("sl-color-picker");var wl=S`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,jo=class extends E{constructor(){super(...arguments),this.hasSlotController=new vt(this,"footer","header","image")}render(){return b`
      <div
        part="base"
        class=${O({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};jo.styles=[T,wl];jo.define("sl-card");var _l=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},xl=S`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*kl(t,e){if(t!==void 0){let i=0;for(const s of t)yield e(s,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*$l(t,e,i=1){const s=e===void 0?0:t;e??=t;for(let o=s;i>0?o<e:e<o;o+=i)yield o}var Cl=(t,e)=>{let i=0;return function(...s){window.clearTimeout(i),i=window.setTimeout(()=>{t.call(this,...s)},e)}},no=(t,e,i)=>{const s=t[e];t[e]=function(...o){s.call(this,...o),i.call(this,s,...o)}},Sl="onscrollend"in window;if(!Sl){const t=new Set,e=new WeakMap,i=o=>{for(const a of o.changedTouches)t.add(a.identifier)},s=o=>{for(const a of o.changedTouches)t.delete(a.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",s,!0),document.addEventListener("touchcancel",s,!0),no(EventTarget.prototype,"addEventListener",function(o,a){if(a!=="scrollend")return;const n=Cl(()=>{t.size?n():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",n,{passive:!0}),e.set(this,n)}),no(EventTarget.prototype,"removeEventListener",function(o,a){if(a!=="scrollend")return;const n=e.get(this);n&&o.call(this,"scroll",n,{passive:!0})})}var tt=class extends E{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new _l(this,()=>this.next()),this.localize=new N(this),this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const s=t.scrollLeft,o=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==s||i!==o)&&(t.scrollTo({left:s,top:o,behavior:os()?"auto":"smooth"}),await bt(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(i=>[...i.addedNodes,...i.removedNodes].some(s=>this.isCarouselItem(s)&&!s.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:i,loop:s}=this,o=s?t/i:(t-e)/i+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,i=this.localize.dir()==="rtl",s=e.closest('[part~="pagination-item"]')!==null,o=t.key==="ArrowDown"||!i&&t.key==="ArrowRight"||i&&t.key==="ArrowLeft",a=t.key==="ArrowUp"||!i&&t.key==="ArrowLeft"||i&&t.key==="ArrowRight";t.preventDefault(),a&&this.previous(),o&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),s&&this.updateComplete.then(()=>{var n;const d=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');d&&d.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const s of e){const o=s.target;o.toggleAttribute("inert",!s.isIntersecting),o.classList.toggle("--in-view",s.isIntersecting),o.setAttribute("aria-hidden",s.isIntersecting?"false":"true")}const i=e.find(s=>s.isIntersecting);if(i)if(this.loop&&i.target.hasAttribute("data-clone")){const s=Number(i.target.getAttribute("data-clone"));this.goToSlide(s,"instant")}else{const o=this.getSlides().indexOf(i.target);this.activeSlide=Math.ceil(o/this.slidesPerMove)*this.slidesPerMove}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1)}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.synchronizeSlides(),this.goToSlide(this.activeSlide,"auto")}createClones(){const t=this.getSlides(),e=this.slidesPerPage,i=t.slice(-e),s=t.slice(0,e);i.reverse().forEach((o,a)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(t.length-a-1)),this.prepend(n)}),s.forEach((o,a)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(a)),this.append(n)})}handelSlideChange(){const t=this.getSlides();t.forEach((e,i)=>{e.classList.toggle("--is-active",i===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((i,s)=>{(s+e)%e===0?i.style.removeProperty("scroll-snap-align"):i.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:i,loop:s}=this,o=this.getSlides(),a=this.getSlides({excludeClones:!1});if(!o.length)return;const n=s?(t+o.length)%o.length:et(t,0,o.length-1);this.activeSlide=n;const d=et(t+(s?i:0),0,a.length-1),c=a[d];this.scrollToSlide(c,os()?"auto":e)}scrollToSlide(t,e="smooth"){const i=this.scrollContainer,s=i.getBoundingClientRect(),o=t.getBoundingClientRect(),a=o.left-s.left,n=o.top-s.top;i.scrollTo({left:a+i.scrollLeft,top:n+i.scrollTop,behavior:e})}render(){const{slidesPerMove:t,scrolling:e}=this,i=this.getPageCount(),s=this.getCurrentPage(),o=this.canScrollPrev(),a=this.canScrollNext(),n=this.localize.dir()==="ltr";return b`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${O({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?b`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${O({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${O({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!a})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${a?"false":"true"}"
                  @click=${a?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?b`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${kl($l(i),d=>{const c=d===s;return b`
                    <button
                      part="pagination-item ${c?"pagination-item--active":""}"
                      class="${O({"carousel__pagination-item":!0,"carousel__pagination-item--active":c})}"
                      role="tab"
                      aria-selected="${c?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",d+1,i)}"
                      tabindex=${c?"0":"-1"}
                      @click=${()=>this.goToSlide(d*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};tt.styles=[T,xl];tt.dependencies={"sl-icon":j};r([l({type:Boolean,reflect:!0})],tt.prototype,"loop",2);r([l({type:Boolean,reflect:!0})],tt.prototype,"navigation",2);r([l({type:Boolean,reflect:!0})],tt.prototype,"pagination",2);r([l({type:Boolean,reflect:!0})],tt.prototype,"autoplay",2);r([l({type:Number,attribute:"autoplay-interval"})],tt.prototype,"autoplayInterval",2);r([l({type:Number,attribute:"slides-per-page"})],tt.prototype,"slidesPerPage",2);r([l({type:Number,attribute:"slides-per-move"})],tt.prototype,"slidesPerMove",2);r([l()],tt.prototype,"orientation",2);r([l({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],tt.prototype,"mouseDragging",2);r([$(".carousel__slides")],tt.prototype,"scrollContainer",2);r([$(".carousel__pagination")],tt.prototype,"paginationContainer",2);r([I()],tt.prototype,"activeSlide",2);r([I()],tt.prototype,"scrolling",2);r([I()],tt.prototype,"dragging",2);r([gs({passive:!0})],tt.prototype,"handleScroll",1);r([x("loop",{waitUntilFirstUpdate:!0}),x("slidesPerPage",{waitUntilFirstUpdate:!0})],tt.prototype,"initializeSlides",1);r([x("activeSlide")],tt.prototype,"handelSlideChange",1);r([x("slidesPerMove")],tt.prototype,"updateSlidesSnap",1);r([x("autoplay")],tt.prototype,"handleAutoplayChange",1);tt.define("sl-carousel");var zl=S`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Ko=class extends E{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return b` <slot></slot> `}};Ko.styles=[T,zl];Ko.define("sl-carousel-item");_e.define("sl-button-group");var Al=S`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,ui=class extends E{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return b`
      <span
        part="base"
        class=${O({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};ui.styles=[T,Al];r([l({reflect:!0})],ui.prototype,"variant",2);r([l({type:Boolean,reflect:!0})],ui.prototype,"pill",2);r([l({type:Boolean,reflect:!0})],ui.prototype,"pulse",2);ui.define("sl-badge");var El=S`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Pe=class extends E{constructor(){super(...arguments),this.localize=new N(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,i)=>{const s=e.querySelector('[slot="separator"]');s===null?e.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),i===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),b`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Pe.styles=[T,El];Pe.dependencies={"sl-icon":j};r([$("slot")],Pe.prototype,"defaultSlot",2);r([$('slot[name="separator"]')],Pe.prototype,"separatorSlot",2);r([l()],Pe.prototype,"label",2);Pe.define("sl-breadcrumb");var Dl=S`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,pi=class extends E{constructor(){super(...arguments),this.hasSlotController=new vt(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const t=!!this.href;return b`
      <div
        part="base"
        class=${O({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${t?b`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${A(this.target?this.target:void 0)}"
                rel=${A(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:b`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};pi.styles=[T,Dl];r([l()],pi.prototype,"href",2);r([l()],pi.prototype,"target",2);r([l()],pi.prototype,"rel",2);pi.define("sl-breadcrumb-item");var Tl=S`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,Vt=class extends E{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:i}=this.animatedImage;t.width=e,t.height=i,t.getContext("2d").drawImage(this.animatedImage,0,0,e,i),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return b`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?b`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Vt.styles=[T,Tl];Vt.dependencies={"sl-icon":j};r([$(".animated-image__animated")],Vt.prototype,"animatedImage",2);r([I()],Vt.prototype,"frozenFrame",2);r([I()],Vt.prototype,"isLoaded",2);r([l()],Vt.prototype,"src",2);r([l()],Vt.prototype,"alt",2);r([l({type:Boolean,reflect:!0})],Vt.prototype,"play",2);r([x("play",{waitUntilFirstUpdate:!0})],Vt.prototype,"handlePlayChange",1);r([x("src")],Vt.prototype,"handleSrcChange",1);Vt.define("sl-animated-image");var Ll=S`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Kt=class extends E{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const t=b`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let e=b``;return this.initials?e=b`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=b`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,b`
      <div
        part="base"
        class=${O({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};Kt.styles=[T,Ll];Kt.dependencies={"sl-icon":j};r([I()],Kt.prototype,"hasError",2);r([l()],Kt.prototype,"image",2);r([l()],Kt.prototype,"label",2);r([l()],Kt.prototype,"initials",2);r([l()],Kt.prototype,"loading",2);r([l({reflect:!0})],Kt.prototype,"shape",2);r([x("image")],Kt.prototype,"handleImageChange",1);Kt.define("sl-avatar");var Ol=S`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,ke=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Yt=class extends E{constructor(){super(...arguments),this.hasSlotController=new vt(this,"icon","suffix"),this.localize=new N(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await it(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=Y(this,"alert.show",{dir:this.localize.dir()});await Z(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await it(this.base);const{keyframes:t,options:e}=Y(this,"alert.hide",{dir:this.localize.dir()});await Z(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}async toast(){return new Promise(t=>{ke.parentElement===null&&document.body.append(ke),ke.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{ke.removeChild(this),t(),ke.querySelector("sl-alert")===null&&ke.remove()},{once:!0})})}render(){return b`
      <div
        part="base"
        class=${O({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?b`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};Yt.styles=[T,Ol];Yt.dependencies={"sl-icon-button":st};r([$('[part~="base"]')],Yt.prototype,"base",2);r([l({type:Boolean,reflect:!0})],Yt.prototype,"open",2);r([l({type:Boolean,reflect:!0})],Yt.prototype,"closable",2);r([l({reflect:!0})],Yt.prototype,"variant",2);r([l({type:Number})],Yt.prototype,"duration",2);r([x("open",{waitUntilFirstUpdate:!0})],Yt.prototype,"handleOpenChange",1);r([x("duration")],Yt.prototype,"handleDurationChange",1);U("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});U("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Yt.define("sl-alert");const Il=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Pl=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Ml=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Rl=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Fl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Bl=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Vl=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Nl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Hl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ul=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Wl=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],ql=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],jl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Kl=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Yl=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Xl=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Gl=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ql=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Zl=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Jl=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],tc=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],ec=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ic=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],sc=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],oc=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],rc=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ac=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],nc=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],lc=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],cc=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],dc=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],hc=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],uc=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],pc=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fc=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],mc=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],gc=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],bc=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],vc=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],yc=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],wc=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_c=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],xc=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],kc=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],$c=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Cc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Sc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],zc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Ac=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],Ec=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Dc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Tc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Lc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Oc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Ic=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Pc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Mc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Rc=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Fc=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Bc=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Vc=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Nc=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Hc=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Uc=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Wc=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],qc=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],jc=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Kc=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Yc=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Xc=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Gc=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Qc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Zc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Jc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],td=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],ed=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],id=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],sd=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],od=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],rd=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ad=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],nd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],ld=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],cd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],dd=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],hd=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],ud=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],pd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],fd=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],md=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],gd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],bd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],vd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],yd=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],wd=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],_d=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],xd=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],kd=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Yo={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},$d=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Kl,backInLeft:Yl,backInRight:Xl,backInUp:Gl,backOutDown:Ql,backOutLeft:Zl,backOutRight:Jl,backOutUp:tc,bounce:Il,bounceIn:ec,bounceInDown:ic,bounceInLeft:sc,bounceInRight:oc,bounceInUp:rc,bounceOut:ac,bounceOutDown:nc,bounceOutLeft:lc,bounceOutRight:cc,bounceOutUp:dc,easings:Yo,fadeIn:hc,fadeInBottomLeft:uc,fadeInBottomRight:pc,fadeInDown:fc,fadeInDownBig:mc,fadeInLeft:gc,fadeInLeftBig:bc,fadeInRight:vc,fadeInRightBig:yc,fadeInTopLeft:wc,fadeInTopRight:_c,fadeInUp:xc,fadeInUpBig:kc,fadeOut:$c,fadeOutBottomLeft:Cc,fadeOutBottomRight:Sc,fadeOutDown:zc,fadeOutDownBig:Ac,fadeOutLeft:Ec,fadeOutLeftBig:Dc,fadeOutRight:Tc,fadeOutRightBig:Lc,fadeOutTopLeft:Oc,fadeOutTopRight:Ic,fadeOutUp:Pc,fadeOutUpBig:Mc,flash:Pl,flip:Rc,flipInX:Fc,flipInY:Bc,flipOutX:Vc,flipOutY:Nc,headShake:Ml,heartBeat:Rl,hinge:dd,jackInTheBox:hd,jello:Fl,lightSpeedInLeft:Hc,lightSpeedInRight:Uc,lightSpeedOutLeft:Wc,lightSpeedOutRight:qc,pulse:Bl,rollIn:ud,rollOut:pd,rotateIn:jc,rotateInDownLeft:Kc,rotateInDownRight:Yc,rotateInUpLeft:Xc,rotateInUpRight:Gc,rotateOut:Qc,rotateOutDownLeft:Zc,rotateOutDownRight:Jc,rotateOutUpLeft:td,rotateOutUpRight:ed,rubberBand:Vl,shake:Nl,shakeX:Hl,shakeY:Ul,slideInDown:id,slideInLeft:sd,slideInRight:od,slideInUp:rd,slideOutDown:ad,slideOutLeft:nd,slideOutRight:ld,slideOutUp:cd,swing:Wl,tada:ql,wobble:jl,zoomIn:fd,zoomInDown:md,zoomInLeft:gd,zoomInRight:bd,zoomInUp:vd,zoomOut:yd,zoomOutDown:wd,zoomOutLeft:_d,zoomOutRight:xd,zoomOutUp:kd},Symbol.toStringTag,{value:"Module"}));var Cd=S`
  :host {
    display: contents;
  }
`,lt=class extends E{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const i=(t=Yo[this.easing])!=null?t:this.easing,s=(e=this.keyframes)!=null?e:$d[this.name],a=(await this.defaultSlot).assignedElements()[0];return!a||!s?!1:(this.destroyAnimation(),this.animation=a.animate(s,{delay:this.delay,direction:this.direction,duration:this.duration,easing:i,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return b` <slot @slotchange=${this.handleSlotChange}></slot> `}};lt.styles=[T,Cd];r([_r("slot")],lt.prototype,"defaultSlot",2);r([l()],lt.prototype,"name",2);r([l({type:Boolean,reflect:!0})],lt.prototype,"play",2);r([l({type:Number})],lt.prototype,"delay",2);r([l()],lt.prototype,"direction",2);r([l({type:Number})],lt.prototype,"duration",2);r([l()],lt.prototype,"easing",2);r([l({attribute:"end-delay",type:Number})],lt.prototype,"endDelay",2);r([l()],lt.prototype,"fill",2);r([l({type:Number})],lt.prototype,"iterations",2);r([l({attribute:"iteration-start",type:Number})],lt.prototype,"iterationStart",2);r([l({attribute:!1})],lt.prototype,"keyframes",2);r([l({attribute:"playback-rate",type:Number})],lt.prototype,"playbackRate",2);r([x(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],lt.prototype,"handleAnimationChange",1);r([x("play")],lt.prototype,"handlePlayChange",1);r([x("playbackRate")],lt.prototype,"handlePlaybackRateChange",1);lt.define("sl-animation");var Sd=Object.defineProperty,zd=Object.getOwnPropertyDescriptor,zs=(t,e,i,s)=>{for(var o=s>1?void 0:s?zd(e,i):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(o=(s?n(e,i,o):n(o))||o);return s&&o&&Sd(e,i,o),o};is("../../node_modules/@shoelace-style/shoelace/dist");let ei=class extends Pt{constructor(){super(...arguments),this.name="",this.number=0}increment(){this.number++,this.dispatchEvent(new CustomEvent("increment-weapon",{detail:{name:this.name}}))}decrement(){this.number<=0||(this.number--,this.dispatchEvent(new CustomEvent("decrement-weapon",{detail:{name:this.name}})))}render(){return b`
		<sl-menu-item>
		<div class="item">
			<div>${this.name} ${this.number!==0?b`(${this.number})`:b``}</div>
			<div class="buttons">
				<sl-button @click="${this.decrement}">
					<sl-icon name="dash-circle"></sl-icon>
				</sl-button>
				<sl-button @click="${this.increment}">
					<sl-icon name="plus-circle"></sl-icon>
				</sl-button>
			</div>
		</div>
	</sl-menu-item>
    `}};ei.styles=S`
	.item {
		display: flex;
		flex-direction: row;
		justify-content: space-between
	}
  `;zs([l({type:String})],ei.prototype,"name",2);zs([l({type:Number})],ei.prototype,"number",2);ei=zs([ms("weapon-row")],ei);const Ad="modulepreload",Ed=function(t){return"/"+t},lo={},Xo=function(e,i,s){let o=Promise.resolve();if(i&&i.length>0){const a=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),d=n?.nonce||n?.getAttribute("nonce");o=Promise.all(i.map(c=>{if(c=Ed(c),c in lo)return;lo[c]=!0;const h=c.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(!!s)for(let f=a.length-1;f>=0;f--){const g=a[f];if(g.href===c&&(!h||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${m}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Ad,h||(p.as="script",p.crossOrigin=""),p.href=c,d&&p.setAttribute("nonce",d),document.head.appendChild(p),h)return new Promise((f,g)=>{p.addEventListener("load",f),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}return o.then(()=>e()).catch(a=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a})},As=Symbol.for("app-tools::log::1.x");globalThis[As]={setDebug:Dd,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function Dd(t){globalThis[As].debug=!!t}function Td(t,e){globalThis[As].debug&&(console.groupCollapsed(`[app-tools] ${t}`),e&&console.log(e),console.groupEnd())}function Ld(t){return(e,i)=>{Td(`${t}: ${e}`,i)}}const ee=Ld("router");class Od extends Event{constructor(e){super("route-changed"),this.context=e}}class Id extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(e){super(),this.config=e,this.routes=e.routes.map(i=>({...i,urlPattern:new URLPattern({pathname:i.path,baseURL:window.location.href,search:"*",hash:"*"})})),ee("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return ee(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(e){for(const i of this.routes){const s=i.urlPattern.exec(e);if(s){const{title:o}=i,a=Object.fromEntries(new URLSearchParams(e.search)),n=s?.pathname?.groups??{};return this.context={url:e,title:typeof o=="function"?o({params:n,query:a,url:e}):o,params:n,query:a},i}}return ee(`No route matched for ${e.pathname}${e.search}${e.hash}`,e),null}_notifyUrlChanged(){this.dispatchEvent(new Od(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey)return;const i=e.composedPath().find(a=>a.tagName==="A");if(!i||!i.href)return;const s=new URL(i.href);if(this.url.href===s.href||s.host!==window.location.host||i.hasAttribute("download")||i.href.includes("mailto:"))return;const o=i.getAttribute("target");o&&o!==""&&o!=="_self"||(e.preventDefault(),this.navigate(s))};_collectPlugins(e){return[...this.config?.plugins??[],...e?.plugins??[]]}async navigate(e,i={}){typeof e=="string"&&(e=new URL(e,this.baseUrl));let s=this._matchRoute(e)||this._matchRoute(this.fallback);ee(`Navigating to ${e.pathname}${e.search}${e.hash}`,{context:this.context,route:this.route});let o=this._collectPlugins(s);for(const a of o)try{const n=await a?.shouldNavigate?.(this.context);n&&(await n.condition()||(e=new URL(n.redirect,this.baseUrl),s=this._matchRoute(e)||this._matchRoute(this.fallback),o=this._collectPlugins(s),ee("Redirecting",{context:this.context,route:this.route})))}catch(n){throw ee(`Plugin "${a.name}" error on shouldNavigate hook`,n),n}if(this.route=s,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${e}`);for(const a of o)try{await a?.beforeNavigation?.(this.context)}catch(n){throw ee(`Plugin "${a.name}" error on beforeNavigation hook`,n),n}i?.replace?window.history.replaceState(null,"",`${e.pathname}${e.search}${e.hash}`):i.backNav||window.history.pushState(null,"",`${e.pathname}${e.search}${e.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const a of o)try{await a?.afterNavigation?.(this.context)}catch(n){throw ee(`Plugin "${a.name}" error on afterNavigation hook`,n),n}}}function Pd(t){return{name:"lazy",beforeNavigation:()=>{t()}}}globalThis.URLPattern||await Xo(()=>import("./index-CqHS4zRL.js"),[]);const Md="/",co=new Id({routes:[{path:ho(),title:"Home",render:()=>b`<app-home></app-home>`},{path:ho("about"),title:"About",plugins:[Pd(()=>Xo(()=>import("./app-about-8zM49JGL.js"),[]))],render:()=>b`<app-about></app-about>`}]});function ho(t){var e=Md;return t&&(e=e+t),e}var Rd=Object.defineProperty,Fd=Object.getOwnPropertyDescriptor,Bd=(t,e,i,s)=>{for(var o=s>1?void 0:s?Fd(e,i):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(o=(s?n(e,i,o):n(o))||o);return s&&o&&Rd(e,i,o),o};let ds=class extends Pt{firstUpdated(){co.addEventListener("route-changed",()=>{"startViewTransition"in document?document.startViewTransition(()=>this.requestUpdate()):this.requestUpdate()})}render(){return co.render()}};ds.styles=S`
    main {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
    }
  `;ds=Bd([ms("app-index")],ds);export{bn as a,S as i,Pt as s,ms as t,b as x};
//# sourceMappingURL=index-CGRTwkiE.js.map
