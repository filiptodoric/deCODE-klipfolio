var express = require('express');
var router = express.Router();

router.post('/conditions', function(req, res, next) {
    var name = req.body.name;
    var condition = req.body.condition;
    var value = req.body.value;
    // Uncomment to test :) 
    // console.log("Name is : " + name + " condition is: " + condition + " value is: " + value);
    res.send('Success');
});

module.exports = router;
