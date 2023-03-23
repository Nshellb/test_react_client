간단한 node.js와 함께 테스트 코드 작성을 위한 프론트엔드 클라이언트

Spec
React.js 18.2.0

1. Vite 설치
```
npm create vite@latest
```

2. Vite + React 템플릿으로 프로젝트 생성
```
npm create vite@latest project-name -- --template react
(npm create vite@latest test_react_client -- --template react)
```

3. react 실행 및 확인
```
npm run dev
```

4. axios 설치
```
npm i axios
```
get, post 요청을 위해 사용

5. react router 설치
```
npm install react-router-dom
```
페이지 라우팅에 사용

6. scss 설치
```
npm install node-sass
```
style 적용에 사용

7. test 페이지 및 라우팅 연결
/test 라우팅에서 Test component 화면 출력

8. 버튼 클릭시 axios로 api를 호출하는 구문 작성

9. recoil 설치 및 적용
```
npm install recoil
```
전역 상태관리에 사용

App.js에 recoil 추가
import { RecoilRoot } from 'recoil';
root component를 <RecoilRoot>로 감쌈

recoil state를 atom 이라고 부른다.
src/states 라는 atom 정의를 위한 디렉토리 생성

recoilTestState.jsx에 atom 선언

Recoil Test를 위한 component 생성
(+ Test 하위 페이지 추가)

component 내에서 Recoil을 사용하기 위해
기존에 선언한 recoilTestState값을 useRecoilState를 활용하여
component내에서 접근할 수 있게 한다.

클릭시 recoil의 값을 증가시키는 버튼을 만들어서 확인
(거의 사용성이 useState 변수를 다루는것과 유사하다)

useState 변수처럼 set 함수를 통해 값 자체를 바꿔버리는지 확인필요 
동기 로직과의 차이점을 알필요가 있어보인다.
atom 값 변경시 atom을 참조하고 있는 다른 곳에서 발생하는 오류
atom의 동기/비동기 처리간의 차이 체감 필요
recoil atom을 객체형태로 여러개의 값을 가지고 일부만 변경이 가능한지?