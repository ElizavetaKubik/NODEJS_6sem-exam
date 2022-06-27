//32.	Пакет Express. Основные принципы работы. Статические файлы. Пример.

const express = require("express");
const app = express();

//app.use(express.static(__dirname + "/static"));

app.use("/static", express.static(__dirname + "/static"));

app.use((req, res, next) => {
  console.log("Handler 02");
  next();
});

app.listen(3000);
