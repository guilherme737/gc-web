(function () {
    'use strict';

    angular.module('app.grupo').controller('GrupoController', GrupoController);

    GrupoController.$inject = ['$scope', '$state', '$log', 'GrupoService'];
    /* @ngInject */
    function GrupoController($scope, $state, $log, Grupo) {

        Grupo.obterTodos().then(function (grupos) {
            $scope.grupos = grupos;
        });
        
        $scope.novo = function () {

            $state.go('grupo-novo');
        };

        $scope.editar = function (id) {
            
            $state.go('grupo-editar', {"id": id});
        };

        

        $scope.voltar = function () {
            $state.go('grupo');  
        };

    }
})();
