//40.	Пакет Express. Основные принципы работы. Обработка Cookie. Signed cookie. Пример(POSTMAN).

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const cookiesecret = "1234567890";

app.use(cookieParser(cookiesecret));

app.get("/", (request, response) => {
  response.cookie("cooo", "cooo_", { signed: true }).send("cooo = " + "cooo_");
});

app.listen(3000);

//------------------------------------------------------
// const express = require("express");
// const cookieParser = require("cookie-parser");

// const app = express();
// app.use(cookieParser());

// app.get("/", (request, response) => {
//   response.end("Your cookie value: " + request.cookies["x-cookie-1"]);
// });

// app.post("/", (request, response) => {
//   response.cookie("x-cookie-1", "test1", { maxAge: 900000, httpOnly: true });
//   response.end("Cookie has been set");
// });

// app.listen(3000);
