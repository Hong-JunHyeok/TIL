---
sidebar_position: 1
---

리덕스는 전역적으로 상태를 관리해주는 라이브러리이다.

하지만 리덕스 자체적인 기능만으로 구현하지 못하는 기능이 있는데, 바로 **비동기적인** 처리이다.

그래서 써드파티 라이브러리들이 제공되는데 대표적인 라이브러리로는 `redux-thunk`,`redux-saga` 등이 있다.

수 많은 라이브러리 중 `redux-saga`의 정말 기본적인 effects들을 정리해보도록 하자.

## effects

### - fork

    fork는 함수를 실행하는 기능을 한다.

### - call

    call은 함수를 실행하는 기능을 한다.

> ## 그럼 call과 fork의 차이는 무엇일까?
>
> 바로 **동기적/비동기적** 처리에 있다.
> fork는 동기적으로 함수를 실행하는 역할을 하며,
> call은 비동기적으로 함수를 실행하는 역할을 한다.

### - take

    take는 일종의 이벤트리스너 같은 역할을 한다.

```js
function* watchLogIn() {
  yield take("LOG_IN_REQUEST", logIn);
}
```

위 코드는 LOG_IN_REQUEST라는 액션이 감지되면 logIn이라는 사가를 실행하는 코드이다.

하지만, take는 **일회성**이다.
그래서 이를 해결하기 위해 while(true)문으로 감싸거나, 다른 함수를 쓰면 된다.(takeEvery ,takeLatest 등...)

### - takeEvery

    takeEvery는 take의 무한 순환버전(while)이라고 생각하면 된다.

하지만 차이점도 있는데, while문으로 작성한 take는 동기적으로 작동하는 반면, takeEvery는 비동기적으로 동작한다는 차이가 있다.

### - takeLatest

    takeLatest는 역속되는 액션이 발생할 시에 가장 마지막에 발생한 액션만 감지하는 기능이다.

takeLatest는 예를들어 addPost하는 작업을 수행했을때, 두번 누를 경우, 첫번째의 작업이 취소되고 두번째에 작업이 실행되는 거라고 생각할 수 있는데, 무조건 그렇게 작동하는게 아니다.

**takeLatest는 동시에 실행중일때 가장 마지막의 액션만 실행하는 것이다.**

요청은 취소못하고 응답을 취소한다는 단점이 있다.

(보통 서버단에서 이러한 현상을 해결해준다.)

### - throttle

    지정한 시간만큼 액션이 실행되게 해준다.

위에서 말한 takeLatest의 단점을 해결해주는데, throttle은 요청을 아예 막을수 있다. (지정한 시간만큼)

### - put

    put은 디스패치를 하는 역할을 한다.

```js
yield put({
    type: "LOG_IN_REQUEST",
});
```

### - all

    all은 한꺼번에 다 실행하는 역할을 한다.

```js
export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]);
}
```

## 각 effects마다 yield를 써줘야하는 이유는 무엇일까?

yield를 쓰면 함수의 동작을 멈추므로 테스트를 하기에 수월해진다.

# 나중에 공부할 것.

[웹팩 (공식 한글문서)공부하기](https://webpack.kr/)
