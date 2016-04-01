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
    var name = req.body.name;
    var condition = req.body.condition;
    var limit = req.body.limit;
    var valueJSON = genJSON();
    var value = valueJSON.data;
	if(eval(condition, value, limit)){
		sendInfoToTeamTwo();
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
	if(!(_isEqual(value.keys(),limit.keys()))){
			return false;
	}
	//compare functions
	if(condition === greaterThan) {
		if(value[0] > limit[0]) {
            sendInfoToTeamTwo();
        }
	}
	else if (condition === lessThan) {
		if(value[0] < limit[0]) {
            sendInfoToTeamTwo();
        }
	}
	else if(condition === equal) {
		if(_isEqual(value,limit))   {
            sendInfoToTeamTwo();
        }
	}
	else if(condition == notEqual){
		if(!(_isEqual(value,limit)))    {
            sendInfoToTeamTwo();
        }
	}
	else if(condition === lessThanEqual){
		if(value[0] <= limit[0])   {
            sendInfoToTeamTwo();
        }
	}
	else if(condition === greaterThanEqual){
		if(value[0] >= limit[0])    {
            sendInfoToTeamTwo();
        }
	}
	else if (condition === contains){
		if(_.has(value,limit))  {
            sendInfoToTeamTwo();
        }
	}
	else if(condition === doesNotContain){
		if(!(_.has(value,limit)))   {
            sendInfoToTeamTwo();
        }
	}
	else {
		return false;
	}
};

/*var eval = function(condition, value, limit)   {
    if(condition == greaterThan) {
        if(value[0] > limit)   {
            sendInfoToTeamTwo();
        }
    }
    else if (condition == lessThan) {
        if(value[0] < limit)   {
            sendInfoToTeamTwo();
        }
    }
    else if(condition == equal) {
        if(value[0] == limit)  {
            sendInfoToTeamTwo();
        }
    }
};*/

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
};

module.exports = router;
