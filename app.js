const express = require("express");
const { connectDB, createUser, Login, idCheck } = require("./db");
var cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

// 로그인
app.post("/login", async (req, res) => {
  const rst = await Login(req.body["id"], req.body["pw"]);
  res.send(rst);
});

// 회원가입 - 아이디 중복 체크
app.post("/signupidcheck", async (req, res) => {
  const result = await req.body["id"];
  const rst = await idCheck(result);
  res.send(rst);
});

// 회원가입 - 유저 생성
app.post("/signupdone", (req, res) => {
  createUser(req.body);
});

app.listen(4000, () => console.log("4000번 포트에서 대기중"));
