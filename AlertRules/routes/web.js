var express = require('express');
var _ = require('underscore');
var request = require('request');
var router = express.Router();
var stormpath = require('express-stormpath');


var data = require('./scripts/Evalulate.js');
var notifications = require("./scripts/Notifications");
var update = require("./scripts/Update");

var jsonObj = {'data': []};


var genJSON = function() {
    jsonObj.data[jsonObj.data.length] = Math.floor((Math.random() * 100) + 1);
    return jsonObj;
};


router.post('/conditions', stormpath.loginRequired, function(req, res, next) {
    var title = req.body.messageConfig[0].title;
    var message = req.body.messageConfig[0].message;
    var condition = req.body.messageConfig[0].condition;
    var limit = req.body.messageConfig[0].value;

    var dataSource = req.body.sourceConfig.type;
    var userName = req.body.sourceConfig.username;

    if(dataSource == "Twitter") {
        setInterval(function(){ update.dataBase(userName, limit) }, 4000);
    }
    // var valueJSON = genJSON();
    // if(data.evalulate(condition,valueJSON,limit)){
    // notifications.sendSlack(message);
    // }
    // var value = valueJSON.data;


    // save to db
    req.user.customData.message = message;
    req.user.customData.condition = condition;
    req.user.customData.limit = limit;
    req.user.customData.save();

    // if(eval(condition, valueJSON, limit)){
    // 	sendInfoToTeamTwo(message);
    // }
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
