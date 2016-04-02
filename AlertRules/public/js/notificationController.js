define(function () {
    //Do setup work here
    var controller = function ($scope) {
		
		this._scope = $scope;
		$scope.body = "notif info here";
	};

    return controller;
});