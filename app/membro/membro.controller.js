(function () {
    'use strict';

    angular.module('app.membro').controller('MembroController', MembroController);

    MembroController.$inject = ['$scope', '$state', '$log', 'MembroService'];
    /* @ngInject */
    function MembroController($scope, $state, $log, Membro) {

        Membro.obterTodos().then(function (membros) {
            $scope.membros = membros;
        });
        
        $scope.novo = function () {

            $state.go('membro-novo');
        };

        $scope.editar = function (id) {
            
            $state.go('membro-editar', {"id": id});
        };

        

        $scope.voltar = function () {
            $state.go('membro');  
        };

    }
})();