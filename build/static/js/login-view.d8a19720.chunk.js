(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{118:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(33),s=a(34),r=a(36),i=a(35),o=a(0),c=a(1),l=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={errorMessage:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onView,a=e.message;this.setState({errorMessage:a}),setTimeout((function(){return t("")}),2e3)}},{key:"componentDidUpdate",value:function(e,t){var a=this.props,n=a.onView,s=a.message,r=this.state.errorMessage;if(s&&s!==r)return this.setState({errorMessage:s}),n("")}},{key:"render",value:function(){var e=this.state.errorMessage;return Object(c.jsx)("div",{className:"alert",children:e})}}]),a}(o.Component)},119:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(33),r=a(34),i=a(36),o=a(35),c=a(0),l=a(12),u=a(116),h=a(118),b=(a(119),a(11)),p=a(1),j=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:"",errorMessage:""},e.handleChange=function(t){var a=t.target,s=a.name,r=a.value;e.setState(Object(n.a)({},s,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.email,s=a.password,r=e.props.onLogin;return n?s?(r({email:n,password:s}),void e.setState({email:"",password:""})):e.showNotification("Please enter password"):e.showNotification("Please enter email")},e.showNotification=function(t){e.setState({errorMessage:t})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.errorMessage;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"Notification-wrapper",children:Object(p.jsx)(u.a,{in:!!n,classNames:"Notification",timeout:250,unmountOnExit:!0,children:Object(p.jsx)(h.a,{onView:this.showNotification,message:n})})}),Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{children:["Email",Object(p.jsx)("input",{className:"input",type:"email",name:"email",value:t,onChange:this.handleChange})]}),Object(p.jsxs)("label",{children:["Password",Object(p.jsx)("input",{className:"input",type:"password",name:"password",value:a,onChange:this.handleChange})]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"btn-phonebook",type:"submit",disabled:!t&&!a||!!n,children:"Login"})]})]})}}]),a}(c.Component),d={onLogin:b.b.login},m=Object(l.b)(null,d)(j);t.default=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(m,{})]})}}}]);
//# sourceMappingURL=login-view.d8a19720.chunk.js.map