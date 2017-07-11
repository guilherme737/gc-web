(function () {
    'use strict';

    angular.module('app.frequencia-celula').controller('FrequenciaCelulaController', FrequenciaCelulaController);

    FrequenciaCelulaController.$inject = ['$scope', '$state', '$log', 'FrequenciaCelulaService'];
    /* @ngInject */
    function FrequenciaCelulaController($scope, $state, $log, FrequenciaCelula) {

        FrequenciaCelula.obterTodos().then(function (frequencias) {
            $scope.frequencias = frequencias;
        });
        
        $scope.novo = function () {
            $state.go('frequencia-celula-novo');
        };

        $scope.editar = function (id) {            
            $state.go('frequencia-celula-editar', {"id": id});
        };

        $scope.excluir = function (id) {
            FrequenciaCelula.excluir(id).then(function () {
                
            });
        }

        

        $scope.voltar = function () {
            $state.go('frequencia-celula');  
        };

    }
})();