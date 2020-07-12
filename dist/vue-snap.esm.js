import{polyfill as e}from"seamless-scroll-polyfill/dist/esm/Element.scrollBy";"undefined"==typeof window||"undefined"==typeof document||"scrollBehavior"in document.documentElement.style||e();var n={props:{vertical:{type:Boolean,default:!1},navigation:{type:Boolean,default:!0},scrollPage:{type:Boolean,default:!1}},computed:{getClass:function(){return["vs-carousel",{"vs-carousel--vertical":this.vertical}]}},mounted:function(){this.scroll()},methods:{changeSlide:function(e){var n=this.scrollPage?this.$refs.vsWrapper:this.$children[0].$el,t=n.offsetWidth,o=n.offsetHeight;this.vertical?this.scroll(0,e*o):this.scroll(e*t,0)},scroll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.$refs.vsWrapper.scrollBy({left:e,top:n,behavior:"smooth"})}}};function t(e,n,t,o,s,i,a,r,l,c){"boolean"!=typeof a&&(l=r,r=a,a=!1);const d="function"==typeof t?t.options:t;let u;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,s&&(d.functional=!0)),o&&(d._scopeId=o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=u):n&&(u=a?function(e){n.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,r(e))}),u)if(d.functional){const e=d.render;d.render=function(n,t){return u.call(t),e(n,t)}}else{const e=d.beforeCreate;d.beforeCreate=e?[].concat(e,u):[u]}return t}const o="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function s(e){return(e,n)=>function(e,n){const t=o?n.media||"default":e,s=a[t]||(a[t]={ids:new Set,styles:[]});if(!s.ids.has(e)){s.ids.add(e);let t=n.source;if(n.map&&(t+="\n/*# sourceURL="+n.map.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),s.element||(s.element=document.createElement("style"),s.element.type="text/css",n.media&&s.element.setAttribute("media",n.media),void 0===i&&(i=document.head||document.getElementsByTagName("head")[0]),i.appendChild(s.element)),"styleSheet"in s.element)s.styles.push(t),s.element.styleSheet.cssText=s.styles.filter(Boolean).join("\n");else{const e=s.ids.size-1,n=document.createTextNode(t),o=s.element.childNodes;o[e]&&s.element.removeChild(o[e]),o.length?s.element.insertBefore(n,o[e]):s.element.appendChild(n)}}}(e,n)}let i;const a={};const r=n;var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:e.getClass},[t("div",{ref:"vsWrapper",staticClass:"vs-carousel__wrapper"},[e._t("default")],2),e._v(" "),e.navigation?[e._t("navigation",[t("button",{ref:"vsNavigationLeft",staticClass:"\n          vs-carousel__navigation\n          vs-carousel__navigation--left\n        ",attrs:{"aria-label":"Slide left"},on:{click:function(n){return e.changeSlide(-1)}}}),e._v(" "),t("button",{ref:"vsNavigationRight",staticClass:"\n          vs-carousel__navigation\n          vs-carousel__navigation--right\n        ",attrs:{"aria-label":"Slide right"},on:{click:function(n){return e.changeSlide(1)}}})])]:e._e()],2)};l._withStripped=!0;const c=t({render:l,staticRenderFns:[]},(function(e){e&&e("data-v-80e179a2_0",{source:".vs-carousel {\n    position: relative;\n}\n.vs-carousel--vertical .vs-carousel__wrapper {\n    overflow-x: hidden;\n    overflow-y: scroll;\n    scroll-snap-type: y mandatory;\n    flex-direction: column;\n}\n.vs-carousel__wrapper {\n    display: flex;\n    height: 200px;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    scroll-behavior: smooth;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n}\n.vs-carousel__wrapper::-webkit-scrollbar {\n    display: none;\n}\n.vs-carousel__slide {\n    flex: 0 0 100%;\n    height: 100%;\n    scroll-snap-align: start;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    outline: none;\n}\n.vs-carousel__navigation {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 48px;\n    min-height: 48px;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 3L6 10L14 17' stroke='%232F2F2F' stroke-width='1'/%3E%3C/svg%3E%0A\");\n    background-repeat: no-repeat;\n    background-size: 20px 20px;\n    background-position: center;\n    background-color: rgba(255, 255, 255, 0.8);\n    border: 0;\n    padding: 0;\n    outline: none;\n    cursor: pointer;\n}\n.vs-carousel__navigation:hover,\n.vs-carousel__navigation:focus {\n    background-color: white;\n}\n.vs-carousel__navigation--left {\n    left: 0;\n}\n.vs-carousel__navigation--right {\n    right: 0;\n    transform: rotate(180deg) translateY(50%);\n}\n",map:void 0,media:void 0})}),r,void 0,!1,void 0,!1,s,void 0,void 0);var d=function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"vsSlide",staticClass:"vs-carousel__slide",attrs:{tabindex:"0"}},[this._t("default")],2)};d._withStripped=!0;const u=t({render:d,staticRenderFns:[]},void 0,{},void 0,!1,void 0,!1,void 0,void 0,void 0);var v={install:function(e){e.component("carousel",c),e.component("slide",u)}};export default v;export{c as Carousel,u as Slide};
