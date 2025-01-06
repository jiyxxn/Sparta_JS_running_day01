// 4. 계산기 문제
// 연산자와 함수, 조건문을 토대로 계산기 함수를 하나 만들어 보려고 합니다.
// 함수에 숫자 , 연산자 , 숫자 세 개의 매개변수를 넣었을 때
// 해당 연산자를 기준으로 연산을 해서 값을 반환하는 함수를 만들어주세요.

const Caculator = function (num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;
  }
};

console.log("caculation", Caculator(3, "+", 6));
console.log("caculation", Caculator(11, "-", 6));
console.log("caculation", Caculator(6, "*", 3));
console.log("caculation", Caculator(15, "/", 3));
