'use strict';

angular.module('app.home').config(HomeRoute);

HomeRoute.$inject = ['$stateProvider'];
/* @ngInject */
function HomeRoute($stateProvider) {

      $stateProvider.state('home', {
          url: '/home',
          templateUrl: 'home/home.html',
          controller: 'HomeController',
          authorize: true

      });
}
