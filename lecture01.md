#JavaScript Mastering Course

## 강사님
> 처음에 위니텍이라는 회사에서 기술지원을 했다. 제품 설치를 하러다니고 보안 쪽 일도 했었다.
  그러다가 운 좋게 네이버에서 프론트 개발 직군에 모집공고를 보고 지원했고 거기서부터 프론트엔드 개발을 했다.
  진도 프레임워크와 컴포넌트 개발을 하다가 NHN Next에서 일을 했고 사정이 어려워진 후 SK 플래닛에서 교육일을 했다.

## 수업
> * Github 기본 사용법에 대해 익혀두자. [git 동영상강의](https://www.youtube.com/playlist?list=PLAHa1zfLtLiPrxoBo9a1HVmauvE2Mn3xX) 
> * "MDN javascript foreach array" - 이런 검색어로 되도록 MDN을 참고하도록 한다.
    폴리필은 꼭 정독하도록 한다. 코드까지 볼 필요는 없지만 버전 호환성을 위해 이렇게 작동하는구나를 아는 게 좋다.

### Javascript
1. Type Check
<pre><code>
    const a = [];
    toString.call(a);
    // type check를 확실하게 하고 싶다면 typeof 대신에 toString.call()를 사용하는 게 좋다.
</code></pre>

2. Iteration
* 반복문을 사용할 때는 되도록 for of 문을 사용하는 게 좋다. 

3. If
* 조건문을 사용할 때는 indent를 최대한 줄이는 게 좋다. 블록 안에 코드가 늘어날 때, if (false) return;을 앞에 추가하는 것도 팁이다.

4. 에러가 뜬다면 에러메시지를 꼭 확인하자. TypeError인지 ReferenceError인지 메시지의 유형을 확인하는 습관을 가지자.

5. 모든 JavaScript 함수는 default return 값으로 undefined를 return 한다.

6. 반환값을 조심하고 의식적으로 확인하면서 코드를 짜야 한다.