const movieApp = angular.module('movieApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

movieApp.config(function($routeProvider, $mdThemingProvider) {
  $mdThemingProvider.theme('docs-dark', 'default')
   .primaryPalette('pink')
   .dark()
  $routeProvider.when('/', {
    templateUrl: '/views/home.html'
  }).when('/display', {
    templateUrl: '/views/display.html'
  })
  .otherwise({
    template: '<h1>404</h1>'
  })
});
