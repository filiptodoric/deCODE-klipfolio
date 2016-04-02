require(['conditionController', 'notificationController'], function (conditionController, notificationController) {

	var app = angular.module('mainModule', []);

	conditionController.$inject= ['$scope', '$http'];
	notificationController.$inject= ['$scope'];
	app.controller('conditionController', conditionController);
	app.controller('notificationController', notificationController);


  	angular.bootstrap(document, ['mainModule']);
});
