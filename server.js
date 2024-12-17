'use static'

const path = require('path');
const express = require('express');
const cors = require('cors');
const urlencoded = require('body-parser').urlencoded;
const text = require('./sendText');
const port = 3030;

const app = express();

app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html', 'index.html'));

  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.post('/', (req,res) => {
  const name = `${response.body.fName} ${request.body.lName}`;
  const email = request.body.email;
  const phone = request.body.phone;

  text.sendText(name, phone, email);

  response.status(200).sendFile(path.join(__dirname, 'public/html', 'confirmation.html'));
})

app.listen(port, (err) => {
  console.log(`running server on port: ${port}`, err);
});