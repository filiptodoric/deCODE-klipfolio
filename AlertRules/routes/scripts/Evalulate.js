var _ = require('underscore');

const greaterThan = ">";
const lessThan = "<";
const equal = "=";
const notEqual = "!=";
const lessThanEqual = "<=";
const greaterThanEqual = ">=";
const contains = "exist";
const doesNotContain = "notExist";

//condition 	: (String) that agrees with one fo the constants
//value			: (number) data
//limit			: (number) limit
exports.evalulate = function(condition, value, limit){
	//what the rest api calls for the compare operators	
	//compare functions
	if(condition === greaterThan) {
		return (value > limit);
	}
	else if (condition === lessThan) {
		return (value < limit);
	}
	else if(condition === equal) {
		return _.isEqual(value,limit);
	}
	else if(condition == notEqual){
		return !(_.isEqual(value,limit));
	}
	else if(condition === lessThanEqual){
		return (value <= limit);
	}
	else if(condition === greaterThanEqual){
		return (value >= limit);
	}
	else if (condition === contains){
		return _.has(value,limit);
	}
	else if(condition === doesNotContain){
		return !(_.has(value,limit));
	}
	else{
		return false;
	}
};
