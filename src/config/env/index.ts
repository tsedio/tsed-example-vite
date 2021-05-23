import 'dotenv/config';
import {cleanEnv, port, str} from "envalid";

const appConfig = {
  NODE_ENV: str({default: "development"}),
  PORT: port({default: 8083})
}
function _appConfig() {
  return cleanEnv(process.env, appConfig);
}
export type AppConfigType = ReturnType<typeof _appConfig>

class AppConfig{
  private static instance: AppConfig;
  private readonly _conf: AppConfigType;
  private constructor() {
    this._conf = _appConfig();
  }

  public getConfig(): AppConfigType {
    return this._conf;
  }
  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }
}
export default AppConfig.getInstance().getConfig()
