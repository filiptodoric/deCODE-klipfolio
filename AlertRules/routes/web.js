var express = require('express');
var router = express.Router();


var jsonObj = {'data': 0}

var genJSON = function() {
    var newData = [Math.floor((Math.random() * 100) + 1)];
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
