import ReactDOMServer from "react-dom/server";
import React from "react";
import { PageLayout } from "./PageLayout";
import { html } from "vite-plugin-ssr";
import { ReactComponent } from "./types";
import {RequestContext} from "../../types/context/RequestContext";
import {PullstateCore} from "../../store";
import {PullstateProvider} from "pullstate";

export { render };
export { passToClient };

// See https://github.com/brillout/vite-plugin-ssr#data-fetching
// Passing stateSnapshot so that we can hydrate state on client side.
const passToClient = ["pageProps", "stateSnapshot"];

function render({ Page, contextProps}: {Page: ReactComponent; contextProps: RequestContext;}) {
  const instance = PullstateCore.instantiate({ ssr: true });
  instance.stores.UIStore.update(s => {
    s.theme.isDark = contextProps.session?.isDarkMode ? contextProps.session.isDarkMode : false;
  });
  const pageHtml = ReactDOMServer.renderToString(
    <PullstateProvider instance={instance}>
      <PageLayout>
        <Page {...contextProps.pageProps} />
      </PageLayout>
    </PullstateProvider>
  );
  const title = "My Vite SSR app";
  const description = "A Vite SSR app";
  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${html.dangerouslySetHtml(pageHtml)}</div>
      </body>
    </html>`;
}
