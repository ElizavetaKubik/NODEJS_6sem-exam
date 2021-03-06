//41.	Пакет Express. Основные принципы работы. Применение объекта Session для сохранение состояния. Пример (POSTMAN).

const app = require("express")();
const session = require("express-session");
app.use(session({ secret: "fdsgd", cookie: { maxAge: 5000 } }));

app.get("/", (req, res, next) => {
  if (req.session.views) {
    req.session.views++;
    res.setHeader("Content-Type", "text/html");
    res.write("<p>views: " + req.session.views + "</p>");
    res.write("<p>expires in: " + req.session.cookie.maxAge / 1000 + "s</p>");
    res.end();
  } else {
    req.session.views = 1;
    res.end("welcome to the session demo. refresh!");
  }
});

app.listen(3000);
