let express = require('express');   // body-parser 최근 버전에 내장되어 있다
let app = express();    

// 정적파일제공하는 폴더
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('*', (request, response) => {
    let output = '';
    output +=
    output +=
    output +=
    output +=
    output +=
    output +=
    response.send(output);
});

app.post('/', (request, response) => {
    console.log(request.body);
    response.send(request.body);
})