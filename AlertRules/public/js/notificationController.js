define(function () {
    //Do setup work here
    var controller = function ($scope, $http, $q) {
		
		this._scope = $scope;
		this._http = $http;
        $scope.serviceDropDown = [];
        $scope.allServiceData = {};
        $scope._url = "http://localhost:3000/web/availableEndPoints";
        
        $scope.getServices = function() {
            var deferred = $q.defer();
            var request = $http({
                method: "post",
                url: $scope._url
            });
            request.success(function(data) {
                $scope.fillServiceDropDown(data);
            }).error(function(data, status, headers, config) {
                console.log("Returned Data - Error");
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);
            });
        }
        
        $scope.fillServiceDropDown = function(services) {
            $scope.allServiceData = services;
            for(elem in services) {
                $scope.serviceDropDown[$scope.serviceDropDown.length] = services[elem].name;
                console.log(services[elem].name);
            }
            console.log($scope.serviceDropDown);
        }
        
        
        
        
        $scope.schema = {
            type: 'object',
            properties: {
                name: { type: "string", minLength: 2, title: "Name", description: "Name or alias" },
                title: {
                    type: "string",
                    enum: ['dr','jr','sir','mrs','mr','NaN','dj']
                }
            }
        };
        
        $scope.form = [
            "*",
            {
                type: "submit",
                title: "save"
            }
        ];
        
        $scope.model = {};
        
        
        
        
        
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
        
        $scope.getServices();
			
	};

    return controller;
});