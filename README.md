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