"use strict";(self.webpackChunkclient_side=self.webpackChunkclient_side||[]).push([[285],{6656:function(e,t,r){r.d(t,{HG:function(){return P},IO:function(){return b},Nq:function(){return Z},Py:function(){return y},aw:function(){return N},vq:function(){return x},xJ:function(){return f}});var a=r(4165),n=r(5861),s=r(1243),c=r(2127),i=r(5202),u=r(8660),o=r(2507),l=r(3931),p=r(3038),d={headers:{token:(0,o.LP)()}};function f(e,t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)((0,a.Z)().mark((function e(t,r){var n,l,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.Z.dispatch((0,u._x)()),n=p.x+"/Login",l={email:t,password:r},e.next=6,s.Z.post(n,l);case 6:return d=e.sent,(0,o.o4)(d.data.token),(0,o.XN)(d.data.data),(0,c.bF)("Login Success"),i.Z.dispatch((0,u.V4)()),e.abrupt("return",!0);case 14:return e.prev=14,e.t0=e.catch(0),i.Z.dispatch((0,u.V4)()),(0,c.PK)("Invalid Email or Password"),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function x(e,t,r,a,n,s){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)((0,a.Z)().mark((function e(t,r,n,o,l,d){var f,h,x;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.Z.dispatch((0,u._x)()),f=p.x+"/Registration",h={email:t,firstName:r,lastName:n,mobile:o,password:l,photo:d},e.next=6,s.Z.post(f,h);case 6:if(x=e.sent,i.Z.dispatch((0,u.V4)()),200!==x.status){e.next=23;break}if("fail"!==x.data.status){e.next=19;break}if(1!==x.data.data.keyPattern.email){e.next=15;break}return(0,c.PK)("Email Already Exist"),e.abrupt("return",!1);case 15:case 23:return(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 17:e.next=21;break;case 19:return(0,c.bF)("Registration Success"),e.abrupt("return",!0);case 21:e.next=25;break;case 25:e.next=32;break;case 27:return e.prev=27,e.t0=e.catch(0),i.Z.dispatch((0,u.V4)()),(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 32:case"end":return e.stop()}}),e,null,[[0,27]])})))).apply(this,arguments)}function b(){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)((0,a.Z)().mark((function e(){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.Z.dispatch((0,u._x)()),t=p.x+"/ProfileDetails",e.next=5,s.Z.get(t,d);case 5:r=e.sent,i.Z.dispatch((0,u.V4)()),200===r.status?i.Z.dispatch((0,l.Bc)(r.data.data[0])):(0,c.PK)("Something Went Wrong"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),i.Z.dispatch((0,u.V4)()),(0,c.PK)("Something Went Wrong");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function Z(e,t,r,a,n,s){return k.apply(this,arguments)}function k(){return(k=(0,n.Z)((0,a.Z)().mark((function e(t,r,n,l,f,h){var x,m,b,v;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.Z.dispatch((0,u._x)()),x=p.x+"/ProfileUpdate",m={email:t,firstName:r,lastName:n,mobile:l,password:f,photo:h},b={email:t,firstName:r,lastName:n,mobile:l,photo:h},e.next=7,s.Z.post(x,m,d);case 7:if(v=e.sent,i.Z.dispatch((0,u.V4)()),200!==v.status){e.next=15;break}return(0,c.bF)("Profile Update Success"),(0,o.XN)(b),e.abrupt("return",!0);case 15:return(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 17:e.next=24;break;case 19:return e.prev=19,e.t0=e.catch(0),(0,c.PK)("Something Went Wrong"),i.Z.dispatch((0,u.V4)()),e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}function N(e){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)((0,a.Z)().mark((function e(t){var r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.Z.dispatch((0,u._x)()),r=p.x+"/RecoverVerifyEmail/"+t,e.next=5,s.Z.get(r);case 5:if(n=e.sent,i.Z.dispatch((0,u.V4)()),200!==n.status){e.next=18;break}if("fail"!==n.data.status){e.next=13;break}return(0,c.PK)("No user found"),e.abrupt("return",!1);case 13:return(0,o.vV)(t),(0,c.bF)("A 6 Digit verification code has been sent to your email address. "),e.abrupt("return",!0);case 16:e.next=20;break;case 18:return(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 20:e.next=27;break;case 22:return e.prev=22,e.t0=e.catch(0),(0,c.PK)("Something Went Wrong"),i.Z.dispatch((0,u.V4)()),e.abrupt("return",!1);case 27:case"end":return e.stop()}}),e,null,[[0,22]])})))).apply(this,arguments)}function P(e,t){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)((0,a.Z)().mark((function e(t,r){var n,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,i.Z.dispatch((0,u._x)()),n=p.x+"/RecoverVerifyOTP/"+t+"/"+r,e.next=6,s.Z.get(n);case 6:if(l=e.sent,i.Z.dispatch((0,u.V4)()),200!==l.status){e.next=19;break}if("fail"!==l.data.status){e.next=14;break}return(0,c.PK)("Code Verification Fail"),e.abrupt("return",!1);case 14:return(0,o.Z6)(r),(0,c.bF)("Code Verification Success"),e.abrupt("return",!0);case 17:e.next=21;break;case 19:return(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 21:e.next=29;break;case 23:return e.prev=23,e.t0=e.catch(1),(0,c.PK)("Something Went Wrong"),i.Z.dispatch((0,u.V4)()),e.abrupt("return",!1);case 29:case"end":return e.stop()}}),e,null,[[1,23]])})))).apply(this,arguments)}function y(e,t,r){return j.apply(this,arguments)}function j(){return(j=(0,n.Z)((0,a.Z)().mark((function e(t,r,n){var l,d,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.Z.dispatch((0,u._x)()),l=p.x+"/RecoverResetPass",d={email:t,OTP:r,password:n},e.next=6,s.Z.post(l,d);case 6:if(f=e.sent,i.Z.dispatch((0,u.V4)()),200!==f.status){e.next=19;break}if("fail"!==f.data.status){e.next=14;break}return(0,c.PK)(f.data.data),e.abrupt("return",!1);case 14:return(0,o.Z6)(r),(0,c.bF)("NEW PASSWORD CREATED"),e.abrupt("return",!0);case 17:e.next=21;break;case 19:return(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 21:e.next=28;break;case 23:return e.prev=23,e.t0=e.catch(0),(0,c.PK)("Something Went Wrong"),i.Z.dispatch((0,u.V4)()),e.abrupt("return",!1);case 28:case"end":return e.stop()}}),e,null,[[0,23]])})))).apply(this,arguments)}},5285:function(e,t,r){r.r(t);var a=r(4165),n=r(5861),s=r(2791),c=r(6656),i=r(9434),u=r(2127),o=r(7689),l=r(184);t.default=function(){var e,t,r,p,d,f,h=(0,s.useRef)();(0,s.useEffect)((function(){(0,n.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.IO)();case 2:case"end":return e.stop()}}),e)})))()}),[]);var x=(0,i.v9)((function(e){return e.profile.value})),m=(0,o.s0)(),b=function(){var s=(0,n.Z)((0,a.Z)().mark((function n(){var s,i,o,l,f,x;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s=e.value,i=t.value,o=r.value,l=p.value,f=d.value,x=h.src,!(0,u.s6)(s)){a.next=10;break}(0,u.PK)("Valid Email Address Required !"),a.next=30;break;case 10:if(!(0,u.si)(i)){a.next=14;break}(0,u.PK)("First Name Required !"),a.next=30;break;case 14:if(!(0,u.si)(o)){a.next=18;break}(0,u.PK)("Last Name Required !"),a.next=30;break;case 18:if((0,u.hD)(l)){a.next=22;break}(0,u.PK)("Valid Mobile  Required !"),a.next=30;break;case 22:if(!(0,u.si)(f)){a.next=26;break}(0,u.PK)("Password Required !"),a.next=30;break;case 26:return a.next=28,(0,c.Nq)(s,i,o,l,f,x);case 28:!0===a.sent&&m("/");case 30:case"end":return a.stop()}}),n)})));return function(){return s.apply(this,arguments)}}();return(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row d-flex justify-content-center",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"card",children:(0,l.jsx)("div",{className:"card-body",children:(0,l.jsxs)("div",{className:"container-fluid",children:[(0,l.jsx)("img",{ref:function(e){return h=e},className:"icon-nav-img-lg",src:x.photo,alt:""}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col-4 p-2",children:[(0,l.jsx)("label",{children:"Profile Picture"}),(0,l.jsx)("input",{onChange:function(){var e=f.files[0];(0,u.y3)(e).then((function(e){h.src=e}))},ref:function(e){return f=e},placeholder:"User Email",className:"form-control animated fadeInUp",type:"file"})]}),(0,l.jsxs)("div",{className:"col-4 p-2",children:[(0,l.jsx)("label",{children:"Email Address"}),(0,l.jsx)("input",{defaultValue:x.email,readOnly:!0,ref:function(t){return e=t},placeholder:"User Email",className:"form-control animated fadeInUp",type:"email"},Date.now())]}),(0,l.jsxs)("div",{className:"col-4 p-2",children:[(0,l.jsx)("label",{children:"First Name"}),(0,l.jsx)("input",{defaultValue:x.firstName,ref:function(e){return t=e},placeholder:"First Name",className:"form-control animated fadeInUp",type:"text"},Date.now())]}),(0,l.jsxs)("div",{className:"col-4 p-2",children:[(0,l.jsx)("label",{children:"Last Name"}),(0,l.jsx)("input",{defaultValue:x.lastName,ref:function(e){return r=e},placeholder:"Last Name",className:"form-control animated fadeInUp",type:"text"},Date.now())]}),(0,l.jsxs)("div",{className:"col-4 p-2",children:[(0,l.jsx)("label",{children:"Mobile"}),(0,l.jsx)("input",{defaultValue:x.mobile,ref:function(e){return p=e},placeholder:"Mobile",className:"form-control animated fadeInUp",type:"mobile"},Date.now())]}),(0,l.jsxs)("div",{className:"col-4 p-2",children:[(0,l.jsx)("label",{children:"Password"}),(0,l.jsx)("input",{defaultValue:x.password,ref:function(e){return d=e},placeholder:"User Password",className:"form-control animated fadeInUp",type:"password"},Date.now())]}),(0,l.jsx)("div",{className:"col-4 p-2",children:(0,l.jsx)("button",{onClick:b,className:"w-100  btn btn-success",children:"Update"})})]})]})})})})})})}}}]);
//# sourceMappingURL=285.6984b20a.chunk.js.map