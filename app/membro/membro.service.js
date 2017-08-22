'use strict';

angular.module('app.membro').factory('MembroService', MembroService);

MembroService.$inject = ['$http', '$rootScope', 'localStorageService', 'GCConstants'];
/* @ngInject */
function MembroService($http, $rootScope, localStorageService, GCConstants) {

    var service = {

        inserir: inserir,
        atualizar : atualizar,
        excluir: excluir,
        obterTodos: obterTodos,
        obterPorId: obterPorId,        
        obterFuncoes: obterFuncoes,
        obterPastores: obterPastores,
        obterDiscipuladoresPorPastor: obterDiscipuladoresPorPastor,
        obterLideresPorDiscipulador: obterLideresPorDiscipulador,
        obterMembrosPorLider: obterMembrosPorLider


    };

    function inserir(membro) {
        return $http.post(GCConstants.BASE.API + 'membro', membro).then(handleSuccess, handleError('Error creating user'));
    }

    function atualizar(membro, id) {
        return $http.put(GCConstants.BASE.API + 'membro/' + id, membro).then(handleSuccess, handleError('Erro ao atualizar membro.'));        
    }

    function excluir(id) {
        return $http.delete(GCConstants.BASE.API + 'membro/' + id).then(handleSuccess, handleError('Erro ao excluir membro.'));        
    }

    function obterPorId(id) {
        return $http.get(GCConstants.BASE.API + 'membro/' + id).then(handleSuccess, handleError('Error obter membro por ID.'));
    }

    function obterTodos() {
        return $http.get(GCConstants.BASE.API + 'membro').then(handleSuccess, handleError('Erro ao obter Mambros'));
    }

    function obterFuncoes() {     
        return $http.get(GCConstants.BASE.API + 'funcoes').then(handleSuccess, handleError('Erro ao obter funções.'));
    }

    function obterPastores() {     
        return $http.get(GCConstants.BASE.API + 'membro-pastores').then(handleSuccess, handleError('Erro ao obter pastores.'));
    }

    function obterDiscipuladoresPorPastor(id) {     
        return $http.get(GCConstants.BASE.API + 'membro-discipuladores-por-pastor/' + id).then(handleSuccess, handleError('Erro ao obter discipuladores.'));
    }

    function obterLideresPorDiscipulador(id) {     
        return $http.get(GCConstants.BASE.API + 'membro-lideres-por-discipulador/' + id).then(handleSuccess, handleError('Erro ao obter líderes.'));
    }
    
    function obterMembrosPorLider(id) {     
        return $http.get(GCConstants.BASE.API + 'membro/membros-por-lider/' + id).then(handleSuccess, handleError('Erro ao obter líderes.'));
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
