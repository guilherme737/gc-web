(function () {
    'use strict';

    angular.module('app.frequencia-celula').config(FrequenciaCelulaRoute);

    FrequenciaCelulaRoute.$inject = ['$stateProvider'];
    /* @ngInject */
    function FrequenciaCelulaRoute($stateProvider) {

        $stateProvider.state('frequencia-celula-novo', {
            url: '/frequencia-celula/novo',
            parent:'home',
            controller: 'FrequenciaCelulaFormController',
            templateUrl: 'frequencia-celula/frequencia-celula.form.html',
            authorize: true

        }).state('frequencia-celula-editar', {
            url: '/frequencia-celula/:id',
            parent:'home',
            controller: 'FrequenciaCelulaFormController',
            templateUrl: 'frequencia-celula/frequencia-celula.form.html',
            authorize: true

        }).state('frequencia-celula', {
            url: '/frequencia-celula',
            parent:'home',
            controller: 'FrequenciaCelulaController',
            templateUrl: 'frequencia-celula/frequencia-celula.html',
            authorize: true
        });
    }
})();
