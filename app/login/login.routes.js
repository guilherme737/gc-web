'use strict';

angular.module('app.login').config(LoginRoute);

LoginRoute.$inject = ['$stateProvider'];
/* @ngInject */
function LoginRoute($stateProvider) {

    $stateProvider        
        .state('login', {
            url: '/login',
            templateUrl: 'login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        });
}
