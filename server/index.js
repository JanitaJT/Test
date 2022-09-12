const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Siba22",
  database: "req_sub_schema",
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO Campus (name, description) VALUES ('test','test,test');";
  db.query(sqlInsert, (err, result) => {
    res.send("hello world");
  });
});

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM Subject";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/get/program", (req, res) => {
  const sqlSelectProgram =
    "SELECT  subject.name AS subjectName, subject.groupSize, subject.groupCount, subject.sessionLength, subject.sessionCount, subject.area, subject.programId, program.name FROM Subject  JOIN Program ON subject.programId = program.id";
  db.query(sqlSelectProgram, (err, result) => {
    res.send(result);
  });
});

// db.connect(function (err) {
//   if (err) throw err;
//   con.query("SELECT * FROM Subject", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

app.listen(3001, () => {
  console.log("Running on port 3001");
});
