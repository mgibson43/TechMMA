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

app.get('/Adult-Programs', (req,res) => {
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

app.get('/Kids-Programs', (req,res) => {
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

app.get('/Instructors', (req,res) => {
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

app.get('/Confirmation', (req,res) => {
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

app.get('/Adult-Programs/Combat-Fitness', (req,res) => {
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

app.get('/Adult-Programs/Cardio-Kickboxing', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html/adult-programs', 'cardio-kickboxing.html'));

  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.get('/Adult-Programs/Krav-Maga', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html/adult-programs', 'krav-maga.html'));

  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.get('/Adult-Programs/Brazilian-Jiu-Jitsu', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html/adult-programs', 'brazilian-jiu-jitsu.html'));
  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.get('/Adult-Programs/Full-Contact-Kickboxing', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html/adult-programs', 'full-contact-kickboxing.html'));
  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.get('/Adult-Programs/Mixed-Martial-Arts', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html/adult-programs', 'mixed-martial-arts.html'));
  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.get('/Adult-Programs/Private-Training', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html/adult-programs', 'private-training.html'));
  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.get('/Kids-Programs/Kids-TKD-Kickboxing', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html/kids-programs', 'kids-tkd-kickboxing.html'));
  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.get('/Kids-Programs/Kids-Brazilian-Jiu-Jitsu', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html/kids-programs', 'kids-bjj-wrestling.html'));
  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.get('/Kids-Programs/American-Ninja-Warrior-Adventure', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html/kids-programs', 'ninja-warrior.html'));
  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.get('/Kids-Programs/After-School-Program', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html/kids-programs', 'after-school.html'));
  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.get('/Kids-Programs/Birthday-Parties', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html/kids-programs', 'birthday-parties.html'));
  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

app.get('/Kids-Programs/Summer-Camp', (req,res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/html/kids-programs', 'summer-camp.html'));
  } catch (error) {
    res.json({
      msg: 'Error',
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