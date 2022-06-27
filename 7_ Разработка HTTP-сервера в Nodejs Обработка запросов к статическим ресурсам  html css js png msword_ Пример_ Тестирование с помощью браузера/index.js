//7.	Разработка HTTP-сервера в Node.js. Обработка запросов к статическим ресурсам:  html, css, js, png, msword.
//      Пример. Тестирование с помощью браузера.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/html":
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write(fs.readFileSync("html.html"));
      res.end();
      break;

    case "/css":
      res.writeHead(200, { "Content-Type": "text/css; charset=utf-8" });
      res.write(fs.readFileSync("css.css"));
      res.end();
      break;

    case "/js":
      res.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8" });
      res.write(fs.readFileSync("js.js"));
      res.end();
      break;

    case "/png":
      res.writeHead(200, { "Content-Type": "image/png;" });
      res.write(fs.readFileSync("png.png"));
      res.end();
      break;

    // case "/doc":
    //   res.writeHead(200, { "Content-Type": "application/msword;" });
    //   res.write(fs.readFileSync("doc.doc"));
    //   res.end();
    //   break;

    case "/docx":
      res.writeHead(200, { "Content-Type": "application/msword;" });
      res.write(fs.readFileSync("docx.docx"));
      res.end();
      break;

    default:
      break;
  }
});

server.listen(3000);
