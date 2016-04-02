define(function () {
    //Do setup work here
    var controller = function ($scope, $http) {
		
		this._scope = $scope;
		this._http = $http
		$scope.body = "notif info here";
		$scope.notificationTypes = [
			{
				name: "slack",
				templateUrl: "templates/slack.html"
			},
			{
				name: "webhooks",
				templateUrl: "templates/webhooks.html"
			},
			{
				name: "email",
				templateUrl: "templates/slack.html"
			}
		];
			
	};

    return controller;
});