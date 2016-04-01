var express = require('express');
var router = express.Router();

const greaterThan = ">";
const lessThan = "<";
const equal = "=";

router.post('/conditions', function(req, res, next) {
    var name = req.body.name;
    var condition = req.body.condition;
    var value = req.body.value;
    var limit = req.body.limit;

    // Uncomment to test :)
    // console.log("Name is : " + name + " condition is: " + condition + " value is: " + value);
    res.send('Success');
});

var eval = function(condition, value, limit)   {
    if(condition == greaterThan) {
        if(value > limit)   {
            return true;
        }
    }
    else if (condition == lessThan) {
        if(value < limit)   {
            return false;
        }
    }
    else if(condition == equal) {
        if(value == limit)  {
            return true;
        }
    }
}

module.exports = router;
