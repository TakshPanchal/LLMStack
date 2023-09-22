"use strict";(self.webpackChunkpromptmanager=self.webpackChunkpromptmanager||[]).push([[9016],{12705:function(e,t,n){n.d(t,{$5:function(){return _},C_:function(){return j},DK:function(){return I},Dg:function(){return P},Hn:function(){return y},K4:function(){return S},MC:function(){return D},NM:function(){return E},TF:function(){return N},YL:function(){return Z},c5:function(){return M},e7:function(){return L},eH:function(){return b},gZ:function(){return g},iB:function(){return w},jl:function(){return h},lo:function(){return B},nC:function(){return C},pQ:function(){return x},r1:function(){return v},rc:function(){return O},v:function(){return k},ye:function(){return V}});var r=n(4942),u=n(1413),a=n(74165),c=n(15861),i=n(56030),o=n(7077),s=(0,i.nZ)({key:"apiProvidersFetchSelector",get:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.o)().get("/api/apiproviders");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}),p=(0,i.nZ)({key:"apiBackendsFetchSelector",get:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.o)().get("/api/apibackends");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}),f=(0,i.nZ)({key:"endpointsFetchSelector",get:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.o)().get("/api/endpoints");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}),d=(0,i.nZ)({key:"dataSourcesFetchSelector",get:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.o)().get("/api/datasources");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}),l=(0,i.nZ)({key:"dataSourceTypesFetchSelector",get:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.o)().get("/api/datasource_types");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}),v=(0,i.cn)({key:"apiProviders",default:s}),k=(0,i.nZ)({key:"apiProviderDropdownList",get:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.get,e.next=3,n(v);case 3:return r=e.sent,e.abrupt("return",r.map((function(e){return{label:e.name,value:e.name}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),h=(0,i.cn)({key:"apiProviderSelected",default:null}),Z=(0,i.cn)({key:"apiBackends",default:p}),y=(0,i.nZ)({key:"apiBackendDropdownList",get:function(e){var t=e.get,n=t(Z),r=t(L);return n.filter((function(e){return-1===((null===r||void 0===r?void 0:r.disabled_api_backends)||[]).indexOf(e.id)})).map((function(e){return{label:e.name,value:e.id,provider:e.api_provider.name}}))}}),g=(0,i.cn)({key:"apiBackendSelected",default:null}),m=(0,i.cn)({key:"endpoints",default:f}),b=((0,i.nZ)({key:"endpointDropdownList",get:function(e){var t=(0,e.get)(m);return t.filter((function(e){return 0===e.version&&!e.draft})).sort((function(e,t){return e.created_on<t.created_on?1:-1})).map((function(e){return{label:"".concat(e.api_backend.api_provider.name," \xbb ").concat(e.api_backend.name," \xbb ").concat(e.name),uuid:e.uuid,options:t.filter((function(t){return t.parent_uuid===e.uuid})).map((function(t){return{label:"".concat(t.version,": ").concat(t.description),value:"".concat(t.parent_uuid,":").concat(t.version),version:t.version,backend:e.api_backend.name,provider:e.api_backend.api_provider.name,is_live:t.is_live,uuid:t.uuid}}))}}))}}),(0,i.cn)({key:"endpointSelected",default:null})),w=(0,i.nZ)({key:"endpointTableData",get:function(e){for(var t=(0,e.get)(m).filter((function(e){return!e.draft})).sort((function(e,t){return e.created_on<t.created_on?1:-1})),n=t.filter((function(e){return 0===e.version})).reduce((function(e,t){var n=(0,r.Z)({},t.uuid,(0,u.Z)((0,u.Z)({},t),{},{versions:[],key:t.uuid}));return(0,u.Z)((0,u.Z)({},e),n)}),{}),a=t.filter((function(e){return 0!==e.version})),c=0;c<a.length;c++)a[c].parent_uuid in n&&n[a[c].parent_uuid].versions.push((0,u.Z)((0,u.Z)({},a[c]),{},{key:a[c].uuid}));return Object.values(n)}}),S=((0,i.cn)({key:"endpointVersions",default:[]}),(0,i.cn)({key:"endpointConfigValue",default:{}})),x=(0,i.cn)({key:"promptValues",default:{}}),_=(0,i.cn)({key:"inputValue",default:{}}),T=((0,i.cn)({key:"saveEndpointModalVisible",default:!1}),(0,i.cn)({key:"saveEndpointVersionModalVisible",default:!1}),(0,i.cn)({key:"shareEndpointModalVisible",default:!1}),(0,i.cn)({key:"endpointShareCodeValue",default:null}),(0,i.nZ)({key:"profileFetchSelector",get:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.o)().get("/api/profiles/me");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()})),O=(0,i.cn)({key:"profileValue",default:T}),C=(0,i.nZ)({key:"isLoggedIn",get:function(e){return null!==(0,e.get)(O)}}),F=(0,i.cn)({key:"promptHubState",default:[]}),E=((0,i.nZ)({key:"promptHubList",get:function(e){return(0,e.get)(F)}}),(0,i.cn)({key:"dataSourcesState",default:d})),M=(0,i.nZ)({key:"orgDataSourcesState",get:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.get,e.prev=1,n(P).IS_ORGANIZATION_MEMBER){e.next=5;break}return e.abrupt("return",[]);case 5:return e.next=7,(0,o.o)().get("/api/org/datasources");case 7:return r=e.sent,e.abrupt("return",r.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()}),N=(0,i.cn)({key:"dataSourceTypesState",default:l}),D=(0,i.cn)({key:"dataSourceEntriesState",default:[]}),I=(0,i.cn)({key:"orgDataSourceEntriesState",default:[]}),V=(0,i.nZ)({key:"dataSourceEntriesTableData",get:function(e){var t=e.get,n=t(D),r=t(P);n=n.map((function(e){return(0,u.Z)({isUserOwned:!0},e)}));var a=r.IS_ORGANIZATION_MEMBER?t(I):[];a=a.map((function(e){return(0,u.Z)({isUserOwned:!1},e)}));var c=t(E),i=(c=c.map((function(e){return(0,u.Z)({isUserOwned:!0},e)}))).map((function(e){return e.uuid})),o=r.IS_ORGANIZATION_MEMBER?t(M):[];o=(o=o.map((function(e){return(0,u.Z)({isUserOwned:!1},e)}))).filter((function(e){return!i.includes(e.uuid)}));for(var s=[],p={},f={},d=0;d<n.length;d++)n[d].datasource.uuid in p?p[n[d].datasource.uuid].push(n[d]):p[n[d].datasource.uuid]=[n[d]];for(var l=0;l<a.length;l++)a[l].datasource.uuid in f?f[a[l].datasource.uuid].push(a[l]):f[a[l].datasource.uuid]=[a[l]];for(var v=0;v<c.length;v++)s.push((0,u.Z)((0,u.Z)({},c[v]),{data_source_entries:p[c[v].uuid]||[]}));for(var k=0;k<o.length;k++)s.push((0,u.Z)((0,u.Z)({},o[k]),{data_source_entries:f[o[k].uuid]||[]}));return s}}),B=(0,i.cn)({key:"isMobileState",default:window.innerWidth<768}),R=((0,i.cn)({key:"appTemplateState",default:null}),(0,i.cn)({key:"appDebugState",default:{}}),(0,i.nZ)({key:"appsFetchSelector",get:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.o)().get("/api/apps");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()})),j=(0,i.cn)({key:"appsState",default:R}),A=(0,i.nZ)({key:"profileFlagsFetchSelector",get:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.o)().get("/api/profiles/me/flags");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}),P=(0,i.cn)({key:"profileFlagsState",default:A}),H=(0,i.nZ)({key:"organizationFetchSelector",get:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.o)().get("/api/org");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}),L=(0,i.cn)({key:"organizationState",default:H})},7077:function(e,t,n){n.d(t,{o:function(){return a}});var r=n(11912),u=n(58518),a=function(){var e=r.Z.create({xsrfCookieName:"csrftoken",xsrfHeaderName:"X-CSRFToken"});return e.interceptors.response.use((function(e){return e}),(function(e){return window.location.pathname.startsWith("/s/")||window.location.pathname.startsWith("/hub")||window.location.pathname.startsWith("/app/")||401!==e.response.status&&403!==e.response.status||(window.location.href="/login"),(0,u.yv)("Error Occurred",{variant:"error"}),Promise.reject(e)})),e}},7543:function(e,t,n){n.d(t,{B6:function(){return o},qC:function(){return i},rQ:function(){return c}});var r=n(74165),u=n(15861),a=function(e){var t=document.cookie.split(";").find((function(t){return t.trim().startsWith("".concat(e,"="))}));return t?t.split("=")[1]:null},c=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n,u,a){var c,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(!0),e.next=4,fetch(t);case 4:if((c=e.sent).ok){e.next=7;break}throw new Error(c.statusText);case 7:return e.next=9,c.json();case 9:i=e.sent,u(i),n(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),a(e.t0.message),n(!1);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n,r,u){return e.apply(this,arguments)}}(),i=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n,u,c,i){var o,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":a("csrftoken")},body:JSON.stringify(n)});case 3:return o=e.sent,e.next=6,o.json();case 6:s=e.sent,c(s),u(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i(e.t0.message),u(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,r,u,a){return e.apply(this,arguments)}}(),o=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t,n,u,c,i){var o,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":a("csrftoken")},body:JSON.stringify(n)});case 3:return o=e.sent,e.next=6,o.json();case 6:s=e.sent,c(s),u(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i(e.t0.message),u(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,r,u,a){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=9016.319ac08f.chunk.js.map