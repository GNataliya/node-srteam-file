const http = require('http');
const fs = require('fs');
const path = require('path');
//const axios = require('axios');

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


    // запрос файла с любого сайта в инете и передача его в ответ на запрос    
    //     const request = http.get("http://www.imgonline.com.ua/examples/bee-on-daisy.jpg", 
    //     function(res) { 
    //         const streamFile = fs.createWriteStream('./bee-on-daisy.jpg');
    //         res.pipe(streamFile);
    //         streamFile.on('finish', () => streamFile.close());
    //         streamFile.on('error', (err) => res.end(err));
    // });


//         const getFromUrl = async() => {
//             const getPic = await axios.get('https://www.imgonline.com.ua/examples/bee-on-daisy.jpg')
//             .then(function (res) {
//                 axios.post(url, { 
//                 responseType: 'stream'
//             });
//                 res.data.pipe(fs.createWriteStream(getPic));
//                 res.setHeader("Content-Type", "flower/jpg");
//                 res.writeHead(200);
//                 res.end();
//             })
//             .catch(function (error) {
//                 res.writeHead(404);
//                 res.end(error);
//             });
//         };
//         getFromUrl();
//    };

    };   
}).listen(8000);
