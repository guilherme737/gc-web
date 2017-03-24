'use strict';

angular.module('app').run(AppRun);

AppRun.$inject = ['$rootScope', 'HttpService','$state', "$stateParams"];
/* @ngInject */
function AppRun($rootScope, HttpService, $state, $stateParams) {

    $rootScope.$state = $state;
    
    $rootScope.$stateParams = $stateParams;
    
    $rootScope.httpService = HttpService;

    $rootScope.$on('$stateChangeSuccess', function (event, current, fromState, fromParams) {
        
        $state.current = current;
        
        

    });
    
    //state.transitionTo('home');    
    
}
