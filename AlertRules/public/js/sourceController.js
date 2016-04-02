define(function () {
    //Do setup work here
    var controller = function ($scope, $http, sendService) {
		
		this._scope = $scope;
		this._http = $http
		this.sendService = sendService;
		var _this=this;
		$scope.sources = [
			{
				name: "Twitter",
				templateUrl: "templates/twitterSource.html"
			},
			{
				name: "Weather",
				templateUrl: "templates/weatherSource.html"
			},
			{
				name: "Facebook",
				templateUrl: "templates/facebookSource.html"
			},
			{
				name: "Earthquakes",
				templateUrl: "templates/weatherSource.html"
			},
			{
				name: "Stock",
				templateUrl: "templates/stockSource.html"
			},
			{
				name: "Flights",
				templateUrl: "templates/stockSource.html"
			}
		];
		$scope.sendSource = function(type, user) {
			_this.sendSource(type, user);
		};
	};

	controller.prototype.sendSource = function (Type, user) {
		params = {
			type: Type,
			username: user,
		}
		console.log(params);
		this.sendService.sendSource(params);
	}

    return controller;
});