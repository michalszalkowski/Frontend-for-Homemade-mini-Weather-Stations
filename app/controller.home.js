angular.module('LouisApp.controller.home', [])

	.controller('HomeCtrl', function ($scope, $http) {
	})

	.controller('MenuCtrl', function ($scope, $location) {
		$scope.getClass = function (path) {
			if ($location.path().substr(0, path.length) == path) {
				return "active"
			} else {
				return ""
			}
		}
	})
;