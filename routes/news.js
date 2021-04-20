const express = require('express');
const router = express.Router();
const News = require("../models/news")

/* GET home page. */
router.get('/', async (req, res) => {
 
  const search = req.query.search || ""
  const findNews = await News
    .find({title: new RegExp(search.trim(), 'i')})
    .sort({ created: -1 });
console.log(findNews)
  findNews.exec((err, data) => {
    res.render('news', { title: 'News', data, search });
  })
});

module.exports = router;
