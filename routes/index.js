const express = require('express');
const router = express.Router();
const adminLogin = "admin"
const adminPassword = '123'
/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Logowanie' });
});

router.post('/login', (req, res) => {
  const { login, password } = req.body

  if(adminLogin===login && adminPassword===password){
    req.session.admin=1
    res.redirect('/admin')
  } else{
    res.redirect('/login')
  }

});


module.exports = router;
