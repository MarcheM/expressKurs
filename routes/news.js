const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('news', { title: 'NEWS' });
});

module.exports = router;