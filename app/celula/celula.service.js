'use strict';

angular.module('app.celula').factory('CelulaService', CelulaService);

CelulaService.$inject = ['$http', '$rootScope', 'localStorageService', 'GCConstants'];
/* @ngInject */
function CelulaService($http, $rootScope, localStorageService, GCConstants) {

    var service = {

        inserir: inserir,
        atualizar : atualizar,
        obterTodos: obterTodos,
        obterPorId: obterPorId,        
        obterFuncoes: obterFuncoes
    };
    
    var FUNCIONALIDADE = 'celula';

    function inserir(celula) {

//        return $http.post('http://zssn-backend-example.herokuapp.com/api/people', membro).then(handleSuccess, handleError('Error creating user'));
        return $http.post(GCConstants.BASE.API + FUNCIONALIDADE, celula).then(handleSuccess, handleError('Erro ao criar registro.'));
    }

    function obterTodos() {

        return $http.get(GCConstants.BASE.API + FUNCIONALIDADE).then(handleSuccess, handleError('Erro ao obter os registros'));
    }

    function obterPorId(id) {

//        return $http.get('http://zssn-backend-example.herokuapp.com/api/people/' + id).then(handleSuccess, handleError('Error getting user by id'));
        return $http.get(GCConstants.BASE.API + FUNCIONALIDADE + '/' + id).then(handleSuccess, handleError('Error getting user by id'));
    }

    function atualizar(celula, id) {
        
        return $http.put(GCConstants.BASE.API + FUNCIONALIDADE + '/' + id).then(handleSuccess, handleError('Erro ao atualizar o registro'));

    }
    
    function obterFuncoes() {
     
        return $http.get(GCConstants.BASE.API + 'funcoes').then(handleSuccess, handleError('Erro ao obter funções.'));
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
