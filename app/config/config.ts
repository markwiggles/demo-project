import BaseConfig from './base';
import DevConfig from './dev';
import DevStableConfig from './dev_stable';
import ProdConfig from './prod';

const CONFIGURATIONS = {
    DEV: "Dev",
    DEV_STABLE: "DevStable",
    PROD: "Prod"
}

export default class Config extends BaseConfig {

    static config: BaseConfig;

    public static init() {

        switch (process.env.NL_ENV.trim()) {
            case CONFIGURATIONS.DEV:
                Config.config = new DevConfig();
                break;
            case CONFIGURATIONS.DEV_STABLE:
                Config.config = new DevStableConfig();
                break;
            case CONFIGURATIONS.PROD:
                Config.config = new ProdConfig();
                break;                
            default:
                Config.config = new DevConfig();
                break;
        }
    }
}