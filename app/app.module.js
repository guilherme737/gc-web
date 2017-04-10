'use strict';

angular.module('app', [
    //'ngAnimate',    
    'ui.router',
    //'ngSanitize',
    //'ngBootbox',
    //'uiGmapgoogle-maps',    
    'LocalStorageModule',    
    'app.auth',
    'app.login',
    //'app.home',
    'app.membro',
]);

require('./app.config');
require('./app.run');
require('./app.constants');
//require('./alertify.config');

require('./services/http.factory');
//require('./components/somente-numeros.directive');


setTimeout(function () {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });
}, 500);

