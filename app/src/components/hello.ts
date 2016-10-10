export default class HelloComponent implements ng.IComponentOptions {
    scope;
    template;
    controllerAs;
    controller;
    greeting: string;
		bindings;

    constructor() {
        this.bindings = {
						// hello: "="
            // textBinding: '@',
            // dataBinding: '<',
            // functionBinding: '&'
        };
        this.scope = {};
        this.template = require('src/components/hello.html');
        this.controllerAs = "hello";
        this.controller = ($scope) => {
            // $scope.greeting = "hello there";
            // console.log(myForm.input);
        }
    }
}

// interface IComponentOptions {
//  controller?: any;
//  controllerAs?: string;
//  template?: string | Function;
//  templateUrl?: string | Function;
//  bindings?: any;
//  transclude?: boolean;
//  require?: Object;
//  $canActivate?: () => boolean;
//  $routeConfig?: RouteDefinition[];
// }
