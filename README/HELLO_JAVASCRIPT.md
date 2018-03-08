# HELLO JAVASCRIPT

1. JavaScript 와 실행

   - javaScript 코드의 해석
     - 한줄씩 자바스크립트 인터프리터에 의해서 해석
     - 해당 시점을 `runtime` 
     - 브라우저 안 자바스크립트 파서 프로그램에 의해 동작
     - 한줄씩 순서대로 실행
     - 별도의 컴파일 과정 X
     - node JS 에서도 자바스크립트 인터프리터가 존재
     - [참고자료](http://huns.me/development/360)
     - 최근 브라우저들은 어떤 이름의 JavaScript엔진을 가지고 있는지 찾아보자.
       - FireFox : OdinMonkey
         - asm.js (JavaScript SubSet) Compile
       - Java Scripting Engine : Rhino
       - Google : V8
       - Safari : JavaScriptCore
       - Explorer : Chakra
       - Opera : Charakan >> V8

2. git 과 github

3. visual studio code 설치

   1. Visual Studio Code 에서 js 결과 출력하기

      - `ctrl` + `~` 는 내장 터미널 를 띄울 수 있음

      - 특정 경로에서 `test.js` 파일을 작성

        ```javascript
        var msg = "Hello World";
        console.log(msg);
        ```

      - 터미널에서 해당 경로로 접근해 `node test.js` 실행

      ![](https://imgur.com/OX8wP3a.png)

4. github 리뷰를위한 프로젝트 준비

5. 브라우저 자바스크립트

   - main.html

     ```html
     <html>
         <head></head>
         <body>
             <div class="show"></div>
         </body>
         <script src="./main.js"></script>
     </html>
     ```

   - main.js

     ```javascript
     function show(s) {
       s = s || ":-)";
       document.querySelector(".show").insertAdjacentHTML("beforeend", `<p>${s}</p>`);
     }
     ```

   - 크롬 브라우저에서 main.html 실행 개발자도구의 콘솔창을 열어서 코드실행

     ```
     show("show 함수가 잘 불려지나요?");
     show("Hello world!");
     ```

     ​