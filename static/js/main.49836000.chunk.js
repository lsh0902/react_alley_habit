(this.webpackJsonpdream_coding=this.webpackJsonpdream_coding||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(9),r=n.n(s),o=(n(15),n(10)),i=n(6),u=n(2),b=n(3),l=n(5),h=n(4),j=(n(16),n(0)),d=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).increment=function(){t.props.onInc(t.props.habit)},t.decrement=function(){t.props.onDec(t.props.habit)},t.delete=function(){t.props.onDel(t.props.habit)},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.props.habit,e=t.name,n=t.count;return console.log("habit ".concat(e)),Object(j.jsxs)("li",{className:"habit",children:[Object(j.jsx)("span",{className:"habit-name",children:e}),Object(j.jsx)("span",{className:"habit-count",children:n}),Object(j.jsx)("button",{className:"habit-button inc",onClick:this.increment,children:Object(j.jsx)("i",{className:"far fa-plus-square"})}),Object(j.jsx)("button",{className:"habit-button dec",onClick:this.decrement,children:Object(j.jsx)("i",{className:"far fa-minus-square"})}),Object(j.jsx)("button",{className:"habit-button del",onClick:this.delete,children:Object(j.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.PureComponent),p=Object(a.memo)((function(t){var e=c.a.useRef(),n=Object(a.useCallback)((function(n){n.preventDefault();var a=e.current.value;a&&t.onAdd(a),e.current.value="",e.current.focus()}));return Object(j.jsxs)("form",{className:"add-form",onSubmit:n,children:[console.log("render....."),Object(j.jsx)("input",{ref:e,type:"text",className:"add-input",placeholder:"\uc2b5\uad00\uc744 \uc785\ub825\ud574\ub77c."}),Object(j.jsx)("button",{className:"add-button",children:"Add"})]})})),m=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).handleAdd=function(e){t.props.onAdd(e)},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this;return console.log("habit"),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{onAdd:this.handleAdd}),Object(j.jsx)("ul",{children:this.props.habits.map((function(e){return Object(j.jsx)(d,{habit:e,onInc:t.props.increment,onDec:t.props.decrement,onDel:t.props.onDelete},e.name)}))})]})}}]),n}(a.PureComponent),f=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return console.log("navbar update"),Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("i",{className:"navbar-logo fas fa-leaf"}),Object(j.jsx)("span",{children:"Habit Tracker"}),Object(j.jsx)("span",{className:"navbar-count",children:this.props.length})]})}}]),n}(a.PureComponent),O=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={habits:[{name:"Reading",count:0},{name:"Running",count:0},{name:"Coding",count:0}]},t.increment=function(e){var n=t.state.habits.map((function(t){return e==t?Object(i.a)(Object(i.a)({},t),{},{count:t.count+1}):t}));t.setState({habits:n})},t.decrement=function(e){var n=t.state.habits.map((function(t){return e==t?Object(i.a)(Object(i.a)({},t),{},{count:t.count<1?0:t.count-1}):t}));t.setState({habits:n})},t.onDelete=function(e){var n=t.state.habits.filter((function(t){return t!=e}));t.setState({habits:n})},t.onReset=function(){var e=t.state.habits.map((function(t){return 0==t.count?t:Object(i.a)(Object(i.a)({},t),{},{count:0})}));t.setState({habits:e})},t.handleAdd=function(e){var n={name:e,count:0},a=[].concat(Object(o.a)(t.state.habits),[n]);t.setState({habits:a})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state.habits.length;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{length:t}),Object(j.jsx)(m,{habits:this.state.habits,increment:this.increment,decrement:this.decrement,onDelete:this.onDelete,onAdd:this.handleAdd}),Object(j.jsx)("button",{onClick:this.onReset,className:"reset",children:"Reset!"})]})}}]),n}(a.PureComponent);n(18);r.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.49836000.chunk.js.map