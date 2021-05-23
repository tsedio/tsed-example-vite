import "reflect-metadata";
import {Configuration, Inject} from "@tsed/di";
import {PlatformApplication} from "@tsed/common";
import "@tsed/platform-express"; // /!\ keep this import
import bodyParser from "body-parser";
import compress from "compression";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import cors from "cors";
import session from "express-session";
import path from "path";
import {config, rootDir} from "./config";
import {ViteService} from "./services/ViteService";
import {CreateRequestSessionMiddleware} from "./middlewares/CreateSessionMiddleware";

const clientDir = path.join(rootDir, "../../client/build");

@Configuration({
    ...config,
    mount: {
        "/api": [`${rootDir}/controllers/api/**/*.ts`]
    },
    componentsScan: [
        `${rootDir}/services/**/**.ts`,
        `${rootDir}/middlewares/**/**.ts`
    ],
    exclude: ["**/*.spec.ts"],
    imports: [ViteService]
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
            .use(session({
                secret: "keyboard cat", // change secret key
                resave: false,
                saveUninitialized: true,
                cookie: {
                    secure: false // set true if HTTPS is enabled
                }
            }))
            .use(CreateRequestSessionMiddleware);
    }
}
