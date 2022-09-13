const express = require("express");
const program = express.Router();
const db = require("../db/index");

// Pääaineitten nimet ja id, selectiin
program.get("/getNames", (req, res) => {
  const sqlSelectName = "SELECT id, name FROM Program";
  db.query(sqlSelectName, (err, result) => {
    res.send(result);
  });
});

module.exports = program;
