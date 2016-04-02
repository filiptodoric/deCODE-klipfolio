//there will be a timer function in here that checks the data base for when the next time to get data from somewhere
var moment = require('moment');
var request = require('request');
var twitter = require('twitter');
var data = require('./Evalulate.js');
var past_id = NaN;

exports.dataBase = function(){
	
	//make client and user tokes for the feild
	var client = new twitter({
		consumer_key: 'hJ7C5zOMlduCNFCEUz3H7KURk',
		consumer_secret: 'dJFekWGU38mVH8JzsAzkHG3s1PqSlhZpwvmNrLogpzZsfxKyje',
		access_token_key: '1323295472-OtqWDhMJuZpQMKNvCkOeHPd9ANKzYbBbqPtET9o',
		access_token_secret: '15hlcbNht1oeSns0oMt04tE0ZdSaw9ktTekaKtl0utrA4'
	});
	var user = 'nasa';
	var query = 'to:'+user;
	
	client.get('search/tweets', {q: query}, function(error, tweets, response){
		if(!isNaN(past_id) || tweets.statuses[0].id != past_id){	
			console.log("working here");
			console.log(tweets.statuses[0].favourites_count);
			console.log(data.evalulate('>=',tweets.statuses[0].favourites_count,0));
			if(data.evalulate('>=',tweets.statuses[0].favourites_count,0)){
				console.log("Something");
			}
			//console.log(tweets.statuses);
		}
	});
	console.log("updated:" + moment().format());
}