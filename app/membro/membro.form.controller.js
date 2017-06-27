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

            Membro.inserir($scope.membro).then(function (data) {

                if (!data.message) {

                }
            });
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