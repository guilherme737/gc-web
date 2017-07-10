(function () {
    'use strict';

    angular.module('app.membro').controller('MembroFormController', MembroFormController);

    MembroFormController.$inject = ['$scope', '$state', '$stateParams', '$log', 'MembroService'];
    /* @ngInject */
    function MembroFormController($scope, $state, $stateParams, $log, Membro) {

        var id = $stateParams.id;

        if (!id) {
            $scope.membro = {
                nome: "",
                dataNascimento: null,
                telefone: null,
                email: null,
            };

        } else {

            Membro.obterPorId(id).then(function (data) {

                $scope.membro = data;
            });
        }

        Membro.obterFuncoes().then(function (data) {
            $scope.funcoes = data;
        });

        Membro.obterPastores().then(function (data) {
            $scope.pastores = data;
        });

        $scope.obterDiscipuladoresPorPastor = function () {
            Membro.obterDiscipuladoresPorPastor($scope.membro.pastor).then(function(data) {
                $scope.discipuladores = data;
            });     
        };

        $scope.obterLideresPorDiscipulador = function () {
            Membro.obterLideresPorDiscipulador($scope.membro.discipulador).then(function(data){
                $scope.lideres = data;
            });     
        };

        
            
        


        $scope.novo = function () {

            $state.go('membro-novo');
        };

        $scope.editar = function (id) {

            Membro.obterPorId(id).then(function (data) {

                $scope.membro = data;
            });

            $state.go('membro-editar', {"id": id});
        };

        $scope.salvar = function () {

            if ($scope.membro.id > 0) {

                Membro.atualizar($scope.membro, $scope.membro.id).then(function (data) {

                    if (!data.message) {
                        
                    }
                });    

            } else {
                Membro.inserir($scope.membro).then(function (data) {

                    if (!data.message) {
                        
                    }
                });    
            }

            
        };

        $scope.voltar = function () {
            $state.go('membro');
        };


        /*
         Membro.obterTodos().then(function (membros) {
         $scope.membros = membros;
         });
         */

    }
})();