const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "peta-wonorejo";
let client;

conn = async () => {
  if(!client||client.isConnected()){
    client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB");
  }

  return client.db(dbName);
}

insertDocument = async (collectionName, data) => {
  const db = await conn();
  const res = data.length > 1 ? await db.collection(collectionName).insertMany(data) : await db.collection(collectionName).insertOne(data);
  console.log("Inserted document with _id: ", res.insertedId);
  return res;
}

findDocument = async (collectionName, query) => {
  const db = await conn();
  const res = await db.collection(collectionName).find(query).toArray();
  return res;
}

updateDocument = async (collectionName, query, data) => {
  const db = await conn();
  const res = await db.collection(collectionName).updateOne(query, { $set: data });
  console.log("Updated document with _id: ", res.upsertedId);
  return res;
}

deleteDocument = async (collectionName, query) => {
  const db = await conn();
  const res = await db.collection(collectionName).deleteOne(query);
  console.log("Deleted document with _id: ", res.deletedCount);
  return res;
}

module.exports = { insertDocument, findDocument, updateDocument, deleteDocument };
  