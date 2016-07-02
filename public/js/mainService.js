angular.module('Trello')

.factory('mainService', function ($http) {
	var service = {};

	service.getAllData = function () {
		return $http.get('/api/data')
	}

	service.addTask = function (listIndex, newTask) {
		return $http.put('/api/task/' + listIndex, {text: newTask});
	}

	return service

});