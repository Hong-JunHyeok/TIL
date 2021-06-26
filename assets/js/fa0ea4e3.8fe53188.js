(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21],{7315:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return i},toc:function(){return p},default:function(){return l}});var a=n(2122),s=n(9756),m=(n(7294),n(3905)),r=["components"],o={sidebar_position:1},d="Immer.js Redux\uc5d0 \uc0ac\uc6a9\ud574 \ubcf4\uae30.",i={unversionedId:"Immer/Immer.js",id:"Immer/Immer.js",isDocsHomePage:!1,title:"Immer.js Redux\uc5d0 \uc0ac\uc6a9\ud574 \ubcf4\uae30.",description:"\uc624\ub298\uc740 Next.js + Redux + Redux-saga\ub97c \uacf5\ubd80\ud558\uba74\uc11c \ubd88\ud3b8\ud588\ub358 \uc810\uacfc \uc5b4\ub5a4 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \uadf9\ubcf5\ud588\ub294\uc9c0\uc5d0 \ub300\ud55c \uc774\uc57c\uae30\ub97c \ud574\ubcfc\ub824\uace0 \ud55c\ub2e4.",source:"@site/docs/Immer/Immer.js.md",sourceDirName:"Immer",slug:"/Immer/Immer.js",permalink:"/TIL/docs/Immer/Immer.js",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Immer/Immer.js.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Faker\ub85c \ub354\ubbf8\ub370\uc774\ud130 \ub9cc\ub4e4\uae30",permalink:"/TIL/docs/Dummy Data/dummy_faker"},next:{title:"redux-saga-effects",permalink:"/TIL/docs/Redux/redux-saga-effects"}},p=[],u={toc:p};function l(t){var e=t.components,n=(0,s.Z)(t,r);return(0,m.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"immerjs-redux\uc5d0-\uc0ac\uc6a9\ud574-\ubcf4\uae30"},"Immer.js Redux\uc5d0 \uc0ac\uc6a9\ud574 \ubcf4\uae30."),(0,m.kt)("p",null,"\uc624\ub298\uc740 ",(0,m.kt)("strong",{parentName:"p"},"Next.js + Redux + Redux-saga"),"\ub97c \uacf5\ubd80\ud558\uba74\uc11c \ubd88\ud3b8\ud588\ub358 \uc810\uacfc \uc5b4\ub5a4 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \uadf9\ubcf5\ud588\ub294\uc9c0\uc5d0 \ub300\ud55c \uc774\uc57c\uae30\ub97c \ud574\ubcfc\ub824\uace0 \ud55c\ub2e4."),(0,m.kt)("p",null,"React\uc758 state\ub294 \ubd88\ubcc0\uc131\uc744 \uc720\uc9c0\ud558\uba74\uc11c \ucf54\ub529\uc744 \ud574\uc57c\ud558\ub294\ub370, \uadf8 \uc774\uc720\ub294 \uae30\ubcf8\uc801\uc778 \uc774\ub860\uc73c\ub85c\ub294 V-DOM\uc774 \ubcc0\ud654\ub97c \uac10\uc9c0\ud558\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9\ud558\ub294 \uac83\uc778\ub370, \uc774\uc5d0 \ub300\ud574\uc11c\ub294 \ub098\uc911\uc5d0 TIL\uc5d0 \uc791\uc131\uc744 \ud560 \uac83 \uc774\ub2e4."),(0,m.kt)("p",null,"\uc544\ubb34\ud2bc, \ubd88\ubcc0\uc131\uc744 \uc9c0\ud0a4\uba74\uc11c \ucf54\ub529\uc744 \ud558\uba74 \ucf54\ub4dc\uc758 \uc591\uc774 \uae30\ubcf8\uc801\uc73c\ub85c \ub298\uc5b4\ub0a0 \uc218 \ubc16\uc5d0 \uc5c6\ub2e4. \ub0b4\uac00 \ub313\uae00\uc744 \uc0ad\uc81c\ud558\ub294 \ub85c\uc9c1\uc744 \ub9ac\ub4c0\uc11c\uc5d0 \uad6c\ud604\uc744 \ud574\ubd24\ub294\ub370,"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-js"},"// \ubd88\ubcc0\uc131 \uc9c0\ud0a4\uba74\uc11c \ucf54\ub529\nconst postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);\nconst post = { ...state.mainPosts[postIndex] };\npost.Comments = [dummyComment(action.data.content), ...post.Comments];\nconst mainPosts = [...state.mainPosts];\nmainPosts[postIndex] = post;\nreturn {\n  ...state,\n  mainPosts,\n  addCommentLoading: false,\n  addCommentDone: true,\n};\n")),(0,m.kt)("p",null,"\ubb54\uac00 \uad49\uc7a5\ud788 \ube44\ud6a8\uc728\uc801\uc774\uace0 \uc9c1\uad00\uc801\uc774\uc9c0\uac00 \uc54a\ub2e4."),(0,m.kt)("p",null,"\uadf8\ub798\uc11c ",(0,m.kt)("strong",{parentName:"p"},"Immer"),"\ub77c\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \uc774\ub7ec\ud55c \ubb38\uc81c\uc810\uc744 \ud574\uacb0\ud574\uc8fc\ub294\ub370, \ubd88\ubcc0\uc131\uc744 \uc9c0\ud0a4\uc9c0 \uc54a\uace0 \ucf54\ub529\uc744 \ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc774\ub2e4."),(0,m.kt)("p",null,"\ud55c\ubc88 \ubd88\ubcc0\uc131\uc744 \uc9c0\ud0a4\uc9c0 \uc54a\uace0 Immer\ub97c \uc0ac\uc6a9\ud558\uc600\uc744\ub54c, \ucf54\ub4dc\uac00 \uc5bc\ub9c8\ub098 \uc9c1\uad00\uc801\uc774\uace0 \uc9e7\uc544\uc9c0\ub294 \ud655\uc778\ud574\ubcf4\ub3c4\ub85d \ud558\uc790."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-js"},"const post = draft.mainPosts.find((v) => v.id === action.data.postId);\n      post.Comments.unshift(dummyComment(action.data.content));\n      draft.addCommentLoading = false;\n      draft.addCommentDone = true;\n      break;\n")),(0,m.kt)("p",null,"Immer\ub97c \uc0ac\uc6a9\ud558\uba74 \uc774\ub7ec\ud55c \ud615\ud0dc\uc758 \ucf54\ub4dc\uac00 \ub41c\ub2e4."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"draft"),"\ub77c\ub294 \uac83\uc740 state\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ub418\uace0, \uadf8 state\ub97c \uadf8\ub0e5 \ubd88\ubcc0\uc131\uc744 \ubb34\uc2dc\ud574\ubc84\ub9ac\uace0 \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4."),(0,m.kt)("p",null,"Immer\uc758 \uae30\ubcf8 \uaf34\uc744 \ubcf4\ub3c4\ub85d \ud558\uc790."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-js"},"produce(state, (draft) => {\n    // ...code\n}\n")),(0,m.kt)("p",null,"\uc800\uae30 \uccab\ubc88\uc81c \ud30c\ub77c\ubbf8\ud130\ub85c state\uac00 \ub4e4\uc5b4\uac00\uac8c \ub418\uba74 draft\uc5d0\uc11c state\uc5ed\ud560\uc744 \ud558\uac8c \ub41c\ub2e4. \uadf8\ub7ec\uba74 \ubd88\ubcc0\uc131\uc744 \uc9c0\ud0a4\uc9c0 \uc54a\uc544\ub3c4 \ub418\ub294 \uc0c1\ud0dc\uac00 \ub41c\ub2e4."),(0,m.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,m.kt)("div",{parentName:"div",className:"admonition-heading"},(0,m.kt)("h5",{parentName:"div"},(0,m.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,m.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,m.kt)("div",{parentName:"div",className:"admonition-content"},(0,m.kt)("p",{parentName:"div"},"Immer\ub97c Redux\uc5d0 \uc0ac\uc6a9\ud560\uac70\uba74 ",(0,m.kt)("strong",{parentName:"p"},"\ud504\ub85c\uc81d\ud2b8 \ucd08\uae30"),"\uc5d0 \uc124\uc815\ud558\ub294\uac8c \uc88b\ub2e4."))),(0,m.kt)("p",null,"\uc65c \ud504\ub85c\uc81d\ud2b8 \ucd08\uae30\uc5d0 \uc0ac\uc6a9\ud558\uba74 \uc88b\ub0d0\uba74, \uae30\uc874\uc5d0 \ubd88\ubcc0\uc131\uc744 \uc9c0\ud0a4\uba74\uc11c \ucf54\ub529\ud558\ub358 \uc791\uc5c5\uc744 \ub2e4 \uac08\uc544\uc5c6\uace0 drafting\ud558\ub294 \uc791\uc5c5\uc744 \ud574\uc57c\ud558\uae30 \ub54c\ubb38\uc5d0 \uc624\ud788\ub824 \uc791\uc5c5\uc774 \ubc88\uac70\ub85c\uc6cc\uc9c4\ub2e4."),(0,m.kt)("p",null,"\uac1c\uc778\uc801\uc778 \uc0dd\uac01\uc73c\ub85c\ub294 redux\ub85c \ud070 \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud55c\ub2e4\uba74, Immer\ub97c \uaf2d \ub3c4\uc785\ud558\ub294\uac8c \uc88b\ub2e4\uace0 \uc0dd\uac01\ub41c\ub2e4."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"\ucf54\ub4dc\uc758 \uc9c8\uc744 \ub192\uc5ec\uc904 \ubfd0\ub9cc \uc544\ub2c8\ub77c \uac1c\ubc1c\uc18d\ub3c4\ub3c4 \ub192\uc544\uc9c0\uae30 \ub54c\ubb38\uc774\ub2e4.")),(0,m.kt)("p",null,"\uadf8\ub798\uc11c Redux\ub85c \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud560\ub824\ub294 \uc0ac\ub78c\ub4e4\uc740 Immer\ub97c \uaf2d \ud55c\ubc88 \uc54c\uc544\ubcf4\uace0 \uc0ac\uc6a9\ud574\ubcf4\ub294\uac78 \ucd94\ucc9c\ud55c\ub2e4."),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/432/616/square_480/ImmuateableImmer_Final.png",alt:"immer"})))}l.isMDXComponent=!0}}]);