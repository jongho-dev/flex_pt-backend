const { MongoClient } = require("mongodb");
const connection = require("./connection.json");

const uri = connection.mongoURL;
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
      name: "박연세",
      age: 30,
    });
    console.log("성공");
  } catch (err) {
    console.log(err);
  }
};

const findData = async () => {
  const usersCollection = client.db("flexpt").collection("users");
  var cursor = await usersCollection.findOne({ name: "박연세" });
  console.log(cursor);
};

module.exports = { connectDB, insertData, findData };
