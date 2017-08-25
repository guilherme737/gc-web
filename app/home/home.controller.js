(function () {
    'use strict';

    angular.module('app.home').controller('HomeController', HomeController);

    function HomeController($scope, $location, HomeService, LoginService) {

        var vm = this;

        $scope.usuario = LoginService.getUsuario();

    }

})();
