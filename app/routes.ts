import { MainCtrl } from './src/main/main_ctrl';
import 'angular';
import 'angular-ui-router';

routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

export default function routing($stateProvider: angular.ui.IStateProvider,
                                $locationProvider: angular.ILocationProvider,
                                $urlRouterProvider: angular.ui.IUrlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        url: '/',
        template: require('src/main/main_view.html'),
        controller: MainCtrl,
        controllerAs: '$ctrl'
    })
    .state('about', {
      url: '/about',
      template: require('src/main/about.html')
    });
}
