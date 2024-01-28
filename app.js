const express = require("express");
var cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello node");
});

app.get("/dog", (req, res) => {
  res.send("hello dog");
});

app.get("/user/:id", (req, res) => {
  const q = req.params;
  res.send(q);
});

app.listen(4000, () => console.log("4000번 포트에서 대기중"));
