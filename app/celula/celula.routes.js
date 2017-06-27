(function () {
    'use strict';

    angular.module('app.celula').config(CelulaRoute);

    CelulaRoute.$inject = ['$stateProvider'];
    /* @ngInject */
    function CelulaRoute($stateProvider) {

        $stateProvider.state('celula-novo', {
            url: '/celula/novo',
            controller: 'CelulaFormController',
            templateUrl: 'celula/celula.form.html',
            authorize: true

        }).state('celula-editar', {
            url: '/celula/:id',
            controller: 'CelulaFormController',
            templateUrl: 'celula/celula.form.html',
            authorize: true

        }).state('celula', {
            url: '/celula',
            controller: 'CelulaController',
            templateUrl: 'celula/celula.html',
            authorize: true
        });
    }
})();