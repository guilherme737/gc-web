'use strict';

angular.module('app').config(AppRoute);

AppRoute.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
/* @ngInject */
function AppRoute($stateProvider, $urlRouterProvider, $httpProvider) {


    //$urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/home');





    $httpProvider.interceptors.push(['$q', 'HttpService', 'localStorageService', '$location',
        function ($q, HttpService, $localStorage, $location) {

            return {
                request: function (config) {

                    if (config.method == 'GET') {

                        var separator = config.url.indexOf('?') === -1 ? '?' : '&';

                        config.url = config.url + separator + 'noCache=' + new Date().getTime();
                    }

                    config.headers = config.headers || {};

//                if (AuthService.getToken()) {
                    if ($localStorage.get('token')) {
                        config.headers['Authorization'] = 'Bearer ' + $localStorage.get('token');
                    }

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

                    if (response.status <= 0) {
                        //Erro de conexao...
                        console.log('Erro de conexao com o servidor.');
                    } else if (response.status === 502) {
                        //Flash.create('danger', 'Servidor indisponível no momento!');

                    } else if (response.status !== 401) {
                        //Flash.create('danger', response.data.messages);

                    } else if (response.status === 401 || response.status === 403) {
                        $location.path('/login');
                    }

                    return $q.reject(response);
                }
            };
        }]);



}
