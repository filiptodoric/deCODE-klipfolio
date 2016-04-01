var app = angular.module('mainModule', []);

var mainController = function ($scope, $http) {
	var _this = this;
	this._http = $http;
	this._scope = $scope;
	$scope.title = "Alert Rules";

 	this.url = "http://localhost:3000/web/conditions";
	$scope.sendConfig = function(config){
    	_this.sendConfig(config);
  	};
};

mainController.prototype.sendConfig = function (config){
	this._http.post(this.url, config).then( function () {
		console.log("success");
	}, function () {
		console.log("error");
	});
};

var httpService = function ($http)
 {
 	var _this = this;
 	this.url = "http://localhost:3000/web/conditions";
 	var post = function (config){
 		_this.post(config);
 	}
};
mainController.$inject= ['$scope', '$http'];
app.controller('mainController', mainController);