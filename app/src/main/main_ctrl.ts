export const MAIN_TITLE = "Demo Project";

import GroupsService from "../services/groups";

export class MainCtrl {

    public pageTitle: string;
    public content: string;


    constructor() {
        this.pageTitle = MAIN_TITLE;

        GroupsService.getInfo().then(function(response) {
            console.log(response);
        })

        // this.content = GroupsService.getGroupInfo();
        // 
        // console.log('GS: ', GroupsService.getGroupInfo());
        // this.groupsList.get().then(function(response) {
        //     console.log("Response ", response);
        // })

    }
}
