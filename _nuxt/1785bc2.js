(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{857:function(e,t,n){var content=n(893);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(31).default)("7557931a",content,!0,{sourceMap:!1})},892:function(e,t,n){"use strict";n(857)},893:function(e,t,n){var r=n(30)(!1);r.push([e.i,".v-btn{text-transform:none!important}",""]),e.exports=r},929:function(e,t,n){"use strict";n.r(t);var r=n(34),c=(n(113),n(8),n(47),n(174)),o=(new c.a.providers.JsonRpcProvider("https://geth.mvm.dev",73927),[{chainId:"0x".concat(Number(73927).toString(16)),blockExplorerUrls:["https://scan.mvm.dev/"],rpcUrls:["https://geth.mvm.dev"],chainName:"Mixin Virtual Machine",nativeCurrency:{name:"Mixin",symbol:"XIN",decimals:18}}]),l={layout:"links",data:function(){return{address:"",disabled:!0,connectLoading:!1,registerLoading:!1,connectVisble:!0,registerVisble:!1,nextVisble:!1,userAddress:"",registerResult:""}},methods:{connectWallet:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.connectLoading=!0,t.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:return n=t.sent,e.address=n[0],t.next=7,window.ethereum.request({method:"eth_chainId"});case 7:if("0x120c7"==t.sent){t.next=19;break}return t.prev=9,t.next=12,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x120c7"}]});case 12:t.next=19;break;case 14:if(t.prev=14,t.t0=t.catch(9),4902!==t.t0.code){t.next=19;break}return t.next=19,window.ethereum.request({method:"wallet_addEthereumChain",params:o});case 19:e.connectVisble=!1,e.registerVisble=!0;case 21:case"end":return t.stop()}}),t,null,[[9,14]])})))()},register:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.registerLoading=!0,console.log(e),r=c.a.utils.getAddress(e),n.next=5,t.$axios.post("https://bridge.mvm.dev/users",{public_key:r});case 5:o=n.sent,localStorage.setItem("user",JSON.stringify(o.data.user.key)),console.log(o.data),t.registerResult=o.data.user.key,t.disabled=!1,t.registerVisble=!1,t.registerLoading=!1,t.nextVisble=!0;case 13:case"end":return n.stop()}}),n)})))()},nextStep:function(){window.location.href="/deposit"}}},d=(n(892),n(82)),v=n(102),m=n.n(v),x=n(505),f=n(630),h=n(841),_=n(842),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("v-card",{attrs:{elevation:"0"}},[n("span",{staticClass:"text-center text-h4 d-flex justify-center pa-5"},[e._v("\n        Register\n      ")]),e._v(" "),n("span",{staticClass:"\n          text-center\n          font-weight-light\n          text-subtitle-2\n          d-flex\n          justify-center\n          pa-5\n          pt-2\n        "},[e._v("\n        Bind your Metamask address with Mixin mainnet user "),n("br"),e._v("\n        Open on your computer with metamask installed\n      ")]),e._v(" "),e.address?n("span",{staticClass:"text-center d-flex justify-center text-subtile-1 pa-5"},[e._v("\n        Your Metamask Address: "+e._s(e.address)+"\n      ")]):e._e(),e._v(" "),e.connectVisble?n("div",{staticClass:"d-flex justify-center text-center pa-5"},[n("v-btn",{attrs:{rounded:"",large:"",disabled:e.connectLoading},on:{click:e.connectWallet}},[e._v(" Connect Wallet ")])],1):e._e(),e._v(" "),e.registerVisble?n("div",{staticClass:"d-flex justify-center text-center pa-5"},[n("v-btn",{attrs:{rounded:"",large:"",loading:e.registerLoading},on:{click:function(t){return e.register(e.address)}}},[e._v("\n          Register\n        ")])],1):e._e(),e._v(" "),e.registerResult?n("span",{staticClass:"text-center d-flex justify-center text-subtile-1 pa-5"},[e._v("\n        Binded Config: "),n("br"),e._v(e._s(e.registerResult)+"\n      ")]):e._e(),e._v(" "),e.nextVisble?n("div",{staticClass:"d-flex justify-center text-center pa-5"},[n("v-btn",{attrs:{rounded:"",large:"",disabled:e.disabled},on:{click:e.nextStep}},[e._v("\n          Deposit to Metamask\n        ")])],1):e._e()])],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:x.a,VCard:f.a,VCol:h.a,VRow:_.a})}}]);