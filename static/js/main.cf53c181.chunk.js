(this["webpackJsonpplanning-board"]=this["webpackJsonpplanning-board"]||[]).push([[0],{137:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(7),o=a(25),c=a(26),s=a(30),l=a(27),i=a(31),m=a(10),u=a(1),d=a.n(u),b=a(9),p=a.n(b),f=(a(94),a(95),a(11)),v=a(23),g={name:["ALMA","Bremen","Clover","Crystal","Jade","Martian","Raccoon Squat","Sapphire","Zen1"],ALMA:["Judy","Lihan","Prophet"],Bremen:["Andy","Chaotsung","Freddie","Mesh","Roy","Wisdom"],Clover:["Alvin","Chuck","David","Jack","Mavis","Tim","Rebecca","Shawn"],Crystal:["Link","Darek","Carol","Emily","Minie","Joey","Harrison","Jimmy","Lighter","Alfred","Ethan"],Jade:["Howard","Jason","NI","Sen","Tony","ChienYu","YingYu","YuHsuan"],Martian:["Alan","Andrew","Colby"],"Raccoon Squat":["Askeing","Carpusher","Matt","David","Jack","Ryan","Smiler","Ethan","Hill"],Sapphire:["James Hsiao","Yvon","Nate","Sudio","Jerry","Roger","James Lin"],Zen1:["Todd","Paul","Iris","David","Charles","Trista","Zion","Cary"]},y=a(139),k=a(142),E=a(86),O=a(143);function h(){var e=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  margin-right: -12px;\n"]);return h=function(){return e},e}function j(){var e=Object(m.a)(["\n  border: none;\n  border-radius: 5px;\n  padding: 8px;\n  background-color: ",";\n  display: flex;\n"]);return j=function(){return e},e}var I=f.a.div(j(),(function(e){return e.isDragging?"lightyellow":"white"})),x=f.a.div(h()),S=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.task,a=e.index,n=e.member,r=e.onSelectTaskDay,o=e.onDeleteTask,c=e.day,s=e.onTaskInputChange;return d.a.createElement(v.b,{draggableId:t.id,index:a},(function(e,a){return d.a.createElement(I,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,isDragging:a.isDragging}),d.a.createElement(O.a.Control,{as:"textarea",value:t.content,onChange:function(e){s(e.target.value,t.id)}}),d.a.createElement(x,null,d.a.createElement(k.a,{onSelect:function(e){e<0?o(t.id,e,n):r(t.id,e,n)}},d.a.createElement(k.a.Toggle,{variant:"outline-secondary",id:"dropdown-basic",size:"sm",className:"custom-task-dropdown-button"},c),d.a.createElement(k.a.Menu,null,d.a.createElement(k.a.Item,{eventKey:-1},"-1"),d.a.createElement(k.a.Item,{eventKey:0},"0"),d.a.createElement(k.a.Item,{eventKey:1},"1"),d.a.createElement(k.a.Item,{eventKey:2},"2"),d.a.createElement(k.a.Item,{eventKey:3},"3"),d.a.createElement(k.a.Item,{eventKey:4},"4"),d.a.createElement(k.a.Item,{eventKey:5},"5"),d.a.createElement(k.a.Item,{eventKey:6},"6"),d.a.createElement(k.a.Item,{eventKey:7},"7"),d.a.createElement(k.a.Item,{eventKey:8},"8"),d.a.createElement(k.a.Item,{eventKey:9},"9"),d.a.createElement(k.a.Item,{eventKey:10},"10"),d.a.createElement(k.a.Item,{eventKey:11},"11"),d.a.createElement(k.a.Item,{eventKey:12},"12"),d.a.createElement(k.a.Item,{eventKey:13},"13"),d.a.createElement(k.a.Item,{eventKey:14},"14")))))}))}}]),t}(u.Component);a(60);function T(){var e=Object(m.a)(["\n  padding: 8px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n  flex-grow: 1;\n  min-height: 100px;\n"]);return T=function(){return e},e}function C(){var e=Object(m.a)(["\n  padding: 8px;\n  text-align: center;\n  color: SteelBlue;\n"]);return C=function(){return e},e}function D(){var e=Object(m.a)(["\n  float: right;\n  margin-top: -24px;\n  margin-bottom: -16px;\n"]);return D=function(){return e},e}function K(){var e=Object(m.a)(["\n  margin: 8px;\n  background-color: white;\n  border-radius: 4px;\n  width: 220px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid lightgrey;\n"]);return K=function(){return e},e}var w=f.a.div(K()),A=f.a.div(D()),N=f.a.h4(C()),J=f.a.div(T(),(function(e){return e.isDraggingOver?"lightblue":"inherit"})),M=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.tasks!==this.props.tasks}},{key:"render",value:function(){var e=this.props,t=e.tasks,a=e.onSelectTaskDay,n=e.member,r=e.onTaskInputChange,o=e.onDeleteTask;return t.map((function(e,t){return d.a.createElement(S,{key:e.id,task:e,index:t,day:e.day,member:n,onSelectTaskDay:a,onTaskInputChange:r,onDeleteTask:o})}))}}]),t}(u.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.member,a=e.index,n=e.tasks,r=e.onSelectTaskDay,o=e.onAddTask,c=e.onTaskInputChange,s=e.overloading,l=e.onSelectMemberDay,i=e.onDeleteTask,m=e.day,u=m;return n.forEach((function(e){u-=e.day})),d.a.createElement(v.b,{draggableId:t,index:a},(function(e){return d.a.createElement(w,Object.assign({},e.draggableProps,{ref:e.innerRef}),d.a.createElement("div",null,d.a.createElement(N,Object.assign({},e.dragHandleProps,{style:{marginBottom:"".concat(s?"-4px":"0")}}),t),m&&d.a.createElement(y.a,{variant:s?"danger":"info",className:"custom-overloaded-alert"},u," days left"),d.a.createElement(A,null,d.a.createElement(k.a,{onSelect:function(e){l(e,t)}},d.a.createElement(k.a.Toggle,{variant:"outline-secondary",id:"dropdown-basic",size:"sm",className:m?"custom-dropdown-button":"custom-task-dropdown-button"},m||"Days"),d.a.createElement(k.a.Menu,null,d.a.createElement(k.a.Item,{eventKey:-1},"-1"),d.a.createElement(k.a.Item,{eventKey:1},"1"),d.a.createElement(k.a.Item,{eventKey:2},"2"),d.a.createElement(k.a.Item,{eventKey:3},"3"),d.a.createElement(k.a.Item,{eventKey:4},"4"),d.a.createElement(k.a.Item,{eventKey:5},"5"),d.a.createElement(k.a.Item,{eventKey:6},"6"),d.a.createElement(k.a.Item,{eventKey:7},"7"),d.a.createElement(k.a.Item,{eventKey:8},"8"),d.a.createElement(k.a.Item,{eventKey:9},"9"),d.a.createElement(k.a.Item,{eventKey:10},"10"),d.a.createElement(k.a.Item,{eventKey:11},"11"),d.a.createElement(k.a.Item,{eventKey:12},"12"),d.a.createElement(k.a.Item,{eventKey:13},"13"),d.a.createElement(k.a.Item,{eventKey:14},"14"))))),d.a.createElement(v.c,{droppableId:t,type:"task"},(function(e,a){return d.a.createElement(J,Object.assign({},e.droppableProps,{ref:e.innerRef,isDraggingOver:a.isDraggingOver}),d.a.createElement(M,{tasks:n,onSelectTaskDay:r,member:t,onTaskInputChange:c,onDeleteTask:i}),d.a.createElement("div",{style:{marginLeft:"8px"}},m&&d.a.createElement(E.a,{variant:"light",size:"sm",className:"add-task-button",onClick:o},"Add Task")),e.placeholder)})))}))}}]),t}(u.Component),R=a(56),H=a(144),L=a(140),P=a(44);function F(){var e=Object(m.a)(["\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  border: 2px solid;\n  text-align: center;\n  color: black;\n  font: 22px Arial;\n  outline: none;\n  :focus {\n    outline: none;\n  }\n  :active {\n    border: 2px solid lightgrey;\n    color: lightgrey;\n  }\n"]);return F=function(){return e},e}function U(){var e=Object(m.a)(["\n  margin-top: 4px;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 48px;\n  right: 0px;\n  float: right;\n"]);return U=function(){return e},e}function Y(){var e=Object(m.a)(["\n  margin: 8px;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n"]);return Y=function(){return e},e}var z=f.a.div(Y()),Z=f.a.div(U()),q=f.a.button(F());function W(e){var t=e.selectedTeam,a=e.onSelectTeam,n=Object(u.useState)(!1),r=Object(R.a)(n,2),o=r[0],c=r[1];return d.a.createElement(d.a.Fragment,null,d.a.createElement(z,null,d.a.createElement(H.a,{placement:"left",overlay:d.a.createElement(L.a,null,t||"Select Team")},d.a.createElement(q,{onClick:function(){return function(e){return c(!e)}(o)}},o?d.a.createElement(P.b,null):t?t[0]:d.a.createElement(P.a,null)))),o&&d.a.createElement(Z,null,g.name.map((function(e,n){return d.a.createElement(E.a,{key:n,variant:e===t?"info":"outline-info",className:"custom-team-button",onClick:function(){return a(e)}},e)}))))}var G=a(141),Q=a(65);function V(){var e=Object(m.a)(["\n  margin-left: 8px;\n"]);return V=function(){return e},e}function X(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n  margin: 8px;\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n"]);return X=function(){return e},e}var $=f.a.div(X()),_=Object(f.a)(q)(V());function ee(e){var t=e.onClickImport,a=Object(u.useState)(!1),n=Object(R.a)(a,2),r=n[0],o=n[1],c=function(){return o(!1)};return d.a.createElement(d.a.Fragment,null,d.a.createElement($,null,d.a.createElement(H.a,{placement:"top",overlay:d.a.createElement(L.a,null,"Clean Board")},d.a.createElement(_,{onClick:function(){return o(!0)}},d.a.createElement(P.c,null))),d.a.createElement(H.a,{placement:"top",overlay:d.a.createElement(L.a,null,"Export")},d.a.createElement(_,{onClick:function(){return function(e,t,a){var n=document.createElement("a"),r=new Blob([e],{type:a});n.href=URL.createObjectURL(r),n.download=t,n.click()}(JSON.stringify(JSON.parse(localStorage.getItem("planningBoard")),null,2),"planning-board.txt","text/plain")}},d.a.createElement(Q.a,null))),d.a.createElement(H.a,{placement:"top",overlay:d.a.createElement(L.a,null,"Import .txt")},d.a.createElement(_,{onClick:t},d.a.createElement(Q.b,null)))),d.a.createElement(G.a,{centered:!0,show:r,onHide:c},d.a.createElement(G.a.Header,{closeButton:!0},d.a.createElement(G.a.Title,null,"Confirmation")),d.a.createElement(G.a.Body,null,"Are you sure you want to clean this board?"),d.a.createElement(G.a.Footer,null,d.a.createElement(E.a,{variant:"secondary",onClick:c},"Cancel"),d.a.createElement(E.a,{variant:"danger",onClick:function(){c(),localStorage.clear("planningBoard"),window.location.reload()}},"Clean"))))}var te=function(){return Math.random().toString(36).substring(7)};function ae(){var e=Object(m.a)(["\n  display: flex;\n  width: calc(100% - 160px);\n"]);return ae=function(){return e},e}var ne=f.a.div(ae()),re=function(e){function t(){var e,a;Object(o.a)(this,t);for(var c=arguments.length,i=new Array(c),m=0;m<c;m++)i[m]=arguments[m];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state=localStorage.getItem("planningBoard")?JSON.parse(localStorage.getItem("planningBoard")):{selectedTeam:"",memberOrder:[],members:{},tasks:{}},a.onDragEnd=function(e){var t,o=e.destination,c=e.source,s=e.draggableId,l=e.type;if(o&&(o.droppableId!==c.droppableId||o.index!==c.index)){if("member"===l){var i=Array.from(a.state.memberOrder);return i.splice(c.index,1),i.splice(o.index,0,s),void a.setState({memberOrder:i})}var m=a.state.members[c.droppableId],u=a.state.members[o.droppableId];if(m!==u){var d=Array.from(m.taskIds);d.splice(c.index,1);var b=Number(a.state.members[m.id].day),p=0;d.forEach((function(e){p+=Number(a.state.tasks[e].day)}));var f=Object(r.a)({},m,{taskIds:d,overloading:p>b}),v=Array.from(u.taskIds);v.splice(o.index,0,s);var g=Number(a.state.members[u.id].day),y=0;v.forEach((function(e){y+=Number(a.state.tasks[e].day)}));var k=Object(r.a)({},u,{taskIds:v,overloading:y>g}),E=Object(r.a)({},a.state.members,(t={},Object(n.a)(t,f.id,f),Object(n.a)(t,k.id,k),t));a.setState({members:E})}else{var O=a.state.members[c.droppableId],h=Array.from(O.taskIds);h.splice(c.index,1),h.splice(o.index,0,s);var j=Object(r.a)({},O,{taskIds:h}),I=Object(r.a)({},a.state.members,Object(n.a)({},c.droppableId,j));a.setState({members:I})}}},a.onTeamSelect=function(e){var t=g[e].reduce((function(e,t){return e[t]={id:t,day:null,taskIds:[]},e}),{});a.setState({selectedTeam:e,memberOrder:g[e],members:t})},a.onSelectMemberDay=function(e,t,o){var c=te(),s=Number(e);if(s<0){var l=a.state.memberOrder.filter((function(e){return e!==t}));return a.state.members[t].taskIds.forEach((function(e){delete a.state.tasks[e]})),delete a.state.members[t],void a.setState({members:a.state.members,memberOrder:l,tasks:a.state.tasks})}var i=0;if(a.state.members[t].taskIds.forEach((function(e){i+=Number(a.state.tasks[e].day)})),o||0!==a.state.members[t].taskIds.length){var m=Object(r.a)({},a.state.members[t],{day:e,overloading:i>s}),u=Object(r.a)({},a.state.members,Object(n.a)({},t,m));a.setState({members:u})}else a.setState(Object(r.a)({},a.state,{tasks:Object(r.a)({},a.state.tasks,Object(n.a)({},c,{id:c,content:"",day:null})),members:Object(r.a)({},a.state.members,Object(n.a)({},t,Object(r.a)({},a.state.members[t],{day:e,taskIds:[c],overloading:i>s})))}))},a.onDeleteTask=function(e,t,o){var c=Array.from(a.state.members[o].taskIds),s=c.indexOf(e);c.splice(s,1),delete a.state.tasks[e];var l=Number(a.state.members[o].day),i=0;c.forEach((function(e){i+=Number(a.state.tasks[e].day)})),a.setState(Object(r.a)({},a.state,{tasks:a.state.tasks,members:Object(r.a)({},a.state.members,Object(n.a)({},o,Object(r.a)({},a.state.members[o],{taskIds:c,overloading:i>l})))}))},a.onSelectTaskDay=function(e,t,o){var c=Number(a.state.members[o].day),s=Number(t),l=Object(r.a)({},a.state.tasks,Object(n.a)({},e,Object(r.a)({},a.state.tasks[e],{day:t})));a.setState(Object(r.a)({},a.state,{tasks:l})),a.state.members[o].taskIds.forEach((function(t){e!==t&&(s+=Number(a.state.tasks[t].day))}));var i=Object(r.a)({},a.state.members[o],{overloading:s>c}),m=Object(r.a)({},a.state.members,Object(n.a)({},o,i));a.setState({members:m})},a.onAddTask=function(e){var t=Array.from(a.state.members[e].taskIds),o=te();t.push(o),a.setState(Object(r.a)({},a.state,{tasks:Object(r.a)({},a.state.tasks,Object(n.a)({},o,{id:o,content:"",day:null})),members:Object(r.a)({},a.state.members,Object(n.a)({},e,Object(r.a)({},a.state.members[e],{taskIds:t})))}))},a.onTaskInputChange=function(e,t){var o=Object(r.a)({},a.state.tasks,Object(n.a)({},t,Object(r.a)({},a.state.tasks[t],{content:e})));a.setState(Object(r.a)({},a.state,{tasks:o}))},a.onClickImport=function(){var e=document.createElement("input");e.type="file",e.onchange=a.readImportedTask,e.click()},a.readImportedTask=function(e){var t=e.target.files[0];if(t.type.match(/text.*/)){var n=new FileReader;n.onload=function(e){var t=e.target.result;a.setState(JSON.parse(t))},n.readAsText(t)}else alert("Unsupported file format")},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.state!==t&&localStorage.setItem("planningBoard",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this,t=this.state,a=t.selectedTeam,n=t.memberOrder,r=t.members,o=t.tasks;return console.log(this.state),d.a.createElement(d.a.Fragment,null,a&&d.a.createElement(v.a,{onDragEnd:this.onDragEnd},d.a.createElement(v.c,{droppableId:"team-member-list",direction:"horizontal",type:"member"},(function(t){return d.a.createElement(ne,Object.assign({},t.droppableProps,{ref:t.innerRef}),n.map((function(t,n){return d.a.createElement(B,{key:"".concat(a,"-").concat(t),index:n,member:t,overloading:r[t].overloading,onAddTask:function(){return e.onAddTask(t)},day:r[t].day,tasks:r[t].taskIds.map((function(e){return o[e]})),onSelectMemberDay:function(t,a){return e.onSelectMemberDay(t,a,r[a].day)},onSelectTaskDay:function(t,a,n){return e.onSelectTaskDay(t,a,n)},onDeleteTask:function(t,a,n){return e.onDeleteTask(t,a,n)},onTaskInputChange:function(t,a){return e.onTaskInputChange(t,a)}})})),t.placeholder)}))),d.a.createElement(W,{onSelectTeam:function(t){return e.onTeamSelect(t)},selectedTeam:a}),d.a.createElement(ee,{onClickImport:this.onClickImport}))}}]),t}(u.Component);p.a.render(d.a.createElement(re,null),document.getElementById("root"))},60:function(e,t,a){},89:function(e,t,a){e.exports=a(137)}},[[89,1,2]]]);
//# sourceMappingURL=main.cf53c181.chunk.js.map