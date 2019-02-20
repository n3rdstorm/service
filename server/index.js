const express = require('express');
const app = express();
const read = require('./controllers.js');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));
app.get('/products/:product_id', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(express.static(path.join(__dirname, '/../public')));
app.get('/products', (req, res) => { 
  read((error, data) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(data);
    }
  })
});


let port = 3002;

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
