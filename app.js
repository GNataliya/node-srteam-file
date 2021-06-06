const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    // запрос с браузера на сервер:
    if (req.method == 'GET'){
        url = req.url;
        console.log(url);
    // отправка файла в ответ на запрос:
        const pathFile = path.join(__dirname + '/my.txt');
        const streamFile = fs.createReadStream(pathFile);
        streamFile.on('open', () => streamFile.pipe(res));
        streamFile.on('error', (err) => res.end(err));
    };   
}).listen(8000);
