// server.js - Inkwell Backend API
const express = require('express');
const bodyParser = require('body-parser');
const { inkwell } = require('./inkwell.js'); // <-- use inkwell.js

const app = express();
app.use(bodyParser.json());
app.use(express.static('.'));

app.post('/convert', (req, res) => {
  const input = req.body.input || '';
  const output = inkwell(input);
  res.send(output);
});

app.listen(4000, () => console.log('Inkwell server running on http://localhost:4000'));