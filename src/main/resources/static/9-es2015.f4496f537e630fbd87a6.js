(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{YFeA:function(l,n,t){"use strict";t.d(n,"a",function(){return i});var e=t("8Y7J"),u=t("IheW");let i=(()=>{class l{constructor(l){this.httpClient=l}getCities(l){return this.httpClient.get(l)}getCitiesByStateId(l){return this.httpClient.get(l)}}return l.ngInjectableDef=e["\u0275\u0275defineInjectable"]({factory:function(){return new l(e["\u0275\u0275inject"](u.c))},token:l,providedIn:"root"}),l})()},dkQB:function(l,n,t){"use strict";t.d(n,"n",function(){return e}),t.d(n,"j",function(){return u}),t.d(n,"f",function(){return i}),t.d(n,"i",function(){return r}),t.d(n,"l",function(){return a}),t.d(n,"k",function(){return o}),t.d(n,"m",function(){return c}),t.d(n,"d",function(){return s}),t.d(n,"e",function(){return d}),t.d(n,"c",function(){return p}),t.d(n,"p",function(){return m}),t.d(n,"b",function(){return g}),t.d(n,"a",function(){return f}),t.d(n,"g",function(){return v}),t.d(n,"o",function(){return h}),t.d(n,"h",function(){return b}),t.d(n,"q",function(){return C});const e="api/v1/product/",u="api/v1/inventory/",i="api/v1/category/",r="api/v1/currency/",a="api/v1/manufacturer/",o="api/v1/manufacturer_address_type/",c="api/v1/order/",s="api/v1/cart/",d="api/v1/cart_status/",p="api/v1/cart_address/",m="api/v1/tax_rate/",g="api/v1/address_type/",f="api/v1/address/",v="api/v1/city/",h="api/v1/state/",b="api/v1/country/",C="api/v1/user_profile/"},z5l6:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var i=t("pMnS"),r=t("SVse"),a=t("YFeA"),o=t("dkQB"),c=t("AytR");class s{constructor(l){this.cityService=l}ngOnInit(){this.pageNumber=0,this.pageSize=10,this.getCities()}getCities(){return this.cityService.getCities(c.a.SERVER_URL+o.g+"list?pageNumber="+this.pageNumber+"&pageSize="+this.pageSize).subscribe(l=>{this.cities=l.content,this.totalPages=l.totalPages},l=>console.error(l),()=>console.log("Cities retrieved from backend")),this.cities}getNextCities(){this.pageNumber>=this.totalPages?this.pageNumber=this.totalPages:this.pageNumber++,this.getCities()}getPreviousCities(){this.pageNumber<=0?this.pageNumber=0:this.pageNumber--,this.getCities()}getFirstPageCities(){this.pageNumber=0,this.getCities()}cityDataAvailable(){return void 0!==this.cities}}var d=e["\u0275crt"]({encapsulation:0,styles:[["table[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #000;border-collapse:collapse}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:15px}"]],data:{}});function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""])),(l()(),e["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,["",""])),(l()(),e["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.id),l(n,4,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.state.name)})}function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,14,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,9,"table",[["style","text-align: center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Id"])),(l()(),e["\u0275eld"](5,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["name"])),(l()(),e["\u0275eld"](7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["State Name"])),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](10,278528,null,0,r.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](11,0,null,null,3,"div",[["style","margin: 30px"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,0,"input",[["class"," btn btn-primary"],["style","margin: 30px"],["type","button"],["value","Home"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.getFirstPageCities()&&e),e},null,null)),(l()(),e["\u0275eld"](13,0,null,null,0,"input",[["class"," btn btn-primary"],["style","margin: 30px"],["type","button"],["value","Back"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.getPreviousCities()&&e),e},null,null)),(l()(),e["\u0275eld"](14,0,null,null,0,"input",[["class"," btn btn-primary"],["style","margin: 30px"],["type","button"],["value","Next"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.getNextCities()&&e),e},null,null))],function(l,n){l(n,10,0,n.component.cities)},null)}function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","container-fluid container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Cities List"])),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](4,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,4,0,n.component.cityDataAvailable())},null)}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-city",[],null,null,null,g,d)),e["\u0275did"](1,114688,null,0,s,[a.a],null,null)],function(l,n){l(n,1,0)},null)}var v=e["\u0275ccf"]("app-city",s,f,{},{},[]),h=t("s7LF"),b=t("iInd"),C=t("eH2H");class _{}t.d(n,"CityModuleNgFactory",function(){return y});var y=e["\u0275cmf"](u,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,v]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[e.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,h.FormBuilder,h.FormBuilder,[]),e["\u0275mpd"](4608,h["\u0275angular_packages_forms_forms_o"],h["\u0275angular_packages_forms_forms_o"],[]),e["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),e["\u0275mpd"](1073742336,h["\u0275angular_packages_forms_forms_d"],h["\u0275angular_packages_forms_forms_d"],[]),e["\u0275mpd"](1073742336,h.ReactiveFormsModule,h.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,b.q,b.q,[[2,b.v],[2,b.m]]),e["\u0275mpd"](1073742336,_,_,[]),e["\u0275mpd"](1073742336,u,u,[]),e["\u0275mpd"](1024,b.i,function(){return[[{path:"",component:s,canActivate:[C.a]}]]},[])])})}}]);