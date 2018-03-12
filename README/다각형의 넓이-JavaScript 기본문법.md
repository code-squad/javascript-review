# 다각형의 넓이

- ### 자바스크립트 버전

  - 자바스크립트 버전은 ECMAScript(ES) 의 버전에 따라 결정
  - 이를 자바스크립트 엔진이 반영함
    - ES5, ES6 (ES2015) .. 같이 버전이 나뉘어져 있음
  - 2018년 중심으로 `ES6`을 지원하는 브라우저가 많음
    - 표준으로 사용됨
  - ES6 는 ES5 문법을 포함하고 있음 `하위호환성`
    - feature 별로 지원하지 않는 브라우저가 있을 수 있음



- ### 변수

  - `var` , `let` , `const`
    - 변수를 사용할 때 주로 `var` 를 사용
    - scope 라는 변수의 유효범위가 달라짐
    - scope 라는 변수의 유효범위가 달라짐
    - let, const 는 ES6 에 있는 기능들



- ### 연산자

  ```javascript
  //or 연산자 활용
  const name = "crong";
  const result = name || "codesquad";
  console.log(result);
  const name = "";
  const result = name || "codesquad";
  console.log(result);
  ```

  - 우선순위를 표현하기 위해 `()` 를 사용
  - `const` 한번 할당한 값에 재할당이 되지 않음

- ### 연산자 - 삼항연산자

  ```javascript
  const data = 11;
  const result = (data > 10) ? "ok" : "fail";
  console.log(result);
  ```

- ### 연산자 - 비교연산자

  ```javascript
  0 == false; // true
  “” == false; // true
  null == false; // false
  0 == “0”; // true
  null==undefined; // true
  ```

  - JavaScript 는 `==` 과 `===` 의 차이가 있음
    - `===` 는 Type까지 비교함
    - `==` 는 암묵적으로 Type을 바꿔서 비교함



- ### 자바스크립트의 Type

  ```javascript
  undefined, null, boolean, number, string, object, function, array, Date, RegExp
  ```

  - 실행타임에 결정 (나중에 결정되는 언어, Dynamic Type)
  - 타입을 체크하는 방법이 없음
  - **toString.call**
    - 검색을 통해서 어떻게 타입을 파악하는지 이해해보기 바람
  - 문자나 숫자같은 기본타입은 `typeof` 키워드를 사용해서 체크할 수 있음
  - 배열 타입을 체크하는 `isArray` 함수가 표준



- ### 비교문

  - if, else if, else
  - 삼항연산자를 통해서 간단한 조건문을 대체할 수 있음



- ### 분기 - switch

  - `if` - `switch`
    - 코드의 가독성 면에서 `switch` 는 대등하게 나열
    - if 문이나 switch 문이나 상관없음
  - `circle` `rect`



- ### 반복

  ```javascript
  function howMany(selectObject) {
    var numberSelected = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }
  ```

  - for문이나 while문을 사용해서 반복문을 구현할 수 있음

  ```javascript
  var arr = [1,2,3];
  for (var i=0, len = arr.length; i < len; i++) {
      
  }
  ```

  - arr.length 를 계속 계산하게 되므로 아예 **선언**시키는 식으로 선언
  - 성능 개선을 위해서 반대로(reverse) 진행하기도 함
  - forEach
  - for-of
    - 자바스크립트 브라우저 호환성 이슈가 존재할 수 있음
  - for-in
    - 객체를 탐색할 때 사용



- ### 문자열 처리

  ```javascript
  typeof "abc";  //string
  typeof "a";    //string
  typeof 'a';    //string. single quote도 사용가능.
  ```

  - 문자열에 다양한 메서드가 있음

  ```javascript
  "ab:cd".split(":"); //["ab","cd"]
  "ab:cd".replace(":", "$"); //"ab$cd"
  " abcde  ".trim();  //"abcde"
  ```

  ```javascript
  var result = "ab:cd".split(":");
  console.log(result);
  ```

  - `trim` `split`
  - `split` 에 `""` 을 제공하면, 한문자씩 모두 짤려서 배열로 리턴됨

- ### 정규표현식

  - 패턴으로 처리하는 방식



- ### [자바스크립트 3점 표기법](https://ddalpange.github.io/2018/01/11/js-es6-three-dots/)

  - Literal 문법

    ```javascript
    const object = {a: 1, b: 2 , c: 3};
    const {a, b} = object;
    console.log(a, b); // 1, 2

    const array = [1,2,3,4,5];
    const [c, d] = array;
    console.log(c, b); // 1, 2
    ```

    - a,b 와 c,d의 값은 1,2가 나옴
    - 프로퍼티가 점점 많아지면?
    - 해당 값의 변수를 계속 선언해주기에는 무리

  ​

  - Rest Opeator

    ```javascript
    const object = {a: 1, b: 2 , c: 3};
    const {a, b, ...objRest} = object;
    console.log(a, b, objRest); // 1, 2 { c: 3 }

    const array = [1,2,3,4,5];
    const [c, d, ...arrayRest] = array;
    console.log(c, b, arrayRest); // 1, 2
    ```

    - 앞에 `...` 를 명시하면
    - 나머지 원소들을 `배열` 로 리턴하거나
    - Object 라면 열거할 수 있는 나머지 Property를 묶어 Object로 반환함

  ​

  - Spread Operator

    - Rest 와는 반대되는 의미

    ```javascript
    const a = [1,2,3];
    const aa = [...a, ...a];
    console.log(aa) // [1, 2, 3, 1, 2, 3]
    ```

    ```javascript
    export interface Component {
    	defaultProps = {}
        props = {};
        
        setValue = (props) => {
        	this.props = {...this.defaultProps, ...props};
        }	
    }
    ```

    ```javascript
    new Date(...[2018,01,01]);
    ```

    ​