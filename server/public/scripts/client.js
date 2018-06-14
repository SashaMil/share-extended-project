const movieApp = angular.module('movieApp', ['ngRoute', 'ngMaterial']);

movieApp.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/views/home.html'
  }).when('/page2', {
    templateUrl: '/views/page2.html'
  })
  .otherwise({
    template: '<h1>404</h1>'
  })
});
