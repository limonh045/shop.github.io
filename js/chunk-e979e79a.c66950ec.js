(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e979e79a"],{4972:function(e,t,s){"use strict";s("747e")},"747e":function(e,t,s){},a55b:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login d-flex"},[s("div",{staticClass:"card m-auto p-5"},[s("h3",{staticClass:"text-center py-2"},[e._v("Login")]),e.errMsg?s("b-alert",{attrs:{show:"",dismissible:""}},[e._v(" "+e._s(e.errMsg)+" ")]):e._e(),s("atext",{ref:"emailname",attrs:{label:"Enter Email",placeholder:"Enter Email",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),s("atext",{ref:"pass",attrs:{label:"Enter Password",placeholder:"Enter Password",type:"password","min-length":"6"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("button",{staticClass:"btn btn-primary d-block m-auto",on:{click:e.loginHandel}},[e._v(" Login ")]),s("br"),s("button",{staticClass:"btn btn-info d-block m-auto",on:{click:e.loginWithGoogle}},[e._v(" Login With Google ")])],1)])},r=[],o=(s("ac1f"),s("5319"),s("a691")),n={data:function(){return{email:"",password:"",errMsg:""}},methods:{loginHandel:function(){var e=this;this.$refs.emailname.errorControl(),this.$refs.pass.errorControl(),this.$refs.emailname.isError&&this.$refs.pass.isError?o["a"].auth().signInWithEmailAndPassword(this.email,this.password).then((function(t){console.log(t),e.$router.replace("/dashboard/item")})).catch((function(t){return e.errMsg=t.message})):console.log("error")},loginWithGoogle:function(){var e=this;o["a"].auth().signInWithPopup(o["c"]).then((function(t){console.log(t),e.$router.replace("/dashboard/item")})).catch((function(t){return e.errMsg=t.message}))}}},i=n,l=(s("4972"),s("2877")),c=Object(l["a"])(i,a,r,!1,null,"ee4a2e54",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-e979e79a.c66950ec.js.map