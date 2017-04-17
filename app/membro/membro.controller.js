(function () {
    'use strict';

    angular.module('app.membro').controller('MembroController', MembroController);

    MembroController.$inject = ['$scope', '$state', '$location', '$http', '$timeout', '$log', 'MembroService'];
    /* @ngInject */
    function MembroController($scope, $state, $location, $http, $timeout, $log, Membro) {

        $scope.membro = {
            nome: "",
            dataNascimento: null,
            telefone: null,
            email: null,
        }

        $scope.novo = function () {
            
            $state.go('membro-novo');  
        };
        
        $scope.editar = function (id) {
            
            $state.go('membro-editar', {"id": id});  
        };

        $scope.salvar = function () {


            Membro.inserir($scope.membro).then(function (data) {

                if (!data.message) {

                }
            });
        };


        Membro.obterTodos().then(function (membros) {
            $scope.membros = membros;
        });

    }
})();