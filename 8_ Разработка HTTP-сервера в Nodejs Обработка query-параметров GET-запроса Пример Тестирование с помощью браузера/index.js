//8.	Разработка HTTP-сервера в Node.js. Обработка query-параметров GET-запроса. Пример. Тестирование с помощью браузера.

const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    let urlRequest = url.parse(req.url, true);
    let a = urlRequest.query.a;
    let b = urlRequest.query.b;

    res.write("a: " + a + " ");
    res.write("b: " + b + "");
    res.end();
  })
  .listen(3000);
