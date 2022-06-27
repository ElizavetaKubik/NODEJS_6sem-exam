var http = require("http");

let options = {
  host: "localhost",
  path: "/req",
  port: 3000,
  method: "POST",
  body: JSON.stringify({
    a: 3,
    b: 4,
    c: "ddd",
  }),
};
const req = http.request(options, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    console.log("data: body: ", (data += chunk.toString("utf-8")));
  });
});

req.end();
