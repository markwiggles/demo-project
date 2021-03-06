require("../../index");

describe("WelcomeDirective", () => {

    var $compile: ng.ICompileService;
    var $rootScope: ng.IRootScopeService;


    beforeEach(angular.mock.module('index'));

    beforeEach(() => {
        inject(function(_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $compile = _$compile_;
        });
    });

    it('message is correct', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile("<welcome></welcome>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain("Welcome mark");
    });
});
