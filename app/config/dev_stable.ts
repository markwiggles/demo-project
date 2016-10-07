import BaseConfig from './base';

export default class DevStableConfig extends BaseConfig {
    HTTP_API = 'http://dev-apps.nightlifr.com:8107/api'; 
    WS_API = 'http://dev-apps.nightlifr.com:8107/api/ws';
    COOKIES = { domain : 'localhost' };
    LOGIN_URL = "http://localhost:8101/#/";
    LOGOUT_URL = "http://localhost:8101/#/logout";
    ACCESS_DENIED_URL = "http://localhost:8101/#/permission-denied";
}