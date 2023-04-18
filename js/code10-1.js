let express = require('express');

// 서버 생성
let app = express();

// 리스너 설정
app.use((request, response)=>{
    response.send('<h1> Hello express </h1>');
});

// 서버 실행
app.listen(3000, ()=>{
    console.log('서버 시작 http://localhost:3000');
});