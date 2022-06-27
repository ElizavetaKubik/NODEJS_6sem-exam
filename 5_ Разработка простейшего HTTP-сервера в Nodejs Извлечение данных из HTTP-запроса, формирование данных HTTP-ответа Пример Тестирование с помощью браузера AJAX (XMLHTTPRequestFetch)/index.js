//5.	Разработка простейшего HTTP-сервера в Node.js. Извлечение данных из HTTP-запроса,
//      формирование данных HTTP-ответа.  Пример. Тестирование с помощью браузера AJAX (XMLHTTPRequest/Fetch).

const http = require("http");
const fs = require("fs");

function writeHeaders(req) {
  var head = "";
  for (key in req.headers) {
    head += "<p>" + key + ": " + req.headers[key];
  }
  return head;
}

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
        res.write(
          "<p>Method: " +
            req.method +
            "<p>Http Version: " +
            req.httpVersion +
            "<p>Url: " +
            req.url +
            "<p>Headers: " +
            writeHeaders(req)
        );
        res.end();
        break;

      case "/fetch":
        res.write(fs.readFileSync("fetch.html"));
        res.end();
        break;

      case "/xhr":
        res.write(fs.readFileSync("xhr.html"));
        res.end();
        break;

      case "/req":
        res.setHeader("Content-Type", "text/plain; charset=UTF-8");
        res.end("node js");
        break;

      default:
        break;
    }
  })
  .listen(3000);
