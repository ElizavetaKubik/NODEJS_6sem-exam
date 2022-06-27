//6.	Разработка HTTP-сервера в Node.js. Обработка GET, POST, PUT и DELETE-запросов.
//      Генерация ответа с кодом 404. Пример. Тестирование с помощью POSTMAN.

const http = require("http");

http
  .createServer((req, res) => {
    switch (req.method) {
      case "GET": {
        res.end("GET");
        break;
      }
      case "POST": {
        res.end("POST");
        break;
      }
      case "PUT": {
        res.end("PUT");
        break;
      }
      case "DELETE": {
        res.end("DELETE");
        break;
      }
      default: {
        res.statusCode = 400;
        res.end("404");
        break;
      }
    }
  })
  .listen(3000);
