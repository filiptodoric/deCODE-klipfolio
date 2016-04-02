define(function () {
    //Do setup work here
    var conditionController = function ($scope, $http, sendService) {
		var _this = this;
		this._scope = $scope;
		this._http = $http;
		this.sendService = sendService;
		$scope.body = [{
			key: "",
			value: "",
			condition: "",
			message: ""
		}];
		$scope.conditionTypes = 
		[
			"<", 
			"=", 
			">",
			"<=",
			">=",
			"contains"
		];
		$scope.notificationConfigs = [{
		}];
	 	this.url = "http://localhost:3000/web/conditions";
	  	$scope.addCondition = function(){
	    	_this.addCondition();
	  	};
	  	$scope.deleteCondition = function(){
	    	_this.deleteCondition();
	  	};
	  	$scope.conditionTypePicked = function(element, condition) {
	  		_this.conditionTypePicked(element, condition);
	  	};
	  	$scope.sendConditions = function(config){
	    	sendService.sendConditions(config);
	  	};
	};

	conditionController.prototype.sendConfig = function (config){
		
		console.log(config);
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

	conditionController.prototype.conditionTypePicked = function (element, condition) {
		var index = this._scope.body.indexOf(element)
		this._scope.body[index].condition = condition;
	}

	conditionController.prototype.deleteCondition = function (condition) {
		var index = this._scope.body.indexOf(condition)
		this._scope.body.splice(index);

	}
    return conditionController;
});