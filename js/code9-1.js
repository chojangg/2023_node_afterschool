const fs = require('fs');

fs.readFile('textinput.txt', (err, data) => {
    console.log(data);
    console.log(data.toString());
});