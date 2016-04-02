var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');

/* GET home page. */
router.get('/', stormpath.loginRequired, function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/user', function(req, res, next) {
    res.render('user');
});

module.exports = router;
