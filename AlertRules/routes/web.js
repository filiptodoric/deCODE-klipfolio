var express = require('express');
var router = express.Router();

const greaterThan = ">";
const lessThan = "<";
const equal = "=";



var jsonObj = {'data': 0}

var genJSON = function() {
    var newData = Math.floor((Math.random() * 100) + 1);
    return jsonObj.data = newData;
}





router.post('/conditions', function(req, res, next) {
    var name = req.body.name;
    var condition = req.body.condition;
    var value = req.body.value;
    var limit = req.body.limit;

    eval(condition, value, limit);
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
