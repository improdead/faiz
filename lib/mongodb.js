import { MongoClient } from 'mongodb';

let client;
let clientPromise;

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';

if (!process.env.MONGODB_URI) {
  console.warn('MONGODB_URI not found, using fallback connection');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}
export default clientPromise; 