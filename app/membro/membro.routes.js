'use strict';

angular.module('app.membro').config(MembroRoute);

MembroRoute.$inject = ['$stateProvider'];
/* @ngInject */
function MembroRoute($stateProvider) {

    $stateProvider.state('membro-novo',{
        name: '/membro/novo',
        controller: 'MembroController',
        templateUrl: 'membro/membro.html',
        authorize:true,
        title: 'Register people'
        
    }).state('membro-editar', {
        url: '/membro/:id',
        controller: 'MembroController',
        templateUrl: 'membro/membro.html',
        authorize:true,
        title: 'Edit people'
        
    }).state('membro', {
        url: '/membro',
        controller: 'MembroController',
        templateUrl: 'membro/membro.lista.html',
        authorize:true
        
    });
}
