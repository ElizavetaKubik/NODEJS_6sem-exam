//12.	Разработка HTTP-сервера в Node.js. Пересылка файла в POST-запросе (upload). Пример. Тестирование с помощью браузера.

var http = require("http");
var url = require("url");
var fs = require("fs");
let mp = require("multiparty");

let http_handler = (req, res) => {
  if (req.method == "GET") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(fs.readFileSync("index.html"));
    res.end();
  } else if (req.method == "POST") {
    if (url.parse(req.url).pathname === "/upload") {
      let result = "";
      let form = new mp.Form({ uploadDir: "./static" });
      form.on("field", (name, value) => {
        result += `<br/>---${name}= ${value}`;
      });
      form.on("file", (name, file) => {
        result += `<br/>---${name}= ${file.originalFilename}: ${file.path}`;
      });
      form.on("close", () => {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write("<h1>Form</h1>");
        res.end(result);
      });
      form.parse(req);
    }
  }
};
var server = http
  .createServer(function (req, res) {
    http_handler(req, res);
  })
  .listen(3000);
