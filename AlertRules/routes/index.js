var express = require('express');
var router = express.Router();


var jsonObj = {'data': 0}

var genJSON = function() {
    var newData = Math.floor((Math.random() * 100) + 1);
    return jsonObj.data = newData;
}



/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(genJSON());
    res.render('index', { title: 'Express' });
});

module.exports = router;
