const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'fruitsDB';

async function main() {
  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('fruits');


    // Your code here...
    const doc = { name: "Apple", score: 10, review: "Great Fruit"};
    const result = await collection.insertOne(doc);
    
    console.log(`A document was inserted with the id: ${result.insertedId}`);


  } catch (err) {
    console.error('An error occurred while connecting to MongoDB:', err);
  } finally {
    // Close the connection regardless of success or failure
    await client.close();
  }
}

main();
