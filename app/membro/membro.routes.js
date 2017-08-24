'use strict';

angular.module('app.membro').config(MembroRoute);

MembroRoute.$inject = ['$stateProvider'];
/* @ngInject */
function MembroRoute($stateProvider) {

    $stateProvider.state('membro-novo',{
        url: '/membro/novo',
        parent:'home',
        controller: 'MembroFormController',
        templateUrl: 'membro/membro.form.html',
        authorize:true

    }).state('membro-editar', {
        url: '/membro/:id',
        parent:'home',
        controller: 'MembroFormController',
        templateUrl: 'membro/membro.form.html',
        authorize:true

    }).state('membro', {
        url: '/membro',
        parent:'home',
        controller: 'MembroController',
        templateUrl: 'membro/membro.html',
        authorize:true
    });
}
