import * as angular from 'angular';
import controller from './app.controller';
import service from './app.service';

angular.module('app', [])
    .controller('$ctrl',controller)
    .service('$svc', service);