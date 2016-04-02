var request = require('request');

exports.sendSlack = function(body) {
	var jsonObj = 
	{
		'message': 
		{
			'title': "Username",
			'body': body
		},
		'config': 
		{
			'channel': "#random"
		}
	};
	
	request({
		url: "https://klipfolio-notifier.herokuapp.com/v1/slack",
		 method: "POST",
		 json: true,
		 body: jsonObj
	}, function(error, response, body) {
		if(error !== null){
			console.log(error);
		}
		console.log("recived: slack");
	})
};