(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{43:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),r=s(13),c=s.n(r),i=s(4),o=s.n(i),m=s(14),l=s(15),j=s(16),d=s(19),u=s(18),v=s(17),p=s.n(v),h=(s(43),s(0));var b=function(e){var t=e.name,s=e.poster,a=e.summary,n=e.rating,r=e.year,c=e.genres;return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{className:"movie__poster",src:s,alt:t,title:t}),Object(h.jsxs)("div",{className:"movie__data",children:[Object(h.jsxs)("h3",{className:"movie__title",children:[t," (",n,")"]}),Object(h.jsx)("h5",{className:"movie__year",children:r}),Object(h.jsx)("ul",{className:"genres",children:c.map((function(e,t){return Object(h.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(h.jsxs)("p",{className:"movie__summary",children:[a.slice(0,150),"..."]})]})]})},g=(s(45),function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:[],temp:"\uac00",loading:!0},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,loading:!1}),console.log(a);case 6:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.movies,s=e.loading;return Object(h.jsx)("section",{className:"container",children:s?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader__text",children:"\ub85c\ub529 \uc911"})}):Object(h.jsx)("div",{className:"movies",children:t.map((function(e){return Object(h.jsx)(b,{name:e.title,year:e.year,poster:e.medium_cover_image,rating:e.rating,summary:e.summary,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));c.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.d124e2ea.chunk.js.map