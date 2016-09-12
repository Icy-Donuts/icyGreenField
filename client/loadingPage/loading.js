angular.module('housing.loading', [])
.controller('LoadingController', function($location, $timeout) {
	$timeout(function() {
		alert('Server is not responding... Let\'s try it again');
		$location.path('/search');
		console.log('$location: ', $location);
	}, 60000);
	// $location.path('/search');
});