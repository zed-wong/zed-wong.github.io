(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1556:function(e,t,n){var content=n(1664);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("76184843",content,!0,{sourceMap:!1})},1663:function(e,t,n){"use strict";n(1556)},1664:function(e,t,n){var c=n(44)(!1);c.push([e.i,"input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}",""]),e.exports=c},1906:function(e,t,n){"use strict";n.r(t);var c=n(822),l=n(1291),r=n(1308),o=n(1307),d=n(1544),f=n(1863),m=n(1456),_=(n(58),n(1242)),x=n(1153),v=n(1292),y=n.n(v),h=JSON.parse(localStorage.getItem("user")),C={data:function(){return{select:{type:"asset",asset_id:"c94ac88f-4671-3976-b60a-09064f1811e8",chain_id:"43d61dcd-e413-450d-80b8-101d5e903357",symbol:"XIN",name:"Mixin",icon_url:"https://mixin-images.zeromesh.net/UasWtBZO0TZyLTLCFQjvE_UYekjC7eHCuT_9_52ZpzmCC-X-NPioVegng7Hfx0XmIUavZgz5UL-HIgPCBECc-Ws=s128",balance:"0",deposit_entries:null,destination:"",tag:"",price_btc:"0.00773833",price_usd:"155.79039766",change_btc:"-0.04740338482065303",change_usd:"0.05065832299481757",asset_key:"0xa974c709cfb4566686553a20790685a47aceaa33",mixin_id:"a99c2e0e2b1da4d648755ef19bd95139acbbe6564cfb06dec7cd34931ca72cdc",reserve:"0",confirmations:16,capitalization:97337004.38645542,liquidity:"624794.633325414"},allAssets:x.assets,asset:"",amount:"",specific:!1,placeHolder:"Enter Amount",URL:""}},methods:{payment:function(){var e="mixin://pay?recipient="+h.client_id+"&asset="+this.select.asset_id+"&amount="+this.amount+"&trace="+Object(_.a)();this.URL=e,console.log(e)},transfer:function(){console.log("mixin://transfer/"+h.client_id),this.URL="mixin://transfer/"+h.client_id}},components:{VueQrcode:y.a},layout:"links"},k=(n(1663),n(78)),component=Object(k.a)(C,(function(){var e=this,t=e._self._c;return t(o.a,{attrs:{justify:"center",align:"center"}},[t(r.a,{attrs:{cols:"12"}},[t("span",{staticClass:"text-center text-h4 d-flex justify-center pa-5"},[e._v("\n      Deposit to Metamask\n    ")]),e._v(" "),t("span",{staticClass:"text-center font-weight-light text-subtitle-2 d-flex justify-center pa-5 pb-2 pt-2"},[t("span",[e._v("\n        Connect Wallet before deposit!\n      ")])]),e._v(" "),t("span",{staticClass:"text-center font-weight-light text-subtitle-2 d-flex justify-center pa-5 pt-0"},[e._v("\n      Transfer crypto to your Metamask (MVM Mainnet)\n    ")])]),e._v(" "),t(r.a,{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[t(f.a,{attrs:{label:"Specific asset"},model:{value:e.specific,callback:function(t){e.specific=t},expression:"specific"}})],1),e._v(" "),e.specific?t(r.a,{attrs:{cols:"6"}},[t(d.a,{attrs:{filled:"",items:e.allAssets,hint:"".concat(e.select.name),label:e.select.name,"item-text":"symbol","return-object":""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}}),e._v(" "),t(m.a,{attrs:{filled:"",clearable:"",type:"number",placeholder:e.placeHolder},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}}),e._v(" "),t("div",{staticClass:"d-flex justify-center text-center pa-5"},[t(c.a,{attrs:{rounded:"",large:""},on:{click:e.payment}},[e._v(" Payment ")])],1)],1):e._e(),e._v(" "),e.specific?e._e():t(r.a,{attrs:{cols:"12"}},[t("div",{staticClass:"d-flex justify-center text-center pa-5 pt-2"},[t(c.a,{attrs:{rounded:"",large:""},on:{click:e.transfer}},[e._v(" Transfer Any Asset ")])],1)]),e._v(" "),t(r.a,{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[0!=e.URL.length?t(l.a,{staticClass:"d-flex justify-center",staticStyle:{width:"600px"},attrs:{elevation:"0"}},[t("vue-qrcode",{attrs:{value:e.URL,options:{width:400}}})],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);