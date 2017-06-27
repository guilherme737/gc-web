(function () {
    'use strict';

    angular.module('app.frequencia-celula').config(FrequenciaCelulaRoute);

    FrequenciaCelulaRoute.$inject = ['$stateProvider'];
    /* @ngInject */
    function FrequenciaCelulaRoute($stateProvider) {

        $stateProvider.state('frequencia-celula-novo', {
            url: '/frequencia-celula/novo',
            controller: 'FrequenciaCelulaFormController',
            templateUrl: 'frequencia-celula/frequencia-celula.form.html',
            authorize: true

        }).state('frequencia-celula-editar', {
            url: '/frequencia-celula/:id',
            controller: 'FrequenciaCelulaFormController',
            templateUrl: 'frequencia-celula/frequencia-celula.form.html',
            authorize: true

        }).state('frequencia-celula', {
            url: '/frequencia-celula',
            controller: 'FrequenciaCelulaController',
            templateUrl: 'frequencia-celula/frequencia-celula.html',
            authorize: true
        });
    }
})();