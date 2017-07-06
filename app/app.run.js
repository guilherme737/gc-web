'use strict';

angular.module('app').run(AppRun);

AppRun.$inject = ['$rootScope', 'HttpService', '$location', '$state', "$stateParams", "LoginService"];
/* @ngInject */
function AppRun($rootScope, HttpService, $location, $state, $stateParams, LoginService) {

    $rootScope.$state = $state;

    $rootScope.$stateParams = $stateParams;

    $rootScope.httpService = HttpService;

    $rootScope.$on('$stateChangeSuccess', function (event, current, fromState, fromParams) {

        $state.current = current;

    });

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {

        //event.preventDefault(); 

        if (toState.authorize) {

            if (!LoginService.getToken()) {
                /* Ugly way
                 event.preventDefault();
                 $location.path('/login');
                 ========================== */

                $rootScope.$evalAsync(function () {
                    $state.go('login');
//                    $location.path('/login');
                        
                })
            }
        }
    })

    //state.transitionTo('home');    

}
