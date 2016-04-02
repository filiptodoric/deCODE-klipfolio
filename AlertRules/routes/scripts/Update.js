//there will be a timer function in here that checks the data base for when the next time to get data from somewhere
var moment = require('moment');
var request = require('request');
var twitter = require('twitter');

var data = require('./Evalulate.js');

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
		console.log(tweets.statuses);
	});
	console.log("updated:" + moment().format());
}