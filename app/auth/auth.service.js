(function () {

    'use strict';

    angular.module('app.auth').factory('AuthService', AuthService);

    AuthService.$inject = ['$http', 'localStorageService', '$q'];
    /* @ngInject */

    function AuthService($http, $localStorage, $q) {

        return {

            getToken: function () {
                return $localStorage.token;
            },

            setToken: function (token) {
                $localStorage.token = token;
            },

            signin: function (data) {
                $http.post('api/signin', data);
            },

            signup: function (data) {
                $http.post('api/signup', data);
            },

            logout: function (data) {
                delete $localStorage.token;
                $q.when();
            }
        };
    }

})();