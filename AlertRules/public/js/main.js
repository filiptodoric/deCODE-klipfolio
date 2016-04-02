require(['mainController', 'conditionController', 'notificationController', 'sourceController'], function (mainController, conditionController, notificationController, sourceController) {

	var app = angular.module('mainModule', []);

	mainController.$inject = ['$scope', '$http']
	conditionController.$inject = ['$scope', '$http'];
	notificationController.$inject= ['$scope', '$http'];
	app.controller('mainController', mainController);
	app.controller('conditionController', conditionController);
	app.controller('notificationController', notificationController);
	app.controller('sourceController', sourceController);


  	angular.bootstrap(document, ['mainModule']);
});
