"use strict";(self.webpackChunkclient_side=self.webpackChunkclient_side||[]).push([[101],{6656:function(e,t,r){r.d(t,{HG:function(){return w},IO:function(){return m},Nq:function(){return v},Py:function(){return W},aw:function(){return g},vq:function(){return x},xJ:function(){return f}});var n=r(4165),a=r(5861),s=r(1243),c=r(2127),i=r(5202),u=r(8660),o=r(2507),p=r(3931),l=r(3038),d={headers:{token:(0,o.LP)()}};function f(e,t){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,p,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.Z.dispatch((0,u._x)()),a=l.x+"/Login",p={email:t,password:r},e.next=6,s.Z.post(a,p);case 6:return d=e.sent,(0,o.o4)(d.data.token),(0,o.XN)(d.data.data),(0,c.bF)("Login Success"),i.Z.dispatch((0,u.V4)()),e.abrupt("return",!0);case 14:return e.prev=14,e.t0=e.catch(0),i.Z.dispatch((0,u.V4)()),(0,c.PK)("Invalid Email or Password"),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function x(e,t,r,n,a,s){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)((0,n.Z)().mark((function e(t,r,a,o,p,d){var f,h,x;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.Z.dispatch((0,u._x)()),f=l.x+"/Registration",h={email:t,firstName:r,lastName:a,mobile:o,password:p,photo:d},e.next=6,s.Z.post(f,h);case 6:if(x=e.sent,i.Z.dispatch((0,u.V4)()),200!==x.status){e.next=23;break}if("fail"!==x.data.status){e.next=19;break}if(1!==x.data.data.keyPattern.email){e.next=15;break}return(0,c.PK)("Email Already Exist"),e.abrupt("return",!1);case 15:case 23:return(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 17:e.next=21;break;case 19:return(0,c.bF)("Registration Success"),e.abrupt("return",!0);case 21:e.next=25;break;case 25:e.next=32;break;case 27:return e.prev=27,e.t0=e.catch(0),i.Z.dispatch((0,u.V4)()),(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 32:case"end":return e.stop()}}),e,null,[[0,27]])})))).apply(this,arguments)}function m(){return Z.apply(this,arguments)}function Z(){return(Z=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.Z.dispatch((0,u._x)()),t=l.x+"/ProfileDetails",e.next=5,s.Z.get(t,d);case 5:r=e.sent,i.Z.dispatch((0,u.V4)()),200===r.status?i.Z.dispatch((0,p.Bc)(r.data.data[0])):(0,c.PK)("Something Went Wrong"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),i.Z.dispatch((0,u.V4)()),(0,c.PK)("Something Went Wrong");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function v(e,t,r,n,a,s){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)((0,n.Z)().mark((function e(t,r,a,p,f,h){var x,b,m,Z;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.Z.dispatch((0,u._x)()),x=l.x+"/ProfileUpdate",b={email:t,firstName:r,lastName:a,mobile:p,password:f,photo:h},m={email:t,firstName:r,lastName:a,mobile:p,photo:h},e.next=7,s.Z.post(x,b,d);case 7:if(Z=e.sent,i.Z.dispatch((0,u.V4)()),200!==Z.status){e.next=15;break}return(0,c.bF)("Profile Update Success"),(0,o.XN)(m),e.abrupt("return",!0);case 15:return(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 17:e.next=24;break;case 19:return e.prev=19,e.t0=e.catch(0),(0,c.PK)("Something Went Wrong"),i.Z.dispatch((0,u.V4)()),e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}function g(e){return P.apply(this,arguments)}function P(){return(P=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.Z.dispatch((0,u._x)()),r=l.x+"/RecoverVerifyEmail/"+t,e.next=5,s.Z.get(r);case 5:if(a=e.sent,i.Z.dispatch((0,u.V4)()),200!==a.status){e.next=18;break}if("fail"!==a.data.status){e.next=13;break}return(0,c.PK)("No user found"),e.abrupt("return",!1);case 13:return(0,o.vV)(t),(0,c.bF)("A 6 Digit verification code has been sent to your email address. "),e.abrupt("return",!0);case 16:e.next=20;break;case 18:return(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 20:e.next=27;break;case 22:return e.prev=22,e.t0=e.catch(0),(0,c.PK)("Something Went Wrong"),i.Z.dispatch((0,u.V4)()),e.abrupt("return",!1);case 27:case"end":return e.stop()}}),e,null,[[0,22]])})))).apply(this,arguments)}function w(e,t){return N.apply(this,arguments)}function N(){return(N=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,i.Z.dispatch((0,u._x)()),a=l.x+"/RecoverVerifyOTP/"+t+"/"+r,e.next=6,s.Z.get(a);case 6:if(p=e.sent,i.Z.dispatch((0,u.V4)()),200!==p.status){e.next=19;break}if("fail"!==p.data.status){e.next=14;break}return(0,c.PK)("Code Verification Fail"),e.abrupt("return",!1);case 14:return(0,o.Z6)(r),(0,c.bF)("Code Verification Success"),e.abrupt("return",!0);case 17:e.next=21;break;case 19:return(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 21:e.next=29;break;case 23:return e.prev=23,e.t0=e.catch(1),(0,c.PK)("Something Went Wrong"),i.Z.dispatch((0,u.V4)()),e.abrupt("return",!1);case 29:case"end":return e.stop()}}),e,null,[[1,23]])})))).apply(this,arguments)}function W(e,t,r){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)((0,n.Z)().mark((function e(t,r,a){var p,d,f;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.Z.dispatch((0,u._x)()),p=l.x+"/RecoverResetPass",d={email:t,OTP:r,password:a},e.next=6,s.Z.post(p,d);case 6:if(f=e.sent,i.Z.dispatch((0,u.V4)()),200!==f.status){e.next=19;break}if("fail"!==f.data.status){e.next=14;break}return(0,c.PK)(f.data.data),e.abrupt("return",!1);case 14:return(0,o.Z6)(r),(0,c.bF)("NEW PASSWORD CREATED"),e.abrupt("return",!0);case 17:e.next=21;break;case 19:return(0,c.PK)("Something Went Wrong"),e.abrupt("return",!1);case 21:e.next=28;break;case 23:return e.prev=23,e.t0=e.catch(0),(0,c.PK)("Something Went Wrong"),i.Z.dispatch((0,u.V4)()),e.abrupt("return",!1);case 28:case"end":return e.stop()}}),e,null,[[0,23]])})))).apply(this,arguments)}},101:function(e,t,r){r.r(t);var n=r(4165),a=r(5861),s=r(2791),c=r(1087),i=r(2127),u=r(6656),o=r(184);t.default=function(){var e,t=(0,s.useRef)(),r=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var a,s;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=t.value,s=e.value,!(0,i.s6)(a)){r.next=8;break}(0,i.PK)("Invalid Email Address"),r.next=16;break;case 8:if(!(0,i.si)(s)){r.next=12;break}(0,i.PK)("Password Required"),r.next=16;break;case 12:return r.next=14,(0,u.xJ)(a,s);case 14:r.sent&&(window.location.href="/");case 16:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,o.jsx)(s.Fragment,{children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row justify-content-center",children:(0,o.jsx)("div",{className:"col-md-7 col-lg-6 center-screen",children:(0,o.jsx)("div",{className:"card w-90  p-4",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("h3",{children:"SIGN IN"}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{ref:function(e){return t=e},placeholder:"User Email",className:"form-control",type:"email"}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{ref:function(t){return e=t},placeholder:"User Password",className:"form-control",type:"password"}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{onClick:r,className:"btn btn-success w-100 animated ",children:"Next"}),(0,o.jsx)("div",{className:"float-end mt-3",children:(0,o.jsxs)("span",{children:[(0,o.jsx)(c.rU,{className:"text-center ms-3 h6",to:"/Registration",children:"Sign Up"}),(0,o.jsx)("span",{className:"ms-1",children:"|"}),(0,o.jsx)(c.rU,{className:"text-center ms-3 h6",to:"/SendOTP",children:"Forget Password"})]})})]})})})})})})}}}]);
//# sourceMappingURL=101.569cf3f2.chunk.js.map