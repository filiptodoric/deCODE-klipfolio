var express = require('express');
var router = express.Router();

const greaterThan = ">";
const lessThan = "<";
const equal = "=";

var jsonObj = {'data': []}
var genJSON = function() {
    jsonObj.data[jsonObj.data.length] = Math.floor((Math.random() * 100) + 1);
    return jsonObj;
};

router.post('/conditions', function(req, res, next) {
    var name = req.body.name;
    var condition = req.body.condition;
    var limit = req.body.limit;
    var valueJSON = genJSON();
    var value = valueJSON.data;
    eval(condition, value, limit);

    res.send('Success');
});

var eval = function(condition, value, limit)   {
    if(condition == greaterThan) {
        if(value[0] > limit)   {
            return true;
        }
    }
    else if (condition == lessThan) {
        if(value[0] < limit)   {
            return true;
        }
    }
    else if(condition == equal) {
        if(value[0] == limit)  {
            return true;
        }
    }
};

module.exports = router;
