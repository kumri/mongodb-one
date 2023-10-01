const express = require('express');
const router = express.Router();
const connectToMongoDB = require('./mongo-test');

// Define a route that uses the database connection
router.get('/data', async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const collection = db.collection('products'); // Replace with your collection name
    const data = await collection.find().toArray();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from MongoDB', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;