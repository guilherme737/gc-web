(function () {
    'use strict';

    angular.module('app.celula').controller('CelulaController', CelulaController);

    CelulaController.$inject = ['$scope', '$state', '$log', 'CelulaService'];
    /* @ngInject */
    function CelulaController($scope, $state, $log, Celula) {

        Celula.obterTodos().then(function (celulas) {
            $scope.membros = celulas;
        });
        
        $scope.novo = function () {

            $state.go('celula-novo');
        };

        $scope.editar = function (id) {
            
            $state.go('celula-editar', {"id": id});
        };

        

        $scope.voltar = function () {
            $state.go('celula');  
        };

    }
})();