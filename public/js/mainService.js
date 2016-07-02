angular.module('Trello')

.factory('mainService', function ($http) {
	var service = {};

	service.getAllData = function () {
		return $http.get('/api/data')
	}

	return service

});