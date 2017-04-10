(function () {
    'use strict';

    angular.module('app.login').controller('LoginController', LoginController);

    function LoginController($location, AuthService) {
        
        var vm = this;

        vm.login = login;

        initController();

        function initController() {
            // reset login status
            AuthService.logout();
        };

        function login() {
            vm.loading = true;
            AuthService.login(vm.username, vm.password, function (result) {
                if (result === true) {
                    $location.path('/');
                } else {
                    vm.error = 'Username or password is incorrect';
                    vm.loading = false;
                }
            });
        };
    }

})();