(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{109:function(t,e,n){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(406),n(101)),c=n(123),d=n.n(c),l=n(507),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;d()(component,{VApp:l.a})},307:function(t,e,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("dc093880",content,!0,{sourceMap:!1})},320:function(t,e,n){var content=n(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("96b45102",content,!0,{sourceMap:!1})},337:function(t,e,n){t.exports=n.p+"img/github.0035c30.png"},338:function(t,e,n){t.exports=n.p+"img/bridge.be7ae1c.png"},346:function(t,e,n){"use strict";var r={data:function(){return{}}},o=n(101),c=n(123),d=n.n(c),l=n(507),h=n(516),m=n(508),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-main",[e("v-container",[e("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VApp:l.a,VContainer:h.a,VMain:m.a})},347:function(t,e,n){"use strict";var r=n(38),o=(n(122),n(337)),c=n.n(o),d=n(338),l=n.n(d),h=n(256),m={data:function(){return{bridge:l.a,githublogo:c.a,links:[{name:"Register",to:"/register"},{name:"Deposit",to:"/deposit"},{name:"Withdraw",to:"/withdraw"},{name:"Add Token",to:"/addtoken"},{name:"Deposit By Address",to:"/anydeposit"},{name:"Withdraw To Address(WIP)",to:"/anywithdraw"}]}},computed:{connected:function(){return this.$store.state.connected},address:function(){return this.$store.state.address}},mounted:function(){this.connectWallet()},methods:{redirect:function(t){window.location.href=t},connectWallet:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return n=e.sent,t.register(n[0]),t.$store.commit("connect",n[0]),e.next=7,window.ethereum.request({method:"eth_chainId"});case 7:if("0x120c7"==e.sent){e.next=19;break}return e.prev=9,e.next=12,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x120c7"}]});case 12:e.next=19;break;case 14:if(e.prev=14,e.t0=e.catch(9),4902!==e.t0.code){e.next=19;break}return e.next=19,window.ethereum.request({method:"wallet_addEthereumChain",params:chain});case 19:case"end":return e.stop()}}),e,null,[[9,14]])})))()},register:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=h.a.utils.getAddress(t),n.next=3,e.$axios.post("https://bridge.mvm.dev/users",{public_key:r});case 3:o=n.sent,localStorage.setItem("user",JSON.stringify(o.data.user.key));case 5:case"end":return n.stop()}}),n)})))()},toGithub:function(){window.open("https://github.com/zed-wong/mvm-bridge")}}},v=(n(434),n(101)),f=n(123),x=n.n(f),_=n(507),w=n(515),k=n(500),y=n(516),V=n(238),C=n(348),A=n(239),E=n(167),M=n(193),I=n(508),N=n(499),O=n(514),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("v-app-bar",{attrs:{elevation:"0"}},[n("v-img",{staticClass:"ml-3",attrs:{src:t.bridge,"max-width":"28px","max-height":"28px"},on:{click:function(e){return t.redirect("/")}}}),t._v(" "),n("span",{staticClass:"font-weight-bold ml-2",on:{click:function(e){return t.redirect("/")}}},[t._v("\n        MVM-Bridge\n      ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-img",{staticClass:"mr-3",attrs:{src:t.githublogo,"max-height":"22px","max-width":"22px"},on:{click:t.toGithub}}),t._v(" "),n("v-menu",{attrs:{"offset-y":"","open-on-hover":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{"aria-haspopup":"true","aria-expanded":"false",elevation:"0",depressed:""}},"v-btn",o,!1),r),[n("span",{staticClass:"font-weight-light"},[t._v("ToolBox")]),t._v(" "),n("v-icon",{staticStyle:{"font-size":"14px",height:"14px",width:"14px"}},[t._v("\n              mdi-chevron-down\n            ")])],1)]}}])},[t._v(" "),n("v-list",t._l(t.links,(function(link,i){return n("v-list-item",{key:i,on:{click:function(e){return t.redirect(link.to)}}},[n("v-list-item-title",[t._v("\n              "+t._s(link.name)+"\n            ")])],1)})),1)],1),t._v(" "),t.connected?t._e():n("v-btn",{staticClass:"ml-3",attrs:{depressed:"",rounded:"",outlined:"",elevation:"0",color:"primary"},on:{click:t.connectWallet}},[t._v("\n        Connect Wallet\n      ")]),t._v(" "),t.connected?n("v-btn",{staticClass:"ml-3",attrs:{depressed:"",rounded:"",outlined:"",elevation:"0",color:"primary",text:"","max-width":150}},[n("span",{staticClass:"text-truncate",staticStyle:{"max-width":"120px"}},[t._v(t._s(t.address))])]):t._e()],1),t._v(" "),n("v-container",[n("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;x()(component,{VApp:_.a,VAppBar:w.a,VBtn:k.a,VContainer:y.a,VIcon:V.a,VImg:C.a,VList:A.a,VListItem:E.a,VListItemTitle:M.b,VMain:I.a,VMenu:N.a,VSpacer:O.a})},362:function(t,e,n){n(363),t.exports=n(364)},406:function(t,e,n){"use strict";n(307)},407:function(t,e,n){var r=n(32)(!1);r.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=r},425:function(t,e){},432:function(t,e){},434:function(t,e,n){"use strict";n(320)},435:function(t,e,n){var r=n(32)(!1);r.push([t.i,".v-btn{text-transform:none!important}",""]),t.exports=r},476:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{connected:!1,address:""}},o={connect:function(t,e){t.connected=!0,t.address=e}}}},[[362,16,5,17]]]);