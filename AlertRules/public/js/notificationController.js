define(function () {
    //Do setup work here
    var controller = function ($scope, $http, sendService) {
		
		this._scope = $scope;
		this._http = $http;
        $scope.serviceDropDown = [];
        $scope.allServiceData = {};
        $scope._url = "http://localhost:3000/web/availableEndPoints";
        
        $scope.notification = {
            "type": ''
        }
        
        $scope.onNotificationSelect = function(type) {
            $scope.notification.type = type.name;
        }
        
        $scope.getServices = function() {
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
            }
            $scope.selected = services[0];
        }
        
//        $scope.test = function(data) {
//            
//        }
        
 
//        $scope.schema = {
//            type: 'object',
//            properties: {
//                name: { type: "string", minLength: 2, title: "Name", description: "Name or alias" },
//                title: {
//                    type: "string",
//                    enum: ['dr','jr','sir','mrs','mr','NaN','dj']
//                }
//            }
//        };
//        
//        $scope.form = [
//            "*",
//            {
//                type: "submit",
//                title: "save"
//            }
//        ];
//        
//        $scope.model = {};
 
		$scope.body = "notif info here";
		$scope.notificationTypes = [
			{
				name: "Slack",
				templateUrl: "templates/slack.html"
			},
			{
				name: "twitter",
				templateUrl: "templates/slack.html"
			},
            {
                name: "facebook",
				templateUrl: "templates/slack.html" 
            }
		];
        
        $scope.getServices();
			
		$scope.sendNotifications = function(config){
	    	sendService.sendNotifications(config);
	  	};

	};

    return controller;
});