'use static'

const path = require('path');
const express = require('express');
const cors = require('cors');
const urlencoded = require('body-parser').urlencoded;
const text = require('./sendText');
const port = 3000;

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

app.get('/adult-programs', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html', 'adult-programs.html'));

  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.get('/kids-programs', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html', 'kids-programs.html'));

  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.get('/instructors', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html', 'instructors.html'));

  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.get('/confirmation', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html', 'confirmation.html'));

  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.get('/adult-programs/combat-fitness', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html/adult-programs', 'combat-fitness.html'));

  } catch (error) {
    res.json({
      msg: 'Error, hi',
      Code: 404,
      err: error,
    });
  }
});

app.post('/', (req,res) => {
  const name = `${req.body.fname} ${req.body.lname}`;
  const email = req.body.email;
  const phone = req.body.phone;

  text.sendText(name, phone, email);

  res.status(200).sendFile(path.join(__dirname, 'public/html', 'confirmation.html'));
})

app.listen(port, (err) => {
  console.log(`running server on port: ${port}`, err);
});