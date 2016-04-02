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

	sendService.prototype.sendNotifications = function (notification){
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

	sourceController.$inject= ['$scope', '$http', 'sendService'];
	app.controller('mainController', mainController);
	app.controller('conditionController', conditionController);
	app.controller('notificationController', notificationController);
	app.controller('sourceController', sourceController);
  	angular.bootstrap(document, ['mainModule']);
});




//'bower_components/tv4/tv4', 'bower_components/objectpath/lib/ObjectPath', 'bower_components/angular/angular.min', 'bower_components/angular-sanitize/angular-sanitize.min', 'bower_components/angular-schema-form/dist/schema-form.min', 'bower_components/angular-schema-form/dist/bootstrap-decorator.min'