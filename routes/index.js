var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res) {
  res.render('index.ejs', { title: 'Express' });
});

router.get('/produtos', function(req, res) {
  res.render('produtos.ejs', { title: 'Express' });
});

router.get('/login', function(req, res) {
  res.render('login-page.ejs', { title: 'Express' });
});

router.get('/registrar', function(req, res) {
  res.render('register-page.ejs', { title: 'Express' });
});

router.get('/admin', function(req, res) {
  res.render('Administrador.ejs', { title: 'Express' });
});

router.get('/login-admin', function(req, res) {
  res.render('loginadm.ejs', { title: 'Express' });
});

module.exports = router;
