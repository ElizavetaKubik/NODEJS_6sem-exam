const http = require("http");
const url = require("url");
const query = require("querystring");
const server = http
  .createServer((req, res) => {
    let urlRequest = url.parse(req.url, true);
    let a = urlRequest.query.a;
    let b = urlRequest.query.b;
    let c = urlRequest.query.c;

    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write(req.method);
    res.write(" a: " + a + " b: " + b + " c: " + c);
    res.end();
  })
  .listen(3000);
