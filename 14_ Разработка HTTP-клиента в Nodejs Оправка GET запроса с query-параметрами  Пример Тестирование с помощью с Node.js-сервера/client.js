const http = require("http");
const query = require("querystring");

let parms = query.stringify({ a: 3, b: 4, c: "xxxx" });
let path = `/req?${parms}`;

let options = {
  host: "localhost",
  path: path,
  port: 3000,
  method: "GET",
};

const request = http.request(options, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    console.log("data: body: ", (data += chunk.toString("utf-8")));
  });
});

request.end();
