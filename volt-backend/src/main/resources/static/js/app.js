var voltApp = angular.module('voltApp', [
  'ngRoute',
  'voltControllers',
  'voltFilters',
  'voltServices'

 ]);

voltApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: '/html/partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/create', {
        templateUrl: '/html/partials/create-lab.html'//,
        //controller: 'LabCreateCntrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
 }]);