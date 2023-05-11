let express = require('express');
let ejs = require('ejs');
let path = require('path');

let app = express();

let todoArr = [
    {id: 1, contents : '영화보기', yesno : 'no'},
    {id: 2, contents : '수영하기', yesno : 'no'},
    {id: 3, contents : '숙제하기', yesno : 'no'},
];

app.use(express.static('public'));  //public 폴더 공유
app.use(express.urlencoded({extended:false}));  //사용자 html 입력
app.set('views', path.join(__dirname, 'views'));   //뷰 폴더 지정
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('/ get이 시작됨');
    res.render('list', {datalist: todoArr});    //list.ejs 화면에 출력
});

app.get('/insert', (req, res) => {
    console.log("/insert get 시작됨");
    //추가
});

app.post('/insert', (req, res) => {
    console.log("/insert get 시작됨");
    //추가
});

app.get('/delete:id', (req, res) => {
    console.log("/delete" + id);
    //추가
    res.redirect("/");
});

app.listen(8000, () => {
    console.log('8000 포트에서 서버 시작');
});