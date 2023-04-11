let express = require('express');
let app = express();

app.use(express.static('public'));
app.get('*', (request, response) => {
    response.send('정적 파일을 활용합니다.');
});

app.listen(3003, () => {
    console.log('server starting 3003 port');
});