const express = require('express');
const cors = require('cors');

//making app :
const app = express();
app.use(express.json());
app.use(cors());

//test server
app.use('/', (req, res) => {
  res.send('server is running');
});

module.exports = app;
