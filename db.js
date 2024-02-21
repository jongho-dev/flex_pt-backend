const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.DB_URL;
const dbName = "flexpt";
const client = new MongoClient(uri);
var db;

// DB 연결
const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db(dbName);
  } catch (err) {
    console.log(err);
  }
};

// 로그인
const Login = async (id, pw) => {
  const usersCollection = client.db("flexpt").collection("users");
  var cursor = await usersCollection.findOne({
    id: id,
    pw: pw,
  });
  return cursor != null;
};

// 회원가입 - 아이디 중복 체크
const idCheck = async (id) => {
  const usersCollection = client.db("flexpt").collection("users");
  var cursor = await usersCollection.findOne({ id: id });
  return cursor != null;
};

// 회원가입 - 유저 생성
const createUser = async (data) => {
  try {
    const usersCollection = client.db("flexpt").collection("users");
    const result = await usersCollection.insertOne(data);
    console.log("성공");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connectDB, Login, createUser, idCheck };
