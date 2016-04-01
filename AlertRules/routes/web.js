var express = require('express');
var _ = require('underscore');
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
    var message = req.body.message;
    var condition = req.body.condition;
    var limit = {'data': req.body.value};
    var valueJSON = genJSON();
    var value = valueJSON.data;
	if(eval(condition, valueJSON, limit)){
		sendInfoToTeamTwo(message);
	}
    res.send('Success');
});

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
	
	//if this is true then the objects being compared are not the same object (diffrrent feilds)
/*	if(!(_.isEqual(value[0].keys(),limit.keys()))){
			return false;
	}*/
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

module.exports = router;
