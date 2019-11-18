const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>Hello, teacher! I'm Stuart, this is Assignment-1</h1>")
});

app.get('/getData', (req, res) => {
  var number = req.query.number;
  if (number > 0) {
    var a = 0;
    for (var i = 1; i <= number; i++) {
      a += i;
    }
    res.send(`<h1>The result is ${a}!</h1>`);
  } else if (!req.query.number) {
    res.send("<h1>Lack of Parameter</h1>");
  } else {
    res.send("<h1>Wrong Parameter</h1>");
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
