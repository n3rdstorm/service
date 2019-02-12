const express = require('express');
const app = express();
const read = require('./controllers.js');

app.get('/products', (req, res) => { 
    read((error, data) => {
      if (error) {
        res.status(400).send();
      } else {
        res.status(200).send(data);
      }
    })
  })

let port = 3002;

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
