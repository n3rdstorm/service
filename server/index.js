const express = require('express');
const app = express();
const read = require('./controllers.js');
const path = require('path');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));


app.get('/products/:product_id', (req, res) => {
  read((error, data) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(data[req.params.product_id]);
    }
  })
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

let port = 3002;

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
