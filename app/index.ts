import 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import routing from './routes';

angular.module('index', ['ui.router', 'ui.bootstrap'])
    .config(routing);
