(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},236:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(34),o=a.n(n),s=(a(43),a(6)),c=a(7),m=a(9),i=a(8),u=a(10),d=a(14),p=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.Jumbotron,null,l.a.createElement(d.Display4,null,"React First App"),l.a.createElement(d.Lead,null,"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("p",null,"It uses utility classes for typography and spacing to space content out within the larger container."),l.a.createElement(d.Button,{primary:!0,lg:!0},"Learn more")))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(231);var h=a(239),E=a(238),f=a(17),g=a.n(f),b=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h3",null,"React First App")))}}]),t}(r.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.username.current.value,r=a.password.current.value,l=a.handleValidation(t,r);l.length>0&&a.setState({errors:l})},a.handleValidation=function(e,t){var r=[];0===e.length?r.push("Username cannot be empty"):localStorage.setItem("username",e),t.length<6?r.push("Password should be at least 6 characters long"):localStorage.setItem("password",t);var l=localStorage.getItem("newusername"),n=localStorage.getItem("newpassword");return e===l&&t===n?(sessionStorage.setItem("userAuth","Success"),a.props.history.push("/profile")):r.push("Username and Password are incorrect"),r},a.username=l.a.createRef(),a.password=l.a.createRef(),a.state={errors:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h3",null,"Please Login into the website."),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("small",{id:"passwordError",className:"form-text text-muted error-color"},this.state.errors[2]),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"usename"},"Username:"),l.a.createElement("input",{type:"text",className:"form-control",ref:this.username}),l.a.createElement("small",{id:"usenameError",className:"form-text text-muted error-color"},this.state.errors[0])),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"password",className:"form-control",ref:this.password}),l.a.createElement("small",{id:"passwordError",className:"form-text text-muted error-color"},this.state.errors[1])),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-primary"},"Submit")))))))}}]),t}(l.a.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.username.current.value,r=a.email.current.value,l=a.password.current.value,n=a.cpassword.current.value,o=a.location.current.value,s=a.website.current.value,c=a.dateofbirth.current.value,m=a.handleValidation(t,r,l,n);o&&localStorage.setItem("location",o),s&&localStorage.setItem("website",s),c&&localStorage.setItem("dateofbirth",c),m.length>0?a.setState({errors:m}):a.props.history.push("/login")},a.handleValidation=function(e,t,a,r){var l=[];return 0===e.length?l.push("Username cannot be empty"):localStorage.setItem("newusername",e),0===t.length?l.push("Email cannot be empty"):localStorage.setItem("newemail",t),a.length<6?l.push("Password should be at least 6 characters long"):(console.log("Password Okay"),localStorage.setItem("newpassword",a)),0===r.length?l.push("Confirm Password can not be blank."):r!==a?l.push("Confirm Password not matched with Password"):localStorage.setItem("newcpassword",r),0===l.length&&l.pop(),console.log(l),l},a.username=l.a.createRef(),a.email=l.a.createRef(),a.password=l.a.createRef(),a.cpassword=l.a.createRef(),a.location=l.a.createRef(),a.website=l.a.createRef(),a.dateofbirth=l.a.createRef(),a.state={errors:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h3",null,"Signup"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"usename"},"Username:"),l.a.createElement("input",{type:"text",className:"form-control",ref:this.username}),l.a.createElement("small",{id:"usenameError",className:"form-text text-muted error-color"},this.state.errors[0])),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email:"),l.a.createElement("input",{type:"text",className:"form-control",ref:this.email}),l.a.createElement("small",{id:"usenameError",className:"form-text text-muted error-color"},this.state.errors[1])),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"password",className:"form-control",ref:this.password}),l.a.createElement("small",{id:"usenameError",className:"form-text text-muted error-color"},this.state.errors[2])),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"cpassword"},"Confirm Password:"),l.a.createElement("input",{type:"password",className:"form-control",ref:this.cpassword}),l.a.createElement("small",{id:"usenameError",className:"form-text text-muted error-color"},this.state.errors[3])),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"location"},"Location:"),l.a.createElement("input",{type:"text",className:"form-control",ref:this.location}),l.a.createElement("small",{id:"locationError",className:"form-text text-muted error-color"},"Optional")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"website"},"Website:"),l.a.createElement("input",{type:"text",className:"form-control",ref:this.website}),l.a.createElement("small",{id:"websiteError",className:"form-text text-muted error-color"},"Optional")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"dateofbirth"},"Date of Birth:"),l.a.createElement("input",{type:"text",className:"form-control",ref:this.dateofbirth}),l.a.createElement("small",{id:"dateofbirthError",className:"form-text text-muted error-color"},"Optional")),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-primary"},"Submit")))))))}}]),t}(l.a.Component),N=a(237),O=function(e){function t(e){var a;Object(s.a)(this,t),a=Object(m.a)(this,Object(i.a)(t).call(this,e));var r=sessionStorage.getItem("userAuth");return a.state="Success"!==r?{navitems:[{id:1,name:"Home",url:"/"},{id:2,name:"Login",url:"/login"},{id:3,name:"Signup",url:"/signup"}]}:{navitems:[{id:1,name:"Home",url:"/"},{id:2,name:"Profile",url:"/profile"},{id:3,name:"Logout",url:"/logout"}]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.navitems.map(function(e){return l.a.createElement("li",{className:"nav-item",key:e.id},l.a.createElement(N.a,{to:e.url,className:"nav-link"},e.name))})}}]),t}(r.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-xs-12 col-sm-6 col-md-6"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}))),l.a.createElement("div",{class:"col-xs-12 col-sm-6 col-md-6"},l.a.createElement("div",{class:"well well-sm"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-sm-6 col-md-4"},l.a.createElement("img",{src:"http://placehold.it/380x500",alt:"",class:"img-rounded img-responsive"})),l.a.createElement("div",{class:"col-sm-6 col-md-8"},l.a.createElement("h4",null,localStorage.getItem("username")),l.a.createElement("small",null,l.a.createElement("cite",{title:localStorage.getItem("location")},localStorage.getItem("location"))),l.a.createElement("p",null,localStorage.getItem("newemail"),l.a.createElement("br",null),l.a.createElement("a",{href:localStorage.getItem("website")},localStorage.getItem("website")),l.a.createElement("br",null),localStorage.getItem("dateofbirth")))))))))}}]),t}(r.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(m.a)(this,Object(i.a)(t).call(this,e)),sessionStorage.clear(),localStorage.clear(),a.props.history.push("/"),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Logout")}}]),t}(r.Component);o.a.render(l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement(d.Navbar,{expand:"lg",light:!0,bg:"light"},l.a.createElement(d.Collapse,{navbar:!0},l.a.createElement(d.Navbar.Nav,{mr:"auto"},l.a.createElement(d.Nav,null,l.a.createElement(O,null))))),l.a.createElement(E.a,{exact:!0,path:"/",component:p}),l.a.createElement(E.a,{path:"/login",component:v}),l.a.createElement(E.a,{path:"/signup",component:w}),l.a.createElement(E.a,{path:"/profile",component:y}),l.a.createElement(E.a,{path:"/logout",component:j}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e,t,a){e.exports=a(236)},43:function(e,t,a){}},[[37,2,1]]]);
//# sourceMappingURL=main.7e9f8635.chunk.js.map