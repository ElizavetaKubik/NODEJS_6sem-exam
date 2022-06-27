//39.	Пакет Express. Основные принципы работы. upload файла в POST-запросе. Пример (браузер).

const express = require("express");
const multer = require("multer");

const app = express();

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "files");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
app.use(multer({ storage: storageConfig }).single("filedata"));

app.get("/", function (req, res) {
  res.setHeader("content-type", "text/html;charset=utf-8");
  res.write(
    '<form action="/upload" method="POST" enctype="multipart/form-data" >'
  );
  res.write('<input type="file" name="filedata">');
  res.write('<input type="submit">');
  res.write("</form>");
  res.end();
});

app.post("/upload", (req, res) => {
  let filedata = req.file;
  if (!filedata) res.send("Ошибка при загрузке файла");
  else {
    res.send("Файл загружен.");
  }
});

app.all("/*", (req, res) => {
  res.status(404);
  res.end("Wrong URL.");
});

app.listen(3000);
