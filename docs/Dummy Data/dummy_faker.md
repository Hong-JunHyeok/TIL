---
sidebar_position: 1
---

# Faker로 더미데이터 만들기

프론트엔드에서 개발을 하다보면 아직 서버가 완성단계가 아닐때, 데이터를 테스트 하기 위해서 더미데이터를 사용하는 경우가 많다. 그럴때 보통

```js
const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: "Hong-JunHyeok",
  },
  Images: [],
  Comments: [],
});
```

이런 식으로 더미데이터를 생성해주는 함수를 만들거나 직접 하드코딩하는데, **그런 방식은 비효율적이라는 사실을 우리는 알고 있기 때문에,** 우리는 더미데이터를 자동으로 생성해주는 라이브러리를 알아볼려고 한다.

faker.js 라는 라이브러리는 이러한 작업을 해준다.

![faker_image](https://raw.githubusercontent.com/Marak/faker.js/master/logo.png)

사용 방법은 굉장히 간단하다.

```js
import faker from "faker";
```

를 해서 faker 모듈을 가져와서 faker로 더미데이터를 생성해주기만 하면된다.

다음 코드는 내가 리덕스로 프로젝트를 진행할 때 faker로 더미데이터를 만들었던 예제이다.

```js
initialState.mainPosts = initialState.mainPosts.concat(
  Array(20)
    .fill()
    .map(() => ({
      id: shortid.generate(),
      User: {
        id: shortid.generate(),
        nickname: faker.name.findName(),
      },
      content: faker.lorem.paragraph(),
      Images: [
        {
          src: faker.image.image(),
        },
      ],
      Comments: [
        {
          User: {
            id: shortid.generate(),
            nickname: faker.name.findName(),
          },
          content: faker.lorem.sentence(),
        },
      ],
    }))
);
```

그러면 자동으로 faker는 더미데이터를 생성해주고, 우리는 갯수도 자유롭게 늘릴 수 있다.

> Faker.js로 생성한 더미데이터.
> ![](https://images.velog.io/images/hjh040302/post/f50a7811-5a68-446a-9405-bd6bcc088d71/image.png)

지원하는 데이터의 종류도 굉장히 많아서 사용할 만 하다.

[npm faker.js 바로가기](https://www.npmjs.com/package/faker)
