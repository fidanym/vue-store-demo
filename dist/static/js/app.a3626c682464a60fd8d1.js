webpackJsonp([1],{"/sIW":function(t,e){},"1jPC":function(t,e){},"4tf3":function(t,e){},"627F":function(t,e){},"7to0":function(t,e){},IDll:function(t,e){},JI6R:function(t,e){},JUke:function(t,e){t.exports=[{id:"1",name:"Julian",email:"julian@tpb.com",purchasedProducts:[{id:"2",name:"Plastic Chair",price:"100"},{id:"5",name:"Plastic Table",price:"135"}]},{id:"2",name:"Bubbles",email:"bubbles@cats.com",purchasedProducts:[{id:"4",name:"Wooden Table",price:"220"},{id:"1",name:"Wooden Chair",price:"150"}]},{id:"3",name:"Randy",email:"randy@bobandy.com",purchasedProducts:[{id:"3",name:"Metal Chair",price:"250"}]}]},KGtZ:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),r={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:{active:t.isBurgerActive},attrs:{id:"burger"},on:{click:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("default",[t._m(0)])],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"burger-button",attrs:{type:"button",title:"Menu"}},[e("span",{staticClass:"burger-bar burger-bar--1"}),this._v(" "),e("span",{staticClass:"burger-bar burger-bar--2"}),this._v(" "),e("span",{staticClass:"burger-bar burger-bar--3"})])}]};var i={name:"Sidebar",methods:{closeSidebarPanel:function(){this.$store.dispatch("toggleNav")},logout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.closeSidebarPanel(),t.$router.push("auth")})}},computed:{isPanelOpen:function(){return this.$store.getters.isNavOpen},username:function(){var t=sessionStorage.getItem("currentUser");return t?void 0!==(t=JSON.parse(t)).username?t.username:void 0:"error"}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[t.isPanelOpen?n("div",{staticClass:"sidebar-backdrop",on:{click:t.closeSidebarPanel}}):t._e(),t._v(" "),n("transition",{attrs:{name:"slide"}},[t.isPanelOpen?n("div",{staticClass:"sidebar-panel"},[n("h4",[n("font-awesome-icon",{attrs:{icon:"user"}}),t._v(" "+t._s(t.username))],1),t._v(" "),n("hr"),t._v(" "),n("ul",{staticClass:"sidebar-panel-nav"},[n("li",[n("router-link",{attrs:{to:"/"},nativeOn:{click:function(e){return t.closeSidebarPanel(e)}}},[n("span",{staticClass:"menu-icon"},[n("font-awesome-icon",{attrs:{icon:"home"}})],1),t._v(" Home")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/customers"},nativeOn:{click:function(e){return t.closeSidebarPanel(e)}}},[n("span",{staticClass:"menu-icon"},[n("font-awesome-icon",{attrs:{icon:"users"}})],1),t._v(" Customers")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/products"},nativeOn:{click:function(e){return t.closeSidebarPanel(e)}}},[n("span",{staticClass:"menu-icon"},[n("font-awesome-icon",{attrs:{icon:"box"}})],1),t._v(" Products")])],1),t._v(" "),n("li",{on:{click:t.logout}},[n("a",[n("span",{staticClass:"menu-icon"},[n("font-awesome-icon",{attrs:{icon:"power-off"}})],1),t._v(" Logout")])])])]):t._e()])],1)},staticRenderFns:[]};var a={name:"App",components:{burger:n("VU/8")({name:"Burger",methods:{toggle:function(){this.$store.dispatch("toggleNav")}},computed:{isBurgerActive:function(){return this.$store.getters.isNavOpen}}},r,!1,function(t){n("KGtZ")},"data-v-4bede0e4",null).exports,sidebar:n("VU/8")(i,o,!1,function(t){n("qENC")},"data-v-4844a718",null).exports},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},currentUser:function(){return sessionStorage.getItem("currentUser")}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this.isLoggedIn?e("nav",{staticClass:"main-nav"},[e("burger")],1):this._e(),this._v(" "),this.isLoggedIn?e("sidebar",{attrs:{user:this.currentUser}}):this._e(),this._v(" "),e("div",{staticClass:"container"},[e("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[e("router-view")],1)],1)],1)},staticRenderFns:[]};var u=n("VU/8")(a,c,!1,function(t){n("/sIW")},null,null).exports,d=n("HSQo"),l=n.n(d),m=n("//Fk"),p=n.n(m),v=n("Gu7T"),f=n.n(v),h=n("rtUZ"),g=n.n(h),_=n("JUke"),C=n.n(_),b=n("taMk"),w=n.n(b),S=function(t,e,n){return t.find(function(t){return t.username===e||t.email===n})},P=function(t,e,n){return t.find(function(t){return t.username===e&&t.password===n})},U=function(t){return Math.max.apply(Math,f()(t.map(function(t){return t.id})))},k=function(t,e){return function(t,e,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return new p.a(function(r,i){setTimeout(function(){var s=P(t,e,n);if(s){var o={id:s.id,username:s.username,email:s.email};r(o)}else i(0)},s)})}(g.a,t,e,500)},E=function(t,e,n){return function(t,e,n,s){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return new p.a(function(i,o){setTimeout(function(){S(t,e,s)&&o("User already exists");var r={id:U(t),email:s,username:e,password:n};t.push(r),i()},r)})}(g.a,t,e,n,500)},T=function(){return t=C.a,e=500,new p.a(function(n){setTimeout(function(){n(t)},e)});var t,e},L=function(){return t=w.a,e=750,new p.a(function(n){setTimeout(function(){n(t)},e)});var t,e},$=function(t){return function(t,e,n){return new p.a(function(s){setTimeout(function(){var n=t.findIndex(function(t){return t.id===e});n>=0&&t.splice(n,1),s(t)},n)})}(w.a,t,300)},y=function(t,e){return function(t,e,n,s){return new p.a(function(r){setTimeout(function(){t.map(function(t){if(t.id===e&&t.purchasedProducts.length){var s=t.purchasedProducts.findIndex(function(t){return t.id===n});s>=0&&t.purchasedProducts.splice(s,1)}}),r(t)},s)})}(C.a,t,e,300)},x={logIn:function(t,e){var n=this;return new p.a(function(s,r){t&&e||r("Required details are missing"),k(t,e).then(function(t){n.setToken(function(){for(var t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),e=[],n=0;n<15;n++){var s=(Math.random()*(t.length-1)).toFixed(0);e[n]=t[s]}return e.join("")}()),s(t)}).catch(function(){r("Username or password is incorrect")})})},logout:function(){this.destroyToken()},register:function(t,e,n){return new p.a(function(s,r){t&&e&&n||r("Required details are missing"),E(t,e,n).then(function(){s("Successfuly registered")}).catch(function(t){r(t)})})},setToken:function(t){sessionStorage.setItem("authToken",t)},destroyToken:function(){sessionStorage.removeItem("authToken")},getToken:function(){var t=sessionStorage.getItem("authToken");return t||null},loggedIn:function(){return!!this.getToken()}},I=function(t){t.auth=x,l()(t.prototype,{$auth:{get:function(){return t.auth}}})},R=n("/ocq"),O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[e("router-view")],1)],1)},staticRenderFns:[]};var N=n("VU/8")({name:"Auth"},O,!1,function(t){n("JI6R")},"data-v-cb354f1c",null).exports,q={name:"Login",data:function(){return{username:"",password:""}},methods:{login:function(){var t=this;this.$store.dispatch("login",{username:this.username,password:this.password}).then(function(){t.$router.push("/")}).catch(function(t){alert("login fail")})}}},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login"}},[n("h4",[t._v("Welcome to your store manager")]),t._v(" "),n("form",{staticClass:"m-t-30",on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-block m-t-15",on:{click:t.login}},[t._v("Sign in")]),t._v(" "),n("p",{staticClass:"m-t-15"},[t._v("\n      Don't have an account?\n      "),n("router-link",{attrs:{to:"/auth/register"}},[t._v("Sign up!")])],1)])])},staticRenderFns:[]};var F=n("VU/8")(q,V,!1,function(t){n("7to0")},"data-v-29842a47",null).exports,D={name:"Register",data:function(){return{username:"",password:"",email:""}},methods:{register:function(){var t=this;this.$auth.register(this.username,this.password,this.email).then(function(e){alert(e),t.$router.push("login")}).catch(function(t){alert(t)})}}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"register"}},[n("h4",[t._v("Register an administrator account")]),t._v(" "),n("form",{staticClass:"m-t-30",on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-block",on:{click:t.register}},[t._v("Register")])]),t._v(" "),n("p",{staticClass:"m-t-15"},[t._v("\n    Already have an account?\n    "),n("router-link",{attrs:{to:"/auth/login"}},[t._v("Sign in!")])],1)])},staticRenderFns:[]};var M=n("VU/8")(D,G,!1,function(t){n("sNq/")},"data-v-6750ad82",null).exports,A={name:"Customer",props:{customer:Object}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"customer row custom-list-item",attrs:{to:{name:"customerDetails",params:{id:t.customer.id}}}},[n("div",{staticClass:"col-3"},[n("h5",[t._v(t._s(t.customer.name))])]),t._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"customer-email"},[t._v(t._s(t.customer.email))])])])},staticRenderFns:[]};var J=n("VU/8")(A,j,!1,function(t){n("YnGL")},"data-v-7452538e",null).exports,W={name:"Loader",props:{isLoading:Boolean}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],staticClass:"loading-spinner"},[e("font-awesome-icon",{attrs:{icon:"spinner",spin:""}})],1)},staticRenderFns:[]};var Z=n("VU/8")(W,B,!1,function(t){n("xDzb")},"data-v-53db058e",null).exports,H={name:"Customers",components:{customer:J,loader:Z},computed:{customers:function(){return this.$store.getters.customers},isLoading:function(){return"loading"===this.customers}},created:function(){this.$store.dispatch("loadCustomers")}},z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"customers"}},[n("h1",[t._v("Customers")]),t._v(" "),t.isLoading||null===t.customers?t._e():n("div",{staticClass:"customer-list"},[t._m(0),t._v(" "),t._l(t.customers,function(t){return n("customer",{attrs:{customer:t}})})],2),t._v(" "),n("loader",{attrs:{"is-loading":t.isLoading}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row custom-list-header"},[e("div",{staticClass:"col-3"},[this._v("Name")]),this._v(" "),e("div",{staticClass:"col"},[this._v("E-mail")])])}]};var Y=n("VU/8")(H,z,!1,function(t){n("hu44")},"data-v-9f3efea8",null).exports,K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Dashboard")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"tiles"},[n("router-link",{staticClass:"tile",attrs:{to:"/customers"}},[n("div",[n("font-awesome-icon",{staticClass:"tile-icon",attrs:{icon:"users"}}),t._v(" "),n("h4",[t._v("Customers")])],1)]),t._v(" "),n("router-link",{staticClass:"tile",attrs:{to:"/products"}},[n("font-awesome-icon",{staticClass:"tile-icon",attrs:{icon:"box"}}),t._v(" "),n("h4",[t._v("Products")])],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"long-text description"},[this._v("\n    Welcome to your dashboard, here you can manage your customers and your product inventory"),e("br"),this._v("\n    Just click on the right tile to get started"),e("br"),e("br"),this._v("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus sed libero aliquam fringilla.\n    Nam rhoncus viverra elit et laoreet. Sed id orci mollis, viverra est id, varius mauris. Integer nec turpis eu\n    ante elementum volutpat. Duis vel neque nisl. Sed lectus odio, tristique nec pellentesque eget, pretium fringilla\n    lectus. Ut in nibh eget eros pretium mollis. Suspendisse sed iaculis quam. Cras ullamcorper turpis quis velit\n    porttitor malesuada. Sed sed molestie lorem.\n  ")])}]};var Q=n("VU/8")({name:"dash"},K,!1,function(t){n("4tf3")},"data-v-0a53b460",null).exports,X={name:"ProductListItem",props:{product:Object,customer_id:String},methods:{deleteProduct:function(){void 0!==this.customer_id?this.$store.dispatch("deleteCustomerProduct",{customer_id:this.customer_id,product_id:this.product.id}):this.$store.dispatch("deleteProduct",this.product.id)}}},tt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row product custom-list-item"},[n("div",{staticClass:"col-7 col-md-4"},[n("h5",[t._v(t._s(t.product.name))])]),t._v(" "),n("div",{staticClass:"col col-md-7"},[n("div",{staticClass:"product-price"},[t._v(t._s(t._f("currency")(t.product.price)))])]),t._v(" "),n("div",{staticClass:"col"},[n("font-awesome-icon",{staticClass:"tile-icon",attrs:{icon:"minus-square"},on:{click:t.deleteProduct}})],1)])},staticRenderFns:[]};var et={name:"ProductList",components:{product:n("VU/8")(X,tt,!1,function(t){n("627F")},"data-v-1536f9d4",null).exports},props:{products:Array,customer_id:String}},nt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-list"},[t._m(0),t._v(" "),t._l(t.products,function(e){return n("product",{attrs:{customer_id:t.customer_id,product:e}})})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row custom-list-header"},[e("div",{staticClass:"col-7 col-md-4"},[this._v("Name")]),this._v(" "),e("div",{staticClass:"col col-md-3"},[this._v("Price")])])}]};var st=n("VU/8")(et,nt,!1,function(t){n("IDll")},"data-v-24c98cb8",null).exports,rt={name:"ProductListItem",props:{product:Object,customer_id:String},methods:{deleteProduct:function(){void 0!==this.customer_id?this.$store.dispatch("deleteCustomerProduct",{customer_id:this.customer_id,product_id:this.product.id}):this.$store.dispatch("deleteProduct",this.product.id)}}},it={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tile product"},[n("div",[n("h5",[t._v(t._s(t.product.name))])]),t._v(" "),n("div",[n("div",{staticClass:"product-price"},[t._v(t._s(t._f("currency")(t.product.price)))])]),t._v(" "),n("div",{staticClass:"delete",on:{click:t.deleteProduct}},[n("font-awesome-icon",{attrs:{icon:"minus-square"}}),t._v(" Remove")],1)])},staticRenderFns:[]};var ot={name:"ProductList",components:{product:n("VU/8")(rt,it,!1,function(t){n("q10Z")},"data-v-af50a1a6",null).exports},props:{products:Array,customer_id:String}},at={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tiles product-grid"},t._l(t.products,function(e){return n("product",{attrs:{customer_id:t.customer_id,product:e}})}),1)},staticRenderFns:[]};var ct=n("VU/8")(ot,at,!1,function(t){n("vhax")},"data-v-5f1bf59f",null).exports,ut={name:"Products",data:function(){return{gridToggle:!1}},props:{products:Array,customer_id:String},components:{listView:st,gridView:ct},methods:{toggleGrid:function(){this.gridToggle=!this.gridToggle}}},dt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products"},[n("div",{staticClass:"header"},[n("h1",[t._t("default",[t._v("Products")])],2),t._v(" "),n("div",{staticClass:"toggle",on:{click:t.toggleGrid}},[n("div",{class:{active:!t.gridToggle}},[t._v("List")]),t._v(" "),n("div",{class:{active:t.gridToggle}},[t._v("Grid")])])]),t._v(" "),n("div",{staticClass:"product-list"},[t.gridToggle?t._e():n("list-view",{attrs:{customer_id:t.customer_id,products:t.products}}),t._v(" "),t.gridToggle?n("grid-view",{attrs:{customer_id:t.customer_id,products:t.products}}):t._e()],1)])},staticRenderFns:[]};var lt=n("VU/8")(ut,dt,!1,function(t){n("kVpn")},"data-v-43a05c74",null).exports,mt={name:"ProductsView",components:{products:lt,loader:Z},computed:{products:function(){return this.$store.getters.products},isLoading:function(){return"loading"===this.products}},created:function(){this.$store.dispatch("loadProducts")}},pt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"products"}},[this.isLoading||null===this.products?this._e():e("products",{attrs:{products:this.products}}),this._v(" "),e("loader",{attrs:{"is-loading":this.isLoading}})],1)},staticRenderFns:[]};var vt=n("VU/8")(mt,pt,!1,function(t){n("w/J+")},"data-v-0c678224",null).exports,ft={name:"CustomerDetails",components:{loader:Z,products:lt},props:{id:String},computed:{customer:function(){return this.$store.getters.customerById(this.id)},isLoaded:function(){return!!this.customer},hasProducts:function(){if(this.isLoaded)return void 0!==this.customer.purchasedProducts&&!!this.customer.purchasedProducts}},created:function(){this.$store.getters.customers||this.$store.dispatch("loadCustomers")}},ht={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"customer"},[t.isLoaded?n("div",{staticClass:"customer-details"},[t.hasProducts?n("products",{attrs:{products:t.customer.purchasedProducts,customer_id:t.customer.id}},[t._v(t._s(t.customer.name)+"'s products")]):t._e()],1):t._e(),t._v(" "),n("loader",{attrs:{"is-loading":!t.isLoaded}})],1)},staticRenderFns:[]};var gt=n("VU/8")(ft,ht,!1,function(t){n("1jPC")},"data-v-4f0eea63",null).exports;s.a.use(R.a);var _t,Ct=new R.a({mode:"history",routes:[{path:"/",name:"dash",component:Q,meta:{requiresAuth:!0}},{path:"/auth",name:"auth",component:N,redirect:"/auth/login",children:[{path:"login",name:"login",component:F,meta:{requiresGuest:!0}},{path:"register",name:"register",component:M,meta:{requiresGuest:!0}}]},{path:"/customers",name:"customers",component:Y,meta:{requiresAuth:!0}},{path:"/customer/:id",name:"customerDetails",component:gt,props:!0,meta:{requiresAuth:!0}},{path:"/products",name:"products",component:vt,meta:{requiresAuth:!0}}]}),bt=n("mvHQ"),wt=n.n(bt),St=n("bOdI"),Pt=n.n(St),Ut=n("NYxO");s.a.use(I),s.a.use(Ut.a);var kt=new Ut.a.Store({state:{isLoggedIn:s.a.auth.loggedIn(),isNavOpen:!1,currentUser:null,customers:null,products:null,isLoading:!1},mutations:(_t={},Pt()(_t,"LOGIN",function(t){t.pending=!0}),Pt()(_t,"LOGIN_SUCCESS",function(t){t.isLoggedIn=!0,t.pending=!1}),Pt()(_t,"LOGOUT",function(t){t.isLoggedIn=!1}),Pt()(_t,"toggleNav",function(t){t.isNavOpen=!t.isNavOpen}),Pt()(_t,"toggleLoading",function(t){t.isLoading=!t.isLoading}),Pt()(_t,"SET_USER",function(t,e){t.currentUser=e}),Pt()(_t,"REMOVE_USER",function(t){t.currentUser=null}),Pt()(_t,"SET_CUSTOMERS",function(t,e){t.customers=e}),Pt()(_t,"SET_PRODUCTS",function(t,e){t.products=e}),_t),actions:{login:function(t,e){var n=t.commit;return n("LOGIN"),new p.a(function(t,r){s.a.auth.logIn(e.username,e.password).then(function(e){n("LOGIN_SUCCESS"),sessionStorage.setItem("currentUser",wt()(e)),n("SET_USER",e),t()}).catch(function(){r()})})},logout:function(t){var e=t.commit;s.a.auth.destroyToken(),sessionStorage.removeItem("currentUser"),e("LOGOUT"),e("REMOVE_USER")},toggleNav:function(t){(0,t.commit)("toggleNav")},loadCustomers:function(t){var e=t.commit;e("SET_CUSTOMERS","loading"),T().then(function(t){e("SET_CUSTOMERS",t)})},loadProducts:function(t){var e=t.commit;e("SET_PRODUCTS","loading"),L().then(function(t){e("SET_PRODUCTS",t)})},deleteProduct:function(t,e){var n=t.commit;$(e).then(function(t){n("SET_PRODUCTS",t)})},deleteCustomerProduct:function(t,e){var n=t.commit,s=e.customer_id,r=e.product_id;y(s,r).then(function(t){n("SET_CUSTOMERS",t)})}},getters:{isLoggedIn:function(t){return t.isLoggedIn},isNavOpen:function(t){return t.isNavOpen},currentUser:function(t){return t.currentUser},customers:function(t){return t.customers},products:function(t){return t.products},isLoading:function(t){return t.isLoading},customerById:function(t){return function(e){if("loading"!==t.customers)return t.customers.find(function(t){return t.id===e})}}}}),Et=n("Y81h"),Tt=n.n(Et),Lt=n("OjAt"),$t=n.n(Lt),yt=(n("K3J8"),n("qb6w"),n("UVIz"),n("C/JF")),xt=n("fhbW"),It=n("1e6/");yt.c.add(xt.f,xt.d,xt.g,xt.b,xt.e,xt.a,xt.c),s.a.component("font-awesome-icon",It.a),s.a.use(Tt.a),s.a.use(I),s.a.use($t.a),s.a.config.productionTip=!1,Ct.beforeResolve(function(t,e,n){t.name&&Tt.a.start(),n()}),Ct.afterEach(function(t,e){Tt.a.done()}),Ct.beforeEach(function(t,e,n){var s=!!kt.getters.isLoggedIn;t.matched.some(function(t){return t.meta.requiresGuest})&&s?n({path:"/"}):t.matched.some(function(t){return t.meta.requiresAuth})&&!s?n({path:"/auth/login",query:{redirect:t.fullPath}}):n()}),new s.a({router:Ct,store:kt,render:function(t){return t(u)}}).$mount("#app")},UVIz:function(t,e){},YnGL:function(t,e){},hu44:function(t,e){},kVpn:function(t,e){},q10Z:function(t,e){},qENC:function(t,e){},qb6w:function(t,e){},rtUZ:function(t,e){t.exports=[{id:"1",email:"john@mail.com",username:"john",password:"johnny"},{id:"2",email:"mike@mail.com",username:"mike",password:"mikey"},{id:"3",email:"anna@mail.com",username:"anna",password:"annie"},{id:"4",email:"rick@mail.com",username:"rick",password:"ricky"}]},"sNq/":function(t,e){},taMk:function(t,e){t.exports=[{id:"1",name:"Wooden Chair",price:"150"},{id:"2",name:"Plastic Chair",price:"100"},{id:"3",name:"Metal Chair",price:"250"},{id:"4",name:"Wooden Table",price:"220"},{id:"5",name:"Plastic Table",price:"135"}]},vhax:function(t,e){},"w/J+":function(t,e){},xDzb:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a3626c682464a60fd8d1.js.map