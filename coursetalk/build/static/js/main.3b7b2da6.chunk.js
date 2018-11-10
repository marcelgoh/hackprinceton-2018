(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),o=n.n(s),i=n(2),c=n(3),u=n(5),l=n(4),m=n(6),h=n(1),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={username:""},n.onSubmit=n.onSubmit.bind(Object(h.a)(Object(h.a)(n))),n.onChange=n.onChange.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.username)}},{key:"onChange",value:function(e){this.setState({username:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"What is your username?"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",placeholder:"Your full name",onChange:this.onChange}),r.a.createElement("input",{type:"submit"}))))}}]),t}(a.Component),d=n(10),p=n(7),f=n.n(p),g=n(11),O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={container:{overflowY:"scroll",flex:1},ul:{listStyle:"none"},li:{marginTop:13,marginBottom:13},senderUsername:{fontWeight:"bold"},message:{fontSize:15}};return r.a.createElement("div",{style:Object(g.a)({},this.props.style,e.container)},r.a.createElement("ul",{style:e.ul},this.props.messages.map(function(t,n){return r.a.createElement("li",{key:n,style:e.li},r.a.createElement("div",null,r.a.createElement("span",{style:e.senderUsername},t.senderId)," "),r.a.createElement("p",{style:e.message},t.text))})))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={text:""},n.onSubmit=n.onSubmit.bind(Object(h.a)(Object(h.a)(n))),n.onChange=n.onChange.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.text),this.setState({text:""})}},{key:"onChange",value:function(e){this.setState({text:e.target.value}),this.props.onChange&&this.props.onChange()}},{key:"render",value:function(){var e={container:{padding:20,borderTop:"1px #4C758F solid",marginBottom:20},form:{display:"flex"},input:{color:"inherit",background:"none",outline:"none",border:"none",flex:1,fontSize:16}};return r.a.createElement("div",{style:e.container},r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit,style:e.form},r.a.createElement("input",{type:"text",placeholder:"Type a message here then press ENTER",onChange:this.onChange,value:this.state.text,style:e.input}))))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={currentUser:{},currentRoom:{},messages:[]},n.sendMessage=n.sendMessage.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"sendMessage",value:function(e){this.state.currentUser.sendMessage({text:e,roomId:this.state.currentRoom.id})}},{key:"componentDidMount",value:function(){var e=this;new f.a.ChatManager({instanceLocator:"v1:us1:3b31d86f-e2f8-4671-92e2-3a0e2d460298",userId:this.props.currentUsername,tokenProvider:new f.a.TokenProvider({url:"http://localhost:3001/authenticate"})}).connect().then(function(t){return e.setState({currentUser:t}),t.subscribeToRoom({roomId:"19379093",messageLimit:100,hooks:{onMessage:function(t){e.setState({messages:Object(d.a)(e.state.messages).concat([t])})}}})}).then(function(t){e.setState({currentRoom:t})}).catch(function(e){return console.error("error",e)})}},{key:"render",value:function(){var e={container:{height:"100vh",display:"flex",flexDirection:"column"},chatContainer:{display:"flex",flex:1},whosOnlineListContainer:{width:"300px",flex:"none",padding:20,backgroundColor:"#2c303b",color:"white"},chatListContainer:{padding:20,width:"85%",display:"flex",flexDirection:"column"}};return r.a.createElement("div",{style:e.container},r.a.createElement("div",{style:e.chatContainer},r.a.createElement("aside",{style:e.whosOnlineListContainer},r.a.createElement("h2",null,"Who's online PLACEHOLDER")),r.a.createElement("section",{style:e.chatListContainer},r.a.createElement(O,{messages:this.state.messages,style:e.chatList}),r.a.createElement(y,{onSubmit:this.sendMessage}))))}}]),t}(a.Component),j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={currentUsername:"",currentScreen:"WhatIsYourUsernameScreen"},e.onUsernameSubmitted=e.onUsernameSubmitted.bind(Object(h.a)(Object(h.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onUsernameSubmitted",value:function(e){var t=this;fetch("http://localhost:3001/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e})}).then(function(n){t.setState({currentUsername:e,currentScreen:"ChatScreen"})}).catch(function(e){return console.error("error",e)})}},{key:"render",value:function(){return console.log(this.state.currentScreen),"WhatIsYourUsernameScreen"===this.state.currentScreen?r.a.createElement(b,{onSubmit:this.onUsernameSubmitted}):"ChatScreen"===this.state.currentScreen?r.a.createElement(v,{currentUsername:this.state.currentUsername}):void 0}}]),t}(a.Component);n(18);o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[12,2,1]]]);
//# sourceMappingURL=main.3b7b2da6.chunk.js.map