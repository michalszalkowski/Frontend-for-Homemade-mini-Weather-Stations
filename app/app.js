var louisApp = angular.module('louisApp',
	[
		'LouisApp.controller.home',
		'LouisApp.controller.table',
		'LouisApp.controller.chart',
		'LouisApp.factory',
		'ngRoute'
	])

louisApp.config(function ($routeProvider) {

	$routeProvider.
		when('/dashboard', {templateUrl: 'app/tpl/home.tpl.html', controller: 'HomeCtrl'}).
		when('/table', {templateUrl: 'app/tpl/table.tpl.html', controller: 'TableCtrl'}).
		when('/chart', {templateUrl: 'app/tpl/chart.tpl.html', controller: 'ChartCtrl'}).
		otherwise({redirectTo: '/dashboard'});
});
