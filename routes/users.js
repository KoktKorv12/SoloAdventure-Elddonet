var express = require('express');
var router = express.Router();
const { pool, query } = require('../models/db')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', async function (req, res, next) {

  try {
    const links = await query(
      'SELECT * FROM links WHERE id = ?',
      req.params.id
    );

    const story = await query(
      'SELECT * FROM story WHERE links_id = ?',
      req.params.id
    );

    res.json({
      status: 200,
      user: user,
      story: story
    });

  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
