'use strict';

angular.module('app.membro').controller('MembroController', PeopleController);

PeopleController.$inject = ['$scope', '$state', '$location', '$http', '$timeout', '$log', 'PeopleService', 'AuthService', 'uiGmapGoogleMapApi', '$ngBootbox'];
/* @ngInject */
function PeopleController($scope, $state, $location, $http, $timeout, $log, People, Auth, uiGmapGoogleMapApi, $ngBootbox) {

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

        People.save($scope.person).then(function (data) {

            if (!data.message) {

                Auth.setAuth(data);
                
                $window.location.reload();
            }
        });
    };


    Membro.getAll().then(function (membros) {
        $scope.membros = membros;
    });
 
}