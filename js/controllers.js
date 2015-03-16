var app = angular.module('decoreApp', []);

	app.controller('generalController', ['$scope', '$http',
		function($scope, $http){
			$http.get('data/data.json').success(function(data){
				$scope.projects = data;
			}).error(function(data){
				alert("Data json Error");
			});
		}]);
