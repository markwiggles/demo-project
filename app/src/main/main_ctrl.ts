export const MAIN_TITLE = "Demo Project";

import GroupsService from "../services/groups";

export class MainCtrl {

    public pageTitle: string;
    public content: string;
    static $inject = ['GroupsService'];

    constructor(private groupsService: GroupsService) {
        this.pageTitle = MAIN_TITLE;

        groupsService.get().then(function(response) {
            // console.log(response['rows']);
            angular.forEach(response['rows'], function(row){
              // console.log(row);
            })
        });
    }
}
