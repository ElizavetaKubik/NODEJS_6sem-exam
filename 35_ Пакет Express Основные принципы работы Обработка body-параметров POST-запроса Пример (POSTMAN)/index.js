//35.	Пакет Express. Основные принципы работы. Обработка body-параметров POST-запроса. Пример (POSTMAN).

const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.send(`${req.body.name} - ${req.body.age}`);
});

app.get("/", function (req, res) {
  res.send("Главная страница");
});

app.listen(3000);
