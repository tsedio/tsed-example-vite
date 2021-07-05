import {PlatformLoggerSettings, $log} from "@tsed/common";
import env from "../env";

if (env.isProduction) {
  $log.appenders.set("stdout", {
    type: "stdout",
    levels: ["info", "debug"],
    layout: {
      type: "json"
    }
  });

  $log.appenders.set("stderr", {
    levels: ["trace", "fatal", "error", "warn"],
    type: "stderr",
    layout: {
      type: "json"
    }
  });
}

export const loggerConfig: Partial<PlatformLoggerSettings> = {
  disableRoutesSummary: env.isProduction,
  level: env.isProduction ? "warn" : "info",
  logRequest: env.isProduction
};
