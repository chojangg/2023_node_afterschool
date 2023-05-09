// 변수를 선언
let array = ["사과", "배","포도", "딸기", "바나나"];

// 반복을 수행
for (let i in array) {
    // 출력
    console.log(`${i}번째 요소 : ${array[i]}`);
}

console.log("------------------");

// 반복 수행
for (let item of array) {
    // 출력
    console.log(item);
}