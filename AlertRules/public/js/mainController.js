define(function () {
    //Do setup work here
    var controller = function ($scope, $http) {
		var _this = this;
		this._http = $http;
		this._scope = $scope;
	 	this.url = "http://localhost:3000/web/conditions";
	 	this.logoutUrl = "http://localhost:3000/logout";
		$scope.send= function(ConditionConfig, NotifConfig){
	    	_this.sendConfig(ConditionConfig, NotifConfig);
	  	};
	  	$scope.logout = function() {
	  		_this.logout();
	  	}
	};

	controller.prototype.sendConfig = function (ConditionConfig, NotifConfig){
		var config = {
			conditionConfig:ConditionConfig,
			notifConfig: NotifConfig
		}
		console.log(config);
		this._http.post(this.url, config).then( function () {
			console.log("success");
		}, function () {
			console.log("error");
		});
	};

	controller.prototype.logout = function (){
		this._http.post(this.logoutUrl).then( function () {
			console.log("success");
		}, function () {
			console.log("error");
		});
	};
    return controller;
});