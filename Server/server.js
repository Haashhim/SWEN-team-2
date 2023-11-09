
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : '123123', // password
    database  : 'swen' // database name
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/auth", async(req, res) => {
    const receivedData = req.body;
    const { user, pwd } = receivedData.dataToSend; 

    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.execute(query, [user, pwd], (err, results, fields) => {
      if (err) {
        console.error('Error executing query:', err);
        return;
      }

      if (results.length == 1) {
        res.send("1");
      }
      else {
        res.send("0");
      }
    });
});

app.post("/signup", async(req, res) => {
    const receivedData = req.body;
    const { user, pwd, email } = receivedData.dataToSend;

    const query = 'SELECT * FROM users WHERE username = ?';

    connection.execute(query, [user], (err, results, fields) => {
      if (err) {
        console.error('Error executing query:', err);
        return;
      }

      if (results.length > 0) {
        res.send("0");
      }
      else
      {
        const query1 = 'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)';
    connection.query(query1, [user, pwd, email, 1], (err1, results1) => {
      if (err1) {
        console.log(err1);
        res.send("-1");
      } else {
        res.send("1");
      }
    });


      }
    });

});

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
