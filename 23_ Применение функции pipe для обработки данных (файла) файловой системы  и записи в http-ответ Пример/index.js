//23.	Применение функции pipe для обработки данных (файла) файловой системы  и записи в http-ответ. Пример.
const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    if (request.method === "GET") {
      response.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
      fs.createReadStream(__dirname + "/hello.txt").pipe(response);
    }
  })
  .listen(3000);
