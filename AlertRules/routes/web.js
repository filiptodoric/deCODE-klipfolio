var express = require('express');
var request = require('request');
var router = express.Router();

const greaterThan = ">";
const lessThan = "<";
const equal = "=";

var jsonObj = {'data': []};
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

var sendInfoToTeamTwo = function() {
    var jsonObj = {
        'message': {
            'title': "Fake Title",
            'body': 'Fake Body'
        },
        'config': "Fake Config"
    };
    
    request({
        url: "",
        method: "POST",
        json: true,
        body: jsonObj
    }, function(error, response, body) {
        console.log(response);
    })
}

module.exports = router;
