var express = require('express');
var request = require('request');
var router = express.Router();

var data = require('./scripts/Evalulate.js');
var notifications = require("./scripts/Notifications");
var update = require("./scripts/Update");

var jsonObj = {'data': []};

setInterval(function(){ update.dataBase()}, 30000);

var genJSON = function() {
    
	//instead of gererating a json, get the jason as data and convert it to a number
	object = 100;
	//jsonObj.data[jsonObj.data.length] = [100];
	//jsonObj.data[jsonObj.data.length] = Math.floor((Math.random() * 100) + 1);
    return object;
};

router.post('/conditions', function(req, res, next) {
    var message = req.body.message;
    var condition = req.body.condition;
<<<<<<< HEAD
    var limit = {'data': req.body.value};
=======
	//data that will set the limit of the data
	var limit = parseInt(req.body.value);
>>>>>>> d78e6c80ad246552047e1d7b17e3b2e048702d06
    var valueJSON = genJSON();
	if(data.evalulate(condition,valueJSON,limit)){
		notifications.sendSlack(message);
	}
    res.send('Success');
});

<<<<<<< HEAD


router.get('/availableEndPoints', function(req, res, next) {
//    var selection = req.body.selection;
    
=======
router.post('/availableEndPoints', function(req, res, next) {
    var selection = req.body.selection;
>>>>>>> d78e6c80ad246552047e1d7b17e3b2e048702d06
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
<<<<<<< HEAD
            
            

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
        console.log(response);
    })
};
=======
>>>>>>> d78e6c80ad246552047e1d7b17e3b2e048702d06

module.exports = router;
