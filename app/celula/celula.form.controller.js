(function () {
    'use strict';

    angular.module('app.celula').controller('CelulaFormController', CelulaFormController);

    CelulaFormController.$inject = ['$scope', '$state', '$stateParams', '$log', 'CelulaService', 'MembroService'];
    /* @ngInject */
    function CelulaFormController($scope, $state, $stateParams, $log, Celula, Membro) {

        var id = $stateParams.id;

        if (!id) {
            $scope.registro = {
                nome: '',
                cidade: 'GOIÂNIA',
                membros : []
            };
            
            $scope.membroCelula = {
                nome: "",                
            };

        } else {

            Celula.obterPorId(id).then(function (data) {

                $scope.registro = data;
            });
        }

        Membro.obterTodos().then(function (data) {
            $scope.membros = data;
        });
        
        $scope.estados = ['GO']


        $scope.novo = function () {

            $state.go('celula-novo');
        };

        $scope.editar = function (id) {

            Celula.obterPorId(id).then(function (data) {

                $scope.celula = data;
            });

            $state.go('celula-editar', {"id": id});
        };

        $scope.salvar = function () {

            Celula.inserir($scope.celula).then(function (data) {

                if (!data.message) {

                }
            });
        };

        $scope.voltar = function () {
            $state.go('celula');
        };
        
        $scope.addMembro = function (membro) {
            console.log($scope.membroCelula);
            $scope.registro.membros.push(membro);
        };


        /*
         Membro.obterTodos().then(function (membros) {
         $scope.membros = membros;
         });
         */

    }
})();