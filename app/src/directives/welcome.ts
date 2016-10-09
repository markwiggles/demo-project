export default class WelcomeDirective implements ng.IDirective {
    restrict;
    scope;
    template;
    controllerAs;
    controller;
    link;
    compile;
    replace;
    firstName: string;

    constructor() {
        this.restrict = 'AEC';
        this.replace = true;
        this.scope = {};
        this.template = require('src/directives/welcome.html');
        this.controllerAs = 'wc';
        this.controller = ($scope) => {
            $scope.firstName = 'mark';
        }
        this.compile = (tElem, attrs) => {
          return ($scope, elem, attrs, ctrl) => {
            elem.on('click',() => {
              $scope.firstName = 'fred';
              ctrl.$setViewValue();
            })
          }
        }
    }


    static getFactory(): ng.IDirectiveFactory {
        const directive = () => new WelcomeDirective();
        return directive;
    }
}
