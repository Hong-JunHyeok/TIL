---
sidebar_position: 1
---

# Immer.js Redux에 사용해 보기.

오늘은 **Next.js + Redux + Redux-saga**를 공부하면서 불편했던 점과 어떤 라이브러리로 극복했는지에 대한 이야기를 해볼려고 한다.

React의 state는 불변성을 유지하면서 코딩을 해야하는데, 그 이유는 기본적인 이론으로는 V-DOM이 변화를 감지하기 위해서 사용하는 것인데, 이에 대해서는 나중에 TIL에 작성을 할 것 이다.

아무튼, 불변성을 지키면서 코딩을 하면 코드의 양이 기본적으로 늘어날 수 밖에 없다. 내가 댓글을 삭제하는 로직을 리듀서에 구현을 해봤는데,

```js
// 불변성 지키면서 코딩
const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
const post = { ...state.mainPosts[postIndex] };
post.Comments = [dummyComment(action.data.content), ...post.Comments];
const mainPosts = [...state.mainPosts];
mainPosts[postIndex] = post;
return {
  ...state,
  mainPosts,
  addCommentLoading: false,
  addCommentDone: true,
};
```

뭔가 굉장히 비효율적이고 직관적이지가 않다.

그래서 **Immer**라는 라이브러리는 이러한 문제점을 해결해주는데, 불변성을 지키지 않고 코딩을 할 수 있다는 것이다.

한번 불변성을 지키지 않고 Immer를 사용하였을때, 코드가 얼마나 직관적이고 짧아지는 확인해보도록 하자.

```js
const post = draft.mainPosts.find((v) => v.id === action.data.postId);
      post.Comments.unshift(dummyComment(action.data.content));
      draft.addCommentLoading = false;
      draft.addCommentDone = true;
      break;
```

Immer를 사용하면 이러한 형태의 코드가 된다.

**draft**라는 것은 state라고 생각하면 되고, 그 state를 그냥 불변성을 무시해버리고 사용하면 된다.

Immer의 기본 꼴을 보도록 하자.

```js
produce(state, (draft) => {
    // ...code
}
```

저기 첫번제 파라미터로 state가 들어가게 되면 draft에서 state역할을 하게 된다. 그러면 불변성을 지키지 않아도 되는 상태가 된다.

:::info
Immer를 Redux에 사용할거면 **프로젝트 초기**에 설정하는게 좋다.
:::

왜 프로젝트 초기에 사용하면 좋냐면, 기존에 불변성을 지키면서 코딩하던 작업을 다 갈아없고 drafting하는 작업을 해야하기 때문에 오히려 작업이 번거로워진다.

개인적인 생각으로는 redux로 큰 프로젝트를 진행한다면, Immer를 꼭 도입하는게 좋다고 생각된다.

**코드의 질을 높여줄 뿐만 아니라 개발속도도 높아지기 때문이다.**

그래서 Redux로 프로젝트를 진행할려는 사람들은 Immer를 꼭 한번 알아보고 사용해보는걸 추천한다.

![immer](https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/432/616/square_480/ImmuateableImmer_Final.png)
