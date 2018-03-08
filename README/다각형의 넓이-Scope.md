# Scope

- ### scope (BOX)

  ```javascript
   var name = 'play ground';
      function home() {
          var homeName = 'my house';
        console.log(name); //play ground
        console.log(homeName); //my house
      }
      home();
  ```

  - 전역변수는 함수안에서 접근가능함
  - 함수 안의 변수는 전역변수에서 접근할 수 없음



- ### scope 중첩함수

  - 바깥쪽 함수(scope영역)에서 안쪽의 변수값을 접근하려고 하면 오류가 발생.

  ```javascript
  var name = 'play ground';
  function home() {
    var homeName = 'my house';
    function printName() {
       var nickName = 'crong house';
    }
    printName();
    console.log(name); //play ground
    console.log(homeName); //my house
    console.log(nickName); //error, not defined
  }
  home();
  ```



- ### scope chain

  - 변수를 찾기 위해서, 지역스코프(안쪽함수)에서 전역스코프까지 단계적으로 올라가면서 찾는다.

  ```javascript
  var name = 'play ground';
  function home() {
    var homeName = 'my house';
    function printName() {
       var nickName = 'crong house';
       console.log(nickName);     //crong house
       console.log(homeName);     //my house
       console.log(name);     //play ground
    }
    printName();

  }
  home();
  ```

  ​

- ### 함수단위의 scope

  - var을 사용할 경우, 함수 밖에서도 그 값을 사용할 수 있음

  ```javascript
  var name = 'play ground';
  function home() {
    var homeName = 'my house';
    for (var i = 0; i<1000; i++){}
    console.log(i); //1000
  }
  ```

  ​

- ### 변수 hosting (끌어올림) 1/2

  - **var로 선언된 변수는 함수 맨 위쪽부분으로 올려져서** undefined가 대입된다

  ```javascript
  var name = 'play ground';
  function home() {
    var homeName = 'my house';
    console.log(i) // error or undefined ?
    for (var i = 0; i<1000; i++){}
    console.log(i); //1000
  }
  ```



- ### 변수 hosting (끌어올림) 2/2

  ```javascript
  var name = 'play ground';
  function home() {
    var homeName = 'my house';
    for (var i = 0; i<1000; i++){}
  }

  //위 코드는 아래와 같다.
  var name = 'play ground';
  function home() {
    var i;
    var homeName = 'my house';
    for (i = 0; i<1000; i++){}
  }
  ```



- ### 블럭단위의 scpoe

  - ES6에서는 `let` 키워드를 사용해서 변수를 선언하면 **Block({})단위의 scope를 만들 수 있다.** 키워드를 사용하면 됨.

  ```javascript
  var name = 'play ground';
  function home() {
    var homeName = 'my house';
    for (let i = 0; i<1000; i++){}
    console.log(i); //i is not defined
  }
  ```

  - **Block 단위로 사용할 때에는 let을 사용하는것을 권장함**



- ### const

  - const 로 선언된 변수는 재정의할 수 없음

  ```javascript
  function home() {
    const homeName = 'my house';
    homeName = 'your house';
  }

  home() //TypeError: Assignment to constant variable.
  ```

  - const를 사용하더라도 **배열과 오브젝트의 값을 변경하는것은 가능**함

  ```javascript
  function home() {
    const list = ['john', 'adele', 'hary'];
    list.push('tiger');
    return list;
  }
  home() //["john", "adele", "hary", "tiger"]
  ```