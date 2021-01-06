(this["webpackJsonp@kamontat/countdown"]=this["webpackJsonp@kamontat/countdown"]||[]).push([[0],{10:function(t){t.exports=JSON.parse('{"b":"@kamontat/countdown","d":"0.3.1","a":{"name":"Kamontat Chantrachirathumrong","url":"https://kamontat.net","email":"developer@kamontat.net"},"c":{"type":"git","url":"https://github.com/kamontat/countdown","directory":"."}}')},31:function(t){t.exports=JSON.parse('[{"name":"Prang birthday","key":"prang-birthday","calendar":{"year":-1,"month":12,"date":5,"hour":0,"minute":0,"second":0,"millisecond":0}},{"name":"Net birthday","key":"net-birthday","calendar":{"month":11,"date":8,"hour":0,"minute":0,"second":0,"millisecond":0}},{"name":"KcNt\'s Anniversary","key":"anniversary","calendar":{"month":1,"date":2,"hour":0,"minute":0,"second":0,"millisecond":0}},{"name":"Midnight","key":"midnight","calendar":{"hour":0,"minute":0,"second":0,"millisecond":0}}]')},48:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var i=n(24),a=n(6),r=n(11),o=(n(34),n(0)),s=n.n(o),d=n(25),c=n.n(d),u=n(1),m=n(4),h=n(19),l=n.n(h),g=n(7),f=function t(){Object(g.a)(this,t),this.base=void 0,this.debug=void 0,this.warn=void 0,this.error=void 0;for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];this.base=t.base.extend(n.join(t.seperator),t.seperator),this.debug=this.base.extend("debug",t.seperator),this.warn=this.base.extend("warn",t.seperator),this.error=this.base.extend("error",t.seperator)};f.base=l()("timing"),f.seperator=":";var p=n(9),v=function(){function t(e){Object(g.a)(this,t),this.logger=new f("model","interval"),this.amount=void 0,this.unit=void 0,this.errors=void 0,this.amount=-1,this.unit="ms",this.errors=[];var n=/[0-9]+/g.exec(null!==e&&void 0!==e?e:"");(null===n||n.length<1)&&this.errors.push(new Error("Cannot extract number from '".concat(e,"'"))),this.logger.debug("step 1: extracted numbers, received %o",n);var i=/[a-z]+/g.exec(null!==e&&void 0!==e?e:"");if(this.logger.debug("step 2: extracted units, received %o",i),null!==n){var a=parseFloat(n[0]);isFinite(a)?this.amount=a:this.errors.push(new Error("Input amount this not number, ".concat(a)))}if(null!==i){var r=i[0];r&&(this.unit=r)}}return Object(p.a)(t,[{key:"getAmount",value:function(t){return-1===this.amount?void 0:this.amount*(null!==t&&void 0!==t?t:1)}},{key:"hasError",value:function(){return this.errors.length>0}},{key:"getErrors",value:function(){return Array.from(this.errors)}},{key:"ms",value:function(){return this.hasError()||"ms"===this.unit||this.unit.includes("millisecond")?this.getAmount():"s"===this.unit||this.unit.includes("second")?this.getAmount(1e3):"m"===this.unit||this.unit.includes("min")?this.getAmount(6e4):"h"===this.unit||this.unit.includes("hour")?this.getAmount(36e5):this.getAmount()}}]),t}(),b=n(3),O=n(26),w=n.n(O),y=n(27),E=n.n(y),x=n(28),N=n.n(x),S=n(29),j=n.n(S),I=n(30),D=n.n(I);b.a.extend(w.a),b.a.extend(E.a),b.a.extend(N.a),b.a.extend(j.a),b.a.extend(D.a),b.a.tz.setDefault(b.a.tz.guess());var C,M,k=function(){var t=Object(b.a)();return t.set("date",t.daysInMonth()).set("hour",23).set("minute",59).set("second",59).set("millisecond",999)},L=function(){return Object(b.a)()},_=function(){function t(e,n){Object(g.a)(this,t),this._name=e,this.d=void 0,this.d=n.isValid()?n:Object(b.a)()}return Object(p.a)(t,null,[{key:"timestamp",value:function(){return L().valueOf()}},{key:"ms",value:function(e){return new t("timestamp",Object(b.a)(e))}},{key:"diff",value:function(t){return t<0?{d:b.a.duration(Math.abs(t)),negative:!0}:{d:b.a.duration(t),negative:!1}}},{key:"new",value:function(e,n,i){var a=function(){var t=n.toLowerCase();return e.has(t)?{name:e.getName(t),datetime:e.modify(t,L())}:"now"===t?{name:"Now",datetime:L()}:"endyear"===t?{name:"End Year",datetime:Object(b.a)().set("month",11).set("date",31).set("hour",23).set("minute",59).set("second",59).set("millisecond",999)}:"startyear"===t?{name:"Start Year",datetime:Object(b.a)().set("month",0).set("date",1).set("hour",0).set("minute",0).set("second",0).set("millisecond",0)}:"endmonth"===t?{name:"End Month",datetime:k()}:"startmonth"===t?{name:"Start Month",datetime:Object(b.a)().set("date",1).set("hour",0).set("minute",0).set("second",0).set("millisecond",0)}:i?{name:i,datetime:Object(b.a)(n,i)}:{name:"Raw",datetime:Object(b.a)(n)}}();return new t(a.name,a.datetime)}}]),Object(p.a)(t,[{key:"diff",value:function(t){return b.a.duration(this.d.diff(t.d,void 0,!0))}},{key:"ms",value:function(){return this.d.valueOf()}},{key:"name",get:function(){return this._name}}]),t}();!function(t){t[t.MILLISECOND=0]="MILLISECOND",t[t.SECOND=1]="SECOND",t[t.WEEK=2]="WEEK",t[t.SECOND_MILLISECOND=3]="SECOND_MILLISECOND",t[t.MINUTE_SECOND_MILLISECOND=4]="MINUTE_SECOND_MILLISECOND",t[t.HOUR_MINUTE_SECOND=5]="HOUR_MINUTE_SECOND",t[t.DAY_HOUR_MINUTE_SECOND=6]="DAY_HOUR_MINUTE_SECOND"}(C||(C={})),function(t){t.YEAR="y|year",t.MONTH="m|month",t.WEEK="w|week",t.DAY="d|day",t.HOUR="h|hour",t.MINUTE="m|minute",t.SECOND="s|second",t.MILLISECOND="ms|millisecond"}(M||(M={}));var U=function(t,e,n){var i=e.split("|");return{number:Math.floor(t)*(n.negative?-1:1),digit:n.digit,shortUnit:i[0],unit:i[1]}},T=function(){function t(e){Object(g.a)(this,t),this.name=void 0,this.name=null===e?C.MINUTE_SECOND_MILLISECOND:"ms"===e?C.MILLISECOND:"s"===e?C.SECOND:"w"===e?C.WEEK:"sms"===e?C.SECOND_MILLISECOND:"msms"===e?C.MINUTE_SECOND_MILLISECOND:"hms"===e?C.HOUR_MINUTE_SECOND:"dhms"===e?C.DAY_HOUR_MINUTE_SECOND:C.MINUTE_SECOND_MILLISECOND}return Object(p.a)(t,[{key:"format",value:function(t){var e=_.diff(t);return this._format(e.d,e.negative)}},{key:"_format",value:function(t,e){switch(this.name){case C.MILLISECOND:return[U(t.asMilliseconds(),M.MILLISECOND,{digit:12,negative:e})];case C.SECOND:return[U(t.asSeconds(),M.SECOND,{digit:9,negative:e})];case C.WEEK:return[U(t.asWeeks(),M.WEEK,{digit:5,negative:e})];case C.SECOND_MILLISECOND:return[U(t.asSeconds(),M.SECOND,{digit:9,negative:e}),U(t.milliseconds(),M.MILLISECOND,{digit:3,negative:e})];case C.MINUTE_SECOND_MILLISECOND:return[U(t.asMinutes(),M.MINUTE,{digit:7,negative:e}),U(t.seconds(),M.SECOND,{digit:2,negative:e}),U(t.milliseconds(),M.MILLISECOND,{digit:3,negative:e})];case C.HOUR_MINUTE_SECOND:return[U(t.asHours(),M.HOUR,{digit:6,negative:e}),U(t.minutes(),M.MINUTE,{digit:2,negative:e}),U(t.seconds(),M.SECOND,{digit:2,negative:e})];case C.DAY_HOUR_MINUTE_SECOND:return[U(t.asDays(),M.DAY,{digit:4,negative:e}),U(t.hours(),M.HOUR,{digit:2,negative:e}),U(t.minutes(),M.MINUTE,{digit:2,negative:e}),U(t.seconds(),M.SECOND,{digit:2,negative:e})];default:return[]}}}]),t}(),A=n(22),R=n(10),H=function(){return Object(u.b)("span",{css:{marginBottom:"1rem",marginRight:"1rem",fontSize:"1rem",lineHeight:"1.2",textAlign:"right",fontFamily:"JetBrainsMono, ui-monospace, monospace","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"},children:["Create by ",R.a.name," ",Object(u.a)("a",{css:{"--tw-text-opacity":"1",color:"rgba(165, 180, 252, var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"rgba(49, 46, 129, var(--tw-text-opacity))"}},href:R.a.url,target:"_blank",rel:"noreferrer",children:R.a.url}),Object(u.a)("br",{}),Object(u.a)("a",{css:{"--tw-text-opacity":"1",color:"rgba(165, 180, 252, var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"rgba(49, 46, 129, var(--tw-text-opacity))"}},href:R.c.url,target:"_blank",rel:"noreferrer",children:R.b})," ","v",R.d]})},z=m.a.div({display:"flex",justifyContent:"space-between"}),F=m.a.span({margin:"1rem",fontSize:"1rem",lineHeight:"1.2",fontFamily:"JetBrainsMono, ui-monospace, monospace","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"}),Y=function(t){var e=t.name,n=t.timestamp;return document.title="".concat(e," | Timing"),Object(u.b)(z,{children:[Object(u.a)(F,{}),Object(u.a)(F,{children:n})]})},B=m.a.div([{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},{height:"auto",width:"100%"},{position:"relative",zIndex:"10"},{"--tw-shadow":"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",borderRadius:"0.75rem",overflow:"hidden"},"background: inherit;",'&:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    filter: blur(10px) brightness(1.1);\n    margin: -5px;\n    box-shadow: inset 0 0 200px rgba(255, 255, 255, .9);\n  };']),W=m.a.span({padding:"0.25rem",fontSize:"1.5rem",lineHeight:"1.25",cursor:"text",textDecoration:"none",userSelect:"none",fontFamily:"JetBrainsMono, ui-monospace, monospace","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 1024px)":{fontSize:"1.75rem",lineHeight:"1.4"}}),K={0:{"@media (min-width: 768px)":{width:"100%"}},1:{"@media (min-width: 768px)":{width:"100%"}},2:{"@media (min-width: 768px)":{width:"50%"}},3:{"@media (min-width: 768px)":{width:"33.333333%"}},4:{"@media (min-width: 768px)":{width:"25%"}},5:{"@media (min-width: 768px)":{width:"20%"}},6:{"@media (min-width: 768px)":{width:"16.666667%"}}},J=m.a.div([function(t){var e,n;return null!==(e=K[null!==(n=t["aria-colcount"])&&void 0!==n?n:0])&&void 0!==e?e:K[0]},{display:"flex",justifyContent:"center"}]),P=Object(m.a)(B)([{margin:"0.5rem",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"1rem",paddingBottom:"1rem","@media (min-width: 640px)":{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"1.5rem",paddingBottom:"1.5rem"},"@media (min-width: 768px)":{paddingLeft:"3rem",paddingRight:"3rem",paddingTop:"3.5rem",paddingBottom:"3.5rem"},"@media (min-width: 1024px)":{paddingLeft:"4rem",paddingRight:"4rem"}}]),V=Object(m.a)(W)([{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"proportional-nums","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)",fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)"}]),q=Object(m.a)(W)([{fontWeight:"700"}]),G=function(t){var e,n,i=t.output,a=t.size;return Object(u.a)(J,{"aria-colcount":a,children:Object(u.b)(P,{children:[Object(u.a)(V,{children:(e=i.number,n=i.digit,e<0?"-"+String(Math.abs(e)).padStart(n,"0"):String(e).padStart(n,"0"))}),Object(u.a)(q,{children:i.unit})]})})},Q=m.a.div({width:"100%",height:"100%",display:"flex",flexDirection:"column"}),X=m.a.div({height:"100%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0.5rem"}),Z=m.a.div({display:"flex",flexDirection:"column",flex:"1 1 0%","@media (min-width: 768px)":{flexDirection:"row"},"@media (min-width: 1024px)":{maxWidth:"1024px"}}),$=function(t){var e,n=t.end,i=t.interval,a=t.output,r=Object(o.useState)(_.timestamp()),s=Object(A.a)(r,2),d=s[0],c=s[1],m=Object(o.useState)(n.ms()-d),h=Object(A.a)(m,2),l=h[0],g=h[1],f=null!==(e=i.ms())&&void 0!==e?e:100;Object(o.useEffect)((function(){var t=setInterval((function(){var t=_.timestamp();c(t),g(n.ms()-t)}),f);return function(){return clearInterval(t)}}));var p=a.format(l),v=p.length;return Object(u.b)(Q,{children:[Object(u.a)(Y,{name:n.name,timestamp:d}),Object(u.a)(X,{children:Object(u.a)(Z,{children:p.map((function(t){return Object(u.a)(G,{size:v,output:t},t.shortUnit)}))})}),Object(u.a)(H,{})]})},tt=n.p+"static/media/background.eb213c56.png",et=n(31),nt=function(){function t(e,n){Object(g.a)(this,t),this.t=e,this.checker=n}return Object(p.a)(t,[{key:"modify",value:function(e,n){return void 0!==e&&null!==e&&this.checker(e)?new t(n(this.t,e),this.checker):this}},{key:"get",value:function(){return this.t}}]),t}(),it=function(){function t(){var e=this;Object(g.a)(this,t),this.logger=new f("model","special-day"),this.sday=void 0,this.sday=new Map,et.forEach((function(t){return e.sday.set(t.key,t)})),this.logger.debug("loading db size: %d",this.sday.size)}return Object(p.a)(t,[{key:"getName",value:function(t){var e,n;return null!==(e=null===(n=this.sday.get(t))||void 0===n?void 0:n.name)&&void 0!==e?e:""}},{key:"has",value:function(t){return this.sday.has(t)}},{key:"isExist",value:function(t){return void 0!==t&&null!==t&&-1!==t}},{key:"modify",value:function(t,e){if(this.has(t)){var n=this.sday.get(t);this.logger.debug("received modifier object: %o",n);var i=new nt(e,this.isExist).modify(n.calendar.year,(function(t,e){return t.set("year",e)})).modify(n.calendar.month,(function(t,e){return t.set("month",e-1)})).modify(n.calendar.date,(function(t,e){return t.set("date",e)})).modify(n.calendar.hour,(function(t,e){return t.set("hour",e)})).modify(n.calendar.minute,(function(t,e){return t.set("minute",e)})).modify(n.calendar.second,(function(t,e){return t.set("second",e)})).modify(n.calendar.millisecond,(function(t,e){return t.set("millisecond",e)})).get();this.logger.debug("received new datetime: %s",i.toString());for(var a=i.clone(),r=0;!a.isAfter(e);){if(0===r&&this.logger.debug("On modify..."),r>50){this.logger.error("reach timeout, cannot modified (%s)",a),a=i.clone();break}this.isExist(n.calendar.date)?this.isExist(n.calendar.month)?this.isExist(n.calendar.year)||(this.logger.debug("step %d: Add one more year",r),a=a.add(1,"year")):(this.logger.debug("step %d: Add one more month",r),a=a.add(1,"month")):(this.logger.debug("step %d: Add one more day",r),a=a.add(1,"day")),r++}return this.logger.debug("received modified datetime: %s",a.toString()),a}return e}}]),t}(),at=m.a.div([{width:"auto",minHeight:"100%",height:"100%"},{backgroundAttachment:"fixed",backgroundSize:"cover",backgroundPosition:"center"},"background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.05)), url(".concat(tt,")")]),rt=function(){var t,e,n,i=new URLSearchParams(window.location.search),a=i.has("debug")||i.has("debugMode");l.a.enable("".concat(a?"timing:*":"timing:*:error,timing:*:warn"));var r=new f("page","index");r.debug("rendering");var o=new v(i.get("interval")),s=new it,d=_.new(s,null!==(t=null!==(e=i.get("end"))&&void 0!==e?e:i.get("endDate"))&&void 0!==t?t:"endYear",null!==(n=i.get("format"))&&void 0!==n?n:i.get("formatter")),c=new T(i.get("output"));return r.debug("initial end date as %o",d.ms()),r.debug("initial interval as %o (%o)",o,o.ms()),r.debug("initial output   as %o",c),Object(u.a)(at,{children:Object(u.a)($,{end:d,interval:o,output:c})})},ot=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),i(t),a(t),r(t),o(t)}))};n.p,n.p,n.p,n.p,n.p,n.p,n(48);function st(){var t=Object(i.a)(["\n      @keyframes spin {\n          to { \n            transform: rotate(360deg);\n          }\n        }\n      @keyframes ping {\n          75%, 100% { \n            transform: scale(2); opacity: 0;\n          }\n        }\n      @keyframes pulse {\n          50% { \n            opacity: .5;\n          }\n        }\n      @keyframes bounce {\n          0%, 100% { \n            transform: translateY(-25%); animationTimingFunction: cubic-bezier(0.8,0,1,1);\n          }\n        \n          50% { \n            transform: none; animationTimingFunction: cubic-bezier(0,0,0.2,1);\n          }\n        }\n* {\n    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgba(59, 130, 246, 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n  }\n* {\n  --tw-shadow: 0 0 #0000; }\n"]);return st=function(){return t},t}var dt=function(){return Object(a.jsx)(r.a,{styles:Object(r.b)(st())})};c.a.render(Object(a.jsxs)(s.a.StrictMode,{children:[Object(a.jsx)(dt,{}),Object(a.jsx)(rt,{})]}),document.getElementById("root")),ot(console.log)}},[[49,1,2]]]);
//# sourceMappingURL=main.5700e93e.chunk.js.map