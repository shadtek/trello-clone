angular.module('Trello')

.controller('MainController', function ($scope, $http, mainService) {
	
	mainService.getAllData()
	.then(function (response) {
		$scope.data = response.data;
		console.log(response.data)
	})
	.catch(function(err){
		console.log(err);
	})

	// $scope.newTask = function () {
		

	// };


});
