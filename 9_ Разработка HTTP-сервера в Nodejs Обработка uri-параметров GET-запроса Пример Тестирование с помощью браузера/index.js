//9.	Разработка HTTP-сервера в Node.js. Обработка uri-параметров GET-запроса. Пример. Тестирование с помощью браузера.

const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    let pathname = req.url;
    let urlElems = pathname.split("/");

    res.write("1: " + urlElems[1]);
    res.write(" 2: " + urlElems[2]);
    res.end();
  })
  .listen(3000);
