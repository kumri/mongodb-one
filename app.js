const express = require('express');
const app = express();
const routes = require('./routes'); // Import your route file

//app.get('/', (req, res) => {
//    res.send('Hello, Express!');
//});

app.use('/api', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
