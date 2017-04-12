(function () {
    'use strict';

    angular.module('app.login').controller('LoginController', LoginController);

    function LoginController($location, LoginService) {
        
        var vm = this;

        vm.login = login;

        initController();

        function initController() {
            // reset login status
            LoginService.logout();
        };

        function login() {
            vm.loading = true;
            LoginService.login(vm.username, vm.password, function (result) {

                console.log(result);

                if (result === true) {
                    //$location.path('/');

                    Login.setToken(result.token);
                    vm.loading = false;

                } else {
                    vm.error = 'Username or password is incorrect';
                    vm.loading = false;
                }
            });
        };
    }

})();