'use strict';

angular.module('app.membro').controller('MembroController', PeopleController);

PeopleController.$inject = ['$scope', '$state', '$location', '$http', '$timeout', '$log', 'MembroService'];
/* @ngInject */
function PeopleController($scope, $state, $location, $http, $timeout, $log, Membro) {

    $scope.membro = {
        name: "",
        age: 0,
        gender: "",
        lonlat: null,
        items: ""
    }



    $scope.save = function () {

        var items = "";

        angular.forEach($scope.items, function (value, key) {
            items += value.name + ":" + value.count + ";";
        });

        $scope.person.items = items;

        Membro.inserir($scope.person).then(function (data) {

            if (!data.message) {

            }
        });
    };


    Membro.obterTodos().then(function (membros) {
        $scope.membros = membros;
    });
 
}