(function () {
    'use strict';

    angular.module('app.frequencia-celula').controller('FrequenciaCelulaFormController', FrequenciaCelulaFormController);

    FrequenciaCelulaFormController.$inject = ['$scope', '$state', '$stateParams', '$log', 'FrequenciaCelulaService', 'MembroService'];
    /* @ngInject */
    function FrequenciaCelulaFormController($scope, $state, $stateParams, $log, FrequenciaCelula, Membro) {

        var id = $stateParams.id;

        if (!id) {
            $scope.frequencia = {
                celula_id: 1,
                membros: [],
                visitantes: null,
                culto: null,
            };

            var liderId = 5;

            Membro.obterMembrosPorLider(liderId).then(function (data) {
                $scope.membros = data;
            });

        } else {

            FrequenciaCelula.obterPorId(id).then(function (data) {
                $scope.membro = data;
            });
        }

        $scope.obterMembrosCelula = function () {
            Membro.obterLideresPorDiscipulador($scope.membro.discipulador).then(function(data){
                $scope.lideres = data;
            });
        };

        $scope.novo = function () {

            $state.go('frequencia-celula-novo');
        };

        $scope.editar = function (id) {

            FrequenciaCelula.obterPorId(id).then(function (data) {

                $scope.frequencia = data;
            });

            $state.go('frequencia-celula-editar', {"id": id});
        };

        $scope.salvar = function () {

            if ($scope.frequencia.id > 0) {

                FrequenciaCelula.atualizar($scope.frequencia, $scope.frequencia.id).then(function (data) {

                    if (!data.message) {

                    }
                });

            } else {
                
                $scope.frequencia.membros = $scope.membros;
                
                FrequenciaCelula.inserir($scope.frequencia).then(function (data) {

                    if (!data.message) {
                        
                    }
                });
            }


        };

        $scope.voltar = function () {
            $state.go('frequencia');
        };


        /*
         Membro.obterTodos().then(function (membros) {
         $scope.membros = membros;
         });
         */

    }
})();
