(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",[t._v("\n        QRibbon Demo\n      ")]),a("div",[t._v("Quasar v"+t._s(t.$q.version))])],1)],1),a("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{attrs:{header:""}},[t._v("QRibbon")]),a("q-item",{attrs:{clickable:"",to:"/"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"home"}})],1),a("q-item-section",[a("q-item-label",[t._v("QRibbon API")])],1)],1),a("q-item",{attrs:{clickable:"",to:"/examples"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"?"}})],1),a("q-item-section",[a("q-item-label",[t._v("Examples")])],1)],1),a("q-item",{attrs:{clickable:"",to:"/builder"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"build"}})],1),a("q-item-section",[a("q-item-label",[t._v("Ribbon Builder")])],1)],1),a("q-item-label",{attrs:{header:""}},[t._v("Essential Quasar Links")]),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://quasar.dev"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"school"}})],1),a("q-item-section",[a("q-item-label",[t._v("Docs")]),a("q-item-label",{attrs:{caption:""}},[t._v("quasar.dev")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://github.com/quasarframework/"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"code"}})],1),a("q-item-section",[a("q-item-label",[t._v("Github")]),a("q-item-label",{attrs:{caption:""}},[t._v("github.com/quasarframework")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://chat.quasar.dev"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"chat"}})],1),a("q-item-section",[a("q-item-label",[t._v("Discord Chat Channel")]),a("q-item-label",{attrs:{caption:""}},[t._v("chat.quasar.dev")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://forum.quasar.dev"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"record_voice_over"}})],1),a("q-item-section",[a("q-item-label",[t._v("Forum")]),a("q-item-label",{attrs:{caption:""}},[t._v("forum.quasar.dev")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://twitter.com/quasarframework"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"rss_feed"}})],1),a("q-item-section",[a("q-item-label",[t._v("Twitter")]),a("q-item-label",{attrs:{caption:""}},[t._v("@quasarframework")])],1)],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],o=a("0967"),n=a("2b0e"),s=function(t,e){var a=window.open;if(!0===o["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)a=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==n["a"].prototype.$q.electron)return n["a"].prototype.$q.electron.shell.openExternal(t);var r=a(t,"_blank");if(r)return r.focus(),r;e&&e()},l={name:"MyLayout",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}},methods:{openURL:s}},c=l,q=a("2877"),m=Object(q["a"])(c,r,i,!1,null,null,null);e["default"]=m.exports}}]);