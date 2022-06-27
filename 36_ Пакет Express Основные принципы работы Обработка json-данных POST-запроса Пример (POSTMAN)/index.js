//36.	Пакет Express. Основные принципы работы. Обработка json-данных POST-запроса. Пример (POSTMAN).

const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/", (request, response) => {
  const incomeJSONBody = request.body;
  console.log(request.body);

  const outcomeJSONBody = { request: incomeJSONBody };
  response.json(outcomeJSONBody);
});

app.listen(3000);
