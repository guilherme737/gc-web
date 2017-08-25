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

                if (result && result.success) {
                    $location.path('/');

                    LoginService.setToken(result.token);
                    LoginService.setUsuario(result.id, result.user, result.funcao);

                    vm.loading = false;

                } else {
                    vm.error = 'Usuário ou senha está incorreto.';
                    vm.loading = false;
                }
            });
        };
    }

})();
