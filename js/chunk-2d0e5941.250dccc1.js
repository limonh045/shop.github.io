(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5941"],{"94a1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"w-50 p-5"},[n("label",{attrs:{for:""}},[e._v("Item name")]),n("b-form-input",{staticClass:"mb-2",attrs:{placeholder:"Enter your name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("label",{attrs:{for:""}},[e._v("Item menu")]),n("b-form-select",{staticClass:"mb-3",model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},e._l(e.menus,(function(t){return n("b-form-select-option",{key:t.id,attrs:{value:t}},[e._v(e._s(t.name))])})),1),n("label",{attrs:{for:""}},[e._v("Item submenu")]),n("b-form-select",{staticClass:"mb-3",model:{value:e.subname,callback:function(t){e.subname=t},expression:"subname"}},e._l(e.selectSub,(function(t){return n("b-form-select-option",{key:t.id,attrs:{value:t.name}},[e._v(e._s(t.name))])})),1),n("label",[e._v("item photo")]),n("input",{staticClass:"d-block mb-2",attrs:{type:"file"},on:{change:e.addImgFile}}),""!==e.imageUrl?n("img",{staticClass:"w-25",attrs:{src:e.imageUrl}}):e._e(),n("label",{staticClass:"d-block mt-3",attrs:{for:""}},[e._v("Item price")]),n("b-form-input",{attrs:{placeholder:"Enter your name"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}}),n("button",{staticClass:"btn btn-info d-block mx-auto mt-3",on:{click:e.addItem}},[e._v(" Submit ")])],1)])},r=[],s=(n("4de4"),n("b0c0"),n("96cf"),n("1da1")),i=n("5530"),o=n("2f62"),l=n("a691"),c={data:function(){return{name:"",menu:"",subname:"",images:"",price:"",imageUrl:"",image:""}},computed:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["menus","submenus"])),{},{selectSub:function(){var e=this;return this.submenus.filter((function(t){return t.menuid==e.menu.id}))}}),methods:{addImgFile:function(e){var t=e.target.files||e.dataTransfer.files;t.length&&this.createImage(t[0])},createImage:function(e){var t=this,n=new FileReader,a=this;n.onload=function(e){a.images=e.target.result,t.imageUrl=a.images},n.readAsDataURL(e),this.image=e},addItem:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("start"),t.next=3,l["a"].firestore().collection("items").add({name:e.name,menu:e.menu.name,sub:e.subname,price:e.price}).then((function(e){return console.log(e.id),n=e.id,n})).then((function(t){return console.log("storeage"),l["a"].storage().ref(t).put(e.image)})).then((function(e){console.log("filedata"),e.ref.getDownloadURL().then((function(e){console.log("url here"),console.log(e),l["a"].firestore().collection("items").doc(n).update({imgUrl:e})}))})).then((function(){e.name="",e.menu="",e.subname="",e.images="",e.imageUrl="",e.price=""}));case 3:case"end":return t.stop()}}),t)})))()}}},u=c,m=n("2877"),b=Object(m["a"])(u,a,r,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0e5941.250dccc1.js.map