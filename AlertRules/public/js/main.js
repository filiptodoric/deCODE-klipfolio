require.config({
    paths: {
        'angular': '/js/bower_components/angular/angular.min',
        'objectpath': '/js/bower_components/objectpath/lib/ObjectPath',
        'tv4': '/js/bower_components/tv4/tv4',
        'schemaForm': '/js/bower_components/angular-schema-form/dist/schema-form.min',
        'angularSanitize': 'js/bower_components/angular-sanitize/angular-sanitize.min'
    }
});

require(['mainController', 'conditionController', 'notificationController', 'sourceController', 'bower_components/angular/angular.min', 'bower_components/objectpath/lib/ObjectPath', 'bower_components/tv4/tv4'], function (mainController, conditionController, notificationController, sourceController, ang, objpath, t4) {

	var app = angular.module('mainModule', []);

	mainController.$inject = ['$scope', '$http']
	conditionController.$inject = ['$scope', '$http'];
	notificationController.$inject= ['$scope', '$http', '$q'];
	app.controller('mainController', mainController);
	app.controller('conditionController', conditionController);
	app.controller('notificationController', notificationController);
	app.controller('sourceController', sourceController);


  	angular.bootstrap(document, ['mainModule']);
});




//'bower_components/tv4/tv4', 'bower_components/objectpath/lib/ObjectPath', 'bower_components/angular/angular.min', 'bower_components/angular-sanitize/angular-sanitize.min', 'bower_components/angular-schema-form/dist/schema-form.min', 'bower_components/angular-schema-form/dist/bootstrap-decorator.min'