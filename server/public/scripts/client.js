const movieApp = angular.module('movieApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngAnimate']);

movieApp.config(function($routeProvider, $sceDelegateProvider, $mdThemingProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
  $mdThemingProvider.theme('default')
   .primaryPalette('red')
   .dark();
  $routeProvider.when('/', {
    templateUrl: '/views/home.html'
  }).when('/display', {
    templateUrl: '/views/display.html'
  })
  .otherwise({
    template: '<h1>404</h1>'
  })
});
