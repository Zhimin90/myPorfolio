(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1"}}),s("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/home"}},[t._v(" Zhimin Zou")]),s("a",{staticClass:"navbar-burger burger",class:{"is-active":t.showNav},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.showNav=!t.showNav}}},[s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}})])],1),s("div",{staticClass:"navbar-menu",class:{"is-active":t.showNav},attrs:{id:"navbarBasicExample"}},[s("div",{staticClass:"navbar-start"}),s("div",{staticClass:"navbar-end"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/home"}},[t._v(" Home ")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v(" About ")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/projects"}},[t._v(" Projects ")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/contact"}},[t._v(" Contact ")])],1)])]),s("router-view"),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"content has-text-centered"},[s("p",[t._v(" Built by Zhimin Zou with Vue.js, Bulma, and Airtable. ")])])])}],r={name:"App",data:function(){return{showNav:!1}}},o=r,c=(s("034f"),s("b184"),s("2877")),l=Object(c["a"])(o,i,n,!1,null,null,null),u=l.exports,d=s("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hero-home is-cover is-relative is-fullheight-with-navbar is-primary"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-1"},[t._v("Hello, I'm Zhimin.")]),a("h2",{staticClass:"subtitle is-3"},[t._v("A technical focused Data Scientist with a Full Stack Experience and Electrical Engineering background")])])])]),a("div",{staticClass:"card-content is-flex is-horizontal-center"},[a("img",{staticStyle:{"-webkit-user-select":"none",margin:"auto"},attrs:{src:s("c575")}})])])}],v={name:"home"},h=v,f=Object(c["a"])(h,p,m,!1,null,null,null),b=f.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._m(1),s("section",{staticClass:"section has-background-light"},[s("h2",{staticClass:"title is-3 has-text-weight-medium has-text-centered"},[t._v(" Objective ")]),s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-half content"},[s("p",[s("Strong",[t._v("Driven, seasoned and dedicated Software Engineer with an automation software and web development background. Skilled with multiple programming languages and digital design tools for product development. Led multiple large-scale projects successfully from solution development to on site commissioning. A strong interest in ML and Data Analytics. Looking to take on exciting challenges in the world of Data Science and Machine Learning.")])],1)])])])])])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-medium is-primary is-bold"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title is-2"},[t._v(" About Me ")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("h2",{staticClass:"title is-3 has-text-weight-medium has-text-centered"},[t._v(" My Experience ")]),s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("h3",{staticClass:"title is-4 has-text-weight-medium"},[t._v(" Advanced Data Analytics ")]),s("p",[t._v(" Proficient in various data analysis tools such as Python, R, SQL, SAS, and SASS ")])])]),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("h3",{staticClass:"title is-4 has-text-weight-medium"},[t._v(" Full Stack Experience ")]),s("p",[t._v(" Experience working across the application stack using APIs, Django, Flask, React, Angular, Vue, Postgres, Oracle, Microsoft SQL, PostGIS, AWS S3 and EC2, and Heroku to deliver production applications from design to deployment. ")])])]),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("h3",{staticClass:"title is-4 has-text-weight-medium"},[t._v(" Project Engineering ")]),s("p",[t._v(" 4 Years of project engineering experience at Emerson Automation Solutions. Managing technical documentations to interfacing with clients and vendors. Worked with a wide variety of softwares stacks ranging from control systems to SAP interface softwares. ")])])])])])])}],_={name:"about"},w=_,y=(s("e76e"),Object(c["a"])(w,g,C,!1,null,null,null)),j=y.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"hero is-medium is-primary is-bold"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title is-2"},[t._v(" Get In Touch ")])])])]),s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"box"},[s("h3",{staticClass:"is-size-4 has-text-weight-medium"},[t._v(" Email ")]),s("p",[s("a",{attrs:{href:"mailto:zhiminzou@gmail.com"}},[t._v("zhiminzou@gmail.com")])]),s("h3",{staticClass:"is-size-4 has-text-weight-medium"},[t._v(" Github ")]),s("p",[s("a",{attrs:{href:"https://github.com/zhimin90"}},[t._v("github.com/zhimin90")])])])])])])])])}],S={name:"contact"},E=S,P=Object(c["a"])(E,x,k,!1,null,null,null),R=P.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("section",{staticClass:"section"},[s("div",{staticClass:"container is-fluid"},[s("div",{staticClass:"columns is-multiline"},t._l(t.projects,(function(e){return s("div",{key:e.slug,staticClass:"column is-one-third"},[s("post-card",t._b({},"post-card",e,!1),[t._v("test")])],1)})),0)])])])},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-medium is-primary is-bold"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title is-2"},[t._v(" Projects that I have built ")])])])])}],$=(s("96cf"),s("1da1")),M=s("bc3a"),z=s.n(M),D="http://127.0.0.1:5000/airtable_api",I=z.a.create({baseURL:D}),L={getProjects:function(){return I.get()},getProject:function(t){return I.get(D+"?filterByFormula={Slug}='"+t+"'")}},B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-card"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image is-square"},[s("img",{attrs:{src:t.image,alt:"Placeholder image"}})])]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(t.title))]),s("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.date))])])]),s("div",{staticClass:"content"},[s("p",[t._v(t._s(t.snippet))]),s("router-link",{staticClass:"button is-fullwidth",attrs:{to:"/project/"+t.slug}},[t._v("View Project")])],1)])])])},T=[],N={name:"PostCard",props:{title:String,date:String,snippet:String,image:String,slug:String}},Z=N,F=Object(c["a"])(Z,B,T,!1,null,null,null),G=F.exports,H={name:"projects",components:{PostCard:G},data:function(){return{airtableResponse:[]}},mounted:function(){var t=this;function e(){return s.apply(this,arguments)}function s(){return s=Object($["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.getProjects();case 3:s=e.sent,t.airtableResponse=s.data.records,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),s.apply(this,arguments)}e()},computed:{projects:function(){for(var t=this,e=[],s=0;s<t.airtableResponse.length;s++)if(t.airtableResponse[s].fields.Published){var a={title:t.airtableResponse[s].fields.Title,date:t.airtableResponse[s].fields["Date Published"],snippet:t.airtableResponse[s].fields.Excerpt,image:t.airtableResponse[s].fields.Image[0].url,slug:t.airtableResponse[s].fields.slug};e.push(a)}return e}}},V=H,J=Object(c["a"])(V,O,A,!1,null,null,null),Q=J.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"hero is-medium is-primary is-bold"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title is-2"},[t._v(" "+t._s(t.project.title)+" ")]),s("h2",{staticClass:"subtitle is-4"},[t._v(" "+t._s(t.project.snippet)+" ")])])])]),s("section",{staticClass:"section"},[s("div",{staticClass:"container is-fluid"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-two-thirds"},[s("vue-simple-markdown",{attrs:{source:t.project.body}})],1),s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"columns is-multiline"},t._l(t.project.images,(function(t){return s("div",{key:t.url,staticClass:"column is-full"},[s("img",{attrs:{src:t.url}})])})),0)])])])])])},q=[],U={name:"project",data:function(){return{airtableResponse:[]}},mounted:function(){var t=this;function e(){return s.apply(this,arguments)}function s(){return s=Object($["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.getProject(t.$route.params.slug);case 3:s=e.sent,console.log(s),t.airtableResponse=s.data.records,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),s.apply(this,arguments)}e()},computed:{project:function(){var t=this;if(t.airtableResponse[0]){var e={title:t.airtableResponse[0].fields.Title,snippet:t.airtableResponse[0].fields.Excerpt,images:t.airtableResponse[0].fields.Image,body:t.airtableResponse[0].fields.Body};return e}return 0}}},Y=U,K=Object(c["a"])(Y,W,q,!1,null,null,null),X=K.exports;a["a"].use(d["a"]);var tt=new d["a"]({mode:"history",base:"",routes:[{path:"/home",name:"home",component:b},{path:"/about",name:"about",component:j},{path:"/contact",name:"contact",component:R},{path:"/projects",name:"projects",component:Q},{path:"/project/:slug",name:"project",component:X}]}),et=s("7602"),st=s.n(et);s("0ae1");a["a"].use(st.a),a["a"].config.productionTip=!1,new a["a"]({router:tt,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,s){},"91aa":function(t,e,s){},b184:function(t,e,s){"use strict";var a=s("fca8"),i=s.n(a);i.a},c575:function(t,e,s){t.exports=s.p+"../static/img/wallpaper.9f5c7bbe.jpg"},e76e:function(t,e,s){"use strict";var a=s("91aa"),i=s.n(a);i.a},fca8:function(t,e,s){}});
//# sourceMappingURL=app.f47a9c83.js.map