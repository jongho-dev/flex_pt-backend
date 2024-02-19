const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.DB_URL;
const dbName = "flexpt";
const client = new MongoClient(uri);
var db;

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db(dbName);
  } catch (err) {
    console.log(err);
  }
};

const insertData = async () => {
  try {
    const usersCollection = client.db("flexpt").collection("users");
    const result = await usersCollection.insertOne({
      id: "test1",
      pw: "test2",
      name: "박연세",
      phone: "010-1234-5678",
      birth: "991010",
    });
    console.log("성공");
  } catch (err) {
    console.log(err);
  }
};

const findData = async (id, pw) => {
  const usersCollection = client.db("flexpt").collection("users");
  var cursor = await usersCollection.findOne({ id: id, password: pw });
  console.log(cursor);
};

const idCheck = async (id) => {
  const usersCollection = client.db("flexpt").collection("users");
  var cursor = await usersCollection.findOne({ id: id });
  return cursor != null;
};

module.exports = { connectDB, insertData, findData, idCheck };
