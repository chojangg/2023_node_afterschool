const request = require('request');

let url = 'https://www.e-mirim.hs.kr/';
request(url, (err, respose, body) => {
    if(err){
        console.log("request error");
        console.log(err);
    } else{
        console.log(body);
    }
});
