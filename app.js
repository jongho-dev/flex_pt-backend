const express = require("express");
const connectDB = require("./db");
var cors = require("cors");

const app = express();

app.use(cors());

const lst = {
  id: 1,
  text: "할일",
};

app.get("/", (req, res) => {
  res.send("hello node");
});

app.get("/todo", (req, res) => {
  res.json(lst);
});

app.get("/register");

app.get("/user/:id", (req, res) => {
  const q = req.params;
  res.send(q);
});

connectDB();

app.listen(5000, () => console.log("5000번 포트에서 대기중"));
