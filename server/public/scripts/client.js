const movieApp = angular.module('movieApp', ['ngRoute', 'ngMaterial']);

movieApp.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/views/home.html'
  }).when('/display', {
    templateUrl: '/views/display.html'
  })
  .otherwise({
    template: '<h1>404</h1>'
  })
});
