var app = angular.module('klinttiley', ['ngRoute', 'ui.bootstrap', 'ngAnimate'])
  .config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
    // '$httpProvider',$httpProvider not needed unless using services
   $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'portfolioController'
    })
    .when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'portfolioController'
    })
    .when('/portfolio', {
      templateUrl: 'partials/portfolio.html',
      controller: 'portfolioController'
    })
    .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'aboutController'
      })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
        controller: 'contactController'
    })

  $locationProvider.html5Mode(true);
}])