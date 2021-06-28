---
sidebar_position: 2
---

# Sequelize

## 시퀄라이즈로 DB설계해보기

Node.js로 API서버를 제작할 때 SQL을 사용해서 DB를 조작하는 방법도 있겠지만, **Sequelize를 이용해서 JS로 DB를 조작하는 방법도 있다.** (사실 내부적으로 SQL을 사용한다.)

![Sequelize](https://blog.kakaocdn.net/dn/bMn2pi/btqArSuvT2Y/N0w7N5eU2czvzmVtfD7kOK/img.png)

먼저 시퀄라이즈로 DB를 설계해보겠다.
User의 정보를 담는 DB를 설계할때는 다음과 같이 작성을 하였다.

```js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      //STRING , TEXT , BOOLEAN , INTEGER , FLOAT , DATETIME
      // id가 기본적으로 들어있다.
      email: {
        type: DataTypes.STRING(30),
        allowNull: false, //필수
        unique: true, //고유한 값
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false, //필수
      },
      password: {
        // 암호화를 하기때문에 길이를 늘림.
        type: DataTypes.STRING(100),
        allowNull: false, //필수
      },
    },
    {
      charset: "utf8",
      collate: "utf8-general-ci", //한글 저장
    }
  );
  User.associate = (db) => {};
  return User;
};
```

이렇게 시퀄라이즈를 이용하면 쿼리문을 사용하지 않고 JS로 조작할 수 있게 된다.

시퀄라이즈로 관계를 작성할때는 associate를 사용하면 된다.

## Sequelize로 관계 작성해보기

![](https://images.velog.io/images/hjh040302/post/8a8b6c02-5434-43f8-b217-a774bfd7f238/image.png)

다음과 같이 DB의 관계를 시퀄라이즈로 표현할려면 **associate**에 표현하면 된다.

예를 들어 Post테이블의 관계를 쓴다면,

```js
Post.associate = (db) => {
  db.Post.belongsTo(db.User);
  db.Post.belongsToMany(db.Hashtag);
  db.Post.hasMany(db.Comment);
  db.Post.hasMany(db.Image);
  db.Post.belongsToMany(db.User, {
    through: "Like",
    as: "Likers",
  });
  db.Post.belongsTo(db.Post, {
    as: "Retweet",
  });
};
```

이렇게 쓰면 된다.

- **belongsTo** : 1 대 1관계
- **belongsToMany** : 다 대 다 관계
- **hasMany** : 1 대 다 관계

sequelize init으로 프로젝트를 생성하게 되면 다음과 같은 코드가 있을텐데,

```js
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
```

이 코드는 만들었던 associate (관계)를 실행해주는 역할이다.

## Sequelize DB생성

```
npx sequelize db:create
```

이 명령어를 치면 DB가 만들어지고,

```js
db.sequelize
  .sync()
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch((error) => {
    console.log(error);
  });
```

app.js에서 sync() 작업을 해주면 성공적으로 DB의 연결이 된다.
