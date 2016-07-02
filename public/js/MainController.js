angular.module('Trello')

.controller('MainController', function ($scope, $http) {
	
	// $http.get('/hello-world')
	// .then(function(response){
	// 	console.log(response.data);
	// });

	var newTask = {
		text: 'Do laundry.'
	}

	$http.post('/api/task', newTask)
	.then(function (response) {
		console.log(response.data)
	})


});
