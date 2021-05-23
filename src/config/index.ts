import {join} from "path";
import {loggerConfig} from "./logger";
import appConfig, {AppConfigType as confType} from "./env";


const {version} = require("../../package.json");
export const rootDir = join(__dirname, "..");
export type AppConfigType = confType;
export const getEnv = appConfig;


export const config: Partial<TsED.Configuration> = {
  version,
  rootDir,
  logger: loggerConfig,
  acceptMimes: ["application/json"],
  httpPort: appConfig.PORT,
  httpsPort: false,
  // additional shared configuration
};
