(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,o,e){t.exports=e("2f39")},"0047":function(t,o,e){},"018e":function(t,o){},"0fc2":function(t,o,e){"use strict";var n=e("8de3"),r=e.n(n);r.a},"1f89":function(t,o){},"2f39":function(t,o,e){"use strict";e.r(o);var n={};e.r(n),e.d(n,"toc",(function(){return rt}));var r={};e.r(r),e.d(r,"toc",(function(){return it}));var i=e("967e"),a=e.n(i),s=(e("a481"),e("96cf"),e("5c7d"),e("573e"),e("7d6e"),e("e54f"),e("985d"),e("0047"),e("d5b2"),e("2cd3"),e("2b0e")),c=e("b05d"),l=e("cb32"),b=e("9c40"),p=e("f09f"),u=e("a370"),d=e("8f8e"),f=e("b498"),m=e("9404"),v=e("3b73"),q=e("e359"),h=e("0016"),g=e("27f9"),C=e("66e5"),w=e("0170"),_=e("4074"),x=e("4d5a"),y=e("1c1c"),k=e("4e73"),Q=e("9989"),R=e("09e3"),j=e("5096"),S=e("7cbe"),O=e("4983"),T=e("ddd8"),I=e("eb85"),E=e("2c91"),F=e("429b"),L=e("7460"),P=e("adad"),$=e("823b"),z=e("65c6"),B=e("6ac5"),N=e("7f67"),D=e("714f"),G=e("2a19"),U=e("0967");s["a"].use(c["a"],{config:{},components:{QAvatar:l["a"],QBtn:b["a"],QCard:p["a"],QCardSection:u["a"],QCheckbox:d["a"],QColor:f["a"],QDrawer:m["a"],QExpansionItem:v["a"],QHeader:q["a"],QIcon:h["a"],QInput:g["a"],QItem:C["a"],QItemLabel:w["a"],QItemSection:_["a"],QLayout:x["a"],QList:y["a"],QMenu:k["a"],QPage:Q["a"],QPageContainer:R["a"],QPageScroller:j["a"],QPopupProxy:S["a"],QScrollArea:O["a"],QSelect:T["a"],QSeparator:I["a"],QSpace:E["a"],QTabs:F["a"],QTab:L["a"],QTabPanels:P["a"],QTabPanel:$["a"],QToolbar:z["a"],QToolbarTitle:B["a"]},directives:{ClosePopup:N["a"],Ripple:D["a"]},plugins:{Notify:G["a"],Platform:U["b"]}});var V=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"q-app"}},[e("router-view")],1)},A=[],M={name:"App"},H=M,J=e("2877"),W=Object(J["a"])(H,V,A,!1,null,null,null),K=W.exports,X=e("2f62"),Y={},Z=e("7b94"),tt=e("1f89"),ot=e("c9d2"),et={namespaced:!0,state:Y,getters:Z,mutations:tt,actions:ot},nt={toc:[]},rt=function(t){return t.toc},it=function(t,o){t.toc=o},at=e("018e"),st={namespaced:!0,state:nt,getters:n,mutations:r,actions:at};s["a"].use(X["a"]);var ct=function(){var t=new X["a"].Store({modules:{ribbon:et,common:st},strict:!1});return t},lt=e("8c4f"),bt=[{path:"/",component:function(){return e.e("2d22c0ff").then(e.bind(null,"f241"))},children:[{path:"",redirect:"/docs"},{path:"/docs",component:function(){return e.e("bfe78a4c").then(e.bind(null,"8b24"))}},{path:"/examples",component:function(){return e.e("87a80ed6").then(e.bind(null,"0960"))}},{path:"/builder",component:function(){return e.e("d99338c8").then(e.bind(null,"7660"))}}]}];bt.push({path:"*",component:function(){return e.e("4b47640d").then(e.bind(null,"e51e"))}});var pt=bt;s["a"].use(lt["a"]);var ut=function(){var t=new lt["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:pt,mode:"history",base:"/quasar-ui-qribbon/"});return t},dt=function(){var t="function"===typeof ct?ct({Vue:s["a"]}):ct,o="function"===typeof ut?ut({Vue:s["a"],store:t}):ut;t.$router=o;var e={el:"#q-app",router:o,store:t,render:function(t){return t(K)}};return{app:e,store:t,router:o}},ft=e("384e");s["a"].use(ft["a"]);var mt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-card",{staticClass:"q-my-lg q-pa-md"},[e("q-card-section",[e("div",{staticClass:"box-ribbon-wrapper"},[e("div",{staticClass:"flex justify-between q-pt-xl"},[e("q-ribbon",{staticClass:"q-pb-md",attrs:{"leaf-position":"top",decoration:"point-in"}},[t._v("Left Ribbon")]),e("q-ribbon",{staticClass:"q-pb-md",attrs:{position:"right","leaf-position":"top",decoration:"rounded-in",inline:"",glow:""}},[t._v("Inline Right Ribbon")])],1)])])],1)},vt=[],qt=(e("4616"),{}),ht=Object(J["a"])(qt,mt,vt,!1,null,"50d0abd1",null),gt=ht.exports,Ct=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-card",{staticClass:"q-my-lg q-pa-md"},[e("q-card-section",[e("div",{staticClass:"box-ribbon-wrapper"},[e("div",{staticClass:"box-ribbon-wrapper q-py-md"},[e("div",{staticClass:"ribbon-wrapper move-1"},[e("q-ribbon",{attrs:{type:"vertical",position:"top-left","leaf-position":"right",glow:""}},[t._v("Top Down Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper move-1"},[e("q-ribbon",{attrs:{type:"vertical",position:"bottom-left","leaf-position":"left",glow:""}},[t._v("Bottom Up Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper move-2"},[e("q-ribbon",{attrs:{type:"vertical",position:"top-left","leaf-position":"right",decoration:"point-in"}},[t._v("Top Down Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper move-2"},[e("q-ribbon",{attrs:{type:"vertical",position:"bottom-left","leaf-position":"left",decoration:"point-out"}},[t._v("Bottom Up Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper move-3"},[e("q-ribbon",{attrs:{type:"vertical",position:"top-left","leaf-position":"right",decoration:"rounded-in"}},[t._v("Top Down Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper move-3"},[e("q-ribbon",{attrs:{type:"vertical",position:"bottom-left","leaf-position":"left",decoration:"rounded-out"}},[t._v("Bottom Up Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper"},[e("q-ribbon",{staticClass:"text-center",attrs:{type:"vertical",position:"right",size:"full","leaf-position":"left"}},[t._v("Full Ribbon (.text-center)")])],1)])])])],1)},wt=[],_t=(e("4d9b"),{}),xt=Object(J["a"])(_t,Ct,wt,!1,null,"87f9aa28",null),yt=xt.exports,kt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-card",{staticClass:"q-my-lg q-pa-md"},[e("q-card-section",[e("div",{staticClass:"box-ribbon-wrapper"},[e("div",{staticClass:"flex justify-between q-pt-xl"},[e("q-ribbon",{staticClass:"q-pb-md",attrs:{decoration:"point-in","background-color":"secondary",inline:""}},[t._v("Quasar Color (secondary)")]),e("q-ribbon",{staticClass:"q-pb-md",attrs:{position:"right","background-color":"red-5","leaf-color":"purple-3",inline:""}},[t._v("Quasar Color (red-5)")])],1)])])],1)},Qt=[],Rt=(e("40c7"),{}),jt=Object(J["a"])(Rt,kt,Qt,!1,null,"05f37b6b",null),St=jt.exports,Ot=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-card",{staticClass:"q-my-lg q-pa-md"},[e("q-card-section",[e("div",{staticClass:"box-ribbon-wrapper q-pt-xl"},[e("q-ribbon",{staticClass:"q-pb-md text-center border-radius-top",attrs:{size:"full"}},[t._v("Full Ribbon (.text-center) with border-radius")]),e("q-ribbon",{staticClass:"q-pb-md text-right q-mt-md",attrs:{"leaf-position":"top",size:"full","leaf-color":"green",color:"green","background-color":"yellow",glow:""}},[t._v("Full Inverted Hippy Ribbon (.text-right)")])],1)])],1)},Tt=[],It=(e("5d56"),{}),Et=Object(J["a"])(It,Ot,Tt,!1,null,"f9e215ac",null),Ft=Et.exports,Lt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-card",{staticClass:"q-my-lg q-pa-md"},[e("q-card-section",[e("div",{staticClass:"box-ribbon-wrapper"},[e("q-ribbon",{attrs:{position:"top-left",type:"corner",glow:""}},[t._v("Glow Top Left")]),e("q-ribbon",{staticClass:"github-text",attrs:{position:"top-right",type:"corner",color:"white","background-color":"#5b5e63"}},[e("a",{attrs:{href:"https://github.com/quasarframework/quasar-ui-qribbon",target:"_blank"}},[t._v("FORK ME ON GITHUB!")])]),e("q-ribbon",{staticClass:"qribbon-bottom",attrs:{position:"bottom-left",type:"corner"}},[e("span",{staticClass:"rotate-270"},[t._v("Bottom Left")])]),e("q-ribbon",{staticClass:"qribbon-bottom",attrs:{position:"bottom-right",type:"corner"}},[t._v("Bottom Right")])],1)])],1)},Pt=[],$t=(e("6d9f"),{}),zt=Object(J["a"])($t,Lt,Pt,!1,null,"1a1f62a2",null),Bt=zt.exports,Nt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-card",{staticClass:"q-my-lg q-pa-md"},[e("q-card-section",[e("div",{staticClass:"box-ribbon-wrapper q-pt-xl"},[e("div",{staticClass:"flex justify-between"},[e("q-ribbon",{staticClass:"q-pb-md",attrs:{inline:""}},[t._v("Inline Left Ribbon")]),e("q-ribbon",{staticClass:"q-pb-md",attrs:{position:"right","leaf-position":"top",decoration:"rounded-in",inline:"",glow:""}},[t._v("Inline Right Ribbon")])],1)])])],1)},Dt=[],Gt=(e("0fc2"),{}),Ut=Object(J["a"])(Gt,Nt,Dt,!1,null,"7de4cecc",null),Vt=Ut.exports,At=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-card",{staticClass:"q-my-lg q-pa-md"},[e("q-card-section",[e("div",{staticClass:"box-ribbon-wrapper q-pt-xl"},[e("q-toolbar",{staticClass:"q-pb-md"},[e("q-ribbon",{attrs:{position:"left",color:"rgba(0,0,0,.58)","background-color":"#c0c0c0","leaf-color":"#a0a0a0","leaf-position":"bottom",decoration:"rounded-out"}},[e("q-toolbar-title",{staticClass:"example-title"},[t._v("\n            QToolbar / QRibbon - Left\n          ")])],1)],1),e("q-toolbar",{staticClass:"q-pb-md"},[e("q-ribbon",{attrs:{position:"right",color:"purple","background-color":"orange","leaf-color":"purple","leaf-position":"bottom",decoration:"rounded-out"}},[e("q-toolbar-title",{staticClass:"example-title"},[t._v("\n            QToolbar / QRibbon - Right\n          ")])],1)],1),e("q-toolbar",{staticClass:"q-pb-md"},[e("q-ribbon",{staticClass:"text-center",attrs:{position:"left",color:"red","background-color":"yellow","leaf-color":"red","leaf-position":"bottom",size:"full"}},[e("q-toolbar-title",{staticClass:"example-title"},[t._v("\n            QToolbar / QRibbon - Full\n          ")])],1)],1)],1)])],1)},Mt=[],Ht=(e("d062"),{}),Jt=Object(J["a"])(Ht,At,Mt,!1,null,"008ebcbf",null),Wt=Jt.exports,Kt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-card",{staticClass:"q-my-lg q-pa-md"},[e("q-card-section",[e("div",{staticClass:"box-ribbon-wrapper q-pt-xl"},[e("q-ribbon",{staticClass:"q-pb-md cursor-pointer",attrs:{"leaf-position":"top",decoration:"point-out",position:"right"}},[t._v("\n        QMenu QRibbon - click me\n        "),e("q-menu",{attrs:{anchor:"center left",self:"top right"}},[e("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[e("q-item-section",[t._v("Open...")])],1),e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[e("q-item-section",[t._v("New")])],1),e("q-separator"),e("q-item",{attrs:{clickable:""}},[e("q-item-section",[t._v("Preferences")]),e("q-item-section",{attrs:{side:""}},[e("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1),e("q-menu",{attrs:{anchor:"top right",self:"top left"}},[e("q-list",t._l(3,(function(o){return e("q-item",{key:o,attrs:{dense:"",clickable:""}},[e("q-item-section",[t._v("Submenu Label")]),e("q-item-section",{attrs:{side:""}},[e("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1),e("q-menu",{attrs:{"auto-close":"",anchor:"top right",self:"top left"}},[e("q-list",t._l(3,(function(o){return e("q-item",{key:o,attrs:{dense:"",clickable:""}},[e("q-item-section",[t._v("3rd level Label")])],1)})),1)],1)],1)})),1)],1)],1),e("q-separator"),e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[e("q-item-section",[t._v("Quit")])],1)],1)],1)],1)],1)])],1)},Xt=[],Yt=(e("6876"),{}),Zt=Object(J["a"])(Yt,Kt,Xt,!1,null,"60ae92b3",null),to=Zt.exports,oo=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-card",{staticClass:"q-my-lg q-pa-md"},[e("q-card-section",[e("div",{staticClass:"box-ribbon-wrapper"},[e("div",{staticClass:"ribbon-wrapper move-1"},[e("q-ribbon",{attrs:{type:"vertical",position:"bottom-left","leaf-position":"left",glow:""}},[t._v("Bottom Up Ribbon")])],1),e("div",{staticClass:"ribbon-wrapper move-1"},[e("q-ribbon",{attrs:{type:"vertical",position:"top-left","leaf-position":"right",glow:""}},[t._v("Top Down Ribbon")])],1),e("q-ribbon",{staticClass:"q-pb-md border-radius",attrs:{glow:""}},[t._v("With border radius - GLOWING!")]),e("q-ribbon",{staticClass:"q-pb-md border-radius",attrs:{glow:"","glow-speed":4,"glow-iteration-count":"5"}},[t._v("Glow 5 times for 4 seconds each")]),e("div",{staticClass:"flex justify-end"},[e("q-ribbon",{staticClass:"q-pb-md",attrs:{position:"right","leaf-position":"top",decoration:"rounded-in",inline:"",glow:""}},[t._v("Inline Right Ribbon")])],1),e("q-ribbon",{staticClass:"q-pb-md text-right q-mt-md",attrs:{"leaf-position":"top",size:"full","leaf-color":"green",color:"green","background-color":"yellow",glow:""}},[t._v("Full Inverted Hippy Ribbon (.text-right)")]),e("q-ribbon",{attrs:{position:"top-right",type:"corner",glow:""}},[t._v("Glow Top Right")])],1)])],1)},eo=[],no=(e("9414"),{}),ro=Object(J["a"])(no,oo,eo,!1,null,"e370724a",null),io=ro.exports,ao=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-card",{staticClass:"q-my-lg q-pa-md"},[e("q-card-section",[e("div",{staticClass:"box-ribbon-wrapper q-pt-xl"},[e("q-ribbon",{staticClass:"q-pb-md qribbon-avatar",attrs:{position:"right",decoration:"rounded-out"}},[e("q-avatar",[e("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar.png"}})])],1)],1)])],1)},so=[],co=(e("f960"),{}),lo=Object(J["a"])(co,ao,so,!1,null,"c0a83450",null),bo=lo.exports,po=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-card",{staticClass:"q-my-lg q-pa-md"},[e("q-markdown",[t._v("\nAuto shade the leaf by passing CSS color (e.g. #FF0000)\n    ")]),e("q-card-section",[e("div",{staticClass:"box-ribbon-wrapper q-pt-xl"},[e("q-ribbon",{staticClass:"q-pb-md",attrs:{color:"white","background-color":"#FF0000"}},[t._v("Shaded Leaf")])],1)])],1)},uo=[],fo=(e("c0c8"),{}),mo=Object(J["a"])(fo,po,uo,!1,null,"8164c84e",null),vo=mo.exports,qo=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-card",{staticClass:"q-my-lg q-pa-md"},[e("q-card-section",[e("div",{staticClass:"box-ribbon-wrapper q-pt-xl"},[e("q-ribbon",{staticClass:"q-pb-md"},[e("q-icon",{staticStyle:{width:"100px","text-align":"center"},attrs:{name:"home"}})],1),e("q-ribbon",{staticClass:"q-pb-md",attrs:{color:"red","background-color":"#FFFF00"}},[e("q-icon",{staticStyle:{"font-size":"44px",width:"100px","text-align":"center"},attrs:{name:"bolt"}})],1)],1)])],1)},ho=[],go=(e("765a"),{}),Co=Object(J["a"])(go,qo,ho,!1,null,"d3b02248",null),wo=Co.exports,_o=function(t){var o=t.Vue;o.component("Sides",gt),o.component("Vertical",yt),o.component("Colors",St),o.component("Full",Ft),o.component("Corners",Bt),o.component("Inline",Vt),o.component("ToolBarTitle",Wt),o.component("Menu",to),o.component("Glow",io),o.component("Avatar",bo),o.component("Leaf",vo),o.component("Icon",wo)},xo=e("2330"),yo=e("b692"),ko=dt(),Qo=ko.app,Ro=ko.store,jo=ko.router;function So(){var t,o,e,n,r;return a.a.async((function(i){while(1)switch(i.prev=i.next){case 0:t=!0,o=function(o){t=!1,window.location.href=o},e=window.location.href.replace(window.location.origin,""),n=[void 0,_o,xo["a"],yo["a"]],r=0;case 5:if(!(!0===t&&r<n.length)){i.next=23;break}if("function"===typeof n[r]){i.next=8;break}return i.abrupt("continue",20);case 8:return i.prev=8,i.next=11,a.a.awrap(n[r]({app:Qo,router:jo,store:Ro,Vue:s["a"],ssrContext:null,redirect:o,urlPath:e}));case 11:i.next=20;break;case 13:if(i.prev=13,i.t0=i["catch"](8),!i.t0||!i.t0.url){i.next=18;break}return window.location.href=i.t0.url,i.abrupt("return");case 18:return console.error("[Quasar] boot error:",i.t0),i.abrupt("return");case 20:r++,i.next=5;break;case 23:if(!1!==t){i.next=25;break}return i.abrupt("return");case 25:new s["a"](Qo);case 26:case"end":return i.stop()}}),null,null,[[8,13]])}So()},"384e":function(t,o,e){"use strict";e("7f7f");var n=e("ab0b"),r=(e("c5f6"),e("6762"),e("2fdb"),e("0230")),i=e("74e2"),a=e("10b2"),s=a["a"].lighten,c={name:"QRibbonColorize",data:function(){return{__leafColor:"black"}},mixins:[i["a"]],props:{leafColor:{type:String}},computed:{bgLeafColor:function(){return this.leafColor?this.isCssColor(this.leafColor)?this.leafColor:this.makeQuasarColorVar(this.leafColor):this.isCssColor(this.backgroundColor)&&!this.isNamedCssColor(this.backgroundColor)?s(this.backgroundColor,-25):this.isCssColor(this.backgroundColor)?this.backgroundColor:this.makeQuasarColorVar(this.backgroundColor,this.color)}}},l={name:"QRibbon",mixins:[c],props:{position:{type:String,default:"left",validator:function(t){return["top-left","top-right","bottom-left","bottom-right","left","right"].includes(t)}},type:{type:String,default:"horizontal",validator:function(t){return["horizontal","vertical","corner"].includes(t)}},leafPosition:{type:String,default:"bottom",validator:function(t){return["top","bottom","left","right"].includes(t)}},size:{type:String,validator:function(t){return["full"].includes(t)}},decoration:{type:String,validator:function(t){return["rounded-in","rounded-out","point-in","point-out",void 0].includes(t)}},glow:Boolean,glowSpeed:{type:Number,default:1.5},glowIterationCount:{type:String,default:"infinite"},inline:Boolean,backgroundColor:{type:String,default:"primary"}},computed:{ribbonClass:function(){var t="qribbon__".concat(this.type,"--").concat(this.position);return void 0!==this.size&&(t+="-".concat(this.size)),void 0!==this.leafPosition&&(t+=" leaf-".concat(this.leafPosition)),void 0!==this.decoration&&(t+=" decorate-".concat(this.decoration)),t},ribbonContainerClass:function(){return"qribbon__container ".concat(this.position," ").concat(this.inline?"inline":"")},styles:function(){var t={};return t["--qribbon-text-color"]=this.calculateColor(this.color,"white"),t["--qribbon-background-color"]=this.calculateColor(this.backgroundColor),t["--qribbon-leaf-color"]=this.bgLeafColor,t["--qribbon-glow-speed"]="".concat(this.glowSpeed,"s"),t["--qribbon-glow-iteration-count"]=this.glowIterationCount,t}},methods:{__renderDefaultRibbon:function(t){return t("div",{staticClass:this.ribbonClass,style:this.styles},[this.glow?t("div",{staticClass:"glow"}):null,Object(r["a"])(this,"default")])},__renderCornerRibbon:function(t){return t("div",{staticClass:this.ribbonClass,style:this.styles},[t("div",[this.glow?t("div",{staticClass:"glow"}):null,Object(r["a"])(this,"default")])])},__renderRibbon:function(t){switch(this.type){case"corner":return this.__renderCornerRibbon(t);default:return this.__renderDefaultRibbon(t)}}},render:function(t){return t("div",{staticClass:this.ribbonContainerClass},[this.__renderRibbon(t)])}};e.d(o,"b",(function(){return n["a"]}));o["a"]={version:n["a"],Component:l,install:function(t){t.component(l.name,l)}}},"40c7":function(t,o,e){"use strict";var n=e("4eaf"),r=e.n(n);r.a},4616:function(t,o,e){"use strict";var n=e("bd90"),r=e.n(n);r.a},"4d9b":function(t,o,e){"use strict";var n=e("cbe7"),r=e.n(n);r.a},"4eaf":function(t,o,e){},"5d56":function(t,o,e){"use strict";var n=e("9952"),r=e.n(n);r.a},"5e63":function(t,o,e){},6876:function(t,o,e){"use strict";var n=e("da6e"),r=e.n(n);r.a},"696e":function(t,o,e){},"6a4d":function(t,o,e){},"6d9f":function(t,o,e){"use strict";var n=e("696e"),r=e.n(n);r.a},"765a":function(t,o,e){"use strict";var n=e("5e63"),r=e.n(n);r.a},"7b94":function(t,o){},"8de3":function(t,o,e){},9414:function(t,o,e){"use strict";var n=e("a7c1"),r=e.n(n);r.a},9952:function(t,o,e){},a7c1:function(t,o,e){},ab0b:function(t){t.exports=JSON.parse('{"a":"1.0.0-beta.1"}')},baa8:function(t,o,e){},bd90:function(t,o,e){},c0c8:function(t,o,e){"use strict";var n=e("6a4d"),r=e.n(n);r.a},c9d2:function(t,o){},cbe7:function(t,o,e){},cd50:function(t,o,e){var n={"./bmp":"0dcc","./bmp.js":"0dcc","./gif":"c416","./gif.js":"c416","./jpg":"135b","./jpg.js":"135b","./png":"e9ef","./png.js":"e9ef","./psd":"520c","./psd.js":"520c","./svg":"b0bf","./svg.js":"b0bf","./tiff":"f270","./tiff.js":"f270","./webp":"cf1e","./webp.js":"cf1e"};function r(t){var o=i(t);return e(o)}function i(t){if(!e.o(n,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="cd50"},d062:function(t,o,e){"use strict";var n=e("f0d4"),r=e.n(n);r.a},da6e:function(t,o,e){},f0d4:function(t,o,e){},f960:function(t,o,e){"use strict";var n=e("baa8"),r=e.n(n);r.a}},[[0,"runtime","vendor"]]]);