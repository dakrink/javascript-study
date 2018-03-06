'use strict';

//es6 기능: 블록 스코프 변수 선언
const sentences = [
  {subject: 'JavaScript', varb: 'is', object: 'great'},
  {subject: 'Elephants', varb: 'are', object: 'large'}
];

// es6 기능 : 객체 분해
function say({subject, varb, object}) {
  // es6 기능 : 템플릿 문자열
  // 아래 사용한 것은 따옴포가 아니라 백틱(`), 즉
  // 키보드 탭 키 바로 위에 있는 문자입니다.
  console.log(`${subject} ${varb} ${object}`);
}

// es6 기능 : for..of
for (let s of sentences) {
  say(s);
}
