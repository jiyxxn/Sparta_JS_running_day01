// 5. 점수 수정하기
// 학교에서 시험을 보았는데 전산 문제로 한 문제의 답이 전부 오답처리가 된 바람에 학생들의 점수를 전부 3점씩 올려주어야 합니다.
// scores에 있는 학생들의 점수를 반복문을 통해 3점씩 올리게 고쳐주시는데 4번 문제를 통해 만든 계산기 함수를 통해 더해주세요.

const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

// 4번 문제에서 만든 계산기 함수
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

function addScores(scores) {
  for (let i = 0; i < scores.length; i++) {
    scores[i] = Caculator(scores[i], "+", 3);
  }
}

addScores(scores);

console.log(scores);
