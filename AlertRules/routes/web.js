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

//condition 	: (String) that agrees with one fo the constants
//value			: (object) data[]
//limit			: (object) limit[]
var eval = function(condition, value, limit)   {
	const greaterThan = ">";
	const lessThan = "<";
	const equal = "=";
	const lessThanEqual = "<=";
	const greaterThanEqual = ">=";
	const contains = "exist";
	const doesNotContain = "notExist";
	
	//use typescript to see if the json object is valid
	if(condition === greaterThan) {
		return (value > limit);
	}
	else if (condition === lessThan) {
		return (value < limit);
	}
	else if(condition === equal) {
		return (value === limit);
	}
	else if(condition === lessThanEqual){
	return (value <= limit);
	}
	else if(condition === greaterThanEqual){
	return (value >= limit);
	}
	else if (condition == contains){
		for(i = 0;i < value.length;i++){
			for(j = 0; i < limit.length;j++){
				if(value[i] === limit[j]){
						return true;
				}
			}
		}
		return false;
	}
	else if(condition === doesNotContain){
		for(i = 0;i < value.length;i++){
			for(j = 0; i < limit.length;j++){
				if(value[i] === limit[j]){
					return false;
				}
			}
		}
		return true;
	}
	else{
		return false;    
	}
}

module.exports = router;
