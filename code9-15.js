const fs = require('fs');

fs.writeFile('output.txt', '안녕하세요! 최자윤입니다.', (err) => {
    console.log("파일쓰기완료!");
});