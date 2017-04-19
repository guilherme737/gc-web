'use strict';

angular.module('app.membro').factory('MembroService', MembroService);

MembroService.$inject = ['$http', '$rootScope', 'localStorageService', 'GCConstants'];
/* @ngInject */
function MembroService($http, $rootScope, localStorageService, GCConstants) {

    var service = {

        inserir: inserir,
        obterTodos: obterTodos,
        obterPorId: obterPorId       

    };

    function inserir(membro) {

//        return $http.post('http://zssn-backend-example.herokuapp.com/api/people', membro).then(handleSuccess, handleError('Error creating user'));
        return $http.post(GCConstants.BASE.API + 'membro', membro).then(handleSuccess, handleError('Error creating user'));
    }

    function obterTodos() {

//        return $http.get('http://zssn-backend-example.herokuapp.com/api/people.json').then(handleSuccess, handleError('Error getting all persons'));

        return $http.get(GCConstants.BASE.API + 'membro').then(handleSuccess, handleError('Error creating user'));
    }

    function obterPorId(id) {

//        return $http.get('http://zssn-backend-example.herokuapp.com/api/people/' + id).then(handleSuccess, handleError('Error getting user by id'));
        return $http.get(GCConstants.BASE.API + 'membro/' + id).then(handleSuccess, handleError('Error getting user by id'));
    }

    function atualizar(membro) {

        return $http.patch('http://zssn-backend-example.herokuapp.com/api/people/' + membro.id,
                {
                    name: user.nome,
                    age: user.age,
                    gender: user.gender,
                    lonlat: user.lonlat
                }).then(handleSuccess, handleError('Error updating people'));
    }

    function handleSuccess(res) {

        return res.data;
    }

    function handleError(error) {

        return function () {
            return {success: false, message: error};
        };
    }

    return service;

}
