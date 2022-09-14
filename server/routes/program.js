const express = require("express");
const program = express.Router();
const db = require("../db/index");
const logger = require("../logger/logger");

// Pääaineitten nimet ja id, selectiin
program.get("/getNames", (req, res) => {
  const sqlSelectName = "SELECT id, name FROM Program";
  db.query(sqlSelectName, (err, result) => {
    if (err) {
      logger.error("Oops! Nothing came through from getNames - Program.");
      res.status(500).send("kkk");
    } else {
      logger.http("It worked! At getNames - Program");
      res.send(result);
    }
  });
});

module.exports = program;
