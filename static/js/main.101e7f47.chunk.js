(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{39:function(e,t,a){e.exports=a(70)},44:function(e,t,a){},66:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c={};a.r(c),a.d(c,"productState",(function(){return y})),a.d(c,"cartState",(function(){return j}));var n=a(0),r=a.n(n),l=a(16),i=a.n(l),o=a(8),u=a(10),s=(a(44),a(37)),m=a(2),d=a(9),p=a(21),E=a.n(p),f="products/SET_COUNT",h={products:[],count:0},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"products/GET_PRODUCTS":return Object(m.a)(Object(m.a)({},e),{},{products:t.payload});case f:return Object(m.a)(Object(m.a)({},e),{},{count:t.payload});default:return e}};function b(){return function(e){E.a.get("https://api.jsonbin.io/b/5ee152d62f5fd957fda7bd12").then((function(t){console.log(t.data),e((function(e){E.a.get("https://api.jsonbin.io/b/5ee152d62f5fd957fda7bd12").then((function(t){e({type:f,payload:t.data.products.length})}))})),e({type:"products/GET_PRODUCTS",payload:t.data.products})}))}}var N=a(38),v="products/ADD_CART",O="products/DEL_CART",g="products/DEL_ALL",k={cart:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:var a=e.cart.filter((function(e){return e.id===t.payload.id})).length>0;if(a){var c=e.cart.find((function(e){return e.id===t.payload.id}));return c.quantity=c.quantity+1,Object(m.a)(Object(m.a)({},e),{},{cart:e.cart.map((function(e){return c.id===e.id?c:e}))})}return Object(m.a)(Object(m.a)({},e),{},{cart:[].concat(Object(N.a)(e.cart),[Object(m.a)(Object(m.a)({},t.payload),{},{quantity:1})])});case O:return 1===e.cart.find((function(e){return e.id===t.payload})).quantity?Object(m.a)(Object(m.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload}))}):Object(m.a)(Object(m.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload?(e.quantity=e.quantity-1,e):e}))});case g:return Object(m.a)(Object(m.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload}))});default:return e}};function T(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.cartState.cart}));return Object(n.useEffect)((function(){}),[e]),{add:function(t){return e(function(e){return{type:v,payload:e}}(t))},cart:t,del:function(t){return e({type:O,payload:t})},delAllItems:function(t){return e(function(e){return{type:g,payload:e}}(t))}}}a(66);var S=a(13),C=function(e){var t=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.productState.products})),a=Object(d.c)((function(e){return e.productState.count}));return Object(n.useEffect)((function(){e(b())}),[e]),{products:t,count:a}}(),a=t.products,c=t.count,l=T(),i=l.cart,u=l.add,m=l.del,p=l.delAllItems,E=Object(n.useState)(!1),f=Object(s.a)(E,2),h=f[0],y=f[1],N=i.reduce((function(e,t){return e+t.price*t.quantity}),0);return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"orderSelect"},r.a.createElement("p",null,c," Product(s) found."),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"orderBy"},"Order by "),r.a.createElement("select",{id:"orderBy"},r.a.createElement("option",{value:"select"},"Select"),r.a.createElement("option",{value:"LowestToHighest"},"Lowest To highest"),r.a.createElement("option",{value:"HighestToLowest"},"Highest To lowest")))),r.a.createElement("div",{className:"grid"},a.map((function(e){return r.a.createElement("div",{className:"centerGridItems",onClick:function(t){return u(e)},key:"product"+e.id},r.a.createElement("p",{className:e.isFreeShipping?"free":"costs"},"Free Shipping"),r.a.createElement("img",{className:"productImgs",key:"product"+e.id,src:e.imgs.normal,alt:"mens shirts"}),r.a.createElement("p",null,e.title),r.a.createElement("div",{className:"smallBorder"}),r.a.createElement("p",{className:"pricing"},"$",e.price.toFixed(2)),r.a.createElement("p",{className:"installments"},"or ",e.installments," x",e.currencyFormat,(e.price/e.installments).toFixed(2)),r.a.createElement("button",{className:"addToCart"},"Add to Cart"))}))),r.a.createElement("div",{className:h?"cart":"unseen"},r.a.createElement("button",{className:"cartButton",onClick:function(e){return y(!h)}},r.a.createElement(S.a,null)),r.a.createElement("div",{className:"cartHeader"},r.a.createElement("p",null," ",r.a.createElement(S.a,null)),r.a.createElement("p",null,"Cart")),r.a.createElement("div",{className:"cartAllItems"},i.map((function(e){return r.a.createElement("div",{className:"cartItems",key:"item"+e.id},r.a.createElement("div",null,r.a.createElement("img",{className:"thumbs",key:"item"+e.id,src:e.imgs.thumb,alt:"mens shirts"})),r.a.createElement("div",{className:"itemInfo"},r.a.createElement("p",{className:"itemTitle"},e.title),r.a.createElement("p",{className:"itemStyle"},e.style),r.a.createElement("p",{className:"quantityCount"},"Quantity: ",e.quantity)),r.a.createElement("div",{className:"itemTotals"},r.a.createElement("button",{type:"button",className:"delButton",onClick:function(t){return p(e.id)}},"x"),r.a.createElement("p",{className:"itemPrice"},"$",e.price.toFixed(2)),r.a.createElement("div",{className:"quantitiesButtons"},r.a.createElement("button",{onClick:function(t){return m(e.id)},className:"lessQuantity",type:"button"},"-"),r.a.createElement("button",{onClick:function(t){return u(e)},className:"moreQuantity",type:"button"},"+"))))}))),r.a.createElement("div",{className:"absoluteFooter"},r.a.createElement("div",{className:"cartFooter"},r.a.createElement("p",null,"SUBTOTAL"),r.a.createElement("div",null,r.a.createElement("p",{className:"grandSubTotal"},"$",N.toFixed(2)))),r.a.createElement("div",{className:""},r.a.createElement(o.b,{className:"linkToCheckout",to:{pathname:"/checkout",data:i}},r.a.createElement("div",{className:"checkoutButton"},r.a.createElement("button",{className:"checkoutButtonButton"},"Checkout")))))))},F=function(e){var t=T().cart,a=t.reduce((function(e,t){return e+t.price*t.quantity}),0);return r.a.createElement("div",{className:"checkoutWrapper"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"checkOutHeader"},r.a.createElement("h1",null,"Order Summary")),t.map((function(e){return r.a.createElement("div",{className:"checkOutItems",key:"item"+e.id},r.a.createElement("div",{className:""},r.a.createElement("p",{className:"checkOutItemTitle"},e.title),r.a.createElement("p",{className:"checkOutItemStyle"},e.style),r.a.createElement("p",{className:"checkOutItemQuantity"},"Quantity: ",e.quantity)),r.a.createElement("div",{className:"checkOutPrice"},r.a.createElement("p",{className:""},"$",e.price.toFixed(2))))}))),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"checkOutFooter"},r.a.createElement("p",null,"SUBTOTAL"),r.a.createElement("div",null,r.a.createElement("p",{className:"checkOutFooterPrice"},"$",a.toFixed(2))))),r.a.createElement("div",{className:"shopOrConfirm"},r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{className:"contShopping"},"Continue Shopping")),r.a.createElement(o.b,{to:{pathname:"/receipt",data:t}},r.a.createElement("button",{className:"confirmOrder"},"Confirm Order"))))},w=function(e){var t=T().cart,a=t.reduce((function(e,t){return e+t.price*t.quantity}),0);return r.a.createElement("div",{className:"receiptWrapper"},r.a.createElement("div",{className:"receiptThankYou"},r.a.createElement("h1",null,"Thank you for your order!"),r.a.createElement("h2",null,"Order confirmed"),r.a.createElement("h3",null,"Receipt")),t.map((function(e){return r.a.createElement("div",{className:"receiptItem",key:"item"+e.id},r.a.createElement("div",{className:"receiptItemDesc"},r.a.createElement("p",{className:"receiptTitle"},e.title),r.a.createElement("p",{className:"receiptStyle"},e.style),r.a.createElement("p",{className:"receiptQuantity"},"Quantity: ",e.quantity)),r.a.createElement("div",{className:"receiptItem2"},r.a.createElement("p",{className:"receiptItemPrice"},"$",e.price.toFixed(2))))})),r.a.createElement("div",{className:"receiptFooter"},r.a.createElement("div",{className:"receiptSubtotal"},r.a.createElement("p",null,"SUBTOTAL"),r.a.createElement("div",null,r.a.createElement("p",{className:"receiptFooterPrice"},"$",a.toFixed(2))))))},I=function(e){return r.a.createElement("div",null,r.a.createElement(u.b,{exact:!0,path:"/",render:function(){return r.a.createElement(u.a,{to:"/react-shopping-cart"})}}),r.a.createElement(u.b,{path:"/react-shopping-cart",component:C}),r.a.createElement(u.b,{path:"/checkout",component:F}),r.a.createElement(u.b,{path:"/receipt",component:w}))};a(68),a(69),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(11),B=a(36),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.d,x=Object(q.c)(c),A=_(Object(q.a)(B.a)),L=Object(q.e)(x,A);i.a.render(r.a.createElement(d.a,{store:L},r.a.createElement(o.a,null,r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.101e7f47.chunk.js.map