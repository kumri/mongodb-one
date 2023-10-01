const express = require('express');
const router = express.Router();
const connectToMongoDBTest = require('./api/connection-test');

// Define a route that uses the database connection
router.get('/test', async (req, res) => {
  try {
    const result = await connectToMongoDBTest();
    res.send(result);
    
  } catch (error) {
    console.error('Error fetching data from MongoDB', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;