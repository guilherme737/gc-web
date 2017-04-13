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

            var credenciais = {
                usuario : vm.username,
                senha: vm.password
            }

            LoginService.login(credenciais).then(function (result) {

                console.log(result);

                if (result) {
                    $location.path('/');

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