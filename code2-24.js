// NaN 변수를 만들어보자!
let nan = Number("안녕하세요");

// nan끼리 비교합니다.
console.log(nan == nan);
console.log(nan != nan);

// isNaN() 함수로 NaN인지 확인한다.
console.log(isNaN(nan));