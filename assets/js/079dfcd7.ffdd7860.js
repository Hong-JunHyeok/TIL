(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[522],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=i(r),k=a,f=s["".concat(c,".").concat(k)]||s[k]||d[k]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},478:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),o=["components"],u={sidebar_position:1},c=void 0,i={unversionedId:"Redux/redux-saga-effects",id:"Redux/redux-saga-effects",isDocsHomePage:!1,title:"redux-saga-effects",description:"\ub9ac\ub355\uc2a4\ub294 \uc804\uc5ed\uc801\uc73c\ub85c \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud574\uc8fc\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc774\ub2e4.",source:"@site/docs/Redux/redux-saga-effects.md",sourceDirName:"Redux",slug:"/Redux/redux-saga-effects",permalink:"/TIL/docs/Redux/redux-saga-effects",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Redux/redux-saga-effects.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Sequelize",permalink:"/TIL/docs/Node.js/sequelize"}},p=[{value:"effects",id:"effects",children:[{value:"- fork",id:"--fork",children:[]},{value:"- call",id:"--call",children:[]},{value:"- take",id:"--take",children:[]},{value:"- takeEvery",id:"--takeevery",children:[]},{value:"- takeLatest",id:"--takelatest",children:[]},{value:"- throttle",id:"--throttle",children:[]},{value:"- put",id:"--put",children:[]},{value:"- all",id:"--all",children:[]}]},{value:"\uac01 effects\ub9c8\ub2e4 yield\ub97c \uc368\uc918\uc57c\ud558\ub294 \uc774\uc720\ub294 \ubb34\uc5c7\uc77c\uae4c?",id:"\uac01-effects\ub9c8\ub2e4-yield\ub97c-\uc368\uc918\uc57c\ud558\ub294-\uc774\uc720\ub294-\ubb34\uc5c7\uc77c\uae4c",children:[]}],d={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ub9ac\ub355\uc2a4\ub294 \uc804\uc5ed\uc801\uc73c\ub85c \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud574\uc8fc\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc774\ub2e4."),(0,l.kt)("p",null,"\ud558\uc9c0\ub9cc \ub9ac\ub355\uc2a4 \uc790\uccb4\uc801\uc778 \uae30\ub2a5\ub9cc\uc73c\ub85c \uad6c\ud604\ud558\uc9c0 \ubabb\ud558\ub294 \uae30\ub2a5\uc774 \uc788\ub294\ub370, \ubc14\ub85c ",(0,l.kt)("strong",{parentName:"p"},"\ube44\ub3d9\uae30\uc801\uc778")," \ucc98\ub9ac\uc774\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub798\uc11c \uc368\ub4dc\ud30c\ud2f0 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc774 \uc81c\uacf5\ub418\ub294\ub370 \ub300\ud45c\uc801\uc778 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"redux-thunk"),",",(0,l.kt)("inlineCode",{parentName:"p"},"redux-saga")," \ub4f1\uc774 \uc788\ub2e4."),(0,l.kt)("p",null,"\uc218 \ub9ce\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc911 ",(0,l.kt)("inlineCode",{parentName:"p"},"redux-saga"),"\uc758 \uc815\ub9d0 \uae30\ubcf8\uc801\uc778 effects\ub4e4\uc744 \uc815\ub9ac\ud574\ubcf4\ub3c4\ub85d \ud558\uc790."),(0,l.kt)("h2",{id:"effects"},"effects"),(0,l.kt)("h3",{id:"--fork"},"- fork"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"fork\ub294 \ud568\uc218\ub97c \uc2e4\ud589\ud558\ub294 \uae30\ub2a5\uc744 \ud55c\ub2e4.\n")),(0,l.kt)("h3",{id:"--call"},"- call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"call\uc740 \ud568\uc218\ub97c \uc2e4\ud589\ud558\ub294 \uae30\ub2a5\uc744 \ud55c\ub2e4.\n")),(0,l.kt)("blockquote",null,(0,l.kt)("h2",{parentName:"blockquote",id:"\uadf8\ub7fc-call\uacfc-fork\uc758-\ucc28\uc774\ub294-\ubb34\uc5c7\uc77c\uae4c"},"\uadf8\ub7fc call\uacfc fork\uc758 \ucc28\uc774\ub294 \ubb34\uc5c7\uc77c\uae4c?"),(0,l.kt)("p",{parentName:"blockquote"},"\ubc14\ub85c ",(0,l.kt)("strong",{parentName:"p"},"\ub3d9\uae30\uc801/\ube44\ub3d9\uae30\uc801")," \ucc98\ub9ac\uc5d0 \uc788\ub2e4.\nfork\ub294 \ub3d9\uae30\uc801\uc73c\ub85c \ud568\uc218\ub97c \uc2e4\ud589\ud558\ub294 \uc5ed\ud560\uc744 \ud558\uba70,\ncall\uc740 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \ud568\uc218\ub97c \uc2e4\ud589\ud558\ub294 \uc5ed\ud560\uc744 \ud55c\ub2e4.")),(0,l.kt)("h3",{id:"--take"},"- take"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"take\ub294 \uc77c\uc885\uc758 \uc774\ubca4\ud2b8\ub9ac\uc2a4\ub108 \uac19\uc740 \uc5ed\ud560\uc744 \ud55c\ub2e4.\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'function* watchLogIn() {\n  yield take("LOG_IN_REQUEST", logIn);\n}\n')),(0,l.kt)("p",null,"\uc704 \ucf54\ub4dc\ub294 LOG_IN_REQUEST\ub77c\ub294 \uc561\uc158\uc774 \uac10\uc9c0\ub418\uba74 logIn\uc774\ub77c\ub294 \uc0ac\uac00\ub97c \uc2e4\ud589\ud558\ub294 \ucf54\ub4dc\uc774\ub2e4."),(0,l.kt)("p",null,"\ud558\uc9c0\ub9cc, take\ub294 ",(0,l.kt)("strong",{parentName:"p"},"\uc77c\ud68c\uc131"),"\uc774\ub2e4.\n\uadf8\ub798\uc11c \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 while(true)\ubb38\uc73c\ub85c \uac10\uc2f8\uac70\ub098, \ub2e4\ub978 \ud568\uc218\ub97c \uc4f0\uba74 \ub41c\ub2e4.(takeEvery ,takeLatest \ub4f1...)"),(0,l.kt)("h3",{id:"--takeevery"},"- takeEvery"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"takeEvery\ub294 take\uc758 \ubb34\ud55c \uc21c\ud658\ubc84\uc804(while)\uc774\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ub41c\ub2e4.\n")),(0,l.kt)("p",null,"\ud558\uc9c0\ub9cc \ucc28\uc774\uc810\ub3c4 \uc788\ub294\ub370, while\ubb38\uc73c\ub85c \uc791\uc131\ud55c take\ub294 \ub3d9\uae30\uc801\uc73c\ub85c \uc791\ub3d9\ud558\ub294 \ubc18\uba74, takeEvery\ub294 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \ub3d9\uc791\ud55c\ub2e4\ub294 \ucc28\uc774\uac00 \uc788\ub2e4."),(0,l.kt)("h3",{id:"--takelatest"},"- takeLatest"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"takeLatest\ub294 \uc5ed\uc18d\ub418\ub294 \uc561\uc158\uc774 \ubc1c\uc0dd\ud560 \uc2dc\uc5d0 \uac00\uc7a5 \ub9c8\uc9c0\ub9c9\uc5d0 \ubc1c\uc0dd\ud55c \uc561\uc158\ub9cc \uac10\uc9c0\ud558\ub294 \uae30\ub2a5\uc774\ub2e4.\n")),(0,l.kt)("p",null,"takeLatest\ub294 \uc608\ub97c\ub4e4\uc5b4 addPost\ud558\ub294 \uc791\uc5c5\uc744 \uc218\ud589\ud588\uc744\ub54c, \ub450\ubc88 \ub204\ub97c \uacbd\uc6b0, \uccab\ubc88\uc9f8\uc758 \uc791\uc5c5\uc774 \ucde8\uc18c\ub418\uace0 \ub450\ubc88\uc9f8\uc5d0 \uc791\uc5c5\uc774 \uc2e4\ud589\ub418\ub294 \uac70\ub77c\uace0 \uc0dd\uac01\ud560 \uc218 \uc788\ub294\ub370, \ubb34\uc870\uac74 \uadf8\ub807\uac8c \uc791\ub3d9\ud558\ub294\uac8c \uc544\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"takeLatest\ub294 \ub3d9\uc2dc\uc5d0 \uc2e4\ud589\uc911\uc77c\ub54c \uac00\uc7a5 \ub9c8\uc9c0\ub9c9\uc758 \uc561\uc158\ub9cc \uc2e4\ud589\ud558\ub294 \uac83\uc774\ub2e4.")),(0,l.kt)("p",null,"\uc694\uccad\uc740 \ucde8\uc18c\ubabb\ud558\uace0 \uc751\ub2f5\uc744 \ucde8\uc18c\ud55c\ub2e4\ub294 \ub2e8\uc810\uc774 \uc788\ub2e4."),(0,l.kt)("p",null,"(\ubcf4\ud1b5 \uc11c\ubc84\ub2e8\uc5d0\uc11c \uc774\ub7ec\ud55c \ud604\uc0c1\uc744 \ud574\uacb0\ud574\uc900\ub2e4.)"),(0,l.kt)("h3",{id:"--throttle"},"- throttle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\uc9c0\uc815\ud55c \uc2dc\uac04\ub9cc\ud07c \uc561\uc158\uc774 \uc2e4\ud589\ub418\uac8c \ud574\uc900\ub2e4.\n")),(0,l.kt)("p",null,"\uc704\uc5d0\uc11c \ub9d0\ud55c takeLatest\uc758 \ub2e8\uc810\uc744 \ud574\uacb0\ud574\uc8fc\ub294\ub370, throttle\uc740 \uc694\uccad\uc744 \uc544\uc608 \ub9c9\uc744\uc218 \uc788\ub2e4. (\uc9c0\uc815\ud55c \uc2dc\uac04\ub9cc\ud07c)"),(0,l.kt)("h3",{id:"--put"},"- put"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"put\uc740 \ub514\uc2a4\ud328\uce58\ub97c \ud558\ub294 \uc5ed\ud560\uc744 \ud55c\ub2e4.\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'yield put({\n    type: "LOG_IN_REQUEST",\n});\n')),(0,l.kt)("h3",{id:"--all"},"- all"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"all\uc740 \ud55c\uaebc\ubc88\uc5d0 \ub2e4 \uc2e4\ud589\ud558\ub294 \uc5ed\ud560\uc744 \ud55c\ub2e4.\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default function* rootSaga() {\n  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]);\n}\n")),(0,l.kt)("h2",{id:"\uac01-effects\ub9c8\ub2e4-yield\ub97c-\uc368\uc918\uc57c\ud558\ub294-\uc774\uc720\ub294-\ubb34\uc5c7\uc77c\uae4c"},"\uac01 effects\ub9c8\ub2e4 yield\ub97c \uc368\uc918\uc57c\ud558\ub294 \uc774\uc720\ub294 \ubb34\uc5c7\uc77c\uae4c?"),(0,l.kt)("p",null,"yield\ub97c \uc4f0\uba74 \ud568\uc218\uc758 \ub3d9\uc791\uc744 \uba48\ucd94\ubbc0\ub85c \ud14c\uc2a4\ud2b8\ub97c \ud558\uae30\uc5d0 \uc218\uc6d4\ud574\uc9c4\ub2e4."),(0,l.kt)("h1",{id:"\ub098\uc911\uc5d0-\uacf5\ubd80\ud560-\uac83"},"\ub098\uc911\uc5d0 \uacf5\ubd80\ud560 \uac83."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://webpack.kr/"},"\uc6f9\ud329 (\uacf5\uc2dd \ud55c\uae00\ubb38\uc11c)\uacf5\ubd80\ud558\uae30")))}s.isMDXComponent=!0}}]);