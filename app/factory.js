angular.module('LouisApp.factory', ['ngResource'])

	.factory('DataFactory', function ($resource) {
		return $resource( 'http://louis.btbw.pl/get.php?format=arr', {}, {
			inArr: { method: 'GET', isArray: true }
		})
	})
;