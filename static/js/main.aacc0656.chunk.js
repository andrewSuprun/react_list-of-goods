(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),c=s.n(r),o=s(5),i=s(6),a=s(9),l=s(7),u=s(8),b=s(1),h=(s(14),s(15),s(2)),d=s.n(h),p=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var v=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={isReversed:!1,sortType:n.NONE},t.sortLength=function(){t.setState({sortType:n.LENGTH})},t.sortAlphabet=function(){t.setState({sortType:n.ALPABET})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.sortType,r=function(t,e){var s=e.sortType,r=e.isReversed,c=Object(u.a)(t);switch(s){case n.ALPABET:c.sort((function(t,e){return t.localeCompare(e)}));break;case n.LENGTH:c.sort((function(t,e){return t.length-e.length}))}return r&&c.reverse(),c}(j,{isReversed:e,sortType:s});return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:d()("button is-info",{"is-light":s!==n.ALPABET}),onClick:this.sortAlphabet,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:d()("button is-success",{"is-light":s!==n.LENGTH}),onClick:this.sortLength,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:d()("button is-warning",{"is-light":!e}),onClick:this.reverse,children:"Reverse"}),(s!==n.NONE||e)&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.reset,children:"Reset"})]}),Object(p.jsx)("ul",{children:Object(p.jsx)("ul",{children:r.map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(b.PureComponent);c.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.aacc0656.chunk.js.map