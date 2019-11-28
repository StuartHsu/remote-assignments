const express = require('express');
// const mysql = require('mysql');
const bodyParser = require('body-parser');
const db = require('./models/connection_db');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public')); // static file

// 1. Create connect
// const db = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'katosy0322',
//   database : 'assignment' // 這要等第三步 DB 建起來再加上來
// });

// 2. Connect
// db.connect((err) => {
//   if(err) {
//     throw err;
//   }
//   console.log('MySql Connected...');
// });

// 3. Create DB
// app.get('/createdb', (req, res) => {
//   let sql = 'CREATE DATABASE assignment';
//   db.query(sql, (err, result) => {
//     if(err) {
//       throw err;
//     }
//     console.log(result);
//     res.send('Database created...');
//   });
// });

// 4. Create table
// app.get('/createusertable', (req, res) => {
//   let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(320), password VARCHAR(255), PRIMARY KEY (id))';
//   db.query(sql, (err, result) => {
//     if(err) {
//       throw err;
//     }
//     console.log(result);
//     res.send('User table created...');
//   });
// });

// 5-1 User sign up
app.get('/register', (req, res) => {
  // 存下前端傳來的使用者資料
  let usermail = req.query.usermail;
  let userpass = req.query.password;
  // 比對 email 的 SQL 語法
  let checkSQL = 'SELECT email FROM user WHERE email = ?';
  // 新增使用者 email, password 的 SQL 語法
  let insertSQL = 'INSERT INTO user SET ?';
  let info = {email: usermail, password: userpass};

  // 先確認信箱是否已註冊過
  checkDB = db.query(checkSQL, usermail, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    // 若有重複 Email
    if (result.length > 0) {
      console.log("已有重複 Email");
      res.send("重複");
    } else {
      // 無重複，寫入資料庫
      db.query(insertSQL, info, (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("註冊成功");
        res.send("註冊成功");
      });
    }
  });
  console.log("後端跑完流程");
});

// 5-2 User log in
app.get('/login', (req, res) => {
  // 存下前端傳來的使用者資料
  let usermail = req.query.usermail;
  let userpass = req.query.password;
  // 比對 email 的 SQL 語法
  let qualifyEmail = 'SELECT email FROM user WHERE email = ?';
  let qualifyPass = 'SELECT email FROM user WHERE password = ?';

  // 先確認信箱是否已註冊過
  db.query(qualifyEmail, usermail, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    // Email 尚未註冊
    if (result.length < 1) {
      console.log("此 Email 尚未註冊");
      res.send("未註冊");
    } else if (result.length > 0) {
      // 比對密碼
      db.query(qualifyPass, userpass, (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // 密碼正確
        if (result.length > 0) {
          console.log("密碼正確");
          res.send("認證成功");
        } else {
          // 密碼錯誤
          console.log("密碼錯誤");
          res.send("認證失敗");
        }
      });
    }
  });
});


app.get('/member', (req, res) => {
  res.redirect('/member.html');
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
