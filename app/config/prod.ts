import BaseConfig from './base';

export default class ProdConfig  extends BaseConfig {
    HTTP_API = 'http://nl-doors.nightlifr.com/api';
    WS_API = 'http://nl-doors.nightlifr.com/api/ws';
    COOKIES = { domain : '.nightlifr.com' };
    LOGIN_URL = "http://accounts.nightlifr.com/#/";
    LOGOUT_URL = "http://accounts.nightlifr.com/#/logout";
    ACCESS_DENIED_URL = "http://accounts.nightlifr.com/#/permission-denied";
}