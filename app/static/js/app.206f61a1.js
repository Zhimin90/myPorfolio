(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),i=s.n(a);i.a},"08db":function(t,e,s){t.exports=s.p+"../static/img/firebase-logo.627ffff2.png"},"2b8c":function(t,e,s){t.exports=s.p+"../static/img/node-logo.9100f2eb.png"},"2c09":function(t,e){t.exports="data:image/png;base64,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"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1"}}),s("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/home"}},[t._v(" Zhimin Zou")]),s("a",{staticClass:"navbar-burger burger",class:{"is-active":t.showNav},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.showNav=!t.showNav}}},[s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}})])],1),s("div",{staticClass:"navbar-menu",class:{"is-active":t.showNav},attrs:{id:"navbarBasicExample"}},[s("div",{staticClass:"navbar-start"}),s("div",{staticClass:"navbar-end"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/home"}},[t._v(" Home ")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v(" About ")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/projects"}},[t._v(" Projects ")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/contact"}},[t._v(" Contact ")])],1)])]),s("router-view"),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"content has-text-centered"},[s("p",[t._v(" Built by Zhimin Zou with Vue.js, Bulma, and Airtable. ")])])])}],r={name:"App",data:function(){return{showNav:!1}}},o=r,c=(s("034f"),s("b184"),s("2877")),l=Object(c["a"])(o,i,n,!1,null,null,null),u=l.exports,d=s("8c4f"),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hero-home is-cover is-relative is-fullheight-with-navbar is-primary"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-1"},[t._v("Hello, I'm Zhimin.")]),a("h2",{staticClass:"subtitle is-3"},[t._v("A technical focused Data Scientist with a Electrical Engineering background")])])])]),a("img",{staticStyle:{"-webkit-user-select":"none",margin:"auto"},attrs:{src:s("c575")}})])}],f={name:"home"},v=f,p=Object(c["a"])(v,m,h,!1,null,null,null),g=p.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._m(1),t._m(2),t._m(3),s("section",{staticClass:"section has-background-light"},[s("h2",{staticClass:"title is-3 has-text-weight-medium has-text-centered"},[t._v(" What Drives Me ")]),s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-half content"},[s("ul",[s("li",[s("Strong",[t._v("Driven, seasoned and dedicated Software Engineer with an automation software and web development background. Skilled with multiple programming languages and digital design tools for product development. Led multiple large-scale projects successfully from solution development to on site commissioning. A strong interest in ML and Data Analytics. Looking to take on exciting challenges in the world of Data Science and Machine Learning.")]),t._v(" As the sole developer at Knotty Tie Co, my drive to learn is what has made me successful.")],1)])])])])])])},B=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-medium is-primary is-bold"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title is-2"},[t._v(" My Objective ")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("h2",{staticClass:"title is-3 has-text-weight-medium has-text-centered"},[t._v(" What I Bring ")]),s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("h3",{staticClass:"title is-4 has-text-weight-medium"},[t._v(" Front End Focus ")]),s("p",[t._v(" Focused on building user interfaces with JS (Vue, Angular, ES6), HTML, and CSS (Sass) that are well designed and functional. ")])])]),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("h3",{staticClass:"title is-4 has-text-weight-medium"},[t._v(" Full Stack Experience ")]),s("p",[t._v(" Experience working across the application stack using APIs, Node, Mongo, and Firebase and Heroku to deliver production applications from design to deployment. ")])])]),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("h3",{staticClass:"title is-4 has-text-weight-medium"},[t._v(" Broad Business Exposure ")]),s("p",[t._v(" 6 years of startup experience as a co-founder of Knotty Tie Co. Managed and contributed to development, UX, marketing, service, and operations. ")])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section has-background-light"},[s("h2",{staticClass:"title is-3 has-text-weight-medium has-text-centered"},[t._v(" Where I Come From ")]),s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-four-fifths"},[s("p",[t._v(" In 2013, I co-founded Knotty Tie Co, a custom tie manufacturer built from the ground up to employ resettling refugees. I built technology and processes for design, sales, service, marketing, and manufacturing that helped us put nearly 100,000 products in our customers' hands and spurred growth to 23 employees and $1.6 million in annual revenue. ")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("h2",{staticClass:"title is-3 has-text-weight-medium has-text-centered"},[t._v(" Technologies I've Worked With ")]),a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-one-fifth"},[a("div",{staticClass:"box"},[a("figure",{staticClass:"image is-square"},[a("img",{attrs:{src:s("2c09"),alt:"Placeholder image"}})]),a("h3",{staticClass:"tech-box-title title is-4 has-text-weight-medium has-text-centered"},[t._v(" Vue.js ")]),a("p",[t._v(" Full production applications written in Vue ")])])]),a("div",{staticClass:"column is-one-fifth"},[a("div",{staticClass:"box"},[a("figure",{staticClass:"image is-square"},[a("img",{attrs:{src:s("c0fe"),alt:"Placeholder image"}})]),a("h3",{staticClass:"tech-box-title title is-4 has-text-weight-medium has-text-centered"},[t._v(" JavaScript ")]),a("p",[t._v(" Proficient in ES6 and ES5 JS ")])])]),a("div",{staticClass:"column is-one-fifth"},[a("div",{staticClass:"box"},[a("figure",{staticClass:"image is-square"},[a("img",{attrs:{src:s("2b8c"),alt:"Placeholder image"}})]),a("h3",{staticClass:"tech-box-title title is-4 has-text-weight-medium has-text-centered"},[t._v(" Node.js ")]),a("p",[t._v(" Back-ends written using Node and Express ")])])]),a("div",{staticClass:"column is-one-fifth"},[a("div",{staticClass:"box"},[a("figure",{staticClass:"image is-square"},[a("img",{attrs:{src:s("08db"),alt:"Placeholder image"}})]),a("h3",{staticClass:"tech-box-title title is-4 has-text-weight-medium has-text-centered"},[t._v(" Firebase ")]),a("p",[t._v(" Apps using Cloud Firestore and Cloud Storage ")])])])]),a("p",{staticClass:"tech-box-title title is-4 has-text-weight-light has-text-centered"},[t._v("Web API's • Mongodb • Angular • Ruby On Rails • Postgresql")])])])}],C={name:"about"},w=C,A=(s("e76e"),Object(c["a"])(w,b,B,!1,null,null,null)),x=A.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"hero is-medium is-primary is-bold"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title is-2"},[t._v(" Get In Touch ")])])])]),s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"box"},[s("h3",{staticClass:"is-size-4 has-text-weight-medium"},[t._v(" Email ")]),s("p",[s("a",{attrs:{href:"mailto:mark@hellomark.dev"}},[t._v("mark@hellomark.dev")])]),s("h3",{staticClass:"is-size-4 has-text-weight-medium"},[t._v(" Twitter ")]),s("p",[s("a",{attrs:{href:"https://twitter.com/MarkJohnson303"}},[t._v("@markjohnson303")])]),s("h3",{staticClass:"is-size-4 has-text-weight-medium"},[t._v(" Github ")]),s("p",[s("a",{attrs:{href:"https://github.com/markjohnson303"}},[t._v("github.com/markjohnson303")])])])])])])])])}],G={name:"contact"},j=G,M=Object(c["a"])(j,I,N,!1,null,null,null),_=M.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("section",{staticClass:"section"},[s("div",{staticClass:"container is-fluid"},[s("div",{staticClass:"columns is-multiline"},t._l(t.projects,(function(e){return s("div",{key:e.slug,staticClass:"column is-one-third"},[s("post-card",t._b({},"post-card",e,!1),[t._v("test")])],1)})),0)])])])},Y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-medium is-primary is-bold"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title is-2"},[t._v(" Projects that I have built ")])])])])}],W=(s("96cf"),s("1da1")),y=s("bc3a"),k=s.n(y),X="http://127.0.0.1:5000/airtable_api",F=k.a.create({baseURL:X}),O={getProjects:function(){return F.get()},getProject:function(t){return F.get(X+"?filterByFormula={Slug}='"+t+"'")}},S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-card"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image is-square"},[s("img",{attrs:{src:t.image,alt:"Placeholder image"}})])]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(t.title))]),s("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.date))])])]),s("div",{staticClass:"content"},[s("p",[t._v(t._s(t.snippet))]),s("router-link",{staticClass:"button is-fullwidth",attrs:{to:"/project/"+t.slug}},[t._v("View Project")])],1)])])])},z=[],V={name:"PostCard",props:{title:String,date:String,snippet:String,image:String,slug:String}},T=V,Z=Object(c["a"])(T,S,z,!1,null,null,null),E=Z.exports,R={name:"projects",components:{PostCard:E},data:function(){return{airtableResponse:[]}},mounted:function(){var t=this;function e(){return s.apply(this,arguments)}function s(){return s=Object(W["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getProjects();case 3:s=e.sent,t.airtableResponse=s.data.records,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),s.apply(this,arguments)}e()},computed:{projects:function(){for(var t=this,e=[],s=0;s<t.airtableResponse.length;s++)if(t.airtableResponse[s].fields.Published){var a={title:t.airtableResponse[s].fields.Title,date:t.airtableResponse[s].fields["Date Published"],snippet:t.airtableResponse[s].fields.Excerpt,image:t.airtableResponse[s].fields.Image[0].url,slug:t.airtableResponse[s].fields.slug};e.push(a)}return e}}},H=R,D=Object(c["a"])(H,P,Y,!1,null,null,null),J=D.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"hero is-medium is-primary is-bold"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title is-2"},[t._v(" "+t._s(t.project.title)+" ")]),s("h2",{staticClass:"subtitle is-4"},[t._v(" "+t._s(t.project.snippet)+" ")])])])]),s("section",{staticClass:"section"},[s("div",{staticClass:"container is-fluid"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-two-thirds"},[s("vue-simple-markdown",{attrs:{source:t.project.body}})],1),s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"columns is-multiline"},t._l(t.project.images,(function(t){return s("div",{key:t.url,staticClass:"column is-full"},[s("img",{attrs:{src:t.url}})])})),0)])])])])])},Q=[],U={name:"project",data:function(){return{airtableResponse:[]}},mounted:function(){var t=this;function e(){return s.apply(this,arguments)}function s(){return s=Object(W["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getProject(t.$route.params.slug);case 3:s=e.sent,console.log(s),t.airtableResponse=s.data.records,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),s.apply(this,arguments)}e()},computed:{project:function(){var t=this;if(t.airtableResponse[0]){var e={title:t.airtableResponse[0].fields.Title,snippet:t.airtableResponse[0].fields.Excerpt,images:t.airtableResponse[0].fields.Image,body:t.airtableResponse[0].fields.Body};return e}return 0}}},q=U,K=Object(c["a"])(q,L,Q,!1,null,null,null),$=K.exports;a["a"].use(d["a"]);var tt=new d["a"]({mode:"history",base:"",routes:[{path:"/home",name:"home",component:g},{path:"/about",name:"about",component:x},{path:"/contact",name:"contact",component:_},{path:"/projects",name:"projects",component:J},{path:"/project/:slug",name:"project",component:$}]}),et=s("7602"),st=s.n(et);s("0ae1");a["a"].use(st.a),a["a"].config.productionTip=!1,new a["a"]({router:tt,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,s){},"91aa":function(t,e,s){},b184:function(t,e,s){"use strict";var a=s("fca8"),i=s.n(a);i.a},c0fe:function(t,e,s){t.exports=s.p+"../static/img/js-logo.e8c27f6b.png"},c575:function(t,e,s){t.exports=s.p+"../static/img/wallpaper.9f5c7bbe.jpg"},e76e:function(t,e,s){"use strict";var a=s("91aa"),i=s.n(a);i.a},fca8:function(t,e,s){}});
//# sourceMappingURL=app.206f61a1.js.map