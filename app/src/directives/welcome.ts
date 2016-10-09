export default class WelcomeDirective implements ng.IDirective {
    restrict;
    scope;
    template;
    controllerAs;
    controller;
    link;
    compile;
    firstName: string;
    require;

    constructor() {
        this.restrict = 'AEC';
        this.scope = {};
        this.template = require('src/directives/welcome.html');
        this.controllerAs = 'wc';
        this.controller = ($scope) => {
            $scope.firstName = 'mark';
        }
        this.require = "ngModel";

        this.compile = (tElem, attrs) => {
          console.log(tElem);
          return (scope, elem, attrs, ctrl) => {

            elem.on('click',() => {
              scope.firstName = 'fred';
              ctrl.$setViewValue();
            })
          }
        }
        // this.link = (scope, elem, attrs, ctrl) => {
        //
        //   elem.on('click',() => {
        //     scope.firstName = 'fred';
        //     ctrl.$setViewValue();
        //   })
        // }
    }


    static getFactory(): ng.IDirectiveFactory {
        const directive = () => new WelcomeDirective();
        return directive;
    }


}
