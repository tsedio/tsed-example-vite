import "reflect-metadata";
import {Configuration, Inject} from "@tsed/di";
import {PlatformApplication} from "@tsed/common";
import "@tsed/platform-express"; // /!\ keep this import
import "@tsedio/vite";
import bodyParser from "body-parser";
import compress from "compression";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import cors from "cors";
import session from "express-session";
import {config, rootDir} from "./config";
import {CreateRequestSessionMiddleware} from "./middlewares/CreateSessionMiddleware";

@Configuration({
  ...config,
  mount: {
    "/api": [`${rootDir}/controllers/api/**/*.ts`]
  },
  componentsScan: [`${rootDir}/services/**/**.ts`, `${rootDir}/middlewares/**/**.ts`],
  exclude: ["**/*.spec.ts"]
})
export class Server {
  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;

  $beforeRoutesInit(): void {
    this.app
      .use(cors())
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true
        })
      )
      .use(
        session({
          secret: "keyboard cat", // change secret key
          resave: false,
          saveUninitialized: true,
          cookie: {
            secure: false // set true if HTTPS is enabled
          }
        })
      )
      .use(CreateRequestSessionMiddleware);
  }
}
