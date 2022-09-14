const express = require("express");
const subject = express.Router();
const db = require("../db/index");
const logger = require("../logger/logger");

// Aineen kaikki tiedot sekä pääaineen id ja nimi
subject.get("/getAll", (req, res) => {
  const sqlSelectSubjectProgram =
    "SELECT subject.id, subject.name AS subjectName, subject.groupSize, subject.groupCount, subject.sessionLength, subject.sessionCount, subject.area, subject.programId, program.name FROM Subject  JOIN Program ON subject.programId = program.id";
  db.query(sqlSelectSubjectProgram, (err, result) => {
    if (err) {
      logger.error("Oops! Nothing came through from getAll - Subject.");
    } else {
      logger.http("It worked! At getAll - Subject");
      res.send(result);
    }
  });
});

// Aineen lisäys
subject.post("/post", (req, res) => {
  const name = req.body.name;
  const groupSize = req.body.groupSize;
  const groupCount = req.body.groupCount;
  const sessionLength = req.body.sessionLength;
  const sessionCount = req.body.sessionCount;
  const area = req.body.area;
  const programId = req.body.programId;
  const sqlInsert =
    "INSERT INTO Subject (name, groupSize, groupCount, sessionLength, sessionCount, area, programId) VALUES (?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [name, groupSize, groupCount, sessionLength, sessionCount, area, programId],
    (err, result) => {
      if (err) {
        logger.error("Oops! Create failed at /post - Subject");
      } else {
        logger.http("It worked! Create succsesfull. At post - Subject");
        logger.info("Subject created");
        res.send(result);
      }
    }
  );
});

module.exports = subject;
