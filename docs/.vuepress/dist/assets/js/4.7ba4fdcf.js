(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{142:function(e,t,n){},145:function(e,t,n){"use strict";var l=n(142);n.n(l).a},147:function(e,t,n){},151:function(e,t,n){"use strict";var l=n(147);n.n(l).a},154:function(e,t,n){"use strict";n.r(t);n(144);var l={components:{PageGuide:n(78).default},data:function(){return{msg:"Wow Message",showGuide:!1}}},i=(n(151),n(0)),o=Object(i.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ClientOnly",[n("h1",[e._v("Testing custom component")]),e._v(" "),n("p",{attrs:{"page-guide":"hello","page-guide-placement":"bottom"}},[e._v(e._s(e.msg))]),e._v(" "),n("button",{on:{click:function(t){e.showGuide=!e.showGuide}}},[e._v("Show Guide")]),e._v(" "),n("PageGuide",{model:{value:e.showGuide,callback:function(t){e.showGuide=t},expression:"showGuide"}})],1)],1)},[],!1,null,null,null);o.options.__file="Demo.vue";t.default=o.exports},78:function(e,t,n){"use strict";n.r(t);n(10);var l=n(144),i={props:{value:{type:Boolean,default:null},guideClass:{type:String,default:"v-page-guide__tooltip"},transitionClass:{type:String,default:"v-page-guide__fade"},overlayColor:{type:String,default:"rgba(0,0,0,0.4)"},textColor:{type:String,default:"#2c3e50"},elementBackgroundColor:{type:String,default:""},elementDisplay:{type:Object,default:function(){return{}}}},data:function(){return{elements:[]}},watch:{value:function(){var e=this;setTimeout(function(){e.setUpElements()},1)}},mounted:function(){this.setUpElements()},methods:{getText:function(e){return e.getAttribute("page-guide")},setUpElements:function(){var e=this;this.elements=[];var t=0;document.querySelectorAll("[page-guide]").forEach(function(n){e.elements.push({el:n,id:t,text:n.getAttribute("page-guide"),popper:null,placement:n.getAttribute("page-guide-placement")||"auto"}),t++}),setTimeout(function(){e.setGuides()},1)},setGuides:function(){var e=this;this.elements.forEach(function(t){if(e.value){var n=e.getPropValue(t.el,"position");for(var i in"absolute"!==n&&"relative"!==n&&"fixed"!==n&&(t.el.style.position="relative"),t.el.style.zIndex="100",e.elementDisplay)t.el.style[i]=e.elementDisplay[i];t.popper=new l.a(t.el,e.$refs["vpageguide".concat(t.id)][0],{placement:t.placement})}else for(var o in t.el.style.position="",t.el.style.zIndex="",e.elementDisplay)t.el.style[o]=""})},getPropValue:function(e,t){var n="";return e.currentStyle?n=e.currentStyle[t]:document.defaultView&&document.defaultView.getComputedStyle&&(n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t)),n&&n.toLowerCase?n.toLowerCase():n}}},o=(n(145),n(0)),u=Object(o.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-page-guide"},[e.value?n("div",{staticClass:"v-page-guide__overlay",style:{backgroundColor:e.overlayColor},on:{click:function(t){e.$emit("input",!1)}}}):e._e(),e._v(" "),n("transition",{attrs:{name:e.transitionClass}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}]},e._l(e.elements,function(t,l){return n("div",{key:l,ref:"vpageguide"+t.id,refInFor:!0,class:e.guideClass},[e._t("content",[n("p",{staticClass:"v-page-guide__text",style:{color:e.textColor}},[e._v("\n\t\t\t\t\t\t"+e._s(t.text)+"\n\t\t\t\t\t")])],{content:t})],2)}))])],1)},[],!1,null,null,null);u.options.__file="VPageGuide.vue";t.default=u.exports}}]);