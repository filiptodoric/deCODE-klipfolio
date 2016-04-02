require(['mainController', 'conditionController', 'notificationController', 'sourceController'], function (mainController, conditionController, notificationController, sourceController) {

	var app = angular.module('mainModule', []);

	var sendService = function ($http) {
		var _this = this;
		_this._http=$http;
		this.url = "http://localhost:3000/web/conditions"
		_this.config= {
			sourceConfig: {},
			messageConfig: {},
			notificationConfig: {}
		}
	};

	sendService.prototype.sendSource = function (source){
		this.config.sourceConfig = source;
		console.log(this.config);
	};

	sendService.prototype.sendConditions = function (conditions){
		this.config.messageConfig = conditions;
		console.log(this.config);
	};

	sendService.prototype.sendNotification = function (notification){
		this.config.notificationConfig = notification;
		console.log(this.config);
	};

	sendService.prototype.send = function (){
		console.log(this.config);
		this._http.post(this.url, this.config).then( function () {
			console.log("success");
		}, function () {
			console.log("error");
		});
	};

	app.service('sendService', sendService);

	mainController.$inject = ['$scope', '$http', 'sendService']
	conditionController.$inject = ['$scope', '$http' , 'sendService'];
	notificationController.$inject= ['$scope', '$http' , 'sendService'];
	sourceController.$inject= ['$scope', '$http', 'sendService'];
	app.controller('mainController', mainController);
	app.controller('conditionController', conditionController);
	app.controller('notificationController', notificationController);
	app.controller('sourceController', sourceController);
  	angular.bootstrap(document, ['mainModule']);
});
