(this["webpackJsonppolice-brutality-data-visualizations"]=this["webpackJsonppolice-brutality-data-visualizations"]||[]).push([[0],{171:function(t,e,n){},173:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=(n(74),n(65)),i=n(16),s=n.n(i),l=n(32),d=n(35),f=n(195),p=n(194),m=n(193),b=n(44),h=(n(171),n(45)),v=n.n(h),g=function(){var t=Object(l.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://raw.githubusercontent.com/2020PB/police-brutality/data_build/all-locations.json");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.data);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(t){return t.reduce((function(t,e){if(!e.date)return t;var n=new Date(e.date),a=t.find((function(t){return t.x.getTime()===n.getTime()}));return a?a.y+=1:t.push({x:n,y:1}),t}),[]).map((function(t){return t.x.setHours(0,0,0),t})).sort((function(t,e){return e.x.getTime()-t.x.getTime()}))},y=function(t){var e=t.reduce((function(t,e){var n="".concat(e.city,", ").concat(e.state);return t[n]=t[n]||0,t[n]+=1,t}),{}),n=Object.entries(e).sort((function(t,e){return e[1]-t[1]}));return{locations:n.map((function(t){return t[0]})),values:n.map((function(t){return t[1]}))}},j=function(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)},x=function(){var t=Object(a.useState)("date"),e=Object(d.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)([]),i=Object(d.a)(c,2),h=i[0],x=i[1],E=Object(a.useState)({}),O=Object(d.a)(E,2),k=O[0],B=O[1];return Object(a.useEffect)((function(){Object(l.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:e=t.sent,x(w(e)),B(y(e));case 5:case"end":return t.stop()}}),t)})))()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{color:"default",position:"static"},r.a.createElement(p.a,{value:n,onChange:function(t,e){return o(e)}},r.a.createElement(m.a,{value:"date",label:"By Date"}),r.a.createElement(m.a,{value:"location",label:"By Location"}))),"date"===n&&h.length>0&&r.a.createElement(b.a,{data:{datasets:[{label:"Incidents",data:h,backgroundColor:v()({hue:"red"})}]},options:{scales:{xAxes:[{type:"time",time:{unit:"day"}}]}}}),"location"===n&&k.values&&r.a.createElement(b.b,{data:{datasets:[{data:k.values,backgroundColor:v()({count:k.locations.length,hue:"red",alpha:.5})}],labels:k.locations},options:Object(u.a)({type:"doughnut",cutoutPercentage:25},j()&&{legend:!1})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},69:function(t,e,n){t.exports=n(173)},74:function(t,e,n){}},[[69,1,2]]]);
//# sourceMappingURL=main.e889dcc3.chunk.js.map