(this["webpackJsonpmy-movie-service"]=this["webpackJsonpmy-movie-service"]||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(14),i=n.n(s),a=n(7),j=n(2),o=n(5),u=n.n(o),d=n(8),l=n(13),h=n(1);var b=function(e){var t=e.id,n=e.coverImg,c=e.title,r=e.year,s=e.summary,i=e.genres;return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:n,alt:c}),Object(h.jsx)("h2",{children:Object(h.jsxs)(a.b,{to:"/movie/".concat(t),children:[c," (",r,")"," "]})}),Object(h.jsx)("p",{children:s}),Object(h.jsx)("ul",{children:i.map((function(e){return Object(h.jsx)("li",{children:e},e)}))})]})};var m=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(l.a)(s,2),a=i[0],j=i[1],o=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rationg=8.8&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,j(n.data.movies),r(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[]),console.log(a),Object(h.jsx)("div",{children:n?Object(h.jsx)("h1",{children:"Loading..."}):Object(h.jsx)("div",{children:a.map((function(e){return Object(h.jsx)(b,{id:e.id,coverImg:e.medium_cover_image,title:e.title,year:e.year,summary:e.summary,genres:e.genres},e.id)}))})})};var v=function(){var e=Object(j.f)().id,t=function(){var t=Object(d.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:n=t.sent,console.log(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){t()}),[]),Object(h.jsx)("h1",{children:"Detail"})};var O=function(){return Object(h.jsx)(a.a,{children:Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/hello",children:Object(h.jsx)("h1",{children:"Hello!!"})}),Object(h.jsx)(j.a,{path:"/movie/:id",children:Object(h.jsx)(v,{})}),Object(h.jsx)(j.a,{path:"/",children:Object(h.jsx)(m,{})})]})})};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.fae7cd7a.chunk.js.map