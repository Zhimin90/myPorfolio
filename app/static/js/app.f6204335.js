(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"30f7":function(t,e){t.exports="data:image/gif;base64,R0lGODlhngArAOfjAAAAAQIBCgwBAQ4CCA0ICAICEwADHQcLFwIPGQoCEAgPHRQCARwDAB0PCQEDIgAEKwEFNAIFOAUPNgsWJgoVKwURORAqKyIDACQSCSgUCTcFAAAGQQAHTAAITQAIUgEPXAQXSAETXwIWYwIcYgMhZgMkbAMldAYpcgQpeQs4dyxKd0QKAUsHAE4IAEoTAlkNAVEUAVYYAlwSAlwcA0EgA0AoF0ApGGETAmobAmYoBmo0BWU3E3QkA3UoBHsrBHItFHY2DHo+E29BGn1UKmFiPGdQSwYxgwU3iQZBlAxAkgtOogtYrRVkuB1iszVajj1cgyJdqiVruzx6tSt0wy15yDB8y0NriUhvjU93kUt6szuJuDKE1TaI2DqM2UWGvlCBu0qP2USY50ic6lKk6FKn81Oo81qv+F+w63Kt1WS17Wq78HDA8n7P+3/Q+4EvBYEwBYEwDok3BYw6BoEwEZVCBplGDZpKB51MFJpNGpBbNppVOKVQCK9aDqRSF6xbG7NlG7pmGL5rHKVtQqxzRsRxIbeIYLiIYNWEMtmMO96aSeGYRuKfTuWlVOirWvSvWvivWva/bfbBbvTFcvnFcpqai5mclKijm4LN7YXV/Ivb/JTV+Zzl75Pi/a7Cw6/ayK/Z/LPc9qbr16Dt/q3p8Kf0/7Ts/r3r8Lb2/7P4/7zw/rn5/8KbjN/InsPAosPCst3ArPzZif3fm+7YsvDatf3glf3kmf7tn+zlp+3ov/3kpP7tp/7prfvwo//3rv/3tP/xvP/5tf/5vcPDw8Dd+Mbu/sLz/8f6/8r7/9fm6dLn+dL7/9v8/+7ZyfDsxf3jxP7uxvLu1v/6x//6zf/80v/72u3r4OT9/+z3+O39/vHv5PXw6vz27//84//+6fHz8/D1+vP8/v7+8/7//v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAP8ALAAAAACeACsAAAj+AP8JHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQKe9AUC0aNEOoh4JAOCBFMJfP6BYowhV6kShRrMiBYpwGhwvwsKGbZUDwBRw4bLZaYqw1gojyii6hXv1q9ixZc9yPThtjhmC4hItOFFMYLg9bA+KY5as4uLGV/0CFkx478Fuqz4RjOXCwZqBhxPXxKx5IGfPlhtyuwMgCjjQiEMJwqDACTGBSpk6ze1BNgYKWaw9y9OAwhdsuJc25e279m2Hq1u/HsitkI0BE56A+ifuEFEkU3P+ozh2U9yiBSVSETy8gYiVSkMENHkdrtpap84s6Wh/hZKQAFrogQUlOxQwhjj/bGNfU/nt5x588k23kHnoqTcQNXhIgAY2swQBgiYJ3iIDeP+EgwsP492UCwwOqIEgbABU8Zo0PohwimGIOVXiHjG+pssLCICBIC0aKIHcjmwd1uM/0vBgY0Mrtvgid4oI0MWLtKyQxDL/AHMDiUz6kGJN3PTR2pGwPcCGYXxswAmOiR0GQRsCUfNGBG/+8wyKcSHp1GFqsoknQ2WeSRA1cUSQCXV1QIBJl19O9c80YpJHkziMLEBCKQYdxoEoAokDiKJw6ugpqP9wQ8eTk75hgqX+of25x6ehjrqoQpguMAKnBPXywgc31goAGZCCSeOYM0WZxpSwJSZOIKT6iSMHOqrKqlAmGFOqtNxBe2tCyjL7jy0siKAKaIQEEIY4XhpbKU3d+AFAE2iul2OogUBwa6zbproqKgJhq620/Harr0LxzluvQL4CO5CoARDbrqTHWhqTOI0wsCtgrwzDbTje9luwtedO6kO22xYMcrSKZbzxwx1TI0cEjwqkqqP/BIPDEVz+48sLyMK0ywwGnMEsN3WIIU7Bz0ar8r3+mhuwqwPzy3TICA1d9NFJi6PIAFcKlOWW/8jMKiQXBO1Swil0cpcwrgAhRlp2cLDJN+Jk8wevBJd8s41adn9Dd+DiQCOHCKOAs00zPpRgiuKAb+JN5Hjrzfc3l8nb9ttxK42hht/I4iGI3CEygBTIsFIEDSaYgjlMsGiQVVZiTHJBUVvowkJRSziyFFFMSHI7UVtAwkBRYfiOvPJEWXA88brzLu4/sc9ulNJlF1KDANltd+EgGBSggic+EBV2auinr/767Lfv/vvwxy///PTXb//9+Oev//789+///wAMoAAH2JCAAAA7"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1"}}),s("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/home"}},[s("img",{attrs:{src:a("30f7"),width:"112",height:"28"}})]),s("a",{staticClass:"navbar-burger burger",class:{"is-active":t.showNav},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.showNav=!t.showNav}}},[s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}})])],1),s("div",{staticClass:"navbar-menu",class:{"is-active":t.showNav},attrs:{id:"navbarBasicExample"}},[s("div",{staticClass:"navbar-start"}),s("div",{staticClass:"navbar-end"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/home"}},[t._v(" Home ")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v(" About ")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/projects"}},[t._v(" Projects ")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/contact"}},[t._v(" Contact ")])],1)])]),s("router-view"),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"content has-text-centered"},[a("p",[t._v(" Built by Zhimin Zou with Vue.js, Bulma, and Airtable. ")])])])}],r={name:"App",data:function(){return{showNav:!1}}},o=r,l=(a("034f"),a("b184"),a("2877")),c=Object(l["a"])(o,i,n,!1,null,null,null),u=c.exports,p=a("8c4f"),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hero-home is-cover is-relative is-fullheight-with-navbar is-primary"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-1"},[t._v("Hello, I'm Zhimin.")]),a("h2",{staticClass:"subtitle is-3"},[t._v("A technical focused Data Scientist with a Electrical Engineering background")])])])])])}],f={name:"home"},m=f,h=Object(l["a"])(m,d,v,!1,null,null,null),b=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" My Objective: Driven, seasoned and dedicated Software Engineer with an automation software and web development background. Skilled with multiple programming languages and digital design tools for product development. Led multiple large-scale projects successfully from solution development to on site commissioning. A strong interest in ML and Data Analytics. Looking to take on exciting challenges in the world of Data Science and Machine Learning. ")])},w=[],A={name:"about"},C=A,j=Object(l["a"])(C,g,w,!1,null,null,null),E=j.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Contacts ")])},P=[],O={name:"contact"},x=O,B=Object(l["a"])(x,y,P,!1,null,null,null),_=B.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("section",{staticClass:"section"},[a("div",{staticClass:"container is-fluid"},[a("div",{staticClass:"columns is-multiline"},t._l(t.projects,(function(e){return a("div",{key:e.slug,staticClass:"column is-one-third"},[a("post-card",t._b({},"post-card",e,!1),[t._v("test")])],1)})),0)])])])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-medium is-primary is-bold"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-2"},[t._v(" Projects that I have built ")])])])])}],K=(a("96cf"),a("1da1")),S=a("bc3a"),M=a.n(S),R="http://127.0.0.1:5000/airtable_api",Q=M.a.create({baseURL:R}),D={getProjects:function(){return Q.get()},getProject:function(t){return Q.get(R+"?filterByFormula={Slug}='"+t+"'")}},q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-card"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image is-square"},[a("img",{attrs:{src:t.image,alt:"Placeholder image"}})])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[t._v(t._s(t.title))]),a("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.date))])])]),a("div",{staticClass:"content"},[a("p",[t._v(t._s(t.snippet))]),a("router-link",{staticClass:"button is-fullwidth",attrs:{to:"/project/"+t.slug}},[t._v("View Project")])],1)])])])},G=[],H={name:"PostCard",props:{title:String,date:String,snippet:String,image:String,slug:String}},Y=H,U=Object(l["a"])(Y,q,G,!1,null,null,null),F=U.exports,T={name:"projects",components:{PostCard:F},data:function(){return{airtableResponse:[]}},mounted:function(){var t=this;function e(){return a.apply(this,arguments)}function a(){return a=Object(K["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.getProjects();case 3:a=e.sent,t.airtableResponse=a.data.records,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),a.apply(this,arguments)}e()},computed:{projects:function(){for(var t=this,e=[],a=0;a<t.airtableResponse.length;a++)if(t.airtableResponse[a].fields.Published){var s={title:t.airtableResponse[a].fields.Title,date:t.airtableResponse[a].fields["Date Published"],snippet:t.airtableResponse[a].fields.Excerpt,image:t.airtableResponse[a].fields.Image[0].url,slug:t.airtableResponse[a].fields.slug};e.push(s)}return e}}},N=T,z=Object(l["a"])(N,k,I,!1,null,null,null),L=z.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"hero is-medium is-primary is-bold"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-2"},[t._v(" "+t._s(t.project.title)+" ")]),a("h2",{staticClass:"subtitle is-4"},[t._v(" "+t._s(t.project.snippet)+" ")])])])]),a("section",{staticClass:"section"},[a("div",{staticClass:"container is-fluid"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-two-thirds"},[a("vue-simple-markdown",{attrs:{source:t.project.body}})],1),a("div",{staticClass:"column is-one-third"},[a("div",{staticClass:"columns is-multiline"},t._l(t.project.images,(function(t){return a("div",{key:t.url,staticClass:"column is-full"},[a("img",{attrs:{src:t.url}})])})),0)])])])])])},V=[],W={name:"project",data:function(){return{airtableResponse:[]}},mounted:function(){var t=this;function e(){return a.apply(this,arguments)}function a(){return a=Object(K["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.getProject(t.$route.params.slug);case 3:a=e.sent,console.log(a),t.airtableResponse=a.data.records,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),a.apply(this,arguments)}e()},computed:{project:function(){var t=this;if(t.airtableResponse[0]){var e={title:t.airtableResponse[0].fields.Title,snippet:t.airtableResponse[0].fields.Excerpt,images:t.airtableResponse[0].fields.Image,body:t.airtableResponse[0].fields.Body};return e}return 0}}},Z=W,X=Object(l["a"])(Z,J,V,!1,null,null,null),$=X.exports;s["a"].use(p["a"]);var tt=new p["a"]({mode:"history",base:"",routes:[{path:"/home",name:"home",component:b},{path:"/about",name:"about",component:E},{path:"/contact",name:"contact",component:_},{path:"/projects",name:"projects",component:L},{path:"/project/:slug",name:"project",component:$}]}),et=a("7602"),at=a.n(et);a("0ae1");s["a"].use(at.a),s["a"].config.productionTip=!1,new s["a"]({router:tt,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,a){},b184:function(t,e,a){"use strict";var s=a("fca8"),i=a.n(s);i.a},fca8:function(t,e,a){}});
//# sourceMappingURL=app.f6204335.js.map