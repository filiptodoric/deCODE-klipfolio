//there will be a timer function in here that checks the data base for when the next time to get data from somewhere
var moment = require('moment');


exports.dataBase = function(){
	console.log("updated:" + moment().format());
}