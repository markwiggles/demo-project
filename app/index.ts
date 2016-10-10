import 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import routing from './routes';
import WelcomeDirective from './src/directives/welcome';
import HelloComponent from './src/components/hello';


var indexApp = angular.module('index', ['ui.router', 'ui.bootstrap'])
    .config(routing)
    .directive('welcome', WelcomeDirective.getFactory())
    .component('hello', new HelloComponent());


export default indexApp;
