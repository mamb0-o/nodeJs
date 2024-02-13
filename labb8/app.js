const fs = require('fs');

//var contentsD = JSON.parse(contents.b.d);
fs.readFile('./my_data.json', 'utf-8', (error, contents) => {
    if (error) {
        console.log(error);
    } else {

        var temp = JSON.parse(contents);
        var tempD = JSON.parse(temp.b.d);
        temp.a += 1;
        temp.b.c += 1;
        temp.b.d = tempD + 1;
        temp.b.e.f += 1;
        fs.writeFile('./my_new_file.json', JSON.stringify(temp, null, 2), error => {
            if (error) {
                console.log(error);
            }
        });
    }
});