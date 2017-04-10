'use strict';

angular.module('app.auth').factory('LoginService', LoginService);

LoginService.$inject = ['$http', 'localStorageService', '$q', 'GCConstants'];
/* @ngInject */

function LoginService ($http, $localStorage, $q, GCConstants) {
    return {

        getToken : function () {
          return $localStorage.token;
        },

        setToken: function (token) {
          $localStorage.token = token;
        },

        login : function (data) {
          $http.post(GCConstants.BASE.API +'login', data);
        },

        signup : function (data) {
          $http.post('api/signup', data);
        },

        logout : function (data) {
          delete $localStorage.token;
          $q.when();
        }
    };
}