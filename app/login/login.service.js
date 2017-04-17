'use strict';

angular.module('app.login').factory('LoginService', LoginService);

LoginService.$inject = ['$http', 'localStorageService', '$q', 'GCConstants'];
/* @ngInject */

function LoginService ($http, $localStorageService, $q, GCConstants) {
    return {

        getToken : function () {
          return $localStorageService.get('token');
        },

        setToken: function (token) {
          //$localStorageService.token = token;
          $localStorageService.set('token', token);
        },

        login : function (data) {
          //$http.post(GCConstants.BASE.API +'login', data);

          return $http({
                method : 'POST',
                url : GCConstants.BASE.API +'login',
                data: data

            }).then(handleSuccess, handleError('Erro ao efetuar o login. Tente novamente.'));
        },

        signup : function (data) {
          $http.post('api/signup', data);
        },

        logout : function (data) {
          delete $localStorageService.token;
          $q.when();
        }
    };

    function handleSuccess(res) {

        return res.data;
    }

    function handleError(error) {

        return function () {
            return {success: false, message: error};
        };
    }
}