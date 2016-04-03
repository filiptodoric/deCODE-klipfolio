//there will be a timer function in here that checks the data base for when the next time to get data from somewhere
var moment = require('moment');
var request = require('request');
var twitter = require('twitter');
var data = require('./Evalulate.js');
var notifications = require("./Notifications");
var past_id = NaN;

exports.dataBase = function(username, hash){
	
	//make client and user tokes for the feild
	var client = new twitter({
		consumer_key: 			'hJ7C5zOMlduCNFCEUz3H7KURk',
		consumer_secret: 		'dJFekWGU38mVH8JzsAzkHG3s1PqSlhZpwvmNrLogpzZsfxKyje',
		access_token_key: 		'1323295472-OtqWDhMJuZpQMKNvCkOeHPd9ANKzYbBbqPtET9o',
		access_token_secret:	 '15hlcbNht1oeSns0oMt04tE0ZdSaw9ktTekaKtl0utrA4'
	});
	var user = username;
	var query = 'to:'+user;
	var hashtag = hash;

	client.get('search/tweets', {q: query}, function(error, tweets, response){
		//check if there is an error
		if(tweets.statuses === undefined){
				console.log("something went wrong");
				return;
		}
		//check if it is the same id (past_id is golbal)
		if(tweets.statuses[0].id != past_id){
			if(data.evalulate('>=',tweets.statuses[0].favorite_count,0)){
				
				//log the message that will be sent
				console.log("sendingMessage:"+tweets.statuses[0].text);
				notifications.sendSlack(tweets.statuses[0].text);
				//}
				past_id = tweets.statuses[0].id;
			}
		}
	});
	console.log("updated:" + moment().format());
}