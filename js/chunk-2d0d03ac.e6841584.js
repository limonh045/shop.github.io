(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d03ac"],{"66a7":function(e,n,t){"use strict";t.r(n);var u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"p-5 w-50"},[t("label",{attrs:{for:""}},[e._v("Select menu")]),t("b-form-select",{staticClass:"mb-3",model:{value:e.menuid,callback:function(n){e.menuid=n},expression:"menuid"}},e._l(e.menus,(function(n){return t("b-form-select-option",{key:n.id,attrs:{value:n.id}},[e._v(e._s(n.name))])})),1),t("label",{attrs:{for:""}},[e._v(" Submenu Name")]),t("b-form-input",{attrs:{placeholder:"Enter your name"},model:{value:e.submenu,callback:function(n){e.submenu=n},expression:"submenu"}}),t("button",{staticClass:"btn btn-info mx-auto mt-3",on:{click:e.addSubmenu}},[e._v(" Submit ")]),t("hr"),t("b-list-group",{staticClass:"mt-5"},e._l(e.selectMenu,(function(n){return t("b-list-group-item",{key:n.id,attrs:{variant:"success"}},[e._v(e._s(n.name)+" "),t("button",{staticClass:"btn btn-dark text-white float-right",on:{click:function(t){return e.deleteSubmenu(n.id)}}},[e._v(" Delete ")])])})),1)],1)},r=[],a=(t("4de4"),t("96cf"),t("1da1")),s=t("5530"),i=t("2f62"),c=t("a691"),o={data:function(){return{menuid:"",submenu:""}},computed:Object(s["a"])(Object(s["a"])({},Object(i["b"])(["menus","submenus"])),{},{selectMenu:function(){var e=this;return this.submenus.filter((function(n){return n.menuid==e.menuid}))}}),methods:{addSubmenu:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.menuid&&e.submenu){n.next=3;break}return alert("Please Fill all Field"),n.abrupt("return");case 3:return n.next=5,c["a"].firestore().collection("submenu").add({name:e.submenu,menuid:e.menuid}).then((function(){e.menuid="",e.submenu=""})).catch((function(e){return console.log(e)}));case 5:case"end":return n.stop()}}),n)})))()},deleteSubmenu:function(e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].firestore().collection("submenu").doc(e).delete().then((function(){n.menuid="",n.submenu=""})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()}}},l=o,m=t("2877"),b=Object(m["a"])(l,u,r,!1,null,null,null);n["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0d03ac.e6841584.js.map