(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var o=c(3),s=c.n(o),n=c(4),a=c(5),d=c(7),l=c(6),i=c(1),r=c.n(i),u=(c(12),c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(n.a)(this,c);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam"},e.addGood=function(t){e.setState({selectedGood:t})},e.deleteGood=function(){e.setState({selectedGood:""})},e.isGoodSelected=function(t){return e.state.selectedGood===t},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood,c=this.isGoodSelected;return Object(u.jsxs)("main",{className:"section container",children:[t?Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.deleteGood})]}):Object(u.jsx)("h1",{className:"title",children:"No goods selected"}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:b.map((function(t){return Object(u.jsxs)("tr",{"data-cy":"Good",className:c(t)?"has-background-success-light":"",children:[Object(u.jsx)("td",{children:c(t)?Object(u.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.deleteGood,children:"-"}):Object(u.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.addGood(t)},children:"+"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})}}]),c}(r.a.Component);s.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.34ac0de3.chunk.js.map