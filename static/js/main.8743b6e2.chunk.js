(this["webpackJsonpclick-it-up"]=this["webpackJsonpclick-it-up"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),o=(a(13),a(1)),s=a(2),l=a(4),m=a(3),g=a(5),u=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.fighter,t=e.id,a=e.image,n=e.name;return r.a.createElement("span",null,r.a.createElement("img",{className:"fighter",src:a,id:t,alt:n,style:p,onClick:this.props.onClick.bind(this,t)}))}}]),t}(r.a.Component),p={padding:"5px",cursor:"pointer",width:"400px",border:"solid"},h=u,d=(a(14),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e}(this.props.fighters);return r.a.createElement("div",{className:"fighter-box"},t.map((function(t){return r.a.createElement(h,{key:t.id,fighter:t,alt:t.name,onClick:e.props.onClick})})))}}]),t}(r.a.Component)),f=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark mb-1"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("h1",{style:k},"Smash That Clicky!")),r.a.createElement("a",{href:"https://www.smashbros.com/en_US/index.html"},r.a.createElement("img",{src:"./images/pngkey.com-smash-bros-logo-png-2256701.png",alt:"Super Smash Bros Logo",width:"10%",style:{cursor:"pointer",float:"right"}})))}}]),t}(r.a.Component),k={background:"#333",color:"#fff",textAlign:"center",padding:"10px",textDecoration:"underline",float:"left"},b=f;var S=function(){return r.a.createElement("div",{className:"jumbotron-fluid mb-3"},r.a.createElement("img",{src:"./images/989175.jpg",height:"5%",width:"100%",alt:"Super Smash Bros Logo"}))},j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement("span",{className:"score mx-1"},"Score: ",this.props.score)," |",r.a.createElement("span",{className:"top-score mx-1"},"Top Score: ",this.props.topScore)))}}]),t}(r.a.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={score:0,topScore:0,fighters:[{id:1,name:"mario",image:"./images/mario.png",clicked:!1},{id:2,name:"luigi",image:"./images/luigi.png",clicked:!1},{id:3,name:"pikachu",image:"./images/pikachu.png",clicked:!1},{id:4,name:"samus",image:"./images/samus.png",clicked:!1},{id:5,name:"captain_falcon",image:"./images/captain_falcon.png",clicked:!1},{id:6,name:"fox",image:"./images/fox.png",clicked:!1},{id:7,name:"donkey_kong",image:"./images/donkey_kong.png",clicked:!1},{id:8,name:"bowser",image:"./images/bowser.png",clicked:!1},{id:9,name:"sheik",image:"./images/sheik.png",clicked:!1},{id:10,name:"link",image:"./images/link.png",clicked:!1},{id:11,name:"ganondorf",image:"./images/ganondorf.png",clicked:!1},{id:12,name:"wario",image:"./images/wario.png",clicked:!1}]},a.onClick=function(e){a.setState({fighters:a.state.fighters.map((function(t){return t.id===e&&a.checkFighter(t),t}))})},a.checkFighter=function(e){!0===e.clicked?(alert("You have been DEFEATED"),a.setState({fighters:a.state.fighters.map((function(e){return e.clicked=!1,e}))}),a.resetScore(),a.checkScore(a.state.score,a.state.topScore)):(e.clicked=!0,a.incrementScore())},a.incrementScore=function(){a.setState({score:a.state.score+1})},a.resetScore=function(){a.setState({score:0})},a.checkScore=function(e,t){e>t?a.setState({topScore:e}):12===e&&alert("VICTORY!")},a.resetGame=function(e){e&&(a.setState({clicked:!1}),alert("You won!"),a.resetScore())},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{topScore:this.state.topScore}),r.a.createElement(S,null),r.a.createElement(j,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement(d,{fighters:this.state.fighters,onClick:this.onClick}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8743b6e2.chunk.js.map