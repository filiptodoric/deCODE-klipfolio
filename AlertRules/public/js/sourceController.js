define(function () {
    //Do setup work here
    var controller = function ($scope, $http) {
		
		this._scope = $scope;
		this._http = $http
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
	};

	controller.sendSource = function (Type, source) {
		params = {
			type: Type,
			hashtag: source.hashtag,
			username:source.hashtag
		}

		console.log(params);
		this._http.post(this.url, params).then( function () {
			console.log("success");
		}, function () {
			console.log("error");
		});
	}

    return controller;
});