(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{585:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(592),o=new r.a({client_id:"01fc34ef-a627-3496-8977-80c8ecbc32de",session_id:"1819b4e8-2daf-463c-a351-16e74d479d86",private_key:"Sb6lyBjsd9e89NuAEGcCmE5oWdy2YmFmHneN6MtKu_LkvTx9tUzIjzUkFL_Ttdj1YNoZ44hnpxeWCN99jFSxHA",pin:"912459",pin_token:"oE-OsyZZP2ZYMdIPm-Vgg84nEHrMOrk-D3koP6UVE3M",client_secret:""});function c(t,e,n){return new r.a({pin:"",client_id:t,session_id:e,pin_token:"",private_key:n,client_secret:""})}e.c=o},590:function(t,e){},599:function(t,e){},600:function(t,e){},602:function(t,e){},603:function(t,e){},604:function(t,e){},605:function(t,e){},606:function(t,e){},607:function(t,e){},608:function(t,e){},609:function(t,e){},610:function(t,e){},611:function(t,e){},612:function(t,e){},822:function(t,e,n){var content=n(973);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("6976022e",content,!0,{sourceMap:!1})},972:function(t,e,n){"use strict";n(822)},973:function(t,e,n){var r=n(28)(!1);r.push([t.i,"input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.v-btn{text-transform:none!important}",""]),t.exports=r},995:function(t,e,n){"use strict";n.r(e);var r,o,c,l,d=n(554),f=n(567),m=n(829),h=n(566),x=n(742),w=n(36),v=(n(118),n(394),n(37),n(8),n(107),n(585)),_="43d61dcd-e413-450d-80b8-101d5e903357",k={layout:"ethbridge",data:function(){return{ethAmount:"",xinAmount:""}},computed:{xin:{get:function(){return(c-l/(o+Number(this.ethAmount))).toFixed(8)},set:function(t){this.xinAmount=t}}},created:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://api.4swap.org/api/pairs/".concat(_,"/").concat("c94ac88f-4671-3976-b60a-09064f1811e8"));case 2:n=e.sent,r=n.data.data,l=Number(r.base_amount)*Number(r.quote_amount),o=Number(r.base_amount),c=Number(r.quote_amount),o/c;case 8:case"end":return e.stop()}}),e)})))()},methods:{buy:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.switchToETHMainnet();case 2:return e.t0=t,e.next=5,t.getDepositAddress(_);case 5:return e.t1=e.sent,e.t2="0x"+parseInt(t.ethAmount,16).toString(),e.next=9,e.t0.depositETHToMVM.call(e.t0,e.t1,e.t2);case 9:case"end":return e.stop()}}),e)})))()},getDepositAddress:function(t){return Object(w.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=localStorage.getItem("user"))&&(r=JSON.parse(r),n=Object(v.b)(r.client_id,r.session_id,r.private_key)),e.next=4,n.readAsset(t);case 4:return o=e.sent,e.abrupt("return",o.deposit_entries[0].destination);case 6:case"end":return e.stop()}}),e)})))()},switchToETHMainnet:function(){return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.ethereum.request({method:"eth_chainId"});case 2:if("0x1"==t.sent){t.next=12;break}return t.prev=4,t.next=7,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x1"}]});case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(4),console.log("switch error:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[4,9]])})))()},depositETHToMVM:function(t,e){return Object(w.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={nonce:"0x00",gasPrice:"0x09184e72a000",gas:"0x2710",to:t,from:window.ethereum.selectedAddress,value:e,data:"0x1",chainId:"0x1"},console.log(r),n.prev=2,n.next=5,window.ethereum.request({method:"eth_sendTransaction",params:[r]});case 5:o=n.sent,console.log("https://scan.mvm.dev/tx/".concat(o)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log("deposit error:",n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()}}},y=(n(972),n(63)),component=Object(y.a)(k,(function(){var t=this,e=t._self._c;return e(h.a,{staticClass:"d-flex justify-center mt-5"},[e(f.a,{staticClass:"text-center",attrs:{cols:"12"}},[e("span",{staticClass:"text-h5 font-weight-normal"},[t._v("\n      Buy XIN in MVM Mainnet through ETH Mainnet (Metamask)")])]),t._v(" "),e(f.a,{staticClass:"mt-5",attrs:{cols:"12"}},[e(m.a,{attrs:{"hide-details":"auto"}},[e("span",{staticClass:"font-weight-light"},[t._v(" ETH ")]),t._v(" "),e(x.a,{staticClass:"ml-3 d-flex align-center",attrs:{"single-line":"",filled:"",type:"number"},model:{value:t.ethAmount,callback:function(e){t.ethAmount=e},expression:"ethAmount"}})],1)],1),t._v(" "),e(f.a,{attrs:{cols:"12"}},[e(m.a,{attrs:{"hide-details":"auto"}},[e("span",{staticClass:"font-weight-light"},[t._v(" XIN ")]),t._v(" "),e(x.a,{staticClass:"ml-3 d-flex align-center",attrs:{"single-line":"",filled:"",type:"number"},model:{value:t.xin,callback:function(e){t.xin=e},expression:"xin"}})],1)],1),t._v(" "),e(f.a,{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[e(d.a,{attrs:{rounded:"",depressed:"",large:"",color:"primary","min-width":"100px"},on:{click:t.buy}},[e("span",{staticClass:"font-weight-bold"},[t._v(" Buy ")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);