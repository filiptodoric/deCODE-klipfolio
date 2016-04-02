define(function () {
    //Do setup work here
    var conditionController = function ($scope, $http) {
		var _this = this;
		this._http = $http;
		this._scope = $scope;
		$scope.body = [{
			key: "",
			value: "",
			condition: "",
			message: ""
		}];
		$scope.notificationConfigs = [{
		}];
	 	this.url = "http://localhost:3000/web/conditions";
		$scope.sendConfig = function(config){
	    	_this.sendConfig(config);
	  	};
	  	$scope.addCondition = function(){
	    	_this.addCondition();
	  	};
	  	$scope.deleteCondition = function(){
	    	_this.deleteCondition();
	  	};
	};

	conditionController.prototype.sendConfig = function (config){
		this._http.post(this.url, config).then( function () {
			console.log("success");
		}, function () {
			console.log("error");
		});
	};

	conditionController.prototype.addCondition = function () {
		var condition = {
			key: "",
			value: "",
			condition: "",
			message: ""
		};

		this._scope.body.push(condition);
	}

	conditionController.prototype.deleteCondition = function (condition) {
		var index = this._scope.body.indexOf(condition)
		this._scope.body.splice(index);

	}
    return conditionController;
});