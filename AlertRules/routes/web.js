var express = require('express');
var _ = require('underscore');
var request = require('request');
var router = express.Router();
var stormpath = require('express-stormpath');


var data = require('./scripts/Evalulate.js');
var notifications = require("./scripts/Notifications");
var update = require("./scripts/Update");

var jsonObj = {'data': []};

setInterval(function(){ update.dataBase()}, 30000);

var genJSON = function() {
    jsonObj.data[jsonObj.data.length] = Math.floor((Math.random() * 100) + 1);
    return jsonObj;
};

router.post('/conditions', stormpath.loginRequired, function(req, res, next) {
    var message = req.body.message;
    var condition = req.body.condition;
    var limit = {'data': req.body.value};

	//data that will set the limit of the data
	var limit = parseInt(req.body.value);
    var valueJSON = genJSON();
	if(data.evalulate(condition,valueJSON,limit)) {
        notifications.sendSlack(message);
    }
    var value = valueJSON.data;

    // save to db
    req.user.customData.message = message;
    req.user.customData.condition = condition;
    req.user.customData.limit = limit;
    req.user.customData.save();

	if(eval(condition, valueJSON, limit)){
		sendInfoToTeamTwo(message);
	}
    res.send('Success');
});




router.get('/availableEndPoints', function(req, res, next) {});
//    var selection = req.body.selection;
    
router.post('/availableEndPoints', function(req, res, next) {
    var selection = req.body.selection;
    request({
        url: "https://klipfolio-notifier.herokuapp.com/v1",
        method: "GET",
        headers: {
           'Host': 'klipfolio-notifier.herokuapp.com'
        }
    }, function(error, response, body) {
        var test = JSON.parse(body);
        res.send(body);
    });
});


router.get('/getUser', stormpath.loginRequired, function(req, res) {
    loadUser(req, res);
});

function loadUser(req, res)  {
    var userData = req.user.customData;
    if (userData != null || userData != undefined) {
        var userData = req.user.customData;
        res.send(userData);
    } else {
        res.status(200).send([]);
    }
}

//condition 	: (String) that agrees with one fo the constants
//value			: (object) data[]
//limit			: (object) limit[]
var eval = function(condition, value, limit){
	//what the rest api calls for the compare operators
	const greaterThan = ">";
	const lessThan = "<";
	const equal = "=";
	const notEqual = "!=";
	const lessThanEqual = "<=";
	const greaterThanEqual = ">=";
	const contains = "exist";
	const doesNotContain = "notExist";
    
	//compare functions
	if(condition === greaterThan) {
		return (parseInt(value.data[0]) > parseInt(limit.data));
	}
	else if (condition === lessThan) {
		return (parseInt(value.data[0]) < parseInt(limit.data));
	}
	else if(condition === equal) {
		return _.isEqual(value,limit);
	}
	else if(condition == notEqual){
		return !(_.isEqual(value,limit));
	}
	else if(condition === lessThanEqual){
		return (parseInt(value.data[0]) <= parseInt(limit.data));
	}
	else if(condition === greaterThanEqual){
		return (parseInt(value.data[0]) >= parseInt(limit.data));
	}
	else if (condition === contains){
		return _.has(value,limit);
	}
	else if(condition === doesNotContain){
		return !(_.has(value,limit));
	}
	else	{
		return false;
	}
};

var sendInfoToTeamTwo = function(body) {
    var jsonObj = {
        'message': {
            'title': "Username",
            'body': body
        },
        'config': {
            'channel': "#random"
        }
    };
    
    request({
        url: "https://klipfolio-notifier.herokuapp.com/v1/slack",
        method: "POST",
        json: true,
        body: jsonObj
    }, function(error, response, body) {
        console.log();
    })
};

module.exports = router;
