(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1"}}),a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v(" Welcome ")]),a("a",{staticClass:"navbar-burger burger",class:{"is-active":t.showNav},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.showNav=!t.showNav}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])],1),a("div",{staticClass:"navbar-menu",class:{"is-active":t.showNav},attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"}),a("div",{staticClass:"navbar-end"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v(" Home ")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v(" About ")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/projects"}},[t._v(" Projects ")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/contact"}},[t._v(" Contact ")])],1)])]),a("router-view"),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"content has-text-centered"},[a("p",[t._v(" Built by Zhimin Zou with Vue.js, Bulma, and Airtable. ")])])])}],r={name:"App",data:function(){return{showNav:!1}}},o=r,l=(a("034f"),a("b184"),a("2877")),c=Object(l["a"])(o,n,i,!1,null,null,null),u=c.exports,p=a("8c4f"),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hero-home is-cover is-relative is-fullheight-with-navbar is-primary"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-1"},[t._v("Hello, I'm Zhimin.")]),a("h2",{staticClass:"subtitle is-3"},[t._v("A technical focused Data Scientist with a Electrical Engineering background")])])])])])}],f={name:"home"},m=f,b=Object(l["a"])(m,d,v,!1,null,null,null),h=b.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" My Objective: Driven, seasoned and dedicated Software Engineer with an automation software and web development background. Skilled with multiple programming languages and digital design tools for product development. Led multiple large-scale projects successfully from solution development to on site commissioning. A strong interest in ML and Data Analytics. Looking to take on exciting challenges in the world of Data Science and Machine Learning. ")])},_=[],C={name:"about"},j=C,w=Object(l["a"])(j,g,_,!1,null,null,null),y=w.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Contacts ")])},P=[],R={name:"contact"},E=R,O=Object(l["a"])(E,x,P,!1,null,null,null),k=O.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("section",{staticClass:"section"},[a("div",{staticClass:"container is-fluid"},[a("div",{staticClass:"columns is-multiline"},t._l(t.projects,(function(e){return a("div",{key:e.slug,staticClass:"column is-one-third"},[a("post-card",t._b({},"post-card",e,!1),[t._v("test")])],1)})),0)])])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-medium is-primary is-bold"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-2"},[t._v(" Projects that I have built ")])])])])}],$=(a("96cf"),a("1da1")),B=a("bc3a"),L=a.n(B),M=L.a.create({baseURL:"https://api.airtable.com/v0/appcQDvLw3YiggMPP/Projects"}),D=Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_AIRTABLEKEY;M.defaults.headers.common={Authorization:"Bearer "+D};var N={getProjects:function(){return M.get("?maxRecords=3&view=All%20projects")},getProject:function(t){return M.get("?filterByFormula={Slug}='"+t+"'")}},T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-card"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image is-square"},[a("img",{attrs:{src:t.image,alt:"Placeholder image"}})])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[t._v(t._s(t.title))]),a("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.date))])])]),a("div",{staticClass:"content"},[a("p",[t._v(t._s(t.snippet))]),a("router-link",{staticClass:"button is-fullwidth",attrs:{to:"/project/"+t.slug}},[t._v("View Project")])],1)])])])},I=[],V={name:"PostCard",props:{title:String,date:String,snippet:String,image:String,slug:String}},U=V,Z=Object(l["a"])(U,T,I,!1,null,null,null),H=Z.exports,J={name:"projects",components:{PostCard:H},data:function(){return{airtableResponse:[]}},mounted:function(){var t=this;function e(){return a.apply(this,arguments)}function a(){return a=Object($["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.getProjects();case 3:a=e.sent,t.airtableResponse=a.data.records,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),a.apply(this,arguments)}e()},computed:{projects:function(){for(var t=this,e=[],a=0;a<t.airtableResponse.length;a++)if(t.airtableResponse[a].fields.Published){var s={title:t.airtableResponse[a].fields.Title,date:t.airtableResponse[a].fields["Date Published"],snippet:t.airtableResponse[a].fields.Excerpt,image:t.airtableResponse[a].fields.Image[0].url,slug:t.airtableResponse[a].fields.slug};e.push(s)}return e}}},Y=J,q=Object(l["a"])(Y,S,A,!1,null,null,null),z=q.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"hero is-medium is-primary is-bold"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-2"},[t._v(" "+t._s(t.project.title)+" ")]),a("h2",{staticClass:"subtitle is-4"},[t._v(" "+t._s(t.project.snippet)+" ")])])])]),a("section",{staticClass:"section"},[a("div",{staticClass:"container is-fluid"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-two-thirds"},[a("vue-simple-markdown",{attrs:{source:t.project.body}})],1),a("div",{staticClass:"column is-one-third"},[a("div",{staticClass:"columns is-multiline"},t._l(t.project.images,(function(t){return a("div",{key:t.url,staticClass:"column is-full"},[a("img",{attrs:{src:t.url}})])})),0)])])])])])},K=[],Q={name:"project",data:function(){return{airtableResponse:[]}},mounted:function(){var t=this;function e(){return a.apply(this,arguments)}function a(){return a=Object($["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.getProject(t.$route.params.slug);case 3:a=e.sent,console.log(a),t.airtableResponse=a.data.records,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),a.apply(this,arguments)}e()},computed:{project:function(){var t=this;if(t.airtableResponse[0]){var e={title:t.airtableResponse[0].fields.Title,snippet:t.airtableResponse[0].fields.Excerpt,images:t.airtableResponse[0].fields.Image,body:t.airtableResponse[0].fields.Body};return e}return 0}}},W=Q,G=Object(l["a"])(W,F,K,!1,null,null,null),X=G.exports;s["a"].use(p["a"]);var tt=new p["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:h},{path:"/about",name:"about",component:y},{path:"/contact",name:"contact",component:k},{path:"/projects",name:"projects",component:z},{path:"/project/:slug",name:"project",component:X}]}),et=a("7602"),at=a.n(et);a("0ae1");s["a"].use(at.a),s["a"].config.productionTip=!1,new s["a"]({router:tt,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,a){},b184:function(t,e,a){"use strict";var s=a("fca8"),n=a.n(s);n.a},fca8:function(t,e,a){}});
//# sourceMappingURL=app.e9e05f77.js.map