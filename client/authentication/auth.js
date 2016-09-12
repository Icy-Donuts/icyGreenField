angular.module('housing.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.error;
  $scope.class = '';

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/search');
      })
      .catch(function (error) {
        console.error(error);
        $scope.class = 'error';
        $scope.error = 'User does not exist';
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/search');
      })
      .catch(function (error) {
        console.error(error);
        $scope.class = 'error';
        $scope.error = 'User already exists!';
     });
  };
});