---
sidebar_position: 1
---

# 리액트 무한 스크롤 구현해보기

## 무한 스르롤이란?

**사용자가 스크롤을 할때 콘텐츠의 끝에 도달할때, 다음 데이터를 가져오는 행위.**
사용자는 스크롤을 무한으로 한다는 착각에 빠진다.

## 사전 지식

scrollY : 얼마나 내렸는지.
clientHeight : 보여지는 화면의 길이.
scrollHeight : 총 길이.

이를 통해서 무한 스크롤을 구현할 수 있다.

```js
if (
  window.scrollY + document.documentElement.clientHeight ===
  document.documentElement.scrollHeight
) {
  // 포스트 가져오기
}
```

> ![](https://images.velog.io/images/hjh040302/post/b77ad443-7f75-4cf5-b6df-bd500f161201/image.png)
> 첫번째 : scrollY 두번째 : clientHeight 세번째 : scrollHeight

위의 로직은 사용자가 스크롤 가장 밑에 닿았을 경우에 포스트를 더 가져오는 로직이다.

scrollHeight가 사용자가 스크롤 해야할 총 길이이고, scrollY랑 clientHeight를 더한 값은 scrollHeight가 되기 때문에, 이렇게 하면 무한스크롤을 구현 가능하다.

하지만 실제 facebook이나 instagram을 보면 가장 밑이 아니라 **근접**했을때 로드를 하는 모습을 확인 할 수 있다.

이제 그렇게 할려면 로직을 다음과 같이 변경하면 된다.

```js
if (
  window.scrollY + document.documentElement.clientHeight >
  document.documentElement.scrollHeight - 1000
) {
  // 포스트 불러오기
}
```

그러면 사용자가 바텀 100px정도 띄어져있을때 포스트를 불러오게 된다.

## 실 구동 모습

![](https://images.velog.io/images/hjh040302/post/96fd8131-5b62-497e-a0a2-c4d05fa898f8/infinite_scroll.gif)

## 최적화

무한스크롤의 단점이 있다.

사용자가 스크롤을 쭉~ 하게 된다면 결국 나중에는 메모리가 꽉 차게되서 애플리케이션이 튕기게 될 가능성이 있다. 그러면 이러한 단점을 어떻게 해결할까?

# [react-virtualized](https://www.npmjs.com/package/react-virtualized)

![image](https://cloud.githubusercontent.com/assets/29597/11737732/0ca1e55e-9f91-11e5-97f3-098f2f8ed866.png)

위의 라이브러리를 사용해서 해결하는 방법이 있다.

해당 라이브러리가 무한스크롤을 구현하는 방법은, 화면의 보여지는 콘텐츠만을 남겨놓는 방식이다.

![](https://images.velog.io/images/hjh040302/post/062b4ff2-c543-4677-b388-a26048bd2ec8/2021-06-27%2008.07.32.gif)

대표적인 예가 Instagram이고, 덕분에 사용자는 아무 버벅임 없이 사용할 수 있게 되었다.
