import { MAIN_TITLE, MainCtrl } from './main_ctrl';

let mainCtrl: MainCtrl;

describe('MainCtrl', () => {
    beforeEach(() => {
        mainCtrl = new MainCtrl();
    });
    
    it('should instantiate new controller with page title of "Seed Project". This is an example test.', () => {
        expect(mainCtrl).toBeDefined();   
        expect(mainCtrl.pageTitle).toBe(MAIN_TITLE);                     
    });        
});