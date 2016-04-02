define(function () {
    //Do setup work here
    var controller = function ($scope, $http, sendService) {
		
		this._scope = $scope;
		this._http = $http
		$scope.body = "notif info here";
		$scope.notificationTypes = [
			{
				name: "Slack",
				templateUrl: "templates/slack.html"
			},
			{
				name: "Twitter",
				templateUrl: "templates/twitter.html"
			}
		];
		$scope.sendNotifications = function(config){
	    	sendService.sendNotifications(config);
	  	};
	};

    return controller;
});