const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // запрос с браузера на сервер:
    if (req.method == 'GET'){
        url = req.url;
        console.log(url);

    //запрос файла с любого сайта в инете и передача его в ответ на запрос:   
        let pic = async () => {  
            let stream = await fs.createWriteStream('url');
            let result = await http.get('http:www.imgonline.com.ua/examples/bee-on-daisy.jpg',
            (result) => {
                result.on('data', (chank) => {
                    let mypic = result.pipe(stream);
                    //console.log(chank);
                    console.log(mypic);
                });
                result.on('end', () => {
                    res.setHeader("Content-Type", "image/jpeg");
                    res.writeHead(200);
                    res.end();
                });
                result.on('error', (err) => res.end(err));
                });
            }; 

        pic();  
    };
    
}).listen(8000);
