(this.webpackJsonpdariuskiuberis=this.webpackJsonpdariuskiuberis||[]).push([[0],{24:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),o=r(3),s=r.n(o),i=r(12),a=r(2),d=function(){return Object(a.jsx)("div",{children:"testing..."})},u=r(1),l=r(10),p=r(11),b=r(8),h="GET_POSTS",j={posts:[]};var v=Object(u.combineReducers)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(b.a)(Object(b.a)({},e),{},{posts:t.payload});default:return e}},people:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AddPerson":return e.concat({id:e.length+1,name:t.payload});case"RemovePerson":return e.filter((function(e){return e.id!==t.payload}))}return e}}),O=Object(u.createStore)(v,Object(p.composeWithDevTools)(Object(u.applyMiddleware)(l.a)));s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(i.a,{store:O,children:Object(a.jsx)(d,{})})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.62583aca.chunk.js.map