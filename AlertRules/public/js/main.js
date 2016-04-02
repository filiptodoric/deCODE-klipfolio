require(['mainController', 'conditionController', 'notificationController'], function (mainController, conditionController, notificationController) {

	var app = angular.module('mainModule', []);

	mainController.$inject = ['$scope', '$http']
	conditionController.$inject = ['$scope', '$http'];
	notificationController.$inject= ['$scope', '$http'];
	app.controller('mainController', mainController);
	app.controller('conditionController', conditionController);
	app.controller('notificationController', notificationController);


  	angular.bootstrap(document, ['mainModule']);
});
