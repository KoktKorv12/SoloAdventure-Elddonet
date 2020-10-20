var express = require('express');
var router = express.Router();
const { pool } = require('../models/db');

/* GET home page. */
router.get('/', function (request, resolve, next) {
  const sql = 'SELECT * FROM links';

  pool.query(sql, request.params.id, function (err, result, fields) {
    if (err) throw err;
    resolve.json({
      status: 200,
      result
    });
  });
});

module.exports = router;
