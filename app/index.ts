import 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'angular-ui-bootstrap';
import routing from './routes';
import WelcomeDirective from './src/directives/welcome';
import HelloComponent from './src/components/hello';
import GroupsService from "./src/services/groups";


var indexApp = angular.module('index', ['ui.router', 'ui.bootstrap', 'ngResource'])
    .config(routing)
    .directive('welcome', WelcomeDirective.getFactory())
    .component('hello', new HelloComponent())
    .service('GroupsService', GroupsService);

GroupsService.$inject = ['$q', '$http'];

export default indexApp;
