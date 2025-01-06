// 1. 빈칸 채우기 문제

// 아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지
// 본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
// 변수 uninitialized가 선언만 되고 초기화되지 않았기 때문에 undefined가 출력됩니다.

const apple = "사과"; // 결과값 <const>
apple = "바나나"; // TypeError: Assignment to constant variable
// 에러 내용이 constant variable에 관한 내용이므로, 해당 구문은 상수로 선언된 변수가 재할당되어 발생한 오류로 유추됩니다.
// 따라서 apple은 const로 선언되었습니다.

let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// 대괄호 표현법으로, lotto 배열의 index 3번 요소를 출력합니다.

4;
let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false >
// falsy값 7가지 중 하나인 빈 문자열에 해당합니다.
// falsy한 mySchedule에 이중부정을 사용하여 false가 출력됩니다.
