'use strict';

angular.module('app.frequencia-celula').factory('FrequenciaCelulaService', FrequenciaCelulaService);

FrequenciaCelulaService.$inject = ['$http', '$rootScope', 'localStorageService', 'GCConstants'];
/* @ngInject */
function FrequenciaCelulaService($http, $rootScope, localStorageService, GCConstants) {

    var service = {

        inserir: inserir,
        atualizar : atualizar,
        obterTodos: obterTodos,
        obterPorId: obterPorId,
        obterMembrosPorLider:obterMembrosPorLider

    };

    var FUNCIONALIDADE = 'frequencia-celula';

    function inserir(celula) {

        return $http.post(GCConstants.BASE.API + FUNCIONALIDADE, celula).then(handleSuccess, handleError('Erro ao criar registro.'));
    }

    function obterTodos() {

        return $http.get(GCConstants.BASE.API + FUNCIONALIDADE).then(handleSuccess, handleError('Erro ao obter os registros'));
    }

    function obterPorId(id) {

        return $http.get(GCConstants.BASE.API + FUNCIONALIDADE + '/' + id).then(handleSuccess, handleError('Error getting user by id'));
    }

    function atualizar(celula, id) {

        return $http.put(GCConstants.BASE.API + FUNCIONALIDADE + '/' + id).then(handleSuccess, handleError('Erro ao atualizar o registro'));
    }

    function obterMembrosPorLider(id) {

        return $http.get(GCConstants.BASE.API + FUNCIONALIDADE + '/frequencia-membros-por-lider/' + id).then(handleSuccess, handleError('Erro ao obter membros'));
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
