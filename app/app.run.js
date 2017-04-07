'use strict';

angular.module('app').run(AppRun);

AppRun.$inject = ['$rootScope', 'HttpService', '$location','$state', "$stateParams", "AuthService"];
/* @ngInject */
function AppRun($rootScope, HttpService, $location, $state, $stateParams, AuthService) {

    $rootScope.$state = $state;
    
    $rootScope.$stateParams = $stateParams;
    
    $rootScope.httpService = HttpService;

    $rootScope.$on('$stateChangeSuccess', function (event, current, fromState, fromParams) {
        
        $state.current = current;
        
        

    });

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){ 
	    
	    //event.preventDefault(); 
	    
	    if (toState.authorize) {

        	if (!AuthService.getToken()) {
          		/* Ugly way
          		event.preventDefault();
          		$location.path('/login');
          		========================== */

          		$rootScope.$evalAsync(function () {
            		$location.path('/signin');
          		})
        	}
      	}	
	})

    //state.transitionTo('home');    
    
}
