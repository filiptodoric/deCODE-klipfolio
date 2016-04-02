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
	//data that will set the limit of the data
	var limit = parseInt(req.body.value);
    var valueJSON = genJSON();
	if(data.evalulate(condition,valueJSON,limit)){
		notifications.sendSlack(message);
	}
    res.send('Success');
});

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

module.exports = router;
