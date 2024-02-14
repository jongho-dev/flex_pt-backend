const { MongoClient } = require("mongodb");
const connection = require("./connection.json");

const uri = connection.mongoURL;
const dbName = "flexpt";

const client = new MongoClient(uri);

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbName);
  } catch (err) {
    console.log(err);
  }
};

const insertData = async () => {
  try {
    const usersCollection = client.db(dbName).collection("users");
    const result = await usersCollection.insertOne({
      name: "박연세",
      age: 30,
    });
    console.log("성공");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connectDB, insertData };
