//30.	Пакет Express. Основные принципы работы. Middleware-код. Пример.

const express = require("express");
const app = express();
const fs = require("fs");

//1
// app.use(function (request, response, next) {
//   console.log("Middleware 1");
//   next();
// });
// app.use(function (request, response, next) {
//   console.log("Middleware 2");
//   next();
// });

// app.get("/", function (request, response) {
//   console.log("Route /");
//   response.send("Hello");
// });

//2
app.use(function (request, response, next) {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let data = `${hour}:${minutes}:${seconds} ${request.method} ${
    request.url
  } ${request.get("user-agent")}`;
  console.log(data);
  next();
});

app.get("/", function (request, response) {
  response.send("Hello");
});

app.listen(3000);
