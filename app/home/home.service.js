'use strict';

angular.module('app.home').factory('HomeService', HomeService);

HomeService.$inject = ['$http', 'localStorageService', '$q', 'GCConstants'];
/* @ngInject */

function HomeService ($http, $localStorage, $q, GCConstants) {
    return {

    };

    function handleSuccess(res) {

        return res.data;
    }

    function handleError(error) {

        return function () {
            return {success: false, message: error};
        };
    }
}