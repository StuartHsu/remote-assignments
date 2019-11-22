const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static('public')); // static file
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser()); // cookie

app.set('view engine', 'pug');

// Assignment-1: Your First Web Server
app.get('/', (req, res) => {
  res.send("<h1>Hello, teacher! I'm Stuart, this is Assignment-1</h1>")
});
// Assignment-1: End


// Assignment-2: Build Backend API for Front-End
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
// Assignment-2: End


// Assignment-4: HTTP Cookie (Backend Required, Front-End Optional)
app.get('/myName', (req, res) => {
  res.render('myName', { name: req.cookies.username }); // 在 get 時，檢查 cookie 是否已存有名字，並渲染之
});

app.post('/myName', (req, res) => {
  res.cookie('username', req.body.username); // 當按下送出後，會將 form 的內容以 cookie 傳給瀏覽器
  var userInput = req.body.username; // 將使用者名字存入變數
  res.redirect(`/trackName?name=${userInput}`); // 導到 trackName?name= 這個格式的網頁
});

app.get('/trackName', (req, res) => {
  res.redirect('/myName'); // 然後又導回來...嗯??
});
// Assignment-4: End

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
