angular.module('Trello')

.controller('MainController', function ($scope, $http, mainService) {
	
	mainService.getAllData()
	.then(function (response) {
		$scope.lists = response.data;
		console.log(response.data)
	})
	.catch(function(err){
		console.log(err);
	})

	$scope.addTask = function (listIndex, newTask) {
		mainService.addTask(listIndex, newTask)
		.then(function (response) {
			console.log(response)
			$scope.lists[listIndex].tasks.push(response.data);
		})
		.catch(function(err){
			console.error(err);
		})
	};


});
