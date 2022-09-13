const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Siba22",
  database: "req_sub_schema",
});

module.exports = db;
