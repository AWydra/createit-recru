(this["webpackJsonpcreateit-recru"]=this["webpackJsonpcreateit-recru"]||[]).push([[1],{35:function(e,t,n){e.exports=n(66)},62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),l=n.n(a),r=n(13),c=n.n(r),i=n(9),o=n(12),u=n(10),s=n(31),m=n(32),d=n(33),b=function(e){return e.feed.entry.map((function(e){var t,n,a,l,r,c,i,o,u,s;return{id:null===(t=e.id)||void 0===t?void 0:t.attributes["im:id"],category:null===(n=e.category)||void 0===n||null===(a=n.attributes)||void 0===a?void 0:a.label,artist:null===(l=e["im:artist"])||void 0===l?void 0:l.label,image:e["im:image"][2].label.replace("113x170bb.png","460x0w.jpg"),title:null===(r=e["im:name"])||void 0===r?void 0:r.label,price:null===(c=e["im:price"])||void 0===c?void 0:c.label,date:null===(i=e["im:releaseDate"])||void 0===i||null===(o=i.attributes)||void 0===o?void 0:o.label,buttons:e.link.map((function(e){return{title:e.attributes.title||"Check on iTunes",href:e.attributes.href}})),desc:null===(u=e.summary)||void 0===u?void 0:u.label,rights:null===(s=e.rights)||void 0===s?void 0:s.label}}))},v={response:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RESPONSE":return Object(d.a)(e,(function(e){e.response=b(t.payload)}));default:return e}},p=Object(u.createStore)(f,Object(s.composeWithDevTools)(Object(u.applyMiddleware)(m.a))),E=n(2),h=n(34),g=n(15),y=n.n(g),w=function(e){return{type:"SET_RESPONSE",payload:e}},j=function(e){return function(t){var n=y.a.CancelToken.source();return y.a.get("https://itunes.apple.com/us/rss/topmovies/limit=100/json",{cancelToken:n.token,params:Object(h.a)({},e)}).then((function(e){var n=e.data;t(w(n))})).catch((function(e){y.a.isCancel(e)})),{cancel:function(){return n.cancel()}}}},k=(n(62),function(){return l.a.createElement("div",{className:"loader"},l.a.createElement("div",{className:"spinner-border loader__spinner text-primary",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))}),O=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,84))})),S=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,88))})),N=function(){return l.a.createElement(a.Suspense,{fallback:l.a.createElement(k,null)},l.a.createElement(E.c,null,l.a.createElement(E.a,{path:"/movie/:id"},l.a.createElement(S,null)),l.a.createElement(E.a,{path:"/"},l.a.createElement(O,null))))},T=(n(64),function(){return l.a.createElement("nav",{className:"navbar"},l.a.createElement(i.b,{to:"/",className:"navbar__link mb-0 py-3 h2","aria-label":"Return to home page"},"Streaming Service"))}),_=function(){return l.a.createElement("footer",{className:"mt-auto pt-5"},l.a.createElement("div",{className:"navbar d-block mb-0 text-center"},"By AWydra"))},x=(n(65),function(){var e=Object(o.b)(),t=Object(E.f)();return Object(a.useEffect)((function(){e(j()),t.listen((function(){return window.scrollTo(0,0)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement(T,null)),l.a.createElement("main",null,l.a.createElement("section",{className:"container"},l.a.createElement(N,null))),l.a.createElement(_,null))}),P=function(){return l.a.createElement(o.a,{store:p},l.a.createElement(i.a,null,l.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,2,3]]]);
//# sourceMappingURL=main.af0ef362.chunk.js.map