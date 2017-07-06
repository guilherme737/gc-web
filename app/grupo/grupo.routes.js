'use strict';

angular.module('app.grupo').config(GrupoRoute);

GrupoRoute.$inject = ['$stateProvider'];
/* @ngInject */
function GrupoRoute($stateProvider) {

    $stateProvider.state('grupo-novo',{
        name: '/grupo/novo',
        controller: 'GrupoFormController',
        templateUrl: 'grupo/grupo.html',
        authorize:true
        
    }).state('grupo-editar', {
        url: '/grupo/:id',
        controller: 'GrupoFormController',
        templateUrl: 'grupo/grupo.html',
        authorize:true
        
    }).state('grupo', {
        url: '/grupo',
        controller: 'GrupoController',
        templateUrl: 'grupo/grupo.lista.html',
        authorize:true        
    });
}
