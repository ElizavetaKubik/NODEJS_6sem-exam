//11.	Разработка HTTP-сервера в Node.js. Обработка  json-сообщения в POST-запросе. Пример. Тестирование с помощью POSTMAN.

const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.method == "POST") {
      let body = "";
      req.on("data", (data) => {
        body += data.toString();
        body = JSON.parse(body);
        a = body.a;
        b = body.b;
      });
      req.on("end", () => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("a: " + a);
        res.write(" b: " + b);
        res.end();
      });
    }
  })
  .listen(3000);
