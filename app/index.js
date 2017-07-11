// npm
$ = jQuery = require('jquery');
require('bootstrap');
require('bootstrap-material-design');
//require('bootbox');
_ = require('lodash');
    //require('bootstrap-datepicker');
    //require('../node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.pt-BR.min');

//moment = require('moment');
//require('../node_modules/moment/locale/pt-br');
require('angular');
//require('angular-animate');
//require('angular-resource');
require('angular-ui-router');
//require('angular-ui-bootstrap');
//require('angular-route');
require('angular-local-storage');
//require('../node_modules/ng-sanitize/index');
//require('angular-sanitize');
//require('selectize');
//require('select2');
//require('../node_modules/ui-select/dist/select');

//require('ngbootbox');

//require('angular-utils-pagination');
//require('angular-simple-logger');
//require('angular-google-maps');

//alertify = require('alertifyjs');

// angular
require('./auth/auth.module');
require('./login/login.module');
require('./home/home.module');
require('./membro/membro.module');
require('./celula/celula.module');
require('./frequencia-celula/frequencia-celula.module');

require('./app.module');