angular.module('LouisApp.controller.table', [])

	.controller('TableCtrl', function ($scope, $http) {

		$http({method: 'GET', url: 'http://louis.btbw.pl/get.php'}).
			success(function (data, status, headers, config) {
				$scope.data = data;
			});
	})

;