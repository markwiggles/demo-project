class GroupsService {
    private qService: angular.IQService;
    private httpService: angular.IHttpService;
    private config: angular.IRequestShortcutConfig;

    private urlBase: string = "http://markw.devintranet.nightlife.com.au/apps/client_search/group_display/group_display_response.php?action=GET_ALL_GROUPS";

    constructor($q: ng.IQService, $http: ng.IHttpService) {
        this.qService = $q;
        this.config = {
            // headers: {
            //     "someheader": "somevalue"
            // }
        };
        this.httpService = $http;
    }

    getInfo(): ng.IPromise<Object[]> {
        var self = this;
        var deffered = self.qService.defer();
        self.httpService.get('./api/values.json', this.config).then((result: any): void => {
            if (result.status === 200) {
                deffered.resolve(result.data);
            } else {
                deffered.reject(result);
            }
        }, error => {
            deffered.reject(error);
        });

        return deffered.promise;
    }
}

GroupsService.$inject = ['$q', '$http'];

export default GroupsService;
