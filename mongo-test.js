const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://admin:mongo2023@cluster0.70hdoms.mongodb.net/';

const client = new MongoClient(uri);
async function connectToMongoDB() {
  
  //try {
  //  const database = client.db('mongodb');
  //  const products = database.collection('products');
//
  //  const query = { color: 'red' };
  //  const product = await products.findOne(query);
//
  //  console.log(product);
  //} finally {
  //  // Ensures that the client will close when you finish/error
  //  await client.close();
  //  return 
  //}
  try {
    //const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    return client.db('mongodb'); // Replace with your database name
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas', error);
    throw error;
  }
}

module.exports = connectToMongoDB;