(function () {
    'use strict';

    angular.module('app.celula').config(CelulaRoute);

    CelulaRoute.$inject = ['$stateProvider'];
    /* @ngInject */
    function CelulaRoute($stateProvider) {

        $stateProvider.state('celula-novo', {
            url: '/celula/novo',
            parent: 'home',
            controller: 'CelulaFormController',
            templateUrl: 'celula/celula.form.html',
            authorize: true

        }).state('celula-editar', {
            url: '/celula/:id',
            parent: 'home',
            controller: 'CelulaFormController',
            templateUrl: 'celula/celula.form.html',
            authorize: true

        }).state('celula', {
            url: '/celula',
            parent: 'home',
            controller: 'CelulaController',
            templateUrl: 'celula/celula.html',
            authorize: true
        });
    }
})();