"use strict";(self.webpackChunkpromptmanager=self.webpackChunkpromptmanager||[]).push([[6706],{36706:function(e,n,i){i.r(n);var a=i(1413),o=i(29439),l=i(74165),s=i(15861),r=i(20043),t=i(17615),_=i(99205),c=i(66106),d=i(30914),u=i(49389),h=i(84017),x=i(87309),p=i(26517),y=i(77128),Z=i(89042),j=i(72791),k=i(23414),g=i(7543),A=i(12705),S=i(56030),v=i(80184),m=function(){var e=(0,s.Z)((0,l.Z)().mark((function e(n){var i,a,o;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.url){e.next=5;break}return e.next=4,new Promise((function(e){var i=new FileReader;i.readAsDataURL(n.originFileObj),i.onload=function(){return e(i.result)}}));case 4:i=e.sent;case 5:(a=new Image).src=i,null===(o=window.open(i))||void 0===o||o.document.write(a.outerHTML);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=function(){var e=(0,j.useState)({token:"",openai_key:"",stabilityai_key:"",cohere_key:"",forefrontai_key:"",elevenlabs_key:"",localai_api_key:"",localai_base_url:"",azure_openai_api_key:"",google_service_account_json_key:"",anthropic_api_key:"",logo:""}),n=(0,o.Z)(e,2),i=n[0],l=n[1],s=(0,j.useState)(!0),b=(0,o.Z)(s,2),E=b[0],f=b[1],P=(0,j.useState)(new Set),C=(0,o.Z)(P,2),I=C[0],T=C[1],O=(0,S.sJ)(A.Dg),N=(0,S.sJ)(A.e7);(0,j.useEffect)((function(){(0,g.rQ)("api/profiles/me",(function(){}),(function(e){l({token:e.token,openai_key:e.openai_key,stabilityai_key:e.stabilityai_key,cohere_key:e.cohere_key,forefrontai_key:e.forefrontai_key,elevenlabs_key:e.elevenlabs_key,google_service_account_json_key:e.google_service_account_json_key,azure_openai_api_key:e.azure_openai_api_key,localai_api_key:e.localai_api_key,localai_base_url:e.localai_base_url,anthropic_api_key:e.anthropic_api_key,logo:e.logo,user_email:e.user_email}),f(!1)}))}),[]);return(0,v.jsx)("div",{id:"setting-page",children:(0,v.jsx)(r.Z,{spinning:E,size:"large",children:(0,v.jsx)(t.Z,{layout:"vertical",children:(0,v.jsxs)(_.Z,{title:"Settings",style:{textAlign:"left",padding:4},children:[(0,v.jsx)(c.Z,{children:(0,v.jsx)(d.Z,{span:16,children:(0,v.jsx)(t.Z.Item,{label:"Promptly Token",children:(0,v.jsxs)(u.Z.Group,{compact:!0,children:[(0,v.jsx)(u.Z,{readOnly:!0,style:{width:"350px"},value:i.token,defaultValue:i.token}),(0,v.jsx)(h.Z,{title:"Copy Promptly API Token",children:(0,v.jsx)(x.ZP,{icon:(0,v.jsx)(k.Z,{}),onClick:function(){return navigator.clipboard.writeText(i.token)}})})]})})})}),(0,v.jsx)(c.Z,{children:(0,v.jsx)(d.Z,{xs:24,md:14,children:(0,v.jsx)(t.Z.Item,{label:"OpenAI API Token",children:(0,v.jsx)(c.Z,{children:(0,v.jsxs)(d.Z,{xs:24,md:16,children:[" ",(0,v.jsx)(u.Z.Password,{value:i.openai_key,disabled:!O.CAN_ADD_KEYS,onChange:function(e){l((0,a.Z)((0,a.Z)({},i),{},{openai_key:e.target.value})),T(I.add("openai_key"))}})]})})})})}),(0,v.jsx)(c.Z,{children:(0,v.jsx)(d.Z,{xs:24,md:14,children:(0,v.jsx)(t.Z.Item,{label:"StabilityAI API Token",children:(0,v.jsx)(c.Z,{children:(0,v.jsxs)(d.Z,{xs:24,md:16,children:[" ",(0,v.jsx)(u.Z.Password,{value:i.stabilityai_key,disabled:!O.CAN_ADD_KEYS,onChange:function(e){l((0,a.Z)((0,a.Z)({},i),{},{stabilityai_key:e.target.value})),T(I.add("stabilityai_key"))}})]})})})})}),(0,v.jsx)(c.Z,{children:(0,v.jsx)(d.Z,{xs:24,md:14,children:(0,v.jsx)(t.Z.Item,{label:"Cohere API Token",children:(0,v.jsx)(c.Z,{children:(0,v.jsxs)(d.Z,{xs:24,md:16,children:[" ",(0,v.jsx)(u.Z.Password,{value:i.cohere_key,disabled:!O.CAN_ADD_KEYS,onChange:function(e){l((0,a.Z)((0,a.Z)({},i),{},{cohere_key:e.target.value})),T(I.add("cohere_key"))}})]})})})})}),(0,v.jsx)(c.Z,{children:(0,v.jsx)(d.Z,{xs:24,md:14,children:(0,v.jsx)(t.Z.Item,{label:"Elevenlabs API Token",children:(0,v.jsx)(c.Z,{children:(0,v.jsxs)(d.Z,{xs:24,md:16,children:[" ",(0,v.jsx)(u.Z.Password,{value:i.elevenlabs_key,disabled:!O.CAN_ADD_KEYS,onChange:function(e){l((0,a.Z)((0,a.Z)({},i),{},{elevenlabs_key:e.target.value})),T(I.add("elevenlabs_key"))}})]})})})})}),(0,v.jsx)(c.Z,{children:(0,v.jsx)(d.Z,{xs:24,md:14,children:(0,v.jsx)(t.Z.Item,{label:"Azure OpenAI API Key",children:(0,v.jsx)(c.Z,{children:(0,v.jsxs)(d.Z,{xs:24,md:16,children:[" ",(0,v.jsx)(u.Z.Password,{value:i.azure_openai_api_key,disabled:!O.CAN_ADD_KEYS,onChange:function(e){l((0,a.Z)((0,a.Z)({},i),{},{azure_openai_api_key:e.target.value})),T(I.add("azure_openai_api_key"))}})]})})})})}),(0,v.jsx)(c.Z,{children:(0,v.jsx)(d.Z,{xs:24,md:14,children:(0,v.jsx)(t.Z.Item,{label:"Google Service Account JSON Key",tooltip:"base64 encoded JSON key.",children:(0,v.jsx)(c.Z,{children:(0,v.jsxs)(d.Z,{xs:24,md:16,children:[" ",(0,v.jsx)(u.Z.Password,{value:i.google_service_account_json_key,disabled:!O.CAN_ADD_KEYS,onChange:function(e){l((0,a.Z)((0,a.Z)({},i),{},{google_service_account_json_key:e.target.value})),T(I.add("google_service_account_json_key"))}})]})})})})}),(0,v.jsx)(c.Z,{children:(0,v.jsx)(d.Z,{xs:24,md:14,children:(0,v.jsx)(t.Z.Item,{label:"Anthropic API Key",tooltip:"Anthropic API Key for models like Claude",children:(0,v.jsx)(c.Z,{children:(0,v.jsxs)(d.Z,{xs:24,md:16,children:[" ",(0,v.jsx)(u.Z.Password,{value:i.anthropic_api_key,disabled:!O.CAN_ADD_KEYS,onChange:function(e){l((0,a.Z)((0,a.Z)({},i),{},{anthropic_api_key:e.target.value})),T(I.add("anthropic_api_key"))}})]})})})})}),(0,v.jsx)(c.Z,{children:(0,v.jsx)(d.Z,{xs:24,md:14,children:(0,v.jsx)(t.Z.Item,{label:"LocalAI Base URL",children:(0,v.jsx)(c.Z,{children:(0,v.jsxs)(d.Z,{xs:24,md:16,children:[" ",(0,v.jsx)(u.Z,{value:i.localai_base_url,disabled:!O.CAN_ADD_KEYS,onChange:function(e){l((0,a.Z)((0,a.Z)({},i),{},{localai_base_url:e.target.value})),T(I.add("localai_base_url"))}})]})})})})}),(0,v.jsx)(c.Z,{children:(0,v.jsx)(d.Z,{xs:24,md:14,children:(0,v.jsx)(t.Z.Item,{label:"LocalAI API Key",children:(0,v.jsx)(c.Z,{children:(0,v.jsxs)(d.Z,{xs:24,md:16,children:[" ",(0,v.jsx)(u.Z.Password,{value:i.localai_api_key,disabled:!O.CAN_ADD_KEYS,onChange:function(e){l((0,a.Z)((0,a.Z)({},i),{},{localai_api_key:e.target.value})),T(I.add("localai_api_key"))}})]})})})})}),"true"==={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_ENABLE_SUBSCRIPTION_MANAGEMENT&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c.Z,{children:(0,v.jsx)(d.Z,{span:16,children:(0,v.jsx)(t.Z.Item,{name:"logo",label:"Custom Logo",valuePropName:"filelist",help:"[Pro Feature] Add a custom logo to your Promptly apps. 150px x 30px recommended.",children:(0,v.jsx)(c.Z,{children:(0,v.jsxs)(d.Z,{span:24,children:[" ",(0,v.jsx)(Z.Z,{rotationSlider:!0,aspect:5.06,children:(0,v.jsx)(p.Z,{disabled:!O.CAN_UPLOAD_APP_LOGO,accept:"image/*",action:function(e){return new Promise((function(n){var o=new FileReader;o.readAsDataURL(e),o.onload=function(e){var o,s;l((0,a.Z)((0,a.Z)({},i),{},{logo:null===(o=e.target)||void 0===o?void 0:o.result})),n(null===(s=e.target)||void 0===s?void 0:s.result)}}))},listType:"picture-card",fileList:i.logo?[{uid:"-1",name:"logo.png",status:"done",url:i.logo}]:[],onChange:function(e){0===e.fileList.length&&l((0,a.Z)((0,a.Z)({},i),{},{logo:""})),T(I.add("logo"))},onPreview:m,children:i.logo?"":"+ Upload"})})]})})})})}),(0,v.jsx)(y.Z,{})]}),"true"==={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_ENABLE_SUBSCRIPTION_MANAGEMENT&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(c.Z,{style:{flexDirection:"column"},children:[(0,v.jsx)("strong",{children:"Subscription"}),(0,v.jsxs)("p",{style:{display:O.IS_ORGANIZATION_MEMBER?"none":"block"},children:["Logged in as\xa0",(0,v.jsx)("strong",{children:i.user_email}),". You are currently subscribed to\xa0",(0,v.jsx)("strong",{children:O.IS_PRO_SUBSCRIBER?"Pro":O.IS_BASIC_SUBSCRIBER?"Basic":"Free"}),"\xa0tier. Click on the Manage Subscription button below to change your plan.\xa0",(0,v.jsx)("br",{}),(0,v.jsx)("i",{children:"Note: You will be needed to login with a link that is sent to your email."})]}),(0,v.jsxs)("p",{style:{display:O.IS_ORGANIZATION_MEMBER?"block":"none"},children:["Logged in as ",(0,v.jsx)("strong",{children:i.user_email}),". Your account is managed by your organization,\xa0",(0,v.jsx)("strong",{children:null===N||void 0===N?void 0:N.name}),". Please contact your admin to manage your subscription."]})]}),(0,v.jsx)(y.Z,{})]}),(0,v.jsxs)(c.Z,{style:{gap:5},children:["true"==={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_ENABLE_SUBSCRIPTION_MANAGEMENT&&(0,v.jsx)(x.ZP,{href:"".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SUBSCRIPTION_MANAGEMENT_URL,"?prefilled_email=").concat(encodeURIComponent(i.user_email)),target:"_blank",style:{display:O.IS_ORGANIZATION_MEMBER?"none":"inherit"},children:"Manage Subscription"}),(0,v.jsx)(x.ZP,{type:"primary",onClick:function(){I.forEach((function(e){return function(e){f(!0);var n={};n[e]=i[e],(0,g.B6)("api/profiles/me",n,(function(e){f(e)}),(function(e){l({token:e.token,openai_key:e.openai_key,stabilityai_key:e.stabilityai_key,cohere_key:e.cohere_key,forefrontai_key:e.forefrontai_key,elevenlabs_key:e.elevenlabs_key,google_service_account_json_key:e.google_service_account_json_key,azure_openai_api_key:e.azure_openai_api_key,localai_api_key:e.localai_api_key,localai_base_url:e.localai_base_url,anthropic_api_key:e.anthropic_api_key,logo:e.logo}),f(!1)}),(function(){}))}(e)}))},children:"Update"})]})]})})})})}}}]);
//# sourceMappingURL=6706.0d52b3ca.chunk.js.map