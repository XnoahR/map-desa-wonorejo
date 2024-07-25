// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = "mongodb://127.0.0.1:27017";
const dbName = "peta-wonorejo";
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db(dbName);
  return { db, client };
}
