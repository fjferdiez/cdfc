(this.webpackJsonpcdfc=this.webpackJsonpcdfc||[]).push([[0],{226:function(e,t,a){e.exports=a.p+"static/media/qrcode.d9896c77.jpg"},258:function(e,t,a){e.exports=a(489)},46:function(e,t,a){e.exports=a.p+"static/media/front.a6e616b2.jpg"},489:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(18),u=a.n(r),s=a(9),c=a(10),l=a(12),o=a(11),m=a(504),d=a(496),p=a(101),h=a(15),g={items:[{id:1,name:"welcome",path:"/",isHeader:!1,position:"left",component:"MainPage"},{id:2,name:"aboutUs",path:"/about",isHeader:!1,position:"left",component:"About"},{id:3,name:"media",path:"/media",isHeader:!1,position:"left",component:"Media"},{id:4,name:"concerts",path:"/concerts",isHeader:!1,position:"left",component:"Concerts"},{id:5,name:"contactUs",path:"/contact",isHeader:!1,position:"right",component:"Contact"}]},v=a(505),f=a(246),b=a(144),E=a(97),C=a.n(E),q=a(46),y=a.n(q),O={padding:20,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontSize:"6em"},j=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{id:"main-page"},i.a.createElement(b.Parallax,{bgImage:y.a,strength:1e3,blur:{min:-6,max:10}},i.a.createElement("div",{style:{height:660}},i.a.createElement(v.a,{size:"huge",style:O,inverted:!0,textAlign:"center"},i.a.createElement(v.a.Content,{style:{fontSize:"0.65em",fontWeight:"bold"}},"Chengdu Philharmonic Choir"),i.a.createElement(v.a.Subheader,{style:{fontSize:"0.45em"}},"The voice of Chengdu")))),i.a.createElement(b.Parallax,{bgImage:"https://picsum.photos/1200",strength:1e3,blur:{min:-5,max:10}},i.a.createElement("div",{style:{height:660}},i.a.createElement(f.a,{src:C.a,style:O,size:"big"}))))}}]),a}(n.Component),x=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(j,null))}}]),a}(i.a.Component),S=a(508),w=a(48),k=a(497),D=a(507),I=a(226),N=a.n(I),A=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"SocialMedia"},i.a.createElement(d.a,null,i.a.createElement(f.a,{centered:!0,src:N.a}),i.a.createElement(k.a,{horizontal:!0},"Or follow us in"),i.a.createElement(D.a,{columns:2,centered:!0,doubling:!0,stackable:!0},i.a.createElement(D.a.Column,null,i.a.createElement(v.a,{as:"h4",textAlign:"center",icon:!0},i.a.createElement(w.a,{name:"qq"}),i.a.createElement(v.a.Content,null,"QQ"))),i.a.createElement(D.a.Column,null,i.a.createElement(v.a,{as:"h4",textAlign:"center",icon:!0},i.a.createElement(w.a,{name:"weibo"}),i.a.createElement(v.a.Content,null,"Weibo"))))))}}]),a}(i.a.Component),P={minHeight:"600px",padding:"20px 0"},U=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"Contact",style:P},i.a.createElement(S.a,{vertical:!0},i.a.createElement(d.a,null,i.a.createElement(v.a,{as:"h2",textAlign:"center",icon:!0},i.a.createElement(w.a,{color:"red",name:"handshake outline"}),i.a.createElement(v.a.Content,null,"Contact us!"),i.a.createElement(v.a.Subheader,null,"Got questions? Want to know more? Tell us about it on our WeChat Account!")),i.a.createElement(A,null))))}}]),a}(i.a.Component),H=a(502),V={segment:{padding:"20px"},paragraph:{textAlign:"justify"}},z=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={visible:!0},e.toggleVisibility=function(){return e.setState((function(e){return{visible:!e.visible}}))},e}return Object(c.a)(a,[{key:"organizeGrid",value:function(e,t,a,n){var r=i.a.createElement(D.a.Column,{width:6,verticalAlign:"middle"},i.a.createElement(H.a,{animation:"pulse",duration:"800",visible:this.state.visible},i.a.createElement(f.a,{src:e,size:"big",circular:!0,centered:!0,onMouseEnter:this.toggleVisibility,verticalAlign:"middle"}))),u=i.a.createElement(D.a.Column,{width:10},i.a.createElement(v.a,{as:"h1",align:t},n),a);return"right"===t?i.a.createElement(D.a,{columns:2,stackable:!0,doubling:!0},r,u):i.a.createElement(D.a,{columns:2,stackable:!0,doubling:!0},u,r)}},{key:"render",value:function(){var e=this.props,t=e.bio.text.map((function(e){return i.a.createElement("p",{key:e.id,style:V.paragraph},e.content)})),a=this.organizeGrid(e.bio.image,e.bio.align,t,e.bio.title);return i.a.createElement("div",{className:"Biography",style:V.segment},i.a.createElement(S.a,{vertical:!0},a))}}]),a}(i.a.Component),L=[{id:"bio1",title:"Chengdu Philharmonic Choir",align:"right",image:"https://picsum.photos/550",text:[{id:1,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor purus eu lacus elementum commodo. Quisque auctor tempor ligula ut fringilla. Sed vitae augue sed lacus egestas consectetur. Donec accumsan placerat mauris, ut convallis neque condimentum at. Ut semper orci purus, ac auctor sem feugiat vitae. Sed fermentum diam ut mollis sodales. Sed dignissim purus id nunc scelerisque rhoncus."},{id:2,content:"Integer hendrerit, est porta tempor rhoncus, magna neque consequat massa, sit amet laoreet diam augue quis tortor. Donec congue semper lectus, ut tempor tortor tristique sit amet. Donec lorem tortor, tincidunt ut urna nec, aliquam imperdiet quam. Praesent et posuere metus, a lacinia enim. Cras consectetur orci non metus sodales hendrerit. Nam fermentum purus vitae nibh efficitur, a fermentum ligula viverra. Sed non elit at nulla finibus semper. Vestibulum consectetur aliquet diam at sagittis. Duis facilisis luctus rhoncus. Pellentesque lacinia nulla in elit hendrerit tincidunt. Curabitur ultrices tortor id leo egestas efficitur. Curabitur accumsan malesuada mi, placerat cursus metus rutrum sit amet. Quisque ut elementum magna, vitae sodales elit. Ut dictum libero eget rhoncus molestie."},{id:3,content:"Donec rhoncus lacus ut dolor vestibulum, a interdum purus convallis. Fusce quis placerat turpis, porttitor bibendum nunc. Curabitur tempor neque sit amet nisl pulvinar hendrerit. Cras vulputate condimentum risus, id eleifend justo venenatis in. Sed vel ultrices risus, nec tincidunt erat. Ut vitae sem et augue semper volutpat semper non nisi. Vivamus vitae faucibus leo. Nunc hendrerit tortor nisi."}]},{id:"bio2",title:"Chengdu Philharmonic Children's Choir",align:"left",image:"https://picsum.photos/551",text:[{id:1,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor purus eu lacus elementum commodo. Quisque auctor tempor ligula ut fringilla. Sed vitae augue sed lacus egestas consectetur. Donec accumsan placerat mauris, ut convallis neque condimentum at. Ut semper orci purus, ac auctor sem feugiat vitae. Sed fermentum diam ut mollis sodales. Sed dignissim purus id nunc scelerisque rhoncus."},{id:2,content:"Integer hendrerit, est porta tempor rhoncus, magna neque consequat massa, sit amet laoreet diam augue quis tortor. Donec congue semper lectus, ut tempor tortor tristique sit amet. Donec lorem tortor, tincidunt ut urna nec, aliquam imperdiet quam. Praesent et posuere metus, a lacinia enim. Cras consectetur orci non metus sodales hendrerit. Nam fermentum purus vitae nibh efficitur, a fermentum ligula viverra. Sed non elit at nulla finibus semper. Vestibulum consectetur aliquet diam at sagittis. Duis facilisis luctus rhoncus. Pellentesque lacinia nulla in elit hendrerit tincidunt. Curabitur ultrices tortor id leo egestas efficitur. Curabitur accumsan malesuada mi, placerat cursus metus rutrum sit amet. Quisque ut elementum magna, vitae sodales elit. Ut dictum libero eget rhoncus molestie."},{id:3,content:"Donec rhoncus lacus ut dolor vestibulum, a interdum purus convallis. Fusce quis placerat turpis, porttitor bibendum nunc. Curabitur tempor neque sit amet nisl pulvinar hendrerit. Cras vulputate condimentum risus, id eleifend justo venenatis in. Sed vel ultrices risus, nec tincidunt erat. Ut vitae sem et augue semper volutpat semper non nisi. Vivamus vitae faucibus leo. Nunc hendrerit tortor nisi."}]}],M=a(503),Q=a(501),B=a(506),F=a(499),G=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={active:!1,open:!1},e.handleDimmerShow=function(){return e.setState({active:!0})},e.handleDimmerHide=function(){return e.setState({active:!1})},e.handleModalShow=function(){return e.setState({open:!0})},e.handleModalHide=function(){return e.setState({open:!1})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.bio,t=this.state,a=t.active,n=t.open,r=i.a.createElement("div",null,i.a.createElement(M.a,{basic:!0,inverted:!0,onClick:this.handleModalShow},"See More"));return i.a.createElement("div",{className:"StaffCard"},i.a.createElement(Q.a,{fluid:!0,raised:!0},i.a.createElement(B.a.Dimmable,{as:f.a,dimmed:a,dimmer:{active:a,content:r},onMouseEnter:this.handleDimmerShow,onMouseLeave:this.handleDimmerHide,wrapped:!0,src:e.image}),i.a.createElement(Q.a.Content,null,i.a.createElement(Q.a.Header,null,e.title),i.a.createElement(Q.a.Meta,null,e.tagline),i.a.createElement(Q.a.Description,null,e.teaser))),i.a.createElement(F.a,{closeIcon:!0,open:n,onClose:this.handleModalHide,dimmer:"blurring"},i.a.createElement(F.a.Content,null,i.a.createElement(z,{bio:e}))))}}]),a}(i.a.Component),W=[{id:"st01",title:"\u6731\u66e6",tagline:"conductor",teaser:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",align:"left",image:"https://picsum.photos/400",text:[{id:1,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor purus eu lacus elementum commodo. Quisque auctor tempor ligula ut fringilla. Sed vitae augue sed lacus egestas consectetur. Donec accumsan placerat mauris, ut convallis neque condimentum at. Ut semper orci purus, ac auctor sem feugiat vitae. Sed fermentum diam ut mollis sodales. Sed dignissim purus id nunc scelerisque rhoncus."},{id:2,content:"Integer hendrerit, est porta tempor rhoncus, magna neque consequat massa, sit amet laoreet diam augue quis tortor. Donec congue semper lectus, ut tempor tortor tristique sit amet. Donec lorem tortor, tincidunt ut urna nec, aliquam imperdiet quam. Praesent et posuere metus, a lacinia enim. Cras consectetur orci non metus sodales hendrerit. Nam fermentum purus vitae nibh efficitur, a fermentum ligula viverra. Sed non elit at nulla finibus semper. Vestibulum consectetur aliquet diam at sagittis. Duis facilisis luctus rhoncus. Pellentesque lacinia nulla in elit hendrerit tincidunt. Curabitur ultrices tortor id leo egestas efficitur. Curabitur accumsan malesuada mi, placerat cursus metus rutrum sit amet. Quisque ut elementum magna, vitae sodales elit. Ut dictum libero eget rhoncus molestie."},{id:3,content:"Donec rhoncus lacus ut dolor vestibulum, a interdum purus convallis. Fusce quis placerat turpis, porttitor bibendum nunc. Curabitur tempor neque sit amet nisl pulvinar hendrerit. Cras vulputate condimentum risus, id eleifend justo venenatis in. Sed vel ultrices risus, nec tincidunt erat. Ut vitae sem et augue semper volutpat semper non nisi. Vivamus vitae faucibus leo. Nunc hendrerit tortor nisi."}]},{id:"st02",title:"\u5218\u6ce2",tagline:"Assistant Conductor",teaser:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",align:"left",image:"https://picsum.photos/401",text:[{id:1,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor purus eu lacus elementum commodo. Quisque auctor tempor ligula ut fringilla. Sed vitae augue sed lacus egestas consectetur. Donec accumsan placerat mauris, ut convallis neque condimentum at. Ut semper orci purus, ac auctor sem feugiat vitae. Sed fermentum diam ut mollis sodales. Sed dignissim purus id nunc scelerisque rhoncus."},{id:2,content:"Integer hendrerit, est porta tempor rhoncus, magna neque consequat massa, sit amet laoreet diam augue quis tortor. Donec congue semper lectus, ut tempor tortor tristique sit amet. Donec lorem tortor, tincidunt ut urna nec, aliquam imperdiet quam. Praesent et posuere metus, a lacinia enim. Cras consectetur orci non metus sodales hendrerit. Nam fermentum purus vitae nibh efficitur, a fermentum ligula viverra. Sed non elit at nulla finibus semper. Vestibulum consectetur aliquet diam at sagittis. Duis facilisis luctus rhoncus. Pellentesque lacinia nulla in elit hendrerit tincidunt. Curabitur ultrices tortor id leo egestas efficitur. Curabitur accumsan malesuada mi, placerat cursus metus rutrum sit amet. Quisque ut elementum magna, vitae sodales elit. Ut dictum libero eget rhoncus molestie."},{id:3,content:"Donec rhoncus lacus ut dolor vestibulum, a interdum purus convallis. Fusce quis placerat turpis, porttitor bibendum nunc. Curabitur tempor neque sit amet nisl pulvinar hendrerit. Cras vulputate condimentum risus, id eleifend justo venenatis in. Sed vel ultrices risus, nec tincidunt erat. Ut vitae sem et augue semper volutpat semper non nisi. Vivamus vitae faucibus leo. Nunc hendrerit tortor nisi."}]},{id:"st03",title:"\u674e\u9752",tagline:"Assistant Conductor",teaser:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",align:"left",image:"https://picsum.photos/402",text:[{id:1,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor purus eu lacus elementum commodo. Quisque auctor tempor ligula ut fringilla. Sed vitae augue sed lacus egestas consectetur. Donec accumsan placerat mauris, ut convallis neque condimentum at. Ut semper orci purus, ac auctor sem feugiat vitae. Sed fermentum diam ut mollis sodales. Sed dignissim purus id nunc scelerisque rhoncus."},{id:2,content:"Integer hendrerit, est porta tempor rhoncus, magna neque consequat massa, sit amet laoreet diam augue quis tortor. Donec congue semper lectus, ut tempor tortor tristique sit amet. Donec lorem tortor, tincidunt ut urna nec, aliquam imperdiet quam. Praesent et posuere metus, a lacinia enim. Cras consectetur orci non metus sodales hendrerit. Nam fermentum purus vitae nibh efficitur, a fermentum ligula viverra. Sed non elit at nulla finibus semper. Vestibulum consectetur aliquet diam at sagittis. Duis facilisis luctus rhoncus. Pellentesque lacinia nulla in elit hendrerit tincidunt. Curabitur ultrices tortor id leo egestas efficitur. Curabitur accumsan malesuada mi, placerat cursus metus rutrum sit amet. Quisque ut elementum magna, vitae sodales elit. Ut dictum libero eget rhoncus molestie."},{id:3,content:"Donec rhoncus lacus ut dolor vestibulum, a interdum purus convallis. Fusce quis placerat turpis, porttitor bibendum nunc. Curabitur tempor neque sit amet nisl pulvinar hendrerit. Cras vulputate condimentum risus, id eleifend justo venenatis in. Sed vel ultrices risus, nec tincidunt erat. Ut vitae sem et augue semper volutpat semper non nisi. Vivamus vitae faucibus leo. Nunc hendrerit tortor nisi."}]}],J=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).style={padding:"30px 0"},e}return Object(c.a)(a,[{key:"render",value:function(){var e=W.map((function(e){return i.a.createElement(D.a.Column,{key:e.id},i.a.createElement(G,{bio:e}))}));return i.a.createElement("div",{className:"staffGrid",style:this.style},i.a.createElement(D.a,{columns:3,centered:!0,doubling:!0,stackable:!0},e))}}]),a}(i.a.Component),T={minHeight:"600px",padding:"20px 0"},R=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=L.map((function(e){return i.a.createElement(z,{key:e.id,bio:e})}));return i.a.createElement("div",{className:"About",style:T},i.a.createElement(d.a,null,e,i.a.createElement(k.a,{horizontal:!0},"Our Conductors"),i.a.createElement(J,null)))}}]),a}(i.a.Component),Y=a(498),K=[{id:"video1",title:"\u5409\u7965\u9633\u5149",placeholder:y.a,iframe:{allowFullScreen:!0,frameBorder:"0",src:"https://v.qq.com/txp/iframe/player.html?vid=m30567gfn0i"}},{id:"video2",title:"\u5ff5\u5974\u5a07\u8ffd\u601d\u7126\u88d5\u7984",placeholder:y.a,iframe:{allowFullScreen:!0,frameBorder:"0",src:"https://v.qq.com/txp/iframe/player.html?vid=x3051s0ipy1"}},{id:"video3",title:"\u51af\u516c\u8ba9 - \u7eff\u8863",placeholder:y.a,iframe:{allowFullScreen:!0,frameBorder:"0",src:"https://v.qq.com/txp/iframe/player.html?vid=d30520lcmyv"}},{id:"video4",title:"Sing a new song",placeholder:y.a,iframe:{allowFullScreen:!0,frameBorder:"0",src:"https://v.qq.com/txp/iframe/player.html?vid=c31117mt9ws"}}],$=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=K.map((function(e){return i.a.createElement(D.a.Column,{key:e.id},i.a.createElement(Y.a,{icon:"right circle arrow",placeholder:e.placeholder,iframe:e.iframe,source:"vimeo"}),i.a.createElement(v.a,{size:"medium"},e.title))}));return i.a.createElement("div",{className:"videoGallery"},i.a.createElement(v.a,{size:"medium"},i.a.createElement(w.a,{name:"film"}),i.a.createElement(v.a.Content,null,"Video Gallery"),i.a.createElement(v.a.Subheader,null,"Watch our selected performances")),i.a.createElement(D.a,{columns:2,doubling:!0,stackable:!0},e))}}]),a}(i.a.Component),_=a(151),X=a(240),Z=a(102),ee=[{src:"https://source.unsplash.com/2ShvY8Lf6l0/800x599",title:"test",width:4,height:3},{src:"https://source.unsplash.com/Dm-qxdynoEc/800x799",width:1,height:1},{src:"https://source.unsplash.com/qDkso9nvCg0/600x799",width:3,height:4},{src:"https://source.unsplash.com/iecJiKe_RNg/600x799",width:3,height:4},{src:"https://source.unsplash.com/epcsn8Ed8kY/600x799",width:3,height:4},{src:"https://source.unsplash.com/NQSWvyVRIJk/800x599",width:4,height:3},{src:"https://source.unsplash.com/zh7GEuORbUw/600x799",width:3,height:4},{src:"https://source.unsplash.com/PpOHJezOalU/800x599",width:4,height:3},{src:"https://source.unsplash.com/I1ASdgphUH4/800x599",width:4,height:3}],te={padding:"30px 0"},ae=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={currentImage:0,viewerIsOpen:!1},e.openLightBox=function(t,a){a.photo;var n=a.index;e.setCurrentImage(n),e.setViewerIsOpen(!0)},e.closeLightBox=function(){e.setCurrentImage(0),e.setViewerIsOpen(!1)},e}return Object(c.a)(a,[{key:"setCurrentImage",value:function(e){this.setState({currentImage:e})}},{key:"setViewerIsOpen",value:function(e){this.setState({viewerIsOpen:e})}},{key:"render",value:function(){var e=this.state,t=e.viewerIsOpen,a=e.currentImage;return i.a.createElement("div",{className:"PhotoGallery",style:te},i.a.createElement(v.a,{size:"medium"},i.a.createElement(w.a,{name:"image outline"}),i.a.createElement(v.a.Content,null,"Photo Gallery"),i.a.createElement(v.a.Subheader,null,"Our history in images")),i.a.createElement(X.a,{photos:ee,onClick:this.openLightBox}),i.a.createElement(Z.b,null,t?i.a.createElement(Z.a,{onClose:this.closeLightBox},i.a.createElement(Z.c,{currentIndex:a,views:ee.map((function(e){return Object(_.a)(Object(_.a)({},e),{},{srcset:e.srcSet,caption:e.title})}))})):null))}}]),a}(i.a.Component),ne={minHeight:"600px"},ie=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"Contact",style:ne},i.a.createElement(S.a,{vertical:!0},i.a.createElement(d.a,null,i.a.createElement(ae,null),i.a.createElement($,null))))}}]),a}(i.a.Component),re={minHeight:"600px"},ue=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"Contact",style:re},i.a.createElement(S.a,{vertical:!0},i.a.createElement(d.a,null,i.a.createElement("h1",null,"This is the Concerts Page"))))}}]),a}(i.a.Component),se=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={activeItem:"welcome"},e.handleItemClick=function(t,a){var n=a.name;e.setState({activeItem:n})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.activeItem,t=this,a=g.items.map((function(a){return i.a.createElement(m.a.Item,{name:a.name,key:a.id,as:p.b,to:a.path,active:e===a.name,header:a.isHeader,onClick:t.handleItemClick,position:"right"===a.position?"right":"left"})}));return i.a.createElement("div",{id:"main-menu",style:{paddingTop:"20px"}},i.a.createElement(p.a,null,i.a.createElement(d.a,null,i.a.createElement(m.a,{pointing:!0,secondary:!0,stackable:!0,size:"massive"},i.a.createElement(m.a.Item,{position:"left",name:"welcome",header:!0,as:p.b,to:"/",onClick:t.handleItemClick},i.a.createElement("img",{src:C.a,style:{width:"220px"},alt:"Chengdu Philharmonic Choir Logo"})),a)),i.a.createElement(h.c,null,i.a.createElement(h.a,{path:"/contact",exact:!0,component:U}),i.a.createElement(h.a,{path:"/about",exact:!0,component:R}),i.a.createElement(h.a,{path:"/media",exact:!0,component:ie}),i.a.createElement(h.a,{path:"/concerts",exact:!0,component:ue}),i.a.createElement(h.a,{path:"/",component:x}))))}}]),a}(n.Component),ce={items:[{id:"f1",type:"h4",textAlign:"center",content:"About"},{id:"f2",type:"h4",textAlign:"center",content:"Media"},{id:"f3",type:"h4",textAlign:"center",content:"Concerts"},{id:"f4",type:"h4",textAlign:"center",content:"Contact Us"}]},le={minHeight:"100px",padding:"30px 0"},oe=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=ce.items.map((function(e){return i.a.createElement(D.a.Column,{key:e.id},i.a.createElement(v.a,{inverted:!0,key:e.id,as:e.type,content:e.content,textAlign:e.textAlign}))}));return i.a.createElement("div",{id:"footer"},i.a.createElement(S.a,{vertical:!0,inverted:!0,style:le},i.a.createElement(d.a,null,i.a.createElement(D.a,{columns:e.length,divided:!0,inverted:!0},i.a.createElement(D.a.Row,null,e)),i.a.createElement(v.a,{inverted:!0,as:"h6",content:"This will be the place for ICP",textAlign:"center"}))))}}]),a}(n.Component);var me=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(se,null),i.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(488);u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,a){e.exports=a.p+"static/media/logo.62337217.png"}},[[258,1,2]]]);
//# sourceMappingURL=main.b5749dcb.chunk.js.map