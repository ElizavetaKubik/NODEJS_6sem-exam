//15.	Разработка HTTP-клиента в Node.js.  Оправка POST-запроса с параметрами в теле.  Пример. Тестирование с помощью с Node.js-сервера.

const http = require("http");
const url = require("url");
const query = require("querystring");

let aa;
let bb;
const server = http
  .createServer((req, res) => {
    if (req.method == "POST") {
      let body = "";
      let a;
      let b;
      req.on("data", (data) => {
        body += data.toString();
        body = JSON.parse(body);
        aa = body.a;
        bb = body.b;
        console.log(body);
      });
      req.on("end", () => {
        res.writeHead(200, { "Content-Type": "text/html" });
        console.log(body.a);
        res.write("a: " + body.a);
        res.write("a: " + aa);
        res.write(" b: " + bb);
        res.end();
      });
    }
  })
  .listen(3000);
