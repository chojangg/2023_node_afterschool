var result = 0;
for (let i = 1; i <= 1000; result = result+i) {
    result = result+i;
}
console.timeEnd('합계 구하는 시간');
console.log("1부터 1000까지 더한 결과물 : %d", result);

console.log('현재 실행한 파일의 이름 : %s', __filename);
console.log('현재 실행한 파일의 패스 : %s', __dirname);

var Person = {name:"소녀시대", age:20};
console.dir(Person);