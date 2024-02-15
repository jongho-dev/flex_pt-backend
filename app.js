const express = require("express");
const { connectDB, insertData } = require("./db");
var cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello node");
});

connectDB();

app.get("/user", (req, res) => {
  insertData();
  res.json("성공");
});

app.post("/login", (req, res) => {
  console.log(req.body);
});

app.listen(5000, () => console.log("5000번 포트에서 대기중"));
