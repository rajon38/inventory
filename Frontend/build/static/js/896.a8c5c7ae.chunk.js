"use strict";(self.webpackChunkclient_side=self.webpackChunkclient_side||[]).push([[896],{6656:function(e,t,r){r.d(t,{HG:function(){return w},IO:function(){return Z},Nq:function(){return v},Py:function(){return y},aw:function(){return g},vq:function(){return x},xJ:function(){return f}});var n=r(4165),a=r(5861),s=r(1243),c=r(2127),u=r(5202),i=r(8660),o=r(2507),p=r(3931),l=r(3038),d={headers:{token:(0,o.LP)()}};function f(e,t){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,p,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u.Z.dispatch((0,i._x)()),a=l.x+"/Login",p={email:t,password:r},e.next=6,s.Z.post(a,p);case 6:return d=e.sent,(0,o.o4)(d.data.token),(0,o.XN)(d.data.data),(0,c.bF)("Login Success"),u.Z.dispatch((0,i.V4)()),e.abrupt("return",!0);case 14:return e.prev=14,e.t0=e.catch(0),u.Z.dispatch((0,i.V4)()),(0,c.PK)("Invalid Email or Password"),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function x(e,t,r,n,a,s){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)((0,n.Z)().mark((function e(t,r,a,o,p,d){var f,h,x;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u.Z.dispatch((0,i._x)()),f=l.x+"/Registration",h={email:t,firstName:r,lastName:a,mobile:o,password:p,photo:d},e.next=6,s.Z.post(f,h);case 6:if(x=e.sent,u.Z.dispatch((0,i.V4)()),200!==x.status){e.next=23;break}if("fail"!==x.data.status){e.next=19;break}if(1!==x.data.data.keyPattern.email){e.next=15;break}return(0,c.PK)("Email Already Exist"),e.abrupt("return",!1);case 15:case 23:return(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 17:e.next=21;break;case 19:return(0,c.bF)("Registration Success"),e.abrupt("return",!0);case 21:e.next=25;break;case 25:e.next=32;break;case 27:return e.prev=27,e.t0=e.catch(0),u.Z.dispatch((0,i.V4)()),(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 32:case"end":return e.stop()}}),e,null,[[0,27]])})))).apply(this,arguments)}function Z(){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u.Z.dispatch((0,i._x)()),t=l.x+"/ProfileDetails",e.next=5,s.Z.get(t,d);case 5:r=e.sent,u.Z.dispatch((0,i.V4)()),200===r.status?u.Z.dispatch((0,p.Bc)(r.data.data[0])):(0,c.PK)("Something Went Wrong"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),u.Z.dispatch((0,i.V4)()),(0,c.PK)("Something Went Wrong");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function v(e,t,r,n,a,s){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)((0,n.Z)().mark((function e(t,r,a,p,f,h){var x,b,Z,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u.Z.dispatch((0,i._x)()),x=l.x+"/ProfileUpdate",b={email:t,firstName:r,lastName:a,mobile:p,password:f,photo:h},Z={email:t,firstName:r,lastName:a,mobile:p,photo:h},e.next=7,s.Z.post(x,b,d);case 7:if(m=e.sent,u.Z.dispatch((0,i.V4)()),200!==m.status){e.next=15;break}return(0,c.bF)("Profile Update Success"),(0,o.XN)(Z),e.abrupt("return",!0);case 15:return(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 17:e.next=24;break;case 19:return e.prev=19,e.t0=e.catch(0),(0,c.PK)("Something Went Wrong"),u.Z.dispatch((0,i.V4)()),e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}function g(e){return P.apply(this,arguments)}function P(){return(P=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u.Z.dispatch((0,i._x)()),r=l.x+"/RecoverVerifyEmail/"+t,e.next=5,s.Z.get(r);case 5:if(a=e.sent,u.Z.dispatch((0,i.V4)()),200!==a.status){e.next=18;break}if("fail"!==a.data.status){e.next=13;break}return(0,c.PK)("No user found"),e.abrupt("return",!1);case 13:return(0,o.vV)(t),(0,c.bF)("A 6 Digit verification code has been sent to your email address. "),e.abrupt("return",!0);case 16:e.next=20;break;case 18:return(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 20:e.next=27;break;case 22:return e.prev=22,e.t0=e.catch(0),(0,c.PK)("Something Went Wrong"),u.Z.dispatch((0,i.V4)()),e.abrupt("return",!1);case 27:case"end":return e.stop()}}),e,null,[[0,22]])})))).apply(this,arguments)}function w(e,t){return W.apply(this,arguments)}function W(){return(W=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,u.Z.dispatch((0,i._x)()),a=l.x+"/RecoverVerifyOTP/"+t+"/"+r,e.next=6,s.Z.get(a);case 6:if(p=e.sent,u.Z.dispatch((0,i.V4)()),200!==p.status){e.next=19;break}if("fail"!==p.data.status){e.next=14;break}return(0,c.PK)("Code Verification Fail"),e.abrupt("return",!1);case 14:return(0,o.Z6)(r),(0,c.bF)("Code Verification Success"),e.abrupt("return",!0);case 17:e.next=21;break;case 19:return(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 21:e.next=29;break;case 23:return e.prev=23,e.t0=e.catch(1),(0,c.PK)("Something Went Wrong"),u.Z.dispatch((0,i.V4)()),e.abrupt("return",!1);case 29:case"end":return e.stop()}}),e,null,[[1,23]])})))).apply(this,arguments)}function y(e,t,r){return V.apply(this,arguments)}function V(){return(V=(0,a.Z)((0,n.Z)().mark((function e(t,r,a){var p,d,f;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u.Z.dispatch((0,i._x)()),p=l.x+"/RecoverResetPass",d={email:t,OTP:r,password:a},e.next=6,s.Z.post(p,d);case 6:if(f=e.sent,u.Z.dispatch((0,i.V4)()),200!==f.status){e.next=19;break}if("fail"!==f.data.status){e.next=14;break}return(0,c.PK)(f.data.data),e.abrupt("return",!1);case 14:return(0,o.Z6)(r),(0,c.bF)("NEW PASSWORD CREATED"),e.abrupt("return",!0);case 17:e.next=21;break;case 19:return(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 21:e.next=28;break;case 23:return e.prev=23,e.t0=e.catch(0),(0,c.PK)("Something Went Wrong"),u.Z.dispatch((0,i.V4)()),e.abrupt("return",!1);case 28:case"end":return e.stop()}}),e,null,[[0,23]])})))).apply(this,arguments)}},8896:function(e,t,r){r.r(t);var n=r(4165),a=r(5861),s=r(2791),c=r(2127),u=r(6656),i=r(7689),o=r(184);t.default=function(){var e=(0,s.useRef)(),t=(0,i.s0)(),r=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=e.value,!(0,c.s6)(a)){r.next=5;break}(0,c.PK)("Valid Email Address Required !"),r.next=9;break;case 5:return r.next=7,(0,u.aw)(a);case 7:!0===r.sent&&t("/VerifyOTP");case 9:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,o.jsx)(s.Fragment,{children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row d-flex justify-content-center",children:(0,o.jsx)("div",{className:"col-md-7 col-lg-6 center-screen",children:(0,o.jsx)("div",{className:"card w-90",children:(0,o.jsxs)("div",{className:"card-body text-start",children:[(0,o.jsx)("h4",{children:"EMAIL ADDRESS"}),(0,o.jsx)("hr",{}),(0,o.jsx)("label",{children:"Your email address"}),(0,o.jsx)("input",{ref:function(t){return e=t},placeholder:"User Email",className:"form-control",type:"email"}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{onClick:r,className:"btn w-100 btn-success",children:"Next"})]})})})})})})}}}]);
//# sourceMappingURL=896.a8c5c7ae.chunk.js.map