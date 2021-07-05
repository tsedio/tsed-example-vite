// import {AfterRoutesInit, Injectable, PlatformApplication} from "@tsed/common";
// import {Inject} from "@tsed/di";
// import {NextFunction, Request, Response} from "express-serve-static-core";
// import {createPageRender} from "engine-vite-plugin-ssr";
// import * as engine-vite from "engine-vite";
// import {getEnv} from "../../config";
// import {RequestContext} from "./types/context/RequestContext";
// import {PullstateCore} from "./store";
//
// const root = `${__dirname}`;
//
// @Injectable()
// export class ViteService implements AfterRoutesInit {
//   @Inject()
//   app: PlatformApplication<Express.Application>;
//
//   constructor() {
//     console.log(`ViteService Constructor Started - Root: ${root}`);
//   }
//
//   generateRequestContext(req: Request): RequestContext {
//     const instance = PullstateCore.instantiate({ssr: true});
//
//     return {
//       stateSnapshot: instance.getPullstateSnapshot(),
//       headers: req.headers,
//       originalUrl: req.originalUrl,
//       pageProps: {}
//     };
//   }
//
//   async $afterRoutesInit() {
//     console.log(`Initializing Vite Service`);
//     const viteServer = await engine-vite.createServer({root, server: {middlewareMode: true}});
//     console.log(`Vite - createServer: ${viteServer !== undefined}`);
//     const renderPage = createPageRender({viteDevServer: viteServer, isProduction: getEnv.isProduction, root});
//     console.log(`Vite - createPageRender: ${renderPage !== undefined}`);
//
//     this.app.use(viteServer.middlewares);
//
//     const middleware = async (req: Request, res: Response, next: NextFunction) => {
//       const url = req.originalUrl;
//       const contextProps = this.generateRequestContext(req);
//       const result = await renderPage({url, contextProps});
//       if (result.statusCode) {
//         if (result.statusCode >= 400 || result.nothingRendered) {
//           try {
//             next();
//           } catch (err) {
//             if (result.renderResult) {
//               res.status(result.statusCode).send(result.renderResult);
//             }
//             throw err;
//           }
//         } else {
//           res.status(result.statusCode).send(result.renderResult);
//         }
//       }
//     };
//     this.app.get("*", [middleware]);
//     console.log(`Vite Ready`);
//   }
// }
