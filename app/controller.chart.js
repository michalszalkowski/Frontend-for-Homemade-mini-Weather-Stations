google.load("visualization", "1", {packages:["corechart"]});


angular.module('LouisApp.controller.chart', [])

	.controller('ChartCtrl', function ($scope, $http, DataFactory) {



		$scope.data = [];
		$scope.data.push(['Data', 'Temperature C', 'Humidity %']);


		$http({method: 'GET', url: 'http://louis.btbw.pl/get.php?typ=1'}).
			success(function (data, status, headers, config) {

				data.forEach(function (item) {
					$scope.data.push([item.createat, parseFloat(item.temperature), parseFloat(item.humidity)]);
				});

				drawChart($scope.data);
			});

		function drawChart(_data) {
			var data = google.visualization.arrayToDataTable(_data);

			var options = {
				title: 'Temperature / Humidity',
				curveType: 'function'
				//,legend: { position: 'bottom' }
			};

			var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
			chart.draw(data, options);
		}
	})

;