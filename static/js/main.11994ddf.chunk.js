(this["webpackJsonpreact-redux-hooks-jwt-auth"]=this["webpackJsonpreact-redux-hooks-jwt-auth"]||[]).push([[0],{167:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),s=t.n(c),l=t(6),o=t(15),m=t(55),i=t(56),u=t(13),d=JSON.parse(localStorage.getItem("user")),E=d?{isLoggedIn:!0,user:d}:{isLoggedIn:!1,user:null},f={},p=Object(o.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"REGISTER_SUCCESS":case"REGISTER_FAIL":return Object(u.a)(Object(u.a)({},e),{},{isLoggedIn:!1});case"LOGIN_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{isLoggedIn:!0,user:n.user});case"LOGIN_FAIL":case"LOGOUT":return Object(u.a)(Object(u.a)({},e),{},{isLoggedIn:!1,user:null});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"SET_MESSAGE":return{message:n};case"CLEAR_MESSAGE":return{message:""};default:return e}}}),g=[i.a],v=Object(o.createStore)(p,Object(m.composeWithDevTools)(o.applyMiddleware.apply(void 0,g))),b=(t(67),t(4)),h=t(3),O=t(12),N=(t(68),t(69),t(23)),j=t.n(N),S=t(17),y=t.n(S),k=t(24),w=t.n(k),I=t(16),T=t.n(I),L="http://localhost:8080/api/auth/",_=function(e,a,t){return T.a.post(L+"signup",{username:e,email:a,password:t})},R=function(e,a){return T.a.post(L+"signin",{username:e,password:a}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},A=function(){localStorage.removeItem("user")},x=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},C=function(e){var a=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useState)(""),s=Object(b.a)(c,2),o=s[0],m=s[1],i=Object(n.useState)(""),u=Object(b.a)(i,2),d=u[0],E=u[1],f=Object(n.useState)(!1),p=Object(b.a)(f,2),g=p[0],v=p[1],O=Object(l.c)((function(e){return e.auth})).isLoggedIn,N=Object(l.c)((function(e){return e.message})).message,S=Object(l.b)();return O?r.a.createElement(h.a,{to:"/profile"}):r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(j.a,{onSubmit:function(n){n.preventDefault(),v(!0),a.current.validateAll(),0===t.current.context._errors.length?S(function(e,a){return function(t){return R(e,a).then((function(e){return t({type:"LOGIN_SUCCESS",payload:{user:e}}),Promise.resolve()}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return t({type:"LOGIN_FAIL"}),t({type:"SET_MESSAGE",payload:a}),Promise.reject()}))}}(o,d)).then((function(){e.history.push("/profile"),window.location.reload()})).catch((function(){v(!1)})):v(!1)},ref:a},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(y.a,{type:"text",className:"form-control",name:"username",value:o,onChange:function(e){var a=e.target.value;m(a)},validations:[x]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(y.a,{type:"password",className:"form-control",name:"password",value:d,onChange:function(e){var a=e.target.value;E(a)},validations:[x]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block",disabled:g},g&&r.a.createElement("span",{className:"spinner-border spinner-border-sm"}),r.a.createElement("span",null,"Login"))),N&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"alert alert-danger",role:"alert"},N)),r.a.createElement(w.a,{style:{display:"none"},ref:t}))))},G=t(57),U=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},M=function(e){if(!Object(G.isEmail)(e))return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This is not a valid email.")},F=function(e){if(e.length<3||e.length>20)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The username must be between 3 and 20 characters.")},P=function(e){if(e.length<6||e.length>40)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The password must be between 6 and 40 characters.")},D=function(){var e=Object(n.useRef)(),a=Object(n.useRef)(),t=Object(n.useState)(""),c=Object(b.a)(t,2),s=c[0],o=c[1],m=Object(n.useState)(""),i=Object(b.a)(m,2),u=i[0],d=i[1],E=Object(n.useState)(""),f=Object(b.a)(E,2),p=f[0],g=f[1],v=Object(n.useState)(!1),h=Object(b.a)(v,2),O=h[0],N=h[1],S=Object(l.c)((function(e){return e.message})).message,k=Object(l.b)();return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(j.a,{onSubmit:function(t){t.preventDefault(),N(!1),e.current.validateAll(),0===a.current.context._errors.length&&k(function(e,a,t){return function(n){return _(e,a,t).then((function(e){return n({type:"REGISTER_SUCCESS"}),n({type:"SET_MESSAGE",payload:e.data.message}),Promise.resolve()}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return n({type:"REGISTER_FAIL"}),n({type:"SET_MESSAGE",payload:a}),Promise.reject()}))}}(s,u,p)).then((function(){N(!0)})).catch((function(){N(!1)}))},ref:e},!O&&r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(y.a,{type:"text",className:"form-control",name:"username",value:s,onChange:function(e){var a=e.target.value;o(a)},validations:[U,F]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(y.a,{type:"text",className:"form-control",name:"email",value:u,onChange:function(e){var a=e.target.value;d(a)},validations:[U,M]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(y.a,{type:"password",className:"form-control",name:"password",value:p,onChange:function(e){var a=e.target.value;g(a)},validations:[U,P]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block"},"Sign Up"))),S&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:O?"alert alert-success":"alert alert-danger",role:"alert"},S)),r.a.createElement(w.a,{style:{display:"none"},ref:a}))))};function J(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var B=function(){return T.a.get("http://localhost:8080/api/test/all")},W=function(){return T.a.get("http://localhost:8080/api/test/user",{headers:J()})},q=function(){return T.a.get("http://localhost:8080/api/test/mod",{headers:J()})},z=function(){return T.a.get("http://localhost:8080/api/test/admin",{headers:J()})},H=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){B().then((function(e){c(e.data)}),(function(e){var a=e.response&&e.response.data||e.message||e.toString();c(a)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,t)))},K=function(){var e=Object(l.c)((function(e){return e.auth})).user;return e?r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,r.a.createElement("strong",null,e.username)," Profile")),r.a.createElement("p",null,r.a.createElement("strong",null,"Token:")," ",e.accessToken.substring(0,20)," ..."," ",e.accessToken.substr(e.accessToken.length-20)),r.a.createElement("p",null,r.a.createElement("strong",null,"Id:")," ",e.id),r.a.createElement("p",null,r.a.createElement("strong",null,"Email:")," ",e.email),r.a.createElement("strong",null,"Authorities:"),r.a.createElement("ul",null,e.roles&&e.roles.map((function(e,a){return r.a.createElement("li",{key:a},e)})))):r.a.createElement(h.a,{to:"/login"})},$=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){W().then((function(e){c(e.data)}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();c(a)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,t)))},Q=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){q().then((function(e){c(e.data)}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();c(a)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,t)))},V=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){z().then((function(e){c(e.data)}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();c(a)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,t)))},X=t(7),Y=Object(X.a)(),Z=function(){var e=Object(n.useState)(!1),a=Object(b.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(!1),o=Object(b.a)(s,2),m=o[0],i=o[1],u=Object(l.c)((function(e){return e.auth})).user,d=Object(l.b)();Object(n.useEffect)((function(){Y.listen((function(e){d({type:"CLEAR_MESSAGE"})}))}),[d]),Object(n.useEffect)((function(){u&&(c(u.roles.includes("ROLE_MODERATOR")),i(u.roles.includes("ROLE_ADMIN")))}),[u]);return r.a.createElement(h.c,{history:Y},r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement(O.a,{to:"/",className:"navbar-brand"},"bezKoder"),r.a.createElement("div",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/home",className:"nav-link"},"Home")),t&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/mod",className:"nav-link"},"Moderator Board")),m&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/admin",className:"nav-link"},"Admin Board")),u&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/user",className:"nav-link"},"User"))),u?r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/profile",className:"nav-link"},u.username)),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/login",className:"nav-link",onClick:function(){d((function(e){A(),e({type:"LOGOUT"})}))}},"LogOut"))):r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/login",className:"nav-link"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{to:"/register",className:"nav-link"},"Sign Up")))),r.a.createElement("div",{className:"container mt-3"},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:["/","/home"],component:H}),r.a.createElement(h.b,{exact:!0,path:"/login",component:C}),r.a.createElement(h.b,{exact:!0,path:"/register",component:D}),r.a.createElement(h.b,{exact:!0,path:"/profile",component:K}),r.a.createElement(h.b,{path:"/user",component:$}),r.a.createElement(h.b,{path:"/mod",component:Q}),r.a.createElement(h.b,{path:"/admin",component:V})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(l.a,{store:v},r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,a,t){e.exports=t(167)},67:function(e,a,t){},69:function(e,a,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.11994ddf.chunk.js.map