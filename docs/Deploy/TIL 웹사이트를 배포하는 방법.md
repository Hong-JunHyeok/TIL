---
sidebar_position: 2
---

TIL를 배포하기 위해서 facebook의 [도큐사우르스](https://docusaurus.io/ko/docs)를 사용해서 문서형식으로 정리했다.

하지만 처음으로 써보는 도큐먼트라 어떻게 뭘해야하는지 몰랐다.

**지금은 다사다난을 겪고 해결했지만, 다음부터 이런 일이 일어나지 않도록 여기에 방법을 적어야겠다고 생각했다.**

## 1. 🦖 도큐사우르스 프로젝트 생성

먼저 도큐사우르스를 사용할려면 당연히 프로젝트를 생성해야 한다.

[한글문서](https://docusaurus.io/ko/docs)를 보고 차근차근 따라하면 프로젝트는 금방 만들 수 있을것이다.

```zsh
npx @docusaurus/init@latest init [name] [template]
```

다음과 같은 명령어를 터미널에 입력해주면, 그 디렉토리안에 name이라는 폴더를 생성해준다.

이러면 도큐사우르스를 사용할 준비가 되었는데, 다음과 같은 명령어로 실행해주자.

```zsh
cd [name]

yarn start
```

그러면 3000포트에 실행될것이다. (이미 실행중이라면 다른포트에 열수 있다.)

## 2. ✍️ 글 쓰는 방법.

이제 글을 추가해볼건데, `blog` TIL를 하면서 블로그는 쓰지 않을것이기 때문에 그 폴더는 지우고, `docs`라는 폴더가 있는데, 거기에 글을 작성할 것이다.

![](https://images.velog.io/images/hjh040302/post/87a585a8-4fea-43ff-b96d-3bc390ba2672/image.png)

이런식으로 `폴더 > 파일`이 있는 구조인데, 그런식으로 할려면

![](https://images.velog.io/images/hjh040302/post/dee9927b-924f-40f6-b60e-21943c4d5f4d/image.png)

이렇게 파일을 생성해주면 자동으로 도큐사우르스가 화면에 빌딩해준다.

## 3. 📦 배포하는 방법.

**나는 이 부분에서 정말 많은 다사다난을 겪었다.**

하지만 어려운 문제는 아니였고 정말 당황스러운 문제였는데, 일단 차근차근 톺아보자.

[배포하는\_방법](https://docusaurus.io/ko/docs/deployment) 이 사이트에서 배포하는 방법이 자세히 나와있다.

먼저 나는 **Github Pages**를 사용해서 배포를 할 것이며, **Travis**를 사용해서 배포 자동화를 진행할 것이다.

Travis는 github에 push나 pr이 있을때 그것을 감지해서 자동으로 배포하는 기능을 담당한다.

Github Pages로 배포하는 작업은 정말 쉽다.
**단, 몇몇의 설정을 해줘야한다.**

```js title="/docusaurus.config.js"
module.exports = {
  // ...
  url: "https://endiliey.github.io", // 웹사이트 URL
  baseUrl: "/", // 기본이 되는 URL
  projectName: "endiliey.github.io", //당신의 레포지토리 이름
  organizationName: "endiliey", //당신의 Github이름
  // ...
};
```

이 네가지만 설정해주면 Github Pages에 배포할 준비가 되었다. 참고로 내 config를 보여주겠다.

```js
url: "https://hong-junhyeok.github.io",
baseUrl: "/TIL/",
organizationName: "Hong-JunHyeok",
projectName: "TIL",
```

:::caution

**이때 baseUrl설정이 정말 중요한데, 저렇게 projectName이 들어갈 수 있도록 설정한다.**

:::

왜냐하면 Github Pages로 배포하면 레포지토리의 이름이 baseUrl로 들어가기 때문이다. (이 설정을 안해주면 페이지가 다 깨지게 된다.)

> ![](https://images.velog.io/images/hjh040302/post/e9e09c24-5363-42f0-87fb-81150f24a9eb/image.png)
> 대충 이런 에러가 뜬다.

이제 다음고 같은 명령어로 배포를 진행해보자.

```
GIT_USER=<GITHUB_USERNAME> yarn deploy
```

GITHUB_USERNAME에는 당신의 깃허브 이름이 들어가면 된다.(< 제외)

이제 조금만 기다리면 gh-pages라는 브랜치가 생기고
![](https://images.velog.io/images/hjh040302/post/3edc5cbc-0aff-469b-a819-5588abec01f8/image.png)

다음과 같은 상태가 될것이다. 그러면 페이지가 조금 기다리면 생성되게 된다.

## 4. ⚙️ 배포 자동화

배포는 travis를 사용하는데, 다른 것을 사용해도 무방하다.

> 난 개인적으로 travis가 깔끔하고 쉽다고 느껴서 사용한다.

새로운 커밋이 발생할때마다 `yarn deploy`하는 작업을 자동으로 해주는 것이다.

[여기](https://github.com/settings/tokens)에 접속해서 개인용 접근 토큰을 가져온다.

**Generate new token**이라는 버튼을 누르면
Note를 적어서 용도를 간략히 적어주고

![](https://images.velog.io/images/hjh040302/post/60738d1a-dc6a-4c42-9b9e-be5da9a10048/image.png)

밑 체크박스에서 다음과 같이 체크를 해준다.

그러면 **레포지토리에 접근할 권한**이 있는 토큰을 생성시켜 준다.

생성된 토큰을 복사해두자. (나중에 또 못봄)

이때, 토큰은 입장권같은 개념이라고 생각하면 된다.

이제, 프로젝트의 루트폴더에 `.travis.yml`을 생성하자.

![](https://images.velog.io/images/hjh040302/post/67113369-4343-4e84-b5f5-9be7bde95a21/image.png)

이제 그 폴더 내에 다음과 같이 작성해주자.

```yml
language: node_js
node_js:
  - "14"
branches:
  only:
    - main #혹은 당신의 메인 브랜치
cache:
  yarn: true
script:
  - git config --global user.name "${GH_NAME}"
  - git config --global user.email "${GH_EMAIL}"
  - echo "machine github.com login ${GH_NAME} password ${GET_TOKEN}" > ~/.netrc
  - yarn && GIT_USER="${GH_NAME}" yarn deploy
```

node_js라는 것은 node의 버전을 의미한다. 나같은 경우에는 **구버전의 node를 설치할 경우 에러가 발생했다.**

원인은 내가 추측하건데, `yarn install --frozen-lockfile`때문인 것 같다.

> 설치 시, yarn.lock파일을 생성하지 않으며, 업데이트가 필요한 경우 실패하도록 한다.

script는 실행한 명령어들을 적는건데, GH_NAME, GH_EMAIL , GET_TOKEN은 환경변수이다. 이는 travis 설정에서 적용할것이다.

[Travis](https://travis-ci.com/)에 접속해서 로그인 후, TIL 대시보드에 접근한다.

![](https://images.velog.io/images/hjh040302/post/5ffdd1b2-44ce-45af-ba24-f1a5880a1e77/image.png)
여기 setting에 들어가서 환경변수를 설정하면 된다.

![](https://images.velog.io/images/hjh040302/post/d0b7a582-3b41-47be-8e80-0f6ec9ce70ed/image.png)

- GET_TOKEN은 아까 발급받은 토큰을,
- GH_EMAIL은 깃허브 이메일을,
- GH_NAME은 깃허브 이름을 입력해주면 된다.

이 설정이 완료되었으면, Github에 푸쉬를 한번 해보자.

![](https://images.velog.io/images/hjh040302/post/2bef0f12-acd6-41af-bb52-f1f0681b27cb/image.png)

Running탭에 가보면 진행상황을 할 수 있다.

:::info
에러가 발생한다면 **에러 로그**를 잘 살펴보도록 하자.
:::

아마, 잘 해줬다면 다음과 같이 성공을 할것이다.
![](https://images.velog.io/images/hjh040302/post/ce26d594-5101-4bb0-b16c-08865b389a08/image.png)

커밋할때마다 배포를 자동으로 해주는 travis를 설정해 보았다.
