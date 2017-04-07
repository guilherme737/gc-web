'use strict';

angular.module('app').config(AppRoute);

AppRoute.$inject = ['$stateProvider', '$urlRouterProvider','$httpProvider'];
/* @ngInject */
function AppRoute($stateProvider, $urlRouterProvider, $httpProvider) {
    
    //$urlRouterProvider.otherwise('/home');
    
    /*
    $stateProvider.state('auth', {
        url: '/auth',
        controller: 'AuthController'
    });    
    */

    /*
    $routeProvider.when('/', {
        templateUrl: 'home/home.html',
        title: 'Home'
    });
    $routeProvider.when('/pagenotfound', {
        templateUrl: 'pagenotfound.html',
        title: '404'
    });
    $routeProvider.otherwise({redirectTo: '/pagenotfound'});
    */

    $httpProvider.interceptors.push(['$q', 'HttpService', function ($q, HttpService) {
        return {
            request: function (config) {

                if (config.method == 'GET') {

                    var separator = config.url.indexOf('?') === -1 ? '?' : '&';

                    config.url = config.url + separator + 'noCache=' + new Date().getTime();
                }

                config.headers = config.headers || {};
                /*
                if (AuthService.getToken()) {
                    config.headers['Authorization'] = 'Bearer ' + AuthService.getToken();
                }
                */
                HttpService.pushRequest();

                return config;
            },

            requestError: function (response) {

                HttpService.popRequest();

                return $q.reject(response);                
            },

            response: function (response) {

                HttpService.popRequest();

                return response;
            },

            responseError: function (response) {

                HttpService.popRequest();

                if (response.status === 502) {
                    //Flash.create('danger', 'Servidor indisponível no momento!');

                } else if (response.status !== 401) {
                    //Flash.create('danger', response.data.messages);

                } else if (response.status === 401 || response.status === 403) {
                    $location.path('/signin');

                }

                return $q.reject(response);
            }
        };
    }]);


 
}
