import {join} from "path";
import {loggerConfig} from "./logger";
import appConfig from "./env";
import {viteConfig} from "./vite";

const {version} = require("../../../../package.json");

export const rootDir = join(__dirname, "..");
export const getEnv = appConfig;

export const config: Partial<TsED.Configuration> = {
  version,
  rootDir,
  logger: loggerConfig,
  acceptMimes: ["application/json"],
  httpPort: appConfig.PORT,
  httpsPort: false,
  vite: viteConfig
  // additional shared configuration
};
