const fs = require('fs');

fs.readFile('input99.txt', (err, data) => {
    if (err){
        console.log("error 발생");;
        console.log(err);
    } else{
        console.log(data);
        console.log(data.toString());
    }
});