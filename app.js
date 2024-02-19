const express = require("express");
const { connectDB, insertData, findData, idCheck } = require("./db");
var cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello node");
});

app.get("/cat", (req, res) => {
  res.send("hello cat");
});

connectDB();

app.get("/user", (req, res) => {
  insertData();
  res.json("성공");
});

// 로그인
app.post("/login", (req, res) => {
  console.log(req.body);
  findData();
});

// 회원가입
app.post("/signupidcheck", async (req, res) => {
  const result = await req.body["id"];
  const rst = await idCheck(result);
  res.send(rst);
});

app.listen(5000, () => console.log("5000번 포트에서 대기중"));
