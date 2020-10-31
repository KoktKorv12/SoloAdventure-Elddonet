var express = require('express');
var router = express.Router();
const { pool } = require('../models/db');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('frontpage');
});

module.exports = router;
