(this["webpackJsonpplanning-board"]=this["webpackJsonpplanning-board"]||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(7),o=a(28),c=a(29),s=a(33),l=a(30),i=a(34),m=a(12),d=a(1),u=a.n(d),b=a(9),p=a.n(b),f=(a(97),a(98),a(13)),g=a(26),k={name:["ALMA","Bremen","Clover","Crystal","Jade","Martian","Raccoon Squat","Sapphire","Zen1"],ALMA:["Judy","Lihan","Prophet"],Bremen:["Andy","Chaotsung","Freddie","Mesh","Roy","Wisdom"],Clover:["Alvin","Chuck","David","Jack","Mavis","Tim","Rebecca","Shawn"],Crystal:["Link","Darek","Carol","Emily","Minie","Joey","Harrison","Jimmy","Lighter","Alfred","Ethan"],Jade:["Howard","Jason","NI","Sen","Tony","ChienYu","YingYu","YuHsuan"],Martian:["Alan","Andrew","Colby"],"Raccoon Squat":["Askeing","Carpusher","Matt","David","Jack","Ryan","Smiler","Ethan","Hill"],Sapphire:["James Hsiao","Yvon","Nate","Sudio","Jerry","Roger","James Lin"],Zen1:["Todd","Paul","Iris","David","Charles","Trista","Zion","Cary"]},v=a(142),y=a(145),O=a(89),h=a(146),E=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];function j(){var e=Object(m.a)(["\n  float: right;\n  margin-top: -2px;\n  margin-bottom: 8px;\n"]);return j=function(){return e},e}function S(){var e=Object(m.a)(["\n  width: 100%;\n  border: none;\n  border-radius: 5px;\n  padding: 8px;\n  background-color: ",";\n"]);return S=function(){return e},e}var x=f.a.div(S(),(function(e){return e.isDragging?"lightyellow":"white"})),I=f.a.div(j()),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.task,a=e.index,n=e.member,r=e.onSelectTaskDay,o=e.onDeleteTask,c=e.day,s=e.onTaskInputChange;return u.a.createElement(g.b,{draggableId:t.id,index:a},(function(e,a){return u.a.createElement(x,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,isDragging:a.isDragging}),u.a.createElement(h.a.Control,{as:"textarea",value:t.content,className:"task-form-textarea",onChange:function(e){s(e.target.value,t.id)}}),u.a.createElement(I,null,u.a.createElement(y.a,{onSelect:function(e){e<0?o(t.id,e,n):r(t.id,e,n)}},u.a.createElement(y.a.Toggle,{variant:"outline-secondary",size:"sm",className:"day-dropdown-button"},c),u.a.createElement(y.a.Menu,null,u.a.createElement(y.a.Item,{eventKey:-1},"Remove"),E.map((function(e){return u.a.createElement(y.a.Item,{key:e,eventKey:e},e)}))))))}))}}]),t}(d.Component);a(81);function C(){var e=Object(m.a)(["\n  width: 150px;\n  transition: background-color 0.2s ease;\n  background-color: ",";\n  min-height: 480px;\n"]);return C=function(){return e},e}function D(){var e=Object(m.a)(["\n  float: right;\n  clear: both;\n  margin-right: -4px;\n  margin-bottom: 4px;\n"]);return D=function(){return e},e}function A(){var e=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return A=function(){return e},e}function w(){var e=Object(m.a)(["\n  margin-bottom: -6px;\n  padding: 8px;\n  text-align: center;\n  color: SteelBlue;\n"]);return w=function(){return e},e}function M(){var e=Object(m.a)(["\n  width: 100%;\n"]);return M=function(){return e},e}function J(){var e=Object(m.a)(["\n  margin: 8px;\n  background-color: white;\n  border-radius: 4px;\n  border: 1px solid lightgrey;\n  width: 160px;\n"]);return J=function(){return e},e}var B=f.a.div(J()),R=f.a.div(M()),N=f.a.h5(w()),H=f.a.div(A()),P=f.a.div(D()),L=f.a.div(C(),(function(e){return e.isDraggingOver?"lightblue":"inherit"})),F=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.tasks!==this.props.tasks}},{key:"render",value:function(){var e=this.props,t=e.tasks,a=e.onSelectTaskDay,n=e.member,r=e.onTaskInputChange,o=e.onDeleteTask;return t.map((function(e,t){return u.a.createElement(T,{key:e.id,task:e,index:t,day:e.day,member:n,onSelectTaskDay:a,onTaskInputChange:r,onDeleteTask:o})}))}}]),t}(d.Component),K=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.member,a=e.index,n=e.tasks,r=e.onSelectTaskDay,o=e.onAddTask,c=e.onTaskInputChange,s=e.onSelectMemberDay,l=e.onDeleteTask,i=e.day,m=i;return n.forEach((function(e){m-=e.day})),u.a.createElement(g.b,{draggableId:t,index:a},(function(e){return u.a.createElement(B,Object.assign({},e.draggableProps,{ref:e.innerRef}),u.a.createElement(R,null,u.a.createElement(N,e.dragHandleProps,t),u.a.createElement(H,null,i&&u.a.createElement(v.a,{variant:m<0?"danger":"info"},m," days left"),u.a.createElement(y.a,{onSelect:function(e){s(e,t)}},u.a.createElement(y.a.Toggle,{variant:"outline-secondary",id:"dropdown-basic",size:"sm",className:"day-dropdown-button"},i||"Days"),u.a.createElement(y.a.Menu,null,u.a.createElement(y.a.Item,{eventKey:-1},"Remove"),E.map((function(e){return u.a.createElement(y.a.Item,{key:e,eventKey:e},e)})))))),u.a.createElement(g.c,{droppableId:t,type:"task"},(function(e,a){return u.a.createElement(L,Object.assign({},e.droppableProps,{ref:e.innerRef,isDraggingOver:a.isDraggingOver}),u.a.createElement(F,{tasks:n,onSelectTaskDay:r,member:t,onTaskInputChange:c,onDeleteTask:l}),u.a.createElement(P,null,i&&u.a.createElement(O.a,{variant:"light",size:"sm",className:"add-task-button",onClick:o},"Add Task")),e.placeholder)})))}))}}]),t}(d.Component),U=a(58),Y=a(148),z=a(147),Z=a(143),q=a(144),W=a(65),G=a(66);function Q(){var e=Object(m.a)(["\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  border: 2px solid;\n  text-align: center;\n  margin-left: 8px;\n  color: black;\n  font: 22px Arial;\n  outline: none;\n  :focus {\n    outline: none;\n  }\n  :active {\n    border: 2px solid lightgrey;\n    color: lightgrey;\n  }\n"]);return Q=function(){return e},e}function V(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n  margin: 8px;\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n"]);return V=function(){return e},e}var X=f.a.div(V()),$=f.a.button(Q());function _(e){var t=e.onClickImport,a=e.onSelectTeam,n=e.selectedTeam,r=e.onAddMember,o=Object(d.useState)(!1),c=Object(U.a)(o,2),s=c[0],l=c[1],i=function(){return l(!1)},m=Object(d.useState)(""),b=Object(U.a)(m,2),p=b[0],f=b[1],g=Object(d.useState)(!1),v=Object(U.a)(g,2),E=v[0],j=v[1],S=function(){j(!1),f("")};return u.a.createElement(u.a.Fragment,null,u.a.createElement(Y.a,{bg:"dark",sticky:"top",className:"nav-toolbar"},u.a.createElement(Y.a.Brand,null,"Planning Board"),u.a.createElement(X,null,u.a.createElement(z.a,{placement:"bottom",overlay:u.a.createElement(Z.a,null,"Clean Board")},u.a.createElement($,{onClick:function(){return l(!0)}},u.a.createElement(W.a,null))),u.a.createElement(z.a,{placement:"bottom",overlay:u.a.createElement(Z.a,null,"Export")},u.a.createElement($,{onClick:function(){return function(e,t,a){var n=document.createElement("a"),r=new Blob([e],{type:a});n.href=URL.createObjectURL(r),n.download=t,n.click()}(JSON.stringify(JSON.parse(localStorage.getItem("planningBoard")),null,2),"planning-board.txt","text/plain")}},u.a.createElement(G.a,null))),u.a.createElement(z.a,{placement:"bottom",overlay:u.a.createElement(Z.a,null,"Import .txt")},u.a.createElement($,{onClick:t},u.a.createElement(G.b,null))),n&&u.a.createElement(z.a,{placement:"bottom",overlay:u.a.createElement(Z.a,null,"Add Member")},u.a.createElement($,{onClick:function(){return j(!0)}},u.a.createElement(W.b,null))),u.a.createElement(y.a,{onSelect:function(e){return a(e)}},u.a.createElement(y.a.Toggle,{variant:"info"},n||"Select Team"),u.a.createElement(y.a.Menu,null,k.name.map((function(e){return u.a.createElement(y.a.Item,{key:e,eventKey:e,className:"team-dropdown-item"},e)})))))),u.a.createElement(q.a,{centered:!0,show:E,onHide:S},u.a.createElement(q.a.Header,{closeButton:!0},u.a.createElement(q.a.Title,null,"Add Member")),u.a.createElement(q.a.Body,null,u.a.createElement(h.a.Control,{placeholder:"Enter name",value:p,onChange:function(e){return f(e.target.value)}})),u.a.createElement(q.a.Footer,null,u.a.createElement(O.a,{variant:"secondary",onClick:S},"Cancel"),u.a.createElement(O.a,{variant:"primary",disabled:!p,onClick:function(){r(p),S()}},"Add"))),u.a.createElement(q.a,{centered:!0,show:s,onHide:i},u.a.createElement(q.a.Header,{closeButton:!0},u.a.createElement(q.a.Title,null,"Confirmation")),u.a.createElement(q.a.Body,null,"Are you sure you want to clean this board?"),u.a.createElement(q.a.Footer,null,u.a.createElement(O.a,{variant:"secondary",onClick:i},"Cancel"),u.a.createElement(O.a,{variant:"danger",onClick:function(){i(),localStorage.clear("planningBoard"),window.location.reload()}},"Clean"))))}var ee=function(){return Math.random().toString(36).substring(7)};function te(){var e=Object(m.a)(["\n  display: flex;\n  overflow: auto;\n  margin-right: 8px;\n"]);return te=function(){return e},e}var ae=f.a.div(te()),ne=function(e){function t(){var e,a;Object(o.a)(this,t);for(var c=arguments.length,i=new Array(c),m=0;m<c;m++)i[m]=arguments[m];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state=localStorage.getItem("planningBoard")?JSON.parse(localStorage.getItem("planningBoard")):{selectedTeam:"",memberOrder:[],members:{},tasks:{}},a.onDragEnd=function(e){var t,o=e.destination,c=e.source,s=e.draggableId,l=e.type;if(o&&(o.droppableId!==c.droppableId||o.index!==c.index)){if("member"===l){var i=Array.from(a.state.memberOrder);return i.splice(c.index,1),i.splice(o.index,0,s),void a.setState({memberOrder:i})}var m=a.state.members[c.droppableId],d=a.state.members[o.droppableId];if(m!==d){var u=Array.from(m.taskIds);u.splice(c.index,1);var b=Object(r.a)({},m,{taskIds:u}),p=Array.from(d.taskIds);p.splice(o.index,0,s);var f=Object(r.a)({},d,{taskIds:p}),g=Object(r.a)({},a.state.members,(t={},Object(n.a)(t,b.id,b),Object(n.a)(t,f.id,f),t));a.setState({members:g})}else{var k=a.state.members[c.droppableId],v=Array.from(k.taskIds);v.splice(c.index,1),v.splice(o.index,0,s);var y=Object(r.a)({},k,{taskIds:v}),O=Object(r.a)({},a.state.members,Object(n.a)({},c.droppableId,y));a.setState({members:O})}}},a.onTeamSelect=function(e){var t=k[e].reduce((function(e,t){return e[t]={id:t,day:null,taskIds:[]},e}),{});a.setState({selectedTeam:e,memberOrder:k[e],members:t})},a.onSelectMemberDay=function(e,t,o){var c=ee();if(Number(e)<0){var s=a.state.memberOrder.filter((function(e){return e!==t}));return a.state.members[t].taskIds.forEach((function(e){delete a.state.tasks[e]})),delete a.state.members[t],void a.setState({members:a.state.members,memberOrder:s,tasks:a.state.tasks})}if(o||0!==a.state.members[t].taskIds.length){var l=Object(r.a)({},a.state.members[t],{day:e}),i=Object(r.a)({},a.state.members,Object(n.a)({},t,l));a.setState({members:i})}else a.setState(Object(r.a)({},a.state,{tasks:Object(r.a)({},a.state.tasks,Object(n.a)({},c,{id:c,content:"",day:null})),members:Object(r.a)({},a.state.members,Object(n.a)({},t,Object(r.a)({},a.state.members[t],{day:e,taskIds:[c]})))}))},a.onDeleteTask=function(e,t,o){var c=Array.from(a.state.members[o].taskIds),s=c.indexOf(e);c.splice(s,1),delete a.state.tasks[e],a.setState(Object(r.a)({},a.state,{tasks:a.state.tasks,members:Object(r.a)({},a.state.members,Object(n.a)({},o,Object(r.a)({},a.state.members[o],{taskIds:c})))}))},a.onSelectTaskDay=function(e,t,o){var c=Object(r.a)({},a.state.tasks,Object(n.a)({},e,Object(r.a)({},a.state.tasks[e],{day:t})));a.setState(Object(r.a)({},a.state,{tasks:c}));var s=Object(r.a)({},a.state.members[o]),l=Object(r.a)({},a.state.members,Object(n.a)({},o,s));a.setState({members:l})},a.onAddTask=function(e){var t=Array.from(a.state.members[e].taskIds),o=ee();t.push(o),a.setState(Object(r.a)({},a.state,{tasks:Object(r.a)({},a.state.tasks,Object(n.a)({},o,{id:o,content:"",day:null})),members:Object(r.a)({},a.state.members,Object(n.a)({},e,Object(r.a)({},a.state.members[e],{taskIds:t})))}))},a.onTaskInputChange=function(e,t){var o=Object(r.a)({},a.state.tasks,Object(n.a)({},t,Object(r.a)({},a.state.tasks[t],{content:e})));a.setState(Object(r.a)({},a.state,{tasks:o}))},a.onClickImport=function(){var e=document.createElement("input");e.type="file",e.onchange=a.readImportedTask,e.click()},a.onAddMember=function(e){var t=Array.from(a.state.memberOrder);t.push(e),a.setState({memberOrder:t,members:Object(r.a)({},a.state.members,Object(n.a)({},e,{id:e,day:null,taskIds:[]}))})},a.readImportedTask=function(e){var t=e.target.files[0];if(t.type.match(/text.*/)){var n=new FileReader;n.onload=function(e){var t=e.target.result;a.setState(JSON.parse(t))},n.readAsText(t)}else alert("Unsupported file format")},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.state!==t&&localStorage.setItem("planningBoard",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this,t=this.state,a=t.selectedTeam,n=t.memberOrder,r=t.members,o=t.tasks;return u.a.createElement(u.a.Fragment,null,u.a.createElement(_,{onClickImport:this.onClickImport,onSelectTeam:function(t){return e.onTeamSelect(t)},selectedTeam:a,onAddMember:this.onAddMember}),a&&u.a.createElement(g.a,{onDragEnd:this.onDragEnd},u.a.createElement(g.c,{droppableId:"team-member-list",direction:"horizontal",type:"member"},(function(t){return u.a.createElement(ae,Object.assign({},t.droppableProps,{ref:t.innerRef}),n.map((function(t,n){return u.a.createElement(K,{key:"".concat(a,"-").concat(t),index:n,member:t,onAddTask:function(){return e.onAddTask(t)},day:r[t].day,tasks:r[t].taskIds.map((function(e){return o[e]})),onSelectMemberDay:function(t,a){return e.onSelectMemberDay(t,a,r[a].day)},onSelectTaskDay:function(t,a,n){return e.onSelectTaskDay(t,a,n)},onDeleteTask:function(t,a,n){return e.onDeleteTask(t,a,n)},onTaskInputChange:function(t,a){return e.onTaskInputChange(t,a)}})})),t.placeholder)}))))}}]),t}(d.Component);p.a.render(u.a.createElement(ne,null),document.getElementById("root"))},81:function(e,t,a){},92:function(e,t,a){e.exports=a(140)}},[[92,1,2]]]);
//# sourceMappingURL=main.ca8de28a.chunk.js.map